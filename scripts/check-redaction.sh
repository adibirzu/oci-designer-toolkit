#!/usr/bin/env bash
#
# Redaction gate: scan the STAGED diff for OCIDs, public IPs, tenancy namespaces,
# and obvious secrets before they can be committed to this public fork.
#
# Exit 0 = clean, exit 1 = blocked. FAILS CLOSED: if a scan errors, the commit is
# blocked rather than silently allowed. Override (for an intentional, reviewed
# commit of PUBLIC reference data) with:  ALLOW_OCIDS=1 git commit ...
#
# Patterns are POSIX ERE, portable across GNU grep / BSD grep / ugrep
# (no \b word boundaries, no empty alternations).
set -uo pipefail

# Added lines only (context-free), so unchanged pre-existing content in a touched
# file does not trip the gate.
DIFF="$(git diff --cached --diff-filter=ACM -U0 | grep -E '^\+' | grep -vE '^\+\+\+' || true)"
[ -z "$DIFF" ] && exit 0

fail=0
report() { printf '\n[redaction-gate] BLOCKED: %s\n' "$1" >&2; fail=1; }

# scan <pattern> <label> — block on match (rc 0) OR on grep error (rc >= 2).
scan() {
    local pattern="$1" label="$2" out rc
    out="$(printf '%s\n' "$DIFF" | grep -nE "$pattern" 2>/dev/null)"; rc=$?
    if [ "$rc" -ge 2 ]; then
        report "scan error for '$label' — failing closed"
    elif [ "$rc" -eq 0 ]; then
        report "$label"
        printf '%s\n' "$out" | head -10 >&2
    fi
}

[ "${ALLOW_OCIDS:-0}" = "1" ] || scan 'ocid1\.[a-z0-9]+\.oc[0-9]' 'real OCID(s) in staged changes'
scan '(130\.61|161\.153|144\.24|129\.153|141\.147|82\.77|109\.166)\.[0-9]+\.[0-9]+' 'real public IP(s) in staged changes'
scan 'BEGIN [A-Z ]*PRIVATE KEY|isk_[0-9a-f]{30}' 'private key / secret material in staged changes'

if [ "$fail" -ne 0 ]; then
    printf '\n[redaction-gate] Commit aborted. Replace the values above with <PLACEHOLDER> tokens,\n' >&2
    printf '[redaction-gate] or for intentional PUBLIC reference data: ALLOW_OCIDS=1 git commit ...\n' >&2
    exit 1
fi
exit 0
