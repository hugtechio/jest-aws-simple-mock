
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
  export const mockAccount = {
  deleteAlternateContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlternateContact', 'Account', Promise.resolve(result), true, mock)
  },
  deleteAlternateContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlternateContact', 'Account', Promise.resolve(result), false, mock)
  },
  deleteAlternateContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAlternateContact', 'Account', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Account', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Account', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Account', Promise.reject(result), true, mock)
  },
  getAlternateContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAlternateContact', 'Account', Promise.resolve(result), true, mock)
  },
  getAlternateContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAlternateContact', 'Account', Promise.resolve(result), false, mock)
  },
  getAlternateContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAlternateContact', 'Account', Promise.reject(result), true, mock)
  },
  putAlternateContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAlternateContact', 'Account', Promise.resolve(result), true, mock)
  },
  putAlternateContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAlternateContact', 'Account', Promise.resolve(result), false, mock)
  },
  putAlternateContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAlternateContact', 'Account', Promise.reject(result), true, mock)
  },
}
