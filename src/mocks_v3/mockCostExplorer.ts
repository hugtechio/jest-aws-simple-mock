
/**
* @description mocks_v3:mockCostExplorer module is mocks for AWS-SDK V3
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
export const mockCostExplorer = {
  createAnomalyMonitor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'createAnomalyMonitor', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  createAnomalyMonitorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'createAnomalyMonitor', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  createAnomalyMonitorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'createAnomalyMonitor', 'CostExplorer', Promise.reject(result), true, mock)
  },
  createAnomalySubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'createAnomalySubscription', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  createAnomalySubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'createAnomalySubscription', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  createAnomalySubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'createAnomalySubscription', 'CostExplorer', Promise.reject(result), true, mock)
  },
  createCostCategoryDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'createCostCategoryDefinition', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  createCostCategoryDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'createCostCategoryDefinition', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  createCostCategoryDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'createCostCategoryDefinition', 'CostExplorer', Promise.reject(result), true, mock)
  },
  deleteAnomalyMonitor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'deleteAnomalyMonitor', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  deleteAnomalyMonitorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'deleteAnomalyMonitor', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  deleteAnomalyMonitorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'deleteAnomalyMonitor', 'CostExplorer', Promise.reject(result), true, mock)
  },
  deleteAnomalySubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'deleteAnomalySubscription', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  deleteAnomalySubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'deleteAnomalySubscription', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  deleteAnomalySubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'deleteAnomalySubscription', 'CostExplorer', Promise.reject(result), true, mock)
  },
  deleteCostCategoryDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'deleteCostCategoryDefinition', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  deleteCostCategoryDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'deleteCostCategoryDefinition', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  deleteCostCategoryDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'deleteCostCategoryDefinition', 'CostExplorer', Promise.reject(result), true, mock)
  },
  describeCostCategoryDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'describeCostCategoryDefinition', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  describeCostCategoryDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'describeCostCategoryDefinition', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  describeCostCategoryDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'describeCostCategoryDefinition', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getAnomalies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getAnomalies', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getAnomaliesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getAnomalies', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getAnomaliesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getAnomalies', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getAnomalyMonitors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getAnomalyMonitors', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getAnomalyMonitorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getAnomalyMonitors', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getAnomalyMonitorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getAnomalyMonitors', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getAnomalySubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getAnomalySubscriptions', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getAnomalySubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getAnomalySubscriptions', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getAnomalySubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getAnomalySubscriptions', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getCostAndUsage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getCostAndUsage', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getCostAndUsageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getCostAndUsage', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getCostAndUsageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getCostAndUsage', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getCostAndUsageWithResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getCostAndUsageWithResources', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getCostAndUsageWithResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getCostAndUsageWithResources', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getCostAndUsageWithResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getCostAndUsageWithResources', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getCostCategories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getCostCategories', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getCostCategoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getCostCategories', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getCostCategoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getCostCategories', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getCostForecast: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getCostForecast', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getCostForecastAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getCostForecast', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getCostForecastThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getCostForecast', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getDimensionValues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getDimensionValues', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getDimensionValuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getDimensionValues', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getDimensionValuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getDimensionValues', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getReservationCoverage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getReservationCoverage', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getReservationCoverageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getReservationCoverage', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getReservationCoverageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getReservationCoverage', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getReservationPurchaseRecommendation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getReservationPurchaseRecommendation', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getReservationPurchaseRecommendationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getReservationPurchaseRecommendation', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getReservationPurchaseRecommendationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getReservationPurchaseRecommendation', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getReservationUtilization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getReservationUtilization', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getReservationUtilizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getReservationUtilization', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getReservationUtilizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getReservationUtilization', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getRightsizingRecommendation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getRightsizingRecommendation', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getRightsizingRecommendationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getRightsizingRecommendation', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getRightsizingRecommendationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getRightsizingRecommendation', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getSavingsPlanPurchaseRecommendationDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getSavingsPlanPurchaseRecommendationDetails', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getSavingsPlanPurchaseRecommendationDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getSavingsPlanPurchaseRecommendationDetails', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getSavingsPlanPurchaseRecommendationDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getSavingsPlanPurchaseRecommendationDetails', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getSavingsPlansCoverage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getSavingsPlansCoverage', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getSavingsPlansCoverageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getSavingsPlansCoverage', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getSavingsPlansCoverageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getSavingsPlansCoverage', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getSavingsPlansPurchaseRecommendation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getSavingsPlansPurchaseRecommendation', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getSavingsPlansPurchaseRecommendationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getSavingsPlansPurchaseRecommendation', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getSavingsPlansPurchaseRecommendationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getSavingsPlansPurchaseRecommendation', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getSavingsPlansUtilization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getSavingsPlansUtilization', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getSavingsPlansUtilizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getSavingsPlansUtilization', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getSavingsPlansUtilizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getSavingsPlansUtilization', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getSavingsPlansUtilizationDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getSavingsPlansUtilizationDetails', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getSavingsPlansUtilizationDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getSavingsPlansUtilizationDetails', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getSavingsPlansUtilizationDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getSavingsPlansUtilizationDetails', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getTags', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getTags', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getTags', 'CostExplorer', Promise.reject(result), true, mock)
  },
  getUsageForecast: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getUsageForecast', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  getUsageForecastAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getUsageForecast', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  getUsageForecastThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'getUsageForecast', 'CostExplorer', Promise.reject(result), true, mock)
  },
  listCostAllocationTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'listCostAllocationTags', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  listCostAllocationTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'listCostAllocationTags', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  listCostAllocationTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'listCostAllocationTags', 'CostExplorer', Promise.reject(result), true, mock)
  },
  listCostCategoryDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'listCostCategoryDefinitions', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  listCostCategoryDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'listCostCategoryDefinitions', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  listCostCategoryDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'listCostCategoryDefinitions', 'CostExplorer', Promise.reject(result), true, mock)
  },
  listSavingsPlansPurchaseRecommendationGeneration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'listSavingsPlansPurchaseRecommendationGeneration', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  listSavingsPlansPurchaseRecommendationGenerationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'listSavingsPlansPurchaseRecommendationGeneration', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  listSavingsPlansPurchaseRecommendationGenerationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'listSavingsPlansPurchaseRecommendationGeneration', 'CostExplorer', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'listTagsForResource', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'listTagsForResource', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'listTagsForResource', 'CostExplorer', Promise.reject(result), true, mock)
  },
  provideAnomalyFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'provideAnomalyFeedback', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  provideAnomalyFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'provideAnomalyFeedback', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  provideAnomalyFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'provideAnomalyFeedback', 'CostExplorer', Promise.reject(result), true, mock)
  },
  startSavingsPlansPurchaseRecommendationGeneration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'startSavingsPlansPurchaseRecommendationGeneration', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  startSavingsPlansPurchaseRecommendationGenerationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'startSavingsPlansPurchaseRecommendationGeneration', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  startSavingsPlansPurchaseRecommendationGenerationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'startSavingsPlansPurchaseRecommendationGeneration', 'CostExplorer', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'tagResource', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'tagResource', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'tagResource', 'CostExplorer', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'untagResource', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'untagResource', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'untagResource', 'CostExplorer', Promise.reject(result), true, mock)
  },
  updateAnomalyMonitor: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'updateAnomalyMonitor', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  updateAnomalyMonitorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'updateAnomalyMonitor', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  updateAnomalyMonitorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'updateAnomalyMonitor', 'CostExplorer', Promise.reject(result), true, mock)
  },
  updateAnomalySubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'updateAnomalySubscription', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  updateAnomalySubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'updateAnomalySubscription', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  updateAnomalySubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'updateAnomalySubscription', 'CostExplorer', Promise.reject(result), true, mock)
  },
  updateCostAllocationTagsStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'updateCostAllocationTagsStatus', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  updateCostAllocationTagsStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'updateCostAllocationTagsStatus', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  updateCostAllocationTagsStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'updateCostAllocationTagsStatus', 'CostExplorer', Promise.reject(result), true, mock)
  },
  updateCostCategoryDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'updateCostCategoryDefinition', 'CostExplorer', Promise.resolve(result), true, mock)
  },
  updateCostCategoryDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'updateCostCategoryDefinition', 'CostExplorer', Promise.resolve(result), false, mock)
  },
  updateCostCategoryDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'updateCostCategoryDefinition', 'CostExplorer', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'send', 'CostExplorerClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'send', 'CostExplorerClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-explorer', 'send', 'CostExplorerClient', Promise.reject(result), true, mock)
  }
}
