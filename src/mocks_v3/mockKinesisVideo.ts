
/**
* @description mocks_v3:mockKinesisVideo module is mocks for AWS-SDK V3
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

  export const mockKinesisVideo = {
  createSignalingChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'createSignalingChannel', 'KinesisVideo', Promise.resolve(result), true, mock)
  },
  createSignalingChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'createSignalingChannel', 'KinesisVideo', Promise.resolve(result), false, mock)
  },
  createSignalingChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'createSignalingChannel', 'KinesisVideo', Promise.reject(result), true, mock)
  },
  createStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'createStream', 'KinesisVideo', Promise.resolve(result), true, mock)
  },
  createStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'createStream', 'KinesisVideo', Promise.resolve(result), false, mock)
  },
  createStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'createStream', 'KinesisVideo', Promise.reject(result), true, mock)
  },
  deleteSignalingChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'deleteSignalingChannel', 'KinesisVideo', Promise.resolve(result), true, mock)
  },
  deleteSignalingChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'deleteSignalingChannel', 'KinesisVideo', Promise.resolve(result), false, mock)
  },
  deleteSignalingChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'deleteSignalingChannel', 'KinesisVideo', Promise.reject(result), true, mock)
  },
  deleteStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'deleteStream', 'KinesisVideo', Promise.resolve(result), true, mock)
  },
  deleteStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'deleteStream', 'KinesisVideo', Promise.resolve(result), false, mock)
  },
  deleteStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'deleteStream', 'KinesisVideo', Promise.reject(result), true, mock)
  },
  describeSignalingChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'describeSignalingChannel', 'KinesisVideo', Promise.resolve(result), true, mock)
  },
  describeSignalingChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'describeSignalingChannel', 'KinesisVideo', Promise.resolve(result), false, mock)
  },
  describeSignalingChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'describeSignalingChannel', 'KinesisVideo', Promise.reject(result), true, mock)
  },
  describeStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'describeStream', 'KinesisVideo', Promise.resolve(result), true, mock)
  },
  describeStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'describeStream', 'KinesisVideo', Promise.resolve(result), false, mock)
  },
  describeStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'describeStream', 'KinesisVideo', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'destroy', 'KinesisVideo', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'destroy', 'KinesisVideo', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'destroy', 'KinesisVideo', Promise.reject(result), true, mock)
  },
  getDataEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'getDataEndpoint', 'KinesisVideo', Promise.resolve(result), true, mock)
  },
  getDataEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'getDataEndpoint', 'KinesisVideo', Promise.resolve(result), false, mock)
  },
  getDataEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'getDataEndpoint', 'KinesisVideo', Promise.reject(result), true, mock)
  },
  getSignalingChannelEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'getSignalingChannelEndpoint', 'KinesisVideo', Promise.resolve(result), true, mock)
  },
  getSignalingChannelEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'getSignalingChannelEndpoint', 'KinesisVideo', Promise.resolve(result), false, mock)
  },
  getSignalingChannelEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'getSignalingChannelEndpoint', 'KinesisVideo', Promise.reject(result), true, mock)
  },
  listSignalingChannels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'listSignalingChannels', 'KinesisVideo', Promise.resolve(result), true, mock)
  },
  listSignalingChannelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'listSignalingChannels', 'KinesisVideo', Promise.resolve(result), false, mock)
  },
  listSignalingChannelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'listSignalingChannels', 'KinesisVideo', Promise.reject(result), true, mock)
  },
  listStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'listStreams', 'KinesisVideo', Promise.resolve(result), true, mock)
  },
  listStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'listStreams', 'KinesisVideo', Promise.resolve(result), false, mock)
  },
  listStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'listStreams', 'KinesisVideo', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'listTagsForResource', 'KinesisVideo', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'listTagsForResource', 'KinesisVideo', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'listTagsForResource', 'KinesisVideo', Promise.reject(result), true, mock)
  },
  listTagsForStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'listTagsForStream', 'KinesisVideo', Promise.resolve(result), true, mock)
  },
  listTagsForStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'listTagsForStream', 'KinesisVideo', Promise.resolve(result), false, mock)
  },
  listTagsForStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'listTagsForStream', 'KinesisVideo', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'tagResource', 'KinesisVideo', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'tagResource', 'KinesisVideo', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'tagResource', 'KinesisVideo', Promise.reject(result), true, mock)
  },
  tagStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'tagStream', 'KinesisVideo', Promise.resolve(result), true, mock)
  },
  tagStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'tagStream', 'KinesisVideo', Promise.resolve(result), false, mock)
  },
  tagStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'tagStream', 'KinesisVideo', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'untagResource', 'KinesisVideo', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'untagResource', 'KinesisVideo', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'untagResource', 'KinesisVideo', Promise.reject(result), true, mock)
  },
  untagStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'untagStream', 'KinesisVideo', Promise.resolve(result), true, mock)
  },
  untagStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'untagStream', 'KinesisVideo', Promise.resolve(result), false, mock)
  },
  untagStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'untagStream', 'KinesisVideo', Promise.reject(result), true, mock)
  },
  updateDataRetention: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'updateDataRetention', 'KinesisVideo', Promise.resolve(result), true, mock)
  },
  updateDataRetentionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'updateDataRetention', 'KinesisVideo', Promise.resolve(result), false, mock)
  },
  updateDataRetentionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'updateDataRetention', 'KinesisVideo', Promise.reject(result), true, mock)
  },
  updateSignalingChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'updateSignalingChannel', 'KinesisVideo', Promise.resolve(result), true, mock)
  },
  updateSignalingChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'updateSignalingChannel', 'KinesisVideo', Promise.resolve(result), false, mock)
  },
  updateSignalingChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'updateSignalingChannel', 'KinesisVideo', Promise.reject(result), true, mock)
  },
  updateStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'updateStream', 'KinesisVideo', Promise.resolve(result), true, mock)
  },
  updateStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'updateStream', 'KinesisVideo', Promise.resolve(result), false, mock)
  },
  updateStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'updateStream', 'KinesisVideo', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'send', 'KinesisVideoClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'send', 'KinesisVideoClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video', 'send', 'KinesisVideoClient', Promise.reject(result), true, mock)
  }
}