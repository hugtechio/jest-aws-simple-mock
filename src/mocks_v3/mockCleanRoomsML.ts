
/**
* @description mocks_v3:mockCleanRoomsML module is mocks for AWS-SDK V3
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
export const mockCleanRoomsML = {
  createAudienceModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'createAudienceModel', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  createAudienceModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'createAudienceModel', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  createAudienceModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'createAudienceModel', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  createConfiguredAudienceModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'createConfiguredAudienceModel', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  createConfiguredAudienceModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'createConfiguredAudienceModel', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  createConfiguredAudienceModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'createConfiguredAudienceModel', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  createTrainingDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'createTrainingDataset', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  createTrainingDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'createTrainingDataset', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  createTrainingDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'createTrainingDataset', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  deleteAudienceGenerationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'deleteAudienceGenerationJob', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  deleteAudienceGenerationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'deleteAudienceGenerationJob', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  deleteAudienceGenerationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'deleteAudienceGenerationJob', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  deleteAudienceModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'deleteAudienceModel', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  deleteAudienceModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'deleteAudienceModel', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  deleteAudienceModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'deleteAudienceModel', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  deleteConfiguredAudienceModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'deleteConfiguredAudienceModel', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  deleteConfiguredAudienceModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'deleteConfiguredAudienceModel', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  deleteConfiguredAudienceModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'deleteConfiguredAudienceModel', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  deleteConfiguredAudienceModelPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'deleteConfiguredAudienceModelPolicy', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  deleteConfiguredAudienceModelPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'deleteConfiguredAudienceModelPolicy', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  deleteConfiguredAudienceModelPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'deleteConfiguredAudienceModelPolicy', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  deleteTrainingDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'deleteTrainingDataset', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  deleteTrainingDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'deleteTrainingDataset', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  deleteTrainingDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'deleteTrainingDataset', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  getAudienceGenerationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'getAudienceGenerationJob', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  getAudienceGenerationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'getAudienceGenerationJob', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  getAudienceGenerationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'getAudienceGenerationJob', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  getAudienceModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'getAudienceModel', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  getAudienceModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'getAudienceModel', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  getAudienceModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'getAudienceModel', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  getConfiguredAudienceModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'getConfiguredAudienceModel', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  getConfiguredAudienceModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'getConfiguredAudienceModel', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  getConfiguredAudienceModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'getConfiguredAudienceModel', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  getConfiguredAudienceModelPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'getConfiguredAudienceModelPolicy', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  getConfiguredAudienceModelPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'getConfiguredAudienceModelPolicy', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  getConfiguredAudienceModelPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'getConfiguredAudienceModelPolicy', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  getTrainingDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'getTrainingDataset', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  getTrainingDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'getTrainingDataset', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  getTrainingDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'getTrainingDataset', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  listAudienceExportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'listAudienceExportJobs', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  listAudienceExportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'listAudienceExportJobs', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  listAudienceExportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'listAudienceExportJobs', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  listAudienceGenerationJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'listAudienceGenerationJobs', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  listAudienceGenerationJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'listAudienceGenerationJobs', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  listAudienceGenerationJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'listAudienceGenerationJobs', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  listAudienceModels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'listAudienceModels', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  listAudienceModelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'listAudienceModels', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  listAudienceModelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'listAudienceModels', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  listConfiguredAudienceModels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'listConfiguredAudienceModels', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  listConfiguredAudienceModelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'listConfiguredAudienceModels', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  listConfiguredAudienceModelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'listConfiguredAudienceModels', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'listTagsForResource', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'listTagsForResource', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'listTagsForResource', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  listTrainingDatasets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'listTrainingDatasets', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  listTrainingDatasetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'listTrainingDatasets', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  listTrainingDatasetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'listTrainingDatasets', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  putConfiguredAudienceModelPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'putConfiguredAudienceModelPolicy', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  putConfiguredAudienceModelPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'putConfiguredAudienceModelPolicy', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  putConfiguredAudienceModelPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'putConfiguredAudienceModelPolicy', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  startAudienceExportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'startAudienceExportJob', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  startAudienceExportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'startAudienceExportJob', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  startAudienceExportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'startAudienceExportJob', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  startAudienceGenerationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'startAudienceGenerationJob', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  startAudienceGenerationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'startAudienceGenerationJob', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  startAudienceGenerationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'startAudienceGenerationJob', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'tagResource', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'tagResource', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'tagResource', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'untagResource', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'untagResource', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'untagResource', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  updateConfiguredAudienceModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'updateConfiguredAudienceModel', 'CleanRoomsML', Promise.resolve(result), true, mock)
  },
  updateConfiguredAudienceModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'updateConfiguredAudienceModel', 'CleanRoomsML', Promise.resolve(result), false, mock)
  },
  updateConfiguredAudienceModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'updateConfiguredAudienceModel', 'CleanRoomsML', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'send', 'CleanRoomsMLClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'send', 'CleanRoomsMLClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanroomsml', 'send', 'CleanRoomsMLClient', Promise.reject(result), true, mock)
  }
}
