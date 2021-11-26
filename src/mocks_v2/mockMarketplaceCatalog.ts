
function attachMock(method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require('aws-sdk')
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(currentVersion(awsSdkObject.services).prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  
const currentVersion = (services: any): any => {
  const keys = Object.keys(services);
  let service = null;
  keys.forEach(versionStr => {
    if (
      services.hasOwnProperty(versionStr) &&
      services[versionStr] !== null &&
      services[versionStr] !== undefined
    ) {
      service = services[versionStr];
      return;
    }
  });

  return service;
};
  export const mockMarketplaceCatalog = {
  cancelChangeSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelChangeSet', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  cancelChangeSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelChangeSet', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  cancelChangeSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelChangeSet', 'MarketplaceCatalog', Promise.reject(result), true, mock)
  },
  describeChangeSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChangeSet', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  describeChangeSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChangeSet', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  describeChangeSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChangeSet', 'MarketplaceCatalog', Promise.reject(result), true, mock)
  },
  describeEntity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEntity', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  describeEntityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEntity', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  describeEntityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEntity', 'MarketplaceCatalog', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MarketplaceCatalog', Promise.reject(result), true, mock)
  },
  listChangeSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChangeSets', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  listChangeSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChangeSets', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  listChangeSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChangeSets', 'MarketplaceCatalog', Promise.reject(result), true, mock)
  },
  listEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEntities', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  listEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEntities', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  listEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEntities', 'MarketplaceCatalog', Promise.reject(result), true, mock)
  },
  startChangeSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startChangeSet', 'MarketplaceCatalog', Promise.resolve(result), true, mock)
  },
  startChangeSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startChangeSet', 'MarketplaceCatalog', Promise.resolve(result), false, mock)
  },
  startChangeSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startChangeSet', 'MarketplaceCatalog', Promise.reject(result), true, mock)
  },
}
