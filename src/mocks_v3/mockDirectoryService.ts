
/**
* @description mocks_v3:mockDirectoryService module is mocks for AWS-SDK V3
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

  export const mockDirectoryService = {
  acceptSharedDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'acceptSharedDirectory', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  acceptSharedDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'acceptSharedDirectory', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  acceptSharedDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'acceptSharedDirectory', 'DirectoryService', Promise.reject(result), true, mock)
  },
  addIpRoutes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'addIpRoutes', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  addIpRoutesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'addIpRoutes', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  addIpRoutesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'addIpRoutes', 'DirectoryService', Promise.reject(result), true, mock)
  },
  addRegion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'addRegion', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  addRegionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'addRegion', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  addRegionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'addRegion', 'DirectoryService', Promise.reject(result), true, mock)
  },
  addTagsToResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'addTagsToResource', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  addTagsToResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'addTagsToResource', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  addTagsToResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'addTagsToResource', 'DirectoryService', Promise.reject(result), true, mock)
  },
  cancelSchemaExtension: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'cancelSchemaExtension', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  cancelSchemaExtensionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'cancelSchemaExtension', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  cancelSchemaExtensionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'cancelSchemaExtension', 'DirectoryService', Promise.reject(result), true, mock)
  },
  connectDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'connectDirectory', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  connectDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'connectDirectory', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  connectDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'connectDirectory', 'DirectoryService', Promise.reject(result), true, mock)
  },
  createAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createAlias', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  createAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createAlias', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  createAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createAlias', 'DirectoryService', Promise.reject(result), true, mock)
  },
  createComputer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createComputer', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  createComputerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createComputer', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  createComputerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createComputer', 'DirectoryService', Promise.reject(result), true, mock)
  },
  createConditionalForwarder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createConditionalForwarder', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  createConditionalForwarderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createConditionalForwarder', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  createConditionalForwarderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createConditionalForwarder', 'DirectoryService', Promise.reject(result), true, mock)
  },
  createDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createDirectory', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  createDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createDirectory', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  createDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createDirectory', 'DirectoryService', Promise.reject(result), true, mock)
  },
  createLogSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createLogSubscription', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  createLogSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createLogSubscription', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  createLogSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createLogSubscription', 'DirectoryService', Promise.reject(result), true, mock)
  },
  createMicrosoftAD: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createMicrosoftAD', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  createMicrosoftADAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createMicrosoftAD', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  createMicrosoftADThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createMicrosoftAD', 'DirectoryService', Promise.reject(result), true, mock)
  },
  createSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createSnapshot', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  createSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createSnapshot', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  createSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createSnapshot', 'DirectoryService', Promise.reject(result), true, mock)
  },
  createTrust: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createTrust', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  createTrustAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createTrust', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  createTrustThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'createTrust', 'DirectoryService', Promise.reject(result), true, mock)
  },
  deleteConditionalForwarder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'deleteConditionalForwarder', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  deleteConditionalForwarderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'deleteConditionalForwarder', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  deleteConditionalForwarderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'deleteConditionalForwarder', 'DirectoryService', Promise.reject(result), true, mock)
  },
  deleteDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'deleteDirectory', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  deleteDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'deleteDirectory', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  deleteDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'deleteDirectory', 'DirectoryService', Promise.reject(result), true, mock)
  },
  deleteLogSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'deleteLogSubscription', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  deleteLogSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'deleteLogSubscription', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  deleteLogSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'deleteLogSubscription', 'DirectoryService', Promise.reject(result), true, mock)
  },
  deleteSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'deleteSnapshot', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  deleteSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'deleteSnapshot', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  deleteSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'deleteSnapshot', 'DirectoryService', Promise.reject(result), true, mock)
  },
  deleteTrust: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'deleteTrust', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  deleteTrustAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'deleteTrust', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  deleteTrustThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'deleteTrust', 'DirectoryService', Promise.reject(result), true, mock)
  },
  deregisterCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'deregisterCertificate', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  deregisterCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'deregisterCertificate', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  deregisterCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'deregisterCertificate', 'DirectoryService', Promise.reject(result), true, mock)
  },
  deregisterEventTopic: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'deregisterEventTopic', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  deregisterEventTopicAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'deregisterEventTopic', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  deregisterEventTopicThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'deregisterEventTopic', 'DirectoryService', Promise.reject(result), true, mock)
  },
  describeCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeCertificate', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  describeCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeCertificate', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  describeCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeCertificate', 'DirectoryService', Promise.reject(result), true, mock)
  },
  describeClientAuthenticationSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeClientAuthenticationSettings', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  describeClientAuthenticationSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeClientAuthenticationSettings', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  describeClientAuthenticationSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeClientAuthenticationSettings', 'DirectoryService', Promise.reject(result), true, mock)
  },
  describeConditionalForwarders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeConditionalForwarders', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  describeConditionalForwardersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeConditionalForwarders', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  describeConditionalForwardersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeConditionalForwarders', 'DirectoryService', Promise.reject(result), true, mock)
  },
  describeDirectories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeDirectories', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  describeDirectoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeDirectories', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  describeDirectoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeDirectories', 'DirectoryService', Promise.reject(result), true, mock)
  },
  describeDomainControllers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeDomainControllers', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  describeDomainControllersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeDomainControllers', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  describeDomainControllersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeDomainControllers', 'DirectoryService', Promise.reject(result), true, mock)
  },
  describeEventTopics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeEventTopics', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  describeEventTopicsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeEventTopics', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  describeEventTopicsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeEventTopics', 'DirectoryService', Promise.reject(result), true, mock)
  },
  describeLDAPSSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeLDAPSSettings', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  describeLDAPSSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeLDAPSSettings', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  describeLDAPSSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeLDAPSSettings', 'DirectoryService', Promise.reject(result), true, mock)
  },
  describeRegions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeRegions', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  describeRegionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeRegions', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  describeRegionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeRegions', 'DirectoryService', Promise.reject(result), true, mock)
  },
  describeSharedDirectories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeSharedDirectories', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  describeSharedDirectoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeSharedDirectories', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  describeSharedDirectoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeSharedDirectories', 'DirectoryService', Promise.reject(result), true, mock)
  },
  describeSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeSnapshots', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  describeSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeSnapshots', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  describeSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeSnapshots', 'DirectoryService', Promise.reject(result), true, mock)
  },
  describeTrusts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeTrusts', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  describeTrustsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeTrusts', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  describeTrustsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'describeTrusts', 'DirectoryService', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'destroy', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'destroy', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'destroy', 'DirectoryService', Promise.reject(result), true, mock)
  },
  disableClientAuthentication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'disableClientAuthentication', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  disableClientAuthenticationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'disableClientAuthentication', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  disableClientAuthenticationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'disableClientAuthentication', 'DirectoryService', Promise.reject(result), true, mock)
  },
  disableLDAPS: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'disableLDAPS', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  disableLDAPSAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'disableLDAPS', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  disableLDAPSThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'disableLDAPS', 'DirectoryService', Promise.reject(result), true, mock)
  },
  disableRadius: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'disableRadius', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  disableRadiusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'disableRadius', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  disableRadiusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'disableRadius', 'DirectoryService', Promise.reject(result), true, mock)
  },
  disableSso: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'disableSso', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  disableSsoAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'disableSso', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  disableSsoThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'disableSso', 'DirectoryService', Promise.reject(result), true, mock)
  },
  enableClientAuthentication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'enableClientAuthentication', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  enableClientAuthenticationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'enableClientAuthentication', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  enableClientAuthenticationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'enableClientAuthentication', 'DirectoryService', Promise.reject(result), true, mock)
  },
  enableLDAPS: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'enableLDAPS', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  enableLDAPSAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'enableLDAPS', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  enableLDAPSThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'enableLDAPS', 'DirectoryService', Promise.reject(result), true, mock)
  },
  enableRadius: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'enableRadius', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  enableRadiusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'enableRadius', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  enableRadiusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'enableRadius', 'DirectoryService', Promise.reject(result), true, mock)
  },
  enableSso: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'enableSso', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  enableSsoAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'enableSso', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  enableSsoThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'enableSso', 'DirectoryService', Promise.reject(result), true, mock)
  },
  getDirectoryLimits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'getDirectoryLimits', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  getDirectoryLimitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'getDirectoryLimits', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  getDirectoryLimitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'getDirectoryLimits', 'DirectoryService', Promise.reject(result), true, mock)
  },
  getSnapshotLimits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'getSnapshotLimits', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  getSnapshotLimitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'getSnapshotLimits', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  getSnapshotLimitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'getSnapshotLimits', 'DirectoryService', Promise.reject(result), true, mock)
  },
  listCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'listCertificates', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  listCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'listCertificates', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  listCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'listCertificates', 'DirectoryService', Promise.reject(result), true, mock)
  },
  listIpRoutes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'listIpRoutes', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  listIpRoutesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'listIpRoutes', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  listIpRoutesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'listIpRoutes', 'DirectoryService', Promise.reject(result), true, mock)
  },
  listLogSubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'listLogSubscriptions', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  listLogSubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'listLogSubscriptions', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  listLogSubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'listLogSubscriptions', 'DirectoryService', Promise.reject(result), true, mock)
  },
  listSchemaExtensions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'listSchemaExtensions', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  listSchemaExtensionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'listSchemaExtensions', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  listSchemaExtensionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'listSchemaExtensions', 'DirectoryService', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'listTagsForResource', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'listTagsForResource', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'listTagsForResource', 'DirectoryService', Promise.reject(result), true, mock)
  },
  registerCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'registerCertificate', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  registerCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'registerCertificate', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  registerCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'registerCertificate', 'DirectoryService', Promise.reject(result), true, mock)
  },
  registerEventTopic: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'registerEventTopic', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  registerEventTopicAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'registerEventTopic', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  registerEventTopicThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'registerEventTopic', 'DirectoryService', Promise.reject(result), true, mock)
  },
  rejectSharedDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'rejectSharedDirectory', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  rejectSharedDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'rejectSharedDirectory', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  rejectSharedDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'rejectSharedDirectory', 'DirectoryService', Promise.reject(result), true, mock)
  },
  removeIpRoutes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'removeIpRoutes', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  removeIpRoutesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'removeIpRoutes', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  removeIpRoutesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'removeIpRoutes', 'DirectoryService', Promise.reject(result), true, mock)
  },
  removeRegion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'removeRegion', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  removeRegionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'removeRegion', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  removeRegionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'removeRegion', 'DirectoryService', Promise.reject(result), true, mock)
  },
  removeTagsFromResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'removeTagsFromResource', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  removeTagsFromResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'removeTagsFromResource', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  removeTagsFromResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'removeTagsFromResource', 'DirectoryService', Promise.reject(result), true, mock)
  },
  resetUserPassword: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'resetUserPassword', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  resetUserPasswordAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'resetUserPassword', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  resetUserPasswordThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'resetUserPassword', 'DirectoryService', Promise.reject(result), true, mock)
  },
  restoreFromSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'restoreFromSnapshot', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  restoreFromSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'restoreFromSnapshot', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  restoreFromSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'restoreFromSnapshot', 'DirectoryService', Promise.reject(result), true, mock)
  },
  shareDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'shareDirectory', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  shareDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'shareDirectory', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  shareDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'shareDirectory', 'DirectoryService', Promise.reject(result), true, mock)
  },
  startSchemaExtension: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'startSchemaExtension', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  startSchemaExtensionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'startSchemaExtension', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  startSchemaExtensionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'startSchemaExtension', 'DirectoryService', Promise.reject(result), true, mock)
  },
  unshareDirectory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'unshareDirectory', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  unshareDirectoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'unshareDirectory', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  unshareDirectoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'unshareDirectory', 'DirectoryService', Promise.reject(result), true, mock)
  },
  updateConditionalForwarder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'updateConditionalForwarder', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  updateConditionalForwarderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'updateConditionalForwarder', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  updateConditionalForwarderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'updateConditionalForwarder', 'DirectoryService', Promise.reject(result), true, mock)
  },
  updateNumberOfDomainControllers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'updateNumberOfDomainControllers', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  updateNumberOfDomainControllersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'updateNumberOfDomainControllers', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  updateNumberOfDomainControllersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'updateNumberOfDomainControllers', 'DirectoryService', Promise.reject(result), true, mock)
  },
  updateRadius: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'updateRadius', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  updateRadiusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'updateRadius', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  updateRadiusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'updateRadius', 'DirectoryService', Promise.reject(result), true, mock)
  },
  updateTrust: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'updateTrust', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  updateTrustAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'updateTrust', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  updateTrustThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'updateTrust', 'DirectoryService', Promise.reject(result), true, mock)
  },
  verifyTrust: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'verifyTrust', 'DirectoryService', Promise.resolve(result), true, mock)
  },
  verifyTrustAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'verifyTrust', 'DirectoryService', Promise.resolve(result), false, mock)
  },
  verifyTrustThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'verifyTrust', 'DirectoryService', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'send', 'DirectoryServiceClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'send', 'DirectoryServiceClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-directory-service', 'send', 'DirectoryServiceClient', Promise.reject(result), true, mock)
  }
}