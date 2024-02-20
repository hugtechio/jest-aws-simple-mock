
/**
* @description mocks_v3:mockDeviceFarm module is mocks for AWS-SDK V3
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
export const mockDeviceFarm = {
  createDevicePool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createDevicePool', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  createDevicePoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createDevicePool', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  createDevicePoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createDevicePool', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  createInstanceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createInstanceProfile', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  createInstanceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createInstanceProfile', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  createInstanceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createInstanceProfile', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  createNetworkProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createNetworkProfile', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  createNetworkProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createNetworkProfile', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  createNetworkProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createNetworkProfile', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  createProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createProject', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  createProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createProject', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  createProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createProject', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  createRemoteAccessSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createRemoteAccessSession', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  createRemoteAccessSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createRemoteAccessSession', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  createRemoteAccessSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createRemoteAccessSession', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  createTestGridProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createTestGridProject', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  createTestGridProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createTestGridProject', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  createTestGridProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createTestGridProject', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  createTestGridUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createTestGridUrl', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  createTestGridUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createTestGridUrl', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  createTestGridUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createTestGridUrl', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  createUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createUpload', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  createUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createUpload', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  createUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createUpload', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  createVPCEConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createVPCEConfiguration', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  createVPCEConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createVPCEConfiguration', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  createVPCEConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'createVPCEConfiguration', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  deleteDevicePool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteDevicePool', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  deleteDevicePoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteDevicePool', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  deleteDevicePoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteDevicePool', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  deleteInstanceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteInstanceProfile', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  deleteInstanceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteInstanceProfile', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  deleteInstanceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteInstanceProfile', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  deleteNetworkProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteNetworkProfile', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  deleteNetworkProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteNetworkProfile', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  deleteNetworkProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteNetworkProfile', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  deleteProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteProject', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  deleteProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteProject', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  deleteProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteProject', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  deleteRemoteAccessSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteRemoteAccessSession', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  deleteRemoteAccessSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteRemoteAccessSession', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  deleteRemoteAccessSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteRemoteAccessSession', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  deleteRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteRun', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  deleteRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteRun', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  deleteRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteRun', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  deleteTestGridProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteTestGridProject', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  deleteTestGridProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteTestGridProject', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  deleteTestGridProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteTestGridProject', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  deleteUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteUpload', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  deleteUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteUpload', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  deleteUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteUpload', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  deleteVPCEConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteVPCEConfiguration', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  deleteVPCEConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteVPCEConfiguration', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  deleteVPCEConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'deleteVPCEConfiguration', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getAccountSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getAccountSettings', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getAccountSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getAccountSettings', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getAccountSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getAccountSettings', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getDevice', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getDevice', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getDevice', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getDeviceInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getDeviceInstance', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getDeviceInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getDeviceInstance', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getDeviceInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getDeviceInstance', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getDevicePool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getDevicePool', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getDevicePoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getDevicePool', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getDevicePoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getDevicePool', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getDevicePoolCompatibility: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getDevicePoolCompatibility', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getDevicePoolCompatibilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getDevicePoolCompatibility', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getDevicePoolCompatibilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getDevicePoolCompatibility', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getInstanceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getInstanceProfile', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getInstanceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getInstanceProfile', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getInstanceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getInstanceProfile', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getJob', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getJob', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getJob', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getNetworkProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getNetworkProfile', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getNetworkProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getNetworkProfile', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getNetworkProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getNetworkProfile', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getOfferingStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getOfferingStatus', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getOfferingStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getOfferingStatus', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getOfferingStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getOfferingStatus', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getProject', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getProject', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getProject', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getRemoteAccessSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getRemoteAccessSession', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getRemoteAccessSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getRemoteAccessSession', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getRemoteAccessSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getRemoteAccessSession', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getRun', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getRun', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getRun', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getSuite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getSuite', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getSuiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getSuite', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getSuiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getSuite', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getTest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getTest', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getTestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getTest', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getTestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getTest', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getTestGridProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getTestGridProject', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getTestGridProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getTestGridProject', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getTestGridProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getTestGridProject', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getTestGridSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getTestGridSession', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getTestGridSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getTestGridSession', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getTestGridSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getTestGridSession', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getUpload', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getUpload', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getUpload', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  getVPCEConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getVPCEConfiguration', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  getVPCEConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getVPCEConfiguration', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  getVPCEConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'getVPCEConfiguration', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  installToRemoteAccessSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'installToRemoteAccessSession', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  installToRemoteAccessSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'installToRemoteAccessSession', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  installToRemoteAccessSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'installToRemoteAccessSession', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listArtifacts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listArtifacts', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listArtifactsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listArtifacts', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listArtifactsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listArtifacts', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listDeviceInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listDeviceInstances', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listDeviceInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listDeviceInstances', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listDeviceInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listDeviceInstances', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listDevicePools: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listDevicePools', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listDevicePoolsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listDevicePools', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listDevicePoolsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listDevicePools', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listDevices', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listDevices', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listDevices', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listInstanceProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listInstanceProfiles', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listInstanceProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listInstanceProfiles', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listInstanceProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listInstanceProfiles', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listJobs', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listJobs', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listJobs', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listNetworkProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listNetworkProfiles', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listNetworkProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listNetworkProfiles', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listNetworkProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listNetworkProfiles', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listOfferingPromotions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listOfferingPromotions', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listOfferingPromotionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listOfferingPromotions', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listOfferingPromotionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listOfferingPromotions', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listOfferingTransactions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listOfferingTransactions', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listOfferingTransactionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listOfferingTransactions', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listOfferingTransactionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listOfferingTransactions', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listOfferings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listOfferings', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listOfferingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listOfferings', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listOfferingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listOfferings', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listProjects', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listProjects', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listProjects', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listRemoteAccessSessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listRemoteAccessSessions', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listRemoteAccessSessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listRemoteAccessSessions', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listRemoteAccessSessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listRemoteAccessSessions', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listRuns', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listRuns', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listRuns', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listSamples: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listSamples', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listSamplesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listSamples', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listSamplesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listSamples', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listSuites: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listSuites', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listSuitesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listSuites', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listSuitesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listSuites', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listTagsForResource', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listTagsForResource', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listTagsForResource', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listTestGridProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listTestGridProjects', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listTestGridProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listTestGridProjects', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listTestGridProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listTestGridProjects', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listTestGridSessionActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listTestGridSessionActions', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listTestGridSessionActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listTestGridSessionActions', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listTestGridSessionActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listTestGridSessionActions', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listTestGridSessionArtifacts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listTestGridSessionArtifacts', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listTestGridSessionArtifactsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listTestGridSessionArtifacts', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listTestGridSessionArtifactsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listTestGridSessionArtifacts', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listTestGridSessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listTestGridSessions', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listTestGridSessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listTestGridSessions', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listTestGridSessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listTestGridSessions', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listTests: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listTests', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listTestsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listTests', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listTestsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listTests', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listUniqueProblems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listUniqueProblems', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listUniqueProblemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listUniqueProblems', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listUniqueProblemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listUniqueProblems', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listUploads: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listUploads', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listUploadsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listUploads', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listUploadsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listUploads', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  listVPCEConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listVPCEConfigurations', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  listVPCEConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listVPCEConfigurations', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  listVPCEConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'listVPCEConfigurations', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  purchaseOffering: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'purchaseOffering', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  purchaseOfferingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'purchaseOffering', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  purchaseOfferingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'purchaseOffering', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  renewOffering: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'renewOffering', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  renewOfferingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'renewOffering', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  renewOfferingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'renewOffering', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  scheduleRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'scheduleRun', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  scheduleRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'scheduleRun', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  scheduleRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'scheduleRun', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  stopJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'stopJob', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  stopJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'stopJob', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  stopJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'stopJob', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  stopRemoteAccessSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'stopRemoteAccessSession', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  stopRemoteAccessSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'stopRemoteAccessSession', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  stopRemoteAccessSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'stopRemoteAccessSession', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  stopRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'stopRun', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  stopRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'stopRun', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  stopRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'stopRun', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'tagResource', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'tagResource', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'tagResource', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'untagResource', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'untagResource', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'untagResource', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  updateDeviceInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateDeviceInstance', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  updateDeviceInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateDeviceInstance', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  updateDeviceInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateDeviceInstance', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  updateDevicePool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateDevicePool', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  updateDevicePoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateDevicePool', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  updateDevicePoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateDevicePool', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  updateInstanceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateInstanceProfile', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  updateInstanceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateInstanceProfile', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  updateInstanceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateInstanceProfile', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  updateNetworkProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateNetworkProfile', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  updateNetworkProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateNetworkProfile', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  updateNetworkProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateNetworkProfile', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  updateProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateProject', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  updateProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateProject', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  updateProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateProject', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  updateTestGridProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateTestGridProject', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  updateTestGridProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateTestGridProject', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  updateTestGridProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateTestGridProject', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  updateUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateUpload', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  updateUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateUpload', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  updateUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateUpload', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  updateVPCEConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateVPCEConfiguration', 'DeviceFarm', Promise.resolve(result), true, mock)
  },
  updateVPCEConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateVPCEConfiguration', 'DeviceFarm', Promise.resolve(result), false, mock)
  },
  updateVPCEConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'updateVPCEConfiguration', 'DeviceFarm', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'send', 'DeviceFarmClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'send', 'DeviceFarmClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-device-farm', 'send', 'DeviceFarmClient', Promise.reject(result), true, mock)
  }
}
