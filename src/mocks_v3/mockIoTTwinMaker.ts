
/**
* @description mocks_v3:mockIoTTwinMaker module is mocks for AWS-SDK V3
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
export const mockIoTTwinMaker = {
  batchPutPropertyValues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'batchPutPropertyValues', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  batchPutPropertyValuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'batchPutPropertyValues', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  batchPutPropertyValuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'batchPutPropertyValues', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  cancelMetadataTransferJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'cancelMetadataTransferJob', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  cancelMetadataTransferJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'cancelMetadataTransferJob', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  cancelMetadataTransferJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'cancelMetadataTransferJob', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  createComponentType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'createComponentType', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  createComponentTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'createComponentType', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  createComponentTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'createComponentType', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  createEntity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'createEntity', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  createEntityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'createEntity', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  createEntityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'createEntity', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  createMetadataTransferJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'createMetadataTransferJob', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  createMetadataTransferJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'createMetadataTransferJob', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  createMetadataTransferJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'createMetadataTransferJob', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  createScene: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'createScene', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  createSceneAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'createScene', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  createSceneThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'createScene', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  createSyncJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'createSyncJob', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  createSyncJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'createSyncJob', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  createSyncJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'createSyncJob', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  createWorkspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'createWorkspace', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  createWorkspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'createWorkspace', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  createWorkspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'createWorkspace', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  deleteComponentType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'deleteComponentType', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  deleteComponentTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'deleteComponentType', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  deleteComponentTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'deleteComponentType', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  deleteEntity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'deleteEntity', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  deleteEntityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'deleteEntity', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  deleteEntityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'deleteEntity', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  deleteScene: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'deleteScene', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  deleteSceneAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'deleteScene', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  deleteSceneThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'deleteScene', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  deleteSyncJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'deleteSyncJob', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  deleteSyncJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'deleteSyncJob', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  deleteSyncJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'deleteSyncJob', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  deleteWorkspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'deleteWorkspace', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  deleteWorkspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'deleteWorkspace', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  deleteWorkspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'deleteWorkspace', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  executeQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'executeQuery', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  executeQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'executeQuery', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  executeQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'executeQuery', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  getComponentType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getComponentType', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  getComponentTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getComponentType', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  getComponentTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getComponentType', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  getEntity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getEntity', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  getEntityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getEntity', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  getEntityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getEntity', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  getMetadataTransferJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getMetadataTransferJob', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  getMetadataTransferJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getMetadataTransferJob', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  getMetadataTransferJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getMetadataTransferJob', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  getPricingPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getPricingPlan', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  getPricingPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getPricingPlan', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  getPricingPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getPricingPlan', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  getPropertyValue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getPropertyValue', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  getPropertyValueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getPropertyValue', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  getPropertyValueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getPropertyValue', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  getPropertyValueHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getPropertyValueHistory', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  getPropertyValueHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getPropertyValueHistory', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  getPropertyValueHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getPropertyValueHistory', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  getScene: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getScene', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  getSceneAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getScene', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  getSceneThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getScene', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  getSyncJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getSyncJob', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  getSyncJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getSyncJob', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  getSyncJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getSyncJob', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  getWorkspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getWorkspace', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  getWorkspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getWorkspace', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  getWorkspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'getWorkspace', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  listComponentTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listComponentTypes', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  listComponentTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listComponentTypes', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  listComponentTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listComponentTypes', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  listComponents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listComponents', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  listComponentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listComponents', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  listComponentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listComponents', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  listEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listEntities', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  listEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listEntities', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  listEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listEntities', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  listMetadataTransferJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listMetadataTransferJobs', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  listMetadataTransferJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listMetadataTransferJobs', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  listMetadataTransferJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listMetadataTransferJobs', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  listProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listProperties', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  listPropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listProperties', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  listPropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listProperties', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  listScenes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listScenes', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  listScenesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listScenes', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  listScenesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listScenes', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  listSyncJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listSyncJobs', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  listSyncJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listSyncJobs', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  listSyncJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listSyncJobs', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  listSyncResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listSyncResources', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  listSyncResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listSyncResources', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  listSyncResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listSyncResources', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listTagsForResource', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listTagsForResource', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listTagsForResource', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  listWorkspaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listWorkspaces', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  listWorkspacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listWorkspaces', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  listWorkspacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'listWorkspaces', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'tagResource', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'tagResource', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'tagResource', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'untagResource', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'untagResource', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'untagResource', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  updateComponentType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'updateComponentType', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  updateComponentTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'updateComponentType', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  updateComponentTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'updateComponentType', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  updateEntity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'updateEntity', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  updateEntityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'updateEntity', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  updateEntityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'updateEntity', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  updatePricingPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'updatePricingPlan', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  updatePricingPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'updatePricingPlan', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  updatePricingPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'updatePricingPlan', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  updateScene: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'updateScene', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  updateSceneAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'updateScene', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  updateSceneThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'updateScene', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  updateWorkspace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'updateWorkspace', 'IoTTwinMaker', Promise.resolve(result), true, mock)
  },
  updateWorkspaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'updateWorkspace', 'IoTTwinMaker', Promise.resolve(result), false, mock)
  },
  updateWorkspaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'updateWorkspace', 'IoTTwinMaker', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'send', 'IoTTwinMakerClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'send', 'IoTTwinMakerClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iottwinmaker', 'send', 'IoTTwinMakerClient', Promise.reject(result), true, mock)
  }
}
