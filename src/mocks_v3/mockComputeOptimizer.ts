
/**
* @description mocks_v3:mockComputeOptimizer module is mocks for AWS-SDK V3
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
export const mockComputeOptimizer = {
  deleteRecommendationPreferences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'deleteRecommendationPreferences', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  deleteRecommendationPreferencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'deleteRecommendationPreferences', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  deleteRecommendationPreferencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'deleteRecommendationPreferences', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  describeRecommendationExportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'describeRecommendationExportJobs', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  describeRecommendationExportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'describeRecommendationExportJobs', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  describeRecommendationExportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'describeRecommendationExportJobs', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  exportAutoScalingGroupRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'exportAutoScalingGroupRecommendations', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  exportAutoScalingGroupRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'exportAutoScalingGroupRecommendations', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  exportAutoScalingGroupRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'exportAutoScalingGroupRecommendations', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  exportEBSVolumeRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'exportEBSVolumeRecommendations', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  exportEBSVolumeRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'exportEBSVolumeRecommendations', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  exportEBSVolumeRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'exportEBSVolumeRecommendations', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  exportEC2InstanceRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'exportEC2InstanceRecommendations', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  exportEC2InstanceRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'exportEC2InstanceRecommendations', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  exportEC2InstanceRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'exportEC2InstanceRecommendations', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  exportECSServiceRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'exportECSServiceRecommendations', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  exportECSServiceRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'exportECSServiceRecommendations', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  exportECSServiceRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'exportECSServiceRecommendations', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  exportLambdaFunctionRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'exportLambdaFunctionRecommendations', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  exportLambdaFunctionRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'exportLambdaFunctionRecommendations', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  exportLambdaFunctionRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'exportLambdaFunctionRecommendations', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  exportLicenseRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'exportLicenseRecommendations', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  exportLicenseRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'exportLicenseRecommendations', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  exportLicenseRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'exportLicenseRecommendations', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  getAutoScalingGroupRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getAutoScalingGroupRecommendations', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  getAutoScalingGroupRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getAutoScalingGroupRecommendations', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  getAutoScalingGroupRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getAutoScalingGroupRecommendations', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  getEBSVolumeRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getEBSVolumeRecommendations', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  getEBSVolumeRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getEBSVolumeRecommendations', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  getEBSVolumeRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getEBSVolumeRecommendations', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  getEC2InstanceRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getEC2InstanceRecommendations', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  getEC2InstanceRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getEC2InstanceRecommendations', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  getEC2InstanceRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getEC2InstanceRecommendations', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  getEC2RecommendationProjectedMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getEC2RecommendationProjectedMetrics', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  getEC2RecommendationProjectedMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getEC2RecommendationProjectedMetrics', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  getEC2RecommendationProjectedMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getEC2RecommendationProjectedMetrics', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  getECSServiceRecommendationProjectedMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getECSServiceRecommendationProjectedMetrics', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  getECSServiceRecommendationProjectedMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getECSServiceRecommendationProjectedMetrics', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  getECSServiceRecommendationProjectedMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getECSServiceRecommendationProjectedMetrics', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  getECSServiceRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getECSServiceRecommendations', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  getECSServiceRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getECSServiceRecommendations', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  getECSServiceRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getECSServiceRecommendations', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  getEffectiveRecommendationPreferences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getEffectiveRecommendationPreferences', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  getEffectiveRecommendationPreferencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getEffectiveRecommendationPreferences', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  getEffectiveRecommendationPreferencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getEffectiveRecommendationPreferences', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  getEnrollmentStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getEnrollmentStatus', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  getEnrollmentStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getEnrollmentStatus', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  getEnrollmentStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getEnrollmentStatus', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  getEnrollmentStatusesForOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getEnrollmentStatusesForOrganization', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  getEnrollmentStatusesForOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getEnrollmentStatusesForOrganization', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  getEnrollmentStatusesForOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getEnrollmentStatusesForOrganization', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  getLambdaFunctionRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getLambdaFunctionRecommendations', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  getLambdaFunctionRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getLambdaFunctionRecommendations', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  getLambdaFunctionRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getLambdaFunctionRecommendations', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  getLicenseRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getLicenseRecommendations', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  getLicenseRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getLicenseRecommendations', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  getLicenseRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getLicenseRecommendations', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  getRecommendationPreferences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getRecommendationPreferences', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  getRecommendationPreferencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getRecommendationPreferences', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  getRecommendationPreferencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getRecommendationPreferences', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  getRecommendationSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getRecommendationSummaries', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  getRecommendationSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getRecommendationSummaries', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  getRecommendationSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'getRecommendationSummaries', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  putRecommendationPreferences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'putRecommendationPreferences', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  putRecommendationPreferencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'putRecommendationPreferences', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  putRecommendationPreferencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'putRecommendationPreferences', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  updateEnrollmentStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'updateEnrollmentStatus', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  updateEnrollmentStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'updateEnrollmentStatus', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  updateEnrollmentStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'updateEnrollmentStatus', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'send', 'ComputeOptimizerClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'send', 'ComputeOptimizerClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-compute-optimizer', 'send', 'ComputeOptimizerClient', Promise.reject(result), true, mock)
  }
}
