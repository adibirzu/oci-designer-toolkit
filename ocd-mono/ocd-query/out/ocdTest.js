import { OcdOCIQuery } from "./ociQuery.js";
const configFile = '~/.oci/config';
const profile = 'DEFAULT';
const ocid = 'ocid1.compartment.oc1..example';
const request = {
    configFilePath: configFile,
    profile: profile,
    compartmentId: ocid
};
const ociQuery = new OcdOCIQuery();
ociQuery.query(request);
