
/**
* @description mocks_v3:mockWorkSpacesThinClient module is mocks for AWS-SDK V3
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
export const mockWorkSpacesThinClient = {
  createEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'createEnvironment', 'WorkSpacesThinClient', Promise.resolve(result), true, mock)
  },
  createEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'createEnvironment', 'WorkSpacesThinClient', Promise.resolve(result), false, mock)
  },
  createEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'createEnvironment', 'WorkSpacesThinClient', Promise.reject(result), true, mock)
  },
  deleteDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'deleteDevice', 'WorkSpacesThinClient', Promise.resolve(result), true, mock)
  },
  deleteDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'deleteDevice', 'WorkSpacesThinClient', Promise.resolve(result), false, mock)
  },
  deleteDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'deleteDevice', 'WorkSpacesThinClient', Promise.reject(result), true, mock)
  },
  deleteEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'deleteEnvironment', 'WorkSpacesThinClient', Promise.resolve(result), true, mock)
  },
  deleteEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'deleteEnvironment', 'WorkSpacesThinClient', Promise.resolve(result), false, mock)
  },
  deleteEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'deleteEnvironment', 'WorkSpacesThinClient', Promise.reject(result), true, mock)
  },
  deregisterDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'deregisterDevice', 'WorkSpacesThinClient', Promise.resolve(result), true, mock)
  },
  deregisterDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'deregisterDevice', 'WorkSpacesThinClient', Promise.resolve(result), false, mock)
  },
  deregisterDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'deregisterDevice', 'WorkSpacesThinClient', Promise.reject(result), true, mock)
  },
  getDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'getDevice', 'WorkSpacesThinClient', Promise.resolve(result), true, mock)
  },
  getDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'getDevice', 'WorkSpacesThinClient', Promise.resolve(result), false, mock)
  },
  getDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'getDevice', 'WorkSpacesThinClient', Promise.reject(result), true, mock)
  },
  getEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'getEnvironment', 'WorkSpacesThinClient', Promise.resolve(result), true, mock)
  },
  getEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'getEnvironment', 'WorkSpacesThinClient', Promise.resolve(result), false, mock)
  },
  getEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'getEnvironment', 'WorkSpacesThinClient', Promise.reject(result), true, mock)
  },
  getSoftwareSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'getSoftwareSet', 'WorkSpacesThinClient', Promise.resolve(result), true, mock)
  },
  getSoftwareSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'getSoftwareSet', 'WorkSpacesThinClient', Promise.resolve(result), false, mock)
  },
  getSoftwareSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'getSoftwareSet', 'WorkSpacesThinClient', Promise.reject(result), true, mock)
  },
  listDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'listDevices', 'WorkSpacesThinClient', Promise.resolve(result), true, mock)
  },
  listDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'listDevices', 'WorkSpacesThinClient', Promise.resolve(result), false, mock)
  },
  listDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'listDevices', 'WorkSpacesThinClient', Promise.reject(result), true, mock)
  },
  listEnvironments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'listEnvironments', 'WorkSpacesThinClient', Promise.resolve(result), true, mock)
  },
  listEnvironmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'listEnvironments', 'WorkSpacesThinClient', Promise.resolve(result), false, mock)
  },
  listEnvironmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'listEnvironments', 'WorkSpacesThinClient', Promise.reject(result), true, mock)
  },
  listSoftwareSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'listSoftwareSets', 'WorkSpacesThinClient', Promise.resolve(result), true, mock)
  },
  listSoftwareSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'listSoftwareSets', 'WorkSpacesThinClient', Promise.resolve(result), false, mock)
  },
  listSoftwareSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'listSoftwareSets', 'WorkSpacesThinClient', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'listTagsForResource', 'WorkSpacesThinClient', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'listTagsForResource', 'WorkSpacesThinClient', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'listTagsForResource', 'WorkSpacesThinClient', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'tagResource', 'WorkSpacesThinClient', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'tagResource', 'WorkSpacesThinClient', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'tagResource', 'WorkSpacesThinClient', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'untagResource', 'WorkSpacesThinClient', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'untagResource', 'WorkSpacesThinClient', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'untagResource', 'WorkSpacesThinClient', Promise.reject(result), true, mock)
  },
  updateDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'updateDevice', 'WorkSpacesThinClient', Promise.resolve(result), true, mock)
  },
  updateDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'updateDevice', 'WorkSpacesThinClient', Promise.resolve(result), false, mock)
  },
  updateDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'updateDevice', 'WorkSpacesThinClient', Promise.reject(result), true, mock)
  },
  updateEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'updateEnvironment', 'WorkSpacesThinClient', Promise.resolve(result), true, mock)
  },
  updateEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'updateEnvironment', 'WorkSpacesThinClient', Promise.resolve(result), false, mock)
  },
  updateEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'updateEnvironment', 'WorkSpacesThinClient', Promise.reject(result), true, mock)
  },
  updateSoftwareSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'updateSoftwareSet', 'WorkSpacesThinClient', Promise.resolve(result), true, mock)
  },
  updateSoftwareSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'updateSoftwareSet', 'WorkSpacesThinClient', Promise.resolve(result), false, mock)
  },
  updateSoftwareSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'updateSoftwareSet', 'WorkSpacesThinClient', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'send', 'WorkSpacesThinClientClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'send', 'WorkSpacesThinClientClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workspaces-thin-client', 'send', 'WorkSpacesThinClientClient', Promise.reject(result), true, mock)
  }
}
