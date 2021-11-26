
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
  export const mockComputeOptimizer = {
  describeRecommendationExportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRecommendationExportJobs', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  describeRecommendationExportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRecommendationExportJobs', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  describeRecommendationExportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRecommendationExportJobs', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  exportAutoScalingGroupRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportAutoScalingGroupRecommendations', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  exportAutoScalingGroupRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportAutoScalingGroupRecommendations', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  exportAutoScalingGroupRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportAutoScalingGroupRecommendations', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  exportEBSVolumeRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportEBSVolumeRecommendations', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  exportEBSVolumeRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportEBSVolumeRecommendations', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  exportEBSVolumeRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportEBSVolumeRecommendations', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  exportEC2InstanceRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportEC2InstanceRecommendations', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  exportEC2InstanceRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportEC2InstanceRecommendations', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  exportEC2InstanceRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportEC2InstanceRecommendations', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  exportLambdaFunctionRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportLambdaFunctionRecommendations', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  exportLambdaFunctionRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportLambdaFunctionRecommendations', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  exportLambdaFunctionRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportLambdaFunctionRecommendations', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  getAutoScalingGroupRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAutoScalingGroupRecommendations', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  getAutoScalingGroupRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAutoScalingGroupRecommendations', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  getAutoScalingGroupRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAutoScalingGroupRecommendations', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  getEBSVolumeRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEBSVolumeRecommendations', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  getEBSVolumeRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEBSVolumeRecommendations', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  getEBSVolumeRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEBSVolumeRecommendations', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  getEC2InstanceRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEC2InstanceRecommendations', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  getEC2InstanceRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEC2InstanceRecommendations', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  getEC2InstanceRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEC2InstanceRecommendations', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  getEC2RecommendationProjectedMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEC2RecommendationProjectedMetrics', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  getEC2RecommendationProjectedMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEC2RecommendationProjectedMetrics', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  getEC2RecommendationProjectedMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEC2RecommendationProjectedMetrics', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  getEnrollmentStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEnrollmentStatus', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  getEnrollmentStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEnrollmentStatus', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  getEnrollmentStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEnrollmentStatus', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  getEnrollmentStatusesForOrganization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEnrollmentStatusesForOrganization', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  getEnrollmentStatusesForOrganizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEnrollmentStatusesForOrganization', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  getEnrollmentStatusesForOrganizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEnrollmentStatusesForOrganization', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  getLambdaFunctionRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLambdaFunctionRecommendations', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  getLambdaFunctionRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLambdaFunctionRecommendations', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  getLambdaFunctionRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLambdaFunctionRecommendations', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  getRecommendationSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecommendationSummaries', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  getRecommendationSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecommendationSummaries', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  getRecommendationSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecommendationSummaries', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
  updateEnrollmentStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEnrollmentStatus', 'ComputeOptimizer', Promise.resolve(result), true, mock)
  },
  updateEnrollmentStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEnrollmentStatus', 'ComputeOptimizer', Promise.resolve(result), false, mock)
  },
  updateEnrollmentStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEnrollmentStatus', 'ComputeOptimizer', Promise.reject(result), true, mock)
  },
}
