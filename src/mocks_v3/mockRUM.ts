
/**
* @description mocks_v3:mockRUM module is mocks for AWS-SDK V3
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
export const mockRUM = {
  batchCreateRumMetricDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'batchCreateRumMetricDefinitions', 'RUM', Promise.resolve(result), true, mock)
  },
  batchCreateRumMetricDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'batchCreateRumMetricDefinitions', 'RUM', Promise.resolve(result), false, mock)
  },
  batchCreateRumMetricDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'batchCreateRumMetricDefinitions', 'RUM', Promise.reject(result), true, mock)
  },
  batchDeleteRumMetricDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'batchDeleteRumMetricDefinitions', 'RUM', Promise.resolve(result), true, mock)
  },
  batchDeleteRumMetricDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'batchDeleteRumMetricDefinitions', 'RUM', Promise.resolve(result), false, mock)
  },
  batchDeleteRumMetricDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'batchDeleteRumMetricDefinitions', 'RUM', Promise.reject(result), true, mock)
  },
  batchGetRumMetricDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'batchGetRumMetricDefinitions', 'RUM', Promise.resolve(result), true, mock)
  },
  batchGetRumMetricDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'batchGetRumMetricDefinitions', 'RUM', Promise.resolve(result), false, mock)
  },
  batchGetRumMetricDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'batchGetRumMetricDefinitions', 'RUM', Promise.reject(result), true, mock)
  },
  createAppMonitor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'createAppMonitor', 'RUM', Promise.resolve(result), true, mock)
  },
  createAppMonitorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'createAppMonitor', 'RUM', Promise.resolve(result), false, mock)
  },
  createAppMonitorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'createAppMonitor', 'RUM', Promise.reject(result), true, mock)
  },
  deleteAppMonitor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'deleteAppMonitor', 'RUM', Promise.resolve(result), true, mock)
  },
  deleteAppMonitorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'deleteAppMonitor', 'RUM', Promise.resolve(result), false, mock)
  },
  deleteAppMonitorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'deleteAppMonitor', 'RUM', Promise.reject(result), true, mock)
  },
  deleteRumMetricsDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'deleteRumMetricsDestination', 'RUM', Promise.resolve(result), true, mock)
  },
  deleteRumMetricsDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'deleteRumMetricsDestination', 'RUM', Promise.resolve(result), false, mock)
  },
  deleteRumMetricsDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'deleteRumMetricsDestination', 'RUM', Promise.reject(result), true, mock)
  },
  getAppMonitor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'getAppMonitor', 'RUM', Promise.resolve(result), true, mock)
  },
  getAppMonitorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'getAppMonitor', 'RUM', Promise.resolve(result), false, mock)
  },
  getAppMonitorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'getAppMonitor', 'RUM', Promise.reject(result), true, mock)
  },
  getAppMonitorData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'getAppMonitorData', 'RUM', Promise.resolve(result), true, mock)
  },
  getAppMonitorDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'getAppMonitorData', 'RUM', Promise.resolve(result), false, mock)
  },
  getAppMonitorDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'getAppMonitorData', 'RUM', Promise.reject(result), true, mock)
  },
  listAppMonitors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'listAppMonitors', 'RUM', Promise.resolve(result), true, mock)
  },
  listAppMonitorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'listAppMonitors', 'RUM', Promise.resolve(result), false, mock)
  },
  listAppMonitorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'listAppMonitors', 'RUM', Promise.reject(result), true, mock)
  },
  listRumMetricsDestinations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'listRumMetricsDestinations', 'RUM', Promise.resolve(result), true, mock)
  },
  listRumMetricsDestinationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'listRumMetricsDestinations', 'RUM', Promise.resolve(result), false, mock)
  },
  listRumMetricsDestinationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'listRumMetricsDestinations', 'RUM', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'listTagsForResource', 'RUM', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'listTagsForResource', 'RUM', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'listTagsForResource', 'RUM', Promise.reject(result), true, mock)
  },
  putRumEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'putRumEvents', 'RUM', Promise.resolve(result), true, mock)
  },
  putRumEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'putRumEvents', 'RUM', Promise.resolve(result), false, mock)
  },
  putRumEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'putRumEvents', 'RUM', Promise.reject(result), true, mock)
  },
  putRumMetricsDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'putRumMetricsDestination', 'RUM', Promise.resolve(result), true, mock)
  },
  putRumMetricsDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'putRumMetricsDestination', 'RUM', Promise.resolve(result), false, mock)
  },
  putRumMetricsDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'putRumMetricsDestination', 'RUM', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'tagResource', 'RUM', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'tagResource', 'RUM', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'tagResource', 'RUM', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'untagResource', 'RUM', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'untagResource', 'RUM', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'untagResource', 'RUM', Promise.reject(result), true, mock)
  },
  updateAppMonitor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'updateAppMonitor', 'RUM', Promise.resolve(result), true, mock)
  },
  updateAppMonitorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'updateAppMonitor', 'RUM', Promise.resolve(result), false, mock)
  },
  updateAppMonitorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'updateAppMonitor', 'RUM', Promise.reject(result), true, mock)
  },
  updateRumMetricDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'updateRumMetricDefinition', 'RUM', Promise.resolve(result), true, mock)
  },
  updateRumMetricDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'updateRumMetricDefinition', 'RUM', Promise.resolve(result), false, mock)
  },
  updateRumMetricDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'updateRumMetricDefinition', 'RUM', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'send', 'RUMClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'send', 'RUMClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rum', 'send', 'RUMClient', Promise.reject(result), true, mock)
  }
}
