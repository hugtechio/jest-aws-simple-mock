
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
  export const mockSSOOIDC = {
  createToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createToken', 'SSOOIDC', Promise.resolve(result), true, mock)
  },
  createTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createToken', 'SSOOIDC', Promise.resolve(result), false, mock)
  },
  createTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createToken', 'SSOOIDC', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSOOIDC', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSOOIDC', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSOOIDC', Promise.reject(result), true, mock)
  },
  registerClient: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerClient', 'SSOOIDC', Promise.resolve(result), true, mock)
  },
  registerClientAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerClient', 'SSOOIDC', Promise.resolve(result), false, mock)
  },
  registerClientThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerClient', 'SSOOIDC', Promise.reject(result), true, mock)
  },
  startDeviceAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDeviceAuthorization', 'SSOOIDC', Promise.resolve(result), true, mock)
  },
  startDeviceAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDeviceAuthorization', 'SSOOIDC', Promise.resolve(result), false, mock)
  },
  startDeviceAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDeviceAuthorization', 'SSOOIDC', Promise.reject(result), true, mock)
  },
}
