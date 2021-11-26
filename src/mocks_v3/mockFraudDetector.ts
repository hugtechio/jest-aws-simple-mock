
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockFraudDetector = {
  batchCreateVariable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'batchCreateVariable', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  batchCreateVariableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'batchCreateVariable', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  batchCreateVariableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'batchCreateVariable', 'FraudDetector', Promise.reject(result), true, mock)
  },
  batchGetVariable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'batchGetVariable', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  batchGetVariableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'batchGetVariable', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  batchGetVariableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'batchGetVariable', 'FraudDetector', Promise.reject(result), true, mock)
  },
  cancelBatchImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'cancelBatchImportJob', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  cancelBatchImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'cancelBatchImportJob', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  cancelBatchImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'cancelBatchImportJob', 'FraudDetector', Promise.reject(result), true, mock)
  },
  cancelBatchPredictionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'cancelBatchPredictionJob', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  cancelBatchPredictionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'cancelBatchPredictionJob', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  cancelBatchPredictionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'cancelBatchPredictionJob', 'FraudDetector', Promise.reject(result), true, mock)
  },
  createBatchImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'createBatchImportJob', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  createBatchImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'createBatchImportJob', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  createBatchImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'createBatchImportJob', 'FraudDetector', Promise.reject(result), true, mock)
  },
  createBatchPredictionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'createBatchPredictionJob', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  createBatchPredictionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'createBatchPredictionJob', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  createBatchPredictionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'createBatchPredictionJob', 'FraudDetector', Promise.reject(result), true, mock)
  },
  createDetectorVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'createDetectorVersion', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  createDetectorVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'createDetectorVersion', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  createDetectorVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'createDetectorVersion', 'FraudDetector', Promise.reject(result), true, mock)
  },
  createModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'createModel', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  createModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'createModel', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  createModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'createModel', 'FraudDetector', Promise.reject(result), true, mock)
  },
  createModelVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'createModelVersion', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  createModelVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'createModelVersion', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  createModelVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'createModelVersion', 'FraudDetector', Promise.reject(result), true, mock)
  },
  createRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'createRule', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  createRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'createRule', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  createRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'createRule', 'FraudDetector', Promise.reject(result), true, mock)
  },
  createVariable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'createVariable', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  createVariableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'createVariable', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  createVariableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'createVariable', 'FraudDetector', Promise.reject(result), true, mock)
  },
  deleteBatchImportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteBatchImportJob', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  deleteBatchImportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteBatchImportJob', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  deleteBatchImportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteBatchImportJob', 'FraudDetector', Promise.reject(result), true, mock)
  },
  deleteBatchPredictionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteBatchPredictionJob', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  deleteBatchPredictionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteBatchPredictionJob', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  deleteBatchPredictionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteBatchPredictionJob', 'FraudDetector', Promise.reject(result), true, mock)
  },
  deleteDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteDetector', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  deleteDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteDetector', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  deleteDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteDetector', 'FraudDetector', Promise.reject(result), true, mock)
  },
  deleteDetectorVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteDetectorVersion', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  deleteDetectorVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteDetectorVersion', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  deleteDetectorVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteDetectorVersion', 'FraudDetector', Promise.reject(result), true, mock)
  },
  deleteEntityType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteEntityType', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  deleteEntityTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteEntityType', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  deleteEntityTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteEntityType', 'FraudDetector', Promise.reject(result), true, mock)
  },
  deleteEvent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteEvent', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  deleteEventAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteEvent', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  deleteEventThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteEvent', 'FraudDetector', Promise.reject(result), true, mock)
  },
  deleteEventType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteEventType', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  deleteEventTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteEventType', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  deleteEventTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteEventType', 'FraudDetector', Promise.reject(result), true, mock)
  },
  deleteEventsByEventType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteEventsByEventType', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  deleteEventsByEventTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteEventsByEventType', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  deleteEventsByEventTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteEventsByEventType', 'FraudDetector', Promise.reject(result), true, mock)
  },
  deleteExternalModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteExternalModel', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  deleteExternalModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteExternalModel', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  deleteExternalModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteExternalModel', 'FraudDetector', Promise.reject(result), true, mock)
  },
  deleteLabel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteLabel', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  deleteLabelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteLabel', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  deleteLabelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteLabel', 'FraudDetector', Promise.reject(result), true, mock)
  },
  deleteModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteModel', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  deleteModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteModel', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  deleteModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteModel', 'FraudDetector', Promise.reject(result), true, mock)
  },
  deleteModelVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteModelVersion', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  deleteModelVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteModelVersion', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  deleteModelVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteModelVersion', 'FraudDetector', Promise.reject(result), true, mock)
  },
  deleteOutcome: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteOutcome', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  deleteOutcomeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteOutcome', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  deleteOutcomeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteOutcome', 'FraudDetector', Promise.reject(result), true, mock)
  },
  deleteRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteRule', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  deleteRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteRule', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  deleteRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteRule', 'FraudDetector', Promise.reject(result), true, mock)
  },
  deleteVariable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteVariable', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  deleteVariableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteVariable', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  deleteVariableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'deleteVariable', 'FraudDetector', Promise.reject(result), true, mock)
  },
  describeDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'describeDetector', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  describeDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'describeDetector', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  describeDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'describeDetector', 'FraudDetector', Promise.reject(result), true, mock)
  },
  describeModelVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'describeModelVersions', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  describeModelVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'describeModelVersions', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  describeModelVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'describeModelVersions', 'FraudDetector', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'destroy', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'destroy', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'destroy', 'FraudDetector', Promise.reject(result), true, mock)
  },
  getBatchImportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getBatchImportJobs', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  getBatchImportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getBatchImportJobs', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  getBatchImportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getBatchImportJobs', 'FraudDetector', Promise.reject(result), true, mock)
  },
  getBatchPredictionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getBatchPredictionJobs', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  getBatchPredictionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getBatchPredictionJobs', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  getBatchPredictionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getBatchPredictionJobs', 'FraudDetector', Promise.reject(result), true, mock)
  },
  getDeleteEventsByEventTypeStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getDeleteEventsByEventTypeStatus', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  getDeleteEventsByEventTypeStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getDeleteEventsByEventTypeStatus', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  getDeleteEventsByEventTypeStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getDeleteEventsByEventTypeStatus', 'FraudDetector', Promise.reject(result), true, mock)
  },
  getDetectorVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getDetectorVersion', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  getDetectorVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getDetectorVersion', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  getDetectorVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getDetectorVersion', 'FraudDetector', Promise.reject(result), true, mock)
  },
  getDetectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getDetectors', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  getDetectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getDetectors', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  getDetectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getDetectors', 'FraudDetector', Promise.reject(result), true, mock)
  },
  getEntityTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getEntityTypes', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  getEntityTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getEntityTypes', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  getEntityTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getEntityTypes', 'FraudDetector', Promise.reject(result), true, mock)
  },
  getEvent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getEvent', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  getEventAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getEvent', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  getEventThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getEvent', 'FraudDetector', Promise.reject(result), true, mock)
  },
  getEventPrediction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getEventPrediction', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  getEventPredictionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getEventPrediction', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  getEventPredictionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getEventPrediction', 'FraudDetector', Promise.reject(result), true, mock)
  },
  getEventTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getEventTypes', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  getEventTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getEventTypes', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  getEventTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getEventTypes', 'FraudDetector', Promise.reject(result), true, mock)
  },
  getExternalModels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getExternalModels', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  getExternalModelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getExternalModels', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  getExternalModelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getExternalModels', 'FraudDetector', Promise.reject(result), true, mock)
  },
  getKMSEncryptionKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getKMSEncryptionKey', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  getKMSEncryptionKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getKMSEncryptionKey', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  getKMSEncryptionKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getKMSEncryptionKey', 'FraudDetector', Promise.reject(result), true, mock)
  },
  getLabels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getLabels', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  getLabelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getLabels', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  getLabelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getLabels', 'FraudDetector', Promise.reject(result), true, mock)
  },
  getModelVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getModelVersion', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  getModelVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getModelVersion', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  getModelVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getModelVersion', 'FraudDetector', Promise.reject(result), true, mock)
  },
  getModels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getModels', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  getModelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getModels', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  getModelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getModels', 'FraudDetector', Promise.reject(result), true, mock)
  },
  getOutcomes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getOutcomes', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  getOutcomesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getOutcomes', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  getOutcomesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getOutcomes', 'FraudDetector', Promise.reject(result), true, mock)
  },
  getRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getRules', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  getRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getRules', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  getRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getRules', 'FraudDetector', Promise.reject(result), true, mock)
  },
  getVariables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getVariables', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  getVariablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getVariables', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  getVariablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'getVariables', 'FraudDetector', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'listTagsForResource', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'listTagsForResource', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'listTagsForResource', 'FraudDetector', Promise.reject(result), true, mock)
  },
  putDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'putDetector', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  putDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'putDetector', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  putDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'putDetector', 'FraudDetector', Promise.reject(result), true, mock)
  },
  putEntityType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'putEntityType', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  putEntityTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'putEntityType', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  putEntityTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'putEntityType', 'FraudDetector', Promise.reject(result), true, mock)
  },
  putEventType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'putEventType', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  putEventTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'putEventType', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  putEventTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'putEventType', 'FraudDetector', Promise.reject(result), true, mock)
  },
  putExternalModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'putExternalModel', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  putExternalModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'putExternalModel', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  putExternalModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'putExternalModel', 'FraudDetector', Promise.reject(result), true, mock)
  },
  putKMSEncryptionKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'putKMSEncryptionKey', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  putKMSEncryptionKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'putKMSEncryptionKey', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  putKMSEncryptionKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'putKMSEncryptionKey', 'FraudDetector', Promise.reject(result), true, mock)
  },
  putLabel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'putLabel', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  putLabelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'putLabel', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  putLabelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'putLabel', 'FraudDetector', Promise.reject(result), true, mock)
  },
  putOutcome: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'putOutcome', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  putOutcomeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'putOutcome', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  putOutcomeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'putOutcome', 'FraudDetector', Promise.reject(result), true, mock)
  },
  sendEvent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'sendEvent', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  sendEventAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'sendEvent', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  sendEventThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'sendEvent', 'FraudDetector', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'tagResource', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'tagResource', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'tagResource', 'FraudDetector', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'untagResource', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'untagResource', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'untagResource', 'FraudDetector', Promise.reject(result), true, mock)
  },
  updateDetectorVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateDetectorVersion', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  updateDetectorVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateDetectorVersion', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  updateDetectorVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateDetectorVersion', 'FraudDetector', Promise.reject(result), true, mock)
  },
  updateDetectorVersionMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateDetectorVersionMetadata', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  updateDetectorVersionMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateDetectorVersionMetadata', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  updateDetectorVersionMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateDetectorVersionMetadata', 'FraudDetector', Promise.reject(result), true, mock)
  },
  updateDetectorVersionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateDetectorVersionStatus', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  updateDetectorVersionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateDetectorVersionStatus', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  updateDetectorVersionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateDetectorVersionStatus', 'FraudDetector', Promise.reject(result), true, mock)
  },
  updateEventLabel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateEventLabel', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  updateEventLabelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateEventLabel', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  updateEventLabelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateEventLabel', 'FraudDetector', Promise.reject(result), true, mock)
  },
  updateModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateModel', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  updateModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateModel', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  updateModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateModel', 'FraudDetector', Promise.reject(result), true, mock)
  },
  updateModelVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateModelVersion', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  updateModelVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateModelVersion', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  updateModelVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateModelVersion', 'FraudDetector', Promise.reject(result), true, mock)
  },
  updateModelVersionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateModelVersionStatus', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  updateModelVersionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateModelVersionStatus', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  updateModelVersionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateModelVersionStatus', 'FraudDetector', Promise.reject(result), true, mock)
  },
  updateRuleMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateRuleMetadata', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  updateRuleMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateRuleMetadata', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  updateRuleMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateRuleMetadata', 'FraudDetector', Promise.reject(result), true, mock)
  },
  updateRuleVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateRuleVersion', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  updateRuleVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateRuleVersion', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  updateRuleVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateRuleVersion', 'FraudDetector', Promise.reject(result), true, mock)
  },
  updateVariable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateVariable', 'FraudDetector', Promise.resolve(result), true, mock)
  },
  updateVariableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateVariable', 'FraudDetector', Promise.resolve(result), false, mock)
  },
  updateVariableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'updateVariable', 'FraudDetector', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'send', 'FraudDetectorClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'send', 'FraudDetectorClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-frauddetector', 'send', 'FraudDetectorClient', Promise.reject(result), true, mock)
  }
}