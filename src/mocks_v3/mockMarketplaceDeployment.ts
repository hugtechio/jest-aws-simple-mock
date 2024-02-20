
/**
* @description mocks_v3:mockMarketplaceDeployment module is mocks for AWS-SDK V3
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
export const mockMarketplaceDeployment = {
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-deployment', 'listTagsForResource', 'MarketplaceDeployment', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-deployment', 'listTagsForResource', 'MarketplaceDeployment', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-deployment', 'listTagsForResource', 'MarketplaceDeployment', Promise.reject(result), true, mock)
  },
  putDeploymentParameter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-deployment', 'putDeploymentParameter', 'MarketplaceDeployment', Promise.resolve(result), true, mock)
  },
  putDeploymentParameterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-deployment', 'putDeploymentParameter', 'MarketplaceDeployment', Promise.resolve(result), false, mock)
  },
  putDeploymentParameterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-deployment', 'putDeploymentParameter', 'MarketplaceDeployment', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-deployment', 'tagResource', 'MarketplaceDeployment', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-deployment', 'tagResource', 'MarketplaceDeployment', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-deployment', 'tagResource', 'MarketplaceDeployment', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-deployment', 'untagResource', 'MarketplaceDeployment', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-deployment', 'untagResource', 'MarketplaceDeployment', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-deployment', 'untagResource', 'MarketplaceDeployment', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-deployment', 'send', 'MarketplaceDeploymentClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-deployment', 'send', 'MarketplaceDeploymentClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-deployment', 'send', 'MarketplaceDeploymentClient', Promise.reject(result), true, mock)
  }
}
