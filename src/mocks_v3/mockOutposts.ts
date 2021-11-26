
/**
* @description mocks_v3:mockOutposts module is mocks for AWS-SDK V3
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

  export const mockOutposts = {
  createOrder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'createOrder', 'Outposts', Promise.resolve(result), true, mock)
  },
  createOrderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'createOrder', 'Outposts', Promise.resolve(result), false, mock)
  },
  createOrderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'createOrder', 'Outposts', Promise.reject(result), true, mock)
  },
  createOutpost: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'createOutpost', 'Outposts', Promise.resolve(result), true, mock)
  },
  createOutpostAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'createOutpost', 'Outposts', Promise.resolve(result), false, mock)
  },
  createOutpostThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'createOutpost', 'Outposts', Promise.reject(result), true, mock)
  },
  deleteOutpost: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'deleteOutpost', 'Outposts', Promise.resolve(result), true, mock)
  },
  deleteOutpostAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'deleteOutpost', 'Outposts', Promise.resolve(result), false, mock)
  },
  deleteOutpostThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'deleteOutpost', 'Outposts', Promise.reject(result), true, mock)
  },
  deleteSite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'deleteSite', 'Outposts', Promise.resolve(result), true, mock)
  },
  deleteSiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'deleteSite', 'Outposts', Promise.resolve(result), false, mock)
  },
  deleteSiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'deleteSite', 'Outposts', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'destroy', 'Outposts', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'destroy', 'Outposts', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'destroy', 'Outposts', Promise.reject(result), true, mock)
  },
  getOutpost: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getOutpost', 'Outposts', Promise.resolve(result), true, mock)
  },
  getOutpostAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getOutpost', 'Outposts', Promise.resolve(result), false, mock)
  },
  getOutpostThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getOutpost', 'Outposts', Promise.reject(result), true, mock)
  },
  getOutpostInstanceTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getOutpostInstanceTypes', 'Outposts', Promise.resolve(result), true, mock)
  },
  getOutpostInstanceTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getOutpostInstanceTypes', 'Outposts', Promise.resolve(result), false, mock)
  },
  getOutpostInstanceTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'getOutpostInstanceTypes', 'Outposts', Promise.reject(result), true, mock)
  },
  listOutposts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listOutposts', 'Outposts', Promise.resolve(result), true, mock)
  },
  listOutpostsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listOutposts', 'Outposts', Promise.resolve(result), false, mock)
  },
  listOutpostsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listOutposts', 'Outposts', Promise.reject(result), true, mock)
  },
  listSites: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listSites', 'Outposts', Promise.resolve(result), true, mock)
  },
  listSitesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listSites', 'Outposts', Promise.resolve(result), false, mock)
  },
  listSitesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listSites', 'Outposts', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listTagsForResource', 'Outposts', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listTagsForResource', 'Outposts', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'listTagsForResource', 'Outposts', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'tagResource', 'Outposts', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'tagResource', 'Outposts', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'tagResource', 'Outposts', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'untagResource', 'Outposts', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'untagResource', 'Outposts', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'untagResource', 'Outposts', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'send', 'OutpostsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'send', 'OutpostsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-outposts', 'send', 'OutpostsClient', Promise.reject(result), true, mock)
  }
}