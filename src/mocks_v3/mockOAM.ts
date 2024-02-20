
/**
* @description mocks_v3:mockOAM module is mocks for AWS-SDK V3
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
export const mockOAM = {
  createLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'createLink', 'OAM', Promise.resolve(result), true, mock)
  },
  createLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'createLink', 'OAM', Promise.resolve(result), false, mock)
  },
  createLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'createLink', 'OAM', Promise.reject(result), true, mock)
  },
  createSink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'createSink', 'OAM', Promise.resolve(result), true, mock)
  },
  createSinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'createSink', 'OAM', Promise.resolve(result), false, mock)
  },
  createSinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'createSink', 'OAM', Promise.reject(result), true, mock)
  },
  deleteLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'deleteLink', 'OAM', Promise.resolve(result), true, mock)
  },
  deleteLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'deleteLink', 'OAM', Promise.resolve(result), false, mock)
  },
  deleteLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'deleteLink', 'OAM', Promise.reject(result), true, mock)
  },
  deleteSink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'deleteSink', 'OAM', Promise.resolve(result), true, mock)
  },
  deleteSinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'deleteSink', 'OAM', Promise.resolve(result), false, mock)
  },
  deleteSinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'deleteSink', 'OAM', Promise.reject(result), true, mock)
  },
  getLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'getLink', 'OAM', Promise.resolve(result), true, mock)
  },
  getLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'getLink', 'OAM', Promise.resolve(result), false, mock)
  },
  getLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'getLink', 'OAM', Promise.reject(result), true, mock)
  },
  getSink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'getSink', 'OAM', Promise.resolve(result), true, mock)
  },
  getSinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'getSink', 'OAM', Promise.resolve(result), false, mock)
  },
  getSinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'getSink', 'OAM', Promise.reject(result), true, mock)
  },
  getSinkPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'getSinkPolicy', 'OAM', Promise.resolve(result), true, mock)
  },
  getSinkPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'getSinkPolicy', 'OAM', Promise.resolve(result), false, mock)
  },
  getSinkPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'getSinkPolicy', 'OAM', Promise.reject(result), true, mock)
  },
  listAttachedLinks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'listAttachedLinks', 'OAM', Promise.resolve(result), true, mock)
  },
  listAttachedLinksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'listAttachedLinks', 'OAM', Promise.resolve(result), false, mock)
  },
  listAttachedLinksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'listAttachedLinks', 'OAM', Promise.reject(result), true, mock)
  },
  listLinks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'listLinks', 'OAM', Promise.resolve(result), true, mock)
  },
  listLinksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'listLinks', 'OAM', Promise.resolve(result), false, mock)
  },
  listLinksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'listLinks', 'OAM', Promise.reject(result), true, mock)
  },
  listSinks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'listSinks', 'OAM', Promise.resolve(result), true, mock)
  },
  listSinksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'listSinks', 'OAM', Promise.resolve(result), false, mock)
  },
  listSinksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'listSinks', 'OAM', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'listTagsForResource', 'OAM', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'listTagsForResource', 'OAM', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'listTagsForResource', 'OAM', Promise.reject(result), true, mock)
  },
  putSinkPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'putSinkPolicy', 'OAM', Promise.resolve(result), true, mock)
  },
  putSinkPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'putSinkPolicy', 'OAM', Promise.resolve(result), false, mock)
  },
  putSinkPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'putSinkPolicy', 'OAM', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'tagResource', 'OAM', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'tagResource', 'OAM', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'tagResource', 'OAM', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'untagResource', 'OAM', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'untagResource', 'OAM', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'untagResource', 'OAM', Promise.reject(result), true, mock)
  },
  updateLink: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'updateLink', 'OAM', Promise.resolve(result), true, mock)
  },
  updateLinkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'updateLink', 'OAM', Promise.resolve(result), false, mock)
  },
  updateLinkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'updateLink', 'OAM', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'send', 'OAMClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'send', 'OAMClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-oam', 'send', 'OAMClient', Promise.reject(result), true, mock)
  }
}
