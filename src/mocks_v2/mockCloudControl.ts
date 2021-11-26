
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
  export const mockCloudControl = {
  cancelResourceRequest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelResourceRequest', 'CloudControl', Promise.resolve(result), true, mock)
  },
  cancelResourceRequestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelResourceRequest', 'CloudControl', Promise.resolve(result), false, mock)
  },
  cancelResourceRequestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelResourceRequest', 'CloudControl', Promise.reject(result), true, mock)
  },
  createResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResource', 'CloudControl', Promise.resolve(result), true, mock)
  },
  createResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResource', 'CloudControl', Promise.resolve(result), false, mock)
  },
  createResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResource', 'CloudControl', Promise.reject(result), true, mock)
  },
  deleteResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResource', 'CloudControl', Promise.resolve(result), true, mock)
  },
  deleteResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResource', 'CloudControl', Promise.resolve(result), false, mock)
  },
  deleteResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResource', 'CloudControl', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudControl', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudControl', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudControl', Promise.reject(result), true, mock)
  },
  getResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResource', 'CloudControl', Promise.resolve(result), true, mock)
  },
  getResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResource', 'CloudControl', Promise.resolve(result), false, mock)
  },
  getResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResource', 'CloudControl', Promise.reject(result), true, mock)
  },
  getResourceRequestStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceRequestStatus', 'CloudControl', Promise.resolve(result), true, mock)
  },
  getResourceRequestStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceRequestStatus', 'CloudControl', Promise.resolve(result), false, mock)
  },
  getResourceRequestStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceRequestStatus', 'CloudControl', Promise.reject(result), true, mock)
  },
  listResourceRequests: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceRequests', 'CloudControl', Promise.resolve(result), true, mock)
  },
  listResourceRequestsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceRequests', 'CloudControl', Promise.resolve(result), false, mock)
  },
  listResourceRequestsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceRequests', 'CloudControl', Promise.reject(result), true, mock)
  },
  listResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResources', 'CloudControl', Promise.resolve(result), true, mock)
  },
  listResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResources', 'CloudControl', Promise.resolve(result), false, mock)
  },
  listResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResources', 'CloudControl', Promise.reject(result), true, mock)
  },
  updateResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResource', 'CloudControl', Promise.resolve(result), true, mock)
  },
  updateResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResource', 'CloudControl', Promise.resolve(result), false, mock)
  },
  updateResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResource', 'CloudControl', Promise.reject(result), true, mock)
  },
}
