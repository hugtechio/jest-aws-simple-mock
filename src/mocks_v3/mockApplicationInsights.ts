
/**
* @description mocks_v3:mockApplicationInsights module is mocks for AWS-SDK V3
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

  export const mockApplicationInsights = {
  createApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'createApplication', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  createApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'createApplication', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  createApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'createApplication', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  createComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'createComponent', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  createComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'createComponent', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  createComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'createComponent', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  createLogPattern: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'createLogPattern', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  createLogPatternAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'createLogPattern', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  createLogPatternThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'createLogPattern', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  deleteApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'deleteApplication', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  deleteApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'deleteApplication', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  deleteApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'deleteApplication', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  deleteComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'deleteComponent', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  deleteComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'deleteComponent', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  deleteComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'deleteComponent', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  deleteLogPattern: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'deleteLogPattern', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  deleteLogPatternAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'deleteLogPattern', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  deleteLogPatternThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'deleteLogPattern', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  describeApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeApplication', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  describeApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeApplication', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  describeApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeApplication', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  describeComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeComponent', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  describeComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeComponent', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  describeComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeComponent', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  describeComponentConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeComponentConfiguration', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  describeComponentConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeComponentConfiguration', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  describeComponentConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeComponentConfiguration', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  describeComponentConfigurationRecommendation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeComponentConfigurationRecommendation', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  describeComponentConfigurationRecommendationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeComponentConfigurationRecommendation', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  describeComponentConfigurationRecommendationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeComponentConfigurationRecommendation', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  describeLogPattern: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeLogPattern', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  describeLogPatternAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeLogPattern', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  describeLogPatternThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeLogPattern', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  describeObservation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeObservation', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  describeObservationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeObservation', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  describeObservationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeObservation', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  describeProblem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeProblem', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  describeProblemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeProblem', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  describeProblemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeProblem', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  describeProblemObservations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeProblemObservations', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  describeProblemObservationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeProblemObservations', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  describeProblemObservationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'describeProblemObservations', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'destroy', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'destroy', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'destroy', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  listApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'listApplications', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  listApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'listApplications', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  listApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'listApplications', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  listComponents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'listComponents', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  listComponentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'listComponents', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  listComponentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'listComponents', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  listConfigurationHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'listConfigurationHistory', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  listConfigurationHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'listConfigurationHistory', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  listConfigurationHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'listConfigurationHistory', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  listLogPatternSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'listLogPatternSets', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  listLogPatternSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'listLogPatternSets', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  listLogPatternSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'listLogPatternSets', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  listLogPatterns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'listLogPatterns', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  listLogPatternsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'listLogPatterns', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  listLogPatternsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'listLogPatterns', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  listProblems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'listProblems', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  listProblemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'listProblems', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  listProblemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'listProblems', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'listTagsForResource', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'listTagsForResource', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'listTagsForResource', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'tagResource', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'tagResource', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'tagResource', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'untagResource', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'untagResource', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'untagResource', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  updateApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'updateApplication', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  updateApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'updateApplication', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  updateApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'updateApplication', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  updateComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'updateComponent', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  updateComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'updateComponent', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  updateComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'updateComponent', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  updateComponentConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'updateComponentConfiguration', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  updateComponentConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'updateComponentConfiguration', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  updateComponentConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'updateComponentConfiguration', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  updateLogPattern: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'updateLogPattern', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  updateLogPatternAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'updateLogPattern', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  updateLogPatternThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'updateLogPattern', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'send', 'ApplicationInsightsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'send', 'ApplicationInsightsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-insights', 'send', 'ApplicationInsightsClient', Promise.reject(result), true, mock)
  }
}