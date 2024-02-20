
/**
* @description mocks_v3:mockServiceDiscovery module is mocks for AWS-SDK V3
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
export const mockServiceDiscovery = {
  createHttpNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'createHttpNamespace', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  createHttpNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'createHttpNamespace', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  createHttpNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'createHttpNamespace', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  createPrivateDnsNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'createPrivateDnsNamespace', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  createPrivateDnsNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'createPrivateDnsNamespace', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  createPrivateDnsNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'createPrivateDnsNamespace', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  createPublicDnsNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'createPublicDnsNamespace', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  createPublicDnsNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'createPublicDnsNamespace', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  createPublicDnsNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'createPublicDnsNamespace', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  createService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'createService', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  createServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'createService', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  createServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'createService', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  deleteNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'deleteNamespace', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  deleteNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'deleteNamespace', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  deleteNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'deleteNamespace', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  deleteService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'deleteService', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  deleteServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'deleteService', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  deleteServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'deleteService', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  deregisterInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'deregisterInstance', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  deregisterInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'deregisterInstance', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  deregisterInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'deregisterInstance', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  discoverInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'discoverInstances', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  discoverInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'discoverInstances', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  discoverInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'discoverInstances', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  discoverInstancesRevision: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'discoverInstancesRevision', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  discoverInstancesRevisionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'discoverInstancesRevision', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  discoverInstancesRevisionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'discoverInstancesRevision', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  getInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'getInstance', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  getInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'getInstance', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  getInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'getInstance', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  getInstancesHealthStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'getInstancesHealthStatus', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  getInstancesHealthStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'getInstancesHealthStatus', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  getInstancesHealthStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'getInstancesHealthStatus', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  getNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'getNamespace', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  getNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'getNamespace', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  getNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'getNamespace', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  getOperation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'getOperation', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  getOperationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'getOperation', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  getOperationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'getOperation', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  getService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'getService', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  getServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'getService', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  getServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'getService', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  listInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'listInstances', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  listInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'listInstances', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  listInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'listInstances', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  listNamespaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'listNamespaces', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  listNamespacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'listNamespaces', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  listNamespacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'listNamespaces', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  listOperations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'listOperations', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  listOperationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'listOperations', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  listOperationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'listOperations', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  listServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'listServices', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  listServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'listServices', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  listServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'listServices', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'listTagsForResource', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'listTagsForResource', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'listTagsForResource', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  registerInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'registerInstance', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  registerInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'registerInstance', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  registerInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'registerInstance', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'tagResource', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'tagResource', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'tagResource', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'untagResource', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'untagResource', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'untagResource', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  updateHttpNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'updateHttpNamespace', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  updateHttpNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'updateHttpNamespace', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  updateHttpNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'updateHttpNamespace', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  updateInstanceCustomHealthStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'updateInstanceCustomHealthStatus', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  updateInstanceCustomHealthStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'updateInstanceCustomHealthStatus', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  updateInstanceCustomHealthStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'updateInstanceCustomHealthStatus', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  updatePrivateDnsNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'updatePrivateDnsNamespace', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  updatePrivateDnsNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'updatePrivateDnsNamespace', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  updatePrivateDnsNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'updatePrivateDnsNamespace', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  updatePublicDnsNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'updatePublicDnsNamespace', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  updatePublicDnsNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'updatePublicDnsNamespace', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  updatePublicDnsNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'updatePublicDnsNamespace', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  updateService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'updateService', 'ServiceDiscovery', Promise.resolve(result), true, mock)
  },
  updateServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'updateService', 'ServiceDiscovery', Promise.resolve(result), false, mock)
  },
  updateServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'updateService', 'ServiceDiscovery', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'send', 'ServiceDiscoveryClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'send', 'ServiceDiscoveryClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-servicediscovery', 'send', 'ServiceDiscoveryClient', Promise.reject(result), true, mock)
  }
}
