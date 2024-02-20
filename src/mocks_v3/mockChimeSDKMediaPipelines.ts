
/**
* @description mocks_v3:mockChimeSDKMediaPipelines module is mocks for AWS-SDK V3
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
export const mockChimeSDKMediaPipelines = {
  createMediaCapturePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'createMediaCapturePipeline', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  createMediaCapturePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'createMediaCapturePipeline', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  createMediaCapturePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'createMediaCapturePipeline', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  createMediaConcatenationPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'createMediaConcatenationPipeline', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  createMediaConcatenationPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'createMediaConcatenationPipeline', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  createMediaConcatenationPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'createMediaConcatenationPipeline', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  createMediaInsightsPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'createMediaInsightsPipeline', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  createMediaInsightsPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'createMediaInsightsPipeline', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  createMediaInsightsPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'createMediaInsightsPipeline', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  createMediaInsightsPipelineConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'createMediaInsightsPipelineConfiguration', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  createMediaInsightsPipelineConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'createMediaInsightsPipelineConfiguration', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  createMediaInsightsPipelineConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'createMediaInsightsPipelineConfiguration', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  createMediaLiveConnectorPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'createMediaLiveConnectorPipeline', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  createMediaLiveConnectorPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'createMediaLiveConnectorPipeline', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  createMediaLiveConnectorPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'createMediaLiveConnectorPipeline', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  createMediaPipelineKinesisVideoStreamPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'createMediaPipelineKinesisVideoStreamPool', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  createMediaPipelineKinesisVideoStreamPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'createMediaPipelineKinesisVideoStreamPool', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  createMediaPipelineKinesisVideoStreamPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'createMediaPipelineKinesisVideoStreamPool', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  createMediaStreamPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'createMediaStreamPipeline', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  createMediaStreamPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'createMediaStreamPipeline', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  createMediaStreamPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'createMediaStreamPipeline', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  deleteMediaCapturePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'deleteMediaCapturePipeline', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  deleteMediaCapturePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'deleteMediaCapturePipeline', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  deleteMediaCapturePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'deleteMediaCapturePipeline', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  deleteMediaInsightsPipelineConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'deleteMediaInsightsPipelineConfiguration', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  deleteMediaInsightsPipelineConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'deleteMediaInsightsPipelineConfiguration', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  deleteMediaInsightsPipelineConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'deleteMediaInsightsPipelineConfiguration', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  deleteMediaPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'deleteMediaPipeline', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  deleteMediaPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'deleteMediaPipeline', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  deleteMediaPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'deleteMediaPipeline', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  deleteMediaPipelineKinesisVideoStreamPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'deleteMediaPipelineKinesisVideoStreamPool', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  deleteMediaPipelineKinesisVideoStreamPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'deleteMediaPipelineKinesisVideoStreamPool', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  deleteMediaPipelineKinesisVideoStreamPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'deleteMediaPipelineKinesisVideoStreamPool', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  getMediaCapturePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'getMediaCapturePipeline', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  getMediaCapturePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'getMediaCapturePipeline', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  getMediaCapturePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'getMediaCapturePipeline', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  getMediaInsightsPipelineConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'getMediaInsightsPipelineConfiguration', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  getMediaInsightsPipelineConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'getMediaInsightsPipelineConfiguration', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  getMediaInsightsPipelineConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'getMediaInsightsPipelineConfiguration', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  getMediaPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'getMediaPipeline', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  getMediaPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'getMediaPipeline', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  getMediaPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'getMediaPipeline', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  getMediaPipelineKinesisVideoStreamPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'getMediaPipelineKinesisVideoStreamPool', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  getMediaPipelineKinesisVideoStreamPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'getMediaPipelineKinesisVideoStreamPool', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  getMediaPipelineKinesisVideoStreamPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'getMediaPipelineKinesisVideoStreamPool', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  getSpeakerSearchTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'getSpeakerSearchTask', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  getSpeakerSearchTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'getSpeakerSearchTask', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  getSpeakerSearchTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'getSpeakerSearchTask', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  getVoiceToneAnalysisTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'getVoiceToneAnalysisTask', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  getVoiceToneAnalysisTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'getVoiceToneAnalysisTask', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  getVoiceToneAnalysisTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'getVoiceToneAnalysisTask', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  listMediaCapturePipelines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'listMediaCapturePipelines', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  listMediaCapturePipelinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'listMediaCapturePipelines', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  listMediaCapturePipelinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'listMediaCapturePipelines', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  listMediaInsightsPipelineConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'listMediaInsightsPipelineConfigurations', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  listMediaInsightsPipelineConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'listMediaInsightsPipelineConfigurations', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  listMediaInsightsPipelineConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'listMediaInsightsPipelineConfigurations', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  listMediaPipelineKinesisVideoStreamPools: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'listMediaPipelineKinesisVideoStreamPools', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  listMediaPipelineKinesisVideoStreamPoolsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'listMediaPipelineKinesisVideoStreamPools', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  listMediaPipelineKinesisVideoStreamPoolsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'listMediaPipelineKinesisVideoStreamPools', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  listMediaPipelines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'listMediaPipelines', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  listMediaPipelinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'listMediaPipelines', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  listMediaPipelinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'listMediaPipelines', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'listTagsForResource', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'listTagsForResource', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'listTagsForResource', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  startSpeakerSearchTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'startSpeakerSearchTask', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  startSpeakerSearchTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'startSpeakerSearchTask', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  startSpeakerSearchTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'startSpeakerSearchTask', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  startVoiceToneAnalysisTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'startVoiceToneAnalysisTask', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  startVoiceToneAnalysisTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'startVoiceToneAnalysisTask', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  startVoiceToneAnalysisTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'startVoiceToneAnalysisTask', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  stopSpeakerSearchTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'stopSpeakerSearchTask', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  stopSpeakerSearchTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'stopSpeakerSearchTask', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  stopSpeakerSearchTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'stopSpeakerSearchTask', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  stopVoiceToneAnalysisTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'stopVoiceToneAnalysisTask', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  stopVoiceToneAnalysisTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'stopVoiceToneAnalysisTask', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  stopVoiceToneAnalysisTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'stopVoiceToneAnalysisTask', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'tagResource', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'tagResource', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'tagResource', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'untagResource', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'untagResource', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'untagResource', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  updateMediaInsightsPipelineConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'updateMediaInsightsPipelineConfiguration', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  updateMediaInsightsPipelineConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'updateMediaInsightsPipelineConfiguration', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  updateMediaInsightsPipelineConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'updateMediaInsightsPipelineConfiguration', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  updateMediaInsightsPipelineStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'updateMediaInsightsPipelineStatus', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  updateMediaInsightsPipelineStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'updateMediaInsightsPipelineStatus', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  updateMediaInsightsPipelineStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'updateMediaInsightsPipelineStatus', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  updateMediaPipelineKinesisVideoStreamPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'updateMediaPipelineKinesisVideoStreamPool', 'ChimeSDKMediaPipelines', Promise.resolve(result), true, mock)
  },
  updateMediaPipelineKinesisVideoStreamPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'updateMediaPipelineKinesisVideoStreamPool', 'ChimeSDKMediaPipelines', Promise.resolve(result), false, mock)
  },
  updateMediaPipelineKinesisVideoStreamPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'updateMediaPipelineKinesisVideoStreamPool', 'ChimeSDKMediaPipelines', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'send', 'ChimeSDKMediaPipelinesClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'send', 'ChimeSDKMediaPipelinesClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-chime-sdk-media-pipelines', 'send', 'ChimeSDKMediaPipelinesClient', Promise.reject(result), true, mock)
  }
}
