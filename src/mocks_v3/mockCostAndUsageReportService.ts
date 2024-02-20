
/**
* @description mocks_v3:mockCostAndUsageReportService module is mocks for AWS-SDK V3
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
export const mockCostAndUsageReportService = {
  deleteReportDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'deleteReportDefinition', 'CostAndUsageReportService', Promise.resolve(result), true, mock)
  },
  deleteReportDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'deleteReportDefinition', 'CostAndUsageReportService', Promise.resolve(result), false, mock)
  },
  deleteReportDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'deleteReportDefinition', 'CostAndUsageReportService', Promise.reject(result), true, mock)
  },
  describeReportDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'describeReportDefinitions', 'CostAndUsageReportService', Promise.resolve(result), true, mock)
  },
  describeReportDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'describeReportDefinitions', 'CostAndUsageReportService', Promise.resolve(result), false, mock)
  },
  describeReportDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'describeReportDefinitions', 'CostAndUsageReportService', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'listTagsForResource', 'CostAndUsageReportService', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'listTagsForResource', 'CostAndUsageReportService', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'listTagsForResource', 'CostAndUsageReportService', Promise.reject(result), true, mock)
  },
  modifyReportDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'modifyReportDefinition', 'CostAndUsageReportService', Promise.resolve(result), true, mock)
  },
  modifyReportDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'modifyReportDefinition', 'CostAndUsageReportService', Promise.resolve(result), false, mock)
  },
  modifyReportDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'modifyReportDefinition', 'CostAndUsageReportService', Promise.reject(result), true, mock)
  },
  putReportDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'putReportDefinition', 'CostAndUsageReportService', Promise.resolve(result), true, mock)
  },
  putReportDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'putReportDefinition', 'CostAndUsageReportService', Promise.resolve(result), false, mock)
  },
  putReportDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'putReportDefinition', 'CostAndUsageReportService', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'tagResource', 'CostAndUsageReportService', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'tagResource', 'CostAndUsageReportService', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'tagResource', 'CostAndUsageReportService', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'untagResource', 'CostAndUsageReportService', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'untagResource', 'CostAndUsageReportService', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'untagResource', 'CostAndUsageReportService', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'send', 'CostAndUsageReportServiceClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'send', 'CostAndUsageReportServiceClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'send', 'CostAndUsageReportServiceClient', Promise.reject(result), true, mock)
  }
}
