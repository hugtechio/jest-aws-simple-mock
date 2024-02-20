
/**
* @description mocks_v3:mockElasticInference module is mocks for AWS-SDK V3
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
export const mockElasticInference = {
  describeAcceleratorOfferings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-inference', 'describeAcceleratorOfferings', 'ElasticInference', Promise.resolve(result), true, mock)
  },
  describeAcceleratorOfferingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-inference', 'describeAcceleratorOfferings', 'ElasticInference', Promise.resolve(result), false, mock)
  },
  describeAcceleratorOfferingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-inference', 'describeAcceleratorOfferings', 'ElasticInference', Promise.reject(result), true, mock)
  },
  describeAcceleratorTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-inference', 'describeAcceleratorTypes', 'ElasticInference', Promise.resolve(result), true, mock)
  },
  describeAcceleratorTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-inference', 'describeAcceleratorTypes', 'ElasticInference', Promise.resolve(result), false, mock)
  },
  describeAcceleratorTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-inference', 'describeAcceleratorTypes', 'ElasticInference', Promise.reject(result), true, mock)
  },
  describeAccelerators: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-inference', 'describeAccelerators', 'ElasticInference', Promise.resolve(result), true, mock)
  },
  describeAcceleratorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-inference', 'describeAccelerators', 'ElasticInference', Promise.resolve(result), false, mock)
  },
  describeAcceleratorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-inference', 'describeAccelerators', 'ElasticInference', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-inference', 'listTagsForResource', 'ElasticInference', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-inference', 'listTagsForResource', 'ElasticInference', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-inference', 'listTagsForResource', 'ElasticInference', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-inference', 'tagResource', 'ElasticInference', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-inference', 'tagResource', 'ElasticInference', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-inference', 'tagResource', 'ElasticInference', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-inference', 'untagResource', 'ElasticInference', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-inference', 'untagResource', 'ElasticInference', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-inference', 'untagResource', 'ElasticInference', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-inference', 'send', 'ElasticInferenceClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-inference', 'send', 'ElasticInferenceClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-inference', 'send', 'ElasticInferenceClient', Promise.reject(result), true, mock)
  }
}
