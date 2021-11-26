
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockMediaPackageVod = {
  configureLogs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'configureLogs', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  configureLogsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'configureLogs', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  configureLogsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'configureLogs', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  createAsset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'createAsset', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  createAssetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'createAsset', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  createAssetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'createAsset', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  createPackagingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'createPackagingConfiguration', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  createPackagingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'createPackagingConfiguration', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  createPackagingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'createPackagingConfiguration', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  createPackagingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'createPackagingGroup', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  createPackagingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'createPackagingGroup', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  createPackagingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'createPackagingGroup', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  deleteAsset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'deleteAsset', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  deleteAssetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'deleteAsset', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  deleteAssetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'deleteAsset', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  deletePackagingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'deletePackagingConfiguration', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  deletePackagingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'deletePackagingConfiguration', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  deletePackagingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'deletePackagingConfiguration', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  deletePackagingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'deletePackagingGroup', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  deletePackagingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'deletePackagingGroup', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  deletePackagingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'deletePackagingGroup', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  describeAsset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'describeAsset', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  describeAssetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'describeAsset', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  describeAssetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'describeAsset', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  describePackagingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'describePackagingConfiguration', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  describePackagingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'describePackagingConfiguration', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  describePackagingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'describePackagingConfiguration', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  describePackagingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'describePackagingGroup', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  describePackagingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'describePackagingGroup', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  describePackagingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'describePackagingGroup', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'destroy', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'destroy', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'destroy', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  listAssets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'listAssets', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  listAssetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'listAssets', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  listAssetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'listAssets', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  listPackagingConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'listPackagingConfigurations', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  listPackagingConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'listPackagingConfigurations', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  listPackagingConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'listPackagingConfigurations', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  listPackagingGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'listPackagingGroups', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  listPackagingGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'listPackagingGroups', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  listPackagingGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'listPackagingGroups', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'listTagsForResource', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'listTagsForResource', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'listTagsForResource', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'tagResource', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'tagResource', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'tagResource', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'untagResource', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'untagResource', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'untagResource', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  updatePackagingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'updatePackagingGroup', 'MediaPackageVod', Promise.resolve(result), true, mock)
  },
  updatePackagingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'updatePackagingGroup', 'MediaPackageVod', Promise.resolve(result), false, mock)
  },
  updatePackagingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'updatePackagingGroup', 'MediaPackageVod', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'send', 'MediaPackageVodClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'send', 'MediaPackageVodClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediapackage-vod', 'send', 'MediaPackageVodClient', Promise.reject(result), true, mock)
  }
}