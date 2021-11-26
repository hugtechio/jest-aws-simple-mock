
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
  export const mockEMRContainers = {
  cancelJobRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJobRun', 'EMRContainers', Promise.resolve(result), true, mock)
  },
  cancelJobRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJobRun', 'EMRContainers', Promise.resolve(result), false, mock)
  },
  cancelJobRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelJobRun', 'EMRContainers', Promise.reject(result), true, mock)
  },
  createManagedEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createManagedEndpoint', 'EMRContainers', Promise.resolve(result), true, mock)
  },
  createManagedEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createManagedEndpoint', 'EMRContainers', Promise.resolve(result), false, mock)
  },
  createManagedEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createManagedEndpoint', 'EMRContainers', Promise.reject(result), true, mock)
  },
  createVirtualCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVirtualCluster', 'EMRContainers', Promise.resolve(result), true, mock)
  },
  createVirtualClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVirtualCluster', 'EMRContainers', Promise.resolve(result), false, mock)
  },
  createVirtualClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVirtualCluster', 'EMRContainers', Promise.reject(result), true, mock)
  },
  deleteManagedEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteManagedEndpoint', 'EMRContainers', Promise.resolve(result), true, mock)
  },
  deleteManagedEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteManagedEndpoint', 'EMRContainers', Promise.resolve(result), false, mock)
  },
  deleteManagedEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteManagedEndpoint', 'EMRContainers', Promise.reject(result), true, mock)
  },
  deleteVirtualCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVirtualCluster', 'EMRContainers', Promise.resolve(result), true, mock)
  },
  deleteVirtualClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVirtualCluster', 'EMRContainers', Promise.resolve(result), false, mock)
  },
  deleteVirtualClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVirtualCluster', 'EMRContainers', Promise.reject(result), true, mock)
  },
  describeJobRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobRun', 'EMRContainers', Promise.resolve(result), true, mock)
  },
  describeJobRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobRun', 'EMRContainers', Promise.resolve(result), false, mock)
  },
  describeJobRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobRun', 'EMRContainers', Promise.reject(result), true, mock)
  },
  describeManagedEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeManagedEndpoint', 'EMRContainers', Promise.resolve(result), true, mock)
  },
  describeManagedEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeManagedEndpoint', 'EMRContainers', Promise.resolve(result), false, mock)
  },
  describeManagedEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeManagedEndpoint', 'EMRContainers', Promise.reject(result), true, mock)
  },
  describeVirtualCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVirtualCluster', 'EMRContainers', Promise.resolve(result), true, mock)
  },
  describeVirtualClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVirtualCluster', 'EMRContainers', Promise.resolve(result), false, mock)
  },
  describeVirtualClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeVirtualCluster', 'EMRContainers', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EMRContainers', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EMRContainers', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EMRContainers', Promise.reject(result), true, mock)
  },
  listJobRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobRuns', 'EMRContainers', Promise.resolve(result), true, mock)
  },
  listJobRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobRuns', 'EMRContainers', Promise.resolve(result), false, mock)
  },
  listJobRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobRuns', 'EMRContainers', Promise.reject(result), true, mock)
  },
  listManagedEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listManagedEndpoints', 'EMRContainers', Promise.resolve(result), true, mock)
  },
  listManagedEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listManagedEndpoints', 'EMRContainers', Promise.resolve(result), false, mock)
  },
  listManagedEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listManagedEndpoints', 'EMRContainers', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'EMRContainers', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'EMRContainers', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'EMRContainers', Promise.reject(result), true, mock)
  },
  listVirtualClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVirtualClusters', 'EMRContainers', Promise.resolve(result), true, mock)
  },
  listVirtualClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVirtualClusters', 'EMRContainers', Promise.resolve(result), false, mock)
  },
  listVirtualClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVirtualClusters', 'EMRContainers', Promise.reject(result), true, mock)
  },
  startJobRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startJobRun', 'EMRContainers', Promise.resolve(result), true, mock)
  },
  startJobRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startJobRun', 'EMRContainers', Promise.resolve(result), false, mock)
  },
  startJobRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startJobRun', 'EMRContainers', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'EMRContainers', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'EMRContainers', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'EMRContainers', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'EMRContainers', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'EMRContainers', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'EMRContainers', Promise.reject(result), true, mock)
  },
}
