
/**
* @description mocks_v3:mockLexRuntimeService module is mocks for AWS-SDK V3
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

  export const mockLexRuntimeService = {
  deleteSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-service', 'deleteSession', 'LexRuntimeService', Promise.resolve(result), true, mock)
  },
  deleteSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-service', 'deleteSession', 'LexRuntimeService', Promise.resolve(result), false, mock)
  },
  deleteSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-service', 'deleteSession', 'LexRuntimeService', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-service', 'destroy', 'LexRuntimeService', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-service', 'destroy', 'LexRuntimeService', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-service', 'destroy', 'LexRuntimeService', Promise.reject(result), true, mock)
  },
  getSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-service', 'getSession', 'LexRuntimeService', Promise.resolve(result), true, mock)
  },
  getSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-service', 'getSession', 'LexRuntimeService', Promise.resolve(result), false, mock)
  },
  getSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-service', 'getSession', 'LexRuntimeService', Promise.reject(result), true, mock)
  },
  postContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-service', 'postContent', 'LexRuntimeService', Promise.resolve(result), true, mock)
  },
  postContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-service', 'postContent', 'LexRuntimeService', Promise.resolve(result), false, mock)
  },
  postContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-service', 'postContent', 'LexRuntimeService', Promise.reject(result), true, mock)
  },
  postText: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-service', 'postText', 'LexRuntimeService', Promise.resolve(result), true, mock)
  },
  postTextAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-service', 'postText', 'LexRuntimeService', Promise.resolve(result), false, mock)
  },
  postTextThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-service', 'postText', 'LexRuntimeService', Promise.reject(result), true, mock)
  },
  putSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-service', 'putSession', 'LexRuntimeService', Promise.resolve(result), true, mock)
  },
  putSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-service', 'putSession', 'LexRuntimeService', Promise.resolve(result), false, mock)
  },
  putSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-service', 'putSession', 'LexRuntimeService', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-service', 'send', 'LexRuntimeServiceClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-service', 'send', 'LexRuntimeServiceClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lex-runtime-service', 'send', 'LexRuntimeServiceClient', Promise.reject(result), true, mock)
  }
}