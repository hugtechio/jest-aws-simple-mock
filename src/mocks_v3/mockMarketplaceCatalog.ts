
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
  cancelChangeSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'cancelChangeSet', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  cancelChangeSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'cancelChangeSet', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  cancelChangeSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'cancelChangeSet', 'MarketplaceCatalog', Promise.reject(result), true, mock)
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
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'destroy', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'destroy', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'destroy', 'MarketplaceCatalog', Promise.reject(result), true, mock)
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
  startChangeSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'startChangeSet', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  startChangeSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'startChangeSet', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  startChangeSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-marketplace-catalog', 'startChangeSet', 'MarketplaceCatalog', Promise.reject(result), true, mock)
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