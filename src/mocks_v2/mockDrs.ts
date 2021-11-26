
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
  export const mockDrs = {
  createReplicationConfigurationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReplicationConfigurationTemplate', 'Drs', Promise.resolve(result), true, mock)
  },
  createReplicationConfigurationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReplicationConfigurationTemplate', 'Drs', Promise.resolve(result), false, mock)
  },
  createReplicationConfigurationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReplicationConfigurationTemplate', 'Drs', Promise.reject(result), true, mock)
  },
  deleteJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJob', 'Drs', Promise.resolve(result), true, mock)
  },
  deleteJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJob', 'Drs', Promise.resolve(result), false, mock)
  },
  deleteJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteJob', 'Drs', Promise.reject(result), true, mock)
  },
  deleteRecoveryInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRecoveryInstance', 'Drs', Promise.resolve(result), true, mock)
  },
  deleteRecoveryInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRecoveryInstance', 'Drs', Promise.resolve(result), false, mock)
  },
  deleteRecoveryInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRecoveryInstance', 'Drs', Promise.reject(result), true, mock)
  },
  deleteReplicationConfigurationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationConfigurationTemplate', 'Drs', Promise.resolve(result), true, mock)
  },
  deleteReplicationConfigurationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationConfigurationTemplate', 'Drs', Promise.resolve(result), false, mock)
  },
  deleteReplicationConfigurationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationConfigurationTemplate', 'Drs', Promise.reject(result), true, mock)
  },
  deleteSourceServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSourceServer', 'Drs', Promise.resolve(result), true, mock)
  },
  deleteSourceServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSourceServer', 'Drs', Promise.resolve(result), false, mock)
  },
  deleteSourceServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSourceServer', 'Drs', Promise.reject(result), true, mock)
  },
  describeJobLogItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobLogItems', 'Drs', Promise.resolve(result), true, mock)
  },
  describeJobLogItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobLogItems', 'Drs', Promise.resolve(result), false, mock)
  },
  describeJobLogItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobLogItems', 'Drs', Promise.reject(result), true, mock)
  },
  describeJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobs', 'Drs', Promise.resolve(result), true, mock)
  },
  describeJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobs', 'Drs', Promise.resolve(result), false, mock)
  },
  describeJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobs', 'Drs', Promise.reject(result), true, mock)
  },
  describeRecoveryInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRecoveryInstances', 'Drs', Promise.resolve(result), true, mock)
  },
  describeRecoveryInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRecoveryInstances', 'Drs', Promise.resolve(result), false, mock)
  },
  describeRecoveryInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRecoveryInstances', 'Drs', Promise.reject(result), true, mock)
  },
  describeRecoverySnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRecoverySnapshots', 'Drs', Promise.resolve(result), true, mock)
  },
  describeRecoverySnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRecoverySnapshots', 'Drs', Promise.resolve(result), false, mock)
  },
  describeRecoverySnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRecoverySnapshots', 'Drs', Promise.reject(result), true, mock)
  },
  describeReplicationConfigurationTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationConfigurationTemplates', 'Drs', Promise.resolve(result), true, mock)
  },
  describeReplicationConfigurationTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationConfigurationTemplates', 'Drs', Promise.resolve(result), false, mock)
  },
  describeReplicationConfigurationTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReplicationConfigurationTemplates', 'Drs', Promise.reject(result), true, mock)
  },
  describeSourceServers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSourceServers', 'Drs', Promise.resolve(result), true, mock)
  },
  describeSourceServersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSourceServers', 'Drs', Promise.resolve(result), false, mock)
  },
  describeSourceServersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSourceServers', 'Drs', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Drs', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Drs', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Drs', Promise.reject(result), true, mock)
  },
  disconnectRecoveryInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disconnectRecoveryInstance', 'Drs', Promise.resolve(result), true, mock)
  },
  disconnectRecoveryInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disconnectRecoveryInstance', 'Drs', Promise.resolve(result), false, mock)
  },
  disconnectRecoveryInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disconnectRecoveryInstance', 'Drs', Promise.reject(result), true, mock)
  },
  disconnectSourceServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disconnectSourceServer', 'Drs', Promise.resolve(result), true, mock)
  },
  disconnectSourceServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disconnectSourceServer', 'Drs', Promise.resolve(result), false, mock)
  },
  disconnectSourceServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disconnectSourceServer', 'Drs', Promise.reject(result), true, mock)
  },
  getFailbackReplicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFailbackReplicationConfiguration', 'Drs', Promise.resolve(result), true, mock)
  },
  getFailbackReplicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFailbackReplicationConfiguration', 'Drs', Promise.resolve(result), false, mock)
  },
  getFailbackReplicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFailbackReplicationConfiguration', 'Drs', Promise.reject(result), true, mock)
  },
  getLaunchConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLaunchConfiguration', 'Drs', Promise.resolve(result), true, mock)
  },
  getLaunchConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLaunchConfiguration', 'Drs', Promise.resolve(result), false, mock)
  },
  getLaunchConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLaunchConfiguration', 'Drs', Promise.reject(result), true, mock)
  },
  getReplicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReplicationConfiguration', 'Drs', Promise.resolve(result), true, mock)
  },
  getReplicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReplicationConfiguration', 'Drs', Promise.resolve(result), false, mock)
  },
  getReplicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReplicationConfiguration', 'Drs', Promise.reject(result), true, mock)
  },
  initializeService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initializeService', 'Drs', Promise.resolve(result), true, mock)
  },
  initializeServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initializeService', 'Drs', Promise.resolve(result), false, mock)
  },
  initializeServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initializeService', 'Drs', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Drs', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Drs', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Drs', Promise.reject(result), true, mock)
  },
  retryDataReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retryDataReplication', 'Drs', Promise.resolve(result), true, mock)
  },
  retryDataReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retryDataReplication', 'Drs', Promise.resolve(result), false, mock)
  },
  retryDataReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retryDataReplication', 'Drs', Promise.reject(result), true, mock)
  },
  startFailbackLaunch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFailbackLaunch', 'Drs', Promise.resolve(result), true, mock)
  },
  startFailbackLaunchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFailbackLaunch', 'Drs', Promise.resolve(result), false, mock)
  },
  startFailbackLaunchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFailbackLaunch', 'Drs', Promise.reject(result), true, mock)
  },
  startRecovery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startRecovery', 'Drs', Promise.resolve(result), true, mock)
  },
  startRecoveryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startRecovery', 'Drs', Promise.resolve(result), false, mock)
  },
  startRecoveryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startRecovery', 'Drs', Promise.reject(result), true, mock)
  },
  stopFailback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopFailback', 'Drs', Promise.resolve(result), true, mock)
  },
  stopFailbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopFailback', 'Drs', Promise.resolve(result), false, mock)
  },
  stopFailbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopFailback', 'Drs', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Drs', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Drs', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Drs', Promise.reject(result), true, mock)
  },
  terminateRecoveryInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateRecoveryInstances', 'Drs', Promise.resolve(result), true, mock)
  },
  terminateRecoveryInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateRecoveryInstances', 'Drs', Promise.resolve(result), false, mock)
  },
  terminateRecoveryInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateRecoveryInstances', 'Drs', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Drs', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Drs', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Drs', Promise.reject(result), true, mock)
  },
  updateFailbackReplicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFailbackReplicationConfiguration', 'Drs', Promise.resolve(result), true, mock)
  },
  updateFailbackReplicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFailbackReplicationConfiguration', 'Drs', Promise.resolve(result), false, mock)
  },
  updateFailbackReplicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFailbackReplicationConfiguration', 'Drs', Promise.reject(result), true, mock)
  },
  updateLaunchConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLaunchConfiguration', 'Drs', Promise.resolve(result), true, mock)
  },
  updateLaunchConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLaunchConfiguration', 'Drs', Promise.resolve(result), false, mock)
  },
  updateLaunchConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateLaunchConfiguration', 'Drs', Promise.reject(result), true, mock)
  },
  updateReplicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReplicationConfiguration', 'Drs', Promise.resolve(result), true, mock)
  },
  updateReplicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReplicationConfiguration', 'Drs', Promise.resolve(result), false, mock)
  },
  updateReplicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReplicationConfiguration', 'Drs', Promise.reject(result), true, mock)
  },
  updateReplicationConfigurationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReplicationConfigurationTemplate', 'Drs', Promise.resolve(result), true, mock)
  },
  updateReplicationConfigurationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReplicationConfigurationTemplate', 'Drs', Promise.resolve(result), false, mock)
  },
  updateReplicationConfigurationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReplicationConfigurationTemplate', 'Drs', Promise.reject(result), true, mock)
  },
}
