
/**
* @description mocks_v3:mockElasticTranscoder module is mocks for AWS-SDK V3
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
export const mockElasticTranscoder = {
  cancelJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'cancelJob', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  cancelJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'cancelJob', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  cancelJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'cancelJob', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  createJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'createJob', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  createJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'createJob', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  createJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'createJob', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  createPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'createPipeline', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  createPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'createPipeline', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  createPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'createPipeline', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  createPreset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'createPreset', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  createPresetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'createPreset', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  createPresetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'createPreset', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  deletePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'deletePipeline', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  deletePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'deletePipeline', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  deletePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'deletePipeline', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  deletePreset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'deletePreset', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  deletePresetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'deletePreset', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  deletePresetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'deletePreset', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  listJobsByPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'listJobsByPipeline', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  listJobsByPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'listJobsByPipeline', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  listJobsByPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'listJobsByPipeline', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  listJobsByStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'listJobsByStatus', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  listJobsByStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'listJobsByStatus', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  listJobsByStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'listJobsByStatus', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  listPipelines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'listPipelines', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  listPipelinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'listPipelines', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  listPipelinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'listPipelines', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  listPresets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'listPresets', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  listPresetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'listPresets', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  listPresetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'listPresets', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  readJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'readJob', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  readJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'readJob', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  readJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'readJob', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  readPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'readPipeline', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  readPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'readPipeline', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  readPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'readPipeline', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  readPreset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'readPreset', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  readPresetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'readPreset', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  readPresetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'readPreset', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  testRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'testRole', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  testRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'testRole', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  testRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'testRole', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  updatePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'updatePipeline', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  updatePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'updatePipeline', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  updatePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'updatePipeline', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  updatePipelineNotifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'updatePipelineNotifications', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  updatePipelineNotificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'updatePipelineNotifications', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  updatePipelineNotificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'updatePipelineNotifications', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  updatePipelineStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'updatePipelineStatus', 'ElasticTranscoder', Promise.resolve(result), true, mock)
  },
  updatePipelineStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'updatePipelineStatus', 'ElasticTranscoder', Promise.resolve(result), false, mock)
  },
  updatePipelineStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'updatePipelineStatus', 'ElasticTranscoder', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'send', 'ElasticTranscoderClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'send', 'ElasticTranscoderClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-transcoder', 'send', 'ElasticTranscoderClient', Promise.reject(result), true, mock)
  }
}
