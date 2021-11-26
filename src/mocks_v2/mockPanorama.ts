
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
  export const mockPanorama = {
  createApplicationInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplicationInstance', 'Panorama', Promise.resolve(result), true, mock)
  },
  createApplicationInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplicationInstance', 'Panorama', Promise.resolve(result), false, mock)
  },
  createApplicationInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplicationInstance', 'Panorama', Promise.reject(result), true, mock)
  },
  createJobForDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJobForDevices', 'Panorama', Promise.resolve(result), true, mock)
  },
  createJobForDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJobForDevices', 'Panorama', Promise.resolve(result), false, mock)
  },
  createJobForDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createJobForDevices', 'Panorama', Promise.reject(result), true, mock)
  },
  createNodeFromTemplateJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNodeFromTemplateJob', 'Panorama', Promise.resolve(result), true, mock)
  },
  createNodeFromTemplateJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNodeFromTemplateJob', 'Panorama', Promise.resolve(result), false, mock)
  },
  createNodeFromTemplateJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNodeFromTemplateJob', 'Panorama', Promise.reject(result), true, mock)
  },
  createPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPackage', 'Panorama', Promise.resolve(result), true, mock)
  },
  createPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPackage', 'Panorama', Promise.resolve(result), false, mock)
  },
  createPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPackage', 'Panorama', Promise.reject(result), true, mock)
  },
  createPackageImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPackageImportJob', 'Panorama', Promise.resolve(result), true, mock)
  },
  createPackageImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPackageImportJob', 'Panorama', Promise.resolve(result), false, mock)
  },
  createPackageImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPackageImportJob', 'Panorama', Promise.reject(result), true, mock)
  },
  deleteDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDevice', 'Panorama', Promise.resolve(result), true, mock)
  },
  deleteDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDevice', 'Panorama', Promise.resolve(result), false, mock)
  },
  deleteDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDevice', 'Panorama', Promise.reject(result), true, mock)
  },
  deletePackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePackage', 'Panorama', Promise.resolve(result), true, mock)
  },
  deletePackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePackage', 'Panorama', Promise.resolve(result), false, mock)
  },
  deletePackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePackage', 'Panorama', Promise.reject(result), true, mock)
  },
  deregisterPackageVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterPackageVersion', 'Panorama', Promise.resolve(result), true, mock)
  },
  deregisterPackageVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterPackageVersion', 'Panorama', Promise.resolve(result), false, mock)
  },
  deregisterPackageVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterPackageVersion', 'Panorama', Promise.reject(result), true, mock)
  },
  describeApplicationInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplicationInstance', 'Panorama', Promise.resolve(result), true, mock)
  },
  describeApplicationInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplicationInstance', 'Panorama', Promise.resolve(result), false, mock)
  },
  describeApplicationInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplicationInstance', 'Panorama', Promise.reject(result), true, mock)
  },
  describeApplicationInstanceDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplicationInstanceDetails', 'Panorama', Promise.resolve(result), true, mock)
  },
  describeApplicationInstanceDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplicationInstanceDetails', 'Panorama', Promise.resolve(result), false, mock)
  },
  describeApplicationInstanceDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplicationInstanceDetails', 'Panorama', Promise.reject(result), true, mock)
  },
  describeDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDevice', 'Panorama', Promise.resolve(result), true, mock)
  },
  describeDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDevice', 'Panorama', Promise.resolve(result), false, mock)
  },
  describeDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDevice', 'Panorama', Promise.reject(result), true, mock)
  },
  describeDeviceJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeviceJob', 'Panorama', Promise.resolve(result), true, mock)
  },
  describeDeviceJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeviceJob', 'Panorama', Promise.resolve(result), false, mock)
  },
  describeDeviceJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeviceJob', 'Panorama', Promise.reject(result), true, mock)
  },
  describeNode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNode', 'Panorama', Promise.resolve(result), true, mock)
  },
  describeNodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNode', 'Panorama', Promise.resolve(result), false, mock)
  },
  describeNodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNode', 'Panorama', Promise.reject(result), true, mock)
  },
  describeNodeFromTemplateJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNodeFromTemplateJob', 'Panorama', Promise.resolve(result), true, mock)
  },
  describeNodeFromTemplateJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNodeFromTemplateJob', 'Panorama', Promise.resolve(result), false, mock)
  },
  describeNodeFromTemplateJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNodeFromTemplateJob', 'Panorama', Promise.reject(result), true, mock)
  },
  describePackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePackage', 'Panorama', Promise.resolve(result), true, mock)
  },
  describePackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePackage', 'Panorama', Promise.resolve(result), false, mock)
  },
  describePackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePackage', 'Panorama', Promise.reject(result), true, mock)
  },
  describePackageImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePackageImportJob', 'Panorama', Promise.resolve(result), true, mock)
  },
  describePackageImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePackageImportJob', 'Panorama', Promise.resolve(result), false, mock)
  },
  describePackageImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePackageImportJob', 'Panorama', Promise.reject(result), true, mock)
  },
  describePackageVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePackageVersion', 'Panorama', Promise.resolve(result), true, mock)
  },
  describePackageVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePackageVersion', 'Panorama', Promise.resolve(result), false, mock)
  },
  describePackageVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePackageVersion', 'Panorama', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Panorama', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Panorama', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Panorama', Promise.reject(result), true, mock)
  },
  listApplicationInstanceDependencies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationInstanceDependencies', 'Panorama', Promise.resolve(result), true, mock)
  },
  listApplicationInstanceDependenciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationInstanceDependencies', 'Panorama', Promise.resolve(result), false, mock)
  },
  listApplicationInstanceDependenciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationInstanceDependencies', 'Panorama', Promise.reject(result), true, mock)
  },
  listApplicationInstanceNodeInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationInstanceNodeInstances', 'Panorama', Promise.resolve(result), true, mock)
  },
  listApplicationInstanceNodeInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationInstanceNodeInstances', 'Panorama', Promise.resolve(result), false, mock)
  },
  listApplicationInstanceNodeInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationInstanceNodeInstances', 'Panorama', Promise.reject(result), true, mock)
  },
  listApplicationInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationInstances', 'Panorama', Promise.resolve(result), true, mock)
  },
  listApplicationInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationInstances', 'Panorama', Promise.resolve(result), false, mock)
  },
  listApplicationInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationInstances', 'Panorama', Promise.reject(result), true, mock)
  },
  listDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevices', 'Panorama', Promise.resolve(result), true, mock)
  },
  listDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevices', 'Panorama', Promise.resolve(result), false, mock)
  },
  listDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevices', 'Panorama', Promise.reject(result), true, mock)
  },
  listDevicesJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevicesJobs', 'Panorama', Promise.resolve(result), true, mock)
  },
  listDevicesJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevicesJobs', 'Panorama', Promise.resolve(result), false, mock)
  },
  listDevicesJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevicesJobs', 'Panorama', Promise.reject(result), true, mock)
  },
  listNodeFromTemplateJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNodeFromTemplateJobs', 'Panorama', Promise.resolve(result), true, mock)
  },
  listNodeFromTemplateJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNodeFromTemplateJobs', 'Panorama', Promise.resolve(result), false, mock)
  },
  listNodeFromTemplateJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNodeFromTemplateJobs', 'Panorama', Promise.reject(result), true, mock)
  },
  listNodes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNodes', 'Panorama', Promise.resolve(result), true, mock)
  },
  listNodesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNodes', 'Panorama', Promise.resolve(result), false, mock)
  },
  listNodesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNodes', 'Panorama', Promise.reject(result), true, mock)
  },
  listPackageImportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPackageImportJobs', 'Panorama', Promise.resolve(result), true, mock)
  },
  listPackageImportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPackageImportJobs', 'Panorama', Promise.resolve(result), false, mock)
  },
  listPackageImportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPackageImportJobs', 'Panorama', Promise.reject(result), true, mock)
  },
  listPackages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPackages', 'Panorama', Promise.resolve(result), true, mock)
  },
  listPackagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPackages', 'Panorama', Promise.resolve(result), false, mock)
  },
  listPackagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPackages', 'Panorama', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Panorama', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Panorama', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Panorama', Promise.reject(result), true, mock)
  },
  provisionDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('provisionDevice', 'Panorama', Promise.resolve(result), true, mock)
  },
  provisionDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('provisionDevice', 'Panorama', Promise.resolve(result), false, mock)
  },
  provisionDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('provisionDevice', 'Panorama', Promise.reject(result), true, mock)
  },
  registerPackageVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerPackageVersion', 'Panorama', Promise.resolve(result), true, mock)
  },
  registerPackageVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerPackageVersion', 'Panorama', Promise.resolve(result), false, mock)
  },
  registerPackageVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerPackageVersion', 'Panorama', Promise.reject(result), true, mock)
  },
  removeApplicationInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeApplicationInstance', 'Panorama', Promise.resolve(result), true, mock)
  },
  removeApplicationInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeApplicationInstance', 'Panorama', Promise.resolve(result), false, mock)
  },
  removeApplicationInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeApplicationInstance', 'Panorama', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Panorama', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Panorama', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Panorama', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Panorama', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Panorama', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Panorama', Promise.reject(result), true, mock)
  },
  updateDeviceMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDeviceMetadata', 'Panorama', Promise.resolve(result), true, mock)
  },
  updateDeviceMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDeviceMetadata', 'Panorama', Promise.resolve(result), false, mock)
  },
  updateDeviceMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDeviceMetadata', 'Panorama', Promise.reject(result), true, mock)
  },
}
