
/**
* @description mocks_v3:mockIoTSecureTunneling module is mocks for AWS-SDK V3
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

  export const mockIoTSecureTunneling = {
  closeTunnel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'closeTunnel', 'IoTSecureTunneling', Promise.resolve(result), true, mock)
  },
  closeTunnelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'closeTunnel', 'IoTSecureTunneling', Promise.resolve(result), false, mock)
  },
  closeTunnelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'closeTunnel', 'IoTSecureTunneling', Promise.reject(result), true, mock)
  },
  describeTunnel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'describeTunnel', 'IoTSecureTunneling', Promise.resolve(result), true, mock)
  },
  describeTunnelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'describeTunnel', 'IoTSecureTunneling', Promise.resolve(result), false, mock)
  },
  describeTunnelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'describeTunnel', 'IoTSecureTunneling', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'destroy', 'IoTSecureTunneling', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'destroy', 'IoTSecureTunneling', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'destroy', 'IoTSecureTunneling', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'listTagsForResource', 'IoTSecureTunneling', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'listTagsForResource', 'IoTSecureTunneling', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'listTagsForResource', 'IoTSecureTunneling', Promise.reject(result), true, mock)
  },
  listTunnels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'listTunnels', 'IoTSecureTunneling', Promise.resolve(result), true, mock)
  },
  listTunnelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'listTunnels', 'IoTSecureTunneling', Promise.resolve(result), false, mock)
  },
  listTunnelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'listTunnels', 'IoTSecureTunneling', Promise.reject(result), true, mock)
  },
  openTunnel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'openTunnel', 'IoTSecureTunneling', Promise.resolve(result), true, mock)
  },
  openTunnelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'openTunnel', 'IoTSecureTunneling', Promise.resolve(result), false, mock)
  },
  openTunnelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'openTunnel', 'IoTSecureTunneling', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'tagResource', 'IoTSecureTunneling', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'tagResource', 'IoTSecureTunneling', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'tagResource', 'IoTSecureTunneling', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'untagResource', 'IoTSecureTunneling', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'untagResource', 'IoTSecureTunneling', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'untagResource', 'IoTSecureTunneling', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'send', 'IoTSecureTunnelingClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'send', 'IoTSecureTunnelingClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iotsecuretunneling', 'send', 'IoTSecureTunnelingClient', Promise.reject(result), true, mock)
  }
}