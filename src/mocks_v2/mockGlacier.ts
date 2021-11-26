
/**
* @description mocks_v2:mockGlacier.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockGlacier = {
  abortMultipartUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('abortMultipartUpload', 'Glacier', result, true, true, mock)
  },
  abortMultipartUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('abortMultipartUpload', 'Glacier', result, false, true, mock)
  },
  abortMultipartUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('abortMultipartUpload', 'Glacier', result, true, false, mock)
  },
  abortVaultLock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('abortVaultLock', 'Glacier', result, true, true, mock)
  },
  abortVaultLockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('abortVaultLock', 'Glacier', result, false, true, mock)
  },
  abortVaultLockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('abortVaultLock', 'Glacier', result, true, false, mock)
  },
  addTagsToVault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToVault', 'Glacier', result, true, true, mock)
  },
  addTagsToVaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToVault', 'Glacier', result, false, true, mock)
  },
  addTagsToVaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToVault', 'Glacier', result, true, false, mock)
  },
  completeMultipartUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeMultipartUpload', 'Glacier', result, true, true, mock)
  },
  completeMultipartUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeMultipartUpload', 'Glacier', result, false, true, mock)
  },
  completeMultipartUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeMultipartUpload', 'Glacier', result, true, false, mock)
  },
  completeVaultLock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeVaultLock', 'Glacier', result, true, true, mock)
  },
  completeVaultLockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeVaultLock', 'Glacier', result, false, true, mock)
  },
  completeVaultLockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeVaultLock', 'Glacier', result, true, false, mock)
  },
  createVault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVault', 'Glacier', result, true, true, mock)
  },
  createVaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVault', 'Glacier', result, false, true, mock)
  },
  createVaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVault', 'Glacier', result, true, false, mock)
  },
  deleteArchive: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteArchive', 'Glacier', result, true, true, mock)
  },
  deleteArchiveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteArchive', 'Glacier', result, false, true, mock)
  },
  deleteArchiveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteArchive', 'Glacier', result, true, false, mock)
  },
  deleteVault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVault', 'Glacier', result, true, true, mock)
  },
  deleteVaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVault', 'Glacier', result, false, true, mock)
  },
  deleteVaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVault', 'Glacier', result, true, false, mock)
  },
  deleteVaultAccessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVaultAccessPolicy', 'Glacier', result, true, true, mock)
  },
  deleteVaultAccessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVaultAccessPolicy', 'Glacier', result, false, true, mock)
  },
  deleteVaultAccessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVaultAccessPolicy', 'Glacier', result, true, false, mock)
  },
  deleteVaultNotifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVaultNotifications', 'Glacier', result, true, true, mock)
  },
  deleteVaultNotificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVaultNotifications', 'Glacier', result, false, true, mock)
  },
  deleteVaultNotificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVaultNotifications', 'Glacier', result, true, false, mock)
  },
  describeJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJob', 'Glacier', result, true, true, mock)
  },
  describeJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJob', 'Glacier', result, false, true, mock)
  },
  describeJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJob', 'Glacier', result, true, false, mock)
  },
  describeVault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVault', 'Glacier', result, true, true, mock)
  },
  describeVaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVault', 'Glacier', result, false, true, mock)
  },
  describeVaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVault', 'Glacier', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Glacier', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Glacier', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Glacier', result, true, false, mock)
  },
  getDataRetrievalPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataRetrievalPolicy', 'Glacier', result, true, true, mock)
  },
  getDataRetrievalPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataRetrievalPolicy', 'Glacier', result, false, true, mock)
  },
  getDataRetrievalPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataRetrievalPolicy', 'Glacier', result, true, false, mock)
  },
  getJobOutput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobOutput', 'Glacier', result, true, true, mock)
  },
  getJobOutputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobOutput', 'Glacier', result, false, true, mock)
  },
  getJobOutputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobOutput', 'Glacier', result, true, false, mock)
  },
  getVaultAccessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVaultAccessPolicy', 'Glacier', result, true, true, mock)
  },
  getVaultAccessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVaultAccessPolicy', 'Glacier', result, false, true, mock)
  },
  getVaultAccessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVaultAccessPolicy', 'Glacier', result, true, false, mock)
  },
  getVaultLock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVaultLock', 'Glacier', result, true, true, mock)
  },
  getVaultLockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVaultLock', 'Glacier', result, false, true, mock)
  },
  getVaultLockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVaultLock', 'Glacier', result, true, false, mock)
  },
  getVaultNotifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVaultNotifications', 'Glacier', result, true, true, mock)
  },
  getVaultNotificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVaultNotifications', 'Glacier', result, false, true, mock)
  },
  getVaultNotificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVaultNotifications', 'Glacier', result, true, false, mock)
  },
  initiateJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initiateJob', 'Glacier', result, true, true, mock)
  },
  initiateJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initiateJob', 'Glacier', result, false, true, mock)
  },
  initiateJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initiateJob', 'Glacier', result, true, false, mock)
  },
  initiateMultipartUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initiateMultipartUpload', 'Glacier', result, true, true, mock)
  },
  initiateMultipartUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initiateMultipartUpload', 'Glacier', result, false, true, mock)
  },
  initiateMultipartUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initiateMultipartUpload', 'Glacier', result, true, false, mock)
  },
  initiateVaultLock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initiateVaultLock', 'Glacier', result, true, true, mock)
  },
  initiateVaultLockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initiateVaultLock', 'Glacier', result, false, true, mock)
  },
  initiateVaultLockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initiateVaultLock', 'Glacier', result, true, false, mock)
  },
  listJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'Glacier', result, true, true, mock)
  },
  listJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'Glacier', result, false, true, mock)
  },
  listJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'Glacier', result, true, false, mock)
  },
  listMultipartUploads: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMultipartUploads', 'Glacier', result, true, true, mock)
  },
  listMultipartUploadsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMultipartUploads', 'Glacier', result, false, true, mock)
  },
  listMultipartUploadsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMultipartUploads', 'Glacier', result, true, false, mock)
  },
  listParts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listParts', 'Glacier', result, true, true, mock)
  },
  listPartsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listParts', 'Glacier', result, false, true, mock)
  },
  listPartsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listParts', 'Glacier', result, true, false, mock)
  },
  listProvisionedCapacity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProvisionedCapacity', 'Glacier', result, true, true, mock)
  },
  listProvisionedCapacityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProvisionedCapacity', 'Glacier', result, false, true, mock)
  },
  listProvisionedCapacityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProvisionedCapacity', 'Glacier', result, true, false, mock)
  },
  listTagsForVault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForVault', 'Glacier', result, true, true, mock)
  },
  listTagsForVaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForVault', 'Glacier', result, false, true, mock)
  },
  listTagsForVaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForVault', 'Glacier', result, true, false, mock)
  },
  listVaults: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVaults', 'Glacier', result, true, true, mock)
  },
  listVaultsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVaults', 'Glacier', result, false, true, mock)
  },
  listVaultsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVaults', 'Glacier', result, true, false, mock)
  },
  purchaseProvisionedCapacity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purchaseProvisionedCapacity', 'Glacier', result, true, true, mock)
  },
  purchaseProvisionedCapacityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purchaseProvisionedCapacity', 'Glacier', result, false, true, mock)
  },
  purchaseProvisionedCapacityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purchaseProvisionedCapacity', 'Glacier', result, true, false, mock)
  },
  removeTagsFromVault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromVault', 'Glacier', result, true, true, mock)
  },
  removeTagsFromVaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromVault', 'Glacier', result, false, true, mock)
  },
  removeTagsFromVaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromVault', 'Glacier', result, true, false, mock)
  },
  setDataRetrievalPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setDataRetrievalPolicy', 'Glacier', result, true, true, mock)
  },
  setDataRetrievalPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setDataRetrievalPolicy', 'Glacier', result, false, true, mock)
  },
  setDataRetrievalPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setDataRetrievalPolicy', 'Glacier', result, true, false, mock)
  },
  setVaultAccessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setVaultAccessPolicy', 'Glacier', result, true, true, mock)
  },
  setVaultAccessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setVaultAccessPolicy', 'Glacier', result, false, true, mock)
  },
  setVaultAccessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setVaultAccessPolicy', 'Glacier', result, true, false, mock)
  },
  setVaultNotifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setVaultNotifications', 'Glacier', result, true, true, mock)
  },
  setVaultNotificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setVaultNotifications', 'Glacier', result, false, true, mock)
  },
  setVaultNotificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setVaultNotifications', 'Glacier', result, true, false, mock)
  },
  uploadArchive: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadArchive', 'Glacier', result, true, true, mock)
  },
  uploadArchiveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadArchive', 'Glacier', result, false, true, mock)
  },
  uploadArchiveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadArchive', 'Glacier', result, true, false, mock)
  },
  uploadMultipartPart: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadMultipartPart', 'Glacier', result, true, true, mock)
  },
  uploadMultipartPartAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadMultipartPart', 'Glacier', result, false, true, mock)
  },
  uploadMultipartPartThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('uploadMultipartPart', 'Glacier', result, true, false, mock)
  },
}
