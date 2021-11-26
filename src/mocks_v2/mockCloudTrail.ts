
/**
* @description mocks_v2:mockCloudTrail.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockCloudTrail = {
  addTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTags', 'CloudTrail', result, true, true, mock)
  },
  addTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTags', 'CloudTrail', result, false, true, mock)
  },
  addTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTags', 'CloudTrail', result, true, false, mock)
  },
  createTrail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTrail', 'CloudTrail', result, true, true, mock)
  },
  createTrailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTrail', 'CloudTrail', result, false, true, mock)
  },
  createTrailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTrail', 'CloudTrail', result, true, false, mock)
  },
  deleteTrail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTrail', 'CloudTrail', result, true, true, mock)
  },
  deleteTrailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTrail', 'CloudTrail', result, false, true, mock)
  },
  deleteTrailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTrail', 'CloudTrail', result, true, false, mock)
  },
  describeTrails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTrails', 'CloudTrail', result, true, true, mock)
  },
  describeTrailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTrails', 'CloudTrail', result, false, true, mock)
  },
  describeTrailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTrails', 'CloudTrail', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudTrail', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudTrail', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CloudTrail', result, true, false, mock)
  },
  getEventSelectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEventSelectors', 'CloudTrail', result, true, true, mock)
  },
  getEventSelectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEventSelectors', 'CloudTrail', result, false, true, mock)
  },
  getEventSelectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEventSelectors', 'CloudTrail', result, true, false, mock)
  },
  getInsightSelectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsightSelectors', 'CloudTrail', result, true, true, mock)
  },
  getInsightSelectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsightSelectors', 'CloudTrail', result, false, true, mock)
  },
  getInsightSelectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsightSelectors', 'CloudTrail', result, true, false, mock)
  },
  getTrail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTrail', 'CloudTrail', result, true, true, mock)
  },
  getTrailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTrail', 'CloudTrail', result, false, true, mock)
  },
  getTrailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTrail', 'CloudTrail', result, true, false, mock)
  },
  getTrailStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTrailStatus', 'CloudTrail', result, true, true, mock)
  },
  getTrailStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTrailStatus', 'CloudTrail', result, false, true, mock)
  },
  getTrailStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTrailStatus', 'CloudTrail', result, true, false, mock)
  },
  listPublicKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPublicKeys', 'CloudTrail', result, true, true, mock)
  },
  listPublicKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPublicKeys', 'CloudTrail', result, false, true, mock)
  },
  listPublicKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPublicKeys', 'CloudTrail', result, true, false, mock)
  },
  listTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'CloudTrail', result, true, true, mock)
  },
  listTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'CloudTrail', result, false, true, mock)
  },
  listTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'CloudTrail', result, true, false, mock)
  },
  listTrails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTrails', 'CloudTrail', result, true, true, mock)
  },
  listTrailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTrails', 'CloudTrail', result, false, true, mock)
  },
  listTrailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTrails', 'CloudTrail', result, true, false, mock)
  },
  lookupEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('lookupEvents', 'CloudTrail', result, true, true, mock)
  },
  lookupEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('lookupEvents', 'CloudTrail', result, false, true, mock)
  },
  lookupEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('lookupEvents', 'CloudTrail', result, true, false, mock)
  },
  putEventSelectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEventSelectors', 'CloudTrail', result, true, true, mock)
  },
  putEventSelectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEventSelectors', 'CloudTrail', result, false, true, mock)
  },
  putEventSelectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putEventSelectors', 'CloudTrail', result, true, false, mock)
  },
  putInsightSelectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putInsightSelectors', 'CloudTrail', result, true, true, mock)
  },
  putInsightSelectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putInsightSelectors', 'CloudTrail', result, false, true, mock)
  },
  putInsightSelectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putInsightSelectors', 'CloudTrail', result, true, false, mock)
  },
  removeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTags', 'CloudTrail', result, true, true, mock)
  },
  removeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTags', 'CloudTrail', result, false, true, mock)
  },
  removeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTags', 'CloudTrail', result, true, false, mock)
  },
  startLogging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startLogging', 'CloudTrail', result, true, true, mock)
  },
  startLoggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startLogging', 'CloudTrail', result, false, true, mock)
  },
  startLoggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startLogging', 'CloudTrail', result, true, false, mock)
  },
  stopLogging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopLogging', 'CloudTrail', result, true, true, mock)
  },
  stopLoggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopLogging', 'CloudTrail', result, false, true, mock)
  },
  stopLoggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopLogging', 'CloudTrail', result, true, false, mock)
  },
  updateTrail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTrail', 'CloudTrail', result, true, true, mock)
  },
  updateTrailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTrail', 'CloudTrail', result, false, true, mock)
  },
  updateTrailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateTrail', 'CloudTrail', result, true, false, mock)
  },
}
