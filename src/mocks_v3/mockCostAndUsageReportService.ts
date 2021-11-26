
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
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'destroy', 'CostAndUsageReportService', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'destroy', 'CostAndUsageReportService', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-and-usage-report-service', 'destroy', 'CostAndUsageReportService', Promise.reject(result), true, mock)
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