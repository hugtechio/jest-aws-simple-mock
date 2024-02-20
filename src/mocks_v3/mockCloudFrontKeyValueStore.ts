
/**
* @description mocks_v3:mockCloudFrontKeyValueStore module is mocks for AWS-SDK V3
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
export const mockCloudFrontKeyValueStore = {
  deleteKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront-keyvaluestore', 'deleteKey', 'CloudFrontKeyValueStore', Promise.resolve(result), true, mock)
  },
  deleteKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront-keyvaluestore', 'deleteKey', 'CloudFrontKeyValueStore', Promise.resolve(result), false, mock)
  },
  deleteKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront-keyvaluestore', 'deleteKey', 'CloudFrontKeyValueStore', Promise.reject(result), true, mock)
  },
  describeKeyValueStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront-keyvaluestore', 'describeKeyValueStore', 'CloudFrontKeyValueStore', Promise.resolve(result), true, mock)
  },
  describeKeyValueStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront-keyvaluestore', 'describeKeyValueStore', 'CloudFrontKeyValueStore', Promise.resolve(result), false, mock)
  },
  describeKeyValueStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront-keyvaluestore', 'describeKeyValueStore', 'CloudFrontKeyValueStore', Promise.reject(result), true, mock)
  },
  getKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront-keyvaluestore', 'getKey', 'CloudFrontKeyValueStore', Promise.resolve(result), true, mock)
  },
  getKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront-keyvaluestore', 'getKey', 'CloudFrontKeyValueStore', Promise.resolve(result), false, mock)
  },
  getKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront-keyvaluestore', 'getKey', 'CloudFrontKeyValueStore', Promise.reject(result), true, mock)
  },
  listKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront-keyvaluestore', 'listKeys', 'CloudFrontKeyValueStore', Promise.resolve(result), true, mock)
  },
  listKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront-keyvaluestore', 'listKeys', 'CloudFrontKeyValueStore', Promise.resolve(result), false, mock)
  },
  listKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront-keyvaluestore', 'listKeys', 'CloudFrontKeyValueStore', Promise.reject(result), true, mock)
  },
  putKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront-keyvaluestore', 'putKey', 'CloudFrontKeyValueStore', Promise.resolve(result), true, mock)
  },
  putKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront-keyvaluestore', 'putKey', 'CloudFrontKeyValueStore', Promise.resolve(result), false, mock)
  },
  putKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront-keyvaluestore', 'putKey', 'CloudFrontKeyValueStore', Promise.reject(result), true, mock)
  },
  updateKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront-keyvaluestore', 'updateKeys', 'CloudFrontKeyValueStore', Promise.resolve(result), true, mock)
  },
  updateKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront-keyvaluestore', 'updateKeys', 'CloudFrontKeyValueStore', Promise.resolve(result), false, mock)
  },
  updateKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront-keyvaluestore', 'updateKeys', 'CloudFrontKeyValueStore', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront-keyvaluestore', 'send', 'CloudFrontKeyValueStoreClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront-keyvaluestore', 'send', 'CloudFrontKeyValueStoreClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudfront-keyvaluestore', 'send', 'CloudFrontKeyValueStoreClient', Promise.reject(result), true, mock)
  }
}
