
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
  export const mockElasticsearchService = {
  acceptInboundCrossClusterSearchConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptInboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  acceptInboundCrossClusterSearchConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptInboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  acceptInboundCrossClusterSearchConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptInboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  addTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTags', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  addTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTags', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  addTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTags', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  associatePackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associatePackage', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  associatePackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associatePackage', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  associatePackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associatePackage', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  cancelElasticsearchServiceSoftwareUpdate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelElasticsearchServiceSoftwareUpdate', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  cancelElasticsearchServiceSoftwareUpdateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelElasticsearchServiceSoftwareUpdate', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  cancelElasticsearchServiceSoftwareUpdateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelElasticsearchServiceSoftwareUpdate', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  createElasticsearchDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createElasticsearchDomain', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  createElasticsearchDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createElasticsearchDomain', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  createElasticsearchDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createElasticsearchDomain', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  createOutboundCrossClusterSearchConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOutboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  createOutboundCrossClusterSearchConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOutboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  createOutboundCrossClusterSearchConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOutboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  createPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPackage', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  createPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPackage', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  createPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPackage', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  deleteElasticsearchDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteElasticsearchDomain', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  deleteElasticsearchDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteElasticsearchDomain', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  deleteElasticsearchDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteElasticsearchDomain', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  deleteElasticsearchServiceRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteElasticsearchServiceRole', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  deleteElasticsearchServiceRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteElasticsearchServiceRole', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  deleteElasticsearchServiceRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteElasticsearchServiceRole', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  deleteInboundCrossClusterSearchConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  deleteInboundCrossClusterSearchConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  deleteInboundCrossClusterSearchConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  deleteOutboundCrossClusterSearchConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOutboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  deleteOutboundCrossClusterSearchConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOutboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  deleteOutboundCrossClusterSearchConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOutboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  deletePackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePackage', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  deletePackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePackage', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  deletePackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePackage', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  describeDomainAutoTunes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomainAutoTunes', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  describeDomainAutoTunesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomainAutoTunes', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  describeDomainAutoTunesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomainAutoTunes', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  describeElasticsearchDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeElasticsearchDomain', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  describeElasticsearchDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeElasticsearchDomain', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  describeElasticsearchDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeElasticsearchDomain', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  describeElasticsearchDomainConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeElasticsearchDomainConfig', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  describeElasticsearchDomainConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeElasticsearchDomainConfig', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  describeElasticsearchDomainConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeElasticsearchDomainConfig', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  describeElasticsearchDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeElasticsearchDomains', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  describeElasticsearchDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeElasticsearchDomains', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  describeElasticsearchDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeElasticsearchDomains', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  describeElasticsearchInstanceTypeLimits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeElasticsearchInstanceTypeLimits', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  describeElasticsearchInstanceTypeLimitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeElasticsearchInstanceTypeLimits', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  describeElasticsearchInstanceTypeLimitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeElasticsearchInstanceTypeLimits', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  describeInboundCrossClusterSearchConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInboundCrossClusterSearchConnections', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  describeInboundCrossClusterSearchConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInboundCrossClusterSearchConnections', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  describeInboundCrossClusterSearchConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInboundCrossClusterSearchConnections', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  describeOutboundCrossClusterSearchConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOutboundCrossClusterSearchConnections', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  describeOutboundCrossClusterSearchConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOutboundCrossClusterSearchConnections', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  describeOutboundCrossClusterSearchConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOutboundCrossClusterSearchConnections', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  describePackages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePackages', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  describePackagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePackages', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  describePackagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePackages', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  describeReservedElasticsearchInstanceOfferings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReservedElasticsearchInstanceOfferings', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  describeReservedElasticsearchInstanceOfferingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReservedElasticsearchInstanceOfferings', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  describeReservedElasticsearchInstanceOfferingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReservedElasticsearchInstanceOfferings', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  describeReservedElasticsearchInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReservedElasticsearchInstances', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  describeReservedElasticsearchInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReservedElasticsearchInstances', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  describeReservedElasticsearchInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReservedElasticsearchInstances', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  dissociatePackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('dissociatePackage', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  dissociatePackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('dissociatePackage', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  dissociatePackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('dissociatePackage', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  getCompatibleElasticsearchVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCompatibleElasticsearchVersions', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  getCompatibleElasticsearchVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCompatibleElasticsearchVersions', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  getCompatibleElasticsearchVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCompatibleElasticsearchVersions', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  getPackageVersionHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPackageVersionHistory', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  getPackageVersionHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPackageVersionHistory', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  getPackageVersionHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPackageVersionHistory', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  getUpgradeHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUpgradeHistory', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  getUpgradeHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUpgradeHistory', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  getUpgradeHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUpgradeHistory', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  getUpgradeStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUpgradeStatus', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  getUpgradeStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUpgradeStatus', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  getUpgradeStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUpgradeStatus', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  listDomainNames: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomainNames', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  listDomainNamesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomainNames', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  listDomainNamesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomainNames', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  listDomainsForPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomainsForPackage', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  listDomainsForPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomainsForPackage', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  listDomainsForPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomainsForPackage', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  listElasticsearchInstanceTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listElasticsearchInstanceTypes', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  listElasticsearchInstanceTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listElasticsearchInstanceTypes', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  listElasticsearchInstanceTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listElasticsearchInstanceTypes', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  listElasticsearchVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listElasticsearchVersions', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  listElasticsearchVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listElasticsearchVersions', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  listElasticsearchVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listElasticsearchVersions', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  listPackagesForDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPackagesForDomain', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  listPackagesForDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPackagesForDomain', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  listPackagesForDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPackagesForDomain', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  listTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  listTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  listTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  purchaseReservedElasticsearchInstanceOffering: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purchaseReservedElasticsearchInstanceOffering', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  purchaseReservedElasticsearchInstanceOfferingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purchaseReservedElasticsearchInstanceOffering', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  purchaseReservedElasticsearchInstanceOfferingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purchaseReservedElasticsearchInstanceOffering', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  rejectInboundCrossClusterSearchConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectInboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  rejectInboundCrossClusterSearchConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectInboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  rejectInboundCrossClusterSearchConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectInboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  removeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTags', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  removeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTags', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  removeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTags', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  startElasticsearchServiceSoftwareUpdate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startElasticsearchServiceSoftwareUpdate', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  startElasticsearchServiceSoftwareUpdateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startElasticsearchServiceSoftwareUpdate', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  startElasticsearchServiceSoftwareUpdateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startElasticsearchServiceSoftwareUpdate', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  updateElasticsearchDomainConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateElasticsearchDomainConfig', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  updateElasticsearchDomainConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateElasticsearchDomainConfig', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  updateElasticsearchDomainConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateElasticsearchDomainConfig', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  updatePackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePackage', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  updatePackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePackage', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  updatePackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePackage', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  upgradeElasticsearchDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('upgradeElasticsearchDomain', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  upgradeElasticsearchDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('upgradeElasticsearchDomain', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  upgradeElasticsearchDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('upgradeElasticsearchDomain', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
}
