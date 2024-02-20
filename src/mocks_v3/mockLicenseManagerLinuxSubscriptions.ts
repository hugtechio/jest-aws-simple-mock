
/**
* @description mocks_v3:mockLicenseManagerLinuxSubscriptions module is mocks for AWS-SDK V3
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
export const mockLicenseManagerLinuxSubscriptions = {
  getServiceSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-linux-subscriptions', 'getServiceSettings', 'LicenseManagerLinuxSubscriptions', Promise.resolve(result), true, mock)
  },
  getServiceSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-linux-subscriptions', 'getServiceSettings', 'LicenseManagerLinuxSubscriptions', Promise.resolve(result), false, mock)
  },
  getServiceSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-linux-subscriptions', 'getServiceSettings', 'LicenseManagerLinuxSubscriptions', Promise.reject(result), true, mock)
  },
  listLinuxSubscriptionInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-linux-subscriptions', 'listLinuxSubscriptionInstances', 'LicenseManagerLinuxSubscriptions', Promise.resolve(result), true, mock)
  },
  listLinuxSubscriptionInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-linux-subscriptions', 'listLinuxSubscriptionInstances', 'LicenseManagerLinuxSubscriptions', Promise.resolve(result), false, mock)
  },
  listLinuxSubscriptionInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-linux-subscriptions', 'listLinuxSubscriptionInstances', 'LicenseManagerLinuxSubscriptions', Promise.reject(result), true, mock)
  },
  listLinuxSubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-linux-subscriptions', 'listLinuxSubscriptions', 'LicenseManagerLinuxSubscriptions', Promise.resolve(result), true, mock)
  },
  listLinuxSubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-linux-subscriptions', 'listLinuxSubscriptions', 'LicenseManagerLinuxSubscriptions', Promise.resolve(result), false, mock)
  },
  listLinuxSubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-linux-subscriptions', 'listLinuxSubscriptions', 'LicenseManagerLinuxSubscriptions', Promise.reject(result), true, mock)
  },
  updateServiceSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-linux-subscriptions', 'updateServiceSettings', 'LicenseManagerLinuxSubscriptions', Promise.resolve(result), true, mock)
  },
  updateServiceSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-linux-subscriptions', 'updateServiceSettings', 'LicenseManagerLinuxSubscriptions', Promise.resolve(result), false, mock)
  },
  updateServiceSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-linux-subscriptions', 'updateServiceSettings', 'LicenseManagerLinuxSubscriptions', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-linux-subscriptions', 'send', 'LicenseManagerLinuxSubscriptionsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-linux-subscriptions', 'send', 'LicenseManagerLinuxSubscriptionsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-license-manager-linux-subscriptions', 'send', 'LicenseManagerLinuxSubscriptionsClient', Promise.reject(result), true, mock)
  }
}
