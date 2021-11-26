
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
  export const mockBraket = {
  cancelQuantumTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelQuantumTask', 'Braket', Promise.resolve(result), true, mock)
  },
  cancelQuantumTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelQuantumTask', 'Braket', Promise.resolve(result), false, mock)
  },
  cancelQuantumTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelQuantumTask', 'Braket', Promise.reject(result), true, mock)
  },
  createQuantumTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQuantumTask', 'Braket', Promise.resolve(result), true, mock)
  },
  createQuantumTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQuantumTask', 'Braket', Promise.resolve(result), false, mock)
  },
  createQuantumTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createQuantumTask', 'Braket', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Braket', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Braket', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Braket', Promise.reject(result), true, mock)
  },
  getDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevice', 'Braket', Promise.resolve(result), true, mock)
  },
  getDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevice', 'Braket', Promise.resolve(result), false, mock)
  },
  getDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDevice', 'Braket', Promise.reject(result), true, mock)
  },
  getQuantumTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQuantumTask', 'Braket', Promise.resolve(result), true, mock)
  },
  getQuantumTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQuantumTask', 'Braket', Promise.resolve(result), false, mock)
  },
  getQuantumTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getQuantumTask', 'Braket', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Braket', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Braket', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Braket', Promise.reject(result), true, mock)
  },
  searchDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchDevices', 'Braket', Promise.resolve(result), true, mock)
  },
  searchDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchDevices', 'Braket', Promise.resolve(result), false, mock)
  },
  searchDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchDevices', 'Braket', Promise.reject(result), true, mock)
  },
  searchQuantumTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchQuantumTasks', 'Braket', Promise.resolve(result), true, mock)
  },
  searchQuantumTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchQuantumTasks', 'Braket', Promise.resolve(result), false, mock)
  },
  searchQuantumTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchQuantumTasks', 'Braket', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Braket', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Braket', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Braket', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Braket', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Braket', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Braket', Promise.reject(result), true, mock)
  },
}
