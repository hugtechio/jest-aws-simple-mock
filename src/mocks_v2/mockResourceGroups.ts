
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
  export const mockResourceGroups = {
  createGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGroup', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  createGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGroup', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  createGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGroup', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  deleteGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGroup', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  deleteGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGroup', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  deleteGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGroup', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  getGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroup', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  getGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroup', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  getGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroup', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  getGroupConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroupConfiguration', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  getGroupConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroupConfiguration', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  getGroupConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroupConfiguration', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  getGroupQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroupQuery', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  getGroupQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroupQuery', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  getGroupQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroupQuery', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  getTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTags', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  getTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTags', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  getTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTags', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  groupResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('groupResources', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  groupResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('groupResources', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  groupResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('groupResources', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  listGroupResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroupResources', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  listGroupResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroupResources', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  listGroupResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroupResources', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  listGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroups', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  listGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroups', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  listGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroups', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  putGroupConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putGroupConfiguration', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  putGroupConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putGroupConfiguration', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  putGroupConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putGroupConfiguration', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  searchResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchResources', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  searchResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchResources', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  searchResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchResources', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  tag: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tag', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  tagAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tag', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  tagThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tag', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  ungroupResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('ungroupResources', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  ungroupResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('ungroupResources', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  ungroupResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('ungroupResources', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  untag: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untag', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  untagAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untag', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  untagThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untag', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  updateGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGroup', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  updateGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGroup', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  updateGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGroup', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  updateGroupQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGroupQuery', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  updateGroupQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGroupQuery', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  updateGroupQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGroupQuery', 'ResourceGroups', Promise.reject(result), true, mock)
  },
}
