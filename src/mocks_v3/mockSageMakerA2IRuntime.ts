
/**
* @description mocks_v3:mockSageMakerA2IRuntime module is mocks for AWS-SDK V3
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

  export const mockSageMakerA2IRuntime = {
  deleteHumanLoop: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-a2i-runtime', 'deleteHumanLoop', 'SageMakerA2IRuntime', Promise.resolve(result), true, mock)
  },
  deleteHumanLoopAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-a2i-runtime', 'deleteHumanLoop', 'SageMakerA2IRuntime', Promise.resolve(result), false, mock)
  },
  deleteHumanLoopThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-a2i-runtime', 'deleteHumanLoop', 'SageMakerA2IRuntime', Promise.reject(result), true, mock)
  },
  describeHumanLoop: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-a2i-runtime', 'describeHumanLoop', 'SageMakerA2IRuntime', Promise.resolve(result), true, mock)
  },
  describeHumanLoopAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-a2i-runtime', 'describeHumanLoop', 'SageMakerA2IRuntime', Promise.resolve(result), false, mock)
  },
  describeHumanLoopThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-a2i-runtime', 'describeHumanLoop', 'SageMakerA2IRuntime', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-a2i-runtime', 'destroy', 'SageMakerA2IRuntime', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-a2i-runtime', 'destroy', 'SageMakerA2IRuntime', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-a2i-runtime', 'destroy', 'SageMakerA2IRuntime', Promise.reject(result), true, mock)
  },
  listHumanLoops: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-a2i-runtime', 'listHumanLoops', 'SageMakerA2IRuntime', Promise.resolve(result), true, mock)
  },
  listHumanLoopsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-a2i-runtime', 'listHumanLoops', 'SageMakerA2IRuntime', Promise.resolve(result), false, mock)
  },
  listHumanLoopsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-a2i-runtime', 'listHumanLoops', 'SageMakerA2IRuntime', Promise.reject(result), true, mock)
  },
  startHumanLoop: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-a2i-runtime', 'startHumanLoop', 'SageMakerA2IRuntime', Promise.resolve(result), true, mock)
  },
  startHumanLoopAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-a2i-runtime', 'startHumanLoop', 'SageMakerA2IRuntime', Promise.resolve(result), false, mock)
  },
  startHumanLoopThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-a2i-runtime', 'startHumanLoop', 'SageMakerA2IRuntime', Promise.reject(result), true, mock)
  },
  stopHumanLoop: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-a2i-runtime', 'stopHumanLoop', 'SageMakerA2IRuntime', Promise.resolve(result), true, mock)
  },
  stopHumanLoopAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-a2i-runtime', 'stopHumanLoop', 'SageMakerA2IRuntime', Promise.resolve(result), false, mock)
  },
  stopHumanLoopThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-a2i-runtime', 'stopHumanLoop', 'SageMakerA2IRuntime', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-a2i-runtime', 'send', 'SageMakerA2IRuntimeClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-a2i-runtime', 'send', 'SageMakerA2IRuntimeClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker-a2i-runtime', 'send', 'SageMakerA2IRuntimeClient', Promise.reject(result), true, mock)
  }
}