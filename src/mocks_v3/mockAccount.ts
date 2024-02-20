
/**
* @description mocks_v3:mockAccount module is mocks for AWS-SDK V3
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
export const mockAccount = {
  deleteAlternateContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'deleteAlternateContact', 'Account', Promise.resolve(result), true, mock)
  },
  deleteAlternateContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'deleteAlternateContact', 'Account', Promise.resolve(result), false, mock)
  },
  deleteAlternateContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'deleteAlternateContact', 'Account', Promise.reject(result), true, mock)
  },
  disableRegion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'disableRegion', 'Account', Promise.resolve(result), true, mock)
  },
  disableRegionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'disableRegion', 'Account', Promise.resolve(result), false, mock)
  },
  disableRegionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'disableRegion', 'Account', Promise.reject(result), true, mock)
  },
  enableRegion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'enableRegion', 'Account', Promise.resolve(result), true, mock)
  },
  enableRegionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'enableRegion', 'Account', Promise.resolve(result), false, mock)
  },
  enableRegionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'enableRegion', 'Account', Promise.reject(result), true, mock)
  },
  getAlternateContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'getAlternateContact', 'Account', Promise.resolve(result), true, mock)
  },
  getAlternateContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'getAlternateContact', 'Account', Promise.resolve(result), false, mock)
  },
  getAlternateContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'getAlternateContact', 'Account', Promise.reject(result), true, mock)
  },
  getContactInformation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'getContactInformation', 'Account', Promise.resolve(result), true, mock)
  },
  getContactInformationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'getContactInformation', 'Account', Promise.resolve(result), false, mock)
  },
  getContactInformationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'getContactInformation', 'Account', Promise.reject(result), true, mock)
  },
  getRegionOptStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'getRegionOptStatus', 'Account', Promise.resolve(result), true, mock)
  },
  getRegionOptStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'getRegionOptStatus', 'Account', Promise.resolve(result), false, mock)
  },
  getRegionOptStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'getRegionOptStatus', 'Account', Promise.reject(result), true, mock)
  },
  listRegions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'listRegions', 'Account', Promise.resolve(result), true, mock)
  },
  listRegionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'listRegions', 'Account', Promise.resolve(result), false, mock)
  },
  listRegionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'listRegions', 'Account', Promise.reject(result), true, mock)
  },
  putAlternateContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'putAlternateContact', 'Account', Promise.resolve(result), true, mock)
  },
  putAlternateContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'putAlternateContact', 'Account', Promise.resolve(result), false, mock)
  },
  putAlternateContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'putAlternateContact', 'Account', Promise.reject(result), true, mock)
  },
  putContactInformation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'putContactInformation', 'Account', Promise.resolve(result), true, mock)
  },
  putContactInformationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'putContactInformation', 'Account', Promise.resolve(result), false, mock)
  },
  putContactInformationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'putContactInformation', 'Account', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'send', 'AccountClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'send', 'AccountClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-account', 'send', 'AccountClient', Promise.reject(result), true, mock)
  }
}
