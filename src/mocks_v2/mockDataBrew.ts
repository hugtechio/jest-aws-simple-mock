
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
  export const mockDataBrew = {
  batchDeleteRecipeVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteRecipeVersion', 'DataBrew', Promise.resolve(result), true, mock)
  },
  batchDeleteRecipeVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteRecipeVersion', 'DataBrew', Promise.resolve(result), false, mock)
  },
  batchDeleteRecipeVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteRecipeVersion', 'DataBrew', Promise.reject(result), true, mock)
  },
  createDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataset', 'DataBrew', Promise.resolve(result), true, mock)
  },
  createDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataset', 'DataBrew', Promise.resolve(result), false, mock)
  },
  createDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataset', 'DataBrew', Promise.reject(result), true, mock)
  },
  createProfileJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProfileJob', 'DataBrew', Promise.resolve(result), true, mock)
  },
  createProfileJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProfileJob', 'DataBrew', Promise.resolve(result), false, mock)
  },
  createProfileJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProfileJob', 'DataBrew', Promise.reject(result), true, mock)
  },
  createProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'DataBrew', Promise.resolve(result), true, mock)
  },
  createProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'DataBrew', Promise.resolve(result), false, mock)
  },
  createProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProject', 'DataBrew', Promise.reject(result), true, mock)
  },
  createRecipe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRecipe', 'DataBrew', Promise.resolve(result), true, mock)
  },
  createRecipeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRecipe', 'DataBrew', Promise.resolve(result), false, mock)
  },
  createRecipeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRecipe', 'DataBrew', Promise.reject(result), true, mock)
  },
  createRecipeJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRecipeJob', 'DataBrew', Promise.resolve(result), true, mock)
  },
  createRecipeJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRecipeJob', 'DataBrew', Promise.resolve(result), false, mock)
  },
  createRecipeJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRecipeJob', 'DataBrew', Promise.reject(result), true, mock)
  },
  createSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSchedule', 'DataBrew', Promise.resolve(result), true, mock)
  },
  createScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSchedule', 'DataBrew', Promise.resolve(result), false, mock)
  },
  createScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSchedule', 'DataBrew', Promise.reject(result), true, mock)
  },
  deleteDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'DataBrew', Promise.resolve(result), true, mock)
  },
  deleteDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'DataBrew', Promise.resolve(result), false, mock)
  },
  deleteDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataset', 'DataBrew', Promise.reject(result), true, mock)
  },
  deleteJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJob', 'DataBrew', Promise.resolve(result), true, mock)
  },
  deleteJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJob', 'DataBrew', Promise.resolve(result), false, mock)
  },
  deleteJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJob', 'DataBrew', Promise.reject(result), true, mock)
  },
  deleteProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'DataBrew', Promise.resolve(result), true, mock)
  },
  deleteProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'DataBrew', Promise.resolve(result), false, mock)
  },
  deleteProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProject', 'DataBrew', Promise.reject(result), true, mock)
  },
  deleteRecipeVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRecipeVersion', 'DataBrew', Promise.resolve(result), true, mock)
  },
  deleteRecipeVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRecipeVersion', 'DataBrew', Promise.resolve(result), false, mock)
  },
  deleteRecipeVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRecipeVersion', 'DataBrew', Promise.reject(result), true, mock)
  },
  deleteSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchedule', 'DataBrew', Promise.resolve(result), true, mock)
  },
  deleteScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchedule', 'DataBrew', Promise.resolve(result), false, mock)
  },
  deleteScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSchedule', 'DataBrew', Promise.reject(result), true, mock)
  },
  describeDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'DataBrew', Promise.resolve(result), true, mock)
  },
  describeDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'DataBrew', Promise.resolve(result), false, mock)
  },
  describeDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataset', 'DataBrew', Promise.reject(result), true, mock)
  },
  describeJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJob', 'DataBrew', Promise.resolve(result), true, mock)
  },
  describeJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJob', 'DataBrew', Promise.resolve(result), false, mock)
  },
  describeJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJob', 'DataBrew', Promise.reject(result), true, mock)
  },
  describeJobRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobRun', 'DataBrew', Promise.resolve(result), true, mock)
  },
  describeJobRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobRun', 'DataBrew', Promise.resolve(result), false, mock)
  },
  describeJobRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobRun', 'DataBrew', Promise.reject(result), true, mock)
  },
  describeProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProject', 'DataBrew', Promise.resolve(result), true, mock)
  },
  describeProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProject', 'DataBrew', Promise.resolve(result), false, mock)
  },
  describeProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProject', 'DataBrew', Promise.reject(result), true, mock)
  },
  describeRecipe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRecipe', 'DataBrew', Promise.resolve(result), true, mock)
  },
  describeRecipeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRecipe', 'DataBrew', Promise.resolve(result), false, mock)
  },
  describeRecipeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRecipe', 'DataBrew', Promise.reject(result), true, mock)
  },
  describeSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSchedule', 'DataBrew', Promise.resolve(result), true, mock)
  },
  describeScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSchedule', 'DataBrew', Promise.resolve(result), false, mock)
  },
  describeScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSchedule', 'DataBrew', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DataBrew', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DataBrew', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DataBrew', Promise.reject(result), true, mock)
  },
  listDatasets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasets', 'DataBrew', Promise.resolve(result), true, mock)
  },
  listDatasetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasets', 'DataBrew', Promise.resolve(result), false, mock)
  },
  listDatasetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDatasets', 'DataBrew', Promise.reject(result), true, mock)
  },
  listJobRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobRuns', 'DataBrew', Promise.resolve(result), true, mock)
  },
  listJobRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobRuns', 'DataBrew', Promise.resolve(result), false, mock)
  },
  listJobRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobRuns', 'DataBrew', Promise.reject(result), true, mock)
  },
  listJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'DataBrew', Promise.resolve(result), true, mock)
  },
  listJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'DataBrew', Promise.resolve(result), false, mock)
  },
  listJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'DataBrew', Promise.reject(result), true, mock)
  },
  listProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'DataBrew', Promise.resolve(result), true, mock)
  },
  listProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'DataBrew', Promise.resolve(result), false, mock)
  },
  listProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProjects', 'DataBrew', Promise.reject(result), true, mock)
  },
  listRecipeVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecipeVersions', 'DataBrew', Promise.resolve(result), true, mock)
  },
  listRecipeVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecipeVersions', 'DataBrew', Promise.resolve(result), false, mock)
  },
  listRecipeVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecipeVersions', 'DataBrew', Promise.reject(result), true, mock)
  },
  listRecipes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecipes', 'DataBrew', Promise.resolve(result), true, mock)
  },
  listRecipesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecipes', 'DataBrew', Promise.resolve(result), false, mock)
  },
  listRecipesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecipes', 'DataBrew', Promise.reject(result), true, mock)
  },
  listSchedules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchedules', 'DataBrew', Promise.resolve(result), true, mock)
  },
  listSchedulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchedules', 'DataBrew', Promise.resolve(result), false, mock)
  },
  listSchedulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSchedules', 'DataBrew', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DataBrew', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DataBrew', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DataBrew', Promise.reject(result), true, mock)
  },
  publishRecipe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publishRecipe', 'DataBrew', Promise.resolve(result), true, mock)
  },
  publishRecipeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publishRecipe', 'DataBrew', Promise.resolve(result), false, mock)
  },
  publishRecipeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('publishRecipe', 'DataBrew', Promise.reject(result), true, mock)
  },
  sendProjectSessionAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendProjectSessionAction', 'DataBrew', Promise.resolve(result), true, mock)
  },
  sendProjectSessionActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendProjectSessionAction', 'DataBrew', Promise.resolve(result), false, mock)
  },
  sendProjectSessionActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendProjectSessionAction', 'DataBrew', Promise.reject(result), true, mock)
  },
  startJobRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startJobRun', 'DataBrew', Promise.resolve(result), true, mock)
  },
  startJobRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startJobRun', 'DataBrew', Promise.resolve(result), false, mock)
  },
  startJobRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startJobRun', 'DataBrew', Promise.reject(result), true, mock)
  },
  startProjectSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startProjectSession', 'DataBrew', Promise.resolve(result), true, mock)
  },
  startProjectSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startProjectSession', 'DataBrew', Promise.resolve(result), false, mock)
  },
  startProjectSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startProjectSession', 'DataBrew', Promise.reject(result), true, mock)
  },
  stopJobRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopJobRun', 'DataBrew', Promise.resolve(result), true, mock)
  },
  stopJobRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopJobRun', 'DataBrew', Promise.resolve(result), false, mock)
  },
  stopJobRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopJobRun', 'DataBrew', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DataBrew', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DataBrew', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'DataBrew', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DataBrew', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DataBrew', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'DataBrew', Promise.reject(result), true, mock)
  },
  updateDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDataset', 'DataBrew', Promise.resolve(result), true, mock)
  },
  updateDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDataset', 'DataBrew', Promise.resolve(result), false, mock)
  },
  updateDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDataset', 'DataBrew', Promise.reject(result), true, mock)
  },
  updateProfileJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProfileJob', 'DataBrew', Promise.resolve(result), true, mock)
  },
  updateProfileJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProfileJob', 'DataBrew', Promise.resolve(result), false, mock)
  },
  updateProfileJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProfileJob', 'DataBrew', Promise.reject(result), true, mock)
  },
  updateProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProject', 'DataBrew', Promise.resolve(result), true, mock)
  },
  updateProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProject', 'DataBrew', Promise.resolve(result), false, mock)
  },
  updateProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProject', 'DataBrew', Promise.reject(result), true, mock)
  },
  updateRecipe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRecipe', 'DataBrew', Promise.resolve(result), true, mock)
  },
  updateRecipeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRecipe', 'DataBrew', Promise.resolve(result), false, mock)
  },
  updateRecipeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRecipe', 'DataBrew', Promise.reject(result), true, mock)
  },
  updateRecipeJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRecipeJob', 'DataBrew', Promise.resolve(result), true, mock)
  },
  updateRecipeJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRecipeJob', 'DataBrew', Promise.resolve(result), false, mock)
  },
  updateRecipeJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRecipeJob', 'DataBrew', Promise.reject(result), true, mock)
  },
  updateSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSchedule', 'DataBrew', Promise.resolve(result), true, mock)
  },
  updateScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSchedule', 'DataBrew', Promise.resolve(result), false, mock)
  },
  updateScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSchedule', 'DataBrew', Promise.reject(result), true, mock)
  },
}
