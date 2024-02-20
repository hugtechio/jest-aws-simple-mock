
/**
* @description mocks_v3:mockCodestarNotifications module is mocks for AWS-SDK V3
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
export const mockCodestarNotifications = {
  createNotificationRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'createNotificationRule', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  createNotificationRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'createNotificationRule', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  createNotificationRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'createNotificationRule', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  deleteNotificationRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'deleteNotificationRule', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  deleteNotificationRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'deleteNotificationRule', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  deleteNotificationRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'deleteNotificationRule', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  deleteTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'deleteTarget', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  deleteTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'deleteTarget', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  deleteTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'deleteTarget', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  describeNotificationRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'describeNotificationRule', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  describeNotificationRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'describeNotificationRule', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  describeNotificationRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'describeNotificationRule', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  listEventTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'listEventTypes', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  listEventTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'listEventTypes', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  listEventTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'listEventTypes', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  listNotificationRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'listNotificationRules', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  listNotificationRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'listNotificationRules', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  listNotificationRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'listNotificationRules', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'listTagsForResource', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'listTagsForResource', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'listTagsForResource', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  listTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'listTargets', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  listTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'listTargets', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  listTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'listTargets', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  subscribe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'subscribe', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  subscribeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'subscribe', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  subscribeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'subscribe', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'tagResource', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'tagResource', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'tagResource', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  unsubscribe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'unsubscribe', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  unsubscribeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'unsubscribe', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  unsubscribeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'unsubscribe', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'untagResource', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'untagResource', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'untagResource', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  updateNotificationRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'updateNotificationRule', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  updateNotificationRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'updateNotificationRule', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  updateNotificationRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'updateNotificationRule', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'send', 'CodestarNotificationsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'send', 'CodestarNotificationsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codestar-notifications', 'send', 'CodestarNotificationsClient', Promise.reject(result), true, mock)
  }
}
