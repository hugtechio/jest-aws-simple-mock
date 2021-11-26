
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
  export const mockDeviceFarm = {
  createDevicePool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDevicePool', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  createDevicePoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDevicePool', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  createDevicePoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDevicePool', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  createInstanceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInstanceProfile', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  createInstanceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInstanceProfile', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  createInstanceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInstanceProfile', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  createNetworkProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNetworkProfile', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  createNetworkProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNetworkProfile', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  createNetworkProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNetworkProfile', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  createProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  createProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  createProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  createRemoteAccessSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRemoteAccessSession', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  createRemoteAccessSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRemoteAccessSession', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  createRemoteAccessSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRemoteAccessSession', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  createTestGridProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTestGridProject', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  createTestGridProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTestGridProject', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  createTestGridProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTestGridProject', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  createTestGridUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTestGridUrl', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  createTestGridUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTestGridUrl', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  createTestGridUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTestGridUrl', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  createUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUpload', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  createUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUpload', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  createUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUpload', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  createVPCEConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVPCEConfiguration', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  createVPCEConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVPCEConfiguration', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  createVPCEConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createVPCEConfiguration', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  deleteDevicePool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDevicePool', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  deleteDevicePoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDevicePool', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  deleteDevicePoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDevicePool', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  deleteInstanceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInstanceProfile', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  deleteInstanceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInstanceProfile', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  deleteInstanceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInstanceProfile', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  deleteNetworkProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNetworkProfile', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  deleteNetworkProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNetworkProfile', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  deleteNetworkProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNetworkProfile', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  deleteProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  deleteProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  deleteProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  deleteRemoteAccessSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRemoteAccessSession', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  deleteRemoteAccessSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRemoteAccessSession', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  deleteRemoteAccessSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRemoteAccessSession', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  deleteRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRun', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  deleteRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRun', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  deleteRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRun', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  deleteTestGridProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTestGridProject', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  deleteTestGridProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTestGridProject', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  deleteTestGridProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTestGridProject', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  deleteUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUpload', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  deleteUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUpload', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  deleteUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUpload', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  deleteVPCEConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVPCEConfiguration', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  deleteVPCEConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVPCEConfiguration', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  deleteVPCEConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteVPCEConfiguration', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getAccountSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccountSettings', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getAccountSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccountSettings', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getAccountSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccountSettings', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevice', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevice', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevice', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getDeviceInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeviceInstance', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getDeviceInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeviceInstance', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getDeviceInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeviceInstance', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getDevicePool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevicePool', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getDevicePoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevicePool', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getDevicePoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevicePool', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getDevicePoolCompatibility: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevicePoolCompatibility', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getDevicePoolCompatibilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevicePoolCompatibility', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getDevicePoolCompatibilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevicePoolCompatibility', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getInstanceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstanceProfile', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getInstanceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstanceProfile', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getInstanceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInstanceProfile', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJob', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJob', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJob', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getNetworkProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetworkProfile', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getNetworkProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetworkProfile', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getNetworkProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNetworkProfile', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getOfferingStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOfferingStatus', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getOfferingStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOfferingStatus', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getOfferingStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOfferingStatus', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProject', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProject', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProject', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getRemoteAccessSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRemoteAccessSession', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getRemoteAccessSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRemoteAccessSession', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getRemoteAccessSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRemoteAccessSession', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRun', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRun', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRun', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getSuite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSuite', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getSuiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSuite', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getSuiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSuite', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getTest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTest', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getTestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTest', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getTestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTest', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getTestGridProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTestGridProject', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getTestGridProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTestGridProject', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getTestGridProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTestGridProject', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getTestGridSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTestGridSession', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getTestGridSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTestGridSession', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getTestGridSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTestGridSession', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUpload', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUpload', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUpload', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getVPCEConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVPCEConfiguration', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getVPCEConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVPCEConfiguration', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getVPCEConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getVPCEConfiguration', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  installToRemoteAccessSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('installToRemoteAccessSession', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  installToRemoteAccessSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('installToRemoteAccessSession', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  installToRemoteAccessSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('installToRemoteAccessSession', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listArtifacts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listArtifacts', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listArtifactsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listArtifacts', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listArtifactsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listArtifacts', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listDeviceInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeviceInstances', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listDeviceInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeviceInstances', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listDeviceInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeviceInstances', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listDevicePools: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevicePools', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listDevicePoolsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevicePools', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listDevicePoolsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevicePools', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevices', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevices', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevices', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listInstanceProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstanceProfiles', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listInstanceProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstanceProfiles', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listInstanceProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstanceProfiles', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listNetworkProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNetworkProfiles', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listNetworkProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNetworkProfiles', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listNetworkProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNetworkProfiles', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listOfferingPromotions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOfferingPromotions', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listOfferingPromotionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOfferingPromotions', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listOfferingPromotionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOfferingPromotions', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listOfferingTransactions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOfferingTransactions', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listOfferingTransactionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOfferingTransactions', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listOfferingTransactionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOfferingTransactions', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listOfferings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOfferings', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listOfferingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOfferings', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listOfferingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOfferings', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listRemoteAccessSessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRemoteAccessSessions', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listRemoteAccessSessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRemoteAccessSessions', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listRemoteAccessSessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRemoteAccessSessions', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRuns', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRuns', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRuns', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listSamples: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSamples', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listSamplesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSamples', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listSamplesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSamples', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listSuites: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSuites', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listSuitesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSuites', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listSuitesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSuites', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listTestGridProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTestGridProjects', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listTestGridProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTestGridProjects', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listTestGridProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTestGridProjects', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listTestGridSessionActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTestGridSessionActions', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listTestGridSessionActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTestGridSessionActions', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listTestGridSessionActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTestGridSessionActions', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listTestGridSessionArtifacts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTestGridSessionArtifacts', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listTestGridSessionArtifactsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTestGridSessionArtifacts', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listTestGridSessionArtifactsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTestGridSessionArtifacts', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listTestGridSessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTestGridSessions', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listTestGridSessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTestGridSessions', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listTestGridSessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTestGridSessions', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listTests: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTests', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listTestsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTests', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listTestsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTests', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listUniqueProblems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUniqueProblems', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listUniqueProblemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUniqueProblems', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listUniqueProblemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUniqueProblems', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listUploads: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUploads', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listUploadsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUploads', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listUploadsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listUploads', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listVPCEConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVPCEConfigurations', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listVPCEConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVPCEConfigurations', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listVPCEConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listVPCEConfigurations', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  purchaseOffering: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purchaseOffering', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  purchaseOfferingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purchaseOffering', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  purchaseOfferingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purchaseOffering', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  renewOffering: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('renewOffering', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  renewOfferingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('renewOffering', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  renewOfferingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('renewOffering', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  scheduleRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('scheduleRun', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  scheduleRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('scheduleRun', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  scheduleRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('scheduleRun', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  stopJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopJob', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  stopJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopJob', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  stopJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopJob', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  stopRemoteAccessSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopRemoteAccessSession', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  stopRemoteAccessSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopRemoteAccessSession', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  stopRemoteAccessSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopRemoteAccessSession', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  stopRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopRun', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  stopRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopRun', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  stopRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopRun', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  updateDeviceInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDeviceInstance', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  updateDeviceInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDeviceInstance', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  updateDeviceInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDeviceInstance', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  updateDevicePool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDevicePool', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  updateDevicePoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDevicePool', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  updateDevicePoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDevicePool', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  updateInstanceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInstanceProfile', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  updateInstanceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInstanceProfile', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  updateInstanceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInstanceProfile', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  updateNetworkProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNetworkProfile', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  updateNetworkProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNetworkProfile', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  updateNetworkProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNetworkProfile', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  updateProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProject', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  updateProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProject', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  updateProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProject', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  updateTestGridProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTestGridProject', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  updateTestGridProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTestGridProject', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  updateTestGridProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTestGridProject', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  updateUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUpload', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  updateUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUpload', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  updateUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUpload', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  updateVPCEConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVPCEConfiguration', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  updateVPCEConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVPCEConfiguration', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  updateVPCEConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateVPCEConfiguration', 'DeviceFarm', Promise.reject(result), true, mock)
  },
}
