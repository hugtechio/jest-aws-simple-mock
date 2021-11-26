
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
  export const mockWorkLink = {
  associateDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDomain', 'WorkLink', Promise.resolve(result), true, mock)
  },
  associateDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDomain', 'WorkLink', Promise.resolve(result), false, mock)
  },
  associateDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDomain', 'WorkLink', Promise.reject(result), true, mock)
  },
  associateWebsiteAuthorizationProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWebsiteAuthorizationProvider', 'WorkLink', Promise.resolve(result), true, mock)
  },
  associateWebsiteAuthorizationProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWebsiteAuthorizationProvider', 'WorkLink', Promise.resolve(result), false, mock)
  },
  associateWebsiteAuthorizationProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWebsiteAuthorizationProvider', 'WorkLink', Promise.reject(result), true, mock)
  },
  associateWebsiteCertificateAuthority: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWebsiteCertificateAuthority', 'WorkLink', Promise.resolve(result), true, mock)
  },
  associateWebsiteCertificateAuthorityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWebsiteCertificateAuthority', 'WorkLink', Promise.resolve(result), false, mock)
  },
  associateWebsiteCertificateAuthorityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWebsiteCertificateAuthority', 'WorkLink', Promise.reject(result), true, mock)
  },
  createFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFleet', 'WorkLink', Promise.resolve(result), true, mock)
  },
  createFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFleet', 'WorkLink', Promise.resolve(result), false, mock)
  },
  createFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFleet', 'WorkLink', Promise.reject(result), true, mock)
  },
  deleteFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFleet', 'WorkLink', Promise.resolve(result), true, mock)
  },
  deleteFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFleet', 'WorkLink', Promise.resolve(result), false, mock)
  },
  deleteFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFleet', 'WorkLink', Promise.reject(result), true, mock)
  },
  describeAuditStreamConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAuditStreamConfiguration', 'WorkLink', Promise.resolve(result), true, mock)
  },
  describeAuditStreamConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAuditStreamConfiguration', 'WorkLink', Promise.resolve(result), false, mock)
  },
  describeAuditStreamConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAuditStreamConfiguration', 'WorkLink', Promise.reject(result), true, mock)
  },
  describeCompanyNetworkConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCompanyNetworkConfiguration', 'WorkLink', Promise.resolve(result), true, mock)
  },
  describeCompanyNetworkConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCompanyNetworkConfiguration', 'WorkLink', Promise.resolve(result), false, mock)
  },
  describeCompanyNetworkConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCompanyNetworkConfiguration', 'WorkLink', Promise.reject(result), true, mock)
  },
  describeDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDevice', 'WorkLink', Promise.resolve(result), true, mock)
  },
  describeDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDevice', 'WorkLink', Promise.resolve(result), false, mock)
  },
  describeDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDevice', 'WorkLink', Promise.reject(result), true, mock)
  },
  describeDevicePolicyConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDevicePolicyConfiguration', 'WorkLink', Promise.resolve(result), true, mock)
  },
  describeDevicePolicyConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDevicePolicyConfiguration', 'WorkLink', Promise.resolve(result), false, mock)
  },
  describeDevicePolicyConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDevicePolicyConfiguration', 'WorkLink', Promise.reject(result), true, mock)
  },
  describeDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomain', 'WorkLink', Promise.resolve(result), true, mock)
  },
  describeDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomain', 'WorkLink', Promise.resolve(result), false, mock)
  },
  describeDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomain', 'WorkLink', Promise.reject(result), true, mock)
  },
  describeFleetMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetMetadata', 'WorkLink', Promise.resolve(result), true, mock)
  },
  describeFleetMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetMetadata', 'WorkLink', Promise.resolve(result), false, mock)
  },
  describeFleetMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleetMetadata', 'WorkLink', Promise.reject(result), true, mock)
  },
  describeIdentityProviderConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityProviderConfiguration', 'WorkLink', Promise.resolve(result), true, mock)
  },
  describeIdentityProviderConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityProviderConfiguration', 'WorkLink', Promise.resolve(result), false, mock)
  },
  describeIdentityProviderConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeIdentityProviderConfiguration', 'WorkLink', Promise.reject(result), true, mock)
  },
  describeWebsiteCertificateAuthority: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWebsiteCertificateAuthority', 'WorkLink', Promise.resolve(result), true, mock)
  },
  describeWebsiteCertificateAuthorityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWebsiteCertificateAuthority', 'WorkLink', Promise.resolve(result), false, mock)
  },
  describeWebsiteCertificateAuthorityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWebsiteCertificateAuthority', 'WorkLink', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WorkLink', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WorkLink', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WorkLink', Promise.reject(result), true, mock)
  },
  disassociateDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDomain', 'WorkLink', Promise.resolve(result), true, mock)
  },
  disassociateDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDomain', 'WorkLink', Promise.resolve(result), false, mock)
  },
  disassociateDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDomain', 'WorkLink', Promise.reject(result), true, mock)
  },
  disassociateWebsiteAuthorizationProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWebsiteAuthorizationProvider', 'WorkLink', Promise.resolve(result), true, mock)
  },
  disassociateWebsiteAuthorizationProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWebsiteAuthorizationProvider', 'WorkLink', Promise.resolve(result), false, mock)
  },
  disassociateWebsiteAuthorizationProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWebsiteAuthorizationProvider', 'WorkLink', Promise.reject(result), true, mock)
  },
  disassociateWebsiteCertificateAuthority: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWebsiteCertificateAuthority', 'WorkLink', Promise.resolve(result), true, mock)
  },
  disassociateWebsiteCertificateAuthorityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWebsiteCertificateAuthority', 'WorkLink', Promise.resolve(result), false, mock)
  },
  disassociateWebsiteCertificateAuthorityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWebsiteCertificateAuthority', 'WorkLink', Promise.reject(result), true, mock)
  },
  listDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevices', 'WorkLink', Promise.resolve(result), true, mock)
  },
  listDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevices', 'WorkLink', Promise.resolve(result), false, mock)
  },
  listDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevices', 'WorkLink', Promise.reject(result), true, mock)
  },
  listDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomains', 'WorkLink', Promise.resolve(result), true, mock)
  },
  listDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomains', 'WorkLink', Promise.resolve(result), false, mock)
  },
  listDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomains', 'WorkLink', Promise.reject(result), true, mock)
  },
  listFleets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFleets', 'WorkLink', Promise.resolve(result), true, mock)
  },
  listFleetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFleets', 'WorkLink', Promise.resolve(result), false, mock)
  },
  listFleetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFleets', 'WorkLink', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'WorkLink', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'WorkLink', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'WorkLink', Promise.reject(result), true, mock)
  },
  listWebsiteAuthorizationProviders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWebsiteAuthorizationProviders', 'WorkLink', Promise.resolve(result), true, mock)
  },
  listWebsiteAuthorizationProvidersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWebsiteAuthorizationProviders', 'WorkLink', Promise.resolve(result), false, mock)
  },
  listWebsiteAuthorizationProvidersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWebsiteAuthorizationProviders', 'WorkLink', Promise.reject(result), true, mock)
  },
  listWebsiteCertificateAuthorities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWebsiteCertificateAuthorities', 'WorkLink', Promise.resolve(result), true, mock)
  },
  listWebsiteCertificateAuthoritiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWebsiteCertificateAuthorities', 'WorkLink', Promise.resolve(result), false, mock)
  },
  listWebsiteCertificateAuthoritiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWebsiteCertificateAuthorities', 'WorkLink', Promise.reject(result), true, mock)
  },
  restoreDomainAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreDomainAccess', 'WorkLink', Promise.resolve(result), true, mock)
  },
  restoreDomainAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreDomainAccess', 'WorkLink', Promise.resolve(result), false, mock)
  },
  restoreDomainAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreDomainAccess', 'WorkLink', Promise.reject(result), true, mock)
  },
  revokeDomainAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeDomainAccess', 'WorkLink', Promise.resolve(result), true, mock)
  },
  revokeDomainAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeDomainAccess', 'WorkLink', Promise.resolve(result), false, mock)
  },
  revokeDomainAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeDomainAccess', 'WorkLink', Promise.reject(result), true, mock)
  },
  signOutUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('signOutUser', 'WorkLink', Promise.resolve(result), true, mock)
  },
  signOutUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('signOutUser', 'WorkLink', Promise.resolve(result), false, mock)
  },
  signOutUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('signOutUser', 'WorkLink', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'WorkLink', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'WorkLink', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'WorkLink', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'WorkLink', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'WorkLink', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'WorkLink', Promise.reject(result), true, mock)
  },
  updateAuditStreamConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAuditStreamConfiguration', 'WorkLink', Promise.resolve(result), true, mock)
  },
  updateAuditStreamConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAuditStreamConfiguration', 'WorkLink', Promise.resolve(result), false, mock)
  },
  updateAuditStreamConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAuditStreamConfiguration', 'WorkLink', Promise.reject(result), true, mock)
  },
  updateCompanyNetworkConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCompanyNetworkConfiguration', 'WorkLink', Promise.resolve(result), true, mock)
  },
  updateCompanyNetworkConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCompanyNetworkConfiguration', 'WorkLink', Promise.resolve(result), false, mock)
  },
  updateCompanyNetworkConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCompanyNetworkConfiguration', 'WorkLink', Promise.reject(result), true, mock)
  },
  updateDevicePolicyConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDevicePolicyConfiguration', 'WorkLink', Promise.resolve(result), true, mock)
  },
  updateDevicePolicyConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDevicePolicyConfiguration', 'WorkLink', Promise.resolve(result), false, mock)
  },
  updateDevicePolicyConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDevicePolicyConfiguration', 'WorkLink', Promise.reject(result), true, mock)
  },
  updateDomainMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomainMetadata', 'WorkLink', Promise.resolve(result), true, mock)
  },
  updateDomainMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomainMetadata', 'WorkLink', Promise.resolve(result), false, mock)
  },
  updateDomainMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomainMetadata', 'WorkLink', Promise.reject(result), true, mock)
  },
  updateFleetMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFleetMetadata', 'WorkLink', Promise.resolve(result), true, mock)
  },
  updateFleetMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFleetMetadata', 'WorkLink', Promise.resolve(result), false, mock)
  },
  updateFleetMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFleetMetadata', 'WorkLink', Promise.reject(result), true, mock)
  },
  updateIdentityProviderConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIdentityProviderConfiguration', 'WorkLink', Promise.resolve(result), true, mock)
  },
  updateIdentityProviderConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIdentityProviderConfiguration', 'WorkLink', Promise.resolve(result), false, mock)
  },
  updateIdentityProviderConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIdentityProviderConfiguration', 'WorkLink', Promise.reject(result), true, mock)
  },
}
