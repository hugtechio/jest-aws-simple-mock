
/**
* @description mocks_v3:mockSMS module is mocks for AWS-SDK V3
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
export const mockSMS = {
  createApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'createApp', 'SMS', Promise.resolve(result), true, mock)
  },
  createAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'createApp', 'SMS', Promise.resolve(result), false, mock)
  },
  createAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'createApp', 'SMS', Promise.reject(result), true, mock)
  },
  createReplicationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'createReplicationJob', 'SMS', Promise.resolve(result), true, mock)
  },
  createReplicationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'createReplicationJob', 'SMS', Promise.resolve(result), false, mock)
  },
  createReplicationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'createReplicationJob', 'SMS', Promise.reject(result), true, mock)
  },
  deleteApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'deleteApp', 'SMS', Promise.resolve(result), true, mock)
  },
  deleteAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'deleteApp', 'SMS', Promise.resolve(result), false, mock)
  },
  deleteAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'deleteApp', 'SMS', Promise.reject(result), true, mock)
  },
  deleteAppLaunchConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'deleteAppLaunchConfiguration', 'SMS', Promise.resolve(result), true, mock)
  },
  deleteAppLaunchConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'deleteAppLaunchConfiguration', 'SMS', Promise.resolve(result), false, mock)
  },
  deleteAppLaunchConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'deleteAppLaunchConfiguration', 'SMS', Promise.reject(result), true, mock)
  },
  deleteAppReplicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'deleteAppReplicationConfiguration', 'SMS', Promise.resolve(result), true, mock)
  },
  deleteAppReplicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'deleteAppReplicationConfiguration', 'SMS', Promise.resolve(result), false, mock)
  },
  deleteAppReplicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'deleteAppReplicationConfiguration', 'SMS', Promise.reject(result), true, mock)
  },
  deleteAppValidationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'deleteAppValidationConfiguration', 'SMS', Promise.resolve(result), true, mock)
  },
  deleteAppValidationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'deleteAppValidationConfiguration', 'SMS', Promise.resolve(result), false, mock)
  },
  deleteAppValidationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'deleteAppValidationConfiguration', 'SMS', Promise.reject(result), true, mock)
  },
  deleteReplicationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'deleteReplicationJob', 'SMS', Promise.resolve(result), true, mock)
  },
  deleteReplicationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'deleteReplicationJob', 'SMS', Promise.resolve(result), false, mock)
  },
  deleteReplicationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'deleteReplicationJob', 'SMS', Promise.reject(result), true, mock)
  },
  deleteServerCatalog: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'deleteServerCatalog', 'SMS', Promise.resolve(result), true, mock)
  },
  deleteServerCatalogAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'deleteServerCatalog', 'SMS', Promise.resolve(result), false, mock)
  },
  deleteServerCatalogThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'deleteServerCatalog', 'SMS', Promise.reject(result), true, mock)
  },
  disassociateConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'disassociateConnector', 'SMS', Promise.resolve(result), true, mock)
  },
  disassociateConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'disassociateConnector', 'SMS', Promise.resolve(result), false, mock)
  },
  disassociateConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'disassociateConnector', 'SMS', Promise.reject(result), true, mock)
  },
  generateChangeSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'generateChangeSet', 'SMS', Promise.resolve(result), true, mock)
  },
  generateChangeSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'generateChangeSet', 'SMS', Promise.resolve(result), false, mock)
  },
  generateChangeSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'generateChangeSet', 'SMS', Promise.reject(result), true, mock)
  },
  generateTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'generateTemplate', 'SMS', Promise.resolve(result), true, mock)
  },
  generateTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'generateTemplate', 'SMS', Promise.resolve(result), false, mock)
  },
  generateTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'generateTemplate', 'SMS', Promise.reject(result), true, mock)
  },
  getApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getApp', 'SMS', Promise.resolve(result), true, mock)
  },
  getAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getApp', 'SMS', Promise.resolve(result), false, mock)
  },
  getAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getApp', 'SMS', Promise.reject(result), true, mock)
  },
  getAppLaunchConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getAppLaunchConfiguration', 'SMS', Promise.resolve(result), true, mock)
  },
  getAppLaunchConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getAppLaunchConfiguration', 'SMS', Promise.resolve(result), false, mock)
  },
  getAppLaunchConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getAppLaunchConfiguration', 'SMS', Promise.reject(result), true, mock)
  },
  getAppReplicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getAppReplicationConfiguration', 'SMS', Promise.resolve(result), true, mock)
  },
  getAppReplicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getAppReplicationConfiguration', 'SMS', Promise.resolve(result), false, mock)
  },
  getAppReplicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getAppReplicationConfiguration', 'SMS', Promise.reject(result), true, mock)
  },
  getAppValidationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getAppValidationConfiguration', 'SMS', Promise.resolve(result), true, mock)
  },
  getAppValidationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getAppValidationConfiguration', 'SMS', Promise.resolve(result), false, mock)
  },
  getAppValidationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getAppValidationConfiguration', 'SMS', Promise.reject(result), true, mock)
  },
  getAppValidationOutput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getAppValidationOutput', 'SMS', Promise.resolve(result), true, mock)
  },
  getAppValidationOutputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getAppValidationOutput', 'SMS', Promise.resolve(result), false, mock)
  },
  getAppValidationOutputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getAppValidationOutput', 'SMS', Promise.reject(result), true, mock)
  },
  getConnectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getConnectors', 'SMS', Promise.resolve(result), true, mock)
  },
  getConnectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getConnectors', 'SMS', Promise.resolve(result), false, mock)
  },
  getConnectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getConnectors', 'SMS', Promise.reject(result), true, mock)
  },
  getReplicationJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getReplicationJobs', 'SMS', Promise.resolve(result), true, mock)
  },
  getReplicationJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getReplicationJobs', 'SMS', Promise.resolve(result), false, mock)
  },
  getReplicationJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getReplicationJobs', 'SMS', Promise.reject(result), true, mock)
  },
  getReplicationRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getReplicationRuns', 'SMS', Promise.resolve(result), true, mock)
  },
  getReplicationRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getReplicationRuns', 'SMS', Promise.resolve(result), false, mock)
  },
  getReplicationRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getReplicationRuns', 'SMS', Promise.reject(result), true, mock)
  },
  getServers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getServers', 'SMS', Promise.resolve(result), true, mock)
  },
  getServersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getServers', 'SMS', Promise.resolve(result), false, mock)
  },
  getServersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'getServers', 'SMS', Promise.reject(result), true, mock)
  },
  importAppCatalog: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'importAppCatalog', 'SMS', Promise.resolve(result), true, mock)
  },
  importAppCatalogAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'importAppCatalog', 'SMS', Promise.resolve(result), false, mock)
  },
  importAppCatalogThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'importAppCatalog', 'SMS', Promise.reject(result), true, mock)
  },
  importServerCatalog: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'importServerCatalog', 'SMS', Promise.resolve(result), true, mock)
  },
  importServerCatalogAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'importServerCatalog', 'SMS', Promise.resolve(result), false, mock)
  },
  importServerCatalogThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'importServerCatalog', 'SMS', Promise.reject(result), true, mock)
  },
  launchApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'launchApp', 'SMS', Promise.resolve(result), true, mock)
  },
  launchAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'launchApp', 'SMS', Promise.resolve(result), false, mock)
  },
  launchAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'launchApp', 'SMS', Promise.reject(result), true, mock)
  },
  listApps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'listApps', 'SMS', Promise.resolve(result), true, mock)
  },
  listAppsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'listApps', 'SMS', Promise.resolve(result), false, mock)
  },
  listAppsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'listApps', 'SMS', Promise.reject(result), true, mock)
  },
  notifyAppValidationOutput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'notifyAppValidationOutput', 'SMS', Promise.resolve(result), true, mock)
  },
  notifyAppValidationOutputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'notifyAppValidationOutput', 'SMS', Promise.resolve(result), false, mock)
  },
  notifyAppValidationOutputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'notifyAppValidationOutput', 'SMS', Promise.reject(result), true, mock)
  },
  putAppLaunchConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'putAppLaunchConfiguration', 'SMS', Promise.resolve(result), true, mock)
  },
  putAppLaunchConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'putAppLaunchConfiguration', 'SMS', Promise.resolve(result), false, mock)
  },
  putAppLaunchConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'putAppLaunchConfiguration', 'SMS', Promise.reject(result), true, mock)
  },
  putAppReplicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'putAppReplicationConfiguration', 'SMS', Promise.resolve(result), true, mock)
  },
  putAppReplicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'putAppReplicationConfiguration', 'SMS', Promise.resolve(result), false, mock)
  },
  putAppReplicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'putAppReplicationConfiguration', 'SMS', Promise.reject(result), true, mock)
  },
  putAppValidationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'putAppValidationConfiguration', 'SMS', Promise.resolve(result), true, mock)
  },
  putAppValidationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'putAppValidationConfiguration', 'SMS', Promise.resolve(result), false, mock)
  },
  putAppValidationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'putAppValidationConfiguration', 'SMS', Promise.reject(result), true, mock)
  },
  startAppReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'startAppReplication', 'SMS', Promise.resolve(result), true, mock)
  },
  startAppReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'startAppReplication', 'SMS', Promise.resolve(result), false, mock)
  },
  startAppReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'startAppReplication', 'SMS', Promise.reject(result), true, mock)
  },
  startOnDemandAppReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'startOnDemandAppReplication', 'SMS', Promise.resolve(result), true, mock)
  },
  startOnDemandAppReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'startOnDemandAppReplication', 'SMS', Promise.resolve(result), false, mock)
  },
  startOnDemandAppReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'startOnDemandAppReplication', 'SMS', Promise.reject(result), true, mock)
  },
  startOnDemandReplicationRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'startOnDemandReplicationRun', 'SMS', Promise.resolve(result), true, mock)
  },
  startOnDemandReplicationRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'startOnDemandReplicationRun', 'SMS', Promise.resolve(result), false, mock)
  },
  startOnDemandReplicationRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'startOnDemandReplicationRun', 'SMS', Promise.reject(result), true, mock)
  },
  stopAppReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'stopAppReplication', 'SMS', Promise.resolve(result), true, mock)
  },
  stopAppReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'stopAppReplication', 'SMS', Promise.resolve(result), false, mock)
  },
  stopAppReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'stopAppReplication', 'SMS', Promise.reject(result), true, mock)
  },
  terminateApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'terminateApp', 'SMS', Promise.resolve(result), true, mock)
  },
  terminateAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'terminateApp', 'SMS', Promise.resolve(result), false, mock)
  },
  terminateAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'terminateApp', 'SMS', Promise.reject(result), true, mock)
  },
  updateApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'updateApp', 'SMS', Promise.resolve(result), true, mock)
  },
  updateAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'updateApp', 'SMS', Promise.resolve(result), false, mock)
  },
  updateAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'updateApp', 'SMS', Promise.reject(result), true, mock)
  },
  updateReplicationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'updateReplicationJob', 'SMS', Promise.resolve(result), true, mock)
  },
  updateReplicationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'updateReplicationJob', 'SMS', Promise.resolve(result), false, mock)
  },
  updateReplicationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'updateReplicationJob', 'SMS', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'send', 'SMSClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'send', 'SMSClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-sms', 'send', 'SMSClient', Promise.reject(result), true, mock)
  }
}
