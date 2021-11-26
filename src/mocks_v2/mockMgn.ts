
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
  export const mockMgn = {
  changeServerLifeCycleState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('changeServerLifeCycleState', 'Mgn', Promise.resolve(result), true, mock)
  },
  changeServerLifeCycleStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('changeServerLifeCycleState', 'Mgn', Promise.resolve(result), false, mock)
  },
  changeServerLifeCycleStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('changeServerLifeCycleState', 'Mgn', Promise.reject(result), true, mock)
  },
  createReplicationConfigurationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReplicationConfigurationTemplate', 'Mgn', Promise.resolve(result), true, mock)
  },
  createReplicationConfigurationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReplicationConfigurationTemplate', 'Mgn', Promise.resolve(result), false, mock)
  },
  createReplicationConfigurationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReplicationConfigurationTemplate', 'Mgn', Promise.reject(result), true, mock)
  },
  deleteJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJob', 'Mgn', Promise.resolve(result), true, mock)
  },
  deleteJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJob', 'Mgn', Promise.resolve(result), false, mock)
  },
  deleteJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJob', 'Mgn', Promise.reject(result), true, mock)
  },
  deleteReplicationConfigurationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationConfigurationTemplate', 'Mgn', Promise.resolve(result), true, mock)
  },
  deleteReplicationConfigurationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationConfigurationTemplate', 'Mgn', Promise.resolve(result), false, mock)
  },
  deleteReplicationConfigurationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationConfigurationTemplate', 'Mgn', Promise.reject(result), true, mock)
  },
  deleteSourceServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSourceServer', 'Mgn', Promise.resolve(result), true, mock)
  },
  deleteSourceServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSourceServer', 'Mgn', Promise.resolve(result), false, mock)
  },
  deleteSourceServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSourceServer', 'Mgn', Promise.reject(result), true, mock)
  },
  describeJobLogItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobLogItems', 'Mgn', Promise.resolve(result), true, mock)
  },
  describeJobLogItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobLogItems', 'Mgn', Promise.resolve(result), false, mock)
  },
  describeJobLogItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobLogItems', 'Mgn', Promise.reject(result), true, mock)
  },
  describeJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobs', 'Mgn', Promise.resolve(result), true, mock)
  },
  describeJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobs', 'Mgn', Promise.resolve(result), false, mock)
  },
  describeJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobs', 'Mgn', Promise.reject(result), true, mock)
  },
  describeReplicationConfigurationTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationConfigurationTemplates', 'Mgn', Promise.resolve(result), true, mock)
  },
  describeReplicationConfigurationTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationConfigurationTemplates', 'Mgn', Promise.resolve(result), false, mock)
  },
  describeReplicationConfigurationTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationConfigurationTemplates', 'Mgn', Promise.reject(result), true, mock)
  },
  describeSourceServers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSourceServers', 'Mgn', Promise.resolve(result), true, mock)
  },
  describeSourceServersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSourceServers', 'Mgn', Promise.resolve(result), false, mock)
  },
  describeSourceServersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSourceServers', 'Mgn', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Mgn', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Mgn', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Mgn', Promise.reject(result), true, mock)
  },
  disconnectFromService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disconnectFromService', 'Mgn', Promise.resolve(result), true, mock)
  },
  disconnectFromServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disconnectFromService', 'Mgn', Promise.resolve(result), false, mock)
  },
  disconnectFromServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disconnectFromService', 'Mgn', Promise.reject(result), true, mock)
  },
  finalizeCutover: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('finalizeCutover', 'Mgn', Promise.resolve(result), true, mock)
  },
  finalizeCutoverAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('finalizeCutover', 'Mgn', Promise.resolve(result), false, mock)
  },
  finalizeCutoverThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('finalizeCutover', 'Mgn', Promise.reject(result), true, mock)
  },
  getLaunchConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLaunchConfiguration', 'Mgn', Promise.resolve(result), true, mock)
  },
  getLaunchConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLaunchConfiguration', 'Mgn', Promise.resolve(result), false, mock)
  },
  getLaunchConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLaunchConfiguration', 'Mgn', Promise.reject(result), true, mock)
  },
  getReplicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReplicationConfiguration', 'Mgn', Promise.resolve(result), true, mock)
  },
  getReplicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReplicationConfiguration', 'Mgn', Promise.resolve(result), false, mock)
  },
  getReplicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReplicationConfiguration', 'Mgn', Promise.reject(result), true, mock)
  },
  initializeService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initializeService', 'Mgn', Promise.resolve(result), true, mock)
  },
  initializeServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initializeService', 'Mgn', Promise.resolve(result), false, mock)
  },
  initializeServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initializeService', 'Mgn', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Mgn', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Mgn', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Mgn', Promise.reject(result), true, mock)
  },
  markAsArchived: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('markAsArchived', 'Mgn', Promise.resolve(result), true, mock)
  },
  markAsArchivedAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('markAsArchived', 'Mgn', Promise.resolve(result), false, mock)
  },
  markAsArchivedThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('markAsArchived', 'Mgn', Promise.reject(result), true, mock)
  },
  retryDataReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retryDataReplication', 'Mgn', Promise.resolve(result), true, mock)
  },
  retryDataReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retryDataReplication', 'Mgn', Promise.resolve(result), false, mock)
  },
  retryDataReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retryDataReplication', 'Mgn', Promise.reject(result), true, mock)
  },
  startCutover: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCutover', 'Mgn', Promise.resolve(result), true, mock)
  },
  startCutoverAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCutover', 'Mgn', Promise.resolve(result), false, mock)
  },
  startCutoverThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCutover', 'Mgn', Promise.reject(result), true, mock)
  },
  startTest: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTest', 'Mgn', Promise.resolve(result), true, mock)
  },
  startTestAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTest', 'Mgn', Promise.resolve(result), false, mock)
  },
  startTestThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startTest', 'Mgn', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Mgn', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Mgn', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Mgn', Promise.reject(result), true, mock)
  },
  terminateTargetInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateTargetInstances', 'Mgn', Promise.resolve(result), true, mock)
  },
  terminateTargetInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateTargetInstances', 'Mgn', Promise.resolve(result), false, mock)
  },
  terminateTargetInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateTargetInstances', 'Mgn', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Mgn', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Mgn', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Mgn', Promise.reject(result), true, mock)
  },
  updateLaunchConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLaunchConfiguration', 'Mgn', Promise.resolve(result), true, mock)
  },
  updateLaunchConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLaunchConfiguration', 'Mgn', Promise.resolve(result), false, mock)
  },
  updateLaunchConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLaunchConfiguration', 'Mgn', Promise.reject(result), true, mock)
  },
  updateReplicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReplicationConfiguration', 'Mgn', Promise.resolve(result), true, mock)
  },
  updateReplicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReplicationConfiguration', 'Mgn', Promise.resolve(result), false, mock)
  },
  updateReplicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReplicationConfiguration', 'Mgn', Promise.reject(result), true, mock)
  },
  updateReplicationConfigurationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReplicationConfigurationTemplate', 'Mgn', Promise.resolve(result), true, mock)
  },
  updateReplicationConfigurationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReplicationConfigurationTemplate', 'Mgn', Promise.resolve(result), false, mock)
  },
  updateReplicationConfigurationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReplicationConfigurationTemplate', 'Mgn', Promise.reject(result), true, mock)
  },
}
