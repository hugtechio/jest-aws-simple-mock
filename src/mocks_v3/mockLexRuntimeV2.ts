
/**
* @description mocks_v3:mockLexRuntimeV2 module is mocks for AWS-SDK V3
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
export const mockLexRuntimeV2 = {
  deleteSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-v2', 'deleteSession', 'LexRuntimeV2', Promise.resolve(result), true, mock)
  },
  deleteSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-v2', 'deleteSession', 'LexRuntimeV2', Promise.resolve(result), false, mock)
  },
  deleteSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-v2', 'deleteSession', 'LexRuntimeV2', Promise.reject(result), true, mock)
  },
  getSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-v2', 'getSession', 'LexRuntimeV2', Promise.resolve(result), true, mock)
  },
  getSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-v2', 'getSession', 'LexRuntimeV2', Promise.resolve(result), false, mock)
  },
  getSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-v2', 'getSession', 'LexRuntimeV2', Promise.reject(result), true, mock)
  },
  putSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-v2', 'putSession', 'LexRuntimeV2', Promise.resolve(result), true, mock)
  },
  putSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-v2', 'putSession', 'LexRuntimeV2', Promise.resolve(result), false, mock)
  },
  putSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-v2', 'putSession', 'LexRuntimeV2', Promise.reject(result), true, mock)
  },
  recognizeText: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-v2', 'recognizeText', 'LexRuntimeV2', Promise.resolve(result), true, mock)
  },
  recognizeTextAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-v2', 'recognizeText', 'LexRuntimeV2', Promise.resolve(result), false, mock)
  },
  recognizeTextThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-v2', 'recognizeText', 'LexRuntimeV2', Promise.reject(result), true, mock)
  },
  recognizeUtterance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-v2', 'recognizeUtterance', 'LexRuntimeV2', Promise.resolve(result), true, mock)
  },
  recognizeUtteranceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-v2', 'recognizeUtterance', 'LexRuntimeV2', Promise.resolve(result), false, mock)
  },
  recognizeUtteranceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-v2', 'recognizeUtterance', 'LexRuntimeV2', Promise.reject(result), true, mock)
  },
  startConversation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-v2', 'startConversation', 'LexRuntimeV2', Promise.resolve(result), true, mock)
  },
  startConversationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-v2', 'startConversation', 'LexRuntimeV2', Promise.resolve(result), false, mock)
  },
  startConversationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-v2', 'startConversation', 'LexRuntimeV2', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-v2', 'send', 'LexRuntimeV2Client', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-v2', 'send', 'LexRuntimeV2Client', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-v2', 'send', 'LexRuntimeV2Client', Promise.reject(result), true, mock)
  }
}
