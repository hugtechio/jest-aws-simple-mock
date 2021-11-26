
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
  export const mockAmplify = {
  createApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApp', 'Amplify', Promise.resolve(result), true, mock)
  },
  createAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApp', 'Amplify', Promise.resolve(result), false, mock)
  },
  createAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApp', 'Amplify', Promise.reject(result), true, mock)
  },
  createBackendEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBackendEnvironment', 'Amplify', Promise.resolve(result), true, mock)
  },
  createBackendEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBackendEnvironment', 'Amplify', Promise.resolve(result), false, mock)
  },
  createBackendEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBackendEnvironment', 'Amplify', Promise.reject(result), true, mock)
  },
  createBranch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBranch', 'Amplify', Promise.resolve(result), true, mock)
  },
  createBranchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBranch', 'Amplify', Promise.resolve(result), false, mock)
  },
  createBranchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBranch', 'Amplify', Promise.reject(result), true, mock)
  },
  createDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeployment', 'Amplify', Promise.resolve(result), true, mock)
  },
  createDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeployment', 'Amplify', Promise.resolve(result), false, mock)
  },
  createDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDeployment', 'Amplify', Promise.reject(result), true, mock)
  },
  createDomainAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomainAssociation', 'Amplify', Promise.resolve(result), true, mock)
  },
  createDomainAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomainAssociation', 'Amplify', Promise.resolve(result), false, mock)
  },
  createDomainAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomainAssociation', 'Amplify', Promise.reject(result), true, mock)
  },
  createWebhook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebhook', 'Amplify', Promise.resolve(result), true, mock)
  },
  createWebhookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebhook', 'Amplify', Promise.resolve(result), false, mock)
  },
  createWebhookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebhook', 'Amplify', Promise.reject(result), true, mock)
  },
  deleteApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApp', 'Amplify', Promise.resolve(result), true, mock)
  },
  deleteAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApp', 'Amplify', Promise.resolve(result), false, mock)
  },
  deleteAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApp', 'Amplify', Promise.reject(result), true, mock)
  },
  deleteBackendEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackendEnvironment', 'Amplify', Promise.resolve(result), true, mock)
  },
  deleteBackendEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackendEnvironment', 'Amplify', Promise.resolve(result), false, mock)
  },
  deleteBackendEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackendEnvironment', 'Amplify', Promise.reject(result), true, mock)
  },
  deleteBranch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBranch', 'Amplify', Promise.resolve(result), true, mock)
  },
  deleteBranchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBranch', 'Amplify', Promise.resolve(result), false, mock)
  },
  deleteBranchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBranch', 'Amplify', Promise.reject(result), true, mock)
  },
  deleteDomainAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomainAssociation', 'Amplify', Promise.resolve(result), true, mock)
  },
  deleteDomainAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomainAssociation', 'Amplify', Promise.resolve(result), false, mock)
  },
  deleteDomainAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomainAssociation', 'Amplify', Promise.reject(result), true, mock)
  },
  deleteJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJob', 'Amplify', Promise.resolve(result), true, mock)
  },
  deleteJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJob', 'Amplify', Promise.resolve(result), false, mock)
  },
  deleteJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJob', 'Amplify', Promise.reject(result), true, mock)
  },
  deleteWebhook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWebhook', 'Amplify', Promise.resolve(result), true, mock)
  },
  deleteWebhookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWebhook', 'Amplify', Promise.resolve(result), false, mock)
  },
  deleteWebhookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWebhook', 'Amplify', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Amplify', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Amplify', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Amplify', Promise.reject(result), true, mock)
  },
  generateAccessLogs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateAccessLogs', 'Amplify', Promise.resolve(result), true, mock)
  },
  generateAccessLogsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateAccessLogs', 'Amplify', Promise.resolve(result), false, mock)
  },
  generateAccessLogsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateAccessLogs', 'Amplify', Promise.reject(result), true, mock)
  },
  getApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApp', 'Amplify', Promise.resolve(result), true, mock)
  },
  getAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApp', 'Amplify', Promise.resolve(result), false, mock)
  },
  getAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApp', 'Amplify', Promise.reject(result), true, mock)
  },
  getArtifactUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getArtifactUrl', 'Amplify', Promise.resolve(result), true, mock)
  },
  getArtifactUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getArtifactUrl', 'Amplify', Promise.resolve(result), false, mock)
  },
  getArtifactUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getArtifactUrl', 'Amplify', Promise.reject(result), true, mock)
  },
  getBackendEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBackendEnvironment', 'Amplify', Promise.resolve(result), true, mock)
  },
  getBackendEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBackendEnvironment', 'Amplify', Promise.resolve(result), false, mock)
  },
  getBackendEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBackendEnvironment', 'Amplify', Promise.reject(result), true, mock)
  },
  getBranch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBranch', 'Amplify', Promise.resolve(result), true, mock)
  },
  getBranchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBranch', 'Amplify', Promise.resolve(result), false, mock)
  },
  getBranchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBranch', 'Amplify', Promise.reject(result), true, mock)
  },
  getDomainAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomainAssociation', 'Amplify', Promise.resolve(result), true, mock)
  },
  getDomainAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomainAssociation', 'Amplify', Promise.resolve(result), false, mock)
  },
  getDomainAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomainAssociation', 'Amplify', Promise.reject(result), true, mock)
  },
  getJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJob', 'Amplify', Promise.resolve(result), true, mock)
  },
  getJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJob', 'Amplify', Promise.resolve(result), false, mock)
  },
  getJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJob', 'Amplify', Promise.reject(result), true, mock)
  },
  getWebhook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWebhook', 'Amplify', Promise.resolve(result), true, mock)
  },
  getWebhookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWebhook', 'Amplify', Promise.resolve(result), false, mock)
  },
  getWebhookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWebhook', 'Amplify', Promise.reject(result), true, mock)
  },
  listApps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApps', 'Amplify', Promise.resolve(result), true, mock)
  },
  listAppsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApps', 'Amplify', Promise.resolve(result), false, mock)
  },
  listAppsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApps', 'Amplify', Promise.reject(result), true, mock)
  },
  listArtifacts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listArtifacts', 'Amplify', Promise.resolve(result), true, mock)
  },
  listArtifactsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listArtifacts', 'Amplify', Promise.resolve(result), false, mock)
  },
  listArtifactsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listArtifacts', 'Amplify', Promise.reject(result), true, mock)
  },
  listBackendEnvironments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackendEnvironments', 'Amplify', Promise.resolve(result), true, mock)
  },
  listBackendEnvironmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackendEnvironments', 'Amplify', Promise.resolve(result), false, mock)
  },
  listBackendEnvironmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackendEnvironments', 'Amplify', Promise.reject(result), true, mock)
  },
  listBranches: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBranches', 'Amplify', Promise.resolve(result), true, mock)
  },
  listBranchesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBranches', 'Amplify', Promise.resolve(result), false, mock)
  },
  listBranchesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBranches', 'Amplify', Promise.reject(result), true, mock)
  },
  listDomainAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomainAssociations', 'Amplify', Promise.resolve(result), true, mock)
  },
  listDomainAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomainAssociations', 'Amplify', Promise.resolve(result), false, mock)
  },
  listDomainAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomainAssociations', 'Amplify', Promise.reject(result), true, mock)
  },
  listJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'Amplify', Promise.resolve(result), true, mock)
  },
  listJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'Amplify', Promise.resolve(result), false, mock)
  },
  listJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listJobs', 'Amplify', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Amplify', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Amplify', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Amplify', Promise.reject(result), true, mock)
  },
  listWebhooks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWebhooks', 'Amplify', Promise.resolve(result), true, mock)
  },
  listWebhooksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWebhooks', 'Amplify', Promise.resolve(result), false, mock)
  },
  listWebhooksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWebhooks', 'Amplify', Promise.reject(result), true, mock)
  },
  startDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDeployment', 'Amplify', Promise.resolve(result), true, mock)
  },
  startDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDeployment', 'Amplify', Promise.resolve(result), false, mock)
  },
  startDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDeployment', 'Amplify', Promise.reject(result), true, mock)
  },
  startJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startJob', 'Amplify', Promise.resolve(result), true, mock)
  },
  startJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startJob', 'Amplify', Promise.resolve(result), false, mock)
  },
  startJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startJob', 'Amplify', Promise.reject(result), true, mock)
  },
  stopJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopJob', 'Amplify', Promise.resolve(result), true, mock)
  },
  stopJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopJob', 'Amplify', Promise.resolve(result), false, mock)
  },
  stopJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopJob', 'Amplify', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Amplify', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Amplify', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Amplify', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Amplify', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Amplify', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Amplify', Promise.reject(result), true, mock)
  },
  updateApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApp', 'Amplify', Promise.resolve(result), true, mock)
  },
  updateAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApp', 'Amplify', Promise.resolve(result), false, mock)
  },
  updateAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApp', 'Amplify', Promise.reject(result), true, mock)
  },
  updateBranch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBranch', 'Amplify', Promise.resolve(result), true, mock)
  },
  updateBranchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBranch', 'Amplify', Promise.resolve(result), false, mock)
  },
  updateBranchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBranch', 'Amplify', Promise.reject(result), true, mock)
  },
  updateDomainAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomainAssociation', 'Amplify', Promise.resolve(result), true, mock)
  },
  updateDomainAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomainAssociation', 'Amplify', Promise.resolve(result), false, mock)
  },
  updateDomainAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomainAssociation', 'Amplify', Promise.reject(result), true, mock)
  },
  updateWebhook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWebhook', 'Amplify', Promise.resolve(result), true, mock)
  },
  updateWebhookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWebhook', 'Amplify', Promise.resolve(result), false, mock)
  },
  updateWebhookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWebhook', 'Amplify', Promise.reject(result), true, mock)
  },
}
