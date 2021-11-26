
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
  export const mockIdentitystore = {
  describeGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGroup', 'Identitystore', Promise.resolve(result), true, mock)
  },
  describeGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGroup', 'Identitystore', Promise.resolve(result), false, mock)
  },
  describeGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGroup', 'Identitystore', Promise.reject(result), true, mock)
  },
  describeUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUser', 'Identitystore', Promise.resolve(result), true, mock)
  },
  describeUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUser', 'Identitystore', Promise.resolve(result), false, mock)
  },
  describeUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUser', 'Identitystore', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Identitystore', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Identitystore', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Identitystore', Promise.reject(result), true, mock)
  },
  listGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroups', 'Identitystore', Promise.resolve(result), true, mock)
  },
  listGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroups', 'Identitystore', Promise.resolve(result), false, mock)
  },
  listGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroups', 'Identitystore', Promise.reject(result), true, mock)
  },
  listUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsers', 'Identitystore', Promise.resolve(result), true, mock)
  },
  listUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsers', 'Identitystore', Promise.resolve(result), false, mock)
  },
  listUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUsers', 'Identitystore', Promise.reject(result), true, mock)
  },
}
