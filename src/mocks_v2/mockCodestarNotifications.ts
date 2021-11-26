
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
  export const mockCodestarNotifications = {
  createNotificationRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNotificationRule', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  createNotificationRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNotificationRule', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  createNotificationRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNotificationRule', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  deleteNotificationRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNotificationRule', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  deleteNotificationRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNotificationRule', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  deleteNotificationRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNotificationRule', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  deleteTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTarget', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  deleteTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTarget', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  deleteTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTarget', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  describeNotificationRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNotificationRule', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  describeNotificationRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNotificationRule', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  describeNotificationRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNotificationRule', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  listEventTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEventTypes', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  listEventTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEventTypes', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  listEventTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEventTypes', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  listNotificationRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNotificationRules', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  listNotificationRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNotificationRules', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  listNotificationRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNotificationRules', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  listTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTargets', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  listTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTargets', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  listTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTargets', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  subscribe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('subscribe', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  subscribeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('subscribe', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  subscribeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('subscribe', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  unsubscribe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unsubscribe', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  unsubscribeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unsubscribe', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  unsubscribeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unsubscribe', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
  updateNotificationRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNotificationRule', 'CodestarNotifications', Promise.resolve(result), true, mock)
  },
  updateNotificationRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNotificationRule', 'CodestarNotifications', Promise.resolve(result), false, mock)
  },
  updateNotificationRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNotificationRule', 'CodestarNotifications', Promise.reject(result), true, mock)
  },
}
