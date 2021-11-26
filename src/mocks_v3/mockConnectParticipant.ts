
/**
* @description mocks_v3:mockConnectParticipant module is mocks for AWS-SDK V3
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

  export const mockConnectParticipant = {
  completeAttachmentUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'completeAttachmentUpload', 'ConnectParticipant', Promise.resolve(result), true, mock)
  },
  completeAttachmentUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'completeAttachmentUpload', 'ConnectParticipant', Promise.resolve(result), false, mock)
  },
  completeAttachmentUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'completeAttachmentUpload', 'ConnectParticipant', Promise.reject(result), true, mock)
  },
  createParticipantConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'createParticipantConnection', 'ConnectParticipant', Promise.resolve(result), true, mock)
  },
  createParticipantConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'createParticipantConnection', 'ConnectParticipant', Promise.resolve(result), false, mock)
  },
  createParticipantConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'createParticipantConnection', 'ConnectParticipant', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'destroy', 'ConnectParticipant', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'destroy', 'ConnectParticipant', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'destroy', 'ConnectParticipant', Promise.reject(result), true, mock)
  },
  disconnectParticipant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'disconnectParticipant', 'ConnectParticipant', Promise.resolve(result), true, mock)
  },
  disconnectParticipantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'disconnectParticipant', 'ConnectParticipant', Promise.resolve(result), false, mock)
  },
  disconnectParticipantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'disconnectParticipant', 'ConnectParticipant', Promise.reject(result), true, mock)
  },
  getAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'getAttachment', 'ConnectParticipant', Promise.resolve(result), true, mock)
  },
  getAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'getAttachment', 'ConnectParticipant', Promise.resolve(result), false, mock)
  },
  getAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'getAttachment', 'ConnectParticipant', Promise.reject(result), true, mock)
  },
  getTranscript: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'getTranscript', 'ConnectParticipant', Promise.resolve(result), true, mock)
  },
  getTranscriptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'getTranscript', 'ConnectParticipant', Promise.resolve(result), false, mock)
  },
  getTranscriptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'getTranscript', 'ConnectParticipant', Promise.reject(result), true, mock)
  },
  sendEvent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'sendEvent', 'ConnectParticipant', Promise.resolve(result), true, mock)
  },
  sendEventAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'sendEvent', 'ConnectParticipant', Promise.resolve(result), false, mock)
  },
  sendEventThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'sendEvent', 'ConnectParticipant', Promise.reject(result), true, mock)
  },
  sendMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'sendMessage', 'ConnectParticipant', Promise.resolve(result), true, mock)
  },
  sendMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'sendMessage', 'ConnectParticipant', Promise.resolve(result), false, mock)
  },
  sendMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'sendMessage', 'ConnectParticipant', Promise.reject(result), true, mock)
  },
  startAttachmentUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'startAttachmentUpload', 'ConnectParticipant', Promise.resolve(result), true, mock)
  },
  startAttachmentUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'startAttachmentUpload', 'ConnectParticipant', Promise.resolve(result), false, mock)
  },
  startAttachmentUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'startAttachmentUpload', 'ConnectParticipant', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'send', 'ConnectParticipantClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'send', 'ConnectParticipantClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-connectparticipant', 'send', 'ConnectParticipantClient', Promise.reject(result), true, mock)
  }
}