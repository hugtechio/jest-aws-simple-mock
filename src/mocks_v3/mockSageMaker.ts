
/**
* @description mocks_v3:mockSageMaker module is mocks for AWS-SDK V3
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

  export const mockSageMaker = {
  addAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'addAssociation', 'SageMaker', Promise.resolve(result), true, mock)
  },
  addAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'addAssociation', 'SageMaker', Promise.resolve(result), false, mock)
  },
  addAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'addAssociation', 'SageMaker', Promise.reject(result), true, mock)
  },
  addTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'addTags', 'SageMaker', Promise.resolve(result), true, mock)
  },
  addTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'addTags', 'SageMaker', Promise.resolve(result), false, mock)
  },
  addTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'addTags', 'SageMaker', Promise.reject(result), true, mock)
  },
  associateTrialComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'associateTrialComponent', 'SageMaker', Promise.resolve(result), true, mock)
  },
  associateTrialComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'associateTrialComponent', 'SageMaker', Promise.resolve(result), false, mock)
  },
  associateTrialComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'associateTrialComponent', 'SageMaker', Promise.reject(result), true, mock)
  },
  batchDescribeModelPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'batchDescribeModelPackage', 'SageMaker', Promise.resolve(result), true, mock)
  },
  batchDescribeModelPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'batchDescribeModelPackage', 'SageMaker', Promise.resolve(result), false, mock)
  },
  batchDescribeModelPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'batchDescribeModelPackage', 'SageMaker', Promise.reject(result), true, mock)
  },
  createAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createAction', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createAction', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createAction', 'SageMaker', Promise.reject(result), true, mock)
  },
  createAlgorithm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createAlgorithm', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createAlgorithmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createAlgorithm', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createAlgorithmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createAlgorithm', 'SageMaker', Promise.reject(result), true, mock)
  },
  createApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createApp', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createApp', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createApp', 'SageMaker', Promise.reject(result), true, mock)
  },
  createAppImageConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createAppImageConfig', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createAppImageConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createAppImageConfig', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createAppImageConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createAppImageConfig', 'SageMaker', Promise.reject(result), true, mock)
  },
  createArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createArtifact', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createArtifact', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createArtifact', 'SageMaker', Promise.reject(result), true, mock)
  },
  createAutoMLJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createAutoMLJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createAutoMLJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createAutoMLJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createAutoMLJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createAutoMLJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  createCodeRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createCodeRepository', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createCodeRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createCodeRepository', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createCodeRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createCodeRepository', 'SageMaker', Promise.reject(result), true, mock)
  },
  createCompilationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createCompilationJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createCompilationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createCompilationJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createCompilationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createCompilationJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  createContext: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createContext', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createContextAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createContext', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createContextThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createContext', 'SageMaker', Promise.reject(result), true, mock)
  },
  createDataQualityJobDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createDataQualityJobDefinition', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createDataQualityJobDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createDataQualityJobDefinition', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createDataQualityJobDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createDataQualityJobDefinition', 'SageMaker', Promise.reject(result), true, mock)
  },
  createDeviceFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createDeviceFleet', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createDeviceFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createDeviceFleet', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createDeviceFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createDeviceFleet', 'SageMaker', Promise.reject(result), true, mock)
  },
  createDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createDomain', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createDomain', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createDomain', 'SageMaker', Promise.reject(result), true, mock)
  },
  createEdgePackagingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createEdgePackagingJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createEdgePackagingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createEdgePackagingJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createEdgePackagingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createEdgePackagingJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  createEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createEndpoint', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createEndpoint', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createEndpoint', 'SageMaker', Promise.reject(result), true, mock)
  },
  createEndpointConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createEndpointConfig', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createEndpointConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createEndpointConfig', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createEndpointConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createEndpointConfig', 'SageMaker', Promise.reject(result), true, mock)
  },
  createExperiment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createExperiment', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createExperimentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createExperiment', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createExperimentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createExperiment', 'SageMaker', Promise.reject(result), true, mock)
  },
  createFeatureGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createFeatureGroup', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createFeatureGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createFeatureGroup', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createFeatureGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createFeatureGroup', 'SageMaker', Promise.reject(result), true, mock)
  },
  createFlowDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createFlowDefinition', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createFlowDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createFlowDefinition', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createFlowDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createFlowDefinition', 'SageMaker', Promise.reject(result), true, mock)
  },
  createHumanTaskUi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createHumanTaskUi', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createHumanTaskUiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createHumanTaskUi', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createHumanTaskUiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createHumanTaskUi', 'SageMaker', Promise.reject(result), true, mock)
  },
  createHyperParameterTuningJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createHyperParameterTuningJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createHyperParameterTuningJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createHyperParameterTuningJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createHyperParameterTuningJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createHyperParameterTuningJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  createImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createImage', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createImage', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createImage', 'SageMaker', Promise.reject(result), true, mock)
  },
  createImageVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createImageVersion', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createImageVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createImageVersion', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createImageVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createImageVersion', 'SageMaker', Promise.reject(result), true, mock)
  },
  createLabelingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createLabelingJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createLabelingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createLabelingJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createLabelingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createLabelingJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  createModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createModel', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createModel', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createModel', 'SageMaker', Promise.reject(result), true, mock)
  },
  createModelBiasJobDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createModelBiasJobDefinition', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createModelBiasJobDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createModelBiasJobDefinition', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createModelBiasJobDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createModelBiasJobDefinition', 'SageMaker', Promise.reject(result), true, mock)
  },
  createModelExplainabilityJobDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createModelExplainabilityJobDefinition', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createModelExplainabilityJobDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createModelExplainabilityJobDefinition', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createModelExplainabilityJobDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createModelExplainabilityJobDefinition', 'SageMaker', Promise.reject(result), true, mock)
  },
  createModelPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createModelPackage', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createModelPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createModelPackage', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createModelPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createModelPackage', 'SageMaker', Promise.reject(result), true, mock)
  },
  createModelPackageGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createModelPackageGroup', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createModelPackageGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createModelPackageGroup', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createModelPackageGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createModelPackageGroup', 'SageMaker', Promise.reject(result), true, mock)
  },
  createModelQualityJobDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createModelQualityJobDefinition', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createModelQualityJobDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createModelQualityJobDefinition', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createModelQualityJobDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createModelQualityJobDefinition', 'SageMaker', Promise.reject(result), true, mock)
  },
  createMonitoringSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createMonitoringSchedule', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createMonitoringScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createMonitoringSchedule', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createMonitoringScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createMonitoringSchedule', 'SageMaker', Promise.reject(result), true, mock)
  },
  createNotebookInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createNotebookInstance', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createNotebookInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createNotebookInstance', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createNotebookInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createNotebookInstance', 'SageMaker', Promise.reject(result), true, mock)
  },
  createNotebookInstanceLifecycleConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createNotebookInstanceLifecycleConfig', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createNotebookInstanceLifecycleConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createNotebookInstanceLifecycleConfig', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createNotebookInstanceLifecycleConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createNotebookInstanceLifecycleConfig', 'SageMaker', Promise.reject(result), true, mock)
  },
  createPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createPipeline', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createPipeline', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createPipeline', 'SageMaker', Promise.reject(result), true, mock)
  },
  createPresignedDomainUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createPresignedDomainUrl', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createPresignedDomainUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createPresignedDomainUrl', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createPresignedDomainUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createPresignedDomainUrl', 'SageMaker', Promise.reject(result), true, mock)
  },
  createPresignedNotebookInstanceUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createPresignedNotebookInstanceUrl', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createPresignedNotebookInstanceUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createPresignedNotebookInstanceUrl', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createPresignedNotebookInstanceUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createPresignedNotebookInstanceUrl', 'SageMaker', Promise.reject(result), true, mock)
  },
  createProcessingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createProcessingJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createProcessingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createProcessingJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createProcessingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createProcessingJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  createProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createProject', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createProject', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createProject', 'SageMaker', Promise.reject(result), true, mock)
  },
  createStudioLifecycleConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createStudioLifecycleConfig', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createStudioLifecycleConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createStudioLifecycleConfig', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createStudioLifecycleConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createStudioLifecycleConfig', 'SageMaker', Promise.reject(result), true, mock)
  },
  createTrainingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createTrainingJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createTrainingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createTrainingJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createTrainingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createTrainingJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  createTransformJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createTransformJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createTransformJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createTransformJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createTransformJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createTransformJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  createTrial: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createTrial', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createTrialAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createTrial', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createTrialThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createTrial', 'SageMaker', Promise.reject(result), true, mock)
  },
  createTrialComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createTrialComponent', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createTrialComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createTrialComponent', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createTrialComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createTrialComponent', 'SageMaker', Promise.reject(result), true, mock)
  },
  createUserProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createUserProfile', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createUserProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createUserProfile', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createUserProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createUserProfile', 'SageMaker', Promise.reject(result), true, mock)
  },
  createWorkforce: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createWorkforce', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createWorkforceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createWorkforce', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createWorkforceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createWorkforce', 'SageMaker', Promise.reject(result), true, mock)
  },
  createWorkteam: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createWorkteam', 'SageMaker', Promise.resolve(result), true, mock)
  },
  createWorkteamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createWorkteam', 'SageMaker', Promise.resolve(result), false, mock)
  },
  createWorkteamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'createWorkteam', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteAction', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteAction', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteAction', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteAlgorithm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteAlgorithm', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteAlgorithmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteAlgorithm', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteAlgorithmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteAlgorithm', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteApp', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteApp', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteApp', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteAppImageConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteAppImageConfig', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteAppImageConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteAppImageConfig', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteAppImageConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteAppImageConfig', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteArtifact', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteArtifact', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteArtifact', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteAssociation', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteAssociation', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteAssociation', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteCodeRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteCodeRepository', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteCodeRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteCodeRepository', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteCodeRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteCodeRepository', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteContext: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteContext', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteContextAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteContext', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteContextThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteContext', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteDataQualityJobDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteDataQualityJobDefinition', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteDataQualityJobDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteDataQualityJobDefinition', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteDataQualityJobDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteDataQualityJobDefinition', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteDeviceFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteDeviceFleet', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteDeviceFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteDeviceFleet', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteDeviceFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteDeviceFleet', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteDomain', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteDomain', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteDomain', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteEndpoint', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteEndpoint', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteEndpoint', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteEndpointConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteEndpointConfig', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteEndpointConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteEndpointConfig', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteEndpointConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteEndpointConfig', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteExperiment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteExperiment', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteExperimentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteExperiment', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteExperimentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteExperiment', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteFeatureGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteFeatureGroup', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteFeatureGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteFeatureGroup', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteFeatureGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteFeatureGroup', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteFlowDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteFlowDefinition', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteFlowDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteFlowDefinition', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteFlowDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteFlowDefinition', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteHumanTaskUi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteHumanTaskUi', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteHumanTaskUiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteHumanTaskUi', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteHumanTaskUiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteHumanTaskUi', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteImage', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteImage', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteImage', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteImageVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteImageVersion', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteImageVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteImageVersion', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteImageVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteImageVersion', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteModel', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteModel', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteModel', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteModelBiasJobDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteModelBiasJobDefinition', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteModelBiasJobDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteModelBiasJobDefinition', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteModelBiasJobDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteModelBiasJobDefinition', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteModelExplainabilityJobDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteModelExplainabilityJobDefinition', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteModelExplainabilityJobDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteModelExplainabilityJobDefinition', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteModelExplainabilityJobDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteModelExplainabilityJobDefinition', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteModelPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteModelPackage', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteModelPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteModelPackage', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteModelPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteModelPackage', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteModelPackageGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteModelPackageGroup', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteModelPackageGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteModelPackageGroup', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteModelPackageGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteModelPackageGroup', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteModelPackageGroupPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteModelPackageGroupPolicy', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteModelPackageGroupPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteModelPackageGroupPolicy', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteModelPackageGroupPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteModelPackageGroupPolicy', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteModelQualityJobDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteModelQualityJobDefinition', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteModelQualityJobDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteModelQualityJobDefinition', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteModelQualityJobDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteModelQualityJobDefinition', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteMonitoringSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteMonitoringSchedule', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteMonitoringScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteMonitoringSchedule', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteMonitoringScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteMonitoringSchedule', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteNotebookInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteNotebookInstance', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteNotebookInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteNotebookInstance', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteNotebookInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteNotebookInstance', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteNotebookInstanceLifecycleConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteNotebookInstanceLifecycleConfig', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteNotebookInstanceLifecycleConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteNotebookInstanceLifecycleConfig', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteNotebookInstanceLifecycleConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteNotebookInstanceLifecycleConfig', 'SageMaker', Promise.reject(result), true, mock)
  },
  deletePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deletePipeline', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deletePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deletePipeline', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deletePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deletePipeline', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteProject', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteProject', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteProject', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteStudioLifecycleConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteStudioLifecycleConfig', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteStudioLifecycleConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteStudioLifecycleConfig', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteStudioLifecycleConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteStudioLifecycleConfig', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteTags', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteTags', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteTags', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteTrial: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteTrial', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteTrialAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteTrial', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteTrialThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteTrial', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteTrialComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteTrialComponent', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteTrialComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteTrialComponent', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteTrialComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteTrialComponent', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteUserProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteUserProfile', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteUserProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteUserProfile', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteUserProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteUserProfile', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteWorkforce: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteWorkforce', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteWorkforceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteWorkforce', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteWorkforceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteWorkforce', 'SageMaker', Promise.reject(result), true, mock)
  },
  deleteWorkteam: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteWorkteam', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deleteWorkteamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteWorkteam', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deleteWorkteamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deleteWorkteam', 'SageMaker', Promise.reject(result), true, mock)
  },
  deregisterDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deregisterDevices', 'SageMaker', Promise.resolve(result), true, mock)
  },
  deregisterDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deregisterDevices', 'SageMaker', Promise.resolve(result), false, mock)
  },
  deregisterDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'deregisterDevices', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeAction', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeAction', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeAction', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeAlgorithm: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeAlgorithm', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeAlgorithmAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeAlgorithm', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeAlgorithmThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeAlgorithm', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeApp', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeApp', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeApp', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeAppImageConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeAppImageConfig', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeAppImageConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeAppImageConfig', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeAppImageConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeAppImageConfig', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeArtifact', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeArtifact', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeArtifact', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeAutoMLJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeAutoMLJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeAutoMLJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeAutoMLJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeAutoMLJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeAutoMLJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeCodeRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeCodeRepository', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeCodeRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeCodeRepository', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeCodeRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeCodeRepository', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeCompilationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeCompilationJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeCompilationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeCompilationJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeCompilationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeCompilationJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeContext: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeContext', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeContextAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeContext', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeContextThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeContext', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeDataQualityJobDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeDataQualityJobDefinition', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeDataQualityJobDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeDataQualityJobDefinition', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeDataQualityJobDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeDataQualityJobDefinition', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeDevice: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeDevice', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeDeviceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeDevice', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeDeviceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeDevice', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeDeviceFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeDeviceFleet', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeDeviceFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeDeviceFleet', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeDeviceFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeDeviceFleet', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeDomain', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeDomain', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeDomain', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeEdgePackagingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeEdgePackagingJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeEdgePackagingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeEdgePackagingJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeEdgePackagingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeEdgePackagingJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeEndpoint', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeEndpoint', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeEndpoint', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeEndpointConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeEndpointConfig', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeEndpointConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeEndpointConfig', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeEndpointConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeEndpointConfig', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeExperiment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeExperiment', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeExperimentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeExperiment', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeExperimentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeExperiment', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeFeatureGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeFeatureGroup', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeFeatureGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeFeatureGroup', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeFeatureGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeFeatureGroup', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeFlowDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeFlowDefinition', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeFlowDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeFlowDefinition', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeFlowDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeFlowDefinition', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeHumanTaskUi: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeHumanTaskUi', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeHumanTaskUiAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeHumanTaskUi', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeHumanTaskUiThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeHumanTaskUi', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeHyperParameterTuningJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeHyperParameterTuningJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeHyperParameterTuningJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeHyperParameterTuningJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeHyperParameterTuningJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeHyperParameterTuningJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeImage', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeImage', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeImage', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeImageVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeImageVersion', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeImageVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeImageVersion', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeImageVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeImageVersion', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeLabelingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeLabelingJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeLabelingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeLabelingJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeLabelingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeLabelingJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeModel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeModel', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeModelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeModel', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeModelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeModel', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeModelBiasJobDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeModelBiasJobDefinition', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeModelBiasJobDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeModelBiasJobDefinition', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeModelBiasJobDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeModelBiasJobDefinition', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeModelExplainabilityJobDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeModelExplainabilityJobDefinition', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeModelExplainabilityJobDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeModelExplainabilityJobDefinition', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeModelExplainabilityJobDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeModelExplainabilityJobDefinition', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeModelPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeModelPackage', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeModelPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeModelPackage', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeModelPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeModelPackage', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeModelPackageGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeModelPackageGroup', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeModelPackageGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeModelPackageGroup', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeModelPackageGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeModelPackageGroup', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeModelQualityJobDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeModelQualityJobDefinition', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeModelQualityJobDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeModelQualityJobDefinition', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeModelQualityJobDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeModelQualityJobDefinition', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeMonitoringSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeMonitoringSchedule', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeMonitoringScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeMonitoringSchedule', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeMonitoringScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeMonitoringSchedule', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeNotebookInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeNotebookInstance', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeNotebookInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeNotebookInstance', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeNotebookInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeNotebookInstance', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeNotebookInstanceLifecycleConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeNotebookInstanceLifecycleConfig', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeNotebookInstanceLifecycleConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeNotebookInstanceLifecycleConfig', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeNotebookInstanceLifecycleConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeNotebookInstanceLifecycleConfig', 'SageMaker', Promise.reject(result), true, mock)
  },
  describePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describePipeline', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describePipeline', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describePipeline', 'SageMaker', Promise.reject(result), true, mock)
  },
  describePipelineDefinitionForExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describePipelineDefinitionForExecution', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describePipelineDefinitionForExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describePipelineDefinitionForExecution', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describePipelineDefinitionForExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describePipelineDefinitionForExecution', 'SageMaker', Promise.reject(result), true, mock)
  },
  describePipelineExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describePipelineExecution', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describePipelineExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describePipelineExecution', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describePipelineExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describePipelineExecution', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeProcessingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeProcessingJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeProcessingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeProcessingJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeProcessingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeProcessingJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeProject', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeProject', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeProject', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeStudioLifecycleConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeStudioLifecycleConfig', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeStudioLifecycleConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeStudioLifecycleConfig', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeStudioLifecycleConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeStudioLifecycleConfig', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeSubscribedWorkteam: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeSubscribedWorkteam', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeSubscribedWorkteamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeSubscribedWorkteam', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeSubscribedWorkteamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeSubscribedWorkteam', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeTrainingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeTrainingJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeTrainingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeTrainingJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeTrainingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeTrainingJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeTransformJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeTransformJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeTransformJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeTransformJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeTransformJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeTransformJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeTrial: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeTrial', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeTrialAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeTrial', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeTrialThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeTrial', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeTrialComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeTrialComponent', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeTrialComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeTrialComponent', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeTrialComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeTrialComponent', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeUserProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeUserProfile', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeUserProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeUserProfile', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeUserProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeUserProfile', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeWorkforce: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeWorkforce', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeWorkforceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeWorkforce', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeWorkforceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeWorkforce', 'SageMaker', Promise.reject(result), true, mock)
  },
  describeWorkteam: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeWorkteam', 'SageMaker', Promise.resolve(result), true, mock)
  },
  describeWorkteamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeWorkteam', 'SageMaker', Promise.resolve(result), false, mock)
  },
  describeWorkteamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'describeWorkteam', 'SageMaker', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'destroy', 'SageMaker', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'destroy', 'SageMaker', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'destroy', 'SageMaker', Promise.reject(result), true, mock)
  },
  disableSagemakerServicecatalogPortfolio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'disableSagemakerServicecatalogPortfolio', 'SageMaker', Promise.resolve(result), true, mock)
  },
  disableSagemakerServicecatalogPortfolioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'disableSagemakerServicecatalogPortfolio', 'SageMaker', Promise.resolve(result), false, mock)
  },
  disableSagemakerServicecatalogPortfolioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'disableSagemakerServicecatalogPortfolio', 'SageMaker', Promise.reject(result), true, mock)
  },
  disassociateTrialComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'disassociateTrialComponent', 'SageMaker', Promise.resolve(result), true, mock)
  },
  disassociateTrialComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'disassociateTrialComponent', 'SageMaker', Promise.resolve(result), false, mock)
  },
  disassociateTrialComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'disassociateTrialComponent', 'SageMaker', Promise.reject(result), true, mock)
  },
  enableSagemakerServicecatalogPortfolio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'enableSagemakerServicecatalogPortfolio', 'SageMaker', Promise.resolve(result), true, mock)
  },
  enableSagemakerServicecatalogPortfolioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'enableSagemakerServicecatalogPortfolio', 'SageMaker', Promise.resolve(result), false, mock)
  },
  enableSagemakerServicecatalogPortfolioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'enableSagemakerServicecatalogPortfolio', 'SageMaker', Promise.reject(result), true, mock)
  },
  getDeviceFleetReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'getDeviceFleetReport', 'SageMaker', Promise.resolve(result), true, mock)
  },
  getDeviceFleetReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'getDeviceFleetReport', 'SageMaker', Promise.resolve(result), false, mock)
  },
  getDeviceFleetReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'getDeviceFleetReport', 'SageMaker', Promise.reject(result), true, mock)
  },
  getModelPackageGroupPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'getModelPackageGroupPolicy', 'SageMaker', Promise.resolve(result), true, mock)
  },
  getModelPackageGroupPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'getModelPackageGroupPolicy', 'SageMaker', Promise.resolve(result), false, mock)
  },
  getModelPackageGroupPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'getModelPackageGroupPolicy', 'SageMaker', Promise.reject(result), true, mock)
  },
  getSagemakerServicecatalogPortfolioStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'getSagemakerServicecatalogPortfolioStatus', 'SageMaker', Promise.resolve(result), true, mock)
  },
  getSagemakerServicecatalogPortfolioStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'getSagemakerServicecatalogPortfolioStatus', 'SageMaker', Promise.resolve(result), false, mock)
  },
  getSagemakerServicecatalogPortfolioStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'getSagemakerServicecatalogPortfolioStatus', 'SageMaker', Promise.reject(result), true, mock)
  },
  getSearchSuggestions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'getSearchSuggestions', 'SageMaker', Promise.resolve(result), true, mock)
  },
  getSearchSuggestionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'getSearchSuggestions', 'SageMaker', Promise.resolve(result), false, mock)
  },
  getSearchSuggestionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'getSearchSuggestions', 'SageMaker', Promise.reject(result), true, mock)
  },
  listActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listActions', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listActions', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listActions', 'SageMaker', Promise.reject(result), true, mock)
  },
  listAlgorithms: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listAlgorithms', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listAlgorithmsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listAlgorithms', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listAlgorithmsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listAlgorithms', 'SageMaker', Promise.reject(result), true, mock)
  },
  listAppImageConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listAppImageConfigs', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listAppImageConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listAppImageConfigs', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listAppImageConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listAppImageConfigs', 'SageMaker', Promise.reject(result), true, mock)
  },
  listApps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listApps', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listAppsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listApps', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listAppsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listApps', 'SageMaker', Promise.reject(result), true, mock)
  },
  listArtifacts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listArtifacts', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listArtifactsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listArtifacts', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listArtifactsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listArtifacts', 'SageMaker', Promise.reject(result), true, mock)
  },
  listAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listAssociations', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listAssociations', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listAssociations', 'SageMaker', Promise.reject(result), true, mock)
  },
  listAutoMLJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listAutoMLJobs', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listAutoMLJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listAutoMLJobs', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listAutoMLJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listAutoMLJobs', 'SageMaker', Promise.reject(result), true, mock)
  },
  listCandidatesForAutoMLJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listCandidatesForAutoMLJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listCandidatesForAutoMLJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listCandidatesForAutoMLJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listCandidatesForAutoMLJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listCandidatesForAutoMLJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  listCodeRepositories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listCodeRepositories', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listCodeRepositoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listCodeRepositories', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listCodeRepositoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listCodeRepositories', 'SageMaker', Promise.reject(result), true, mock)
  },
  listCompilationJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listCompilationJobs', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listCompilationJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listCompilationJobs', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listCompilationJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listCompilationJobs', 'SageMaker', Promise.reject(result), true, mock)
  },
  listContexts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listContexts', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listContextsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listContexts', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listContextsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listContexts', 'SageMaker', Promise.reject(result), true, mock)
  },
  listDataQualityJobDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listDataQualityJobDefinitions', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listDataQualityJobDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listDataQualityJobDefinitions', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listDataQualityJobDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listDataQualityJobDefinitions', 'SageMaker', Promise.reject(result), true, mock)
  },
  listDeviceFleets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listDeviceFleets', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listDeviceFleetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listDeviceFleets', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listDeviceFleetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listDeviceFleets', 'SageMaker', Promise.reject(result), true, mock)
  },
  listDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listDevices', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listDevices', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listDevices', 'SageMaker', Promise.reject(result), true, mock)
  },
  listDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listDomains', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listDomains', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listDomains', 'SageMaker', Promise.reject(result), true, mock)
  },
  listEdgePackagingJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listEdgePackagingJobs', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listEdgePackagingJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listEdgePackagingJobs', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listEdgePackagingJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listEdgePackagingJobs', 'SageMaker', Promise.reject(result), true, mock)
  },
  listEndpointConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listEndpointConfigs', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listEndpointConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listEndpointConfigs', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listEndpointConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listEndpointConfigs', 'SageMaker', Promise.reject(result), true, mock)
  },
  listEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listEndpoints', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listEndpoints', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listEndpoints', 'SageMaker', Promise.reject(result), true, mock)
  },
  listExperiments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listExperiments', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listExperimentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listExperiments', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listExperimentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listExperiments', 'SageMaker', Promise.reject(result), true, mock)
  },
  listFeatureGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listFeatureGroups', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listFeatureGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listFeatureGroups', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listFeatureGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listFeatureGroups', 'SageMaker', Promise.reject(result), true, mock)
  },
  listFlowDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listFlowDefinitions', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listFlowDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listFlowDefinitions', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listFlowDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listFlowDefinitions', 'SageMaker', Promise.reject(result), true, mock)
  },
  listHumanTaskUis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listHumanTaskUis', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listHumanTaskUisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listHumanTaskUis', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listHumanTaskUisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listHumanTaskUis', 'SageMaker', Promise.reject(result), true, mock)
  },
  listHyperParameterTuningJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listHyperParameterTuningJobs', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listHyperParameterTuningJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listHyperParameterTuningJobs', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listHyperParameterTuningJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listHyperParameterTuningJobs', 'SageMaker', Promise.reject(result), true, mock)
  },
  listImageVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listImageVersions', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listImageVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listImageVersions', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listImageVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listImageVersions', 'SageMaker', Promise.reject(result), true, mock)
  },
  listImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listImages', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listImages', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listImages', 'SageMaker', Promise.reject(result), true, mock)
  },
  listLabelingJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listLabelingJobs', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listLabelingJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listLabelingJobs', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listLabelingJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listLabelingJobs', 'SageMaker', Promise.reject(result), true, mock)
  },
  listLabelingJobsForWorkteam: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listLabelingJobsForWorkteam', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listLabelingJobsForWorkteamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listLabelingJobsForWorkteam', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listLabelingJobsForWorkteamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listLabelingJobsForWorkteam', 'SageMaker', Promise.reject(result), true, mock)
  },
  listModelBiasJobDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listModelBiasJobDefinitions', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listModelBiasJobDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listModelBiasJobDefinitions', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listModelBiasJobDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listModelBiasJobDefinitions', 'SageMaker', Promise.reject(result), true, mock)
  },
  listModelExplainabilityJobDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listModelExplainabilityJobDefinitions', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listModelExplainabilityJobDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listModelExplainabilityJobDefinitions', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listModelExplainabilityJobDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listModelExplainabilityJobDefinitions', 'SageMaker', Promise.reject(result), true, mock)
  },
  listModelPackageGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listModelPackageGroups', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listModelPackageGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listModelPackageGroups', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listModelPackageGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listModelPackageGroups', 'SageMaker', Promise.reject(result), true, mock)
  },
  listModelPackages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listModelPackages', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listModelPackagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listModelPackages', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listModelPackagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listModelPackages', 'SageMaker', Promise.reject(result), true, mock)
  },
  listModelQualityJobDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listModelQualityJobDefinitions', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listModelQualityJobDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listModelQualityJobDefinitions', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listModelQualityJobDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listModelQualityJobDefinitions', 'SageMaker', Promise.reject(result), true, mock)
  },
  listModels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listModels', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listModelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listModels', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listModelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listModels', 'SageMaker', Promise.reject(result), true, mock)
  },
  listMonitoringExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listMonitoringExecutions', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listMonitoringExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listMonitoringExecutions', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listMonitoringExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listMonitoringExecutions', 'SageMaker', Promise.reject(result), true, mock)
  },
  listMonitoringSchedules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listMonitoringSchedules', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listMonitoringSchedulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listMonitoringSchedules', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listMonitoringSchedulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listMonitoringSchedules', 'SageMaker', Promise.reject(result), true, mock)
  },
  listNotebookInstanceLifecycleConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listNotebookInstanceLifecycleConfigs', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listNotebookInstanceLifecycleConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listNotebookInstanceLifecycleConfigs', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listNotebookInstanceLifecycleConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listNotebookInstanceLifecycleConfigs', 'SageMaker', Promise.reject(result), true, mock)
  },
  listNotebookInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listNotebookInstances', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listNotebookInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listNotebookInstances', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listNotebookInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listNotebookInstances', 'SageMaker', Promise.reject(result), true, mock)
  },
  listPipelineExecutionSteps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listPipelineExecutionSteps', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listPipelineExecutionStepsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listPipelineExecutionSteps', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listPipelineExecutionStepsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listPipelineExecutionSteps', 'SageMaker', Promise.reject(result), true, mock)
  },
  listPipelineExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listPipelineExecutions', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listPipelineExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listPipelineExecutions', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listPipelineExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listPipelineExecutions', 'SageMaker', Promise.reject(result), true, mock)
  },
  listPipelineParametersForExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listPipelineParametersForExecution', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listPipelineParametersForExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listPipelineParametersForExecution', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listPipelineParametersForExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listPipelineParametersForExecution', 'SageMaker', Promise.reject(result), true, mock)
  },
  listPipelines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listPipelines', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listPipelinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listPipelines', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listPipelinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listPipelines', 'SageMaker', Promise.reject(result), true, mock)
  },
  listProcessingJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listProcessingJobs', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listProcessingJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listProcessingJobs', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listProcessingJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listProcessingJobs', 'SageMaker', Promise.reject(result), true, mock)
  },
  listProjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listProjects', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listProjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listProjects', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listProjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listProjects', 'SageMaker', Promise.reject(result), true, mock)
  },
  listStudioLifecycleConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listStudioLifecycleConfigs', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listStudioLifecycleConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listStudioLifecycleConfigs', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listStudioLifecycleConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listStudioLifecycleConfigs', 'SageMaker', Promise.reject(result), true, mock)
  },
  listSubscribedWorkteams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listSubscribedWorkteams', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listSubscribedWorkteamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listSubscribedWorkteams', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listSubscribedWorkteamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listSubscribedWorkteams', 'SageMaker', Promise.reject(result), true, mock)
  },
  listTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listTags', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listTags', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listTags', 'SageMaker', Promise.reject(result), true, mock)
  },
  listTrainingJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listTrainingJobs', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listTrainingJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listTrainingJobs', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listTrainingJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listTrainingJobs', 'SageMaker', Promise.reject(result), true, mock)
  },
  listTrainingJobsForHyperParameterTuningJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listTrainingJobsForHyperParameterTuningJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listTrainingJobsForHyperParameterTuningJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listTrainingJobsForHyperParameterTuningJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listTrainingJobsForHyperParameterTuningJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listTrainingJobsForHyperParameterTuningJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  listTransformJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listTransformJobs', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listTransformJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listTransformJobs', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listTransformJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listTransformJobs', 'SageMaker', Promise.reject(result), true, mock)
  },
  listTrialComponents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listTrialComponents', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listTrialComponentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listTrialComponents', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listTrialComponentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listTrialComponents', 'SageMaker', Promise.reject(result), true, mock)
  },
  listTrials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listTrials', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listTrialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listTrials', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listTrialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listTrials', 'SageMaker', Promise.reject(result), true, mock)
  },
  listUserProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listUserProfiles', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listUserProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listUserProfiles', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listUserProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listUserProfiles', 'SageMaker', Promise.reject(result), true, mock)
  },
  listWorkforces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listWorkforces', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listWorkforcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listWorkforces', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listWorkforcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listWorkforces', 'SageMaker', Promise.reject(result), true, mock)
  },
  listWorkteams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listWorkteams', 'SageMaker', Promise.resolve(result), true, mock)
  },
  listWorkteamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listWorkteams', 'SageMaker', Promise.resolve(result), false, mock)
  },
  listWorkteamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'listWorkteams', 'SageMaker', Promise.reject(result), true, mock)
  },
  putModelPackageGroupPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'putModelPackageGroupPolicy', 'SageMaker', Promise.resolve(result), true, mock)
  },
  putModelPackageGroupPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'putModelPackageGroupPolicy', 'SageMaker', Promise.resolve(result), false, mock)
  },
  putModelPackageGroupPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'putModelPackageGroupPolicy', 'SageMaker', Promise.reject(result), true, mock)
  },
  registerDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'registerDevices', 'SageMaker', Promise.resolve(result), true, mock)
  },
  registerDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'registerDevices', 'SageMaker', Promise.resolve(result), false, mock)
  },
  registerDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'registerDevices', 'SageMaker', Promise.reject(result), true, mock)
  },
  renderUiTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'renderUiTemplate', 'SageMaker', Promise.resolve(result), true, mock)
  },
  renderUiTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'renderUiTemplate', 'SageMaker', Promise.resolve(result), false, mock)
  },
  renderUiTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'renderUiTemplate', 'SageMaker', Promise.reject(result), true, mock)
  },
  retryPipelineExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'retryPipelineExecution', 'SageMaker', Promise.resolve(result), true, mock)
  },
  retryPipelineExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'retryPipelineExecution', 'SageMaker', Promise.resolve(result), false, mock)
  },
  retryPipelineExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'retryPipelineExecution', 'SageMaker', Promise.reject(result), true, mock)
  },
  search: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'search', 'SageMaker', Promise.resolve(result), true, mock)
  },
  searchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'search', 'SageMaker', Promise.resolve(result), false, mock)
  },
  searchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'search', 'SageMaker', Promise.reject(result), true, mock)
  },
  sendPipelineExecutionStepFailure: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'sendPipelineExecutionStepFailure', 'SageMaker', Promise.resolve(result), true, mock)
  },
  sendPipelineExecutionStepFailureAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'sendPipelineExecutionStepFailure', 'SageMaker', Promise.resolve(result), false, mock)
  },
  sendPipelineExecutionStepFailureThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'sendPipelineExecutionStepFailure', 'SageMaker', Promise.reject(result), true, mock)
  },
  sendPipelineExecutionStepSuccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'sendPipelineExecutionStepSuccess', 'SageMaker', Promise.resolve(result), true, mock)
  },
  sendPipelineExecutionStepSuccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'sendPipelineExecutionStepSuccess', 'SageMaker', Promise.resolve(result), false, mock)
  },
  sendPipelineExecutionStepSuccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'sendPipelineExecutionStepSuccess', 'SageMaker', Promise.reject(result), true, mock)
  },
  startMonitoringSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'startMonitoringSchedule', 'SageMaker', Promise.resolve(result), true, mock)
  },
  startMonitoringScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'startMonitoringSchedule', 'SageMaker', Promise.resolve(result), false, mock)
  },
  startMonitoringScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'startMonitoringSchedule', 'SageMaker', Promise.reject(result), true, mock)
  },
  startNotebookInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'startNotebookInstance', 'SageMaker', Promise.resolve(result), true, mock)
  },
  startNotebookInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'startNotebookInstance', 'SageMaker', Promise.resolve(result), false, mock)
  },
  startNotebookInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'startNotebookInstance', 'SageMaker', Promise.reject(result), true, mock)
  },
  startPipelineExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'startPipelineExecution', 'SageMaker', Promise.resolve(result), true, mock)
  },
  startPipelineExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'startPipelineExecution', 'SageMaker', Promise.resolve(result), false, mock)
  },
  startPipelineExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'startPipelineExecution', 'SageMaker', Promise.reject(result), true, mock)
  },
  stopAutoMLJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopAutoMLJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  stopAutoMLJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopAutoMLJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  stopAutoMLJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopAutoMLJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  stopCompilationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopCompilationJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  stopCompilationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopCompilationJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  stopCompilationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopCompilationJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  stopEdgePackagingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopEdgePackagingJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  stopEdgePackagingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopEdgePackagingJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  stopEdgePackagingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopEdgePackagingJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  stopHyperParameterTuningJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopHyperParameterTuningJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  stopHyperParameterTuningJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopHyperParameterTuningJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  stopHyperParameterTuningJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopHyperParameterTuningJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  stopLabelingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopLabelingJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  stopLabelingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopLabelingJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  stopLabelingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopLabelingJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  stopMonitoringSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopMonitoringSchedule', 'SageMaker', Promise.resolve(result), true, mock)
  },
  stopMonitoringScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopMonitoringSchedule', 'SageMaker', Promise.resolve(result), false, mock)
  },
  stopMonitoringScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopMonitoringSchedule', 'SageMaker', Promise.reject(result), true, mock)
  },
  stopNotebookInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopNotebookInstance', 'SageMaker', Promise.resolve(result), true, mock)
  },
  stopNotebookInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopNotebookInstance', 'SageMaker', Promise.resolve(result), false, mock)
  },
  stopNotebookInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopNotebookInstance', 'SageMaker', Promise.reject(result), true, mock)
  },
  stopPipelineExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopPipelineExecution', 'SageMaker', Promise.resolve(result), true, mock)
  },
  stopPipelineExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopPipelineExecution', 'SageMaker', Promise.resolve(result), false, mock)
  },
  stopPipelineExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopPipelineExecution', 'SageMaker', Promise.reject(result), true, mock)
  },
  stopProcessingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopProcessingJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  stopProcessingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopProcessingJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  stopProcessingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopProcessingJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  stopTrainingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopTrainingJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  stopTrainingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopTrainingJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  stopTrainingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopTrainingJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  stopTransformJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopTransformJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  stopTransformJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopTransformJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  stopTransformJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'stopTransformJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateAction', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateAction', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateAction', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateAppImageConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateAppImageConfig', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateAppImageConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateAppImageConfig', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateAppImageConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateAppImageConfig', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateArtifact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateArtifact', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateArtifactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateArtifact', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateArtifactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateArtifact', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateCodeRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateCodeRepository', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateCodeRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateCodeRepository', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateCodeRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateCodeRepository', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateContext: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateContext', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateContextAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateContext', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateContextThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateContext', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateDeviceFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateDeviceFleet', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateDeviceFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateDeviceFleet', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateDeviceFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateDeviceFleet', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateDevices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateDevices', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateDevicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateDevices', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateDevicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateDevices', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateDomain', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateDomain', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateDomain', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateEndpoint', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateEndpoint', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateEndpoint', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateEndpointWeightsAndCapacities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateEndpointWeightsAndCapacities', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateEndpointWeightsAndCapacitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateEndpointWeightsAndCapacities', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateEndpointWeightsAndCapacitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateEndpointWeightsAndCapacities', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateExperiment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateExperiment', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateExperimentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateExperiment', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateExperimentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateExperiment', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateImage', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateImage', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateImage', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateModelPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateModelPackage', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateModelPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateModelPackage', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateModelPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateModelPackage', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateMonitoringSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateMonitoringSchedule', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateMonitoringScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateMonitoringSchedule', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateMonitoringScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateMonitoringSchedule', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateNotebookInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateNotebookInstance', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateNotebookInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateNotebookInstance', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateNotebookInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateNotebookInstance', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateNotebookInstanceLifecycleConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateNotebookInstanceLifecycleConfig', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateNotebookInstanceLifecycleConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateNotebookInstanceLifecycleConfig', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateNotebookInstanceLifecycleConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateNotebookInstanceLifecycleConfig', 'SageMaker', Promise.reject(result), true, mock)
  },
  updatePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updatePipeline', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updatePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updatePipeline', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updatePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updatePipeline', 'SageMaker', Promise.reject(result), true, mock)
  },
  updatePipelineExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updatePipelineExecution', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updatePipelineExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updatePipelineExecution', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updatePipelineExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updatePipelineExecution', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateProject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateProject', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateProjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateProject', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateProjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateProject', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateTrainingJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateTrainingJob', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateTrainingJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateTrainingJob', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateTrainingJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateTrainingJob', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateTrial: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateTrial', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateTrialAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateTrial', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateTrialThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateTrial', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateTrialComponent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateTrialComponent', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateTrialComponentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateTrialComponent', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateTrialComponentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateTrialComponent', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateUserProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateUserProfile', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateUserProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateUserProfile', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateUserProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateUserProfile', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateWorkforce: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateWorkforce', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateWorkforceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateWorkforce', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateWorkforceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateWorkforce', 'SageMaker', Promise.reject(result), true, mock)
  },
  updateWorkteam: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateWorkteam', 'SageMaker', Promise.resolve(result), true, mock)
  },
  updateWorkteamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateWorkteam', 'SageMaker', Promise.resolve(result), false, mock)
  },
  updateWorkteamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'updateWorkteam', 'SageMaker', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'send', 'SageMakerClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'send', 'SageMakerClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sagemaker', 'send', 'SageMakerClient', Promise.reject(result), true, mock)
  }
}