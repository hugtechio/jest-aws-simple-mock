
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
  export const mockIotDeviceAdvisor = {
  createSuiteDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSuiteDefinition', 'IotDeviceAdvisor', Promise.resolve(result), true, mock)
  },
  createSuiteDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSuiteDefinition', 'IotDeviceAdvisor', Promise.resolve(result), false, mock)
  },
  createSuiteDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSuiteDefinition', 'IotDeviceAdvisor', Promise.reject(result), true, mock)
  },
  deleteSuiteDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSuiteDefinition', 'IotDeviceAdvisor', Promise.resolve(result), true, mock)
  },
  deleteSuiteDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSuiteDefinition', 'IotDeviceAdvisor', Promise.resolve(result), false, mock)
  },
  deleteSuiteDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSuiteDefinition', 'IotDeviceAdvisor', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IotDeviceAdvisor', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IotDeviceAdvisor', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IotDeviceAdvisor', Promise.reject(result), true, mock)
  },
  getSuiteDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSuiteDefinition', 'IotDeviceAdvisor', Promise.resolve(result), true, mock)
  },
  getSuiteDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSuiteDefinition', 'IotDeviceAdvisor', Promise.resolve(result), false, mock)
  },
  getSuiteDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSuiteDefinition', 'IotDeviceAdvisor', Promise.reject(result), true, mock)
  },
  getSuiteRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSuiteRun', 'IotDeviceAdvisor', Promise.resolve(result), true, mock)
  },
  getSuiteRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSuiteRun', 'IotDeviceAdvisor', Promise.resolve(result), false, mock)
  },
  getSuiteRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSuiteRun', 'IotDeviceAdvisor', Promise.reject(result), true, mock)
  },
  getSuiteRunReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSuiteRunReport', 'IotDeviceAdvisor', Promise.resolve(result), true, mock)
  },
  getSuiteRunReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSuiteRunReport', 'IotDeviceAdvisor', Promise.resolve(result), false, mock)
  },
  getSuiteRunReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSuiteRunReport', 'IotDeviceAdvisor', Promise.reject(result), true, mock)
  },
  listSuiteDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSuiteDefinitions', 'IotDeviceAdvisor', Promise.resolve(result), true, mock)
  },
  listSuiteDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSuiteDefinitions', 'IotDeviceAdvisor', Promise.resolve(result), false, mock)
  },
  listSuiteDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSuiteDefinitions', 'IotDeviceAdvisor', Promise.reject(result), true, mock)
  },
  listSuiteRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSuiteRuns', 'IotDeviceAdvisor', Promise.resolve(result), true, mock)
  },
  listSuiteRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSuiteRuns', 'IotDeviceAdvisor', Promise.resolve(result), false, mock)
  },
  listSuiteRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSuiteRuns', 'IotDeviceAdvisor', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IotDeviceAdvisor', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IotDeviceAdvisor', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'IotDeviceAdvisor', Promise.reject(result), true, mock)
  },
  startSuiteRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSuiteRun', 'IotDeviceAdvisor', Promise.resolve(result), true, mock)
  },
  startSuiteRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSuiteRun', 'IotDeviceAdvisor', Promise.resolve(result), false, mock)
  },
  startSuiteRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSuiteRun', 'IotDeviceAdvisor', Promise.reject(result), true, mock)
  },
  stopSuiteRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopSuiteRun', 'IotDeviceAdvisor', Promise.resolve(result), true, mock)
  },
  stopSuiteRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopSuiteRun', 'IotDeviceAdvisor', Promise.resolve(result), false, mock)
  },
  stopSuiteRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopSuiteRun', 'IotDeviceAdvisor', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IotDeviceAdvisor', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IotDeviceAdvisor', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'IotDeviceAdvisor', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IotDeviceAdvisor', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IotDeviceAdvisor', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'IotDeviceAdvisor', Promise.reject(result), true, mock)
  },
  updateSuiteDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSuiteDefinition', 'IotDeviceAdvisor', Promise.resolve(result), true, mock)
  },
  updateSuiteDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSuiteDefinition', 'IotDeviceAdvisor', Promise.resolve(result), false, mock)
  },
  updateSuiteDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSuiteDefinition', 'IotDeviceAdvisor', Promise.reject(result), true, mock)
  },
}
