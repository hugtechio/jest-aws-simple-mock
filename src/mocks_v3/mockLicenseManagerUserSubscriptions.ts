
/**
* @description mocks_v3:mockLicenseManagerUserSubscriptions module is mocks for AWS-SDK V3
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
export const mockLicenseManagerUserSubscriptions = {
  associateUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'associateUser', 'LicenseManagerUserSubscriptions', Promise.resolve(result), true, mock)
  },
  associateUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'associateUser', 'LicenseManagerUserSubscriptions', Promise.resolve(result), false, mock)
  },
  associateUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'associateUser', 'LicenseManagerUserSubscriptions', Promise.reject(result), true, mock)
  },
  deregisterIdentityProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'deregisterIdentityProvider', 'LicenseManagerUserSubscriptions', Promise.resolve(result), true, mock)
  },
  deregisterIdentityProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'deregisterIdentityProvider', 'LicenseManagerUserSubscriptions', Promise.resolve(result), false, mock)
  },
  deregisterIdentityProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'deregisterIdentityProvider', 'LicenseManagerUserSubscriptions', Promise.reject(result), true, mock)
  },
  disassociateUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'disassociateUser', 'LicenseManagerUserSubscriptions', Promise.resolve(result), true, mock)
  },
  disassociateUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'disassociateUser', 'LicenseManagerUserSubscriptions', Promise.resolve(result), false, mock)
  },
  disassociateUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'disassociateUser', 'LicenseManagerUserSubscriptions', Promise.reject(result), true, mock)
  },
  listIdentityProviders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'listIdentityProviders', 'LicenseManagerUserSubscriptions', Promise.resolve(result), true, mock)
  },
  listIdentityProvidersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'listIdentityProviders', 'LicenseManagerUserSubscriptions', Promise.resolve(result), false, mock)
  },
  listIdentityProvidersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'listIdentityProviders', 'LicenseManagerUserSubscriptions', Promise.reject(result), true, mock)
  },
  listInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'listInstances', 'LicenseManagerUserSubscriptions', Promise.resolve(result), true, mock)
  },
  listInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'listInstances', 'LicenseManagerUserSubscriptions', Promise.resolve(result), false, mock)
  },
  listInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'listInstances', 'LicenseManagerUserSubscriptions', Promise.reject(result), true, mock)
  },
  listProductSubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'listProductSubscriptions', 'LicenseManagerUserSubscriptions', Promise.resolve(result), true, mock)
  },
  listProductSubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'listProductSubscriptions', 'LicenseManagerUserSubscriptions', Promise.resolve(result), false, mock)
  },
  listProductSubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'listProductSubscriptions', 'LicenseManagerUserSubscriptions', Promise.reject(result), true, mock)
  },
  listUserAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'listUserAssociations', 'LicenseManagerUserSubscriptions', Promise.resolve(result), true, mock)
  },
  listUserAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'listUserAssociations', 'LicenseManagerUserSubscriptions', Promise.resolve(result), false, mock)
  },
  listUserAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'listUserAssociations', 'LicenseManagerUserSubscriptions', Promise.reject(result), true, mock)
  },
  registerIdentityProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'registerIdentityProvider', 'LicenseManagerUserSubscriptions', Promise.resolve(result), true, mock)
  },
  registerIdentityProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'registerIdentityProvider', 'LicenseManagerUserSubscriptions', Promise.resolve(result), false, mock)
  },
  registerIdentityProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'registerIdentityProvider', 'LicenseManagerUserSubscriptions', Promise.reject(result), true, mock)
  },
  startProductSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'startProductSubscription', 'LicenseManagerUserSubscriptions', Promise.resolve(result), true, mock)
  },
  startProductSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'startProductSubscription', 'LicenseManagerUserSubscriptions', Promise.resolve(result), false, mock)
  },
  startProductSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'startProductSubscription', 'LicenseManagerUserSubscriptions', Promise.reject(result), true, mock)
  },
  stopProductSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'stopProductSubscription', 'LicenseManagerUserSubscriptions', Promise.resolve(result), true, mock)
  },
  stopProductSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'stopProductSubscription', 'LicenseManagerUserSubscriptions', Promise.resolve(result), false, mock)
  },
  stopProductSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'stopProductSubscription', 'LicenseManagerUserSubscriptions', Promise.reject(result), true, mock)
  },
  updateIdentityProviderSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'updateIdentityProviderSettings', 'LicenseManagerUserSubscriptions', Promise.resolve(result), true, mock)
  },
  updateIdentityProviderSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'updateIdentityProviderSettings', 'LicenseManagerUserSubscriptions', Promise.resolve(result), false, mock)
  },
  updateIdentityProviderSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'updateIdentityProviderSettings', 'LicenseManagerUserSubscriptions', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'send', 'LicenseManagerUserSubscriptionsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'send', 'LicenseManagerUserSubscriptionsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-user-subscriptions', 'send', 'LicenseManagerUserSubscriptionsClient', Promise.reject(result), true, mock)
  }
}
