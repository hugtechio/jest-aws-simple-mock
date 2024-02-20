
/**
* @description mocks_v3:mockMediaPackageV2 module is mocks for AWS-SDK V3
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
export const mockMediaPackageV2 = {
  createChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'createChannel', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  createChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'createChannel', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  createChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'createChannel', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  createChannelGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'createChannelGroup', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  createChannelGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'createChannelGroup', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  createChannelGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'createChannelGroup', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  createOriginEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'createOriginEndpoint', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  createOriginEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'createOriginEndpoint', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  createOriginEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'createOriginEndpoint', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  deleteChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'deleteChannel', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  deleteChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'deleteChannel', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  deleteChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'deleteChannel', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  deleteChannelGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'deleteChannelGroup', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  deleteChannelGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'deleteChannelGroup', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  deleteChannelGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'deleteChannelGroup', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  deleteChannelPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'deleteChannelPolicy', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  deleteChannelPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'deleteChannelPolicy', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  deleteChannelPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'deleteChannelPolicy', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  deleteOriginEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'deleteOriginEndpoint', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  deleteOriginEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'deleteOriginEndpoint', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  deleteOriginEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'deleteOriginEndpoint', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  deleteOriginEndpointPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'deleteOriginEndpointPolicy', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  deleteOriginEndpointPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'deleteOriginEndpointPolicy', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  deleteOriginEndpointPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'deleteOriginEndpointPolicy', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  getChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'getChannel', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  getChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'getChannel', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  getChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'getChannel', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  getChannelGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'getChannelGroup', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  getChannelGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'getChannelGroup', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  getChannelGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'getChannelGroup', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  getChannelPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'getChannelPolicy', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  getChannelPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'getChannelPolicy', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  getChannelPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'getChannelPolicy', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  getOriginEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'getOriginEndpoint', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  getOriginEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'getOriginEndpoint', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  getOriginEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'getOriginEndpoint', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  getOriginEndpointPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'getOriginEndpointPolicy', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  getOriginEndpointPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'getOriginEndpointPolicy', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  getOriginEndpointPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'getOriginEndpointPolicy', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  listChannelGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'listChannelGroups', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  listChannelGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'listChannelGroups', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  listChannelGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'listChannelGroups', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  listChannels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'listChannels', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  listChannelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'listChannels', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  listChannelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'listChannels', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  listOriginEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'listOriginEndpoints', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  listOriginEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'listOriginEndpoints', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  listOriginEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'listOriginEndpoints', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'listTagsForResource', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'listTagsForResource', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'listTagsForResource', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  putChannelPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'putChannelPolicy', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  putChannelPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'putChannelPolicy', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  putChannelPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'putChannelPolicy', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  putOriginEndpointPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'putOriginEndpointPolicy', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  putOriginEndpointPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'putOriginEndpointPolicy', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  putOriginEndpointPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'putOriginEndpointPolicy', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'tagResource', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'tagResource', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'tagResource', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'untagResource', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'untagResource', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'untagResource', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  updateChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'updateChannel', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  updateChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'updateChannel', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  updateChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'updateChannel', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  updateChannelGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'updateChannelGroup', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  updateChannelGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'updateChannelGroup', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  updateChannelGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'updateChannelGroup', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  updateOriginEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'updateOriginEndpoint', 'MediaPackageV2', Promise.resolve(result), true, mock)
  },
  updateOriginEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'updateOriginEndpoint', 'MediaPackageV2', Promise.resolve(result), false, mock)
  },
  updateOriginEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'updateOriginEndpoint', 'MediaPackageV2', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'send', 'MediaPackageV2Client', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'send', 'MediaPackageV2Client', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackagev2', 'send', 'MediaPackageV2Client', Promise.reject(result), true, mock)
  }
}
