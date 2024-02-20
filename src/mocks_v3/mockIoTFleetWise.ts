
/**
* @description mocks_v3:mockIoTFleetWise module is mocks for AWS-SDK V3
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
export const mockIoTFleetWise = {
  associateVehicleFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'associateVehicleFleet', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  associateVehicleFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'associateVehicleFleet', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  associateVehicleFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'associateVehicleFleet', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  batchCreateVehicle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'batchCreateVehicle', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  batchCreateVehicleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'batchCreateVehicle', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  batchCreateVehicleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'batchCreateVehicle', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  batchUpdateVehicle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'batchUpdateVehicle', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  batchUpdateVehicleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'batchUpdateVehicle', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  batchUpdateVehicleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'batchUpdateVehicle', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  createCampaign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'createCampaign', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  createCampaignAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'createCampaign', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  createCampaignThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'createCampaign', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  createDecoderManifest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'createDecoderManifest', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  createDecoderManifestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'createDecoderManifest', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  createDecoderManifestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'createDecoderManifest', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  createFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'createFleet', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  createFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'createFleet', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  createFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'createFleet', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  createModelManifest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'createModelManifest', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  createModelManifestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'createModelManifest', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  createModelManifestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'createModelManifest', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  createSignalCatalog: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'createSignalCatalog', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  createSignalCatalogAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'createSignalCatalog', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  createSignalCatalogThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'createSignalCatalog', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  createVehicle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'createVehicle', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  createVehicleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'createVehicle', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  createVehicleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'createVehicle', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  deleteCampaign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'deleteCampaign', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  deleteCampaignAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'deleteCampaign', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  deleteCampaignThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'deleteCampaign', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  deleteDecoderManifest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'deleteDecoderManifest', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  deleteDecoderManifestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'deleteDecoderManifest', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  deleteDecoderManifestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'deleteDecoderManifest', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  deleteFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'deleteFleet', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  deleteFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'deleteFleet', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  deleteFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'deleteFleet', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  deleteModelManifest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'deleteModelManifest', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  deleteModelManifestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'deleteModelManifest', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  deleteModelManifestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'deleteModelManifest', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  deleteSignalCatalog: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'deleteSignalCatalog', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  deleteSignalCatalogAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'deleteSignalCatalog', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  deleteSignalCatalogThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'deleteSignalCatalog', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  deleteVehicle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'deleteVehicle', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  deleteVehicleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'deleteVehicle', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  deleteVehicleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'deleteVehicle', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  disassociateVehicleFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'disassociateVehicleFleet', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  disassociateVehicleFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'disassociateVehicleFleet', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  disassociateVehicleFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'disassociateVehicleFleet', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  getCampaign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getCampaign', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  getCampaignAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getCampaign', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  getCampaignThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getCampaign', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  getDecoderManifest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getDecoderManifest', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  getDecoderManifestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getDecoderManifest', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  getDecoderManifestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getDecoderManifest', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  getEncryptionConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getEncryptionConfiguration', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  getEncryptionConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getEncryptionConfiguration', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  getEncryptionConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getEncryptionConfiguration', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  getFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getFleet', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  getFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getFleet', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  getFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getFleet', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  getLoggingOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getLoggingOptions', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  getLoggingOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getLoggingOptions', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  getLoggingOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getLoggingOptions', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  getModelManifest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getModelManifest', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  getModelManifestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getModelManifest', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  getModelManifestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getModelManifest', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  getRegisterAccountStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getRegisterAccountStatus', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  getRegisterAccountStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getRegisterAccountStatus', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  getRegisterAccountStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getRegisterAccountStatus', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  getSignalCatalog: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getSignalCatalog', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  getSignalCatalogAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getSignalCatalog', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  getSignalCatalogThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getSignalCatalog', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  getVehicle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getVehicle', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  getVehicleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getVehicle', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  getVehicleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getVehicle', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  getVehicleStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getVehicleStatus', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  getVehicleStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getVehicleStatus', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  getVehicleStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'getVehicleStatus', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  importDecoderManifest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'importDecoderManifest', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  importDecoderManifestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'importDecoderManifest', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  importDecoderManifestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'importDecoderManifest', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  importSignalCatalog: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'importSignalCatalog', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  importSignalCatalogAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'importSignalCatalog', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  importSignalCatalogThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'importSignalCatalog', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  listCampaigns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listCampaigns', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  listCampaignsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listCampaigns', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  listCampaignsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listCampaigns', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  listDecoderManifestNetworkInterfaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listDecoderManifestNetworkInterfaces', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  listDecoderManifestNetworkInterfacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listDecoderManifestNetworkInterfaces', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  listDecoderManifestNetworkInterfacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listDecoderManifestNetworkInterfaces', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  listDecoderManifestSignals: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listDecoderManifestSignals', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  listDecoderManifestSignalsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listDecoderManifestSignals', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  listDecoderManifestSignalsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listDecoderManifestSignals', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  listDecoderManifests: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listDecoderManifests', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  listDecoderManifestsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listDecoderManifests', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  listDecoderManifestsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listDecoderManifests', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  listFleets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listFleets', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  listFleetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listFleets', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  listFleetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listFleets', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  listFleetsForVehicle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listFleetsForVehicle', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  listFleetsForVehicleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listFleetsForVehicle', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  listFleetsForVehicleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listFleetsForVehicle', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  listModelManifestNodes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listModelManifestNodes', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  listModelManifestNodesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listModelManifestNodes', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  listModelManifestNodesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listModelManifestNodes', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  listModelManifests: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listModelManifests', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  listModelManifestsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listModelManifests', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  listModelManifestsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listModelManifests', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  listSignalCatalogNodes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listSignalCatalogNodes', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  listSignalCatalogNodesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listSignalCatalogNodes', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  listSignalCatalogNodesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listSignalCatalogNodes', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  listSignalCatalogs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listSignalCatalogs', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  listSignalCatalogsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listSignalCatalogs', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  listSignalCatalogsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listSignalCatalogs', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listTagsForResource', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listTagsForResource', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listTagsForResource', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  listVehicles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listVehicles', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  listVehiclesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listVehicles', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  listVehiclesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listVehicles', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  listVehiclesInFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listVehiclesInFleet', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  listVehiclesInFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listVehiclesInFleet', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  listVehiclesInFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'listVehiclesInFleet', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  putEncryptionConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'putEncryptionConfiguration', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  putEncryptionConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'putEncryptionConfiguration', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  putEncryptionConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'putEncryptionConfiguration', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  putLoggingOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'putLoggingOptions', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  putLoggingOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'putLoggingOptions', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  putLoggingOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'putLoggingOptions', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  registerAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'registerAccount', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  registerAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'registerAccount', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  registerAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'registerAccount', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'tagResource', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'tagResource', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'tagResource', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'untagResource', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'untagResource', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'untagResource', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  updateCampaign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'updateCampaign', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  updateCampaignAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'updateCampaign', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  updateCampaignThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'updateCampaign', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  updateDecoderManifest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'updateDecoderManifest', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  updateDecoderManifestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'updateDecoderManifest', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  updateDecoderManifestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'updateDecoderManifest', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  updateFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'updateFleet', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  updateFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'updateFleet', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  updateFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'updateFleet', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  updateModelManifest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'updateModelManifest', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  updateModelManifestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'updateModelManifest', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  updateModelManifestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'updateModelManifest', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  updateSignalCatalog: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'updateSignalCatalog', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  updateSignalCatalogAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'updateSignalCatalog', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  updateSignalCatalogThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'updateSignalCatalog', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  updateVehicle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'updateVehicle', 'IoTFleetWise', Promise.resolve(result), true, mock)
  },
  updateVehicleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'updateVehicle', 'IoTFleetWise', Promise.resolve(result), false, mock)
  },
  updateVehicleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'updateVehicle', 'IoTFleetWise', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'send', 'IoTFleetWiseClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'send', 'IoTFleetWiseClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotfleetwise', 'send', 'IoTFleetWiseClient', Promise.reject(result), true, mock)
  }
}
