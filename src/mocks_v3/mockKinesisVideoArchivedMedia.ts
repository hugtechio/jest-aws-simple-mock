
/**
* @description mocks_v3:mockKinesisVideoArchivedMedia module is mocks for AWS-SDK V3
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
export const mockKinesisVideoArchivedMedia = {
  getClip: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-archived-media', 'getClip', 'KinesisVideoArchivedMedia', Promise.resolve(result), true, mock)
  },
  getClipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-archived-media', 'getClip', 'KinesisVideoArchivedMedia', Promise.resolve(result), false, mock)
  },
  getClipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-archived-media', 'getClip', 'KinesisVideoArchivedMedia', Promise.reject(result), true, mock)
  },
  getDASHStreamingSessionURL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-archived-media', 'getDASHStreamingSessionURL', 'KinesisVideoArchivedMedia', Promise.resolve(result), true, mock)
  },
  getDASHStreamingSessionURLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-archived-media', 'getDASHStreamingSessionURL', 'KinesisVideoArchivedMedia', Promise.resolve(result), false, mock)
  },
  getDASHStreamingSessionURLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-archived-media', 'getDASHStreamingSessionURL', 'KinesisVideoArchivedMedia', Promise.reject(result), true, mock)
  },
  getHLSStreamingSessionURL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-archived-media', 'getHLSStreamingSessionURL', 'KinesisVideoArchivedMedia', Promise.resolve(result), true, mock)
  },
  getHLSStreamingSessionURLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-archived-media', 'getHLSStreamingSessionURL', 'KinesisVideoArchivedMedia', Promise.resolve(result), false, mock)
  },
  getHLSStreamingSessionURLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-archived-media', 'getHLSStreamingSessionURL', 'KinesisVideoArchivedMedia', Promise.reject(result), true, mock)
  },
  getImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-archived-media', 'getImages', 'KinesisVideoArchivedMedia', Promise.resolve(result), true, mock)
  },
  getImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-archived-media', 'getImages', 'KinesisVideoArchivedMedia', Promise.resolve(result), false, mock)
  },
  getImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-archived-media', 'getImages', 'KinesisVideoArchivedMedia', Promise.reject(result), true, mock)
  },
  getMediaForFragmentList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-archived-media', 'getMediaForFragmentList', 'KinesisVideoArchivedMedia', Promise.resolve(result), true, mock)
  },
  getMediaForFragmentListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-archived-media', 'getMediaForFragmentList', 'KinesisVideoArchivedMedia', Promise.resolve(result), false, mock)
  },
  getMediaForFragmentListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-archived-media', 'getMediaForFragmentList', 'KinesisVideoArchivedMedia', Promise.reject(result), true, mock)
  },
  listFragments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-archived-media', 'listFragments', 'KinesisVideoArchivedMedia', Promise.resolve(result), true, mock)
  },
  listFragmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-archived-media', 'listFragments', 'KinesisVideoArchivedMedia', Promise.resolve(result), false, mock)
  },
  listFragmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-archived-media', 'listFragments', 'KinesisVideoArchivedMedia', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-archived-media', 'send', 'KinesisVideoArchivedMediaClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-archived-media', 'send', 'KinesisVideoArchivedMediaClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-archived-media', 'send', 'KinesisVideoArchivedMediaClient', Promise.reject(result), true, mock)
  }
}
