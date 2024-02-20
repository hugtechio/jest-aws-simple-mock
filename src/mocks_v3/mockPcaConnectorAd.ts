
/**
* @description mocks_v3:mockPcaConnectorAd module is mocks for AWS-SDK V3
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
export const mockPcaConnectorAd = {
  createConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'createConnector', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  createConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'createConnector', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  createConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'createConnector', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  createDirectoryRegistration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'createDirectoryRegistration', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  createDirectoryRegistrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'createDirectoryRegistration', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  createDirectoryRegistrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'createDirectoryRegistration', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  createServicePrincipalName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'createServicePrincipalName', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  createServicePrincipalNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'createServicePrincipalName', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  createServicePrincipalNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'createServicePrincipalName', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  createTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'createTemplate', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  createTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'createTemplate', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  createTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'createTemplate', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  createTemplateGroupAccessControlEntry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'createTemplateGroupAccessControlEntry', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  createTemplateGroupAccessControlEntryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'createTemplateGroupAccessControlEntry', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  createTemplateGroupAccessControlEntryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'createTemplateGroupAccessControlEntry', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  deleteConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'deleteConnector', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  deleteConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'deleteConnector', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  deleteConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'deleteConnector', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  deleteDirectoryRegistration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'deleteDirectoryRegistration', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  deleteDirectoryRegistrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'deleteDirectoryRegistration', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  deleteDirectoryRegistrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'deleteDirectoryRegistration', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  deleteServicePrincipalName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'deleteServicePrincipalName', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  deleteServicePrincipalNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'deleteServicePrincipalName', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  deleteServicePrincipalNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'deleteServicePrincipalName', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  deleteTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'deleteTemplate', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  deleteTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'deleteTemplate', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  deleteTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'deleteTemplate', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  deleteTemplateGroupAccessControlEntry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'deleteTemplateGroupAccessControlEntry', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  deleteTemplateGroupAccessControlEntryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'deleteTemplateGroupAccessControlEntry', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  deleteTemplateGroupAccessControlEntryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'deleteTemplateGroupAccessControlEntry', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  getConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'getConnector', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  getConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'getConnector', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  getConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'getConnector', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  getDirectoryRegistration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'getDirectoryRegistration', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  getDirectoryRegistrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'getDirectoryRegistration', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  getDirectoryRegistrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'getDirectoryRegistration', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  getServicePrincipalName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'getServicePrincipalName', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  getServicePrincipalNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'getServicePrincipalName', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  getServicePrincipalNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'getServicePrincipalName', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  getTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'getTemplate', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  getTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'getTemplate', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  getTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'getTemplate', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  getTemplateGroupAccessControlEntry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'getTemplateGroupAccessControlEntry', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  getTemplateGroupAccessControlEntryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'getTemplateGroupAccessControlEntry', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  getTemplateGroupAccessControlEntryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'getTemplateGroupAccessControlEntry', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  listConnectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'listConnectors', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  listConnectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'listConnectors', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  listConnectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'listConnectors', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  listDirectoryRegistrations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'listDirectoryRegistrations', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  listDirectoryRegistrationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'listDirectoryRegistrations', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  listDirectoryRegistrationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'listDirectoryRegistrations', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  listServicePrincipalNames: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'listServicePrincipalNames', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  listServicePrincipalNamesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'listServicePrincipalNames', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  listServicePrincipalNamesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'listServicePrincipalNames', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'listTagsForResource', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'listTagsForResource', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'listTagsForResource', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  listTemplateGroupAccessControlEntries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'listTemplateGroupAccessControlEntries', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  listTemplateGroupAccessControlEntriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'listTemplateGroupAccessControlEntries', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  listTemplateGroupAccessControlEntriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'listTemplateGroupAccessControlEntries', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  listTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'listTemplates', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  listTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'listTemplates', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  listTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'listTemplates', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'tagResource', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'tagResource', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'tagResource', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'untagResource', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'untagResource', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'untagResource', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  updateTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'updateTemplate', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  updateTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'updateTemplate', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  updateTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'updateTemplate', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  updateTemplateGroupAccessControlEntry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'updateTemplateGroupAccessControlEntry', 'PcaConnectorAd', Promise.resolve(result), true, mock)
  },
  updateTemplateGroupAccessControlEntryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'updateTemplateGroupAccessControlEntry', 'PcaConnectorAd', Promise.resolve(result), false, mock)
  },
  updateTemplateGroupAccessControlEntryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'updateTemplateGroupAccessControlEntry', 'PcaConnectorAd', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'send', 'PcaConnectorAdClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'send', 'PcaConnectorAdClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pca-connector-ad', 'send', 'PcaConnectorAdClient', Promise.reject(result), true, mock)
  }
}
