
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
  export const mockCloudHSM = {
  addTagsToResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToResource', 'CloudHSM', Promise.resolve(result), true, mock)
  },
  addTagsToResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToResource', 'CloudHSM', Promise.resolve(result), false, mock)
  },
  addTagsToResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToResource', 'CloudHSM', Promise.reject(result), true, mock)
  },
  createHapg: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHapg', 'CloudHSM', Promise.resolve(result), true, mock)
  },
  createHapgAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHapg', 'CloudHSM', Promise.resolve(result), false, mock)
  },
  createHapgThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHapg', 'CloudHSM', Promise.reject(result), true, mock)
  },
  createHsm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHsm', 'CloudHSM', Promise.resolve(result), true, mock)
  },
  createHsmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHsm', 'CloudHSM', Promise.resolve(result), false, mock)
  },
  createHsmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHsm', 'CloudHSM', Promise.reject(result), true, mock)
  },
  createLunaClient: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLunaClient', 'CloudHSM', Promise.resolve(result), true, mock)
  },
  createLunaClientAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLunaClient', 'CloudHSM', Promise.resolve(result), false, mock)
  },
  createLunaClientThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLunaClient', 'CloudHSM', Promise.reject(result), true, mock)
  },
  deleteHapg: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHapg', 'CloudHSM', Promise.resolve(result), true, mock)
  },
  deleteHapgAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHapg', 'CloudHSM', Promise.resolve(result), false, mock)
  },
  deleteHapgThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHapg', 'CloudHSM', Promise.reject(result), true, mock)
  },
  deleteHsm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHsm', 'CloudHSM', Promise.resolve(result), true, mock)
  },
  deleteHsmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHsm', 'CloudHSM', Promise.resolve(result), false, mock)
  },
  deleteHsmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHsm', 'CloudHSM', Promise.reject(result), true, mock)
  },
  deleteLunaClient: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLunaClient', 'CloudHSM', Promise.resolve(result), true, mock)
  },
  deleteLunaClientAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLunaClient', 'CloudHSM', Promise.resolve(result), false, mock)
  },
  deleteLunaClientThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLunaClient', 'CloudHSM', Promise.reject(result), true, mock)
  },
  describeHapg: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHapg', 'CloudHSM', Promise.resolve(result), true, mock)
  },
  describeHapgAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHapg', 'CloudHSM', Promise.resolve(result), false, mock)
  },
  describeHapgThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHapg', 'CloudHSM', Promise.reject(result), true, mock)
  },
  describeHsm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHsm', 'CloudHSM', Promise.resolve(result), true, mock)
  },
  describeHsmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHsm', 'CloudHSM', Promise.resolve(result), false, mock)
  },
  describeHsmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHsm', 'CloudHSM', Promise.reject(result), true, mock)
  },
  describeLunaClient: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLunaClient', 'CloudHSM', Promise.resolve(result), true, mock)
  },
  describeLunaClientAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLunaClient', 'CloudHSM', Promise.resolve(result), false, mock)
  },
  describeLunaClientThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLunaClient', 'CloudHSM', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudHSM', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudHSM', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudHSM', Promise.reject(result), true, mock)
  },
  getConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConfig', 'CloudHSM', Promise.resolve(result), true, mock)
  },
  getConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConfig', 'CloudHSM', Promise.resolve(result), false, mock)
  },
  getConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConfig', 'CloudHSM', Promise.reject(result), true, mock)
  },
  listAvailableZones: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAvailableZones', 'CloudHSM', Promise.resolve(result), true, mock)
  },
  listAvailableZonesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAvailableZones', 'CloudHSM', Promise.resolve(result), false, mock)
  },
  listAvailableZonesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAvailableZones', 'CloudHSM', Promise.reject(result), true, mock)
  },
  listHapgs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHapgs', 'CloudHSM', Promise.resolve(result), true, mock)
  },
  listHapgsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHapgs', 'CloudHSM', Promise.resolve(result), false, mock)
  },
  listHapgsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHapgs', 'CloudHSM', Promise.reject(result), true, mock)
  },
  listHsms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHsms', 'CloudHSM', Promise.resolve(result), true, mock)
  },
  listHsmsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHsms', 'CloudHSM', Promise.resolve(result), false, mock)
  },
  listHsmsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHsms', 'CloudHSM', Promise.reject(result), true, mock)
  },
  listLunaClients: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLunaClients', 'CloudHSM', Promise.resolve(result), true, mock)
  },
  listLunaClientsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLunaClients', 'CloudHSM', Promise.resolve(result), false, mock)
  },
  listLunaClientsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLunaClients', 'CloudHSM', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CloudHSM', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CloudHSM', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CloudHSM', Promise.reject(result), true, mock)
  },
  modifyHapg: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyHapg', 'CloudHSM', Promise.resolve(result), true, mock)
  },
  modifyHapgAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyHapg', 'CloudHSM', Promise.resolve(result), false, mock)
  },
  modifyHapgThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyHapg', 'CloudHSM', Promise.reject(result), true, mock)
  },
  modifyHsm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyHsm', 'CloudHSM', Promise.resolve(result), true, mock)
  },
  modifyHsmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyHsm', 'CloudHSM', Promise.resolve(result), false, mock)
  },
  modifyHsmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyHsm', 'CloudHSM', Promise.reject(result), true, mock)
  },
  modifyLunaClient: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyLunaClient', 'CloudHSM', Promise.resolve(result), true, mock)
  },
  modifyLunaClientAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyLunaClient', 'CloudHSM', Promise.resolve(result), false, mock)
  },
  modifyLunaClientThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyLunaClient', 'CloudHSM', Promise.reject(result), true, mock)
  },
  removeTagsFromResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromResource', 'CloudHSM', Promise.resolve(result), true, mock)
  },
  removeTagsFromResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromResource', 'CloudHSM', Promise.resolve(result), false, mock)
  },
  removeTagsFromResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromResource', 'CloudHSM', Promise.reject(result), true, mock)
  },
}
