
/**
* @description mocks_v2:mockElasticTranscoder.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockElasticTranscoder = {
  cancelJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJob', 'ElasticTranscoder', result, true, true, mock)
  },
  cancelJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJob', 'ElasticTranscoder', result, false, true, mock)
  },
  cancelJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJob', 'ElasticTranscoder', result, true, false, mock)
  },
  createJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJob', 'ElasticTranscoder', result, true, true, mock)
  },
  createJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJob', 'ElasticTranscoder', result, false, true, mock)
  },
  createJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJob', 'ElasticTranscoder', result, true, false, mock)
  },
  createPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPipeline', 'ElasticTranscoder', result, true, true, mock)
  },
  createPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPipeline', 'ElasticTranscoder', result, false, true, mock)
  },
  createPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPipeline', 'ElasticTranscoder', result, true, false, mock)
  },
  createPreset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPreset', 'ElasticTranscoder', result, true, true, mock)
  },
  createPresetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPreset', 'ElasticTranscoder', result, false, true, mock)
  },
  createPresetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPreset', 'ElasticTranscoder', result, true, false, mock)
  },
  deletePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePipeline', 'ElasticTranscoder', result, true, true, mock)
  },
  deletePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePipeline', 'ElasticTranscoder', result, false, true, mock)
  },
  deletePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePipeline', 'ElasticTranscoder', result, true, false, mock)
  },
  deletePreset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePreset', 'ElasticTranscoder', result, true, true, mock)
  },
  deletePresetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePreset', 'ElasticTranscoder', result, false, true, mock)
  },
  deletePresetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePreset', 'ElasticTranscoder', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ElasticTranscoder', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ElasticTranscoder', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ElasticTranscoder', result, true, false, mock)
  },
  listJobsByPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobsByPipeline', 'ElasticTranscoder', result, true, true, mock)
  },
  listJobsByPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobsByPipeline', 'ElasticTranscoder', result, false, true, mock)
  },
  listJobsByPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobsByPipeline', 'ElasticTranscoder', result, true, false, mock)
  },
  listJobsByStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobsByStatus', 'ElasticTranscoder', result, true, true, mock)
  },
  listJobsByStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobsByStatus', 'ElasticTranscoder', result, false, true, mock)
  },
  listJobsByStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobsByStatus', 'ElasticTranscoder', result, true, false, mock)
  },
  listPipelines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPipelines', 'ElasticTranscoder', result, true, true, mock)
  },
  listPipelinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPipelines', 'ElasticTranscoder', result, false, true, mock)
  },
  listPipelinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPipelines', 'ElasticTranscoder', result, true, false, mock)
  },
  listPresets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPresets', 'ElasticTranscoder', result, true, true, mock)
  },
  listPresetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPresets', 'ElasticTranscoder', result, false, true, mock)
  },
  listPresetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPresets', 'ElasticTranscoder', result, true, false, mock)
  },
  readJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('readJob', 'ElasticTranscoder', result, true, true, mock)
  },
  readJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('readJob', 'ElasticTranscoder', result, false, true, mock)
  },
  readJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('readJob', 'ElasticTranscoder', result, true, false, mock)
  },
  readPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('readPipeline', 'ElasticTranscoder', result, true, true, mock)
  },
  readPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('readPipeline', 'ElasticTranscoder', result, false, true, mock)
  },
  readPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('readPipeline', 'ElasticTranscoder', result, true, false, mock)
  },
  readPreset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('readPreset', 'ElasticTranscoder', result, true, true, mock)
  },
  readPresetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('readPreset', 'ElasticTranscoder', result, false, true, mock)
  },
  readPresetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('readPreset', 'ElasticTranscoder', result, true, false, mock)
  },
  testRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testRole', 'ElasticTranscoder', result, true, true, mock)
  },
  testRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testRole', 'ElasticTranscoder', result, false, true, mock)
  },
  testRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testRole', 'ElasticTranscoder', result, true, false, mock)
  },
  updatePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipeline', 'ElasticTranscoder', result, true, true, mock)
  },
  updatePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipeline', 'ElasticTranscoder', result, false, true, mock)
  },
  updatePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipeline', 'ElasticTranscoder', result, true, false, mock)
  },
  updatePipelineNotifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipelineNotifications', 'ElasticTranscoder', result, true, true, mock)
  },
  updatePipelineNotificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipelineNotifications', 'ElasticTranscoder', result, false, true, mock)
  },
  updatePipelineNotificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipelineNotifications', 'ElasticTranscoder', result, true, false, mock)
  },
  updatePipelineStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipelineStatus', 'ElasticTranscoder', result, true, true, mock)
  },
  updatePipelineStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipelineStatus', 'ElasticTranscoder', result, false, true, mock)
  },
  updatePipelineStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipelineStatus', 'ElasticTranscoder', result, true, false, mock)
  },
}
