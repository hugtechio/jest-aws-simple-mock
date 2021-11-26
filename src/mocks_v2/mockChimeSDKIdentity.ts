
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
  export const mockChimeSDKIdentity = {
  createAppInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAppInstance', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  createAppInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAppInstance', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  createAppInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAppInstance', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  createAppInstanceAdmin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAppInstanceAdmin', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  createAppInstanceAdminAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAppInstanceAdmin', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  createAppInstanceAdminThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAppInstanceAdmin', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  createAppInstanceUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAppInstanceUser', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  createAppInstanceUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAppInstanceUser', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  createAppInstanceUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAppInstanceUser', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  deleteAppInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAppInstance', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  deleteAppInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAppInstance', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  deleteAppInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAppInstance', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  deleteAppInstanceAdmin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAppInstanceAdmin', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  deleteAppInstanceAdminAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAppInstanceAdmin', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  deleteAppInstanceAdminThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAppInstanceAdmin', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  deleteAppInstanceUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAppInstanceUser', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  deleteAppInstanceUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAppInstanceUser', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  deleteAppInstanceUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAppInstanceUser', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  deregisterAppInstanceUserEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterAppInstanceUserEndpoint', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  deregisterAppInstanceUserEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterAppInstanceUserEndpoint', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  deregisterAppInstanceUserEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterAppInstanceUserEndpoint', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  describeAppInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAppInstance', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  describeAppInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAppInstance', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  describeAppInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAppInstance', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  describeAppInstanceAdmin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAppInstanceAdmin', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  describeAppInstanceAdminAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAppInstanceAdmin', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  describeAppInstanceAdminThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAppInstanceAdmin', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  describeAppInstanceUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAppInstanceUser', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  describeAppInstanceUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAppInstanceUser', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  describeAppInstanceUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAppInstanceUser', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  describeAppInstanceUserEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAppInstanceUserEndpoint', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  describeAppInstanceUserEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAppInstanceUserEndpoint', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  describeAppInstanceUserEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAppInstanceUserEndpoint', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  getAppInstanceRetentionSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAppInstanceRetentionSettings', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  getAppInstanceRetentionSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAppInstanceRetentionSettings', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  getAppInstanceRetentionSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAppInstanceRetentionSettings', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  listAppInstanceAdmins: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAppInstanceAdmins', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  listAppInstanceAdminsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAppInstanceAdmins', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  listAppInstanceAdminsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAppInstanceAdmins', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  listAppInstanceUserEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAppInstanceUserEndpoints', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  listAppInstanceUserEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAppInstanceUserEndpoints', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  listAppInstanceUserEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAppInstanceUserEndpoints', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  listAppInstanceUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAppInstanceUsers', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  listAppInstanceUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAppInstanceUsers', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  listAppInstanceUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAppInstanceUsers', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  listAppInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAppInstances', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  listAppInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAppInstances', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  listAppInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAppInstances', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  putAppInstanceRetentionSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAppInstanceRetentionSettings', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  putAppInstanceRetentionSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAppInstanceRetentionSettings', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  putAppInstanceRetentionSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAppInstanceRetentionSettings', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  registerAppInstanceUserEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerAppInstanceUserEndpoint', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  registerAppInstanceUserEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerAppInstanceUserEndpoint', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  registerAppInstanceUserEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerAppInstanceUserEndpoint', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  updateAppInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAppInstance', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  updateAppInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAppInstance', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  updateAppInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAppInstance', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  updateAppInstanceUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAppInstanceUser', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  updateAppInstanceUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAppInstanceUser', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  updateAppInstanceUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAppInstanceUser', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
  updateAppInstanceUserEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAppInstanceUserEndpoint', 'ChimeSDKIdentity', Promise.resolve(result), true, mock)
  },
  updateAppInstanceUserEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAppInstanceUserEndpoint', 'ChimeSDKIdentity', Promise.resolve(result), false, mock)
  },
  updateAppInstanceUserEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAppInstanceUserEndpoint', 'ChimeSDKIdentity', Promise.reject(result), true, mock)
  },
}
