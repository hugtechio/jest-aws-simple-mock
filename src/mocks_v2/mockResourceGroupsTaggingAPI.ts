
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
  export const mockResourceGroupsTaggingAPI = {
  describeReportCreation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReportCreation', 'ResourceGroupsTaggingAPI', Promise.resolve(result), true, mock)
  },
  describeReportCreationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReportCreation', 'ResourceGroupsTaggingAPI', Promise.resolve(result), false, mock)
  },
  describeReportCreationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReportCreation', 'ResourceGroupsTaggingAPI', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ResourceGroupsTaggingAPI', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ResourceGroupsTaggingAPI', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ResourceGroupsTaggingAPI', Promise.reject(result), true, mock)
  },
  getComplianceSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComplianceSummary', 'ResourceGroupsTaggingAPI', Promise.resolve(result), true, mock)
  },
  getComplianceSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComplianceSummary', 'ResourceGroupsTaggingAPI', Promise.resolve(result), false, mock)
  },
  getComplianceSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComplianceSummary', 'ResourceGroupsTaggingAPI', Promise.reject(result), true, mock)
  },
  getResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResources', 'ResourceGroupsTaggingAPI', Promise.resolve(result), true, mock)
  },
  getResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResources', 'ResourceGroupsTaggingAPI', Promise.resolve(result), false, mock)
  },
  getResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResources', 'ResourceGroupsTaggingAPI', Promise.reject(result), true, mock)
  },
  getTagKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTagKeys', 'ResourceGroupsTaggingAPI', Promise.resolve(result), true, mock)
  },
  getTagKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTagKeys', 'ResourceGroupsTaggingAPI', Promise.resolve(result), false, mock)
  },
  getTagKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTagKeys', 'ResourceGroupsTaggingAPI', Promise.reject(result), true, mock)
  },
  getTagValues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTagValues', 'ResourceGroupsTaggingAPI', Promise.resolve(result), true, mock)
  },
  getTagValuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTagValues', 'ResourceGroupsTaggingAPI', Promise.resolve(result), false, mock)
  },
  getTagValuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTagValues', 'ResourceGroupsTaggingAPI', Promise.reject(result), true, mock)
  },
  startReportCreation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startReportCreation', 'ResourceGroupsTaggingAPI', Promise.resolve(result), true, mock)
  },
  startReportCreationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startReportCreation', 'ResourceGroupsTaggingAPI', Promise.resolve(result), false, mock)
  },
  startReportCreationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startReportCreation', 'ResourceGroupsTaggingAPI', Promise.reject(result), true, mock)
  },
  tagResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResources', 'ResourceGroupsTaggingAPI', Promise.resolve(result), true, mock)
  },
  tagResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResources', 'ResourceGroupsTaggingAPI', Promise.resolve(result), false, mock)
  },
  tagResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResources', 'ResourceGroupsTaggingAPI', Promise.reject(result), true, mock)
  },
  untagResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResources', 'ResourceGroupsTaggingAPI', Promise.resolve(result), true, mock)
  },
  untagResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResources', 'ResourceGroupsTaggingAPI', Promise.resolve(result), false, mock)
  },
  untagResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResources', 'ResourceGroupsTaggingAPI', Promise.reject(result), true, mock)
  },
}
