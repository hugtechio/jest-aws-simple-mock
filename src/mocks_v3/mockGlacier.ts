
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockGlacier = {
  abortMultipartUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'abortMultipartUpload', 'Glacier', Promise.resolve(result), true, mock)
  },
  abortMultipartUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'abortMultipartUpload', 'Glacier', Promise.resolve(result), false, mock)
  },
  abortMultipartUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'abortMultipartUpload', 'Glacier', Promise.reject(result), true, mock)
  },
  abortVaultLock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'abortVaultLock', 'Glacier', Promise.resolve(result), true, mock)
  },
  abortVaultLockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'abortVaultLock', 'Glacier', Promise.resolve(result), false, mock)
  },
  abortVaultLockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'abortVaultLock', 'Glacier', Promise.reject(result), true, mock)
  },
  addTagsToVault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'addTagsToVault', 'Glacier', Promise.resolve(result), true, mock)
  },
  addTagsToVaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'addTagsToVault', 'Glacier', Promise.resolve(result), false, mock)
  },
  addTagsToVaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'addTagsToVault', 'Glacier', Promise.reject(result), true, mock)
  },
  completeMultipartUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'completeMultipartUpload', 'Glacier', Promise.resolve(result), true, mock)
  },
  completeMultipartUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'completeMultipartUpload', 'Glacier', Promise.resolve(result), false, mock)
  },
  completeMultipartUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'completeMultipartUpload', 'Glacier', Promise.reject(result), true, mock)
  },
  completeVaultLock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'completeVaultLock', 'Glacier', Promise.resolve(result), true, mock)
  },
  completeVaultLockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'completeVaultLock', 'Glacier', Promise.resolve(result), false, mock)
  },
  completeVaultLockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'completeVaultLock', 'Glacier', Promise.reject(result), true, mock)
  },
  createVault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'createVault', 'Glacier', Promise.resolve(result), true, mock)
  },
  createVaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'createVault', 'Glacier', Promise.resolve(result), false, mock)
  },
  createVaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'createVault', 'Glacier', Promise.reject(result), true, mock)
  },
  deleteArchive: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'deleteArchive', 'Glacier', Promise.resolve(result), true, mock)
  },
  deleteArchiveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'deleteArchive', 'Glacier', Promise.resolve(result), false, mock)
  },
  deleteArchiveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'deleteArchive', 'Glacier', Promise.reject(result), true, mock)
  },
  deleteVault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'deleteVault', 'Glacier', Promise.resolve(result), true, mock)
  },
  deleteVaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'deleteVault', 'Glacier', Promise.resolve(result), false, mock)
  },
  deleteVaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'deleteVault', 'Glacier', Promise.reject(result), true, mock)
  },
  deleteVaultAccessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'deleteVaultAccessPolicy', 'Glacier', Promise.resolve(result), true, mock)
  },
  deleteVaultAccessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'deleteVaultAccessPolicy', 'Glacier', Promise.resolve(result), false, mock)
  },
  deleteVaultAccessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'deleteVaultAccessPolicy', 'Glacier', Promise.reject(result), true, mock)
  },
  deleteVaultNotifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'deleteVaultNotifications', 'Glacier', Promise.resolve(result), true, mock)
  },
  deleteVaultNotificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'deleteVaultNotifications', 'Glacier', Promise.resolve(result), false, mock)
  },
  deleteVaultNotificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'deleteVaultNotifications', 'Glacier', Promise.reject(result), true, mock)
  },
  describeJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'describeJob', 'Glacier', Promise.resolve(result), true, mock)
  },
  describeJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'describeJob', 'Glacier', Promise.resolve(result), false, mock)
  },
  describeJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'describeJob', 'Glacier', Promise.reject(result), true, mock)
  },
  describeVault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'describeVault', 'Glacier', Promise.resolve(result), true, mock)
  },
  describeVaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'describeVault', 'Glacier', Promise.resolve(result), false, mock)
  },
  describeVaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'describeVault', 'Glacier', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'destroy', 'Glacier', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'destroy', 'Glacier', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'destroy', 'Glacier', Promise.reject(result), true, mock)
  },
  getDataRetrievalPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'getDataRetrievalPolicy', 'Glacier', Promise.resolve(result), true, mock)
  },
  getDataRetrievalPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'getDataRetrievalPolicy', 'Glacier', Promise.resolve(result), false, mock)
  },
  getDataRetrievalPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'getDataRetrievalPolicy', 'Glacier', Promise.reject(result), true, mock)
  },
  getJobOutput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'getJobOutput', 'Glacier', Promise.resolve(result), true, mock)
  },
  getJobOutputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'getJobOutput', 'Glacier', Promise.resolve(result), false, mock)
  },
  getJobOutputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'getJobOutput', 'Glacier', Promise.reject(result), true, mock)
  },
  getVaultAccessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'getVaultAccessPolicy', 'Glacier', Promise.resolve(result), true, mock)
  },
  getVaultAccessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'getVaultAccessPolicy', 'Glacier', Promise.resolve(result), false, mock)
  },
  getVaultAccessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'getVaultAccessPolicy', 'Glacier', Promise.reject(result), true, mock)
  },
  getVaultLock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'getVaultLock', 'Glacier', Promise.resolve(result), true, mock)
  },
  getVaultLockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'getVaultLock', 'Glacier', Promise.resolve(result), false, mock)
  },
  getVaultLockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'getVaultLock', 'Glacier', Promise.reject(result), true, mock)
  },
  getVaultNotifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'getVaultNotifications', 'Glacier', Promise.resolve(result), true, mock)
  },
  getVaultNotificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'getVaultNotifications', 'Glacier', Promise.resolve(result), false, mock)
  },
  getVaultNotificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'getVaultNotifications', 'Glacier', Promise.reject(result), true, mock)
  },
  initiateJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'initiateJob', 'Glacier', Promise.resolve(result), true, mock)
  },
  initiateJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'initiateJob', 'Glacier', Promise.resolve(result), false, mock)
  },
  initiateJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'initiateJob', 'Glacier', Promise.reject(result), true, mock)
  },
  initiateMultipartUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'initiateMultipartUpload', 'Glacier', Promise.resolve(result), true, mock)
  },
  initiateMultipartUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'initiateMultipartUpload', 'Glacier', Promise.resolve(result), false, mock)
  },
  initiateMultipartUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'initiateMultipartUpload', 'Glacier', Promise.reject(result), true, mock)
  },
  initiateVaultLock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'initiateVaultLock', 'Glacier', Promise.resolve(result), true, mock)
  },
  initiateVaultLockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'initiateVaultLock', 'Glacier', Promise.resolve(result), false, mock)
  },
  initiateVaultLockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'initiateVaultLock', 'Glacier', Promise.reject(result), true, mock)
  },
  listJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'listJobs', 'Glacier', Promise.resolve(result), true, mock)
  },
  listJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'listJobs', 'Glacier', Promise.resolve(result), false, mock)
  },
  listJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'listJobs', 'Glacier', Promise.reject(result), true, mock)
  },
  listMultipartUploads: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'listMultipartUploads', 'Glacier', Promise.resolve(result), true, mock)
  },
  listMultipartUploadsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'listMultipartUploads', 'Glacier', Promise.resolve(result), false, mock)
  },
  listMultipartUploadsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'listMultipartUploads', 'Glacier', Promise.reject(result), true, mock)
  },
  listParts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'listParts', 'Glacier', Promise.resolve(result), true, mock)
  },
  listPartsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'listParts', 'Glacier', Promise.resolve(result), false, mock)
  },
  listPartsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'listParts', 'Glacier', Promise.reject(result), true, mock)
  },
  listProvisionedCapacity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'listProvisionedCapacity', 'Glacier', Promise.resolve(result), true, mock)
  },
  listProvisionedCapacityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'listProvisionedCapacity', 'Glacier', Promise.resolve(result), false, mock)
  },
  listProvisionedCapacityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'listProvisionedCapacity', 'Glacier', Promise.reject(result), true, mock)
  },
  listTagsForVault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'listTagsForVault', 'Glacier', Promise.resolve(result), true, mock)
  },
  listTagsForVaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'listTagsForVault', 'Glacier', Promise.resolve(result), false, mock)
  },
  listTagsForVaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'listTagsForVault', 'Glacier', Promise.reject(result), true, mock)
  },
  listVaults: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'listVaults', 'Glacier', Promise.resolve(result), true, mock)
  },
  listVaultsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'listVaults', 'Glacier', Promise.resolve(result), false, mock)
  },
  listVaultsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'listVaults', 'Glacier', Promise.reject(result), true, mock)
  },
  purchaseProvisionedCapacity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'purchaseProvisionedCapacity', 'Glacier', Promise.resolve(result), true, mock)
  },
  purchaseProvisionedCapacityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'purchaseProvisionedCapacity', 'Glacier', Promise.resolve(result), false, mock)
  },
  purchaseProvisionedCapacityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'purchaseProvisionedCapacity', 'Glacier', Promise.reject(result), true, mock)
  },
  removeTagsFromVault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'removeTagsFromVault', 'Glacier', Promise.resolve(result), true, mock)
  },
  removeTagsFromVaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'removeTagsFromVault', 'Glacier', Promise.resolve(result), false, mock)
  },
  removeTagsFromVaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'removeTagsFromVault', 'Glacier', Promise.reject(result), true, mock)
  },
  setDataRetrievalPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'setDataRetrievalPolicy', 'Glacier', Promise.resolve(result), true, mock)
  },
  setDataRetrievalPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'setDataRetrievalPolicy', 'Glacier', Promise.resolve(result), false, mock)
  },
  setDataRetrievalPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'setDataRetrievalPolicy', 'Glacier', Promise.reject(result), true, mock)
  },
  setVaultAccessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'setVaultAccessPolicy', 'Glacier', Promise.resolve(result), true, mock)
  },
  setVaultAccessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'setVaultAccessPolicy', 'Glacier', Promise.resolve(result), false, mock)
  },
  setVaultAccessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'setVaultAccessPolicy', 'Glacier', Promise.reject(result), true, mock)
  },
  setVaultNotifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'setVaultNotifications', 'Glacier', Promise.resolve(result), true, mock)
  },
  setVaultNotificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'setVaultNotifications', 'Glacier', Promise.resolve(result), false, mock)
  },
  setVaultNotificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'setVaultNotifications', 'Glacier', Promise.reject(result), true, mock)
  },
  uploadArchive: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'uploadArchive', 'Glacier', Promise.resolve(result), true, mock)
  },
  uploadArchiveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'uploadArchive', 'Glacier', Promise.resolve(result), false, mock)
  },
  uploadArchiveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'uploadArchive', 'Glacier', Promise.reject(result), true, mock)
  },
  uploadMultipartPart: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'uploadMultipartPart', 'Glacier', Promise.resolve(result), true, mock)
  },
  uploadMultipartPartAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'uploadMultipartPart', 'Glacier', Promise.resolve(result), false, mock)
  },
  uploadMultipartPartThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'uploadMultipartPart', 'Glacier', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'send', 'GlacierClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'send', 'GlacierClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-glacier', 'send', 'GlacierClient', Promise.reject(result), true, mock)
  }
}