
/**
* @description mocks_v3:mockLookoutEquipment module is mocks for AWS-SDK V3
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
export const mockLookoutEquipment = {
  createDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createDataset', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  createDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createDataset', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  createDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createDataset', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  createInferenceScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  createInferenceSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  createInferenceSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createInferenceScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  createLabel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createLabel', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  createLabelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createLabel', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  createLabelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createLabel', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  createLabelGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createLabelGroup', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  createLabelGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createLabelGroup', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  createLabelGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createLabelGroup', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  createModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createModel', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  createModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createModel', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  createModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createModel', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  createRetrainingScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createRetrainingScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  createRetrainingSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createRetrainingScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  createRetrainingSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'createRetrainingScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  deleteDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteDataset', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  deleteDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteDataset', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  deleteDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteDataset', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  deleteInferenceScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  deleteInferenceSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  deleteInferenceSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteInferenceScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  deleteLabel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteLabel', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  deleteLabelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteLabel', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  deleteLabelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteLabel', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  deleteLabelGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteLabelGroup', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  deleteLabelGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteLabelGroup', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  deleteLabelGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteLabelGroup', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  deleteModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteModel', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  deleteModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteModel', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  deleteModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteModel', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteResourcePolicy', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteResourcePolicy', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteResourcePolicy', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  deleteRetrainingScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteRetrainingScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  deleteRetrainingSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteRetrainingScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  deleteRetrainingSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'deleteRetrainingScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  describeDataIngestionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeDataIngestionJob', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  describeDataIngestionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeDataIngestionJob', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  describeDataIngestionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeDataIngestionJob', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  describeDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeDataset', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  describeDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeDataset', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  describeDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeDataset', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  describeInferenceScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  describeInferenceSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  describeInferenceSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeInferenceScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  describeLabel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeLabel', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  describeLabelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeLabel', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  describeLabelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeLabel', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  describeLabelGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeLabelGroup', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  describeLabelGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeLabelGroup', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  describeLabelGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeLabelGroup', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  describeModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeModel', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  describeModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeModel', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  describeModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeModel', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  describeModelVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeModelVersion', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  describeModelVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeModelVersion', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  describeModelVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeModelVersion', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  describeResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeResourcePolicy', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  describeResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeResourcePolicy', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  describeResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeResourcePolicy', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  describeRetrainingScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeRetrainingScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  describeRetrainingSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeRetrainingScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  describeRetrainingSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'describeRetrainingScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  importDataset: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'importDataset', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  importDatasetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'importDataset', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  importDatasetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'importDataset', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  importModelVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'importModelVersion', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  importModelVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'importModelVersion', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  importModelVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'importModelVersion', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listDataIngestionJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listDataIngestionJobs', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listDataIngestionJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listDataIngestionJobs', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listDataIngestionJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listDataIngestionJobs', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listDatasets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listDatasets', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listDatasetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listDatasets', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listDatasetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listDatasets', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listInferenceEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listInferenceEvents', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listInferenceEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listInferenceEvents', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listInferenceEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listInferenceEvents', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listInferenceExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listInferenceExecutions', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listInferenceExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listInferenceExecutions', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listInferenceExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listInferenceExecutions', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listInferenceSchedulers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listInferenceSchedulers', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listInferenceSchedulersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listInferenceSchedulers', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listInferenceSchedulersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listInferenceSchedulers', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listLabelGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listLabelGroups', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listLabelGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listLabelGroups', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listLabelGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listLabelGroups', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listLabels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listLabels', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listLabelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listLabels', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listLabelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listLabels', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listModelVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listModelVersions', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listModelVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listModelVersions', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listModelVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listModelVersions', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listModels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listModels', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listModelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listModels', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listModelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listModels', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listRetrainingSchedulers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listRetrainingSchedulers', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listRetrainingSchedulersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listRetrainingSchedulers', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listRetrainingSchedulersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listRetrainingSchedulers', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listSensorStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listSensorStatistics', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listSensorStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listSensorStatistics', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listSensorStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listSensorStatistics', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listTagsForResource', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listTagsForResource', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'listTagsForResource', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'putResourcePolicy', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'putResourcePolicy', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'putResourcePolicy', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  startDataIngestionJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'startDataIngestionJob', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  startDataIngestionJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'startDataIngestionJob', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  startDataIngestionJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'startDataIngestionJob', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  startInferenceScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'startInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  startInferenceSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'startInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  startInferenceSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'startInferenceScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  startRetrainingScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'startRetrainingScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  startRetrainingSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'startRetrainingScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  startRetrainingSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'startRetrainingScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  stopInferenceScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'stopInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  stopInferenceSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'stopInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  stopInferenceSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'stopInferenceScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  stopRetrainingScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'stopRetrainingScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  stopRetrainingSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'stopRetrainingScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  stopRetrainingSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'stopRetrainingScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'tagResource', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'tagResource', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'tagResource', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'untagResource', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'untagResource', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'untagResource', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  updateActiveModelVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'updateActiveModelVersion', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  updateActiveModelVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'updateActiveModelVersion', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  updateActiveModelVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'updateActiveModelVersion', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  updateInferenceScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'updateInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  updateInferenceSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'updateInferenceScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  updateInferenceSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'updateInferenceScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  updateLabelGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'updateLabelGroup', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  updateLabelGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'updateLabelGroup', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  updateLabelGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'updateLabelGroup', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  updateModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'updateModel', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  updateModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'updateModel', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  updateModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'updateModel', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  updateRetrainingScheduler: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'updateRetrainingScheduler', 'LookoutEquipment', Promise.resolve(result), true, mock)
  },
  updateRetrainingSchedulerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'updateRetrainingScheduler', 'LookoutEquipment', Promise.resolve(result), false, mock)
  },
  updateRetrainingSchedulerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'updateRetrainingScheduler', 'LookoutEquipment', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'send', 'LookoutEquipmentClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'send', 'LookoutEquipmentClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-lookoutequipment', 'send', 'LookoutEquipmentClient', Promise.reject(result), true, mock)
  }
}
