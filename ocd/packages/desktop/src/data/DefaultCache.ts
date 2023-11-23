/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/
/*
**
** ======================================================================
** === Auto Generated Code All Edits Will Be Lost During Regeneration ===
** ======================================================================
**
*/

import { OcdCache } from "../components/OcdCache";

export const defaultCache: OcdCache = {
    profile: 'DEFAULT',
    region: '',
    dropdownData: {
        shipped: {
            all: {
                "shape": [
                    {
                        "id": "BM.Standard.A1.160",
                        "displayName": "BM.Standard.A1.160",
                        "shape": "BM.Standard.A1.160",
                        "ocpus": 160,
                        "memoryInGBs": 1024,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.Standard3.64",
                        "displayName": "BM.Standard3.64",
                        "shape": "BM.Standard3.64",
                        "ocpus": 64,
                        "memoryInGBs": 1024,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.Standard2.52",
                        "displayName": "BM.Standard2.52",
                        "shape": "BM.Standard2.52",
                        "ocpus": 52,
                        "memoryInGBs": 768,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.Optimized3.36",
                        "displayName": "BM.Optimized3.36",
                        "shape": "BM.Optimized3.36",
                        "ocpus": 36,
                        "memoryInGBs": 512,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.DenseIO.E4.128",
                        "displayName": "BM.DenseIO.E4.128",
                        "shape": "BM.DenseIO.E4.128",
                        "ocpus": 128,
                        "memoryInGBs": 2048,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.Standard.E4.128",
                        "displayName": "BM.Standard.E4.128",
                        "shape": "BM.Standard.E4.128",
                        "ocpus": 128,
                        "memoryInGBs": 2048,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.Standard.E3.128",
                        "displayName": "BM.Standard.E3.128",
                        "shape": "BM.Standard.E3.128",
                        "ocpus": 128,
                        "memoryInGBs": 2048,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.Standard.E2.64",
                        "displayName": "BM.Standard.E2.64",
                        "shape": "BM.Standard.E2.64",
                        "ocpus": 64,
                        "memoryInGBs": 512,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.DenseIO2.52",
                        "displayName": "BM.DenseIO2.52",
                        "shape": "BM.DenseIO2.52",
                        "ocpus": 52,
                        "memoryInGBs": 768,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.Standard1.36",
                        "displayName": "BM.Standard1.36",
                        "shape": "BM.Standard1.36",
                        "ocpus": 36,
                        "memoryInGBs": 256,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Optimized3.Flex",
                        "displayName": "VM.Optimized3.Flex",
                        "shape": "VM.Optimized3.Flex",
                        "ocpus": 1,
                        "memoryInGBs": 14,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 18,
                            "maxPerNumaNode": 18
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 256,
                            "defaultPerOcpuInGBs": 14,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 256
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.Standard.E4.Flex",
                        "displayName": "VM.Standard.E4.Flex",
                        "shape": "VM.Standard.E4.Flex",
                        "ocpus": 1,
                        "memoryInGBs": 16,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 114,
                            "maxPerNumaNode": 64
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 1760,
                            "defaultPerOcpuInGBs": 16,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 1024
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.Standard.E3.Flex",
                        "displayName": "VM.Standard.E3.Flex",
                        "shape": "VM.Standard.E3.Flex",
                        "ocpus": 1,
                        "memoryInGBs": 16,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 114,
                            "maxPerNumaNode": 64
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 1776,
                            "defaultPerOcpuInGBs": 16,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 1024
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.Standard.A1.Flex",
                        "displayName": "VM.Standard.A1.Flex",
                        "shape": "VM.Standard.A1.Flex",
                        "ocpus": 1,
                        "memoryInGBs": 6,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 80,
                            "maxPerNumaNode": 80
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 512,
                            "defaultPerOcpuInGBs": 6,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 512
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.Standard2.1",
                        "displayName": "VM.Standard2.1",
                        "shape": "VM.Standard2.1",
                        "ocpus": 1,
                        "memoryInGBs": 15,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard2.2",
                        "displayName": "VM.Standard2.2",
                        "shape": "VM.Standard2.2",
                        "ocpus": 2,
                        "memoryInGBs": 30,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard2.4",
                        "displayName": "VM.Standard2.4",
                        "shape": "VM.Standard2.4",
                        "ocpus": 4,
                        "memoryInGBs": 60,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard2.8",
                        "displayName": "VM.Standard2.8",
                        "shape": "VM.Standard2.8",
                        "ocpus": 8,
                        "memoryInGBs": 120,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard2.16",
                        "displayName": "VM.Standard2.16",
                        "shape": "VM.Standard2.16",
                        "ocpus": 16,
                        "memoryInGBs": 240,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard2.24",
                        "displayName": "VM.Standard2.24",
                        "shape": "VM.Standard2.24",
                        "ocpus": 24,
                        "memoryInGBs": 320,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard.E2.1",
                        "displayName": "VM.Standard.E2.1",
                        "shape": "VM.Standard.E2.1",
                        "ocpus": 1,
                        "memoryInGBs": 8,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard.E2.2",
                        "displayName": "VM.Standard.E2.2",
                        "shape": "VM.Standard.E2.2",
                        "ocpus": 2,
                        "memoryInGBs": 16,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard.E2.4",
                        "displayName": "VM.Standard.E2.4",
                        "shape": "VM.Standard.E2.4",
                        "ocpus": 4,
                        "memoryInGBs": 32,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard.E2.8",
                        "displayName": "VM.Standard.E2.8",
                        "shape": "VM.Standard.E2.8",
                        "ocpus": 8,
                        "memoryInGBs": 64,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard3.Flex",
                        "displayName": "VM.Standard3.Flex",
                        "shape": "VM.Standard3.Flex",
                        "ocpus": 1,
                        "memoryInGBs": 16,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 56,
                            "maxPerNumaNode": 32
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 896,
                            "defaultPerOcpuInGBs": 16,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 512
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.DenseIO2.8",
                        "displayName": "VM.DenseIO2.8",
                        "shape": "VM.DenseIO2.8",
                        "ocpus": 8,
                        "memoryInGBs": 120,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.DenseIO2.16",
                        "displayName": "VM.DenseIO2.16",
                        "shape": "VM.DenseIO2.16",
                        "ocpus": 16,
                        "memoryInGBs": 240,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.DenseIO2.24",
                        "displayName": "VM.DenseIO2.24",
                        "shape": "VM.DenseIO2.24",
                        "ocpus": 24,
                        "memoryInGBs": 320,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard1.1",
                        "displayName": "VM.Standard1.1",
                        "shape": "VM.Standard1.1",
                        "ocpus": 1,
                        "memoryInGBs": 7,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard1.2",
                        "displayName": "VM.Standard1.2",
                        "shape": "VM.Standard1.2",
                        "ocpus": 2,
                        "memoryInGBs": 14,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard1.4",
                        "displayName": "VM.Standard1.4",
                        "shape": "VM.Standard1.4",
                        "ocpus": 4,
                        "memoryInGBs": 28,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard1.8",
                        "displayName": "VM.Standard1.8",
                        "shape": "VM.Standard1.8",
                        "ocpus": 8,
                        "memoryInGBs": 56,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard1.16",
                        "displayName": "VM.Standard1.16",
                        "shape": "VM.Standard1.16",
                        "ocpus": 16,
                        "memoryInGBs": 112,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.DenseIO.E4.Flex",
                        "displayName": "VM.DenseIO.E4.Flex",
                        "shape": "VM.DenseIO.E4.Flex",
                        "ocpus": 1,
                        "memoryInGBs": 16,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 64,
                            "maxPerNumaNode": 64
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 1024,
                            "defaultPerOcpuInGBs": 16,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 1024
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.Standard.AMD.Generic",
                        "displayName": "VM.Standard.AMD.Generic",
                        "shape": "VM.Standard.AMD.Generic",
                        "ocpus": 1,
                        "memoryInGBs": 16,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 64,
                            "maxPerNumaNode": 64
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 1024,
                            "defaultPerOcpuInGBs": null,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 1024
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.Standard.Ampere.Generic",
                        "displayName": "VM.Standard.Ampere.Generic",
                        "shape": "VM.Standard.Ampere.Generic",
                        "ocpus": 1,
                        "memoryInGBs": 6,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 80,
                            "maxPerNumaNode": 80
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 512,
                            "defaultPerOcpuInGBs": null,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 512
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.Standard.Intel.Generic",
                        "displayName": "VM.Standard.Intel.Generic",
                        "shape": "VM.Standard.Intel.Generic",
                        "ocpus": 1,
                        "memoryInGBs": 16,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 32,
                            "maxPerNumaNode": 32
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 512,
                            "defaultPerOcpuInGBs": null,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 512
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.Standard.x86.Generic",
                        "displayName": "VM.Standard.x86.Generic",
                        "shape": "VM.Standard.x86.Generic",
                        "ocpus": 1,
                        "memoryInGBs": 16,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 32,
                            "maxPerNumaNode": 32
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 512,
                            "defaultPerOcpuInGBs": null,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 512
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "BM.Standard.E5.192",
                        "displayName": "BM.Standard.E5.192",
                        "shape": "BM.Standard.E5.192",
                        "ocpus": 192,
                        "memoryInGBs": 2304,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.Standard.A1.160",
                        "displayName": "BM.Standard.A1.160",
                        "shape": "BM.Standard.A1.160",
                        "ocpus": 160,
                        "memoryInGBs": 1024,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.Standard3.64",
                        "displayName": "BM.Standard3.64",
                        "shape": "BM.Standard3.64",
                        "ocpus": 64,
                        "memoryInGBs": 1024,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.Standard2.52",
                        "displayName": "BM.Standard2.52",
                        "shape": "BM.Standard2.52",
                        "ocpus": 52,
                        "memoryInGBs": 768,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.Optimized3.36",
                        "displayName": "BM.Optimized3.36",
                        "shape": "BM.Optimized3.36",
                        "ocpus": 36,
                        "memoryInGBs": 512,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.DenseIO.E4.128",
                        "displayName": "BM.DenseIO.E4.128",
                        "shape": "BM.DenseIO.E4.128",
                        "ocpus": 128,
                        "memoryInGBs": 2048,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.Standard.E4.128",
                        "displayName": "BM.Standard.E4.128",
                        "shape": "BM.Standard.E4.128",
                        "ocpus": 128,
                        "memoryInGBs": 2048,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.Standard.E3.128",
                        "displayName": "BM.Standard.E3.128",
                        "shape": "BM.Standard.E3.128",
                        "ocpus": 128,
                        "memoryInGBs": 2048,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.Standard.E2.64",
                        "displayName": "BM.Standard.E2.64",
                        "shape": "BM.Standard.E2.64",
                        "ocpus": 64,
                        "memoryInGBs": 512,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.DenseIO2.52",
                        "displayName": "BM.DenseIO2.52",
                        "shape": "BM.DenseIO2.52",
                        "ocpus": 52,
                        "memoryInGBs": 768,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Optimized3.Flex",
                        "displayName": "VM.Optimized3.Flex",
                        "shape": "VM.Optimized3.Flex",
                        "ocpus": 1,
                        "memoryInGBs": 14,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 18,
                            "maxPerNumaNode": 18
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 256,
                            "defaultPerOcpuInGBs": 14,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 256
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.Standard.E4.Flex",
                        "displayName": "VM.Standard.E4.Flex",
                        "shape": "VM.Standard.E4.Flex",
                        "ocpus": 1,
                        "memoryInGBs": 16,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 114,
                            "maxPerNumaNode": 64
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 1760,
                            "defaultPerOcpuInGBs": 16,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 1024
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.Standard.E3.Flex",
                        "displayName": "VM.Standard.E3.Flex",
                        "shape": "VM.Standard.E3.Flex",
                        "ocpus": 1,
                        "memoryInGBs": 16,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 114,
                            "maxPerNumaNode": 64
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 1776,
                            "defaultPerOcpuInGBs": 16,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 1024
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.Standard.A1.Flex",
                        "displayName": "VM.Standard.A1.Flex",
                        "shape": "VM.Standard.A1.Flex",
                        "ocpus": 1,
                        "memoryInGBs": 6,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 80,
                            "maxPerNumaNode": 80
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 512,
                            "defaultPerOcpuInGBs": 6,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 512
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.Standard2.1",
                        "displayName": "VM.Standard2.1",
                        "shape": "VM.Standard2.1",
                        "ocpus": 1,
                        "memoryInGBs": 15,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard2.2",
                        "displayName": "VM.Standard2.2",
                        "shape": "VM.Standard2.2",
                        "ocpus": 2,
                        "memoryInGBs": 30,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard2.4",
                        "displayName": "VM.Standard2.4",
                        "shape": "VM.Standard2.4",
                        "ocpus": 4,
                        "memoryInGBs": 60,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard2.8",
                        "displayName": "VM.Standard2.8",
                        "shape": "VM.Standard2.8",
                        "ocpus": 8,
                        "memoryInGBs": 120,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard2.16",
                        "displayName": "VM.Standard2.16",
                        "shape": "VM.Standard2.16",
                        "ocpus": 16,
                        "memoryInGBs": 240,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard2.24",
                        "displayName": "VM.Standard2.24",
                        "shape": "VM.Standard2.24",
                        "ocpus": 24,
                        "memoryInGBs": 320,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard.E2.1",
                        "displayName": "VM.Standard.E2.1",
                        "shape": "VM.Standard.E2.1",
                        "ocpus": 1,
                        "memoryInGBs": 8,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard.E2.2",
                        "displayName": "VM.Standard.E2.2",
                        "shape": "VM.Standard.E2.2",
                        "ocpus": 2,
                        "memoryInGBs": 16,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard.E2.4",
                        "displayName": "VM.Standard.E2.4",
                        "shape": "VM.Standard.E2.4",
                        "ocpus": 4,
                        "memoryInGBs": 32,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard.E2.8",
                        "displayName": "VM.Standard.E2.8",
                        "shape": "VM.Standard.E2.8",
                        "ocpus": 8,
                        "memoryInGBs": 64,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard3.Flex",
                        "displayName": "VM.Standard3.Flex",
                        "shape": "VM.Standard3.Flex",
                        "ocpus": 1,
                        "memoryInGBs": 16,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 56,
                            "maxPerNumaNode": 32
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 896,
                            "defaultPerOcpuInGBs": 16,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 512
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.DenseIO2.8",
                        "displayName": "VM.DenseIO2.8",
                        "shape": "VM.DenseIO2.8",
                        "ocpus": 8,
                        "memoryInGBs": 120,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.DenseIO2.16",
                        "displayName": "VM.DenseIO2.16",
                        "shape": "VM.DenseIO2.16",
                        "ocpus": 16,
                        "memoryInGBs": 240,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.DenseIO2.24",
                        "displayName": "VM.DenseIO2.24",
                        "shape": "VM.DenseIO2.24",
                        "ocpus": 24,
                        "memoryInGBs": 320,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.DenseIO.E4.Flex",
                        "displayName": "VM.DenseIO.E4.Flex",
                        "shape": "VM.DenseIO.E4.Flex",
                        "ocpus": 1,
                        "memoryInGBs": 16,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 64,
                            "maxPerNumaNode": 64
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 1024,
                            "defaultPerOcpuInGBs": 16,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 1024
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.Standard.E5.Flex",
                        "displayName": "VM.Standard.E5.Flex",
                        "shape": "VM.Standard.E5.Flex",
                        "ocpus": 1,
                        "memoryInGBs": 12,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 94,
                            "maxPerNumaNode": 94
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 1049,
                            "defaultPerOcpuInGBs": 12,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 1049
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.Standard.AMD.Generic",
                        "displayName": "VM.Standard.AMD.Generic",
                        "shape": "VM.Standard.AMD.Generic",
                        "ocpus": 1,
                        "memoryInGBs": 16,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 64,
                            "maxPerNumaNode": 64
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 1024,
                            "defaultPerOcpuInGBs": null,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 1024
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.Standard.Ampere.Generic",
                        "displayName": "VM.Standard.Ampere.Generic",
                        "shape": "VM.Standard.Ampere.Generic",
                        "ocpus": 1,
                        "memoryInGBs": 6,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 80,
                            "maxPerNumaNode": 80
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 512,
                            "defaultPerOcpuInGBs": null,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 512
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.Standard.Intel.Generic",
                        "displayName": "VM.Standard.Intel.Generic",
                        "shape": "VM.Standard.Intel.Generic",
                        "ocpus": 1,
                        "memoryInGBs": 16,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 32,
                            "maxPerNumaNode": 32
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 512,
                            "defaultPerOcpuInGBs": null,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 512
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.Standard.x86.Generic",
                        "displayName": "VM.Standard.x86.Generic",
                        "shape": "VM.Standard.x86.Generic",
                        "ocpus": 1,
                        "memoryInGBs": 16,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 32,
                            "maxPerNumaNode": 32
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 512,
                            "defaultPerOcpuInGBs": null,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 512
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "BM.Standard.E5.192",
                        "displayName": "BM.Standard.E5.192",
                        "shape": "BM.Standard.E5.192",
                        "ocpus": 192,
                        "memoryInGBs": 2304,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.Standard.A1.160",
                        "displayName": "BM.Standard.A1.160",
                        "shape": "BM.Standard.A1.160",
                        "ocpus": 160,
                        "memoryInGBs": 1024,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.Standard3.64",
                        "displayName": "BM.Standard3.64",
                        "shape": "BM.Standard3.64",
                        "ocpus": 64,
                        "memoryInGBs": 1024,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.Standard2.52",
                        "displayName": "BM.Standard2.52",
                        "shape": "BM.Standard2.52",
                        "ocpus": 52,
                        "memoryInGBs": 768,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.Optimized3.36",
                        "displayName": "BM.Optimized3.36",
                        "shape": "BM.Optimized3.36",
                        "ocpus": 36,
                        "memoryInGBs": 512,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.Standard.E4.128",
                        "displayName": "BM.Standard.E4.128",
                        "shape": "BM.Standard.E4.128",
                        "ocpus": 128,
                        "memoryInGBs": 2048,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.Standard.E3.128",
                        "displayName": "BM.Standard.E3.128",
                        "shape": "BM.Standard.E3.128",
                        "ocpus": 128,
                        "memoryInGBs": 2048,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.Standard.E2.64",
                        "displayName": "BM.Standard.E2.64",
                        "shape": "BM.Standard.E2.64",
                        "ocpus": 64,
                        "memoryInGBs": 512,
                        "isFlexible": false
                    },
                    {
                        "id": "BM.DenseIO2.52",
                        "displayName": "BM.DenseIO2.52",
                        "shape": "BM.DenseIO2.52",
                        "ocpus": 52,
                        "memoryInGBs": 768,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Optimized3.Flex",
                        "displayName": "VM.Optimized3.Flex",
                        "shape": "VM.Optimized3.Flex",
                        "ocpus": 1,
                        "memoryInGBs": 14,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 18,
                            "maxPerNumaNode": 18
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 256,
                            "defaultPerOcpuInGBs": 14,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 256
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.Standard.E4.Flex",
                        "displayName": "VM.Standard.E4.Flex",
                        "shape": "VM.Standard.E4.Flex",
                        "ocpus": 1,
                        "memoryInGBs": 16,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 114,
                            "maxPerNumaNode": 64
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 1760,
                            "defaultPerOcpuInGBs": 16,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 1024
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.Standard.E3.Flex",
                        "displayName": "VM.Standard.E3.Flex",
                        "shape": "VM.Standard.E3.Flex",
                        "ocpus": 1,
                        "memoryInGBs": 16,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 114,
                            "maxPerNumaNode": 64
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 1776,
                            "defaultPerOcpuInGBs": 16,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 1024
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.Standard.A1.Flex",
                        "displayName": "VM.Standard.A1.Flex",
                        "shape": "VM.Standard.A1.Flex",
                        "ocpus": 1,
                        "memoryInGBs": 6,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 80,
                            "maxPerNumaNode": 80
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 512,
                            "defaultPerOcpuInGBs": 6,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 512
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.Standard2.1",
                        "displayName": "VM.Standard2.1",
                        "shape": "VM.Standard2.1",
                        "ocpus": 1,
                        "memoryInGBs": 15,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard2.2",
                        "displayName": "VM.Standard2.2",
                        "shape": "VM.Standard2.2",
                        "ocpus": 2,
                        "memoryInGBs": 30,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard2.4",
                        "displayName": "VM.Standard2.4",
                        "shape": "VM.Standard2.4",
                        "ocpus": 4,
                        "memoryInGBs": 60,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard2.8",
                        "displayName": "VM.Standard2.8",
                        "shape": "VM.Standard2.8",
                        "ocpus": 8,
                        "memoryInGBs": 120,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard2.16",
                        "displayName": "VM.Standard2.16",
                        "shape": "VM.Standard2.16",
                        "ocpus": 16,
                        "memoryInGBs": 240,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard2.24",
                        "displayName": "VM.Standard2.24",
                        "shape": "VM.Standard2.24",
                        "ocpus": 24,
                        "memoryInGBs": 320,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard.E2.1",
                        "displayName": "VM.Standard.E2.1",
                        "shape": "VM.Standard.E2.1",
                        "ocpus": 1,
                        "memoryInGBs": 8,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard.E2.2",
                        "displayName": "VM.Standard.E2.2",
                        "shape": "VM.Standard.E2.2",
                        "ocpus": 2,
                        "memoryInGBs": 16,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard.E2.4",
                        "displayName": "VM.Standard.E2.4",
                        "shape": "VM.Standard.E2.4",
                        "ocpus": 4,
                        "memoryInGBs": 32,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard.E2.8",
                        "displayName": "VM.Standard.E2.8",
                        "shape": "VM.Standard.E2.8",
                        "ocpus": 8,
                        "memoryInGBs": 64,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard3.Flex",
                        "displayName": "VM.Standard3.Flex",
                        "shape": "VM.Standard3.Flex",
                        "ocpus": 1,
                        "memoryInGBs": 16,
                        "ocpuOptions": {
                            "min": 1,
                            "max": 56,
                            "maxPerNumaNode": 32
                        },
                        "memoryOptions": {
                            "minInGBs": 1,
                            "maxInGBs": 896,
                            "defaultPerOcpuInGBs": 16,
                            "minPerOcpuInGBs": 1,
                            "maxPerOcpuInGBs": 64,
                            "maxPerNumaNodeInGBs": 512
                        },
                        "isFlexible": true
                    },
                    {
                        "id": "VM.DenseIO2.8",
                        "displayName": "VM.DenseIO2.8",
                        "shape": "VM.DenseIO2.8",
                        "ocpus": 8,
                        "memoryInGBs": 120,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.DenseIO2.16",
                        "displayName": "VM.DenseIO2.16",
                        "shape": "VM.DenseIO2.16",
                        "ocpus": 16,
                        "memoryInGBs": 240,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.DenseIO2.24",
                        "displayName": "VM.DenseIO2.24",
                        "shape": "VM.DenseIO2.24",
                        "ocpus": 24,
                        "memoryInGBs": 320,
                        "isFlexible": false
                    },
                    {
                        "id": "VM.Standard1.1",
                        "displayName": "VM.Standard1.1",
                        "shape": "VM.Standard1.1",
                        "ocpus": 1,
                        "memoryInGBs": 7,
                        "isFlexible": false
                    }
                ],
                "image": [
                    {
                        "id": "Oracle-Linux-8.8-2023.08.31-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Oracle-Linux-8.8-2023.08.31-0",
                        "platform": true,
                        "operatingSystem": "Oracle Linux",
                        "operatingSystemVersion": "8",
                        "billableSizeInGBs": 5,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Oracle-Linux-8.8-2023.09.26-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Oracle-Linux-8.8-2023.09.26-0",
                        "platform": true,
                        "operatingSystem": "Oracle Linux",
                        "operatingSystemVersion": "8",
                        "billableSizeInGBs": 5,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Oracle-Linux-8.8-aarch64-2023.08.31-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Oracle-Linux-8.8-aarch64-2023.08.31-0",
                        "platform": true,
                        "operatingSystem": "Oracle Linux",
                        "operatingSystemVersion": "8",
                        "billableSizeInGBs": 5,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Oracle-Linux-8.8-aarch64-2023.09.26-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Oracle-Linux-8.8-aarch64-2023.09.26-0",
                        "platform": true,
                        "operatingSystem": "Oracle Linux",
                        "operatingSystemVersion": "8",
                        "billableSizeInGBs": 5,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Oracle-Linux-8.8-aarch64-2023.10.24-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Oracle-Linux-8.8-aarch64-2023.10.24-0",
                        "platform": true,
                        "operatingSystem": "Oracle Linux",
                        "operatingSystemVersion": "8",
                        "billableSizeInGBs": 5,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Oracle-Linux-8.8-Gen2-GPU-2023.08.16-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Oracle-Linux-8.8-Gen2-GPU-2023.08.16-0",
                        "platform": true,
                        "operatingSystem": "Oracle Linux",
                        "operatingSystemVersion": "8",
                        "billableSizeInGBs": 16,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Oracle-Linux-8.8-Gen2-GPU-2023.08.31-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Oracle-Linux-8.8-Gen2-GPU-2023.08.31-0",
                        "platform": true,
                        "operatingSystem": "Oracle Linux",
                        "operatingSystemVersion": "8",
                        "billableSizeInGBs": 16,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Oracle-Linux-8.8-Gen2-GPU-2023.09.26-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Oracle-Linux-8.8-Gen2-GPU-2023.09.26-0",
                        "platform": true,
                        "operatingSystem": "Oracle Linux",
                        "operatingSystemVersion": "8",
                        "billableSizeInGBs": 16,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Oracle-Linux-9.1-Minimal-2023.06.29-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Oracle-Linux-9.1-Minimal-2023.06.29-0",
                        "platform": true,
                        "operatingSystem": "Oracle Linux",
                        "operatingSystemVersion": "9 Minimal",
                        "billableSizeInGBs": 2,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Oracle-Linux-9.1-Minimal-2023.07.07-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Oracle-Linux-9.1-Minimal-2023.07.07-0",
                        "platform": true,
                        "operatingSystem": "Oracle Linux",
                        "operatingSystemVersion": "9 Minimal",
                        "billableSizeInGBs": 2,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Oracle-Linux-9.2-2023.08.31-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Oracle-Linux-9.2-2023.08.31-0",
                        "platform": true,
                        "operatingSystem": "Oracle Linux",
                        "operatingSystemVersion": "9",
                        "billableSizeInGBs": 5,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Oracle-Linux-9.2-2023.09.26-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Oracle-Linux-9.2-2023.09.26-0",
                        "platform": true,
                        "operatingSystem": "Oracle Linux",
                        "operatingSystemVersion": "9",
                        "billableSizeInGBs": 5,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Oracle-Linux-9.2-aarch64-2023.08.31-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Oracle-Linux-9.2-aarch64-2023.08.31-0",
                        "platform": true,
                        "operatingSystem": "Oracle Linux",
                        "operatingSystemVersion": "9",
                        "billableSizeInGBs": 5,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Oracle-Linux-9.2-aarch64-2023.09.26-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Oracle-Linux-9.2-aarch64-2023.09.26-0",
                        "platform": true,
                        "operatingSystem": "Oracle Linux",
                        "operatingSystemVersion": "9",
                        "billableSizeInGBs": 5,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Oracle-Linux-9.2-aarch64-2023.10.24-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Oracle-Linux-9.2-aarch64-2023.10.24-0",
                        "platform": true,
                        "operatingSystem": "Oracle Linux",
                        "operatingSystemVersion": "9",
                        "billableSizeInGBs": 5,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Oracle-Linux-Cloud-Developer-8.4-2021.08.27-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Oracle-Linux-Cloud-Developer-8.4-2021.08.27-0",
                        "platform": true,
                        "operatingSystem": "Oracle Linux Cloud Developer",
                        "operatingSystemVersion": "8",
                        "billableSizeInGBs": 19,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Oracle-Linux-Cloud-Developer-8.4-aarch64-2021.08.27-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Oracle-Linux-Cloud-Developer-8.4-aarch64-2021.08.27-0",
                        "platform": true,
                        "operatingSystem": "Oracle Linux Cloud Developer",
                        "operatingSystemVersion": "8",
                        "billableSizeInGBs": 14,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Oracle-Linux-Cloud-Developer-8.5-2022.05.22-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Oracle-Linux-Cloud-Developer-8.5-2022.05.22-0",
                        "platform": true,
                        "operatingSystem": "Oracle Linux Cloud Developer",
                        "operatingSystemVersion": "8",
                        "billableSizeInGBs": 24,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Oracle-Linux-Cloud-Developer-8.5-aarch64-2022.05.22-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Oracle-Linux-Cloud-Developer-8.5-aarch64-2022.05.22-0",
                        "platform": true,
                        "operatingSystem": "Oracle Linux Cloud Developer",
                        "operatingSystemVersion": "8",
                        "billableSizeInGBs": 18,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Oracle-Linux-Cloud-Developer-8.7-2023.04.28-1",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Oracle-Linux-Cloud-Developer-8.7-2023.04.28-1",
                        "platform": true,
                        "operatingSystem": "Oracle Linux Cloud Developer",
                        "operatingSystemVersion": "8",
                        "billableSizeInGBs": 25,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Oracle-Linux-Cloud-Developer-8.7-aarch64-2023.04.28-2",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Oracle-Linux-Cloud-Developer-8.7-aarch64-2023.04.28-2",
                        "platform": true,
                        "operatingSystem": "Oracle Linux Cloud Developer",
                        "operatingSystemVersion": "8",
                        "billableSizeInGBs": 22,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2012-R2-Datacenter-Edition-BM-2020.11.14-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2012-R2-Datacenter-Edition-BM-2020.11.14-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2012 R2 Datacenter",
                        "billableSizeInGBs": 0,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2012-R2-Datacenter-Edition-BM-2020.12.15-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2012-R2-Datacenter-Edition-BM-2020.12.15-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2012 R2 Datacenter",
                        "billableSizeInGBs": 0,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2012-R2-Datacenter-Edition-BM-2021.02.19-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2012-R2-Datacenter-Edition-BM-2021.02.19-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2012 R2 Datacenter",
                        "billableSizeInGBs": 0,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2012-R2-Datacenter-Edition-BM-Gen2-2023.08.18-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2012-R2-Datacenter-Edition-BM-Gen2-2023.08.18-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2012 R2 Datacenter",
                        "billableSizeInGBs": 16,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2012-R2-Datacenter-Edition-BM-Gen2-2023.09.13-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2012-R2-Datacenter-Edition-BM-Gen2-2023.09.13-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2012 R2 Datacenter",
                        "billableSizeInGBs": 16,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2012-R2-Datacenter-Edition-BM-Gen2-2023.10.10-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2012-R2-Datacenter-Edition-BM-Gen2-2023.10.10-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2012 R2 Datacenter",
                        "billableSizeInGBs": 16,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2012-R2-Datacenter-Edition-BM-Gen2-DenseIO-2023.08.17-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2012-R2-Datacenter-Edition-BM-Gen2-DenseIO-2023.08.17-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2012 R2 Datacenter",
                        "billableSizeInGBs": 16,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2012-R2-Datacenter-Edition-BM-Gen2-DenseIO-2023.09.12-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2012-R2-Datacenter-Edition-BM-Gen2-DenseIO-2023.09.12-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2012 R2 Datacenter",
                        "billableSizeInGBs": 16,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2012-R2-Datacenter-Edition-BM-Gen2-DenseIO-2023.10.10-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2012-R2-Datacenter-Edition-BM-Gen2-DenseIO-2023.10.10-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2012 R2 Datacenter",
                        "billableSizeInGBs": 16,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2012-R2-Datacenter-Edition-BM-Gen2-E2-2023.08.17-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2012-R2-Datacenter-Edition-BM-Gen2-E2-2023.08.17-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2012 R2 Datacenter",
                        "billableSizeInGBs": 16,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2012-R2-Datacenter-Edition-BM-Gen2-E2-2023.09.13-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2012-R2-Datacenter-Edition-BM-Gen2-E2-2023.09.13-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2012 R2 Datacenter",
                        "billableSizeInGBs": 16,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2012-R2-Datacenter-Edition-BM-Gen2-E2-2023.10.10-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2012-R2-Datacenter-Edition-BM-Gen2-E2-2023.10.10-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2012 R2 Datacenter",
                        "billableSizeInGBs": 17,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2012-R2-Standard-Edition-VM-2023.08.17-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2012-R2-Standard-Edition-VM-2023.08.17-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2012 R2 Standard",
                        "billableSizeInGBs": 17,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2012-R2-Standard-Edition-VM-2023.09.12-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2012-R2-Standard-Edition-VM-2023.09.12-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2012 R2 Standard",
                        "billableSizeInGBs": 17,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2012-R2-Standard-Edition-VM-2023.10.10-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2012-R2-Standard-Edition-VM-2023.10.10-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2012 R2 Standard",
                        "billableSizeInGBs": 16,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2016-Datacenter-Edition-BM-Gen2-2023.08.17-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2016-Datacenter-Edition-BM-Gen2-2023.08.17-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2016 Datacenter",
                        "billableSizeInGBs": 19,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2016-Datacenter-Edition-BM-Gen2-2023.09.12-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2016-Datacenter-Edition-BM-Gen2-2023.09.12-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2016 Datacenter",
                        "billableSizeInGBs": 19,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2016-Datacenter-Edition-BM-Gen2-2023.10.10-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2016-Datacenter-Edition-BM-Gen2-2023.10.10-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2016 Datacenter",
                        "billableSizeInGBs": 19,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2016-Datacenter-Edition-BM-Gen2-DenseIO-2023.08.17-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2016-Datacenter-Edition-BM-Gen2-DenseIO-2023.08.17-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2016 Datacenter",
                        "billableSizeInGBs": 19,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2016-Datacenter-Edition-BM-Gen2-DenseIO-2023.09.12-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2016-Datacenter-Edition-BM-Gen2-DenseIO-2023.09.12-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2016 Datacenter",
                        "billableSizeInGBs": 19,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2016-Datacenter-Edition-BM-Gen2-DenseIO-2023.10.10-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2016-Datacenter-Edition-BM-Gen2-DenseIO-2023.10.10-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2016 Datacenter",
                        "billableSizeInGBs": 19,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2016-Datacenter-Edition-BM-Gen2-E2-2023.08.17-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2016-Datacenter-Edition-BM-Gen2-E2-2023.08.17-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2016 Datacenter",
                        "billableSizeInGBs": 19,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2016-Datacenter-Edition-BM-Gen2-E2-2023.09.12-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2016-Datacenter-Edition-BM-Gen2-E2-2023.09.12-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2016 Datacenter",
                        "billableSizeInGBs": 19,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2016-Datacenter-Edition-BM-Gen2-E2-2023.10.10-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2016-Datacenter-Edition-BM-Gen2-E2-2023.10.10-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2016 Datacenter",
                        "billableSizeInGBs": 19,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2016-Datacenter-Edition-BM-X9-2023.08.17-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2016-Datacenter-Edition-BM-X9-2023.08.17-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2016 Datacenter",
                        "billableSizeInGBs": 19,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2016-Datacenter-Edition-BM-X9-2023.09.12-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2016-Datacenter-Edition-BM-X9-2023.09.12-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2016 Datacenter",
                        "billableSizeInGBs": 19,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2016-Datacenter-Edition-BM-X9-2023.10.10-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2016-Datacenter-Edition-BM-X9-2023.10.10-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2016 Datacenter",
                        "billableSizeInGBs": 19,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2016-Standard-Core-VM-2023.08.17-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2016-Standard-Core-VM-2023.08.17-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2016 Standard Core",
                        "billableSizeInGBs": 12,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2016-Standard-Core-VM-2023.09.25-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2016-Standard-Core-VM-2023.09.25-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2016 Standard Core",
                        "billableSizeInGBs": 13,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2016-Standard-Core-VM-2023.10.10-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2016-Standard-Core-VM-2023.10.10-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2016 Standard Core",
                        "billableSizeInGBs": 13,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2016-Standard-Edition-VM-2023.08.17-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2016-Standard-Edition-VM-2023.08.17-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2016 Standard",
                        "billableSizeInGBs": 19,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2016-Standard-Edition-VM-2023.09.16-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2016-Standard-Edition-VM-2023.09.16-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2016 Standard",
                        "billableSizeInGBs": 19,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2016-Standard-Edition-VM-2023.10.10-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2016-Standard-Edition-VM-2023.10.10-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2016 Standard",
                        "billableSizeInGBs": 19,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2016-Standard-Edition-VM-B1-2021.02.13-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2016-Standard-Edition-VM-B1-2021.02.13-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2016 Standard",
                        "billableSizeInGBs": 0,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2016-Standard-Edition-VM-B1-2021.03.18-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2016-Standard-Edition-VM-B1-2021.03.18-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2016 Standard",
                        "billableSizeInGBs": 0,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2019-Datacenter-Edition-BM-E3-2023.08.18-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2019-Datacenter-Edition-BM-E3-2023.08.18-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2019 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2019-Datacenter-Edition-BM-E3-2023.09.12-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2019-Datacenter-Edition-BM-E3-2023.09.12-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2019 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2019-Datacenter-Edition-BM-E3-2023.10.10-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2019-Datacenter-Edition-BM-E3-2023.10.10-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2019 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2019-Datacenter-Edition-BM-E4-2023.07.12-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2019-Datacenter-Edition-BM-E4-2023.07.12-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2019 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2019-Datacenter-Edition-BM-E4-2023.09.25-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2019-Datacenter-Edition-BM-E4-2023.09.25-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2019 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2019-Datacenter-Edition-BM-E4-2023.10.10-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2019-Datacenter-Edition-BM-E4-2023.10.10-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2019 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2019-Datacenter-Edition-BM-E4-DenseIO-2023.10.17-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2019-Datacenter-Edition-BM-E4-DenseIO-2023.10.17-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2019 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2019-Datacenter-Edition-BM-E5-2023.08.28-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2019-Datacenter-Edition-BM-E5-2023.08.28-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2019 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2019-Datacenter-Edition-BM-E5-2023.09.13-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2019-Datacenter-Edition-BM-E5-2023.09.13-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2019 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2019-Datacenter-Edition-BM-E5-2023.10.12-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2019-Datacenter-Edition-BM-E5-2023.10.12-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2019 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2019-Datacenter-Edition-BM-X9-2023.08.17-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2019-Datacenter-Edition-BM-X9-2023.08.17-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2019 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2019-Datacenter-Edition-BM-X9-2023.09.28-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2019-Datacenter-Edition-BM-X9-2023.09.28-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2019 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2019-Datacenter-Edition-BM-X9-2023.10.10-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2019-Datacenter-Edition-BM-X9-2023.10.10-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2019 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2019-Standard-Core-VM-2023.08.17-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2019-Standard-Core-VM-2023.08.17-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2019 Standard Core",
                        "billableSizeInGBs": 11,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2019-Standard-Core-VM-2023.09.28-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2019-Standard-Core-VM-2023.09.28-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2019 Standard Core",
                        "billableSizeInGBs": 11,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2019-Standard-Core-VM-2023.10.10-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2019-Standard-Core-VM-2023.10.10-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2019 Standard Core",
                        "billableSizeInGBs": 11,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2019-Standard-Edition-VM-2023.08.17-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2019-Standard-Edition-VM-2023.08.17-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2019 Standard",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2019-Standard-Edition-VM-2023.09.28-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2019-Standard-Edition-VM-2023.09.28-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2019 Standard",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2019-Standard-Edition-VM-2023.10.10-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2019-Standard-Edition-VM-2023.10.10-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2019 Standard",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2019-Standard-Edition-VM-Gen2-2023.08.17-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2019-Standard-Edition-VM-Gen2-2023.08.17-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2019 Standard",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2019-Standard-Edition-VM-Gen2-2023.09.12-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2019-Standard-Edition-VM-Gen2-2023.09.12-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2019 Standard",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2019-Standard-Edition-VM-Gen2-2023.10.10-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2019-Standard-Edition-VM-Gen2-2023.10.10-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2019 Standard",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2022-Datacenter-Edition-BM-E3-2023.08.17-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2022-Datacenter-Edition-BM-E3-2023.08.17-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2022 Datacenter",
                        "billableSizeInGBs": 14,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2022-Datacenter-Edition-BM-E3-2023.09.12-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2022-Datacenter-Edition-BM-E3-2023.09.12-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2022 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2022-Datacenter-Edition-BM-E3-2023.10.10-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2022-Datacenter-Edition-BM-E3-2023.10.10-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2022 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2022-Datacenter-Edition-BM-E4-2023.06.13-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2022-Datacenter-Edition-BM-E4-2023.06.13-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2022 Datacenter",
                        "billableSizeInGBs": 14,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2022-Datacenter-Edition-BM-E4-2023.09.28-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2022-Datacenter-Edition-BM-E4-2023.09.28-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2022 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2022-Datacenter-Edition-BM-E4-2023.10.10-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2022-Datacenter-Edition-BM-E4-2023.10.10-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2022 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2022-Datacenter-Edition-BM-E4-DenseIO-2023.10.17-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2022-Datacenter-Edition-BM-E4-DenseIO-2023.10.17-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2022 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2022-Datacenter-Edition-BM-E5-2023.08.28-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2022-Datacenter-Edition-BM-E5-2023.08.28-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2022 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2022-Datacenter-Edition-BM-E5-2023.09.12-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2022-Datacenter-Edition-BM-E5-2023.09.12-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2022 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2022-Datacenter-Edition-BM-E5-2023.10.18-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2022-Datacenter-Edition-BM-E5-2023.10.18-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2022 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2022-Datacenter-Edition-BM-X9-2023.08.21-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2022-Datacenter-Edition-BM-X9-2023.08.21-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2022 Datacenter",
                        "billableSizeInGBs": 14,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2022-Datacenter-Edition-BM-X9-2023.09.12-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2022-Datacenter-Edition-BM-X9-2023.09.12-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2022 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2022-Datacenter-Edition-BM-X9-2023.10.10-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2022-Datacenter-Edition-BM-X9-2023.10.10-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2022 Datacenter",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2022-Standard-Core-VM-2023.08.17-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2022-Standard-Core-VM-2023.08.17-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2022 Standard Core",
                        "billableSizeInGBs": 10,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2022-Standard-Core-VM-2023.09.28-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2022-Standard-Core-VM-2023.09.28-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2022 Standard Core",
                        "billableSizeInGBs": 10,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2022-Standard-Core-VM-2023.10.10-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2022-Standard-Core-VM-2023.10.10-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2022 Standard Core",
                        "billableSizeInGBs": 10,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2022-Standard-Edition-VM-2023.08.17-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2022-Standard-Edition-VM-2023.08.17-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2022 Standard",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2022-Standard-Edition-VM-2023.09.28-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2022-Standard-Edition-VM-2023.09.28-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2022 Standard",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2022-Standard-Edition-VM-2023.10.10-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2022-Standard-Edition-VM-2023.10.10-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2022 Standard",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2022-Standard-Edition-VM-PV-2023.08.17-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2022-Standard-Edition-VM-PV-2023.08.17-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2022 Standard",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2022-Standard-Edition-VM-PV-2023.09.12-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2022-Standard-Edition-VM-PV-2023.09.12-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2022 Standard",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    },
                    {
                        "id": "Windows-Server-2022-Standard-Edition-VM-PV-2023.10.10-0",
                        "ocid": "ocid1.image.oc1..example",
                        "displayName": "Windows-Server-2022-Standard-Edition-VM-PV-2023.10.10-0",
                        "platform": true,
                        "operatingSystem": "Windows",
                        "operatingSystemVersion": "Server 2022 Standard",
                        "billableSizeInGBs": 15,
                        "lifecycleState": "AVAILABLE"
                    }
                ],
                "loadbalancer_shape": [
                    {
                        "id": "100Mbps",
                        "displayName": "100Mbps"
                    },
                    {
                        "id": "10Mbps",
                        "displayName": "10Mbps"
                    },
                    {
                        "id": "10Mbps-Micro",
                        "displayName": "10Mbps-Micro"
                    },
                    {
                        "id": "400Mbps",
                        "displayName": "400Mbps"
                    },
                    {
                        "id": "8000Mbps",
                        "displayName": "8000Mbps"
                    },
                    {
                        "id": "flexible",
                        "displayName": "flexible"
                    }
                ],
                "mysql_configuration": [
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard.E4.16.256GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E4.16.256GB.Standalone",
                        "shapeName": "MySQL.VM.Standard.E4.16.256GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard2.8.120GB MySQL shape",
                        "displayName": "MySQL.VM.Standard2.8.120GB.HA",
                        "shapeName": "MySQL.VM.Standard2.8.120GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard.E3.64.1024GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E3.64.1024GB.HA",
                        "shapeName": "MySQL.VM.Standard.E3.64.1024GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard2.2.30GB MySQL shape",
                        "displayName": "MySQL.VM.Standard2.2.30GB.Standalone",
                        "shapeName": "MySQL.VM.Standard2.2.30GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.HeatWave.BM.Standard.E3 MySQL shape",
                        "displayName": "MySQL.HeatWave.BM.Standard.E3.HA",
                        "shapeName": "MySQL.HeatWave.BM.Standard.E3",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard3.1.8GB MySQL shape",
                        "displayName": "MySQL.VM.Standard3.1.8GB.Standalone",
                        "shapeName": "MySQL.VM.Standard3.1.8GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Optimized3.1.8GB MySQL shape",
                        "displayName": "MySQL.VM.Optimized3.1.8GB.Standalone",
                        "shapeName": "MySQL.VM.Optimized3.1.8GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard2.16.240GB MySQL shape",
                        "displayName": "MySQL.VM.Standard2.16.240GB.Standalone",
                        "shapeName": "MySQL.VM.Standard2.16.240GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Optimized3.8.128GB MySQL shape",
                        "displayName": "MySQL.VM.Optimized3.8.128GB.HA",
                        "shapeName": "MySQL.VM.Optimized3.8.128GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard.E4.64.1024GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E4.64.1024GB.Standalone",
                        "shapeName": "MySQL.VM.Standard.E4.64.1024GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard2.16.240GB MySQL shape",
                        "displayName": "MySQL.VM.Standard2.16.240GB.HA",
                        "shapeName": "MySQL.VM.Standard2.16.240GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard.E4.48.768GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E4.48.768GB.HA",
                        "shapeName": "MySQL.VM.Standard.E4.48.768GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard.E4.24.384GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E4.24.384GB.HA",
                        "shapeName": "MySQL.VM.Standard.E4.24.384GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard.E3.8.128GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E3.8.128GB.Standalone",
                        "shapeName": "MySQL.VM.Standard.E3.8.128GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard.E3.48.768GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E3.48.768GB.HA",
                        "shapeName": "MySQL.VM.Standard.E3.48.768GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.HeatWave.VM.Standard MySQL shape",
                        "displayName": "MySQL.HeatWave.VM.Standard.HA",
                        "shapeName": "MySQL.HeatWave.VM.Standard",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard.E4.2.32GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E4.2.32GB.HA",
                        "shapeName": "MySQL.VM.Standard.E4.2.32GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard3.16.256GB MySQL shape",
                        "displayName": "MySQL.VM.Standard3.16.256GB.Standalone",
                        "shapeName": "MySQL.VM.Standard3.16.256GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard3.32.512GB MySQL shape",
                        "displayName": "MySQL.VM.Standard3.32.512GB.HA",
                        "shapeName": "MySQL.VM.Standard3.32.512GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard2.4.60GB MySQL shape",
                        "displayName": "MySQL.VM.Standard2.4.60GB.HA",
                        "shapeName": "MySQL.VM.Standard2.4.60GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.HeatWave.BM.Standard MySQL shape",
                        "displayName": "MySQL.HeatWave.BM.Standard.Standalone",
                        "shapeName": "MySQL.HeatWave.BM.Standard",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard2.8.120GB MySQL shape",
                        "displayName": "MySQL.VM.Standard2.8.120GB.Standalone",
                        "shapeName": "MySQL.VM.Standard2.8.120GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard3.2.32GB MySQL shape",
                        "displayName": "MySQL.VM.Standard3.2.32GB.HA",
                        "shapeName": "MySQL.VM.Standard3.2.32GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.HeatWave.VM.Standard.E3 MySQL shape",
                        "displayName": "MySQL.HeatWave.VM.Standard.E3.HA",
                        "shapeName": "MySQL.HeatWave.VM.Standard.E3",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Optimized3.16.256GB MySQL shape",
                        "displayName": "MySQL.VM.Optimized3.16.256GB.Standalone",
                        "shapeName": "MySQL.VM.Optimized3.16.256GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard.E3.32.512GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E3.32.512GB.Standalone",
                        "shapeName": "MySQL.VM.Standard.E3.32.512GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard.E3.32.512GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E3.32.512GB.HA",
                        "shapeName": "MySQL.VM.Standard.E3.32.512GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard.E3.48.768GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E3.48.768GB.Standalone",
                        "shapeName": "MySQL.VM.Standard.E3.48.768GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard2.2.30GB MySQL shape",
                        "displayName": "MySQL.VM.Standard2.2.30GB.HA",
                        "shapeName": "MySQL.VM.Standard2.2.30GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard.E4.1.8GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E4.1.8GB.Standalone",
                        "shapeName": "MySQL.VM.Standard.E4.1.8GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard.E3.16.256GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E3.16.256GB.Standalone",
                        "shapeName": "MySQL.VM.Standard.E3.16.256GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard.E4.64.1024GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E4.64.1024GB.HA",
                        "shapeName": "MySQL.VM.Standard.E4.64.1024GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard.E4.2.32GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E4.2.32GB.Standalone",
                        "shapeName": "MySQL.VM.Standard.E4.2.32GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard3.8.128GB MySQL shape",
                        "displayName": "MySQL.VM.Standard3.8.128GB.Standalone",
                        "shapeName": "MySQL.VM.Standard3.8.128GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard.E4.32.512GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E4.32.512GB.HA",
                        "shapeName": "MySQL.VM.Standard.E4.32.512GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard.E3.16.256GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E3.16.256GB.HA",
                        "shapeName": "MySQL.VM.Standard.E3.16.256GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard.E4.4.64GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E4.4.64GB.HA",
                        "shapeName": "MySQL.VM.Standard.E4.4.64GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard3.16.256GB MySQL shape",
                        "displayName": "MySQL.VM.Standard3.16.256GB.HA",
                        "shapeName": "MySQL.VM.Standard3.16.256GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard3.1.16GB MySQL shape",
                        "displayName": "MySQL.VM.Standard3.1.16GB.HA",
                        "shapeName": "MySQL.VM.Standard3.1.16GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard3.4.64GB MySQL shape",
                        "displayName": "MySQL.VM.Standard3.4.64GB.Standalone",
                        "shapeName": "MySQL.VM.Standard3.4.64GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard.E3.2.32GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E3.2.32GB.HA",
                        "shapeName": "MySQL.VM.Standard.E3.2.32GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the BM.Standard.E2.64 MySQL shape",
                        "displayName": "BM.Standard.E2.64.Standalone",
                        "shapeName": "BM.Standard.E2.64",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the VM.Standard.E2.1 MySQL shape",
                        "displayName": "VM.Standard.E2.1.Standalone",
                        "shapeName": "VM.Standard.E2.1",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the VM.Standard.E2.2 MySQL shape",
                        "displayName": "VM.Standard.E2.2.Standalone",
                        "shapeName": "VM.Standard.E2.2",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the VM.Standard.E2.4 MySQL shape",
                        "displayName": "VM.Standard.E2.4.Standalone",
                        "shapeName": "VM.Standard.E2.4",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the VM.Standard.E2.8 MySQL shape",
                        "displayName": "VM.Standard.E2.8.Standalone",
                        "shapeName": "VM.Standard.E2.8",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard.E3.1.16GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E3.1.16GB.HA",
                        "shapeName": "MySQL.VM.Standard.E3.1.16GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard.E3.24.384GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E3.24.384GB.Standalone",
                        "shapeName": "MySQL.VM.Standard.E3.24.384GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard.E4.1.16GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E4.1.16GB.HA",
                        "shapeName": "MySQL.VM.Standard.E4.1.16GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard2.4.60GB MySQL shape",
                        "displayName": "MySQL.VM.Standard2.4.60GB.Standalone",
                        "shapeName": "MySQL.VM.Standard2.4.60GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard.E3.2.32GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E3.2.32GB.Standalone",
                        "shapeName": "MySQL.VM.Standard.E3.2.32GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Optimized3.1.16GB MySQL shape",
                        "displayName": "MySQL.VM.Optimized3.1.16GB.HA",
                        "shapeName": "MySQL.VM.Optimized3.1.16GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard.E3.8.128GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E3.8.128GB.HA",
                        "shapeName": "MySQL.VM.Standard.E3.8.128GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard.E3.64.1024GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E3.64.1024GB.Standalone",
                        "shapeName": "MySQL.VM.Standard.E3.64.1024GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Optimized3.2.32GB MySQL shape",
                        "displayName": "MySQL.VM.Optimized3.2.32GB.Standalone",
                        "shapeName": "MySQL.VM.Optimized3.2.32GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard.E3.1.8GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E3.1.8GB.Standalone",
                        "shapeName": "MySQL.VM.Standard.E3.1.8GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard.E3.4.64GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E3.4.64GB.Standalone",
                        "shapeName": "MySQL.VM.Standard.E3.4.64GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.HeatWave.BM.Standard MySQL shape",
                        "displayName": "MySQL.HeatWave.BM.Standard.HA",
                        "shapeName": "MySQL.HeatWave.BM.Standard",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard.E4.1.16GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E4.1.16GB.Standalone",
                        "shapeName": "MySQL.VM.Standard.E4.1.16GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard.E4.48.768GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E4.48.768GB.Standalone",
                        "shapeName": "MySQL.VM.Standard.E4.48.768GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.HeatWave.VM.Standard.E3 MySQL shape",
                        "displayName": "MySQL.HeatWave.VM.Standard.E3.Standalone",
                        "shapeName": "MySQL.HeatWave.VM.Standard.E3",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard.E3.1.8GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E3.1.8GB.HA",
                        "shapeName": "MySQL.VM.Standard.E3.1.8GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard.E4.32.512GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E4.32.512GB.Standalone",
                        "shapeName": "MySQL.VM.Standard.E4.32.512GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard2.1.15GB MySQL shape",
                        "displayName": "MySQL.VM.Standard2.1.15GB.Standalone",
                        "shapeName": "MySQL.VM.Standard2.1.15GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard3.2.32GB MySQL shape",
                        "displayName": "MySQL.VM.Standard3.2.32GB.Standalone",
                        "shapeName": "MySQL.VM.Standard3.2.32GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.HeatWave.BM.Standard.E3 MySQL shape",
                        "displayName": "MySQL.HeatWave.BM.Standard.E3.Standalone",
                        "shapeName": "MySQL.HeatWave.BM.Standard.E3",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard.E4.1.8GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E4.1.8GB.HA",
                        "shapeName": "MySQL.VM.Standard.E4.1.8GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard3.4.64GB MySQL shape",
                        "displayName": "MySQL.VM.Standard3.4.64GB.HA",
                        "shapeName": "MySQL.VM.Standard3.4.64GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Optimized3.4.64GB MySQL shape",
                        "displayName": "MySQL.VM.Optimized3.4.64GB.Standalone",
                        "shapeName": "MySQL.VM.Optimized3.4.64GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard.E4.8.128GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E4.8.128GB.HA",
                        "shapeName": "MySQL.VM.Standard.E4.8.128GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard.E3.4.64GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E3.4.64GB.HA",
                        "shapeName": "MySQL.VM.Standard.E3.4.64GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Optimized3.1.16GB MySQL shape",
                        "displayName": "MySQL.VM.Optimized3.1.16GB.Standalone",
                        "shapeName": "MySQL.VM.Optimized3.1.16GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard3.8.128GB MySQL shape",
                        "displayName": "MySQL.VM.Standard3.8.128GB.HA",
                        "shapeName": "MySQL.VM.Standard3.8.128GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard.E4.16.256GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E4.16.256GB.HA",
                        "shapeName": "MySQL.VM.Standard.E4.16.256GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Optimized3.16.256GB MySQL shape",
                        "displayName": "MySQL.VM.Optimized3.16.256GB.HA",
                        "shapeName": "MySQL.VM.Optimized3.16.256GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard3.24.384GB MySQL shape",
                        "displayName": "MySQL.VM.Standard3.24.384GB.Standalone",
                        "shapeName": "MySQL.VM.Standard3.24.384GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Optimized3.2.32GB MySQL shape",
                        "displayName": "MySQL.VM.Optimized3.2.32GB.HA",
                        "shapeName": "MySQL.VM.Optimized3.2.32GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Optimized3.1.8GB MySQL shape",
                        "displayName": "MySQL.VM.Optimized3.1.8GB.HA",
                        "shapeName": "MySQL.VM.Optimized3.1.8GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard.E3.24.384GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E3.24.384GB.HA",
                        "shapeName": "MySQL.VM.Standard.E3.24.384GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard.E4.4.64GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E4.4.64GB.Standalone",
                        "shapeName": "MySQL.VM.Standard.E4.4.64GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard.E4.8.128GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E4.8.128GB.Standalone",
                        "shapeName": "MySQL.VM.Standard.E4.8.128GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard.E4.24.384GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E4.24.384GB.Standalone",
                        "shapeName": "MySQL.VM.Standard.E4.24.384GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard3.32.512GB MySQL shape",
                        "displayName": "MySQL.VM.Standard3.32.512GB.Standalone",
                        "shapeName": "MySQL.VM.Standard3.32.512GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.HeatWave.VM.Standard MySQL shape",
                        "displayName": "MySQL.HeatWave.VM.Standard.Standalone",
                        "shapeName": "MySQL.HeatWave.VM.Standard",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard.E3.1.16GB MySQL shape",
                        "displayName": "MySQL.VM.Standard.E3.1.16GB.Standalone",
                        "shapeName": "MySQL.VM.Standard.E3.1.16GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Optimized3.8.128GB MySQL shape",
                        "displayName": "MySQL.VM.Optimized3.8.128GB.Standalone",
                        "shapeName": "MySQL.VM.Optimized3.8.128GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard2.1.15GB MySQL shape",
                        "displayName": "MySQL.VM.Standard2.1.15GB.HA",
                        "shapeName": "MySQL.VM.Standard2.1.15GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard3.1.8GB MySQL shape",
                        "displayName": "MySQL.VM.Standard3.1.8GB.HA",
                        "shapeName": "MySQL.VM.Standard3.1.8GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Standard3.24.384GB MySQL shape",
                        "displayName": "MySQL.VM.Standard3.24.384GB.HA",
                        "shapeName": "MySQL.VM.Standard3.24.384GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default high availability configuration for the MySQL.VM.Optimized3.4.64GB MySQL shape",
                        "displayName": "MySQL.VM.Optimized3.4.64GB.HA",
                        "shapeName": "MySQL.VM.Optimized3.4.64GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    },
                    {
                        "id": "ocid1.mysqlconfiguration.oc1..example",
                        "compartmentId": null,
                        "description": "Default standalone configuration for the MySQL.VM.Standard3.1.16GB MySQL shape",
                        "displayName": "MySQL.VM.Standard3.1.16GB.Standalone",
                        "shapeName": "MySQL.VM.Standard3.1.16GB",
                        "type": "DEFAULT",
                        "lifecycleState": "ACTIVE",
                        "applicationProgress": null,
                        "timeCreated": "2018-09-21T10:00:00.000Z",
                        "timeUpdated": null,
                        "freeformTags": null,
                        "definedTags": null
                    }
                ],
                "mysql_version": [
                    {
                        "versionFamily": "8 - Innovation",
                        "versions": [
                            {
                                "version": "8.1.0",
                                "description": "8.1.0"
                            },
                            {
                                "version": "8.2.0",
                                "description": "8.2.0"
                            }
                        ],
                        "id": "8 - Innovation",
                        "displayName": "8 - Innovation"
                    },
                    {
                        "versionFamily": "8.0",
                        "versions": [
                            {
                                "version": "8.0.31",
                                "description": "8.0.31"
                            },
                            {
                                "version": "8.0.32",
                                "description": "8.0.32"
                            },
                            {
                                "version": "8.0.33",
                                "description": "8.0.33"
                            },
                            {
                                "version": "8.0.34",
                                "description": "8.0.34"
                            },
                            {
                                "version": "8.0.35",
                                "description": "8.0.35"
                            }
                        ],
                        "id": "8.0",
                        "displayName": "8.0"
                    }
                ]
            }
        }
    }
}

export default defaultCache

