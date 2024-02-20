
/**
* @description mocks_v3:mockBedrockRuntime module is mocks for AWS-SDK V3
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
export const mockBedrockRuntime = {
  invokeModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-runtime', 'invokeModel', 'BedrockRuntime', Promise.resolve(result), true, mock)
  },
  invokeModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-runtime', 'invokeModel', 'BedrockRuntime', Promise.resolve(result), false, mock)
  },
  invokeModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-runtime', 'invokeModel', 'BedrockRuntime', Promise.reject(result), true, mock)
  },
  invokeModelWithResponseStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-runtime', 'invokeModelWithResponseStream', 'BedrockRuntime', Promise.resolve(result), true, mock)
  },
  invokeModelWithResponseStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-runtime', 'invokeModelWithResponseStream', 'BedrockRuntime', Promise.resolve(result), false, mock)
  },
  invokeModelWithResponseStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-runtime', 'invokeModelWithResponseStream', 'BedrockRuntime', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-runtime', 'send', 'BedrockRuntimeClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-runtime', 'send', 'BedrockRuntimeClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-runtime', 'send', 'BedrockRuntimeClient', Promise.reject(result), true, mock)
  }
}
