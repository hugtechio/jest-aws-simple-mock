
/**
* @description mocks_v3:mockWorkMailMessageFlow module is mocks for AWS-SDK V3
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

  export const mockWorkMailMessageFlow = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmailmessageflow', 'destroy', 'WorkMailMessageFlow', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmailmessageflow', 'destroy', 'WorkMailMessageFlow', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmailmessageflow', 'destroy', 'WorkMailMessageFlow', Promise.reject(result), true, mock)
  },
  getRawMessageContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmailmessageflow', 'getRawMessageContent', 'WorkMailMessageFlow', Promise.resolve(result), true, mock)
  },
  getRawMessageContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmailmessageflow', 'getRawMessageContent', 'WorkMailMessageFlow', Promise.resolve(result), false, mock)
  },
  getRawMessageContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmailmessageflow', 'getRawMessageContent', 'WorkMailMessageFlow', Promise.reject(result), true, mock)
  },
  putRawMessageContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmailmessageflow', 'putRawMessageContent', 'WorkMailMessageFlow', Promise.resolve(result), true, mock)
  },
  putRawMessageContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmailmessageflow', 'putRawMessageContent', 'WorkMailMessageFlow', Promise.resolve(result), false, mock)
  },
  putRawMessageContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmailmessageflow', 'putRawMessageContent', 'WorkMailMessageFlow', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmailmessageflow', 'send', 'WorkMailMessageFlowClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmailmessageflow', 'send', 'WorkMailMessageFlowClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workmailmessageflow', 'send', 'WorkMailMessageFlowClient', Promise.reject(result), true, mock)
  }
}