
/**
* @description mocks_v3:mockMarketplaceCatalog module is mocks for AWS-SDK V3
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
export const mockMarketplaceCatalog = {
  batchDescribeEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'batchDescribeEntities', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  batchDescribeEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'batchDescribeEntities', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  batchDescribeEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'batchDescribeEntities', 'MarketplaceCatalog', Promise.reject(result), true, mock)
  },
  cancelChangeSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'cancelChangeSet', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  cancelChangeSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'cancelChangeSet', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  cancelChangeSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'cancelChangeSet', 'MarketplaceCatalog', Promise.reject(result), true, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'deleteResourcePolicy', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'deleteResourcePolicy', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'deleteResourcePolicy', 'MarketplaceCatalog', Promise.reject(result), true, mock)
  },
  describeChangeSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'describeChangeSet', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  describeChangeSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'describeChangeSet', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  describeChangeSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'describeChangeSet', 'MarketplaceCatalog', Promise.reject(result), true, mock)
  },
  describeEntity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'describeEntity', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  describeEntityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'describeEntity', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  describeEntityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'describeEntity', 'MarketplaceCatalog', Promise.reject(result), true, mock)
  },
  getResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'getResourcePolicy', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  getResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'getResourcePolicy', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  getResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'getResourcePolicy', 'MarketplaceCatalog', Promise.reject(result), true, mock)
  },
  listChangeSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'listChangeSets', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  listChangeSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'listChangeSets', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  listChangeSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'listChangeSets', 'MarketplaceCatalog', Promise.reject(result), true, mock)
  },
  listEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'listEntities', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  listEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'listEntities', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  listEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'listEntities', 'MarketplaceCatalog', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'listTagsForResource', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'listTagsForResource', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'listTagsForResource', 'MarketplaceCatalog', Promise.reject(result), true, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'putResourcePolicy', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'putResourcePolicy', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'putResourcePolicy', 'MarketplaceCatalog', Promise.reject(result), true, mock)
  },
  startChangeSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'startChangeSet', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  startChangeSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'startChangeSet', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  startChangeSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'startChangeSet', 'MarketplaceCatalog', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'tagResource', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'tagResource', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'tagResource', 'MarketplaceCatalog', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'untagResource', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'untagResource', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'untagResource', 'MarketplaceCatalog', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'send', 'MarketplaceCatalogClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'send', 'MarketplaceCatalogClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'send', 'MarketplaceCatalogClient', Promise.reject(result), true, mock)
  }
}
