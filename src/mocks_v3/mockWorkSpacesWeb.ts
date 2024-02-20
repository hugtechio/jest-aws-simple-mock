
/**
* @description mocks_v3:mockWorkSpacesWeb module is mocks for AWS-SDK V3
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
export const mockWorkSpacesWeb = {
  associateBrowserSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'associateBrowserSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  associateBrowserSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'associateBrowserSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  associateBrowserSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'associateBrowserSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  associateIpAccessSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'associateIpAccessSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  associateIpAccessSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'associateIpAccessSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  associateIpAccessSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'associateIpAccessSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  associateNetworkSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'associateNetworkSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  associateNetworkSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'associateNetworkSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  associateNetworkSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'associateNetworkSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  associateTrustStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'associateTrustStore', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  associateTrustStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'associateTrustStore', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  associateTrustStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'associateTrustStore', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  associateUserAccessLoggingSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'associateUserAccessLoggingSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  associateUserAccessLoggingSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'associateUserAccessLoggingSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  associateUserAccessLoggingSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'associateUserAccessLoggingSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  associateUserSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'associateUserSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  associateUserSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'associateUserSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  associateUserSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'associateUserSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  createBrowserSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createBrowserSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  createBrowserSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createBrowserSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  createBrowserSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createBrowserSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  createIdentityProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createIdentityProvider', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  createIdentityProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createIdentityProvider', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  createIdentityProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createIdentityProvider', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  createIpAccessSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createIpAccessSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  createIpAccessSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createIpAccessSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  createIpAccessSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createIpAccessSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  createNetworkSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createNetworkSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  createNetworkSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createNetworkSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  createNetworkSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createNetworkSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  createPortal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createPortal', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  createPortalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createPortal', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  createPortalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createPortal', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  createTrustStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createTrustStore', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  createTrustStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createTrustStore', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  createTrustStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createTrustStore', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  createUserAccessLoggingSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createUserAccessLoggingSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  createUserAccessLoggingSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createUserAccessLoggingSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  createUserAccessLoggingSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createUserAccessLoggingSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  createUserSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createUserSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  createUserSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createUserSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  createUserSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'createUserSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  deleteBrowserSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deleteBrowserSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  deleteBrowserSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deleteBrowserSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  deleteBrowserSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deleteBrowserSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  deleteIdentityProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deleteIdentityProvider', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  deleteIdentityProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deleteIdentityProvider', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  deleteIdentityProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deleteIdentityProvider', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  deleteIpAccessSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deleteIpAccessSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  deleteIpAccessSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deleteIpAccessSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  deleteIpAccessSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deleteIpAccessSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  deleteNetworkSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deleteNetworkSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  deleteNetworkSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deleteNetworkSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  deleteNetworkSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deleteNetworkSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  deletePortal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deletePortal', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  deletePortalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deletePortal', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  deletePortalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deletePortal', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  deleteTrustStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deleteTrustStore', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  deleteTrustStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deleteTrustStore', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  deleteTrustStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deleteTrustStore', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  deleteUserAccessLoggingSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deleteUserAccessLoggingSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  deleteUserAccessLoggingSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deleteUserAccessLoggingSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  deleteUserAccessLoggingSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deleteUserAccessLoggingSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  deleteUserSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deleteUserSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  deleteUserSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deleteUserSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  deleteUserSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'deleteUserSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  disassociateBrowserSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'disassociateBrowserSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  disassociateBrowserSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'disassociateBrowserSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  disassociateBrowserSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'disassociateBrowserSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  disassociateIpAccessSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'disassociateIpAccessSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  disassociateIpAccessSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'disassociateIpAccessSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  disassociateIpAccessSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'disassociateIpAccessSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  disassociateNetworkSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'disassociateNetworkSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  disassociateNetworkSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'disassociateNetworkSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  disassociateNetworkSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'disassociateNetworkSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  disassociateTrustStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'disassociateTrustStore', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  disassociateTrustStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'disassociateTrustStore', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  disassociateTrustStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'disassociateTrustStore', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  disassociateUserAccessLoggingSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'disassociateUserAccessLoggingSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  disassociateUserAccessLoggingSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'disassociateUserAccessLoggingSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  disassociateUserAccessLoggingSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'disassociateUserAccessLoggingSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  disassociateUserSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'disassociateUserSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  disassociateUserSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'disassociateUserSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  disassociateUserSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'disassociateUserSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  getBrowserSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getBrowserSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  getBrowserSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getBrowserSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  getBrowserSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getBrowserSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  getIdentityProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getIdentityProvider', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  getIdentityProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getIdentityProvider', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  getIdentityProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getIdentityProvider', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  getIpAccessSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getIpAccessSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  getIpAccessSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getIpAccessSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  getIpAccessSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getIpAccessSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  getNetworkSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getNetworkSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  getNetworkSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getNetworkSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  getNetworkSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getNetworkSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  getPortal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getPortal', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  getPortalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getPortal', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  getPortalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getPortal', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  getPortalServiceProviderMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getPortalServiceProviderMetadata', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  getPortalServiceProviderMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getPortalServiceProviderMetadata', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  getPortalServiceProviderMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getPortalServiceProviderMetadata', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  getTrustStoreCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getTrustStoreCertificate', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  getTrustStoreCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getTrustStoreCertificate', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  getTrustStoreCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getTrustStoreCertificate', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  getTrustStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getTrustStore', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  getTrustStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getTrustStore', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  getTrustStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getTrustStore', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  getUserAccessLoggingSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getUserAccessLoggingSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  getUserAccessLoggingSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getUserAccessLoggingSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  getUserAccessLoggingSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getUserAccessLoggingSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  getUserSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getUserSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  getUserSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getUserSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  getUserSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'getUserSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  listBrowserSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listBrowserSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  listBrowserSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listBrowserSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  listBrowserSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listBrowserSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  listIdentityProviders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listIdentityProviders', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  listIdentityProvidersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listIdentityProviders', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  listIdentityProvidersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listIdentityProviders', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  listIpAccessSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listIpAccessSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  listIpAccessSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listIpAccessSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  listIpAccessSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listIpAccessSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  listNetworkSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listNetworkSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  listNetworkSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listNetworkSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  listNetworkSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listNetworkSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  listPortals: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listPortals', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  listPortalsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listPortals', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  listPortalsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listPortals', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listTagsForResource', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listTagsForResource', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listTagsForResource', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  listTrustStoreCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listTrustStoreCertificates', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  listTrustStoreCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listTrustStoreCertificates', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  listTrustStoreCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listTrustStoreCertificates', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  listTrustStores: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listTrustStores', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  listTrustStoresAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listTrustStores', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  listTrustStoresThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listTrustStores', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  listUserAccessLoggingSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listUserAccessLoggingSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  listUserAccessLoggingSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listUserAccessLoggingSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  listUserAccessLoggingSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listUserAccessLoggingSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  listUserSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listUserSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  listUserSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listUserSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  listUserSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'listUserSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'tagResource', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'tagResource', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'tagResource', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'untagResource', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'untagResource', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'untagResource', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  updateBrowserSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updateBrowserSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  updateBrowserSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updateBrowserSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  updateBrowserSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updateBrowserSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  updateIdentityProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updateIdentityProvider', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  updateIdentityProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updateIdentityProvider', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  updateIdentityProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updateIdentityProvider', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  updateIpAccessSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updateIpAccessSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  updateIpAccessSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updateIpAccessSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  updateIpAccessSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updateIpAccessSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  updateNetworkSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updateNetworkSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  updateNetworkSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updateNetworkSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  updateNetworkSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updateNetworkSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  updatePortal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updatePortal', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  updatePortalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updatePortal', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  updatePortalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updatePortal', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  updateTrustStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updateTrustStore', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  updateTrustStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updateTrustStore', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  updateTrustStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updateTrustStore', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  updateUserAccessLoggingSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updateUserAccessLoggingSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  updateUserAccessLoggingSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updateUserAccessLoggingSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  updateUserAccessLoggingSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updateUserAccessLoggingSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  updateUserSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updateUserSettings', 'WorkSpacesWeb', Promise.resolve(result), true, mock)
  },
  updateUserSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updateUserSettings', 'WorkSpacesWeb', Promise.resolve(result), false, mock)
  },
  updateUserSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'updateUserSettings', 'WorkSpacesWeb', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'send', 'WorkSpacesWebClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'send', 'WorkSpacesWebClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-web', 'send', 'WorkSpacesWebClient', Promise.reject(result), true, mock)
  }
}
