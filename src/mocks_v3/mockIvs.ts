
/**
* @description mocks_v3:mockIvs module is mocks for AWS-SDK V3
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
export const mockIvs = {
  batchGetChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'batchGetChannel', 'Ivs', Promise.resolve(result), true, mock)
  },
  batchGetChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'batchGetChannel', 'Ivs', Promise.resolve(result), false, mock)
  },
  batchGetChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'batchGetChannel', 'Ivs', Promise.reject(result), true, mock)
  },
  batchGetStreamKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'batchGetStreamKey', 'Ivs', Promise.resolve(result), true, mock)
  },
  batchGetStreamKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'batchGetStreamKey', 'Ivs', Promise.resolve(result), false, mock)
  },
  batchGetStreamKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'batchGetStreamKey', 'Ivs', Promise.reject(result), true, mock)
  },
  batchStartViewerSessionRevocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'batchStartViewerSessionRevocation', 'Ivs', Promise.resolve(result), true, mock)
  },
  batchStartViewerSessionRevocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'batchStartViewerSessionRevocation', 'Ivs', Promise.resolve(result), false, mock)
  },
  batchStartViewerSessionRevocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'batchStartViewerSessionRevocation', 'Ivs', Promise.reject(result), true, mock)
  },
  createChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'createChannel', 'Ivs', Promise.resolve(result), true, mock)
  },
  createChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'createChannel', 'Ivs', Promise.resolve(result), false, mock)
  },
  createChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'createChannel', 'Ivs', Promise.reject(result), true, mock)
  },
  createPlaybackRestrictionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'createPlaybackRestrictionPolicy', 'Ivs', Promise.resolve(result), true, mock)
  },
  createPlaybackRestrictionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'createPlaybackRestrictionPolicy', 'Ivs', Promise.resolve(result), false, mock)
  },
  createPlaybackRestrictionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'createPlaybackRestrictionPolicy', 'Ivs', Promise.reject(result), true, mock)
  },
  createRecordingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'createRecordingConfiguration', 'Ivs', Promise.resolve(result), true, mock)
  },
  createRecordingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'createRecordingConfiguration', 'Ivs', Promise.resolve(result), false, mock)
  },
  createRecordingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'createRecordingConfiguration', 'Ivs', Promise.reject(result), true, mock)
  },
  createStreamKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'createStreamKey', 'Ivs', Promise.resolve(result), true, mock)
  },
  createStreamKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'createStreamKey', 'Ivs', Promise.resolve(result), false, mock)
  },
  createStreamKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'createStreamKey', 'Ivs', Promise.reject(result), true, mock)
  },
  deleteChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'deleteChannel', 'Ivs', Promise.resolve(result), true, mock)
  },
  deleteChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'deleteChannel', 'Ivs', Promise.resolve(result), false, mock)
  },
  deleteChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'deleteChannel', 'Ivs', Promise.reject(result), true, mock)
  },
  deletePlaybackKeyPair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'deletePlaybackKeyPair', 'Ivs', Promise.resolve(result), true, mock)
  },
  deletePlaybackKeyPairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'deletePlaybackKeyPair', 'Ivs', Promise.resolve(result), false, mock)
  },
  deletePlaybackKeyPairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'deletePlaybackKeyPair', 'Ivs', Promise.reject(result), true, mock)
  },
  deletePlaybackRestrictionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'deletePlaybackRestrictionPolicy', 'Ivs', Promise.resolve(result), true, mock)
  },
  deletePlaybackRestrictionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'deletePlaybackRestrictionPolicy', 'Ivs', Promise.resolve(result), false, mock)
  },
  deletePlaybackRestrictionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'deletePlaybackRestrictionPolicy', 'Ivs', Promise.reject(result), true, mock)
  },
  deleteRecordingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'deleteRecordingConfiguration', 'Ivs', Promise.resolve(result), true, mock)
  },
  deleteRecordingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'deleteRecordingConfiguration', 'Ivs', Promise.resolve(result), false, mock)
  },
  deleteRecordingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'deleteRecordingConfiguration', 'Ivs', Promise.reject(result), true, mock)
  },
  deleteStreamKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'deleteStreamKey', 'Ivs', Promise.resolve(result), true, mock)
  },
  deleteStreamKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'deleteStreamKey', 'Ivs', Promise.resolve(result), false, mock)
  },
  deleteStreamKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'deleteStreamKey', 'Ivs', Promise.reject(result), true, mock)
  },
  getChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'getChannel', 'Ivs', Promise.resolve(result), true, mock)
  },
  getChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'getChannel', 'Ivs', Promise.resolve(result), false, mock)
  },
  getChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'getChannel', 'Ivs', Promise.reject(result), true, mock)
  },
  getPlaybackKeyPair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'getPlaybackKeyPair', 'Ivs', Promise.resolve(result), true, mock)
  },
  getPlaybackKeyPairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'getPlaybackKeyPair', 'Ivs', Promise.resolve(result), false, mock)
  },
  getPlaybackKeyPairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'getPlaybackKeyPair', 'Ivs', Promise.reject(result), true, mock)
  },
  getPlaybackRestrictionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'getPlaybackRestrictionPolicy', 'Ivs', Promise.resolve(result), true, mock)
  },
  getPlaybackRestrictionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'getPlaybackRestrictionPolicy', 'Ivs', Promise.resolve(result), false, mock)
  },
  getPlaybackRestrictionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'getPlaybackRestrictionPolicy', 'Ivs', Promise.reject(result), true, mock)
  },
  getRecordingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'getRecordingConfiguration', 'Ivs', Promise.resolve(result), true, mock)
  },
  getRecordingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'getRecordingConfiguration', 'Ivs', Promise.resolve(result), false, mock)
  },
  getRecordingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'getRecordingConfiguration', 'Ivs', Promise.reject(result), true, mock)
  },
  getStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'getStream', 'Ivs', Promise.resolve(result), true, mock)
  },
  getStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'getStream', 'Ivs', Promise.resolve(result), false, mock)
  },
  getStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'getStream', 'Ivs', Promise.reject(result), true, mock)
  },
  getStreamKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'getStreamKey', 'Ivs', Promise.resolve(result), true, mock)
  },
  getStreamKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'getStreamKey', 'Ivs', Promise.resolve(result), false, mock)
  },
  getStreamKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'getStreamKey', 'Ivs', Promise.reject(result), true, mock)
  },
  getStreamSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'getStreamSession', 'Ivs', Promise.resolve(result), true, mock)
  },
  getStreamSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'getStreamSession', 'Ivs', Promise.resolve(result), false, mock)
  },
  getStreamSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'getStreamSession', 'Ivs', Promise.reject(result), true, mock)
  },
  importPlaybackKeyPair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'importPlaybackKeyPair', 'Ivs', Promise.resolve(result), true, mock)
  },
  importPlaybackKeyPairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'importPlaybackKeyPair', 'Ivs', Promise.resolve(result), false, mock)
  },
  importPlaybackKeyPairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'importPlaybackKeyPair', 'Ivs', Promise.reject(result), true, mock)
  },
  listChannels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listChannels', 'Ivs', Promise.resolve(result), true, mock)
  },
  listChannelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listChannels', 'Ivs', Promise.resolve(result), false, mock)
  },
  listChannelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listChannels', 'Ivs', Promise.reject(result), true, mock)
  },
  listPlaybackKeyPairs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listPlaybackKeyPairs', 'Ivs', Promise.resolve(result), true, mock)
  },
  listPlaybackKeyPairsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listPlaybackKeyPairs', 'Ivs', Promise.resolve(result), false, mock)
  },
  listPlaybackKeyPairsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listPlaybackKeyPairs', 'Ivs', Promise.reject(result), true, mock)
  },
  listPlaybackRestrictionPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listPlaybackRestrictionPolicies', 'Ivs', Promise.resolve(result), true, mock)
  },
  listPlaybackRestrictionPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listPlaybackRestrictionPolicies', 'Ivs', Promise.resolve(result), false, mock)
  },
  listPlaybackRestrictionPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listPlaybackRestrictionPolicies', 'Ivs', Promise.reject(result), true, mock)
  },
  listRecordingConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listRecordingConfigurations', 'Ivs', Promise.resolve(result), true, mock)
  },
  listRecordingConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listRecordingConfigurations', 'Ivs', Promise.resolve(result), false, mock)
  },
  listRecordingConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listRecordingConfigurations', 'Ivs', Promise.reject(result), true, mock)
  },
  listStreamKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listStreamKeys', 'Ivs', Promise.resolve(result), true, mock)
  },
  listStreamKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listStreamKeys', 'Ivs', Promise.resolve(result), false, mock)
  },
  listStreamKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listStreamKeys', 'Ivs', Promise.reject(result), true, mock)
  },
  listStreamSessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listStreamSessions', 'Ivs', Promise.resolve(result), true, mock)
  },
  listStreamSessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listStreamSessions', 'Ivs', Promise.resolve(result), false, mock)
  },
  listStreamSessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listStreamSessions', 'Ivs', Promise.reject(result), true, mock)
  },
  listStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listStreams', 'Ivs', Promise.resolve(result), true, mock)
  },
  listStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listStreams', 'Ivs', Promise.resolve(result), false, mock)
  },
  listStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listStreams', 'Ivs', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listTagsForResource', 'Ivs', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listTagsForResource', 'Ivs', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'listTagsForResource', 'Ivs', Promise.reject(result), true, mock)
  },
  putMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'putMetadata', 'Ivs', Promise.resolve(result), true, mock)
  },
  putMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'putMetadata', 'Ivs', Promise.resolve(result), false, mock)
  },
  putMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'putMetadata', 'Ivs', Promise.reject(result), true, mock)
  },
  startViewerSessionRevocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'startViewerSessionRevocation', 'Ivs', Promise.resolve(result), true, mock)
  },
  startViewerSessionRevocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'startViewerSessionRevocation', 'Ivs', Promise.resolve(result), false, mock)
  },
  startViewerSessionRevocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'startViewerSessionRevocation', 'Ivs', Promise.reject(result), true, mock)
  },
  stopStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'stopStream', 'Ivs', Promise.resolve(result), true, mock)
  },
  stopStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'stopStream', 'Ivs', Promise.resolve(result), false, mock)
  },
  stopStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'stopStream', 'Ivs', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'tagResource', 'Ivs', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'tagResource', 'Ivs', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'tagResource', 'Ivs', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'untagResource', 'Ivs', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'untagResource', 'Ivs', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'untagResource', 'Ivs', Promise.reject(result), true, mock)
  },
  updateChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'updateChannel', 'Ivs', Promise.resolve(result), true, mock)
  },
  updateChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'updateChannel', 'Ivs', Promise.resolve(result), false, mock)
  },
  updateChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'updateChannel', 'Ivs', Promise.reject(result), true, mock)
  },
  updatePlaybackRestrictionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'updatePlaybackRestrictionPolicy', 'Ivs', Promise.resolve(result), true, mock)
  },
  updatePlaybackRestrictionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'updatePlaybackRestrictionPolicy', 'Ivs', Promise.resolve(result), false, mock)
  },
  updatePlaybackRestrictionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'updatePlaybackRestrictionPolicy', 'Ivs', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'send', 'IvsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'send', 'IvsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivs', 'send', 'IvsClient', Promise.reject(result), true, mock)
  }
}
