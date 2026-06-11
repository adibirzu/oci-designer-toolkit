#!/usr/bin/env python3
"""Run the full local audit for the generated observability Landing Zone add-on."""

from __future__ import annotations

import hashlib

import re
import subprocess
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ADDON_ROOT = ROOT / "addons" / "oci-observability-end-to-end"
DIST_ROOT = ADDON_ROOT / "dist"
class _PrivateNamespacePattern:
    """Match private identifier fingerprints without retaining their inputs."""
    def __init__(self, entries, boundary=True):
        self.entries = tuple(entries)
        self.boundary = boundary

    def finditer(self, text):
        cursor = 0
        while cursor < len(text):
            matched = 0
            if not self.boundary or cursor == 0 or not (text[cursor - 1].isalnum() or text[cursor - 1] == "_"):
                for digest, width in self.entries:
                    stop = cursor + width
                    if stop > len(text):
                        continue
                    if self.boundary and stop < len(text) and (text[stop].isalnum() or text[stop] == "_"):
                        continue
                    if hashlib.sha256(text[cursor:stop].lower().encode()).hexdigest() == digest:
                        matched = width
                        break
            if matched:
                yield re.compile(re.escape(text[cursor:cursor + matched])).match(text, cursor)
                cursor += matched
            else:
                cursor += 1

    def search(self, text):
        return next(self.finditer(text), None)

    def sub(self, replacement, text):
        output = []
        cursor = 0
        for match in self.finditer(text):
            output.extend((text[cursor:match.start()], replacement))
            cursor = match.end()
        output.append(text[cursor:])
        return "".join(output)


class _PrivateCombinedPattern:
    def __init__(self, ordinary, private):
        self.ordinary = ordinary
        self.private = private

    def search(self, text):
        matches = [match for match in (self.ordinary.search(text), self.private.search(text)) if match]
        return min(matches, key=lambda match: match.start()) if matches else None


SENSITIVE_NAME_FRAGMENTS = (('5764d2ac137cbb20013ad9af899e574470ce26e8dced52a4f168a571f768f62d', 12), ('f402141310e08d15aa58eec2859097725051705f5bc578255ac0d912038374b3', 26), ('0f38d94001c2cfab0f32713bd86099b6b2039056f407d168fb2f7a5d26e9fb02', 12), ('d2d2deaecc2445e6ffb86631616643d43c19399aeacea2209a30cffb2f2c6ec6', 12), ('fc50c4fceff52b6afec019d07e0a70c7a3a71c62a27f40336bf0ab7dd403d240', 12))
REDACTION_PATTERN = _PrivateCombinedPattern(re.compile(
    r"ocid1\.(tenancy|compartment|instance|cluster|networksecuritygroup|loadbalancer|subnet|vnic|bootvolume|loganalytics[a-z]+|user)\.oc1\.[a-z]*\.[a-z0-9]+"
    r"|\b(130\.61|161\.153|144\.24|129\.153|141\.147|82\.77|109\.166)\.[0-9]+\.[0-9]+\b"
    r"|\b(" + "(?!)" + r")\b"
    r"|isk_[a-f0-9]{40}",
    re.IGNORECASE,
), _PrivateNamespacePattern(SENSITIVE_NAME_FRAGMENTS))
SCAN_ROOTS = [
    ROOT / "scripts",
    ROOT / "docs",
    ROOT / "examples",
    ROOT / "addons",
    ROOT / "baselines" / "oci-landing-zones.json",
    ROOT / "baselines" / "oci-landing-zones.lock.json",
    ROOT / "ocd" / "library" / "oci",
]
EXPECTED_ZIP_FILES = {
    "README_RESOURCE_MANAGER.md",
    "architecture.drawio",
    "cost-estimate.json",
    "main.tf.json",
    "observability.auto.tfvars.json",
    "okit-resource-manager-manifest.json",
    "usage-api-query.json",
}


def run(command: list[str]) -> None:
    subprocess.run(command, cwd=ROOT, check=True)


def scan_path(path: Path) -> None:
    if path.is_dir():
        for child in path.rglob("*"):
            if child.is_file() and not any(part in {".git", ".terraform", "dist"} for part in child.parts):
                scan_path(child)
        return
    if not path.exists() or path.suffix in {".png", ".jpg", ".jpeg", ".zip"}:
        return
    text = path.read_text(encoding="utf-8", errors="ignore")
    if REDACTION_PATTERN.search(text):
        raise RuntimeError(f"redaction-sensitive value found in {path.relative_to(ROOT)}")


def scan_redactions() -> None:
    for root in SCAN_ROOTS:
        scan_path(root)
    print("redaction scan passed")


def validate_zips() -> None:
    zip_paths = sorted(DIST_ROOT.glob("oci-observability-lz-*-rms.zip"))
    if len(zip_paths) != 2:
        raise RuntimeError(f"expected 2 Resource Manager ZIPs, found {len(zip_paths)}")
    for zip_path in zip_paths:
        with zipfile.ZipFile(zip_path) as archive:
            names = set(archive.namelist())
        if names != EXPECTED_ZIP_FILES:
            raise RuntimeError(f"{zip_path.relative_to(ROOT)} has unexpected files: {sorted(names)}")
        if any(name.startswith(".terraform") or name.endswith(".terraform.lock.hcl") for name in names):
            raise RuntimeError(f"{zip_path.relative_to(ROOT)} contains Terraform runtime artifacts")
        print(f"zip audit passed {zip_path.relative_to(ROOT)}")


def main() -> int:
    run(["python", "scripts/validate_observability_lz_library.py"])
    run(["python", "scripts/validate_observability_lz_terraform.py"])
    run(["python", "scripts/package_observability_lz_addon.py"])
    run(["python", "scripts/estimate_observability_lz_costs.py", "--profile", "all"])
    validate_zips()
    scan_redactions()
    run(["git", "diff", "--check"])
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
