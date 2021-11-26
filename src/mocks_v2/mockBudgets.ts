
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
  export const mockBudgets = {
  createBudget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBudget', 'Budgets', Promise.resolve(result), true, mock)
  },
  createBudgetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBudget', 'Budgets', Promise.resolve(result), false, mock)
  },
  createBudgetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBudget', 'Budgets', Promise.reject(result), true, mock)
  },
  createBudgetAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBudgetAction', 'Budgets', Promise.resolve(result), true, mock)
  },
  createBudgetActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBudgetAction', 'Budgets', Promise.resolve(result), false, mock)
  },
  createBudgetActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBudgetAction', 'Budgets', Promise.reject(result), true, mock)
  },
  createNotification: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNotification', 'Budgets', Promise.resolve(result), true, mock)
  },
  createNotificationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNotification', 'Budgets', Promise.resolve(result), false, mock)
  },
  createNotificationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNotification', 'Budgets', Promise.reject(result), true, mock)
  },
  createSubscriber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSubscriber', 'Budgets', Promise.resolve(result), true, mock)
  },
  createSubscriberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSubscriber', 'Budgets', Promise.resolve(result), false, mock)
  },
  createSubscriberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSubscriber', 'Budgets', Promise.reject(result), true, mock)
  },
  deleteBudget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBudget', 'Budgets', Promise.resolve(result), true, mock)
  },
  deleteBudgetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBudget', 'Budgets', Promise.resolve(result), false, mock)
  },
  deleteBudgetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBudget', 'Budgets', Promise.reject(result), true, mock)
  },
  deleteBudgetAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBudgetAction', 'Budgets', Promise.resolve(result), true, mock)
  },
  deleteBudgetActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBudgetAction', 'Budgets', Promise.resolve(result), false, mock)
  },
  deleteBudgetActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBudgetAction', 'Budgets', Promise.reject(result), true, mock)
  },
  deleteNotification: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNotification', 'Budgets', Promise.resolve(result), true, mock)
  },
  deleteNotificationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNotification', 'Budgets', Promise.resolve(result), false, mock)
  },
  deleteNotificationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNotification', 'Budgets', Promise.reject(result), true, mock)
  },
  deleteSubscriber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSubscriber', 'Budgets', Promise.resolve(result), true, mock)
  },
  deleteSubscriberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSubscriber', 'Budgets', Promise.resolve(result), false, mock)
  },
  deleteSubscriberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSubscriber', 'Budgets', Promise.reject(result), true, mock)
  },
  describeBudget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudget', 'Budgets', Promise.resolve(result), true, mock)
  },
  describeBudgetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudget', 'Budgets', Promise.resolve(result), false, mock)
  },
  describeBudgetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudget', 'Budgets', Promise.reject(result), true, mock)
  },
  describeBudgetAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetAction', 'Budgets', Promise.resolve(result), true, mock)
  },
  describeBudgetActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetAction', 'Budgets', Promise.resolve(result), false, mock)
  },
  describeBudgetActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetAction', 'Budgets', Promise.reject(result), true, mock)
  },
  describeBudgetActionHistories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetActionHistories', 'Budgets', Promise.resolve(result), true, mock)
  },
  describeBudgetActionHistoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetActionHistories', 'Budgets', Promise.resolve(result), false, mock)
  },
  describeBudgetActionHistoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetActionHistories', 'Budgets', Promise.reject(result), true, mock)
  },
  describeBudgetActionsForAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetActionsForAccount', 'Budgets', Promise.resolve(result), true, mock)
  },
  describeBudgetActionsForAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetActionsForAccount', 'Budgets', Promise.resolve(result), false, mock)
  },
  describeBudgetActionsForAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetActionsForAccount', 'Budgets', Promise.reject(result), true, mock)
  },
  describeBudgetActionsForBudget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetActionsForBudget', 'Budgets', Promise.resolve(result), true, mock)
  },
  describeBudgetActionsForBudgetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetActionsForBudget', 'Budgets', Promise.resolve(result), false, mock)
  },
  describeBudgetActionsForBudgetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetActionsForBudget', 'Budgets', Promise.reject(result), true, mock)
  },
  describeBudgetPerformanceHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetPerformanceHistory', 'Budgets', Promise.resolve(result), true, mock)
  },
  describeBudgetPerformanceHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetPerformanceHistory', 'Budgets', Promise.resolve(result), false, mock)
  },
  describeBudgetPerformanceHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetPerformanceHistory', 'Budgets', Promise.reject(result), true, mock)
  },
  describeBudgets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgets', 'Budgets', Promise.resolve(result), true, mock)
  },
  describeBudgetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgets', 'Budgets', Promise.resolve(result), false, mock)
  },
  describeBudgetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgets', 'Budgets', Promise.reject(result), true, mock)
  },
  describeNotificationsForBudget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNotificationsForBudget', 'Budgets', Promise.resolve(result), true, mock)
  },
  describeNotificationsForBudgetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNotificationsForBudget', 'Budgets', Promise.resolve(result), false, mock)
  },
  describeNotificationsForBudgetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNotificationsForBudget', 'Budgets', Promise.reject(result), true, mock)
  },
  describeSubscribersForNotification: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSubscribersForNotification', 'Budgets', Promise.resolve(result), true, mock)
  },
  describeSubscribersForNotificationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSubscribersForNotification', 'Budgets', Promise.resolve(result), false, mock)
  },
  describeSubscribersForNotificationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSubscribersForNotification', 'Budgets', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Budgets', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Budgets', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Budgets', Promise.reject(result), true, mock)
  },
  executeBudgetAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeBudgetAction', 'Budgets', Promise.resolve(result), true, mock)
  },
  executeBudgetActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeBudgetAction', 'Budgets', Promise.resolve(result), false, mock)
  },
  executeBudgetActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeBudgetAction', 'Budgets', Promise.reject(result), true, mock)
  },
  updateBudget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBudget', 'Budgets', Promise.resolve(result), true, mock)
  },
  updateBudgetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBudget', 'Budgets', Promise.resolve(result), false, mock)
  },
  updateBudgetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBudget', 'Budgets', Promise.reject(result), true, mock)
  },
  updateBudgetAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBudgetAction', 'Budgets', Promise.resolve(result), true, mock)
  },
  updateBudgetActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBudgetAction', 'Budgets', Promise.resolve(result), false, mock)
  },
  updateBudgetActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBudgetAction', 'Budgets', Promise.reject(result), true, mock)
  },
  updateNotification: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNotification', 'Budgets', Promise.resolve(result), true, mock)
  },
  updateNotificationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNotification', 'Budgets', Promise.resolve(result), false, mock)
  },
  updateNotificationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNotification', 'Budgets', Promise.reject(result), true, mock)
  },
  updateSubscriber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSubscriber', 'Budgets', Promise.resolve(result), true, mock)
  },
  updateSubscriberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSubscriber', 'Budgets', Promise.resolve(result), false, mock)
  },
  updateSubscriberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSubscriber', 'Budgets', Promise.reject(result), true, mock)
  },
}
