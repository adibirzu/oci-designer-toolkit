/*
** Copyright (c) 2020, 2024, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { OcdDesign } from "@ocd/model"
import { OcdTerraformImporter } from "@ocd/import"
import { OcdDesignerBrowserActions } from "../actions/OcdDesignBrowserActions"

/*
** Facade exists so we can switch between Electron based and Web based which will require a web server
*/

/*
** Browser file picker + reader. Lets web-build features (e.g. Terraform import)
** work without Electron: the parser is dependency-free, only the native file
** dialog / fs read is Electron-specific.
*/
const pickAndReadTextFiles = (accept: string, multiple = true): Promise<{ canceled: boolean; filename: string; text: string }> =>
    new Promise((resolve) => {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = accept
        input.multiple = multiple
        input.style.display = 'none'
        input.addEventListener('change', () => {
            const files = Array.from(input.files || [])
            if (files.length === 0) {
                resolve({ canceled: true, filename: '', text: '' })
            } else {
                Promise.all(files.map((f) => f.text()))
                    .then((texts) => resolve({ canceled: false, filename: files[0].name, text: texts.join('\n') }))
                    .catch(() => resolve({ canceled: true, filename: '', text: '' }))
            }
            input.remove()
        })
        input.addEventListener('cancel', () => { resolve({ canceled: true, filename: '', text: '' }); input.remove() })
        document.body.appendChild(input)
        input.click()
    })

export namespace OcdDesignFacade {
    export const loadDesign = (filename: string): Promise<any> => {
        return window.ocdAPI ? window.ocdAPI.loadDesign(filename) : OcdDesignerBrowserActions.loadDesign(filename)
    }
    export const saveDesign = (design: OcdDesign, filename: string, suggestedFilename: string = ''): Promise<any> => {
        console.debug('OcdDesignFacade: saveDesign', filename, JSON.stringify(design, null, 2))
        return window.ocdAPI ? window.ocdAPI.saveDesign(JSON.stringify(design, null, 2), filename, suggestedFilename) : OcdDesignerBrowserActions.saveDesign(design, filename)
    }
    export const discardConfirmation = (): Promise<any> => {
        return window.ocdAPI ? window.ocdAPI.discardConfirmation() : OcdDesignerBrowserActions.discardConfirmation()
    }
    export const loadLibraryIndex = (): Promise<any> => {
        return window.ocdAPI ? window.ocdAPI.loadLibraryIndex() : Promise.reject(new Error('Currently Not Implemented'))
    }
    export const loadLibraryDesign = (section: string, filename: string): Promise<any> => {
        return window.ocdAPI ? window.ocdAPI.loadLibraryDesign(section, filename) : Promise.reject(new Error('Currently Not Implemented'))
    }
    export const loadSvgCssFiles = (): Promise<any> => {
        return window.ocdAPI ? window.ocdAPI.loadSvgCssFiles() : Promise.reject(new Error('Currently Not Implemented'))
    }
    export const exportTerraform = (design: OcdDesign, directory: string): Promise<any> => {
        return window.ocdAPI ? window.ocdAPI.exportTerraform(design, directory) : Promise.reject(new Error('Currently Not Implemented'))
    }
    export const exportToExcel = (design: OcdDesign, suggestedFilename: string = ''): Promise<any> => {
        return window.ocdAPI ? window.ocdAPI.exportToExcel(design, suggestedFilename) : Promise.reject(new Error('Currently Not Implemented'))
    }
    export const exportToMarkdown = (design: OcdDesign, css: string[], suggestedFilename: string = ''): Promise<any> => {
        return window.ocdAPI ? window.ocdAPI.exportToMarkdown(design, css, suggestedFilename) : Promise.reject(new Error('Currently Not Implemented'))
    }
    export const exportToSvg = (design: OcdDesign, css: string[], directory: string, suggestedFilename: string = ''): Promise<any> => {
        return window.ocdAPI ? window.ocdAPI.exportToSvg(design, css, directory, suggestedFilename) : Promise.reject(new Error('Currently Not Implemented'))
    }
    export const exportToTerraform = (design: OcdDesign, directory: string): Promise<any> => {
        return window.ocdAPI ? window.ocdAPI.exportToTerraform(design, directory) : Promise.reject(new Error('Currently Not Implemented'))
    }
    export const importFromTerraform = (): Promise<any> => {
        if (window.ocdAPI) return window.ocdAPI.importFromTerraform()
        // Web path: pick .tf/.tf.json files in the browser and parse them with the
        // dependency-free importer (same one the Electron main process uses).
        return pickAndReadTextFiles('.tf,.tf.json,.json').then(({ canceled, filename, text }) => {
            if (canceled || !text.trim()) return { canceled: true, filename: '', design: undefined }
            const importer = new OcdTerraformImporter()
            return { canceled: false, filename, design: importer.import(text) }
        })
    }
}
