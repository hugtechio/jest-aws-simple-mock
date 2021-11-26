
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
  export const mockComprehend = {
  batchDetectDominantLanguage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDetectDominantLanguage', 'Comprehend', Promise.resolve(result), true, mock)
  },
  batchDetectDominantLanguageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDetectDominantLanguage', 'Comprehend', Promise.resolve(result), false, mock)
  },
  batchDetectDominantLanguageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDetectDominantLanguage', 'Comprehend', Promise.reject(result), true, mock)
  },
  batchDetectEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDetectEntities', 'Comprehend', Promise.resolve(result), true, mock)
  },
  batchDetectEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDetectEntities', 'Comprehend', Promise.resolve(result), false, mock)
  },
  batchDetectEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDetectEntities', 'Comprehend', Promise.reject(result), true, mock)
  },
  batchDetectKeyPhrases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDetectKeyPhrases', 'Comprehend', Promise.resolve(result), true, mock)
  },
  batchDetectKeyPhrasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDetectKeyPhrases', 'Comprehend', Promise.resolve(result), false, mock)
  },
  batchDetectKeyPhrasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDetectKeyPhrases', 'Comprehend', Promise.reject(result), true, mock)
  },
  batchDetectSentiment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDetectSentiment', 'Comprehend', Promise.resolve(result), true, mock)
  },
  batchDetectSentimentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDetectSentiment', 'Comprehend', Promise.resolve(result), false, mock)
  },
  batchDetectSentimentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDetectSentiment', 'Comprehend', Promise.reject(result), true, mock)
  },
  batchDetectSyntax: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDetectSyntax', 'Comprehend', Promise.resolve(result), true, mock)
  },
  batchDetectSyntaxAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDetectSyntax', 'Comprehend', Promise.resolve(result), false, mock)
  },
  batchDetectSyntaxThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDetectSyntax', 'Comprehend', Promise.reject(result), true, mock)
  },
  classifyDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('classifyDocument', 'Comprehend', Promise.resolve(result), true, mock)
  },
  classifyDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('classifyDocument', 'Comprehend', Promise.resolve(result), false, mock)
  },
  classifyDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('classifyDocument', 'Comprehend', Promise.reject(result), true, mock)
  },
  containsPiiEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('containsPiiEntities', 'Comprehend', Promise.resolve(result), true, mock)
  },
  containsPiiEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('containsPiiEntities', 'Comprehend', Promise.resolve(result), false, mock)
  },
  containsPiiEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('containsPiiEntities', 'Comprehend', Promise.reject(result), true, mock)
  },
  createDocumentClassifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDocumentClassifier', 'Comprehend', Promise.resolve(result), true, mock)
  },
  createDocumentClassifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDocumentClassifier', 'Comprehend', Promise.resolve(result), false, mock)
  },
  createDocumentClassifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDocumentClassifier', 'Comprehend', Promise.reject(result), true, mock)
  },
  createEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEndpoint', 'Comprehend', Promise.resolve(result), true, mock)
  },
  createEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEndpoint', 'Comprehend', Promise.resolve(result), false, mock)
  },
  createEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEndpoint', 'Comprehend', Promise.reject(result), true, mock)
  },
  createEntityRecognizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEntityRecognizer', 'Comprehend', Promise.resolve(result), true, mock)
  },
  createEntityRecognizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEntityRecognizer', 'Comprehend', Promise.resolve(result), false, mock)
  },
  createEntityRecognizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEntityRecognizer', 'Comprehend', Promise.reject(result), true, mock)
  },
  deleteDocumentClassifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDocumentClassifier', 'Comprehend', Promise.resolve(result), true, mock)
  },
  deleteDocumentClassifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDocumentClassifier', 'Comprehend', Promise.resolve(result), false, mock)
  },
  deleteDocumentClassifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDocumentClassifier', 'Comprehend', Promise.reject(result), true, mock)
  },
  deleteEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEndpoint', 'Comprehend', Promise.resolve(result), true, mock)
  },
  deleteEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEndpoint', 'Comprehend', Promise.resolve(result), false, mock)
  },
  deleteEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEndpoint', 'Comprehend', Promise.reject(result), true, mock)
  },
  deleteEntityRecognizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEntityRecognizer', 'Comprehend', Promise.resolve(result), true, mock)
  },
  deleteEntityRecognizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEntityRecognizer', 'Comprehend', Promise.resolve(result), false, mock)
  },
  deleteEntityRecognizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEntityRecognizer', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeDocumentClassificationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDocumentClassificationJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeDocumentClassificationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDocumentClassificationJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeDocumentClassificationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDocumentClassificationJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeDocumentClassifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDocumentClassifier', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeDocumentClassifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDocumentClassifier', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeDocumentClassifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDocumentClassifier', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeDominantLanguageDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDominantLanguageDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeDominantLanguageDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDominantLanguageDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeDominantLanguageDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDominantLanguageDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoint', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoint', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpoint', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeEntitiesDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeEntitiesDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeEntitiesDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEntitiesDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeEntityRecognizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEntityRecognizer', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeEntityRecognizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEntityRecognizer', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeEntityRecognizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEntityRecognizer', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeEventsDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventsDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeEventsDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventsDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeEventsDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventsDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeKeyPhrasesDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeKeyPhrasesDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeKeyPhrasesDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeKeyPhrasesDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeKeyPhrasesDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeKeyPhrasesDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  describePiiEntitiesDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePiiEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describePiiEntitiesDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePiiEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describePiiEntitiesDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePiiEntitiesDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeSentimentDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSentimentDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeSentimentDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSentimentDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeSentimentDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSentimentDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  describeTopicsDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTopicsDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  describeTopicsDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTopicsDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  describeTopicsDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTopicsDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Comprehend', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Comprehend', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Comprehend', Promise.reject(result), true, mock)
  },
  detectDominantLanguage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectDominantLanguage', 'Comprehend', Promise.resolve(result), true, mock)
  },
  detectDominantLanguageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectDominantLanguage', 'Comprehend', Promise.resolve(result), false, mock)
  },
  detectDominantLanguageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectDominantLanguage', 'Comprehend', Promise.reject(result), true, mock)
  },
  detectEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectEntities', 'Comprehend', Promise.resolve(result), true, mock)
  },
  detectEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectEntities', 'Comprehend', Promise.resolve(result), false, mock)
  },
  detectEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectEntities', 'Comprehend', Promise.reject(result), true, mock)
  },
  detectKeyPhrases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectKeyPhrases', 'Comprehend', Promise.resolve(result), true, mock)
  },
  detectKeyPhrasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectKeyPhrases', 'Comprehend', Promise.resolve(result), false, mock)
  },
  detectKeyPhrasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectKeyPhrases', 'Comprehend', Promise.reject(result), true, mock)
  },
  detectPiiEntities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectPiiEntities', 'Comprehend', Promise.resolve(result), true, mock)
  },
  detectPiiEntitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectPiiEntities', 'Comprehend', Promise.resolve(result), false, mock)
  },
  detectPiiEntitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectPiiEntities', 'Comprehend', Promise.reject(result), true, mock)
  },
  detectSentiment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectSentiment', 'Comprehend', Promise.resolve(result), true, mock)
  },
  detectSentimentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectSentiment', 'Comprehend', Promise.resolve(result), false, mock)
  },
  detectSentimentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectSentiment', 'Comprehend', Promise.reject(result), true, mock)
  },
  detectSyntax: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectSyntax', 'Comprehend', Promise.resolve(result), true, mock)
  },
  detectSyntaxAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectSyntax', 'Comprehend', Promise.resolve(result), false, mock)
  },
  detectSyntaxThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detectSyntax', 'Comprehend', Promise.reject(result), true, mock)
  },
  listDocumentClassificationJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDocumentClassificationJobs', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listDocumentClassificationJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDocumentClassificationJobs', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listDocumentClassificationJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDocumentClassificationJobs', 'Comprehend', Promise.reject(result), true, mock)
  },
  listDocumentClassifierSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDocumentClassifierSummaries', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listDocumentClassifierSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDocumentClassifierSummaries', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listDocumentClassifierSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDocumentClassifierSummaries', 'Comprehend', Promise.reject(result), true, mock)
  },
  listDocumentClassifiers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDocumentClassifiers', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listDocumentClassifiersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDocumentClassifiers', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listDocumentClassifiersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDocumentClassifiers', 'Comprehend', Promise.reject(result), true, mock)
  },
  listDominantLanguageDetectionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDominantLanguageDetectionJobs', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listDominantLanguageDetectionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDominantLanguageDetectionJobs', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listDominantLanguageDetectionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDominantLanguageDetectionJobs', 'Comprehend', Promise.reject(result), true, mock)
  },
  listEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEndpoints', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEndpoints', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEndpoints', 'Comprehend', Promise.reject(result), true, mock)
  },
  listEntitiesDetectionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEntitiesDetectionJobs', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listEntitiesDetectionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEntitiesDetectionJobs', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listEntitiesDetectionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEntitiesDetectionJobs', 'Comprehend', Promise.reject(result), true, mock)
  },
  listEntityRecognizerSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEntityRecognizerSummaries', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listEntityRecognizerSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEntityRecognizerSummaries', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listEntityRecognizerSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEntityRecognizerSummaries', 'Comprehend', Promise.reject(result), true, mock)
  },
  listEntityRecognizers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEntityRecognizers', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listEntityRecognizersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEntityRecognizers', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listEntityRecognizersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEntityRecognizers', 'Comprehend', Promise.reject(result), true, mock)
  },
  listEventsDetectionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEventsDetectionJobs', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listEventsDetectionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEventsDetectionJobs', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listEventsDetectionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEventsDetectionJobs', 'Comprehend', Promise.reject(result), true, mock)
  },
  listKeyPhrasesDetectionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listKeyPhrasesDetectionJobs', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listKeyPhrasesDetectionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listKeyPhrasesDetectionJobs', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listKeyPhrasesDetectionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listKeyPhrasesDetectionJobs', 'Comprehend', Promise.reject(result), true, mock)
  },
  listPiiEntitiesDetectionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPiiEntitiesDetectionJobs', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listPiiEntitiesDetectionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPiiEntitiesDetectionJobs', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listPiiEntitiesDetectionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPiiEntitiesDetectionJobs', 'Comprehend', Promise.reject(result), true, mock)
  },
  listSentimentDetectionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSentimentDetectionJobs', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listSentimentDetectionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSentimentDetectionJobs', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listSentimentDetectionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSentimentDetectionJobs', 'Comprehend', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Comprehend', Promise.reject(result), true, mock)
  },
  listTopicsDetectionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTopicsDetectionJobs', 'Comprehend', Promise.resolve(result), true, mock)
  },
  listTopicsDetectionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTopicsDetectionJobs', 'Comprehend', Promise.resolve(result), false, mock)
  },
  listTopicsDetectionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTopicsDetectionJobs', 'Comprehend', Promise.reject(result), true, mock)
  },
  startDocumentClassificationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDocumentClassificationJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  startDocumentClassificationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDocumentClassificationJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  startDocumentClassificationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDocumentClassificationJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  startDominantLanguageDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDominantLanguageDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  startDominantLanguageDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDominantLanguageDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  startDominantLanguageDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDominantLanguageDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  startEntitiesDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  startEntitiesDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  startEntitiesDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startEntitiesDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  startEventsDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startEventsDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  startEventsDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startEventsDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  startEventsDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startEventsDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  startKeyPhrasesDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startKeyPhrasesDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  startKeyPhrasesDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startKeyPhrasesDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  startKeyPhrasesDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startKeyPhrasesDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  startPiiEntitiesDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startPiiEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  startPiiEntitiesDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startPiiEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  startPiiEntitiesDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startPiiEntitiesDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  startSentimentDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSentimentDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  startSentimentDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSentimentDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  startSentimentDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSentimentDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  startTopicsDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTopicsDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  startTopicsDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTopicsDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  startTopicsDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTopicsDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  stopDominantLanguageDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDominantLanguageDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  stopDominantLanguageDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDominantLanguageDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  stopDominantLanguageDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDominantLanguageDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  stopEntitiesDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  stopEntitiesDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  stopEntitiesDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopEntitiesDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  stopEventsDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopEventsDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  stopEventsDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopEventsDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  stopEventsDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopEventsDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  stopKeyPhrasesDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopKeyPhrasesDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  stopKeyPhrasesDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopKeyPhrasesDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  stopKeyPhrasesDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopKeyPhrasesDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  stopPiiEntitiesDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopPiiEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  stopPiiEntitiesDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopPiiEntitiesDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  stopPiiEntitiesDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopPiiEntitiesDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  stopSentimentDetectionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopSentimentDetectionJob', 'Comprehend', Promise.resolve(result), true, mock)
  },
  stopSentimentDetectionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopSentimentDetectionJob', 'Comprehend', Promise.resolve(result), false, mock)
  },
  stopSentimentDetectionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopSentimentDetectionJob', 'Comprehend', Promise.reject(result), true, mock)
  },
  stopTrainingDocumentClassifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopTrainingDocumentClassifier', 'Comprehend', Promise.resolve(result), true, mock)
  },
  stopTrainingDocumentClassifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopTrainingDocumentClassifier', 'Comprehend', Promise.resolve(result), false, mock)
  },
  stopTrainingDocumentClassifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopTrainingDocumentClassifier', 'Comprehend', Promise.reject(result), true, mock)
  },
  stopTrainingEntityRecognizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopTrainingEntityRecognizer', 'Comprehend', Promise.resolve(result), true, mock)
  },
  stopTrainingEntityRecognizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopTrainingEntityRecognizer', 'Comprehend', Promise.resolve(result), false, mock)
  },
  stopTrainingEntityRecognizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopTrainingEntityRecognizer', 'Comprehend', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Comprehend', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Comprehend', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Comprehend', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Comprehend', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Comprehend', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Comprehend', Promise.reject(result), true, mock)
  },
  updateEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEndpoint', 'Comprehend', Promise.resolve(result), true, mock)
  },
  updateEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEndpoint', 'Comprehend', Promise.resolve(result), false, mock)
  },
  updateEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEndpoint', 'Comprehend', Promise.reject(result), true, mock)
  },
}
