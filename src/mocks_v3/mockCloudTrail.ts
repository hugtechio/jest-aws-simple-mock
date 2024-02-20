
/**
* @description mocks_v3:mockCloudTrail module is mocks for AWS-SDK V3
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
export const mockCloudTrail = {
  addTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'addTags', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  addTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'addTags', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  addTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'addTags', 'CloudTrail', Promise.reject(result), true, mock)
  },
  cancelQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'cancelQuery', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  cancelQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'cancelQuery', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  cancelQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'cancelQuery', 'CloudTrail', Promise.reject(result), true, mock)
  },
  createChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'createChannel', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  createChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'createChannel', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  createChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'createChannel', 'CloudTrail', Promise.reject(result), true, mock)
  },
  createEventDataStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'createEventDataStore', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  createEventDataStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'createEventDataStore', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  createEventDataStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'createEventDataStore', 'CloudTrail', Promise.reject(result), true, mock)
  },
  createTrail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'createTrail', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  createTrailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'createTrail', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  createTrailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'createTrail', 'CloudTrail', Promise.reject(result), true, mock)
  },
  deleteChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'deleteChannel', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  deleteChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'deleteChannel', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  deleteChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'deleteChannel', 'CloudTrail', Promise.reject(result), true, mock)
  },
  deleteEventDataStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'deleteEventDataStore', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  deleteEventDataStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'deleteEventDataStore', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  deleteEventDataStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'deleteEventDataStore', 'CloudTrail', Promise.reject(result), true, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'deleteResourcePolicy', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'deleteResourcePolicy', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'deleteResourcePolicy', 'CloudTrail', Promise.reject(result), true, mock)
  },
  deleteTrail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'deleteTrail', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  deleteTrailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'deleteTrail', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  deleteTrailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'deleteTrail', 'CloudTrail', Promise.reject(result), true, mock)
  },
  deregisterOrganizationDelegatedAdmin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'deregisterOrganizationDelegatedAdmin', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  deregisterOrganizationDelegatedAdminAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'deregisterOrganizationDelegatedAdmin', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  deregisterOrganizationDelegatedAdminThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'deregisterOrganizationDelegatedAdmin', 'CloudTrail', Promise.reject(result), true, mock)
  },
  describeQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'describeQuery', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  describeQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'describeQuery', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  describeQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'describeQuery', 'CloudTrail', Promise.reject(result), true, mock)
  },
  describeTrails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'describeTrails', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  describeTrailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'describeTrails', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  describeTrailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'describeTrails', 'CloudTrail', Promise.reject(result), true, mock)
  },
  disableFederation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'disableFederation', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  disableFederationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'disableFederation', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  disableFederationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'disableFederation', 'CloudTrail', Promise.reject(result), true, mock)
  },
  enableFederation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'enableFederation', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  enableFederationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'enableFederation', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  enableFederationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'enableFederation', 'CloudTrail', Promise.reject(result), true, mock)
  },
  getChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getChannel', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  getChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getChannel', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  getChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getChannel', 'CloudTrail', Promise.reject(result), true, mock)
  },
  getEventDataStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getEventDataStore', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  getEventDataStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getEventDataStore', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  getEventDataStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getEventDataStore', 'CloudTrail', Promise.reject(result), true, mock)
  },
  getEventSelectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getEventSelectors', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  getEventSelectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getEventSelectors', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  getEventSelectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getEventSelectors', 'CloudTrail', Promise.reject(result), true, mock)
  },
  getImport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getImport', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  getImportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getImport', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  getImportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getImport', 'CloudTrail', Promise.reject(result), true, mock)
  },
  getInsightSelectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getInsightSelectors', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  getInsightSelectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getInsightSelectors', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  getInsightSelectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getInsightSelectors', 'CloudTrail', Promise.reject(result), true, mock)
  },
  getQueryResults: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getQueryResults', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  getQueryResultsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getQueryResults', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  getQueryResultsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getQueryResults', 'CloudTrail', Promise.reject(result), true, mock)
  },
  getResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getResourcePolicy', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  getResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getResourcePolicy', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  getResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getResourcePolicy', 'CloudTrail', Promise.reject(result), true, mock)
  },
  getTrail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getTrail', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  getTrailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getTrail', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  getTrailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getTrail', 'CloudTrail', Promise.reject(result), true, mock)
  },
  getTrailStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getTrailStatus', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  getTrailStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getTrailStatus', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  getTrailStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getTrailStatus', 'CloudTrail', Promise.reject(result), true, mock)
  },
  listChannels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listChannels', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  listChannelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listChannels', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  listChannelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listChannels', 'CloudTrail', Promise.reject(result), true, mock)
  },
  listEventDataStores: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listEventDataStores', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  listEventDataStoresAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listEventDataStores', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  listEventDataStoresThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listEventDataStores', 'CloudTrail', Promise.reject(result), true, mock)
  },
  listImportFailures: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listImportFailures', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  listImportFailuresAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listImportFailures', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  listImportFailuresThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listImportFailures', 'CloudTrail', Promise.reject(result), true, mock)
  },
  listImports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listImports', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  listImportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listImports', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  listImportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listImports', 'CloudTrail', Promise.reject(result), true, mock)
  },
  listInsightsMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listInsightsMetricData', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  listInsightsMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listInsightsMetricData', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  listInsightsMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listInsightsMetricData', 'CloudTrail', Promise.reject(result), true, mock)
  },
  listPublicKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listPublicKeys', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  listPublicKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listPublicKeys', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  listPublicKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listPublicKeys', 'CloudTrail', Promise.reject(result), true, mock)
  },
  listQueries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listQueries', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  listQueriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listQueries', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  listQueriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listQueries', 'CloudTrail', Promise.reject(result), true, mock)
  },
  listTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listTags', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  listTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listTags', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  listTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listTags', 'CloudTrail', Promise.reject(result), true, mock)
  },
  listTrails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listTrails', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  listTrailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listTrails', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  listTrailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listTrails', 'CloudTrail', Promise.reject(result), true, mock)
  },
  lookupEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'lookupEvents', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  lookupEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'lookupEvents', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  lookupEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'lookupEvents', 'CloudTrail', Promise.reject(result), true, mock)
  },
  putEventSelectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'putEventSelectors', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  putEventSelectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'putEventSelectors', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  putEventSelectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'putEventSelectors', 'CloudTrail', Promise.reject(result), true, mock)
  },
  putInsightSelectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'putInsightSelectors', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  putInsightSelectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'putInsightSelectors', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  putInsightSelectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'putInsightSelectors', 'CloudTrail', Promise.reject(result), true, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'putResourcePolicy', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'putResourcePolicy', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'putResourcePolicy', 'CloudTrail', Promise.reject(result), true, mock)
  },
  registerOrganizationDelegatedAdmin: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'registerOrganizationDelegatedAdmin', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  registerOrganizationDelegatedAdminAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'registerOrganizationDelegatedAdmin', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  registerOrganizationDelegatedAdminThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'registerOrganizationDelegatedAdmin', 'CloudTrail', Promise.reject(result), true, mock)
  },
  removeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'removeTags', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  removeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'removeTags', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  removeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'removeTags', 'CloudTrail', Promise.reject(result), true, mock)
  },
  restoreEventDataStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'restoreEventDataStore', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  restoreEventDataStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'restoreEventDataStore', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  restoreEventDataStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'restoreEventDataStore', 'CloudTrail', Promise.reject(result), true, mock)
  },
  startEventDataStoreIngestion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'startEventDataStoreIngestion', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  startEventDataStoreIngestionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'startEventDataStoreIngestion', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  startEventDataStoreIngestionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'startEventDataStoreIngestion', 'CloudTrail', Promise.reject(result), true, mock)
  },
  startImport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'startImport', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  startImportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'startImport', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  startImportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'startImport', 'CloudTrail', Promise.reject(result), true, mock)
  },
  startLogging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'startLogging', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  startLoggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'startLogging', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  startLoggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'startLogging', 'CloudTrail', Promise.reject(result), true, mock)
  },
  startQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'startQuery', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  startQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'startQuery', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  startQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'startQuery', 'CloudTrail', Promise.reject(result), true, mock)
  },
  stopEventDataStoreIngestion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'stopEventDataStoreIngestion', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  stopEventDataStoreIngestionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'stopEventDataStoreIngestion', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  stopEventDataStoreIngestionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'stopEventDataStoreIngestion', 'CloudTrail', Promise.reject(result), true, mock)
  },
  stopImport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'stopImport', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  stopImportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'stopImport', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  stopImportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'stopImport', 'CloudTrail', Promise.reject(result), true, mock)
  },
  stopLogging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'stopLogging', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  stopLoggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'stopLogging', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  stopLoggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'stopLogging', 'CloudTrail', Promise.reject(result), true, mock)
  },
  updateChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'updateChannel', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  updateChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'updateChannel', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  updateChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'updateChannel', 'CloudTrail', Promise.reject(result), true, mock)
  },
  updateEventDataStore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'updateEventDataStore', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  updateEventDataStoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'updateEventDataStore', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  updateEventDataStoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'updateEventDataStore', 'CloudTrail', Promise.reject(result), true, mock)
  },
  updateTrail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'updateTrail', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  updateTrailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'updateTrail', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  updateTrailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'updateTrail', 'CloudTrail', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'send', 'CloudTrailClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'send', 'CloudTrailClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'send', 'CloudTrailClient', Promise.reject(result), true, mock)
  }
}
