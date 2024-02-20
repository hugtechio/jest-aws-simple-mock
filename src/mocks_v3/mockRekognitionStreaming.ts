
/**
* @description mocks_v3:mockRekognitionStreaming module is mocks for AWS-SDK V3
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
export const mockRekognitionStreaming = {
  startFaceLivenessSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognitionstreaming', 'startFaceLivenessSession', 'RekognitionStreaming', Promise.resolve(result), true, mock)
  },
  startFaceLivenessSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognitionstreaming', 'startFaceLivenessSession', 'RekognitionStreaming', Promise.resolve(result), false, mock)
  },
  startFaceLivenessSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognitionstreaming', 'startFaceLivenessSession', 'RekognitionStreaming', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognitionstreaming', 'send', 'RekognitionStreamingClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognitionstreaming', 'send', 'RekognitionStreamingClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rekognitionstreaming', 'send', 'RekognitionStreamingClient', Promise.reject(result), true, mock)
  }
}
