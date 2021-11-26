
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
  export const mockSSO = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSO', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSO', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSO', Promise.reject(result), true, mock)
  },
  getRoleCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRoleCredentials', 'SSO', Promise.resolve(result), true, mock)
  },
  getRoleCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRoleCredentials', 'SSO', Promise.resolve(result), false, mock)
  },
  getRoleCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRoleCredentials', 'SSO', Promise.reject(result), true, mock)
  },
  listAccountRoles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountRoles', 'SSO', Promise.resolve(result), true, mock)
  },
  listAccountRolesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountRoles', 'SSO', Promise.resolve(result), false, mock)
  },
  listAccountRolesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountRoles', 'SSO', Promise.reject(result), true, mock)
  },
  listAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccounts', 'SSO', Promise.resolve(result), true, mock)
  },
  listAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccounts', 'SSO', Promise.resolve(result), false, mock)
  },
  listAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccounts', 'SSO', Promise.reject(result), true, mock)
  },
  logout: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('logout', 'SSO', Promise.resolve(result), true, mock)
  },
  logoutAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('logout', 'SSO', Promise.resolve(result), false, mock)
  },
  logoutThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('logout', 'SSO', Promise.reject(result), true, mock)
  },
}
