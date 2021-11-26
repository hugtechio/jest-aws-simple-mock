
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
  export const mockSTS = {
  assumeRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('assumeRole', 'STS', Promise.resolve(result), true, mock)
  },
  assumeRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('assumeRole', 'STS', Promise.resolve(result), false, mock)
  },
  assumeRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('assumeRole', 'STS', Promise.reject(result), true, mock)
  },
  assumeRoleWithSAML: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('assumeRoleWithSAML', 'STS', Promise.resolve(result), true, mock)
  },
  assumeRoleWithSAMLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('assumeRoleWithSAML', 'STS', Promise.resolve(result), false, mock)
  },
  assumeRoleWithSAMLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('assumeRoleWithSAML', 'STS', Promise.reject(result), true, mock)
  },
  assumeRoleWithWebIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('assumeRoleWithWebIdentity', 'STS', Promise.resolve(result), true, mock)
  },
  assumeRoleWithWebIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('assumeRoleWithWebIdentity', 'STS', Promise.resolve(result), false, mock)
  },
  assumeRoleWithWebIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('assumeRoleWithWebIdentity', 'STS', Promise.reject(result), true, mock)
  },
  decodeAuthorizationMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('decodeAuthorizationMessage', 'STS', Promise.resolve(result), true, mock)
  },
  decodeAuthorizationMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('decodeAuthorizationMessage', 'STS', Promise.resolve(result), false, mock)
  },
  decodeAuthorizationMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('decodeAuthorizationMessage', 'STS', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'STS', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'STS', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'STS', Promise.reject(result), true, mock)
  },
  getAccessKeyInfo: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccessKeyInfo', 'STS', Promise.resolve(result), true, mock)
  },
  getAccessKeyInfoAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccessKeyInfo', 'STS', Promise.resolve(result), false, mock)
  },
  getAccessKeyInfoThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccessKeyInfo', 'STS', Promise.reject(result), true, mock)
  },
  getCallerIdentity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCallerIdentity', 'STS', Promise.resolve(result), true, mock)
  },
  getCallerIdentityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCallerIdentity', 'STS', Promise.resolve(result), false, mock)
  },
  getCallerIdentityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCallerIdentity', 'STS', Promise.reject(result), true, mock)
  },
  getFederationToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFederationToken', 'STS', Promise.resolve(result), true, mock)
  },
  getFederationTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFederationToken', 'STS', Promise.resolve(result), false, mock)
  },
  getFederationTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFederationToken', 'STS', Promise.reject(result), true, mock)
  },
  getSessionToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSessionToken', 'STS', Promise.resolve(result), true, mock)
  },
  getSessionTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSessionToken', 'STS', Promise.resolve(result), false, mock)
  },
  getSessionTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSessionToken', 'STS', Promise.reject(result), true, mock)
  },
}
