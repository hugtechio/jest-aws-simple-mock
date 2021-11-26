
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
  export const mockLakeFormation = {
  addLFTagsToResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addLFTagsToResource', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  addLFTagsToResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addLFTagsToResource', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  addLFTagsToResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addLFTagsToResource', 'LakeFormation', Promise.reject(result), true, mock)
  },
  batchGrantPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGrantPermissions', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  batchGrantPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGrantPermissions', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  batchGrantPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGrantPermissions', 'LakeFormation', Promise.reject(result), true, mock)
  },
  batchRevokePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchRevokePermissions', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  batchRevokePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchRevokePermissions', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  batchRevokePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchRevokePermissions', 'LakeFormation', Promise.reject(result), true, mock)
  },
  createLFTag: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLFTag', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  createLFTagAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLFTag', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  createLFTagThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLFTag', 'LakeFormation', Promise.reject(result), true, mock)
  },
  deleteLFTag: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLFTag', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  deleteLFTagAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLFTag', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  deleteLFTagThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLFTag', 'LakeFormation', Promise.reject(result), true, mock)
  },
  deregisterResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterResource', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  deregisterResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterResource', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  deregisterResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterResource', 'LakeFormation', Promise.reject(result), true, mock)
  },
  describeResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeResource', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  describeResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeResource', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  describeResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeResource', 'LakeFormation', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'LakeFormation', Promise.reject(result), true, mock)
  },
  getDataLakeSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataLakeSettings', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  getDataLakeSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataLakeSettings', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  getDataLakeSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataLakeSettings', 'LakeFormation', Promise.reject(result), true, mock)
  },
  getEffectivePermissionsForPath: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEffectivePermissionsForPath', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  getEffectivePermissionsForPathAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEffectivePermissionsForPath', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  getEffectivePermissionsForPathThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEffectivePermissionsForPath', 'LakeFormation', Promise.reject(result), true, mock)
  },
  getLFTag: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLFTag', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  getLFTagAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLFTag', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  getLFTagThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLFTag', 'LakeFormation', Promise.reject(result), true, mock)
  },
  getResourceLFTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceLFTags', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  getResourceLFTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceLFTags', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  getResourceLFTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceLFTags', 'LakeFormation', Promise.reject(result), true, mock)
  },
  grantPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('grantPermissions', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  grantPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('grantPermissions', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  grantPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('grantPermissions', 'LakeFormation', Promise.reject(result), true, mock)
  },
  listLFTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLFTags', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  listLFTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLFTags', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  listLFTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLFTags', 'LakeFormation', Promise.reject(result), true, mock)
  },
  listPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissions', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  listPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissions', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  listPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPermissions', 'LakeFormation', Promise.reject(result), true, mock)
  },
  listResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResources', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  listResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResources', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  listResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResources', 'LakeFormation', Promise.reject(result), true, mock)
  },
  putDataLakeSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDataLakeSettings', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  putDataLakeSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDataLakeSettings', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  putDataLakeSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putDataLakeSettings', 'LakeFormation', Promise.reject(result), true, mock)
  },
  registerResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerResource', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  registerResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerResource', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  registerResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerResource', 'LakeFormation', Promise.reject(result), true, mock)
  },
  removeLFTagsFromResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeLFTagsFromResource', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  removeLFTagsFromResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeLFTagsFromResource', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  removeLFTagsFromResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeLFTagsFromResource', 'LakeFormation', Promise.reject(result), true, mock)
  },
  revokePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokePermissions', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  revokePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokePermissions', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  revokePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokePermissions', 'LakeFormation', Promise.reject(result), true, mock)
  },
  searchDatabasesByLFTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchDatabasesByLFTags', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  searchDatabasesByLFTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchDatabasesByLFTags', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  searchDatabasesByLFTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchDatabasesByLFTags', 'LakeFormation', Promise.reject(result), true, mock)
  },
  searchTablesByLFTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchTablesByLFTags', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  searchTablesByLFTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchTablesByLFTags', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  searchTablesByLFTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchTablesByLFTags', 'LakeFormation', Promise.reject(result), true, mock)
  },
  updateLFTag: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLFTag', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  updateLFTagAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLFTag', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  updateLFTagThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLFTag', 'LakeFormation', Promise.reject(result), true, mock)
  },
  updateResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResource', 'LakeFormation', Promise.resolve(result), true, mock)
  },
  updateResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResource', 'LakeFormation', Promise.resolve(result), false, mock)
  },
  updateResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResource', 'LakeFormation', Promise.reject(result), true, mock)
  },
}
