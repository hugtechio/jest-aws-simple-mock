
/**
* @description mocks_v3:mockKinesisVideoWebRTCStorage module is mocks for AWS-SDK V3
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
export const mockKinesisVideoWebRTCStorage = {
  joinStorageSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-webrtc-storage', 'joinStorageSession', 'KinesisVideoWebRTCStorage', Promise.resolve(result), true, mock)
  },
  joinStorageSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-webrtc-storage', 'joinStorageSession', 'KinesisVideoWebRTCStorage', Promise.resolve(result), false, mock)
  },
  joinStorageSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-webrtc-storage', 'joinStorageSession', 'KinesisVideoWebRTCStorage', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-webrtc-storage', 'send', 'KinesisVideoWebRTCStorageClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-webrtc-storage', 'send', 'KinesisVideoWebRTCStorageClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-video-webrtc-storage', 'send', 'KinesisVideoWebRTCStorageClient', Promise.reject(result), true, mock)
  }
}
