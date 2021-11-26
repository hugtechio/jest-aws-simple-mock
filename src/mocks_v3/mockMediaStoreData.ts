
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockMediaStoreData = {
  deleteObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore-data', 'deleteObject', 'MediaStoreData', Promise.resolve(result), true, mock)
  },
  deleteObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore-data', 'deleteObject', 'MediaStoreData', Promise.resolve(result), false, mock)
  },
  deleteObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore-data', 'deleteObject', 'MediaStoreData', Promise.reject(result), true, mock)
  },
  describeObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore-data', 'describeObject', 'MediaStoreData', Promise.resolve(result), true, mock)
  },
  describeObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore-data', 'describeObject', 'MediaStoreData', Promise.resolve(result), false, mock)
  },
  describeObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore-data', 'describeObject', 'MediaStoreData', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore-data', 'destroy', 'MediaStoreData', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore-data', 'destroy', 'MediaStoreData', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore-data', 'destroy', 'MediaStoreData', Promise.reject(result), true, mock)
  },
  getObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore-data', 'getObject', 'MediaStoreData', Promise.resolve(result), true, mock)
  },
  getObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore-data', 'getObject', 'MediaStoreData', Promise.resolve(result), false, mock)
  },
  getObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore-data', 'getObject', 'MediaStoreData', Promise.reject(result), true, mock)
  },
  listItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore-data', 'listItems', 'MediaStoreData', Promise.resolve(result), true, mock)
  },
  listItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore-data', 'listItems', 'MediaStoreData', Promise.resolve(result), false, mock)
  },
  listItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore-data', 'listItems', 'MediaStoreData', Promise.reject(result), true, mock)
  },
  putObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore-data', 'putObject', 'MediaStoreData', Promise.resolve(result), true, mock)
  },
  putObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore-data', 'putObject', 'MediaStoreData', Promise.resolve(result), false, mock)
  },
  putObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore-data', 'putObject', 'MediaStoreData', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore-data', 'send', 'MediaStoreDataClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore-data', 'send', 'MediaStoreDataClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mediastore-data', 'send', 'MediaStoreDataClient', Promise.reject(result), true, mock)
  }
}