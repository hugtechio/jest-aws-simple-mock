
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockDevOpsGuru = {
  addNotificationChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'addNotificationChannel', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  addNotificationChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'addNotificationChannel', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  addNotificationChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'addNotificationChannel', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  describeAccountHealth: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeAccountHealth', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  describeAccountHealthAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeAccountHealth', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  describeAccountHealthThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeAccountHealth', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  describeAccountOverview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeAccountOverview', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  describeAccountOverviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeAccountOverview', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  describeAccountOverviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeAccountOverview', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  describeAnomaly: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeAnomaly', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  describeAnomalyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeAnomaly', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  describeAnomalyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeAnomaly', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  describeFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeFeedback', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  describeFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeFeedback', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  describeFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeFeedback', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  describeInsight: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeInsight', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  describeInsightAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeInsight', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  describeInsightThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeInsight', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  describeOrganizationHealth: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeOrganizationHealth', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  describeOrganizationHealthAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeOrganizationHealth', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  describeOrganizationHealthThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeOrganizationHealth', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  describeOrganizationOverview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeOrganizationOverview', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  describeOrganizationOverviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeOrganizationOverview', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  describeOrganizationOverviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeOrganizationOverview', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  describeOrganizationResourceCollectionHealth: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeOrganizationResourceCollectionHealth', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  describeOrganizationResourceCollectionHealthAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeOrganizationResourceCollectionHealth', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  describeOrganizationResourceCollectionHealthThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeOrganizationResourceCollectionHealth', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  describeResourceCollectionHealth: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeResourceCollectionHealth', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  describeResourceCollectionHealthAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeResourceCollectionHealth', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  describeResourceCollectionHealthThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeResourceCollectionHealth', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  describeServiceIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeServiceIntegration', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  describeServiceIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeServiceIntegration', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  describeServiceIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'describeServiceIntegration', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'destroy', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'destroy', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'destroy', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  getCostEstimation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'getCostEstimation', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  getCostEstimationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'getCostEstimation', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  getCostEstimationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'getCostEstimation', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  getResourceCollection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'getResourceCollection', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  getResourceCollectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'getResourceCollection', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  getResourceCollectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'getResourceCollection', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  listAnomaliesForInsight: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'listAnomaliesForInsight', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  listAnomaliesForInsightAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'listAnomaliesForInsight', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  listAnomaliesForInsightThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'listAnomaliesForInsight', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  listEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'listEvents', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  listEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'listEvents', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  listEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'listEvents', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  listInsights: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'listInsights', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  listInsightsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'listInsights', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  listInsightsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'listInsights', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  listNotificationChannels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'listNotificationChannels', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  listNotificationChannelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'listNotificationChannels', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  listNotificationChannelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'listNotificationChannels', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  listOrganizationInsights: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'listOrganizationInsights', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  listOrganizationInsightsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'listOrganizationInsights', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  listOrganizationInsightsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'listOrganizationInsights', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  listRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'listRecommendations', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  listRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'listRecommendations', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  listRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'listRecommendations', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  putFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'putFeedback', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  putFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'putFeedback', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  putFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'putFeedback', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  removeNotificationChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'removeNotificationChannel', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  removeNotificationChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'removeNotificationChannel', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  removeNotificationChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'removeNotificationChannel', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  searchInsights: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'searchInsights', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  searchInsightsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'searchInsights', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  searchInsightsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'searchInsights', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  searchOrganizationInsights: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'searchOrganizationInsights', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  searchOrganizationInsightsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'searchOrganizationInsights', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  searchOrganizationInsightsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'searchOrganizationInsights', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  startCostEstimation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'startCostEstimation', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  startCostEstimationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'startCostEstimation', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  startCostEstimationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'startCostEstimation', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  updateResourceCollection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'updateResourceCollection', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  updateResourceCollectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'updateResourceCollection', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  updateResourceCollectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'updateResourceCollection', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  updateServiceIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'updateServiceIntegration', 'DevOpsGuru', Promise.resolve(result), true, mock)
  },
  updateServiceIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'updateServiceIntegration', 'DevOpsGuru', Promise.resolve(result), false, mock)
  },
  updateServiceIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'updateServiceIntegration', 'DevOpsGuru', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'send', 'DevOpsGuruClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'send', 'DevOpsGuruClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-devops-guru', 'send', 'DevOpsGuruClient', Promise.reject(result), true, mock)
  }
}