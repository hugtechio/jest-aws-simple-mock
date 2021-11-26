
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
  createTrail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'createTrail', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  createTrailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'createTrail', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  createTrailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'createTrail', 'CloudTrail', Promise.reject(result), true, mock)
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
  describeTrails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'describeTrails', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  describeTrailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'describeTrails', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  describeTrailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'describeTrails', 'CloudTrail', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'destroy', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'destroy', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'destroy', 'CloudTrail', Promise.reject(result), true, mock)
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
  getInsightSelectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getInsightSelectors', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  getInsightSelectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getInsightSelectors', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  getInsightSelectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'getInsightSelectors', 'CloudTrail', Promise.reject(result), true, mock)
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
  listPublicKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listPublicKeys', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  listPublicKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listPublicKeys', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  listPublicKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'listPublicKeys', 'CloudTrail', Promise.reject(result), true, mock)
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
  removeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'removeTags', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  removeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'removeTags', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  removeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'removeTags', 'CloudTrail', Promise.reject(result), true, mock)
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
  stopLogging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'stopLogging', 'CloudTrail', Promise.resolve(result), true, mock)
  },
  stopLoggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'stopLogging', 'CloudTrail', Promise.resolve(result), false, mock)
  },
  stopLoggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudtrail', 'stopLogging', 'CloudTrail', Promise.reject(result), true, mock)
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