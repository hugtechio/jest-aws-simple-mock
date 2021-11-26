
/**
* @description mocks_v2:mockSnowDeviceManagement.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockSnowDeviceManagement = {
  cancelTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelTask', 'SnowDeviceManagement', result, true, true, mock)
  },
  cancelTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelTask', 'SnowDeviceManagement', result, false, true, mock)
  },
  cancelTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelTask', 'SnowDeviceManagement', result, true, false, mock)
  },
  createTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTask', 'SnowDeviceManagement', result, true, true, mock)
  },
  createTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTask', 'SnowDeviceManagement', result, false, true, mock)
  },
  createTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTask', 'SnowDeviceManagement', result, true, false, mock)
  },
  describeDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDevice', 'SnowDeviceManagement', result, true, true, mock)
  },
  describeDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDevice', 'SnowDeviceManagement', result, false, true, mock)
  },
  describeDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDevice', 'SnowDeviceManagement', result, true, false, mock)
  },
  describeDeviceEc2Instances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeviceEc2Instances', 'SnowDeviceManagement', result, true, true, mock)
  },
  describeDeviceEc2InstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeviceEc2Instances', 'SnowDeviceManagement', result, false, true, mock)
  },
  describeDeviceEc2InstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeviceEc2Instances', 'SnowDeviceManagement', result, true, false, mock)
  },
  describeExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExecution', 'SnowDeviceManagement', result, true, true, mock)
  },
  describeExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExecution', 'SnowDeviceManagement', result, false, true, mock)
  },
  describeExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExecution', 'SnowDeviceManagement', result, true, false, mock)
  },
  describeTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTask', 'SnowDeviceManagement', result, true, true, mock)
  },
  describeTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTask', 'SnowDeviceManagement', result, false, true, mock)
  },
  describeTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTask', 'SnowDeviceManagement', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SnowDeviceManagement', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SnowDeviceManagement', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SnowDeviceManagement', result, true, false, mock)
  },
  listDeviceResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeviceResources', 'SnowDeviceManagement', result, true, true, mock)
  },
  listDeviceResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeviceResources', 'SnowDeviceManagement', result, false, true, mock)
  },
  listDeviceResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeviceResources', 'SnowDeviceManagement', result, true, false, mock)
  },
  listDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevices', 'SnowDeviceManagement', result, true, true, mock)
  },
  listDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevices', 'SnowDeviceManagement', result, false, true, mock)
  },
  listDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevices', 'SnowDeviceManagement', result, true, false, mock)
  },
  listExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExecutions', 'SnowDeviceManagement', result, true, true, mock)
  },
  listExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExecutions', 'SnowDeviceManagement', result, false, true, mock)
  },
  listExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExecutions', 'SnowDeviceManagement', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SnowDeviceManagement', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SnowDeviceManagement', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SnowDeviceManagement', result, true, false, mock)
  },
  listTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTasks', 'SnowDeviceManagement', result, true, true, mock)
  },
  listTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTasks', 'SnowDeviceManagement', result, false, true, mock)
  },
  listTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTasks', 'SnowDeviceManagement', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SnowDeviceManagement', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SnowDeviceManagement', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SnowDeviceManagement', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SnowDeviceManagement', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SnowDeviceManagement', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SnowDeviceManagement', result, true, false, mock)
  },
}
