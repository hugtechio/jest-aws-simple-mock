
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
  export const mockGreengrassV2 = {
  batchAssociateClientDeviceWithCoreDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchAssociateClientDeviceWithCoreDevice', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  batchAssociateClientDeviceWithCoreDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchAssociateClientDeviceWithCoreDevice', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  batchAssociateClientDeviceWithCoreDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchAssociateClientDeviceWithCoreDevice', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  batchDisassociateClientDeviceFromCoreDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDisassociateClientDeviceFromCoreDevice', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  batchDisassociateClientDeviceFromCoreDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDisassociateClientDeviceFromCoreDevice', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  batchDisassociateClientDeviceFromCoreDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDisassociateClientDeviceFromCoreDevice', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  cancelDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelDeployment', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  cancelDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelDeployment', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  cancelDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelDeployment', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  createComponentVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createComponentVersion', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  createComponentVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createComponentVersion', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  createComponentVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createComponentVersion', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  createDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeployment', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  createDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeployment', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  createDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeployment', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  deleteComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteComponent', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  deleteComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteComponent', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  deleteComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteComponent', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  deleteCoreDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCoreDevice', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  deleteCoreDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCoreDevice', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  deleteCoreDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCoreDevice', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  describeComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComponent', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  describeComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComponent', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  describeComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComponent', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  getComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComponent', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  getComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComponent', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  getComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComponent', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  getComponentVersionArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComponentVersionArtifact', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  getComponentVersionArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComponentVersionArtifact', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  getComponentVersionArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComponentVersionArtifact', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  getCoreDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCoreDevice', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  getCoreDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCoreDevice', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  getCoreDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCoreDevice', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  getDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeployment', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  getDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeployment', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  getDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeployment', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  listClientDevicesAssociatedWithCoreDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClientDevicesAssociatedWithCoreDevice', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  listClientDevicesAssociatedWithCoreDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClientDevicesAssociatedWithCoreDevice', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  listClientDevicesAssociatedWithCoreDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClientDevicesAssociatedWithCoreDevice', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  listComponentVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComponentVersions', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  listComponentVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComponentVersions', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  listComponentVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComponentVersions', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  listComponents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComponents', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  listComponentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComponents', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  listComponentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComponents', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  listCoreDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCoreDevices', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  listCoreDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCoreDevices', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  listCoreDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCoreDevices', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  listDeployments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeployments', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  listDeploymentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeployments', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  listDeploymentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeployments', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  listEffectiveDeployments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEffectiveDeployments', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  listEffectiveDeploymentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEffectiveDeployments', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  listEffectiveDeploymentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEffectiveDeployments', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  listInstalledComponents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstalledComponents', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  listInstalledComponentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstalledComponents', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  listInstalledComponentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstalledComponents', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  resolveComponentCandidates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resolveComponentCandidates', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  resolveComponentCandidatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resolveComponentCandidates', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  resolveComponentCandidatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resolveComponentCandidates', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'GreengrassV2', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'GreengrassV2', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'GreengrassV2', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'GreengrassV2', Promise.reject(result), true, mock)
  },
}
