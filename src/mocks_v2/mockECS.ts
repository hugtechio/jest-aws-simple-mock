
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
  export const mockECS = {
  createCapacityProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCapacityProvider', 'ECS', Promise.resolve(result), true, mock)
  },
  createCapacityProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCapacityProvider', 'ECS', Promise.resolve(result), false, mock)
  },
  createCapacityProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCapacityProvider', 'ECS', Promise.reject(result), true, mock)
  },
  createCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'ECS', Promise.resolve(result), true, mock)
  },
  createClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'ECS', Promise.resolve(result), false, mock)
  },
  createClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'ECS', Promise.reject(result), true, mock)
  },
  createService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createService', 'ECS', Promise.resolve(result), true, mock)
  },
  createServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createService', 'ECS', Promise.resolve(result), false, mock)
  },
  createServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createService', 'ECS', Promise.reject(result), true, mock)
  },
  createTaskSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTaskSet', 'ECS', Promise.resolve(result), true, mock)
  },
  createTaskSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTaskSet', 'ECS', Promise.resolve(result), false, mock)
  },
  createTaskSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTaskSet', 'ECS', Promise.reject(result), true, mock)
  },
  deleteAccountSetting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAccountSetting', 'ECS', Promise.resolve(result), true, mock)
  },
  deleteAccountSettingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAccountSetting', 'ECS', Promise.resolve(result), false, mock)
  },
  deleteAccountSettingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAccountSetting', 'ECS', Promise.reject(result), true, mock)
  },
  deleteAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAttributes', 'ECS', Promise.resolve(result), true, mock)
  },
  deleteAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAttributes', 'ECS', Promise.resolve(result), false, mock)
  },
  deleteAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAttributes', 'ECS', Promise.reject(result), true, mock)
  },
  deleteCapacityProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCapacityProvider', 'ECS', Promise.resolve(result), true, mock)
  },
  deleteCapacityProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCapacityProvider', 'ECS', Promise.resolve(result), false, mock)
  },
  deleteCapacityProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCapacityProvider', 'ECS', Promise.reject(result), true, mock)
  },
  deleteCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCluster', 'ECS', Promise.resolve(result), true, mock)
  },
  deleteClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCluster', 'ECS', Promise.resolve(result), false, mock)
  },
  deleteClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCluster', 'ECS', Promise.reject(result), true, mock)
  },
  deleteService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteService', 'ECS', Promise.resolve(result), true, mock)
  },
  deleteServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteService', 'ECS', Promise.resolve(result), false, mock)
  },
  deleteServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteService', 'ECS', Promise.reject(result), true, mock)
  },
  deleteTaskSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTaskSet', 'ECS', Promise.resolve(result), true, mock)
  },
  deleteTaskSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTaskSet', 'ECS', Promise.resolve(result), false, mock)
  },
  deleteTaskSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTaskSet', 'ECS', Promise.reject(result), true, mock)
  },
  deregisterContainerInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterContainerInstance', 'ECS', Promise.resolve(result), true, mock)
  },
  deregisterContainerInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterContainerInstance', 'ECS', Promise.resolve(result), false, mock)
  },
  deregisterContainerInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterContainerInstance', 'ECS', Promise.reject(result), true, mock)
  },
  deregisterTaskDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterTaskDefinition', 'ECS', Promise.resolve(result), true, mock)
  },
  deregisterTaskDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterTaskDefinition', 'ECS', Promise.resolve(result), false, mock)
  },
  deregisterTaskDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterTaskDefinition', 'ECS', Promise.reject(result), true, mock)
  },
  describeCapacityProviders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCapacityProviders', 'ECS', Promise.resolve(result), true, mock)
  },
  describeCapacityProvidersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCapacityProviders', 'ECS', Promise.resolve(result), false, mock)
  },
  describeCapacityProvidersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCapacityProviders', 'ECS', Promise.reject(result), true, mock)
  },
  describeClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusters', 'ECS', Promise.resolve(result), true, mock)
  },
  describeClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusters', 'ECS', Promise.resolve(result), false, mock)
  },
  describeClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusters', 'ECS', Promise.reject(result), true, mock)
  },
  describeContainerInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContainerInstances', 'ECS', Promise.resolve(result), true, mock)
  },
  describeContainerInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContainerInstances', 'ECS', Promise.resolve(result), false, mock)
  },
  describeContainerInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContainerInstances', 'ECS', Promise.reject(result), true, mock)
  },
  describeServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServices', 'ECS', Promise.resolve(result), true, mock)
  },
  describeServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServices', 'ECS', Promise.resolve(result), false, mock)
  },
  describeServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServices', 'ECS', Promise.reject(result), true, mock)
  },
  describeTaskDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTaskDefinition', 'ECS', Promise.resolve(result), true, mock)
  },
  describeTaskDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTaskDefinition', 'ECS', Promise.resolve(result), false, mock)
  },
  describeTaskDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTaskDefinition', 'ECS', Promise.reject(result), true, mock)
  },
  describeTaskSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTaskSets', 'ECS', Promise.resolve(result), true, mock)
  },
  describeTaskSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTaskSets', 'ECS', Promise.resolve(result), false, mock)
  },
  describeTaskSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTaskSets', 'ECS', Promise.reject(result), true, mock)
  },
  describeTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTasks', 'ECS', Promise.resolve(result), true, mock)
  },
  describeTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTasks', 'ECS', Promise.resolve(result), false, mock)
  },
  describeTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTasks', 'ECS', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ECS', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ECS', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ECS', Promise.reject(result), true, mock)
  },
  discoverPollEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('discoverPollEndpoint', 'ECS', Promise.resolve(result), true, mock)
  },
  discoverPollEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('discoverPollEndpoint', 'ECS', Promise.resolve(result), false, mock)
  },
  discoverPollEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('discoverPollEndpoint', 'ECS', Promise.reject(result), true, mock)
  },
  executeCommand: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeCommand', 'ECS', Promise.resolve(result), true, mock)
  },
  executeCommandAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeCommand', 'ECS', Promise.resolve(result), false, mock)
  },
  executeCommandThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeCommand', 'ECS', Promise.reject(result), true, mock)
  },
  listAccountSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountSettings', 'ECS', Promise.resolve(result), true, mock)
  },
  listAccountSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountSettings', 'ECS', Promise.resolve(result), false, mock)
  },
  listAccountSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountSettings', 'ECS', Promise.reject(result), true, mock)
  },
  listAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAttributes', 'ECS', Promise.resolve(result), true, mock)
  },
  listAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAttributes', 'ECS', Promise.resolve(result), false, mock)
  },
  listAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAttributes', 'ECS', Promise.reject(result), true, mock)
  },
  listClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClusters', 'ECS', Promise.resolve(result), true, mock)
  },
  listClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClusters', 'ECS', Promise.resolve(result), false, mock)
  },
  listClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClusters', 'ECS', Promise.reject(result), true, mock)
  },
  listContainerInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContainerInstances', 'ECS', Promise.resolve(result), true, mock)
  },
  listContainerInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContainerInstances', 'ECS', Promise.resolve(result), false, mock)
  },
  listContainerInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContainerInstances', 'ECS', Promise.reject(result), true, mock)
  },
  listServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServices', 'ECS', Promise.resolve(result), true, mock)
  },
  listServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServices', 'ECS', Promise.resolve(result), false, mock)
  },
  listServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServices', 'ECS', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ECS', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ECS', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ECS', Promise.reject(result), true, mock)
  },
  listTaskDefinitionFamilies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTaskDefinitionFamilies', 'ECS', Promise.resolve(result), true, mock)
  },
  listTaskDefinitionFamiliesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTaskDefinitionFamilies', 'ECS', Promise.resolve(result), false, mock)
  },
  listTaskDefinitionFamiliesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTaskDefinitionFamilies', 'ECS', Promise.reject(result), true, mock)
  },
  listTaskDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTaskDefinitions', 'ECS', Promise.resolve(result), true, mock)
  },
  listTaskDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTaskDefinitions', 'ECS', Promise.resolve(result), false, mock)
  },
  listTaskDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTaskDefinitions', 'ECS', Promise.reject(result), true, mock)
  },
  listTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTasks', 'ECS', Promise.resolve(result), true, mock)
  },
  listTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTasks', 'ECS', Promise.resolve(result), false, mock)
  },
  listTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTasks', 'ECS', Promise.reject(result), true, mock)
  },
  putAccountSetting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountSetting', 'ECS', Promise.resolve(result), true, mock)
  },
  putAccountSettingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountSetting', 'ECS', Promise.resolve(result), false, mock)
  },
  putAccountSettingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountSetting', 'ECS', Promise.reject(result), true, mock)
  },
  putAccountSettingDefault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountSettingDefault', 'ECS', Promise.resolve(result), true, mock)
  },
  putAccountSettingDefaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountSettingDefault', 'ECS', Promise.resolve(result), false, mock)
  },
  putAccountSettingDefaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountSettingDefault', 'ECS', Promise.reject(result), true, mock)
  },
  putAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAttributes', 'ECS', Promise.resolve(result), true, mock)
  },
  putAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAttributes', 'ECS', Promise.resolve(result), false, mock)
  },
  putAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAttributes', 'ECS', Promise.reject(result), true, mock)
  },
  putClusterCapacityProviders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putClusterCapacityProviders', 'ECS', Promise.resolve(result), true, mock)
  },
  putClusterCapacityProvidersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putClusterCapacityProviders', 'ECS', Promise.resolve(result), false, mock)
  },
  putClusterCapacityProvidersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putClusterCapacityProviders', 'ECS', Promise.reject(result), true, mock)
  },
  registerContainerInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerContainerInstance', 'ECS', Promise.resolve(result), true, mock)
  },
  registerContainerInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerContainerInstance', 'ECS', Promise.resolve(result), false, mock)
  },
  registerContainerInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerContainerInstance', 'ECS', Promise.reject(result), true, mock)
  },
  registerTaskDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerTaskDefinition', 'ECS', Promise.resolve(result), true, mock)
  },
  registerTaskDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerTaskDefinition', 'ECS', Promise.resolve(result), false, mock)
  },
  registerTaskDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerTaskDefinition', 'ECS', Promise.reject(result), true, mock)
  },
  runTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('runTask', 'ECS', Promise.resolve(result), true, mock)
  },
  runTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('runTask', 'ECS', Promise.resolve(result), false, mock)
  },
  runTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('runTask', 'ECS', Promise.reject(result), true, mock)
  },
  startTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTask', 'ECS', Promise.resolve(result), true, mock)
  },
  startTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTask', 'ECS', Promise.resolve(result), false, mock)
  },
  startTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTask', 'ECS', Promise.reject(result), true, mock)
  },
  stopTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopTask', 'ECS', Promise.resolve(result), true, mock)
  },
  stopTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopTask', 'ECS', Promise.resolve(result), false, mock)
  },
  stopTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopTask', 'ECS', Promise.reject(result), true, mock)
  },
  submitAttachmentStateChanges: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitAttachmentStateChanges', 'ECS', Promise.resolve(result), true, mock)
  },
  submitAttachmentStateChangesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitAttachmentStateChanges', 'ECS', Promise.resolve(result), false, mock)
  },
  submitAttachmentStateChangesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitAttachmentStateChanges', 'ECS', Promise.reject(result), true, mock)
  },
  submitContainerStateChange: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitContainerStateChange', 'ECS', Promise.resolve(result), true, mock)
  },
  submitContainerStateChangeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitContainerStateChange', 'ECS', Promise.resolve(result), false, mock)
  },
  submitContainerStateChangeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitContainerStateChange', 'ECS', Promise.reject(result), true, mock)
  },
  submitTaskStateChange: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitTaskStateChange', 'ECS', Promise.resolve(result), true, mock)
  },
  submitTaskStateChangeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitTaskStateChange', 'ECS', Promise.resolve(result), false, mock)
  },
  submitTaskStateChangeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitTaskStateChange', 'ECS', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ECS', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ECS', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ECS', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ECS', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ECS', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ECS', Promise.reject(result), true, mock)
  },
  updateCapacityProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCapacityProvider', 'ECS', Promise.resolve(result), true, mock)
  },
  updateCapacityProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCapacityProvider', 'ECS', Promise.resolve(result), false, mock)
  },
  updateCapacityProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCapacityProvider', 'ECS', Promise.reject(result), true, mock)
  },
  updateCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCluster', 'ECS', Promise.resolve(result), true, mock)
  },
  updateClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCluster', 'ECS', Promise.resolve(result), false, mock)
  },
  updateClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCluster', 'ECS', Promise.reject(result), true, mock)
  },
  updateClusterSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClusterSettings', 'ECS', Promise.resolve(result), true, mock)
  },
  updateClusterSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClusterSettings', 'ECS', Promise.resolve(result), false, mock)
  },
  updateClusterSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClusterSettings', 'ECS', Promise.reject(result), true, mock)
  },
  updateContainerAgent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContainerAgent', 'ECS', Promise.resolve(result), true, mock)
  },
  updateContainerAgentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContainerAgent', 'ECS', Promise.resolve(result), false, mock)
  },
  updateContainerAgentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContainerAgent', 'ECS', Promise.reject(result), true, mock)
  },
  updateContainerInstancesState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContainerInstancesState', 'ECS', Promise.resolve(result), true, mock)
  },
  updateContainerInstancesStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContainerInstancesState', 'ECS', Promise.resolve(result), false, mock)
  },
  updateContainerInstancesStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContainerInstancesState', 'ECS', Promise.reject(result), true, mock)
  },
  updateService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateService', 'ECS', Promise.resolve(result), true, mock)
  },
  updateServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateService', 'ECS', Promise.resolve(result), false, mock)
  },
  updateServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateService', 'ECS', Promise.reject(result), true, mock)
  },
  updateServicePrimaryTaskSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServicePrimaryTaskSet', 'ECS', Promise.resolve(result), true, mock)
  },
  updateServicePrimaryTaskSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServicePrimaryTaskSet', 'ECS', Promise.resolve(result), false, mock)
  },
  updateServicePrimaryTaskSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServicePrimaryTaskSet', 'ECS', Promise.reject(result), true, mock)
  },
  updateTaskSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTaskSet', 'ECS', Promise.resolve(result), true, mock)
  },
  updateTaskSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTaskSet', 'ECS', Promise.resolve(result), false, mock)
  },
  updateTaskSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTaskSet', 'ECS', Promise.reject(result), true, mock)
  },
}
