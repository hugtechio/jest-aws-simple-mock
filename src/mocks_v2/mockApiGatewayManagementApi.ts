
/**
* @description mocks_v2:mockApiGatewayManagementApi.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockApiGatewayManagementApi = {
  deleteConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnection', 'ApiGatewayManagementApi', result, true, true, mock)
  },
  deleteConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnection', 'ApiGatewayManagementApi', result, false, true, mock)
  },
  deleteConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnection', 'ApiGatewayManagementApi', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ApiGatewayManagementApi', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ApiGatewayManagementApi', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ApiGatewayManagementApi', result, true, false, mock)
  },
  getConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnection', 'ApiGatewayManagementApi', result, true, true, mock)
  },
  getConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnection', 'ApiGatewayManagementApi', result, false, true, mock)
  },
  getConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnection', 'ApiGatewayManagementApi', result, true, false, mock)
  },
  postToConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postToConnection', 'ApiGatewayManagementApi', result, true, true, mock)
  },
  postToConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postToConnection', 'ApiGatewayManagementApi', result, false, true, mock)
  },
  postToConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postToConnection', 'ApiGatewayManagementApi', result, true, false, mock)
  },
}
