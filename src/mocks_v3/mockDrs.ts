
/**
* @description mocks_v3:mockDrs module is mocks for AWS-SDK V3
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
export const mockDrs = {
  associateSourceNetworkStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'associateSourceNetworkStack', 'Drs', Promise.resolve(result), true, mock)
  },
  associateSourceNetworkStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'associateSourceNetworkStack', 'Drs', Promise.resolve(result), false, mock)
  },
  associateSourceNetworkStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'associateSourceNetworkStack', 'Drs', Promise.reject(result), true, mock)
  },
  createExtendedSourceServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'createExtendedSourceServer', 'Drs', Promise.resolve(result), true, mock)
  },
  createExtendedSourceServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'createExtendedSourceServer', 'Drs', Promise.resolve(result), false, mock)
  },
  createExtendedSourceServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'createExtendedSourceServer', 'Drs', Promise.reject(result), true, mock)
  },
  createLaunchConfigurationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'createLaunchConfigurationTemplate', 'Drs', Promise.resolve(result), true, mock)
  },
  createLaunchConfigurationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'createLaunchConfigurationTemplate', 'Drs', Promise.resolve(result), false, mock)
  },
  createLaunchConfigurationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'createLaunchConfigurationTemplate', 'Drs', Promise.reject(result), true, mock)
  },
  createReplicationConfigurationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'createReplicationConfigurationTemplate', 'Drs', Promise.resolve(result), true, mock)
  },
  createReplicationConfigurationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'createReplicationConfigurationTemplate', 'Drs', Promise.resolve(result), false, mock)
  },
  createReplicationConfigurationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'createReplicationConfigurationTemplate', 'Drs', Promise.reject(result), true, mock)
  },
  createSourceNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'createSourceNetwork', 'Drs', Promise.resolve(result), true, mock)
  },
  createSourceNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'createSourceNetwork', 'Drs', Promise.resolve(result), false, mock)
  },
  createSourceNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'createSourceNetwork', 'Drs', Promise.reject(result), true, mock)
  },
  deleteJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'deleteJob', 'Drs', Promise.resolve(result), true, mock)
  },
  deleteJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'deleteJob', 'Drs', Promise.resolve(result), false, mock)
  },
  deleteJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'deleteJob', 'Drs', Promise.reject(result), true, mock)
  },
  deleteLaunchAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'deleteLaunchAction', 'Drs', Promise.resolve(result), true, mock)
  },
  deleteLaunchActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'deleteLaunchAction', 'Drs', Promise.resolve(result), false, mock)
  },
  deleteLaunchActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'deleteLaunchAction', 'Drs', Promise.reject(result), true, mock)
  },
  deleteLaunchConfigurationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'deleteLaunchConfigurationTemplate', 'Drs', Promise.resolve(result), true, mock)
  },
  deleteLaunchConfigurationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'deleteLaunchConfigurationTemplate', 'Drs', Promise.resolve(result), false, mock)
  },
  deleteLaunchConfigurationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'deleteLaunchConfigurationTemplate', 'Drs', Promise.reject(result), true, mock)
  },
  deleteRecoveryInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'deleteRecoveryInstance', 'Drs', Promise.resolve(result), true, mock)
  },
  deleteRecoveryInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'deleteRecoveryInstance', 'Drs', Promise.resolve(result), false, mock)
  },
  deleteRecoveryInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'deleteRecoveryInstance', 'Drs', Promise.reject(result), true, mock)
  },
  deleteReplicationConfigurationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'deleteReplicationConfigurationTemplate', 'Drs', Promise.resolve(result), true, mock)
  },
  deleteReplicationConfigurationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'deleteReplicationConfigurationTemplate', 'Drs', Promise.resolve(result), false, mock)
  },
  deleteReplicationConfigurationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'deleteReplicationConfigurationTemplate', 'Drs', Promise.reject(result), true, mock)
  },
  deleteSourceNetwork: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'deleteSourceNetwork', 'Drs', Promise.resolve(result), true, mock)
  },
  deleteSourceNetworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'deleteSourceNetwork', 'Drs', Promise.resolve(result), false, mock)
  },
  deleteSourceNetworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'deleteSourceNetwork', 'Drs', Promise.reject(result), true, mock)
  },
  deleteSourceServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'deleteSourceServer', 'Drs', Promise.resolve(result), true, mock)
  },
  deleteSourceServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'deleteSourceServer', 'Drs', Promise.resolve(result), false, mock)
  },
  deleteSourceServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'deleteSourceServer', 'Drs', Promise.reject(result), true, mock)
  },
  describeJobLogItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeJobLogItems', 'Drs', Promise.resolve(result), true, mock)
  },
  describeJobLogItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeJobLogItems', 'Drs', Promise.resolve(result), false, mock)
  },
  describeJobLogItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeJobLogItems', 'Drs', Promise.reject(result), true, mock)
  },
  describeJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeJobs', 'Drs', Promise.resolve(result), true, mock)
  },
  describeJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeJobs', 'Drs', Promise.resolve(result), false, mock)
  },
  describeJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeJobs', 'Drs', Promise.reject(result), true, mock)
  },
  describeLaunchConfigurationTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeLaunchConfigurationTemplates', 'Drs', Promise.resolve(result), true, mock)
  },
  describeLaunchConfigurationTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeLaunchConfigurationTemplates', 'Drs', Promise.resolve(result), false, mock)
  },
  describeLaunchConfigurationTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeLaunchConfigurationTemplates', 'Drs', Promise.reject(result), true, mock)
  },
  describeRecoveryInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeRecoveryInstances', 'Drs', Promise.resolve(result), true, mock)
  },
  describeRecoveryInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeRecoveryInstances', 'Drs', Promise.resolve(result), false, mock)
  },
  describeRecoveryInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeRecoveryInstances', 'Drs', Promise.reject(result), true, mock)
  },
  describeRecoverySnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeRecoverySnapshots', 'Drs', Promise.resolve(result), true, mock)
  },
  describeRecoverySnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeRecoverySnapshots', 'Drs', Promise.resolve(result), false, mock)
  },
  describeRecoverySnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeRecoverySnapshots', 'Drs', Promise.reject(result), true, mock)
  },
  describeReplicationConfigurationTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeReplicationConfigurationTemplates', 'Drs', Promise.resolve(result), true, mock)
  },
  describeReplicationConfigurationTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeReplicationConfigurationTemplates', 'Drs', Promise.resolve(result), false, mock)
  },
  describeReplicationConfigurationTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeReplicationConfigurationTemplates', 'Drs', Promise.reject(result), true, mock)
  },
  describeSourceNetworks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeSourceNetworks', 'Drs', Promise.resolve(result), true, mock)
  },
  describeSourceNetworksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeSourceNetworks', 'Drs', Promise.resolve(result), false, mock)
  },
  describeSourceNetworksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeSourceNetworks', 'Drs', Promise.reject(result), true, mock)
  },
  describeSourceServers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeSourceServers', 'Drs', Promise.resolve(result), true, mock)
  },
  describeSourceServersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeSourceServers', 'Drs', Promise.resolve(result), false, mock)
  },
  describeSourceServersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'describeSourceServers', 'Drs', Promise.reject(result), true, mock)
  },
  disconnectRecoveryInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'disconnectRecoveryInstance', 'Drs', Promise.resolve(result), true, mock)
  },
  disconnectRecoveryInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'disconnectRecoveryInstance', 'Drs', Promise.resolve(result), false, mock)
  },
  disconnectRecoveryInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'disconnectRecoveryInstance', 'Drs', Promise.reject(result), true, mock)
  },
  disconnectSourceServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'disconnectSourceServer', 'Drs', Promise.resolve(result), true, mock)
  },
  disconnectSourceServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'disconnectSourceServer', 'Drs', Promise.resolve(result), false, mock)
  },
  disconnectSourceServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'disconnectSourceServer', 'Drs', Promise.reject(result), true, mock)
  },
  exportSourceNetworkCfnTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'exportSourceNetworkCfnTemplate', 'Drs', Promise.resolve(result), true, mock)
  },
  exportSourceNetworkCfnTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'exportSourceNetworkCfnTemplate', 'Drs', Promise.resolve(result), false, mock)
  },
  exportSourceNetworkCfnTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'exportSourceNetworkCfnTemplate', 'Drs', Promise.reject(result), true, mock)
  },
  getFailbackReplicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'getFailbackReplicationConfiguration', 'Drs', Promise.resolve(result), true, mock)
  },
  getFailbackReplicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'getFailbackReplicationConfiguration', 'Drs', Promise.resolve(result), false, mock)
  },
  getFailbackReplicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'getFailbackReplicationConfiguration', 'Drs', Promise.reject(result), true, mock)
  },
  getLaunchConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'getLaunchConfiguration', 'Drs', Promise.resolve(result), true, mock)
  },
  getLaunchConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'getLaunchConfiguration', 'Drs', Promise.resolve(result), false, mock)
  },
  getLaunchConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'getLaunchConfiguration', 'Drs', Promise.reject(result), true, mock)
  },
  getReplicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'getReplicationConfiguration', 'Drs', Promise.resolve(result), true, mock)
  },
  getReplicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'getReplicationConfiguration', 'Drs', Promise.resolve(result), false, mock)
  },
  getReplicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'getReplicationConfiguration', 'Drs', Promise.reject(result), true, mock)
  },
  initializeService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'initializeService', 'Drs', Promise.resolve(result), true, mock)
  },
  initializeServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'initializeService', 'Drs', Promise.resolve(result), false, mock)
  },
  initializeServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'initializeService', 'Drs', Promise.reject(result), true, mock)
  },
  listExtensibleSourceServers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'listExtensibleSourceServers', 'Drs', Promise.resolve(result), true, mock)
  },
  listExtensibleSourceServersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'listExtensibleSourceServers', 'Drs', Promise.resolve(result), false, mock)
  },
  listExtensibleSourceServersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'listExtensibleSourceServers', 'Drs', Promise.reject(result), true, mock)
  },
  listLaunchActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'listLaunchActions', 'Drs', Promise.resolve(result), true, mock)
  },
  listLaunchActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'listLaunchActions', 'Drs', Promise.resolve(result), false, mock)
  },
  listLaunchActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'listLaunchActions', 'Drs', Promise.reject(result), true, mock)
  },
  listStagingAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'listStagingAccounts', 'Drs', Promise.resolve(result), true, mock)
  },
  listStagingAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'listStagingAccounts', 'Drs', Promise.resolve(result), false, mock)
  },
  listStagingAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'listStagingAccounts', 'Drs', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'listTagsForResource', 'Drs', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'listTagsForResource', 'Drs', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'listTagsForResource', 'Drs', Promise.reject(result), true, mock)
  },
  putLaunchAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'putLaunchAction', 'Drs', Promise.resolve(result), true, mock)
  },
  putLaunchActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'putLaunchAction', 'Drs', Promise.resolve(result), false, mock)
  },
  putLaunchActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'putLaunchAction', 'Drs', Promise.reject(result), true, mock)
  },
  retryDataReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'retryDataReplication', 'Drs', Promise.resolve(result), true, mock)
  },
  retryDataReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'retryDataReplication', 'Drs', Promise.resolve(result), false, mock)
  },
  retryDataReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'retryDataReplication', 'Drs', Promise.reject(result), true, mock)
  },
  reverseReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'reverseReplication', 'Drs', Promise.resolve(result), true, mock)
  },
  reverseReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'reverseReplication', 'Drs', Promise.resolve(result), false, mock)
  },
  reverseReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'reverseReplication', 'Drs', Promise.reject(result), true, mock)
  },
  startFailbackLaunch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'startFailbackLaunch', 'Drs', Promise.resolve(result), true, mock)
  },
  startFailbackLaunchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'startFailbackLaunch', 'Drs', Promise.resolve(result), false, mock)
  },
  startFailbackLaunchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'startFailbackLaunch', 'Drs', Promise.reject(result), true, mock)
  },
  startRecovery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'startRecovery', 'Drs', Promise.resolve(result), true, mock)
  },
  startRecoveryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'startRecovery', 'Drs', Promise.resolve(result), false, mock)
  },
  startRecoveryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'startRecovery', 'Drs', Promise.reject(result), true, mock)
  },
  startReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'startReplication', 'Drs', Promise.resolve(result), true, mock)
  },
  startReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'startReplication', 'Drs', Promise.resolve(result), false, mock)
  },
  startReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'startReplication', 'Drs', Promise.reject(result), true, mock)
  },
  startSourceNetworkRecovery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'startSourceNetworkRecovery', 'Drs', Promise.resolve(result), true, mock)
  },
  startSourceNetworkRecoveryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'startSourceNetworkRecovery', 'Drs', Promise.resolve(result), false, mock)
  },
  startSourceNetworkRecoveryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'startSourceNetworkRecovery', 'Drs', Promise.reject(result), true, mock)
  },
  startSourceNetworkReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'startSourceNetworkReplication', 'Drs', Promise.resolve(result), true, mock)
  },
  startSourceNetworkReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'startSourceNetworkReplication', 'Drs', Promise.resolve(result), false, mock)
  },
  startSourceNetworkReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'startSourceNetworkReplication', 'Drs', Promise.reject(result), true, mock)
  },
  stopFailback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'stopFailback', 'Drs', Promise.resolve(result), true, mock)
  },
  stopFailbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'stopFailback', 'Drs', Promise.resolve(result), false, mock)
  },
  stopFailbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'stopFailback', 'Drs', Promise.reject(result), true, mock)
  },
  stopReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'stopReplication', 'Drs', Promise.resolve(result), true, mock)
  },
  stopReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'stopReplication', 'Drs', Promise.resolve(result), false, mock)
  },
  stopReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'stopReplication', 'Drs', Promise.reject(result), true, mock)
  },
  stopSourceNetworkReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'stopSourceNetworkReplication', 'Drs', Promise.resolve(result), true, mock)
  },
  stopSourceNetworkReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'stopSourceNetworkReplication', 'Drs', Promise.resolve(result), false, mock)
  },
  stopSourceNetworkReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'stopSourceNetworkReplication', 'Drs', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'tagResource', 'Drs', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'tagResource', 'Drs', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'tagResource', 'Drs', Promise.reject(result), true, mock)
  },
  terminateRecoveryInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'terminateRecoveryInstances', 'Drs', Promise.resolve(result), true, mock)
  },
  terminateRecoveryInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'terminateRecoveryInstances', 'Drs', Promise.resolve(result), false, mock)
  },
  terminateRecoveryInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'terminateRecoveryInstances', 'Drs', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'untagResource', 'Drs', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'untagResource', 'Drs', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'untagResource', 'Drs', Promise.reject(result), true, mock)
  },
  updateFailbackReplicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'updateFailbackReplicationConfiguration', 'Drs', Promise.resolve(result), true, mock)
  },
  updateFailbackReplicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'updateFailbackReplicationConfiguration', 'Drs', Promise.resolve(result), false, mock)
  },
  updateFailbackReplicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'updateFailbackReplicationConfiguration', 'Drs', Promise.reject(result), true, mock)
  },
  updateLaunchConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'updateLaunchConfiguration', 'Drs', Promise.resolve(result), true, mock)
  },
  updateLaunchConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'updateLaunchConfiguration', 'Drs', Promise.resolve(result), false, mock)
  },
  updateLaunchConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'updateLaunchConfiguration', 'Drs', Promise.reject(result), true, mock)
  },
  updateLaunchConfigurationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'updateLaunchConfigurationTemplate', 'Drs', Promise.resolve(result), true, mock)
  },
  updateLaunchConfigurationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'updateLaunchConfigurationTemplate', 'Drs', Promise.resolve(result), false, mock)
  },
  updateLaunchConfigurationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'updateLaunchConfigurationTemplate', 'Drs', Promise.reject(result), true, mock)
  },
  updateReplicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'updateReplicationConfiguration', 'Drs', Promise.resolve(result), true, mock)
  },
  updateReplicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'updateReplicationConfiguration', 'Drs', Promise.resolve(result), false, mock)
  },
  updateReplicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'updateReplicationConfiguration', 'Drs', Promise.reject(result), true, mock)
  },
  updateReplicationConfigurationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'updateReplicationConfigurationTemplate', 'Drs', Promise.resolve(result), true, mock)
  },
  updateReplicationConfigurationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'updateReplicationConfigurationTemplate', 'Drs', Promise.resolve(result), false, mock)
  },
  updateReplicationConfigurationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'updateReplicationConfigurationTemplate', 'Drs', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'send', 'DrsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'send', 'DrsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-drs', 'send', 'DrsClient', Promise.reject(result), true, mock)
  }
}
