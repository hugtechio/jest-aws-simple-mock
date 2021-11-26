
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockBraket = {
  cancelQuantumTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'cancelQuantumTask', 'Braket', Promise.resolve(result), true, mock)
  },
  cancelQuantumTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'cancelQuantumTask', 'Braket', Promise.resolve(result), false, mock)
  },
  cancelQuantumTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'cancelQuantumTask', 'Braket', Promise.reject(result), true, mock)
  },
  createQuantumTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'createQuantumTask', 'Braket', Promise.resolve(result), true, mock)
  },
  createQuantumTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'createQuantumTask', 'Braket', Promise.resolve(result), false, mock)
  },
  createQuantumTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'createQuantumTask', 'Braket', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'destroy', 'Braket', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'destroy', 'Braket', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'destroy', 'Braket', Promise.reject(result), true, mock)
  },
  getDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'getDevice', 'Braket', Promise.resolve(result), true, mock)
  },
  getDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'getDevice', 'Braket', Promise.resolve(result), false, mock)
  },
  getDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'getDevice', 'Braket', Promise.reject(result), true, mock)
  },
  getQuantumTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'getQuantumTask', 'Braket', Promise.resolve(result), true, mock)
  },
  getQuantumTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'getQuantumTask', 'Braket', Promise.resolve(result), false, mock)
  },
  getQuantumTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'getQuantumTask', 'Braket', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'listTagsForResource', 'Braket', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'listTagsForResource', 'Braket', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'listTagsForResource', 'Braket', Promise.reject(result), true, mock)
  },
  searchDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'searchDevices', 'Braket', Promise.resolve(result), true, mock)
  },
  searchDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'searchDevices', 'Braket', Promise.resolve(result), false, mock)
  },
  searchDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'searchDevices', 'Braket', Promise.reject(result), true, mock)
  },
  searchQuantumTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'searchQuantumTasks', 'Braket', Promise.resolve(result), true, mock)
  },
  searchQuantumTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'searchQuantumTasks', 'Braket', Promise.resolve(result), false, mock)
  },
  searchQuantumTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'searchQuantumTasks', 'Braket', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'tagResource', 'Braket', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'tagResource', 'Braket', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'tagResource', 'Braket', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'untagResource', 'Braket', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'untagResource', 'Braket', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'untagResource', 'Braket', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'send', 'BraketClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'send', 'BraketClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-braket', 'send', 'BraketClient', Promise.reject(result), true, mock)
  }
}