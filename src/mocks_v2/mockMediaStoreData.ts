
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
  export const mockMediaStoreData = {
  deleteObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteObject', 'MediaStoreData', Promise.resolve(result), true, mock)
  },
  deleteObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteObject', 'MediaStoreData', Promise.resolve(result), false, mock)
  },
  deleteObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteObject', 'MediaStoreData', Promise.reject(result), true, mock)
  },
  describeObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeObject', 'MediaStoreData', Promise.resolve(result), true, mock)
  },
  describeObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeObject', 'MediaStoreData', Promise.resolve(result), false, mock)
  },
  describeObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeObject', 'MediaStoreData', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaStoreData', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaStoreData', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaStoreData', Promise.reject(result), true, mock)
  },
  getObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObject', 'MediaStoreData', Promise.resolve(result), true, mock)
  },
  getObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObject', 'MediaStoreData', Promise.resolve(result), false, mock)
  },
  getObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getObject', 'MediaStoreData', Promise.reject(result), true, mock)
  },
  listItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listItems', 'MediaStoreData', Promise.resolve(result), true, mock)
  },
  listItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listItems', 'MediaStoreData', Promise.resolve(result), false, mock)
  },
  listItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listItems', 'MediaStoreData', Promise.reject(result), true, mock)
  },
  putObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObject', 'MediaStoreData', Promise.resolve(result), true, mock)
  },
  putObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObject', 'MediaStoreData', Promise.resolve(result), false, mock)
  },
  putObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putObject', 'MediaStoreData', Promise.reject(result), true, mock)
  },
}
