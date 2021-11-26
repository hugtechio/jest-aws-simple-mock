
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockIoTSiteWise = {
  associateAssets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'associateAssets', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  associateAssetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'associateAssets', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  associateAssetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'associateAssets', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  batchAssociateProjectAssets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'batchAssociateProjectAssets', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  batchAssociateProjectAssetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'batchAssociateProjectAssets', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  batchAssociateProjectAssetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'batchAssociateProjectAssets', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  batchDisassociateProjectAssets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'batchDisassociateProjectAssets', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  batchDisassociateProjectAssetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'batchDisassociateProjectAssets', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  batchDisassociateProjectAssetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'batchDisassociateProjectAssets', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  batchPutAssetPropertyValue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'batchPutAssetPropertyValue', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  batchPutAssetPropertyValueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'batchPutAssetPropertyValue', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  batchPutAssetPropertyValueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'batchPutAssetPropertyValue', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  createAccessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'createAccessPolicy', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  createAccessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'createAccessPolicy', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  createAccessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'createAccessPolicy', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  createAsset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'createAsset', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  createAssetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'createAsset', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  createAssetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'createAsset', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  createAssetModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'createAssetModel', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  createAssetModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'createAssetModel', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  createAssetModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'createAssetModel', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  createDashboard: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'createDashboard', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  createDashboardAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'createDashboard', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  createDashboardThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'createDashboard', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  createGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'createGateway', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  createGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'createGateway', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  createGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'createGateway', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  createPortal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'createPortal', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  createPortalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'createPortal', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  createPortalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'createPortal', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  createProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'createProject', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  createProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'createProject', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  createProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'createProject', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  deleteAccessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'deleteAccessPolicy', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  deleteAccessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'deleteAccessPolicy', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  deleteAccessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'deleteAccessPolicy', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  deleteAsset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'deleteAsset', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  deleteAssetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'deleteAsset', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  deleteAssetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'deleteAsset', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  deleteAssetModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'deleteAssetModel', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  deleteAssetModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'deleteAssetModel', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  deleteAssetModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'deleteAssetModel', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  deleteDashboard: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'deleteDashboard', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  deleteDashboardAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'deleteDashboard', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  deleteDashboardThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'deleteDashboard', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  deleteGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'deleteGateway', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  deleteGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'deleteGateway', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  deleteGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'deleteGateway', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  deletePortal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'deletePortal', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  deletePortalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'deletePortal', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  deletePortalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'deletePortal', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  deleteProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'deleteProject', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  deleteProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'deleteProject', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  deleteProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'deleteProject', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  describeAccessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeAccessPolicy', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  describeAccessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeAccessPolicy', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  describeAccessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeAccessPolicy', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  describeAsset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeAsset', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  describeAssetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeAsset', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  describeAssetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeAsset', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  describeAssetModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeAssetModel', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  describeAssetModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeAssetModel', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  describeAssetModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeAssetModel', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  describeAssetProperty: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeAssetProperty', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  describeAssetPropertyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeAssetProperty', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  describeAssetPropertyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeAssetProperty', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  describeDashboard: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeDashboard', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  describeDashboardAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeDashboard', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  describeDashboardThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeDashboard', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  describeDefaultEncryptionConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeDefaultEncryptionConfiguration', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  describeDefaultEncryptionConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeDefaultEncryptionConfiguration', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  describeDefaultEncryptionConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeDefaultEncryptionConfiguration', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  describeGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeGateway', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  describeGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeGateway', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  describeGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeGateway', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  describeGatewayCapabilityConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeGatewayCapabilityConfiguration', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  describeGatewayCapabilityConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeGatewayCapabilityConfiguration', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  describeGatewayCapabilityConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeGatewayCapabilityConfiguration', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  describeLoggingOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeLoggingOptions', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  describeLoggingOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeLoggingOptions', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  describeLoggingOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeLoggingOptions', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  describePortal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describePortal', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  describePortalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describePortal', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  describePortalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describePortal', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  describeProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeProject', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  describeProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeProject', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  describeProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeProject', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  describeStorageConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeStorageConfiguration', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  describeStorageConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeStorageConfiguration', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  describeStorageConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'describeStorageConfiguration', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'destroy', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'destroy', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'destroy', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  disassociateAssets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'disassociateAssets', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  disassociateAssetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'disassociateAssets', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  disassociateAssetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'disassociateAssets', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  getAssetPropertyAggregates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'getAssetPropertyAggregates', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  getAssetPropertyAggregatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'getAssetPropertyAggregates', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  getAssetPropertyAggregatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'getAssetPropertyAggregates', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  getAssetPropertyValue: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'getAssetPropertyValue', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  getAssetPropertyValueAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'getAssetPropertyValue', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  getAssetPropertyValueThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'getAssetPropertyValue', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  getAssetPropertyValueHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'getAssetPropertyValueHistory', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  getAssetPropertyValueHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'getAssetPropertyValueHistory', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  getAssetPropertyValueHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'getAssetPropertyValueHistory', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  getInterpolatedAssetPropertyValues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'getInterpolatedAssetPropertyValues', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  getInterpolatedAssetPropertyValuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'getInterpolatedAssetPropertyValues', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  getInterpolatedAssetPropertyValuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'getInterpolatedAssetPropertyValues', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  listAccessPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listAccessPolicies', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  listAccessPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listAccessPolicies', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  listAccessPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listAccessPolicies', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  listAssetModels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listAssetModels', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  listAssetModelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listAssetModels', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  listAssetModelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listAssetModels', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  listAssetRelationships: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listAssetRelationships', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  listAssetRelationshipsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listAssetRelationships', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  listAssetRelationshipsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listAssetRelationships', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  listAssets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listAssets', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  listAssetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listAssets', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  listAssetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listAssets', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  listAssociatedAssets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listAssociatedAssets', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  listAssociatedAssetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listAssociatedAssets', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  listAssociatedAssetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listAssociatedAssets', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  listDashboards: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listDashboards', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  listDashboardsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listDashboards', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  listDashboardsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listDashboards', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  listGateways: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listGateways', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  listGatewaysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listGateways', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  listGatewaysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listGateways', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  listPortals: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listPortals', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  listPortalsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listPortals', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  listPortalsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listPortals', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  listProjectAssets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listProjectAssets', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  listProjectAssetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listProjectAssets', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  listProjectAssetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listProjectAssets', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  listProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listProjects', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  listProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listProjects', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  listProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listProjects', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listTagsForResource', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listTagsForResource', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'listTagsForResource', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  putDefaultEncryptionConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'putDefaultEncryptionConfiguration', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  putDefaultEncryptionConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'putDefaultEncryptionConfiguration', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  putDefaultEncryptionConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'putDefaultEncryptionConfiguration', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  putLoggingOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'putLoggingOptions', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  putLoggingOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'putLoggingOptions', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  putLoggingOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'putLoggingOptions', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  putStorageConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'putStorageConfiguration', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  putStorageConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'putStorageConfiguration', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  putStorageConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'putStorageConfiguration', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'tagResource', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'tagResource', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'tagResource', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'untagResource', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'untagResource', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'untagResource', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  updateAccessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateAccessPolicy', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  updateAccessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateAccessPolicy', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  updateAccessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateAccessPolicy', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  updateAsset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateAsset', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  updateAssetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateAsset', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  updateAssetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateAsset', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  updateAssetModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateAssetModel', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  updateAssetModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateAssetModel', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  updateAssetModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateAssetModel', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  updateAssetProperty: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateAssetProperty', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  updateAssetPropertyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateAssetProperty', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  updateAssetPropertyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateAssetProperty', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  updateDashboard: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateDashboard', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  updateDashboardAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateDashboard', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  updateDashboardThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateDashboard', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  updateGateway: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateGateway', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  updateGatewayAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateGateway', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  updateGatewayThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateGateway', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  updateGatewayCapabilityConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateGatewayCapabilityConfiguration', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  updateGatewayCapabilityConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateGatewayCapabilityConfiguration', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  updateGatewayCapabilityConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateGatewayCapabilityConfiguration', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  updatePortal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updatePortal', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  updatePortalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updatePortal', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  updatePortalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updatePortal', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  updateProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateProject', 'IoTSiteWise', Promise.resolve(result), true, mock)
  },
  updateProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateProject', 'IoTSiteWise', Promise.resolve(result), false, mock)
  },
  updateProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'updateProject', 'IoTSiteWise', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'send', 'IoTSiteWiseClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'send', 'IoTSiteWiseClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsitewise', 'send', 'IoTSiteWiseClient', Promise.reject(result), true, mock)
  }
}