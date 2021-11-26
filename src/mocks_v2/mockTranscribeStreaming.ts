
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
  export const mockTranscribeStreaming = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'TranscribeStreaming', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'TranscribeStreaming', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'TranscribeStreaming', Promise.reject(result), true, mock)
  },
  startMedicalStreamTranscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMedicalStreamTranscription', 'TranscribeStreaming', Promise.resolve(result), true, mock)
  },
  startMedicalStreamTranscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMedicalStreamTranscription', 'TranscribeStreaming', Promise.resolve(result), false, mock)
  },
  startMedicalStreamTranscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMedicalStreamTranscription', 'TranscribeStreaming', Promise.reject(result), true, mock)
  },
  startStreamTranscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startStreamTranscription', 'TranscribeStreaming', Promise.resolve(result), true, mock)
  },
  startStreamTranscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startStreamTranscription', 'TranscribeStreaming', Promise.resolve(result), false, mock)
  },
  startStreamTranscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startStreamTranscription', 'TranscribeStreaming', Promise.reject(result), true, mock)
  },
}