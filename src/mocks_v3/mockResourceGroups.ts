
/**
* @description mocks_v3:mockResourceGroups module is mocks for AWS-SDK V3
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/


function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}
export const mockResourceGroups = {
  createGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'createGroup', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  createGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'createGroup', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  createGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'createGroup', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  deleteGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'deleteGroup', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  deleteGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'deleteGroup', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  deleteGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'deleteGroup', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  getAccountSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'getAccountSettings', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  getAccountSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'getAccountSettings', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  getAccountSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'getAccountSettings', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  getGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'getGroup', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  getGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'getGroup', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  getGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'getGroup', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  getGroupConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'getGroupConfiguration', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  getGroupConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'getGroupConfiguration', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  getGroupConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'getGroupConfiguration', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  getGroupQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'getGroupQuery', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  getGroupQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'getGroupQuery', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  getGroupQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'getGroupQuery', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  getTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'getTags', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  getTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'getTags', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  getTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'getTags', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  groupResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'groupResources', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  groupResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'groupResources', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  groupResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'groupResources', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  listGroupResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'listGroupResources', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  listGroupResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'listGroupResources', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  listGroupResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'listGroupResources', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  listGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'listGroups', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  listGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'listGroups', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  listGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'listGroups', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  putGroupConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'putGroupConfiguration', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  putGroupConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'putGroupConfiguration', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  putGroupConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'putGroupConfiguration', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  searchResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'searchResources', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  searchResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'searchResources', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  searchResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'searchResources', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  tag: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'tag', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  tagAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'tag', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  tagThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'tag', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  ungroupResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'ungroupResources', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  ungroupResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'ungroupResources', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  ungroupResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'ungroupResources', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  untag: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'untag', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  untagAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'untag', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  untagThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'untag', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  updateAccountSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'updateAccountSettings', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  updateAccountSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'updateAccountSettings', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  updateAccountSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'updateAccountSettings', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  updateGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'updateGroup', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  updateGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'updateGroup', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  updateGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'updateGroup', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  updateGroupQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'updateGroupQuery', 'ResourceGroups', Promise.resolve(result), true, mock)
  },
  updateGroupQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'updateGroupQuery', 'ResourceGroups', Promise.resolve(result), false, mock)
  },
  updateGroupQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'updateGroupQuery', 'ResourceGroups', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'send', 'ResourceGroupsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'send', 'ResourceGroupsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups', 'send', 'ResourceGroupsClient', Promise.reject(result), true, mock)
  }
}
