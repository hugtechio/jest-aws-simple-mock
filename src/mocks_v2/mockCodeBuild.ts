
/**
* @description mocks_v2:mockCodeBuild.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockCodeBuild = {
  batchDeleteBuilds: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteBuilds', 'CodeBuild', result, true, true, mock)
  },
  batchDeleteBuildsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteBuilds', 'CodeBuild', result, false, true, mock)
  },
  batchDeleteBuildsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteBuilds', 'CodeBuild', result, true, false, mock)
  },
  batchGetBuildBatches: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetBuildBatches', 'CodeBuild', result, true, true, mock)
  },
  batchGetBuildBatchesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetBuildBatches', 'CodeBuild', result, false, true, mock)
  },
  batchGetBuildBatchesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetBuildBatches', 'CodeBuild', result, true, false, mock)
  },
  batchGetBuilds: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetBuilds', 'CodeBuild', result, true, true, mock)
  },
  batchGetBuildsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetBuilds', 'CodeBuild', result, false, true, mock)
  },
  batchGetBuildsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetBuilds', 'CodeBuild', result, true, false, mock)
  },
  batchGetProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetProjects', 'CodeBuild', result, true, true, mock)
  },
  batchGetProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetProjects', 'CodeBuild', result, false, true, mock)
  },
  batchGetProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetProjects', 'CodeBuild', result, true, false, mock)
  },
  batchGetReportGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetReportGroups', 'CodeBuild', result, true, true, mock)
  },
  batchGetReportGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetReportGroups', 'CodeBuild', result, false, true, mock)
  },
  batchGetReportGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetReportGroups', 'CodeBuild', result, true, false, mock)
  },
  batchGetReports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetReports', 'CodeBuild', result, true, true, mock)
  },
  batchGetReportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetReports', 'CodeBuild', result, false, true, mock)
  },
  batchGetReportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetReports', 'CodeBuild', result, true, false, mock)
  },
  createProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'CodeBuild', result, true, true, mock)
  },
  createProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'CodeBuild', result, false, true, mock)
  },
  createProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'CodeBuild', result, true, false, mock)
  },
  createReportGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReportGroup', 'CodeBuild', result, true, true, mock)
  },
  createReportGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReportGroup', 'CodeBuild', result, false, true, mock)
  },
  createReportGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReportGroup', 'CodeBuild', result, true, false, mock)
  },
  createWebhook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebhook', 'CodeBuild', result, true, true, mock)
  },
  createWebhookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebhook', 'CodeBuild', result, false, true, mock)
  },
  createWebhookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebhook', 'CodeBuild', result, true, false, mock)
  },
  deleteBuildBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBuildBatch', 'CodeBuild', result, true, true, mock)
  },
  deleteBuildBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBuildBatch', 'CodeBuild', result, false, true, mock)
  },
  deleteBuildBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBuildBatch', 'CodeBuild', result, true, false, mock)
  },
  deleteProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'CodeBuild', result, true, true, mock)
  },
  deleteProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'CodeBuild', result, false, true, mock)
  },
  deleteProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'CodeBuild', result, true, false, mock)
  },
  deleteReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReport', 'CodeBuild', result, true, true, mock)
  },
  deleteReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReport', 'CodeBuild', result, false, true, mock)
  },
  deleteReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReport', 'CodeBuild', result, true, false, mock)
  },
  deleteReportGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReportGroup', 'CodeBuild', result, true, true, mock)
  },
  deleteReportGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReportGroup', 'CodeBuild', result, false, true, mock)
  },
  deleteReportGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReportGroup', 'CodeBuild', result, true, false, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'CodeBuild', result, true, true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'CodeBuild', result, false, true, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcePolicy', 'CodeBuild', result, true, false, mock)
  },
  deleteSourceCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSourceCredentials', 'CodeBuild', result, true, true, mock)
  },
  deleteSourceCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSourceCredentials', 'CodeBuild', result, false, true, mock)
  },
  deleteSourceCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSourceCredentials', 'CodeBuild', result, true, false, mock)
  },
  deleteWebhook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWebhook', 'CodeBuild', result, true, true, mock)
  },
  deleteWebhookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWebhook', 'CodeBuild', result, false, true, mock)
  },
  deleteWebhookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWebhook', 'CodeBuild', result, true, false, mock)
  },
  describeCodeCoverages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCodeCoverages', 'CodeBuild', result, true, true, mock)
  },
  describeCodeCoveragesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCodeCoverages', 'CodeBuild', result, false, true, mock)
  },
  describeCodeCoveragesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCodeCoverages', 'CodeBuild', result, true, false, mock)
  },
  describeTestCases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTestCases', 'CodeBuild', result, true, true, mock)
  },
  describeTestCasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTestCases', 'CodeBuild', result, false, true, mock)
  },
  describeTestCasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTestCases', 'CodeBuild', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeBuild', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeBuild', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeBuild', result, true, false, mock)
  },
  getReportGroupTrend: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReportGroupTrend', 'CodeBuild', result, true, true, mock)
  },
  getReportGroupTrendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReportGroupTrend', 'CodeBuild', result, false, true, mock)
  },
  getReportGroupTrendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReportGroupTrend', 'CodeBuild', result, true, false, mock)
  },
  getResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicy', 'CodeBuild', result, true, true, mock)
  },
  getResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicy', 'CodeBuild', result, false, true, mock)
  },
  getResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourcePolicy', 'CodeBuild', result, true, false, mock)
  },
  importSourceCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importSourceCredentials', 'CodeBuild', result, true, true, mock)
  },
  importSourceCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importSourceCredentials', 'CodeBuild', result, false, true, mock)
  },
  importSourceCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importSourceCredentials', 'CodeBuild', result, true, false, mock)
  },
  invalidateProjectCache: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invalidateProjectCache', 'CodeBuild', result, true, true, mock)
  },
  invalidateProjectCacheAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invalidateProjectCache', 'CodeBuild', result, false, true, mock)
  },
  invalidateProjectCacheThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('invalidateProjectCache', 'CodeBuild', result, true, false, mock)
  },
  listBuildBatches: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuildBatches', 'CodeBuild', result, true, true, mock)
  },
  listBuildBatchesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuildBatches', 'CodeBuild', result, false, true, mock)
  },
  listBuildBatchesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuildBatches', 'CodeBuild', result, true, false, mock)
  },
  listBuildBatchesForProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuildBatchesForProject', 'CodeBuild', result, true, true, mock)
  },
  listBuildBatchesForProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuildBatchesForProject', 'CodeBuild', result, false, true, mock)
  },
  listBuildBatchesForProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuildBatchesForProject', 'CodeBuild', result, true, false, mock)
  },
  listBuilds: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuilds', 'CodeBuild', result, true, true, mock)
  },
  listBuildsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuilds', 'CodeBuild', result, false, true, mock)
  },
  listBuildsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuilds', 'CodeBuild', result, true, false, mock)
  },
  listBuildsForProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuildsForProject', 'CodeBuild', result, true, true, mock)
  },
  listBuildsForProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuildsForProject', 'CodeBuild', result, false, true, mock)
  },
  listBuildsForProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBuildsForProject', 'CodeBuild', result, true, false, mock)
  },
  listCuratedEnvironmentImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCuratedEnvironmentImages', 'CodeBuild', result, true, true, mock)
  },
  listCuratedEnvironmentImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCuratedEnvironmentImages', 'CodeBuild', result, false, true, mock)
  },
  listCuratedEnvironmentImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCuratedEnvironmentImages', 'CodeBuild', result, true, false, mock)
  },
  listProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'CodeBuild', result, true, true, mock)
  },
  listProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'CodeBuild', result, false, true, mock)
  },
  listProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'CodeBuild', result, true, false, mock)
  },
  listReportGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReportGroups', 'CodeBuild', result, true, true, mock)
  },
  listReportGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReportGroups', 'CodeBuild', result, false, true, mock)
  },
  listReportGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReportGroups', 'CodeBuild', result, true, false, mock)
  },
  listReports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReports', 'CodeBuild', result, true, true, mock)
  },
  listReportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReports', 'CodeBuild', result, false, true, mock)
  },
  listReportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReports', 'CodeBuild', result, true, false, mock)
  },
  listReportsForReportGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReportsForReportGroup', 'CodeBuild', result, true, true, mock)
  },
  listReportsForReportGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReportsForReportGroup', 'CodeBuild', result, false, true, mock)
  },
  listReportsForReportGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReportsForReportGroup', 'CodeBuild', result, true, false, mock)
  },
  listSharedProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSharedProjects', 'CodeBuild', result, true, true, mock)
  },
  listSharedProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSharedProjects', 'CodeBuild', result, false, true, mock)
  },
  listSharedProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSharedProjects', 'CodeBuild', result, true, false, mock)
  },
  listSharedReportGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSharedReportGroups', 'CodeBuild', result, true, true, mock)
  },
  listSharedReportGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSharedReportGroups', 'CodeBuild', result, false, true, mock)
  },
  listSharedReportGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSharedReportGroups', 'CodeBuild', result, true, false, mock)
  },
  listSourceCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSourceCredentials', 'CodeBuild', result, true, true, mock)
  },
  listSourceCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSourceCredentials', 'CodeBuild', result, false, true, mock)
  },
  listSourceCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSourceCredentials', 'CodeBuild', result, true, false, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'CodeBuild', result, true, true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'CodeBuild', result, false, true, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putResourcePolicy', 'CodeBuild', result, true, false, mock)
  },
  retryBuild: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retryBuild', 'CodeBuild', result, true, true, mock)
  },
  retryBuildAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retryBuild', 'CodeBuild', result, false, true, mock)
  },
  retryBuildThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retryBuild', 'CodeBuild', result, true, false, mock)
  },
  retryBuildBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retryBuildBatch', 'CodeBuild', result, true, true, mock)
  },
  retryBuildBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retryBuildBatch', 'CodeBuild', result, false, true, mock)
  },
  retryBuildBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retryBuildBatch', 'CodeBuild', result, true, false, mock)
  },
  startBuild: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBuild', 'CodeBuild', result, true, true, mock)
  },
  startBuildAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBuild', 'CodeBuild', result, false, true, mock)
  },
  startBuildThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBuild', 'CodeBuild', result, true, false, mock)
  },
  startBuildBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBuildBatch', 'CodeBuild', result, true, true, mock)
  },
  startBuildBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBuildBatch', 'CodeBuild', result, false, true, mock)
  },
  startBuildBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBuildBatch', 'CodeBuild', result, true, false, mock)
  },
  stopBuild: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopBuild', 'CodeBuild', result, true, true, mock)
  },
  stopBuildAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopBuild', 'CodeBuild', result, false, true, mock)
  },
  stopBuildThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopBuild', 'CodeBuild', result, true, false, mock)
  },
  stopBuildBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopBuildBatch', 'CodeBuild', result, true, true, mock)
  },
  stopBuildBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopBuildBatch', 'CodeBuild', result, false, true, mock)
  },
  stopBuildBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopBuildBatch', 'CodeBuild', result, true, false, mock)
  },
  updateProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProject', 'CodeBuild', result, true, true, mock)
  },
  updateProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProject', 'CodeBuild', result, false, true, mock)
  },
  updateProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProject', 'CodeBuild', result, true, false, mock)
  },
  updateProjectVisibility: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProjectVisibility', 'CodeBuild', result, true, true, mock)
  },
  updateProjectVisibilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProjectVisibility', 'CodeBuild', result, false, true, mock)
  },
  updateProjectVisibilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProjectVisibility', 'CodeBuild', result, true, false, mock)
  },
  updateReportGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReportGroup', 'CodeBuild', result, true, true, mock)
  },
  updateReportGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReportGroup', 'CodeBuild', result, false, true, mock)
  },
  updateReportGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReportGroup', 'CodeBuild', result, true, false, mock)
  },
  updateWebhook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWebhook', 'CodeBuild', result, true, true, mock)
  },
  updateWebhookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWebhook', 'CodeBuild', result, false, true, mock)
  },
  updateWebhookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWebhook', 'CodeBuild', result, true, false, mock)
  },
}
