
function attachMock(method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require('aws-sdk')
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(currentVersion(awsSdkObject.services).prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  
const currentVersion = (services: any): any => {
  const keys = Object.keys(services);
  let service = null;
  keys.forEach(versionStr => {
    if (
      services.hasOwnProperty(versionStr) &&
      services[versionStr] !== null &&
      services[versionStr] !== undefined
    ) {
      service = services[versionStr];
      return;
    }
  });

  return service;
};
  export const mockCostAndUsageReportService = {
  deleteReportDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReportDefinition', 'CostAndUsageReportService', Promise.resolve(result), true, mock)
  },
  deleteReportDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReportDefinition', 'CostAndUsageReportService', Promise.resolve(result), false, mock)
  },
  deleteReportDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReportDefinition', 'CostAndUsageReportService', Promise.reject(result), true, mock)
  },
  describeReportDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReportDefinitions', 'CostAndUsageReportService', Promise.resolve(result), true, mock)
  },
  describeReportDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReportDefinitions', 'CostAndUsageReportService', Promise.resolve(result), false, mock)
  },
  describeReportDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReportDefinitions', 'CostAndUsageReportService', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CostAndUsageReportService', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CostAndUsageReportService', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CostAndUsageReportService', Promise.reject(result), true, mock)
  },
  modifyReportDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyReportDefinition', 'CostAndUsageReportService', Promise.resolve(result), true, mock)
  },
  modifyReportDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyReportDefinition', 'CostAndUsageReportService', Promise.resolve(result), false, mock)
  },
  modifyReportDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyReportDefinition', 'CostAndUsageReportService', Promise.reject(result), true, mock)
  },
  putReportDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putReportDefinition', 'CostAndUsageReportService', Promise.resolve(result), true, mock)
  },
  putReportDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putReportDefinition', 'CostAndUsageReportService', Promise.resolve(result), false, mock)
  },
  putReportDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putReportDefinition', 'CostAndUsageReportService', Promise.reject(result), true, mock)
  },
}
