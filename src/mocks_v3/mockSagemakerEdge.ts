
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockSagemakerEdge = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-edge', 'destroy', 'SagemakerEdge', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-edge', 'destroy', 'SagemakerEdge', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-edge', 'destroy', 'SagemakerEdge', Promise.reject(result), true, mock)
  },
  getDeviceRegistration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-edge', 'getDeviceRegistration', 'SagemakerEdge', Promise.resolve(result), true, mock)
  },
  getDeviceRegistrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-edge', 'getDeviceRegistration', 'SagemakerEdge', Promise.resolve(result), false, mock)
  },
  getDeviceRegistrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-edge', 'getDeviceRegistration', 'SagemakerEdge', Promise.reject(result), true, mock)
  },
  sendHeartbeat: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-edge', 'sendHeartbeat', 'SagemakerEdge', Promise.resolve(result), true, mock)
  },
  sendHeartbeatAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-edge', 'sendHeartbeat', 'SagemakerEdge', Promise.resolve(result), false, mock)
  },
  sendHeartbeatThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-edge', 'sendHeartbeat', 'SagemakerEdge', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-edge', 'send', 'SagemakerEdgeClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-edge', 'send', 'SagemakerEdgeClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-edge', 'send', 'SagemakerEdgeClient', Promise.reject(result), true, mock)
  }
}