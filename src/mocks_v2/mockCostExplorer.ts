
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
  export const mockCostExplorer = {
  createAnomalyMonitor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAnomalyMonitor', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  createAnomalyMonitorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAnomalyMonitor', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  createAnomalyMonitorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAnomalyMonitor', 'CostExplorer', Promise.reject(result), true, mock)
  },
  createAnomalySubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAnomalySubscription', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  createAnomalySubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAnomalySubscription', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  createAnomalySubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAnomalySubscription', 'CostExplorer', Promise.reject(result), true, mock)
  },
  createCostCategoryDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCostCategoryDefinition', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  createCostCategoryDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCostCategoryDefinition', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  createCostCategoryDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCostCategoryDefinition', 'CostExplorer', Promise.reject(result), true, mock)
  },
  deleteAnomalyMonitor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAnomalyMonitor', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  deleteAnomalyMonitorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAnomalyMonitor', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  deleteAnomalyMonitorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAnomalyMonitor', 'CostExplorer', Promise.reject(result), true, mock)
  },
  deleteAnomalySubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAnomalySubscription', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  deleteAnomalySubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAnomalySubscription', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  deleteAnomalySubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAnomalySubscription', 'CostExplorer', Promise.reject(result), true, mock)
  },
  deleteCostCategoryDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCostCategoryDefinition', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  deleteCostCategoryDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCostCategoryDefinition', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  deleteCostCategoryDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCostCategoryDefinition', 'CostExplorer', Promise.reject(result), true, mock)
  },
  describeCostCategoryDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCostCategoryDefinition', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  describeCostCategoryDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCostCategoryDefinition', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  describeCostCategoryDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCostCategoryDefinition', 'CostExplorer', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getAnomalies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAnomalies', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getAnomaliesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAnomalies', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getAnomaliesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAnomalies', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getAnomalyMonitors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAnomalyMonitors', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getAnomalyMonitorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAnomalyMonitors', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getAnomalyMonitorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAnomalyMonitors', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getAnomalySubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAnomalySubscriptions', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getAnomalySubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAnomalySubscriptions', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getAnomalySubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAnomalySubscriptions', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getCostAndUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCostAndUsage', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getCostAndUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCostAndUsage', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getCostAndUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCostAndUsage', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getCostAndUsageWithResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCostAndUsageWithResources', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getCostAndUsageWithResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCostAndUsageWithResources', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getCostAndUsageWithResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCostAndUsageWithResources', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getCostCategories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCostCategories', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getCostCategoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCostCategories', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getCostCategoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCostCategories', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getCostForecast: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCostForecast', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getCostForecastAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCostForecast', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getCostForecastThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCostForecast', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getDimensionValues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDimensionValues', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getDimensionValuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDimensionValues', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getDimensionValuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDimensionValues', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getReservationCoverage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReservationCoverage', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getReservationCoverageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReservationCoverage', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getReservationCoverageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReservationCoverage', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getReservationPurchaseRecommendation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReservationPurchaseRecommendation', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getReservationPurchaseRecommendationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReservationPurchaseRecommendation', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getReservationPurchaseRecommendationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReservationPurchaseRecommendation', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getReservationUtilization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReservationUtilization', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getReservationUtilizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReservationUtilization', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getReservationUtilizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReservationUtilization', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getRightsizingRecommendation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRightsizingRecommendation', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getRightsizingRecommendationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRightsizingRecommendation', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getRightsizingRecommendationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRightsizingRecommendation', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getSavingsPlansCoverage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSavingsPlansCoverage', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getSavingsPlansCoverageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSavingsPlansCoverage', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getSavingsPlansCoverageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSavingsPlansCoverage', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getSavingsPlansPurchaseRecommendation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSavingsPlansPurchaseRecommendation', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getSavingsPlansPurchaseRecommendationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSavingsPlansPurchaseRecommendation', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getSavingsPlansPurchaseRecommendationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSavingsPlansPurchaseRecommendation', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getSavingsPlansUtilization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSavingsPlansUtilization', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getSavingsPlansUtilizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSavingsPlansUtilization', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getSavingsPlansUtilizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSavingsPlansUtilization', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getSavingsPlansUtilizationDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSavingsPlansUtilizationDetails', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getSavingsPlansUtilizationDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSavingsPlansUtilizationDetails', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getSavingsPlansUtilizationDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSavingsPlansUtilizationDetails', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTags', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTags', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getTags', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getUsageForecast: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsageForecast', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getUsageForecastAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsageForecast', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getUsageForecastThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsageForecast', 'CostExplorer', Promise.reject(result), true, mock)
  },
  listCostCategoryDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCostCategoryDefinitions', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  listCostCategoryDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCostCategoryDefinitions', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  listCostCategoryDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCostCategoryDefinitions', 'CostExplorer', Promise.reject(result), true, mock)
  },
  provideAnomalyFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('provideAnomalyFeedback', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  provideAnomalyFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('provideAnomalyFeedback', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  provideAnomalyFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('provideAnomalyFeedback', 'CostExplorer', Promise.reject(result), true, mock)
  },
  updateAnomalyMonitor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAnomalyMonitor', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  updateAnomalyMonitorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAnomalyMonitor', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  updateAnomalyMonitorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAnomalyMonitor', 'CostExplorer', Promise.reject(result), true, mock)
  },
  updateAnomalySubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAnomalySubscription', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  updateAnomalySubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAnomalySubscription', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  updateAnomalySubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAnomalySubscription', 'CostExplorer', Promise.reject(result), true, mock)
  },
  updateCostCategoryDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCostCategoryDefinition', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  updateCostCategoryDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCostCategoryDefinition', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  updateCostCategoryDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCostCategoryDefinition', 'CostExplorer', Promise.reject(result), true, mock)
  },
}
