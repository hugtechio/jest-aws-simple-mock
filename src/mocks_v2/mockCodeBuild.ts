
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
  export const mockCodeBuild = {
  batchDeleteBuilds: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteBuilds', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  batchDeleteBuildsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteBuilds', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  batchDeleteBuildsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteBuilds', 'CodeBuild', Promise.reject(result), true, mock)
  },
  batchGetBuildBatches: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetBuildBatches', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  batchGetBuildBatchesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetBuildBatches', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  batchGetBuildBatchesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetBuildBatches', 'CodeBuild', Promise.reject(result), true, mock)
  },
  batchGetBuilds: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetBuilds', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  batchGetBuildsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetBuilds', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  batchGetBuildsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetBuilds', 'CodeBuild', Promise.reject(result), true, mock)
  },
  batchGetProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetProjects', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  batchGetProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetProjects', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  batchGetProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetProjects', 'CodeBuild', Promise.reject(result), true, mock)
  },
  batchGetReportGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetReportGroups', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  batchGetReportGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetReportGroups', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  batchGetReportGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetReportGroups', 'CodeBuild', Promise.reject(result), true, mock)
  },
  batchGetReports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetReports', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  batchGetReportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetReports', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  batchGetReportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetReports', 'CodeBuild', Promise.reject(result), true, mock)
  },
  createProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  createProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  createProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'CodeBuild', Promise.reject(result), true, mock)
  },
  createReportGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReportGroup', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  createReportGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReportGroup', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  createReportGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReportGroup', 'CodeBuild', Promise.reject(result), true, mock)
  },
  createWebhook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebhook', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  createWebhookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebhook', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  createWebhookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebhook', 'CodeBuild', Promise.reject(result), true, mock)
  },
  deleteBuildBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBuildBatch', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  deleteBuildBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBuildBatch', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  deleteBuildBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBuildBatch', 'CodeBuild', Promise.reject(result), true, mock)
  },
  deleteProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  deleteProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  deleteProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'CodeBuild', Promise.reject(result), true, mock)
  },
  deleteReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReport', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  deleteReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReport', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  deleteReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReport', 'CodeBuild', Promise.reject(result), true, mock)
  },
  deleteReportGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReportGroup', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  deleteReportGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReportGroup', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  deleteReportGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReportGroup', 'CodeBuild', Promise.reject(result), true, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'CodeBuild', Promise.reject(result), true, mock)
  },
  deleteSourceCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSourceCredentials', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  deleteSourceCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSourceCredentials', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  deleteSourceCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSourceCredentials', 'CodeBuild', Promise.reject(result), true, mock)
  },
  deleteWebhook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWebhook', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  deleteWebhookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWebhook', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  deleteWebhookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWebhook', 'CodeBuild', Promise.reject(result), true, mock)
  },
  describeCodeCoverages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCodeCoverages', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  describeCodeCoveragesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCodeCoverages', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  describeCodeCoveragesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCodeCoverages', 'CodeBuild', Promise.reject(result), true, mock)
  },
  describeTestCases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTestCases', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  describeTestCasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTestCases', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  describeTestCasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTestCases', 'CodeBuild', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeBuild', Promise.reject(result), true, mock)
  },
  getReportGroupTrend: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReportGroupTrend', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  getReportGroupTrendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReportGroupTrend', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  getReportGroupTrendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReportGroupTrend', 'CodeBuild', Promise.reject(result), true, mock)
  },
  getResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicy', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  getResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicy', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  getResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicy', 'CodeBuild', Promise.reject(result), true, mock)
  },
  importSourceCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importSourceCredentials', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  importSourceCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importSourceCredentials', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  importSourceCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importSourceCredentials', 'CodeBuild', Promise.reject(result), true, mock)
  },
  invalidateProjectCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invalidateProjectCache', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  invalidateProjectCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invalidateProjectCache', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  invalidateProjectCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invalidateProjectCache', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listBuildBatches: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuildBatches', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listBuildBatchesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuildBatches', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listBuildBatchesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuildBatches', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listBuildBatchesForProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuildBatchesForProject', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listBuildBatchesForProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuildBatchesForProject', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listBuildBatchesForProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuildBatchesForProject', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listBuilds: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuilds', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listBuildsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuilds', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listBuildsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuilds', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listBuildsForProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuildsForProject', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listBuildsForProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuildsForProject', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listBuildsForProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuildsForProject', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listCuratedEnvironmentImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCuratedEnvironmentImages', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listCuratedEnvironmentImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCuratedEnvironmentImages', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listCuratedEnvironmentImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCuratedEnvironmentImages', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listReportGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReportGroups', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listReportGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReportGroups', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listReportGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReportGroups', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listReports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReports', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listReportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReports', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listReportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReports', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listReportsForReportGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReportsForReportGroup', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listReportsForReportGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReportsForReportGroup', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listReportsForReportGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReportsForReportGroup', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listSharedProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSharedProjects', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listSharedProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSharedProjects', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listSharedProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSharedProjects', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listSharedReportGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSharedReportGroups', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listSharedReportGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSharedReportGroups', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listSharedReportGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSharedReportGroups', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listSourceCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSourceCredentials', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listSourceCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSourceCredentials', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listSourceCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSourceCredentials', 'CodeBuild', Promise.reject(result), true, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'CodeBuild', Promise.reject(result), true, mock)
  },
  retryBuild: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retryBuild', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  retryBuildAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retryBuild', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  retryBuildThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retryBuild', 'CodeBuild', Promise.reject(result), true, mock)
  },
  retryBuildBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retryBuildBatch', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  retryBuildBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retryBuildBatch', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  retryBuildBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retryBuildBatch', 'CodeBuild', Promise.reject(result), true, mock)
  },
  startBuild: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBuild', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  startBuildAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBuild', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  startBuildThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBuild', 'CodeBuild', Promise.reject(result), true, mock)
  },
  startBuildBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBuildBatch', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  startBuildBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBuildBatch', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  startBuildBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBuildBatch', 'CodeBuild', Promise.reject(result), true, mock)
  },
  stopBuild: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopBuild', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  stopBuildAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopBuild', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  stopBuildThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopBuild', 'CodeBuild', Promise.reject(result), true, mock)
  },
  stopBuildBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopBuildBatch', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  stopBuildBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopBuildBatch', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  stopBuildBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopBuildBatch', 'CodeBuild', Promise.reject(result), true, mock)
  },
  updateProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProject', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  updateProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProject', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  updateProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProject', 'CodeBuild', Promise.reject(result), true, mock)
  },
  updateProjectVisibility: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProjectVisibility', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  updateProjectVisibilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProjectVisibility', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  updateProjectVisibilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProjectVisibility', 'CodeBuild', Promise.reject(result), true, mock)
  },
  updateReportGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReportGroup', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  updateReportGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReportGroup', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  updateReportGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReportGroup', 'CodeBuild', Promise.reject(result), true, mock)
  },
  updateWebhook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWebhook', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  updateWebhookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWebhook', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  updateWebhookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWebhook', 'CodeBuild', Promise.reject(result), true, mock)
  },
}
