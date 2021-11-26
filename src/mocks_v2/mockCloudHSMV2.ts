
/**
* @description mocks_v2:mockCloudHSMV2.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockCloudHSMV2 = {
  copyBackupToRegion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyBackupToRegion', 'CloudHSMV2', result, true, true, mock)
  },
  copyBackupToRegionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyBackupToRegion', 'CloudHSMV2', result, false, true, mock)
  },
  copyBackupToRegionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyBackupToRegion', 'CloudHSMV2', result, true, false, mock)
  },
  createCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'CloudHSMV2', result, true, true, mock)
  },
  createClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'CloudHSMV2', result, false, true, mock)
  },
  createClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'CloudHSMV2', result, true, false, mock)
  },
  createHsm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHsm', 'CloudHSMV2', result, true, true, mock)
  },
  createHsmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHsm', 'CloudHSMV2', result, false, true, mock)
  },
  createHsmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHsm', 'CloudHSMV2', result, true, false, mock)
  },
  deleteBackup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackup', 'CloudHSMV2', result, true, true, mock)
  },
  deleteBackupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackup', 'CloudHSMV2', result, false, true, mock)
  },
  deleteBackupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackup', 'CloudHSMV2', result, true, false, mock)
  },
  deleteCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCluster', 'CloudHSMV2', result, true, true, mock)
  },
  deleteClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCluster', 'CloudHSMV2', result, false, true, mock)
  },
  deleteClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCluster', 'CloudHSMV2', result, true, false, mock)
  },
  deleteHsm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHsm', 'CloudHSMV2', result, true, true, mock)
  },
  deleteHsmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHsm', 'CloudHSMV2', result, false, true, mock)
  },
  deleteHsmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHsm', 'CloudHSMV2', result, true, false, mock)
  },
  describeBackups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBackups', 'CloudHSMV2', result, true, true, mock)
  },
  describeBackupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBackups', 'CloudHSMV2', result, false, true, mock)
  },
  describeBackupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBackups', 'CloudHSMV2', result, true, false, mock)
  },
  describeClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusters', 'CloudHSMV2', result, true, true, mock)
  },
  describeClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusters', 'CloudHSMV2', result, false, true, mock)
  },
  describeClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusters', 'CloudHSMV2', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudHSMV2', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudHSMV2', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudHSMV2', result, true, false, mock)
  },
  initializeCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initializeCluster', 'CloudHSMV2', result, true, true, mock)
  },
  initializeClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initializeCluster', 'CloudHSMV2', result, false, true, mock)
  },
  initializeClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initializeCluster', 'CloudHSMV2', result, true, false, mock)
  },
  listTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'CloudHSMV2', result, true, true, mock)
  },
  listTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'CloudHSMV2', result, false, true, mock)
  },
  listTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'CloudHSMV2', result, true, false, mock)
  },
  modifyBackupAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyBackupAttributes', 'CloudHSMV2', result, true, true, mock)
  },
  modifyBackupAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyBackupAttributes', 'CloudHSMV2', result, false, true, mock)
  },
  modifyBackupAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyBackupAttributes', 'CloudHSMV2', result, true, false, mock)
  },
  modifyCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyCluster', 'CloudHSMV2', result, true, true, mock)
  },
  modifyClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyCluster', 'CloudHSMV2', result, false, true, mock)
  },
  modifyClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyCluster', 'CloudHSMV2', result, true, false, mock)
  },
  restoreBackup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreBackup', 'CloudHSMV2', result, true, true, mock)
  },
  restoreBackupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreBackup', 'CloudHSMV2', result, false, true, mock)
  },
  restoreBackupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreBackup', 'CloudHSMV2', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CloudHSMV2', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CloudHSMV2', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CloudHSMV2', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CloudHSMV2', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CloudHSMV2', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CloudHSMV2', result, true, false, mock)
  },
}
