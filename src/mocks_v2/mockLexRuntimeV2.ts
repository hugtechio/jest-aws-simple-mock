
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
  export const mockLexRuntimeV2 = {
  deleteSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSession', 'LexRuntimeV2', Promise.resolve(result), true, mock)
  },
  deleteSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSession', 'LexRuntimeV2', Promise.resolve(result), false, mock)
  },
  deleteSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSession', 'LexRuntimeV2', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LexRuntimeV2', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LexRuntimeV2', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LexRuntimeV2', Promise.reject(result), true, mock)
  },
  getSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSession', 'LexRuntimeV2', Promise.resolve(result), true, mock)
  },
  getSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSession', 'LexRuntimeV2', Promise.resolve(result), false, mock)
  },
  getSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSession', 'LexRuntimeV2', Promise.reject(result), true, mock)
  },
  putSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSession', 'LexRuntimeV2', Promise.resolve(result), true, mock)
  },
  putSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSession', 'LexRuntimeV2', Promise.resolve(result), false, mock)
  },
  putSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSession', 'LexRuntimeV2', Promise.reject(result), true, mock)
  },
  recognizeText: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recognizeText', 'LexRuntimeV2', Promise.resolve(result), true, mock)
  },
  recognizeTextAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recognizeText', 'LexRuntimeV2', Promise.resolve(result), false, mock)
  },
  recognizeTextThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recognizeText', 'LexRuntimeV2', Promise.reject(result), true, mock)
  },
  recognizeUtterance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recognizeUtterance', 'LexRuntimeV2', Promise.resolve(result), true, mock)
  },
  recognizeUtteranceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recognizeUtterance', 'LexRuntimeV2', Promise.resolve(result), false, mock)
  },
  recognizeUtteranceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recognizeUtterance', 'LexRuntimeV2', Promise.reject(result), true, mock)
  },
  startConversation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startConversation', 'LexRuntimeV2', Promise.resolve(result), true, mock)
  },
  startConversationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startConversation', 'LexRuntimeV2', Promise.resolve(result), false, mock)
  },
  startConversationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startConversation', 'LexRuntimeV2', Promise.reject(result), true, mock)
  },
}
