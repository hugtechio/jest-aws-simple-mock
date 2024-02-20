
/**
* @description mocks_v3:mockMediaPackage module is mocks for AWS-SDK V3
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
export const mockMediaPackage = {
  configureLogs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'configureLogs', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  configureLogsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'configureLogs', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  configureLogsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'configureLogs', 'MediaPackage', Promise.reject(result), true, mock)
  },
  createChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'createChannel', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  createChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'createChannel', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  createChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'createChannel', 'MediaPackage', Promise.reject(result), true, mock)
  },
  createHarvestJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'createHarvestJob', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  createHarvestJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'createHarvestJob', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  createHarvestJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'createHarvestJob', 'MediaPackage', Promise.reject(result), true, mock)
  },
  createOriginEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'createOriginEndpoint', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  createOriginEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'createOriginEndpoint', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  createOriginEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'createOriginEndpoint', 'MediaPackage', Promise.reject(result), true, mock)
  },
  deleteChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'deleteChannel', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  deleteChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'deleteChannel', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  deleteChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'deleteChannel', 'MediaPackage', Promise.reject(result), true, mock)
  },
  deleteOriginEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'deleteOriginEndpoint', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  deleteOriginEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'deleteOriginEndpoint', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  deleteOriginEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'deleteOriginEndpoint', 'MediaPackage', Promise.reject(result), true, mock)
  },
  describeChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'describeChannel', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  describeChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'describeChannel', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  describeChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'describeChannel', 'MediaPackage', Promise.reject(result), true, mock)
  },
  describeHarvestJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'describeHarvestJob', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  describeHarvestJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'describeHarvestJob', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  describeHarvestJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'describeHarvestJob', 'MediaPackage', Promise.reject(result), true, mock)
  },
  describeOriginEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'describeOriginEndpoint', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  describeOriginEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'describeOriginEndpoint', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  describeOriginEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'describeOriginEndpoint', 'MediaPackage', Promise.reject(result), true, mock)
  },
  listChannels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'listChannels', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  listChannelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'listChannels', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  listChannelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'listChannels', 'MediaPackage', Promise.reject(result), true, mock)
  },
  listHarvestJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'listHarvestJobs', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  listHarvestJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'listHarvestJobs', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  listHarvestJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'listHarvestJobs', 'MediaPackage', Promise.reject(result), true, mock)
  },
  listOriginEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'listOriginEndpoints', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  listOriginEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'listOriginEndpoints', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  listOriginEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'listOriginEndpoints', 'MediaPackage', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'listTagsForResource', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'listTagsForResource', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'listTagsForResource', 'MediaPackage', Promise.reject(result), true, mock)
  },
  rotateChannelCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'rotateChannelCredentials', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  rotateChannelCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'rotateChannelCredentials', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  rotateChannelCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'rotateChannelCredentials', 'MediaPackage', Promise.reject(result), true, mock)
  },
  rotateIngestEndpointCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'rotateIngestEndpointCredentials', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  rotateIngestEndpointCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'rotateIngestEndpointCredentials', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  rotateIngestEndpointCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'rotateIngestEndpointCredentials', 'MediaPackage', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'tagResource', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'tagResource', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'tagResource', 'MediaPackage', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'untagResource', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'untagResource', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'untagResource', 'MediaPackage', Promise.reject(result), true, mock)
  },
  updateChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'updateChannel', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  updateChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'updateChannel', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  updateChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'updateChannel', 'MediaPackage', Promise.reject(result), true, mock)
  },
  updateOriginEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'updateOriginEndpoint', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  updateOriginEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'updateOriginEndpoint', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  updateOriginEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'updateOriginEndpoint', 'MediaPackage', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'send', 'MediaPackageClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'send', 'MediaPackageClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage', 'send', 'MediaPackageClient', Promise.reject(result), true, mock)
  }
}
