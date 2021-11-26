
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
  export const mockLexRuntimeService = {
  deleteSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSession', 'LexRuntimeService', Promise.resolve(result), true, mock)
  },
  deleteSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSession', 'LexRuntimeService', Promise.resolve(result), false, mock)
  },
  deleteSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSession', 'LexRuntimeService', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LexRuntimeService', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LexRuntimeService', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LexRuntimeService', Promise.reject(result), true, mock)
  },
  getSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSession', 'LexRuntimeService', Promise.resolve(result), true, mock)
  },
  getSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSession', 'LexRuntimeService', Promise.resolve(result), false, mock)
  },
  getSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSession', 'LexRuntimeService', Promise.reject(result), true, mock)
  },
  postContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postContent', 'LexRuntimeService', Promise.resolve(result), true, mock)
  },
  postContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postContent', 'LexRuntimeService', Promise.resolve(result), false, mock)
  },
  postContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postContent', 'LexRuntimeService', Promise.reject(result), true, mock)
  },
  postText: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postText', 'LexRuntimeService', Promise.resolve(result), true, mock)
  },
  postTextAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postText', 'LexRuntimeService', Promise.resolve(result), false, mock)
  },
  postTextThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postText', 'LexRuntimeService', Promise.reject(result), true, mock)
  },
  putSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSession', 'LexRuntimeService', Promise.resolve(result), true, mock)
  },
  putSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSession', 'LexRuntimeService', Promise.resolve(result), false, mock)
  },
  putSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putSession', 'LexRuntimeService', Promise.reject(result), true, mock)
  },
}
