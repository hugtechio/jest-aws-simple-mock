
/**
* @description mocks_v3:mockAmplify module is mocks for AWS-SDK V3
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
export const mockAmplify = {
  createApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'createApp', 'Amplify', Promise.resolve(result), true, mock)
  },
  createAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'createApp', 'Amplify', Promise.resolve(result), false, mock)
  },
  createAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'createApp', 'Amplify', Promise.reject(result), true, mock)
  },
  createBackendEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'createBackendEnvironment', 'Amplify', Promise.resolve(result), true, mock)
  },
  createBackendEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'createBackendEnvironment', 'Amplify', Promise.resolve(result), false, mock)
  },
  createBackendEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'createBackendEnvironment', 'Amplify', Promise.reject(result), true, mock)
  },
  createBranch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'createBranch', 'Amplify', Promise.resolve(result), true, mock)
  },
  createBranchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'createBranch', 'Amplify', Promise.resolve(result), false, mock)
  },
  createBranchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'createBranch', 'Amplify', Promise.reject(result), true, mock)
  },
  createDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'createDeployment', 'Amplify', Promise.resolve(result), true, mock)
  },
  createDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'createDeployment', 'Amplify', Promise.resolve(result), false, mock)
  },
  createDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'createDeployment', 'Amplify', Promise.reject(result), true, mock)
  },
  createDomainAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'createDomainAssociation', 'Amplify', Promise.resolve(result), true, mock)
  },
  createDomainAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'createDomainAssociation', 'Amplify', Promise.resolve(result), false, mock)
  },
  createDomainAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'createDomainAssociation', 'Amplify', Promise.reject(result), true, mock)
  },
  createWebhook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'createWebhook', 'Amplify', Promise.resolve(result), true, mock)
  },
  createWebhookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'createWebhook', 'Amplify', Promise.resolve(result), false, mock)
  },
  createWebhookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'createWebhook', 'Amplify', Promise.reject(result), true, mock)
  },
  deleteApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'deleteApp', 'Amplify', Promise.resolve(result), true, mock)
  },
  deleteAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'deleteApp', 'Amplify', Promise.resolve(result), false, mock)
  },
  deleteAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'deleteApp', 'Amplify', Promise.reject(result), true, mock)
  },
  deleteBackendEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'deleteBackendEnvironment', 'Amplify', Promise.resolve(result), true, mock)
  },
  deleteBackendEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'deleteBackendEnvironment', 'Amplify', Promise.resolve(result), false, mock)
  },
  deleteBackendEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'deleteBackendEnvironment', 'Amplify', Promise.reject(result), true, mock)
  },
  deleteBranch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'deleteBranch', 'Amplify', Promise.resolve(result), true, mock)
  },
  deleteBranchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'deleteBranch', 'Amplify', Promise.resolve(result), false, mock)
  },
  deleteBranchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'deleteBranch', 'Amplify', Promise.reject(result), true, mock)
  },
  deleteDomainAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'deleteDomainAssociation', 'Amplify', Promise.resolve(result), true, mock)
  },
  deleteDomainAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'deleteDomainAssociation', 'Amplify', Promise.resolve(result), false, mock)
  },
  deleteDomainAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'deleteDomainAssociation', 'Amplify', Promise.reject(result), true, mock)
  },
  deleteJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'deleteJob', 'Amplify', Promise.resolve(result), true, mock)
  },
  deleteJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'deleteJob', 'Amplify', Promise.resolve(result), false, mock)
  },
  deleteJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'deleteJob', 'Amplify', Promise.reject(result), true, mock)
  },
  deleteWebhook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'deleteWebhook', 'Amplify', Promise.resolve(result), true, mock)
  },
  deleteWebhookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'deleteWebhook', 'Amplify', Promise.resolve(result), false, mock)
  },
  deleteWebhookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'deleteWebhook', 'Amplify', Promise.reject(result), true, mock)
  },
  generateAccessLogs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'generateAccessLogs', 'Amplify', Promise.resolve(result), true, mock)
  },
  generateAccessLogsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'generateAccessLogs', 'Amplify', Promise.resolve(result), false, mock)
  },
  generateAccessLogsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'generateAccessLogs', 'Amplify', Promise.reject(result), true, mock)
  },
  getApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'getApp', 'Amplify', Promise.resolve(result), true, mock)
  },
  getAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'getApp', 'Amplify', Promise.resolve(result), false, mock)
  },
  getAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'getApp', 'Amplify', Promise.reject(result), true, mock)
  },
  getArtifactUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'getArtifactUrl', 'Amplify', Promise.resolve(result), true, mock)
  },
  getArtifactUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'getArtifactUrl', 'Amplify', Promise.resolve(result), false, mock)
  },
  getArtifactUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'getArtifactUrl', 'Amplify', Promise.reject(result), true, mock)
  },
  getBackendEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'getBackendEnvironment', 'Amplify', Promise.resolve(result), true, mock)
  },
  getBackendEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'getBackendEnvironment', 'Amplify', Promise.resolve(result), false, mock)
  },
  getBackendEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'getBackendEnvironment', 'Amplify', Promise.reject(result), true, mock)
  },
  getBranch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'getBranch', 'Amplify', Promise.resolve(result), true, mock)
  },
  getBranchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'getBranch', 'Amplify', Promise.resolve(result), false, mock)
  },
  getBranchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'getBranch', 'Amplify', Promise.reject(result), true, mock)
  },
  getDomainAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'getDomainAssociation', 'Amplify', Promise.resolve(result), true, mock)
  },
  getDomainAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'getDomainAssociation', 'Amplify', Promise.resolve(result), false, mock)
  },
  getDomainAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'getDomainAssociation', 'Amplify', Promise.reject(result), true, mock)
  },
  getJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'getJob', 'Amplify', Promise.resolve(result), true, mock)
  },
  getJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'getJob', 'Amplify', Promise.resolve(result), false, mock)
  },
  getJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'getJob', 'Amplify', Promise.reject(result), true, mock)
  },
  getWebhook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'getWebhook', 'Amplify', Promise.resolve(result), true, mock)
  },
  getWebhookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'getWebhook', 'Amplify', Promise.resolve(result), false, mock)
  },
  getWebhookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'getWebhook', 'Amplify', Promise.reject(result), true, mock)
  },
  listApps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listApps', 'Amplify', Promise.resolve(result), true, mock)
  },
  listAppsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listApps', 'Amplify', Promise.resolve(result), false, mock)
  },
  listAppsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listApps', 'Amplify', Promise.reject(result), true, mock)
  },
  listArtifacts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listArtifacts', 'Amplify', Promise.resolve(result), true, mock)
  },
  listArtifactsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listArtifacts', 'Amplify', Promise.resolve(result), false, mock)
  },
  listArtifactsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listArtifacts', 'Amplify', Promise.reject(result), true, mock)
  },
  listBackendEnvironments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listBackendEnvironments', 'Amplify', Promise.resolve(result), true, mock)
  },
  listBackendEnvironmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listBackendEnvironments', 'Amplify', Promise.resolve(result), false, mock)
  },
  listBackendEnvironmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listBackendEnvironments', 'Amplify', Promise.reject(result), true, mock)
  },
  listBranches: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listBranches', 'Amplify', Promise.resolve(result), true, mock)
  },
  listBranchesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listBranches', 'Amplify', Promise.resolve(result), false, mock)
  },
  listBranchesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listBranches', 'Amplify', Promise.reject(result), true, mock)
  },
  listDomainAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listDomainAssociations', 'Amplify', Promise.resolve(result), true, mock)
  },
  listDomainAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listDomainAssociations', 'Amplify', Promise.resolve(result), false, mock)
  },
  listDomainAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listDomainAssociations', 'Amplify', Promise.reject(result), true, mock)
  },
  listJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listJobs', 'Amplify', Promise.resolve(result), true, mock)
  },
  listJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listJobs', 'Amplify', Promise.resolve(result), false, mock)
  },
  listJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listJobs', 'Amplify', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listTagsForResource', 'Amplify', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listTagsForResource', 'Amplify', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listTagsForResource', 'Amplify', Promise.reject(result), true, mock)
  },
  listWebhooks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listWebhooks', 'Amplify', Promise.resolve(result), true, mock)
  },
  listWebhooksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listWebhooks', 'Amplify', Promise.resolve(result), false, mock)
  },
  listWebhooksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'listWebhooks', 'Amplify', Promise.reject(result), true, mock)
  },
  startDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'startDeployment', 'Amplify', Promise.resolve(result), true, mock)
  },
  startDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'startDeployment', 'Amplify', Promise.resolve(result), false, mock)
  },
  startDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'startDeployment', 'Amplify', Promise.reject(result), true, mock)
  },
  startJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'startJob', 'Amplify', Promise.resolve(result), true, mock)
  },
  startJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'startJob', 'Amplify', Promise.resolve(result), false, mock)
  },
  startJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'startJob', 'Amplify', Promise.reject(result), true, mock)
  },
  stopJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'stopJob', 'Amplify', Promise.resolve(result), true, mock)
  },
  stopJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'stopJob', 'Amplify', Promise.resolve(result), false, mock)
  },
  stopJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'stopJob', 'Amplify', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'tagResource', 'Amplify', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'tagResource', 'Amplify', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'tagResource', 'Amplify', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'untagResource', 'Amplify', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'untagResource', 'Amplify', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'untagResource', 'Amplify', Promise.reject(result), true, mock)
  },
  updateApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'updateApp', 'Amplify', Promise.resolve(result), true, mock)
  },
  updateAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'updateApp', 'Amplify', Promise.resolve(result), false, mock)
  },
  updateAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'updateApp', 'Amplify', Promise.reject(result), true, mock)
  },
  updateBranch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'updateBranch', 'Amplify', Promise.resolve(result), true, mock)
  },
  updateBranchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'updateBranch', 'Amplify', Promise.resolve(result), false, mock)
  },
  updateBranchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'updateBranch', 'Amplify', Promise.reject(result), true, mock)
  },
  updateDomainAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'updateDomainAssociation', 'Amplify', Promise.resolve(result), true, mock)
  },
  updateDomainAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'updateDomainAssociation', 'Amplify', Promise.resolve(result), false, mock)
  },
  updateDomainAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'updateDomainAssociation', 'Amplify', Promise.reject(result), true, mock)
  },
  updateWebhook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'updateWebhook', 'Amplify', Promise.resolve(result), true, mock)
  },
  updateWebhookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'updateWebhook', 'Amplify', Promise.resolve(result), false, mock)
  },
  updateWebhookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'updateWebhook', 'Amplify', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'send', 'AmplifyClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'send', 'AmplifyClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-amplify', 'send', 'AmplifyClient', Promise.reject(result), true, mock)
  }
}
