
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockSageMakerRuntime = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-runtime', 'destroy', 'SageMakerRuntime', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-runtime', 'destroy', 'SageMakerRuntime', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-runtime', 'destroy', 'SageMakerRuntime', Promise.reject(result), true, mock)
  },
  invokeEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-runtime', 'invokeEndpoint', 'SageMakerRuntime', Promise.resolve(result), true, mock)
  },
  invokeEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-runtime', 'invokeEndpoint', 'SageMakerRuntime', Promise.resolve(result), false, mock)
  },
  invokeEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-runtime', 'invokeEndpoint', 'SageMakerRuntime', Promise.reject(result), true, mock)
  },
  invokeEndpointAsync: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-runtime', 'invokeEndpointAsync', 'SageMakerRuntime', Promise.resolve(result), true, mock)
  },
  invokeEndpointAsyncAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-runtime', 'invokeEndpointAsync', 'SageMakerRuntime', Promise.resolve(result), false, mock)
  },
  invokeEndpointAsyncThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-runtime', 'invokeEndpointAsync', 'SageMakerRuntime', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-runtime', 'send', 'SageMakerRuntimeClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-runtime', 'send', 'SageMakerRuntimeClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-runtime', 'send', 'SageMakerRuntimeClient', Promise.reject(result), true, mock)
  }
}