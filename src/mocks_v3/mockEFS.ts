
/**
* @description mocks_v3:mockEFS module is mocks for AWS-SDK V3
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

  export const mockEFS = {
  createAccessPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'createAccessPoint', 'EFS', Promise.resolve(result), true, mock)
  },
  createAccessPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'createAccessPoint', 'EFS', Promise.resolve(result), false, mock)
  },
  createAccessPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'createAccessPoint', 'EFS', Promise.reject(result), true, mock)
  },
  createFileSystem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'createFileSystem', 'EFS', Promise.resolve(result), true, mock)
  },
  createFileSystemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'createFileSystem', 'EFS', Promise.resolve(result), false, mock)
  },
  createFileSystemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'createFileSystem', 'EFS', Promise.reject(result), true, mock)
  },
  createMountTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'createMountTarget', 'EFS', Promise.resolve(result), true, mock)
  },
  createMountTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'createMountTarget', 'EFS', Promise.resolve(result), false, mock)
  },
  createMountTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'createMountTarget', 'EFS', Promise.reject(result), true, mock)
  },
  createTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'createTags', 'EFS', Promise.resolve(result), true, mock)
  },
  createTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'createTags', 'EFS', Promise.resolve(result), false, mock)
  },
  createTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'createTags', 'EFS', Promise.reject(result), true, mock)
  },
  deleteAccessPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'deleteAccessPoint', 'EFS', Promise.resolve(result), true, mock)
  },
  deleteAccessPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'deleteAccessPoint', 'EFS', Promise.resolve(result), false, mock)
  },
  deleteAccessPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'deleteAccessPoint', 'EFS', Promise.reject(result), true, mock)
  },
  deleteFileSystem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'deleteFileSystem', 'EFS', Promise.resolve(result), true, mock)
  },
  deleteFileSystemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'deleteFileSystem', 'EFS', Promise.resolve(result), false, mock)
  },
  deleteFileSystemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'deleteFileSystem', 'EFS', Promise.reject(result), true, mock)
  },
  deleteFileSystemPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'deleteFileSystemPolicy', 'EFS', Promise.resolve(result), true, mock)
  },
  deleteFileSystemPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'deleteFileSystemPolicy', 'EFS', Promise.resolve(result), false, mock)
  },
  deleteFileSystemPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'deleteFileSystemPolicy', 'EFS', Promise.reject(result), true, mock)
  },
  deleteMountTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'deleteMountTarget', 'EFS', Promise.resolve(result), true, mock)
  },
  deleteMountTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'deleteMountTarget', 'EFS', Promise.resolve(result), false, mock)
  },
  deleteMountTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'deleteMountTarget', 'EFS', Promise.reject(result), true, mock)
  },
  deleteTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'deleteTags', 'EFS', Promise.resolve(result), true, mock)
  },
  deleteTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'deleteTags', 'EFS', Promise.resolve(result), false, mock)
  },
  deleteTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'deleteTags', 'EFS', Promise.reject(result), true, mock)
  },
  describeAccessPoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeAccessPoints', 'EFS', Promise.resolve(result), true, mock)
  },
  describeAccessPointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeAccessPoints', 'EFS', Promise.resolve(result), false, mock)
  },
  describeAccessPointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeAccessPoints', 'EFS', Promise.reject(result), true, mock)
  },
  describeAccountPreferences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeAccountPreferences', 'EFS', Promise.resolve(result), true, mock)
  },
  describeAccountPreferencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeAccountPreferences', 'EFS', Promise.resolve(result), false, mock)
  },
  describeAccountPreferencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeAccountPreferences', 'EFS', Promise.reject(result), true, mock)
  },
  describeBackupPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeBackupPolicy', 'EFS', Promise.resolve(result), true, mock)
  },
  describeBackupPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeBackupPolicy', 'EFS', Promise.resolve(result), false, mock)
  },
  describeBackupPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeBackupPolicy', 'EFS', Promise.reject(result), true, mock)
  },
  describeFileSystemPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeFileSystemPolicy', 'EFS', Promise.resolve(result), true, mock)
  },
  describeFileSystemPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeFileSystemPolicy', 'EFS', Promise.resolve(result), false, mock)
  },
  describeFileSystemPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeFileSystemPolicy', 'EFS', Promise.reject(result), true, mock)
  },
  describeFileSystems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeFileSystems', 'EFS', Promise.resolve(result), true, mock)
  },
  describeFileSystemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeFileSystems', 'EFS', Promise.resolve(result), false, mock)
  },
  describeFileSystemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeFileSystems', 'EFS', Promise.reject(result), true, mock)
  },
  describeLifecycleConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeLifecycleConfiguration', 'EFS', Promise.resolve(result), true, mock)
  },
  describeLifecycleConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeLifecycleConfiguration', 'EFS', Promise.resolve(result), false, mock)
  },
  describeLifecycleConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeLifecycleConfiguration', 'EFS', Promise.reject(result), true, mock)
  },
  describeMountTargetSecurityGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeMountTargetSecurityGroups', 'EFS', Promise.resolve(result), true, mock)
  },
  describeMountTargetSecurityGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeMountTargetSecurityGroups', 'EFS', Promise.resolve(result), false, mock)
  },
  describeMountTargetSecurityGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeMountTargetSecurityGroups', 'EFS', Promise.reject(result), true, mock)
  },
  describeMountTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeMountTargets', 'EFS', Promise.resolve(result), true, mock)
  },
  describeMountTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeMountTargets', 'EFS', Promise.resolve(result), false, mock)
  },
  describeMountTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeMountTargets', 'EFS', Promise.reject(result), true, mock)
  },
  describeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeTags', 'EFS', Promise.resolve(result), true, mock)
  },
  describeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeTags', 'EFS', Promise.resolve(result), false, mock)
  },
  describeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'describeTags', 'EFS', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'destroy', 'EFS', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'destroy', 'EFS', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'destroy', 'EFS', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'listTagsForResource', 'EFS', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'listTagsForResource', 'EFS', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'listTagsForResource', 'EFS', Promise.reject(result), true, mock)
  },
  modifyMountTargetSecurityGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'modifyMountTargetSecurityGroups', 'EFS', Promise.resolve(result), true, mock)
  },
  modifyMountTargetSecurityGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'modifyMountTargetSecurityGroups', 'EFS', Promise.resolve(result), false, mock)
  },
  modifyMountTargetSecurityGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'modifyMountTargetSecurityGroups', 'EFS', Promise.reject(result), true, mock)
  },
  putAccountPreferences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'putAccountPreferences', 'EFS', Promise.resolve(result), true, mock)
  },
  putAccountPreferencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'putAccountPreferences', 'EFS', Promise.resolve(result), false, mock)
  },
  putAccountPreferencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'putAccountPreferences', 'EFS', Promise.reject(result), true, mock)
  },
  putBackupPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'putBackupPolicy', 'EFS', Promise.resolve(result), true, mock)
  },
  putBackupPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'putBackupPolicy', 'EFS', Promise.resolve(result), false, mock)
  },
  putBackupPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'putBackupPolicy', 'EFS', Promise.reject(result), true, mock)
  },
  putFileSystemPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'putFileSystemPolicy', 'EFS', Promise.resolve(result), true, mock)
  },
  putFileSystemPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'putFileSystemPolicy', 'EFS', Promise.resolve(result), false, mock)
  },
  putFileSystemPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'putFileSystemPolicy', 'EFS', Promise.reject(result), true, mock)
  },
  putLifecycleConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'putLifecycleConfiguration', 'EFS', Promise.resolve(result), true, mock)
  },
  putLifecycleConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'putLifecycleConfiguration', 'EFS', Promise.resolve(result), false, mock)
  },
  putLifecycleConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'putLifecycleConfiguration', 'EFS', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'tagResource', 'EFS', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'tagResource', 'EFS', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'tagResource', 'EFS', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'untagResource', 'EFS', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'untagResource', 'EFS', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'untagResource', 'EFS', Promise.reject(result), true, mock)
  },
  updateFileSystem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'updateFileSystem', 'EFS', Promise.resolve(result), true, mock)
  },
  updateFileSystemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'updateFileSystem', 'EFS', Promise.resolve(result), false, mock)
  },
  updateFileSystemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'updateFileSystem', 'EFS', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'send', 'EFSClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'send', 'EFSClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-efs', 'send', 'EFSClient', Promise.reject(result), true, mock)
  }
}