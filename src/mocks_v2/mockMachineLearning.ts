
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
  export const mockMachineLearning = {
  addTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTags', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  addTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTags', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  addTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTags', 'MachineLearning', Promise.reject(result), true, mock)
  },
  createBatchPrediction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBatchPrediction', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  createBatchPredictionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBatchPrediction', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  createBatchPredictionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBatchPrediction', 'MachineLearning', Promise.reject(result), true, mock)
  },
  createDataSourceFromRDS: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataSourceFromRDS', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  createDataSourceFromRDSAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataSourceFromRDS', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  createDataSourceFromRDSThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataSourceFromRDS', 'MachineLearning', Promise.reject(result), true, mock)
  },
  createDataSourceFromRedshift: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataSourceFromRedshift', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  createDataSourceFromRedshiftAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataSourceFromRedshift', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  createDataSourceFromRedshiftThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataSourceFromRedshift', 'MachineLearning', Promise.reject(result), true, mock)
  },
  createDataSourceFromS3: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataSourceFromS3', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  createDataSourceFromS3All: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataSourceFromS3', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  createDataSourceFromS3Throw: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataSourceFromS3', 'MachineLearning', Promise.reject(result), true, mock)
  },
  createEvaluation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEvaluation', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  createEvaluationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEvaluation', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  createEvaluationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEvaluation', 'MachineLearning', Promise.reject(result), true, mock)
  },
  createMLModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMLModel', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  createMLModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMLModel', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  createMLModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMLModel', 'MachineLearning', Promise.reject(result), true, mock)
  },
  createRealtimeEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRealtimeEndpoint', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  createRealtimeEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRealtimeEndpoint', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  createRealtimeEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRealtimeEndpoint', 'MachineLearning', Promise.reject(result), true, mock)
  },
  deleteBatchPrediction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBatchPrediction', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  deleteBatchPredictionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBatchPrediction', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  deleteBatchPredictionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBatchPrediction', 'MachineLearning', Promise.reject(result), true, mock)
  },
  deleteDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataSource', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  deleteDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataSource', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  deleteDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataSource', 'MachineLearning', Promise.reject(result), true, mock)
  },
  deleteEvaluation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEvaluation', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  deleteEvaluationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEvaluation', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  deleteEvaluationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEvaluation', 'MachineLearning', Promise.reject(result), true, mock)
  },
  deleteMLModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMLModel', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  deleteMLModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMLModel', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  deleteMLModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMLModel', 'MachineLearning', Promise.reject(result), true, mock)
  },
  deleteRealtimeEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRealtimeEndpoint', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  deleteRealtimeEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRealtimeEndpoint', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  deleteRealtimeEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRealtimeEndpoint', 'MachineLearning', Promise.reject(result), true, mock)
  },
  deleteTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTags', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  deleteTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTags', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  deleteTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTags', 'MachineLearning', Promise.reject(result), true, mock)
  },
  describeBatchPredictions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBatchPredictions', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  describeBatchPredictionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBatchPredictions', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  describeBatchPredictionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBatchPredictions', 'MachineLearning', Promise.reject(result), true, mock)
  },
  describeDataSources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataSources', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  describeDataSourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataSources', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  describeDataSourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataSources', 'MachineLearning', Promise.reject(result), true, mock)
  },
  describeEvaluations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvaluations', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  describeEvaluationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvaluations', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  describeEvaluationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvaluations', 'MachineLearning', Promise.reject(result), true, mock)
  },
  describeMLModels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMLModels', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  describeMLModelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMLModels', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  describeMLModelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMLModels', 'MachineLearning', Promise.reject(result), true, mock)
  },
  describeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTags', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  describeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTags', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  describeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTags', 'MachineLearning', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MachineLearning', Promise.reject(result), true, mock)
  },
  getBatchPrediction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBatchPrediction', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  getBatchPredictionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBatchPrediction', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  getBatchPredictionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBatchPrediction', 'MachineLearning', Promise.reject(result), true, mock)
  },
  getDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataSource', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  getDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataSource', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  getDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataSource', 'MachineLearning', Promise.reject(result), true, mock)
  },
  getEvaluation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEvaluation', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  getEvaluationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEvaluation', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  getEvaluationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEvaluation', 'MachineLearning', Promise.reject(result), true, mock)
  },
  getMLModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLModel', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  getMLModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLModel', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  getMLModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMLModel', 'MachineLearning', Promise.reject(result), true, mock)
  },
  predict: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('predict', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  predictAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('predict', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  predictThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('predict', 'MachineLearning', Promise.reject(result), true, mock)
  },
  updateBatchPrediction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBatchPrediction', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  updateBatchPredictionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBatchPrediction', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  updateBatchPredictionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBatchPrediction', 'MachineLearning', Promise.reject(result), true, mock)
  },
  updateDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDataSource', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  updateDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDataSource', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  updateDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDataSource', 'MachineLearning', Promise.reject(result), true, mock)
  },
  updateEvaluation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEvaluation', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  updateEvaluationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEvaluation', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  updateEvaluationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEvaluation', 'MachineLearning', Promise.reject(result), true, mock)
  },
  updateMLModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMLModel', 'MachineLearning', Promise.resolve(result), true, mock)
  },
  updateMLModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMLModel', 'MachineLearning', Promise.resolve(result), false, mock)
  },
  updateMLModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMLModel', 'MachineLearning', Promise.reject(result), true, mock)
  },
}
