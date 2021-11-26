
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
  export const mockOpenSearch = {
  acceptInboundConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptInboundConnection', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  acceptInboundConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptInboundConnection', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  acceptInboundConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptInboundConnection', 'OpenSearch', Promise.reject(result), true, mock)
  },
  addTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTags', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  addTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTags', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  addTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTags', 'OpenSearch', Promise.reject(result), true, mock)
  },
  associatePackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associatePackage', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  associatePackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associatePackage', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  associatePackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associatePackage', 'OpenSearch', Promise.reject(result), true, mock)
  },
  cancelServiceSoftwareUpdate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelServiceSoftwareUpdate', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  cancelServiceSoftwareUpdateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelServiceSoftwareUpdate', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  cancelServiceSoftwareUpdateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelServiceSoftwareUpdate', 'OpenSearch', Promise.reject(result), true, mock)
  },
  createDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomain', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  createDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomain', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  createDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomain', 'OpenSearch', Promise.reject(result), true, mock)
  },
  createOutboundConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOutboundConnection', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  createOutboundConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOutboundConnection', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  createOutboundConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOutboundConnection', 'OpenSearch', Promise.reject(result), true, mock)
  },
  createPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPackage', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  createPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPackage', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  createPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPackage', 'OpenSearch', Promise.reject(result), true, mock)
  },
  deleteDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomain', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  deleteDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomain', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  deleteDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomain', 'OpenSearch', Promise.reject(result), true, mock)
  },
  deleteInboundConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInboundConnection', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  deleteInboundConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInboundConnection', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  deleteInboundConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInboundConnection', 'OpenSearch', Promise.reject(result), true, mock)
  },
  deleteOutboundConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOutboundConnection', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  deleteOutboundConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOutboundConnection', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  deleteOutboundConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOutboundConnection', 'OpenSearch', Promise.reject(result), true, mock)
  },
  deletePackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePackage', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  deletePackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePackage', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  deletePackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePackage', 'OpenSearch', Promise.reject(result), true, mock)
  },
  describeDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomain', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  describeDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomain', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  describeDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomain', 'OpenSearch', Promise.reject(result), true, mock)
  },
  describeDomainAutoTunes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomainAutoTunes', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  describeDomainAutoTunesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomainAutoTunes', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  describeDomainAutoTunesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomainAutoTunes', 'OpenSearch', Promise.reject(result), true, mock)
  },
  describeDomainConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomainConfig', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  describeDomainConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomainConfig', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  describeDomainConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomainConfig', 'OpenSearch', Promise.reject(result), true, mock)
  },
  describeDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomains', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  describeDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomains', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  describeDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomains', 'OpenSearch', Promise.reject(result), true, mock)
  },
  describeInboundConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInboundConnections', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  describeInboundConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInboundConnections', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  describeInboundConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInboundConnections', 'OpenSearch', Promise.reject(result), true, mock)
  },
  describeInstanceTypeLimits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstanceTypeLimits', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  describeInstanceTypeLimitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstanceTypeLimits', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  describeInstanceTypeLimitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstanceTypeLimits', 'OpenSearch', Promise.reject(result), true, mock)
  },
  describeOutboundConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOutboundConnections', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  describeOutboundConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOutboundConnections', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  describeOutboundConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOutboundConnections', 'OpenSearch', Promise.reject(result), true, mock)
  },
  describePackages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePackages', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  describePackagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePackages', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  describePackagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePackages', 'OpenSearch', Promise.reject(result), true, mock)
  },
  describeReservedInstanceOfferings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReservedInstanceOfferings', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  describeReservedInstanceOfferingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReservedInstanceOfferings', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  describeReservedInstanceOfferingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReservedInstanceOfferings', 'OpenSearch', Promise.reject(result), true, mock)
  },
  describeReservedInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReservedInstances', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  describeReservedInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReservedInstances', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  describeReservedInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReservedInstances', 'OpenSearch', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'OpenSearch', Promise.reject(result), true, mock)
  },
  dissociatePackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('dissociatePackage', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  dissociatePackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('dissociatePackage', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  dissociatePackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('dissociatePackage', 'OpenSearch', Promise.reject(result), true, mock)
  },
  getCompatibleVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCompatibleVersions', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  getCompatibleVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCompatibleVersions', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  getCompatibleVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCompatibleVersions', 'OpenSearch', Promise.reject(result), true, mock)
  },
  getPackageVersionHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPackageVersionHistory', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  getPackageVersionHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPackageVersionHistory', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  getPackageVersionHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPackageVersionHistory', 'OpenSearch', Promise.reject(result), true, mock)
  },
  getUpgradeHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUpgradeHistory', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  getUpgradeHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUpgradeHistory', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  getUpgradeHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUpgradeHistory', 'OpenSearch', Promise.reject(result), true, mock)
  },
  getUpgradeStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUpgradeStatus', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  getUpgradeStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUpgradeStatus', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  getUpgradeStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUpgradeStatus', 'OpenSearch', Promise.reject(result), true, mock)
  },
  listDomainNames: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomainNames', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  listDomainNamesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomainNames', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  listDomainNamesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomainNames', 'OpenSearch', Promise.reject(result), true, mock)
  },
  listDomainsForPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomainsForPackage', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  listDomainsForPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomainsForPackage', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  listDomainsForPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomainsForPackage', 'OpenSearch', Promise.reject(result), true, mock)
  },
  listInstanceTypeDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstanceTypeDetails', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  listInstanceTypeDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstanceTypeDetails', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  listInstanceTypeDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstanceTypeDetails', 'OpenSearch', Promise.reject(result), true, mock)
  },
  listPackagesForDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPackagesForDomain', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  listPackagesForDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPackagesForDomain', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  listPackagesForDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPackagesForDomain', 'OpenSearch', Promise.reject(result), true, mock)
  },
  listTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  listTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  listTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'OpenSearch', Promise.reject(result), true, mock)
  },
  listVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVersions', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  listVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVersions', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  listVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVersions', 'OpenSearch', Promise.reject(result), true, mock)
  },
  purchaseReservedInstanceOffering: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purchaseReservedInstanceOffering', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  purchaseReservedInstanceOfferingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purchaseReservedInstanceOffering', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  purchaseReservedInstanceOfferingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purchaseReservedInstanceOffering', 'OpenSearch', Promise.reject(result), true, mock)
  },
  rejectInboundConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectInboundConnection', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  rejectInboundConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectInboundConnection', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  rejectInboundConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectInboundConnection', 'OpenSearch', Promise.reject(result), true, mock)
  },
  removeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTags', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  removeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTags', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  removeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTags', 'OpenSearch', Promise.reject(result), true, mock)
  },
  startServiceSoftwareUpdate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startServiceSoftwareUpdate', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  startServiceSoftwareUpdateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startServiceSoftwareUpdate', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  startServiceSoftwareUpdateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startServiceSoftwareUpdate', 'OpenSearch', Promise.reject(result), true, mock)
  },
  updateDomainConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomainConfig', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  updateDomainConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomainConfig', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  updateDomainConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomainConfig', 'OpenSearch', Promise.reject(result), true, mock)
  },
  updatePackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePackage', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  updatePackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePackage', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  updatePackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePackage', 'OpenSearch', Promise.reject(result), true, mock)
  },
  upgradeDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('upgradeDomain', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  upgradeDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('upgradeDomain', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  upgradeDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('upgradeDomain', 'OpenSearch', Promise.reject(result), true, mock)
  },
}
