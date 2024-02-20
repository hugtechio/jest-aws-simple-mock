
/**
* @description mocks_v3:mockIoTAnalytics module is mocks for AWS-SDK V3
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
export const mockIoTAnalytics = {
  batchPutMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'batchPutMessage', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  batchPutMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'batchPutMessage', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  batchPutMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'batchPutMessage', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  cancelPipelineReprocessing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'cancelPipelineReprocessing', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  cancelPipelineReprocessingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'cancelPipelineReprocessing', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  cancelPipelineReprocessingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'cancelPipelineReprocessing', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  createChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'createChannel', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  createChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'createChannel', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  createChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'createChannel', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  createDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'createDataset', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  createDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'createDataset', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  createDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'createDataset', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  createDatasetContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'createDatasetContent', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  createDatasetContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'createDatasetContent', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  createDatasetContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'createDatasetContent', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  createDatastore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'createDatastore', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  createDatastoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'createDatastore', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  createDatastoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'createDatastore', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  createPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'createPipeline', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  createPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'createPipeline', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  createPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'createPipeline', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  deleteChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'deleteChannel', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  deleteChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'deleteChannel', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  deleteChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'deleteChannel', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  deleteDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'deleteDataset', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  deleteDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'deleteDataset', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  deleteDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'deleteDataset', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  deleteDatasetContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'deleteDatasetContent', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  deleteDatasetContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'deleteDatasetContent', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  deleteDatasetContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'deleteDatasetContent', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  deleteDatastore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'deleteDatastore', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  deleteDatastoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'deleteDatastore', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  deleteDatastoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'deleteDatastore', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  deletePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'deletePipeline', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  deletePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'deletePipeline', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  deletePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'deletePipeline', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  describeChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'describeChannel', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  describeChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'describeChannel', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  describeChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'describeChannel', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  describeDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'describeDataset', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  describeDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'describeDataset', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  describeDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'describeDataset', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  describeDatastore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'describeDatastore', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  describeDatastoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'describeDatastore', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  describeDatastoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'describeDatastore', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  describeLoggingOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'describeLoggingOptions', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  describeLoggingOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'describeLoggingOptions', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  describeLoggingOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'describeLoggingOptions', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  describePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'describePipeline', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  describePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'describePipeline', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  describePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'describePipeline', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  getDatasetContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'getDatasetContent', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  getDatasetContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'getDatasetContent', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  getDatasetContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'getDatasetContent', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  listChannels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'listChannels', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  listChannelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'listChannels', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  listChannelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'listChannels', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  listDatasetContents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'listDatasetContents', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  listDatasetContentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'listDatasetContents', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  listDatasetContentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'listDatasetContents', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  listDatasets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'listDatasets', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  listDatasetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'listDatasets', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  listDatasetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'listDatasets', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  listDatastores: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'listDatastores', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  listDatastoresAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'listDatastores', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  listDatastoresThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'listDatastores', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  listPipelines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'listPipelines', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  listPipelinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'listPipelines', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  listPipelinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'listPipelines', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'listTagsForResource', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'listTagsForResource', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'listTagsForResource', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  putLoggingOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'putLoggingOptions', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  putLoggingOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'putLoggingOptions', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  putLoggingOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'putLoggingOptions', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  runPipelineActivity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'runPipelineActivity', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  runPipelineActivityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'runPipelineActivity', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  runPipelineActivityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'runPipelineActivity', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  sampleChannelData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'sampleChannelData', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  sampleChannelDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'sampleChannelData', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  sampleChannelDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'sampleChannelData', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  startPipelineReprocessing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'startPipelineReprocessing', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  startPipelineReprocessingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'startPipelineReprocessing', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  startPipelineReprocessingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'startPipelineReprocessing', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'tagResource', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'tagResource', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'tagResource', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'untagResource', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'untagResource', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'untagResource', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  updateChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'updateChannel', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  updateChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'updateChannel', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  updateChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'updateChannel', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  updateDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'updateDataset', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  updateDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'updateDataset', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  updateDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'updateDataset', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  updateDatastore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'updateDatastore', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  updateDatastoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'updateDatastore', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  updateDatastoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'updateDatastore', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  updatePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'updatePipeline', 'IoTAnalytics', Promise.resolve(result), true, mock)
  },
  updatePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'updatePipeline', 'IoTAnalytics', Promise.resolve(result), false, mock)
  },
  updatePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'updatePipeline', 'IoTAnalytics', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'send', 'IoTAnalyticsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'send', 'IoTAnalyticsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotanalytics', 'send', 'IoTAnalyticsClient', Promise.reject(result), true, mock)
  }
}
