
/**
* @description mocks_v3:mockCodeBuild module is mocks for AWS-SDK V3
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
export const mockCodeBuild = {
  batchDeleteBuilds: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'batchDeleteBuilds', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  batchDeleteBuildsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'batchDeleteBuilds', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  batchDeleteBuildsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'batchDeleteBuilds', 'CodeBuild', Promise.reject(result), true, mock)
  },
  batchGetBuildBatches: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'batchGetBuildBatches', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  batchGetBuildBatchesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'batchGetBuildBatches', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  batchGetBuildBatchesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'batchGetBuildBatches', 'CodeBuild', Promise.reject(result), true, mock)
  },
  batchGetBuilds: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'batchGetBuilds', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  batchGetBuildsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'batchGetBuilds', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  batchGetBuildsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'batchGetBuilds', 'CodeBuild', Promise.reject(result), true, mock)
  },
  batchGetFleets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'batchGetFleets', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  batchGetFleetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'batchGetFleets', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  batchGetFleetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'batchGetFleets', 'CodeBuild', Promise.reject(result), true, mock)
  },
  batchGetProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'batchGetProjects', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  batchGetProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'batchGetProjects', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  batchGetProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'batchGetProjects', 'CodeBuild', Promise.reject(result), true, mock)
  },
  batchGetReportGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'batchGetReportGroups', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  batchGetReportGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'batchGetReportGroups', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  batchGetReportGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'batchGetReportGroups', 'CodeBuild', Promise.reject(result), true, mock)
  },
  batchGetReports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'batchGetReports', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  batchGetReportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'batchGetReports', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  batchGetReportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'batchGetReports', 'CodeBuild', Promise.reject(result), true, mock)
  },
  createFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'createFleet', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  createFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'createFleet', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  createFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'createFleet', 'CodeBuild', Promise.reject(result), true, mock)
  },
  createProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'createProject', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  createProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'createProject', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  createProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'createProject', 'CodeBuild', Promise.reject(result), true, mock)
  },
  createReportGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'createReportGroup', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  createReportGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'createReportGroup', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  createReportGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'createReportGroup', 'CodeBuild', Promise.reject(result), true, mock)
  },
  createWebhook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'createWebhook', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  createWebhookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'createWebhook', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  createWebhookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'createWebhook', 'CodeBuild', Promise.reject(result), true, mock)
  },
  deleteBuildBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteBuildBatch', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  deleteBuildBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteBuildBatch', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  deleteBuildBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteBuildBatch', 'CodeBuild', Promise.reject(result), true, mock)
  },
  deleteFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteFleet', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  deleteFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteFleet', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  deleteFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteFleet', 'CodeBuild', Promise.reject(result), true, mock)
  },
  deleteProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteProject', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  deleteProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteProject', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  deleteProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteProject', 'CodeBuild', Promise.reject(result), true, mock)
  },
  deleteReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteReport', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  deleteReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteReport', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  deleteReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteReport', 'CodeBuild', Promise.reject(result), true, mock)
  },
  deleteReportGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteReportGroup', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  deleteReportGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteReportGroup', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  deleteReportGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteReportGroup', 'CodeBuild', Promise.reject(result), true, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteResourcePolicy', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteResourcePolicy', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteResourcePolicy', 'CodeBuild', Promise.reject(result), true, mock)
  },
  deleteSourceCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteSourceCredentials', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  deleteSourceCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteSourceCredentials', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  deleteSourceCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteSourceCredentials', 'CodeBuild', Promise.reject(result), true, mock)
  },
  deleteWebhook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteWebhook', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  deleteWebhookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteWebhook', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  deleteWebhookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'deleteWebhook', 'CodeBuild', Promise.reject(result), true, mock)
  },
  describeCodeCoverages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'describeCodeCoverages', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  describeCodeCoveragesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'describeCodeCoverages', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  describeCodeCoveragesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'describeCodeCoverages', 'CodeBuild', Promise.reject(result), true, mock)
  },
  describeTestCases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'describeTestCases', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  describeTestCasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'describeTestCases', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  describeTestCasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'describeTestCases', 'CodeBuild', Promise.reject(result), true, mock)
  },
  getReportGroupTrend: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'getReportGroupTrend', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  getReportGroupTrendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'getReportGroupTrend', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  getReportGroupTrendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'getReportGroupTrend', 'CodeBuild', Promise.reject(result), true, mock)
  },
  getResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'getResourcePolicy', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  getResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'getResourcePolicy', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  getResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'getResourcePolicy', 'CodeBuild', Promise.reject(result), true, mock)
  },
  importSourceCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'importSourceCredentials', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  importSourceCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'importSourceCredentials', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  importSourceCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'importSourceCredentials', 'CodeBuild', Promise.reject(result), true, mock)
  },
  invalidateProjectCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'invalidateProjectCache', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  invalidateProjectCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'invalidateProjectCache', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  invalidateProjectCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'invalidateProjectCache', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listBuildBatches: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listBuildBatches', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listBuildBatchesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listBuildBatches', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listBuildBatchesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listBuildBatches', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listBuildBatchesForProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listBuildBatchesForProject', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listBuildBatchesForProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listBuildBatchesForProject', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listBuildBatchesForProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listBuildBatchesForProject', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listBuilds: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listBuilds', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listBuildsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listBuilds', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listBuildsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listBuilds', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listBuildsForProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listBuildsForProject', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listBuildsForProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listBuildsForProject', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listBuildsForProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listBuildsForProject', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listCuratedEnvironmentImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listCuratedEnvironmentImages', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listCuratedEnvironmentImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listCuratedEnvironmentImages', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listCuratedEnvironmentImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listCuratedEnvironmentImages', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listFleets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listFleets', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listFleetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listFleets', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listFleetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listFleets', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listProjects', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listProjects', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listProjects', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listReportGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listReportGroups', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listReportGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listReportGroups', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listReportGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listReportGroups', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listReports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listReports', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listReportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listReports', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listReportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listReports', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listReportsForReportGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listReportsForReportGroup', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listReportsForReportGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listReportsForReportGroup', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listReportsForReportGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listReportsForReportGroup', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listSharedProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listSharedProjects', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listSharedProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listSharedProjects', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listSharedProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listSharedProjects', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listSharedReportGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listSharedReportGroups', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listSharedReportGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listSharedReportGroups', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listSharedReportGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listSharedReportGroups', 'CodeBuild', Promise.reject(result), true, mock)
  },
  listSourceCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listSourceCredentials', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  listSourceCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listSourceCredentials', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  listSourceCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'listSourceCredentials', 'CodeBuild', Promise.reject(result), true, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'putResourcePolicy', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'putResourcePolicy', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'putResourcePolicy', 'CodeBuild', Promise.reject(result), true, mock)
  },
  retryBuildBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'retryBuildBatch', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  retryBuildBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'retryBuildBatch', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  retryBuildBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'retryBuildBatch', 'CodeBuild', Promise.reject(result), true, mock)
  },
  retryBuild: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'retryBuild', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  retryBuildAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'retryBuild', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  retryBuildThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'retryBuild', 'CodeBuild', Promise.reject(result), true, mock)
  },
  startBuildBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'startBuildBatch', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  startBuildBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'startBuildBatch', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  startBuildBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'startBuildBatch', 'CodeBuild', Promise.reject(result), true, mock)
  },
  startBuild: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'startBuild', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  startBuildAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'startBuild', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  startBuildThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'startBuild', 'CodeBuild', Promise.reject(result), true, mock)
  },
  stopBuildBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'stopBuildBatch', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  stopBuildBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'stopBuildBatch', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  stopBuildBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'stopBuildBatch', 'CodeBuild', Promise.reject(result), true, mock)
  },
  stopBuild: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'stopBuild', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  stopBuildAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'stopBuild', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  stopBuildThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'stopBuild', 'CodeBuild', Promise.reject(result), true, mock)
  },
  updateFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'updateFleet', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  updateFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'updateFleet', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  updateFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'updateFleet', 'CodeBuild', Promise.reject(result), true, mock)
  },
  updateProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'updateProject', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  updateProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'updateProject', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  updateProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'updateProject', 'CodeBuild', Promise.reject(result), true, mock)
  },
  updateProjectVisibility: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'updateProjectVisibility', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  updateProjectVisibilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'updateProjectVisibility', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  updateProjectVisibilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'updateProjectVisibility', 'CodeBuild', Promise.reject(result), true, mock)
  },
  updateReportGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'updateReportGroup', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  updateReportGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'updateReportGroup', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  updateReportGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'updateReportGroup', 'CodeBuild', Promise.reject(result), true, mock)
  },
  updateWebhook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'updateWebhook', 'CodeBuild', Promise.resolve(result), true, mock)
  },
  updateWebhookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'updateWebhook', 'CodeBuild', Promise.resolve(result), false, mock)
  },
  updateWebhookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'updateWebhook', 'CodeBuild', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'send', 'CodeBuildClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'send', 'CodeBuildClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codebuild', 'send', 'CodeBuildClient', Promise.reject(result), true, mock)
  }
}
