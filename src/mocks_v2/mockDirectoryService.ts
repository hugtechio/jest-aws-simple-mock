
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
  export const mockDirectoryService = {
  acceptSharedDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptSharedDirectory', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  acceptSharedDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptSharedDirectory', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  acceptSharedDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptSharedDirectory', 'DirectoryService', Promise.reject(result), true, mock)
  },
  addIpRoutes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addIpRoutes', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  addIpRoutesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addIpRoutes', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  addIpRoutesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addIpRoutes', 'DirectoryService', Promise.reject(result), true, mock)
  },
  addRegion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addRegion', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  addRegionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addRegion', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  addRegionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addRegion', 'DirectoryService', Promise.reject(result), true, mock)
  },
  addTagsToResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToResource', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  addTagsToResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToResource', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  addTagsToResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToResource', 'DirectoryService', Promise.reject(result), true, mock)
  },
  cancelSchemaExtension: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelSchemaExtension', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  cancelSchemaExtensionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelSchemaExtension', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  cancelSchemaExtensionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelSchemaExtension', 'DirectoryService', Promise.reject(result), true, mock)
  },
  connectDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('connectDirectory', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  connectDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('connectDirectory', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  connectDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('connectDirectory', 'DirectoryService', Promise.reject(result), true, mock)
  },
  createAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAlias', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  createAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAlias', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  createAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAlias', 'DirectoryService', Promise.reject(result), true, mock)
  },
  createComputer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createComputer', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  createComputerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createComputer', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  createComputerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createComputer', 'DirectoryService', Promise.reject(result), true, mock)
  },
  createConditionalForwarder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConditionalForwarder', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  createConditionalForwarderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConditionalForwarder', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  createConditionalForwarderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConditionalForwarder', 'DirectoryService', Promise.reject(result), true, mock)
  },
  createDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDirectory', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  createDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDirectory', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  createDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDirectory', 'DirectoryService', Promise.reject(result), true, mock)
  },
  createLogSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLogSubscription', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  createLogSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLogSubscription', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  createLogSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLogSubscription', 'DirectoryService', Promise.reject(result), true, mock)
  },
  createMicrosoftAD: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMicrosoftAD', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  createMicrosoftADAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMicrosoftAD', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  createMicrosoftADThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMicrosoftAD', 'DirectoryService', Promise.reject(result), true, mock)
  },
  createSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSnapshot', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  createSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSnapshot', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  createSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSnapshot', 'DirectoryService', Promise.reject(result), true, mock)
  },
  createTrust: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTrust', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  createTrustAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTrust', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  createTrustThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTrust', 'DirectoryService', Promise.reject(result), true, mock)
  },
  deleteConditionalForwarder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConditionalForwarder', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  deleteConditionalForwarderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConditionalForwarder', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  deleteConditionalForwarderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConditionalForwarder', 'DirectoryService', Promise.reject(result), true, mock)
  },
  deleteDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDirectory', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  deleteDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDirectory', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  deleteDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDirectory', 'DirectoryService', Promise.reject(result), true, mock)
  },
  deleteLogSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLogSubscription', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  deleteLogSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLogSubscription', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  deleteLogSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLogSubscription', 'DirectoryService', Promise.reject(result), true, mock)
  },
  deleteSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSnapshot', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  deleteSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSnapshot', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  deleteSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSnapshot', 'DirectoryService', Promise.reject(result), true, mock)
  },
  deleteTrust: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTrust', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  deleteTrustAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTrust', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  deleteTrustThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTrust', 'DirectoryService', Promise.reject(result), true, mock)
  },
  deregisterCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterCertificate', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  deregisterCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterCertificate', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  deregisterCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterCertificate', 'DirectoryService', Promise.reject(result), true, mock)
  },
  deregisterEventTopic: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterEventTopic', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  deregisterEventTopicAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterEventTopic', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  deregisterEventTopicThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterEventTopic', 'DirectoryService', Promise.reject(result), true, mock)
  },
  describeCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCertificate', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  describeCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCertificate', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  describeCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCertificate', 'DirectoryService', Promise.reject(result), true, mock)
  },
  describeClientAuthenticationSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClientAuthenticationSettings', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  describeClientAuthenticationSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClientAuthenticationSettings', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  describeClientAuthenticationSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClientAuthenticationSettings', 'DirectoryService', Promise.reject(result), true, mock)
  },
  describeConditionalForwarders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConditionalForwarders', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  describeConditionalForwardersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConditionalForwarders', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  describeConditionalForwardersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeConditionalForwarders', 'DirectoryService', Promise.reject(result), true, mock)
  },
  describeDirectories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDirectories', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  describeDirectoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDirectories', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  describeDirectoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDirectories', 'DirectoryService', Promise.reject(result), true, mock)
  },
  describeDomainControllers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomainControllers', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  describeDomainControllersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomainControllers', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  describeDomainControllersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDomainControllers', 'DirectoryService', Promise.reject(result), true, mock)
  },
  describeEventTopics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventTopics', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  describeEventTopicsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventTopics', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  describeEventTopicsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventTopics', 'DirectoryService', Promise.reject(result), true, mock)
  },
  describeLDAPSSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLDAPSSettings', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  describeLDAPSSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLDAPSSettings', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  describeLDAPSSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLDAPSSettings', 'DirectoryService', Promise.reject(result), true, mock)
  },
  describeRegions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRegions', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  describeRegionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRegions', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  describeRegionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRegions', 'DirectoryService', Promise.reject(result), true, mock)
  },
  describeSharedDirectories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSharedDirectories', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  describeSharedDirectoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSharedDirectories', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  describeSharedDirectoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSharedDirectories', 'DirectoryService', Promise.reject(result), true, mock)
  },
  describeSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSnapshots', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  describeSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSnapshots', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  describeSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSnapshots', 'DirectoryService', Promise.reject(result), true, mock)
  },
  describeTrusts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTrusts', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  describeTrustsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTrusts', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  describeTrustsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTrusts', 'DirectoryService', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DirectoryService', Promise.reject(result), true, mock)
  },
  disableClientAuthentication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableClientAuthentication', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  disableClientAuthenticationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableClientAuthentication', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  disableClientAuthenticationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableClientAuthentication', 'DirectoryService', Promise.reject(result), true, mock)
  },
  disableLDAPS: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableLDAPS', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  disableLDAPSAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableLDAPS', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  disableLDAPSThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableLDAPS', 'DirectoryService', Promise.reject(result), true, mock)
  },
  disableRadius: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableRadius', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  disableRadiusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableRadius', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  disableRadiusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableRadius', 'DirectoryService', Promise.reject(result), true, mock)
  },
  disableSso: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableSso', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  disableSsoAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableSso', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  disableSsoThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableSso', 'DirectoryService', Promise.reject(result), true, mock)
  },
  enableClientAuthentication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableClientAuthentication', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  enableClientAuthenticationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableClientAuthentication', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  enableClientAuthenticationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableClientAuthentication', 'DirectoryService', Promise.reject(result), true, mock)
  },
  enableLDAPS: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableLDAPS', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  enableLDAPSAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableLDAPS', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  enableLDAPSThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableLDAPS', 'DirectoryService', Promise.reject(result), true, mock)
  },
  enableRadius: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableRadius', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  enableRadiusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableRadius', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  enableRadiusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableRadius', 'DirectoryService', Promise.reject(result), true, mock)
  },
  enableSso: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableSso', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  enableSsoAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableSso', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  enableSsoThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableSso', 'DirectoryService', Promise.reject(result), true, mock)
  },
  getDirectoryLimits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDirectoryLimits', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  getDirectoryLimitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDirectoryLimits', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  getDirectoryLimitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDirectoryLimits', 'DirectoryService', Promise.reject(result), true, mock)
  },
  getSnapshotLimits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSnapshotLimits', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  getSnapshotLimitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSnapshotLimits', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  getSnapshotLimitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSnapshotLimits', 'DirectoryService', Promise.reject(result), true, mock)
  },
  listCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCertificates', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  listCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCertificates', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  listCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCertificates', 'DirectoryService', Promise.reject(result), true, mock)
  },
  listIpRoutes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIpRoutes', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  listIpRoutesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIpRoutes', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  listIpRoutesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIpRoutes', 'DirectoryService', Promise.reject(result), true, mock)
  },
  listLogSubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLogSubscriptions', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  listLogSubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLogSubscriptions', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  listLogSubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLogSubscriptions', 'DirectoryService', Promise.reject(result), true, mock)
  },
  listSchemaExtensions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchemaExtensions', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  listSchemaExtensionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchemaExtensions', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  listSchemaExtensionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchemaExtensions', 'DirectoryService', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DirectoryService', Promise.reject(result), true, mock)
  },
  registerCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerCertificate', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  registerCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerCertificate', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  registerCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerCertificate', 'DirectoryService', Promise.reject(result), true, mock)
  },
  registerEventTopic: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerEventTopic', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  registerEventTopicAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerEventTopic', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  registerEventTopicThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerEventTopic', 'DirectoryService', Promise.reject(result), true, mock)
  },
  rejectSharedDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectSharedDirectory', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  rejectSharedDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectSharedDirectory', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  rejectSharedDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectSharedDirectory', 'DirectoryService', Promise.reject(result), true, mock)
  },
  removeIpRoutes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeIpRoutes', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  removeIpRoutesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeIpRoutes', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  removeIpRoutesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeIpRoutes', 'DirectoryService', Promise.reject(result), true, mock)
  },
  removeRegion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeRegion', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  removeRegionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeRegion', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  removeRegionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeRegion', 'DirectoryService', Promise.reject(result), true, mock)
  },
  removeTagsFromResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromResource', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  removeTagsFromResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromResource', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  removeTagsFromResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromResource', 'DirectoryService', Promise.reject(result), true, mock)
  },
  resetUserPassword: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetUserPassword', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  resetUserPasswordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetUserPassword', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  resetUserPasswordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetUserPassword', 'DirectoryService', Promise.reject(result), true, mock)
  },
  restoreFromSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreFromSnapshot', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  restoreFromSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreFromSnapshot', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  restoreFromSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreFromSnapshot', 'DirectoryService', Promise.reject(result), true, mock)
  },
  shareDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('shareDirectory', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  shareDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('shareDirectory', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  shareDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('shareDirectory', 'DirectoryService', Promise.reject(result), true, mock)
  },
  startSchemaExtension: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSchemaExtension', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  startSchemaExtensionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSchemaExtension', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  startSchemaExtensionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSchemaExtension', 'DirectoryService', Promise.reject(result), true, mock)
  },
  unshareDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unshareDirectory', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  unshareDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unshareDirectory', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  unshareDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unshareDirectory', 'DirectoryService', Promise.reject(result), true, mock)
  },
  updateConditionalForwarder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConditionalForwarder', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  updateConditionalForwarderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConditionalForwarder', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  updateConditionalForwarderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateConditionalForwarder', 'DirectoryService', Promise.reject(result), true, mock)
  },
  updateNumberOfDomainControllers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNumberOfDomainControllers', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  updateNumberOfDomainControllersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNumberOfDomainControllers', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  updateNumberOfDomainControllersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNumberOfDomainControllers', 'DirectoryService', Promise.reject(result), true, mock)
  },
  updateRadius: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRadius', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  updateRadiusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRadius', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  updateRadiusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRadius', 'DirectoryService', Promise.reject(result), true, mock)
  },
  updateTrust: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTrust', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  updateTrustAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTrust', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  updateTrustThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTrust', 'DirectoryService', Promise.reject(result), true, mock)
  },
  verifyTrust: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('verifyTrust', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  verifyTrustAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('verifyTrust', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  verifyTrustThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('verifyTrust', 'DirectoryService', Promise.reject(result), true, mock)
  },
}
