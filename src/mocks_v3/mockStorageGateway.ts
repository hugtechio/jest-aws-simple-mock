
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockStorageGateway = {
  activateGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'activateGateway', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  activateGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'activateGateway', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  activateGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'activateGateway', 'StorageGateway', Promise.reject(result), true, mock)
  },
  addCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'addCache', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  addCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'addCache', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  addCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'addCache', 'StorageGateway', Promise.reject(result), true, mock)
  },
  addTagsToResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'addTagsToResource', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  addTagsToResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'addTagsToResource', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  addTagsToResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'addTagsToResource', 'StorageGateway', Promise.reject(result), true, mock)
  },
  addUploadBuffer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'addUploadBuffer', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  addUploadBufferAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'addUploadBuffer', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  addUploadBufferThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'addUploadBuffer', 'StorageGateway', Promise.reject(result), true, mock)
  },
  addWorkingStorage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'addWorkingStorage', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  addWorkingStorageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'addWorkingStorage', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  addWorkingStorageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'addWorkingStorage', 'StorageGateway', Promise.reject(result), true, mock)
  },
  assignTapePool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'assignTapePool', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  assignTapePoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'assignTapePool', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  assignTapePoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'assignTapePool', 'StorageGateway', Promise.reject(result), true, mock)
  },
  associateFileSystem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'associateFileSystem', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  associateFileSystemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'associateFileSystem', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  associateFileSystemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'associateFileSystem', 'StorageGateway', Promise.reject(result), true, mock)
  },
  attachVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'attachVolume', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  attachVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'attachVolume', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  attachVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'attachVolume', 'StorageGateway', Promise.reject(result), true, mock)
  },
  cancelArchival: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'cancelArchival', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  cancelArchivalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'cancelArchival', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  cancelArchivalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'cancelArchival', 'StorageGateway', Promise.reject(result), true, mock)
  },
  cancelRetrieval: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'cancelRetrieval', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  cancelRetrievalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'cancelRetrieval', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  cancelRetrievalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'cancelRetrieval', 'StorageGateway', Promise.reject(result), true, mock)
  },
  createCachediSCSIVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createCachediSCSIVolume', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  createCachediSCSIVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createCachediSCSIVolume', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  createCachediSCSIVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createCachediSCSIVolume', 'StorageGateway', Promise.reject(result), true, mock)
  },
  createNFSFileShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createNFSFileShare', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  createNFSFileShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createNFSFileShare', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  createNFSFileShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createNFSFileShare', 'StorageGateway', Promise.reject(result), true, mock)
  },
  createSMBFileShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createSMBFileShare', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  createSMBFileShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createSMBFileShare', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  createSMBFileShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createSMBFileShare', 'StorageGateway', Promise.reject(result), true, mock)
  },
  createSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createSnapshot', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  createSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createSnapshot', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  createSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createSnapshot', 'StorageGateway', Promise.reject(result), true, mock)
  },
  createSnapshotFromVolumeRecoveryPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createSnapshotFromVolumeRecoveryPoint', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  createSnapshotFromVolumeRecoveryPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createSnapshotFromVolumeRecoveryPoint', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  createSnapshotFromVolumeRecoveryPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createSnapshotFromVolumeRecoveryPoint', 'StorageGateway', Promise.reject(result), true, mock)
  },
  createStorediSCSIVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createStorediSCSIVolume', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  createStorediSCSIVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createStorediSCSIVolume', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  createStorediSCSIVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createStorediSCSIVolume', 'StorageGateway', Promise.reject(result), true, mock)
  },
  createTapePool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createTapePool', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  createTapePoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createTapePool', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  createTapePoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createTapePool', 'StorageGateway', Promise.reject(result), true, mock)
  },
  createTapeWithBarcode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createTapeWithBarcode', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  createTapeWithBarcodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createTapeWithBarcode', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  createTapeWithBarcodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createTapeWithBarcode', 'StorageGateway', Promise.reject(result), true, mock)
  },
  createTapes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createTapes', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  createTapesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createTapes', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  createTapesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'createTapes', 'StorageGateway', Promise.reject(result), true, mock)
  },
  deleteAutomaticTapeCreationPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteAutomaticTapeCreationPolicy', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  deleteAutomaticTapeCreationPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteAutomaticTapeCreationPolicy', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  deleteAutomaticTapeCreationPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteAutomaticTapeCreationPolicy', 'StorageGateway', Promise.reject(result), true, mock)
  },
  deleteBandwidthRateLimit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteBandwidthRateLimit', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  deleteBandwidthRateLimitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteBandwidthRateLimit', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  deleteBandwidthRateLimitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteBandwidthRateLimit', 'StorageGateway', Promise.reject(result), true, mock)
  },
  deleteChapCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteChapCredentials', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  deleteChapCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteChapCredentials', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  deleteChapCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteChapCredentials', 'StorageGateway', Promise.reject(result), true, mock)
  },
  deleteFileShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteFileShare', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  deleteFileShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteFileShare', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  deleteFileShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteFileShare', 'StorageGateway', Promise.reject(result), true, mock)
  },
  deleteGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteGateway', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  deleteGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteGateway', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  deleteGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteGateway', 'StorageGateway', Promise.reject(result), true, mock)
  },
  deleteSnapshotSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteSnapshotSchedule', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  deleteSnapshotScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteSnapshotSchedule', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  deleteSnapshotScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteSnapshotSchedule', 'StorageGateway', Promise.reject(result), true, mock)
  },
  deleteTape: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteTape', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  deleteTapeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteTape', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  deleteTapeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteTape', 'StorageGateway', Promise.reject(result), true, mock)
  },
  deleteTapeArchive: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteTapeArchive', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  deleteTapeArchiveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteTapeArchive', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  deleteTapeArchiveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteTapeArchive', 'StorageGateway', Promise.reject(result), true, mock)
  },
  deleteTapePool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteTapePool', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  deleteTapePoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteTapePool', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  deleteTapePoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteTapePool', 'StorageGateway', Promise.reject(result), true, mock)
  },
  deleteVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteVolume', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  deleteVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteVolume', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  deleteVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'deleteVolume', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeAvailabilityMonitorTest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeAvailabilityMonitorTest', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeAvailabilityMonitorTestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeAvailabilityMonitorTest', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeAvailabilityMonitorTestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeAvailabilityMonitorTest', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeBandwidthRateLimit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeBandwidthRateLimit', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeBandwidthRateLimitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeBandwidthRateLimit', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeBandwidthRateLimitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeBandwidthRateLimit', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeBandwidthRateLimitSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeBandwidthRateLimitSchedule', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeBandwidthRateLimitScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeBandwidthRateLimitSchedule', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeBandwidthRateLimitScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeBandwidthRateLimitSchedule', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeCache', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeCache', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeCache', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeCachediSCSIVolumes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeCachediSCSIVolumes', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeCachediSCSIVolumesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeCachediSCSIVolumes', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeCachediSCSIVolumesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeCachediSCSIVolumes', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeChapCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeChapCredentials', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeChapCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeChapCredentials', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeChapCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeChapCredentials', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeFileSystemAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeFileSystemAssociations', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeFileSystemAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeFileSystemAssociations', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeFileSystemAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeFileSystemAssociations', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeGatewayInformation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeGatewayInformation', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeGatewayInformationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeGatewayInformation', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeGatewayInformationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeGatewayInformation', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeMaintenanceStartTime: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeMaintenanceStartTime', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeMaintenanceStartTimeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeMaintenanceStartTime', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeMaintenanceStartTimeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeMaintenanceStartTime', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeNFSFileShares: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeNFSFileShares', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeNFSFileSharesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeNFSFileShares', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeNFSFileSharesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeNFSFileShares', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeSMBFileShares: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeSMBFileShares', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeSMBFileSharesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeSMBFileShares', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeSMBFileSharesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeSMBFileShares', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeSMBSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeSMBSettings', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeSMBSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeSMBSettings', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeSMBSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeSMBSettings', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeSnapshotSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeSnapshotSchedule', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeSnapshotScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeSnapshotSchedule', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeSnapshotScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeSnapshotSchedule', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeStorediSCSIVolumes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeStorediSCSIVolumes', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeStorediSCSIVolumesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeStorediSCSIVolumes', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeStorediSCSIVolumesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeStorediSCSIVolumes', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeTapeArchives: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeTapeArchives', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeTapeArchivesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeTapeArchives', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeTapeArchivesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeTapeArchives', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeTapeRecoveryPoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeTapeRecoveryPoints', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeTapeRecoveryPointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeTapeRecoveryPoints', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeTapeRecoveryPointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeTapeRecoveryPoints', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeTapes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeTapes', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeTapesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeTapes', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeTapesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeTapes', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeUploadBuffer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeUploadBuffer', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeUploadBufferAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeUploadBuffer', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeUploadBufferThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeUploadBuffer', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeVTLDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeVTLDevices', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeVTLDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeVTLDevices', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeVTLDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeVTLDevices', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeWorkingStorage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeWorkingStorage', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeWorkingStorageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeWorkingStorage', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeWorkingStorageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'describeWorkingStorage', 'StorageGateway', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'destroy', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'destroy', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'destroy', 'StorageGateway', Promise.reject(result), true, mock)
  },
  detachVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'detachVolume', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  detachVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'detachVolume', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  detachVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'detachVolume', 'StorageGateway', Promise.reject(result), true, mock)
  },
  disableGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'disableGateway', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  disableGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'disableGateway', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  disableGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'disableGateway', 'StorageGateway', Promise.reject(result), true, mock)
  },
  disassociateFileSystem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'disassociateFileSystem', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  disassociateFileSystemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'disassociateFileSystem', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  disassociateFileSystemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'disassociateFileSystem', 'StorageGateway', Promise.reject(result), true, mock)
  },
  joinDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'joinDomain', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  joinDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'joinDomain', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  joinDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'joinDomain', 'StorageGateway', Promise.reject(result), true, mock)
  },
  listAutomaticTapeCreationPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listAutomaticTapeCreationPolicies', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  listAutomaticTapeCreationPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listAutomaticTapeCreationPolicies', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  listAutomaticTapeCreationPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listAutomaticTapeCreationPolicies', 'StorageGateway', Promise.reject(result), true, mock)
  },
  listFileShares: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listFileShares', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  listFileSharesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listFileShares', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  listFileSharesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listFileShares', 'StorageGateway', Promise.reject(result), true, mock)
  },
  listFileSystemAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listFileSystemAssociations', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  listFileSystemAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listFileSystemAssociations', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  listFileSystemAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listFileSystemAssociations', 'StorageGateway', Promise.reject(result), true, mock)
  },
  listGateways: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listGateways', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  listGatewaysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listGateways', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  listGatewaysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listGateways', 'StorageGateway', Promise.reject(result), true, mock)
  },
  listLocalDisks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listLocalDisks', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  listLocalDisksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listLocalDisks', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  listLocalDisksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listLocalDisks', 'StorageGateway', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listTagsForResource', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listTagsForResource', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listTagsForResource', 'StorageGateway', Promise.reject(result), true, mock)
  },
  listTapePools: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listTapePools', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  listTapePoolsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listTapePools', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  listTapePoolsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listTapePools', 'StorageGateway', Promise.reject(result), true, mock)
  },
  listTapes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listTapes', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  listTapesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listTapes', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  listTapesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listTapes', 'StorageGateway', Promise.reject(result), true, mock)
  },
  listVolumeInitiators: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listVolumeInitiators', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  listVolumeInitiatorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listVolumeInitiators', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  listVolumeInitiatorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listVolumeInitiators', 'StorageGateway', Promise.reject(result), true, mock)
  },
  listVolumeRecoveryPoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listVolumeRecoveryPoints', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  listVolumeRecoveryPointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listVolumeRecoveryPoints', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  listVolumeRecoveryPointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listVolumeRecoveryPoints', 'StorageGateway', Promise.reject(result), true, mock)
  },
  listVolumes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listVolumes', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  listVolumesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listVolumes', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  listVolumesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'listVolumes', 'StorageGateway', Promise.reject(result), true, mock)
  },
  notifyWhenUploaded: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'notifyWhenUploaded', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  notifyWhenUploadedAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'notifyWhenUploaded', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  notifyWhenUploadedThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'notifyWhenUploaded', 'StorageGateway', Promise.reject(result), true, mock)
  },
  refreshCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'refreshCache', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  refreshCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'refreshCache', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  refreshCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'refreshCache', 'StorageGateway', Promise.reject(result), true, mock)
  },
  removeTagsFromResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'removeTagsFromResource', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  removeTagsFromResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'removeTagsFromResource', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  removeTagsFromResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'removeTagsFromResource', 'StorageGateway', Promise.reject(result), true, mock)
  },
  resetCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'resetCache', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  resetCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'resetCache', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  resetCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'resetCache', 'StorageGateway', Promise.reject(result), true, mock)
  },
  retrieveTapeArchive: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'retrieveTapeArchive', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  retrieveTapeArchiveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'retrieveTapeArchive', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  retrieveTapeArchiveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'retrieveTapeArchive', 'StorageGateway', Promise.reject(result), true, mock)
  },
  retrieveTapeRecoveryPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'retrieveTapeRecoveryPoint', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  retrieveTapeRecoveryPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'retrieveTapeRecoveryPoint', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  retrieveTapeRecoveryPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'retrieveTapeRecoveryPoint', 'StorageGateway', Promise.reject(result), true, mock)
  },
  setLocalConsolePassword: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'setLocalConsolePassword', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  setLocalConsolePasswordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'setLocalConsolePassword', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  setLocalConsolePasswordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'setLocalConsolePassword', 'StorageGateway', Promise.reject(result), true, mock)
  },
  setSMBGuestPassword: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'setSMBGuestPassword', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  setSMBGuestPasswordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'setSMBGuestPassword', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  setSMBGuestPasswordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'setSMBGuestPassword', 'StorageGateway', Promise.reject(result), true, mock)
  },
  shutdownGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'shutdownGateway', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  shutdownGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'shutdownGateway', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  shutdownGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'shutdownGateway', 'StorageGateway', Promise.reject(result), true, mock)
  },
  startAvailabilityMonitorTest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'startAvailabilityMonitorTest', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  startAvailabilityMonitorTestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'startAvailabilityMonitorTest', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  startAvailabilityMonitorTestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'startAvailabilityMonitorTest', 'StorageGateway', Promise.reject(result), true, mock)
  },
  startGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'startGateway', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  startGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'startGateway', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  startGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'startGateway', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateAutomaticTapeCreationPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateAutomaticTapeCreationPolicy', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateAutomaticTapeCreationPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateAutomaticTapeCreationPolicy', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateAutomaticTapeCreationPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateAutomaticTapeCreationPolicy', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateBandwidthRateLimit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateBandwidthRateLimit', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateBandwidthRateLimitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateBandwidthRateLimit', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateBandwidthRateLimitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateBandwidthRateLimit', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateBandwidthRateLimitSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateBandwidthRateLimitSchedule', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateBandwidthRateLimitScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateBandwidthRateLimitSchedule', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateBandwidthRateLimitScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateBandwidthRateLimitSchedule', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateChapCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateChapCredentials', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateChapCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateChapCredentials', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateChapCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateChapCredentials', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateFileSystemAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateFileSystemAssociation', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateFileSystemAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateFileSystemAssociation', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateFileSystemAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateFileSystemAssociation', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateGatewayInformation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateGatewayInformation', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateGatewayInformationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateGatewayInformation', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateGatewayInformationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateGatewayInformation', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateGatewaySoftwareNow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateGatewaySoftwareNow', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateGatewaySoftwareNowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateGatewaySoftwareNow', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateGatewaySoftwareNowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateGatewaySoftwareNow', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateMaintenanceStartTime: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateMaintenanceStartTime', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateMaintenanceStartTimeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateMaintenanceStartTime', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateMaintenanceStartTimeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateMaintenanceStartTime', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateNFSFileShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateNFSFileShare', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateNFSFileShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateNFSFileShare', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateNFSFileShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateNFSFileShare', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateSMBFileShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateSMBFileShare', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateSMBFileShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateSMBFileShare', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateSMBFileShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateSMBFileShare', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateSMBFileShareVisibility: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateSMBFileShareVisibility', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateSMBFileShareVisibilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateSMBFileShareVisibility', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateSMBFileShareVisibilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateSMBFileShareVisibility', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateSMBLocalGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateSMBLocalGroups', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateSMBLocalGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateSMBLocalGroups', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateSMBLocalGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateSMBLocalGroups', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateSMBSecurityStrategy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateSMBSecurityStrategy', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateSMBSecurityStrategyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateSMBSecurityStrategy', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateSMBSecurityStrategyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateSMBSecurityStrategy', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateSnapshotSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateSnapshotSchedule', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateSnapshotScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateSnapshotSchedule', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateSnapshotScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateSnapshotSchedule', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateVTLDeviceType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateVTLDeviceType', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateVTLDeviceTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateVTLDeviceType', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateVTLDeviceTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'updateVTLDeviceType', 'StorageGateway', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'send', 'StorageGatewayClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'send', 'StorageGatewayClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-storage-gateway', 'send', 'StorageGatewayClient', Promise.reject(result), true, mock)
  }
}