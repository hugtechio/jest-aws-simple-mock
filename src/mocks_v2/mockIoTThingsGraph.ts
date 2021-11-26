
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
  export const mockIoTThingsGraph = {
  associateEntityToThing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateEntityToThing', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  associateEntityToThingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateEntityToThing', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  associateEntityToThingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateEntityToThing', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  createFlowTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFlowTemplate', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  createFlowTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFlowTemplate', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  createFlowTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFlowTemplate', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  createSystemInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSystemInstance', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  createSystemInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSystemInstance', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  createSystemInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSystemInstance', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  createSystemTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSystemTemplate', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  createSystemTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSystemTemplate', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  createSystemTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSystemTemplate', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  deleteFlowTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFlowTemplate', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  deleteFlowTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFlowTemplate', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  deleteFlowTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFlowTemplate', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  deleteNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNamespace', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  deleteNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNamespace', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  deleteNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNamespace', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  deleteSystemInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSystemInstance', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  deleteSystemInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSystemInstance', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  deleteSystemInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSystemInstance', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  deleteSystemTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSystemTemplate', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  deleteSystemTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSystemTemplate', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  deleteSystemTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSystemTemplate', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  deploySystemInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deploySystemInstance', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  deploySystemInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deploySystemInstance', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  deploySystemInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deploySystemInstance', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  deprecateFlowTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateFlowTemplate', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  deprecateFlowTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateFlowTemplate', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  deprecateFlowTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateFlowTemplate', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  deprecateSystemTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateSystemTemplate', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  deprecateSystemTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateSystemTemplate', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  deprecateSystemTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deprecateSystemTemplate', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  describeNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNamespace', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  describeNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNamespace', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  describeNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNamespace', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  dissociateEntityFromThing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('dissociateEntityFromThing', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  dissociateEntityFromThingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('dissociateEntityFromThing', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  dissociateEntityFromThingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('dissociateEntityFromThing', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  getEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEntities', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  getEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEntities', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  getEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEntities', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  getFlowTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFlowTemplate', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  getFlowTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFlowTemplate', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  getFlowTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFlowTemplate', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  getFlowTemplateRevisions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFlowTemplateRevisions', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  getFlowTemplateRevisionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFlowTemplateRevisions', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  getFlowTemplateRevisionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFlowTemplateRevisions', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  getNamespaceDeletionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNamespaceDeletionStatus', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  getNamespaceDeletionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNamespaceDeletionStatus', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  getNamespaceDeletionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNamespaceDeletionStatus', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  getSystemInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSystemInstance', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  getSystemInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSystemInstance', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  getSystemInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSystemInstance', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  getSystemTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSystemTemplate', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  getSystemTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSystemTemplate', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  getSystemTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSystemTemplate', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  getSystemTemplateRevisions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSystemTemplateRevisions', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  getSystemTemplateRevisionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSystemTemplateRevisions', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  getSystemTemplateRevisionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSystemTemplateRevisions', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  getUploadStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUploadStatus', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  getUploadStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUploadStatus', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  getUploadStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUploadStatus', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  listFlowExecutionMessages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFlowExecutionMessages', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  listFlowExecutionMessagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFlowExecutionMessages', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  listFlowExecutionMessagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFlowExecutionMessages', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  searchEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchEntities', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  searchEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchEntities', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  searchEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchEntities', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  searchFlowExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchFlowExecutions', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  searchFlowExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchFlowExecutions', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  searchFlowExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchFlowExecutions', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  searchFlowTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchFlowTemplates', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  searchFlowTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchFlowTemplates', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  searchFlowTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchFlowTemplates', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  searchSystemInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchSystemInstances', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  searchSystemInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchSystemInstances', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  searchSystemInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchSystemInstances', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  searchSystemTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchSystemTemplates', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  searchSystemTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchSystemTemplates', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  searchSystemTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchSystemTemplates', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  searchThings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchThings', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  searchThingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchThings', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  searchThingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchThings', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  undeploySystemInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('undeploySystemInstance', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  undeploySystemInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('undeploySystemInstance', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  undeploySystemInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('undeploySystemInstance', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  updateFlowTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFlowTemplate', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  updateFlowTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFlowTemplate', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  updateFlowTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFlowTemplate', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  updateSystemTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSystemTemplate', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  updateSystemTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSystemTemplate', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  updateSystemTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSystemTemplate', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
  uploadEntityDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadEntityDefinitions', 'IoTThingsGraph', Promise.resolve(result), true, mock)
  },
  uploadEntityDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadEntityDefinitions', 'IoTThingsGraph', Promise.resolve(result), false, mock)
  },
  uploadEntityDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadEntityDefinitions', 'IoTThingsGraph', Promise.reject(result), true, mock)
  },
}
