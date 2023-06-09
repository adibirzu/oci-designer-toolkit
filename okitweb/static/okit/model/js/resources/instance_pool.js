/*
** Copyright (c) 2020, 2022, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/
console.debug('Loaded Instance Pool Javascript');

/*
** Define Instance Pool Class
*/
class InstancePool extends OkitArtifact {
    /*
    ** Create
    */
    constructor (data={}, okitjson={}) {
        super(okitjson);
        // Configure default values
        this.compartment_id = data.parent_id;
        /*
        ** TODO: Add Resource / Artefact specific parameters and default
        */
        // Update with any passed data
        this.merge(data);
        this.convert();
        // TODO: If the Resource is within a Subnet but the subnet_iss is not at the top level then raise it with the following functions if not required delete them.
        // Expose subnet_id at the top level
        Object.defineProperty(this, 'subnet_id', {get: function() {return this.primary_mount_target.subnet_id;}, set: function(id) {this.primary_mount_target.subnet_id = id;}, enumerable: false });
    }
    /*
    ** Name Generation
    */
    getNamePrefix() {
        return super.getNamePrefix() + 'ip';
    }
    /*
    ** Static Functionality
    */
    static getArtifactReference() {
        return 'Instance Pool';
    }
}
/*
** Dynamically Add Model Functions
*/
OkitJson.prototype.newInstancePool = function(data) {
    this.getInstancePools().push(new InstancePool(data, this));
    return this.getInstancePools()[this.getInstancePools().length - 1];
}
OkitJson.prototype.getInstancePools = function() {
    if (!this.instance_pools) this.instance_pools = []
    return this.instance_pools;
}
OkitJson.prototype.getInstancePool = function(id='') {
    return this.getInstancePools().find(r => r.id === id)
}
OkitJson.prototype.deleteInstancePool = function(id) {
    this.instance_pools = this.instance_pools ? this.instance_pools.filter((r) => r.id !== id) : []
}

