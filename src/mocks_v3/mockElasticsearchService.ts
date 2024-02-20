
/**
* @description mocks_v3:mockElasticsearchService module is mocks for AWS-SDK V3
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
export const mockElasticsearchService = {
  acceptInboundCrossClusterSearchConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'acceptInboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  acceptInboundCrossClusterSearchConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'acceptInboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  acceptInboundCrossClusterSearchConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'acceptInboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  addTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'addTags', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  addTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'addTags', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  addTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'addTags', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  associatePackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'associatePackage', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  associatePackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'associatePackage', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  associatePackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'associatePackage', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  authorizeVpcEndpointAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'authorizeVpcEndpointAccess', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  authorizeVpcEndpointAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'authorizeVpcEndpointAccess', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  authorizeVpcEndpointAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'authorizeVpcEndpointAccess', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  cancelDomainConfigChange: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'cancelDomainConfigChange', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  cancelDomainConfigChangeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'cancelDomainConfigChange', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  cancelDomainConfigChangeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'cancelDomainConfigChange', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  cancelElasticsearchServiceSoftwareUpdate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'cancelElasticsearchServiceSoftwareUpdate', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  cancelElasticsearchServiceSoftwareUpdateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'cancelElasticsearchServiceSoftwareUpdate', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  cancelElasticsearchServiceSoftwareUpdateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'cancelElasticsearchServiceSoftwareUpdate', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  createElasticsearchDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'createElasticsearchDomain', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  createElasticsearchDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'createElasticsearchDomain', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  createElasticsearchDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'createElasticsearchDomain', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  createOutboundCrossClusterSearchConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'createOutboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  createOutboundCrossClusterSearchConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'createOutboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  createOutboundCrossClusterSearchConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'createOutboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  createPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'createPackage', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  createPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'createPackage', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  createPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'createPackage', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  createVpcEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'createVpcEndpoint', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  createVpcEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'createVpcEndpoint', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  createVpcEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'createVpcEndpoint', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  deleteElasticsearchDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'deleteElasticsearchDomain', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  deleteElasticsearchDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'deleteElasticsearchDomain', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  deleteElasticsearchDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'deleteElasticsearchDomain', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  deleteElasticsearchServiceRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'deleteElasticsearchServiceRole', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  deleteElasticsearchServiceRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'deleteElasticsearchServiceRole', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  deleteElasticsearchServiceRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'deleteElasticsearchServiceRole', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  deleteInboundCrossClusterSearchConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'deleteInboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  deleteInboundCrossClusterSearchConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'deleteInboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  deleteInboundCrossClusterSearchConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'deleteInboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  deleteOutboundCrossClusterSearchConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'deleteOutboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  deleteOutboundCrossClusterSearchConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'deleteOutboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  deleteOutboundCrossClusterSearchConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'deleteOutboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  deletePackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'deletePackage', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  deletePackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'deletePackage', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  deletePackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'deletePackage', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  deleteVpcEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'deleteVpcEndpoint', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  deleteVpcEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'deleteVpcEndpoint', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  deleteVpcEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'deleteVpcEndpoint', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  describeDomainAutoTunes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeDomainAutoTunes', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  describeDomainAutoTunesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeDomainAutoTunes', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  describeDomainAutoTunesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeDomainAutoTunes', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  describeDomainChangeProgress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeDomainChangeProgress', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  describeDomainChangeProgressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeDomainChangeProgress', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  describeDomainChangeProgressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeDomainChangeProgress', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  describeElasticsearchDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeElasticsearchDomain', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  describeElasticsearchDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeElasticsearchDomain', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  describeElasticsearchDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeElasticsearchDomain', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  describeElasticsearchDomainConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeElasticsearchDomainConfig', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  describeElasticsearchDomainConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeElasticsearchDomainConfig', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  describeElasticsearchDomainConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeElasticsearchDomainConfig', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  describeElasticsearchDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeElasticsearchDomains', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  describeElasticsearchDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeElasticsearchDomains', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  describeElasticsearchDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeElasticsearchDomains', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  describeElasticsearchInstanceTypeLimits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeElasticsearchInstanceTypeLimits', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  describeElasticsearchInstanceTypeLimitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeElasticsearchInstanceTypeLimits', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  describeElasticsearchInstanceTypeLimitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeElasticsearchInstanceTypeLimits', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  describeInboundCrossClusterSearchConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeInboundCrossClusterSearchConnections', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  describeInboundCrossClusterSearchConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeInboundCrossClusterSearchConnections', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  describeInboundCrossClusterSearchConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeInboundCrossClusterSearchConnections', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  describeOutboundCrossClusterSearchConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeOutboundCrossClusterSearchConnections', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  describeOutboundCrossClusterSearchConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeOutboundCrossClusterSearchConnections', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  describeOutboundCrossClusterSearchConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeOutboundCrossClusterSearchConnections', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  describePackages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describePackages', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  describePackagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describePackages', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  describePackagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describePackages', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  describeReservedElasticsearchInstanceOfferings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeReservedElasticsearchInstanceOfferings', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  describeReservedElasticsearchInstanceOfferingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeReservedElasticsearchInstanceOfferings', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  describeReservedElasticsearchInstanceOfferingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeReservedElasticsearchInstanceOfferings', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  describeReservedElasticsearchInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeReservedElasticsearchInstances', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  describeReservedElasticsearchInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeReservedElasticsearchInstances', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  describeReservedElasticsearchInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeReservedElasticsearchInstances', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  describeVpcEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeVpcEndpoints', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  describeVpcEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeVpcEndpoints', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  describeVpcEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'describeVpcEndpoints', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  dissociatePackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'dissociatePackage', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  dissociatePackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'dissociatePackage', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  dissociatePackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'dissociatePackage', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  getCompatibleElasticsearchVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'getCompatibleElasticsearchVersions', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  getCompatibleElasticsearchVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'getCompatibleElasticsearchVersions', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  getCompatibleElasticsearchVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'getCompatibleElasticsearchVersions', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  getPackageVersionHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'getPackageVersionHistory', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  getPackageVersionHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'getPackageVersionHistory', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  getPackageVersionHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'getPackageVersionHistory', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  getUpgradeHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'getUpgradeHistory', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  getUpgradeHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'getUpgradeHistory', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  getUpgradeHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'getUpgradeHistory', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  getUpgradeStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'getUpgradeStatus', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  getUpgradeStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'getUpgradeStatus', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  getUpgradeStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'getUpgradeStatus', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  listDomainNames: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listDomainNames', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  listDomainNamesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listDomainNames', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  listDomainNamesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listDomainNames', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  listDomainsForPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listDomainsForPackage', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  listDomainsForPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listDomainsForPackage', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  listDomainsForPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listDomainsForPackage', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  listElasticsearchInstanceTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listElasticsearchInstanceTypes', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  listElasticsearchInstanceTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listElasticsearchInstanceTypes', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  listElasticsearchInstanceTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listElasticsearchInstanceTypes', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  listElasticsearchVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listElasticsearchVersions', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  listElasticsearchVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listElasticsearchVersions', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  listElasticsearchVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listElasticsearchVersions', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  listPackagesForDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listPackagesForDomain', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  listPackagesForDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listPackagesForDomain', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  listPackagesForDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listPackagesForDomain', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  listTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listTags', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  listTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listTags', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  listTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listTags', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  listVpcEndpointAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listVpcEndpointAccess', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  listVpcEndpointAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listVpcEndpointAccess', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  listVpcEndpointAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listVpcEndpointAccess', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  listVpcEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listVpcEndpoints', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  listVpcEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listVpcEndpoints', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  listVpcEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listVpcEndpoints', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  listVpcEndpointsForDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listVpcEndpointsForDomain', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  listVpcEndpointsForDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listVpcEndpointsForDomain', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  listVpcEndpointsForDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'listVpcEndpointsForDomain', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  purchaseReservedElasticsearchInstanceOffering: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'purchaseReservedElasticsearchInstanceOffering', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  purchaseReservedElasticsearchInstanceOfferingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'purchaseReservedElasticsearchInstanceOffering', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  purchaseReservedElasticsearchInstanceOfferingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'purchaseReservedElasticsearchInstanceOffering', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  rejectInboundCrossClusterSearchConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'rejectInboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  rejectInboundCrossClusterSearchConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'rejectInboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  rejectInboundCrossClusterSearchConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'rejectInboundCrossClusterSearchConnection', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  removeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'removeTags', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  removeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'removeTags', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  removeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'removeTags', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  revokeVpcEndpointAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'revokeVpcEndpointAccess', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  revokeVpcEndpointAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'revokeVpcEndpointAccess', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  revokeVpcEndpointAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'revokeVpcEndpointAccess', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  startElasticsearchServiceSoftwareUpdate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'startElasticsearchServiceSoftwareUpdate', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  startElasticsearchServiceSoftwareUpdateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'startElasticsearchServiceSoftwareUpdate', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  startElasticsearchServiceSoftwareUpdateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'startElasticsearchServiceSoftwareUpdate', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  updateElasticsearchDomainConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'updateElasticsearchDomainConfig', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  updateElasticsearchDomainConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'updateElasticsearchDomainConfig', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  updateElasticsearchDomainConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'updateElasticsearchDomainConfig', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  updatePackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'updatePackage', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  updatePackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'updatePackage', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  updatePackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'updatePackage', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  updateVpcEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'updateVpcEndpoint', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  updateVpcEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'updateVpcEndpoint', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  updateVpcEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'updateVpcEndpoint', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  upgradeElasticsearchDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'upgradeElasticsearchDomain', 'ElasticsearchService', Promise.resolve(result), true, mock)
  },
  upgradeElasticsearchDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'upgradeElasticsearchDomain', 'ElasticsearchService', Promise.resolve(result), false, mock)
  },
  upgradeElasticsearchDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'upgradeElasticsearchDomain', 'ElasticsearchService', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'send', 'ElasticsearchServiceClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'send', 'ElasticsearchServiceClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticsearch-service', 'send', 'ElasticsearchServiceClient', Promise.reject(result), true, mock)
  }
}
