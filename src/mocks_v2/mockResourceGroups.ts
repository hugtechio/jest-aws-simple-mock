
/**
* @description mocks_v2:mockResourceGroups.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockResourceGroups = {
  createGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGroup', 'ResourceGroups', result, true, true, mock)
  },
  createGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGroup', 'ResourceGroups', result, false, true, mock)
  },
  createGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGroup', 'ResourceGroups', result, true, false, mock)
  },
  deleteGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGroup', 'ResourceGroups', result, true, true, mock)
  },
  deleteGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGroup', 'ResourceGroups', result, false, true, mock)
  },
  deleteGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGroup', 'ResourceGroups', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ResourceGroups', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ResourceGroups', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ResourceGroups', result, true, false, mock)
  },
  getGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroup', 'ResourceGroups', result, true, true, mock)
  },
  getGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroup', 'ResourceGroups', result, false, true, mock)
  },
  getGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroup', 'ResourceGroups', result, true, false, mock)
  },
  getGroupConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroupConfiguration', 'ResourceGroups', result, true, true, mock)
  },
  getGroupConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroupConfiguration', 'ResourceGroups', result, false, true, mock)
  },
  getGroupConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroupConfiguration', 'ResourceGroups', result, true, false, mock)
  },
  getGroupQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroupQuery', 'ResourceGroups', result, true, true, mock)
  },
  getGroupQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroupQuery', 'ResourceGroups', result, false, true, mock)
  },
  getGroupQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGroupQuery', 'ResourceGroups', result, true, false, mock)
  },
  getTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTags', 'ResourceGroups', result, true, true, mock)
  },
  getTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTags', 'ResourceGroups', result, false, true, mock)
  },
  getTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTags', 'ResourceGroups', result, true, false, mock)
  },
  groupResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('groupResources', 'ResourceGroups', result, true, true, mock)
  },
  groupResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('groupResources', 'ResourceGroups', result, false, true, mock)
  },
  groupResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('groupResources', 'ResourceGroups', result, true, false, mock)
  },
  listGroupResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroupResources', 'ResourceGroups', result, true, true, mock)
  },
  listGroupResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroupResources', 'ResourceGroups', result, false, true, mock)
  },
  listGroupResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroupResources', 'ResourceGroups', result, true, false, mock)
  },
  listGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroups', 'ResourceGroups', result, true, true, mock)
  },
  listGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroups', 'ResourceGroups', result, false, true, mock)
  },
  listGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGroups', 'ResourceGroups', result, true, false, mock)
  },
  putGroupConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putGroupConfiguration', 'ResourceGroups', result, true, true, mock)
  },
  putGroupConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putGroupConfiguration', 'ResourceGroups', result, false, true, mock)
  },
  putGroupConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putGroupConfiguration', 'ResourceGroups', result, true, false, mock)
  },
  searchResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchResources', 'ResourceGroups', result, true, true, mock)
  },
  searchResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchResources', 'ResourceGroups', result, false, true, mock)
  },
  searchResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchResources', 'ResourceGroups', result, true, false, mock)
  },
  tag: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tag', 'ResourceGroups', result, true, true, mock)
  },
  tagAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tag', 'ResourceGroups', result, false, true, mock)
  },
  tagThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tag', 'ResourceGroups', result, true, false, mock)
  },
  ungroupResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('ungroupResources', 'ResourceGroups', result, true, true, mock)
  },
  ungroupResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('ungroupResources', 'ResourceGroups', result, false, true, mock)
  },
  ungroupResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('ungroupResources', 'ResourceGroups', result, true, false, mock)
  },
  untag: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untag', 'ResourceGroups', result, true, true, mock)
  },
  untagAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untag', 'ResourceGroups', result, false, true, mock)
  },
  untagThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untag', 'ResourceGroups', result, true, false, mock)
  },
  updateGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGroup', 'ResourceGroups', result, true, true, mock)
  },
  updateGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGroup', 'ResourceGroups', result, false, true, mock)
  },
  updateGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGroup', 'ResourceGroups', result, true, false, mock)
  },
  updateGroupQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGroupQuery', 'ResourceGroups', result, true, true, mock)
  },
  updateGroupQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGroupQuery', 'ResourceGroups', result, false, true, mock)
  },
  updateGroupQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGroupQuery', 'ResourceGroups', result, true, false, mock)
  },
}
