
/**
* @description mocks_v2:mockEFS.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockEFS = {
  createAccessPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAccessPoint', 'EFS', result, true, true, mock)
  },
  createAccessPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAccessPoint', 'EFS', result, false, true, mock)
  },
  createAccessPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAccessPoint', 'EFS', result, true, false, mock)
  },
  createFileSystem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFileSystem', 'EFS', result, true, true, mock)
  },
  createFileSystemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFileSystem', 'EFS', result, false, true, mock)
  },
  createFileSystemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFileSystem', 'EFS', result, true, false, mock)
  },
  createMountTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMountTarget', 'EFS', result, true, true, mock)
  },
  createMountTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMountTarget', 'EFS', result, false, true, mock)
  },
  createMountTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMountTarget', 'EFS', result, true, false, mock)
  },
  createTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTags', 'EFS', result, true, true, mock)
  },
  createTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTags', 'EFS', result, false, true, mock)
  },
  createTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTags', 'EFS', result, true, false, mock)
  },
  deleteAccessPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAccessPoint', 'EFS', result, true, true, mock)
  },
  deleteAccessPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAccessPoint', 'EFS', result, false, true, mock)
  },
  deleteAccessPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAccessPoint', 'EFS', result, true, false, mock)
  },
  deleteFileSystem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFileSystem', 'EFS', result, true, true, mock)
  },
  deleteFileSystemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFileSystem', 'EFS', result, false, true, mock)
  },
  deleteFileSystemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFileSystem', 'EFS', result, true, false, mock)
  },
  deleteFileSystemPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFileSystemPolicy', 'EFS', result, true, true, mock)
  },
  deleteFileSystemPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFileSystemPolicy', 'EFS', result, false, true, mock)
  },
  deleteFileSystemPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFileSystemPolicy', 'EFS', result, true, false, mock)
  },
  deleteMountTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMountTarget', 'EFS', result, true, true, mock)
  },
  deleteMountTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMountTarget', 'EFS', result, false, true, mock)
  },
  deleteMountTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMountTarget', 'EFS', result, true, false, mock)
  },
  deleteTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTags', 'EFS', result, true, true, mock)
  },
  deleteTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTags', 'EFS', result, false, true, mock)
  },
  deleteTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTags', 'EFS', result, true, false, mock)
  },
  describeAccessPoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccessPoints', 'EFS', result, true, true, mock)
  },
  describeAccessPointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccessPoints', 'EFS', result, false, true, mock)
  },
  describeAccessPointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccessPoints', 'EFS', result, true, false, mock)
  },
  describeAccountPreferences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountPreferences', 'EFS', result, true, true, mock)
  },
  describeAccountPreferencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountPreferences', 'EFS', result, false, true, mock)
  },
  describeAccountPreferencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountPreferences', 'EFS', result, true, false, mock)
  },
  describeBackupPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBackupPolicy', 'EFS', result, true, true, mock)
  },
  describeBackupPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBackupPolicy', 'EFS', result, false, true, mock)
  },
  describeBackupPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBackupPolicy', 'EFS', result, true, false, mock)
  },
  describeFileSystemPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFileSystemPolicy', 'EFS', result, true, true, mock)
  },
  describeFileSystemPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFileSystemPolicy', 'EFS', result, false, true, mock)
  },
  describeFileSystemPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFileSystemPolicy', 'EFS', result, true, false, mock)
  },
  describeFileSystems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFileSystems', 'EFS', result, true, true, mock)
  },
  describeFileSystemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFileSystems', 'EFS', result, false, true, mock)
  },
  describeFileSystemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFileSystems', 'EFS', result, true, false, mock)
  },
  describeLifecycleConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLifecycleConfiguration', 'EFS', result, true, true, mock)
  },
  describeLifecycleConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLifecycleConfiguration', 'EFS', result, false, true, mock)
  },
  describeLifecycleConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLifecycleConfiguration', 'EFS', result, true, false, mock)
  },
  describeMountTargetSecurityGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMountTargetSecurityGroups', 'EFS', result, true, true, mock)
  },
  describeMountTargetSecurityGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMountTargetSecurityGroups', 'EFS', result, false, true, mock)
  },
  describeMountTargetSecurityGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMountTargetSecurityGroups', 'EFS', result, true, false, mock)
  },
  describeMountTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMountTargets', 'EFS', result, true, true, mock)
  },
  describeMountTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMountTargets', 'EFS', result, false, true, mock)
  },
  describeMountTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMountTargets', 'EFS', result, true, false, mock)
  },
  describeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTags', 'EFS', result, true, true, mock)
  },
  describeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTags', 'EFS', result, false, true, mock)
  },
  describeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTags', 'EFS', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EFS', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EFS', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EFS', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'EFS', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'EFS', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'EFS', result, true, false, mock)
  },
  modifyMountTargetSecurityGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyMountTargetSecurityGroups', 'EFS', result, true, true, mock)
  },
  modifyMountTargetSecurityGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyMountTargetSecurityGroups', 'EFS', result, false, true, mock)
  },
  modifyMountTargetSecurityGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyMountTargetSecurityGroups', 'EFS', result, true, false, mock)
  },
  putAccountPreferences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountPreferences', 'EFS', result, true, true, mock)
  },
  putAccountPreferencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountPreferences', 'EFS', result, false, true, mock)
  },
  putAccountPreferencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAccountPreferences', 'EFS', result, true, false, mock)
  },
  putBackupPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBackupPolicy', 'EFS', result, true, true, mock)
  },
  putBackupPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBackupPolicy', 'EFS', result, false, true, mock)
  },
  putBackupPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBackupPolicy', 'EFS', result, true, false, mock)
  },
  putFileSystemPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFileSystemPolicy', 'EFS', result, true, true, mock)
  },
  putFileSystemPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFileSystemPolicy', 'EFS', result, false, true, mock)
  },
  putFileSystemPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFileSystemPolicy', 'EFS', result, true, false, mock)
  },
  putLifecycleConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLifecycleConfiguration', 'EFS', result, true, true, mock)
  },
  putLifecycleConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLifecycleConfiguration', 'EFS', result, false, true, mock)
  },
  putLifecycleConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLifecycleConfiguration', 'EFS', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'EFS', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'EFS', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'EFS', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'EFS', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'EFS', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'EFS', result, true, false, mock)
  },
  updateFileSystem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFileSystem', 'EFS', result, true, true, mock)
  },
  updateFileSystemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFileSystem', 'EFS', result, false, true, mock)
  },
  updateFileSystemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFileSystem', 'EFS', result, true, false, mock)
  },
}
