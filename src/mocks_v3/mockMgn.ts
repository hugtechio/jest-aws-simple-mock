
/**
* @description mocks_v3:mockMgn module is mocks for AWS-SDK V3
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

  export const mockMgn = {
  changeServerLifeCycleState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'changeServerLifeCycleState', 'Mgn', Promise.resolve(result), true, mock)
  },
  changeServerLifeCycleStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'changeServerLifeCycleState', 'Mgn', Promise.resolve(result), false, mock)
  },
  changeServerLifeCycleStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'changeServerLifeCycleState', 'Mgn', Promise.reject(result), true, mock)
  },
  createReplicationConfigurationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'createReplicationConfigurationTemplate', 'Mgn', Promise.resolve(result), true, mock)
  },
  createReplicationConfigurationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'createReplicationConfigurationTemplate', 'Mgn', Promise.resolve(result), false, mock)
  },
  createReplicationConfigurationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'createReplicationConfigurationTemplate', 'Mgn', Promise.reject(result), true, mock)
  },
  deleteJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteJob', 'Mgn', Promise.resolve(result), true, mock)
  },
  deleteJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteJob', 'Mgn', Promise.resolve(result), false, mock)
  },
  deleteJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteJob', 'Mgn', Promise.reject(result), true, mock)
  },
  deleteReplicationConfigurationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteReplicationConfigurationTemplate', 'Mgn', Promise.resolve(result), true, mock)
  },
  deleteReplicationConfigurationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteReplicationConfigurationTemplate', 'Mgn', Promise.resolve(result), false, mock)
  },
  deleteReplicationConfigurationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteReplicationConfigurationTemplate', 'Mgn', Promise.reject(result), true, mock)
  },
  deleteSourceServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteSourceServer', 'Mgn', Promise.resolve(result), true, mock)
  },
  deleteSourceServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteSourceServer', 'Mgn', Promise.resolve(result), false, mock)
  },
  deleteSourceServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteSourceServer', 'Mgn', Promise.reject(result), true, mock)
  },
  describeJobLogItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'describeJobLogItems', 'Mgn', Promise.resolve(result), true, mock)
  },
  describeJobLogItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'describeJobLogItems', 'Mgn', Promise.resolve(result), false, mock)
  },
  describeJobLogItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'describeJobLogItems', 'Mgn', Promise.reject(result), true, mock)
  },
  describeJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'describeJobs', 'Mgn', Promise.resolve(result), true, mock)
  },
  describeJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'describeJobs', 'Mgn', Promise.resolve(result), false, mock)
  },
  describeJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'describeJobs', 'Mgn', Promise.reject(result), true, mock)
  },
  describeReplicationConfigurationTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'describeReplicationConfigurationTemplates', 'Mgn', Promise.resolve(result), true, mock)
  },
  describeReplicationConfigurationTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'describeReplicationConfigurationTemplates', 'Mgn', Promise.resolve(result), false, mock)
  },
  describeReplicationConfigurationTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'describeReplicationConfigurationTemplates', 'Mgn', Promise.reject(result), true, mock)
  },
  describeSourceServers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'describeSourceServers', 'Mgn', Promise.resolve(result), true, mock)
  },
  describeSourceServersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'describeSourceServers', 'Mgn', Promise.resolve(result), false, mock)
  },
  describeSourceServersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'describeSourceServers', 'Mgn', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'destroy', 'Mgn', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'destroy', 'Mgn', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'destroy', 'Mgn', Promise.reject(result), true, mock)
  },
  disconnectFromService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'disconnectFromService', 'Mgn', Promise.resolve(result), true, mock)
  },
  disconnectFromServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'disconnectFromService', 'Mgn', Promise.resolve(result), false, mock)
  },
  disconnectFromServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'disconnectFromService', 'Mgn', Promise.reject(result), true, mock)
  },
  finalizeCutover: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'finalizeCutover', 'Mgn', Promise.resolve(result), true, mock)
  },
  finalizeCutoverAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'finalizeCutover', 'Mgn', Promise.resolve(result), false, mock)
  },
  finalizeCutoverThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'finalizeCutover', 'Mgn', Promise.reject(result), true, mock)
  },
  getLaunchConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'getLaunchConfiguration', 'Mgn', Promise.resolve(result), true, mock)
  },
  getLaunchConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'getLaunchConfiguration', 'Mgn', Promise.resolve(result), false, mock)
  },
  getLaunchConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'getLaunchConfiguration', 'Mgn', Promise.reject(result), true, mock)
  },
  getReplicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'getReplicationConfiguration', 'Mgn', Promise.resolve(result), true, mock)
  },
  getReplicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'getReplicationConfiguration', 'Mgn', Promise.resolve(result), false, mock)
  },
  getReplicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'getReplicationConfiguration', 'Mgn', Promise.reject(result), true, mock)
  },
  initializeService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'initializeService', 'Mgn', Promise.resolve(result), true, mock)
  },
  initializeServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'initializeService', 'Mgn', Promise.resolve(result), false, mock)
  },
  initializeServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'initializeService', 'Mgn', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listTagsForResource', 'Mgn', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listTagsForResource', 'Mgn', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listTagsForResource', 'Mgn', Promise.reject(result), true, mock)
  },
  markAsArchived: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'markAsArchived', 'Mgn', Promise.resolve(result), true, mock)
  },
  markAsArchivedAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'markAsArchived', 'Mgn', Promise.resolve(result), false, mock)
  },
  markAsArchivedThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'markAsArchived', 'Mgn', Promise.reject(result), true, mock)
  },
  retryDataReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'retryDataReplication', 'Mgn', Promise.resolve(result), true, mock)
  },
  retryDataReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'retryDataReplication', 'Mgn', Promise.resolve(result), false, mock)
  },
  retryDataReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'retryDataReplication', 'Mgn', Promise.reject(result), true, mock)
  },
  startCutover: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'startCutover', 'Mgn', Promise.resolve(result), true, mock)
  },
  startCutoverAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'startCutover', 'Mgn', Promise.resolve(result), false, mock)
  },
  startCutoverThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'startCutover', 'Mgn', Promise.reject(result), true, mock)
  },
  startTest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'startTest', 'Mgn', Promise.resolve(result), true, mock)
  },
  startTestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'startTest', 'Mgn', Promise.resolve(result), false, mock)
  },
  startTestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'startTest', 'Mgn', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'tagResource', 'Mgn', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'tagResource', 'Mgn', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'tagResource', 'Mgn', Promise.reject(result), true, mock)
  },
  terminateTargetInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'terminateTargetInstances', 'Mgn', Promise.resolve(result), true, mock)
  },
  terminateTargetInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'terminateTargetInstances', 'Mgn', Promise.resolve(result), false, mock)
  },
  terminateTargetInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'terminateTargetInstances', 'Mgn', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'untagResource', 'Mgn', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'untagResource', 'Mgn', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'untagResource', 'Mgn', Promise.reject(result), true, mock)
  },
  updateLaunchConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateLaunchConfiguration', 'Mgn', Promise.resolve(result), true, mock)
  },
  updateLaunchConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateLaunchConfiguration', 'Mgn', Promise.resolve(result), false, mock)
  },
  updateLaunchConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateLaunchConfiguration', 'Mgn', Promise.reject(result), true, mock)
  },
  updateReplicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateReplicationConfiguration', 'Mgn', Promise.resolve(result), true, mock)
  },
  updateReplicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateReplicationConfiguration', 'Mgn', Promise.resolve(result), false, mock)
  },
  updateReplicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateReplicationConfiguration', 'Mgn', Promise.reject(result), true, mock)
  },
  updateReplicationConfigurationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateReplicationConfigurationTemplate', 'Mgn', Promise.resolve(result), true, mock)
  },
  updateReplicationConfigurationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateReplicationConfigurationTemplate', 'Mgn', Promise.resolve(result), false, mock)
  },
  updateReplicationConfigurationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateReplicationConfigurationTemplate', 'Mgn', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'send', 'MgnClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'send', 'MgnClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'send', 'MgnClient', Promise.reject(result), true, mock)
  }
}