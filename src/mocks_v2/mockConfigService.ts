
function attachMock(method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require('aws-sdk')
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(currentVersion(awsSdkObject.services).prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  
const currentVersion = (services: any): any => {
  const keys = Object.keys(services);
  let service = null;
  keys.forEach(versionStr => {
    if (
      services.hasOwnProperty(versionStr) &&
      services[versionStr] !== null &&
      services[versionStr] !== undefined
    ) {
      service = services[versionStr];
      return;
    }
  });

  return service;
};
  export const mockConfigService = {
  batchGetAggregateResourceConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetAggregateResourceConfig', 'ConfigService', Promise.resolve(result), true, mock)
  },
  batchGetAggregateResourceConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetAggregateResourceConfig', 'ConfigService', Promise.resolve(result), false, mock)
  },
  batchGetAggregateResourceConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetAggregateResourceConfig', 'ConfigService', Promise.reject(result), true, mock)
  },
  batchGetResourceConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetResourceConfig', 'ConfigService', Promise.resolve(result), true, mock)
  },
  batchGetResourceConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetResourceConfig', 'ConfigService', Promise.resolve(result), false, mock)
  },
  batchGetResourceConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetResourceConfig', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteAggregationAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAggregationAuthorization', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteAggregationAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAggregationAuthorization', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteAggregationAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAggregationAuthorization', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteConfigRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfigRule', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteConfigRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfigRule', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteConfigRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfigRule', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteConfigurationAggregator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfigurationAggregator', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteConfigurationAggregatorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfigurationAggregator', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteConfigurationAggregatorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfigurationAggregator', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteConfigurationRecorder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfigurationRecorder', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteConfigurationRecorderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfigurationRecorder', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteConfigurationRecorderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConfigurationRecorder', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteConformancePack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConformancePack', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteConformancePackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConformancePack', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteConformancePackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConformancePack', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteDeliveryChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeliveryChannel', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteDeliveryChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeliveryChannel', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteDeliveryChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeliveryChannel', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteEvaluationResults: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEvaluationResults', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteEvaluationResultsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEvaluationResults', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteEvaluationResultsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEvaluationResults', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteOrganizationConfigRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOrganizationConfigRule', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteOrganizationConfigRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOrganizationConfigRule', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteOrganizationConfigRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOrganizationConfigRule', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteOrganizationConformancePack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOrganizationConformancePack', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteOrganizationConformancePackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOrganizationConformancePack', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteOrganizationConformancePackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOrganizationConformancePack', 'ConfigService', Promise.reject(result), true, mock)
  },
  deletePendingAggregationRequest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePendingAggregationRequest', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deletePendingAggregationRequestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePendingAggregationRequest', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deletePendingAggregationRequestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePendingAggregationRequest', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteRemediationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRemediationConfiguration', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteRemediationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRemediationConfiguration', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteRemediationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRemediationConfiguration', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteRemediationExceptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRemediationExceptions', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteRemediationExceptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRemediationExceptions', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteRemediationExceptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRemediationExceptions', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteResourceConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourceConfig', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteResourceConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourceConfig', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteResourceConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourceConfig', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteRetentionConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRetentionConfiguration', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteRetentionConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRetentionConfiguration', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteRetentionConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRetentionConfiguration', 'ConfigService', Promise.reject(result), true, mock)
  },
  deleteStoredQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStoredQuery', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deleteStoredQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStoredQuery', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deleteStoredQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStoredQuery', 'ConfigService', Promise.reject(result), true, mock)
  },
  deliverConfigSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deliverConfigSnapshot', 'ConfigService', Promise.resolve(result), true, mock)
  },
  deliverConfigSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deliverConfigSnapshot', 'ConfigService', Promise.resolve(result), false, mock)
  },
  deliverConfigSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deliverConfigSnapshot', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeAggregateComplianceByConfigRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAggregateComplianceByConfigRules', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeAggregateComplianceByConfigRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAggregateComplianceByConfigRules', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeAggregateComplianceByConfigRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAggregateComplianceByConfigRules', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeAggregateComplianceByConformancePacks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAggregateComplianceByConformancePacks', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeAggregateComplianceByConformancePacksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAggregateComplianceByConformancePacks', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeAggregateComplianceByConformancePacksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAggregateComplianceByConformancePacks', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeAggregationAuthorizations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAggregationAuthorizations', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeAggregationAuthorizationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAggregationAuthorizations', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeAggregationAuthorizationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAggregationAuthorizations', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeComplianceByConfigRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComplianceByConfigRule', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeComplianceByConfigRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComplianceByConfigRule', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeComplianceByConfigRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComplianceByConfigRule', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeComplianceByResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComplianceByResource', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeComplianceByResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComplianceByResource', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeComplianceByResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComplianceByResource', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeConfigRuleEvaluationStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConfigRuleEvaluationStatus', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeConfigRuleEvaluationStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConfigRuleEvaluationStatus', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeConfigRuleEvaluationStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConfigRuleEvaluationStatus', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeConfigRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConfigRules', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeConfigRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConfigRules', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeConfigRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConfigRules', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeConfigurationAggregatorSourcesStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConfigurationAggregatorSourcesStatus', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeConfigurationAggregatorSourcesStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConfigurationAggregatorSourcesStatus', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeConfigurationAggregatorSourcesStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConfigurationAggregatorSourcesStatus', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeConfigurationAggregators: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConfigurationAggregators', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeConfigurationAggregatorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConfigurationAggregators', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeConfigurationAggregatorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConfigurationAggregators', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeConfigurationRecorderStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConfigurationRecorderStatus', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeConfigurationRecorderStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConfigurationRecorderStatus', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeConfigurationRecorderStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConfigurationRecorderStatus', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeConfigurationRecorders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConfigurationRecorders', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeConfigurationRecordersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConfigurationRecorders', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeConfigurationRecordersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConfigurationRecorders', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeConformancePackCompliance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConformancePackCompliance', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeConformancePackComplianceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConformancePackCompliance', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeConformancePackComplianceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConformancePackCompliance', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeConformancePackStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConformancePackStatus', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeConformancePackStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConformancePackStatus', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeConformancePackStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConformancePackStatus', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeConformancePacks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConformancePacks', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeConformancePacksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConformancePacks', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeConformancePacksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConformancePacks', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeDeliveryChannelStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeliveryChannelStatus', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeDeliveryChannelStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeliveryChannelStatus', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeDeliveryChannelStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeliveryChannelStatus', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeDeliveryChannels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeliveryChannels', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeDeliveryChannelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeliveryChannels', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeDeliveryChannelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeliveryChannels', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeOrganizationConfigRuleStatuses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationConfigRuleStatuses', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeOrganizationConfigRuleStatusesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationConfigRuleStatuses', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeOrganizationConfigRuleStatusesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationConfigRuleStatuses', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeOrganizationConfigRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationConfigRules', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeOrganizationConfigRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationConfigRules', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeOrganizationConfigRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationConfigRules', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeOrganizationConformancePackStatuses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationConformancePackStatuses', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeOrganizationConformancePackStatusesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationConformancePackStatuses', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeOrganizationConformancePackStatusesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationConformancePackStatuses', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeOrganizationConformancePacks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationConformancePacks', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeOrganizationConformancePacksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationConformancePacks', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeOrganizationConformancePacksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationConformancePacks', 'ConfigService', Promise.reject(result), true, mock)
  },
  describePendingAggregationRequests: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePendingAggregationRequests', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describePendingAggregationRequestsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePendingAggregationRequests', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describePendingAggregationRequestsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePendingAggregationRequests', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeRemediationConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRemediationConfigurations', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeRemediationConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRemediationConfigurations', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeRemediationConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRemediationConfigurations', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeRemediationExceptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRemediationExceptions', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeRemediationExceptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRemediationExceptions', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeRemediationExceptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRemediationExceptions', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeRemediationExecutionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRemediationExecutionStatus', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeRemediationExecutionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRemediationExecutionStatus', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeRemediationExecutionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRemediationExecutionStatus', 'ConfigService', Promise.reject(result), true, mock)
  },
  describeRetentionConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRetentionConfigurations', 'ConfigService', Promise.resolve(result), true, mock)
  },
  describeRetentionConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRetentionConfigurations', 'ConfigService', Promise.resolve(result), false, mock)
  },
  describeRetentionConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRetentionConfigurations', 'ConfigService', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ConfigService', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ConfigService', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ConfigService', Promise.reject(result), true, mock)
  },
  getAggregateComplianceDetailsByConfigRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAggregateComplianceDetailsByConfigRule', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getAggregateComplianceDetailsByConfigRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAggregateComplianceDetailsByConfigRule', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getAggregateComplianceDetailsByConfigRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAggregateComplianceDetailsByConfigRule', 'ConfigService', Promise.reject(result), true, mock)
  },
  getAggregateConfigRuleComplianceSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAggregateConfigRuleComplianceSummary', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getAggregateConfigRuleComplianceSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAggregateConfigRuleComplianceSummary', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getAggregateConfigRuleComplianceSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAggregateConfigRuleComplianceSummary', 'ConfigService', Promise.reject(result), true, mock)
  },
  getAggregateConformancePackComplianceSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAggregateConformancePackComplianceSummary', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getAggregateConformancePackComplianceSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAggregateConformancePackComplianceSummary', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getAggregateConformancePackComplianceSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAggregateConformancePackComplianceSummary', 'ConfigService', Promise.reject(result), true, mock)
  },
  getAggregateDiscoveredResourceCounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAggregateDiscoveredResourceCounts', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getAggregateDiscoveredResourceCountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAggregateDiscoveredResourceCounts', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getAggregateDiscoveredResourceCountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAggregateDiscoveredResourceCounts', 'ConfigService', Promise.reject(result), true, mock)
  },
  getAggregateResourceConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAggregateResourceConfig', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getAggregateResourceConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAggregateResourceConfig', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getAggregateResourceConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAggregateResourceConfig', 'ConfigService', Promise.reject(result), true, mock)
  },
  getComplianceDetailsByConfigRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComplianceDetailsByConfigRule', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getComplianceDetailsByConfigRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComplianceDetailsByConfigRule', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getComplianceDetailsByConfigRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComplianceDetailsByConfigRule', 'ConfigService', Promise.reject(result), true, mock)
  },
  getComplianceDetailsByResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComplianceDetailsByResource', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getComplianceDetailsByResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComplianceDetailsByResource', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getComplianceDetailsByResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComplianceDetailsByResource', 'ConfigService', Promise.reject(result), true, mock)
  },
  getComplianceSummaryByConfigRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComplianceSummaryByConfigRule', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getComplianceSummaryByConfigRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComplianceSummaryByConfigRule', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getComplianceSummaryByConfigRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComplianceSummaryByConfigRule', 'ConfigService', Promise.reject(result), true, mock)
  },
  getComplianceSummaryByResourceType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComplianceSummaryByResourceType', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getComplianceSummaryByResourceTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComplianceSummaryByResourceType', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getComplianceSummaryByResourceTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComplianceSummaryByResourceType', 'ConfigService', Promise.reject(result), true, mock)
  },
  getConformancePackComplianceDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConformancePackComplianceDetails', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getConformancePackComplianceDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConformancePackComplianceDetails', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getConformancePackComplianceDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConformancePackComplianceDetails', 'ConfigService', Promise.reject(result), true, mock)
  },
  getConformancePackComplianceSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConformancePackComplianceSummary', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getConformancePackComplianceSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConformancePackComplianceSummary', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getConformancePackComplianceSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConformancePackComplianceSummary', 'ConfigService', Promise.reject(result), true, mock)
  },
  getDiscoveredResourceCounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDiscoveredResourceCounts', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getDiscoveredResourceCountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDiscoveredResourceCounts', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getDiscoveredResourceCountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDiscoveredResourceCounts', 'ConfigService', Promise.reject(result), true, mock)
  },
  getOrganizationConfigRuleDetailedStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOrganizationConfigRuleDetailedStatus', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getOrganizationConfigRuleDetailedStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOrganizationConfigRuleDetailedStatus', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getOrganizationConfigRuleDetailedStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOrganizationConfigRuleDetailedStatus', 'ConfigService', Promise.reject(result), true, mock)
  },
  getOrganizationConformancePackDetailedStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOrganizationConformancePackDetailedStatus', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getOrganizationConformancePackDetailedStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOrganizationConformancePackDetailedStatus', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getOrganizationConformancePackDetailedStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOrganizationConformancePackDetailedStatus', 'ConfigService', Promise.reject(result), true, mock)
  },
  getResourceConfigHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceConfigHistory', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getResourceConfigHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceConfigHistory', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getResourceConfigHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceConfigHistory', 'ConfigService', Promise.reject(result), true, mock)
  },
  getStoredQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStoredQuery', 'ConfigService', Promise.resolve(result), true, mock)
  },
  getStoredQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStoredQuery', 'ConfigService', Promise.resolve(result), false, mock)
  },
  getStoredQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStoredQuery', 'ConfigService', Promise.reject(result), true, mock)
  },
  listAggregateDiscoveredResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAggregateDiscoveredResources', 'ConfigService', Promise.resolve(result), true, mock)
  },
  listAggregateDiscoveredResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAggregateDiscoveredResources', 'ConfigService', Promise.resolve(result), false, mock)
  },
  listAggregateDiscoveredResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAggregateDiscoveredResources', 'ConfigService', Promise.reject(result), true, mock)
  },
  listDiscoveredResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDiscoveredResources', 'ConfigService', Promise.resolve(result), true, mock)
  },
  listDiscoveredResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDiscoveredResources', 'ConfigService', Promise.resolve(result), false, mock)
  },
  listDiscoveredResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDiscoveredResources', 'ConfigService', Promise.reject(result), true, mock)
  },
  listStoredQueries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStoredQueries', 'ConfigService', Promise.resolve(result), true, mock)
  },
  listStoredQueriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStoredQueries', 'ConfigService', Promise.resolve(result), false, mock)
  },
  listStoredQueriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStoredQueries', 'ConfigService', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ConfigService', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ConfigService', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ConfigService', Promise.reject(result), true, mock)
  },
  putAggregationAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAggregationAuthorization', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putAggregationAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAggregationAuthorization', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putAggregationAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAggregationAuthorization', 'ConfigService', Promise.reject(result), true, mock)
  },
  putConfigRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConfigRule', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putConfigRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConfigRule', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putConfigRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConfigRule', 'ConfigService', Promise.reject(result), true, mock)
  },
  putConfigurationAggregator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConfigurationAggregator', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putConfigurationAggregatorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConfigurationAggregator', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putConfigurationAggregatorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConfigurationAggregator', 'ConfigService', Promise.reject(result), true, mock)
  },
  putConfigurationRecorder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConfigurationRecorder', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putConfigurationRecorderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConfigurationRecorder', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putConfigurationRecorderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConfigurationRecorder', 'ConfigService', Promise.reject(result), true, mock)
  },
  putConformancePack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConformancePack', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putConformancePackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConformancePack', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putConformancePackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putConformancePack', 'ConfigService', Promise.reject(result), true, mock)
  },
  putDeliveryChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDeliveryChannel', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putDeliveryChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDeliveryChannel', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putDeliveryChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDeliveryChannel', 'ConfigService', Promise.reject(result), true, mock)
  },
  putEvaluations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEvaluations', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putEvaluationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEvaluations', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putEvaluationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEvaluations', 'ConfigService', Promise.reject(result), true, mock)
  },
  putExternalEvaluation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putExternalEvaluation', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putExternalEvaluationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putExternalEvaluation', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putExternalEvaluationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putExternalEvaluation', 'ConfigService', Promise.reject(result), true, mock)
  },
  putOrganizationConfigRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putOrganizationConfigRule', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putOrganizationConfigRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putOrganizationConfigRule', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putOrganizationConfigRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putOrganizationConfigRule', 'ConfigService', Promise.reject(result), true, mock)
  },
  putOrganizationConformancePack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putOrganizationConformancePack', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putOrganizationConformancePackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putOrganizationConformancePack', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putOrganizationConformancePackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putOrganizationConformancePack', 'ConfigService', Promise.reject(result), true, mock)
  },
  putRemediationConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRemediationConfigurations', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putRemediationConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRemediationConfigurations', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putRemediationConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRemediationConfigurations', 'ConfigService', Promise.reject(result), true, mock)
  },
  putRemediationExceptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRemediationExceptions', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putRemediationExceptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRemediationExceptions', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putRemediationExceptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRemediationExceptions', 'ConfigService', Promise.reject(result), true, mock)
  },
  putResourceConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourceConfig', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putResourceConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourceConfig', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putResourceConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourceConfig', 'ConfigService', Promise.reject(result), true, mock)
  },
  putRetentionConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRetentionConfiguration', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putRetentionConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRetentionConfiguration', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putRetentionConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRetentionConfiguration', 'ConfigService', Promise.reject(result), true, mock)
  },
  putStoredQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putStoredQuery', 'ConfigService', Promise.resolve(result), true, mock)
  },
  putStoredQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putStoredQuery', 'ConfigService', Promise.resolve(result), false, mock)
  },
  putStoredQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putStoredQuery', 'ConfigService', Promise.reject(result), true, mock)
  },
  selectAggregateResourceConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('selectAggregateResourceConfig', 'ConfigService', Promise.resolve(result), true, mock)
  },
  selectAggregateResourceConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('selectAggregateResourceConfig', 'ConfigService', Promise.resolve(result), false, mock)
  },
  selectAggregateResourceConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('selectAggregateResourceConfig', 'ConfigService', Promise.reject(result), true, mock)
  },
  selectResourceConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('selectResourceConfig', 'ConfigService', Promise.resolve(result), true, mock)
  },
  selectResourceConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('selectResourceConfig', 'ConfigService', Promise.resolve(result), false, mock)
  },
  selectResourceConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('selectResourceConfig', 'ConfigService', Promise.reject(result), true, mock)
  },
  startConfigRulesEvaluation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startConfigRulesEvaluation', 'ConfigService', Promise.resolve(result), true, mock)
  },
  startConfigRulesEvaluationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startConfigRulesEvaluation', 'ConfigService', Promise.resolve(result), false, mock)
  },
  startConfigRulesEvaluationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startConfigRulesEvaluation', 'ConfigService', Promise.reject(result), true, mock)
  },
  startConfigurationRecorder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startConfigurationRecorder', 'ConfigService', Promise.resolve(result), true, mock)
  },
  startConfigurationRecorderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startConfigurationRecorder', 'ConfigService', Promise.resolve(result), false, mock)
  },
  startConfigurationRecorderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startConfigurationRecorder', 'ConfigService', Promise.reject(result), true, mock)
  },
  startRemediationExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startRemediationExecution', 'ConfigService', Promise.resolve(result), true, mock)
  },
  startRemediationExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startRemediationExecution', 'ConfigService', Promise.resolve(result), false, mock)
  },
  startRemediationExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startRemediationExecution', 'ConfigService', Promise.reject(result), true, mock)
  },
  stopConfigurationRecorder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopConfigurationRecorder', 'ConfigService', Promise.resolve(result), true, mock)
  },
  stopConfigurationRecorderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopConfigurationRecorder', 'ConfigService', Promise.resolve(result), false, mock)
  },
  stopConfigurationRecorderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopConfigurationRecorder', 'ConfigService', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ConfigService', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ConfigService', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ConfigService', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ConfigService', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ConfigService', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ConfigService', Promise.reject(result), true, mock)
  },
}
