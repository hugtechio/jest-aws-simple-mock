
/**
* @description mocks_v3:mockCloudSearchDomain module is mocks for AWS-SDK V3
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
export const mockCloudSearchDomain = {
  search: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch-domain', 'search', 'CloudSearchDomain', Promise.resolve(result), true, mock)
  },
  searchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch-domain', 'search', 'CloudSearchDomain', Promise.resolve(result), false, mock)
  },
  searchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch-domain', 'search', 'CloudSearchDomain', Promise.reject(result), true, mock)
  },
  suggest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch-domain', 'suggest', 'CloudSearchDomain', Promise.resolve(result), true, mock)
  },
  suggestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch-domain', 'suggest', 'CloudSearchDomain', Promise.resolve(result), false, mock)
  },
  suggestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch-domain', 'suggest', 'CloudSearchDomain', Promise.reject(result), true, mock)
  },
  uploadDocuments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch-domain', 'uploadDocuments', 'CloudSearchDomain', Promise.resolve(result), true, mock)
  },
  uploadDocumentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch-domain', 'uploadDocuments', 'CloudSearchDomain', Promise.resolve(result), false, mock)
  },
  uploadDocumentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch-domain', 'uploadDocuments', 'CloudSearchDomain', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch-domain', 'send', 'CloudSearchDomainClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch-domain', 'send', 'CloudSearchDomainClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch-domain', 'send', 'CloudSearchDomainClient', Promise.reject(result), true, mock)
  }
}
