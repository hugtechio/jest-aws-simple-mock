
/**
* @description mocks_v3:mockOpenSearch module is mocks for AWS-SDK V3
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

  export const mockOpenSearch = {
  acceptInboundConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'acceptInboundConnection', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  acceptInboundConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'acceptInboundConnection', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  acceptInboundConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'acceptInboundConnection', 'OpenSearch', Promise.reject(result), true, mock)
  },
  addTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'addTags', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  addTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'addTags', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  addTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'addTags', 'OpenSearch', Promise.reject(result), true, mock)
  },
  associatePackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'associatePackage', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  associatePackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'associatePackage', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  associatePackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'associatePackage', 'OpenSearch', Promise.reject(result), true, mock)
  },
  cancelServiceSoftwareUpdate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'cancelServiceSoftwareUpdate', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  cancelServiceSoftwareUpdateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'cancelServiceSoftwareUpdate', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  cancelServiceSoftwareUpdateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'cancelServiceSoftwareUpdate', 'OpenSearch', Promise.reject(result), true, mock)
  },
  createDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'createDomain', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  createDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'createDomain', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  createDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'createDomain', 'OpenSearch', Promise.reject(result), true, mock)
  },
  createOutboundConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'createOutboundConnection', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  createOutboundConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'createOutboundConnection', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  createOutboundConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'createOutboundConnection', 'OpenSearch', Promise.reject(result), true, mock)
  },
  createPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'createPackage', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  createPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'createPackage', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  createPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'createPackage', 'OpenSearch', Promise.reject(result), true, mock)
  },
  deleteDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'deleteDomain', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  deleteDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'deleteDomain', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  deleteDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'deleteDomain', 'OpenSearch', Promise.reject(result), true, mock)
  },
  deleteInboundConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'deleteInboundConnection', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  deleteInboundConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'deleteInboundConnection', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  deleteInboundConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'deleteInboundConnection', 'OpenSearch', Promise.reject(result), true, mock)
  },
  deleteOutboundConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'deleteOutboundConnection', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  deleteOutboundConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'deleteOutboundConnection', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  deleteOutboundConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'deleteOutboundConnection', 'OpenSearch', Promise.reject(result), true, mock)
  },
  deletePackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'deletePackage', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  deletePackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'deletePackage', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  deletePackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'deletePackage', 'OpenSearch', Promise.reject(result), true, mock)
  },
  describeDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeDomain', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  describeDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeDomain', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  describeDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeDomain', 'OpenSearch', Promise.reject(result), true, mock)
  },
  describeDomainAutoTunes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeDomainAutoTunes', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  describeDomainAutoTunesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeDomainAutoTunes', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  describeDomainAutoTunesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeDomainAutoTunes', 'OpenSearch', Promise.reject(result), true, mock)
  },
  describeDomainConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeDomainConfig', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  describeDomainConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeDomainConfig', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  describeDomainConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeDomainConfig', 'OpenSearch', Promise.reject(result), true, mock)
  },
  describeDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeDomains', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  describeDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeDomains', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  describeDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeDomains', 'OpenSearch', Promise.reject(result), true, mock)
  },
  describeInboundConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeInboundConnections', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  describeInboundConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeInboundConnections', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  describeInboundConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeInboundConnections', 'OpenSearch', Promise.reject(result), true, mock)
  },
  describeInstanceTypeLimits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeInstanceTypeLimits', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  describeInstanceTypeLimitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeInstanceTypeLimits', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  describeInstanceTypeLimitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeInstanceTypeLimits', 'OpenSearch', Promise.reject(result), true, mock)
  },
  describeOutboundConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeOutboundConnections', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  describeOutboundConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeOutboundConnections', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  describeOutboundConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeOutboundConnections', 'OpenSearch', Promise.reject(result), true, mock)
  },
  describePackages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describePackages', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  describePackagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describePackages', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  describePackagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describePackages', 'OpenSearch', Promise.reject(result), true, mock)
  },
  describeReservedInstanceOfferings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeReservedInstanceOfferings', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  describeReservedInstanceOfferingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeReservedInstanceOfferings', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  describeReservedInstanceOfferingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeReservedInstanceOfferings', 'OpenSearch', Promise.reject(result), true, mock)
  },
  describeReservedInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeReservedInstances', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  describeReservedInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeReservedInstances', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  describeReservedInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'describeReservedInstances', 'OpenSearch', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'destroy', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'destroy', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'destroy', 'OpenSearch', Promise.reject(result), true, mock)
  },
  dissociatePackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'dissociatePackage', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  dissociatePackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'dissociatePackage', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  dissociatePackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'dissociatePackage', 'OpenSearch', Promise.reject(result), true, mock)
  },
  getCompatibleVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'getCompatibleVersions', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  getCompatibleVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'getCompatibleVersions', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  getCompatibleVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'getCompatibleVersions', 'OpenSearch', Promise.reject(result), true, mock)
  },
  getPackageVersionHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'getPackageVersionHistory', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  getPackageVersionHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'getPackageVersionHistory', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  getPackageVersionHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'getPackageVersionHistory', 'OpenSearch', Promise.reject(result), true, mock)
  },
  getUpgradeHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'getUpgradeHistory', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  getUpgradeHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'getUpgradeHistory', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  getUpgradeHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'getUpgradeHistory', 'OpenSearch', Promise.reject(result), true, mock)
  },
  getUpgradeStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'getUpgradeStatus', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  getUpgradeStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'getUpgradeStatus', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  getUpgradeStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'getUpgradeStatus', 'OpenSearch', Promise.reject(result), true, mock)
  },
  listDomainNames: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'listDomainNames', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  listDomainNamesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'listDomainNames', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  listDomainNamesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'listDomainNames', 'OpenSearch', Promise.reject(result), true, mock)
  },
  listDomainsForPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'listDomainsForPackage', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  listDomainsForPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'listDomainsForPackage', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  listDomainsForPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'listDomainsForPackage', 'OpenSearch', Promise.reject(result), true, mock)
  },
  listInstanceTypeDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'listInstanceTypeDetails', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  listInstanceTypeDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'listInstanceTypeDetails', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  listInstanceTypeDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'listInstanceTypeDetails', 'OpenSearch', Promise.reject(result), true, mock)
  },
  listPackagesForDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'listPackagesForDomain', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  listPackagesForDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'listPackagesForDomain', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  listPackagesForDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'listPackagesForDomain', 'OpenSearch', Promise.reject(result), true, mock)
  },
  listTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'listTags', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  listTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'listTags', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  listTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'listTags', 'OpenSearch', Promise.reject(result), true, mock)
  },
  listVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'listVersions', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  listVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'listVersions', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  listVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'listVersions', 'OpenSearch', Promise.reject(result), true, mock)
  },
  purchaseReservedInstanceOffering: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'purchaseReservedInstanceOffering', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  purchaseReservedInstanceOfferingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'purchaseReservedInstanceOffering', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  purchaseReservedInstanceOfferingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'purchaseReservedInstanceOffering', 'OpenSearch', Promise.reject(result), true, mock)
  },
  rejectInboundConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'rejectInboundConnection', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  rejectInboundConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'rejectInboundConnection', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  rejectInboundConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'rejectInboundConnection', 'OpenSearch', Promise.reject(result), true, mock)
  },
  removeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'removeTags', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  removeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'removeTags', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  removeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'removeTags', 'OpenSearch', Promise.reject(result), true, mock)
  },
  startServiceSoftwareUpdate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'startServiceSoftwareUpdate', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  startServiceSoftwareUpdateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'startServiceSoftwareUpdate', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  startServiceSoftwareUpdateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'startServiceSoftwareUpdate', 'OpenSearch', Promise.reject(result), true, mock)
  },
  updateDomainConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'updateDomainConfig', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  updateDomainConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'updateDomainConfig', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  updateDomainConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'updateDomainConfig', 'OpenSearch', Promise.reject(result), true, mock)
  },
  updatePackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'updatePackage', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  updatePackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'updatePackage', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  updatePackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'updatePackage', 'OpenSearch', Promise.reject(result), true, mock)
  },
  upgradeDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'upgradeDomain', 'OpenSearch', Promise.resolve(result), true, mock)
  },
  upgradeDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'upgradeDomain', 'OpenSearch', Promise.resolve(result), false, mock)
  },
  upgradeDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'upgradeDomain', 'OpenSearch', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'send', 'OpenSearchClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'send', 'OpenSearchClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opensearch', 'send', 'OpenSearchClient', Promise.reject(result), true, mock)
  }
}