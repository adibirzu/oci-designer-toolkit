#!/usr/bin/python

# Copyright (c) 2020, 2024, Oracle and/or its affiliates.
# Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.

"""Provide Module Description
"""

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#
__author__ = ["Anderson Souza (Oracle Edge Cloud Engineering Solutions)"]
__version__ = "1.0.0.0"
__module__ = "okitExport"

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#

import base64
import os
import urllib
from flask import Blueprint
from flask import current_app
from flask import request
from flask import send_from_directory
from git import Repo
import json
import shutil
import tempfile
from werkzeug.utils import secure_filename

from common.okitCommon import logJson
from common.okitCommon import getOkitHome
from common.okitLogging import getLogger
from model.okitValidation import OCIJsonValidator
from generators.okitAnsibleGenerator import OCIAnsibleGenerator
from generators.okitTerraform11Generator import OCITerraform11Generator
from generators.okitTerraformGenerator import OCITerraformGenerator
from generators.okitResourceManagerGenerator import OCIResourceManagerGenerator
from generators.okitMarkdownGenerator import OkitMarkdownGenerator

# Configure logging
logger = getLogger()

bp = Blueprint('export', __name__, url_prefix='/okit/export', static_folder='static/okit')

debug_mode = bool(str(os.getenv('DEBUG_MODE', 'False')).title())
template_root = f'{getOkitHome()}/modules/templates'


def _safe_join_under(base_dir, *user_segments):
    """Safely join user-supplied path segments under base_dir.

    Resolves the final path to its canonical absolute form and verifies it
    remains a descendant of base_dir. Rejects any input containing path
    traversal sequences such as '..' or absolute paths that would escape
    the intended root. Returns the normalized absolute path on success.

    Raises PermissionError if the resolved path would escape base_dir.
    """
    base_abs = os.path.realpath(os.path.abspath(base_dir))

    # Sanitize each user-supplied segment: strip separators and reject any
    # segment that contains a parent-directory reference or is absolute.
    cleaned_segments = []
    for segment in user_segments:
        if segment is None:
            continue
        segment = str(segment).strip()
        if not segment:
            continue
        # Check for absolute paths BEFORE stripping separators so we catch
        # POSIX ('/etc'), Windows drive ('C:\\'), and backslash-prefixed paths.
        if (os.path.isabs(segment)
                or segment.startswith('\\')
                or (len(segment) >= 2 and segment[1] == ':')):
            raise PermissionError("Path traversal attempt detected: absolute path not allowed")
        segment = segment.strip('/').strip('\\')
        if not segment:
            continue
        # Split on both separators to catch mixed-separator inputs
        parts = segment.replace('\\', '/').split('/')
        for part in parts:
            if part in ('', '.'):
                continue
            if part == '..':
                raise PermissionError("Path traversal attempt detected: parent reference not allowed")
            cleaned_segments.append(part)

    candidate = os.path.realpath(os.path.abspath(os.path.join(base_abs, *cleaned_segments)))

    # Final verification: ensure candidate is base_abs or a descendant of it.
    # Compare with a trailing separator to avoid prefix collisions
    # (e.g. '/var/app' vs '/var/app-evil').
    base_with_sep = base_abs.rstrip(os.sep) + os.sep
    if candidate != base_abs and not candidate.startswith(base_with_sep):
        raise PermissionError("Path traversal attempt detected: resolved path escapes base directory")

    return candidate

@bp.route('terraform', methods=(['GET']))
def terraform():
    if request.method == 'GET':
        instance_path = current_app.instance_path
        root_dir = request.args.get('root_dir', default='/tmp')
        terraform_dir = request.args.get('terraform_dir', default='/tmp')
        destination = request.args.get('destination', default='zip')
        directory = request.args.get('directory', default='')
        design = json.loads(request.args.get('design', default='{}'))
        git = request.args.get('git', default=False)
        git_commit_msg = request.args.get('git_commit_msg', default='')
        add_suffix = True
        response_json = {}
        if destination == 'file':
            try:
                destination_dir = _safe_join_under(instance_path, root_dir, directory)
            except PermissionError as e:
                logger.warning(f'Rejected export request: {e} (root_dir={root_dir!r}, directory={directory!r})')
                return json.dumps({'error': 'Invalid destination path'}), 400, {'Content-Type': 'application/json'}
            add_suffix = False
        elif destination == 'git':
            destination_dir = '/tmp'
        else:
            destination_dir = tempfile.mkdtemp()
        logger.debug(f'Export To Terraform Instance Path {instance_path}')
        logger.debug(f'Export To Terraform Destination {destination}')
        logger.debug(f'Export To Terraform Root Directory {root_dir}')
        logger.debug(f'Export To Terraform Directory {directory}')
        logger.debug(f'Export To Terraform Destination Directory {destination_dir}')
        generator = OCITerraformGenerator(template_root, destination_dir, design, use_vars=False, add_suffix=add_suffix)
        generator.generate()
        if destination == 'file':
            response_json = generator.toJson()
            generator.writeFiles()
        elif destination == 'zip':
            generator.writeFiles()
            zipname = generator.createZipArchive(os.path.join(destination_dir, 'terraform'), "/tmp/okit-terraform")
            logger.debug('Zipfile : {0:s}'.format(str(zipname)))
            shutil.rmtree(destination_dir)
            filename = os.path.split(zipname)
            logger.debug('Split Zipfile : {0:s}'.format(str(filename)))
            return send_from_directory('/tmp', "okit-terraform.zip", mimetype='application/zip', as_attachment=True, cache_timeout=0)
        elif destination == 'json':
            response_json = generator.toJson()
        if git:
            try:
                full_directory_name = _safe_join_under(instance_path, root_dir, directory)
                # Derive the git repo dir from the validated full path rather than
                # re-joining unsanitized inputs.
                top_dir = os.path.normpath(os.path.dirname(directory.strip('/'))).split(os.sep)
                if len(top_dir) < 2 or '..' in top_dir:
                    raise PermissionError("Invalid git repository path structure")
                git_repo_dir = _safe_join_under(instance_path, root_dir, top_dir[0], top_dir[1])
            except PermissionError as e:
                logger.warning(f'Rejected git export request: {e}')
                return json.dumps({'error': 'Invalid git destination path'}), 400, {'Content-Type': 'application/json'}
            logger.debug(f'Git Root Dir : {git_repo_dir}')
            logger.debug(f'Directory : {directory}')
            logger.debug(f'Dest Directory : {full_directory_name}')
            repo = Repo(git_repo_dir)
            repo.remotes.origin.pull()
            repo.index.add(destination_dir)
            repo.index.commit("commit changes from okit:" + git_commit_msg)
            repo.remotes.origin.push()
        return json.dumps(response_json, sort_keys=False, indent=2, separators=(',', ': '))
    else:
        return '404'

@bp.route('markdown', methods=(['GET', 'POST']))
def markdown():
    if request.method == 'GET':
        design = json.loads(request.args.get('design', default='{}'))
        destination_dir = tempfile.mkdtemp()
        generator = OkitMarkdownGenerator(template_root, destination_dir, design)
        generator.generate()
        markdown = generator.toText()
        response = {"markdown": markdown}
        return json.dumps(response, sort_keys=False, indent=2, separators=(',', ': '))
    elif request.method == 'POST':
        design = request.json
        destination_dir = tempfile.mkdtemp()
        generator = OkitMarkdownGenerator(template_root, destination_dir, design)
        generator.generate()
        markdown = generator.toText()
        response = {"markdown": markdown}
        return json.dumps(response, sort_keys=False, indent=2, separators=(',', ': '))
    else:
        return '404'

@bp.route('resource-manager', methods=(['GET']))
def resourceManager():
    if request.method == 'GET':
        instance_path = current_app.instance_path
        root_dir = request.args.get('root_dir', default='/tmp')
        terraform_dir = request.args.get('terraform_dir', default='/tmp')
        destination = request.args.get('destination', default='zip')
        directory = request.args.get('directory', default='')
        design = json.loads(request.args.get('design', default='{}'))
        git = request.args.get('git', default=False)
        git_commit_msg = request.args.get('git_commit_msg', default='')
        add_suffix = True
        response_json = {}
        if destination == 'file':
            try:
                destination_dir = _safe_join_under(instance_path, root_dir, directory)
            except PermissionError as e:
                logger.warning(f'Rejected export request: {e} (root_dir={root_dir!r}, directory={directory!r})')
                return json.dumps({'error': 'Invalid destination path'}), 400, {'Content-Type': 'application/json'}
            add_suffix = False
        elif destination == 'git':
            destination_dir = '/tmp'
        else:
            destination_dir = tempfile.mkdtemp()
        logger.debug(f'Export To RM Terraform Instance Path {instance_path}')
        logger.debug(f'Export To Terraform Destination {destination}')
        logger.debug(f'Export To Terraform Root Directory {root_dir}')
        logger.debug(f'Export To Terraform Directory {directory}')
        logger.debug(f'Export To Terraform Destination Directory {destination_dir}')
        generator = OCIResourceManagerGenerator(template_root, destination_dir, design, use_vars=False)
        generator.generate()
        if destination == 'file':
            response_json = generator.toJson()
            generator.writeFiles()
        elif destination == 'zip':
            generator.writeFiles()
            zipname = generator.createZipArchive(os.path.join(destination_dir, 'resource-manager'), "/tmp/okit-resource-manager")
            logger.debug('Zipfile : {0:s}'.format(str(zipname)))
            shutil.rmtree(destination_dir)
            filename = os.path.split(zipname)
            logger.debug('Split Zipfile : {0:s}'.format(str(filename)))
            return send_from_directory('/tmp', "okit-resource-manager.zip", mimetype='application/zip', as_attachment=True)
        elif destination == 'json':
            response_json = generator.toJson()
        if git:
            try:
                full_directory_name = _safe_join_under(instance_path, root_dir, directory)
                top_dir = os.path.normpath(os.path.dirname(directory.strip('/'))).split(os.sep)
                if len(top_dir) < 2 or '..' in top_dir:
                    raise PermissionError("Invalid git repository path structure")
                git_repo_dir = _safe_join_under(instance_path, root_dir, top_dir[0], top_dir[1])
            except PermissionError as e:
                logger.warning(f'Rejected git export request: {e}')
                return json.dumps({'error': 'Invalid git destination path'}), 400, {'Content-Type': 'application/json'}
            logger.debug(f'Git Root Dir : {git_repo_dir}')
            logger.debug(f'Directory : {directory}')
            logger.debug(f'Dest Directory : {full_directory_name}')
            repo = Repo(git_repo_dir)
            repo.remotes.origin.pull()
            repo.index.add(destination_dir)
            repo.index.commit("commit changes from okit:" + git_commit_msg)
            repo.remotes.origin.push()
        return json.dumps(response_json, sort_keys=False, indent=2, separators=(',', ': '))
    else:
        return '404'

