
/**
* @description mocks_v3:mockApplicationCostProfiler module is mocks for AWS-SDK V3
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

  export const mockApplicationCostProfiler = {
  deleteReportDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'deleteReportDefinition', 'ApplicationCostProfiler', Promise.resolve(result), true, mock)
  },
  deleteReportDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'deleteReportDefinition', 'ApplicationCostProfiler', Promise.resolve(result), false, mock)
  },
  deleteReportDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'deleteReportDefinition', 'ApplicationCostProfiler', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'destroy', 'ApplicationCostProfiler', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'destroy', 'ApplicationCostProfiler', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'destroy', 'ApplicationCostProfiler', Promise.reject(result), true, mock)
  },
  getReportDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'getReportDefinition', 'ApplicationCostProfiler', Promise.resolve(result), true, mock)
  },
  getReportDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'getReportDefinition', 'ApplicationCostProfiler', Promise.resolve(result), false, mock)
  },
  getReportDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'getReportDefinition', 'ApplicationCostProfiler', Promise.reject(result), true, mock)
  },
  importApplicationUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'importApplicationUsage', 'ApplicationCostProfiler', Promise.resolve(result), true, mock)
  },
  importApplicationUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'importApplicationUsage', 'ApplicationCostProfiler', Promise.resolve(result), false, mock)
  },
  importApplicationUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'importApplicationUsage', 'ApplicationCostProfiler', Promise.reject(result), true, mock)
  },
  listReportDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'listReportDefinitions', 'ApplicationCostProfiler', Promise.resolve(result), true, mock)
  },
  listReportDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'listReportDefinitions', 'ApplicationCostProfiler', Promise.resolve(result), false, mock)
  },
  listReportDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'listReportDefinitions', 'ApplicationCostProfiler', Promise.reject(result), true, mock)
  },
  putReportDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'putReportDefinition', 'ApplicationCostProfiler', Promise.resolve(result), true, mock)
  },
  putReportDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'putReportDefinition', 'ApplicationCostProfiler', Promise.resolve(result), false, mock)
  },
  putReportDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'putReportDefinition', 'ApplicationCostProfiler', Promise.reject(result), true, mock)
  },
  updateReportDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'updateReportDefinition', 'ApplicationCostProfiler', Promise.resolve(result), true, mock)
  },
  updateReportDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'updateReportDefinition', 'ApplicationCostProfiler', Promise.resolve(result), false, mock)
  },
  updateReportDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'updateReportDefinition', 'ApplicationCostProfiler', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'send', 'ApplicationCostProfilerClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'send', 'ApplicationCostProfilerClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-applicationcostprofiler', 'send', 'ApplicationCostProfilerClient', Promise.reject(result), true, mock)
  }
}