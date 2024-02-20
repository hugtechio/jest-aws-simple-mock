
/**
* @description mocks_v3:mockConnect module is mocks for AWS-SDK V3
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
export const mockConnect = {
  activateEvaluationForm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'activateEvaluationForm', 'Connect', Promise.resolve(result), true, mock)
  },
  activateEvaluationFormAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'activateEvaluationForm', 'Connect', Promise.resolve(result), false, mock)
  },
  activateEvaluationFormThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'activateEvaluationForm', 'Connect', Promise.reject(result), true, mock)
  },
  associateAnalyticsDataSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateAnalyticsDataSet', 'Connect', Promise.resolve(result), true, mock)
  },
  associateAnalyticsDataSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateAnalyticsDataSet', 'Connect', Promise.resolve(result), false, mock)
  },
  associateAnalyticsDataSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateAnalyticsDataSet', 'Connect', Promise.reject(result), true, mock)
  },
  associateApprovedOrigin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateApprovedOrigin', 'Connect', Promise.resolve(result), true, mock)
  },
  associateApprovedOriginAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateApprovedOrigin', 'Connect', Promise.resolve(result), false, mock)
  },
  associateApprovedOriginThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateApprovedOrigin', 'Connect', Promise.reject(result), true, mock)
  },
  associateBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateBot', 'Connect', Promise.resolve(result), true, mock)
  },
  associateBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateBot', 'Connect', Promise.resolve(result), false, mock)
  },
  associateBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateBot', 'Connect', Promise.reject(result), true, mock)
  },
  associateDefaultVocabulary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateDefaultVocabulary', 'Connect', Promise.resolve(result), true, mock)
  },
  associateDefaultVocabularyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateDefaultVocabulary', 'Connect', Promise.resolve(result), false, mock)
  },
  associateDefaultVocabularyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateDefaultVocabulary', 'Connect', Promise.reject(result), true, mock)
  },
  associateFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateFlow', 'Connect', Promise.resolve(result), true, mock)
  },
  associateFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateFlow', 'Connect', Promise.resolve(result), false, mock)
  },
  associateFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateFlow', 'Connect', Promise.reject(result), true, mock)
  },
  associateInstanceStorageConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateInstanceStorageConfig', 'Connect', Promise.resolve(result), true, mock)
  },
  associateInstanceStorageConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateInstanceStorageConfig', 'Connect', Promise.resolve(result), false, mock)
  },
  associateInstanceStorageConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateInstanceStorageConfig', 'Connect', Promise.reject(result), true, mock)
  },
  associateLambdaFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateLambdaFunction', 'Connect', Promise.resolve(result), true, mock)
  },
  associateLambdaFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateLambdaFunction', 'Connect', Promise.resolve(result), false, mock)
  },
  associateLambdaFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateLambdaFunction', 'Connect', Promise.reject(result), true, mock)
  },
  associateLexBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateLexBot', 'Connect', Promise.resolve(result), true, mock)
  },
  associateLexBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateLexBot', 'Connect', Promise.resolve(result), false, mock)
  },
  associateLexBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateLexBot', 'Connect', Promise.reject(result), true, mock)
  },
  associatePhoneNumberContactFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associatePhoneNumberContactFlow', 'Connect', Promise.resolve(result), true, mock)
  },
  associatePhoneNumberContactFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associatePhoneNumberContactFlow', 'Connect', Promise.resolve(result), false, mock)
  },
  associatePhoneNumberContactFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associatePhoneNumberContactFlow', 'Connect', Promise.reject(result), true, mock)
  },
  associateQueueQuickConnects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateQueueQuickConnects', 'Connect', Promise.resolve(result), true, mock)
  },
  associateQueueQuickConnectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateQueueQuickConnects', 'Connect', Promise.resolve(result), false, mock)
  },
  associateQueueQuickConnectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateQueueQuickConnects', 'Connect', Promise.reject(result), true, mock)
  },
  associateRoutingProfileQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateRoutingProfileQueues', 'Connect', Promise.resolve(result), true, mock)
  },
  associateRoutingProfileQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateRoutingProfileQueues', 'Connect', Promise.resolve(result), false, mock)
  },
  associateRoutingProfileQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateRoutingProfileQueues', 'Connect', Promise.reject(result), true, mock)
  },
  associateSecurityKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateSecurityKey', 'Connect', Promise.resolve(result), true, mock)
  },
  associateSecurityKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateSecurityKey', 'Connect', Promise.resolve(result), false, mock)
  },
  associateSecurityKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateSecurityKey', 'Connect', Promise.reject(result), true, mock)
  },
  associateTrafficDistributionGroupUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateTrafficDistributionGroupUser', 'Connect', Promise.resolve(result), true, mock)
  },
  associateTrafficDistributionGroupUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateTrafficDistributionGroupUser', 'Connect', Promise.resolve(result), false, mock)
  },
  associateTrafficDistributionGroupUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateTrafficDistributionGroupUser', 'Connect', Promise.reject(result), true, mock)
  },
  associateUserProficiencies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateUserProficiencies', 'Connect', Promise.resolve(result), true, mock)
  },
  associateUserProficienciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateUserProficiencies', 'Connect', Promise.resolve(result), false, mock)
  },
  associateUserProficienciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'associateUserProficiencies', 'Connect', Promise.reject(result), true, mock)
  },
  batchAssociateAnalyticsDataSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'batchAssociateAnalyticsDataSet', 'Connect', Promise.resolve(result), true, mock)
  },
  batchAssociateAnalyticsDataSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'batchAssociateAnalyticsDataSet', 'Connect', Promise.resolve(result), false, mock)
  },
  batchAssociateAnalyticsDataSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'batchAssociateAnalyticsDataSet', 'Connect', Promise.reject(result), true, mock)
  },
  batchDisassociateAnalyticsDataSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'batchDisassociateAnalyticsDataSet', 'Connect', Promise.resolve(result), true, mock)
  },
  batchDisassociateAnalyticsDataSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'batchDisassociateAnalyticsDataSet', 'Connect', Promise.resolve(result), false, mock)
  },
  batchDisassociateAnalyticsDataSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'batchDisassociateAnalyticsDataSet', 'Connect', Promise.reject(result), true, mock)
  },
  batchGetFlowAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'batchGetFlowAssociation', 'Connect', Promise.resolve(result), true, mock)
  },
  batchGetFlowAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'batchGetFlowAssociation', 'Connect', Promise.resolve(result), false, mock)
  },
  batchGetFlowAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'batchGetFlowAssociation', 'Connect', Promise.reject(result), true, mock)
  },
  batchPutContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'batchPutContact', 'Connect', Promise.resolve(result), true, mock)
  },
  batchPutContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'batchPutContact', 'Connect', Promise.resolve(result), false, mock)
  },
  batchPutContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'batchPutContact', 'Connect', Promise.reject(result), true, mock)
  },
  claimPhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'claimPhoneNumber', 'Connect', Promise.resolve(result), true, mock)
  },
  claimPhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'claimPhoneNumber', 'Connect', Promise.resolve(result), false, mock)
  },
  claimPhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'claimPhoneNumber', 'Connect', Promise.reject(result), true, mock)
  },
  createAgentStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createAgentStatus', 'Connect', Promise.resolve(result), true, mock)
  },
  createAgentStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createAgentStatus', 'Connect', Promise.resolve(result), false, mock)
  },
  createAgentStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createAgentStatus', 'Connect', Promise.reject(result), true, mock)
  },
  createContactFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createContactFlow', 'Connect', Promise.resolve(result), true, mock)
  },
  createContactFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createContactFlow', 'Connect', Promise.resolve(result), false, mock)
  },
  createContactFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createContactFlow', 'Connect', Promise.reject(result), true, mock)
  },
  createContactFlowModule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createContactFlowModule', 'Connect', Promise.resolve(result), true, mock)
  },
  createContactFlowModuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createContactFlowModule', 'Connect', Promise.resolve(result), false, mock)
  },
  createContactFlowModuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createContactFlowModule', 'Connect', Promise.reject(result), true, mock)
  },
  createEvaluationForm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createEvaluationForm', 'Connect', Promise.resolve(result), true, mock)
  },
  createEvaluationFormAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createEvaluationForm', 'Connect', Promise.resolve(result), false, mock)
  },
  createEvaluationFormThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createEvaluationForm', 'Connect', Promise.reject(result), true, mock)
  },
  createHoursOfOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createHoursOfOperation', 'Connect', Promise.resolve(result), true, mock)
  },
  createHoursOfOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createHoursOfOperation', 'Connect', Promise.resolve(result), false, mock)
  },
  createHoursOfOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createHoursOfOperation', 'Connect', Promise.reject(result), true, mock)
  },
  createInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createInstance', 'Connect', Promise.resolve(result), true, mock)
  },
  createInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createInstance', 'Connect', Promise.resolve(result), false, mock)
  },
  createInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createInstance', 'Connect', Promise.reject(result), true, mock)
  },
  createIntegrationAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createIntegrationAssociation', 'Connect', Promise.resolve(result), true, mock)
  },
  createIntegrationAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createIntegrationAssociation', 'Connect', Promise.resolve(result), false, mock)
  },
  createIntegrationAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createIntegrationAssociation', 'Connect', Promise.reject(result), true, mock)
  },
  createParticipant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createParticipant', 'Connect', Promise.resolve(result), true, mock)
  },
  createParticipantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createParticipant', 'Connect', Promise.resolve(result), false, mock)
  },
  createParticipantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createParticipant', 'Connect', Promise.reject(result), true, mock)
  },
  createPersistentContactAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createPersistentContactAssociation', 'Connect', Promise.resolve(result), true, mock)
  },
  createPersistentContactAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createPersistentContactAssociation', 'Connect', Promise.resolve(result), false, mock)
  },
  createPersistentContactAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createPersistentContactAssociation', 'Connect', Promise.reject(result), true, mock)
  },
  createPredefinedAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createPredefinedAttribute', 'Connect', Promise.resolve(result), true, mock)
  },
  createPredefinedAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createPredefinedAttribute', 'Connect', Promise.resolve(result), false, mock)
  },
  createPredefinedAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createPredefinedAttribute', 'Connect', Promise.reject(result), true, mock)
  },
  createPrompt: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createPrompt', 'Connect', Promise.resolve(result), true, mock)
  },
  createPromptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createPrompt', 'Connect', Promise.resolve(result), false, mock)
  },
  createPromptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createPrompt', 'Connect', Promise.reject(result), true, mock)
  },
  createQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createQueue', 'Connect', Promise.resolve(result), true, mock)
  },
  createQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createQueue', 'Connect', Promise.resolve(result), false, mock)
  },
  createQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createQueue', 'Connect', Promise.reject(result), true, mock)
  },
  createQuickConnect: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createQuickConnect', 'Connect', Promise.resolve(result), true, mock)
  },
  createQuickConnectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createQuickConnect', 'Connect', Promise.resolve(result), false, mock)
  },
  createQuickConnectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createQuickConnect', 'Connect', Promise.reject(result), true, mock)
  },
  createRoutingProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createRoutingProfile', 'Connect', Promise.resolve(result), true, mock)
  },
  createRoutingProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createRoutingProfile', 'Connect', Promise.resolve(result), false, mock)
  },
  createRoutingProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createRoutingProfile', 'Connect', Promise.reject(result), true, mock)
  },
  createRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createRule', 'Connect', Promise.resolve(result), true, mock)
  },
  createRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createRule', 'Connect', Promise.resolve(result), false, mock)
  },
  createRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createRule', 'Connect', Promise.reject(result), true, mock)
  },
  createSecurityProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createSecurityProfile', 'Connect', Promise.resolve(result), true, mock)
  },
  createSecurityProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createSecurityProfile', 'Connect', Promise.resolve(result), false, mock)
  },
  createSecurityProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createSecurityProfile', 'Connect', Promise.reject(result), true, mock)
  },
  createTaskTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createTaskTemplate', 'Connect', Promise.resolve(result), true, mock)
  },
  createTaskTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createTaskTemplate', 'Connect', Promise.resolve(result), false, mock)
  },
  createTaskTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createTaskTemplate', 'Connect', Promise.reject(result), true, mock)
  },
  createTrafficDistributionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createTrafficDistributionGroup', 'Connect', Promise.resolve(result), true, mock)
  },
  createTrafficDistributionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createTrafficDistributionGroup', 'Connect', Promise.resolve(result), false, mock)
  },
  createTrafficDistributionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createTrafficDistributionGroup', 'Connect', Promise.reject(result), true, mock)
  },
  createUseCase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createUseCase', 'Connect', Promise.resolve(result), true, mock)
  },
  createUseCaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createUseCase', 'Connect', Promise.resolve(result), false, mock)
  },
  createUseCaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createUseCase', 'Connect', Promise.reject(result), true, mock)
  },
  createUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createUser', 'Connect', Promise.resolve(result), true, mock)
  },
  createUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createUser', 'Connect', Promise.resolve(result), false, mock)
  },
  createUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createUser', 'Connect', Promise.reject(result), true, mock)
  },
  createUserHierarchyGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createUserHierarchyGroup', 'Connect', Promise.resolve(result), true, mock)
  },
  createUserHierarchyGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createUserHierarchyGroup', 'Connect', Promise.resolve(result), false, mock)
  },
  createUserHierarchyGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createUserHierarchyGroup', 'Connect', Promise.reject(result), true, mock)
  },
  createView: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createView', 'Connect', Promise.resolve(result), true, mock)
  },
  createViewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createView', 'Connect', Promise.resolve(result), false, mock)
  },
  createViewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createView', 'Connect', Promise.reject(result), true, mock)
  },
  createViewVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createViewVersion', 'Connect', Promise.resolve(result), true, mock)
  },
  createViewVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createViewVersion', 'Connect', Promise.resolve(result), false, mock)
  },
  createViewVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createViewVersion', 'Connect', Promise.reject(result), true, mock)
  },
  createVocabulary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createVocabulary', 'Connect', Promise.resolve(result), true, mock)
  },
  createVocabularyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createVocabulary', 'Connect', Promise.resolve(result), false, mock)
  },
  createVocabularyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createVocabulary', 'Connect', Promise.reject(result), true, mock)
  },
  deactivateEvaluationForm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deactivateEvaluationForm', 'Connect', Promise.resolve(result), true, mock)
  },
  deactivateEvaluationFormAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deactivateEvaluationForm', 'Connect', Promise.resolve(result), false, mock)
  },
  deactivateEvaluationFormThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deactivateEvaluationForm', 'Connect', Promise.reject(result), true, mock)
  },
  deleteContactEvaluation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteContactEvaluation', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteContactEvaluationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteContactEvaluation', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteContactEvaluationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteContactEvaluation', 'Connect', Promise.reject(result), true, mock)
  },
  deleteContactFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteContactFlow', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteContactFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteContactFlow', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteContactFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteContactFlow', 'Connect', Promise.reject(result), true, mock)
  },
  deleteContactFlowModule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteContactFlowModule', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteContactFlowModuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteContactFlowModule', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteContactFlowModuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteContactFlowModule', 'Connect', Promise.reject(result), true, mock)
  },
  deleteEvaluationForm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteEvaluationForm', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteEvaluationFormAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteEvaluationForm', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteEvaluationFormThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteEvaluationForm', 'Connect', Promise.reject(result), true, mock)
  },
  deleteHoursOfOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteHoursOfOperation', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteHoursOfOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteHoursOfOperation', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteHoursOfOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteHoursOfOperation', 'Connect', Promise.reject(result), true, mock)
  },
  deleteInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteInstance', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteInstance', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteInstance', 'Connect', Promise.reject(result), true, mock)
  },
  deleteIntegrationAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteIntegrationAssociation', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteIntegrationAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteIntegrationAssociation', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteIntegrationAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteIntegrationAssociation', 'Connect', Promise.reject(result), true, mock)
  },
  deletePredefinedAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deletePredefinedAttribute', 'Connect', Promise.resolve(result), true, mock)
  },
  deletePredefinedAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deletePredefinedAttribute', 'Connect', Promise.resolve(result), false, mock)
  },
  deletePredefinedAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deletePredefinedAttribute', 'Connect', Promise.reject(result), true, mock)
  },
  deletePrompt: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deletePrompt', 'Connect', Promise.resolve(result), true, mock)
  },
  deletePromptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deletePrompt', 'Connect', Promise.resolve(result), false, mock)
  },
  deletePromptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deletePrompt', 'Connect', Promise.reject(result), true, mock)
  },
  deleteQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteQueue', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteQueue', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteQueue', 'Connect', Promise.reject(result), true, mock)
  },
  deleteQuickConnect: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteQuickConnect', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteQuickConnectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteQuickConnect', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteQuickConnectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteQuickConnect', 'Connect', Promise.reject(result), true, mock)
  },
  deleteRoutingProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteRoutingProfile', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteRoutingProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteRoutingProfile', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteRoutingProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteRoutingProfile', 'Connect', Promise.reject(result), true, mock)
  },
  deleteRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteRule', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteRule', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteRule', 'Connect', Promise.reject(result), true, mock)
  },
  deleteSecurityProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteSecurityProfile', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteSecurityProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteSecurityProfile', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteSecurityProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteSecurityProfile', 'Connect', Promise.reject(result), true, mock)
  },
  deleteTaskTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteTaskTemplate', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteTaskTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteTaskTemplate', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteTaskTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteTaskTemplate', 'Connect', Promise.reject(result), true, mock)
  },
  deleteTrafficDistributionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteTrafficDistributionGroup', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteTrafficDistributionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteTrafficDistributionGroup', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteTrafficDistributionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteTrafficDistributionGroup', 'Connect', Promise.reject(result), true, mock)
  },
  deleteUseCase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteUseCase', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteUseCaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteUseCase', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteUseCaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteUseCase', 'Connect', Promise.reject(result), true, mock)
  },
  deleteUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteUser', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteUser', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteUser', 'Connect', Promise.reject(result), true, mock)
  },
  deleteUserHierarchyGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteUserHierarchyGroup', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteUserHierarchyGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteUserHierarchyGroup', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteUserHierarchyGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteUserHierarchyGroup', 'Connect', Promise.reject(result), true, mock)
  },
  deleteView: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteView', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteViewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteView', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteViewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteView', 'Connect', Promise.reject(result), true, mock)
  },
  deleteViewVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteViewVersion', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteViewVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteViewVersion', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteViewVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteViewVersion', 'Connect', Promise.reject(result), true, mock)
  },
  deleteVocabulary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteVocabulary', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteVocabularyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteVocabulary', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteVocabularyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteVocabulary', 'Connect', Promise.reject(result), true, mock)
  },
  describeAgentStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeAgentStatus', 'Connect', Promise.resolve(result), true, mock)
  },
  describeAgentStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeAgentStatus', 'Connect', Promise.resolve(result), false, mock)
  },
  describeAgentStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeAgentStatus', 'Connect', Promise.reject(result), true, mock)
  },
  describeContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeContact', 'Connect', Promise.resolve(result), true, mock)
  },
  describeContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeContact', 'Connect', Promise.resolve(result), false, mock)
  },
  describeContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeContact', 'Connect', Promise.reject(result), true, mock)
  },
  describeContactEvaluation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeContactEvaluation', 'Connect', Promise.resolve(result), true, mock)
  },
  describeContactEvaluationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeContactEvaluation', 'Connect', Promise.resolve(result), false, mock)
  },
  describeContactEvaluationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeContactEvaluation', 'Connect', Promise.reject(result), true, mock)
  },
  describeContactFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeContactFlow', 'Connect', Promise.resolve(result), true, mock)
  },
  describeContactFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeContactFlow', 'Connect', Promise.resolve(result), false, mock)
  },
  describeContactFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeContactFlow', 'Connect', Promise.reject(result), true, mock)
  },
  describeContactFlowModule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeContactFlowModule', 'Connect', Promise.resolve(result), true, mock)
  },
  describeContactFlowModuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeContactFlowModule', 'Connect', Promise.resolve(result), false, mock)
  },
  describeContactFlowModuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeContactFlowModule', 'Connect', Promise.reject(result), true, mock)
  },
  describeEvaluationForm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeEvaluationForm', 'Connect', Promise.resolve(result), true, mock)
  },
  describeEvaluationFormAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeEvaluationForm', 'Connect', Promise.resolve(result), false, mock)
  },
  describeEvaluationFormThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeEvaluationForm', 'Connect', Promise.reject(result), true, mock)
  },
  describeHoursOfOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeHoursOfOperation', 'Connect', Promise.resolve(result), true, mock)
  },
  describeHoursOfOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeHoursOfOperation', 'Connect', Promise.resolve(result), false, mock)
  },
  describeHoursOfOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeHoursOfOperation', 'Connect', Promise.reject(result), true, mock)
  },
  describeInstanceAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeInstanceAttribute', 'Connect', Promise.resolve(result), true, mock)
  },
  describeInstanceAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeInstanceAttribute', 'Connect', Promise.resolve(result), false, mock)
  },
  describeInstanceAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeInstanceAttribute', 'Connect', Promise.reject(result), true, mock)
  },
  describeInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeInstance', 'Connect', Promise.resolve(result), true, mock)
  },
  describeInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeInstance', 'Connect', Promise.resolve(result), false, mock)
  },
  describeInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeInstance', 'Connect', Promise.reject(result), true, mock)
  },
  describeInstanceStorageConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeInstanceStorageConfig', 'Connect', Promise.resolve(result), true, mock)
  },
  describeInstanceStorageConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeInstanceStorageConfig', 'Connect', Promise.resolve(result), false, mock)
  },
  describeInstanceStorageConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeInstanceStorageConfig', 'Connect', Promise.reject(result), true, mock)
  },
  describePhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describePhoneNumber', 'Connect', Promise.resolve(result), true, mock)
  },
  describePhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describePhoneNumber', 'Connect', Promise.resolve(result), false, mock)
  },
  describePhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describePhoneNumber', 'Connect', Promise.reject(result), true, mock)
  },
  describePredefinedAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describePredefinedAttribute', 'Connect', Promise.resolve(result), true, mock)
  },
  describePredefinedAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describePredefinedAttribute', 'Connect', Promise.resolve(result), false, mock)
  },
  describePredefinedAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describePredefinedAttribute', 'Connect', Promise.reject(result), true, mock)
  },
  describePrompt: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describePrompt', 'Connect', Promise.resolve(result), true, mock)
  },
  describePromptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describePrompt', 'Connect', Promise.resolve(result), false, mock)
  },
  describePromptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describePrompt', 'Connect', Promise.reject(result), true, mock)
  },
  describeQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeQueue', 'Connect', Promise.resolve(result), true, mock)
  },
  describeQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeQueue', 'Connect', Promise.resolve(result), false, mock)
  },
  describeQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeQueue', 'Connect', Promise.reject(result), true, mock)
  },
  describeQuickConnect: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeQuickConnect', 'Connect', Promise.resolve(result), true, mock)
  },
  describeQuickConnectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeQuickConnect', 'Connect', Promise.resolve(result), false, mock)
  },
  describeQuickConnectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeQuickConnect', 'Connect', Promise.reject(result), true, mock)
  },
  describeRoutingProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeRoutingProfile', 'Connect', Promise.resolve(result), true, mock)
  },
  describeRoutingProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeRoutingProfile', 'Connect', Promise.resolve(result), false, mock)
  },
  describeRoutingProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeRoutingProfile', 'Connect', Promise.reject(result), true, mock)
  },
  describeRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeRule', 'Connect', Promise.resolve(result), true, mock)
  },
  describeRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeRule', 'Connect', Promise.resolve(result), false, mock)
  },
  describeRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeRule', 'Connect', Promise.reject(result), true, mock)
  },
  describeSecurityProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeSecurityProfile', 'Connect', Promise.resolve(result), true, mock)
  },
  describeSecurityProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeSecurityProfile', 'Connect', Promise.resolve(result), false, mock)
  },
  describeSecurityProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeSecurityProfile', 'Connect', Promise.reject(result), true, mock)
  },
  describeTrafficDistributionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeTrafficDistributionGroup', 'Connect', Promise.resolve(result), true, mock)
  },
  describeTrafficDistributionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeTrafficDistributionGroup', 'Connect', Promise.resolve(result), false, mock)
  },
  describeTrafficDistributionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeTrafficDistributionGroup', 'Connect', Promise.reject(result), true, mock)
  },
  describeUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeUser', 'Connect', Promise.resolve(result), true, mock)
  },
  describeUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeUser', 'Connect', Promise.resolve(result), false, mock)
  },
  describeUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeUser', 'Connect', Promise.reject(result), true, mock)
  },
  describeUserHierarchyGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeUserHierarchyGroup', 'Connect', Promise.resolve(result), true, mock)
  },
  describeUserHierarchyGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeUserHierarchyGroup', 'Connect', Promise.resolve(result), false, mock)
  },
  describeUserHierarchyGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeUserHierarchyGroup', 'Connect', Promise.reject(result), true, mock)
  },
  describeUserHierarchyStructure: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeUserHierarchyStructure', 'Connect', Promise.resolve(result), true, mock)
  },
  describeUserHierarchyStructureAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeUserHierarchyStructure', 'Connect', Promise.resolve(result), false, mock)
  },
  describeUserHierarchyStructureThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeUserHierarchyStructure', 'Connect', Promise.reject(result), true, mock)
  },
  describeView: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeView', 'Connect', Promise.resolve(result), true, mock)
  },
  describeViewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeView', 'Connect', Promise.resolve(result), false, mock)
  },
  describeViewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeView', 'Connect', Promise.reject(result), true, mock)
  },
  describeVocabulary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeVocabulary', 'Connect', Promise.resolve(result), true, mock)
  },
  describeVocabularyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeVocabulary', 'Connect', Promise.resolve(result), false, mock)
  },
  describeVocabularyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeVocabulary', 'Connect', Promise.reject(result), true, mock)
  },
  disassociateAnalyticsDataSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateAnalyticsDataSet', 'Connect', Promise.resolve(result), true, mock)
  },
  disassociateAnalyticsDataSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateAnalyticsDataSet', 'Connect', Promise.resolve(result), false, mock)
  },
  disassociateAnalyticsDataSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateAnalyticsDataSet', 'Connect', Promise.reject(result), true, mock)
  },
  disassociateApprovedOrigin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateApprovedOrigin', 'Connect', Promise.resolve(result), true, mock)
  },
  disassociateApprovedOriginAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateApprovedOrigin', 'Connect', Promise.resolve(result), false, mock)
  },
  disassociateApprovedOriginThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateApprovedOrigin', 'Connect', Promise.reject(result), true, mock)
  },
  disassociateBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateBot', 'Connect', Promise.resolve(result), true, mock)
  },
  disassociateBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateBot', 'Connect', Promise.resolve(result), false, mock)
  },
  disassociateBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateBot', 'Connect', Promise.reject(result), true, mock)
  },
  disassociateFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateFlow', 'Connect', Promise.resolve(result), true, mock)
  },
  disassociateFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateFlow', 'Connect', Promise.resolve(result), false, mock)
  },
  disassociateFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateFlow', 'Connect', Promise.reject(result), true, mock)
  },
  disassociateInstanceStorageConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateInstanceStorageConfig', 'Connect', Promise.resolve(result), true, mock)
  },
  disassociateInstanceStorageConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateInstanceStorageConfig', 'Connect', Promise.resolve(result), false, mock)
  },
  disassociateInstanceStorageConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateInstanceStorageConfig', 'Connect', Promise.reject(result), true, mock)
  },
  disassociateLambdaFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateLambdaFunction', 'Connect', Promise.resolve(result), true, mock)
  },
  disassociateLambdaFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateLambdaFunction', 'Connect', Promise.resolve(result), false, mock)
  },
  disassociateLambdaFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateLambdaFunction', 'Connect', Promise.reject(result), true, mock)
  },
  disassociateLexBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateLexBot', 'Connect', Promise.resolve(result), true, mock)
  },
  disassociateLexBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateLexBot', 'Connect', Promise.resolve(result), false, mock)
  },
  disassociateLexBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateLexBot', 'Connect', Promise.reject(result), true, mock)
  },
  disassociatePhoneNumberContactFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociatePhoneNumberContactFlow', 'Connect', Promise.resolve(result), true, mock)
  },
  disassociatePhoneNumberContactFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociatePhoneNumberContactFlow', 'Connect', Promise.resolve(result), false, mock)
  },
  disassociatePhoneNumberContactFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociatePhoneNumberContactFlow', 'Connect', Promise.reject(result), true, mock)
  },
  disassociateQueueQuickConnects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateQueueQuickConnects', 'Connect', Promise.resolve(result), true, mock)
  },
  disassociateQueueQuickConnectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateQueueQuickConnects', 'Connect', Promise.resolve(result), false, mock)
  },
  disassociateQueueQuickConnectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateQueueQuickConnects', 'Connect', Promise.reject(result), true, mock)
  },
  disassociateRoutingProfileQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateRoutingProfileQueues', 'Connect', Promise.resolve(result), true, mock)
  },
  disassociateRoutingProfileQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateRoutingProfileQueues', 'Connect', Promise.resolve(result), false, mock)
  },
  disassociateRoutingProfileQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateRoutingProfileQueues', 'Connect', Promise.reject(result), true, mock)
  },
  disassociateSecurityKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateSecurityKey', 'Connect', Promise.resolve(result), true, mock)
  },
  disassociateSecurityKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateSecurityKey', 'Connect', Promise.resolve(result), false, mock)
  },
  disassociateSecurityKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateSecurityKey', 'Connect', Promise.reject(result), true, mock)
  },
  disassociateTrafficDistributionGroupUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateTrafficDistributionGroupUser', 'Connect', Promise.resolve(result), true, mock)
  },
  disassociateTrafficDistributionGroupUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateTrafficDistributionGroupUser', 'Connect', Promise.resolve(result), false, mock)
  },
  disassociateTrafficDistributionGroupUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateTrafficDistributionGroupUser', 'Connect', Promise.reject(result), true, mock)
  },
  disassociateUserProficiencies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateUserProficiencies', 'Connect', Promise.resolve(result), true, mock)
  },
  disassociateUserProficienciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateUserProficiencies', 'Connect', Promise.resolve(result), false, mock)
  },
  disassociateUserProficienciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'disassociateUserProficiencies', 'Connect', Promise.reject(result), true, mock)
  },
  dismissUserContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'dismissUserContact', 'Connect', Promise.resolve(result), true, mock)
  },
  dismissUserContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'dismissUserContact', 'Connect', Promise.resolve(result), false, mock)
  },
  dismissUserContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'dismissUserContact', 'Connect', Promise.reject(result), true, mock)
  },
  getContactAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getContactAttributes', 'Connect', Promise.resolve(result), true, mock)
  },
  getContactAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getContactAttributes', 'Connect', Promise.resolve(result), false, mock)
  },
  getContactAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getContactAttributes', 'Connect', Promise.reject(result), true, mock)
  },
  getCurrentMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getCurrentMetricData', 'Connect', Promise.resolve(result), true, mock)
  },
  getCurrentMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getCurrentMetricData', 'Connect', Promise.resolve(result), false, mock)
  },
  getCurrentMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getCurrentMetricData', 'Connect', Promise.reject(result), true, mock)
  },
  getCurrentUserData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getCurrentUserData', 'Connect', Promise.resolve(result), true, mock)
  },
  getCurrentUserDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getCurrentUserData', 'Connect', Promise.resolve(result), false, mock)
  },
  getCurrentUserDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getCurrentUserData', 'Connect', Promise.reject(result), true, mock)
  },
  getFederationToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getFederationToken', 'Connect', Promise.resolve(result), true, mock)
  },
  getFederationTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getFederationToken', 'Connect', Promise.resolve(result), false, mock)
  },
  getFederationTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getFederationToken', 'Connect', Promise.reject(result), true, mock)
  },
  getFlowAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getFlowAssociation', 'Connect', Promise.resolve(result), true, mock)
  },
  getFlowAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getFlowAssociation', 'Connect', Promise.resolve(result), false, mock)
  },
  getFlowAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getFlowAssociation', 'Connect', Promise.reject(result), true, mock)
  },
  getMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getMetricData', 'Connect', Promise.resolve(result), true, mock)
  },
  getMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getMetricData', 'Connect', Promise.resolve(result), false, mock)
  },
  getMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getMetricData', 'Connect', Promise.reject(result), true, mock)
  },
  getMetricDataV2: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getMetricDataV2', 'Connect', Promise.resolve(result), true, mock)
  },
  getMetricDataV2All: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getMetricDataV2', 'Connect', Promise.resolve(result), false, mock)
  },
  getMetricDataV2Throw: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getMetricDataV2', 'Connect', Promise.reject(result), true, mock)
  },
  getPromptFile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getPromptFile', 'Connect', Promise.resolve(result), true, mock)
  },
  getPromptFileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getPromptFile', 'Connect', Promise.resolve(result), false, mock)
  },
  getPromptFileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getPromptFile', 'Connect', Promise.reject(result), true, mock)
  },
  getTaskTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getTaskTemplate', 'Connect', Promise.resolve(result), true, mock)
  },
  getTaskTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getTaskTemplate', 'Connect', Promise.resolve(result), false, mock)
  },
  getTaskTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getTaskTemplate', 'Connect', Promise.reject(result), true, mock)
  },
  getTrafficDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getTrafficDistribution', 'Connect', Promise.resolve(result), true, mock)
  },
  getTrafficDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getTrafficDistribution', 'Connect', Promise.resolve(result), false, mock)
  },
  getTrafficDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getTrafficDistribution', 'Connect', Promise.reject(result), true, mock)
  },
  importPhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'importPhoneNumber', 'Connect', Promise.resolve(result), true, mock)
  },
  importPhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'importPhoneNumber', 'Connect', Promise.resolve(result), false, mock)
  },
  importPhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'importPhoneNumber', 'Connect', Promise.reject(result), true, mock)
  },
  listAgentStatuses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listAgentStatuses', 'Connect', Promise.resolve(result), true, mock)
  },
  listAgentStatusesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listAgentStatuses', 'Connect', Promise.resolve(result), false, mock)
  },
  listAgentStatusesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listAgentStatuses', 'Connect', Promise.reject(result), true, mock)
  },
  listAnalyticsDataAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listAnalyticsDataAssociations', 'Connect', Promise.resolve(result), true, mock)
  },
  listAnalyticsDataAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listAnalyticsDataAssociations', 'Connect', Promise.resolve(result), false, mock)
  },
  listAnalyticsDataAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listAnalyticsDataAssociations', 'Connect', Promise.reject(result), true, mock)
  },
  listApprovedOrigins: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listApprovedOrigins', 'Connect', Promise.resolve(result), true, mock)
  },
  listApprovedOriginsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listApprovedOrigins', 'Connect', Promise.resolve(result), false, mock)
  },
  listApprovedOriginsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listApprovedOrigins', 'Connect', Promise.reject(result), true, mock)
  },
  listBots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listBots', 'Connect', Promise.resolve(result), true, mock)
  },
  listBotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listBots', 'Connect', Promise.resolve(result), false, mock)
  },
  listBotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listBots', 'Connect', Promise.reject(result), true, mock)
  },
  listContactEvaluations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listContactEvaluations', 'Connect', Promise.resolve(result), true, mock)
  },
  listContactEvaluationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listContactEvaluations', 'Connect', Promise.resolve(result), false, mock)
  },
  listContactEvaluationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listContactEvaluations', 'Connect', Promise.reject(result), true, mock)
  },
  listContactFlowModules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listContactFlowModules', 'Connect', Promise.resolve(result), true, mock)
  },
  listContactFlowModulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listContactFlowModules', 'Connect', Promise.resolve(result), false, mock)
  },
  listContactFlowModulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listContactFlowModules', 'Connect', Promise.reject(result), true, mock)
  },
  listContactFlows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listContactFlows', 'Connect', Promise.resolve(result), true, mock)
  },
  listContactFlowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listContactFlows', 'Connect', Promise.resolve(result), false, mock)
  },
  listContactFlowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listContactFlows', 'Connect', Promise.reject(result), true, mock)
  },
  listContactReferences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listContactReferences', 'Connect', Promise.resolve(result), true, mock)
  },
  listContactReferencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listContactReferences', 'Connect', Promise.resolve(result), false, mock)
  },
  listContactReferencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listContactReferences', 'Connect', Promise.reject(result), true, mock)
  },
  listDefaultVocabularies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listDefaultVocabularies', 'Connect', Promise.resolve(result), true, mock)
  },
  listDefaultVocabulariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listDefaultVocabularies', 'Connect', Promise.resolve(result), false, mock)
  },
  listDefaultVocabulariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listDefaultVocabularies', 'Connect', Promise.reject(result), true, mock)
  },
  listEvaluationFormVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listEvaluationFormVersions', 'Connect', Promise.resolve(result), true, mock)
  },
  listEvaluationFormVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listEvaluationFormVersions', 'Connect', Promise.resolve(result), false, mock)
  },
  listEvaluationFormVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listEvaluationFormVersions', 'Connect', Promise.reject(result), true, mock)
  },
  listEvaluationForms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listEvaluationForms', 'Connect', Promise.resolve(result), true, mock)
  },
  listEvaluationFormsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listEvaluationForms', 'Connect', Promise.resolve(result), false, mock)
  },
  listEvaluationFormsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listEvaluationForms', 'Connect', Promise.reject(result), true, mock)
  },
  listFlowAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listFlowAssociations', 'Connect', Promise.resolve(result), true, mock)
  },
  listFlowAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listFlowAssociations', 'Connect', Promise.resolve(result), false, mock)
  },
  listFlowAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listFlowAssociations', 'Connect', Promise.reject(result), true, mock)
  },
  listHoursOfOperations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listHoursOfOperations', 'Connect', Promise.resolve(result), true, mock)
  },
  listHoursOfOperationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listHoursOfOperations', 'Connect', Promise.resolve(result), false, mock)
  },
  listHoursOfOperationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listHoursOfOperations', 'Connect', Promise.reject(result), true, mock)
  },
  listInstanceAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listInstanceAttributes', 'Connect', Promise.resolve(result), true, mock)
  },
  listInstanceAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listInstanceAttributes', 'Connect', Promise.resolve(result), false, mock)
  },
  listInstanceAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listInstanceAttributes', 'Connect', Promise.reject(result), true, mock)
  },
  listInstanceStorageConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listInstanceStorageConfigs', 'Connect', Promise.resolve(result), true, mock)
  },
  listInstanceStorageConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listInstanceStorageConfigs', 'Connect', Promise.resolve(result), false, mock)
  },
  listInstanceStorageConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listInstanceStorageConfigs', 'Connect', Promise.reject(result), true, mock)
  },
  listInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listInstances', 'Connect', Promise.resolve(result), true, mock)
  },
  listInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listInstances', 'Connect', Promise.resolve(result), false, mock)
  },
  listInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listInstances', 'Connect', Promise.reject(result), true, mock)
  },
  listIntegrationAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listIntegrationAssociations', 'Connect', Promise.resolve(result), true, mock)
  },
  listIntegrationAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listIntegrationAssociations', 'Connect', Promise.resolve(result), false, mock)
  },
  listIntegrationAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listIntegrationAssociations', 'Connect', Promise.reject(result), true, mock)
  },
  listLambdaFunctions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listLambdaFunctions', 'Connect', Promise.resolve(result), true, mock)
  },
  listLambdaFunctionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listLambdaFunctions', 'Connect', Promise.resolve(result), false, mock)
  },
  listLambdaFunctionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listLambdaFunctions', 'Connect', Promise.reject(result), true, mock)
  },
  listLexBots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listLexBots', 'Connect', Promise.resolve(result), true, mock)
  },
  listLexBotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listLexBots', 'Connect', Promise.resolve(result), false, mock)
  },
  listLexBotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listLexBots', 'Connect', Promise.reject(result), true, mock)
  },
  listPhoneNumbers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listPhoneNumbers', 'Connect', Promise.resolve(result), true, mock)
  },
  listPhoneNumbersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listPhoneNumbers', 'Connect', Promise.resolve(result), false, mock)
  },
  listPhoneNumbersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listPhoneNumbers', 'Connect', Promise.reject(result), true, mock)
  },
  listPhoneNumbersV2: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listPhoneNumbersV2', 'Connect', Promise.resolve(result), true, mock)
  },
  listPhoneNumbersV2All: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listPhoneNumbersV2', 'Connect', Promise.resolve(result), false, mock)
  },
  listPhoneNumbersV2Throw: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listPhoneNumbersV2', 'Connect', Promise.reject(result), true, mock)
  },
  listPredefinedAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listPredefinedAttributes', 'Connect', Promise.resolve(result), true, mock)
  },
  listPredefinedAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listPredefinedAttributes', 'Connect', Promise.resolve(result), false, mock)
  },
  listPredefinedAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listPredefinedAttributes', 'Connect', Promise.reject(result), true, mock)
  },
  listPrompts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listPrompts', 'Connect', Promise.resolve(result), true, mock)
  },
  listPromptsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listPrompts', 'Connect', Promise.resolve(result), false, mock)
  },
  listPromptsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listPrompts', 'Connect', Promise.reject(result), true, mock)
  },
  listQueueQuickConnects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listQueueQuickConnects', 'Connect', Promise.resolve(result), true, mock)
  },
  listQueueQuickConnectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listQueueQuickConnects', 'Connect', Promise.resolve(result), false, mock)
  },
  listQueueQuickConnectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listQueueQuickConnects', 'Connect', Promise.reject(result), true, mock)
  },
  listQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listQueues', 'Connect', Promise.resolve(result), true, mock)
  },
  listQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listQueues', 'Connect', Promise.resolve(result), false, mock)
  },
  listQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listQueues', 'Connect', Promise.reject(result), true, mock)
  },
  listQuickConnects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listQuickConnects', 'Connect', Promise.resolve(result), true, mock)
  },
  listQuickConnectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listQuickConnects', 'Connect', Promise.resolve(result), false, mock)
  },
  listQuickConnectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listQuickConnects', 'Connect', Promise.reject(result), true, mock)
  },
  listRealtimeContactAnalysisSegmentsV2: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listRealtimeContactAnalysisSegmentsV2', 'Connect', Promise.resolve(result), true, mock)
  },
  listRealtimeContactAnalysisSegmentsV2All: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listRealtimeContactAnalysisSegmentsV2', 'Connect', Promise.resolve(result), false, mock)
  },
  listRealtimeContactAnalysisSegmentsV2Throw: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listRealtimeContactAnalysisSegmentsV2', 'Connect', Promise.reject(result), true, mock)
  },
  listRoutingProfileQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listRoutingProfileQueues', 'Connect', Promise.resolve(result), true, mock)
  },
  listRoutingProfileQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listRoutingProfileQueues', 'Connect', Promise.resolve(result), false, mock)
  },
  listRoutingProfileQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listRoutingProfileQueues', 'Connect', Promise.reject(result), true, mock)
  },
  listRoutingProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listRoutingProfiles', 'Connect', Promise.resolve(result), true, mock)
  },
  listRoutingProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listRoutingProfiles', 'Connect', Promise.resolve(result), false, mock)
  },
  listRoutingProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listRoutingProfiles', 'Connect', Promise.reject(result), true, mock)
  },
  listRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listRules', 'Connect', Promise.resolve(result), true, mock)
  },
  listRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listRules', 'Connect', Promise.resolve(result), false, mock)
  },
  listRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listRules', 'Connect', Promise.reject(result), true, mock)
  },
  listSecurityKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listSecurityKeys', 'Connect', Promise.resolve(result), true, mock)
  },
  listSecurityKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listSecurityKeys', 'Connect', Promise.resolve(result), false, mock)
  },
  listSecurityKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listSecurityKeys', 'Connect', Promise.reject(result), true, mock)
  },
  listSecurityProfileApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listSecurityProfileApplications', 'Connect', Promise.resolve(result), true, mock)
  },
  listSecurityProfileApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listSecurityProfileApplications', 'Connect', Promise.resolve(result), false, mock)
  },
  listSecurityProfileApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listSecurityProfileApplications', 'Connect', Promise.reject(result), true, mock)
  },
  listSecurityProfilePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listSecurityProfilePermissions', 'Connect', Promise.resolve(result), true, mock)
  },
  listSecurityProfilePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listSecurityProfilePermissions', 'Connect', Promise.resolve(result), false, mock)
  },
  listSecurityProfilePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listSecurityProfilePermissions', 'Connect', Promise.reject(result), true, mock)
  },
  listSecurityProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listSecurityProfiles', 'Connect', Promise.resolve(result), true, mock)
  },
  listSecurityProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listSecurityProfiles', 'Connect', Promise.resolve(result), false, mock)
  },
  listSecurityProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listSecurityProfiles', 'Connect', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listTagsForResource', 'Connect', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listTagsForResource', 'Connect', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listTagsForResource', 'Connect', Promise.reject(result), true, mock)
  },
  listTaskTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listTaskTemplates', 'Connect', Promise.resolve(result), true, mock)
  },
  listTaskTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listTaskTemplates', 'Connect', Promise.resolve(result), false, mock)
  },
  listTaskTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listTaskTemplates', 'Connect', Promise.reject(result), true, mock)
  },
  listTrafficDistributionGroupUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listTrafficDistributionGroupUsers', 'Connect', Promise.resolve(result), true, mock)
  },
  listTrafficDistributionGroupUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listTrafficDistributionGroupUsers', 'Connect', Promise.resolve(result), false, mock)
  },
  listTrafficDistributionGroupUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listTrafficDistributionGroupUsers', 'Connect', Promise.reject(result), true, mock)
  },
  listTrafficDistributionGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listTrafficDistributionGroups', 'Connect', Promise.resolve(result), true, mock)
  },
  listTrafficDistributionGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listTrafficDistributionGroups', 'Connect', Promise.resolve(result), false, mock)
  },
  listTrafficDistributionGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listTrafficDistributionGroups', 'Connect', Promise.reject(result), true, mock)
  },
  listUseCases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listUseCases', 'Connect', Promise.resolve(result), true, mock)
  },
  listUseCasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listUseCases', 'Connect', Promise.resolve(result), false, mock)
  },
  listUseCasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listUseCases', 'Connect', Promise.reject(result), true, mock)
  },
  listUserHierarchyGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listUserHierarchyGroups', 'Connect', Promise.resolve(result), true, mock)
  },
  listUserHierarchyGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listUserHierarchyGroups', 'Connect', Promise.resolve(result), false, mock)
  },
  listUserHierarchyGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listUserHierarchyGroups', 'Connect', Promise.reject(result), true, mock)
  },
  listUserProficiencies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listUserProficiencies', 'Connect', Promise.resolve(result), true, mock)
  },
  listUserProficienciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listUserProficiencies', 'Connect', Promise.resolve(result), false, mock)
  },
  listUserProficienciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listUserProficiencies', 'Connect', Promise.reject(result), true, mock)
  },
  listUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listUsers', 'Connect', Promise.resolve(result), true, mock)
  },
  listUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listUsers', 'Connect', Promise.resolve(result), false, mock)
  },
  listUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listUsers', 'Connect', Promise.reject(result), true, mock)
  },
  listViewVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listViewVersions', 'Connect', Promise.resolve(result), true, mock)
  },
  listViewVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listViewVersions', 'Connect', Promise.resolve(result), false, mock)
  },
  listViewVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listViewVersions', 'Connect', Promise.reject(result), true, mock)
  },
  listViews: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listViews', 'Connect', Promise.resolve(result), true, mock)
  },
  listViewsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listViews', 'Connect', Promise.resolve(result), false, mock)
  },
  listViewsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listViews', 'Connect', Promise.reject(result), true, mock)
  },
  monitorContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'monitorContact', 'Connect', Promise.resolve(result), true, mock)
  },
  monitorContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'monitorContact', 'Connect', Promise.resolve(result), false, mock)
  },
  monitorContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'monitorContact', 'Connect', Promise.reject(result), true, mock)
  },
  pauseContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'pauseContact', 'Connect', Promise.resolve(result), true, mock)
  },
  pauseContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'pauseContact', 'Connect', Promise.resolve(result), false, mock)
  },
  pauseContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'pauseContact', 'Connect', Promise.reject(result), true, mock)
  },
  putUserStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'putUserStatus', 'Connect', Promise.resolve(result), true, mock)
  },
  putUserStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'putUserStatus', 'Connect', Promise.resolve(result), false, mock)
  },
  putUserStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'putUserStatus', 'Connect', Promise.reject(result), true, mock)
  },
  releasePhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'releasePhoneNumber', 'Connect', Promise.resolve(result), true, mock)
  },
  releasePhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'releasePhoneNumber', 'Connect', Promise.resolve(result), false, mock)
  },
  releasePhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'releasePhoneNumber', 'Connect', Promise.reject(result), true, mock)
  },
  replicateInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'replicateInstance', 'Connect', Promise.resolve(result), true, mock)
  },
  replicateInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'replicateInstance', 'Connect', Promise.resolve(result), false, mock)
  },
  replicateInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'replicateInstance', 'Connect', Promise.reject(result), true, mock)
  },
  resumeContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'resumeContact', 'Connect', Promise.resolve(result), true, mock)
  },
  resumeContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'resumeContact', 'Connect', Promise.resolve(result), false, mock)
  },
  resumeContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'resumeContact', 'Connect', Promise.reject(result), true, mock)
  },
  resumeContactRecording: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'resumeContactRecording', 'Connect', Promise.resolve(result), true, mock)
  },
  resumeContactRecordingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'resumeContactRecording', 'Connect', Promise.resolve(result), false, mock)
  },
  resumeContactRecordingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'resumeContactRecording', 'Connect', Promise.reject(result), true, mock)
  },
  searchAvailablePhoneNumbers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchAvailablePhoneNumbers', 'Connect', Promise.resolve(result), true, mock)
  },
  searchAvailablePhoneNumbersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchAvailablePhoneNumbers', 'Connect', Promise.resolve(result), false, mock)
  },
  searchAvailablePhoneNumbersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchAvailablePhoneNumbers', 'Connect', Promise.reject(result), true, mock)
  },
  searchContacts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchContacts', 'Connect', Promise.resolve(result), true, mock)
  },
  searchContactsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchContacts', 'Connect', Promise.resolve(result), false, mock)
  },
  searchContactsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchContacts', 'Connect', Promise.reject(result), true, mock)
  },
  searchHoursOfOperations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchHoursOfOperations', 'Connect', Promise.resolve(result), true, mock)
  },
  searchHoursOfOperationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchHoursOfOperations', 'Connect', Promise.resolve(result), false, mock)
  },
  searchHoursOfOperationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchHoursOfOperations', 'Connect', Promise.reject(result), true, mock)
  },
  searchPredefinedAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchPredefinedAttributes', 'Connect', Promise.resolve(result), true, mock)
  },
  searchPredefinedAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchPredefinedAttributes', 'Connect', Promise.resolve(result), false, mock)
  },
  searchPredefinedAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchPredefinedAttributes', 'Connect', Promise.reject(result), true, mock)
  },
  searchPrompts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchPrompts', 'Connect', Promise.resolve(result), true, mock)
  },
  searchPromptsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchPrompts', 'Connect', Promise.resolve(result), false, mock)
  },
  searchPromptsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchPrompts', 'Connect', Promise.reject(result), true, mock)
  },
  searchQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchQueues', 'Connect', Promise.resolve(result), true, mock)
  },
  searchQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchQueues', 'Connect', Promise.resolve(result), false, mock)
  },
  searchQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchQueues', 'Connect', Promise.reject(result), true, mock)
  },
  searchQuickConnects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchQuickConnects', 'Connect', Promise.resolve(result), true, mock)
  },
  searchQuickConnectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchQuickConnects', 'Connect', Promise.resolve(result), false, mock)
  },
  searchQuickConnectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchQuickConnects', 'Connect', Promise.reject(result), true, mock)
  },
  searchResourceTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchResourceTags', 'Connect', Promise.resolve(result), true, mock)
  },
  searchResourceTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchResourceTags', 'Connect', Promise.resolve(result), false, mock)
  },
  searchResourceTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchResourceTags', 'Connect', Promise.reject(result), true, mock)
  },
  searchRoutingProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchRoutingProfiles', 'Connect', Promise.resolve(result), true, mock)
  },
  searchRoutingProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchRoutingProfiles', 'Connect', Promise.resolve(result), false, mock)
  },
  searchRoutingProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchRoutingProfiles', 'Connect', Promise.reject(result), true, mock)
  },
  searchSecurityProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchSecurityProfiles', 'Connect', Promise.resolve(result), true, mock)
  },
  searchSecurityProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchSecurityProfiles', 'Connect', Promise.resolve(result), false, mock)
  },
  searchSecurityProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchSecurityProfiles', 'Connect', Promise.reject(result), true, mock)
  },
  searchUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchUsers', 'Connect', Promise.resolve(result), true, mock)
  },
  searchUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchUsers', 'Connect', Promise.resolve(result), false, mock)
  },
  searchUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchUsers', 'Connect', Promise.reject(result), true, mock)
  },
  searchVocabularies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchVocabularies', 'Connect', Promise.resolve(result), true, mock)
  },
  searchVocabulariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchVocabularies', 'Connect', Promise.resolve(result), false, mock)
  },
  searchVocabulariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'searchVocabularies', 'Connect', Promise.reject(result), true, mock)
  },
  sendChatIntegrationEvent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'sendChatIntegrationEvent', 'Connect', Promise.resolve(result), true, mock)
  },
  sendChatIntegrationEventAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'sendChatIntegrationEvent', 'Connect', Promise.resolve(result), false, mock)
  },
  sendChatIntegrationEventThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'sendChatIntegrationEvent', 'Connect', Promise.reject(result), true, mock)
  },
  startChatContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startChatContact', 'Connect', Promise.resolve(result), true, mock)
  },
  startChatContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startChatContact', 'Connect', Promise.resolve(result), false, mock)
  },
  startChatContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startChatContact', 'Connect', Promise.reject(result), true, mock)
  },
  startContactEvaluation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startContactEvaluation', 'Connect', Promise.resolve(result), true, mock)
  },
  startContactEvaluationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startContactEvaluation', 'Connect', Promise.resolve(result), false, mock)
  },
  startContactEvaluationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startContactEvaluation', 'Connect', Promise.reject(result), true, mock)
  },
  startContactRecording: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startContactRecording', 'Connect', Promise.resolve(result), true, mock)
  },
  startContactRecordingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startContactRecording', 'Connect', Promise.resolve(result), false, mock)
  },
  startContactRecordingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startContactRecording', 'Connect', Promise.reject(result), true, mock)
  },
  startContactStreaming: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startContactStreaming', 'Connect', Promise.resolve(result), true, mock)
  },
  startContactStreamingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startContactStreaming', 'Connect', Promise.resolve(result), false, mock)
  },
  startContactStreamingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startContactStreaming', 'Connect', Promise.reject(result), true, mock)
  },
  startOutboundVoiceContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startOutboundVoiceContact', 'Connect', Promise.resolve(result), true, mock)
  },
  startOutboundVoiceContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startOutboundVoiceContact', 'Connect', Promise.resolve(result), false, mock)
  },
  startOutboundVoiceContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startOutboundVoiceContact', 'Connect', Promise.reject(result), true, mock)
  },
  startTaskContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startTaskContact', 'Connect', Promise.resolve(result), true, mock)
  },
  startTaskContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startTaskContact', 'Connect', Promise.resolve(result), false, mock)
  },
  startTaskContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startTaskContact', 'Connect', Promise.reject(result), true, mock)
  },
  startWebRTCContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startWebRTCContact', 'Connect', Promise.resolve(result), true, mock)
  },
  startWebRTCContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startWebRTCContact', 'Connect', Promise.resolve(result), false, mock)
  },
  startWebRTCContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startWebRTCContact', 'Connect', Promise.reject(result), true, mock)
  },
  stopContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'stopContact', 'Connect', Promise.resolve(result), true, mock)
  },
  stopContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'stopContact', 'Connect', Promise.resolve(result), false, mock)
  },
  stopContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'stopContact', 'Connect', Promise.reject(result), true, mock)
  },
  stopContactRecording: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'stopContactRecording', 'Connect', Promise.resolve(result), true, mock)
  },
  stopContactRecordingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'stopContactRecording', 'Connect', Promise.resolve(result), false, mock)
  },
  stopContactRecordingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'stopContactRecording', 'Connect', Promise.reject(result), true, mock)
  },
  stopContactStreaming: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'stopContactStreaming', 'Connect', Promise.resolve(result), true, mock)
  },
  stopContactStreamingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'stopContactStreaming', 'Connect', Promise.resolve(result), false, mock)
  },
  stopContactStreamingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'stopContactStreaming', 'Connect', Promise.reject(result), true, mock)
  },
  submitContactEvaluation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'submitContactEvaluation', 'Connect', Promise.resolve(result), true, mock)
  },
  submitContactEvaluationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'submitContactEvaluation', 'Connect', Promise.resolve(result), false, mock)
  },
  submitContactEvaluationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'submitContactEvaluation', 'Connect', Promise.reject(result), true, mock)
  },
  suspendContactRecording: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'suspendContactRecording', 'Connect', Promise.resolve(result), true, mock)
  },
  suspendContactRecordingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'suspendContactRecording', 'Connect', Promise.resolve(result), false, mock)
  },
  suspendContactRecordingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'suspendContactRecording', 'Connect', Promise.reject(result), true, mock)
  },
  tagContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'tagContact', 'Connect', Promise.resolve(result), true, mock)
  },
  tagContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'tagContact', 'Connect', Promise.resolve(result), false, mock)
  },
  tagContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'tagContact', 'Connect', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'tagResource', 'Connect', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'tagResource', 'Connect', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'tagResource', 'Connect', Promise.reject(result), true, mock)
  },
  transferContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'transferContact', 'Connect', Promise.resolve(result), true, mock)
  },
  transferContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'transferContact', 'Connect', Promise.resolve(result), false, mock)
  },
  transferContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'transferContact', 'Connect', Promise.reject(result), true, mock)
  },
  untagContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'untagContact', 'Connect', Promise.resolve(result), true, mock)
  },
  untagContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'untagContact', 'Connect', Promise.resolve(result), false, mock)
  },
  untagContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'untagContact', 'Connect', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'untagResource', 'Connect', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'untagResource', 'Connect', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'untagResource', 'Connect', Promise.reject(result), true, mock)
  },
  updateAgentStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateAgentStatus', 'Connect', Promise.resolve(result), true, mock)
  },
  updateAgentStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateAgentStatus', 'Connect', Promise.resolve(result), false, mock)
  },
  updateAgentStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateAgentStatus', 'Connect', Promise.reject(result), true, mock)
  },
  updateContactAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactAttributes', 'Connect', Promise.resolve(result), true, mock)
  },
  updateContactAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactAttributes', 'Connect', Promise.resolve(result), false, mock)
  },
  updateContactAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactAttributes', 'Connect', Promise.reject(result), true, mock)
  },
  updateContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContact', 'Connect', Promise.resolve(result), true, mock)
  },
  updateContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContact', 'Connect', Promise.resolve(result), false, mock)
  },
  updateContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContact', 'Connect', Promise.reject(result), true, mock)
  },
  updateContactEvaluation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactEvaluation', 'Connect', Promise.resolve(result), true, mock)
  },
  updateContactEvaluationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactEvaluation', 'Connect', Promise.resolve(result), false, mock)
  },
  updateContactEvaluationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactEvaluation', 'Connect', Promise.reject(result), true, mock)
  },
  updateContactFlowContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactFlowContent', 'Connect', Promise.resolve(result), true, mock)
  },
  updateContactFlowContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactFlowContent', 'Connect', Promise.resolve(result), false, mock)
  },
  updateContactFlowContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactFlowContent', 'Connect', Promise.reject(result), true, mock)
  },
  updateContactFlowMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactFlowMetadata', 'Connect', Promise.resolve(result), true, mock)
  },
  updateContactFlowMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactFlowMetadata', 'Connect', Promise.resolve(result), false, mock)
  },
  updateContactFlowMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactFlowMetadata', 'Connect', Promise.reject(result), true, mock)
  },
  updateContactFlowModuleContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactFlowModuleContent', 'Connect', Promise.resolve(result), true, mock)
  },
  updateContactFlowModuleContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactFlowModuleContent', 'Connect', Promise.resolve(result), false, mock)
  },
  updateContactFlowModuleContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactFlowModuleContent', 'Connect', Promise.reject(result), true, mock)
  },
  updateContactFlowModuleMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactFlowModuleMetadata', 'Connect', Promise.resolve(result), true, mock)
  },
  updateContactFlowModuleMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactFlowModuleMetadata', 'Connect', Promise.resolve(result), false, mock)
  },
  updateContactFlowModuleMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactFlowModuleMetadata', 'Connect', Promise.reject(result), true, mock)
  },
  updateContactFlowName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactFlowName', 'Connect', Promise.resolve(result), true, mock)
  },
  updateContactFlowNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactFlowName', 'Connect', Promise.resolve(result), false, mock)
  },
  updateContactFlowNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactFlowName', 'Connect', Promise.reject(result), true, mock)
  },
  updateContactRoutingData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactRoutingData', 'Connect', Promise.resolve(result), true, mock)
  },
  updateContactRoutingDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactRoutingData', 'Connect', Promise.resolve(result), false, mock)
  },
  updateContactRoutingDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactRoutingData', 'Connect', Promise.reject(result), true, mock)
  },
  updateContactSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactSchedule', 'Connect', Promise.resolve(result), true, mock)
  },
  updateContactScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactSchedule', 'Connect', Promise.resolve(result), false, mock)
  },
  updateContactScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactSchedule', 'Connect', Promise.reject(result), true, mock)
  },
  updateEvaluationForm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateEvaluationForm', 'Connect', Promise.resolve(result), true, mock)
  },
  updateEvaluationFormAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateEvaluationForm', 'Connect', Promise.resolve(result), false, mock)
  },
  updateEvaluationFormThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateEvaluationForm', 'Connect', Promise.reject(result), true, mock)
  },
  updateHoursOfOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateHoursOfOperation', 'Connect', Promise.resolve(result), true, mock)
  },
  updateHoursOfOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateHoursOfOperation', 'Connect', Promise.resolve(result), false, mock)
  },
  updateHoursOfOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateHoursOfOperation', 'Connect', Promise.reject(result), true, mock)
  },
  updateInstanceAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateInstanceAttribute', 'Connect', Promise.resolve(result), true, mock)
  },
  updateInstanceAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateInstanceAttribute', 'Connect', Promise.resolve(result), false, mock)
  },
  updateInstanceAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateInstanceAttribute', 'Connect', Promise.reject(result), true, mock)
  },
  updateInstanceStorageConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateInstanceStorageConfig', 'Connect', Promise.resolve(result), true, mock)
  },
  updateInstanceStorageConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateInstanceStorageConfig', 'Connect', Promise.resolve(result), false, mock)
  },
  updateInstanceStorageConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateInstanceStorageConfig', 'Connect', Promise.reject(result), true, mock)
  },
  updateParticipantRoleConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateParticipantRoleConfig', 'Connect', Promise.resolve(result), true, mock)
  },
  updateParticipantRoleConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateParticipantRoleConfig', 'Connect', Promise.resolve(result), false, mock)
  },
  updateParticipantRoleConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateParticipantRoleConfig', 'Connect', Promise.reject(result), true, mock)
  },
  updatePhoneNumber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updatePhoneNumber', 'Connect', Promise.resolve(result), true, mock)
  },
  updatePhoneNumberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updatePhoneNumber', 'Connect', Promise.resolve(result), false, mock)
  },
  updatePhoneNumberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updatePhoneNumber', 'Connect', Promise.reject(result), true, mock)
  },
  updatePhoneNumberMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updatePhoneNumberMetadata', 'Connect', Promise.resolve(result), true, mock)
  },
  updatePhoneNumberMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updatePhoneNumberMetadata', 'Connect', Promise.resolve(result), false, mock)
  },
  updatePhoneNumberMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updatePhoneNumberMetadata', 'Connect', Promise.reject(result), true, mock)
  },
  updatePredefinedAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updatePredefinedAttribute', 'Connect', Promise.resolve(result), true, mock)
  },
  updatePredefinedAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updatePredefinedAttribute', 'Connect', Promise.resolve(result), false, mock)
  },
  updatePredefinedAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updatePredefinedAttribute', 'Connect', Promise.reject(result), true, mock)
  },
  updatePrompt: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updatePrompt', 'Connect', Promise.resolve(result), true, mock)
  },
  updatePromptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updatePrompt', 'Connect', Promise.resolve(result), false, mock)
  },
  updatePromptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updatePrompt', 'Connect', Promise.reject(result), true, mock)
  },
  updateQueueHoursOfOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateQueueHoursOfOperation', 'Connect', Promise.resolve(result), true, mock)
  },
  updateQueueHoursOfOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateQueueHoursOfOperation', 'Connect', Promise.resolve(result), false, mock)
  },
  updateQueueHoursOfOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateQueueHoursOfOperation', 'Connect', Promise.reject(result), true, mock)
  },
  updateQueueMaxContacts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateQueueMaxContacts', 'Connect', Promise.resolve(result), true, mock)
  },
  updateQueueMaxContactsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateQueueMaxContacts', 'Connect', Promise.resolve(result), false, mock)
  },
  updateQueueMaxContactsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateQueueMaxContacts', 'Connect', Promise.reject(result), true, mock)
  },
  updateQueueName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateQueueName', 'Connect', Promise.resolve(result), true, mock)
  },
  updateQueueNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateQueueName', 'Connect', Promise.resolve(result), false, mock)
  },
  updateQueueNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateQueueName', 'Connect', Promise.reject(result), true, mock)
  },
  updateQueueOutboundCallerConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateQueueOutboundCallerConfig', 'Connect', Promise.resolve(result), true, mock)
  },
  updateQueueOutboundCallerConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateQueueOutboundCallerConfig', 'Connect', Promise.resolve(result), false, mock)
  },
  updateQueueOutboundCallerConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateQueueOutboundCallerConfig', 'Connect', Promise.reject(result), true, mock)
  },
  updateQueueStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateQueueStatus', 'Connect', Promise.resolve(result), true, mock)
  },
  updateQueueStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateQueueStatus', 'Connect', Promise.resolve(result), false, mock)
  },
  updateQueueStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateQueueStatus', 'Connect', Promise.reject(result), true, mock)
  },
  updateQuickConnectConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateQuickConnectConfig', 'Connect', Promise.resolve(result), true, mock)
  },
  updateQuickConnectConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateQuickConnectConfig', 'Connect', Promise.resolve(result), false, mock)
  },
  updateQuickConnectConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateQuickConnectConfig', 'Connect', Promise.reject(result), true, mock)
  },
  updateQuickConnectName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateQuickConnectName', 'Connect', Promise.resolve(result), true, mock)
  },
  updateQuickConnectNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateQuickConnectName', 'Connect', Promise.resolve(result), false, mock)
  },
  updateQuickConnectNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateQuickConnectName', 'Connect', Promise.reject(result), true, mock)
  },
  updateRoutingProfileAgentAvailabilityTimer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateRoutingProfileAgentAvailabilityTimer', 'Connect', Promise.resolve(result), true, mock)
  },
  updateRoutingProfileAgentAvailabilityTimerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateRoutingProfileAgentAvailabilityTimer', 'Connect', Promise.resolve(result), false, mock)
  },
  updateRoutingProfileAgentAvailabilityTimerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateRoutingProfileAgentAvailabilityTimer', 'Connect', Promise.reject(result), true, mock)
  },
  updateRoutingProfileConcurrency: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateRoutingProfileConcurrency', 'Connect', Promise.resolve(result), true, mock)
  },
  updateRoutingProfileConcurrencyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateRoutingProfileConcurrency', 'Connect', Promise.resolve(result), false, mock)
  },
  updateRoutingProfileConcurrencyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateRoutingProfileConcurrency', 'Connect', Promise.reject(result), true, mock)
  },
  updateRoutingProfileDefaultOutboundQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateRoutingProfileDefaultOutboundQueue', 'Connect', Promise.resolve(result), true, mock)
  },
  updateRoutingProfileDefaultOutboundQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateRoutingProfileDefaultOutboundQueue', 'Connect', Promise.resolve(result), false, mock)
  },
  updateRoutingProfileDefaultOutboundQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateRoutingProfileDefaultOutboundQueue', 'Connect', Promise.reject(result), true, mock)
  },
  updateRoutingProfileName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateRoutingProfileName', 'Connect', Promise.resolve(result), true, mock)
  },
  updateRoutingProfileNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateRoutingProfileName', 'Connect', Promise.resolve(result), false, mock)
  },
  updateRoutingProfileNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateRoutingProfileName', 'Connect', Promise.reject(result), true, mock)
  },
  updateRoutingProfileQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateRoutingProfileQueues', 'Connect', Promise.resolve(result), true, mock)
  },
  updateRoutingProfileQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateRoutingProfileQueues', 'Connect', Promise.resolve(result), false, mock)
  },
  updateRoutingProfileQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateRoutingProfileQueues', 'Connect', Promise.reject(result), true, mock)
  },
  updateRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateRule', 'Connect', Promise.resolve(result), true, mock)
  },
  updateRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateRule', 'Connect', Promise.resolve(result), false, mock)
  },
  updateRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateRule', 'Connect', Promise.reject(result), true, mock)
  },
  updateSecurityProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateSecurityProfile', 'Connect', Promise.resolve(result), true, mock)
  },
  updateSecurityProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateSecurityProfile', 'Connect', Promise.resolve(result), false, mock)
  },
  updateSecurityProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateSecurityProfile', 'Connect', Promise.reject(result), true, mock)
  },
  updateTaskTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateTaskTemplate', 'Connect', Promise.resolve(result), true, mock)
  },
  updateTaskTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateTaskTemplate', 'Connect', Promise.resolve(result), false, mock)
  },
  updateTaskTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateTaskTemplate', 'Connect', Promise.reject(result), true, mock)
  },
  updateTrafficDistribution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateTrafficDistribution', 'Connect', Promise.resolve(result), true, mock)
  },
  updateTrafficDistributionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateTrafficDistribution', 'Connect', Promise.resolve(result), false, mock)
  },
  updateTrafficDistributionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateTrafficDistribution', 'Connect', Promise.reject(result), true, mock)
  },
  updateUserHierarchy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserHierarchy', 'Connect', Promise.resolve(result), true, mock)
  },
  updateUserHierarchyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserHierarchy', 'Connect', Promise.resolve(result), false, mock)
  },
  updateUserHierarchyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserHierarchy', 'Connect', Promise.reject(result), true, mock)
  },
  updateUserHierarchyGroupName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserHierarchyGroupName', 'Connect', Promise.resolve(result), true, mock)
  },
  updateUserHierarchyGroupNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserHierarchyGroupName', 'Connect', Promise.resolve(result), false, mock)
  },
  updateUserHierarchyGroupNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserHierarchyGroupName', 'Connect', Promise.reject(result), true, mock)
  },
  updateUserHierarchyStructure: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserHierarchyStructure', 'Connect', Promise.resolve(result), true, mock)
  },
  updateUserHierarchyStructureAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserHierarchyStructure', 'Connect', Promise.resolve(result), false, mock)
  },
  updateUserHierarchyStructureThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserHierarchyStructure', 'Connect', Promise.reject(result), true, mock)
  },
  updateUserIdentityInfo: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserIdentityInfo', 'Connect', Promise.resolve(result), true, mock)
  },
  updateUserIdentityInfoAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserIdentityInfo', 'Connect', Promise.resolve(result), false, mock)
  },
  updateUserIdentityInfoThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserIdentityInfo', 'Connect', Promise.reject(result), true, mock)
  },
  updateUserPhoneConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserPhoneConfig', 'Connect', Promise.resolve(result), true, mock)
  },
  updateUserPhoneConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserPhoneConfig', 'Connect', Promise.resolve(result), false, mock)
  },
  updateUserPhoneConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserPhoneConfig', 'Connect', Promise.reject(result), true, mock)
  },
  updateUserProficiencies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserProficiencies', 'Connect', Promise.resolve(result), true, mock)
  },
  updateUserProficienciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserProficiencies', 'Connect', Promise.resolve(result), false, mock)
  },
  updateUserProficienciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserProficiencies', 'Connect', Promise.reject(result), true, mock)
  },
  updateUserRoutingProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserRoutingProfile', 'Connect', Promise.resolve(result), true, mock)
  },
  updateUserRoutingProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserRoutingProfile', 'Connect', Promise.resolve(result), false, mock)
  },
  updateUserRoutingProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserRoutingProfile', 'Connect', Promise.reject(result), true, mock)
  },
  updateUserSecurityProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserSecurityProfiles', 'Connect', Promise.resolve(result), true, mock)
  },
  updateUserSecurityProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserSecurityProfiles', 'Connect', Promise.resolve(result), false, mock)
  },
  updateUserSecurityProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateUserSecurityProfiles', 'Connect', Promise.reject(result), true, mock)
  },
  updateViewContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateViewContent', 'Connect', Promise.resolve(result), true, mock)
  },
  updateViewContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateViewContent', 'Connect', Promise.resolve(result), false, mock)
  },
  updateViewContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateViewContent', 'Connect', Promise.reject(result), true, mock)
  },
  updateViewMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateViewMetadata', 'Connect', Promise.resolve(result), true, mock)
  },
  updateViewMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateViewMetadata', 'Connect', Promise.resolve(result), false, mock)
  },
  updateViewMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateViewMetadata', 'Connect', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'send', 'ConnectClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'send', 'ConnectClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'send', 'ConnectClient', Promise.reject(result), true, mock)
  }
}
