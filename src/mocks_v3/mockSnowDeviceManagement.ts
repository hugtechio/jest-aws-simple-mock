
/**
* @description mocks_v3:mockSnowDeviceManagement module is mocks for AWS-SDK V3
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
export const mockSnowDeviceManagement = {
  cancelTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'cancelTask', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  cancelTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'cancelTask', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  cancelTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'cancelTask', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  createTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'createTask', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  createTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'createTask', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  createTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'createTask', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  describeDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'describeDevice', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  describeDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'describeDevice', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  describeDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'describeDevice', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  describeDeviceEc2Instances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'describeDeviceEc2Instances', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  describeDeviceEc2InstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'describeDeviceEc2Instances', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  describeDeviceEc2InstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'describeDeviceEc2Instances', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  describeExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'describeExecution', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  describeExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'describeExecution', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  describeExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'describeExecution', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  describeTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'describeTask', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  describeTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'describeTask', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  describeTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'describeTask', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  listDeviceResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'listDeviceResources', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  listDeviceResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'listDeviceResources', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  listDeviceResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'listDeviceResources', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  listDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'listDevices', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  listDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'listDevices', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  listDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'listDevices', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  listExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'listExecutions', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  listExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'listExecutions', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  listExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'listExecutions', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'listTagsForResource', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'listTagsForResource', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'listTagsForResource', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  listTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'listTasks', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  listTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'listTasks', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  listTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'listTasks', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'tagResource', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'tagResource', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'tagResource', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'untagResource', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'untagResource', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'untagResource', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'send', 'SnowDeviceManagementClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'send', 'SnowDeviceManagementClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-snow-device-management', 'send', 'SnowDeviceManagementClient', Promise.reject(result), true, mock)
  }
}
