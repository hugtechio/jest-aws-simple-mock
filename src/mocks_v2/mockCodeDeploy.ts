
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
  export const mockCodeDeploy = {
  addTagsToOnPremisesInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToOnPremisesInstances', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  addTagsToOnPremisesInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToOnPremisesInstances', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  addTagsToOnPremisesInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToOnPremisesInstances', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  batchGetApplicationRevisions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetApplicationRevisions', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  batchGetApplicationRevisionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetApplicationRevisions', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  batchGetApplicationRevisionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetApplicationRevisions', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  batchGetApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetApplications', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  batchGetApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetApplications', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  batchGetApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetApplications', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  batchGetDeploymentGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDeploymentGroups', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  batchGetDeploymentGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDeploymentGroups', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  batchGetDeploymentGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDeploymentGroups', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  batchGetDeploymentInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDeploymentInstances', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  batchGetDeploymentInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDeploymentInstances', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  batchGetDeploymentInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDeploymentInstances', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  batchGetDeploymentTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDeploymentTargets', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  batchGetDeploymentTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDeploymentTargets', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  batchGetDeploymentTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDeploymentTargets', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  batchGetDeployments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDeployments', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  batchGetDeploymentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDeployments', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  batchGetDeploymentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetDeployments', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  batchGetOnPremisesInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetOnPremisesInstances', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  batchGetOnPremisesInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetOnPremisesInstances', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  batchGetOnPremisesInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetOnPremisesInstances', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  continueDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('continueDeployment', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  continueDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('continueDeployment', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  continueDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('continueDeployment', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  createApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplication', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  createApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplication', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  createApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplication', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  createDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeployment', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  createDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeployment', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  createDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeployment', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  createDeploymentConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeploymentConfig', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  createDeploymentConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeploymentConfig', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  createDeploymentConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeploymentConfig', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  createDeploymentGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeploymentGroup', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  createDeploymentGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeploymentGroup', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  createDeploymentGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeploymentGroup', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  deleteApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplication', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  deleteApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplication', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  deleteApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplication', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  deleteDeploymentConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeploymentConfig', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  deleteDeploymentConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeploymentConfig', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  deleteDeploymentConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeploymentConfig', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  deleteDeploymentGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeploymentGroup', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  deleteDeploymentGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeploymentGroup', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  deleteDeploymentGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDeploymentGroup', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  deleteGitHubAccountToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGitHubAccountToken', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  deleteGitHubAccountTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGitHubAccountToken', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  deleteGitHubAccountTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGitHubAccountToken', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  deleteResourcesByExternalId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcesByExternalId', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  deleteResourcesByExternalIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcesByExternalId', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  deleteResourcesByExternalIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourcesByExternalId', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  deregisterOnPremisesInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterOnPremisesInstance', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  deregisterOnPremisesInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterOnPremisesInstance', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  deregisterOnPremisesInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterOnPremisesInstance', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  getApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApplication', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  getApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApplication', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  getApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApplication', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  getApplicationRevision: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApplicationRevision', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  getApplicationRevisionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApplicationRevision', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  getApplicationRevisionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApplicationRevision', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  getDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeployment', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  getDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeployment', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  getDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeployment', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  getDeploymentConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeploymentConfig', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  getDeploymentConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeploymentConfig', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  getDeploymentConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeploymentConfig', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  getDeploymentGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeploymentGroup', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  getDeploymentGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeploymentGroup', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  getDeploymentGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeploymentGroup', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  getDeploymentInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeploymentInstance', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  getDeploymentInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeploymentInstance', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  getDeploymentInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeploymentInstance', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  getDeploymentTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeploymentTarget', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  getDeploymentTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeploymentTarget', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  getDeploymentTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeploymentTarget', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  getOnPremisesInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOnPremisesInstance', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  getOnPremisesInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOnPremisesInstance', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  getOnPremisesInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOnPremisesInstance', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  listApplicationRevisions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationRevisions', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  listApplicationRevisionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationRevisions', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  listApplicationRevisionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationRevisions', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  listApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplications', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  listApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplications', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  listApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplications', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  listDeploymentConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeploymentConfigs', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  listDeploymentConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeploymentConfigs', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  listDeploymentConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeploymentConfigs', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  listDeploymentGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeploymentGroups', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  listDeploymentGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeploymentGroups', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  listDeploymentGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeploymentGroups', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  listDeploymentInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeploymentInstances', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  listDeploymentInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeploymentInstances', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  listDeploymentInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeploymentInstances', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  listDeploymentTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeploymentTargets', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  listDeploymentTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeploymentTargets', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  listDeploymentTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeploymentTargets', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  listDeployments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeployments', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  listDeploymentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeployments', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  listDeploymentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDeployments', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  listGitHubAccountTokenNames: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGitHubAccountTokenNames', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  listGitHubAccountTokenNamesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGitHubAccountTokenNames', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  listGitHubAccountTokenNamesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGitHubAccountTokenNames', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  listOnPremisesInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOnPremisesInstances', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  listOnPremisesInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOnPremisesInstances', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  listOnPremisesInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOnPremisesInstances', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  putLifecycleEventHookExecutionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLifecycleEventHookExecutionStatus', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  putLifecycleEventHookExecutionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLifecycleEventHookExecutionStatus', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  putLifecycleEventHookExecutionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLifecycleEventHookExecutionStatus', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  registerApplicationRevision: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerApplicationRevision', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  registerApplicationRevisionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerApplicationRevision', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  registerApplicationRevisionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerApplicationRevision', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  registerOnPremisesInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerOnPremisesInstance', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  registerOnPremisesInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerOnPremisesInstance', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  registerOnPremisesInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerOnPremisesInstance', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  removeTagsFromOnPremisesInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromOnPremisesInstances', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  removeTagsFromOnPremisesInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromOnPremisesInstances', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  removeTagsFromOnPremisesInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromOnPremisesInstances', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  skipWaitTimeForInstanceTermination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('skipWaitTimeForInstanceTermination', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  skipWaitTimeForInstanceTerminationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('skipWaitTimeForInstanceTermination', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  skipWaitTimeForInstanceTerminationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('skipWaitTimeForInstanceTermination', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  stopDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDeployment', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  stopDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDeployment', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  stopDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDeployment', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  updateApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplication', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  updateApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplication', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  updateApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplication', 'CodeDeploy', Promise.reject(result), true, mock)
  },
  updateDeploymentGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDeploymentGroup', 'CodeDeploy', Promise.resolve(result), true, mock)
  },
  updateDeploymentGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDeploymentGroup', 'CodeDeploy', Promise.resolve(result), false, mock)
  },
  updateDeploymentGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDeploymentGroup', 'CodeDeploy', Promise.reject(result), true, mock)
  },
}
