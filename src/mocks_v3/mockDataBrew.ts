
/**
* @description mocks_v3:mockDataBrew module is mocks for AWS-SDK V3
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

  export const mockDataBrew = {
  batchDeleteRecipeVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'batchDeleteRecipeVersion', 'DataBrew', Promise.resolve(result), true, mock)
  },
  batchDeleteRecipeVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'batchDeleteRecipeVersion', 'DataBrew', Promise.resolve(result), false, mock)
  },
  batchDeleteRecipeVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'batchDeleteRecipeVersion', 'DataBrew', Promise.reject(result), true, mock)
  },
  createDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'createDataset', 'DataBrew', Promise.resolve(result), true, mock)
  },
  createDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'createDataset', 'DataBrew', Promise.resolve(result), false, mock)
  },
  createDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'createDataset', 'DataBrew', Promise.reject(result), true, mock)
  },
  createProfileJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'createProfileJob', 'DataBrew', Promise.resolve(result), true, mock)
  },
  createProfileJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'createProfileJob', 'DataBrew', Promise.resolve(result), false, mock)
  },
  createProfileJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'createProfileJob', 'DataBrew', Promise.reject(result), true, mock)
  },
  createProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'createProject', 'DataBrew', Promise.resolve(result), true, mock)
  },
  createProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'createProject', 'DataBrew', Promise.resolve(result), false, mock)
  },
  createProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'createProject', 'DataBrew', Promise.reject(result), true, mock)
  },
  createRecipe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'createRecipe', 'DataBrew', Promise.resolve(result), true, mock)
  },
  createRecipeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'createRecipe', 'DataBrew', Promise.resolve(result), false, mock)
  },
  createRecipeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'createRecipe', 'DataBrew', Promise.reject(result), true, mock)
  },
  createRecipeJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'createRecipeJob', 'DataBrew', Promise.resolve(result), true, mock)
  },
  createRecipeJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'createRecipeJob', 'DataBrew', Promise.resolve(result), false, mock)
  },
  createRecipeJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'createRecipeJob', 'DataBrew', Promise.reject(result), true, mock)
  },
  createSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'createSchedule', 'DataBrew', Promise.resolve(result), true, mock)
  },
  createScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'createSchedule', 'DataBrew', Promise.resolve(result), false, mock)
  },
  createScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'createSchedule', 'DataBrew', Promise.reject(result), true, mock)
  },
  deleteDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'deleteDataset', 'DataBrew', Promise.resolve(result), true, mock)
  },
  deleteDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'deleteDataset', 'DataBrew', Promise.resolve(result), false, mock)
  },
  deleteDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'deleteDataset', 'DataBrew', Promise.reject(result), true, mock)
  },
  deleteJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'deleteJob', 'DataBrew', Promise.resolve(result), true, mock)
  },
  deleteJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'deleteJob', 'DataBrew', Promise.resolve(result), false, mock)
  },
  deleteJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'deleteJob', 'DataBrew', Promise.reject(result), true, mock)
  },
  deleteProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'deleteProject', 'DataBrew', Promise.resolve(result), true, mock)
  },
  deleteProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'deleteProject', 'DataBrew', Promise.resolve(result), false, mock)
  },
  deleteProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'deleteProject', 'DataBrew', Promise.reject(result), true, mock)
  },
  deleteRecipeVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'deleteRecipeVersion', 'DataBrew', Promise.resolve(result), true, mock)
  },
  deleteRecipeVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'deleteRecipeVersion', 'DataBrew', Promise.resolve(result), false, mock)
  },
  deleteRecipeVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'deleteRecipeVersion', 'DataBrew', Promise.reject(result), true, mock)
  },
  deleteSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'deleteSchedule', 'DataBrew', Promise.resolve(result), true, mock)
  },
  deleteScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'deleteSchedule', 'DataBrew', Promise.resolve(result), false, mock)
  },
  deleteScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'deleteSchedule', 'DataBrew', Promise.reject(result), true, mock)
  },
  describeDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'describeDataset', 'DataBrew', Promise.resolve(result), true, mock)
  },
  describeDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'describeDataset', 'DataBrew', Promise.resolve(result), false, mock)
  },
  describeDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'describeDataset', 'DataBrew', Promise.reject(result), true, mock)
  },
  describeJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'describeJob', 'DataBrew', Promise.resolve(result), true, mock)
  },
  describeJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'describeJob', 'DataBrew', Promise.resolve(result), false, mock)
  },
  describeJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'describeJob', 'DataBrew', Promise.reject(result), true, mock)
  },
  describeJobRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'describeJobRun', 'DataBrew', Promise.resolve(result), true, mock)
  },
  describeJobRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'describeJobRun', 'DataBrew', Promise.resolve(result), false, mock)
  },
  describeJobRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'describeJobRun', 'DataBrew', Promise.reject(result), true, mock)
  },
  describeProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'describeProject', 'DataBrew', Promise.resolve(result), true, mock)
  },
  describeProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'describeProject', 'DataBrew', Promise.resolve(result), false, mock)
  },
  describeProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'describeProject', 'DataBrew', Promise.reject(result), true, mock)
  },
  describeRecipe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'describeRecipe', 'DataBrew', Promise.resolve(result), true, mock)
  },
  describeRecipeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'describeRecipe', 'DataBrew', Promise.resolve(result), false, mock)
  },
  describeRecipeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'describeRecipe', 'DataBrew', Promise.reject(result), true, mock)
  },
  describeSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'describeSchedule', 'DataBrew', Promise.resolve(result), true, mock)
  },
  describeScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'describeSchedule', 'DataBrew', Promise.resolve(result), false, mock)
  },
  describeScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'describeSchedule', 'DataBrew', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'destroy', 'DataBrew', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'destroy', 'DataBrew', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'destroy', 'DataBrew', Promise.reject(result), true, mock)
  },
  listDatasets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listDatasets', 'DataBrew', Promise.resolve(result), true, mock)
  },
  listDatasetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listDatasets', 'DataBrew', Promise.resolve(result), false, mock)
  },
  listDatasetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listDatasets', 'DataBrew', Promise.reject(result), true, mock)
  },
  listJobRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listJobRuns', 'DataBrew', Promise.resolve(result), true, mock)
  },
  listJobRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listJobRuns', 'DataBrew', Promise.resolve(result), false, mock)
  },
  listJobRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listJobRuns', 'DataBrew', Promise.reject(result), true, mock)
  },
  listJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listJobs', 'DataBrew', Promise.resolve(result), true, mock)
  },
  listJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listJobs', 'DataBrew', Promise.resolve(result), false, mock)
  },
  listJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listJobs', 'DataBrew', Promise.reject(result), true, mock)
  },
  listProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listProjects', 'DataBrew', Promise.resolve(result), true, mock)
  },
  listProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listProjects', 'DataBrew', Promise.resolve(result), false, mock)
  },
  listProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listProjects', 'DataBrew', Promise.reject(result), true, mock)
  },
  listRecipeVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listRecipeVersions', 'DataBrew', Promise.resolve(result), true, mock)
  },
  listRecipeVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listRecipeVersions', 'DataBrew', Promise.resolve(result), false, mock)
  },
  listRecipeVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listRecipeVersions', 'DataBrew', Promise.reject(result), true, mock)
  },
  listRecipes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listRecipes', 'DataBrew', Promise.resolve(result), true, mock)
  },
  listRecipesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listRecipes', 'DataBrew', Promise.resolve(result), false, mock)
  },
  listRecipesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listRecipes', 'DataBrew', Promise.reject(result), true, mock)
  },
  listSchedules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listSchedules', 'DataBrew', Promise.resolve(result), true, mock)
  },
  listSchedulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listSchedules', 'DataBrew', Promise.resolve(result), false, mock)
  },
  listSchedulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listSchedules', 'DataBrew', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listTagsForResource', 'DataBrew', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listTagsForResource', 'DataBrew', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'listTagsForResource', 'DataBrew', Promise.reject(result), true, mock)
  },
  publishRecipe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'publishRecipe', 'DataBrew', Promise.resolve(result), true, mock)
  },
  publishRecipeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'publishRecipe', 'DataBrew', Promise.resolve(result), false, mock)
  },
  publishRecipeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'publishRecipe', 'DataBrew', Promise.reject(result), true, mock)
  },
  sendProjectSessionAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'sendProjectSessionAction', 'DataBrew', Promise.resolve(result), true, mock)
  },
  sendProjectSessionActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'sendProjectSessionAction', 'DataBrew', Promise.resolve(result), false, mock)
  },
  sendProjectSessionActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'sendProjectSessionAction', 'DataBrew', Promise.reject(result), true, mock)
  },
  startJobRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'startJobRun', 'DataBrew', Promise.resolve(result), true, mock)
  },
  startJobRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'startJobRun', 'DataBrew', Promise.resolve(result), false, mock)
  },
  startJobRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'startJobRun', 'DataBrew', Promise.reject(result), true, mock)
  },
  startProjectSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'startProjectSession', 'DataBrew', Promise.resolve(result), true, mock)
  },
  startProjectSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'startProjectSession', 'DataBrew', Promise.resolve(result), false, mock)
  },
  startProjectSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'startProjectSession', 'DataBrew', Promise.reject(result), true, mock)
  },
  stopJobRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'stopJobRun', 'DataBrew', Promise.resolve(result), true, mock)
  },
  stopJobRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'stopJobRun', 'DataBrew', Promise.resolve(result), false, mock)
  },
  stopJobRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'stopJobRun', 'DataBrew', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'tagResource', 'DataBrew', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'tagResource', 'DataBrew', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'tagResource', 'DataBrew', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'untagResource', 'DataBrew', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'untagResource', 'DataBrew', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'untagResource', 'DataBrew', Promise.reject(result), true, mock)
  },
  updateDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'updateDataset', 'DataBrew', Promise.resolve(result), true, mock)
  },
  updateDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'updateDataset', 'DataBrew', Promise.resolve(result), false, mock)
  },
  updateDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'updateDataset', 'DataBrew', Promise.reject(result), true, mock)
  },
  updateProfileJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'updateProfileJob', 'DataBrew', Promise.resolve(result), true, mock)
  },
  updateProfileJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'updateProfileJob', 'DataBrew', Promise.resolve(result), false, mock)
  },
  updateProfileJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'updateProfileJob', 'DataBrew', Promise.reject(result), true, mock)
  },
  updateProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'updateProject', 'DataBrew', Promise.resolve(result), true, mock)
  },
  updateProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'updateProject', 'DataBrew', Promise.resolve(result), false, mock)
  },
  updateProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'updateProject', 'DataBrew', Promise.reject(result), true, mock)
  },
  updateRecipe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'updateRecipe', 'DataBrew', Promise.resolve(result), true, mock)
  },
  updateRecipeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'updateRecipe', 'DataBrew', Promise.resolve(result), false, mock)
  },
  updateRecipeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'updateRecipe', 'DataBrew', Promise.reject(result), true, mock)
  },
  updateRecipeJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'updateRecipeJob', 'DataBrew', Promise.resolve(result), true, mock)
  },
  updateRecipeJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'updateRecipeJob', 'DataBrew', Promise.resolve(result), false, mock)
  },
  updateRecipeJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'updateRecipeJob', 'DataBrew', Promise.reject(result), true, mock)
  },
  updateSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'updateSchedule', 'DataBrew', Promise.resolve(result), true, mock)
  },
  updateScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'updateSchedule', 'DataBrew', Promise.resolve(result), false, mock)
  },
  updateScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'updateSchedule', 'DataBrew', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'send', 'DataBrewClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'send', 'DataBrewClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-databrew', 'send', 'DataBrewClient', Promise.reject(result), true, mock)
  }
}