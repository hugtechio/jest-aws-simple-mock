
/**
* @description mocks_v3:mockConfigService module is mocks for AWS-SDK V3
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/


function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}
export const mockConfigService = {
  batchGetAggregateResourceConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'batchGetAggregateResourceConfig', 'ConfigService', Promise.resolve(result), true, mock)
  },
  batchGetAggregateResourceConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'batchGetAggregateResourceConfig', 'ConfigService', Promise.resolve(result), false, mock)
  },
  batchGetAggregateResourceConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'batchGetAggregateResourceConfig', 'ConfigService', Promise.reject(result), true, mock)
  },
  batchGetResourceConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'batchGetResourceConfig', 'ConfigService', Promise.resolve(result), true, mock)
  },
  batchGetResourceConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'batchGetResourceConfig', 'ConfigService', Promise.resolve(result), false, mock)
  },
  batchGetResourceConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'batchGetResourceConfig', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteAggregationAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteAggregationAuthorization', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteAggregationAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteAggregationAuthorization', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteAggregationAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteAggregationAuthorization', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteConfigRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteConfigRule', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteConfigRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteConfigRule', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteConfigRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteConfigRule', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteConfigurationAggregator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteConfigurationAggregator', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteConfigurationAggregatorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteConfigurationAggregator', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteConfigurationAggregatorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteConfigurationAggregator', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteConfigurationRecorder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteConfigurationRecorder', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteConfigurationRecorderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteConfigurationRecorder', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteConfigurationRecorderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteConfigurationRecorder', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteConformancePack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteConformancePack', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteConformancePackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteConformancePack', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteConformancePackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteConformancePack', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteDeliveryChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteDeliveryChannel', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteDeliveryChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteDeliveryChannel', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteDeliveryChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteDeliveryChannel', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteEvaluationResults: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteEvaluationResults', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteEvaluationResultsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteEvaluationResults', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteEvaluationResultsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteEvaluationResults', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteOrganizationConfigRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteOrganizationConfigRule', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteOrganizationConfigRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteOrganizationConfigRule', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteOrganizationConfigRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteOrganizationConfigRule', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteOrganizationConformancePack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteOrganizationConformancePack', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteOrganizationConformancePackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteOrganizationConformancePack', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteOrganizationConformancePackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteOrganizationConformancePack', 'ConfigService', Promise.reject(result), true, mock)
  },
  deletePendingAggregationRequest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deletePendingAggregationRequest', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deletePendingAggregationRequestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deletePendingAggregationRequest', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deletePendingAggregationRequestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deletePendingAggregationRequest', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteRemediationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteRemediationConfiguration', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteRemediationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteRemediationConfiguration', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteRemediationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteRemediationConfiguration', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteRemediationExceptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteRemediationExceptions', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteRemediationExceptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteRemediationExceptions', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteRemediationExceptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteRemediationExceptions', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteResourceConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteResourceConfig', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteResourceConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteResourceConfig', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteResourceConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteResourceConfig', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteRetentionConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteRetentionConfiguration', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteRetentionConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteRetentionConfiguration', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteRetentionConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteRetentionConfiguration', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteStoredQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteStoredQuery', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteStoredQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteStoredQuery', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteStoredQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deleteStoredQuery', 'ConfigService', Promise.reject(result), true, mock)
  },
  deliverConfigSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deliverConfigSnapshot', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deliverConfigSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deliverConfigSnapshot', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deliverConfigSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'deliverConfigSnapshot', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeAggregateComplianceByConfigRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeAggregateComplianceByConfigRules', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeAggregateComplianceByConfigRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeAggregateComplianceByConfigRules', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeAggregateComplianceByConfigRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeAggregateComplianceByConfigRules', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeAggregateComplianceByConformancePacks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeAggregateComplianceByConformancePacks', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeAggregateComplianceByConformancePacksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeAggregateComplianceByConformancePacks', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeAggregateComplianceByConformancePacksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeAggregateComplianceByConformancePacks', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeAggregationAuthorizations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeAggregationAuthorizations', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeAggregationAuthorizationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeAggregationAuthorizations', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeAggregationAuthorizationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeAggregationAuthorizations', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeComplianceByConfigRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeComplianceByConfigRule', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeComplianceByConfigRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeComplianceByConfigRule', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeComplianceByConfigRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeComplianceByConfigRule', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeComplianceByResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeComplianceByResource', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeComplianceByResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeComplianceByResource', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeComplianceByResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeComplianceByResource', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeConfigRuleEvaluationStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConfigRuleEvaluationStatus', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeConfigRuleEvaluationStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConfigRuleEvaluationStatus', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeConfigRuleEvaluationStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConfigRuleEvaluationStatus', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeConfigRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConfigRules', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeConfigRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConfigRules', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeConfigRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConfigRules', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeConfigurationAggregatorSourcesStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConfigurationAggregatorSourcesStatus', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeConfigurationAggregatorSourcesStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConfigurationAggregatorSourcesStatus', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeConfigurationAggregatorSourcesStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConfigurationAggregatorSourcesStatus', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeConfigurationAggregators: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConfigurationAggregators', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeConfigurationAggregatorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConfigurationAggregators', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeConfigurationAggregatorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConfigurationAggregators', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeConfigurationRecorderStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConfigurationRecorderStatus', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeConfigurationRecorderStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConfigurationRecorderStatus', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeConfigurationRecorderStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConfigurationRecorderStatus', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeConfigurationRecorders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConfigurationRecorders', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeConfigurationRecordersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConfigurationRecorders', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeConfigurationRecordersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConfigurationRecorders', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeConformancePackCompliance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConformancePackCompliance', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeConformancePackComplianceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConformancePackCompliance', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeConformancePackComplianceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConformancePackCompliance', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeConformancePackStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConformancePackStatus', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeConformancePackStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConformancePackStatus', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeConformancePackStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConformancePackStatus', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeConformancePacks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConformancePacks', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeConformancePacksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConformancePacks', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeConformancePacksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeConformancePacks', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeDeliveryChannelStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeDeliveryChannelStatus', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeDeliveryChannelStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeDeliveryChannelStatus', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeDeliveryChannelStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeDeliveryChannelStatus', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeDeliveryChannels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeDeliveryChannels', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeDeliveryChannelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeDeliveryChannels', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeDeliveryChannelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeDeliveryChannels', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeOrganizationConfigRuleStatuses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeOrganizationConfigRuleStatuses', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeOrganizationConfigRuleStatusesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeOrganizationConfigRuleStatuses', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeOrganizationConfigRuleStatusesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeOrganizationConfigRuleStatuses', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeOrganizationConfigRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeOrganizationConfigRules', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeOrganizationConfigRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeOrganizationConfigRules', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeOrganizationConfigRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeOrganizationConfigRules', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeOrganizationConformancePackStatuses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeOrganizationConformancePackStatuses', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeOrganizationConformancePackStatusesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeOrganizationConformancePackStatuses', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeOrganizationConformancePackStatusesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeOrganizationConformancePackStatuses', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeOrganizationConformancePacks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeOrganizationConformancePacks', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeOrganizationConformancePacksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeOrganizationConformancePacks', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeOrganizationConformancePacksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeOrganizationConformancePacks', 'ConfigService', Promise.reject(result), true, mock)
  },
  describePendingAggregationRequests: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describePendingAggregationRequests', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describePendingAggregationRequestsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describePendingAggregationRequests', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describePendingAggregationRequestsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describePendingAggregationRequests', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeRemediationConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeRemediationConfigurations', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeRemediationConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeRemediationConfigurations', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeRemediationConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeRemediationConfigurations', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeRemediationExceptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeRemediationExceptions', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeRemediationExceptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeRemediationExceptions', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeRemediationExceptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeRemediationExceptions', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeRemediationExecutionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeRemediationExecutionStatus', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeRemediationExecutionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeRemediationExecutionStatus', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeRemediationExecutionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeRemediationExecutionStatus', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeRetentionConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeRetentionConfigurations', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeRetentionConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeRetentionConfigurations', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeRetentionConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'describeRetentionConfigurations', 'ConfigService', Promise.reject(result), true, mock)
  },
  getAggregateComplianceDetailsByConfigRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getAggregateComplianceDetailsByConfigRule', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getAggregateComplianceDetailsByConfigRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getAggregateComplianceDetailsByConfigRule', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getAggregateComplianceDetailsByConfigRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getAggregateComplianceDetailsByConfigRule', 'ConfigService', Promise.reject(result), true, mock)
  },
  getAggregateConfigRuleComplianceSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getAggregateConfigRuleComplianceSummary', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getAggregateConfigRuleComplianceSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getAggregateConfigRuleComplianceSummary', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getAggregateConfigRuleComplianceSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getAggregateConfigRuleComplianceSummary', 'ConfigService', Promise.reject(result), true, mock)
  },
  getAggregateConformancePackComplianceSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getAggregateConformancePackComplianceSummary', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getAggregateConformancePackComplianceSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getAggregateConformancePackComplianceSummary', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getAggregateConformancePackComplianceSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getAggregateConformancePackComplianceSummary', 'ConfigService', Promise.reject(result), true, mock)
  },
  getAggregateDiscoveredResourceCounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getAggregateDiscoveredResourceCounts', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getAggregateDiscoveredResourceCountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getAggregateDiscoveredResourceCounts', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getAggregateDiscoveredResourceCountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getAggregateDiscoveredResourceCounts', 'ConfigService', Promise.reject(result), true, mock)
  },
  getAggregateResourceConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getAggregateResourceConfig', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getAggregateResourceConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getAggregateResourceConfig', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getAggregateResourceConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getAggregateResourceConfig', 'ConfigService', Promise.reject(result), true, mock)
  },
  getComplianceDetailsByConfigRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getComplianceDetailsByConfigRule', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getComplianceDetailsByConfigRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getComplianceDetailsByConfigRule', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getComplianceDetailsByConfigRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getComplianceDetailsByConfigRule', 'ConfigService', Promise.reject(result), true, mock)
  },
  getComplianceDetailsByResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getComplianceDetailsByResource', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getComplianceDetailsByResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getComplianceDetailsByResource', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getComplianceDetailsByResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getComplianceDetailsByResource', 'ConfigService', Promise.reject(result), true, mock)
  },
  getComplianceSummaryByConfigRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getComplianceSummaryByConfigRule', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getComplianceSummaryByConfigRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getComplianceSummaryByConfigRule', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getComplianceSummaryByConfigRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getComplianceSummaryByConfigRule', 'ConfigService', Promise.reject(result), true, mock)
  },
  getComplianceSummaryByResourceType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getComplianceSummaryByResourceType', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getComplianceSummaryByResourceTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getComplianceSummaryByResourceType', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getComplianceSummaryByResourceTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getComplianceSummaryByResourceType', 'ConfigService', Promise.reject(result), true, mock)
  },
  getConformancePackComplianceDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getConformancePackComplianceDetails', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getConformancePackComplianceDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getConformancePackComplianceDetails', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getConformancePackComplianceDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getConformancePackComplianceDetails', 'ConfigService', Promise.reject(result), true, mock)
  },
  getConformancePackComplianceSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getConformancePackComplianceSummary', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getConformancePackComplianceSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getConformancePackComplianceSummary', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getConformancePackComplianceSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getConformancePackComplianceSummary', 'ConfigService', Promise.reject(result), true, mock)
  },
  getCustomRulePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getCustomRulePolicy', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getCustomRulePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getCustomRulePolicy', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getCustomRulePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getCustomRulePolicy', 'ConfigService', Promise.reject(result), true, mock)
  },
  getDiscoveredResourceCounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getDiscoveredResourceCounts', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getDiscoveredResourceCountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getDiscoveredResourceCounts', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getDiscoveredResourceCountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getDiscoveredResourceCounts', 'ConfigService', Promise.reject(result), true, mock)
  },
  getOrganizationConfigRuleDetailedStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getOrganizationConfigRuleDetailedStatus', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getOrganizationConfigRuleDetailedStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getOrganizationConfigRuleDetailedStatus', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getOrganizationConfigRuleDetailedStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getOrganizationConfigRuleDetailedStatus', 'ConfigService', Promise.reject(result), true, mock)
  },
  getOrganizationConformancePackDetailedStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getOrganizationConformancePackDetailedStatus', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getOrganizationConformancePackDetailedStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getOrganizationConformancePackDetailedStatus', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getOrganizationConformancePackDetailedStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getOrganizationConformancePackDetailedStatus', 'ConfigService', Promise.reject(result), true, mock)
  },
  getOrganizationCustomRulePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getOrganizationCustomRulePolicy', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getOrganizationCustomRulePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getOrganizationCustomRulePolicy', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getOrganizationCustomRulePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getOrganizationCustomRulePolicy', 'ConfigService', Promise.reject(result), true, mock)
  },
  getResourceConfigHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getResourceConfigHistory', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getResourceConfigHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getResourceConfigHistory', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getResourceConfigHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getResourceConfigHistory', 'ConfigService', Promise.reject(result), true, mock)
  },
  getResourceEvaluationSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getResourceEvaluationSummary', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getResourceEvaluationSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getResourceEvaluationSummary', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getResourceEvaluationSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getResourceEvaluationSummary', 'ConfigService', Promise.reject(result), true, mock)
  },
  getStoredQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getStoredQuery', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getStoredQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getStoredQuery', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getStoredQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'getStoredQuery', 'ConfigService', Promise.reject(result), true, mock)
  },
  listAggregateDiscoveredResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'listAggregateDiscoveredResources', 'ConfigService', Promise.resolve(result), true, mock)
  },
  listAggregateDiscoveredResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'listAggregateDiscoveredResources', 'ConfigService', Promise.resolve(result), false, mock)
  },
  listAggregateDiscoveredResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'listAggregateDiscoveredResources', 'ConfigService', Promise.reject(result), true, mock)
  },
  listConformancePackComplianceScores: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'listConformancePackComplianceScores', 'ConfigService', Promise.resolve(result), true, mock)
  },
  listConformancePackComplianceScoresAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'listConformancePackComplianceScores', 'ConfigService', Promise.resolve(result), false, mock)
  },
  listConformancePackComplianceScoresThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'listConformancePackComplianceScores', 'ConfigService', Promise.reject(result), true, mock)
  },
  listDiscoveredResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'listDiscoveredResources', 'ConfigService', Promise.resolve(result), true, mock)
  },
  listDiscoveredResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'listDiscoveredResources', 'ConfigService', Promise.resolve(result), false, mock)
  },
  listDiscoveredResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'listDiscoveredResources', 'ConfigService', Promise.reject(result), true, mock)
  },
  listResourceEvaluations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'listResourceEvaluations', 'ConfigService', Promise.resolve(result), true, mock)
  },
  listResourceEvaluationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'listResourceEvaluations', 'ConfigService', Promise.resolve(result), false, mock)
  },
  listResourceEvaluationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'listResourceEvaluations', 'ConfigService', Promise.reject(result), true, mock)
  },
  listStoredQueries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'listStoredQueries', 'ConfigService', Promise.resolve(result), true, mock)
  },
  listStoredQueriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'listStoredQueries', 'ConfigService', Promise.resolve(result), false, mock)
  },
  listStoredQueriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'listStoredQueries', 'ConfigService', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'listTagsForResource', 'ConfigService', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'listTagsForResource', 'ConfigService', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'listTagsForResource', 'ConfigService', Promise.reject(result), true, mock)
  },
  putAggregationAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putAggregationAuthorization', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putAggregationAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putAggregationAuthorization', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putAggregationAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putAggregationAuthorization', 'ConfigService', Promise.reject(result), true, mock)
  },
  putConfigRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putConfigRule', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putConfigRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putConfigRule', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putConfigRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putConfigRule', 'ConfigService', Promise.reject(result), true, mock)
  },
  putConfigurationAggregator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putConfigurationAggregator', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putConfigurationAggregatorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putConfigurationAggregator', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putConfigurationAggregatorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putConfigurationAggregator', 'ConfigService', Promise.reject(result), true, mock)
  },
  putConfigurationRecorder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putConfigurationRecorder', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putConfigurationRecorderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putConfigurationRecorder', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putConfigurationRecorderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putConfigurationRecorder', 'ConfigService', Promise.reject(result), true, mock)
  },
  putConformancePack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putConformancePack', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putConformancePackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putConformancePack', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putConformancePackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putConformancePack', 'ConfigService', Promise.reject(result), true, mock)
  },
  putDeliveryChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putDeliveryChannel', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putDeliveryChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putDeliveryChannel', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putDeliveryChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putDeliveryChannel', 'ConfigService', Promise.reject(result), true, mock)
  },
  putEvaluations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putEvaluations', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putEvaluationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putEvaluations', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putEvaluationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putEvaluations', 'ConfigService', Promise.reject(result), true, mock)
  },
  putExternalEvaluation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putExternalEvaluation', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putExternalEvaluationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putExternalEvaluation', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putExternalEvaluationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putExternalEvaluation', 'ConfigService', Promise.reject(result), true, mock)
  },
  putOrganizationConfigRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putOrganizationConfigRule', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putOrganizationConfigRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putOrganizationConfigRule', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putOrganizationConfigRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putOrganizationConfigRule', 'ConfigService', Promise.reject(result), true, mock)
  },
  putOrganizationConformancePack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putOrganizationConformancePack', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putOrganizationConformancePackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putOrganizationConformancePack', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putOrganizationConformancePackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putOrganizationConformancePack', 'ConfigService', Promise.reject(result), true, mock)
  },
  putRemediationConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putRemediationConfigurations', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putRemediationConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putRemediationConfigurations', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putRemediationConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putRemediationConfigurations', 'ConfigService', Promise.reject(result), true, mock)
  },
  putRemediationExceptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putRemediationExceptions', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putRemediationExceptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putRemediationExceptions', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putRemediationExceptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putRemediationExceptions', 'ConfigService', Promise.reject(result), true, mock)
  },
  putResourceConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putResourceConfig', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putResourceConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putResourceConfig', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putResourceConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putResourceConfig', 'ConfigService', Promise.reject(result), true, mock)
  },
  putRetentionConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putRetentionConfiguration', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putRetentionConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putRetentionConfiguration', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putRetentionConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putRetentionConfiguration', 'ConfigService', Promise.reject(result), true, mock)
  },
  putStoredQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putStoredQuery', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putStoredQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putStoredQuery', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putStoredQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'putStoredQuery', 'ConfigService', Promise.reject(result), true, mock)
  },
  selectAggregateResourceConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'selectAggregateResourceConfig', 'ConfigService', Promise.resolve(result), true, mock)
  },
  selectAggregateResourceConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'selectAggregateResourceConfig', 'ConfigService', Promise.resolve(result), false, mock)
  },
  selectAggregateResourceConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'selectAggregateResourceConfig', 'ConfigService', Promise.reject(result), true, mock)
  },
  selectResourceConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'selectResourceConfig', 'ConfigService', Promise.resolve(result), true, mock)
  },
  selectResourceConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'selectResourceConfig', 'ConfigService', Promise.resolve(result), false, mock)
  },
  selectResourceConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'selectResourceConfig', 'ConfigService', Promise.reject(result), true, mock)
  },
  startConfigRulesEvaluation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'startConfigRulesEvaluation', 'ConfigService', Promise.resolve(result), true, mock)
  },
  startConfigRulesEvaluationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'startConfigRulesEvaluation', 'ConfigService', Promise.resolve(result), false, mock)
  },
  startConfigRulesEvaluationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'startConfigRulesEvaluation', 'ConfigService', Promise.reject(result), true, mock)
  },
  startConfigurationRecorder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'startConfigurationRecorder', 'ConfigService', Promise.resolve(result), true, mock)
  },
  startConfigurationRecorderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'startConfigurationRecorder', 'ConfigService', Promise.resolve(result), false, mock)
  },
  startConfigurationRecorderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'startConfigurationRecorder', 'ConfigService', Promise.reject(result), true, mock)
  },
  startRemediationExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'startRemediationExecution', 'ConfigService', Promise.resolve(result), true, mock)
  },
  startRemediationExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'startRemediationExecution', 'ConfigService', Promise.resolve(result), false, mock)
  },
  startRemediationExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'startRemediationExecution', 'ConfigService', Promise.reject(result), true, mock)
  },
  startResourceEvaluation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'startResourceEvaluation', 'ConfigService', Promise.resolve(result), true, mock)
  },
  startResourceEvaluationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'startResourceEvaluation', 'ConfigService', Promise.resolve(result), false, mock)
  },
  startResourceEvaluationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'startResourceEvaluation', 'ConfigService', Promise.reject(result), true, mock)
  },
  stopConfigurationRecorder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'stopConfigurationRecorder', 'ConfigService', Promise.resolve(result), true, mock)
  },
  stopConfigurationRecorderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'stopConfigurationRecorder', 'ConfigService', Promise.resolve(result), false, mock)
  },
  stopConfigurationRecorderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'stopConfigurationRecorder', 'ConfigService', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'tagResource', 'ConfigService', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'tagResource', 'ConfigService', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'tagResource', 'ConfigService', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'untagResource', 'ConfigService', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'untagResource', 'ConfigService', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'untagResource', 'ConfigService', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'send', 'ConfigServiceClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'send', 'ConfigServiceClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-config-service', 'send', 'ConfigServiceClient', Promise.reject(result), true, mock)
  }
}
