
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockPersonalize = {
  createBatchInferenceJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createBatchInferenceJob', 'Personalize', Promise.resolve(result), true, mock)
  },
  createBatchInferenceJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createBatchInferenceJob', 'Personalize', Promise.resolve(result), false, mock)
  },
  createBatchInferenceJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createBatchInferenceJob', 'Personalize', Promise.reject(result), true, mock)
  },
  createCampaign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createCampaign', 'Personalize', Promise.resolve(result), true, mock)
  },
  createCampaignAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createCampaign', 'Personalize', Promise.resolve(result), false, mock)
  },
  createCampaignThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createCampaign', 'Personalize', Promise.reject(result), true, mock)
  },
  createDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createDataset', 'Personalize', Promise.resolve(result), true, mock)
  },
  createDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createDataset', 'Personalize', Promise.resolve(result), false, mock)
  },
  createDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createDataset', 'Personalize', Promise.reject(result), true, mock)
  },
  createDatasetExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createDatasetExportJob', 'Personalize', Promise.resolve(result), true, mock)
  },
  createDatasetExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createDatasetExportJob', 'Personalize', Promise.resolve(result), false, mock)
  },
  createDatasetExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createDatasetExportJob', 'Personalize', Promise.reject(result), true, mock)
  },
  createDatasetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createDatasetGroup', 'Personalize', Promise.resolve(result), true, mock)
  },
  createDatasetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createDatasetGroup', 'Personalize', Promise.resolve(result), false, mock)
  },
  createDatasetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createDatasetGroup', 'Personalize', Promise.reject(result), true, mock)
  },
  createDatasetImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createDatasetImportJob', 'Personalize', Promise.resolve(result), true, mock)
  },
  createDatasetImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createDatasetImportJob', 'Personalize', Promise.resolve(result), false, mock)
  },
  createDatasetImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createDatasetImportJob', 'Personalize', Promise.reject(result), true, mock)
  },
  createEventTracker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createEventTracker', 'Personalize', Promise.resolve(result), true, mock)
  },
  createEventTrackerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createEventTracker', 'Personalize', Promise.resolve(result), false, mock)
  },
  createEventTrackerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createEventTracker', 'Personalize', Promise.reject(result), true, mock)
  },
  createFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createFilter', 'Personalize', Promise.resolve(result), true, mock)
  },
  createFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createFilter', 'Personalize', Promise.resolve(result), false, mock)
  },
  createFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createFilter', 'Personalize', Promise.reject(result), true, mock)
  },
  createSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createSchema', 'Personalize', Promise.resolve(result), true, mock)
  },
  createSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createSchema', 'Personalize', Promise.resolve(result), false, mock)
  },
  createSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createSchema', 'Personalize', Promise.reject(result), true, mock)
  },
  createSolution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createSolution', 'Personalize', Promise.resolve(result), true, mock)
  },
  createSolutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createSolution', 'Personalize', Promise.resolve(result), false, mock)
  },
  createSolutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createSolution', 'Personalize', Promise.reject(result), true, mock)
  },
  createSolutionVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createSolutionVersion', 'Personalize', Promise.resolve(result), true, mock)
  },
  createSolutionVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createSolutionVersion', 'Personalize', Promise.resolve(result), false, mock)
  },
  createSolutionVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'createSolutionVersion', 'Personalize', Promise.reject(result), true, mock)
  },
  deleteCampaign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'deleteCampaign', 'Personalize', Promise.resolve(result), true, mock)
  },
  deleteCampaignAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'deleteCampaign', 'Personalize', Promise.resolve(result), false, mock)
  },
  deleteCampaignThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'deleteCampaign', 'Personalize', Promise.reject(result), true, mock)
  },
  deleteDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'deleteDataset', 'Personalize', Promise.resolve(result), true, mock)
  },
  deleteDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'deleteDataset', 'Personalize', Promise.resolve(result), false, mock)
  },
  deleteDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'deleteDataset', 'Personalize', Promise.reject(result), true, mock)
  },
  deleteDatasetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'deleteDatasetGroup', 'Personalize', Promise.resolve(result), true, mock)
  },
  deleteDatasetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'deleteDatasetGroup', 'Personalize', Promise.resolve(result), false, mock)
  },
  deleteDatasetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'deleteDatasetGroup', 'Personalize', Promise.reject(result), true, mock)
  },
  deleteEventTracker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'deleteEventTracker', 'Personalize', Promise.resolve(result), true, mock)
  },
  deleteEventTrackerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'deleteEventTracker', 'Personalize', Promise.resolve(result), false, mock)
  },
  deleteEventTrackerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'deleteEventTracker', 'Personalize', Promise.reject(result), true, mock)
  },
  deleteFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'deleteFilter', 'Personalize', Promise.resolve(result), true, mock)
  },
  deleteFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'deleteFilter', 'Personalize', Promise.resolve(result), false, mock)
  },
  deleteFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'deleteFilter', 'Personalize', Promise.reject(result), true, mock)
  },
  deleteSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'deleteSchema', 'Personalize', Promise.resolve(result), true, mock)
  },
  deleteSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'deleteSchema', 'Personalize', Promise.resolve(result), false, mock)
  },
  deleteSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'deleteSchema', 'Personalize', Promise.reject(result), true, mock)
  },
  deleteSolution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'deleteSolution', 'Personalize', Promise.resolve(result), true, mock)
  },
  deleteSolutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'deleteSolution', 'Personalize', Promise.resolve(result), false, mock)
  },
  deleteSolutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'deleteSolution', 'Personalize', Promise.reject(result), true, mock)
  },
  describeAlgorithm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeAlgorithm', 'Personalize', Promise.resolve(result), true, mock)
  },
  describeAlgorithmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeAlgorithm', 'Personalize', Promise.resolve(result), false, mock)
  },
  describeAlgorithmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeAlgorithm', 'Personalize', Promise.reject(result), true, mock)
  },
  describeBatchInferenceJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeBatchInferenceJob', 'Personalize', Promise.resolve(result), true, mock)
  },
  describeBatchInferenceJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeBatchInferenceJob', 'Personalize', Promise.resolve(result), false, mock)
  },
  describeBatchInferenceJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeBatchInferenceJob', 'Personalize', Promise.reject(result), true, mock)
  },
  describeCampaign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeCampaign', 'Personalize', Promise.resolve(result), true, mock)
  },
  describeCampaignAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeCampaign', 'Personalize', Promise.resolve(result), false, mock)
  },
  describeCampaignThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeCampaign', 'Personalize', Promise.reject(result), true, mock)
  },
  describeDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeDataset', 'Personalize', Promise.resolve(result), true, mock)
  },
  describeDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeDataset', 'Personalize', Promise.resolve(result), false, mock)
  },
  describeDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeDataset', 'Personalize', Promise.reject(result), true, mock)
  },
  describeDatasetExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeDatasetExportJob', 'Personalize', Promise.resolve(result), true, mock)
  },
  describeDatasetExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeDatasetExportJob', 'Personalize', Promise.resolve(result), false, mock)
  },
  describeDatasetExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeDatasetExportJob', 'Personalize', Promise.reject(result), true, mock)
  },
  describeDatasetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeDatasetGroup', 'Personalize', Promise.resolve(result), true, mock)
  },
  describeDatasetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeDatasetGroup', 'Personalize', Promise.resolve(result), false, mock)
  },
  describeDatasetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeDatasetGroup', 'Personalize', Promise.reject(result), true, mock)
  },
  describeDatasetImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeDatasetImportJob', 'Personalize', Promise.resolve(result), true, mock)
  },
  describeDatasetImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeDatasetImportJob', 'Personalize', Promise.resolve(result), false, mock)
  },
  describeDatasetImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeDatasetImportJob', 'Personalize', Promise.reject(result), true, mock)
  },
  describeEventTracker: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeEventTracker', 'Personalize', Promise.resolve(result), true, mock)
  },
  describeEventTrackerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeEventTracker', 'Personalize', Promise.resolve(result), false, mock)
  },
  describeEventTrackerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeEventTracker', 'Personalize', Promise.reject(result), true, mock)
  },
  describeFeatureTransformation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeFeatureTransformation', 'Personalize', Promise.resolve(result), true, mock)
  },
  describeFeatureTransformationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeFeatureTransformation', 'Personalize', Promise.resolve(result), false, mock)
  },
  describeFeatureTransformationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeFeatureTransformation', 'Personalize', Promise.reject(result), true, mock)
  },
  describeFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeFilter', 'Personalize', Promise.resolve(result), true, mock)
  },
  describeFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeFilter', 'Personalize', Promise.resolve(result), false, mock)
  },
  describeFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeFilter', 'Personalize', Promise.reject(result), true, mock)
  },
  describeRecipe: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeRecipe', 'Personalize', Promise.resolve(result), true, mock)
  },
  describeRecipeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeRecipe', 'Personalize', Promise.resolve(result), false, mock)
  },
  describeRecipeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeRecipe', 'Personalize', Promise.reject(result), true, mock)
  },
  describeSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeSchema', 'Personalize', Promise.resolve(result), true, mock)
  },
  describeSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeSchema', 'Personalize', Promise.resolve(result), false, mock)
  },
  describeSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeSchema', 'Personalize', Promise.reject(result), true, mock)
  },
  describeSolution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeSolution', 'Personalize', Promise.resolve(result), true, mock)
  },
  describeSolutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeSolution', 'Personalize', Promise.resolve(result), false, mock)
  },
  describeSolutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeSolution', 'Personalize', Promise.reject(result), true, mock)
  },
  describeSolutionVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeSolutionVersion', 'Personalize', Promise.resolve(result), true, mock)
  },
  describeSolutionVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeSolutionVersion', 'Personalize', Promise.resolve(result), false, mock)
  },
  describeSolutionVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'describeSolutionVersion', 'Personalize', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'destroy', 'Personalize', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'destroy', 'Personalize', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'destroy', 'Personalize', Promise.reject(result), true, mock)
  },
  getSolutionMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'getSolutionMetrics', 'Personalize', Promise.resolve(result), true, mock)
  },
  getSolutionMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'getSolutionMetrics', 'Personalize', Promise.resolve(result), false, mock)
  },
  getSolutionMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'getSolutionMetrics', 'Personalize', Promise.reject(result), true, mock)
  },
  listBatchInferenceJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listBatchInferenceJobs', 'Personalize', Promise.resolve(result), true, mock)
  },
  listBatchInferenceJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listBatchInferenceJobs', 'Personalize', Promise.resolve(result), false, mock)
  },
  listBatchInferenceJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listBatchInferenceJobs', 'Personalize', Promise.reject(result), true, mock)
  },
  listCampaigns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listCampaigns', 'Personalize', Promise.resolve(result), true, mock)
  },
  listCampaignsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listCampaigns', 'Personalize', Promise.resolve(result), false, mock)
  },
  listCampaignsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listCampaigns', 'Personalize', Promise.reject(result), true, mock)
  },
  listDatasetExportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listDatasetExportJobs', 'Personalize', Promise.resolve(result), true, mock)
  },
  listDatasetExportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listDatasetExportJobs', 'Personalize', Promise.resolve(result), false, mock)
  },
  listDatasetExportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listDatasetExportJobs', 'Personalize', Promise.reject(result), true, mock)
  },
  listDatasetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listDatasetGroups', 'Personalize', Promise.resolve(result), true, mock)
  },
  listDatasetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listDatasetGroups', 'Personalize', Promise.resolve(result), false, mock)
  },
  listDatasetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listDatasetGroups', 'Personalize', Promise.reject(result), true, mock)
  },
  listDatasetImportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listDatasetImportJobs', 'Personalize', Promise.resolve(result), true, mock)
  },
  listDatasetImportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listDatasetImportJobs', 'Personalize', Promise.resolve(result), false, mock)
  },
  listDatasetImportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listDatasetImportJobs', 'Personalize', Promise.reject(result), true, mock)
  },
  listDatasets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listDatasets', 'Personalize', Promise.resolve(result), true, mock)
  },
  listDatasetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listDatasets', 'Personalize', Promise.resolve(result), false, mock)
  },
  listDatasetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listDatasets', 'Personalize', Promise.reject(result), true, mock)
  },
  listEventTrackers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listEventTrackers', 'Personalize', Promise.resolve(result), true, mock)
  },
  listEventTrackersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listEventTrackers', 'Personalize', Promise.resolve(result), false, mock)
  },
  listEventTrackersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listEventTrackers', 'Personalize', Promise.reject(result), true, mock)
  },
  listFilters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listFilters', 'Personalize', Promise.resolve(result), true, mock)
  },
  listFiltersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listFilters', 'Personalize', Promise.resolve(result), false, mock)
  },
  listFiltersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listFilters', 'Personalize', Promise.reject(result), true, mock)
  },
  listRecipes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listRecipes', 'Personalize', Promise.resolve(result), true, mock)
  },
  listRecipesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listRecipes', 'Personalize', Promise.resolve(result), false, mock)
  },
  listRecipesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listRecipes', 'Personalize', Promise.reject(result), true, mock)
  },
  listSchemas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listSchemas', 'Personalize', Promise.resolve(result), true, mock)
  },
  listSchemasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listSchemas', 'Personalize', Promise.resolve(result), false, mock)
  },
  listSchemasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listSchemas', 'Personalize', Promise.reject(result), true, mock)
  },
  listSolutionVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listSolutionVersions', 'Personalize', Promise.resolve(result), true, mock)
  },
  listSolutionVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listSolutionVersions', 'Personalize', Promise.resolve(result), false, mock)
  },
  listSolutionVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listSolutionVersions', 'Personalize', Promise.reject(result), true, mock)
  },
  listSolutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listSolutions', 'Personalize', Promise.resolve(result), true, mock)
  },
  listSolutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listSolutions', 'Personalize', Promise.resolve(result), false, mock)
  },
  listSolutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'listSolutions', 'Personalize', Promise.reject(result), true, mock)
  },
  stopSolutionVersionCreation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'stopSolutionVersionCreation', 'Personalize', Promise.resolve(result), true, mock)
  },
  stopSolutionVersionCreationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'stopSolutionVersionCreation', 'Personalize', Promise.resolve(result), false, mock)
  },
  stopSolutionVersionCreationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'stopSolutionVersionCreation', 'Personalize', Promise.reject(result), true, mock)
  },
  updateCampaign: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'updateCampaign', 'Personalize', Promise.resolve(result), true, mock)
  },
  updateCampaignAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'updateCampaign', 'Personalize', Promise.resolve(result), false, mock)
  },
  updateCampaignThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'updateCampaign', 'Personalize', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'send', 'PersonalizeClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'send', 'PersonalizeClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-personalize', 'send', 'PersonalizeClient', Promise.reject(result), true, mock)
  }
}