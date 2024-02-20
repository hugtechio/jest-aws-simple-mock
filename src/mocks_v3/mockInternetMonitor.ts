
/**
* @description mocks_v3:mockInternetMonitor module is mocks for AWS-SDK V3
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
export const mockInternetMonitor = {
  createMonitor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'createMonitor', 'InternetMonitor', Promise.resolve(result), true, mock)
  },
  createMonitorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'createMonitor', 'InternetMonitor', Promise.resolve(result), false, mock)
  },
  createMonitorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'createMonitor', 'InternetMonitor', Promise.reject(result), true, mock)
  },
  deleteMonitor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'deleteMonitor', 'InternetMonitor', Promise.resolve(result), true, mock)
  },
  deleteMonitorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'deleteMonitor', 'InternetMonitor', Promise.resolve(result), false, mock)
  },
  deleteMonitorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'deleteMonitor', 'InternetMonitor', Promise.reject(result), true, mock)
  },
  getHealthEvent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'getHealthEvent', 'InternetMonitor', Promise.resolve(result), true, mock)
  },
  getHealthEventAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'getHealthEvent', 'InternetMonitor', Promise.resolve(result), false, mock)
  },
  getHealthEventThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'getHealthEvent', 'InternetMonitor', Promise.reject(result), true, mock)
  },
  getMonitor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'getMonitor', 'InternetMonitor', Promise.resolve(result), true, mock)
  },
  getMonitorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'getMonitor', 'InternetMonitor', Promise.resolve(result), false, mock)
  },
  getMonitorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'getMonitor', 'InternetMonitor', Promise.reject(result), true, mock)
  },
  getQueryResults: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'getQueryResults', 'InternetMonitor', Promise.resolve(result), true, mock)
  },
  getQueryResultsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'getQueryResults', 'InternetMonitor', Promise.resolve(result), false, mock)
  },
  getQueryResultsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'getQueryResults', 'InternetMonitor', Promise.reject(result), true, mock)
  },
  getQueryStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'getQueryStatus', 'InternetMonitor', Promise.resolve(result), true, mock)
  },
  getQueryStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'getQueryStatus', 'InternetMonitor', Promise.resolve(result), false, mock)
  },
  getQueryStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'getQueryStatus', 'InternetMonitor', Promise.reject(result), true, mock)
  },
  listHealthEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'listHealthEvents', 'InternetMonitor', Promise.resolve(result), true, mock)
  },
  listHealthEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'listHealthEvents', 'InternetMonitor', Promise.resolve(result), false, mock)
  },
  listHealthEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'listHealthEvents', 'InternetMonitor', Promise.reject(result), true, mock)
  },
  listMonitors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'listMonitors', 'InternetMonitor', Promise.resolve(result), true, mock)
  },
  listMonitorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'listMonitors', 'InternetMonitor', Promise.resolve(result), false, mock)
  },
  listMonitorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'listMonitors', 'InternetMonitor', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'listTagsForResource', 'InternetMonitor', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'listTagsForResource', 'InternetMonitor', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'listTagsForResource', 'InternetMonitor', Promise.reject(result), true, mock)
  },
  startQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'startQuery', 'InternetMonitor', Promise.resolve(result), true, mock)
  },
  startQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'startQuery', 'InternetMonitor', Promise.resolve(result), false, mock)
  },
  startQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'startQuery', 'InternetMonitor', Promise.reject(result), true, mock)
  },
  stopQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'stopQuery', 'InternetMonitor', Promise.resolve(result), true, mock)
  },
  stopQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'stopQuery', 'InternetMonitor', Promise.resolve(result), false, mock)
  },
  stopQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'stopQuery', 'InternetMonitor', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'tagResource', 'InternetMonitor', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'tagResource', 'InternetMonitor', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'tagResource', 'InternetMonitor', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'untagResource', 'InternetMonitor', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'untagResource', 'InternetMonitor', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'untagResource', 'InternetMonitor', Promise.reject(result), true, mock)
  },
  updateMonitor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'updateMonitor', 'InternetMonitor', Promise.resolve(result), true, mock)
  },
  updateMonitorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'updateMonitor', 'InternetMonitor', Promise.resolve(result), false, mock)
  },
  updateMonitorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'updateMonitor', 'InternetMonitor', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'send', 'InternetMonitorClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'send', 'InternetMonitorClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-internetmonitor', 'send', 'InternetMonitorClient', Promise.reject(result), true, mock)
  }
}
