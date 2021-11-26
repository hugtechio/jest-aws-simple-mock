
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockECS = {
  createCapacityProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'createCapacityProvider', 'ECS', Promise.resolve(result), true, mock)
  },
  createCapacityProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'createCapacityProvider', 'ECS', Promise.resolve(result), false, mock)
  },
  createCapacityProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'createCapacityProvider', 'ECS', Promise.reject(result), true, mock)
  },
  createCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'createCluster', 'ECS', Promise.resolve(result), true, mock)
  },
  createClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'createCluster', 'ECS', Promise.resolve(result), false, mock)
  },
  createClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'createCluster', 'ECS', Promise.reject(result), true, mock)
  },
  createService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'createService', 'ECS', Promise.resolve(result), true, mock)
  },
  createServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'createService', 'ECS', Promise.resolve(result), false, mock)
  },
  createServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'createService', 'ECS', Promise.reject(result), true, mock)
  },
  createTaskSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'createTaskSet', 'ECS', Promise.resolve(result), true, mock)
  },
  createTaskSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'createTaskSet', 'ECS', Promise.resolve(result), false, mock)
  },
  createTaskSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'createTaskSet', 'ECS', Promise.reject(result), true, mock)
  },
  deleteAccountSetting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deleteAccountSetting', 'ECS', Promise.resolve(result), true, mock)
  },
  deleteAccountSettingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deleteAccountSetting', 'ECS', Promise.resolve(result), false, mock)
  },
  deleteAccountSettingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deleteAccountSetting', 'ECS', Promise.reject(result), true, mock)
  },
  deleteAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deleteAttributes', 'ECS', Promise.resolve(result), true, mock)
  },
  deleteAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deleteAttributes', 'ECS', Promise.resolve(result), false, mock)
  },
  deleteAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deleteAttributes', 'ECS', Promise.reject(result), true, mock)
  },
  deleteCapacityProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deleteCapacityProvider', 'ECS', Promise.resolve(result), true, mock)
  },
  deleteCapacityProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deleteCapacityProvider', 'ECS', Promise.resolve(result), false, mock)
  },
  deleteCapacityProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deleteCapacityProvider', 'ECS', Promise.reject(result), true, mock)
  },
  deleteCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deleteCluster', 'ECS', Promise.resolve(result), true, mock)
  },
  deleteClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deleteCluster', 'ECS', Promise.resolve(result), false, mock)
  },
  deleteClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deleteCluster', 'ECS', Promise.reject(result), true, mock)
  },
  deleteService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deleteService', 'ECS', Promise.resolve(result), true, mock)
  },
  deleteServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deleteService', 'ECS', Promise.resolve(result), false, mock)
  },
  deleteServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deleteService', 'ECS', Promise.reject(result), true, mock)
  },
  deleteTaskSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deleteTaskSet', 'ECS', Promise.resolve(result), true, mock)
  },
  deleteTaskSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deleteTaskSet', 'ECS', Promise.resolve(result), false, mock)
  },
  deleteTaskSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deleteTaskSet', 'ECS', Promise.reject(result), true, mock)
  },
  deregisterContainerInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deregisterContainerInstance', 'ECS', Promise.resolve(result), true, mock)
  },
  deregisterContainerInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deregisterContainerInstance', 'ECS', Promise.resolve(result), false, mock)
  },
  deregisterContainerInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deregisterContainerInstance', 'ECS', Promise.reject(result), true, mock)
  },
  deregisterTaskDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deregisterTaskDefinition', 'ECS', Promise.resolve(result), true, mock)
  },
  deregisterTaskDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deregisterTaskDefinition', 'ECS', Promise.resolve(result), false, mock)
  },
  deregisterTaskDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'deregisterTaskDefinition', 'ECS', Promise.reject(result), true, mock)
  },
  describeCapacityProviders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'describeCapacityProviders', 'ECS', Promise.resolve(result), true, mock)
  },
  describeCapacityProvidersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'describeCapacityProviders', 'ECS', Promise.resolve(result), false, mock)
  },
  describeCapacityProvidersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'describeCapacityProviders', 'ECS', Promise.reject(result), true, mock)
  },
  describeClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'describeClusters', 'ECS', Promise.resolve(result), true, mock)
  },
  describeClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'describeClusters', 'ECS', Promise.resolve(result), false, mock)
  },
  describeClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'describeClusters', 'ECS', Promise.reject(result), true, mock)
  },
  describeContainerInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'describeContainerInstances', 'ECS', Promise.resolve(result), true, mock)
  },
  describeContainerInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'describeContainerInstances', 'ECS', Promise.resolve(result), false, mock)
  },
  describeContainerInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'describeContainerInstances', 'ECS', Promise.reject(result), true, mock)
  },
  describeServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'describeServices', 'ECS', Promise.resolve(result), true, mock)
  },
  describeServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'describeServices', 'ECS', Promise.resolve(result), false, mock)
  },
  describeServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'describeServices', 'ECS', Promise.reject(result), true, mock)
  },
  describeTaskDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'describeTaskDefinition', 'ECS', Promise.resolve(result), true, mock)
  },
  describeTaskDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'describeTaskDefinition', 'ECS', Promise.resolve(result), false, mock)
  },
  describeTaskDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'describeTaskDefinition', 'ECS', Promise.reject(result), true, mock)
  },
  describeTaskSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'describeTaskSets', 'ECS', Promise.resolve(result), true, mock)
  },
  describeTaskSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'describeTaskSets', 'ECS', Promise.resolve(result), false, mock)
  },
  describeTaskSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'describeTaskSets', 'ECS', Promise.reject(result), true, mock)
  },
  describeTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'describeTasks', 'ECS', Promise.resolve(result), true, mock)
  },
  describeTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'describeTasks', 'ECS', Promise.resolve(result), false, mock)
  },
  describeTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'describeTasks', 'ECS', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'destroy', 'ECS', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'destroy', 'ECS', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'destroy', 'ECS', Promise.reject(result), true, mock)
  },
  discoverPollEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'discoverPollEndpoint', 'ECS', Promise.resolve(result), true, mock)
  },
  discoverPollEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'discoverPollEndpoint', 'ECS', Promise.resolve(result), false, mock)
  },
  discoverPollEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'discoverPollEndpoint', 'ECS', Promise.reject(result), true, mock)
  },
  executeCommand: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'executeCommand', 'ECS', Promise.resolve(result), true, mock)
  },
  executeCommandAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'executeCommand', 'ECS', Promise.resolve(result), false, mock)
  },
  executeCommandThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'executeCommand', 'ECS', Promise.reject(result), true, mock)
  },
  listAccountSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listAccountSettings', 'ECS', Promise.resolve(result), true, mock)
  },
  listAccountSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listAccountSettings', 'ECS', Promise.resolve(result), false, mock)
  },
  listAccountSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listAccountSettings', 'ECS', Promise.reject(result), true, mock)
  },
  listAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listAttributes', 'ECS', Promise.resolve(result), true, mock)
  },
  listAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listAttributes', 'ECS', Promise.resolve(result), false, mock)
  },
  listAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listAttributes', 'ECS', Promise.reject(result), true, mock)
  },
  listClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listClusters', 'ECS', Promise.resolve(result), true, mock)
  },
  listClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listClusters', 'ECS', Promise.resolve(result), false, mock)
  },
  listClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listClusters', 'ECS', Promise.reject(result), true, mock)
  },
  listContainerInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listContainerInstances', 'ECS', Promise.resolve(result), true, mock)
  },
  listContainerInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listContainerInstances', 'ECS', Promise.resolve(result), false, mock)
  },
  listContainerInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listContainerInstances', 'ECS', Promise.reject(result), true, mock)
  },
  listServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listServices', 'ECS', Promise.resolve(result), true, mock)
  },
  listServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listServices', 'ECS', Promise.resolve(result), false, mock)
  },
  listServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listServices', 'ECS', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listTagsForResource', 'ECS', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listTagsForResource', 'ECS', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listTagsForResource', 'ECS', Promise.reject(result), true, mock)
  },
  listTaskDefinitionFamilies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listTaskDefinitionFamilies', 'ECS', Promise.resolve(result), true, mock)
  },
  listTaskDefinitionFamiliesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listTaskDefinitionFamilies', 'ECS', Promise.resolve(result), false, mock)
  },
  listTaskDefinitionFamiliesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listTaskDefinitionFamilies', 'ECS', Promise.reject(result), true, mock)
  },
  listTaskDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listTaskDefinitions', 'ECS', Promise.resolve(result), true, mock)
  },
  listTaskDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listTaskDefinitions', 'ECS', Promise.resolve(result), false, mock)
  },
  listTaskDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listTaskDefinitions', 'ECS', Promise.reject(result), true, mock)
  },
  listTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listTasks', 'ECS', Promise.resolve(result), true, mock)
  },
  listTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listTasks', 'ECS', Promise.resolve(result), false, mock)
  },
  listTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'listTasks', 'ECS', Promise.reject(result), true, mock)
  },
  putAccountSetting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'putAccountSetting', 'ECS', Promise.resolve(result), true, mock)
  },
  putAccountSettingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'putAccountSetting', 'ECS', Promise.resolve(result), false, mock)
  },
  putAccountSettingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'putAccountSetting', 'ECS', Promise.reject(result), true, mock)
  },
  putAccountSettingDefault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'putAccountSettingDefault', 'ECS', Promise.resolve(result), true, mock)
  },
  putAccountSettingDefaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'putAccountSettingDefault', 'ECS', Promise.resolve(result), false, mock)
  },
  putAccountSettingDefaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'putAccountSettingDefault', 'ECS', Promise.reject(result), true, mock)
  },
  putAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'putAttributes', 'ECS', Promise.resolve(result), true, mock)
  },
  putAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'putAttributes', 'ECS', Promise.resolve(result), false, mock)
  },
  putAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'putAttributes', 'ECS', Promise.reject(result), true, mock)
  },
  putClusterCapacityProviders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'putClusterCapacityProviders', 'ECS', Promise.resolve(result), true, mock)
  },
  putClusterCapacityProvidersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'putClusterCapacityProviders', 'ECS', Promise.resolve(result), false, mock)
  },
  putClusterCapacityProvidersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'putClusterCapacityProviders', 'ECS', Promise.reject(result), true, mock)
  },
  registerContainerInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'registerContainerInstance', 'ECS', Promise.resolve(result), true, mock)
  },
  registerContainerInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'registerContainerInstance', 'ECS', Promise.resolve(result), false, mock)
  },
  registerContainerInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'registerContainerInstance', 'ECS', Promise.reject(result), true, mock)
  },
  registerTaskDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'registerTaskDefinition', 'ECS', Promise.resolve(result), true, mock)
  },
  registerTaskDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'registerTaskDefinition', 'ECS', Promise.resolve(result), false, mock)
  },
  registerTaskDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'registerTaskDefinition', 'ECS', Promise.reject(result), true, mock)
  },
  runTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'runTask', 'ECS', Promise.resolve(result), true, mock)
  },
  runTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'runTask', 'ECS', Promise.resolve(result), false, mock)
  },
  runTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'runTask', 'ECS', Promise.reject(result), true, mock)
  },
  startTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'startTask', 'ECS', Promise.resolve(result), true, mock)
  },
  startTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'startTask', 'ECS', Promise.resolve(result), false, mock)
  },
  startTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'startTask', 'ECS', Promise.reject(result), true, mock)
  },
  stopTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'stopTask', 'ECS', Promise.resolve(result), true, mock)
  },
  stopTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'stopTask', 'ECS', Promise.resolve(result), false, mock)
  },
  stopTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'stopTask', 'ECS', Promise.reject(result), true, mock)
  },
  submitAttachmentStateChanges: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'submitAttachmentStateChanges', 'ECS', Promise.resolve(result), true, mock)
  },
  submitAttachmentStateChangesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'submitAttachmentStateChanges', 'ECS', Promise.resolve(result), false, mock)
  },
  submitAttachmentStateChangesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'submitAttachmentStateChanges', 'ECS', Promise.reject(result), true, mock)
  },
  submitContainerStateChange: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'submitContainerStateChange', 'ECS', Promise.resolve(result), true, mock)
  },
  submitContainerStateChangeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'submitContainerStateChange', 'ECS', Promise.resolve(result), false, mock)
  },
  submitContainerStateChangeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'submitContainerStateChange', 'ECS', Promise.reject(result), true, mock)
  },
  submitTaskStateChange: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'submitTaskStateChange', 'ECS', Promise.resolve(result), true, mock)
  },
  submitTaskStateChangeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'submitTaskStateChange', 'ECS', Promise.resolve(result), false, mock)
  },
  submitTaskStateChangeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'submitTaskStateChange', 'ECS', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'tagResource', 'ECS', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'tagResource', 'ECS', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'tagResource', 'ECS', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'untagResource', 'ECS', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'untagResource', 'ECS', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'untagResource', 'ECS', Promise.reject(result), true, mock)
  },
  updateCapacityProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateCapacityProvider', 'ECS', Promise.resolve(result), true, mock)
  },
  updateCapacityProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateCapacityProvider', 'ECS', Promise.resolve(result), false, mock)
  },
  updateCapacityProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateCapacityProvider', 'ECS', Promise.reject(result), true, mock)
  },
  updateCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateCluster', 'ECS', Promise.resolve(result), true, mock)
  },
  updateClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateCluster', 'ECS', Promise.resolve(result), false, mock)
  },
  updateClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateCluster', 'ECS', Promise.reject(result), true, mock)
  },
  updateClusterSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateClusterSettings', 'ECS', Promise.resolve(result), true, mock)
  },
  updateClusterSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateClusterSettings', 'ECS', Promise.resolve(result), false, mock)
  },
  updateClusterSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateClusterSettings', 'ECS', Promise.reject(result), true, mock)
  },
  updateContainerAgent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateContainerAgent', 'ECS', Promise.resolve(result), true, mock)
  },
  updateContainerAgentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateContainerAgent', 'ECS', Promise.resolve(result), false, mock)
  },
  updateContainerAgentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateContainerAgent', 'ECS', Promise.reject(result), true, mock)
  },
  updateContainerInstancesState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateContainerInstancesState', 'ECS', Promise.resolve(result), true, mock)
  },
  updateContainerInstancesStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateContainerInstancesState', 'ECS', Promise.resolve(result), false, mock)
  },
  updateContainerInstancesStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateContainerInstancesState', 'ECS', Promise.reject(result), true, mock)
  },
  updateService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateService', 'ECS', Promise.resolve(result), true, mock)
  },
  updateServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateService', 'ECS', Promise.resolve(result), false, mock)
  },
  updateServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateService', 'ECS', Promise.reject(result), true, mock)
  },
  updateServicePrimaryTaskSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateServicePrimaryTaskSet', 'ECS', Promise.resolve(result), true, mock)
  },
  updateServicePrimaryTaskSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateServicePrimaryTaskSet', 'ECS', Promise.resolve(result), false, mock)
  },
  updateServicePrimaryTaskSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateServicePrimaryTaskSet', 'ECS', Promise.reject(result), true, mock)
  },
  updateTaskSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateTaskSet', 'ECS', Promise.resolve(result), true, mock)
  },
  updateTaskSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateTaskSet', 'ECS', Promise.resolve(result), false, mock)
  },
  updateTaskSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'updateTaskSet', 'ECS', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'send', 'ECSClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'send', 'ECSClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ecs', 'send', 'ECSClient', Promise.reject(result), true, mock)
  }
}