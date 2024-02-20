
/**
* @description mocks_v3:mockIvschat module is mocks for AWS-SDK V3
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
export const mockIvschat = {
  createChatToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'createChatToken', 'Ivschat', Promise.resolve(result), true, mock)
  },
  createChatTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'createChatToken', 'Ivschat', Promise.resolve(result), false, mock)
  },
  createChatTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'createChatToken', 'Ivschat', Promise.reject(result), true, mock)
  },
  createLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'createLoggingConfiguration', 'Ivschat', Promise.resolve(result), true, mock)
  },
  createLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'createLoggingConfiguration', 'Ivschat', Promise.resolve(result), false, mock)
  },
  createLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'createLoggingConfiguration', 'Ivschat', Promise.reject(result), true, mock)
  },
  createRoom: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'createRoom', 'Ivschat', Promise.resolve(result), true, mock)
  },
  createRoomAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'createRoom', 'Ivschat', Promise.resolve(result), false, mock)
  },
  createRoomThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'createRoom', 'Ivschat', Promise.reject(result), true, mock)
  },
  deleteLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'deleteLoggingConfiguration', 'Ivschat', Promise.resolve(result), true, mock)
  },
  deleteLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'deleteLoggingConfiguration', 'Ivschat', Promise.resolve(result), false, mock)
  },
  deleteLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'deleteLoggingConfiguration', 'Ivschat', Promise.reject(result), true, mock)
  },
  deleteMessage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'deleteMessage', 'Ivschat', Promise.resolve(result), true, mock)
  },
  deleteMessageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'deleteMessage', 'Ivschat', Promise.resolve(result), false, mock)
  },
  deleteMessageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'deleteMessage', 'Ivschat', Promise.reject(result), true, mock)
  },
  deleteRoom: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'deleteRoom', 'Ivschat', Promise.resolve(result), true, mock)
  },
  deleteRoomAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'deleteRoom', 'Ivschat', Promise.resolve(result), false, mock)
  },
  deleteRoomThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'deleteRoom', 'Ivschat', Promise.reject(result), true, mock)
  },
  disconnectUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'disconnectUser', 'Ivschat', Promise.resolve(result), true, mock)
  },
  disconnectUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'disconnectUser', 'Ivschat', Promise.resolve(result), false, mock)
  },
  disconnectUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'disconnectUser', 'Ivschat', Promise.reject(result), true, mock)
  },
  getLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'getLoggingConfiguration', 'Ivschat', Promise.resolve(result), true, mock)
  },
  getLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'getLoggingConfiguration', 'Ivschat', Promise.resolve(result), false, mock)
  },
  getLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'getLoggingConfiguration', 'Ivschat', Promise.reject(result), true, mock)
  },
  getRoom: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'getRoom', 'Ivschat', Promise.resolve(result), true, mock)
  },
  getRoomAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'getRoom', 'Ivschat', Promise.resolve(result), false, mock)
  },
  getRoomThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'getRoom', 'Ivschat', Promise.reject(result), true, mock)
  },
  listLoggingConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'listLoggingConfigurations', 'Ivschat', Promise.resolve(result), true, mock)
  },
  listLoggingConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'listLoggingConfigurations', 'Ivschat', Promise.resolve(result), false, mock)
  },
  listLoggingConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'listLoggingConfigurations', 'Ivschat', Promise.reject(result), true, mock)
  },
  listRooms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'listRooms', 'Ivschat', Promise.resolve(result), true, mock)
  },
  listRoomsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'listRooms', 'Ivschat', Promise.resolve(result), false, mock)
  },
  listRoomsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'listRooms', 'Ivschat', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'listTagsForResource', 'Ivschat', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'listTagsForResource', 'Ivschat', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'listTagsForResource', 'Ivschat', Promise.reject(result), true, mock)
  },
  sendEvent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'sendEvent', 'Ivschat', Promise.resolve(result), true, mock)
  },
  sendEventAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'sendEvent', 'Ivschat', Promise.resolve(result), false, mock)
  },
  sendEventThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'sendEvent', 'Ivschat', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'tagResource', 'Ivschat', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'tagResource', 'Ivschat', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'tagResource', 'Ivschat', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'untagResource', 'Ivschat', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'untagResource', 'Ivschat', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'untagResource', 'Ivschat', Promise.reject(result), true, mock)
  },
  updateLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'updateLoggingConfiguration', 'Ivschat', Promise.resolve(result), true, mock)
  },
  updateLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'updateLoggingConfiguration', 'Ivschat', Promise.resolve(result), false, mock)
  },
  updateLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'updateLoggingConfiguration', 'Ivschat', Promise.reject(result), true, mock)
  },
  updateRoom: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'updateRoom', 'Ivschat', Promise.resolve(result), true, mock)
  },
  updateRoomAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'updateRoom', 'Ivschat', Promise.resolve(result), false, mock)
  },
  updateRoomThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'updateRoom', 'Ivschat', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'send', 'IvschatClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'send', 'IvschatClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ivschat', 'send', 'IvschatClient', Promise.reject(result), true, mock)
  }
}
