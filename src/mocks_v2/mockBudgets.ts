
/**
* @description mocks_v2:mockBudgets.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockBudgets = {
  createBudget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBudget', 'Budgets', result, true, true, mock)
  },
  createBudgetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBudget', 'Budgets', result, false, true, mock)
  },
  createBudgetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBudget', 'Budgets', result, true, false, mock)
  },
  createBudgetAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBudgetAction', 'Budgets', result, true, true, mock)
  },
  createBudgetActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBudgetAction', 'Budgets', result, false, true, mock)
  },
  createBudgetActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBudgetAction', 'Budgets', result, true, false, mock)
  },
  createNotification: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNotification', 'Budgets', result, true, true, mock)
  },
  createNotificationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNotification', 'Budgets', result, false, true, mock)
  },
  createNotificationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNotification', 'Budgets', result, true, false, mock)
  },
  createSubscriber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSubscriber', 'Budgets', result, true, true, mock)
  },
  createSubscriberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSubscriber', 'Budgets', result, false, true, mock)
  },
  createSubscriberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSubscriber', 'Budgets', result, true, false, mock)
  },
  deleteBudget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBudget', 'Budgets', result, true, true, mock)
  },
  deleteBudgetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBudget', 'Budgets', result, false, true, mock)
  },
  deleteBudgetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBudget', 'Budgets', result, true, false, mock)
  },
  deleteBudgetAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBudgetAction', 'Budgets', result, true, true, mock)
  },
  deleteBudgetActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBudgetAction', 'Budgets', result, false, true, mock)
  },
  deleteBudgetActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBudgetAction', 'Budgets', result, true, false, mock)
  },
  deleteNotification: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNotification', 'Budgets', result, true, true, mock)
  },
  deleteNotificationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNotification', 'Budgets', result, false, true, mock)
  },
  deleteNotificationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNotification', 'Budgets', result, true, false, mock)
  },
  deleteSubscriber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSubscriber', 'Budgets', result, true, true, mock)
  },
  deleteSubscriberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSubscriber', 'Budgets', result, false, true, mock)
  },
  deleteSubscriberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSubscriber', 'Budgets', result, true, false, mock)
  },
  describeBudget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudget', 'Budgets', result, true, true, mock)
  },
  describeBudgetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudget', 'Budgets', result, false, true, mock)
  },
  describeBudgetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudget', 'Budgets', result, true, false, mock)
  },
  describeBudgetAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetAction', 'Budgets', result, true, true, mock)
  },
  describeBudgetActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetAction', 'Budgets', result, false, true, mock)
  },
  describeBudgetActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetAction', 'Budgets', result, true, false, mock)
  },
  describeBudgetActionHistories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetActionHistories', 'Budgets', result, true, true, mock)
  },
  describeBudgetActionHistoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetActionHistories', 'Budgets', result, false, true, mock)
  },
  describeBudgetActionHistoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetActionHistories', 'Budgets', result, true, false, mock)
  },
  describeBudgetActionsForAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetActionsForAccount', 'Budgets', result, true, true, mock)
  },
  describeBudgetActionsForAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetActionsForAccount', 'Budgets', result, false, true, mock)
  },
  describeBudgetActionsForAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetActionsForAccount', 'Budgets', result, true, false, mock)
  },
  describeBudgetActionsForBudget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetActionsForBudget', 'Budgets', result, true, true, mock)
  },
  describeBudgetActionsForBudgetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetActionsForBudget', 'Budgets', result, false, true, mock)
  },
  describeBudgetActionsForBudgetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetActionsForBudget', 'Budgets', result, true, false, mock)
  },
  describeBudgetPerformanceHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetPerformanceHistory', 'Budgets', result, true, true, mock)
  },
  describeBudgetPerformanceHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetPerformanceHistory', 'Budgets', result, false, true, mock)
  },
  describeBudgetPerformanceHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgetPerformanceHistory', 'Budgets', result, true, false, mock)
  },
  describeBudgets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgets', 'Budgets', result, true, true, mock)
  },
  describeBudgetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgets', 'Budgets', result, false, true, mock)
  },
  describeBudgetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBudgets', 'Budgets', result, true, false, mock)
  },
  describeNotificationsForBudget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNotificationsForBudget', 'Budgets', result, true, true, mock)
  },
  describeNotificationsForBudgetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNotificationsForBudget', 'Budgets', result, false, true, mock)
  },
  describeNotificationsForBudgetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNotificationsForBudget', 'Budgets', result, true, false, mock)
  },
  describeSubscribersForNotification: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSubscribersForNotification', 'Budgets', result, true, true, mock)
  },
  describeSubscribersForNotificationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSubscribersForNotification', 'Budgets', result, false, true, mock)
  },
  describeSubscribersForNotificationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSubscribersForNotification', 'Budgets', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Budgets', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Budgets', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Budgets', result, true, false, mock)
  },
  executeBudgetAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeBudgetAction', 'Budgets', result, true, true, mock)
  },
  executeBudgetActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeBudgetAction', 'Budgets', result, false, true, mock)
  },
  executeBudgetActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executeBudgetAction', 'Budgets', result, true, false, mock)
  },
  updateBudget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBudget', 'Budgets', result, true, true, mock)
  },
  updateBudgetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBudget', 'Budgets', result, false, true, mock)
  },
  updateBudgetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBudget', 'Budgets', result, true, false, mock)
  },
  updateBudgetAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBudgetAction', 'Budgets', result, true, true, mock)
  },
  updateBudgetActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBudgetAction', 'Budgets', result, false, true, mock)
  },
  updateBudgetActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBudgetAction', 'Budgets', result, true, false, mock)
  },
  updateNotification: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNotification', 'Budgets', result, true, true, mock)
  },
  updateNotificationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNotification', 'Budgets', result, false, true, mock)
  },
  updateNotificationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateNotification', 'Budgets', result, true, false, mock)
  },
  updateSubscriber: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSubscriber', 'Budgets', result, true, true, mock)
  },
  updateSubscriberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSubscriber', 'Budgets', result, false, true, mock)
  },
  updateSubscriberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSubscriber', 'Budgets', result, true, false, mock)
  },
}
