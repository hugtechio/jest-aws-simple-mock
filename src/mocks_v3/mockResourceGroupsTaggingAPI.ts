
/**
* @description mocks_v3:mockResourceGroupsTaggingAPI module is mocks for AWS-SDK V3
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

  export const mockResourceGroupsTaggingAPI = {
  describeReportCreation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'describeReportCreation', 'ResourceGroupsTaggingAPI', Promise.resolve(result), true, mock)
  },
  describeReportCreationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'describeReportCreation', 'ResourceGroupsTaggingAPI', Promise.resolve(result), false, mock)
  },
  describeReportCreationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'describeReportCreation', 'ResourceGroupsTaggingAPI', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'destroy', 'ResourceGroupsTaggingAPI', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'destroy', 'ResourceGroupsTaggingAPI', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'destroy', 'ResourceGroupsTaggingAPI', Promise.reject(result), true, mock)
  },
  getComplianceSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'getComplianceSummary', 'ResourceGroupsTaggingAPI', Promise.resolve(result), true, mock)
  },
  getComplianceSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'getComplianceSummary', 'ResourceGroupsTaggingAPI', Promise.resolve(result), false, mock)
  },
  getComplianceSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'getComplianceSummary', 'ResourceGroupsTaggingAPI', Promise.reject(result), true, mock)
  },
  getResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'getResources', 'ResourceGroupsTaggingAPI', Promise.resolve(result), true, mock)
  },
  getResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'getResources', 'ResourceGroupsTaggingAPI', Promise.resolve(result), false, mock)
  },
  getResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'getResources', 'ResourceGroupsTaggingAPI', Promise.reject(result), true, mock)
  },
  getTagKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'getTagKeys', 'ResourceGroupsTaggingAPI', Promise.resolve(result), true, mock)
  },
  getTagKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'getTagKeys', 'ResourceGroupsTaggingAPI', Promise.resolve(result), false, mock)
  },
  getTagKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'getTagKeys', 'ResourceGroupsTaggingAPI', Promise.reject(result), true, mock)
  },
  getTagValues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'getTagValues', 'ResourceGroupsTaggingAPI', Promise.resolve(result), true, mock)
  },
  getTagValuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'getTagValues', 'ResourceGroupsTaggingAPI', Promise.resolve(result), false, mock)
  },
  getTagValuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'getTagValues', 'ResourceGroupsTaggingAPI', Promise.reject(result), true, mock)
  },
  startReportCreation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'startReportCreation', 'ResourceGroupsTaggingAPI', Promise.resolve(result), true, mock)
  },
  startReportCreationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'startReportCreation', 'ResourceGroupsTaggingAPI', Promise.resolve(result), false, mock)
  },
  startReportCreationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'startReportCreation', 'ResourceGroupsTaggingAPI', Promise.reject(result), true, mock)
  },
  tagResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'tagResources', 'ResourceGroupsTaggingAPI', Promise.resolve(result), true, mock)
  },
  tagResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'tagResources', 'ResourceGroupsTaggingAPI', Promise.resolve(result), false, mock)
  },
  tagResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'tagResources', 'ResourceGroupsTaggingAPI', Promise.reject(result), true, mock)
  },
  untagResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'untagResources', 'ResourceGroupsTaggingAPI', Promise.resolve(result), true, mock)
  },
  untagResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'untagResources', 'ResourceGroupsTaggingAPI', Promise.resolve(result), false, mock)
  },
  untagResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'untagResources', 'ResourceGroupsTaggingAPI', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'send', 'ResourceGroupsTaggingAPIClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'send', 'ResourceGroupsTaggingAPIClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resource-groups-tagging-api', 'send', 'ResourceGroupsTaggingAPIClient', Promise.reject(result), true, mock)
  }
}