
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
  export const mockApplicationCostProfiler = {
  deleteReportDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReportDefinition', 'ApplicationCostProfiler', Promise.resolve(result), true, mock)
  },
  deleteReportDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReportDefinition', 'ApplicationCostProfiler', Promise.resolve(result), false, mock)
  },
  deleteReportDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReportDefinition', 'ApplicationCostProfiler', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ApplicationCostProfiler', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ApplicationCostProfiler', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ApplicationCostProfiler', Promise.reject(result), true, mock)
  },
  getReportDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReportDefinition', 'ApplicationCostProfiler', Promise.resolve(result), true, mock)
  },
  getReportDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReportDefinition', 'ApplicationCostProfiler', Promise.resolve(result), false, mock)
  },
  getReportDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReportDefinition', 'ApplicationCostProfiler', Promise.reject(result), true, mock)
  },
  importApplicationUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importApplicationUsage', 'ApplicationCostProfiler', Promise.resolve(result), true, mock)
  },
  importApplicationUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importApplicationUsage', 'ApplicationCostProfiler', Promise.resolve(result), false, mock)
  },
  importApplicationUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importApplicationUsage', 'ApplicationCostProfiler', Promise.reject(result), true, mock)
  },
  listReportDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReportDefinitions', 'ApplicationCostProfiler', Promise.resolve(result), true, mock)
  },
  listReportDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReportDefinitions', 'ApplicationCostProfiler', Promise.resolve(result), false, mock)
  },
  listReportDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReportDefinitions', 'ApplicationCostProfiler', Promise.reject(result), true, mock)
  },
  putReportDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putReportDefinition', 'ApplicationCostProfiler', Promise.resolve(result), true, mock)
  },
  putReportDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putReportDefinition', 'ApplicationCostProfiler', Promise.resolve(result), false, mock)
  },
  putReportDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putReportDefinition', 'ApplicationCostProfiler', Promise.reject(result), true, mock)
  },
  updateReportDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReportDefinition', 'ApplicationCostProfiler', Promise.resolve(result), true, mock)
  },
  updateReportDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReportDefinition', 'ApplicationCostProfiler', Promise.resolve(result), false, mock)
  },
  updateReportDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReportDefinition', 'ApplicationCostProfiler', Promise.reject(result), true, mock)
  },
}
