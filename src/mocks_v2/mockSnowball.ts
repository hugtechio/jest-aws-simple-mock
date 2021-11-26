
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
  export const mockSnowball = {
  cancelCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelCluster', 'Snowball', Promise.resolve(result), true, mock)
  },
  cancelClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelCluster', 'Snowball', Promise.resolve(result), false, mock)
  },
  cancelClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelCluster', 'Snowball', Promise.reject(result), true, mock)
  },
  cancelJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJob', 'Snowball', Promise.resolve(result), true, mock)
  },
  cancelJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJob', 'Snowball', Promise.resolve(result), false, mock)
  },
  cancelJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJob', 'Snowball', Promise.reject(result), true, mock)
  },
  createAddress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAddress', 'Snowball', Promise.resolve(result), true, mock)
  },
  createAddressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAddress', 'Snowball', Promise.resolve(result), false, mock)
  },
  createAddressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAddress', 'Snowball', Promise.reject(result), true, mock)
  },
  createCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'Snowball', Promise.resolve(result), true, mock)
  },
  createClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'Snowball', Promise.resolve(result), false, mock)
  },
  createClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'Snowball', Promise.reject(result), true, mock)
  },
  createJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJob', 'Snowball', Promise.resolve(result), true, mock)
  },
  createJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJob', 'Snowball', Promise.resolve(result), false, mock)
  },
  createJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJob', 'Snowball', Promise.reject(result), true, mock)
  },
  createLongTermPricing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLongTermPricing', 'Snowball', Promise.resolve(result), true, mock)
  },
  createLongTermPricingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLongTermPricing', 'Snowball', Promise.resolve(result), false, mock)
  },
  createLongTermPricingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLongTermPricing', 'Snowball', Promise.reject(result), true, mock)
  },
  createReturnShippingLabel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReturnShippingLabel', 'Snowball', Promise.resolve(result), true, mock)
  },
  createReturnShippingLabelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReturnShippingLabel', 'Snowball', Promise.resolve(result), false, mock)
  },
  createReturnShippingLabelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReturnShippingLabel', 'Snowball', Promise.reject(result), true, mock)
  },
  describeAddress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAddress', 'Snowball', Promise.resolve(result), true, mock)
  },
  describeAddressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAddress', 'Snowball', Promise.resolve(result), false, mock)
  },
  describeAddressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAddress', 'Snowball', Promise.reject(result), true, mock)
  },
  describeAddresses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAddresses', 'Snowball', Promise.resolve(result), true, mock)
  },
  describeAddressesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAddresses', 'Snowball', Promise.resolve(result), false, mock)
  },
  describeAddressesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAddresses', 'Snowball', Promise.reject(result), true, mock)
  },
  describeCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCluster', 'Snowball', Promise.resolve(result), true, mock)
  },
  describeClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCluster', 'Snowball', Promise.resolve(result), false, mock)
  },
  describeClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCluster', 'Snowball', Promise.reject(result), true, mock)
  },
  describeJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJob', 'Snowball', Promise.resolve(result), true, mock)
  },
  describeJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJob', 'Snowball', Promise.resolve(result), false, mock)
  },
  describeJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJob', 'Snowball', Promise.reject(result), true, mock)
  },
  describeReturnShippingLabel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReturnShippingLabel', 'Snowball', Promise.resolve(result), true, mock)
  },
  describeReturnShippingLabelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReturnShippingLabel', 'Snowball', Promise.resolve(result), false, mock)
  },
  describeReturnShippingLabelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReturnShippingLabel', 'Snowball', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Snowball', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Snowball', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Snowball', Promise.reject(result), true, mock)
  },
  getJobManifest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobManifest', 'Snowball', Promise.resolve(result), true, mock)
  },
  getJobManifestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobManifest', 'Snowball', Promise.resolve(result), false, mock)
  },
  getJobManifestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobManifest', 'Snowball', Promise.reject(result), true, mock)
  },
  getJobUnlockCode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobUnlockCode', 'Snowball', Promise.resolve(result), true, mock)
  },
  getJobUnlockCodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobUnlockCode', 'Snowball', Promise.resolve(result), false, mock)
  },
  getJobUnlockCodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobUnlockCode', 'Snowball', Promise.reject(result), true, mock)
  },
  getSnowballUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSnowballUsage', 'Snowball', Promise.resolve(result), true, mock)
  },
  getSnowballUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSnowballUsage', 'Snowball', Promise.resolve(result), false, mock)
  },
  getSnowballUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSnowballUsage', 'Snowball', Promise.reject(result), true, mock)
  },
  getSoftwareUpdates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSoftwareUpdates', 'Snowball', Promise.resolve(result), true, mock)
  },
  getSoftwareUpdatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSoftwareUpdates', 'Snowball', Promise.resolve(result), false, mock)
  },
  getSoftwareUpdatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSoftwareUpdates', 'Snowball', Promise.reject(result), true, mock)
  },
  listClusterJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClusterJobs', 'Snowball', Promise.resolve(result), true, mock)
  },
  listClusterJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClusterJobs', 'Snowball', Promise.resolve(result), false, mock)
  },
  listClusterJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClusterJobs', 'Snowball', Promise.reject(result), true, mock)
  },
  listClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClusters', 'Snowball', Promise.resolve(result), true, mock)
  },
  listClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClusters', 'Snowball', Promise.resolve(result), false, mock)
  },
  listClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClusters', 'Snowball', Promise.reject(result), true, mock)
  },
  listCompatibleImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCompatibleImages', 'Snowball', Promise.resolve(result), true, mock)
  },
  listCompatibleImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCompatibleImages', 'Snowball', Promise.resolve(result), false, mock)
  },
  listCompatibleImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCompatibleImages', 'Snowball', Promise.reject(result), true, mock)
  },
  listJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'Snowball', Promise.resolve(result), true, mock)
  },
  listJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'Snowball', Promise.resolve(result), false, mock)
  },
  listJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'Snowball', Promise.reject(result), true, mock)
  },
  listLongTermPricing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLongTermPricing', 'Snowball', Promise.resolve(result), true, mock)
  },
  listLongTermPricingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLongTermPricing', 'Snowball', Promise.resolve(result), false, mock)
  },
  listLongTermPricingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLongTermPricing', 'Snowball', Promise.reject(result), true, mock)
  },
  updateCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCluster', 'Snowball', Promise.resolve(result), true, mock)
  },
  updateClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCluster', 'Snowball', Promise.resolve(result), false, mock)
  },
  updateClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCluster', 'Snowball', Promise.reject(result), true, mock)
  },
  updateJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJob', 'Snowball', Promise.resolve(result), true, mock)
  },
  updateJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJob', 'Snowball', Promise.resolve(result), false, mock)
  },
  updateJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJob', 'Snowball', Promise.reject(result), true, mock)
  },
  updateJobShipmentState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJobShipmentState', 'Snowball', Promise.resolve(result), true, mock)
  },
  updateJobShipmentStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJobShipmentState', 'Snowball', Promise.resolve(result), false, mock)
  },
  updateJobShipmentStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJobShipmentState', 'Snowball', Promise.reject(result), true, mock)
  },
  updateLongTermPricing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLongTermPricing', 'Snowball', Promise.resolve(result), true, mock)
  },
  updateLongTermPricingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLongTermPricing', 'Snowball', Promise.resolve(result), false, mock)
  },
  updateLongTermPricingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLongTermPricing', 'Snowball', Promise.reject(result), true, mock)
  },
}
