
/**
* @description mocks_v2:mockCodestarNotifications.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockCodestarNotifications = {
  createNotificationRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNotificationRule', 'CodestarNotifications', result, true, true, mock)
  },
  createNotificationRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNotificationRule', 'CodestarNotifications', result, false, true, mock)
  },
  createNotificationRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNotificationRule', 'CodestarNotifications', result, true, false, mock)
  },
  deleteNotificationRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNotificationRule', 'CodestarNotifications', result, true, true, mock)
  },
  deleteNotificationRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNotificationRule', 'CodestarNotifications', result, false, true, mock)
  },
  deleteNotificationRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNotificationRule', 'CodestarNotifications', result, true, false, mock)
  },
  deleteTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTarget', 'CodestarNotifications', result, true, true, mock)
  },
  deleteTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTarget', 'CodestarNotifications', result, false, true, mock)
  },
  deleteTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTarget', 'CodestarNotifications', result, true, false, mock)
  },
  describeNotificationRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNotificationRule', 'CodestarNotifications', result, true, true, mock)
  },
  describeNotificationRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNotificationRule', 'CodestarNotifications', result, false, true, mock)
  },
  describeNotificationRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNotificationRule', 'CodestarNotifications', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodestarNotifications', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodestarNotifications', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodestarNotifications', result, true, false, mock)
  },
  listEventTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEventTypes', 'CodestarNotifications', result, true, true, mock)
  },
  listEventTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEventTypes', 'CodestarNotifications', result, false, true, mock)
  },
  listEventTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEventTypes', 'CodestarNotifications', result, true, false, mock)
  },
  listNotificationRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNotificationRules', 'CodestarNotifications', result, true, true, mock)
  },
  listNotificationRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNotificationRules', 'CodestarNotifications', result, false, true, mock)
  },
  listNotificationRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNotificationRules', 'CodestarNotifications', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodestarNotifications', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodestarNotifications', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodestarNotifications', result, true, false, mock)
  },
  listTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTargets', 'CodestarNotifications', result, true, true, mock)
  },
  listTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTargets', 'CodestarNotifications', result, false, true, mock)
  },
  listTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTargets', 'CodestarNotifications', result, true, false, mock)
  },
  subscribe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('subscribe', 'CodestarNotifications', result, true, true, mock)
  },
  subscribeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('subscribe', 'CodestarNotifications', result, false, true, mock)
  },
  subscribeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('subscribe', 'CodestarNotifications', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodestarNotifications', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodestarNotifications', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodestarNotifications', result, true, false, mock)
  },
  unsubscribe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unsubscribe', 'CodestarNotifications', result, true, true, mock)
  },
  unsubscribeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unsubscribe', 'CodestarNotifications', result, false, true, mock)
  },
  unsubscribeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unsubscribe', 'CodestarNotifications', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodestarNotifications', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodestarNotifications', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodestarNotifications', result, true, false, mock)
  },
  updateNotificationRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNotificationRule', 'CodestarNotifications', result, true, true, mock)
  },
  updateNotificationRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNotificationRule', 'CodestarNotifications', result, false, true, mock)
  },
  updateNotificationRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNotificationRule', 'CodestarNotifications', result, true, false, mock)
  },
}
