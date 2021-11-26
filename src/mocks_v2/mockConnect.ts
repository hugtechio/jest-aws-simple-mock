
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
  export const mockConnect = {
  associateApprovedOrigin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateApprovedOrigin', 'Connect', Promise.resolve(result), true, mock)
  },
  associateApprovedOriginAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateApprovedOrigin', 'Connect', Promise.resolve(result), false, mock)
  },
  associateApprovedOriginThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateApprovedOrigin', 'Connect', Promise.reject(result), true, mock)
  },
  associateBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateBot', 'Connect', Promise.resolve(result), true, mock)
  },
  associateBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateBot', 'Connect', Promise.resolve(result), false, mock)
  },
  associateBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateBot', 'Connect', Promise.reject(result), true, mock)
  },
  associateInstanceStorageConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateInstanceStorageConfig', 'Connect', Promise.resolve(result), true, mock)
  },
  associateInstanceStorageConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateInstanceStorageConfig', 'Connect', Promise.resolve(result), false, mock)
  },
  associateInstanceStorageConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateInstanceStorageConfig', 'Connect', Promise.reject(result), true, mock)
  },
  associateLambdaFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateLambdaFunction', 'Connect', Promise.resolve(result), true, mock)
  },
  associateLambdaFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateLambdaFunction', 'Connect', Promise.resolve(result), false, mock)
  },
  associateLambdaFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateLambdaFunction', 'Connect', Promise.reject(result), true, mock)
  },
  associateLexBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateLexBot', 'Connect', Promise.resolve(result), true, mock)
  },
  associateLexBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateLexBot', 'Connect', Promise.resolve(result), false, mock)
  },
  associateLexBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateLexBot', 'Connect', Promise.reject(result), true, mock)
  },
  associateQueueQuickConnects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateQueueQuickConnects', 'Connect', Promise.resolve(result), true, mock)
  },
  associateQueueQuickConnectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateQueueQuickConnects', 'Connect', Promise.resolve(result), false, mock)
  },
  associateQueueQuickConnectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateQueueQuickConnects', 'Connect', Promise.reject(result), true, mock)
  },
  associateRoutingProfileQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateRoutingProfileQueues', 'Connect', Promise.resolve(result), true, mock)
  },
  associateRoutingProfileQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateRoutingProfileQueues', 'Connect', Promise.resolve(result), false, mock)
  },
  associateRoutingProfileQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateRoutingProfileQueues', 'Connect', Promise.reject(result), true, mock)
  },
  associateSecurityKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateSecurityKey', 'Connect', Promise.resolve(result), true, mock)
  },
  associateSecurityKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateSecurityKey', 'Connect', Promise.resolve(result), false, mock)
  },
  associateSecurityKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateSecurityKey', 'Connect', Promise.reject(result), true, mock)
  },
  createAgentStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAgentStatus', 'Connect', Promise.resolve(result), true, mock)
  },
  createAgentStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAgentStatus', 'Connect', Promise.resolve(result), false, mock)
  },
  createAgentStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAgentStatus', 'Connect', Promise.reject(result), true, mock)
  },
  createContactFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContactFlow', 'Connect', Promise.resolve(result), true, mock)
  },
  createContactFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContactFlow', 'Connect', Promise.resolve(result), false, mock)
  },
  createContactFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createContactFlow', 'Connect', Promise.reject(result), true, mock)
  },
  createHoursOfOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHoursOfOperation', 'Connect', Promise.resolve(result), true, mock)
  },
  createHoursOfOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHoursOfOperation', 'Connect', Promise.resolve(result), false, mock)
  },
  createHoursOfOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHoursOfOperation', 'Connect', Promise.reject(result), true, mock)
  },
  createInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInstance', 'Connect', Promise.resolve(result), true, mock)
  },
  createInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInstance', 'Connect', Promise.resolve(result), false, mock)
  },
  createInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInstance', 'Connect', Promise.reject(result), true, mock)
  },
  createIntegrationAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIntegrationAssociation', 'Connect', Promise.resolve(result), true, mock)
  },
  createIntegrationAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIntegrationAssociation', 'Connect', Promise.resolve(result), false, mock)
  },
  createIntegrationAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIntegrationAssociation', 'Connect', Promise.reject(result), true, mock)
  },
  createQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQueue', 'Connect', Promise.resolve(result), true, mock)
  },
  createQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQueue', 'Connect', Promise.resolve(result), false, mock)
  },
  createQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQueue', 'Connect', Promise.reject(result), true, mock)
  },
  createQuickConnect: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQuickConnect', 'Connect', Promise.resolve(result), true, mock)
  },
  createQuickConnectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQuickConnect', 'Connect', Promise.resolve(result), false, mock)
  },
  createQuickConnectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQuickConnect', 'Connect', Promise.reject(result), true, mock)
  },
  createRoutingProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRoutingProfile', 'Connect', Promise.resolve(result), true, mock)
  },
  createRoutingProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRoutingProfile', 'Connect', Promise.resolve(result), false, mock)
  },
  createRoutingProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRoutingProfile', 'Connect', Promise.reject(result), true, mock)
  },
  createSecurityProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSecurityProfile', 'Connect', Promise.resolve(result), true, mock)
  },
  createSecurityProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSecurityProfile', 'Connect', Promise.resolve(result), false, mock)
  },
  createSecurityProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSecurityProfile', 'Connect', Promise.reject(result), true, mock)
  },
  createUseCase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUseCase', 'Connect', Promise.resolve(result), true, mock)
  },
  createUseCaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUseCase', 'Connect', Promise.resolve(result), false, mock)
  },
  createUseCaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUseCase', 'Connect', Promise.reject(result), true, mock)
  },
  createUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUser', 'Connect', Promise.resolve(result), true, mock)
  },
  createUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUser', 'Connect', Promise.resolve(result), false, mock)
  },
  createUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUser', 'Connect', Promise.reject(result), true, mock)
  },
  createUserHierarchyGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserHierarchyGroup', 'Connect', Promise.resolve(result), true, mock)
  },
  createUserHierarchyGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserHierarchyGroup', 'Connect', Promise.resolve(result), false, mock)
  },
  createUserHierarchyGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUserHierarchyGroup', 'Connect', Promise.reject(result), true, mock)
  },
  deleteHoursOfOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHoursOfOperation', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteHoursOfOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHoursOfOperation', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteHoursOfOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHoursOfOperation', 'Connect', Promise.reject(result), true, mock)
  },
  deleteInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInstance', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInstance', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInstance', 'Connect', Promise.reject(result), true, mock)
  },
  deleteIntegrationAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIntegrationAssociation', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteIntegrationAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIntegrationAssociation', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteIntegrationAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIntegrationAssociation', 'Connect', Promise.reject(result), true, mock)
  },
  deleteQuickConnect: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQuickConnect', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteQuickConnectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQuickConnect', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteQuickConnectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteQuickConnect', 'Connect', Promise.reject(result), true, mock)
  },
  deleteSecurityProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSecurityProfile', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteSecurityProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSecurityProfile', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteSecurityProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSecurityProfile', 'Connect', Promise.reject(result), true, mock)
  },
  deleteUseCase: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUseCase', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteUseCaseAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUseCase', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteUseCaseThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUseCase', 'Connect', Promise.reject(result), true, mock)
  },
  deleteUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUser', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUser', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUser', 'Connect', Promise.reject(result), true, mock)
  },
  deleteUserHierarchyGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserHierarchyGroup', 'Connect', Promise.resolve(result), true, mock)
  },
  deleteUserHierarchyGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserHierarchyGroup', 'Connect', Promise.resolve(result), false, mock)
  },
  deleteUserHierarchyGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUserHierarchyGroup', 'Connect', Promise.reject(result), true, mock)
  },
  describeAgentStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAgentStatus', 'Connect', Promise.resolve(result), true, mock)
  },
  describeAgentStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAgentStatus', 'Connect', Promise.resolve(result), false, mock)
  },
  describeAgentStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAgentStatus', 'Connect', Promise.reject(result), true, mock)
  },
  describeContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContact', 'Connect', Promise.resolve(result), true, mock)
  },
  describeContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContact', 'Connect', Promise.resolve(result), false, mock)
  },
  describeContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContact', 'Connect', Promise.reject(result), true, mock)
  },
  describeContactFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContactFlow', 'Connect', Promise.resolve(result), true, mock)
  },
  describeContactFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContactFlow', 'Connect', Promise.resolve(result), false, mock)
  },
  describeContactFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContactFlow', 'Connect', Promise.reject(result), true, mock)
  },
  describeHoursOfOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHoursOfOperation', 'Connect', Promise.resolve(result), true, mock)
  },
  describeHoursOfOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHoursOfOperation', 'Connect', Promise.resolve(result), false, mock)
  },
  describeHoursOfOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHoursOfOperation', 'Connect', Promise.reject(result), true, mock)
  },
  describeInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstance', 'Connect', Promise.resolve(result), true, mock)
  },
  describeInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstance', 'Connect', Promise.resolve(result), false, mock)
  },
  describeInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstance', 'Connect', Promise.reject(result), true, mock)
  },
  describeInstanceAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstanceAttribute', 'Connect', Promise.resolve(result), true, mock)
  },
  describeInstanceAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstanceAttribute', 'Connect', Promise.resolve(result), false, mock)
  },
  describeInstanceAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstanceAttribute', 'Connect', Promise.reject(result), true, mock)
  },
  describeInstanceStorageConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstanceStorageConfig', 'Connect', Promise.resolve(result), true, mock)
  },
  describeInstanceStorageConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstanceStorageConfig', 'Connect', Promise.resolve(result), false, mock)
  },
  describeInstanceStorageConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstanceStorageConfig', 'Connect', Promise.reject(result), true, mock)
  },
  describeQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeQueue', 'Connect', Promise.resolve(result), true, mock)
  },
  describeQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeQueue', 'Connect', Promise.resolve(result), false, mock)
  },
  describeQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeQueue', 'Connect', Promise.reject(result), true, mock)
  },
  describeQuickConnect: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeQuickConnect', 'Connect', Promise.resolve(result), true, mock)
  },
  describeQuickConnectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeQuickConnect', 'Connect', Promise.resolve(result), false, mock)
  },
  describeQuickConnectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeQuickConnect', 'Connect', Promise.reject(result), true, mock)
  },
  describeRoutingProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRoutingProfile', 'Connect', Promise.resolve(result), true, mock)
  },
  describeRoutingProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRoutingProfile', 'Connect', Promise.resolve(result), false, mock)
  },
  describeRoutingProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRoutingProfile', 'Connect', Promise.reject(result), true, mock)
  },
  describeSecurityProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSecurityProfile', 'Connect', Promise.resolve(result), true, mock)
  },
  describeSecurityProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSecurityProfile', 'Connect', Promise.resolve(result), false, mock)
  },
  describeSecurityProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSecurityProfile', 'Connect', Promise.reject(result), true, mock)
  },
  describeUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUser', 'Connect', Promise.resolve(result), true, mock)
  },
  describeUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUser', 'Connect', Promise.resolve(result), false, mock)
  },
  describeUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUser', 'Connect', Promise.reject(result), true, mock)
  },
  describeUserHierarchyGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserHierarchyGroup', 'Connect', Promise.resolve(result), true, mock)
  },
  describeUserHierarchyGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserHierarchyGroup', 'Connect', Promise.resolve(result), false, mock)
  },
  describeUserHierarchyGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserHierarchyGroup', 'Connect', Promise.reject(result), true, mock)
  },
  describeUserHierarchyStructure: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserHierarchyStructure', 'Connect', Promise.resolve(result), true, mock)
  },
  describeUserHierarchyStructureAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserHierarchyStructure', 'Connect', Promise.resolve(result), false, mock)
  },
  describeUserHierarchyStructureThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserHierarchyStructure', 'Connect', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Connect', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Connect', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Connect', Promise.reject(result), true, mock)
  },
  disassociateApprovedOrigin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateApprovedOrigin', 'Connect', Promise.resolve(result), true, mock)
  },
  disassociateApprovedOriginAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateApprovedOrigin', 'Connect', Promise.resolve(result), false, mock)
  },
  disassociateApprovedOriginThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateApprovedOrigin', 'Connect', Promise.reject(result), true, mock)
  },
  disassociateBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateBot', 'Connect', Promise.resolve(result), true, mock)
  },
  disassociateBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateBot', 'Connect', Promise.resolve(result), false, mock)
  },
  disassociateBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateBot', 'Connect', Promise.reject(result), true, mock)
  },
  disassociateInstanceStorageConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateInstanceStorageConfig', 'Connect', Promise.resolve(result), true, mock)
  },
  disassociateInstanceStorageConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateInstanceStorageConfig', 'Connect', Promise.resolve(result), false, mock)
  },
  disassociateInstanceStorageConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateInstanceStorageConfig', 'Connect', Promise.reject(result), true, mock)
  },
  disassociateLambdaFunction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateLambdaFunction', 'Connect', Promise.resolve(result), true, mock)
  },
  disassociateLambdaFunctionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateLambdaFunction', 'Connect', Promise.resolve(result), false, mock)
  },
  disassociateLambdaFunctionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateLambdaFunction', 'Connect', Promise.reject(result), true, mock)
  },
  disassociateLexBot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateLexBot', 'Connect', Promise.resolve(result), true, mock)
  },
  disassociateLexBotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateLexBot', 'Connect', Promise.resolve(result), false, mock)
  },
  disassociateLexBotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateLexBot', 'Connect', Promise.reject(result), true, mock)
  },
  disassociateQueueQuickConnects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateQueueQuickConnects', 'Connect', Promise.resolve(result), true, mock)
  },
  disassociateQueueQuickConnectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateQueueQuickConnects', 'Connect', Promise.resolve(result), false, mock)
  },
  disassociateQueueQuickConnectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateQueueQuickConnects', 'Connect', Promise.reject(result), true, mock)
  },
  disassociateRoutingProfileQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateRoutingProfileQueues', 'Connect', Promise.resolve(result), true, mock)
  },
  disassociateRoutingProfileQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateRoutingProfileQueues', 'Connect', Promise.resolve(result), false, mock)
  },
  disassociateRoutingProfileQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateRoutingProfileQueues', 'Connect', Promise.reject(result), true, mock)
  },
  disassociateSecurityKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateSecurityKey', 'Connect', Promise.resolve(result), true, mock)
  },
  disassociateSecurityKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateSecurityKey', 'Connect', Promise.resolve(result), false, mock)
  },
  disassociateSecurityKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateSecurityKey', 'Connect', Promise.reject(result), true, mock)
  },
  getContactAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContactAttributes', 'Connect', Promise.resolve(result), true, mock)
  },
  getContactAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContactAttributes', 'Connect', Promise.resolve(result), false, mock)
  },
  getContactAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getContactAttributes', 'Connect', Promise.reject(result), true, mock)
  },
  getCurrentMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCurrentMetricData', 'Connect', Promise.resolve(result), true, mock)
  },
  getCurrentMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCurrentMetricData', 'Connect', Promise.resolve(result), false, mock)
  },
  getCurrentMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCurrentMetricData', 'Connect', Promise.reject(result), true, mock)
  },
  getFederationToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFederationToken', 'Connect', Promise.resolve(result), true, mock)
  },
  getFederationTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFederationToken', 'Connect', Promise.resolve(result), false, mock)
  },
  getFederationTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFederationToken', 'Connect', Promise.reject(result), true, mock)
  },
  getMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMetricData', 'Connect', Promise.resolve(result), true, mock)
  },
  getMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMetricData', 'Connect', Promise.resolve(result), false, mock)
  },
  getMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMetricData', 'Connect', Promise.reject(result), true, mock)
  },
  listAgentStatuses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAgentStatuses', 'Connect', Promise.resolve(result), true, mock)
  },
  listAgentStatusesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAgentStatuses', 'Connect', Promise.resolve(result), false, mock)
  },
  listAgentStatusesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAgentStatuses', 'Connect', Promise.reject(result), true, mock)
  },
  listApprovedOrigins: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApprovedOrigins', 'Connect', Promise.resolve(result), true, mock)
  },
  listApprovedOriginsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApprovedOrigins', 'Connect', Promise.resolve(result), false, mock)
  },
  listApprovedOriginsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApprovedOrigins', 'Connect', Promise.reject(result), true, mock)
  },
  listBots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBots', 'Connect', Promise.resolve(result), true, mock)
  },
  listBotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBots', 'Connect', Promise.resolve(result), false, mock)
  },
  listBotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBots', 'Connect', Promise.reject(result), true, mock)
  },
  listContactFlows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContactFlows', 'Connect', Promise.resolve(result), true, mock)
  },
  listContactFlowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContactFlows', 'Connect', Promise.resolve(result), false, mock)
  },
  listContactFlowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContactFlows', 'Connect', Promise.reject(result), true, mock)
  },
  listContactReferences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContactReferences', 'Connect', Promise.resolve(result), true, mock)
  },
  listContactReferencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContactReferences', 'Connect', Promise.resolve(result), false, mock)
  },
  listContactReferencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContactReferences', 'Connect', Promise.reject(result), true, mock)
  },
  listHoursOfOperations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHoursOfOperations', 'Connect', Promise.resolve(result), true, mock)
  },
  listHoursOfOperationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHoursOfOperations', 'Connect', Promise.resolve(result), false, mock)
  },
  listHoursOfOperationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHoursOfOperations', 'Connect', Promise.reject(result), true, mock)
  },
  listInstanceAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstanceAttributes', 'Connect', Promise.resolve(result), true, mock)
  },
  listInstanceAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstanceAttributes', 'Connect', Promise.resolve(result), false, mock)
  },
  listInstanceAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstanceAttributes', 'Connect', Promise.reject(result), true, mock)
  },
  listInstanceStorageConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstanceStorageConfigs', 'Connect', Promise.resolve(result), true, mock)
  },
  listInstanceStorageConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstanceStorageConfigs', 'Connect', Promise.resolve(result), false, mock)
  },
  listInstanceStorageConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstanceStorageConfigs', 'Connect', Promise.reject(result), true, mock)
  },
  listInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstances', 'Connect', Promise.resolve(result), true, mock)
  },
  listInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstances', 'Connect', Promise.resolve(result), false, mock)
  },
  listInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstances', 'Connect', Promise.reject(result), true, mock)
  },
  listIntegrationAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIntegrationAssociations', 'Connect', Promise.resolve(result), true, mock)
  },
  listIntegrationAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIntegrationAssociations', 'Connect', Promise.resolve(result), false, mock)
  },
  listIntegrationAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIntegrationAssociations', 'Connect', Promise.reject(result), true, mock)
  },
  listLambdaFunctions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLambdaFunctions', 'Connect', Promise.resolve(result), true, mock)
  },
  listLambdaFunctionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLambdaFunctions', 'Connect', Promise.resolve(result), false, mock)
  },
  listLambdaFunctionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLambdaFunctions', 'Connect', Promise.reject(result), true, mock)
  },
  listLexBots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLexBots', 'Connect', Promise.resolve(result), true, mock)
  },
  listLexBotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLexBots', 'Connect', Promise.resolve(result), false, mock)
  },
  listLexBotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLexBots', 'Connect', Promise.reject(result), true, mock)
  },
  listPhoneNumbers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPhoneNumbers', 'Connect', Promise.resolve(result), true, mock)
  },
  listPhoneNumbersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPhoneNumbers', 'Connect', Promise.resolve(result), false, mock)
  },
  listPhoneNumbersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPhoneNumbers', 'Connect', Promise.reject(result), true, mock)
  },
  listPrompts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPrompts', 'Connect', Promise.resolve(result), true, mock)
  },
  listPromptsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPrompts', 'Connect', Promise.resolve(result), false, mock)
  },
  listPromptsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPrompts', 'Connect', Promise.reject(result), true, mock)
  },
  listQueueQuickConnects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueueQuickConnects', 'Connect', Promise.resolve(result), true, mock)
  },
  listQueueQuickConnectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueueQuickConnects', 'Connect', Promise.resolve(result), false, mock)
  },
  listQueueQuickConnectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueueQuickConnects', 'Connect', Promise.reject(result), true, mock)
  },
  listQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueues', 'Connect', Promise.resolve(result), true, mock)
  },
  listQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueues', 'Connect', Promise.resolve(result), false, mock)
  },
  listQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQueues', 'Connect', Promise.reject(result), true, mock)
  },
  listQuickConnects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQuickConnects', 'Connect', Promise.resolve(result), true, mock)
  },
  listQuickConnectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQuickConnects', 'Connect', Promise.resolve(result), false, mock)
  },
  listQuickConnectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listQuickConnects', 'Connect', Promise.reject(result), true, mock)
  },
  listRoutingProfileQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRoutingProfileQueues', 'Connect', Promise.resolve(result), true, mock)
  },
  listRoutingProfileQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRoutingProfileQueues', 'Connect', Promise.resolve(result), false, mock)
  },
  listRoutingProfileQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRoutingProfileQueues', 'Connect', Promise.reject(result), true, mock)
  },
  listRoutingProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRoutingProfiles', 'Connect', Promise.resolve(result), true, mock)
  },
  listRoutingProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRoutingProfiles', 'Connect', Promise.resolve(result), false, mock)
  },
  listRoutingProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRoutingProfiles', 'Connect', Promise.reject(result), true, mock)
  },
  listSecurityKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecurityKeys', 'Connect', Promise.resolve(result), true, mock)
  },
  listSecurityKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecurityKeys', 'Connect', Promise.resolve(result), false, mock)
  },
  listSecurityKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecurityKeys', 'Connect', Promise.reject(result), true, mock)
  },
  listSecurityProfilePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecurityProfilePermissions', 'Connect', Promise.resolve(result), true, mock)
  },
  listSecurityProfilePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecurityProfilePermissions', 'Connect', Promise.resolve(result), false, mock)
  },
  listSecurityProfilePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecurityProfilePermissions', 'Connect', Promise.reject(result), true, mock)
  },
  listSecurityProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecurityProfiles', 'Connect', Promise.resolve(result), true, mock)
  },
  listSecurityProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecurityProfiles', 'Connect', Promise.resolve(result), false, mock)
  },
  listSecurityProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecurityProfiles', 'Connect', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Connect', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Connect', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Connect', Promise.reject(result), true, mock)
  },
  listUseCases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUseCases', 'Connect', Promise.resolve(result), true, mock)
  },
  listUseCasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUseCases', 'Connect', Promise.resolve(result), false, mock)
  },
  listUseCasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUseCases', 'Connect', Promise.reject(result), true, mock)
  },
  listUserHierarchyGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUserHierarchyGroups', 'Connect', Promise.resolve(result), true, mock)
  },
  listUserHierarchyGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUserHierarchyGroups', 'Connect', Promise.resolve(result), false, mock)
  },
  listUserHierarchyGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUserHierarchyGroups', 'Connect', Promise.reject(result), true, mock)
  },
  listUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsers', 'Connect', Promise.resolve(result), true, mock)
  },
  listUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsers', 'Connect', Promise.resolve(result), false, mock)
  },
  listUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsers', 'Connect', Promise.reject(result), true, mock)
  },
  resumeContactRecording: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resumeContactRecording', 'Connect', Promise.resolve(result), true, mock)
  },
  resumeContactRecordingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resumeContactRecording', 'Connect', Promise.resolve(result), false, mock)
  },
  resumeContactRecordingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resumeContactRecording', 'Connect', Promise.reject(result), true, mock)
  },
  startChatContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startChatContact', 'Connect', Promise.resolve(result), true, mock)
  },
  startChatContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startChatContact', 'Connect', Promise.resolve(result), false, mock)
  },
  startChatContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startChatContact', 'Connect', Promise.reject(result), true, mock)
  },
  startContactRecording: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startContactRecording', 'Connect', Promise.resolve(result), true, mock)
  },
  startContactRecordingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startContactRecording', 'Connect', Promise.resolve(result), false, mock)
  },
  startContactRecordingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startContactRecording', 'Connect', Promise.reject(result), true, mock)
  },
  startContactStreaming: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startContactStreaming', 'Connect', Promise.resolve(result), true, mock)
  },
  startContactStreamingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startContactStreaming', 'Connect', Promise.resolve(result), false, mock)
  },
  startContactStreamingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startContactStreaming', 'Connect', Promise.reject(result), true, mock)
  },
  startOutboundVoiceContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startOutboundVoiceContact', 'Connect', Promise.resolve(result), true, mock)
  },
  startOutboundVoiceContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startOutboundVoiceContact', 'Connect', Promise.resolve(result), false, mock)
  },
  startOutboundVoiceContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startOutboundVoiceContact', 'Connect', Promise.reject(result), true, mock)
  },
  startTaskContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTaskContact', 'Connect', Promise.resolve(result), true, mock)
  },
  startTaskContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTaskContact', 'Connect', Promise.resolve(result), false, mock)
  },
  startTaskContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTaskContact', 'Connect', Promise.reject(result), true, mock)
  },
  stopContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopContact', 'Connect', Promise.resolve(result), true, mock)
  },
  stopContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopContact', 'Connect', Promise.resolve(result), false, mock)
  },
  stopContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopContact', 'Connect', Promise.reject(result), true, mock)
  },
  stopContactRecording: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopContactRecording', 'Connect', Promise.resolve(result), true, mock)
  },
  stopContactRecordingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopContactRecording', 'Connect', Promise.resolve(result), false, mock)
  },
  stopContactRecordingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopContactRecording', 'Connect', Promise.reject(result), true, mock)
  },
  stopContactStreaming: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopContactStreaming', 'Connect', Promise.resolve(result), true, mock)
  },
  stopContactStreamingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopContactStreaming', 'Connect', Promise.resolve(result), false, mock)
  },
  stopContactStreamingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopContactStreaming', 'Connect', Promise.reject(result), true, mock)
  },
  suspendContactRecording: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('suspendContactRecording', 'Connect', Promise.resolve(result), true, mock)
  },
  suspendContactRecordingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('suspendContactRecording', 'Connect', Promise.resolve(result), false, mock)
  },
  suspendContactRecordingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('suspendContactRecording', 'Connect', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Connect', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Connect', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Connect', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Connect', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Connect', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Connect', Promise.reject(result), true, mock)
  },
  updateAgentStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAgentStatus', 'Connect', Promise.resolve(result), true, mock)
  },
  updateAgentStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAgentStatus', 'Connect', Promise.resolve(result), false, mock)
  },
  updateAgentStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAgentStatus', 'Connect', Promise.reject(result), true, mock)
  },
  updateContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContact', 'Connect', Promise.resolve(result), true, mock)
  },
  updateContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContact', 'Connect', Promise.resolve(result), false, mock)
  },
  updateContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContact', 'Connect', Promise.reject(result), true, mock)
  },
  updateContactAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContactAttributes', 'Connect', Promise.resolve(result), true, mock)
  },
  updateContactAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContactAttributes', 'Connect', Promise.resolve(result), false, mock)
  },
  updateContactAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContactAttributes', 'Connect', Promise.reject(result), true, mock)
  },
  updateContactFlowContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContactFlowContent', 'Connect', Promise.resolve(result), true, mock)
  },
  updateContactFlowContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContactFlowContent', 'Connect', Promise.resolve(result), false, mock)
  },
  updateContactFlowContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContactFlowContent', 'Connect', Promise.reject(result), true, mock)
  },
  updateContactFlowName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContactFlowName', 'Connect', Promise.resolve(result), true, mock)
  },
  updateContactFlowNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContactFlowName', 'Connect', Promise.resolve(result), false, mock)
  },
  updateContactFlowNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContactFlowName', 'Connect', Promise.reject(result), true, mock)
  },
  updateContactSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContactSchedule', 'Connect', Promise.resolve(result), true, mock)
  },
  updateContactScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContactSchedule', 'Connect', Promise.resolve(result), false, mock)
  },
  updateContactScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContactSchedule', 'Connect', Promise.reject(result), true, mock)
  },
  updateHoursOfOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateHoursOfOperation', 'Connect', Promise.resolve(result), true, mock)
  },
  updateHoursOfOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateHoursOfOperation', 'Connect', Promise.resolve(result), false, mock)
  },
  updateHoursOfOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateHoursOfOperation', 'Connect', Promise.reject(result), true, mock)
  },
  updateInstanceAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInstanceAttribute', 'Connect', Promise.resolve(result), true, mock)
  },
  updateInstanceAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInstanceAttribute', 'Connect', Promise.resolve(result), false, mock)
  },
  updateInstanceAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInstanceAttribute', 'Connect', Promise.reject(result), true, mock)
  },
  updateInstanceStorageConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInstanceStorageConfig', 'Connect', Promise.resolve(result), true, mock)
  },
  updateInstanceStorageConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInstanceStorageConfig', 'Connect', Promise.resolve(result), false, mock)
  },
  updateInstanceStorageConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInstanceStorageConfig', 'Connect', Promise.reject(result), true, mock)
  },
  updateQueueHoursOfOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQueueHoursOfOperation', 'Connect', Promise.resolve(result), true, mock)
  },
  updateQueueHoursOfOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQueueHoursOfOperation', 'Connect', Promise.resolve(result), false, mock)
  },
  updateQueueHoursOfOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQueueHoursOfOperation', 'Connect', Promise.reject(result), true, mock)
  },
  updateQueueMaxContacts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQueueMaxContacts', 'Connect', Promise.resolve(result), true, mock)
  },
  updateQueueMaxContactsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQueueMaxContacts', 'Connect', Promise.resolve(result), false, mock)
  },
  updateQueueMaxContactsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQueueMaxContacts', 'Connect', Promise.reject(result), true, mock)
  },
  updateQueueName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQueueName', 'Connect', Promise.resolve(result), true, mock)
  },
  updateQueueNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQueueName', 'Connect', Promise.resolve(result), false, mock)
  },
  updateQueueNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQueueName', 'Connect', Promise.reject(result), true, mock)
  },
  updateQueueOutboundCallerConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQueueOutboundCallerConfig', 'Connect', Promise.resolve(result), true, mock)
  },
  updateQueueOutboundCallerConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQueueOutboundCallerConfig', 'Connect', Promise.resolve(result), false, mock)
  },
  updateQueueOutboundCallerConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQueueOutboundCallerConfig', 'Connect', Promise.reject(result), true, mock)
  },
  updateQueueStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQueueStatus', 'Connect', Promise.resolve(result), true, mock)
  },
  updateQueueStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQueueStatus', 'Connect', Promise.resolve(result), false, mock)
  },
  updateQueueStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQueueStatus', 'Connect', Promise.reject(result), true, mock)
  },
  updateQuickConnectConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQuickConnectConfig', 'Connect', Promise.resolve(result), true, mock)
  },
  updateQuickConnectConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQuickConnectConfig', 'Connect', Promise.resolve(result), false, mock)
  },
  updateQuickConnectConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQuickConnectConfig', 'Connect', Promise.reject(result), true, mock)
  },
  updateQuickConnectName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQuickConnectName', 'Connect', Promise.resolve(result), true, mock)
  },
  updateQuickConnectNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQuickConnectName', 'Connect', Promise.resolve(result), false, mock)
  },
  updateQuickConnectNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateQuickConnectName', 'Connect', Promise.reject(result), true, mock)
  },
  updateRoutingProfileConcurrency: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingProfileConcurrency', 'Connect', Promise.resolve(result), true, mock)
  },
  updateRoutingProfileConcurrencyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingProfileConcurrency', 'Connect', Promise.resolve(result), false, mock)
  },
  updateRoutingProfileConcurrencyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingProfileConcurrency', 'Connect', Promise.reject(result), true, mock)
  },
  updateRoutingProfileDefaultOutboundQueue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingProfileDefaultOutboundQueue', 'Connect', Promise.resolve(result), true, mock)
  },
  updateRoutingProfileDefaultOutboundQueueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingProfileDefaultOutboundQueue', 'Connect', Promise.resolve(result), false, mock)
  },
  updateRoutingProfileDefaultOutboundQueueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingProfileDefaultOutboundQueue', 'Connect', Promise.reject(result), true, mock)
  },
  updateRoutingProfileName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingProfileName', 'Connect', Promise.resolve(result), true, mock)
  },
  updateRoutingProfileNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingProfileName', 'Connect', Promise.resolve(result), false, mock)
  },
  updateRoutingProfileNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingProfileName', 'Connect', Promise.reject(result), true, mock)
  },
  updateRoutingProfileQueues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingProfileQueues', 'Connect', Promise.resolve(result), true, mock)
  },
  updateRoutingProfileQueuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingProfileQueues', 'Connect', Promise.resolve(result), false, mock)
  },
  updateRoutingProfileQueuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRoutingProfileQueues', 'Connect', Promise.reject(result), true, mock)
  },
  updateSecurityProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSecurityProfile', 'Connect', Promise.resolve(result), true, mock)
  },
  updateSecurityProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSecurityProfile', 'Connect', Promise.resolve(result), false, mock)
  },
  updateSecurityProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSecurityProfile', 'Connect', Promise.reject(result), true, mock)
  },
  updateUserHierarchy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserHierarchy', 'Connect', Promise.resolve(result), true, mock)
  },
  updateUserHierarchyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserHierarchy', 'Connect', Promise.resolve(result), false, mock)
  },
  updateUserHierarchyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserHierarchy', 'Connect', Promise.reject(result), true, mock)
  },
  updateUserHierarchyGroupName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserHierarchyGroupName', 'Connect', Promise.resolve(result), true, mock)
  },
  updateUserHierarchyGroupNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserHierarchyGroupName', 'Connect', Promise.resolve(result), false, mock)
  },
  updateUserHierarchyGroupNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserHierarchyGroupName', 'Connect', Promise.reject(result), true, mock)
  },
  updateUserHierarchyStructure: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserHierarchyStructure', 'Connect', Promise.resolve(result), true, mock)
  },
  updateUserHierarchyStructureAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserHierarchyStructure', 'Connect', Promise.resolve(result), false, mock)
  },
  updateUserHierarchyStructureThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserHierarchyStructure', 'Connect', Promise.reject(result), true, mock)
  },
  updateUserIdentityInfo: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserIdentityInfo', 'Connect', Promise.resolve(result), true, mock)
  },
  updateUserIdentityInfoAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserIdentityInfo', 'Connect', Promise.resolve(result), false, mock)
  },
  updateUserIdentityInfoThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserIdentityInfo', 'Connect', Promise.reject(result), true, mock)
  },
  updateUserPhoneConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserPhoneConfig', 'Connect', Promise.resolve(result), true, mock)
  },
  updateUserPhoneConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserPhoneConfig', 'Connect', Promise.resolve(result), false, mock)
  },
  updateUserPhoneConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserPhoneConfig', 'Connect', Promise.reject(result), true, mock)
  },
  updateUserRoutingProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserRoutingProfile', 'Connect', Promise.resolve(result), true, mock)
  },
  updateUserRoutingProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserRoutingProfile', 'Connect', Promise.resolve(result), false, mock)
  },
  updateUserRoutingProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserRoutingProfile', 'Connect', Promise.reject(result), true, mock)
  },
  updateUserSecurityProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserSecurityProfiles', 'Connect', Promise.resolve(result), true, mock)
  },
  updateUserSecurityProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserSecurityProfiles', 'Connect', Promise.resolve(result), false, mock)
  },
  updateUserSecurityProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUserSecurityProfiles', 'Connect', Promise.reject(result), true, mock)
  },
}
