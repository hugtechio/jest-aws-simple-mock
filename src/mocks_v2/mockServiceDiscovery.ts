
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
  export const mockServiceDiscovery = {
  createHttpNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHttpNamespace', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  createHttpNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHttpNamespace', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  createHttpNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHttpNamespace', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  createPrivateDnsNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPrivateDnsNamespace', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  createPrivateDnsNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPrivateDnsNamespace', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  createPrivateDnsNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPrivateDnsNamespace', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  createPublicDnsNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPublicDnsNamespace', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  createPublicDnsNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPublicDnsNamespace', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  createPublicDnsNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPublicDnsNamespace', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  createService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createService', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  createServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createService', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  createServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createService', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  deleteNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNamespace', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  deleteNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNamespace', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  deleteNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNamespace', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  deleteService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteService', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  deleteServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteService', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  deleteServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteService', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  deregisterInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterInstance', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  deregisterInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterInstance', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  deregisterInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterInstance', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  discoverInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('discoverInstances', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  discoverInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('discoverInstances', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  discoverInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('discoverInstances', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  getInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstance', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  getInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstance', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  getInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstance', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  getInstancesHealthStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstancesHealthStatus', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  getInstancesHealthStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstancesHealthStatus', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  getInstancesHealthStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstancesHealthStatus', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  getNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNamespace', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  getNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNamespace', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  getNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNamespace', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  getOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOperation', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  getOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOperation', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  getOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOperation', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  getService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getService', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  getServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getService', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  getServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getService', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  listInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstances', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  listInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstances', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  listInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstances', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  listNamespaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNamespaces', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  listNamespacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNamespaces', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  listNamespacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNamespaces', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  listOperations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOperations', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  listOperationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOperations', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  listOperationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOperations', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  listServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServices', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  listServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServices', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  listServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listServices', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  registerInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerInstance', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  registerInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerInstance', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  registerInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerInstance', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  updateHttpNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateHttpNamespace', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  updateHttpNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateHttpNamespace', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  updateHttpNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateHttpNamespace', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  updateInstanceCustomHealthStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInstanceCustomHealthStatus', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  updateInstanceCustomHealthStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInstanceCustomHealthStatus', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  updateInstanceCustomHealthStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInstanceCustomHealthStatus', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  updatePrivateDnsNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePrivateDnsNamespace', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  updatePrivateDnsNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePrivateDnsNamespace', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  updatePrivateDnsNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePrivateDnsNamespace', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  updatePublicDnsNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePublicDnsNamespace', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  updatePublicDnsNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePublicDnsNamespace', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  updatePublicDnsNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePublicDnsNamespace', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  updateService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateService', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  updateServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateService', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  updateServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateService', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
}
