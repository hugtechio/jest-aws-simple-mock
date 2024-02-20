
/**
* @description mocks_v3:mockNetworkMonitor module is mocks for AWS-SDK V3
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
export const mockNetworkMonitor = {
  createMonitor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'createMonitor', 'NetworkMonitor', Promise.resolve(result), true, mock)
  },
  createMonitorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'createMonitor', 'NetworkMonitor', Promise.resolve(result), false, mock)
  },
  createMonitorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'createMonitor', 'NetworkMonitor', Promise.reject(result), true, mock)
  },
  createProbe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'createProbe', 'NetworkMonitor', Promise.resolve(result), true, mock)
  },
  createProbeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'createProbe', 'NetworkMonitor', Promise.resolve(result), false, mock)
  },
  createProbeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'createProbe', 'NetworkMonitor', Promise.reject(result), true, mock)
  },
  deleteMonitor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'deleteMonitor', 'NetworkMonitor', Promise.resolve(result), true, mock)
  },
  deleteMonitorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'deleteMonitor', 'NetworkMonitor', Promise.resolve(result), false, mock)
  },
  deleteMonitorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'deleteMonitor', 'NetworkMonitor', Promise.reject(result), true, mock)
  },
  deleteProbe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'deleteProbe', 'NetworkMonitor', Promise.resolve(result), true, mock)
  },
  deleteProbeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'deleteProbe', 'NetworkMonitor', Promise.resolve(result), false, mock)
  },
  deleteProbeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'deleteProbe', 'NetworkMonitor', Promise.reject(result), true, mock)
  },
  getMonitor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'getMonitor', 'NetworkMonitor', Promise.resolve(result), true, mock)
  },
  getMonitorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'getMonitor', 'NetworkMonitor', Promise.resolve(result), false, mock)
  },
  getMonitorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'getMonitor', 'NetworkMonitor', Promise.reject(result), true, mock)
  },
  getProbe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'getProbe', 'NetworkMonitor', Promise.resolve(result), true, mock)
  },
  getProbeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'getProbe', 'NetworkMonitor', Promise.resolve(result), false, mock)
  },
  getProbeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'getProbe', 'NetworkMonitor', Promise.reject(result), true, mock)
  },
  listMonitors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'listMonitors', 'NetworkMonitor', Promise.resolve(result), true, mock)
  },
  listMonitorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'listMonitors', 'NetworkMonitor', Promise.resolve(result), false, mock)
  },
  listMonitorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'listMonitors', 'NetworkMonitor', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'listTagsForResource', 'NetworkMonitor', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'listTagsForResource', 'NetworkMonitor', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'listTagsForResource', 'NetworkMonitor', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'tagResource', 'NetworkMonitor', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'tagResource', 'NetworkMonitor', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'tagResource', 'NetworkMonitor', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'untagResource', 'NetworkMonitor', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'untagResource', 'NetworkMonitor', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'untagResource', 'NetworkMonitor', Promise.reject(result), true, mock)
  },
  updateMonitor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'updateMonitor', 'NetworkMonitor', Promise.resolve(result), true, mock)
  },
  updateMonitorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'updateMonitor', 'NetworkMonitor', Promise.resolve(result), false, mock)
  },
  updateMonitorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'updateMonitor', 'NetworkMonitor', Promise.reject(result), true, mock)
  },
  updateProbe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'updateProbe', 'NetworkMonitor', Promise.resolve(result), true, mock)
  },
  updateProbeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'updateProbe', 'NetworkMonitor', Promise.resolve(result), false, mock)
  },
  updateProbeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'updateProbe', 'NetworkMonitor', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'send', 'NetworkMonitorClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'send', 'NetworkMonitorClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-networkmonitor', 'send', 'NetworkMonitorClient', Promise.reject(result), true, mock)
  }
}
