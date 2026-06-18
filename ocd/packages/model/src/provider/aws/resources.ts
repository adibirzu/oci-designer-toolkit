/*
** Copyright (c) 2020, 2024, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

/*
** Hand-authored AWS model resource barrel (there is no codegen for AWS — each
** resource namespace is self-contained, see ./resources/AwsVpc.ts).
*/

export { AwsVpc } from './resources/AwsVpc.js'
export { AwsSubnet } from './resources/AwsSubnet.js'
export { AwsInternetGateway } from './resources/AwsInternetGateway.js'
export { AwsSecurityGroup } from './resources/AwsSecurityGroup.js'
export { AwsInstance } from './resources/AwsInstance.js'
