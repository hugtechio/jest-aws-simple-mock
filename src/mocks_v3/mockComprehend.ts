
/**
* @description mocks_v3:mockComprehend module is mocks for AWS-SDK V3
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
export const mockComprehend = {
  batchDetectDominantLanguage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'batchDetectDominantLanguage', 'Comprehend', Promise.resolve(result), true, mock)
  },
  batchDetectDominantLanguageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'batchDetectDominantLanguage', 'Comprehend', Promise.resolve(result), false, mock)
  },
  batchDetectDominantLanguageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'batchDetectDominantLanguage', 'Comprehend', Promise.reject(result), true, mock)
  },
  batchDetectEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'batchDetectEntities', 'Comprehend', Promise.resolve(result), true, mock)
  },
  batchDetectEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'batchDetectEntities', 'Comprehend', Promise.resolve(result), false, mock)
  },
  batchDetectEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'batchDetectEntities', 'Comprehend', Promise.reject(result), true, mock)
  },
  batchDetectKeyPhrases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'batchDetectKeyPhrases', 'Comprehend', Promise.resolve(result), true, mock)
  },
  batchDetectKeyPhrasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'batchDetectKeyPhrases', 'Comprehend', Promise.resolve(result), false, mock)
  },
  batchDetectKeyPhrasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'batchDetectKeyPhrases', 'Comprehend', Promise.reject(result), true, mock)
  },
  batchDetectSentiment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'batchDetectSentiment', 'Comprehend', Promise.resolve(result), true, mock)
  },
  batchDetectSentimentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'batchDetectSentiment', 'Comprehend', Promise.resolve(result), false, mock)
  },
  batchDetectSentimentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'batchDetectSentiment', 'Comprehend', Promise.reject(result), true, mock)
  },
  batchDetectSyntax: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'batchDetectSyntax', 'Comprehend', Promise.resolve(result), true, mock)
  },
  batchDetectSyntaxAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'batchDetectSyntax', 'Comprehend', Promise.resolve(result), false, mock)
  },
  batchDetectSyntaxThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'batchDetectSyntax', 'Comprehend', Promise.reject(result), true, mock)
  },
  batchDetectTargetedSentiment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'batchDetectTargetedSentiment', 'Comprehend', Promise.resolve(result), true, mock)
  },
  batchDetectTargetedSentimentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'batchDetectTargetedSentiment', 'Comprehend', Promise.resolve(result), false, mock)
  },
  batchDetectTargetedSentimentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'batchDetectTargetedSentiment', 'Comprehend', Promise.reject(result), true, mock)
  },
  classifyDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'classifyDocument', 'Comprehend', Promise.resolve(result), true, mock)
  },
  classifyDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'classifyDocument', 'Comprehend', Promise.resolve(result), false, mock)
  },
  classifyDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'classifyDocument', 'Comprehend', Promise.reject(result), true, mock)
  },
  containsPiiEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'containsPiiEntities', 'Comprehend', Promise.resolve(result), true, mock)
  },
  containsPiiEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'containsPiiEntities', 'Comprehend', Promise.resolve(result), false, mock)
  },
  containsPiiEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'containsPiiEntities', 'Comprehend', Promise.reject(result), true, mock)
  },
  createDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'createDataset', 'Comprehend', Promise.resolve(result), true, mock)
  },
  createDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'createDataset', 'Comprehend', Promise.resolve(result), false, mock)
  },
  createDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'createDataset', 'Comprehend', Promise.reject(result), true, mock)
  },
  createDocumentClassifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'createDocumentClassifier', 'Comprehend', Promise.resolve(result), true, mock)
  },
  createDocumentClassifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'createDocumentClassifier', 'Comprehend', Promise.resolve(result), false, mock)
  },
  createDocumentClassifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'createDocumentClassifier', 'Comprehend', Promise.reject(result), true, mock)
  },
  createEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'createEndpoint', 'Comprehend', Promise.resolve(result), true, mock)
  },
  createEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'createEndpoint', 'Comprehend', Promise.resolve(result), false, mock)
  },
  createEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'createEndpoint', 'Comprehend', Promise.reject(result), true, mock)
  },
  createEntityRecognizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'createEntityRecognizer', 'Comprehend', Promise.resolve(result), true, mock)
  },
  createEntityRecognizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'createEntityRecognizer', 'Comprehend', Promise.resolve(result), false, mock)
  },
  createEntityRecognizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'createEntityRecognizer', 'Comprehend', Promise.reject(result), true, mock)
  },
  createFlywheel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'createFlywheel', 'Comprehend', Promise.resolve(result), true, mock)
  },
  createFlywheelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'createFlywheel', 'Comprehend', Promise.resolve(result), false, mock)
  },
  createFlywheelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'createFlywheel', 'Comprehend', Promise.reject(result), true, mock)
  },
  deleteDocumentClassifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'deleteDocumentClassifier', 'Comprehend', Promise.resolve(result), true, mock)
  },
  deleteDocumentClassifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'deleteDocumentClassifier', 'Comprehend', Promise.resolve(result), false, mock)
  },
  deleteDocumentClassifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'deleteDocumentClassifier', 'Comprehend', Promise.reject(result), true, mock)
  },
  deleteEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'deleteEndpoint', 'Comprehend', Promise.resolve(result), true, mock)
  },
  deleteEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'deleteEndpoint', 'Comprehend', Promise.resolve(result), false, mock)
  },
  deleteEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'deleteEndpoint', 'Comprehend', Promise.reject(result), true, mock)
  },
  deleteEntityRecognizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'deleteEntityRecognizer', 'Comprehend', Promise.resolve(result), true, mock)
  },
  deleteEntityRecognizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'deleteEntityRecognizer', 'Comprehend', Promise.resolve(result), false, mock)
  },
  deleteEntityRecognizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'deleteEntityRecognizer', 'Comprehend', Promise.reject(result), true, mock)
  },
  deleteFlywheel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'deleteFlywheel', 'Comprehend', Promise.resolve(result), true, mock)
  },
  deleteFlywheelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'deleteFlywheel', 'Comprehend', Promise.resolve(result), false, mock)
  },
  deleteFlywheelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'deleteFlywheel', 'Comprehend', Promise.reject(result), true, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'deleteResourcePolicy', 'Comprehend', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'deleteResourcePolicy', 'Comprehend', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'deleteResourcePolicy', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeDataset', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeDataset', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeDataset', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeDocumentClassificationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeDocumentClassificationJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeDocumentClassificationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeDocumentClassificationJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeDocumentClassificationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeDocumentClassificationJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeDocumentClassifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeDocumentClassifier', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeDocumentClassifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeDocumentClassifier', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeDocumentClassifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeDocumentClassifier', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeDominantLanguageDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeDominantLanguageDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeDominantLanguageDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeDominantLanguageDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeDominantLanguageDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeDominantLanguageDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeEndpoint', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeEndpoint', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeEndpoint', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeEntitiesDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeEntitiesDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeEntitiesDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeEntitiesDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeEntityRecognizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeEntityRecognizer', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeEntityRecognizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeEntityRecognizer', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeEntityRecognizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeEntityRecognizer', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeEventsDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeEventsDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeEventsDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeEventsDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeEventsDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeEventsDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeFlywheel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeFlywheel', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeFlywheelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeFlywheel', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeFlywheelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeFlywheel', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeFlywheelIteration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeFlywheelIteration', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeFlywheelIterationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeFlywheelIteration', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeFlywheelIterationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeFlywheelIteration', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeKeyPhrasesDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeKeyPhrasesDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeKeyPhrasesDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeKeyPhrasesDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeKeyPhrasesDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeKeyPhrasesDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  describePiiEntitiesDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describePiiEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describePiiEntitiesDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describePiiEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describePiiEntitiesDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describePiiEntitiesDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeResourcePolicy', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeResourcePolicy', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeResourcePolicy', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeSentimentDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeSentimentDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeSentimentDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeSentimentDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeSentimentDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeSentimentDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeTargetedSentimentDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeTargetedSentimentDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeTargetedSentimentDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeTargetedSentimentDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeTargetedSentimentDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeTargetedSentimentDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeTopicsDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeTopicsDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeTopicsDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeTopicsDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeTopicsDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'describeTopicsDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  detectDominantLanguage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectDominantLanguage', 'Comprehend', Promise.resolve(result), true, mock)
  },
  detectDominantLanguageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectDominantLanguage', 'Comprehend', Promise.resolve(result), false, mock)
  },
  detectDominantLanguageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectDominantLanguage', 'Comprehend', Promise.reject(result), true, mock)
  },
  detectEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectEntities', 'Comprehend', Promise.resolve(result), true, mock)
  },
  detectEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectEntities', 'Comprehend', Promise.resolve(result), false, mock)
  },
  detectEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectEntities', 'Comprehend', Promise.reject(result), true, mock)
  },
  detectKeyPhrases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectKeyPhrases', 'Comprehend', Promise.resolve(result), true, mock)
  },
  detectKeyPhrasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectKeyPhrases', 'Comprehend', Promise.resolve(result), false, mock)
  },
  detectKeyPhrasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectKeyPhrases', 'Comprehend', Promise.reject(result), true, mock)
  },
  detectPiiEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectPiiEntities', 'Comprehend', Promise.resolve(result), true, mock)
  },
  detectPiiEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectPiiEntities', 'Comprehend', Promise.resolve(result), false, mock)
  },
  detectPiiEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectPiiEntities', 'Comprehend', Promise.reject(result), true, mock)
  },
  detectSentiment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectSentiment', 'Comprehend', Promise.resolve(result), true, mock)
  },
  detectSentimentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectSentiment', 'Comprehend', Promise.resolve(result), false, mock)
  },
  detectSentimentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectSentiment', 'Comprehend', Promise.reject(result), true, mock)
  },
  detectSyntax: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectSyntax', 'Comprehend', Promise.resolve(result), true, mock)
  },
  detectSyntaxAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectSyntax', 'Comprehend', Promise.resolve(result), false, mock)
  },
  detectSyntaxThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectSyntax', 'Comprehend', Promise.reject(result), true, mock)
  },
  detectTargetedSentiment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectTargetedSentiment', 'Comprehend', Promise.resolve(result), true, mock)
  },
  detectTargetedSentimentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectTargetedSentiment', 'Comprehend', Promise.resolve(result), false, mock)
  },
  detectTargetedSentimentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectTargetedSentiment', 'Comprehend', Promise.reject(result), true, mock)
  },
  detectToxicContent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectToxicContent', 'Comprehend', Promise.resolve(result), true, mock)
  },
  detectToxicContentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectToxicContent', 'Comprehend', Promise.resolve(result), false, mock)
  },
  detectToxicContentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'detectToxicContent', 'Comprehend', Promise.reject(result), true, mock)
  },
  importModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'importModel', 'Comprehend', Promise.resolve(result), true, mock)
  },
  importModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'importModel', 'Comprehend', Promise.resolve(result), false, mock)
  },
  importModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'importModel', 'Comprehend', Promise.reject(result), true, mock)
  },
  listDatasets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listDatasets', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listDatasetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listDatasets', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listDatasetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listDatasets', 'Comprehend', Promise.reject(result), true, mock)
  },
  listDocumentClassificationJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listDocumentClassificationJobs', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listDocumentClassificationJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listDocumentClassificationJobs', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listDocumentClassificationJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listDocumentClassificationJobs', 'Comprehend', Promise.reject(result), true, mock)
  },
  listDocumentClassifierSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listDocumentClassifierSummaries', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listDocumentClassifierSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listDocumentClassifierSummaries', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listDocumentClassifierSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listDocumentClassifierSummaries', 'Comprehend', Promise.reject(result), true, mock)
  },
  listDocumentClassifiers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listDocumentClassifiers', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listDocumentClassifiersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listDocumentClassifiers', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listDocumentClassifiersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listDocumentClassifiers', 'Comprehend', Promise.reject(result), true, mock)
  },
  listDominantLanguageDetectionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listDominantLanguageDetectionJobs', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listDominantLanguageDetectionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listDominantLanguageDetectionJobs', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listDominantLanguageDetectionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listDominantLanguageDetectionJobs', 'Comprehend', Promise.reject(result), true, mock)
  },
  listEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listEndpoints', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listEndpoints', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listEndpoints', 'Comprehend', Promise.reject(result), true, mock)
  },
  listEntitiesDetectionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listEntitiesDetectionJobs', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listEntitiesDetectionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listEntitiesDetectionJobs', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listEntitiesDetectionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listEntitiesDetectionJobs', 'Comprehend', Promise.reject(result), true, mock)
  },
  listEntityRecognizerSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listEntityRecognizerSummaries', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listEntityRecognizerSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listEntityRecognizerSummaries', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listEntityRecognizerSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listEntityRecognizerSummaries', 'Comprehend', Promise.reject(result), true, mock)
  },
  listEntityRecognizers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listEntityRecognizers', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listEntityRecognizersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listEntityRecognizers', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listEntityRecognizersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listEntityRecognizers', 'Comprehend', Promise.reject(result), true, mock)
  },
  listEventsDetectionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listEventsDetectionJobs', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listEventsDetectionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listEventsDetectionJobs', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listEventsDetectionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listEventsDetectionJobs', 'Comprehend', Promise.reject(result), true, mock)
  },
  listFlywheelIterationHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listFlywheelIterationHistory', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listFlywheelIterationHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listFlywheelIterationHistory', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listFlywheelIterationHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listFlywheelIterationHistory', 'Comprehend', Promise.reject(result), true, mock)
  },
  listFlywheels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listFlywheels', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listFlywheelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listFlywheels', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listFlywheelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listFlywheels', 'Comprehend', Promise.reject(result), true, mock)
  },
  listKeyPhrasesDetectionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listKeyPhrasesDetectionJobs', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listKeyPhrasesDetectionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listKeyPhrasesDetectionJobs', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listKeyPhrasesDetectionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listKeyPhrasesDetectionJobs', 'Comprehend', Promise.reject(result), true, mock)
  },
  listPiiEntitiesDetectionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listPiiEntitiesDetectionJobs', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listPiiEntitiesDetectionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listPiiEntitiesDetectionJobs', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listPiiEntitiesDetectionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listPiiEntitiesDetectionJobs', 'Comprehend', Promise.reject(result), true, mock)
  },
  listSentimentDetectionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listSentimentDetectionJobs', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listSentimentDetectionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listSentimentDetectionJobs', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listSentimentDetectionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listSentimentDetectionJobs', 'Comprehend', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listTagsForResource', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listTagsForResource', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listTagsForResource', 'Comprehend', Promise.reject(result), true, mock)
  },
  listTargetedSentimentDetectionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listTargetedSentimentDetectionJobs', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listTargetedSentimentDetectionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listTargetedSentimentDetectionJobs', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listTargetedSentimentDetectionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listTargetedSentimentDetectionJobs', 'Comprehend', Promise.reject(result), true, mock)
  },
  listTopicsDetectionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listTopicsDetectionJobs', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listTopicsDetectionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listTopicsDetectionJobs', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listTopicsDetectionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'listTopicsDetectionJobs', 'Comprehend', Promise.reject(result), true, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'putResourcePolicy', 'Comprehend', Promise.resolve(result), true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'putResourcePolicy', 'Comprehend', Promise.resolve(result), false, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'putResourcePolicy', 'Comprehend', Promise.reject(result), true, mock)
  },
  startDocumentClassificationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startDocumentClassificationJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  startDocumentClassificationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startDocumentClassificationJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  startDocumentClassificationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startDocumentClassificationJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  startDominantLanguageDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startDominantLanguageDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  startDominantLanguageDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startDominantLanguageDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  startDominantLanguageDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startDominantLanguageDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  startEntitiesDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  startEntitiesDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  startEntitiesDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startEntitiesDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  startEventsDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startEventsDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  startEventsDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startEventsDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  startEventsDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startEventsDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  startFlywheelIteration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startFlywheelIteration', 'Comprehend', Promise.resolve(result), true, mock)
  },
  startFlywheelIterationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startFlywheelIteration', 'Comprehend', Promise.resolve(result), false, mock)
  },
  startFlywheelIterationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startFlywheelIteration', 'Comprehend', Promise.reject(result), true, mock)
  },
  startKeyPhrasesDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startKeyPhrasesDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  startKeyPhrasesDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startKeyPhrasesDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  startKeyPhrasesDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startKeyPhrasesDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  startPiiEntitiesDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startPiiEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  startPiiEntitiesDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startPiiEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  startPiiEntitiesDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startPiiEntitiesDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  startSentimentDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startSentimentDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  startSentimentDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startSentimentDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  startSentimentDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startSentimentDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  startTargetedSentimentDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startTargetedSentimentDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  startTargetedSentimentDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startTargetedSentimentDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  startTargetedSentimentDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startTargetedSentimentDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  startTopicsDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startTopicsDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  startTopicsDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startTopicsDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  startTopicsDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'startTopicsDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  stopDominantLanguageDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopDominantLanguageDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  stopDominantLanguageDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopDominantLanguageDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  stopDominantLanguageDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopDominantLanguageDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  stopEntitiesDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  stopEntitiesDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  stopEntitiesDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopEntitiesDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  stopEventsDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopEventsDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  stopEventsDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopEventsDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  stopEventsDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopEventsDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  stopKeyPhrasesDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopKeyPhrasesDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  stopKeyPhrasesDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopKeyPhrasesDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  stopKeyPhrasesDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopKeyPhrasesDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  stopPiiEntitiesDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopPiiEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  stopPiiEntitiesDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopPiiEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  stopPiiEntitiesDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopPiiEntitiesDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  stopSentimentDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopSentimentDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  stopSentimentDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopSentimentDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  stopSentimentDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopSentimentDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  stopTargetedSentimentDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopTargetedSentimentDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  stopTargetedSentimentDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopTargetedSentimentDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  stopTargetedSentimentDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopTargetedSentimentDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  stopTrainingDocumentClassifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopTrainingDocumentClassifier', 'Comprehend', Promise.resolve(result), true, mock)
  },
  stopTrainingDocumentClassifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopTrainingDocumentClassifier', 'Comprehend', Promise.resolve(result), false, mock)
  },
  stopTrainingDocumentClassifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopTrainingDocumentClassifier', 'Comprehend', Promise.reject(result), true, mock)
  },
  stopTrainingEntityRecognizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopTrainingEntityRecognizer', 'Comprehend', Promise.resolve(result), true, mock)
  },
  stopTrainingEntityRecognizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopTrainingEntityRecognizer', 'Comprehend', Promise.resolve(result), false, mock)
  },
  stopTrainingEntityRecognizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'stopTrainingEntityRecognizer', 'Comprehend', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'tagResource', 'Comprehend', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'tagResource', 'Comprehend', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'tagResource', 'Comprehend', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'untagResource', 'Comprehend', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'untagResource', 'Comprehend', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'untagResource', 'Comprehend', Promise.reject(result), true, mock)
  },
  updateEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'updateEndpoint', 'Comprehend', Promise.resolve(result), true, mock)
  },
  updateEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'updateEndpoint', 'Comprehend', Promise.resolve(result), false, mock)
  },
  updateEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'updateEndpoint', 'Comprehend', Promise.reject(result), true, mock)
  },
  updateFlywheel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'updateFlywheel', 'Comprehend', Promise.resolve(result), true, mock)
  },
  updateFlywheelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'updateFlywheel', 'Comprehend', Promise.resolve(result), false, mock)
  },
  updateFlywheelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'updateFlywheel', 'Comprehend', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'send', 'ComprehendClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'send', 'ComprehendClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-comprehend', 'send', 'ComprehendClient', Promise.reject(result), true, mock)
  }
}
