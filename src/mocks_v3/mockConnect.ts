
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
  createSecurityProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createSecurityProfile', 'Connect', Promise.resolve(result), true, mock)
  },
  createSecurityProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createSecurityProfile', 'Connect', Promise.resolve(result), false, mock)
  },
  createSecurityProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'createSecurityProfile', 'Connect', Promise.reject(result), true, mock)
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
  deleteQuickConnect: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteQuickConnect', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteQuickConnectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteQuickConnect', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteQuickConnectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'deleteQuickConnect', 'Connect', Promise.reject(result), true, mock)
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
  describeContactFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeContactFlow', 'Connect', Promise.resolve(result), true, mock)
  },
  describeContactFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeContactFlow', 'Connect', Promise.resolve(result), false, mock)
  },
  describeContactFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeContactFlow', 'Connect', Promise.reject(result), true, mock)
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
  describeInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeInstance', 'Connect', Promise.resolve(result), true, mock)
  },
  describeInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeInstance', 'Connect', Promise.resolve(result), false, mock)
  },
  describeInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeInstance', 'Connect', Promise.reject(result), true, mock)
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
  describeInstanceStorageConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeInstanceStorageConfig', 'Connect', Promise.resolve(result), true, mock)
  },
  describeInstanceStorageConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeInstanceStorageConfig', 'Connect', Promise.resolve(result), false, mock)
  },
  describeInstanceStorageConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeInstanceStorageConfig', 'Connect', Promise.reject(result), true, mock)
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
  describeSecurityProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeSecurityProfile', 'Connect', Promise.resolve(result), true, mock)
  },
  describeSecurityProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeSecurityProfile', 'Connect', Promise.resolve(result), false, mock)
  },
  describeSecurityProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'describeSecurityProfile', 'Connect', Promise.reject(result), true, mock)
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
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'destroy', 'Connect', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'destroy', 'Connect', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'destroy', 'Connect', Promise.reject(result), true, mock)
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
  getFederationToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getFederationToken', 'Connect', Promise.resolve(result), true, mock)
  },
  getFederationTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getFederationToken', 'Connect', Promise.resolve(result), false, mock)
  },
  getFederationTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'getFederationToken', 'Connect', Promise.reject(result), true, mock)
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
  listAgentStatuses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listAgentStatuses', 'Connect', Promise.resolve(result), true, mock)
  },
  listAgentStatusesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listAgentStatuses', 'Connect', Promise.resolve(result), false, mock)
  },
  listAgentStatusesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listAgentStatuses', 'Connect', Promise.reject(result), true, mock)
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
  listSecurityKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listSecurityKeys', 'Connect', Promise.resolve(result), true, mock)
  },
  listSecurityKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listSecurityKeys', 'Connect', Promise.resolve(result), false, mock)
  },
  listSecurityKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listSecurityKeys', 'Connect', Promise.reject(result), true, mock)
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
  listUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listUsers', 'Connect', Promise.resolve(result), true, mock)
  },
  listUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listUsers', 'Connect', Promise.resolve(result), false, mock)
  },
  listUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'listUsers', 'Connect', Promise.reject(result), true, mock)
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
  startChatContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startChatContact', 'Connect', Promise.resolve(result), true, mock)
  },
  startChatContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startChatContact', 'Connect', Promise.resolve(result), false, mock)
  },
  startChatContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'startChatContact', 'Connect', Promise.reject(result), true, mock)
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
  suspendContactRecording: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'suspendContactRecording', 'Connect', Promise.resolve(result), true, mock)
  },
  suspendContactRecordingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'suspendContactRecording', 'Connect', Promise.resolve(result), false, mock)
  },
  suspendContactRecordingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'suspendContactRecording', 'Connect', Promise.reject(result), true, mock)
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
  updateContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContact', 'Connect', Promise.resolve(result), true, mock)
  },
  updateContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContact', 'Connect', Promise.resolve(result), false, mock)
  },
  updateContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContact', 'Connect', Promise.reject(result), true, mock)
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
  updateContactFlowContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactFlowContent', 'Connect', Promise.resolve(result), true, mock)
  },
  updateContactFlowContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactFlowContent', 'Connect', Promise.resolve(result), false, mock)
  },
  updateContactFlowContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactFlowContent', 'Connect', Promise.reject(result), true, mock)
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
  updateContactSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactSchedule', 'Connect', Promise.resolve(result), true, mock)
  },
  updateContactScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactSchedule', 'Connect', Promise.resolve(result), false, mock)
  },
  updateContactScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateContactSchedule', 'Connect', Promise.reject(result), true, mock)
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
  updateSecurityProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateSecurityProfile', 'Connect', Promise.resolve(result), true, mock)
  },
  updateSecurityProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateSecurityProfile', 'Connect', Promise.resolve(result), false, mock)
  },
  updateSecurityProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connect', 'updateSecurityProfile', 'Connect', Promise.reject(result), true, mock)
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