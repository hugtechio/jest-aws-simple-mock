
/**
* @description mocks_v3:mockM2 module is mocks for AWS-SDK V3
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
export const mockM2 = {
  cancelBatchJobExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'cancelBatchJobExecution', 'M2', Promise.resolve(result), true, mock)
  },
  cancelBatchJobExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'cancelBatchJobExecution', 'M2', Promise.resolve(result), false, mock)
  },
  cancelBatchJobExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'cancelBatchJobExecution', 'M2', Promise.reject(result), true, mock)
  },
  createApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'createApplication', 'M2', Promise.resolve(result), true, mock)
  },
  createApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'createApplication', 'M2', Promise.resolve(result), false, mock)
  },
  createApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'createApplication', 'M2', Promise.reject(result), true, mock)
  },
  createDataSetImportTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'createDataSetImportTask', 'M2', Promise.resolve(result), true, mock)
  },
  createDataSetImportTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'createDataSetImportTask', 'M2', Promise.resolve(result), false, mock)
  },
  createDataSetImportTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'createDataSetImportTask', 'M2', Promise.reject(result), true, mock)
  },
  createDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'createDeployment', 'M2', Promise.resolve(result), true, mock)
  },
  createDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'createDeployment', 'M2', Promise.resolve(result), false, mock)
  },
  createDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'createDeployment', 'M2', Promise.reject(result), true, mock)
  },
  createEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'createEnvironment', 'M2', Promise.resolve(result), true, mock)
  },
  createEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'createEnvironment', 'M2', Promise.resolve(result), false, mock)
  },
  createEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'createEnvironment', 'M2', Promise.reject(result), true, mock)
  },
  deleteApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'deleteApplication', 'M2', Promise.resolve(result), true, mock)
  },
  deleteApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'deleteApplication', 'M2', Promise.resolve(result), false, mock)
  },
  deleteApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'deleteApplication', 'M2', Promise.reject(result), true, mock)
  },
  deleteApplicationFromEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'deleteApplicationFromEnvironment', 'M2', Promise.resolve(result), true, mock)
  },
  deleteApplicationFromEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'deleteApplicationFromEnvironment', 'M2', Promise.resolve(result), false, mock)
  },
  deleteApplicationFromEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'deleteApplicationFromEnvironment', 'M2', Promise.reject(result), true, mock)
  },
  deleteEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'deleteEnvironment', 'M2', Promise.resolve(result), true, mock)
  },
  deleteEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'deleteEnvironment', 'M2', Promise.resolve(result), false, mock)
  },
  deleteEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'deleteEnvironment', 'M2', Promise.reject(result), true, mock)
  },
  getApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getApplication', 'M2', Promise.resolve(result), true, mock)
  },
  getApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getApplication', 'M2', Promise.resolve(result), false, mock)
  },
  getApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getApplication', 'M2', Promise.reject(result), true, mock)
  },
  getApplicationVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getApplicationVersion', 'M2', Promise.resolve(result), true, mock)
  },
  getApplicationVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getApplicationVersion', 'M2', Promise.resolve(result), false, mock)
  },
  getApplicationVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getApplicationVersion', 'M2', Promise.reject(result), true, mock)
  },
  getBatchJobExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getBatchJobExecution', 'M2', Promise.resolve(result), true, mock)
  },
  getBatchJobExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getBatchJobExecution', 'M2', Promise.resolve(result), false, mock)
  },
  getBatchJobExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getBatchJobExecution', 'M2', Promise.reject(result), true, mock)
  },
  getDataSetDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getDataSetDetails', 'M2', Promise.resolve(result), true, mock)
  },
  getDataSetDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getDataSetDetails', 'M2', Promise.resolve(result), false, mock)
  },
  getDataSetDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getDataSetDetails', 'M2', Promise.reject(result), true, mock)
  },
  getDataSetImportTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getDataSetImportTask', 'M2', Promise.resolve(result), true, mock)
  },
  getDataSetImportTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getDataSetImportTask', 'M2', Promise.resolve(result), false, mock)
  },
  getDataSetImportTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getDataSetImportTask', 'M2', Promise.reject(result), true, mock)
  },
  getDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getDeployment', 'M2', Promise.resolve(result), true, mock)
  },
  getDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getDeployment', 'M2', Promise.resolve(result), false, mock)
  },
  getDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getDeployment', 'M2', Promise.reject(result), true, mock)
  },
  getEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getEnvironment', 'M2', Promise.resolve(result), true, mock)
  },
  getEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getEnvironment', 'M2', Promise.resolve(result), false, mock)
  },
  getEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getEnvironment', 'M2', Promise.reject(result), true, mock)
  },
  getSignedBluinsightsUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getSignedBluinsightsUrl', 'M2', Promise.resolve(result), true, mock)
  },
  getSignedBluinsightsUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getSignedBluinsightsUrl', 'M2', Promise.resolve(result), false, mock)
  },
  getSignedBluinsightsUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'getSignedBluinsightsUrl', 'M2', Promise.reject(result), true, mock)
  },
  listApplicationVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listApplicationVersions', 'M2', Promise.resolve(result), true, mock)
  },
  listApplicationVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listApplicationVersions', 'M2', Promise.resolve(result), false, mock)
  },
  listApplicationVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listApplicationVersions', 'M2', Promise.reject(result), true, mock)
  },
  listApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listApplications', 'M2', Promise.resolve(result), true, mock)
  },
  listApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listApplications', 'M2', Promise.resolve(result), false, mock)
  },
  listApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listApplications', 'M2', Promise.reject(result), true, mock)
  },
  listBatchJobDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listBatchJobDefinitions', 'M2', Promise.resolve(result), true, mock)
  },
  listBatchJobDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listBatchJobDefinitions', 'M2', Promise.resolve(result), false, mock)
  },
  listBatchJobDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listBatchJobDefinitions', 'M2', Promise.reject(result), true, mock)
  },
  listBatchJobExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listBatchJobExecutions', 'M2', Promise.resolve(result), true, mock)
  },
  listBatchJobExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listBatchJobExecutions', 'M2', Promise.resolve(result), false, mock)
  },
  listBatchJobExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listBatchJobExecutions', 'M2', Promise.reject(result), true, mock)
  },
  listDataSetImportHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listDataSetImportHistory', 'M2', Promise.resolve(result), true, mock)
  },
  listDataSetImportHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listDataSetImportHistory', 'M2', Promise.resolve(result), false, mock)
  },
  listDataSetImportHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listDataSetImportHistory', 'M2', Promise.reject(result), true, mock)
  },
  listDataSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listDataSets', 'M2', Promise.resolve(result), true, mock)
  },
  listDataSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listDataSets', 'M2', Promise.resolve(result), false, mock)
  },
  listDataSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listDataSets', 'M2', Promise.reject(result), true, mock)
  },
  listDeployments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listDeployments', 'M2', Promise.resolve(result), true, mock)
  },
  listDeploymentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listDeployments', 'M2', Promise.resolve(result), false, mock)
  },
  listDeploymentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listDeployments', 'M2', Promise.reject(result), true, mock)
  },
  listEngineVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listEngineVersions', 'M2', Promise.resolve(result), true, mock)
  },
  listEngineVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listEngineVersions', 'M2', Promise.resolve(result), false, mock)
  },
  listEngineVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listEngineVersions', 'M2', Promise.reject(result), true, mock)
  },
  listEnvironments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listEnvironments', 'M2', Promise.resolve(result), true, mock)
  },
  listEnvironmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listEnvironments', 'M2', Promise.resolve(result), false, mock)
  },
  listEnvironmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listEnvironments', 'M2', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listTagsForResource', 'M2', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listTagsForResource', 'M2', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'listTagsForResource', 'M2', Promise.reject(result), true, mock)
  },
  startApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'startApplication', 'M2', Promise.resolve(result), true, mock)
  },
  startApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'startApplication', 'M2', Promise.resolve(result), false, mock)
  },
  startApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'startApplication', 'M2', Promise.reject(result), true, mock)
  },
  startBatchJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'startBatchJob', 'M2', Promise.resolve(result), true, mock)
  },
  startBatchJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'startBatchJob', 'M2', Promise.resolve(result), false, mock)
  },
  startBatchJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'startBatchJob', 'M2', Promise.reject(result), true, mock)
  },
  stopApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'stopApplication', 'M2', Promise.resolve(result), true, mock)
  },
  stopApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'stopApplication', 'M2', Promise.resolve(result), false, mock)
  },
  stopApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'stopApplication', 'M2', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'tagResource', 'M2', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'tagResource', 'M2', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'tagResource', 'M2', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'untagResource', 'M2', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'untagResource', 'M2', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'untagResource', 'M2', Promise.reject(result), true, mock)
  },
  updateApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'updateApplication', 'M2', Promise.resolve(result), true, mock)
  },
  updateApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'updateApplication', 'M2', Promise.resolve(result), false, mock)
  },
  updateApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'updateApplication', 'M2', Promise.reject(result), true, mock)
  },
  updateEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'updateEnvironment', 'M2', Promise.resolve(result), true, mock)
  },
  updateEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'updateEnvironment', 'M2', Promise.resolve(result), false, mock)
  },
  updateEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'updateEnvironment', 'M2', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'send', 'M2Client', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'send', 'M2Client', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-m2', 'send', 'M2Client', Promise.reject(result), true, mock)
  }
}
