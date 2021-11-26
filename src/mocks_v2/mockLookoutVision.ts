
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
  export const mockLookoutVision = {
  createDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataset', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  createDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataset', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  createDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataset', 'LookoutVision', Promise.reject(result), true, mock)
  },
  createModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createModel', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  createModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createModel', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  createModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createModel', 'LookoutVision', Promise.reject(result), true, mock)
  },
  createProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  createProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  createProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'LookoutVision', Promise.reject(result), true, mock)
  },
  deleteDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  deleteDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  deleteDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'LookoutVision', Promise.reject(result), true, mock)
  },
  deleteModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteModel', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  deleteModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteModel', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  deleteModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteModel', 'LookoutVision', Promise.reject(result), true, mock)
  },
  deleteProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  deleteProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  deleteProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'LookoutVision', Promise.reject(result), true, mock)
  },
  describeDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  describeDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  describeDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'LookoutVision', Promise.reject(result), true, mock)
  },
  describeModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeModel', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  describeModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeModel', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  describeModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeModel', 'LookoutVision', Promise.reject(result), true, mock)
  },
  describeProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProject', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  describeProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProject', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  describeProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProject', 'LookoutVision', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LookoutVision', Promise.reject(result), true, mock)
  },
  detectAnomalies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectAnomalies', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  detectAnomaliesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectAnomalies', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  detectAnomaliesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectAnomalies', 'LookoutVision', Promise.reject(result), true, mock)
  },
  listDatasetEntries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasetEntries', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  listDatasetEntriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasetEntries', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  listDatasetEntriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasetEntries', 'LookoutVision', Promise.reject(result), true, mock)
  },
  listModels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listModels', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  listModelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listModels', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  listModelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listModels', 'LookoutVision', Promise.reject(result), true, mock)
  },
  listProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  listProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  listProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'LookoutVision', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'LookoutVision', Promise.reject(result), true, mock)
  },
  startModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startModel', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  startModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startModel', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  startModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startModel', 'LookoutVision', Promise.reject(result), true, mock)
  },
  stopModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopModel', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  stopModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopModel', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  stopModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopModel', 'LookoutVision', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'LookoutVision', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'LookoutVision', Promise.reject(result), true, mock)
  },
  updateDatasetEntries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatasetEntries', 'LookoutVision', Promise.resolve(result), true, mock)
  },
  updateDatasetEntriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatasetEntries', 'LookoutVision', Promise.resolve(result), false, mock)
  },
  updateDatasetEntriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatasetEntries', 'LookoutVision', Promise.reject(result), true, mock)
  },
}
