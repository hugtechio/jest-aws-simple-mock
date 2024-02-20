
/**
* @description mocks_v3:mockIoTThingsGraph module is mocks for AWS-SDK V3
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
export const mockIoTThingsGraph = {
  associateEntityToThing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'associateEntityToThing', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  associateEntityToThingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'associateEntityToThing', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  associateEntityToThingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'associateEntityToThing', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  createFlowTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'createFlowTemplate', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  createFlowTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'createFlowTemplate', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  createFlowTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'createFlowTemplate', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  createSystemInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'createSystemInstance', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  createSystemInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'createSystemInstance', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  createSystemInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'createSystemInstance', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  createSystemTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'createSystemTemplate', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  createSystemTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'createSystemTemplate', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  createSystemTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'createSystemTemplate', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  deleteFlowTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'deleteFlowTemplate', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  deleteFlowTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'deleteFlowTemplate', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  deleteFlowTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'deleteFlowTemplate', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  deleteNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'deleteNamespace', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  deleteNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'deleteNamespace', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  deleteNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'deleteNamespace', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  deleteSystemInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'deleteSystemInstance', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  deleteSystemInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'deleteSystemInstance', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  deleteSystemInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'deleteSystemInstance', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  deleteSystemTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'deleteSystemTemplate', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  deleteSystemTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'deleteSystemTemplate', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  deleteSystemTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'deleteSystemTemplate', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  deploySystemInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'deploySystemInstance', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  deploySystemInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'deploySystemInstance', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  deploySystemInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'deploySystemInstance', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  deprecateFlowTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'deprecateFlowTemplate', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  deprecateFlowTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'deprecateFlowTemplate', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  deprecateFlowTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'deprecateFlowTemplate', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  deprecateSystemTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'deprecateSystemTemplate', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  deprecateSystemTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'deprecateSystemTemplate', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  deprecateSystemTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'deprecateSystemTemplate', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  describeNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'describeNamespace', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  describeNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'describeNamespace', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  describeNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'describeNamespace', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  dissociateEntityFromThing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'dissociateEntityFromThing', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  dissociateEntityFromThingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'dissociateEntityFromThing', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  dissociateEntityFromThingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'dissociateEntityFromThing', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  getEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getEntities', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  getEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getEntities', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  getEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getEntities', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  getFlowTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getFlowTemplate', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  getFlowTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getFlowTemplate', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  getFlowTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getFlowTemplate', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  getFlowTemplateRevisions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getFlowTemplateRevisions', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  getFlowTemplateRevisionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getFlowTemplateRevisions', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  getFlowTemplateRevisionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getFlowTemplateRevisions', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  getNamespaceDeletionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getNamespaceDeletionStatus', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  getNamespaceDeletionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getNamespaceDeletionStatus', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  getNamespaceDeletionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getNamespaceDeletionStatus', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  getSystemInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getSystemInstance', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  getSystemInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getSystemInstance', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  getSystemInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getSystemInstance', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  getSystemTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getSystemTemplate', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  getSystemTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getSystemTemplate', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  getSystemTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getSystemTemplate', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  getSystemTemplateRevisions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getSystemTemplateRevisions', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  getSystemTemplateRevisionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getSystemTemplateRevisions', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  getSystemTemplateRevisionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getSystemTemplateRevisions', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  getUploadStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getUploadStatus', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  getUploadStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getUploadStatus', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  getUploadStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'getUploadStatus', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  listFlowExecutionMessages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'listFlowExecutionMessages', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  listFlowExecutionMessagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'listFlowExecutionMessages', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  listFlowExecutionMessagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'listFlowExecutionMessages', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'listTagsForResource', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'listTagsForResource', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'listTagsForResource', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  searchEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'searchEntities', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  searchEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'searchEntities', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  searchEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'searchEntities', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  searchFlowExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'searchFlowExecutions', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  searchFlowExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'searchFlowExecutions', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  searchFlowExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'searchFlowExecutions', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  searchFlowTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'searchFlowTemplates', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  searchFlowTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'searchFlowTemplates', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  searchFlowTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'searchFlowTemplates', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  searchSystemInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'searchSystemInstances', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  searchSystemInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'searchSystemInstances', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  searchSystemInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'searchSystemInstances', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  searchSystemTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'searchSystemTemplates', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  searchSystemTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'searchSystemTemplates', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  searchSystemTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'searchSystemTemplates', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  searchThings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'searchThings', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  searchThingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'searchThings', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  searchThingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'searchThings', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'tagResource', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'tagResource', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'tagResource', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  undeploySystemInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'undeploySystemInstance', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  undeploySystemInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'undeploySystemInstance', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  undeploySystemInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'undeploySystemInstance', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'untagResource', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'untagResource', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'untagResource', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  updateFlowTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'updateFlowTemplate', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  updateFlowTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'updateFlowTemplate', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  updateFlowTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'updateFlowTemplate', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  updateSystemTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'updateSystemTemplate', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  updateSystemTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'updateSystemTemplate', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  updateSystemTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'updateSystemTemplate', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  uploadEntityDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'uploadEntityDefinitions', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  uploadEntityDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'uploadEntityDefinitions', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  uploadEntityDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'uploadEntityDefinitions', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'send', 'IoTThingsGraphClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'send', 'IoTThingsGraphClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotthingsgraph', 'send', 'IoTThingsGraphClient', Promise.reject(result), true, mock)
  }
}
