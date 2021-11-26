
/**
* @description mocks_v3:mockLookoutVision module is mocks for AWS-SDK V3
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

  export const mockLookoutVision = {
  createDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'createDataset', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  createDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'createDataset', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  createDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'createDataset', 'LookoutVision', Promise.reject(result), true, mock)
  },
  createModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'createModel', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  createModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'createModel', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  createModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'createModel', 'LookoutVision', Promise.reject(result), true, mock)
  },
  createProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'createProject', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  createProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'createProject', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  createProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'createProject', 'LookoutVision', Promise.reject(result), true, mock)
  },
  deleteDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'deleteDataset', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  deleteDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'deleteDataset', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  deleteDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'deleteDataset', 'LookoutVision', Promise.reject(result), true, mock)
  },
  deleteModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'deleteModel', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  deleteModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'deleteModel', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  deleteModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'deleteModel', 'LookoutVision', Promise.reject(result), true, mock)
  },
  deleteProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'deleteProject', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  deleteProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'deleteProject', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  deleteProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'deleteProject', 'LookoutVision', Promise.reject(result), true, mock)
  },
  describeDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'describeDataset', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  describeDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'describeDataset', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  describeDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'describeDataset', 'LookoutVision', Promise.reject(result), true, mock)
  },
  describeModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'describeModel', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  describeModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'describeModel', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  describeModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'describeModel', 'LookoutVision', Promise.reject(result), true, mock)
  },
  describeProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'describeProject', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  describeProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'describeProject', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  describeProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'describeProject', 'LookoutVision', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'destroy', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'destroy', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'destroy', 'LookoutVision', Promise.reject(result), true, mock)
  },
  detectAnomalies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'detectAnomalies', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  detectAnomaliesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'detectAnomalies', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  detectAnomaliesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'detectAnomalies', 'LookoutVision', Promise.reject(result), true, mock)
  },
  listDatasetEntries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'listDatasetEntries', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  listDatasetEntriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'listDatasetEntries', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  listDatasetEntriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'listDatasetEntries', 'LookoutVision', Promise.reject(result), true, mock)
  },
  listModels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'listModels', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  listModelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'listModels', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  listModelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'listModels', 'LookoutVision', Promise.reject(result), true, mock)
  },
  listProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'listProjects', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  listProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'listProjects', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  listProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'listProjects', 'LookoutVision', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'listTagsForResource', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'listTagsForResource', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'listTagsForResource', 'LookoutVision', Promise.reject(result), true, mock)
  },
  startModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'startModel', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  startModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'startModel', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  startModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'startModel', 'LookoutVision', Promise.reject(result), true, mock)
  },
  stopModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'stopModel', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  stopModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'stopModel', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  stopModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'stopModel', 'LookoutVision', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'tagResource', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'tagResource', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'tagResource', 'LookoutVision', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'untagResource', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'untagResource', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'untagResource', 'LookoutVision', Promise.reject(result), true, mock)
  },
  updateDatasetEntries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'updateDatasetEntries', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  updateDatasetEntriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'updateDatasetEntries', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  updateDatasetEntriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'updateDatasetEntries', 'LookoutVision', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'send', 'LookoutVisionClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'send', 'LookoutVisionClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutvision', 'send', 'LookoutVisionClient', Promise.reject(result), true, mock)
  }
}