import { OciQueryRequest, OcdOCIQuery } from "./ociQuery.js"

const configFile: string = '~/.oci/config'
const profile: string = 'DEFAULT'
const ocid: string = 'ocid1.compartment.oc1..example'
const request: OciQueryRequest = {
    configFilePath: configFile,
    profile: profile,
    compartmentId: ocid
}
const ociQuery: OcdOCIQuery = new OcdOCIQuery()

ociQuery.query(request)
