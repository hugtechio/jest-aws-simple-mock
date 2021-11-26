
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
  export const mockIvs = {
  batchGetChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetChannel', 'Ivs', Promise.resolve(result), true, mock)
  },
  batchGetChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetChannel', 'Ivs', Promise.resolve(result), false, mock)
  },
  batchGetChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetChannel', 'Ivs', Promise.reject(result), true, mock)
  },
  batchGetStreamKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetStreamKey', 'Ivs', Promise.resolve(result), true, mock)
  },
  batchGetStreamKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetStreamKey', 'Ivs', Promise.resolve(result), false, mock)
  },
  batchGetStreamKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetStreamKey', 'Ivs', Promise.reject(result), true, mock)
  },
  createChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannel', 'Ivs', Promise.resolve(result), true, mock)
  },
  createChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannel', 'Ivs', Promise.resolve(result), false, mock)
  },
  createChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannel', 'Ivs', Promise.reject(result), true, mock)
  },
  createRecordingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRecordingConfiguration', 'Ivs', Promise.resolve(result), true, mock)
  },
  createRecordingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRecordingConfiguration', 'Ivs', Promise.resolve(result), false, mock)
  },
  createRecordingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRecordingConfiguration', 'Ivs', Promise.reject(result), true, mock)
  },
  createStreamKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamKey', 'Ivs', Promise.resolve(result), true, mock)
  },
  createStreamKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamKey', 'Ivs', Promise.resolve(result), false, mock)
  },
  createStreamKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamKey', 'Ivs', Promise.reject(result), true, mock)
  },
  deleteChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannel', 'Ivs', Promise.resolve(result), true, mock)
  },
  deleteChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannel', 'Ivs', Promise.resolve(result), false, mock)
  },
  deleteChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannel', 'Ivs', Promise.reject(result), true, mock)
  },
  deletePlaybackKeyPair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePlaybackKeyPair', 'Ivs', Promise.resolve(result), true, mock)
  },
  deletePlaybackKeyPairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePlaybackKeyPair', 'Ivs', Promise.resolve(result), false, mock)
  },
  deletePlaybackKeyPairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePlaybackKeyPair', 'Ivs', Promise.reject(result), true, mock)
  },
  deleteRecordingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRecordingConfiguration', 'Ivs', Promise.resolve(result), true, mock)
  },
  deleteRecordingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRecordingConfiguration', 'Ivs', Promise.resolve(result), false, mock)
  },
  deleteRecordingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRecordingConfiguration', 'Ivs', Promise.reject(result), true, mock)
  },
  deleteStreamKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStreamKey', 'Ivs', Promise.resolve(result), true, mock)
  },
  deleteStreamKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStreamKey', 'Ivs', Promise.resolve(result), false, mock)
  },
  deleteStreamKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStreamKey', 'Ivs', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Ivs', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Ivs', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Ivs', Promise.reject(result), true, mock)
  },
  getChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getChannel', 'Ivs', Promise.resolve(result), true, mock)
  },
  getChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getChannel', 'Ivs', Promise.resolve(result), false, mock)
  },
  getChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getChannel', 'Ivs', Promise.reject(result), true, mock)
  },
  getPlaybackKeyPair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPlaybackKeyPair', 'Ivs', Promise.resolve(result), true, mock)
  },
  getPlaybackKeyPairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPlaybackKeyPair', 'Ivs', Promise.resolve(result), false, mock)
  },
  getPlaybackKeyPairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPlaybackKeyPair', 'Ivs', Promise.reject(result), true, mock)
  },
  getRecordingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecordingConfiguration', 'Ivs', Promise.resolve(result), true, mock)
  },
  getRecordingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecordingConfiguration', 'Ivs', Promise.resolve(result), false, mock)
  },
  getRecordingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecordingConfiguration', 'Ivs', Promise.reject(result), true, mock)
  },
  getStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStream', 'Ivs', Promise.resolve(result), true, mock)
  },
  getStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStream', 'Ivs', Promise.resolve(result), false, mock)
  },
  getStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStream', 'Ivs', Promise.reject(result), true, mock)
  },
  getStreamKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStreamKey', 'Ivs', Promise.resolve(result), true, mock)
  },
  getStreamKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStreamKey', 'Ivs', Promise.resolve(result), false, mock)
  },
  getStreamKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStreamKey', 'Ivs', Promise.reject(result), true, mock)
  },
  importPlaybackKeyPair: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importPlaybackKeyPair', 'Ivs', Promise.resolve(result), true, mock)
  },
  importPlaybackKeyPairAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importPlaybackKeyPair', 'Ivs', Promise.resolve(result), false, mock)
  },
  importPlaybackKeyPairThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importPlaybackKeyPair', 'Ivs', Promise.reject(result), true, mock)
  },
  listChannels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannels', 'Ivs', Promise.resolve(result), true, mock)
  },
  listChannelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannels', 'Ivs', Promise.resolve(result), false, mock)
  },
  listChannelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannels', 'Ivs', Promise.reject(result), true, mock)
  },
  listPlaybackKeyPairs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPlaybackKeyPairs', 'Ivs', Promise.resolve(result), true, mock)
  },
  listPlaybackKeyPairsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPlaybackKeyPairs', 'Ivs', Promise.resolve(result), false, mock)
  },
  listPlaybackKeyPairsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPlaybackKeyPairs', 'Ivs', Promise.reject(result), true, mock)
  },
  listRecordingConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecordingConfigurations', 'Ivs', Promise.resolve(result), true, mock)
  },
  listRecordingConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecordingConfigurations', 'Ivs', Promise.resolve(result), false, mock)
  },
  listRecordingConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecordingConfigurations', 'Ivs', Promise.reject(result), true, mock)
  },
  listStreamKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreamKeys', 'Ivs', Promise.resolve(result), true, mock)
  },
  listStreamKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreamKeys', 'Ivs', Promise.resolve(result), false, mock)
  },
  listStreamKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreamKeys', 'Ivs', Promise.reject(result), true, mock)
  },
  listStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreams', 'Ivs', Promise.resolve(result), true, mock)
  },
  listStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreams', 'Ivs', Promise.resolve(result), false, mock)
  },
  listStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStreams', 'Ivs', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Ivs', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Ivs', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Ivs', Promise.reject(result), true, mock)
  },
  putMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMetadata', 'Ivs', Promise.resolve(result), true, mock)
  },
  putMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMetadata', 'Ivs', Promise.resolve(result), false, mock)
  },
  putMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putMetadata', 'Ivs', Promise.reject(result), true, mock)
  },
  stopStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopStream', 'Ivs', Promise.resolve(result), true, mock)
  },
  stopStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopStream', 'Ivs', Promise.resolve(result), false, mock)
  },
  stopStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopStream', 'Ivs', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Ivs', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Ivs', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Ivs', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Ivs', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Ivs', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Ivs', Promise.reject(result), true, mock)
  },
  updateChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannel', 'Ivs', Promise.resolve(result), true, mock)
  },
  updateChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannel', 'Ivs', Promise.resolve(result), false, mock)
  },
  updateChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannel', 'Ivs', Promise.reject(result), true, mock)
  },
}
