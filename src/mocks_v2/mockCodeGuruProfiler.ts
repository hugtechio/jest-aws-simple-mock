
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
  export const mockCodeGuruProfiler = {
  addNotificationChannels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addNotificationChannels', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  addNotificationChannelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addNotificationChannels', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  addNotificationChannelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addNotificationChannels', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  batchGetFrameMetricData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetFrameMetricData', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  batchGetFrameMetricDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetFrameMetricData', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  batchGetFrameMetricDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetFrameMetricData', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  configureAgent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('configureAgent', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  configureAgentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('configureAgent', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  configureAgentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('configureAgent', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  createProfilingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProfilingGroup', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  createProfilingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProfilingGroup', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  createProfilingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProfilingGroup', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  deleteProfilingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProfilingGroup', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  deleteProfilingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProfilingGroup', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  deleteProfilingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProfilingGroup', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  describeProfilingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProfilingGroup', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  describeProfilingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProfilingGroup', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  describeProfilingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProfilingGroup', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  getFindingsReportAccountSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindingsReportAccountSummary', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  getFindingsReportAccountSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindingsReportAccountSummary', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  getFindingsReportAccountSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindingsReportAccountSummary', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  getNotificationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNotificationConfiguration', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  getNotificationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNotificationConfiguration', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  getNotificationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNotificationConfiguration', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  getPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPolicy', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  getPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPolicy', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  getPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPolicy', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  getProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProfile', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  getProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProfile', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  getProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProfile', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  getRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecommendations', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  getRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecommendations', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  getRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecommendations', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  listFindingsReports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFindingsReports', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  listFindingsReportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFindingsReports', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  listFindingsReportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFindingsReports', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  listProfileTimes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProfileTimes', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  listProfileTimesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProfileTimes', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  listProfileTimesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProfileTimes', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  listProfilingGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProfilingGroups', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  listProfilingGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProfilingGroups', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  listProfilingGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProfilingGroups', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  postAgentProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postAgentProfile', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  postAgentProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postAgentProfile', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  postAgentProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('postAgentProfile', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  putPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPermission', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  putPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPermission', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  putPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPermission', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  removeNotificationChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeNotificationChannel', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  removeNotificationChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeNotificationChannel', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  removeNotificationChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeNotificationChannel', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  removePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removePermission', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  removePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removePermission', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  removePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removePermission', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  submitFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitFeedback', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  submitFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitFeedback', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  submitFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('submitFeedback', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
  updateProfilingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProfilingGroup', 'CodeGuruProfiler', Promise.resolve(result), true, mock)
  },
  updateProfilingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProfilingGroup', 'CodeGuruProfiler', Promise.resolve(result), false, mock)
  },
  updateProfilingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProfilingGroup', 'CodeGuruProfiler', Promise.reject(result), true, mock)
  },
}
