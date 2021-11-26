
/**
* @description mocks_v3:mockCloudHSMV2 module is mocks for AWS-SDK V3
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

  export const mockCloudHSMV2 = {
  copyBackupToRegion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'copyBackupToRegion', 'CloudHSMV2', Promise.resolve(result), true, mock)
  },
  copyBackupToRegionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'copyBackupToRegion', 'CloudHSMV2', Promise.resolve(result), false, mock)
  },
  copyBackupToRegionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'copyBackupToRegion', 'CloudHSMV2', Promise.reject(result), true, mock)
  },
  createCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'createCluster', 'CloudHSMV2', Promise.resolve(result), true, mock)
  },
  createClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'createCluster', 'CloudHSMV2', Promise.resolve(result), false, mock)
  },
  createClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'createCluster', 'CloudHSMV2', Promise.reject(result), true, mock)
  },
  createHsm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'createHsm', 'CloudHSMV2', Promise.resolve(result), true, mock)
  },
  createHsmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'createHsm', 'CloudHSMV2', Promise.resolve(result), false, mock)
  },
  createHsmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'createHsm', 'CloudHSMV2', Promise.reject(result), true, mock)
  },
  deleteBackup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'deleteBackup', 'CloudHSMV2', Promise.resolve(result), true, mock)
  },
  deleteBackupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'deleteBackup', 'CloudHSMV2', Promise.resolve(result), false, mock)
  },
  deleteBackupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'deleteBackup', 'CloudHSMV2', Promise.reject(result), true, mock)
  },
  deleteCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'deleteCluster', 'CloudHSMV2', Promise.resolve(result), true, mock)
  },
  deleteClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'deleteCluster', 'CloudHSMV2', Promise.resolve(result), false, mock)
  },
  deleteClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'deleteCluster', 'CloudHSMV2', Promise.reject(result), true, mock)
  },
  deleteHsm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'deleteHsm', 'CloudHSMV2', Promise.resolve(result), true, mock)
  },
  deleteHsmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'deleteHsm', 'CloudHSMV2', Promise.resolve(result), false, mock)
  },
  deleteHsmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'deleteHsm', 'CloudHSMV2', Promise.reject(result), true, mock)
  },
  describeBackups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'describeBackups', 'CloudHSMV2', Promise.resolve(result), true, mock)
  },
  describeBackupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'describeBackups', 'CloudHSMV2', Promise.resolve(result), false, mock)
  },
  describeBackupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'describeBackups', 'CloudHSMV2', Promise.reject(result), true, mock)
  },
  describeClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'describeClusters', 'CloudHSMV2', Promise.resolve(result), true, mock)
  },
  describeClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'describeClusters', 'CloudHSMV2', Promise.resolve(result), false, mock)
  },
  describeClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'describeClusters', 'CloudHSMV2', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'destroy', 'CloudHSMV2', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'destroy', 'CloudHSMV2', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'destroy', 'CloudHSMV2', Promise.reject(result), true, mock)
  },
  initializeCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'initializeCluster', 'CloudHSMV2', Promise.resolve(result), true, mock)
  },
  initializeClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'initializeCluster', 'CloudHSMV2', Promise.resolve(result), false, mock)
  },
  initializeClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'initializeCluster', 'CloudHSMV2', Promise.reject(result), true, mock)
  },
  listTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'listTags', 'CloudHSMV2', Promise.resolve(result), true, mock)
  },
  listTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'listTags', 'CloudHSMV2', Promise.resolve(result), false, mock)
  },
  listTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'listTags', 'CloudHSMV2', Promise.reject(result), true, mock)
  },
  modifyBackupAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'modifyBackupAttributes', 'CloudHSMV2', Promise.resolve(result), true, mock)
  },
  modifyBackupAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'modifyBackupAttributes', 'CloudHSMV2', Promise.resolve(result), false, mock)
  },
  modifyBackupAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'modifyBackupAttributes', 'CloudHSMV2', Promise.reject(result), true, mock)
  },
  modifyCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'modifyCluster', 'CloudHSMV2', Promise.resolve(result), true, mock)
  },
  modifyClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'modifyCluster', 'CloudHSMV2', Promise.resolve(result), false, mock)
  },
  modifyClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'modifyCluster', 'CloudHSMV2', Promise.reject(result), true, mock)
  },
  restoreBackup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'restoreBackup', 'CloudHSMV2', Promise.resolve(result), true, mock)
  },
  restoreBackupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'restoreBackup', 'CloudHSMV2', Promise.resolve(result), false, mock)
  },
  restoreBackupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'restoreBackup', 'CloudHSMV2', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'tagResource', 'CloudHSMV2', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'tagResource', 'CloudHSMV2', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'tagResource', 'CloudHSMV2', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'untagResource', 'CloudHSMV2', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'untagResource', 'CloudHSMV2', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'untagResource', 'CloudHSMV2', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'send', 'CloudHSMV2Client', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'send', 'CloudHSMV2Client', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudhsm-v2', 'send', 'CloudHSMV2Client', Promise.reject(result), true, mock)
  }
}