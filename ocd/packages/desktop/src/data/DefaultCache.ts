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
                    }
                ],
                "image": [
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
                "mysql_shape": [
                    {
                        "name": "MySQL.HeatWave.BM.Standard",
                        "cpuCoreCount": 128,
                        "memorySizeInGBs": 2048,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.HeatWave.BM.Standard",
                        "displayName": "MySQL.HeatWave.BM.Standard"
                    },
                    {
                        "name": "MySQL.HeatWave.BM.Standard.E3",
                        "cpuCoreCount": 128,
                        "memorySizeInGBs": 2048,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.HeatWave.BM.Standard.E3",
                        "displayName": "MySQL.HeatWave.BM.Standard.E3"
                    },
                    {
                        "name": "MySQL.HeatWave.VM.Standard",
                        "cpuCoreCount": 16,
                        "memorySizeInGBs": 512,
                        "isSupportedFor": [
                            "HEATWAVECLUSTER",
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.HeatWave.VM.Standard",
                        "displayName": "MySQL.HeatWave.VM.Standard"
                    },
                    {
                        "name": "MySQL.HeatWave.VM.Standard.E3",
                        "cpuCoreCount": 16,
                        "memorySizeInGBs": 512,
                        "isSupportedFor": [
                            "HEATWAVECLUSTER",
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.HeatWave.VM.Standard.E3",
                        "displayName": "MySQL.HeatWave.VM.Standard.E3"
                    },
                    {
                        "name": "MySQL.VM.Optimized3.1.16GB",
                        "cpuCoreCount": 1,
                        "memorySizeInGBs": 16,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Optimized3.1.16GB",
                        "displayName": "MySQL.VM.Optimized3.1.16GB"
                    },
                    {
                        "name": "MySQL.VM.Optimized3.1.8GB",
                        "cpuCoreCount": 1,
                        "memorySizeInGBs": 8,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Optimized3.1.8GB",
                        "displayName": "MySQL.VM.Optimized3.1.8GB"
                    },
                    {
                        "name": "MySQL.VM.Optimized3.16.256GB",
                        "cpuCoreCount": 16,
                        "memorySizeInGBs": 256,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Optimized3.16.256GB",
                        "displayName": "MySQL.VM.Optimized3.16.256GB"
                    },
                    {
                        "name": "MySQL.VM.Optimized3.2.32GB",
                        "cpuCoreCount": 2,
                        "memorySizeInGBs": 32,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Optimized3.2.32GB",
                        "displayName": "MySQL.VM.Optimized3.2.32GB"
                    },
                    {
                        "name": "MySQL.VM.Optimized3.4.64GB",
                        "cpuCoreCount": 4,
                        "memorySizeInGBs": 64,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Optimized3.4.64GB",
                        "displayName": "MySQL.VM.Optimized3.4.64GB"
                    },
                    {
                        "name": "MySQL.VM.Optimized3.8.128GB",
                        "cpuCoreCount": 8,
                        "memorySizeInGBs": 128,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Optimized3.8.128GB",
                        "displayName": "MySQL.VM.Optimized3.8.128GB"
                    },
                    {
                        "name": "MySQL.VM.Standard.E3.1.16GB",
                        "cpuCoreCount": 1,
                        "memorySizeInGBs": 16,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard.E3.1.16GB",
                        "displayName": "MySQL.VM.Standard.E3.1.16GB"
                    },
                    {
                        "name": "MySQL.VM.Standard.E3.1.8GB",
                        "cpuCoreCount": 1,
                        "memorySizeInGBs": 8,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard.E3.1.8GB",
                        "displayName": "MySQL.VM.Standard.E3.1.8GB"
                    },
                    {
                        "name": "MySQL.VM.Standard.E3.16.256GB",
                        "cpuCoreCount": 16,
                        "memorySizeInGBs": 256,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard.E3.16.256GB",
                        "displayName": "MySQL.VM.Standard.E3.16.256GB"
                    },
                    {
                        "name": "MySQL.VM.Standard.E3.2.32GB",
                        "cpuCoreCount": 2,
                        "memorySizeInGBs": 32,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard.E3.2.32GB",
                        "displayName": "MySQL.VM.Standard.E3.2.32GB"
                    },
                    {
                        "name": "MySQL.VM.Standard.E3.24.384GB",
                        "cpuCoreCount": 24,
                        "memorySizeInGBs": 384,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard.E3.24.384GB",
                        "displayName": "MySQL.VM.Standard.E3.24.384GB"
                    },
                    {
                        "name": "MySQL.VM.Standard.E3.32.512GB",
                        "cpuCoreCount": 32,
                        "memorySizeInGBs": 512,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard.E3.32.512GB",
                        "displayName": "MySQL.VM.Standard.E3.32.512GB"
                    },
                    {
                        "name": "MySQL.VM.Standard.E3.4.64GB",
                        "cpuCoreCount": 4,
                        "memorySizeInGBs": 64,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard.E3.4.64GB",
                        "displayName": "MySQL.VM.Standard.E3.4.64GB"
                    },
                    {
                        "name": "MySQL.VM.Standard.E3.48.768GB",
                        "cpuCoreCount": 48,
                        "memorySizeInGBs": 768,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard.E3.48.768GB",
                        "displayName": "MySQL.VM.Standard.E3.48.768GB"
                    },
                    {
                        "name": "MySQL.VM.Standard.E3.64.1024GB",
                        "cpuCoreCount": 64,
                        "memorySizeInGBs": 1024,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard.E3.64.1024GB",
                        "displayName": "MySQL.VM.Standard.E3.64.1024GB"
                    },
                    {
                        "name": "MySQL.VM.Standard.E3.8.128GB",
                        "cpuCoreCount": 8,
                        "memorySizeInGBs": 128,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard.E3.8.128GB",
                        "displayName": "MySQL.VM.Standard.E3.8.128GB"
                    },
                    {
                        "name": "MySQL.VM.Standard.E4.1.16GB",
                        "cpuCoreCount": 1,
                        "memorySizeInGBs": 16,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard.E4.1.16GB",
                        "displayName": "MySQL.VM.Standard.E4.1.16GB"
                    },
                    {
                        "name": "MySQL.VM.Standard.E4.1.8GB",
                        "cpuCoreCount": 1,
                        "memorySizeInGBs": 8,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard.E4.1.8GB",
                        "displayName": "MySQL.VM.Standard.E4.1.8GB"
                    },
                    {
                        "name": "MySQL.VM.Standard.E4.16.256GB",
                        "cpuCoreCount": 16,
                        "memorySizeInGBs": 256,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard.E4.16.256GB",
                        "displayName": "MySQL.VM.Standard.E4.16.256GB"
                    },
                    {
                        "name": "MySQL.VM.Standard.E4.2.32GB",
                        "cpuCoreCount": 2,
                        "memorySizeInGBs": 32,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard.E4.2.32GB",
                        "displayName": "MySQL.VM.Standard.E4.2.32GB"
                    },
                    {
                        "name": "MySQL.VM.Standard.E4.24.384GB",
                        "cpuCoreCount": 24,
                        "memorySizeInGBs": 384,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard.E4.24.384GB",
                        "displayName": "MySQL.VM.Standard.E4.24.384GB"
                    },
                    {
                        "name": "MySQL.VM.Standard.E4.32.512GB",
                        "cpuCoreCount": 32,
                        "memorySizeInGBs": 512,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard.E4.32.512GB",
                        "displayName": "MySQL.VM.Standard.E4.32.512GB"
                    },
                    {
                        "name": "MySQL.VM.Standard.E4.4.64GB",
                        "cpuCoreCount": 4,
                        "memorySizeInGBs": 64,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard.E4.4.64GB",
                        "displayName": "MySQL.VM.Standard.E4.4.64GB"
                    },
                    {
                        "name": "MySQL.VM.Standard.E4.48.768GB",
                        "cpuCoreCount": 48,
                        "memorySizeInGBs": 768,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard.E4.48.768GB",
                        "displayName": "MySQL.VM.Standard.E4.48.768GB"
                    },
                    {
                        "name": "MySQL.VM.Standard.E4.64.1024GB",
                        "cpuCoreCount": 64,
                        "memorySizeInGBs": 1024,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard.E4.64.1024GB",
                        "displayName": "MySQL.VM.Standard.E4.64.1024GB"
                    },
                    {
                        "name": "MySQL.VM.Standard.E4.8.128GB",
                        "cpuCoreCount": 8,
                        "memorySizeInGBs": 128,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard.E4.8.128GB",
                        "displayName": "MySQL.VM.Standard.E4.8.128GB"
                    },
                    {
                        "name": "MySQL.VM.Standard2.1.15GB",
                        "cpuCoreCount": 1,
                        "memorySizeInGBs": 15,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard2.1.15GB",
                        "displayName": "MySQL.VM.Standard2.1.15GB"
                    },
                    {
                        "name": "MySQL.VM.Standard2.16.240GB",
                        "cpuCoreCount": 16,
                        "memorySizeInGBs": 240,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard2.16.240GB",
                        "displayName": "MySQL.VM.Standard2.16.240GB"
                    },
                    {
                        "name": "MySQL.VM.Standard2.2.30GB",
                        "cpuCoreCount": 2,
                        "memorySizeInGBs": 30,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard2.2.30GB",
                        "displayName": "MySQL.VM.Standard2.2.30GB"
                    },
                    {
                        "name": "MySQL.VM.Standard2.4.60GB",
                        "cpuCoreCount": 4,
                        "memorySizeInGBs": 60,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard2.4.60GB",
                        "displayName": "MySQL.VM.Standard2.4.60GB"
                    },
                    {
                        "name": "MySQL.VM.Standard2.8.120GB",
                        "cpuCoreCount": 8,
                        "memorySizeInGBs": 120,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard2.8.120GB",
                        "displayName": "MySQL.VM.Standard2.8.120GB"
                    },
                    {
                        "name": "MySQL.VM.Standard3.1.16GB",
                        "cpuCoreCount": 1,
                        "memorySizeInGBs": 16,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard3.1.16GB",
                        "displayName": "MySQL.VM.Standard3.1.16GB"
                    },
                    {
                        "name": "MySQL.VM.Standard3.1.8GB",
                        "cpuCoreCount": 1,
                        "memorySizeInGBs": 8,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard3.1.8GB",
                        "displayName": "MySQL.VM.Standard3.1.8GB"
                    },
                    {
                        "name": "MySQL.VM.Standard3.16.256GB",
                        "cpuCoreCount": 16,
                        "memorySizeInGBs": 256,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard3.16.256GB",
                        "displayName": "MySQL.VM.Standard3.16.256GB"
                    },
                    {
                        "name": "MySQL.VM.Standard3.2.32GB",
                        "cpuCoreCount": 2,
                        "memorySizeInGBs": 32,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard3.2.32GB",
                        "displayName": "MySQL.VM.Standard3.2.32GB"
                    },
                    {
                        "name": "MySQL.VM.Standard3.24.384GB",
                        "cpuCoreCount": 24,
                        "memorySizeInGBs": 384,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard3.24.384GB",
                        "displayName": "MySQL.VM.Standard3.24.384GB"
                    },
                    {
                        "name": "MySQL.VM.Standard3.32.512GB",
                        "cpuCoreCount": 32,
                        "memorySizeInGBs": 512,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard3.32.512GB",
                        "displayName": "MySQL.VM.Standard3.32.512GB"
                    },
                    {
                        "name": "MySQL.VM.Standard3.4.64GB",
                        "cpuCoreCount": 4,
                        "memorySizeInGBs": 64,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard3.4.64GB",
                        "displayName": "MySQL.VM.Standard3.4.64GB"
                    },
                    {
                        "name": "MySQL.VM.Standard3.8.128GB",
                        "cpuCoreCount": 8,
                        "memorySizeInGBs": 128,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "MySQL.VM.Standard3.8.128GB",
                        "displayName": "MySQL.VM.Standard3.8.128GB"
                    },
                    {
                        "name": "VM.Standard.E2.1",
                        "cpuCoreCount": 1,
                        "memorySizeInGBs": 8,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "VM.Standard.E2.1",
                        "displayName": "VM.Standard.E2.1"
                    },
                    {
                        "name": "VM.Standard.E2.2",
                        "cpuCoreCount": 2,
                        "memorySizeInGBs": 16,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "VM.Standard.E2.2",
                        "displayName": "VM.Standard.E2.2"
                    },
                    {
                        "name": "VM.Standard.E2.4",
                        "cpuCoreCount": 4,
                        "memorySizeInGBs": 32,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "VM.Standard.E2.4",
                        "displayName": "VM.Standard.E2.4"
                    },
                    {
                        "name": "VM.Standard.E2.8",
                        "cpuCoreCount": 8,
                        "memorySizeInGBs": 64,
                        "isSupportedFor": [
                            "DBSYSTEM"
                        ],
                        "id": "VM.Standard.E2.8",
                        "displayName": "VM.Standard.E2.8"
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
                ],
                "db_system_shape": [
                    {
                        "availableCoreCount": 48,
                        "availableCoreCountPerNode": 24,
                        "availableDataStorageInTBs": 74,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 765,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": null,
                        "coreCountIncrement": 2,
                        "maxStorageCount": null,
                        "maximumNodeCount": 2,
                        "minCoreCountPerNode": 0,
                        "minDataStorageInTBs": null,
                        "minDbNodeStoragePerNodeInGBs": null,
                        "minMemoryPerNodeInGBs": null,
                        "minStorageCount": null,
                        "minimumCoreCount": 0,
                        "minimumNodeCount": 2,
                        "name": "Exadata.Base.48",
                        "runtimeMinimumCoreCount": 4,
                        "shape": "Exadata.Base.48",
                        "shapeFamily": "EXADATA",
                        "shapeType": null,
                        "id": "Exadata.Base.48",
                        "displayName": "Exadata.Base.48"
                    },
                    {
                        "availableCoreCount": 368,
                        "availableCoreCountPerNode": 46,
                        "availableDataStorageInTBs": 424,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 763,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": null,
                        "coreCountIncrement": 8,
                        "maxStorageCount": null,
                        "maximumNodeCount": 8,
                        "minCoreCountPerNode": 0,
                        "minDataStorageInTBs": null,
                        "minDbNodeStoragePerNodeInGBs": null,
                        "minMemoryPerNodeInGBs": null,
                        "minStorageCount": null,
                        "minimumCoreCount": 0,
                        "minimumNodeCount": 8,
                        "name": "Exadata.Full2.368",
                        "runtimeMinimumCoreCount": 16,
                        "shape": "Exadata.Full2.368",
                        "shapeFamily": "EXADATA",
                        "shapeType": null,
                        "id": "Exadata.Full2.368",
                        "displayName": "Exadata.Full2.368"
                    },
                    {
                        "availableCoreCount": 400,
                        "availableCoreCountPerNode": 50,
                        "availableDataStorageInTBs": 598,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 763,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": null,
                        "coreCountIncrement": 8,
                        "maxStorageCount": null,
                        "maximumNodeCount": 8,
                        "minCoreCountPerNode": 0,
                        "minDataStorageInTBs": null,
                        "minDbNodeStoragePerNodeInGBs": null,
                        "minMemoryPerNodeInGBs": null,
                        "minStorageCount": null,
                        "minimumCoreCount": 0,
                        "minimumNodeCount": 8,
                        "name": "Exadata.Full3.400",
                        "runtimeMinimumCoreCount": 16,
                        "shape": "Exadata.Full3.400",
                        "shapeFamily": "EXADATA",
                        "shapeType": null,
                        "id": "Exadata.Full3.400",
                        "displayName": "Exadata.Full3.400"
                    },
                    {
                        "availableCoreCount": 184,
                        "availableCoreCountPerNode": 46,
                        "availableDataStorageInTBs": 212,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 763,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": null,
                        "coreCountIncrement": 4,
                        "maxStorageCount": null,
                        "maximumNodeCount": 4,
                        "minCoreCountPerNode": 0,
                        "minDataStorageInTBs": null,
                        "minDbNodeStoragePerNodeInGBs": null,
                        "minMemoryPerNodeInGBs": null,
                        "minStorageCount": null,
                        "minimumCoreCount": 0,
                        "minimumNodeCount": 4,
                        "name": "Exadata.Half2.184",
                        "runtimeMinimumCoreCount": 8,
                        "shape": "Exadata.Half2.184",
                        "shapeFamily": "EXADATA",
                        "shapeType": null,
                        "id": "Exadata.Half2.184",
                        "displayName": "Exadata.Half2.184"
                    },
                    {
                        "availableCoreCount": 200,
                        "availableCoreCountPerNode": 50,
                        "availableDataStorageInTBs": 299,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 763,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": null,
                        "coreCountIncrement": 4,
                        "maxStorageCount": null,
                        "maximumNodeCount": 4,
                        "minCoreCountPerNode": 0,
                        "minDataStorageInTBs": null,
                        "minDbNodeStoragePerNodeInGBs": null,
                        "minMemoryPerNodeInGBs": null,
                        "minStorageCount": null,
                        "minimumCoreCount": 0,
                        "minimumNodeCount": 4,
                        "name": "Exadata.Half3.200",
                        "runtimeMinimumCoreCount": 8,
                        "shape": "Exadata.Half3.200",
                        "shapeFamily": "EXADATA",
                        "shapeType": null,
                        "id": "Exadata.Half3.200",
                        "displayName": "Exadata.Half3.200"
                    },
                    {
                        "availableCoreCount": 92,
                        "availableCoreCountPerNode": 46,
                        "availableDataStorageInTBs": 35,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 1100,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 720,
                        "coreCountIncrement": 2,
                        "maxStorageCount": null,
                        "maximumNodeCount": 2,
                        "minCoreCountPerNode": 0,
                        "minDataStorageInTBs": null,
                        "minDbNodeStoragePerNodeInGBs": null,
                        "minMemoryPerNodeInGBs": null,
                        "minStorageCount": null,
                        "minimumCoreCount": 0,
                        "minimumNodeCount": 2,
                        "name": "Exadata.Quarter2.92",
                        "runtimeMinimumCoreCount": 4,
                        "shape": "Exadata.Quarter2.92",
                        "shapeFamily": "EXADATA",
                        "shapeType": null,
                        "id": "Exadata.Quarter2.92",
                        "displayName": "Exadata.Quarter2.92"
                    },
                    {
                        "availableCoreCount": 100,
                        "availableCoreCountPerNode": 50,
                        "availableDataStorageInTBs": 149,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 763,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 720,
                        "coreCountIncrement": 2,
                        "maxStorageCount": null,
                        "maximumNodeCount": 2,
                        "minCoreCountPerNode": 0,
                        "minDataStorageInTBs": null,
                        "minDbNodeStoragePerNodeInGBs": null,
                        "minMemoryPerNodeInGBs": null,
                        "minStorageCount": null,
                        "minimumCoreCount": 0,
                        "minimumNodeCount": 2,
                        "name": "Exadata.Quarter3.100",
                        "runtimeMinimumCoreCount": 4,
                        "shape": "Exadata.Quarter3.100",
                        "shapeFamily": "EXADATA",
                        "shapeType": null,
                        "id": "Exadata.Quarter3.100",
                        "displayName": "Exadata.Quarter3.100"
                    },
                    {
                        "availableCoreCount": null,
                        "availableCoreCountPerNode": 50,
                        "availableDataStorageInTBs": 49,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 2340,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 1390,
                        "coreCountIncrement": null,
                        "maxStorageCount": null,
                        "maximumNodeCount": 32,
                        "minCoreCountPerNode": 0,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": null,
                        "minimumCoreCount": 0,
                        "minimumNodeCount": 2,
                        "name": "Exadata.X8M",
                        "runtimeMinimumCoreCount": 4,
                        "shape": "Exadata.X8M",
                        "shapeFamily": "EXADATA",
                        "shapeType": null,
                        "id": "Exadata.X8M",
                        "displayName": "Exadata.X8M"
                    },
                    {
                        "availableCoreCount": null,
                        "availableCoreCountPerNode": 126,
                        "availableDataStorageInTBs": 63,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 2243,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 1390,
                        "coreCountIncrement": null,
                        "maxStorageCount": null,
                        "maximumNodeCount": 32,
                        "minCoreCountPerNode": 0,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": null,
                        "minimumCoreCount": 0,
                        "minimumNodeCount": 2,
                        "name": "Exadata.X9M",
                        "runtimeMinimumCoreCount": 4,
                        "shape": "Exadata.X9M",
                        "shapeFamily": "EXADATA",
                        "shapeType": null,
                        "id": "Exadata.X9M",
                        "displayName": "Exadata.X9M"
                    },
                    {
                        "availableCoreCount": 44,
                        "availableCoreCountPerNode": 22,
                        "availableDataStorageInTBs": 42,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 1100,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 240,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 12,
                        "maximumNodeCount": 8,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 3,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 2,
                        "name": "ExadataCC.Base2.44",
                        "runtimeMinimumCoreCount": 0,
                        "shape": "ExadataCC.Base2.44",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.Base2.44",
                        "displayName": "ExadataCC.Base2.44"
                    },
                    {
                        "availableCoreCount": 48,
                        "availableCoreCountPerNode": 24,
                        "availableDataStorageInTBs": 74,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 900,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 360,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 12,
                        "maximumNodeCount": 8,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 3,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 2,
                        "name": "ExadataCC.Base3.48",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.Base3.48",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.Base3.48",
                        "displayName": "ExadataCC.Base3.48"
                    },
                    {
                        "availableCoreCount": null,
                        "availableCoreCountPerNode": 30,
                        "availableDataStorageInTBs": null,
                        "availableDataStoragePerServerInTBs": 36.5,
                        "availableDbNodePerNodeInGBs": 1084,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 660,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 16,
                        "maximumNodeCount": 8,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 3,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 2,
                        "name": "ExadataCC.BaseX10M",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.BaseX10M",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.BaseX10M",
                        "displayName": "ExadataCC.BaseX10M"
                    },
                    {
                        "availableCoreCount": null,
                        "availableCoreCountPerNode": 22,
                        "availableDataStorageInTBs": null,
                        "availableDataStoragePerServerInTBs": 14,
                        "availableDbNodePerNodeInGBs": 1100,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 240,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 12,
                        "maximumNodeCount": 8,
                        "minCoreCountPerNode": 0,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 3,
                        "minimumCoreCount": 0,
                        "minimumNodeCount": 2,
                        "name": "ExadataCC.BaseX7",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.BaseX7",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.BaseX7",
                        "displayName": "ExadataCC.BaseX7"
                    },
                    {
                        "availableCoreCount": null,
                        "availableCoreCountPerNode": 24,
                        "availableDataStorageInTBs": null,
                        "availableDataStoragePerServerInTBs": 24.6,
                        "availableDbNodePerNodeInGBs": 900,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 360,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 12,
                        "maximumNodeCount": 8,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 3,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 2,
                        "name": "ExadataCC.BaseX8",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.BaseX8",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.BaseX8",
                        "displayName": "ExadataCC.BaseX8"
                    },
                    {
                        "availableCoreCount": null,
                        "availableCoreCountPerNode": 24,
                        "availableDataStorageInTBs": null,
                        "availableDataStoragePerServerInTBs": 24.6,
                        "availableDbNodePerNodeInGBs": 900,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 328,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 12,
                        "maximumNodeCount": 8,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 3,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 2,
                        "name": "ExadataCC.BaseX8M",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.BaseX8M",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.BaseX8M",
                        "displayName": "ExadataCC.BaseX8M"
                    },
                    {
                        "availableCoreCount": 48,
                        "availableCoreCountPerNode": 24,
                        "availableDataStorageInTBs": 74,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 900,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 328,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 12,
                        "maximumNodeCount": 8,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 3,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 2,
                        "name": "ExadataCC.BaseX8M.48",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.BaseX8M.48",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.BaseX8M.48",
                        "displayName": "ExadataCC.BaseX8M.48"
                    },
                    {
                        "availableCoreCount": null,
                        "availableCoreCountPerNode": 24,
                        "availableDataStorageInTBs": null,
                        "availableDataStoragePerServerInTBs": 24.6,
                        "availableDbNodePerNodeInGBs": 1077,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 328,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 12,
                        "maximumNodeCount": 8,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 3,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 2,
                        "name": "ExadataCC.BaseX9M",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.BaseX9M",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.BaseX9M",
                        "displayName": "ExadataCC.BaseX9M"
                    },
                    {
                        "availableCoreCount": 48,
                        "availableCoreCountPerNode": 24,
                        "availableDataStorageInTBs": 74,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 1077,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 328,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 12,
                        "maximumNodeCount": 8,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 3,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 2,
                        "name": "ExadataCC.BaseX9M.48",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.BaseX9M.48",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.BaseX9M.48",
                        "displayName": "ExadataCC.BaseX9M.48"
                    },
                    {
                        "availableCoreCount": 368,
                        "availableCoreCountPerNode": 46,
                        "availableDataStorageInTBs": 427,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 1100,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 720,
                        "coreCountIncrement": 8,
                        "maxStorageCount": 12,
                        "maximumNodeCount": 8,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 12,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 8,
                        "name": "ExadataCC.Full2.368",
                        "runtimeMinimumCoreCount": 8,
                        "shape": "ExadataCC.Full2.368",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.Full2.368",
                        "displayName": "ExadataCC.Full2.368"
                    },
                    {
                        "availableCoreCount": 400,
                        "availableCoreCountPerNode": 50,
                        "availableDataStorageInTBs": 598,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 900,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 720,
                        "coreCountIncrement": 8,
                        "maxStorageCount": 12,
                        "maximumNodeCount": 8,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 12,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 8,
                        "name": "ExadataCC.Full3.400",
                        "runtimeMinimumCoreCount": 8,
                        "shape": "ExadataCC.Full3.400",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.Full3.400",
                        "displayName": "ExadataCC.Full3.400"
                    },
                    {
                        "availableCoreCount": 400,
                        "availableCoreCountPerNode": 50,
                        "availableDataStorageInTBs": 598,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 2340,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 1390,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 64,
                        "maximumNodeCount": 32,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 12,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 8,
                        "name": "ExadataCC.FullX8M.400",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.FullX8M.400",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.FullX8M.400",
                        "displayName": "ExadataCC.FullX8M.400"
                    },
                    {
                        "availableCoreCount": 496,
                        "availableCoreCountPerNode": 62,
                        "availableDataStorageInTBs": 766,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 2243,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 1390,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 64,
                        "maximumNodeCount": 32,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 12,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 8,
                        "name": "ExadataCC.FullX9M.496",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.FullX9M.496",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.FullX9M.496",
                        "displayName": "ExadataCC.FullX9M.496"
                    },
                    {
                        "availableCoreCount": 184,
                        "availableCoreCountPerNode": 46,
                        "availableDataStorageInTBs": 213,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 1100,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 720,
                        "coreCountIncrement": 4,
                        "maxStorageCount": 12,
                        "maximumNodeCount": 8,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 6,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 4,
                        "name": "ExadataCC.Half2.184",
                        "runtimeMinimumCoreCount": 4,
                        "shape": "ExadataCC.Half2.184",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.Half2.184",
                        "displayName": "ExadataCC.Half2.184"
                    },
                    {
                        "availableCoreCount": 200,
                        "availableCoreCountPerNode": 50,
                        "availableDataStorageInTBs": 299,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 900,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 720,
                        "coreCountIncrement": 4,
                        "maxStorageCount": 12,
                        "maximumNodeCount": 8,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 6,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 4,
                        "name": "ExadataCC.Half3.200",
                        "runtimeMinimumCoreCount": 4,
                        "shape": "ExadataCC.Half3.200",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.Half3.200",
                        "displayName": "ExadataCC.Half3.200"
                    },
                    {
                        "availableCoreCount": 200,
                        "availableCoreCountPerNode": 50,
                        "availableDataStorageInTBs": 299,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 2340,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 1390,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 64,
                        "maximumNodeCount": 32,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 6,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 4,
                        "name": "ExadataCC.HalfX8M.200",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.HalfX8M.200",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.HalfX8M.200",
                        "displayName": "ExadataCC.HalfX8M.200"
                    },
                    {
                        "availableCoreCount": 248,
                        "availableCoreCountPerNode": 62,
                        "availableDataStorageInTBs": 383,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 2243,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 1390,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 64,
                        "maximumNodeCount": 32,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 6,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 4,
                        "name": "ExadataCC.HalfX9M.248",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.HalfX9M.248",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.HalfX9M.248",
                        "displayName": "ExadataCC.HalfX9M.248"
                    },
                    {
                        "availableCoreCount": 92,
                        "availableCoreCountPerNode": 46,
                        "availableDataStorageInTBs": 106,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 1100,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 720,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 12,
                        "maximumNodeCount": 8,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 3,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 2,
                        "name": "ExadataCC.Quarter2.92",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.Quarter2.92",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.Quarter2.92",
                        "displayName": "ExadataCC.Quarter2.92"
                    },
                    {
                        "availableCoreCount": 100,
                        "availableCoreCountPerNode": 50,
                        "availableDataStorageInTBs": 149,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 900,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 720,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 12,
                        "maximumNodeCount": 8,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 3,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 2,
                        "name": "ExadataCC.Quarter3.100",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.Quarter3.100",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.Quarter3.100",
                        "displayName": "ExadataCC.Quarter3.100"
                    },
                    {
                        "availableCoreCount": 100,
                        "availableCoreCountPerNode": 50,
                        "availableDataStorageInTBs": 149,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 2340,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 1390,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 64,
                        "maximumNodeCount": 32,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 3,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 2,
                        "name": "ExadataCC.QuarterX8M.100",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.QuarterX8M.100",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.QuarterX8M.100",
                        "displayName": "ExadataCC.QuarterX8M.100"
                    },
                    {
                        "availableCoreCount": 124,
                        "availableCoreCountPerNode": 62,
                        "availableDataStorageInTBs": 191,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": 2243,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 1390,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 64,
                        "maximumNodeCount": 32,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 3,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 2,
                        "name": "ExadataCC.QuarterX9M.124",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.QuarterX9M.124",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.QuarterX9M.124",
                        "displayName": "ExadataCC.QuarterX9M.124"
                    },
                    {
                        "availableCoreCount": null,
                        "availableCoreCountPerNode": 190,
                        "availableDataStorageInTBs": null,
                        "availableDataStoragePerServerInTBs": 80,
                        "availableDbNodePerNodeInGBs": 2243,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 1390,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 64,
                        "maximumNodeCount": 32,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 3,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 2,
                        "name": "ExadataCC.X10M",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.X10M",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.X10M",
                        "displayName": "ExadataCC.X10M"
                    },
                    {
                        "availableCoreCount": null,
                        "availableCoreCountPerNode": 190,
                        "availableDataStorageInTBs": null,
                        "availableDataStoragePerServerInTBs": 80,
                        "availableDbNodePerNodeInGBs": 2243,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 2090,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 64,
                        "maximumNodeCount": 32,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 3,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 2,
                        "name": "ExadataCC.X10M.L",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.X10M.L",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.X10M.L",
                        "displayName": "ExadataCC.X10M.L"
                    },
                    {
                        "availableCoreCount": null,
                        "availableCoreCountPerNode": 190,
                        "availableDataStorageInTBs": null,
                        "availableDataStoragePerServerInTBs": 80,
                        "availableDbNodePerNodeInGBs": 2243,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 2800,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 64,
                        "maximumNodeCount": 32,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 3,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 2,
                        "name": "ExadataCC.X10M.XL",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.X10M.XL",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.X10M.XL",
                        "displayName": "ExadataCC.X10M.XL"
                    },
                    {
                        "availableCoreCount": null,
                        "availableCoreCountPerNode": 46,
                        "availableDataStorageInTBs": null,
                        "availableDataStoragePerServerInTBs": 35.3,
                        "availableDbNodePerNodeInGBs": 1100,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 720,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 12,
                        "maximumNodeCount": 8,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 3,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 2,
                        "name": "ExadataCC.X7",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.X7",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.X7",
                        "displayName": "ExadataCC.X7"
                    },
                    {
                        "availableCoreCount": null,
                        "availableCoreCountPerNode": 50,
                        "availableDataStorageInTBs": null,
                        "availableDataStoragePerServerInTBs": 49.6,
                        "availableDbNodePerNodeInGBs": 900,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 720,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 12,
                        "maximumNodeCount": 8,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 3,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 2,
                        "name": "ExadataCC.X8",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.X8",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.X8",
                        "displayName": "ExadataCC.X8"
                    },
                    {
                        "availableCoreCount": null,
                        "availableCoreCountPerNode": 50,
                        "availableDataStorageInTBs": null,
                        "availableDataStoragePerServerInTBs": 49.6,
                        "availableDbNodePerNodeInGBs": 2340,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 1390,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 64,
                        "maximumNodeCount": 32,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 3,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 2,
                        "name": "ExadataCC.X8M",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.X8M",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.X8M",
                        "displayName": "ExadataCC.X8M"
                    },
                    {
                        "availableCoreCount": null,
                        "availableCoreCountPerNode": 62,
                        "availableDataStorageInTBs": null,
                        "availableDataStoragePerServerInTBs": 63.6,
                        "availableDbNodePerNodeInGBs": 2243,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": 1390,
                        "coreCountIncrement": 2,
                        "maxStorageCount": 64,
                        "maximumNodeCount": 32,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": 2,
                        "minDbNodeStoragePerNodeInGBs": 60,
                        "minMemoryPerNodeInGBs": 30,
                        "minStorageCount": 3,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 2,
                        "name": "ExadataCC.X9M",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "ExadataCC.X9M",
                        "shapeFamily": "EXACC",
                        "shapeType": null,
                        "id": "ExadataCC.X9M",
                        "displayName": "ExadataCC.X9M"
                    },
                    {
                        "availableCoreCount": 57,
                        "availableCoreCountPerNode": 57,
                        "availableDataStorageInTBs": null,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": null,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": null,
                        "coreCountIncrement": 1,
                        "maxStorageCount": null,
                        "maximumNodeCount": 1,
                        "minCoreCountPerNode": 1,
                        "minDataStorageInTBs": null,
                        "minDbNodeStoragePerNodeInGBs": null,
                        "minMemoryPerNodeInGBs": null,
                        "minStorageCount": null,
                        "minimumCoreCount": 1,
                        "minimumNodeCount": 1,
                        "name": "VM.Standard.A1.Flex",
                        "runtimeMinimumCoreCount": 1,
                        "shape": "VM.Standard.A1.Flex",
                        "shapeFamily": "VIRTUALMACHINE",
                        "shapeType": "AMPERE_FLEX_A1",
                        "id": "VM.Standard.A1.Flex",
                        "displayName": "VM.Standard.A1.Flex"
                    },
                    {
                        "availableCoreCount": 64,
                        "availableCoreCountPerNode": 64,
                        "availableDataStorageInTBs": null,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": null,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": null,
                        "coreCountIncrement": 1,
                        "maxStorageCount": null,
                        "maximumNodeCount": 2,
                        "minCoreCountPerNode": 1,
                        "minDataStorageInTBs": null,
                        "minDbNodeStoragePerNodeInGBs": null,
                        "minMemoryPerNodeInGBs": null,
                        "minStorageCount": null,
                        "minimumCoreCount": 1,
                        "minimumNodeCount": 1,
                        "name": "VM.Standard.E4.Flex",
                        "runtimeMinimumCoreCount": 1,
                        "shape": "VM.Standard.E4.Flex",
                        "shapeFamily": "VIRTUALMACHINE",
                        "shapeType": "AMD",
                        "id": "VM.Standard.E4.Flex",
                        "displayName": "VM.Standard.E4.Flex"
                    },
                    {
                        "availableCoreCount": 1,
                        "availableCoreCountPerNode": 1,
                        "availableDataStorageInTBs": null,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": null,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": null,
                        "coreCountIncrement": 0,
                        "maxStorageCount": null,
                        "maximumNodeCount": 1,
                        "minCoreCountPerNode": 1,
                        "minDataStorageInTBs": null,
                        "minDbNodeStoragePerNodeInGBs": null,
                        "minMemoryPerNodeInGBs": null,
                        "minStorageCount": null,
                        "minimumCoreCount": 1,
                        "minimumNodeCount": 1,
                        "name": "VM.Standard2.1",
                        "runtimeMinimumCoreCount": 1,
                        "shape": "VM.Standard2.1",
                        "shapeFamily": "VIRTUALMACHINE",
                        "shapeType": "INTEL",
                        "id": "VM.Standard2.1",
                        "displayName": "VM.Standard2.1"
                    },
                    {
                        "availableCoreCount": 16,
                        "availableCoreCountPerNode": 16,
                        "availableDataStorageInTBs": null,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": null,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": null,
                        "coreCountIncrement": 0,
                        "maxStorageCount": null,
                        "maximumNodeCount": 2,
                        "minCoreCountPerNode": 16,
                        "minDataStorageInTBs": null,
                        "minDbNodeStoragePerNodeInGBs": null,
                        "minMemoryPerNodeInGBs": null,
                        "minStorageCount": null,
                        "minimumCoreCount": 16,
                        "minimumNodeCount": 1,
                        "name": "VM.Standard2.16",
                        "runtimeMinimumCoreCount": 16,
                        "shape": "VM.Standard2.16",
                        "shapeFamily": "VIRTUALMACHINE",
                        "shapeType": "INTEL",
                        "id": "VM.Standard2.16",
                        "displayName": "VM.Standard2.16"
                    },
                    {
                        "availableCoreCount": 2,
                        "availableCoreCountPerNode": 2,
                        "availableDataStorageInTBs": null,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": null,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": null,
                        "coreCountIncrement": 0,
                        "maxStorageCount": null,
                        "maximumNodeCount": 2,
                        "minCoreCountPerNode": 2,
                        "minDataStorageInTBs": null,
                        "minDbNodeStoragePerNodeInGBs": null,
                        "minMemoryPerNodeInGBs": null,
                        "minStorageCount": null,
                        "minimumCoreCount": 2,
                        "minimumNodeCount": 1,
                        "name": "VM.Standard2.2",
                        "runtimeMinimumCoreCount": 2,
                        "shape": "VM.Standard2.2",
                        "shapeFamily": "VIRTUALMACHINE",
                        "shapeType": "INTEL",
                        "id": "VM.Standard2.2",
                        "displayName": "VM.Standard2.2"
                    },
                    {
                        "availableCoreCount": 24,
                        "availableCoreCountPerNode": 24,
                        "availableDataStorageInTBs": null,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": null,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": null,
                        "coreCountIncrement": 0,
                        "maxStorageCount": null,
                        "maximumNodeCount": 2,
                        "minCoreCountPerNode": 24,
                        "minDataStorageInTBs": null,
                        "minDbNodeStoragePerNodeInGBs": null,
                        "minMemoryPerNodeInGBs": null,
                        "minStorageCount": null,
                        "minimumCoreCount": 24,
                        "minimumNodeCount": 1,
                        "name": "VM.Standard2.24",
                        "runtimeMinimumCoreCount": 24,
                        "shape": "VM.Standard2.24",
                        "shapeFamily": "VIRTUALMACHINE",
                        "shapeType": "INTEL",
                        "id": "VM.Standard2.24",
                        "displayName": "VM.Standard2.24"
                    },
                    {
                        "availableCoreCount": 4,
                        "availableCoreCountPerNode": 4,
                        "availableDataStorageInTBs": null,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": null,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": null,
                        "coreCountIncrement": 0,
                        "maxStorageCount": null,
                        "maximumNodeCount": 2,
                        "minCoreCountPerNode": 4,
                        "minDataStorageInTBs": null,
                        "minDbNodeStoragePerNodeInGBs": null,
                        "minMemoryPerNodeInGBs": null,
                        "minStorageCount": null,
                        "minimumCoreCount": 4,
                        "minimumNodeCount": 1,
                        "name": "VM.Standard2.4",
                        "runtimeMinimumCoreCount": 4,
                        "shape": "VM.Standard2.4",
                        "shapeFamily": "VIRTUALMACHINE",
                        "shapeType": "INTEL",
                        "id": "VM.Standard2.4",
                        "displayName": "VM.Standard2.4"
                    },
                    {
                        "availableCoreCount": 8,
                        "availableCoreCountPerNode": 8,
                        "availableDataStorageInTBs": null,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": null,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": null,
                        "coreCountIncrement": 0,
                        "maxStorageCount": null,
                        "maximumNodeCount": 2,
                        "minCoreCountPerNode": 8,
                        "minDataStorageInTBs": null,
                        "minDbNodeStoragePerNodeInGBs": null,
                        "minMemoryPerNodeInGBs": null,
                        "minStorageCount": null,
                        "minimumCoreCount": 8,
                        "minimumNodeCount": 1,
                        "name": "VM.Standard2.8",
                        "runtimeMinimumCoreCount": 8,
                        "shape": "VM.Standard2.8",
                        "shapeFamily": "VIRTUALMACHINE",
                        "shapeType": "INTEL",
                        "id": "VM.Standard2.8",
                        "displayName": "VM.Standard2.8"
                    },
                    {
                        "availableCoreCount": 32,
                        "availableCoreCountPerNode": 32,
                        "availableDataStorageInTBs": null,
                        "availableDataStoragePerServerInTBs": null,
                        "availableDbNodePerNodeInGBs": null,
                        "availableDbNodeStorageInGBs": null,
                        "availableMemoryInGBs": null,
                        "availableMemoryPerNodeInGBs": null,
                        "coreCountIncrement": 1,
                        "maxStorageCount": null,
                        "maximumNodeCount": 2,
                        "minCoreCountPerNode": 1,
                        "minDataStorageInTBs": null,
                        "minDbNodeStoragePerNodeInGBs": null,
                        "minMemoryPerNodeInGBs": null,
                        "minStorageCount": null,
                        "minimumCoreCount": 1,
                        "minimumNodeCount": 1,
                        "name": "VM.Standard3.Flex",
                        "runtimeMinimumCoreCount": 1,
                        "shape": "VM.Standard3.Flex",
                        "shapeFamily": "VIRTUALMACHINE",
                        "shapeType": "INTEL_FLEX_X9",
                        "id": "VM.Standard3.Flex",
                        "displayName": "VM.Standard3.Flex"
                    }
                ],
                "db_version": [
                    {
                        "isLatestForMajorVersion": true,
                        "isPreviewDbVersion": null,
                        "isUpgradeSupported": null,
                        "supportsPdb": false,
                        "version": "11.2.0.4",
                        "id": "11.2.0.4",
                        "displayName": "11.2.0.4"
                    },
                    {
                        "isLatestForMajorVersion": true,
                        "isPreviewDbVersion": null,
                        "isUpgradeSupported": null,
                        "supportsPdb": true,
                        "version": "12.1.0.2",
                        "id": "12.1.0.2",
                        "displayName": "12.1.0.2"
                    },
                    {
                        "isLatestForMajorVersion": true,
                        "isPreviewDbVersion": null,
                        "isUpgradeSupported": null,
                        "supportsPdb": true,
                        "version": "12.2.0.1",
                        "id": "12.2.0.1",
                        "displayName": "12.2.0.1"
                    },
                    {
                        "isLatestForMajorVersion": true,
                        "isPreviewDbVersion": null,
                        "isUpgradeSupported": null,
                        "supportsPdb": true,
                        "version": "18.0.0.0",
                        "id": "18.0.0.0",
                        "displayName": "18.0.0.0"
                    },
                    {
                        "isLatestForMajorVersion": true,
                        "isPreviewDbVersion": null,
                        "isUpgradeSupported": null,
                        "supportsPdb": true,
                        "version": "19.0.0.0",
                        "id": "19.0.0.0",
                        "displayName": "19.0.0.0"
                    },
                    {
                        "isLatestForMajorVersion": true,
                        "isPreviewDbVersion": null,
                        "isUpgradeSupported": null,
                        "supportsPdb": true,
                        "version": "21.0.0.0",
                        "id": "21.0.0.0",
                        "displayName": "21.0.0.0"
                    },
                    {
                        "isLatestForMajorVersion": true,
                        "isPreviewDbVersion": null,
                        "isUpgradeSupported": null,
                        "supportsPdb": true,
                        "version": "23.0.0.0",
                        "id": "23.0.0.0",
                        "displayName": "23.0.0.0"
                    },
                    {
                        "isLatestForMajorVersion": true,
                        "isPreviewDbVersion": null,
                        "isUpgradeSupported": null,
                        "supportsPdb": true,
                        "version": "23.0.0.0.0",
                        "id": "23.0.0.0.0",
                        "displayName": "23.0.0.0.0"
                    }
                ],
                "cpeDeviceShape": [
                    {
                        "id": "RTX RTX830 Firmware Rev.15.02.03",
                        "cpeDeviceInfo": {
                            "vendor": "Yamaha",
                            "platformSoftwareVersion": "RTX RTX830 Firmware Rev.15.02.03"
                        },
                        "displayName": "Yamaha RTX RTX830 Firmware Rev.15.02.03"
                    },
                    {
                        "id": "FortiGate 6.0.4 or later",
                        "cpeDeviceInfo": {
                            "vendor": "Fortinet",
                            "platformSoftwareVersion": "FortiGate 6.0.4 or later"
                        },
                        "displayName": "Fortinet FortiGate 6.0.4 or later"
                    },
                    {
                        "id": "SRX Series - JunOS 11.0 or later",
                        "cpeDeviceInfo": {
                            "vendor": "Juniper",
                            "platformSoftwareVersion": "SRX Series - JunOS 11.0 or later"
                        },
                        "displayName": "Juniper SRX Series - JunOS 11.0 or later"
                    },
                    {
                        "id": "PAN-OS 8.0.0",
                        "cpeDeviceInfo": {
                            "vendor": "Palo Alto",
                            "platformSoftwareVersion": "PAN-OS 8.0.0"
                        },
                        "displayName": "Palo Alto PAN-OS 8.0.0"
                    },
                    {
                        "id": "ASA Route-Based VPN 9.7.1 or later",
                        "cpeDeviceInfo": {
                            "vendor": "Cisco",
                            "platformSoftwareVersion": "ASA Route-Based VPN 9.7.1 or later"
                        },
                        "displayName": "Cisco ASA Route-Based VPN 9.7.1 or later"
                    },
                    {
                        "id": "R80.20",
                        "cpeDeviceInfo": {
                            "vendor": "Check Point",
                            "platformSoftwareVersion": "R80.20"
                        },
                        "displayName": "Check Point R80.20"
                    },
                    {
                        "id": "IOS version 15.4M or later",
                        "cpeDeviceInfo": {
                            "vendor": "Cisco",
                            "platformSoftwareVersion": "IOS version 15.4M or later"
                        },
                        "displayName": "Cisco IOS version 15.4M or later"
                    },
                    {
                        "id": "FITELnet-F220/F221 Firmware 01.00(00)[0]00.00.0 [2019/07/05 15:00]",
                        "cpeDeviceInfo": {
                            "vendor": "Furukawa",
                            "platformSoftwareVersion": "FITELnet-F220/F221 Firmware 01.00(00)[0]00.00.0 [2019/07/05 15:00]"
                        },
                        "displayName": "Furukawa FITELnet-F220/F221 Firmware 01.00(00)[0]00.00.0 [2019/07/05 15:00]"
                    },
                    {
                        "id": "3.18 or later",
                        "cpeDeviceInfo": {
                            "vendor": "Libreswan",
                            "platformSoftwareVersion": "3.18 or later"
                        },
                        "displayName": "Libreswan 3.18 or later"
                    },
                    {
                        "id": "MX Series - JunOS 15.1 or later",
                        "cpeDeviceInfo": {
                            "vendor": "Juniper",
                            "platformSoftwareVersion": "MX Series - JunOS 15.1 or later"
                        },
                        "displayName": "Juniper MX Series - JunOS 15.1 or later"
                    },
                    {
                        "id": "IX Series 10.1.16",
                        "cpeDeviceInfo": {
                            "vendor": "NEC",
                            "platformSoftwareVersion": "IX Series 10.1.16"
                        },
                        "displayName": "NEC IX Series 10.1.16"
                    },
                    {
                        "id": "ASA Policy-Based VPN 8.5+ (single tunnel, static)",
                        "cpeDeviceInfo": {
                            "vendor": "Cisco",
                            "platformSoftwareVersion": "ASA Policy-Based VPN 8.5+ (single tunnel, static)"
                        },
                        "displayName": "Cisco ASA Policy-Based VPN 8.5+ (single tunnel, static)"
                    },
                    {
                        "id": "N.A",
                        "cpeDeviceInfo": {
                            "vendor": "Other",
                            "platformSoftwareVersion": "N.A"
                        },
                        "displayName": "Other N.A"
                    },
                    {
                        "id": "RTX RTX1210 Firmware Rev.14.01.28",
                        "cpeDeviceInfo": {
                            "vendor": "Yamaha",
                            "platformSoftwareVersion": "RTX RTX1210 Firmware Rev.14.01.28"
                        },
                        "displayName": "Yamaha RTX RTX1210 Firmware Rev.14.01.28"
                    },
                    {
                        "id": "Firebox with Fireware v12",
                        "cpeDeviceInfo": {
                            "vendor": "WatchGuard",
                            "platformSoftwareVersion": "Firebox with Fireware v12"
                        },
                        "displayName": "WatchGuard Firebox with Fireware v12"
                    }
                ],
                "datascienceNotebookSessionShapes": [
                    {
                        "name": "BM.GPU.A10.4",
                        "coreCount": 64,
                        "memoryInGBs": 1024,
                        "shapeSeries": "NVIDIA_GPU",
                        "id": "BM.GPU.A10.4",
                        "displayName": "BM.GPU.A10.4"
                    },
                    {
                        "name": "BM.GPU3.8",
                        "coreCount": 52,
                        "memoryInGBs": 768,
                        "shapeSeries": "NVIDIA_GPU",
                        "id": "BM.GPU3.8",
                        "displayName": "BM.GPU3.8"
                    },
                    {
                        "name": "BM.GPU4.8",
                        "coreCount": 64,
                        "memoryInGBs": 2048,
                        "shapeSeries": "NVIDIA_GPU",
                        "id": "BM.GPU4.8",
                        "displayName": "BM.GPU4.8"
                    },
                    {
                        "name": "VM.GPU.A10.1",
                        "coreCount": 15,
                        "memoryInGBs": 240,
                        "shapeSeries": "NVIDIA_GPU",
                        "id": "VM.GPU.A10.1",
                        "displayName": "VM.GPU.A10.1"
                    },
                    {
                        "name": "VM.GPU.A10.2",
                        "coreCount": 30,
                        "memoryInGBs": 480,
                        "shapeSeries": "NVIDIA_GPU",
                        "id": "VM.GPU.A10.2",
                        "displayName": "VM.GPU.A10.2"
                    },
                    {
                        "name": "VM.GPU3.1",
                        "coreCount": 6,
                        "memoryInGBs": 90,
                        "shapeSeries": "NVIDIA_GPU",
                        "id": "VM.GPU3.1",
                        "displayName": "VM.GPU3.1"
                    },
                    {
                        "name": "VM.GPU3.2",
                        "coreCount": 12,
                        "memoryInGBs": 180,
                        "shapeSeries": "NVIDIA_GPU",
                        "id": "VM.GPU3.2",
                        "displayName": "VM.GPU3.2"
                    },
                    {
                        "name": "VM.GPU3.4",
                        "coreCount": 24,
                        "memoryInGBs": 360,
                        "shapeSeries": "NVIDIA_GPU",
                        "id": "VM.GPU3.4",
                        "displayName": "VM.GPU3.4"
                    },
                    {
                        "name": "VM.Optimized3.Flex",
                        "coreCount": 18,
                        "memoryInGBs": 256,
                        "shapeSeries": "INTEL_SKYLAKE",
                        "id": "VM.Optimized3.Flex",
                        "displayName": "VM.Optimized3.Flex"
                    },
                    {
                        "name": "VM.Standard.E3.Flex",
                        "coreCount": 64,
                        "memoryInGBs": 1024,
                        "shapeSeries": "AMD_ROME",
                        "id": "VM.Standard.E3.Flex",
                        "displayName": "VM.Standard.E3.Flex"
                    },
                    {
                        "name": "VM.Standard.E4.Flex",
                        "coreCount": 64,
                        "memoryInGBs": 1024,
                        "shapeSeries": "AMD_ROME",
                        "id": "VM.Standard.E4.Flex",
                        "displayName": "VM.Standard.E4.Flex"
                    },
                    {
                        "name": "VM.Standard2.1",
                        "coreCount": 1,
                        "memoryInGBs": 15,
                        "shapeSeries": "INTEL_SKYLAKE",
                        "id": "VM.Standard2.1",
                        "displayName": "VM.Standard2.1"
                    },
                    {
                        "name": "VM.Standard2.16",
                        "coreCount": 16,
                        "memoryInGBs": 240,
                        "shapeSeries": "INTEL_SKYLAKE",
                        "id": "VM.Standard2.16",
                        "displayName": "VM.Standard2.16"
                    },
                    {
                        "name": "VM.Standard2.2",
                        "coreCount": 2,
                        "memoryInGBs": 30,
                        "shapeSeries": "INTEL_SKYLAKE",
                        "id": "VM.Standard2.2",
                        "displayName": "VM.Standard2.2"
                    },
                    {
                        "name": "VM.Standard2.24",
                        "coreCount": 24,
                        "memoryInGBs": 320,
                        "shapeSeries": "INTEL_SKYLAKE",
                        "id": "VM.Standard2.24",
                        "displayName": "VM.Standard2.24"
                    },
                    {
                        "name": "VM.Standard2.4",
                        "coreCount": 4,
                        "memoryInGBs": 30,
                        "shapeSeries": "INTEL_SKYLAKE",
                        "id": "VM.Standard2.4",
                        "displayName": "VM.Standard2.4"
                    },
                    {
                        "name": "VM.Standard2.8",
                        "coreCount": 8,
                        "memoryInGBs": 120,
                        "shapeSeries": "INTEL_SKYLAKE",
                        "id": "VM.Standard2.8",
                        "displayName": "VM.Standard2.8"
                    },
                    {
                        "name": "VM.Standard3.Flex",
                        "coreCount": 32,
                        "memoryInGBs": 512,
                        "shapeSeries": "INTEL_SKYLAKE",
                        "id": "VM.Standard3.Flex",
                        "displayName": "VM.Standard3.Flex"
                    }
                ],
                "services": [
                    {
                        "name": "adm",
                        "description": "Application Dependency Management",
                        "id": "adm",
                        "displayName": "adm"
                    },
                    {
                        "name": "ai-anomaly-detection",
                        "description": "AI Anomaly Detection",
                        "id": "ai-anomaly-detection",
                        "displayName": "ai-anomaly-detection"
                    },
                    {
                        "name": "ai-forecasting",
                        "description": "AI Forecasting",
                        "id": "ai-forecasting",
                        "displayName": "ai-forecasting"
                    },
                    {
                        "name": "ai-generative",
                        "description": "Generative AI",
                        "id": "ai-generative",
                        "displayName": "ai-generative"
                    },
                    {
                        "name": "ai-language",
                        "description": "AI Language",
                        "id": "ai-language",
                        "displayName": "ai-language"
                    },
                    {
                        "name": "ai-vision",
                        "description": "AI Vision",
                        "id": "ai-vision",
                        "displayName": "ai-vision"
                    },
                    {
                        "name": "analytics",
                        "description": "Analytics",
                        "id": "analytics",
                        "displayName": "analytics"
                    },
                    {
                        "name": "api-gateway",
                        "description": "API Gateway",
                        "id": "api-gateway",
                        "displayName": "api-gateway"
                    },
                    {
                        "name": "apm",
                        "description": "Application Performance Monitoring",
                        "id": "apm",
                        "displayName": "apm"
                    },
                    {
                        "name": "app-configuration",
                        "description": "Application Configuration",
                        "id": "app-configuration",
                        "displayName": "app-configuration"
                    },
                    {
                        "name": "atat",
                        "description": "Account Tracking and Automation Tools",
                        "id": "atat",
                        "displayName": "atat"
                    },
                    {
                        "name": "auto-scaling",
                        "description": "Auto Scaling",
                        "id": "auto-scaling",
                        "displayName": "auto-scaling"
                    },
                    {
                        "name": "autonomous-recovery-service",
                        "description": "Autonomous Recovery Service",
                        "id": "autonomous-recovery-service",
                        "displayName": "autonomous-recovery-service"
                    },
                    {
                        "name": "big-data",
                        "description": "Big Data",
                        "id": "big-data",
                        "displayName": "big-data"
                    },
                    {
                        "name": "block-storage",
                        "description": "Block Volume",
                        "id": "block-storage",
                        "displayName": "block-storage"
                    },
                    {
                        "name": "blockchain",
                        "description": "Blockchain",
                        "id": "blockchain",
                        "displayName": "blockchain"
                    },
                    {
                        "name": "ccatc",
                        "description": "Compute Cloud at Customer",
                        "id": "ccatc",
                        "displayName": "ccatc"
                    },
                    {
                        "name": "cloud-bridge",
                        "description": "Oracle Cloud Bridge",
                        "id": "cloud-bridge",
                        "displayName": "cloud-bridge"
                    },
                    {
                        "name": "cloud-shell",
                        "description": "Cloud Shell",
                        "id": "cloud-shell",
                        "displayName": "cloud-shell"
                    },
                    {
                        "name": "cloudguard",
                        "description": "Cloud Guard",
                        "id": "cloudguard",
                        "displayName": "cloudguard"
                    },
                    {
                        "name": "compartments",
                        "description": "Compartments",
                        "id": "compartments",
                        "displayName": "compartments"
                    },
                    {
                        "name": "compute",
                        "description": "Compute",
                        "id": "compute",
                        "displayName": "compute"
                    },
                    {
                        "name": "compute-management",
                        "description": "Compute Management",
                        "id": "compute-management",
                        "displayName": "compute-management"
                    },
                    {
                        "name": "container-engine",
                        "description": "Container Engine",
                        "id": "container-engine",
                        "displayName": "container-engine"
                    },
                    {
                        "name": "cost-management",
                        "description": "Cost Management",
                        "id": "cost-management",
                        "displayName": "cost-management"
                    },
                    {
                        "name": "dashboard",
                        "description": "Dashboard",
                        "id": "dashboard",
                        "displayName": "dashboard"
                    },
                    {
                        "name": "data-catalog",
                        "description": "Data Catalog",
                        "id": "data-catalog",
                        "displayName": "data-catalog"
                    },
                    {
                        "name": "data-flow",
                        "description": "Data Flow",
                        "id": "data-flow",
                        "displayName": "data-flow"
                    },
                    {
                        "name": "data-integration",
                        "description": "Data Integration",
                        "id": "data-integration",
                        "displayName": "data-integration"
                    },
                    {
                        "name": "data-labeling",
                        "description": "Data Labeling",
                        "id": "data-labeling",
                        "displayName": "data-labeling"
                    },
                    {
                        "name": "data-science",
                        "description": "Data Science",
                        "id": "data-science",
                        "displayName": "data-science"
                    },
                    {
                        "name": "data-transfer",
                        "description": "Data Transfer",
                        "id": "data-transfer",
                        "displayName": "data-transfer"
                    },
                    {
                        "name": "database",
                        "description": "Database",
                        "id": "database",
                        "displayName": "database"
                    },
                    {
                        "name": "database-migration",
                        "description": "Database Migration",
                        "id": "database-migration",
                        "displayName": "database-migration"
                    },
                    {
                        "name": "dbtools",
                        "description": "Database Tools",
                        "id": "dbtools",
                        "displayName": "dbtools"
                    },
                    {
                        "name": "devops",
                        "description": "DevOps",
                        "id": "devops",
                        "displayName": "devops"
                    },
                    {
                        "name": "digital-assistant",
                        "description": "Digital Assistant",
                        "id": "digital-assistant",
                        "displayName": "digital-assistant"
                    },
                    {
                        "name": "digital-media",
                        "description": "Digital Media Services",
                        "id": "digital-media",
                        "displayName": "digital-media"
                    },
                    {
                        "name": "disaster-recovery",
                        "description": "Full Stack Disaster Recovery",
                        "id": "disaster-recovery",
                        "displayName": "disaster-recovery"
                    },
                    {
                        "name": "dns",
                        "description": "DNS",
                        "id": "dns",
                        "displayName": "dns"
                    },
                    {
                        "name": "email-delivery",
                        "description": "Email Delivery",
                        "id": "email-delivery",
                        "displayName": "email-delivery"
                    },
                    {
                        "name": "events",
                        "description": "Events",
                        "id": "events",
                        "displayName": "events"
                    },
                    {
                        "name": "exadata-fleet-update",
                        "description": "Exadata Fleet Update",
                        "id": "exadata-fleet-update",
                        "displayName": "exadata-fleet-update"
                    },
                    {
                        "name": "faas",
                        "description": "Functions",
                        "id": "faas",
                        "displayName": "faas"
                    },
                    {
                        "name": "fams",
                        "description": "Fleet Application Management",
                        "id": "fams",
                        "displayName": "fams"
                    },
                    {
                        "name": "fast-connect",
                        "description": "Fast Connect",
                        "id": "fast-connect",
                        "displayName": "fast-connect"
                    },
                    {
                        "name": "filesystem",
                        "description": "File Storage",
                        "id": "filesystem",
                        "displayName": "filesystem"
                    },
                    {
                        "name": "goldengate",
                        "description": "GoldenGate",
                        "id": "goldengate",
                        "displayName": "goldengate"
                    },
                    {
                        "name": "health-checks",
                        "description": "Health Check",
                        "id": "health-checks",
                        "displayName": "health-checks"
                    },
                    {
                        "name": "integration",
                        "description": "Integration",
                        "id": "integration",
                        "displayName": "integration"
                    },
                    {
                        "name": "java-management",
                        "description": "Java Management",
                        "id": "java-management",
                        "displayName": "java-management"
                    },
                    {
                        "name": "kms",
                        "description": "Key Management",
                        "id": "kms",
                        "displayName": "kms"
                    },
                    {
                        "name": "licensemanager",
                        "description": "License Manager",
                        "id": "licensemanager",
                        "displayName": "licensemanager"
                    },
                    {
                        "name": "limits",
                        "description": "Limits",
                        "id": "limits",
                        "displayName": "limits"
                    },
                    {
                        "name": "load-balancer",
                        "description": "LbaaS",
                        "id": "load-balancer",
                        "displayName": "load-balancer"
                    },
                    {
                        "name": "logging",
                        "description": "Logging",
                        "id": "logging",
                        "displayName": "logging"
                    },
                    {
                        "name": "logging-analytics",
                        "description": "Logging Analytics",
                        "id": "logging-analytics",
                        "displayName": "logging-analytics"
                    },
                    {
                        "name": "management-agent",
                        "description": "Management Agent",
                        "id": "management-agent",
                        "displayName": "management-agent"
                    },
                    {
                        "name": "management-dashboard",
                        "description": "Management Dashboard",
                        "id": "management-dashboard",
                        "displayName": "management-dashboard"
                    },
                    {
                        "name": "marketplace-publisher",
                        "description": "Marketplace Publisher",
                        "id": "marketplace-publisher",
                        "displayName": "marketplace-publisher"
                    },
                    {
                        "name": "mysql",
                        "description": "MySQL HeatWave",
                        "id": "mysql",
                        "displayName": "mysql"
                    },
                    {
                        "name": "mysql-heatwave-on-aws",
                        "description": "MySQL HeatWave on AWS",
                        "id": "mysql-heatwave-on-aws",
                        "displayName": "mysql-heatwave-on-aws"
                    },
                    {
                        "name": "network-firewall",
                        "description": "Network Firewall",
                        "id": "network-firewall",
                        "displayName": "network-firewall"
                    },
                    {
                        "name": "network-load-balancer-api",
                        "description": "Network Load Balancer",
                        "id": "network-load-balancer-api",
                        "displayName": "network-load-balancer-api"
                    },
                    {
                        "name": "network-path-analyzer",
                        "description": "Network Path Analyzer",
                        "id": "network-path-analyzer",
                        "displayName": "network-path-analyzer"
                    },
                    {
                        "name": "nosql",
                        "description": "NoSQL",
                        "id": "nosql",
                        "displayName": "nosql"
                    },
                    {
                        "name": "notifications",
                        "description": "Notifications",
                        "id": "notifications",
                        "displayName": "notifications"
                    },
                    {
                        "name": "object-storage",
                        "description": "Object Storage",
                        "id": "object-storage",
                        "displayName": "object-storage"
                    },
                    {
                        "name": "ocm-migration",
                        "description": "Oracle Cloud Migration",
                        "id": "ocm-migration",
                        "displayName": "ocm-migration"
                    },
                    {
                        "name": "ocvp",
                        "description": "VMware Solution",
                        "id": "ocvp",
                        "displayName": "ocvp"
                    },
                    {
                        "name": "open-search",
                        "description": "OpenSearch",
                        "id": "open-search",
                        "displayName": "open-search"
                    },
                    {
                        "name": "organizations",
                        "description": "Organizations",
                        "id": "organizations",
                        "displayName": "organizations"
                    },
                    {
                        "name": "osd",
                        "description": "Oracle Sharded Database",
                        "id": "osd",
                        "displayName": "osd"
                    },
                    {
                        "name": "osmh",
                        "description": "OS Management Hub",
                        "id": "osmh",
                        "displayName": "osmh"
                    },
                    {
                        "name": "postgresql",
                        "description": "PostgreSQL",
                        "id": "postgresql",
                        "displayName": "postgresql"
                    },
                    {
                        "name": "queue",
                        "description": "Queue",
                        "id": "queue",
                        "displayName": "queue"
                    },
                    {
                        "name": "redis",
                        "description": "Redis",
                        "id": "redis",
                        "displayName": "redis"
                    },
                    {
                        "name": "regions",
                        "description": "Regions",
                        "id": "regions",
                        "displayName": "regions"
                    },
                    {
                        "name": "resource-manager",
                        "description": "Resource Manager",
                        "id": "resource-manager",
                        "displayName": "resource-manager"
                    },
                    {
                        "name": "secure-desktops",
                        "description": "Secure Desktops",
                        "id": "secure-desktops",
                        "displayName": "secure-desktops"
                    },
                    {
                        "name": "service-connector-hub",
                        "description": "Service Connector Hub",
                        "id": "service-connector-hub",
                        "displayName": "service-connector-hub"
                    },
                    {
                        "name": "service-mesh",
                        "description": "Service Mesh",
                        "id": "service-mesh",
                        "displayName": "service-mesh"
                    },
                    {
                        "name": "streaming",
                        "description": "Streaming",
                        "id": "streaming",
                        "displayName": "streaming"
                    },
                    {
                        "name": "subscription-pricing",
                        "description": "Subscription Pricing",
                        "id": "subscription-pricing",
                        "displayName": "subscription-pricing"
                    },
                    {
                        "name": "vcn",
                        "description": "Virtual Cloud Network",
                        "id": "vcn",
                        "displayName": "vcn"
                    },
                    {
                        "name": "vcnip",
                        "description": "IP Management",
                        "id": "vcnip",
                        "displayName": "vcnip"
                    },
                    {
                        "name": "visualbuilder",
                        "description": "Visual Builder",
                        "id": "visualbuilder",
                        "displayName": "visualbuilder"
                    },
                    {
                        "name": "vpn",
                        "description": "VPN",
                        "id": "vpn",
                        "displayName": "vpn"
                    },
                    {
                        "name": "vulnerability-scanning",
                        "description": "Vulnerability Scanning",
                        "id": "vulnerability-scanning",
                        "displayName": "vulnerability-scanning"
                    },
                    {
                        "name": "waa",
                        "description": "Web Application Acceleration",
                        "id": "waa",
                        "displayName": "waa"
                    },
                    {
                        "name": "waas",
                        "description": "WaaS",
                        "id": "waas",
                        "displayName": "waas"
                    },
                    {
                        "name": "waf",
                        "description": "Web Application Firewall",
                        "id": "waf",
                        "displayName": "waf"
                    }
                ],
                "podShapes": [
                    {
                        "name": "Pod.Standard.A1.Flex",
                        "processorDescription": null,
                        "id": "Pod.Standard.A1.Flex",
                        "displayName": "Pod.Standard.A1.Flex"
                    },
                    {
                        "name": "Pod.Standard.E3.Flex",
                        "processorDescription": null,
                        "id": "Pod.Standard.E3.Flex",
                        "displayName": "Pod.Standard.E3.Flex"
                    },
                    {
                        "name": "Pod.Standard.E4.Flex",
                        "processorDescription": null,
                        "id": "Pod.Standard.E4.Flex",
                        "displayName": "Pod.Standard.E4.Flex"
                    }
                ],
                "kubernetesVersions": [
                    {
                        "id": "v1.25.4",
                        "displayName": "v1.25.4",
                        "version": "v1.25.4"
                    },
                    {
                        "id": "v1.25.12",
                        "displayName": "v1.25.12",
                        "version": "v1.25.12"
                    },
                    {
                        "id": "v1.26.2",
                        "displayName": "v1.26.2",
                        "version": "v1.26.2"
                    },
                    {
                        "id": "v1.26.7",
                        "displayName": "v1.26.7",
                        "version": "v1.26.7"
                    },
                    {
                        "id": "v1.27.2",
                        "displayName": "v1.27.2",
                        "version": "v1.27.2"
                    }
                ],
                "clusterPodNetworkOptions": [
                    {
                        "cniType": "OCI_VCN_IP_NATIVE",
                        "id": "OCI_VCN_IP_NATIVE",
                        "displayName": "OCI_VCN_IP_NATIVE"
                    },
                    {
                        "cniType": "FLANNEL_OVERLAY",
                        "id": "FLANNEL_OVERLAY",
                        "displayName": "FLANNEL_OVERLAY"
                    }
                ],
                "nodePoolOptions": {
                    "kubernetesVersions": [
                        {
                            "id": "v1.25.4",
                            "displayName": "v1.25.4",
                            "version": "v1.25.4"
                        },
                        {
                            "id": "v1.25.12",
                            "displayName": "v1.25.12",
                            "version": "v1.25.12"
                        },
                        {
                            "id": "v1.26.2",
                            "displayName": "v1.26.2",
                            "version": "v1.26.2"
                        },
                        {
                            "id": "v1.26.7",
                            "displayName": "v1.26.7",
                            "version": "v1.26.7"
                        },
                        {
                            "id": "v1.27.2",
                            "displayName": "v1.27.2",
                            "version": "v1.27.2"
                        }
                    ],
                    "shapes": [
                        {
                            "id": "BM.DenseIO.E4.128",
                            "displayName": "BM.DenseIO.E4.128"
                        },
                        {
                            "id": "BM.DenseIO2.52",
                            "displayName": "BM.DenseIO2.52"
                        },
                        {
                            "id": "BM.Optimized3.36",
                            "displayName": "BM.Optimized3.36"
                        },
                        {
                            "id": "BM.Standard.A1.160",
                            "displayName": "BM.Standard.A1.160"
                        },
                        {
                            "id": "BM.Standard.E2.64",
                            "displayName": "BM.Standard.E2.64"
                        },
                        {
                            "id": "BM.Standard.E3.128",
                            "displayName": "BM.Standard.E3.128"
                        },
                        {
                            "id": "BM.Standard.E4.128",
                            "displayName": "BM.Standard.E4.128"
                        },
                        {
                            "id": "BM.Standard.E5.192",
                            "displayName": "BM.Standard.E5.192"
                        },
                        {
                            "id": "BM.Standard1.36",
                            "displayName": "BM.Standard1.36"
                        },
                        {
                            "id": "BM.Standard2.52",
                            "displayName": "BM.Standard2.52"
                        },
                        {
                            "id": "BM.Standard3.64",
                            "displayName": "BM.Standard3.64"
                        },
                        {
                            "id": "VM.DenseIO.E4.Flex",
                            "displayName": "VM.DenseIO.E4.Flex"
                        },
                        {
                            "id": "VM.DenseIO2.16",
                            "displayName": "VM.DenseIO2.16"
                        },
                        {
                            "id": "VM.DenseIO2.24",
                            "displayName": "VM.DenseIO2.24"
                        },
                        {
                            "id": "VM.DenseIO2.8",
                            "displayName": "VM.DenseIO2.8"
                        },
                        {
                            "id": "VM.Optimized3.Flex",
                            "displayName": "VM.Optimized3.Flex"
                        },
                        {
                            "id": "VM.Standard.A1.Flex",
                            "displayName": "VM.Standard.A1.Flex"
                        },
                        {
                            "id": "VM.Standard.AMD.Generic",
                            "displayName": "VM.Standard.AMD.Generic"
                        },
                        {
                            "id": "VM.Standard.Ampere.Generic",
                            "displayName": "VM.Standard.Ampere.Generic"
                        },
                        {
                            "id": "VM.Standard.E2.1",
                            "displayName": "VM.Standard.E2.1"
                        },
                        {
                            "id": "VM.Standard.E2.2",
                            "displayName": "VM.Standard.E2.2"
                        },
                        {
                            "id": "VM.Standard.E2.4",
                            "displayName": "VM.Standard.E2.4"
                        },
                        {
                            "id": "VM.Standard.E2.8",
                            "displayName": "VM.Standard.E2.8"
                        },
                        {
                            "id": "VM.Standard.E3.Flex",
                            "displayName": "VM.Standard.E3.Flex"
                        },
                        {
                            "id": "VM.Standard.E4.Flex",
                            "displayName": "VM.Standard.E4.Flex"
                        },
                        {
                            "id": "VM.Standard.E5.Flex",
                            "displayName": "VM.Standard.E5.Flex"
                        },
                        {
                            "id": "VM.Standard.Intel.Generic",
                            "displayName": "VM.Standard.Intel.Generic"
                        },
                        {
                            "id": "VM.Standard.x86.Generic",
                            "displayName": "VM.Standard.x86.Generic"
                        },
                        {
                            "id": "VM.Standard1.1",
                            "displayName": "VM.Standard1.1"
                        },
                        {
                            "id": "VM.Standard1.16",
                            "displayName": "VM.Standard1.16"
                        },
                        {
                            "id": "VM.Standard1.2",
                            "displayName": "VM.Standard1.2"
                        },
                        {
                            "id": "VM.Standard1.4",
                            "displayName": "VM.Standard1.4"
                        },
                        {
                            "id": "VM.Standard1.8",
                            "displayName": "VM.Standard1.8"
                        },
                        {
                            "id": "VM.Standard2.1",
                            "displayName": "VM.Standard2.1"
                        },
                        {
                            "id": "VM.Standard2.16",
                            "displayName": "VM.Standard2.16"
                        },
                        {
                            "id": "VM.Standard2.2",
                            "displayName": "VM.Standard2.2"
                        },
                        {
                            "id": "VM.Standard2.24",
                            "displayName": "VM.Standard2.24"
                        },
                        {
                            "id": "VM.Standard2.4",
                            "displayName": "VM.Standard2.4"
                        },
                        {
                            "id": "VM.Standard2.8",
                            "displayName": "VM.Standard2.8"
                        },
                        {
                            "id": "VM.Standard3.Flex",
                            "displayName": "VM.Standard3.Flex"
                        }
                    ],
                    "images": [
                        {
                            "id": "Oracle-Linux-8.8-aarch64-2023.09.26-0-OKE-1.27.2-648",
                            "displayName": "Oracle-Linux-8.8-aarch64-2023.09.26-0-OKE-1.27.2-648"
                        },
                        {
                            "id": "Oracle-Linux-8.8-aarch64-2023.09.26-0-OKE-1.26.7-648",
                            "displayName": "Oracle-Linux-8.8-aarch64-2023.09.26-0-OKE-1.26.7-648"
                        },
                        {
                            "id": "Oracle-Linux-8.8-aarch64-2023.09.26-0-OKE-1.26.2-648",
                            "displayName": "Oracle-Linux-8.8-aarch64-2023.09.26-0-OKE-1.26.2-648"
                        },
                        {
                            "id": "Oracle-Linux-8.8-aarch64-2023.09.26-0-OKE-1.25.4-648",
                            "displayName": "Oracle-Linux-8.8-aarch64-2023.09.26-0-OKE-1.25.4-648"
                        },
                        {
                            "id": "Oracle-Linux-8.8-aarch64-2023.09.26-0-OKE-1.25.12-648",
                            "displayName": "Oracle-Linux-8.8-aarch64-2023.09.26-0-OKE-1.25.12-648"
                        },
                        {
                            "id": "Oracle-Linux-8.8-aarch64-2023.08.31-0-OKE-1.27.2-642",
                            "displayName": "Oracle-Linux-8.8-aarch64-2023.08.31-0-OKE-1.27.2-642"
                        },
                        {
                            "id": "Oracle-Linux-8.8-aarch64-2023.08.31-0-OKE-1.26.7-642",
                            "displayName": "Oracle-Linux-8.8-aarch64-2023.08.31-0-OKE-1.26.7-642"
                        },
                        {
                            "id": "Oracle-Linux-8.8-aarch64-2023.08.31-0-OKE-1.26.2-645",
                            "displayName": "Oracle-Linux-8.8-aarch64-2023.08.31-0-OKE-1.26.2-645"
                        },
                        {
                            "id": "Oracle-Linux-8.8-aarch64-2023.08.31-0-OKE-1.25.4-645",
                            "displayName": "Oracle-Linux-8.8-aarch64-2023.08.31-0-OKE-1.25.4-645"
                        },
                        {
                            "id": "Oracle-Linux-8.8-aarch64-2023.08.31-0-OKE-1.25.12-642",
                            "displayName": "Oracle-Linux-8.8-aarch64-2023.08.31-0-OKE-1.25.12-642"
                        },
                        {
                            "id": "Oracle-Linux-8.8-aarch64-2023.07.31-1-OKE-1.27.2-633",
                            "displayName": "Oracle-Linux-8.8-aarch64-2023.07.31-1-OKE-1.27.2-633"
                        },
                        {
                            "id": "Oracle-Linux-8.8-aarch64-2023.07.31-1-OKE-1.26.7-633",
                            "displayName": "Oracle-Linux-8.8-aarch64-2023.07.31-1-OKE-1.26.7-633"
                        },
                        {
                            "id": "Oracle-Linux-8.8-aarch64-2023.07.31-1-OKE-1.26.2-645",
                            "displayName": "Oracle-Linux-8.8-aarch64-2023.07.31-1-OKE-1.26.2-645"
                        },
                        {
                            "id": "Oracle-Linux-8.8-aarch64-2023.07.31-1-OKE-1.25.4-645",
                            "displayName": "Oracle-Linux-8.8-aarch64-2023.07.31-1-OKE-1.25.4-645"
                        },
                        {
                            "id": "Oracle-Linux-8.8-aarch64-2023.07.31-1-OKE-1.25.12-633",
                            "displayName": "Oracle-Linux-8.8-aarch64-2023.07.31-1-OKE-1.25.12-633"
                        },
                        {
                            "id": "Oracle-Linux-8.8-Gen2-GPU-2023.08.31-0-OKE-1.27.2-642",
                            "displayName": "Oracle-Linux-8.8-Gen2-GPU-2023.08.31-0-OKE-1.27.2-642"
                        },
                        {
                            "id": "Oracle-Linux-8.8-Gen2-GPU-2023.08.31-0-OKE-1.26.7-642",
                            "displayName": "Oracle-Linux-8.8-Gen2-GPU-2023.08.31-0-OKE-1.26.7-642"
                        },
                        {
                            "id": "Oracle-Linux-8.8-Gen2-GPU-2023.08.31-0-OKE-1.26.2-645",
                            "displayName": "Oracle-Linux-8.8-Gen2-GPU-2023.08.31-0-OKE-1.26.2-645"
                        },
                        {
                            "id": "Oracle-Linux-8.8-Gen2-GPU-2023.08.31-0-OKE-1.25.4-645",
                            "displayName": "Oracle-Linux-8.8-Gen2-GPU-2023.08.31-0-OKE-1.25.4-645"
                        },
                        {
                            "id": "Oracle-Linux-8.8-Gen2-GPU-2023.08.31-0-OKE-1.25.12-642",
                            "displayName": "Oracle-Linux-8.8-Gen2-GPU-2023.08.31-0-OKE-1.25.12-642"
                        },
                        {
                            "id": "Oracle-Linux-8.8-Gen2-GPU-2023.07.31-1-OKE-1.27.2-633",
                            "displayName": "Oracle-Linux-8.8-Gen2-GPU-2023.07.31-1-OKE-1.27.2-633"
                        },
                        {
                            "id": "Oracle-Linux-8.8-Gen2-GPU-2023.07.31-1-OKE-1.26.7-633",
                            "displayName": "Oracle-Linux-8.8-Gen2-GPU-2023.07.31-1-OKE-1.26.7-633"
                        },
                        {
                            "id": "Oracle-Linux-8.8-Gen2-GPU-2023.07.31-1-OKE-1.26.2-645",
                            "displayName": "Oracle-Linux-8.8-Gen2-GPU-2023.07.31-1-OKE-1.26.2-645"
                        },
                        {
                            "id": "Oracle-Linux-8.8-Gen2-GPU-2023.07.31-1-OKE-1.25.4-645",
                            "displayName": "Oracle-Linux-8.8-Gen2-GPU-2023.07.31-1-OKE-1.25.4-645"
                        },
                        {
                            "id": "Oracle-Linux-8.8-Gen2-GPU-2023.07.31-1-OKE-1.25.12-633",
                            "displayName": "Oracle-Linux-8.8-Gen2-GPU-2023.07.31-1-OKE-1.25.12-633"
                        },
                        {
                            "id": "Oracle-Linux-8.8-Gen2-GPU-2023.06.30-0-OKE-1.27.2-632",
                            "displayName": "Oracle-Linux-8.8-Gen2-GPU-2023.06.30-0-OKE-1.27.2-632"
                        },
                        {
                            "id": "Oracle-Linux-8.8-Gen2-GPU-2023.06.30-0-OKE-1.26.2-632",
                            "displayName": "Oracle-Linux-8.8-Gen2-GPU-2023.06.30-0-OKE-1.26.2-632"
                        },
                        {
                            "id": "Oracle-Linux-8.8-Gen2-GPU-2023.06.30-0-OKE-1.25.4-632",
                            "displayName": "Oracle-Linux-8.8-Gen2-GPU-2023.06.30-0-OKE-1.25.4-632"
                        },
                        {
                            "id": "Oracle-Linux-8.8-2023.09.26-0-OKE-1.27.2-648",
                            "displayName": "Oracle-Linux-8.8-2023.09.26-0-OKE-1.27.2-648"
                        },
                        {
                            "id": "Oracle-Linux-8.8-2023.09.26-0-OKE-1.26.7-648",
                            "displayName": "Oracle-Linux-8.8-2023.09.26-0-OKE-1.26.7-648"
                        },
                        {
                            "id": "Oracle-Linux-8.8-2023.09.26-0-OKE-1.26.2-648",
                            "displayName": "Oracle-Linux-8.8-2023.09.26-0-OKE-1.26.2-648"
                        },
                        {
                            "id": "Oracle-Linux-8.8-2023.09.26-0-OKE-1.25.4-648",
                            "displayName": "Oracle-Linux-8.8-2023.09.26-0-OKE-1.25.4-648"
                        },
                        {
                            "id": "Oracle-Linux-8.8-2023.09.26-0-OKE-1.25.12-648",
                            "displayName": "Oracle-Linux-8.8-2023.09.26-0-OKE-1.25.12-648"
                        },
                        {
                            "id": "Oracle-Linux-8.8-2023.08.31-0-OKE-1.27.2-642",
                            "displayName": "Oracle-Linux-8.8-2023.08.31-0-OKE-1.27.2-642"
                        },
                        {
                            "id": "Oracle-Linux-8.8-2023.08.31-0-OKE-1.26.7-642",
                            "displayName": "Oracle-Linux-8.8-2023.08.31-0-OKE-1.26.7-642"
                        },
                        {
                            "id": "Oracle-Linux-8.8-2023.08.31-0-OKE-1.26.2-645",
                            "displayName": "Oracle-Linux-8.8-2023.08.31-0-OKE-1.26.2-645"
                        },
                        {
                            "id": "Oracle-Linux-8.8-2023.08.31-0-OKE-1.25.4-645",
                            "displayName": "Oracle-Linux-8.8-2023.08.31-0-OKE-1.25.4-645"
                        },
                        {
                            "id": "Oracle-Linux-8.8-2023.08.31-0-OKE-1.25.12-642",
                            "displayName": "Oracle-Linux-8.8-2023.08.31-0-OKE-1.25.12-642"
                        },
                        {
                            "id": "Oracle-Linux-8.8-2023.07.31-1-OKE-1.27.2-633",
                            "displayName": "Oracle-Linux-8.8-2023.07.31-1-OKE-1.27.2-633"
                        },
                        {
                            "id": "Oracle-Linux-8.8-2023.07.31-1-OKE-1.26.7-633",
                            "displayName": "Oracle-Linux-8.8-2023.07.31-1-OKE-1.26.7-633"
                        },
                        {
                            "id": "Oracle-Linux-8.8-2023.07.31-1-OKE-1.26.2-645",
                            "displayName": "Oracle-Linux-8.8-2023.07.31-1-OKE-1.26.2-645"
                        },
                        {
                            "id": "Oracle-Linux-8.8-2023.07.31-1-OKE-1.25.4-645",
                            "displayName": "Oracle-Linux-8.8-2023.07.31-1-OKE-1.25.4-645"
                        },
                        {
                            "id": "Oracle-Linux-8.8-2023.07.31-1-OKE-1.25.12-633",
                            "displayName": "Oracle-Linux-8.8-2023.07.31-1-OKE-1.25.12-633"
                        },
                        {
                            "id": "Oracle-Linux-7.9-aarch64-2023.09.26-0-OKE-1.27.2-648",
                            "displayName": "Oracle-Linux-7.9-aarch64-2023.09.26-0-OKE-1.27.2-648"
                        },
                        {
                            "id": "Oracle-Linux-7.9-aarch64-2023.09.26-0-OKE-1.26.7-648",
                            "displayName": "Oracle-Linux-7.9-aarch64-2023.09.26-0-OKE-1.26.7-648"
                        },
                        {
                            "id": "Oracle-Linux-7.9-aarch64-2023.09.26-0-OKE-1.26.2-648",
                            "displayName": "Oracle-Linux-7.9-aarch64-2023.09.26-0-OKE-1.26.2-648"
                        },
                        {
                            "id": "Oracle-Linux-7.9-aarch64-2023.09.26-0-OKE-1.25.4-648",
                            "displayName": "Oracle-Linux-7.9-aarch64-2023.09.26-0-OKE-1.25.4-648"
                        },
                        {
                            "id": "Oracle-Linux-7.9-aarch64-2023.09.26-0-OKE-1.25.12-648",
                            "displayName": "Oracle-Linux-7.9-aarch64-2023.09.26-0-OKE-1.25.12-648"
                        },
                        {
                            "id": "Oracle-Linux-7.9-aarch64-2023.08.31-0-OKE-1.27.2-642",
                            "displayName": "Oracle-Linux-7.9-aarch64-2023.08.31-0-OKE-1.27.2-642"
                        },
                        {
                            "id": "Oracle-Linux-7.9-aarch64-2023.08.31-0-OKE-1.26.7-642",
                            "displayName": "Oracle-Linux-7.9-aarch64-2023.08.31-0-OKE-1.26.7-642"
                        },
                        {
                            "id": "Oracle-Linux-7.9-aarch64-2023.08.31-0-OKE-1.26.2-645",
                            "displayName": "Oracle-Linux-7.9-aarch64-2023.08.31-0-OKE-1.26.2-645"
                        },
                        {
                            "id": "Oracle-Linux-7.9-aarch64-2023.08.31-0-OKE-1.25.4-645",
                            "displayName": "Oracle-Linux-7.9-aarch64-2023.08.31-0-OKE-1.25.4-645"
                        },
                        {
                            "id": "Oracle-Linux-7.9-aarch64-2023.08.31-0-OKE-1.25.12-642",
                            "displayName": "Oracle-Linux-7.9-aarch64-2023.08.31-0-OKE-1.25.12-642"
                        },
                        {
                            "id": "Oracle-Linux-7.9-aarch64-2023.07.31-0-OKE-1.27.2-633",
                            "displayName": "Oracle-Linux-7.9-aarch64-2023.07.31-0-OKE-1.27.2-633"
                        },
                        {
                            "id": "Oracle-Linux-7.9-aarch64-2023.07.31-0-OKE-1.26.7-633",
                            "displayName": "Oracle-Linux-7.9-aarch64-2023.07.31-0-OKE-1.26.7-633"
                        },
                        {
                            "id": "Oracle-Linux-7.9-aarch64-2023.07.31-0-OKE-1.26.2-645",
                            "displayName": "Oracle-Linux-7.9-aarch64-2023.07.31-0-OKE-1.26.2-645"
                        },
                        {
                            "id": "Oracle-Linux-7.9-aarch64-2023.07.31-0-OKE-1.25.4-645",
                            "displayName": "Oracle-Linux-7.9-aarch64-2023.07.31-0-OKE-1.25.4-645"
                        },
                        {
                            "id": "Oracle-Linux-7.9-aarch64-2023.07.31-0-OKE-1.25.12-633",
                            "displayName": "Oracle-Linux-7.9-aarch64-2023.07.31-0-OKE-1.25.12-633"
                        },
                        {
                            "id": "Oracle-Linux-7.9-Gen2-GPU-2023.08.31-0-OKE-1.27.2-642",
                            "displayName": "Oracle-Linux-7.9-Gen2-GPU-2023.08.31-0-OKE-1.27.2-642"
                        },
                        {
                            "id": "Oracle-Linux-7.9-Gen2-GPU-2023.08.31-0-OKE-1.26.7-642",
                            "displayName": "Oracle-Linux-7.9-Gen2-GPU-2023.08.31-0-OKE-1.26.7-642"
                        },
                        {
                            "id": "Oracle-Linux-7.9-Gen2-GPU-2023.08.31-0-OKE-1.26.2-645",
                            "displayName": "Oracle-Linux-7.9-Gen2-GPU-2023.08.31-0-OKE-1.26.2-645"
                        },
                        {
                            "id": "Oracle-Linux-7.9-Gen2-GPU-2023.08.31-0-OKE-1.25.4-645",
                            "displayName": "Oracle-Linux-7.9-Gen2-GPU-2023.08.31-0-OKE-1.25.4-645"
                        },
                        {
                            "id": "Oracle-Linux-7.9-Gen2-GPU-2023.08.31-0-OKE-1.25.12-642",
                            "displayName": "Oracle-Linux-7.9-Gen2-GPU-2023.08.31-0-OKE-1.25.12-642"
                        },
                        {
                            "id": "Oracle-Linux-7.9-Gen2-GPU-2023.07.31-0-OKE-1.27.2-633",
                            "displayName": "Oracle-Linux-7.9-Gen2-GPU-2023.07.31-0-OKE-1.27.2-633"
                        },
                        {
                            "id": "Oracle-Linux-7.9-Gen2-GPU-2023.07.31-0-OKE-1.26.7-633",
                            "displayName": "Oracle-Linux-7.9-Gen2-GPU-2023.07.31-0-OKE-1.26.7-633"
                        },
                        {
                            "id": "Oracle-Linux-7.9-Gen2-GPU-2023.07.31-0-OKE-1.26.2-645",
                            "displayName": "Oracle-Linux-7.9-Gen2-GPU-2023.07.31-0-OKE-1.26.2-645"
                        },
                        {
                            "id": "Oracle-Linux-7.9-Gen2-GPU-2023.07.31-0-OKE-1.25.4-645",
                            "displayName": "Oracle-Linux-7.9-Gen2-GPU-2023.07.31-0-OKE-1.25.4-645"
                        },
                        {
                            "id": "Oracle-Linux-7.9-Gen2-GPU-2023.07.31-0-OKE-1.25.12-633",
                            "displayName": "Oracle-Linux-7.9-Gen2-GPU-2023.07.31-0-OKE-1.25.12-633"
                        },
                        {
                            "id": "Oracle-Linux-7.9-Gen2-GPU-2023.06.30-0-OKE-1.27.2-632",
                            "displayName": "Oracle-Linux-7.9-Gen2-GPU-2023.06.30-0-OKE-1.27.2-632"
                        },
                        {
                            "id": "Oracle-Linux-7.9-Gen2-GPU-2023.06.30-0-OKE-1.26.2-632",
                            "displayName": "Oracle-Linux-7.9-Gen2-GPU-2023.06.30-0-OKE-1.26.2-632"
                        },
                        {
                            "id": "Oracle-Linux-7.9-Gen2-GPU-2023.06.30-0-OKE-1.25.4-632",
                            "displayName": "Oracle-Linux-7.9-Gen2-GPU-2023.06.30-0-OKE-1.25.4-632"
                        },
                        {
                            "id": "Oracle-Linux-7.9-2023.09.26-0-OKE-1.27.2-648",
                            "displayName": "Oracle-Linux-7.9-2023.09.26-0-OKE-1.27.2-648"
                        },
                        {
                            "id": "Oracle-Linux-7.9-2023.09.26-0-OKE-1.26.7-648",
                            "displayName": "Oracle-Linux-7.9-2023.09.26-0-OKE-1.26.7-648"
                        },
                        {
                            "id": "Oracle-Linux-7.9-2023.09.26-0-OKE-1.26.2-648",
                            "displayName": "Oracle-Linux-7.9-2023.09.26-0-OKE-1.26.2-648"
                        },
                        {
                            "id": "Oracle-Linux-7.9-2023.09.26-0-OKE-1.25.4-648",
                            "displayName": "Oracle-Linux-7.9-2023.09.26-0-OKE-1.25.4-648"
                        },
                        {
                            "id": "Oracle-Linux-7.9-2023.09.26-0-OKE-1.25.12-648",
                            "displayName": "Oracle-Linux-7.9-2023.09.26-0-OKE-1.25.12-648"
                        },
                        {
                            "id": "Oracle-Linux-7.9-2023.08.31-0-OKE-1.27.2-642",
                            "displayName": "Oracle-Linux-7.9-2023.08.31-0-OKE-1.27.2-642"
                        },
                        {
                            "id": "Oracle-Linux-7.9-2023.08.31-0-OKE-1.26.7-642",
                            "displayName": "Oracle-Linux-7.9-2023.08.31-0-OKE-1.26.7-642"
                        },
                        {
                            "id": "Oracle-Linux-7.9-2023.08.31-0-OKE-1.26.2-645",
                            "displayName": "Oracle-Linux-7.9-2023.08.31-0-OKE-1.26.2-645"
                        },
                        {
                            "id": "Oracle-Linux-7.9-2023.08.31-0-OKE-1.25.4-645",
                            "displayName": "Oracle-Linux-7.9-2023.08.31-0-OKE-1.25.4-645"
                        },
                        {
                            "id": "Oracle-Linux-7.9-2023.08.31-0-OKE-1.25.12-642",
                            "displayName": "Oracle-Linux-7.9-2023.08.31-0-OKE-1.25.12-642"
                        },
                        {
                            "id": "Oracle-Linux-7.9-2023.07.31-1-OKE-1.27.2-633",
                            "displayName": "Oracle-Linux-7.9-2023.07.31-1-OKE-1.27.2-633"
                        },
                        {
                            "id": "Oracle-Linux-7.9-2023.07.31-1-OKE-1.26.7-633",
                            "displayName": "Oracle-Linux-7.9-2023.07.31-1-OKE-1.26.7-633"
                        },
                        {
                            "id": "Oracle-Linux-7.9-2023.07.31-1-OKE-1.26.2-645",
                            "displayName": "Oracle-Linux-7.9-2023.07.31-1-OKE-1.26.2-645"
                        },
                        {
                            "id": "Oracle-Linux-7.9-2023.07.31-1-OKE-1.25.4-645",
                            "displayName": "Oracle-Linux-7.9-2023.07.31-1-OKE-1.25.4-645"
                        },
                        {
                            "id": "Oracle-Linux-7.9-2023.07.31-1-OKE-1.25.12-633",
                            "displayName": "Oracle-Linux-7.9-2023.07.31-1-OKE-1.25.12-633"
                        },
                        {
                            "id": "Oracle-Linux-8.8-aarch64-2023.10.24-0",
                            "displayName": "Oracle-Linux-8.8-aarch64-2023.10.24-0"
                        },
                        {
                            "id": "Oracle-Linux-8.8-aarch64-2023.09.26-0",
                            "displayName": "Oracle-Linux-8.8-aarch64-2023.09.26-0"
                        },
                        {
                            "id": "Oracle-Linux-8.8-aarch64-2023.08.31-0",
                            "displayName": "Oracle-Linux-8.8-aarch64-2023.08.31-0"
                        },
                        {
                            "id": "Oracle-Linux-8.8-Gen2-GPU-2023.09.26-0",
                            "displayName": "Oracle-Linux-8.8-Gen2-GPU-2023.09.26-0"
                        },
                        {
                            "id": "Oracle-Linux-8.8-Gen2-GPU-2023.08.31-0",
                            "displayName": "Oracle-Linux-8.8-Gen2-GPU-2023.08.31-0"
                        },
                        {
                            "id": "Oracle-Linux-8.8-Gen2-GPU-2023.08.16-0",
                            "displayName": "Oracle-Linux-8.8-Gen2-GPU-2023.08.16-0"
                        },
                        {
                            "id": "Oracle-Linux-8.8-2023.09.26-0",
                            "displayName": "Oracle-Linux-8.8-2023.09.26-0"
                        },
                        {
                            "id": "Oracle-Linux-8.8-2023.08.31-0",
                            "displayName": "Oracle-Linux-8.8-2023.08.31-0"
                        },
                        {
                            "id": "Oracle-Linux-7.9-aarch64-2023.10.24-0",
                            "displayName": "Oracle-Linux-7.9-aarch64-2023.10.24-0"
                        },
                        {
                            "id": "Oracle-Linux-7.9-aarch64-2023.09.26-0",
                            "displayName": "Oracle-Linux-7.9-aarch64-2023.09.26-0"
                        },
                        {
                            "id": "Oracle-Linux-7.9-aarch64-2023.08.31-0",
                            "displayName": "Oracle-Linux-7.9-aarch64-2023.08.31-0"
                        },
                        {
                            "id": "Oracle-Linux-7.9-Gen2-GPU-2023.09.26-0",
                            "displayName": "Oracle-Linux-7.9-Gen2-GPU-2023.09.26-0"
                        },
                        {
                            "id": "Oracle-Linux-7.9-Gen2-GPU-2023.08.31-0",
                            "displayName": "Oracle-Linux-7.9-Gen2-GPU-2023.08.31-0"
                        },
                        {
                            "id": "Oracle-Linux-7.9-Gen2-GPU-2023.07.31-0",
                            "displayName": "Oracle-Linux-7.9-Gen2-GPU-2023.07.31-0"
                        },
                        {
                            "id": "Oracle-Linux-7.9-2023.09.26-0",
                            "displayName": "Oracle-Linux-7.9-2023.09.26-0"
                        },
                        {
                            "id": "Oracle-Linux-7.9-2023.08.31-0",
                            "displayName": "Oracle-Linux-7.9-2023.08.31-0"
                        },
                        {
                            "id": "Oracle-Linux-7.6",
                            "displayName": "Oracle-Linux-7.6"
                        }
                    ]
                }
            }
        }
    }
}

export default defaultCache

