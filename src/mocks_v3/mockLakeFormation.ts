
/**
* @description mocks_v3:mockLakeFormation module is mocks for AWS-SDK V3
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
export const mockLakeFormation = {
  addLFTagsToResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'addLFTagsToResource', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  addLFTagsToResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'addLFTagsToResource', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  addLFTagsToResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'addLFTagsToResource', 'LakeFormation', Promise.reject(result), true, mock)
  },
  assumeDecoratedRoleWithSAML: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'assumeDecoratedRoleWithSAML', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  assumeDecoratedRoleWithSAMLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'assumeDecoratedRoleWithSAML', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  assumeDecoratedRoleWithSAMLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'assumeDecoratedRoleWithSAML', 'LakeFormation', Promise.reject(result), true, mock)
  },
  batchGrantPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'batchGrantPermissions', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  batchGrantPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'batchGrantPermissions', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  batchGrantPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'batchGrantPermissions', 'LakeFormation', Promise.reject(result), true, mock)
  },
  batchRevokePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'batchRevokePermissions', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  batchRevokePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'batchRevokePermissions', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  batchRevokePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'batchRevokePermissions', 'LakeFormation', Promise.reject(result), true, mock)
  },
  cancelTransaction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'cancelTransaction', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  cancelTransactionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'cancelTransaction', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  cancelTransactionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'cancelTransaction', 'LakeFormation', Promise.reject(result), true, mock)
  },
  commitTransaction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'commitTransaction', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  commitTransactionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'commitTransaction', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  commitTransactionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'commitTransaction', 'LakeFormation', Promise.reject(result), true, mock)
  },
  createDataCellsFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'createDataCellsFilter', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  createDataCellsFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'createDataCellsFilter', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  createDataCellsFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'createDataCellsFilter', 'LakeFormation', Promise.reject(result), true, mock)
  },
  createLFTag: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'createLFTag', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  createLFTagAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'createLFTag', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  createLFTagThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'createLFTag', 'LakeFormation', Promise.reject(result), true, mock)
  },
  createLakeFormationIdentityCenterConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'createLakeFormationIdentityCenterConfiguration', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  createLakeFormationIdentityCenterConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'createLakeFormationIdentityCenterConfiguration', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  createLakeFormationIdentityCenterConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'createLakeFormationIdentityCenterConfiguration', 'LakeFormation', Promise.reject(result), true, mock)
  },
  createLakeFormationOptIn: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'createLakeFormationOptIn', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  createLakeFormationOptInAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'createLakeFormationOptIn', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  createLakeFormationOptInThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'createLakeFormationOptIn', 'LakeFormation', Promise.reject(result), true, mock)
  },
  deleteDataCellsFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'deleteDataCellsFilter', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  deleteDataCellsFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'deleteDataCellsFilter', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  deleteDataCellsFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'deleteDataCellsFilter', 'LakeFormation', Promise.reject(result), true, mock)
  },
  deleteLFTag: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'deleteLFTag', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  deleteLFTagAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'deleteLFTag', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  deleteLFTagThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'deleteLFTag', 'LakeFormation', Promise.reject(result), true, mock)
  },
  deleteLakeFormationIdentityCenterConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'deleteLakeFormationIdentityCenterConfiguration', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  deleteLakeFormationIdentityCenterConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'deleteLakeFormationIdentityCenterConfiguration', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  deleteLakeFormationIdentityCenterConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'deleteLakeFormationIdentityCenterConfiguration', 'LakeFormation', Promise.reject(result), true, mock)
  },
  deleteLakeFormationOptIn: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'deleteLakeFormationOptIn', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  deleteLakeFormationOptInAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'deleteLakeFormationOptIn', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  deleteLakeFormationOptInThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'deleteLakeFormationOptIn', 'LakeFormation', Promise.reject(result), true, mock)
  },
  deleteObjectsOnCancel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'deleteObjectsOnCancel', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  deleteObjectsOnCancelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'deleteObjectsOnCancel', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  deleteObjectsOnCancelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'deleteObjectsOnCancel', 'LakeFormation', Promise.reject(result), true, mock)
  },
  deregisterResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'deregisterResource', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  deregisterResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'deregisterResource', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  deregisterResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'deregisterResource', 'LakeFormation', Promise.reject(result), true, mock)
  },
  describeLakeFormationIdentityCenterConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'describeLakeFormationIdentityCenterConfiguration', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  describeLakeFormationIdentityCenterConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'describeLakeFormationIdentityCenterConfiguration', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  describeLakeFormationIdentityCenterConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'describeLakeFormationIdentityCenterConfiguration', 'LakeFormation', Promise.reject(result), true, mock)
  },
  describeResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'describeResource', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  describeResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'describeResource', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  describeResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'describeResource', 'LakeFormation', Promise.reject(result), true, mock)
  },
  describeTransaction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'describeTransaction', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  describeTransactionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'describeTransaction', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  describeTransactionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'describeTransaction', 'LakeFormation', Promise.reject(result), true, mock)
  },
  extendTransaction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'extendTransaction', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  extendTransactionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'extendTransaction', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  extendTransactionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'extendTransaction', 'LakeFormation', Promise.reject(result), true, mock)
  },
  getDataCellsFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getDataCellsFilter', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  getDataCellsFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getDataCellsFilter', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  getDataCellsFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getDataCellsFilter', 'LakeFormation', Promise.reject(result), true, mock)
  },
  getDataLakeSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getDataLakeSettings', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  getDataLakeSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getDataLakeSettings', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  getDataLakeSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getDataLakeSettings', 'LakeFormation', Promise.reject(result), true, mock)
  },
  getEffectivePermissionsForPath: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getEffectivePermissionsForPath', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  getEffectivePermissionsForPathAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getEffectivePermissionsForPath', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  getEffectivePermissionsForPathThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getEffectivePermissionsForPath', 'LakeFormation', Promise.reject(result), true, mock)
  },
  getLFTag: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getLFTag', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  getLFTagAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getLFTag', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  getLFTagThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getLFTag', 'LakeFormation', Promise.reject(result), true, mock)
  },
  getQueryState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getQueryState', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  getQueryStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getQueryState', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  getQueryStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getQueryState', 'LakeFormation', Promise.reject(result), true, mock)
  },
  getQueryStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getQueryStatistics', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  getQueryStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getQueryStatistics', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  getQueryStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getQueryStatistics', 'LakeFormation', Promise.reject(result), true, mock)
  },
  getResourceLFTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getResourceLFTags', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  getResourceLFTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getResourceLFTags', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  getResourceLFTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getResourceLFTags', 'LakeFormation', Promise.reject(result), true, mock)
  },
  getTableObjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getTableObjects', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  getTableObjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getTableObjects', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  getTableObjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getTableObjects', 'LakeFormation', Promise.reject(result), true, mock)
  },
  getTemporaryGluePartitionCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getTemporaryGluePartitionCredentials', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  getTemporaryGluePartitionCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getTemporaryGluePartitionCredentials', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  getTemporaryGluePartitionCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getTemporaryGluePartitionCredentials', 'LakeFormation', Promise.reject(result), true, mock)
  },
  getTemporaryGlueTableCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getTemporaryGlueTableCredentials', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  getTemporaryGlueTableCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getTemporaryGlueTableCredentials', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  getTemporaryGlueTableCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getTemporaryGlueTableCredentials', 'LakeFormation', Promise.reject(result), true, mock)
  },
  getWorkUnitResults: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getWorkUnitResults', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  getWorkUnitResultsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getWorkUnitResults', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  getWorkUnitResultsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getWorkUnitResults', 'LakeFormation', Promise.reject(result), true, mock)
  },
  getWorkUnits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getWorkUnits', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  getWorkUnitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getWorkUnits', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  getWorkUnitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getWorkUnits', 'LakeFormation', Promise.reject(result), true, mock)
  },
  grantPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'grantPermissions', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  grantPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'grantPermissions', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  grantPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'grantPermissions', 'LakeFormation', Promise.reject(result), true, mock)
  },
  listDataCellsFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listDataCellsFilter', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  listDataCellsFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listDataCellsFilter', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  listDataCellsFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listDataCellsFilter', 'LakeFormation', Promise.reject(result), true, mock)
  },
  listLFTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listLFTags', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  listLFTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listLFTags', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  listLFTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listLFTags', 'LakeFormation', Promise.reject(result), true, mock)
  },
  listLakeFormationOptIns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listLakeFormationOptIns', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  listLakeFormationOptInsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listLakeFormationOptIns', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  listLakeFormationOptInsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listLakeFormationOptIns', 'LakeFormation', Promise.reject(result), true, mock)
  },
  listPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listPermissions', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  listPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listPermissions', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  listPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listPermissions', 'LakeFormation', Promise.reject(result), true, mock)
  },
  listResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listResources', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  listResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listResources', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  listResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listResources', 'LakeFormation', Promise.reject(result), true, mock)
  },
  listTableStorageOptimizers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listTableStorageOptimizers', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  listTableStorageOptimizersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listTableStorageOptimizers', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  listTableStorageOptimizersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listTableStorageOptimizers', 'LakeFormation', Promise.reject(result), true, mock)
  },
  listTransactions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listTransactions', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  listTransactionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listTransactions', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  listTransactionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listTransactions', 'LakeFormation', Promise.reject(result), true, mock)
  },
  putDataLakeSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'putDataLakeSettings', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  putDataLakeSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'putDataLakeSettings', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  putDataLakeSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'putDataLakeSettings', 'LakeFormation', Promise.reject(result), true, mock)
  },
  registerResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'registerResource', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  registerResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'registerResource', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  registerResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'registerResource', 'LakeFormation', Promise.reject(result), true, mock)
  },
  removeLFTagsFromResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'removeLFTagsFromResource', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  removeLFTagsFromResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'removeLFTagsFromResource', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  removeLFTagsFromResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'removeLFTagsFromResource', 'LakeFormation', Promise.reject(result), true, mock)
  },
  revokePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'revokePermissions', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  revokePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'revokePermissions', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  revokePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'revokePermissions', 'LakeFormation', Promise.reject(result), true, mock)
  },
  searchDatabasesByLFTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'searchDatabasesByLFTags', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  searchDatabasesByLFTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'searchDatabasesByLFTags', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  searchDatabasesByLFTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'searchDatabasesByLFTags', 'LakeFormation', Promise.reject(result), true, mock)
  },
  searchTablesByLFTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'searchTablesByLFTags', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  searchTablesByLFTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'searchTablesByLFTags', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  searchTablesByLFTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'searchTablesByLFTags', 'LakeFormation', Promise.reject(result), true, mock)
  },
  startQueryPlanning: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'startQueryPlanning', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  startQueryPlanningAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'startQueryPlanning', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  startQueryPlanningThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'startQueryPlanning', 'LakeFormation', Promise.reject(result), true, mock)
  },
  startTransaction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'startTransaction', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  startTransactionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'startTransaction', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  startTransactionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'startTransaction', 'LakeFormation', Promise.reject(result), true, mock)
  },
  updateDataCellsFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'updateDataCellsFilter', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  updateDataCellsFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'updateDataCellsFilter', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  updateDataCellsFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'updateDataCellsFilter', 'LakeFormation', Promise.reject(result), true, mock)
  },
  updateLFTag: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'updateLFTag', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  updateLFTagAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'updateLFTag', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  updateLFTagThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'updateLFTag', 'LakeFormation', Promise.reject(result), true, mock)
  },
  updateLakeFormationIdentityCenterConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'updateLakeFormationIdentityCenterConfiguration', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  updateLakeFormationIdentityCenterConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'updateLakeFormationIdentityCenterConfiguration', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  updateLakeFormationIdentityCenterConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'updateLakeFormationIdentityCenterConfiguration', 'LakeFormation', Promise.reject(result), true, mock)
  },
  updateResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'updateResource', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  updateResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'updateResource', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  updateResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'updateResource', 'LakeFormation', Promise.reject(result), true, mock)
  },
  updateTableObjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'updateTableObjects', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  updateTableObjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'updateTableObjects', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  updateTableObjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'updateTableObjects', 'LakeFormation', Promise.reject(result), true, mock)
  },
  updateTableStorageOptimizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'updateTableStorageOptimizer', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  updateTableStorageOptimizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'updateTableStorageOptimizer', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  updateTableStorageOptimizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'updateTableStorageOptimizer', 'LakeFormation', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'send', 'LakeFormationClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'send', 'LakeFormationClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'send', 'LakeFormationClient', Promise.reject(result), true, mock)
  }
}
