
/**
* @description mocks_v3:mockSageMakerRuntime module is mocks for AWS-SDK V3
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
export const mockSageMakerRuntime = {
  invokeEndpointAsync: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-runtime', 'invokeEndpointAsync', 'SageMakerRuntime', Promise.resolve(result), true, mock)
  },
  invokeEndpointAsyncAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-runtime', 'invokeEndpointAsync', 'SageMakerRuntime', Promise.resolve(result), false, mock)
  },
  invokeEndpointAsyncThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-runtime', 'invokeEndpointAsync', 'SageMakerRuntime', Promise.reject(result), true, mock)
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
  invokeEndpointWithResponseStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-runtime', 'invokeEndpointWithResponseStream', 'SageMakerRuntime', Promise.resolve(result), true, mock)
  },
  invokeEndpointWithResponseStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-runtime', 'invokeEndpointWithResponseStream', 'SageMakerRuntime', Promise.resolve(result), false, mock)
  },
  invokeEndpointWithResponseStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-runtime', 'invokeEndpointWithResponseStream', 'SageMakerRuntime', Promise.reject(result), true, mock)
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
