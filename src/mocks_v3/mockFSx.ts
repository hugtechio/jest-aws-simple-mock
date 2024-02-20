
/**
* @description mocks_v3:mockFSx module is mocks for AWS-SDK V3
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
export const mockFSx = {
  associateFileSystemAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'associateFileSystemAliases', 'FSx', Promise.resolve(result), true, mock)
  },
  associateFileSystemAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'associateFileSystemAliases', 'FSx', Promise.resolve(result), false, mock)
  },
  associateFileSystemAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'associateFileSystemAliases', 'FSx', Promise.reject(result), true, mock)
  },
  cancelDataRepositoryTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'cancelDataRepositoryTask', 'FSx', Promise.resolve(result), true, mock)
  },
  cancelDataRepositoryTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'cancelDataRepositoryTask', 'FSx', Promise.resolve(result), false, mock)
  },
  cancelDataRepositoryTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'cancelDataRepositoryTask', 'FSx', Promise.reject(result), true, mock)
  },
  copyBackup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'copyBackup', 'FSx', Promise.resolve(result), true, mock)
  },
  copyBackupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'copyBackup', 'FSx', Promise.resolve(result), false, mock)
  },
  copyBackupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'copyBackup', 'FSx', Promise.reject(result), true, mock)
  },
  copySnapshotAndUpdateVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'copySnapshotAndUpdateVolume', 'FSx', Promise.resolve(result), true, mock)
  },
  copySnapshotAndUpdateVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'copySnapshotAndUpdateVolume', 'FSx', Promise.resolve(result), false, mock)
  },
  copySnapshotAndUpdateVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'copySnapshotAndUpdateVolume', 'FSx', Promise.reject(result), true, mock)
  },
  createBackup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createBackup', 'FSx', Promise.resolve(result), true, mock)
  },
  createBackupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createBackup', 'FSx', Promise.resolve(result), false, mock)
  },
  createBackupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createBackup', 'FSx', Promise.reject(result), true, mock)
  },
  createDataRepositoryAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createDataRepositoryAssociation', 'FSx', Promise.resolve(result), true, mock)
  },
  createDataRepositoryAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createDataRepositoryAssociation', 'FSx', Promise.resolve(result), false, mock)
  },
  createDataRepositoryAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createDataRepositoryAssociation', 'FSx', Promise.reject(result), true, mock)
  },
  createDataRepositoryTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createDataRepositoryTask', 'FSx', Promise.resolve(result), true, mock)
  },
  createDataRepositoryTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createDataRepositoryTask', 'FSx', Promise.resolve(result), false, mock)
  },
  createDataRepositoryTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createDataRepositoryTask', 'FSx', Promise.reject(result), true, mock)
  },
  createFileCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createFileCache', 'FSx', Promise.resolve(result), true, mock)
  },
  createFileCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createFileCache', 'FSx', Promise.resolve(result), false, mock)
  },
  createFileCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createFileCache', 'FSx', Promise.reject(result), true, mock)
  },
  createFileSystem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createFileSystem', 'FSx', Promise.resolve(result), true, mock)
  },
  createFileSystemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createFileSystem', 'FSx', Promise.resolve(result), false, mock)
  },
  createFileSystemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createFileSystem', 'FSx', Promise.reject(result), true, mock)
  },
  createFileSystemFromBackup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createFileSystemFromBackup', 'FSx', Promise.resolve(result), true, mock)
  },
  createFileSystemFromBackupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createFileSystemFromBackup', 'FSx', Promise.resolve(result), false, mock)
  },
  createFileSystemFromBackupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createFileSystemFromBackup', 'FSx', Promise.reject(result), true, mock)
  },
  createSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createSnapshot', 'FSx', Promise.resolve(result), true, mock)
  },
  createSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createSnapshot', 'FSx', Promise.resolve(result), false, mock)
  },
  createSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createSnapshot', 'FSx', Promise.reject(result), true, mock)
  },
  createStorageVirtualMachine: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createStorageVirtualMachine', 'FSx', Promise.resolve(result), true, mock)
  },
  createStorageVirtualMachineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createStorageVirtualMachine', 'FSx', Promise.resolve(result), false, mock)
  },
  createStorageVirtualMachineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createStorageVirtualMachine', 'FSx', Promise.reject(result), true, mock)
  },
  createVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createVolume', 'FSx', Promise.resolve(result), true, mock)
  },
  createVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createVolume', 'FSx', Promise.resolve(result), false, mock)
  },
  createVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createVolume', 'FSx', Promise.reject(result), true, mock)
  },
  createVolumeFromBackup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createVolumeFromBackup', 'FSx', Promise.resolve(result), true, mock)
  },
  createVolumeFromBackupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createVolumeFromBackup', 'FSx', Promise.resolve(result), false, mock)
  },
  createVolumeFromBackupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'createVolumeFromBackup', 'FSx', Promise.reject(result), true, mock)
  },
  deleteBackup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'deleteBackup', 'FSx', Promise.resolve(result), true, mock)
  },
  deleteBackupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'deleteBackup', 'FSx', Promise.resolve(result), false, mock)
  },
  deleteBackupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'deleteBackup', 'FSx', Promise.reject(result), true, mock)
  },
  deleteDataRepositoryAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'deleteDataRepositoryAssociation', 'FSx', Promise.resolve(result), true, mock)
  },
  deleteDataRepositoryAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'deleteDataRepositoryAssociation', 'FSx', Promise.resolve(result), false, mock)
  },
  deleteDataRepositoryAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'deleteDataRepositoryAssociation', 'FSx', Promise.reject(result), true, mock)
  },
  deleteFileCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'deleteFileCache', 'FSx', Promise.resolve(result), true, mock)
  },
  deleteFileCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'deleteFileCache', 'FSx', Promise.resolve(result), false, mock)
  },
  deleteFileCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'deleteFileCache', 'FSx', Promise.reject(result), true, mock)
  },
  deleteFileSystem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'deleteFileSystem', 'FSx', Promise.resolve(result), true, mock)
  },
  deleteFileSystemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'deleteFileSystem', 'FSx', Promise.resolve(result), false, mock)
  },
  deleteFileSystemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'deleteFileSystem', 'FSx', Promise.reject(result), true, mock)
  },
  deleteSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'deleteSnapshot', 'FSx', Promise.resolve(result), true, mock)
  },
  deleteSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'deleteSnapshot', 'FSx', Promise.resolve(result), false, mock)
  },
  deleteSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'deleteSnapshot', 'FSx', Promise.reject(result), true, mock)
  },
  deleteStorageVirtualMachine: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'deleteStorageVirtualMachine', 'FSx', Promise.resolve(result), true, mock)
  },
  deleteStorageVirtualMachineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'deleteStorageVirtualMachine', 'FSx', Promise.resolve(result), false, mock)
  },
  deleteStorageVirtualMachineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'deleteStorageVirtualMachine', 'FSx', Promise.reject(result), true, mock)
  },
  deleteVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'deleteVolume', 'FSx', Promise.resolve(result), true, mock)
  },
  deleteVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'deleteVolume', 'FSx', Promise.resolve(result), false, mock)
  },
  deleteVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'deleteVolume', 'FSx', Promise.reject(result), true, mock)
  },
  describeBackups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeBackups', 'FSx', Promise.resolve(result), true, mock)
  },
  describeBackupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeBackups', 'FSx', Promise.resolve(result), false, mock)
  },
  describeBackupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeBackups', 'FSx', Promise.reject(result), true, mock)
  },
  describeDataRepositoryAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeDataRepositoryAssociations', 'FSx', Promise.resolve(result), true, mock)
  },
  describeDataRepositoryAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeDataRepositoryAssociations', 'FSx', Promise.resolve(result), false, mock)
  },
  describeDataRepositoryAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeDataRepositoryAssociations', 'FSx', Promise.reject(result), true, mock)
  },
  describeDataRepositoryTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeDataRepositoryTasks', 'FSx', Promise.resolve(result), true, mock)
  },
  describeDataRepositoryTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeDataRepositoryTasks', 'FSx', Promise.resolve(result), false, mock)
  },
  describeDataRepositoryTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeDataRepositoryTasks', 'FSx', Promise.reject(result), true, mock)
  },
  describeFileCaches: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeFileCaches', 'FSx', Promise.resolve(result), true, mock)
  },
  describeFileCachesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeFileCaches', 'FSx', Promise.resolve(result), false, mock)
  },
  describeFileCachesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeFileCaches', 'FSx', Promise.reject(result), true, mock)
  },
  describeFileSystemAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeFileSystemAliases', 'FSx', Promise.resolve(result), true, mock)
  },
  describeFileSystemAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeFileSystemAliases', 'FSx', Promise.resolve(result), false, mock)
  },
  describeFileSystemAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeFileSystemAliases', 'FSx', Promise.reject(result), true, mock)
  },
  describeFileSystems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeFileSystems', 'FSx', Promise.resolve(result), true, mock)
  },
  describeFileSystemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeFileSystems', 'FSx', Promise.resolve(result), false, mock)
  },
  describeFileSystemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeFileSystems', 'FSx', Promise.reject(result), true, mock)
  },
  describeSharedVpcConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeSharedVpcConfiguration', 'FSx', Promise.resolve(result), true, mock)
  },
  describeSharedVpcConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeSharedVpcConfiguration', 'FSx', Promise.resolve(result), false, mock)
  },
  describeSharedVpcConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeSharedVpcConfiguration', 'FSx', Promise.reject(result), true, mock)
  },
  describeSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeSnapshots', 'FSx', Promise.resolve(result), true, mock)
  },
  describeSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeSnapshots', 'FSx', Promise.resolve(result), false, mock)
  },
  describeSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeSnapshots', 'FSx', Promise.reject(result), true, mock)
  },
  describeStorageVirtualMachines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeStorageVirtualMachines', 'FSx', Promise.resolve(result), true, mock)
  },
  describeStorageVirtualMachinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeStorageVirtualMachines', 'FSx', Promise.resolve(result), false, mock)
  },
  describeStorageVirtualMachinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeStorageVirtualMachines', 'FSx', Promise.reject(result), true, mock)
  },
  describeVolumes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeVolumes', 'FSx', Promise.resolve(result), true, mock)
  },
  describeVolumesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeVolumes', 'FSx', Promise.resolve(result), false, mock)
  },
  describeVolumesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'describeVolumes', 'FSx', Promise.reject(result), true, mock)
  },
  disassociateFileSystemAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'disassociateFileSystemAliases', 'FSx', Promise.resolve(result), true, mock)
  },
  disassociateFileSystemAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'disassociateFileSystemAliases', 'FSx', Promise.resolve(result), false, mock)
  },
  disassociateFileSystemAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'disassociateFileSystemAliases', 'FSx', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'listTagsForResource', 'FSx', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'listTagsForResource', 'FSx', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'listTagsForResource', 'FSx', Promise.reject(result), true, mock)
  },
  releaseFileSystemNfsV3Locks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'releaseFileSystemNfsV3Locks', 'FSx', Promise.resolve(result), true, mock)
  },
  releaseFileSystemNfsV3LocksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'releaseFileSystemNfsV3Locks', 'FSx', Promise.resolve(result), false, mock)
  },
  releaseFileSystemNfsV3LocksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'releaseFileSystemNfsV3Locks', 'FSx', Promise.reject(result), true, mock)
  },
  restoreVolumeFromSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'restoreVolumeFromSnapshot', 'FSx', Promise.resolve(result), true, mock)
  },
  restoreVolumeFromSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'restoreVolumeFromSnapshot', 'FSx', Promise.resolve(result), false, mock)
  },
  restoreVolumeFromSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'restoreVolumeFromSnapshot', 'FSx', Promise.reject(result), true, mock)
  },
  startMisconfiguredStateRecovery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'startMisconfiguredStateRecovery', 'FSx', Promise.resolve(result), true, mock)
  },
  startMisconfiguredStateRecoveryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'startMisconfiguredStateRecovery', 'FSx', Promise.resolve(result), false, mock)
  },
  startMisconfiguredStateRecoveryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'startMisconfiguredStateRecovery', 'FSx', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'tagResource', 'FSx', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'tagResource', 'FSx', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'tagResource', 'FSx', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'untagResource', 'FSx', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'untagResource', 'FSx', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'untagResource', 'FSx', Promise.reject(result), true, mock)
  },
  updateDataRepositoryAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'updateDataRepositoryAssociation', 'FSx', Promise.resolve(result), true, mock)
  },
  updateDataRepositoryAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'updateDataRepositoryAssociation', 'FSx', Promise.resolve(result), false, mock)
  },
  updateDataRepositoryAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'updateDataRepositoryAssociation', 'FSx', Promise.reject(result), true, mock)
  },
  updateFileCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'updateFileCache', 'FSx', Promise.resolve(result), true, mock)
  },
  updateFileCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'updateFileCache', 'FSx', Promise.resolve(result), false, mock)
  },
  updateFileCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'updateFileCache', 'FSx', Promise.reject(result), true, mock)
  },
  updateFileSystem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'updateFileSystem', 'FSx', Promise.resolve(result), true, mock)
  },
  updateFileSystemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'updateFileSystem', 'FSx', Promise.resolve(result), false, mock)
  },
  updateFileSystemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'updateFileSystem', 'FSx', Promise.reject(result), true, mock)
  },
  updateSharedVpcConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'updateSharedVpcConfiguration', 'FSx', Promise.resolve(result), true, mock)
  },
  updateSharedVpcConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'updateSharedVpcConfiguration', 'FSx', Promise.resolve(result), false, mock)
  },
  updateSharedVpcConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'updateSharedVpcConfiguration', 'FSx', Promise.reject(result), true, mock)
  },
  updateSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'updateSnapshot', 'FSx', Promise.resolve(result), true, mock)
  },
  updateSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'updateSnapshot', 'FSx', Promise.resolve(result), false, mock)
  },
  updateSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'updateSnapshot', 'FSx', Promise.reject(result), true, mock)
  },
  updateStorageVirtualMachine: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'updateStorageVirtualMachine', 'FSx', Promise.resolve(result), true, mock)
  },
  updateStorageVirtualMachineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'updateStorageVirtualMachine', 'FSx', Promise.resolve(result), false, mock)
  },
  updateStorageVirtualMachineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'updateStorageVirtualMachine', 'FSx', Promise.reject(result), true, mock)
  },
  updateVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'updateVolume', 'FSx', Promise.resolve(result), true, mock)
  },
  updateVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'updateVolume', 'FSx', Promise.resolve(result), false, mock)
  },
  updateVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'updateVolume', 'FSx', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'send', 'FSxClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'send', 'FSxClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fsx', 'send', 'FSxClient', Promise.reject(result), true, mock)
  }
}
