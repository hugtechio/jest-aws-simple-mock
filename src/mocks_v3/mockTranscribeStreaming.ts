
/**
* @description mocks_v3:mockTranscribeStreaming module is mocks for AWS-SDK V3
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

  export const mockTranscribeStreaming = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe-streaming', 'destroy', 'TranscribeStreaming', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe-streaming', 'destroy', 'TranscribeStreaming', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe-streaming', 'destroy', 'TranscribeStreaming', Promise.reject(result), true, mock)
  },
  startMedicalStreamTranscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe-streaming', 'startMedicalStreamTranscription', 'TranscribeStreaming', Promise.resolve(result), true, mock)
  },
  startMedicalStreamTranscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe-streaming', 'startMedicalStreamTranscription', 'TranscribeStreaming', Promise.resolve(result), false, mock)
  },
  startMedicalStreamTranscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe-streaming', 'startMedicalStreamTranscription', 'TranscribeStreaming', Promise.reject(result), true, mock)
  },
  startStreamTranscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe-streaming', 'startStreamTranscription', 'TranscribeStreaming', Promise.resolve(result), true, mock)
  },
  startStreamTranscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe-streaming', 'startStreamTranscription', 'TranscribeStreaming', Promise.resolve(result), false, mock)
  },
  startStreamTranscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe-streaming', 'startStreamTranscription', 'TranscribeStreaming', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe-streaming', 'send', 'TranscribeStreamingClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe-streaming', 'send', 'TranscribeStreamingClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-transcribe-streaming', 'send', 'TranscribeStreamingClient', Promise.reject(result), true, mock)
  }
}