
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
  export const mockConnectParticipant = {
  completeAttachmentUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeAttachmentUpload', 'ConnectParticipant', Promise.resolve(result), true, mock)
  },
  completeAttachmentUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeAttachmentUpload', 'ConnectParticipant', Promise.resolve(result), false, mock)
  },
  completeAttachmentUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeAttachmentUpload', 'ConnectParticipant', Promise.reject(result), true, mock)
  },
  createParticipantConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createParticipantConnection', 'ConnectParticipant', Promise.resolve(result), true, mock)
  },
  createParticipantConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createParticipantConnection', 'ConnectParticipant', Promise.resolve(result), false, mock)
  },
  createParticipantConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createParticipantConnection', 'ConnectParticipant', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ConnectParticipant', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ConnectParticipant', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ConnectParticipant', Promise.reject(result), true, mock)
  },
  disconnectParticipant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disconnectParticipant', 'ConnectParticipant', Promise.resolve(result), true, mock)
  },
  disconnectParticipantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disconnectParticipant', 'ConnectParticipant', Promise.resolve(result), false, mock)
  },
  disconnectParticipantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disconnectParticipant', 'ConnectParticipant', Promise.reject(result), true, mock)
  },
  getAttachment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAttachment', 'ConnectParticipant', Promise.resolve(result), true, mock)
  },
  getAttachmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAttachment', 'ConnectParticipant', Promise.resolve(result), false, mock)
  },
  getAttachmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAttachment', 'ConnectParticipant', Promise.reject(result), true, mock)
  },
  getTranscript: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTranscript', 'ConnectParticipant', Promise.resolve(result), true, mock)
  },
  getTranscriptAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTranscript', 'ConnectParticipant', Promise.resolve(result), false, mock)
  },
  getTranscriptThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTranscript', 'ConnectParticipant', Promise.reject(result), true, mock)
  },
  sendEvent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendEvent', 'ConnectParticipant', Promise.resolve(result), true, mock)
  },
  sendEventAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendEvent', 'ConnectParticipant', Promise.resolve(result), false, mock)
  },
  sendEventThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendEvent', 'ConnectParticipant', Promise.reject(result), true, mock)
  },
  sendMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendMessage', 'ConnectParticipant', Promise.resolve(result), true, mock)
  },
  sendMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendMessage', 'ConnectParticipant', Promise.resolve(result), false, mock)
  },
  sendMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendMessage', 'ConnectParticipant', Promise.reject(result), true, mock)
  },
  startAttachmentUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAttachmentUpload', 'ConnectParticipant', Promise.resolve(result), true, mock)
  },
  startAttachmentUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAttachmentUpload', 'ConnectParticipant', Promise.resolve(result), false, mock)
  },
  startAttachmentUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAttachmentUpload', 'ConnectParticipant', Promise.reject(result), true, mock)
  },
}
