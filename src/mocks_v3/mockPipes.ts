
/**
* @description mocks_v3:mockPipes module is mocks for AWS-SDK V3
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
export const mockPipes = {
  createPipe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'createPipe', 'Pipes', Promise.resolve(result), true, mock)
  },
  createPipeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'createPipe', 'Pipes', Promise.resolve(result), false, mock)
  },
  createPipeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'createPipe', 'Pipes', Promise.reject(result), true, mock)
  },
  deletePipe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'deletePipe', 'Pipes', Promise.resolve(result), true, mock)
  },
  deletePipeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'deletePipe', 'Pipes', Promise.resolve(result), false, mock)
  },
  deletePipeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'deletePipe', 'Pipes', Promise.reject(result), true, mock)
  },
  describePipe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'describePipe', 'Pipes', Promise.resolve(result), true, mock)
  },
  describePipeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'describePipe', 'Pipes', Promise.resolve(result), false, mock)
  },
  describePipeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'describePipe', 'Pipes', Promise.reject(result), true, mock)
  },
  listPipes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'listPipes', 'Pipes', Promise.resolve(result), true, mock)
  },
  listPipesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'listPipes', 'Pipes', Promise.resolve(result), false, mock)
  },
  listPipesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'listPipes', 'Pipes', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'listTagsForResource', 'Pipes', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'listTagsForResource', 'Pipes', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'listTagsForResource', 'Pipes', Promise.reject(result), true, mock)
  },
  startPipe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'startPipe', 'Pipes', Promise.resolve(result), true, mock)
  },
  startPipeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'startPipe', 'Pipes', Promise.resolve(result), false, mock)
  },
  startPipeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'startPipe', 'Pipes', Promise.reject(result), true, mock)
  },
  stopPipe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'stopPipe', 'Pipes', Promise.resolve(result), true, mock)
  },
  stopPipeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'stopPipe', 'Pipes', Promise.resolve(result), false, mock)
  },
  stopPipeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'stopPipe', 'Pipes', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'tagResource', 'Pipes', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'tagResource', 'Pipes', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'tagResource', 'Pipes', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'untagResource', 'Pipes', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'untagResource', 'Pipes', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'untagResource', 'Pipes', Promise.reject(result), true, mock)
  },
  updatePipe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'updatePipe', 'Pipes', Promise.resolve(result), true, mock)
  },
  updatePipeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'updatePipe', 'Pipes', Promise.resolve(result), false, mock)
  },
  updatePipeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'updatePipe', 'Pipes', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'send', 'PipesClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'send', 'PipesClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pipes', 'send', 'PipesClient', Promise.reject(result), true, mock)
  }
}
