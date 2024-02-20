
/**
* @description mocks_v3:mockPI module is mocks for AWS-SDK V3
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
export const mockPI = {
  createPerformanceAnalysisReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'createPerformanceAnalysisReport', 'PI', Promise.resolve(result), true, mock)
  },
  createPerformanceAnalysisReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'createPerformanceAnalysisReport', 'PI', Promise.resolve(result), false, mock)
  },
  createPerformanceAnalysisReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'createPerformanceAnalysisReport', 'PI', Promise.reject(result), true, mock)
  },
  deletePerformanceAnalysisReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'deletePerformanceAnalysisReport', 'PI', Promise.resolve(result), true, mock)
  },
  deletePerformanceAnalysisReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'deletePerformanceAnalysisReport', 'PI', Promise.resolve(result), false, mock)
  },
  deletePerformanceAnalysisReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'deletePerformanceAnalysisReport', 'PI', Promise.reject(result), true, mock)
  },
  describeDimensionKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'describeDimensionKeys', 'PI', Promise.resolve(result), true, mock)
  },
  describeDimensionKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'describeDimensionKeys', 'PI', Promise.resolve(result), false, mock)
  },
  describeDimensionKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'describeDimensionKeys', 'PI', Promise.reject(result), true, mock)
  },
  getDimensionKeyDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'getDimensionKeyDetails', 'PI', Promise.resolve(result), true, mock)
  },
  getDimensionKeyDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'getDimensionKeyDetails', 'PI', Promise.resolve(result), false, mock)
  },
  getDimensionKeyDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'getDimensionKeyDetails', 'PI', Promise.reject(result), true, mock)
  },
  getPerformanceAnalysisReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'getPerformanceAnalysisReport', 'PI', Promise.resolve(result), true, mock)
  },
  getPerformanceAnalysisReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'getPerformanceAnalysisReport', 'PI', Promise.resolve(result), false, mock)
  },
  getPerformanceAnalysisReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'getPerformanceAnalysisReport', 'PI', Promise.reject(result), true, mock)
  },
  getResourceMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'getResourceMetadata', 'PI', Promise.resolve(result), true, mock)
  },
  getResourceMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'getResourceMetadata', 'PI', Promise.resolve(result), false, mock)
  },
  getResourceMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'getResourceMetadata', 'PI', Promise.reject(result), true, mock)
  },
  getResourceMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'getResourceMetrics', 'PI', Promise.resolve(result), true, mock)
  },
  getResourceMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'getResourceMetrics', 'PI', Promise.resolve(result), false, mock)
  },
  getResourceMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'getResourceMetrics', 'PI', Promise.reject(result), true, mock)
  },
  listAvailableResourceDimensions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'listAvailableResourceDimensions', 'PI', Promise.resolve(result), true, mock)
  },
  listAvailableResourceDimensionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'listAvailableResourceDimensions', 'PI', Promise.resolve(result), false, mock)
  },
  listAvailableResourceDimensionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'listAvailableResourceDimensions', 'PI', Promise.reject(result), true, mock)
  },
  listAvailableResourceMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'listAvailableResourceMetrics', 'PI', Promise.resolve(result), true, mock)
  },
  listAvailableResourceMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'listAvailableResourceMetrics', 'PI', Promise.resolve(result), false, mock)
  },
  listAvailableResourceMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'listAvailableResourceMetrics', 'PI', Promise.reject(result), true, mock)
  },
  listPerformanceAnalysisReports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'listPerformanceAnalysisReports', 'PI', Promise.resolve(result), true, mock)
  },
  listPerformanceAnalysisReportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'listPerformanceAnalysisReports', 'PI', Promise.resolve(result), false, mock)
  },
  listPerformanceAnalysisReportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'listPerformanceAnalysisReports', 'PI', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'listTagsForResource', 'PI', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'listTagsForResource', 'PI', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'listTagsForResource', 'PI', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'tagResource', 'PI', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'tagResource', 'PI', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'tagResource', 'PI', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'untagResource', 'PI', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'untagResource', 'PI', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'untagResource', 'PI', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'send', 'PIClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'send', 'PIClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-pi', 'send', 'PIClient', Promise.reject(result), true, mock)
  }
}
