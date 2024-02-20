
/**
* @description mocks_v3:mockEMR module is mocks for AWS-SDK V3
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
export const mockEMR = {
  addInstanceFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'addInstanceFleet', 'EMR', Promise.resolve(result), true, mock)
  },
  addInstanceFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'addInstanceFleet', 'EMR', Promise.resolve(result), false, mock)
  },
  addInstanceFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'addInstanceFleet', 'EMR', Promise.reject(result), true, mock)
  },
  addInstanceGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'addInstanceGroups', 'EMR', Promise.resolve(result), true, mock)
  },
  addInstanceGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'addInstanceGroups', 'EMR', Promise.resolve(result), false, mock)
  },
  addInstanceGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'addInstanceGroups', 'EMR', Promise.reject(result), true, mock)
  },
  addJobFlowSteps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'addJobFlowSteps', 'EMR', Promise.resolve(result), true, mock)
  },
  addJobFlowStepsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'addJobFlowSteps', 'EMR', Promise.resolve(result), false, mock)
  },
  addJobFlowStepsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'addJobFlowSteps', 'EMR', Promise.reject(result), true, mock)
  },
  addTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'addTags', 'EMR', Promise.resolve(result), true, mock)
  },
  addTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'addTags', 'EMR', Promise.resolve(result), false, mock)
  },
  addTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'addTags', 'EMR', Promise.reject(result), true, mock)
  },
  cancelSteps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'cancelSteps', 'EMR', Promise.resolve(result), true, mock)
  },
  cancelStepsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'cancelSteps', 'EMR', Promise.resolve(result), false, mock)
  },
  cancelStepsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'cancelSteps', 'EMR', Promise.reject(result), true, mock)
  },
  createSecurityConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'createSecurityConfiguration', 'EMR', Promise.resolve(result), true, mock)
  },
  createSecurityConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'createSecurityConfiguration', 'EMR', Promise.resolve(result), false, mock)
  },
  createSecurityConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'createSecurityConfiguration', 'EMR', Promise.reject(result), true, mock)
  },
  createStudio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'createStudio', 'EMR', Promise.resolve(result), true, mock)
  },
  createStudioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'createStudio', 'EMR', Promise.resolve(result), false, mock)
  },
  createStudioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'createStudio', 'EMR', Promise.reject(result), true, mock)
  },
  createStudioSessionMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'createStudioSessionMapping', 'EMR', Promise.resolve(result), true, mock)
  },
  createStudioSessionMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'createStudioSessionMapping', 'EMR', Promise.resolve(result), false, mock)
  },
  createStudioSessionMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'createStudioSessionMapping', 'EMR', Promise.reject(result), true, mock)
  },
  deleteSecurityConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'deleteSecurityConfiguration', 'EMR', Promise.resolve(result), true, mock)
  },
  deleteSecurityConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'deleteSecurityConfiguration', 'EMR', Promise.resolve(result), false, mock)
  },
  deleteSecurityConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'deleteSecurityConfiguration', 'EMR', Promise.reject(result), true, mock)
  },
  deleteStudio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'deleteStudio', 'EMR', Promise.resolve(result), true, mock)
  },
  deleteStudioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'deleteStudio', 'EMR', Promise.resolve(result), false, mock)
  },
  deleteStudioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'deleteStudio', 'EMR', Promise.reject(result), true, mock)
  },
  deleteStudioSessionMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'deleteStudioSessionMapping', 'EMR', Promise.resolve(result), true, mock)
  },
  deleteStudioSessionMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'deleteStudioSessionMapping', 'EMR', Promise.resolve(result), false, mock)
  },
  deleteStudioSessionMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'deleteStudioSessionMapping', 'EMR', Promise.reject(result), true, mock)
  },
  describeCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'describeCluster', 'EMR', Promise.resolve(result), true, mock)
  },
  describeClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'describeCluster', 'EMR', Promise.resolve(result), false, mock)
  },
  describeClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'describeCluster', 'EMR', Promise.reject(result), true, mock)
  },
  describeJobFlows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'describeJobFlows', 'EMR', Promise.resolve(result), true, mock)
  },
  describeJobFlowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'describeJobFlows', 'EMR', Promise.resolve(result), false, mock)
  },
  describeJobFlowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'describeJobFlows', 'EMR', Promise.reject(result), true, mock)
  },
  describeNotebookExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'describeNotebookExecution', 'EMR', Promise.resolve(result), true, mock)
  },
  describeNotebookExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'describeNotebookExecution', 'EMR', Promise.resolve(result), false, mock)
  },
  describeNotebookExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'describeNotebookExecution', 'EMR', Promise.reject(result), true, mock)
  },
  describeReleaseLabel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'describeReleaseLabel', 'EMR', Promise.resolve(result), true, mock)
  },
  describeReleaseLabelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'describeReleaseLabel', 'EMR', Promise.resolve(result), false, mock)
  },
  describeReleaseLabelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'describeReleaseLabel', 'EMR', Promise.reject(result), true, mock)
  },
  describeSecurityConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'describeSecurityConfiguration', 'EMR', Promise.resolve(result), true, mock)
  },
  describeSecurityConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'describeSecurityConfiguration', 'EMR', Promise.resolve(result), false, mock)
  },
  describeSecurityConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'describeSecurityConfiguration', 'EMR', Promise.reject(result), true, mock)
  },
  describeStep: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'describeStep', 'EMR', Promise.resolve(result), true, mock)
  },
  describeStepAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'describeStep', 'EMR', Promise.resolve(result), false, mock)
  },
  describeStepThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'describeStep', 'EMR', Promise.reject(result), true, mock)
  },
  describeStudio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'describeStudio', 'EMR', Promise.resolve(result), true, mock)
  },
  describeStudioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'describeStudio', 'EMR', Promise.resolve(result), false, mock)
  },
  describeStudioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'describeStudio', 'EMR', Promise.reject(result), true, mock)
  },
  getAutoTerminationPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'getAutoTerminationPolicy', 'EMR', Promise.resolve(result), true, mock)
  },
  getAutoTerminationPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'getAutoTerminationPolicy', 'EMR', Promise.resolve(result), false, mock)
  },
  getAutoTerminationPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'getAutoTerminationPolicy', 'EMR', Promise.reject(result), true, mock)
  },
  getBlockPublicAccessConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'getBlockPublicAccessConfiguration', 'EMR', Promise.resolve(result), true, mock)
  },
  getBlockPublicAccessConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'getBlockPublicAccessConfiguration', 'EMR', Promise.resolve(result), false, mock)
  },
  getBlockPublicAccessConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'getBlockPublicAccessConfiguration', 'EMR', Promise.reject(result), true, mock)
  },
  getClusterSessionCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'getClusterSessionCredentials', 'EMR', Promise.resolve(result), true, mock)
  },
  getClusterSessionCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'getClusterSessionCredentials', 'EMR', Promise.resolve(result), false, mock)
  },
  getClusterSessionCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'getClusterSessionCredentials', 'EMR', Promise.reject(result), true, mock)
  },
  getManagedScalingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'getManagedScalingPolicy', 'EMR', Promise.resolve(result), true, mock)
  },
  getManagedScalingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'getManagedScalingPolicy', 'EMR', Promise.resolve(result), false, mock)
  },
  getManagedScalingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'getManagedScalingPolicy', 'EMR', Promise.reject(result), true, mock)
  },
  getStudioSessionMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'getStudioSessionMapping', 'EMR', Promise.resolve(result), true, mock)
  },
  getStudioSessionMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'getStudioSessionMapping', 'EMR', Promise.resolve(result), false, mock)
  },
  getStudioSessionMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'getStudioSessionMapping', 'EMR', Promise.reject(result), true, mock)
  },
  listBootstrapActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listBootstrapActions', 'EMR', Promise.resolve(result), true, mock)
  },
  listBootstrapActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listBootstrapActions', 'EMR', Promise.resolve(result), false, mock)
  },
  listBootstrapActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listBootstrapActions', 'EMR', Promise.reject(result), true, mock)
  },
  listClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listClusters', 'EMR', Promise.resolve(result), true, mock)
  },
  listClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listClusters', 'EMR', Promise.resolve(result), false, mock)
  },
  listClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listClusters', 'EMR', Promise.reject(result), true, mock)
  },
  listInstanceFleets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listInstanceFleets', 'EMR', Promise.resolve(result), true, mock)
  },
  listInstanceFleetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listInstanceFleets', 'EMR', Promise.resolve(result), false, mock)
  },
  listInstanceFleetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listInstanceFleets', 'EMR', Promise.reject(result), true, mock)
  },
  listInstanceGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listInstanceGroups', 'EMR', Promise.resolve(result), true, mock)
  },
  listInstanceGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listInstanceGroups', 'EMR', Promise.resolve(result), false, mock)
  },
  listInstanceGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listInstanceGroups', 'EMR', Promise.reject(result), true, mock)
  },
  listInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listInstances', 'EMR', Promise.resolve(result), true, mock)
  },
  listInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listInstances', 'EMR', Promise.resolve(result), false, mock)
  },
  listInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listInstances', 'EMR', Promise.reject(result), true, mock)
  },
  listNotebookExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listNotebookExecutions', 'EMR', Promise.resolve(result), true, mock)
  },
  listNotebookExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listNotebookExecutions', 'EMR', Promise.resolve(result), false, mock)
  },
  listNotebookExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listNotebookExecutions', 'EMR', Promise.reject(result), true, mock)
  },
  listReleaseLabels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listReleaseLabels', 'EMR', Promise.resolve(result), true, mock)
  },
  listReleaseLabelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listReleaseLabels', 'EMR', Promise.resolve(result), false, mock)
  },
  listReleaseLabelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listReleaseLabels', 'EMR', Promise.reject(result), true, mock)
  },
  listSecurityConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listSecurityConfigurations', 'EMR', Promise.resolve(result), true, mock)
  },
  listSecurityConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listSecurityConfigurations', 'EMR', Promise.resolve(result), false, mock)
  },
  listSecurityConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listSecurityConfigurations', 'EMR', Promise.reject(result), true, mock)
  },
  listSteps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listSteps', 'EMR', Promise.resolve(result), true, mock)
  },
  listStepsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listSteps', 'EMR', Promise.resolve(result), false, mock)
  },
  listStepsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listSteps', 'EMR', Promise.reject(result), true, mock)
  },
  listStudioSessionMappings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listStudioSessionMappings', 'EMR', Promise.resolve(result), true, mock)
  },
  listStudioSessionMappingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listStudioSessionMappings', 'EMR', Promise.resolve(result), false, mock)
  },
  listStudioSessionMappingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listStudioSessionMappings', 'EMR', Promise.reject(result), true, mock)
  },
  listStudios: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listStudios', 'EMR', Promise.resolve(result), true, mock)
  },
  listStudiosAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listStudios', 'EMR', Promise.resolve(result), false, mock)
  },
  listStudiosThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listStudios', 'EMR', Promise.reject(result), true, mock)
  },
  listSupportedInstanceTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listSupportedInstanceTypes', 'EMR', Promise.resolve(result), true, mock)
  },
  listSupportedInstanceTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listSupportedInstanceTypes', 'EMR', Promise.resolve(result), false, mock)
  },
  listSupportedInstanceTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'listSupportedInstanceTypes', 'EMR', Promise.reject(result), true, mock)
  },
  modifyCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'modifyCluster', 'EMR', Promise.resolve(result), true, mock)
  },
  modifyClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'modifyCluster', 'EMR', Promise.resolve(result), false, mock)
  },
  modifyClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'modifyCluster', 'EMR', Promise.reject(result), true, mock)
  },
  modifyInstanceFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'modifyInstanceFleet', 'EMR', Promise.resolve(result), true, mock)
  },
  modifyInstanceFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'modifyInstanceFleet', 'EMR', Promise.resolve(result), false, mock)
  },
  modifyInstanceFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'modifyInstanceFleet', 'EMR', Promise.reject(result), true, mock)
  },
  modifyInstanceGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'modifyInstanceGroups', 'EMR', Promise.resolve(result), true, mock)
  },
  modifyInstanceGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'modifyInstanceGroups', 'EMR', Promise.resolve(result), false, mock)
  },
  modifyInstanceGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'modifyInstanceGroups', 'EMR', Promise.reject(result), true, mock)
  },
  putAutoScalingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'putAutoScalingPolicy', 'EMR', Promise.resolve(result), true, mock)
  },
  putAutoScalingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'putAutoScalingPolicy', 'EMR', Promise.resolve(result), false, mock)
  },
  putAutoScalingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'putAutoScalingPolicy', 'EMR', Promise.reject(result), true, mock)
  },
  putAutoTerminationPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'putAutoTerminationPolicy', 'EMR', Promise.resolve(result), true, mock)
  },
  putAutoTerminationPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'putAutoTerminationPolicy', 'EMR', Promise.resolve(result), false, mock)
  },
  putAutoTerminationPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'putAutoTerminationPolicy', 'EMR', Promise.reject(result), true, mock)
  },
  putBlockPublicAccessConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'putBlockPublicAccessConfiguration', 'EMR', Promise.resolve(result), true, mock)
  },
  putBlockPublicAccessConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'putBlockPublicAccessConfiguration', 'EMR', Promise.resolve(result), false, mock)
  },
  putBlockPublicAccessConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'putBlockPublicAccessConfiguration', 'EMR', Promise.reject(result), true, mock)
  },
  putManagedScalingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'putManagedScalingPolicy', 'EMR', Promise.resolve(result), true, mock)
  },
  putManagedScalingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'putManagedScalingPolicy', 'EMR', Promise.resolve(result), false, mock)
  },
  putManagedScalingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'putManagedScalingPolicy', 'EMR', Promise.reject(result), true, mock)
  },
  removeAutoScalingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'removeAutoScalingPolicy', 'EMR', Promise.resolve(result), true, mock)
  },
  removeAutoScalingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'removeAutoScalingPolicy', 'EMR', Promise.resolve(result), false, mock)
  },
  removeAutoScalingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'removeAutoScalingPolicy', 'EMR', Promise.reject(result), true, mock)
  },
  removeAutoTerminationPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'removeAutoTerminationPolicy', 'EMR', Promise.resolve(result), true, mock)
  },
  removeAutoTerminationPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'removeAutoTerminationPolicy', 'EMR', Promise.resolve(result), false, mock)
  },
  removeAutoTerminationPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'removeAutoTerminationPolicy', 'EMR', Promise.reject(result), true, mock)
  },
  removeManagedScalingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'removeManagedScalingPolicy', 'EMR', Promise.resolve(result), true, mock)
  },
  removeManagedScalingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'removeManagedScalingPolicy', 'EMR', Promise.resolve(result), false, mock)
  },
  removeManagedScalingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'removeManagedScalingPolicy', 'EMR', Promise.reject(result), true, mock)
  },
  removeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'removeTags', 'EMR', Promise.resolve(result), true, mock)
  },
  removeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'removeTags', 'EMR', Promise.resolve(result), false, mock)
  },
  removeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'removeTags', 'EMR', Promise.reject(result), true, mock)
  },
  runJobFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'runJobFlow', 'EMR', Promise.resolve(result), true, mock)
  },
  runJobFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'runJobFlow', 'EMR', Promise.resolve(result), false, mock)
  },
  runJobFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'runJobFlow', 'EMR', Promise.reject(result), true, mock)
  },
  setKeepJobFlowAliveWhenNoSteps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'setKeepJobFlowAliveWhenNoSteps', 'EMR', Promise.resolve(result), true, mock)
  },
  setKeepJobFlowAliveWhenNoStepsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'setKeepJobFlowAliveWhenNoSteps', 'EMR', Promise.resolve(result), false, mock)
  },
  setKeepJobFlowAliveWhenNoStepsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'setKeepJobFlowAliveWhenNoSteps', 'EMR', Promise.reject(result), true, mock)
  },
  setTerminationProtection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'setTerminationProtection', 'EMR', Promise.resolve(result), true, mock)
  },
  setTerminationProtectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'setTerminationProtection', 'EMR', Promise.resolve(result), false, mock)
  },
  setTerminationProtectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'setTerminationProtection', 'EMR', Promise.reject(result), true, mock)
  },
  setUnhealthyNodeReplacement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'setUnhealthyNodeReplacement', 'EMR', Promise.resolve(result), true, mock)
  },
  setUnhealthyNodeReplacementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'setUnhealthyNodeReplacement', 'EMR', Promise.resolve(result), false, mock)
  },
  setUnhealthyNodeReplacementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'setUnhealthyNodeReplacement', 'EMR', Promise.reject(result), true, mock)
  },
  setVisibleToAllUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'setVisibleToAllUsers', 'EMR', Promise.resolve(result), true, mock)
  },
  setVisibleToAllUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'setVisibleToAllUsers', 'EMR', Promise.resolve(result), false, mock)
  },
  setVisibleToAllUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'setVisibleToAllUsers', 'EMR', Promise.reject(result), true, mock)
  },
  startNotebookExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'startNotebookExecution', 'EMR', Promise.resolve(result), true, mock)
  },
  startNotebookExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'startNotebookExecution', 'EMR', Promise.resolve(result), false, mock)
  },
  startNotebookExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'startNotebookExecution', 'EMR', Promise.reject(result), true, mock)
  },
  stopNotebookExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'stopNotebookExecution', 'EMR', Promise.resolve(result), true, mock)
  },
  stopNotebookExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'stopNotebookExecution', 'EMR', Promise.resolve(result), false, mock)
  },
  stopNotebookExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'stopNotebookExecution', 'EMR', Promise.reject(result), true, mock)
  },
  terminateJobFlows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'terminateJobFlows', 'EMR', Promise.resolve(result), true, mock)
  },
  terminateJobFlowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'terminateJobFlows', 'EMR', Promise.resolve(result), false, mock)
  },
  terminateJobFlowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'terminateJobFlows', 'EMR', Promise.reject(result), true, mock)
  },
  updateStudio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'updateStudio', 'EMR', Promise.resolve(result), true, mock)
  },
  updateStudioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'updateStudio', 'EMR', Promise.resolve(result), false, mock)
  },
  updateStudioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'updateStudio', 'EMR', Promise.reject(result), true, mock)
  },
  updateStudioSessionMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'updateStudioSessionMapping', 'EMR', Promise.resolve(result), true, mock)
  },
  updateStudioSessionMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'updateStudioSessionMapping', 'EMR', Promise.resolve(result), false, mock)
  },
  updateStudioSessionMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'updateStudioSessionMapping', 'EMR', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'send', 'EMRClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'send', 'EMRClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-emr', 'send', 'EMRClient', Promise.reject(result), true, mock)
  }
}
