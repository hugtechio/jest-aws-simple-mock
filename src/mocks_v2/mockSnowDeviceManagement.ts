
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
  export const mockSnowDeviceManagement = {
  cancelTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelTask', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  cancelTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelTask', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  cancelTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelTask', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  createTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTask', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  createTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTask', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  createTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTask', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  describeDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDevice', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  describeDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDevice', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  describeDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDevice', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  describeDeviceEc2Instances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeviceEc2Instances', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  describeDeviceEc2InstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeviceEc2Instances', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  describeDeviceEc2InstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDeviceEc2Instances', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  describeExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExecution', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  describeExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExecution', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  describeExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeExecution', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  describeTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTask', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  describeTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTask', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  describeTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTask', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  listDeviceResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeviceResources', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  listDeviceResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeviceResources', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  listDeviceResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeviceResources', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  listDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevices', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  listDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevices', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  listDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDevices', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  listExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExecutions', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  listExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExecutions', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  listExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listExecutions', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  listTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTasks', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  listTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTasks', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  listTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTasks', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SnowDeviceManagement', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SnowDeviceManagement', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SnowDeviceManagement', Promise.reject(result), true, mock)
  },
}
