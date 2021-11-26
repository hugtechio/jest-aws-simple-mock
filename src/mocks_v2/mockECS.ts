
/**
* @description mocks_v2:mockECS.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockECS = {
  createCapacityProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCapacityProvider', 'ECS', result, true, true, mock)
  },
  createCapacityProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCapacityProvider', 'ECS', result, false, true, mock)
  },
  createCapacityProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCapacityProvider', 'ECS', result, true, false, mock)
  },
  createCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'ECS', result, true, true, mock)
  },
  createClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'ECS', result, false, true, mock)
  },
  createClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'ECS', result, true, false, mock)
  },
  createService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createService', 'ECS', result, true, true, mock)
  },
  createServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createService', 'ECS', result, false, true, mock)
  },
  createServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createService', 'ECS', result, true, false, mock)
  },
  createTaskSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTaskSet', 'ECS', result, true, true, mock)
  },
  createTaskSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTaskSet', 'ECS', result, false, true, mock)
  },
  createTaskSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTaskSet', 'ECS', result, true, false, mock)
  },
  deleteAccountSetting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAccountSetting', 'ECS', result, true, true, mock)
  },
  deleteAccountSettingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAccountSetting', 'ECS', result, false, true, mock)
  },
  deleteAccountSettingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAccountSetting', 'ECS', result, true, false, mock)
  },
  deleteAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAttributes', 'ECS', result, true, true, mock)
  },
  deleteAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAttributes', 'ECS', result, false, true, mock)
  },
  deleteAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAttributes', 'ECS', result, true, false, mock)
  },
  deleteCapacityProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCapacityProvider', 'ECS', result, true, true, mock)
  },
  deleteCapacityProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCapacityProvider', 'ECS', result, false, true, mock)
  },
  deleteCapacityProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCapacityProvider', 'ECS', result, true, false, mock)
  },
  deleteCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCluster', 'ECS', result, true, true, mock)
  },
  deleteClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCluster', 'ECS', result, false, true, mock)
  },
  deleteClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCluster', 'ECS', result, true, false, mock)
  },
  deleteService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteService', 'ECS', result, true, true, mock)
  },
  deleteServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteService', 'ECS', result, false, true, mock)
  },
  deleteServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteService', 'ECS', result, true, false, mock)
  },
  deleteTaskSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTaskSet', 'ECS', result, true, true, mock)
  },
  deleteTaskSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTaskSet', 'ECS', result, false, true, mock)
  },
  deleteTaskSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTaskSet', 'ECS', result, true, false, mock)
  },
  deregisterContainerInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterContainerInstance', 'ECS', result, true, true, mock)
  },
  deregisterContainerInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterContainerInstance', 'ECS', result, false, true, mock)
  },
  deregisterContainerInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterContainerInstance', 'ECS', result, true, false, mock)
  },
  deregisterTaskDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterTaskDefinition', 'ECS', result, true, true, mock)
  },
  deregisterTaskDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterTaskDefinition', 'ECS', result, false, true, mock)
  },
  deregisterTaskDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterTaskDefinition', 'ECS', result, true, false, mock)
  },
  describeCapacityProviders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCapacityProviders', 'ECS', result, true, true, mock)
  },
  describeCapacityProvidersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCapacityProviders', 'ECS', result, false, true, mock)
  },
  describeCapacityProvidersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCapacityProviders', 'ECS', result, true, false, mock)
  },
  describeClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusters', 'ECS', result, true, true, mock)
  },
  describeClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusters', 'ECS', result, false, true, mock)
  },
  describeClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusters', 'ECS', result, true, false, mock)
  },
  describeContainerInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContainerInstances', 'ECS', result, true, true, mock)
  },
  describeContainerInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContainerInstances', 'ECS', result, false, true, mock)
  },
  describeContainerInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeContainerInstances', 'ECS', result, true, false, mock)
  },
  describeServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServices', 'ECS', result, true, true, mock)
  },
  describeServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServices', 'ECS', result, false, true, mock)
  },
  describeServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeServices', 'ECS', result, true, false, mock)
  },
  describeTaskDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTaskDefinition', 'ECS', result, true, true, mock)
  },
  describeTaskDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTaskDefinition', 'ECS', result, false, true, mock)
  },
  describeTaskDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTaskDefinition', 'ECS', result, true, false, mock)
  },
  describeTaskSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTaskSets', 'ECS', result, true, true, mock)
  },
  describeTaskSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTaskSets', 'ECS', result, false, true, mock)
  },
  describeTaskSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTaskSets', 'ECS', result, true, false, mock)
  },
  describeTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTasks', 'ECS', result, true, true, mock)
  },
  describeTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTasks', 'ECS', result, false, true, mock)
  },
  describeTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTasks', 'ECS', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ECS', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ECS', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ECS', result, true, false, mock)
  },
  discoverPollEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('discoverPollEndpoint', 'ECS', result, true, true, mock)
  },
  discoverPollEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('discoverPollEndpoint', 'ECS', result, false, true, mock)
  },
  discoverPollEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('discoverPollEndpoint', 'ECS', result, true, false, mock)
  },
  executeCommand: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeCommand', 'ECS', result, true, true, mock)
  },
  executeCommandAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeCommand', 'ECS', result, false, true, mock)
  },
  executeCommandThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeCommand', 'ECS', result, true, false, mock)
  },
  listAccountSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountSettings', 'ECS', result, true, true, mock)
  },
  listAccountSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountSettings', 'ECS', result, false, true, mock)
  },
  listAccountSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountSettings', 'ECS', result, true, false, mock)
  },
  listAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAttributes', 'ECS', result, true, true, mock)
  },
  listAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAttributes', 'ECS', result, false, true, mock)
  },
  listAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAttributes', 'ECS', result, true, false, mock)
  },
  listClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClusters', 'ECS', result, true, true, mock)
  },
  listClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClusters', 'ECS', result, false, true, mock)
  },
  listClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClusters', 'ECS', result, true, false, mock)
  },
  listContainerInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContainerInstances', 'ECS', result, true, true, mock)
  },
  listContainerInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContainerInstances', 'ECS', result, false, true, mock)
  },
  listContainerInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listContainerInstances', 'ECS', result, true, false, mock)
  },
  listServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServices', 'ECS', result, true, true, mock)
  },
  listServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServices', 'ECS', result, false, true, mock)
  },
  listServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServices', 'ECS', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ECS', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ECS', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ECS', result, true, false, mock)
  },
  listTaskDefinitionFamilies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTaskDefinitionFamilies', 'ECS', result, true, true, mock)
  },
  listTaskDefinitionFamiliesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTaskDefinitionFamilies', 'ECS', result, false, true, mock)
  },
  listTaskDefinitionFamiliesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTaskDefinitionFamilies', 'ECS', result, true, false, mock)
  },
  listTaskDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTaskDefinitions', 'ECS', result, true, true, mock)
  },
  listTaskDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTaskDefinitions', 'ECS', result, false, true, mock)
  },
  listTaskDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTaskDefinitions', 'ECS', result, true, false, mock)
  },
  listTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTasks', 'ECS', result, true, true, mock)
  },
  listTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTasks', 'ECS', result, false, true, mock)
  },
  listTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTasks', 'ECS', result, true, false, mock)
  },
  putAccountSetting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountSetting', 'ECS', result, true, true, mock)
  },
  putAccountSettingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountSetting', 'ECS', result, false, true, mock)
  },
  putAccountSettingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountSetting', 'ECS', result, true, false, mock)
  },
  putAccountSettingDefault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountSettingDefault', 'ECS', result, true, true, mock)
  },
  putAccountSettingDefaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountSettingDefault', 'ECS', result, false, true, mock)
  },
  putAccountSettingDefaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountSettingDefault', 'ECS', result, true, false, mock)
  },
  putAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAttributes', 'ECS', result, true, true, mock)
  },
  putAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAttributes', 'ECS', result, false, true, mock)
  },
  putAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAttributes', 'ECS', result, true, false, mock)
  },
  putClusterCapacityProviders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putClusterCapacityProviders', 'ECS', result, true, true, mock)
  },
  putClusterCapacityProvidersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putClusterCapacityProviders', 'ECS', result, false, true, mock)
  },
  putClusterCapacityProvidersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putClusterCapacityProviders', 'ECS', result, true, false, mock)
  },
  registerContainerInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerContainerInstance', 'ECS', result, true, true, mock)
  },
  registerContainerInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerContainerInstance', 'ECS', result, false, true, mock)
  },
  registerContainerInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerContainerInstance', 'ECS', result, true, false, mock)
  },
  registerTaskDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerTaskDefinition', 'ECS', result, true, true, mock)
  },
  registerTaskDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerTaskDefinition', 'ECS', result, false, true, mock)
  },
  registerTaskDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerTaskDefinition', 'ECS', result, true, false, mock)
  },
  runTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('runTask', 'ECS', result, true, true, mock)
  },
  runTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('runTask', 'ECS', result, false, true, mock)
  },
  runTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('runTask', 'ECS', result, true, false, mock)
  },
  startTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTask', 'ECS', result, true, true, mock)
  },
  startTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTask', 'ECS', result, false, true, mock)
  },
  startTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTask', 'ECS', result, true, false, mock)
  },
  stopTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopTask', 'ECS', result, true, true, mock)
  },
  stopTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopTask', 'ECS', result, false, true, mock)
  },
  stopTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopTask', 'ECS', result, true, false, mock)
  },
  submitAttachmentStateChanges: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitAttachmentStateChanges', 'ECS', result, true, true, mock)
  },
  submitAttachmentStateChangesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitAttachmentStateChanges', 'ECS', result, false, true, mock)
  },
  submitAttachmentStateChangesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitAttachmentStateChanges', 'ECS', result, true, false, mock)
  },
  submitContainerStateChange: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitContainerStateChange', 'ECS', result, true, true, mock)
  },
  submitContainerStateChangeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitContainerStateChange', 'ECS', result, false, true, mock)
  },
  submitContainerStateChangeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitContainerStateChange', 'ECS', result, true, false, mock)
  },
  submitTaskStateChange: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitTaskStateChange', 'ECS', result, true, true, mock)
  },
  submitTaskStateChangeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitTaskStateChange', 'ECS', result, false, true, mock)
  },
  submitTaskStateChangeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitTaskStateChange', 'ECS', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ECS', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ECS', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ECS', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ECS', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ECS', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ECS', result, true, false, mock)
  },
  updateCapacityProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCapacityProvider', 'ECS', result, true, true, mock)
  },
  updateCapacityProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCapacityProvider', 'ECS', result, false, true, mock)
  },
  updateCapacityProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCapacityProvider', 'ECS', result, true, false, mock)
  },
  updateCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCluster', 'ECS', result, true, true, mock)
  },
  updateClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCluster', 'ECS', result, false, true, mock)
  },
  updateClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCluster', 'ECS', result, true, false, mock)
  },
  updateClusterSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClusterSettings', 'ECS', result, true, true, mock)
  },
  updateClusterSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClusterSettings', 'ECS', result, false, true, mock)
  },
  updateClusterSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClusterSettings', 'ECS', result, true, false, mock)
  },
  updateContainerAgent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContainerAgent', 'ECS', result, true, true, mock)
  },
  updateContainerAgentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContainerAgent', 'ECS', result, false, true, mock)
  },
  updateContainerAgentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContainerAgent', 'ECS', result, true, false, mock)
  },
  updateContainerInstancesState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContainerInstancesState', 'ECS', result, true, true, mock)
  },
  updateContainerInstancesStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContainerInstancesState', 'ECS', result, false, true, mock)
  },
  updateContainerInstancesStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateContainerInstancesState', 'ECS', result, true, false, mock)
  },
  updateService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateService', 'ECS', result, true, true, mock)
  },
  updateServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateService', 'ECS', result, false, true, mock)
  },
  updateServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateService', 'ECS', result, true, false, mock)
  },
  updateServicePrimaryTaskSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServicePrimaryTaskSet', 'ECS', result, true, true, mock)
  },
  updateServicePrimaryTaskSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServicePrimaryTaskSet', 'ECS', result, false, true, mock)
  },
  updateServicePrimaryTaskSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServicePrimaryTaskSet', 'ECS', result, true, false, mock)
  },
  updateTaskSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTaskSet', 'ECS', result, true, true, mock)
  },
  updateTaskSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTaskSet', 'ECS', result, false, true, mock)
  },
  updateTaskSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTaskSet', 'ECS', result, true, false, mock)
  },
}
