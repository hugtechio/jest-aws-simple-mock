
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
  export const mockApplicationInsights = {
  createApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplication', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  createApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplication', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  createApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplication', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  createComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createComponent', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  createComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createComponent', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  createComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createComponent', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  createLogPattern: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLogPattern', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  createLogPatternAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLogPattern', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  createLogPatternThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLogPattern', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  deleteApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplication', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  deleteApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplication', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  deleteApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplication', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  deleteComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteComponent', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  deleteComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteComponent', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  deleteComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteComponent', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  deleteLogPattern: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLogPattern', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  deleteLogPatternAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLogPattern', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  deleteLogPatternThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLogPattern', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  describeApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplication', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  describeApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplication', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  describeApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplication', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  describeComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComponent', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  describeComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComponent', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  describeComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComponent', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  describeComponentConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComponentConfiguration', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  describeComponentConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComponentConfiguration', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  describeComponentConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComponentConfiguration', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  describeComponentConfigurationRecommendation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComponentConfigurationRecommendation', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  describeComponentConfigurationRecommendationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComponentConfigurationRecommendation', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  describeComponentConfigurationRecommendationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComponentConfigurationRecommendation', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  describeLogPattern: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLogPattern', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  describeLogPatternAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLogPattern', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  describeLogPatternThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLogPattern', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  describeObservation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeObservation', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  describeObservationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeObservation', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  describeObservationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeObservation', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  describeProblem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProblem', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  describeProblemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProblem', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  describeProblemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProblem', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  describeProblemObservations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProblemObservations', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  describeProblemObservationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProblemObservations', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  describeProblemObservationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProblemObservations', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  listApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplications', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  listApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplications', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  listApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplications', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  listComponents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComponents', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  listComponentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComponents', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  listComponentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComponents', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  listConfigurationHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConfigurationHistory', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  listConfigurationHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConfigurationHistory', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  listConfigurationHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConfigurationHistory', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  listLogPatternSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLogPatternSets', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  listLogPatternSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLogPatternSets', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  listLogPatternSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLogPatternSets', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  listLogPatterns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLogPatterns', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  listLogPatternsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLogPatterns', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  listLogPatternsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLogPatterns', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  listProblems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProblems', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  listProblemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProblems', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  listProblemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProblems', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  updateApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplication', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  updateApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplication', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  updateApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplication', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  updateComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateComponent', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  updateComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateComponent', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  updateComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateComponent', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  updateComponentConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateComponentConfiguration', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  updateComponentConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateComponentConfiguration', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  updateComponentConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateComponentConfiguration', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
  updateLogPattern: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLogPattern', 'ApplicationInsights', Promise.resolve(result), true, mock)
  },
  updateLogPatternAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLogPattern', 'ApplicationInsights', Promise.resolve(result), false, mock)
  },
  updateLogPatternThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLogPattern', 'ApplicationInsights', Promise.reject(result), true, mock)
  },
}
