
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
  export const mockIoTAnalytics = {
  batchPutMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchPutMessage', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  batchPutMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchPutMessage', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  batchPutMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchPutMessage', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  cancelPipelineReprocessing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelPipelineReprocessing', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  cancelPipelineReprocessingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelPipelineReprocessing', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  cancelPipelineReprocessingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelPipelineReprocessing', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  createChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannel', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  createChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannel', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  createChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannel', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  createDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataset', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  createDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataset', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  createDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataset', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  createDatasetContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatasetContent', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  createDatasetContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatasetContent', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  createDatasetContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatasetContent', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  createDatastore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatastore', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  createDatastoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatastore', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  createDatastoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDatastore', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  createPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPipeline', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  createPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPipeline', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  createPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPipeline', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  deleteChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannel', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  deleteChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannel', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  deleteChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannel', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  deleteDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  deleteDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  deleteDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  deleteDatasetContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatasetContent', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  deleteDatasetContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatasetContent', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  deleteDatasetContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatasetContent', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  deleteDatastore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatastore', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  deleteDatastoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatastore', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  deleteDatastoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDatastore', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  deletePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePipeline', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  deletePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePipeline', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  deletePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePipeline', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  describeChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannel', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  describeChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannel', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  describeChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannel', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  describeDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  describeDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  describeDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  describeDatastore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDatastore', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  describeDatastoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDatastore', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  describeDatastoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDatastore', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  describeLoggingOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLoggingOptions', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  describeLoggingOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLoggingOptions', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  describeLoggingOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLoggingOptions', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  describePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePipeline', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  describePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePipeline', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  describePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePipeline', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  getDatasetContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDatasetContent', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  getDatasetContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDatasetContent', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  getDatasetContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDatasetContent', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  listChannels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannels', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  listChannelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannels', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  listChannelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannels', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  listDatasetContents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasetContents', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  listDatasetContentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasetContents', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  listDatasetContentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasetContents', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  listDatasets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasets', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  listDatasetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasets', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  listDatasetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasets', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  listDatastores: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatastores', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  listDatastoresAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatastores', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  listDatastoresThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatastores', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  listPipelines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPipelines', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  listPipelinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPipelines', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  listPipelinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPipelines', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  putLoggingOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLoggingOptions', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  putLoggingOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLoggingOptions', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  putLoggingOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLoggingOptions', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  runPipelineActivity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('runPipelineActivity', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  runPipelineActivityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('runPipelineActivity', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  runPipelineActivityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('runPipelineActivity', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  sampleChannelData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sampleChannelData', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  sampleChannelDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sampleChannelData', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  sampleChannelDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sampleChannelData', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  startPipelineReprocessing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startPipelineReprocessing', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  startPipelineReprocessingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startPipelineReprocessing', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  startPipelineReprocessingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startPipelineReprocessing', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  updateChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannel', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  updateChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannel', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  updateChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannel', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  updateDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDataset', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  updateDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDataset', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  updateDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDataset', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  updateDatastore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatastore', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  updateDatastoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatastore', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  updateDatastoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDatastore', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  updatePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipeline', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  updatePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipeline', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  updatePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipeline', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
}
