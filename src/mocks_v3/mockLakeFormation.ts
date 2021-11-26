
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
  createLFTag: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'createLFTag', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  createLFTagAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'createLFTag', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  createLFTagThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'createLFTag', 'LakeFormation', Promise.reject(result), true, mock)
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
  deregisterResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'deregisterResource', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  deregisterResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'deregisterResource', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  deregisterResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'deregisterResource', 'LakeFormation', Promise.reject(result), true, mock)
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
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'destroy', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'destroy', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'destroy', 'LakeFormation', Promise.reject(result), true, mock)
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
  getResourceLFTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getResourceLFTags', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  getResourceLFTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getResourceLFTags', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  getResourceLFTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'getResourceLFTags', 'LakeFormation', Promise.reject(result), true, mock)
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
  listLFTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listLFTags', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  listLFTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listLFTags', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  listLFTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'listLFTags', 'LakeFormation', Promise.reject(result), true, mock)
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
  updateLFTag: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'updateLFTag', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  updateLFTagAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'updateLFTag', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  updateLFTagThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lakeformation', 'updateLFTag', 'LakeFormation', Promise.reject(result), true, mock)
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