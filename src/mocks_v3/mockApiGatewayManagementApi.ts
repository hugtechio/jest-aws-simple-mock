
/**
* @description mocks_v3:mockApiGatewayManagementApi module is mocks for AWS-SDK V3
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

  export const mockApiGatewayManagementApi = {
  deleteConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewaymanagementapi', 'deleteConnection', 'ApiGatewayManagementApi', Promise.resolve(result), true, mock)
  },
  deleteConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewaymanagementapi', 'deleteConnection', 'ApiGatewayManagementApi', Promise.resolve(result), false, mock)
  },
  deleteConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewaymanagementapi', 'deleteConnection', 'ApiGatewayManagementApi', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewaymanagementapi', 'destroy', 'ApiGatewayManagementApi', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewaymanagementapi', 'destroy', 'ApiGatewayManagementApi', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewaymanagementapi', 'destroy', 'ApiGatewayManagementApi', Promise.reject(result), true, mock)
  },
  getConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewaymanagementapi', 'getConnection', 'ApiGatewayManagementApi', Promise.resolve(result), true, mock)
  },
  getConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewaymanagementapi', 'getConnection', 'ApiGatewayManagementApi', Promise.resolve(result), false, mock)
  },
  getConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewaymanagementapi', 'getConnection', 'ApiGatewayManagementApi', Promise.reject(result), true, mock)
  },
  postToConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewaymanagementapi', 'postToConnection', 'ApiGatewayManagementApi', Promise.resolve(result), true, mock)
  },
  postToConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewaymanagementapi', 'postToConnection', 'ApiGatewayManagementApi', Promise.resolve(result), false, mock)
  },
  postToConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewaymanagementapi', 'postToConnection', 'ApiGatewayManagementApi', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewaymanagementapi', 'send', 'ApiGatewayManagementApiClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewaymanagementapi', 'send', 'ApiGatewayManagementApiClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-apigatewaymanagementapi', 'send', 'ApiGatewayManagementApiClient', Promise.reject(result), true, mock)
  }
}