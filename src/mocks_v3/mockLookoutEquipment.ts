
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockLookoutEquipment = {
  createDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createDataset', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  createDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createDataset', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  createDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createDataset', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  createInferenceScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  createInferenceSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  createInferenceSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createInferenceScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  createModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createModel', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  createModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createModel', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  createModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createModel', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  deleteDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteDataset', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  deleteDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteDataset', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  deleteDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteDataset', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  deleteInferenceScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  deleteInferenceSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  deleteInferenceSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteInferenceScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  deleteModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteModel', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  deleteModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteModel', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  deleteModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteModel', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  describeDataIngestionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeDataIngestionJob', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  describeDataIngestionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeDataIngestionJob', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  describeDataIngestionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeDataIngestionJob', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  describeDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeDataset', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  describeDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeDataset', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  describeDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeDataset', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  describeInferenceScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  describeInferenceSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  describeInferenceSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeInferenceScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  describeModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeModel', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  describeModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeModel', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  describeModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeModel', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'destroy', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'destroy', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'destroy', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listDataIngestionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listDataIngestionJobs', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listDataIngestionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listDataIngestionJobs', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listDataIngestionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listDataIngestionJobs', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listDatasets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listDatasets', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listDatasetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listDatasets', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listDatasetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listDatasets', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listInferenceExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listInferenceExecutions', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listInferenceExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listInferenceExecutions', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listInferenceExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listInferenceExecutions', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listInferenceSchedulers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listInferenceSchedulers', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listInferenceSchedulersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listInferenceSchedulers', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listInferenceSchedulersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listInferenceSchedulers', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listModels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listModels', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listModelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listModels', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listModelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listModels', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listTagsForResource', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listTagsForResource', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listTagsForResource', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  startDataIngestionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'startDataIngestionJob', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  startDataIngestionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'startDataIngestionJob', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  startDataIngestionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'startDataIngestionJob', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  startInferenceScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'startInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  startInferenceSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'startInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  startInferenceSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'startInferenceScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  stopInferenceScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'stopInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  stopInferenceSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'stopInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  stopInferenceSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'stopInferenceScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'tagResource', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'tagResource', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'tagResource', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'untagResource', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'untagResource', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'untagResource', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  updateInferenceScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'updateInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  updateInferenceSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'updateInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  updateInferenceSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'updateInferenceScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'send', 'LookoutEquipmentClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'send', 'LookoutEquipmentClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'send', 'LookoutEquipmentClient', Promise.reject(result), true, mock)
  }
}