
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
  export const mockEMR = {
  addInstanceFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addInstanceFleet', 'EMR', Promise.resolve(result), true, mock)
  },
  addInstanceFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addInstanceFleet', 'EMR', Promise.resolve(result), false, mock)
  },
  addInstanceFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addInstanceFleet', 'EMR', Promise.reject(result), true, mock)
  },
  addInstanceGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addInstanceGroups', 'EMR', Promise.resolve(result), true, mock)
  },
  addInstanceGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addInstanceGroups', 'EMR', Promise.resolve(result), false, mock)
  },
  addInstanceGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addInstanceGroups', 'EMR', Promise.reject(result), true, mock)
  },
  addJobFlowSteps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addJobFlowSteps', 'EMR', Promise.resolve(result), true, mock)
  },
  addJobFlowStepsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addJobFlowSteps', 'EMR', Promise.resolve(result), false, mock)
  },
  addJobFlowStepsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addJobFlowSteps', 'EMR', Promise.reject(result), true, mock)
  },
  addTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTags', 'EMR', Promise.resolve(result), true, mock)
  },
  addTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTags', 'EMR', Promise.resolve(result), false, mock)
  },
  addTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTags', 'EMR', Promise.reject(result), true, mock)
  },
  cancelSteps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelSteps', 'EMR', Promise.resolve(result), true, mock)
  },
  cancelStepsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelSteps', 'EMR', Promise.resolve(result), false, mock)
  },
  cancelStepsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelSteps', 'EMR', Promise.reject(result), true, mock)
  },
  createSecurityConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSecurityConfiguration', 'EMR', Promise.resolve(result), true, mock)
  },
  createSecurityConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSecurityConfiguration', 'EMR', Promise.resolve(result), false, mock)
  },
  createSecurityConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSecurityConfiguration', 'EMR', Promise.reject(result), true, mock)
  },
  createStudio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStudio', 'EMR', Promise.resolve(result), true, mock)
  },
  createStudioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStudio', 'EMR', Promise.resolve(result), false, mock)
  },
  createStudioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStudio', 'EMR', Promise.reject(result), true, mock)
  },
  createStudioSessionMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStudioSessionMapping', 'EMR', Promise.resolve(result), true, mock)
  },
  createStudioSessionMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStudioSessionMapping', 'EMR', Promise.resolve(result), false, mock)
  },
  createStudioSessionMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStudioSessionMapping', 'EMR', Promise.reject(result), true, mock)
  },
  deleteSecurityConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSecurityConfiguration', 'EMR', Promise.resolve(result), true, mock)
  },
  deleteSecurityConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSecurityConfiguration', 'EMR', Promise.resolve(result), false, mock)
  },
  deleteSecurityConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSecurityConfiguration', 'EMR', Promise.reject(result), true, mock)
  },
  deleteStudio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStudio', 'EMR', Promise.resolve(result), true, mock)
  },
  deleteStudioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStudio', 'EMR', Promise.resolve(result), false, mock)
  },
  deleteStudioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStudio', 'EMR', Promise.reject(result), true, mock)
  },
  deleteStudioSessionMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStudioSessionMapping', 'EMR', Promise.resolve(result), true, mock)
  },
  deleteStudioSessionMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStudioSessionMapping', 'EMR', Promise.resolve(result), false, mock)
  },
  deleteStudioSessionMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStudioSessionMapping', 'EMR', Promise.reject(result), true, mock)
  },
  describeCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCluster', 'EMR', Promise.resolve(result), true, mock)
  },
  describeClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCluster', 'EMR', Promise.resolve(result), false, mock)
  },
  describeClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCluster', 'EMR', Promise.reject(result), true, mock)
  },
  describeJobFlows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobFlows', 'EMR', Promise.resolve(result), true, mock)
  },
  describeJobFlowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobFlows', 'EMR', Promise.resolve(result), false, mock)
  },
  describeJobFlowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobFlows', 'EMR', Promise.reject(result), true, mock)
  },
  describeNotebookExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNotebookExecution', 'EMR', Promise.resolve(result), true, mock)
  },
  describeNotebookExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNotebookExecution', 'EMR', Promise.resolve(result), false, mock)
  },
  describeNotebookExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNotebookExecution', 'EMR', Promise.reject(result), true, mock)
  },
  describeReleaseLabel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReleaseLabel', 'EMR', Promise.resolve(result), true, mock)
  },
  describeReleaseLabelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReleaseLabel', 'EMR', Promise.resolve(result), false, mock)
  },
  describeReleaseLabelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReleaseLabel', 'EMR', Promise.reject(result), true, mock)
  },
  describeSecurityConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSecurityConfiguration', 'EMR', Promise.resolve(result), true, mock)
  },
  describeSecurityConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSecurityConfiguration', 'EMR', Promise.resolve(result), false, mock)
  },
  describeSecurityConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSecurityConfiguration', 'EMR', Promise.reject(result), true, mock)
  },
  describeStep: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStep', 'EMR', Promise.resolve(result), true, mock)
  },
  describeStepAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStep', 'EMR', Promise.resolve(result), false, mock)
  },
  describeStepThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStep', 'EMR', Promise.reject(result), true, mock)
  },
  describeStudio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStudio', 'EMR', Promise.resolve(result), true, mock)
  },
  describeStudioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStudio', 'EMR', Promise.resolve(result), false, mock)
  },
  describeStudioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStudio', 'EMR', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EMR', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EMR', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'EMR', Promise.reject(result), true, mock)
  },
  getAutoTerminationPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAutoTerminationPolicy', 'EMR', Promise.resolve(result), true, mock)
  },
  getAutoTerminationPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAutoTerminationPolicy', 'EMR', Promise.resolve(result), false, mock)
  },
  getAutoTerminationPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAutoTerminationPolicy', 'EMR', Promise.reject(result), true, mock)
  },
  getBlockPublicAccessConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlockPublicAccessConfiguration', 'EMR', Promise.resolve(result), true, mock)
  },
  getBlockPublicAccessConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlockPublicAccessConfiguration', 'EMR', Promise.resolve(result), false, mock)
  },
  getBlockPublicAccessConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBlockPublicAccessConfiguration', 'EMR', Promise.reject(result), true, mock)
  },
  getManagedScalingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getManagedScalingPolicy', 'EMR', Promise.resolve(result), true, mock)
  },
  getManagedScalingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getManagedScalingPolicy', 'EMR', Promise.resolve(result), false, mock)
  },
  getManagedScalingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getManagedScalingPolicy', 'EMR', Promise.reject(result), true, mock)
  },
  getStudioSessionMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStudioSessionMapping', 'EMR', Promise.resolve(result), true, mock)
  },
  getStudioSessionMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStudioSessionMapping', 'EMR', Promise.resolve(result), false, mock)
  },
  getStudioSessionMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getStudioSessionMapping', 'EMR', Promise.reject(result), true, mock)
  },
  listBootstrapActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBootstrapActions', 'EMR', Promise.resolve(result), true, mock)
  },
  listBootstrapActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBootstrapActions', 'EMR', Promise.resolve(result), false, mock)
  },
  listBootstrapActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBootstrapActions', 'EMR', Promise.reject(result), true, mock)
  },
  listClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClusters', 'EMR', Promise.resolve(result), true, mock)
  },
  listClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClusters', 'EMR', Promise.resolve(result), false, mock)
  },
  listClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClusters', 'EMR', Promise.reject(result), true, mock)
  },
  listInstanceFleets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstanceFleets', 'EMR', Promise.resolve(result), true, mock)
  },
  listInstanceFleetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstanceFleets', 'EMR', Promise.resolve(result), false, mock)
  },
  listInstanceFleetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstanceFleets', 'EMR', Promise.reject(result), true, mock)
  },
  listInstanceGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstanceGroups', 'EMR', Promise.resolve(result), true, mock)
  },
  listInstanceGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstanceGroups', 'EMR', Promise.resolve(result), false, mock)
  },
  listInstanceGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstanceGroups', 'EMR', Promise.reject(result), true, mock)
  },
  listInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstances', 'EMR', Promise.resolve(result), true, mock)
  },
  listInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstances', 'EMR', Promise.resolve(result), false, mock)
  },
  listInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInstances', 'EMR', Promise.reject(result), true, mock)
  },
  listNotebookExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNotebookExecutions', 'EMR', Promise.resolve(result), true, mock)
  },
  listNotebookExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNotebookExecutions', 'EMR', Promise.resolve(result), false, mock)
  },
  listNotebookExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listNotebookExecutions', 'EMR', Promise.reject(result), true, mock)
  },
  listReleaseLabels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReleaseLabels', 'EMR', Promise.resolve(result), true, mock)
  },
  listReleaseLabelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReleaseLabels', 'EMR', Promise.resolve(result), false, mock)
  },
  listReleaseLabelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReleaseLabels', 'EMR', Promise.reject(result), true, mock)
  },
  listSecurityConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecurityConfigurations', 'EMR', Promise.resolve(result), true, mock)
  },
  listSecurityConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecurityConfigurations', 'EMR', Promise.resolve(result), false, mock)
  },
  listSecurityConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSecurityConfigurations', 'EMR', Promise.reject(result), true, mock)
  },
  listSteps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSteps', 'EMR', Promise.resolve(result), true, mock)
  },
  listStepsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSteps', 'EMR', Promise.resolve(result), false, mock)
  },
  listStepsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSteps', 'EMR', Promise.reject(result), true, mock)
  },
  listStudioSessionMappings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStudioSessionMappings', 'EMR', Promise.resolve(result), true, mock)
  },
  listStudioSessionMappingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStudioSessionMappings', 'EMR', Promise.resolve(result), false, mock)
  },
  listStudioSessionMappingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStudioSessionMappings', 'EMR', Promise.reject(result), true, mock)
  },
  listStudios: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStudios', 'EMR', Promise.resolve(result), true, mock)
  },
  listStudiosAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStudios', 'EMR', Promise.resolve(result), false, mock)
  },
  listStudiosThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listStudios', 'EMR', Promise.reject(result), true, mock)
  },
  modifyCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyCluster', 'EMR', Promise.resolve(result), true, mock)
  },
  modifyClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyCluster', 'EMR', Promise.resolve(result), false, mock)
  },
  modifyClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyCluster', 'EMR', Promise.reject(result), true, mock)
  },
  modifyInstanceFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyInstanceFleet', 'EMR', Promise.resolve(result), true, mock)
  },
  modifyInstanceFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyInstanceFleet', 'EMR', Promise.resolve(result), false, mock)
  },
  modifyInstanceFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyInstanceFleet', 'EMR', Promise.reject(result), true, mock)
  },
  modifyInstanceGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyInstanceGroups', 'EMR', Promise.resolve(result), true, mock)
  },
  modifyInstanceGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyInstanceGroups', 'EMR', Promise.resolve(result), false, mock)
  },
  modifyInstanceGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyInstanceGroups', 'EMR', Promise.reject(result), true, mock)
  },
  putAutoScalingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAutoScalingPolicy', 'EMR', Promise.resolve(result), true, mock)
  },
  putAutoScalingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAutoScalingPolicy', 'EMR', Promise.resolve(result), false, mock)
  },
  putAutoScalingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAutoScalingPolicy', 'EMR', Promise.reject(result), true, mock)
  },
  putAutoTerminationPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAutoTerminationPolicy', 'EMR', Promise.resolve(result), true, mock)
  },
  putAutoTerminationPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAutoTerminationPolicy', 'EMR', Promise.resolve(result), false, mock)
  },
  putAutoTerminationPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAutoTerminationPolicy', 'EMR', Promise.reject(result), true, mock)
  },
  putBlockPublicAccessConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBlockPublicAccessConfiguration', 'EMR', Promise.resolve(result), true, mock)
  },
  putBlockPublicAccessConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBlockPublicAccessConfiguration', 'EMR', Promise.resolve(result), false, mock)
  },
  putBlockPublicAccessConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBlockPublicAccessConfiguration', 'EMR', Promise.reject(result), true, mock)
  },
  putManagedScalingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putManagedScalingPolicy', 'EMR', Promise.resolve(result), true, mock)
  },
  putManagedScalingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putManagedScalingPolicy', 'EMR', Promise.resolve(result), false, mock)
  },
  putManagedScalingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putManagedScalingPolicy', 'EMR', Promise.reject(result), true, mock)
  },
  removeAutoScalingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeAutoScalingPolicy', 'EMR', Promise.resolve(result), true, mock)
  },
  removeAutoScalingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeAutoScalingPolicy', 'EMR', Promise.resolve(result), false, mock)
  },
  removeAutoScalingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeAutoScalingPolicy', 'EMR', Promise.reject(result), true, mock)
  },
  removeAutoTerminationPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeAutoTerminationPolicy', 'EMR', Promise.resolve(result), true, mock)
  },
  removeAutoTerminationPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeAutoTerminationPolicy', 'EMR', Promise.resolve(result), false, mock)
  },
  removeAutoTerminationPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeAutoTerminationPolicy', 'EMR', Promise.reject(result), true, mock)
  },
  removeManagedScalingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeManagedScalingPolicy', 'EMR', Promise.resolve(result), true, mock)
  },
  removeManagedScalingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeManagedScalingPolicy', 'EMR', Promise.resolve(result), false, mock)
  },
  removeManagedScalingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeManagedScalingPolicy', 'EMR', Promise.reject(result), true, mock)
  },
  removeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTags', 'EMR', Promise.resolve(result), true, mock)
  },
  removeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTags', 'EMR', Promise.resolve(result), false, mock)
  },
  removeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTags', 'EMR', Promise.reject(result), true, mock)
  },
  runJobFlow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('runJobFlow', 'EMR', Promise.resolve(result), true, mock)
  },
  runJobFlowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('runJobFlow', 'EMR', Promise.resolve(result), false, mock)
  },
  runJobFlowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('runJobFlow', 'EMR', Promise.reject(result), true, mock)
  },
  setTerminationProtection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setTerminationProtection', 'EMR', Promise.resolve(result), true, mock)
  },
  setTerminationProtectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setTerminationProtection', 'EMR', Promise.resolve(result), false, mock)
  },
  setTerminationProtectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setTerminationProtection', 'EMR', Promise.reject(result), true, mock)
  },
  setVisibleToAllUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setVisibleToAllUsers', 'EMR', Promise.resolve(result), true, mock)
  },
  setVisibleToAllUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setVisibleToAllUsers', 'EMR', Promise.resolve(result), false, mock)
  },
  setVisibleToAllUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setVisibleToAllUsers', 'EMR', Promise.reject(result), true, mock)
  },
  startNotebookExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startNotebookExecution', 'EMR', Promise.resolve(result), true, mock)
  },
  startNotebookExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startNotebookExecution', 'EMR', Promise.resolve(result), false, mock)
  },
  startNotebookExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startNotebookExecution', 'EMR', Promise.reject(result), true, mock)
  },
  stopNotebookExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopNotebookExecution', 'EMR', Promise.resolve(result), true, mock)
  },
  stopNotebookExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopNotebookExecution', 'EMR', Promise.resolve(result), false, mock)
  },
  stopNotebookExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopNotebookExecution', 'EMR', Promise.reject(result), true, mock)
  },
  terminateJobFlows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateJobFlows', 'EMR', Promise.resolve(result), true, mock)
  },
  terminateJobFlowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateJobFlows', 'EMR', Promise.resolve(result), false, mock)
  },
  terminateJobFlowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateJobFlows', 'EMR', Promise.reject(result), true, mock)
  },
  updateStudio: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStudio', 'EMR', Promise.resolve(result), true, mock)
  },
  updateStudioAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStudio', 'EMR', Promise.resolve(result), false, mock)
  },
  updateStudioThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStudio', 'EMR', Promise.reject(result), true, mock)
  },
  updateStudioSessionMapping: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStudioSessionMapping', 'EMR', Promise.resolve(result), true, mock)
  },
  updateStudioSessionMappingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStudioSessionMapping', 'EMR', Promise.resolve(result), false, mock)
  },
  updateStudioSessionMappingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStudioSessionMapping', 'EMR', Promise.reject(result), true, mock)
  },
}
