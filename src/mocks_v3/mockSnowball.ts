
/**
* @description mocks_v3:mockSnowball module is mocks for AWS-SDK V3
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
export const mockSnowball = {
  cancelCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'cancelCluster', 'Snowball', Promise.resolve(result), true, mock)
  },
  cancelClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'cancelCluster', 'Snowball', Promise.resolve(result), false, mock)
  },
  cancelClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'cancelCluster', 'Snowball', Promise.reject(result), true, mock)
  },
  cancelJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'cancelJob', 'Snowball', Promise.resolve(result), true, mock)
  },
  cancelJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'cancelJob', 'Snowball', Promise.resolve(result), false, mock)
  },
  cancelJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'cancelJob', 'Snowball', Promise.reject(result), true, mock)
  },
  createAddress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'createAddress', 'Snowball', Promise.resolve(result), true, mock)
  },
  createAddressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'createAddress', 'Snowball', Promise.resolve(result), false, mock)
  },
  createAddressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'createAddress', 'Snowball', Promise.reject(result), true, mock)
  },
  createCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'createCluster', 'Snowball', Promise.resolve(result), true, mock)
  },
  createClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'createCluster', 'Snowball', Promise.resolve(result), false, mock)
  },
  createClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'createCluster', 'Snowball', Promise.reject(result), true, mock)
  },
  createJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'createJob', 'Snowball', Promise.resolve(result), true, mock)
  },
  createJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'createJob', 'Snowball', Promise.resolve(result), false, mock)
  },
  createJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'createJob', 'Snowball', Promise.reject(result), true, mock)
  },
  createLongTermPricing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'createLongTermPricing', 'Snowball', Promise.resolve(result), true, mock)
  },
  createLongTermPricingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'createLongTermPricing', 'Snowball', Promise.resolve(result), false, mock)
  },
  createLongTermPricingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'createLongTermPricing', 'Snowball', Promise.reject(result), true, mock)
  },
  createReturnShippingLabel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'createReturnShippingLabel', 'Snowball', Promise.resolve(result), true, mock)
  },
  createReturnShippingLabelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'createReturnShippingLabel', 'Snowball', Promise.resolve(result), false, mock)
  },
  createReturnShippingLabelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'createReturnShippingLabel', 'Snowball', Promise.reject(result), true, mock)
  },
  describeAddress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'describeAddress', 'Snowball', Promise.resolve(result), true, mock)
  },
  describeAddressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'describeAddress', 'Snowball', Promise.resolve(result), false, mock)
  },
  describeAddressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'describeAddress', 'Snowball', Promise.reject(result), true, mock)
  },
  describeAddresses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'describeAddresses', 'Snowball', Promise.resolve(result), true, mock)
  },
  describeAddressesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'describeAddresses', 'Snowball', Promise.resolve(result), false, mock)
  },
  describeAddressesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'describeAddresses', 'Snowball', Promise.reject(result), true, mock)
  },
  describeCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'describeCluster', 'Snowball', Promise.resolve(result), true, mock)
  },
  describeClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'describeCluster', 'Snowball', Promise.resolve(result), false, mock)
  },
  describeClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'describeCluster', 'Snowball', Promise.reject(result), true, mock)
  },
  describeJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'describeJob', 'Snowball', Promise.resolve(result), true, mock)
  },
  describeJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'describeJob', 'Snowball', Promise.resolve(result), false, mock)
  },
  describeJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'describeJob', 'Snowball', Promise.reject(result), true, mock)
  },
  describeReturnShippingLabel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'describeReturnShippingLabel', 'Snowball', Promise.resolve(result), true, mock)
  },
  describeReturnShippingLabelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'describeReturnShippingLabel', 'Snowball', Promise.resolve(result), false, mock)
  },
  describeReturnShippingLabelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'describeReturnShippingLabel', 'Snowball', Promise.reject(result), true, mock)
  },
  getJobManifest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'getJobManifest', 'Snowball', Promise.resolve(result), true, mock)
  },
  getJobManifestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'getJobManifest', 'Snowball', Promise.resolve(result), false, mock)
  },
  getJobManifestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'getJobManifest', 'Snowball', Promise.reject(result), true, mock)
  },
  getJobUnlockCode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'getJobUnlockCode', 'Snowball', Promise.resolve(result), true, mock)
  },
  getJobUnlockCodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'getJobUnlockCode', 'Snowball', Promise.resolve(result), false, mock)
  },
  getJobUnlockCodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'getJobUnlockCode', 'Snowball', Promise.reject(result), true, mock)
  },
  getSnowballUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'getSnowballUsage', 'Snowball', Promise.resolve(result), true, mock)
  },
  getSnowballUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'getSnowballUsage', 'Snowball', Promise.resolve(result), false, mock)
  },
  getSnowballUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'getSnowballUsage', 'Snowball', Promise.reject(result), true, mock)
  },
  getSoftwareUpdates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'getSoftwareUpdates', 'Snowball', Promise.resolve(result), true, mock)
  },
  getSoftwareUpdatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'getSoftwareUpdates', 'Snowball', Promise.resolve(result), false, mock)
  },
  getSoftwareUpdatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'getSoftwareUpdates', 'Snowball', Promise.reject(result), true, mock)
  },
  listClusterJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'listClusterJobs', 'Snowball', Promise.resolve(result), true, mock)
  },
  listClusterJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'listClusterJobs', 'Snowball', Promise.resolve(result), false, mock)
  },
  listClusterJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'listClusterJobs', 'Snowball', Promise.reject(result), true, mock)
  },
  listClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'listClusters', 'Snowball', Promise.resolve(result), true, mock)
  },
  listClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'listClusters', 'Snowball', Promise.resolve(result), false, mock)
  },
  listClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'listClusters', 'Snowball', Promise.reject(result), true, mock)
  },
  listCompatibleImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'listCompatibleImages', 'Snowball', Promise.resolve(result), true, mock)
  },
  listCompatibleImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'listCompatibleImages', 'Snowball', Promise.resolve(result), false, mock)
  },
  listCompatibleImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'listCompatibleImages', 'Snowball', Promise.reject(result), true, mock)
  },
  listJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'listJobs', 'Snowball', Promise.resolve(result), true, mock)
  },
  listJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'listJobs', 'Snowball', Promise.resolve(result), false, mock)
  },
  listJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'listJobs', 'Snowball', Promise.reject(result), true, mock)
  },
  listLongTermPricing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'listLongTermPricing', 'Snowball', Promise.resolve(result), true, mock)
  },
  listLongTermPricingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'listLongTermPricing', 'Snowball', Promise.resolve(result), false, mock)
  },
  listLongTermPricingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'listLongTermPricing', 'Snowball', Promise.reject(result), true, mock)
  },
  listPickupLocations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'listPickupLocations', 'Snowball', Promise.resolve(result), true, mock)
  },
  listPickupLocationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'listPickupLocations', 'Snowball', Promise.resolve(result), false, mock)
  },
  listPickupLocationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'listPickupLocations', 'Snowball', Promise.reject(result), true, mock)
  },
  listServiceVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'listServiceVersions', 'Snowball', Promise.resolve(result), true, mock)
  },
  listServiceVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'listServiceVersions', 'Snowball', Promise.resolve(result), false, mock)
  },
  listServiceVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'listServiceVersions', 'Snowball', Promise.reject(result), true, mock)
  },
  updateCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'updateCluster', 'Snowball', Promise.resolve(result), true, mock)
  },
  updateClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'updateCluster', 'Snowball', Promise.resolve(result), false, mock)
  },
  updateClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'updateCluster', 'Snowball', Promise.reject(result), true, mock)
  },
  updateJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'updateJob', 'Snowball', Promise.resolve(result), true, mock)
  },
  updateJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'updateJob', 'Snowball', Promise.resolve(result), false, mock)
  },
  updateJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'updateJob', 'Snowball', Promise.reject(result), true, mock)
  },
  updateJobShipmentState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'updateJobShipmentState', 'Snowball', Promise.resolve(result), true, mock)
  },
  updateJobShipmentStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'updateJobShipmentState', 'Snowball', Promise.resolve(result), false, mock)
  },
  updateJobShipmentStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'updateJobShipmentState', 'Snowball', Promise.reject(result), true, mock)
  },
  updateLongTermPricing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'updateLongTermPricing', 'Snowball', Promise.resolve(result), true, mock)
  },
  updateLongTermPricingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'updateLongTermPricing', 'Snowball', Promise.resolve(result), false, mock)
  },
  updateLongTermPricingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'updateLongTermPricing', 'Snowball', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'send', 'SnowballClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'send', 'SnowballClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snowball', 'send', 'SnowballClient', Promise.reject(result), true, mock)
  }
}
