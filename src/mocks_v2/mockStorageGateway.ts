
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
  export const mockStorageGateway = {
  activateGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('activateGateway', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  activateGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('activateGateway', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  activateGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('activateGateway', 'StorageGateway', Promise.reject(result), true, mock)
  },
  addCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addCache', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  addCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addCache', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  addCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addCache', 'StorageGateway', Promise.reject(result), true, mock)
  },
  addTagsToResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToResource', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  addTagsToResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToResource', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  addTagsToResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToResource', 'StorageGateway', Promise.reject(result), true, mock)
  },
  addUploadBuffer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addUploadBuffer', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  addUploadBufferAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addUploadBuffer', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  addUploadBufferThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addUploadBuffer', 'StorageGateway', Promise.reject(result), true, mock)
  },
  addWorkingStorage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addWorkingStorage', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  addWorkingStorageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addWorkingStorage', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  addWorkingStorageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addWorkingStorage', 'StorageGateway', Promise.reject(result), true, mock)
  },
  assignTapePool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('assignTapePool', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  assignTapePoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('assignTapePool', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  assignTapePoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('assignTapePool', 'StorageGateway', Promise.reject(result), true, mock)
  },
  associateFileSystem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateFileSystem', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  associateFileSystemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateFileSystem', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  associateFileSystemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateFileSystem', 'StorageGateway', Promise.reject(result), true, mock)
  },
  attachVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachVolume', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  attachVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachVolume', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  attachVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachVolume', 'StorageGateway', Promise.reject(result), true, mock)
  },
  cancelArchival: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelArchival', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  cancelArchivalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelArchival', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  cancelArchivalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelArchival', 'StorageGateway', Promise.reject(result), true, mock)
  },
  cancelRetrieval: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelRetrieval', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  cancelRetrievalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelRetrieval', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  cancelRetrievalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelRetrieval', 'StorageGateway', Promise.reject(result), true, mock)
  },
  createCachediSCSIVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCachediSCSIVolume', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  createCachediSCSIVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCachediSCSIVolume', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  createCachediSCSIVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCachediSCSIVolume', 'StorageGateway', Promise.reject(result), true, mock)
  },
  createNFSFileShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNFSFileShare', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  createNFSFileShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNFSFileShare', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  createNFSFileShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNFSFileShare', 'StorageGateway', Promise.reject(result), true, mock)
  },
  createSMBFileShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSMBFileShare', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  createSMBFileShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSMBFileShare', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  createSMBFileShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSMBFileShare', 'StorageGateway', Promise.reject(result), true, mock)
  },
  createSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSnapshot', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  createSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSnapshot', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  createSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSnapshot', 'StorageGateway', Promise.reject(result), true, mock)
  },
  createSnapshotFromVolumeRecoveryPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSnapshotFromVolumeRecoveryPoint', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  createSnapshotFromVolumeRecoveryPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSnapshotFromVolumeRecoveryPoint', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  createSnapshotFromVolumeRecoveryPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSnapshotFromVolumeRecoveryPoint', 'StorageGateway', Promise.reject(result), true, mock)
  },
  createStorediSCSIVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStorediSCSIVolume', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  createStorediSCSIVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStorediSCSIVolume', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  createStorediSCSIVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStorediSCSIVolume', 'StorageGateway', Promise.reject(result), true, mock)
  },
  createTapePool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTapePool', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  createTapePoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTapePool', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  createTapePoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTapePool', 'StorageGateway', Promise.reject(result), true, mock)
  },
  createTapeWithBarcode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTapeWithBarcode', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  createTapeWithBarcodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTapeWithBarcode', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  createTapeWithBarcodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTapeWithBarcode', 'StorageGateway', Promise.reject(result), true, mock)
  },
  createTapes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTapes', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  createTapesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTapes', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  createTapesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTapes', 'StorageGateway', Promise.reject(result), true, mock)
  },
  deleteAutomaticTapeCreationPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAutomaticTapeCreationPolicy', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  deleteAutomaticTapeCreationPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAutomaticTapeCreationPolicy', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  deleteAutomaticTapeCreationPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAutomaticTapeCreationPolicy', 'StorageGateway', Promise.reject(result), true, mock)
  },
  deleteBandwidthRateLimit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBandwidthRateLimit', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  deleteBandwidthRateLimitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBandwidthRateLimit', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  deleteBandwidthRateLimitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBandwidthRateLimit', 'StorageGateway', Promise.reject(result), true, mock)
  },
  deleteChapCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChapCredentials', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  deleteChapCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChapCredentials', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  deleteChapCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChapCredentials', 'StorageGateway', Promise.reject(result), true, mock)
  },
  deleteFileShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFileShare', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  deleteFileShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFileShare', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  deleteFileShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFileShare', 'StorageGateway', Promise.reject(result), true, mock)
  },
  deleteGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGateway', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  deleteGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGateway', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  deleteGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGateway', 'StorageGateway', Promise.reject(result), true, mock)
  },
  deleteSnapshotSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSnapshotSchedule', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  deleteSnapshotScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSnapshotSchedule', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  deleteSnapshotScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSnapshotSchedule', 'StorageGateway', Promise.reject(result), true, mock)
  },
  deleteTape: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTape', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  deleteTapeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTape', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  deleteTapeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTape', 'StorageGateway', Promise.reject(result), true, mock)
  },
  deleteTapeArchive: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTapeArchive', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  deleteTapeArchiveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTapeArchive', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  deleteTapeArchiveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTapeArchive', 'StorageGateway', Promise.reject(result), true, mock)
  },
  deleteTapePool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTapePool', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  deleteTapePoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTapePool', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  deleteTapePoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTapePool', 'StorageGateway', Promise.reject(result), true, mock)
  },
  deleteVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVolume', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  deleteVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVolume', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  deleteVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVolume', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeAvailabilityMonitorTest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAvailabilityMonitorTest', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeAvailabilityMonitorTestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAvailabilityMonitorTest', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeAvailabilityMonitorTestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAvailabilityMonitorTest', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeBandwidthRateLimit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBandwidthRateLimit', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeBandwidthRateLimitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBandwidthRateLimit', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeBandwidthRateLimitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBandwidthRateLimit', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeBandwidthRateLimitSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBandwidthRateLimitSchedule', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeBandwidthRateLimitScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBandwidthRateLimitSchedule', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeBandwidthRateLimitScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBandwidthRateLimitSchedule', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCache', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCache', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCache', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeCachediSCSIVolumes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCachediSCSIVolumes', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeCachediSCSIVolumesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCachediSCSIVolumes', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeCachediSCSIVolumesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCachediSCSIVolumes', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeChapCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChapCredentials', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeChapCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChapCredentials', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeChapCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChapCredentials', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeFileSystemAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFileSystemAssociations', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeFileSystemAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFileSystemAssociations', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeFileSystemAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFileSystemAssociations', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeGatewayInformation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGatewayInformation', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeGatewayInformationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGatewayInformation', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeGatewayInformationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGatewayInformation', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeMaintenanceStartTime: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceStartTime', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeMaintenanceStartTimeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceStartTime', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeMaintenanceStartTimeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceStartTime', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeNFSFileShares: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNFSFileShares', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeNFSFileSharesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNFSFileShares', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeNFSFileSharesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNFSFileShares', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeSMBFileShares: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSMBFileShares', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeSMBFileSharesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSMBFileShares', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeSMBFileSharesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSMBFileShares', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeSMBSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSMBSettings', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeSMBSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSMBSettings', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeSMBSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSMBSettings', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeSnapshotSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSnapshotSchedule', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeSnapshotScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSnapshotSchedule', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeSnapshotScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSnapshotSchedule', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeStorediSCSIVolumes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStorediSCSIVolumes', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeStorediSCSIVolumesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStorediSCSIVolumes', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeStorediSCSIVolumesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStorediSCSIVolumes', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeTapeArchives: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTapeArchives', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeTapeArchivesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTapeArchives', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeTapeArchivesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTapeArchives', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeTapeRecoveryPoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTapeRecoveryPoints', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeTapeRecoveryPointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTapeRecoveryPoints', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeTapeRecoveryPointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTapeRecoveryPoints', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeTapes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTapes', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeTapesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTapes', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeTapesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTapes', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeUploadBuffer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUploadBuffer', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeUploadBufferAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUploadBuffer', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeUploadBufferThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUploadBuffer', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeVTLDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVTLDevices', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeVTLDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVTLDevices', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeVTLDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVTLDevices', 'StorageGateway', Promise.reject(result), true, mock)
  },
  describeWorkingStorage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkingStorage', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  describeWorkingStorageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkingStorage', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  describeWorkingStorageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWorkingStorage', 'StorageGateway', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'StorageGateway', Promise.reject(result), true, mock)
  },
  detachVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachVolume', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  detachVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachVolume', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  detachVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachVolume', 'StorageGateway', Promise.reject(result), true, mock)
  },
  disableGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableGateway', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  disableGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableGateway', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  disableGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableGateway', 'StorageGateway', Promise.reject(result), true, mock)
  },
  disassociateFileSystem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFileSystem', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  disassociateFileSystemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFileSystem', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  disassociateFileSystemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFileSystem', 'StorageGateway', Promise.reject(result), true, mock)
  },
  joinDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('joinDomain', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  joinDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('joinDomain', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  joinDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('joinDomain', 'StorageGateway', Promise.reject(result), true, mock)
  },
  listAutomaticTapeCreationPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAutomaticTapeCreationPolicies', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  listAutomaticTapeCreationPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAutomaticTapeCreationPolicies', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  listAutomaticTapeCreationPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAutomaticTapeCreationPolicies', 'StorageGateway', Promise.reject(result), true, mock)
  },
  listFileShares: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFileShares', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  listFileSharesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFileShares', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  listFileSharesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFileShares', 'StorageGateway', Promise.reject(result), true, mock)
  },
  listFileSystemAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFileSystemAssociations', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  listFileSystemAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFileSystemAssociations', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  listFileSystemAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFileSystemAssociations', 'StorageGateway', Promise.reject(result), true, mock)
  },
  listGateways: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGateways', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  listGatewaysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGateways', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  listGatewaysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGateways', 'StorageGateway', Promise.reject(result), true, mock)
  },
  listLocalDisks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLocalDisks', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  listLocalDisksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLocalDisks', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  listLocalDisksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLocalDisks', 'StorageGateway', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'StorageGateway', Promise.reject(result), true, mock)
  },
  listTapePools: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTapePools', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  listTapePoolsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTapePools', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  listTapePoolsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTapePools', 'StorageGateway', Promise.reject(result), true, mock)
  },
  listTapes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTapes', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  listTapesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTapes', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  listTapesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTapes', 'StorageGateway', Promise.reject(result), true, mock)
  },
  listVolumeInitiators: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVolumeInitiators', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  listVolumeInitiatorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVolumeInitiators', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  listVolumeInitiatorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVolumeInitiators', 'StorageGateway', Promise.reject(result), true, mock)
  },
  listVolumeRecoveryPoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVolumeRecoveryPoints', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  listVolumeRecoveryPointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVolumeRecoveryPoints', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  listVolumeRecoveryPointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVolumeRecoveryPoints', 'StorageGateway', Promise.reject(result), true, mock)
  },
  listVolumes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVolumes', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  listVolumesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVolumes', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  listVolumesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVolumes', 'StorageGateway', Promise.reject(result), true, mock)
  },
  notifyWhenUploaded: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('notifyWhenUploaded', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  notifyWhenUploadedAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('notifyWhenUploaded', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  notifyWhenUploadedThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('notifyWhenUploaded', 'StorageGateway', Promise.reject(result), true, mock)
  },
  refreshCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('refreshCache', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  refreshCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('refreshCache', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  refreshCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('refreshCache', 'StorageGateway', Promise.reject(result), true, mock)
  },
  removeTagsFromResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromResource', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  removeTagsFromResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromResource', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  removeTagsFromResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromResource', 'StorageGateway', Promise.reject(result), true, mock)
  },
  resetCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetCache', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  resetCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetCache', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  resetCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetCache', 'StorageGateway', Promise.reject(result), true, mock)
  },
  retrieveTapeArchive: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retrieveTapeArchive', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  retrieveTapeArchiveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retrieveTapeArchive', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  retrieveTapeArchiveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retrieveTapeArchive', 'StorageGateway', Promise.reject(result), true, mock)
  },
  retrieveTapeRecoveryPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retrieveTapeRecoveryPoint', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  retrieveTapeRecoveryPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retrieveTapeRecoveryPoint', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  retrieveTapeRecoveryPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retrieveTapeRecoveryPoint', 'StorageGateway', Promise.reject(result), true, mock)
  },
  setLocalConsolePassword: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setLocalConsolePassword', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  setLocalConsolePasswordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setLocalConsolePassword', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  setLocalConsolePasswordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setLocalConsolePassword', 'StorageGateway', Promise.reject(result), true, mock)
  },
  setSMBGuestPassword: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setSMBGuestPassword', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  setSMBGuestPasswordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setSMBGuestPassword', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  setSMBGuestPasswordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setSMBGuestPassword', 'StorageGateway', Promise.reject(result), true, mock)
  },
  shutdownGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('shutdownGateway', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  shutdownGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('shutdownGateway', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  shutdownGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('shutdownGateway', 'StorageGateway', Promise.reject(result), true, mock)
  },
  startAvailabilityMonitorTest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAvailabilityMonitorTest', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  startAvailabilityMonitorTestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAvailabilityMonitorTest', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  startAvailabilityMonitorTestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAvailabilityMonitorTest', 'StorageGateway', Promise.reject(result), true, mock)
  },
  startGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startGateway', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  startGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startGateway', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  startGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startGateway', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateAutomaticTapeCreationPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAutomaticTapeCreationPolicy', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateAutomaticTapeCreationPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAutomaticTapeCreationPolicy', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateAutomaticTapeCreationPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAutomaticTapeCreationPolicy', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateBandwidthRateLimit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBandwidthRateLimit', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateBandwidthRateLimitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBandwidthRateLimit', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateBandwidthRateLimitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBandwidthRateLimit', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateBandwidthRateLimitSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBandwidthRateLimitSchedule', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateBandwidthRateLimitScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBandwidthRateLimitSchedule', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateBandwidthRateLimitScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBandwidthRateLimitSchedule', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateChapCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChapCredentials', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateChapCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChapCredentials', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateChapCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChapCredentials', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateFileSystemAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFileSystemAssociation', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateFileSystemAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFileSystemAssociation', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateFileSystemAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFileSystemAssociation', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateGatewayInformation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGatewayInformation', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateGatewayInformationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGatewayInformation', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateGatewayInformationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGatewayInformation', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateGatewaySoftwareNow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGatewaySoftwareNow', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateGatewaySoftwareNowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGatewaySoftwareNow', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateGatewaySoftwareNowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGatewaySoftwareNow', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateMaintenanceStartTime: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMaintenanceStartTime', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateMaintenanceStartTimeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMaintenanceStartTime', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateMaintenanceStartTimeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMaintenanceStartTime', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateNFSFileShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNFSFileShare', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateNFSFileShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNFSFileShare', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateNFSFileShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNFSFileShare', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateSMBFileShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSMBFileShare', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateSMBFileShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSMBFileShare', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateSMBFileShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSMBFileShare', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateSMBFileShareVisibility: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSMBFileShareVisibility', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateSMBFileShareVisibilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSMBFileShareVisibility', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateSMBFileShareVisibilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSMBFileShareVisibility', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateSMBLocalGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSMBLocalGroups', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateSMBLocalGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSMBLocalGroups', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateSMBLocalGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSMBLocalGroups', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateSMBSecurityStrategy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSMBSecurityStrategy', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateSMBSecurityStrategyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSMBSecurityStrategy', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateSMBSecurityStrategyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSMBSecurityStrategy', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateSnapshotSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSnapshotSchedule', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateSnapshotScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSnapshotSchedule', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateSnapshotScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSnapshotSchedule', 'StorageGateway', Promise.reject(result), true, mock)
  },
  updateVTLDeviceType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVTLDeviceType', 'StorageGateway', Promise.resolve(result), true, mock)
  },
  updateVTLDeviceTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVTLDeviceType', 'StorageGateway', Promise.resolve(result), false, mock)
  },
  updateVTLDeviceTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVTLDeviceType', 'StorageGateway', Promise.reject(result), true, mock)
  },
}
