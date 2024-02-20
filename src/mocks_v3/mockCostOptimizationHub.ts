
/**
* @description mocks_v3:mockCostOptimizationHub module is mocks for AWS-SDK V3
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
export const mockCostOptimizationHub = {
  getPreferences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'getPreferences', 'CostOptimizationHub', Promise.resolve(result), true, mock)
  },
  getPreferencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'getPreferences', 'CostOptimizationHub', Promise.resolve(result), false, mock)
  },
  getPreferencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'getPreferences', 'CostOptimizationHub', Promise.reject(result), true, mock)
  },
  getRecommendation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'getRecommendation', 'CostOptimizationHub', Promise.resolve(result), true, mock)
  },
  getRecommendationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'getRecommendation', 'CostOptimizationHub', Promise.resolve(result), false, mock)
  },
  getRecommendationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'getRecommendation', 'CostOptimizationHub', Promise.reject(result), true, mock)
  },
  listEnrollmentStatuses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'listEnrollmentStatuses', 'CostOptimizationHub', Promise.resolve(result), true, mock)
  },
  listEnrollmentStatusesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'listEnrollmentStatuses', 'CostOptimizationHub', Promise.resolve(result), false, mock)
  },
  listEnrollmentStatusesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'listEnrollmentStatuses', 'CostOptimizationHub', Promise.reject(result), true, mock)
  },
  listRecommendationSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'listRecommendationSummaries', 'CostOptimizationHub', Promise.resolve(result), true, mock)
  },
  listRecommendationSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'listRecommendationSummaries', 'CostOptimizationHub', Promise.resolve(result), false, mock)
  },
  listRecommendationSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'listRecommendationSummaries', 'CostOptimizationHub', Promise.reject(result), true, mock)
  },
  listRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'listRecommendations', 'CostOptimizationHub', Promise.resolve(result), true, mock)
  },
  listRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'listRecommendations', 'CostOptimizationHub', Promise.resolve(result), false, mock)
  },
  listRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'listRecommendations', 'CostOptimizationHub', Promise.reject(result), true, mock)
  },
  updateEnrollmentStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'updateEnrollmentStatus', 'CostOptimizationHub', Promise.resolve(result), true, mock)
  },
  updateEnrollmentStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'updateEnrollmentStatus', 'CostOptimizationHub', Promise.resolve(result), false, mock)
  },
  updateEnrollmentStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'updateEnrollmentStatus', 'CostOptimizationHub', Promise.reject(result), true, mock)
  },
  updatePreferences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'updatePreferences', 'CostOptimizationHub', Promise.resolve(result), true, mock)
  },
  updatePreferencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'updatePreferences', 'CostOptimizationHub', Promise.resolve(result), false, mock)
  },
  updatePreferencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'updatePreferences', 'CostOptimizationHub', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'send', 'CostOptimizationHubClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'send', 'CostOptimizationHubClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cost-optimization-hub', 'send', 'CostOptimizationHubClient', Promise.reject(result), true, mock)
  }
}
