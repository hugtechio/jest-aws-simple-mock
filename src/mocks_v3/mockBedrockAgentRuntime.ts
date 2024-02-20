
/**
* @description mocks_v3:mockBedrockAgentRuntime module is mocks for AWS-SDK V3
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
export const mockBedrockAgentRuntime = {
  invokeAgent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent-runtime', 'invokeAgent', 'BedrockAgentRuntime', Promise.resolve(result), true, mock)
  },
  invokeAgentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent-runtime', 'invokeAgent', 'BedrockAgentRuntime', Promise.resolve(result), false, mock)
  },
  invokeAgentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent-runtime', 'invokeAgent', 'BedrockAgentRuntime', Promise.reject(result), true, mock)
  },
  retrieveAndGenerate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent-runtime', 'retrieveAndGenerate', 'BedrockAgentRuntime', Promise.resolve(result), true, mock)
  },
  retrieveAndGenerateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent-runtime', 'retrieveAndGenerate', 'BedrockAgentRuntime', Promise.resolve(result), false, mock)
  },
  retrieveAndGenerateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent-runtime', 'retrieveAndGenerate', 'BedrockAgentRuntime', Promise.reject(result), true, mock)
  },
  retrieve: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent-runtime', 'retrieve', 'BedrockAgentRuntime', Promise.resolve(result), true, mock)
  },
  retrieveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent-runtime', 'retrieve', 'BedrockAgentRuntime', Promise.resolve(result), false, mock)
  },
  retrieveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent-runtime', 'retrieve', 'BedrockAgentRuntime', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent-runtime', 'send', 'BedrockAgentRuntimeClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent-runtime', 'send', 'BedrockAgentRuntimeClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-bedrock-agent-runtime', 'send', 'BedrockAgentRuntimeClient', Promise.reject(result), true, mock)
  }
}
