
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
  export const mockWorkMailMessageFlow = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WorkMailMessageFlow', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WorkMailMessageFlow', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WorkMailMessageFlow', Promise.reject(result), true, mock)
  },
  getRawMessageContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRawMessageContent', 'WorkMailMessageFlow', Promise.resolve(result), true, mock)
  },
  getRawMessageContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRawMessageContent', 'WorkMailMessageFlow', Promise.resolve(result), false, mock)
  },
  getRawMessageContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRawMessageContent', 'WorkMailMessageFlow', Promise.reject(result), true, mock)
  },
  putRawMessageContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRawMessageContent', 'WorkMailMessageFlow', Promise.resolve(result), true, mock)
  },
  putRawMessageContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRawMessageContent', 'WorkMailMessageFlow', Promise.resolve(result), false, mock)
  },
  putRawMessageContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRawMessageContent', 'WorkMailMessageFlow', Promise.reject(result), true, mock)
  },
}
