
/**
* @description mocks_v3:mockCustomerProfiles module is mocks for AWS-SDK V3
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
export const mockCustomerProfiles = {
  addProfileKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'addProfileKey', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  addProfileKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'addProfileKey', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  addProfileKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'addProfileKey', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  createCalculatedAttributeDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'createCalculatedAttributeDefinition', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  createCalculatedAttributeDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'createCalculatedAttributeDefinition', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  createCalculatedAttributeDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'createCalculatedAttributeDefinition', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  createDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'createDomain', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  createDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'createDomain', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  createDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'createDomain', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  createEventStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'createEventStream', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  createEventStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'createEventStream', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  createEventStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'createEventStream', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  createIntegrationWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'createIntegrationWorkflow', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  createIntegrationWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'createIntegrationWorkflow', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  createIntegrationWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'createIntegrationWorkflow', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  createProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'createProfile', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  createProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'createProfile', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  createProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'createProfile', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  deleteCalculatedAttributeDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteCalculatedAttributeDefinition', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  deleteCalculatedAttributeDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteCalculatedAttributeDefinition', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  deleteCalculatedAttributeDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteCalculatedAttributeDefinition', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  deleteDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteDomain', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  deleteDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteDomain', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  deleteDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteDomain', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  deleteEventStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteEventStream', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  deleteEventStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteEventStream', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  deleteEventStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteEventStream', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  deleteIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteIntegration', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  deleteIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteIntegration', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  deleteIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteIntegration', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  deleteProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteProfile', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  deleteProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteProfile', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  deleteProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteProfile', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  deleteProfileKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteProfileKey', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  deleteProfileKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteProfileKey', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  deleteProfileKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteProfileKey', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  deleteProfileObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteProfileObject', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  deleteProfileObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteProfileObject', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  deleteProfileObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteProfileObject', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  deleteProfileObjectType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteProfileObjectType', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  deleteProfileObjectTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteProfileObjectType', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  deleteProfileObjectTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteProfileObjectType', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  deleteWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteWorkflow', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  deleteWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteWorkflow', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  deleteWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'deleteWorkflow', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  detectProfileObjectType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'detectProfileObjectType', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  detectProfileObjectTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'detectProfileObjectType', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  detectProfileObjectTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'detectProfileObjectType', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  getAutoMergingPreview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getAutoMergingPreview', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  getAutoMergingPreviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getAutoMergingPreview', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  getAutoMergingPreviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getAutoMergingPreview', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  getCalculatedAttributeDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getCalculatedAttributeDefinition', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  getCalculatedAttributeDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getCalculatedAttributeDefinition', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  getCalculatedAttributeDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getCalculatedAttributeDefinition', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  getCalculatedAttributeForProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getCalculatedAttributeForProfile', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  getCalculatedAttributeForProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getCalculatedAttributeForProfile', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  getCalculatedAttributeForProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getCalculatedAttributeForProfile', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  getDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getDomain', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  getDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getDomain', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  getDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getDomain', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  getEventStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getEventStream', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  getEventStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getEventStream', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  getEventStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getEventStream', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  getIdentityResolutionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getIdentityResolutionJob', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  getIdentityResolutionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getIdentityResolutionJob', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  getIdentityResolutionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getIdentityResolutionJob', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  getIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getIntegration', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  getIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getIntegration', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  getIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getIntegration', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  getMatches: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getMatches', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  getMatchesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getMatches', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  getMatchesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getMatches', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  getProfileObjectType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getProfileObjectType', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  getProfileObjectTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getProfileObjectType', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  getProfileObjectTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getProfileObjectType', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  getProfileObjectTypeTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getProfileObjectTypeTemplate', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  getProfileObjectTypeTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getProfileObjectTypeTemplate', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  getProfileObjectTypeTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getProfileObjectTypeTemplate', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  getSimilarProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getSimilarProfiles', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  getSimilarProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getSimilarProfiles', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  getSimilarProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getSimilarProfiles', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  getWorkflow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getWorkflow', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  getWorkflowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getWorkflow', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  getWorkflowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getWorkflow', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  getWorkflowSteps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getWorkflowSteps', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  getWorkflowStepsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getWorkflowSteps', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  getWorkflowStepsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'getWorkflowSteps', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  listAccountIntegrations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listAccountIntegrations', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  listAccountIntegrationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listAccountIntegrations', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  listAccountIntegrationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listAccountIntegrations', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  listCalculatedAttributeDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listCalculatedAttributeDefinitions', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  listCalculatedAttributeDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listCalculatedAttributeDefinitions', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  listCalculatedAttributeDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listCalculatedAttributeDefinitions', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  listCalculatedAttributesForProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listCalculatedAttributesForProfile', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  listCalculatedAttributesForProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listCalculatedAttributesForProfile', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  listCalculatedAttributesForProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listCalculatedAttributesForProfile', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  listDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listDomains', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  listDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listDomains', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  listDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listDomains', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  listEventStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listEventStreams', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  listEventStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listEventStreams', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  listEventStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listEventStreams', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  listIdentityResolutionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listIdentityResolutionJobs', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  listIdentityResolutionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listIdentityResolutionJobs', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  listIdentityResolutionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listIdentityResolutionJobs', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  listIntegrations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listIntegrations', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  listIntegrationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listIntegrations', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  listIntegrationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listIntegrations', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  listProfileObjectTypeTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listProfileObjectTypeTemplates', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  listProfileObjectTypeTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listProfileObjectTypeTemplates', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  listProfileObjectTypeTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listProfileObjectTypeTemplates', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  listProfileObjectTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listProfileObjectTypes', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  listProfileObjectTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listProfileObjectTypes', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  listProfileObjectTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listProfileObjectTypes', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  listProfileObjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listProfileObjects', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  listProfileObjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listProfileObjects', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  listProfileObjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listProfileObjects', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  listRuleBasedMatches: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listRuleBasedMatches', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  listRuleBasedMatchesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listRuleBasedMatches', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  listRuleBasedMatchesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listRuleBasedMatches', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listTagsForResource', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listTagsForResource', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listTagsForResource', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  listWorkflows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listWorkflows', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  listWorkflowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listWorkflows', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  listWorkflowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'listWorkflows', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  mergeProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'mergeProfiles', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  mergeProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'mergeProfiles', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  mergeProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'mergeProfiles', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  putIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'putIntegration', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  putIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'putIntegration', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  putIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'putIntegration', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  putProfileObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'putProfileObject', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  putProfileObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'putProfileObject', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  putProfileObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'putProfileObject', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  putProfileObjectType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'putProfileObjectType', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  putProfileObjectTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'putProfileObjectType', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  putProfileObjectTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'putProfileObjectType', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  searchProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'searchProfiles', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  searchProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'searchProfiles', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  searchProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'searchProfiles', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'tagResource', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'tagResource', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'tagResource', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'untagResource', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'untagResource', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'untagResource', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  updateCalculatedAttributeDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'updateCalculatedAttributeDefinition', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  updateCalculatedAttributeDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'updateCalculatedAttributeDefinition', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  updateCalculatedAttributeDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'updateCalculatedAttributeDefinition', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  updateDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'updateDomain', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  updateDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'updateDomain', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  updateDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'updateDomain', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  updateProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'updateProfile', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  updateProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'updateProfile', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  updateProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'updateProfile', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'send', 'CustomerProfilesClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'send', 'CustomerProfilesClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-customer-profiles', 'send', 'CustomerProfilesClient', Promise.reject(result), true, mock)
  }
}
