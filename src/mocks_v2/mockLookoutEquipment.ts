
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
  export const mockLookoutEquipment = {
  createDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataset', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  createDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataset', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  createDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataset', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  createInferenceScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  createInferenceSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  createInferenceSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInferenceScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  createModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createModel', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  createModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createModel', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  createModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createModel', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  deleteDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  deleteDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  deleteDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  deleteInferenceScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  deleteInferenceSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  deleteInferenceSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInferenceScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  deleteModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteModel', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  deleteModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteModel', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  deleteModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteModel', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  describeDataIngestionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataIngestionJob', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  describeDataIngestionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataIngestionJob', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  describeDataIngestionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataIngestionJob', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  describeDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  describeDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  describeDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  describeInferenceScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  describeInferenceSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  describeInferenceSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInferenceScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  describeModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeModel', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  describeModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeModel', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  describeModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeModel', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listDataIngestionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataIngestionJobs', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listDataIngestionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataIngestionJobs', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listDataIngestionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataIngestionJobs', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listDatasets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasets', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listDatasetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasets', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listDatasetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasets', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listInferenceExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInferenceExecutions', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listInferenceExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInferenceExecutions', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listInferenceExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInferenceExecutions', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listInferenceSchedulers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInferenceSchedulers', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listInferenceSchedulersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInferenceSchedulers', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listInferenceSchedulersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInferenceSchedulers', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listModels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listModels', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listModelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listModels', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listModelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listModels', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  startDataIngestionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDataIngestionJob', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  startDataIngestionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDataIngestionJob', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  startDataIngestionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDataIngestionJob', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  startInferenceScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  startInferenceSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  startInferenceSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startInferenceScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  stopInferenceScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  stopInferenceSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  stopInferenceSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopInferenceScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  updateInferenceScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  updateInferenceSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  updateInferenceSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInferenceScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
}
