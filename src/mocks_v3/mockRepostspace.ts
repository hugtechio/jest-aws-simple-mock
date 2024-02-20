
/**
* @description mocks_v3:mockRepostspace module is mocks for AWS-SDK V3
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
export const mockRepostspace = {
  createSpace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'createSpace', 'Repostspace', Promise.resolve(result), true, mock)
  },
  createSpaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'createSpace', 'Repostspace', Promise.resolve(result), false, mock)
  },
  createSpaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'createSpace', 'Repostspace', Promise.reject(result), true, mock)
  },
  deleteSpace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'deleteSpace', 'Repostspace', Promise.resolve(result), true, mock)
  },
  deleteSpaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'deleteSpace', 'Repostspace', Promise.resolve(result), false, mock)
  },
  deleteSpaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'deleteSpace', 'Repostspace', Promise.reject(result), true, mock)
  },
  deregisterAdmin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'deregisterAdmin', 'Repostspace', Promise.resolve(result), true, mock)
  },
  deregisterAdminAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'deregisterAdmin', 'Repostspace', Promise.resolve(result), false, mock)
  },
  deregisterAdminThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'deregisterAdmin', 'Repostspace', Promise.reject(result), true, mock)
  },
  getSpace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'getSpace', 'Repostspace', Promise.resolve(result), true, mock)
  },
  getSpaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'getSpace', 'Repostspace', Promise.resolve(result), false, mock)
  },
  getSpaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'getSpace', 'Repostspace', Promise.reject(result), true, mock)
  },
  listSpaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'listSpaces', 'Repostspace', Promise.resolve(result), true, mock)
  },
  listSpacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'listSpaces', 'Repostspace', Promise.resolve(result), false, mock)
  },
  listSpacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'listSpaces', 'Repostspace', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'listTagsForResource', 'Repostspace', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'listTagsForResource', 'Repostspace', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'listTagsForResource', 'Repostspace', Promise.reject(result), true, mock)
  },
  registerAdmin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'registerAdmin', 'Repostspace', Promise.resolve(result), true, mock)
  },
  registerAdminAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'registerAdmin', 'Repostspace', Promise.resolve(result), false, mock)
  },
  registerAdminThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'registerAdmin', 'Repostspace', Promise.reject(result), true, mock)
  },
  sendInvites: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'sendInvites', 'Repostspace', Promise.resolve(result), true, mock)
  },
  sendInvitesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'sendInvites', 'Repostspace', Promise.resolve(result), false, mock)
  },
  sendInvitesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'sendInvites', 'Repostspace', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'tagResource', 'Repostspace', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'tagResource', 'Repostspace', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'tagResource', 'Repostspace', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'untagResource', 'Repostspace', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'untagResource', 'Repostspace', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'untagResource', 'Repostspace', Promise.reject(result), true, mock)
  },
  updateSpace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'updateSpace', 'Repostspace', Promise.resolve(result), true, mock)
  },
  updateSpaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'updateSpace', 'Repostspace', Promise.resolve(result), false, mock)
  },
  updateSpaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'updateSpace', 'Repostspace', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'send', 'RepostspaceClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'send', 'RepostspaceClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-repostspace', 'send', 'RepostspaceClient', Promise.reject(result), true, mock)
  }
}
