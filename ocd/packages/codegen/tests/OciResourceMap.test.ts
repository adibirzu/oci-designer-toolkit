import { describe, expect, it } from 'vitest'

import { resourceAttributes, resourceMap } from '../src/importer/data/OciResourceMap'
import { elementOverrides } from '../src/importer/data/OciElementOverrides'

const curatedBatch = [
    {
        terraformType: 'oci_adm_knowledge_base',
        modelType: 'adm_knowledge_base',
        requiredAttributes: ['display_name'],
    },
    {
        terraformType: 'oci_adm_vulnerability_audit',
        modelType: 'adm_vulnerability_audit',
        requiredAttributes: ['knowledge_base_id', 'build_type', 'source.type'],
    },
    {
        terraformType: 'oci_adm_remediation_recipe',
        modelType: 'adm_remediation_recipe',
        requiredAttributes: ['display_name', 'knowledge_base_id', 'scm_configuration.branch'],
    },
    {
        terraformType: 'oci_adm_remediation_run',
        modelType: 'adm_remediation_run',
        requiredAttributes: ['display_name', 'remediation_recipe_id'],
    },
    {
        terraformType: 'oci_ai_document_project',
        modelType: 'ai_document_project',
        requiredAttributes: ['display_name', 'description'],
    },
    {
        terraformType: 'oci_ai_document_model',
        modelType: 'ai_document_model',
        requiredAttributes: ['display_name', 'model_type', 'project_id', 'training_dataset.dataset_type'],
    },
    {
        terraformType: 'oci_ai_language_model',
        modelType: 'ai_language_model',
        requiredAttributes: ['display_name', 'project_id', 'model_details.model_type', 'training_dataset.dataset_type'],
    },
    {
        terraformType: 'oci_ai_anomaly_detection_ai_private_endpoint',
        modelType: 'ai_anomaly_detection_private_endpoint',
        requiredAttributes: ['display_name', 'dns_zones', 'subnet_id'],
    },
    {
        terraformType: 'oci_ai_anomaly_detection_data_asset',
        modelType: 'ai_anomaly_detection_data_asset',
        requiredAttributes: ['display_name', 'project_id', 'private_endpoint_id', 'data_source_details.data_source_type'],
    },
    {
        terraformType: 'oci_ai_anomaly_detection_detect_anomaly_job',
        modelType: 'ai_anomaly_detection_job',
        requiredAttributes: ['display_name', 'model_id', 'input_details.input_type', 'output_details.bucket'],
    },
] as const

const discoveryMigrationBatch = [
    {
        terraformType: 'oci_cloud_bridge_agent',
        modelType: 'cloud_bridge_agent',
        requiredAttributes: ['display_name', 'agent_type', 'environment_id'],
    },
    {
        terraformType: 'oci_cloud_bridge_agent_dependency',
        modelType: 'cloud_bridge_agent_dependency',
        requiredAttributes: ['display_name', 'dependency_name', 'dependency_version'],
    },
    {
        terraformType: 'oci_cloud_bridge_agent_plugin',
        modelType: 'cloud_bridge_agent_plugin',
        requiredAttributes: ['agent_id', 'plugin_name', 'desired_state'],
    },
    {
        terraformType: 'oci_cloud_bridge_asset',
        modelType: 'cloud_bridge_asset',
        requiredAttributes: ['display_name', 'asset_type', 'inventory_id'],
    },
    {
        terraformType: 'oci_cloud_bridge_asset_source',
        modelType: 'cloud_bridge_asset_source',
        requiredAttributes: ['display_name', 'environment_id', 'inventory_id'],
    },
    {
        terraformType: 'oci_cloud_bridge_discovery_schedule',
        modelType: 'cloud_bridge_discovery_schedule',
        requiredAttributes: ['display_name', 'execution_recurrences'],
    },
    {
        terraformType: 'oci_cloud_bridge_environment',
        modelType: 'cloud_bridge_environment',
        requiredAttributes: ['display_name'],
    },
    {
        terraformType: 'oci_cloud_bridge_inventory',
        modelType: 'cloud_bridge_inventory',
        requiredAttributes: ['display_name'],
    },
    {
        terraformType: 'oci_cloud_migrations_migration',
        modelType: 'cloud_migrations_migration',
        requiredAttributes: ['display_name', 'replication_schedule_id'],
    },
    {
        terraformType: 'oci_cloud_migrations_migration_asset',
        modelType: 'cloud_migrations_migration_asset',
        requiredAttributes: ['display_name', 'migration_id', 'inventory_asset_id'],
    },
    {
        terraformType: 'oci_cloud_migrations_migration_plan',
        modelType: 'cloud_migrations_migration_plan',
        requiredAttributes: ['display_name', 'migration_id', 'source_migration_plan_id'],
    },
    {
        terraformType: 'oci_cloud_migrations_replication_schedule',
        modelType: 'cloud_migrations_replication_schedule',
        requiredAttributes: ['display_name', 'execution_recurrences'],
    },
    {
        terraformType: 'oci_cloud_migrations_target_asset',
        modelType: 'cloud_migrations_target_asset',
        requiredAttributes: ['display_name', 'migration_plan_id', 'preferred_shape_type'],
    },
    {
        terraformType: 'oci_stack_monitoring_discovery_job',
        modelType: 'stack_monitoring_discovery_job',
        requiredAttributes: ['discovery_client', 'discovery_type', 'should_propagate_tags_to_discovered_resources'],
    },
    {
        terraformType: 'oci_stack_monitoring_monitored_resource_task',
        modelType: 'stack_monitoring_monitored_resource_task',
        requiredAttributes: ['name', 'work_request_ids'],
    },
    {
        terraformType: 'oci_stack_monitoring_monitored_resource_type',
        modelType: 'stack_monitoring_monitored_resource_type',
        requiredAttributes: ['name', 'display_name', 'metric_namespace'],
    },
    {
        terraformType: 'oci_log_analytics_log_analytics_entity',
        modelType: 'log_analytics_entity',
        requiredAttributes: ['name', 'entity_type_name', 'management_agent_id'],
    },
    {
        terraformType: 'oci_jms_fleet',
        modelType: 'jms_fleet',
        requiredAttributes: ['display_name', 'inventory_log.log_group_id', 'operation_log.log_id'],
    },
    {
        terraformType: 'oci_management_agent_management_agent_install_key',
        modelType: 'management_agent_install_key',
        requiredAttributes: ['display_name', 'allowed_key_install_count', 'time_expires'],
    },
] as const

describe('OciResourceMap catalog curation', () => {
    it('maps the ADM and AI batch to stable OCD resource names', () => {
        curatedBatch.forEach(({ terraformType, modelType }) => {
            expect(resourceMap[terraformType]).toBe(modelType)
        })
    })

    it('curates meaningful editable attributes for each mapped resource', () => {
        curatedBatch.forEach(({ terraformType, requiredAttributes }) => {
            const attributes = resourceAttributes[terraformType] ?? []

            requiredAttributes.forEach((attribute) => {
                expect(attributes).toContain(attribute)
            })
        })
    })

    it('maps discovery and migration resource families to stable OCD resource names', () => {
        discoveryMigrationBatch.forEach(({ terraformType, modelType }) => {
            expect(resourceMap[terraformType]).toBe(modelType)
        })
    })

    it('curates discovery and migration attributes for generated editors', () => {
        discoveryMigrationBatch.forEach(({ terraformType, requiredAttributes }) => {
            const attributes = resourceAttributes[terraformType] ?? []

            requiredAttributes.forEach((attribute) => {
                expect(attributes).toContain(attribute)
            })
        })
    })

    it('resolves discovery references to prefixed generated resource keys', () => {
        expect(elementOverrides.lookupOverrides.oci_cloud_bridge_agent.environment_id).toEqual({
            list: 'cloud_bridge_environment',
            element: 'id',
        })
        expect(elementOverrides.lookupOverrides.oci_cloud_bridge_asset.inventory_id).toEqual({
            list: 'cloud_bridge_inventory',
            element: 'id',
        })
        expect(elementOverrides.lookupOverrides.oci_cloud_bridge_asset_source.assets_compartment_id).toEqual({
            list: 'compartment',
            element: 'id',
        })
        expect(elementOverrides.lookupOverrides.oci_cloud_migrations_migration.replication_schedule_id).toEqual({
            list: 'cloud_migrations_replication_schedule',
            element: 'id',
        })
        expect(elementOverrides.lookupOverrides.oci_cloud_migrations_target_asset.migration_plan_id).toEqual({
            list: 'cloud_migrations_migration_plan',
            element: 'id',
        })
        expect(elementOverrides.lookupOverrides.oci_log_analytics_log_analytics_entity.management_agent_compartment_id).toEqual({
            list: 'compartment',
            element: 'id',
        })
    })

    it('omits discovery attributes that cannot resolve to stable generated lookups', () => {
        expect(resourceAttributes.oci_log_analytics_log_analytics_entity).not.toContain('cloud_resource_id')
    })
})
