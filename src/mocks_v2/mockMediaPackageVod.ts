
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
  export const mockMediaPackageVod = {
  configureLogs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('configureLogs', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  configureLogsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('configureLogs', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  configureLogsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('configureLogs', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  createAsset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAsset', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  createAssetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAsset', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  createAssetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAsset', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  createPackagingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPackagingConfiguration', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  createPackagingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPackagingConfiguration', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  createPackagingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPackagingConfiguration', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  createPackagingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPackagingGroup', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  createPackagingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPackagingGroup', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  createPackagingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPackagingGroup', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  deleteAsset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAsset', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  deleteAssetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAsset', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  deleteAssetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAsset', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  deletePackagingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePackagingConfiguration', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  deletePackagingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePackagingConfiguration', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  deletePackagingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePackagingConfiguration', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  deletePackagingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePackagingGroup', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  deletePackagingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePackagingGroup', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  deletePackagingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePackagingGroup', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  describeAsset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAsset', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  describeAssetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAsset', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  describeAssetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAsset', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  describePackagingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePackagingConfiguration', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  describePackagingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePackagingConfiguration', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  describePackagingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePackagingConfiguration', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  describePackagingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePackagingGroup', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  describePackagingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePackagingGroup', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  describePackagingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePackagingGroup', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  listAssets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssets', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  listAssetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssets', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  listAssetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssets', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  listPackagingConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPackagingConfigurations', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  listPackagingConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPackagingConfigurations', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  listPackagingConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPackagingConfigurations', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  listPackagingGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPackagingGroups', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  listPackagingGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPackagingGroups', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  listPackagingGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPackagingGroups', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  updatePackagingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePackagingGroup', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  updatePackagingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePackagingGroup', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  updatePackagingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePackagingGroup', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
}
