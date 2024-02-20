
/**
* @description mocks_v3:mockCodeGuruSecurity module is mocks for AWS-SDK V3
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
export const mockCodeGuruSecurity = {
  batchGetFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'batchGetFindings', 'CodeGuruSecurity', Promise.resolve(result), true, mock)
  },
  batchGetFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'batchGetFindings', 'CodeGuruSecurity', Promise.resolve(result), false, mock)
  },
  batchGetFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'batchGetFindings', 'CodeGuruSecurity', Promise.reject(result), true, mock)
  },
  createScan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'createScan', 'CodeGuruSecurity', Promise.resolve(result), true, mock)
  },
  createScanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'createScan', 'CodeGuruSecurity', Promise.resolve(result), false, mock)
  },
  createScanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'createScan', 'CodeGuruSecurity', Promise.reject(result), true, mock)
  },
  createUploadUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'createUploadUrl', 'CodeGuruSecurity', Promise.resolve(result), true, mock)
  },
  createUploadUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'createUploadUrl', 'CodeGuruSecurity', Promise.resolve(result), false, mock)
  },
  createUploadUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'createUploadUrl', 'CodeGuruSecurity', Promise.reject(result), true, mock)
  },
  getAccountConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'getAccountConfiguration', 'CodeGuruSecurity', Promise.resolve(result), true, mock)
  },
  getAccountConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'getAccountConfiguration', 'CodeGuruSecurity', Promise.resolve(result), false, mock)
  },
  getAccountConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'getAccountConfiguration', 'CodeGuruSecurity', Promise.reject(result), true, mock)
  },
  getFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'getFindings', 'CodeGuruSecurity', Promise.resolve(result), true, mock)
  },
  getFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'getFindings', 'CodeGuruSecurity', Promise.resolve(result), false, mock)
  },
  getFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'getFindings', 'CodeGuruSecurity', Promise.reject(result), true, mock)
  },
  getMetricsSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'getMetricsSummary', 'CodeGuruSecurity', Promise.resolve(result), true, mock)
  },
  getMetricsSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'getMetricsSummary', 'CodeGuruSecurity', Promise.resolve(result), false, mock)
  },
  getMetricsSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'getMetricsSummary', 'CodeGuruSecurity', Promise.reject(result), true, mock)
  },
  getScan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'getScan', 'CodeGuruSecurity', Promise.resolve(result), true, mock)
  },
  getScanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'getScan', 'CodeGuruSecurity', Promise.resolve(result), false, mock)
  },
  getScanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'getScan', 'CodeGuruSecurity', Promise.reject(result), true, mock)
  },
  listFindingsMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'listFindingsMetrics', 'CodeGuruSecurity', Promise.resolve(result), true, mock)
  },
  listFindingsMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'listFindingsMetrics', 'CodeGuruSecurity', Promise.resolve(result), false, mock)
  },
  listFindingsMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'listFindingsMetrics', 'CodeGuruSecurity', Promise.reject(result), true, mock)
  },
  listScans: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'listScans', 'CodeGuruSecurity', Promise.resolve(result), true, mock)
  },
  listScansAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'listScans', 'CodeGuruSecurity', Promise.resolve(result), false, mock)
  },
  listScansThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'listScans', 'CodeGuruSecurity', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'listTagsForResource', 'CodeGuruSecurity', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'listTagsForResource', 'CodeGuruSecurity', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'listTagsForResource', 'CodeGuruSecurity', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'tagResource', 'CodeGuruSecurity', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'tagResource', 'CodeGuruSecurity', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'tagResource', 'CodeGuruSecurity', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'untagResource', 'CodeGuruSecurity', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'untagResource', 'CodeGuruSecurity', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'untagResource', 'CodeGuruSecurity', Promise.reject(result), true, mock)
  },
  updateAccountConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'updateAccountConfiguration', 'CodeGuruSecurity', Promise.resolve(result), true, mock)
  },
  updateAccountConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'updateAccountConfiguration', 'CodeGuruSecurity', Promise.resolve(result), false, mock)
  },
  updateAccountConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'updateAccountConfiguration', 'CodeGuruSecurity', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'send', 'CodeGuruSecurityClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'send', 'CodeGuruSecurityClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-security', 'send', 'CodeGuruSecurityClient', Promise.reject(result), true, mock)
  }
}
