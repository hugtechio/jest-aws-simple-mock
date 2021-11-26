
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
  export const mockSMS = {
  createApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApp', 'SMS', Promise.resolve(result), true, mock)
  },
  createAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApp', 'SMS', Promise.resolve(result), false, mock)
  },
  createAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApp', 'SMS', Promise.reject(result), true, mock)
  },
  createReplicationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReplicationJob', 'SMS', Promise.resolve(result), true, mock)
  },
  createReplicationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReplicationJob', 'SMS', Promise.resolve(result), false, mock)
  },
  createReplicationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReplicationJob', 'SMS', Promise.reject(result), true, mock)
  },
  deleteApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApp', 'SMS', Promise.resolve(result), true, mock)
  },
  deleteAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApp', 'SMS', Promise.resolve(result), false, mock)
  },
  deleteAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApp', 'SMS', Promise.reject(result), true, mock)
  },
  deleteAppLaunchConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAppLaunchConfiguration', 'SMS', Promise.resolve(result), true, mock)
  },
  deleteAppLaunchConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAppLaunchConfiguration', 'SMS', Promise.resolve(result), false, mock)
  },
  deleteAppLaunchConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAppLaunchConfiguration', 'SMS', Promise.reject(result), true, mock)
  },
  deleteAppReplicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAppReplicationConfiguration', 'SMS', Promise.resolve(result), true, mock)
  },
  deleteAppReplicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAppReplicationConfiguration', 'SMS', Promise.resolve(result), false, mock)
  },
  deleteAppReplicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAppReplicationConfiguration', 'SMS', Promise.reject(result), true, mock)
  },
  deleteAppValidationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAppValidationConfiguration', 'SMS', Promise.resolve(result), true, mock)
  },
  deleteAppValidationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAppValidationConfiguration', 'SMS', Promise.resolve(result), false, mock)
  },
  deleteAppValidationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAppValidationConfiguration', 'SMS', Promise.reject(result), true, mock)
  },
  deleteReplicationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationJob', 'SMS', Promise.resolve(result), true, mock)
  },
  deleteReplicationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationJob', 'SMS', Promise.resolve(result), false, mock)
  },
  deleteReplicationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReplicationJob', 'SMS', Promise.reject(result), true, mock)
  },
  deleteServerCatalog: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteServerCatalog', 'SMS', Promise.resolve(result), true, mock)
  },
  deleteServerCatalogAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteServerCatalog', 'SMS', Promise.resolve(result), false, mock)
  },
  deleteServerCatalogThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteServerCatalog', 'SMS', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SMS', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SMS', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SMS', Promise.reject(result), true, mock)
  },
  disassociateConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateConnector', 'SMS', Promise.resolve(result), true, mock)
  },
  disassociateConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateConnector', 'SMS', Promise.resolve(result), false, mock)
  },
  disassociateConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateConnector', 'SMS', Promise.reject(result), true, mock)
  },
  generateChangeSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateChangeSet', 'SMS', Promise.resolve(result), true, mock)
  },
  generateChangeSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateChangeSet', 'SMS', Promise.resolve(result), false, mock)
  },
  generateChangeSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateChangeSet', 'SMS', Promise.reject(result), true, mock)
  },
  generateTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateTemplate', 'SMS', Promise.resolve(result), true, mock)
  },
  generateTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateTemplate', 'SMS', Promise.resolve(result), false, mock)
  },
  generateTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('generateTemplate', 'SMS', Promise.reject(result), true, mock)
  },
  getApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApp', 'SMS', Promise.resolve(result), true, mock)
  },
  getAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApp', 'SMS', Promise.resolve(result), false, mock)
  },
  getAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getApp', 'SMS', Promise.reject(result), true, mock)
  },
  getAppLaunchConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAppLaunchConfiguration', 'SMS', Promise.resolve(result), true, mock)
  },
  getAppLaunchConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAppLaunchConfiguration', 'SMS', Promise.resolve(result), false, mock)
  },
  getAppLaunchConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAppLaunchConfiguration', 'SMS', Promise.reject(result), true, mock)
  },
  getAppReplicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAppReplicationConfiguration', 'SMS', Promise.resolve(result), true, mock)
  },
  getAppReplicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAppReplicationConfiguration', 'SMS', Promise.resolve(result), false, mock)
  },
  getAppReplicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAppReplicationConfiguration', 'SMS', Promise.reject(result), true, mock)
  },
  getAppValidationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAppValidationConfiguration', 'SMS', Promise.resolve(result), true, mock)
  },
  getAppValidationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAppValidationConfiguration', 'SMS', Promise.resolve(result), false, mock)
  },
  getAppValidationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAppValidationConfiguration', 'SMS', Promise.reject(result), true, mock)
  },
  getAppValidationOutput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAppValidationOutput', 'SMS', Promise.resolve(result), true, mock)
  },
  getAppValidationOutputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAppValidationOutput', 'SMS', Promise.resolve(result), false, mock)
  },
  getAppValidationOutputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAppValidationOutput', 'SMS', Promise.reject(result), true, mock)
  },
  getConnectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnectors', 'SMS', Promise.resolve(result), true, mock)
  },
  getConnectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnectors', 'SMS', Promise.resolve(result), false, mock)
  },
  getConnectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnectors', 'SMS', Promise.reject(result), true, mock)
  },
  getReplicationJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReplicationJobs', 'SMS', Promise.resolve(result), true, mock)
  },
  getReplicationJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReplicationJobs', 'SMS', Promise.resolve(result), false, mock)
  },
  getReplicationJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReplicationJobs', 'SMS', Promise.reject(result), true, mock)
  },
  getReplicationRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReplicationRuns', 'SMS', Promise.resolve(result), true, mock)
  },
  getReplicationRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReplicationRuns', 'SMS', Promise.resolve(result), false, mock)
  },
  getReplicationRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReplicationRuns', 'SMS', Promise.reject(result), true, mock)
  },
  getServers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServers', 'SMS', Promise.resolve(result), true, mock)
  },
  getServersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServers', 'SMS', Promise.resolve(result), false, mock)
  },
  getServersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServers', 'SMS', Promise.reject(result), true, mock)
  },
  importAppCatalog: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importAppCatalog', 'SMS', Promise.resolve(result), true, mock)
  },
  importAppCatalogAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importAppCatalog', 'SMS', Promise.resolve(result), false, mock)
  },
  importAppCatalogThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importAppCatalog', 'SMS', Promise.reject(result), true, mock)
  },
  importServerCatalog: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importServerCatalog', 'SMS', Promise.resolve(result), true, mock)
  },
  importServerCatalogAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importServerCatalog', 'SMS', Promise.resolve(result), false, mock)
  },
  importServerCatalogThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('importServerCatalog', 'SMS', Promise.reject(result), true, mock)
  },
  launchApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('launchApp', 'SMS', Promise.resolve(result), true, mock)
  },
  launchAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('launchApp', 'SMS', Promise.resolve(result), false, mock)
  },
  launchAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('launchApp', 'SMS', Promise.reject(result), true, mock)
  },
  listApps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApps', 'SMS', Promise.resolve(result), true, mock)
  },
  listAppsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApps', 'SMS', Promise.resolve(result), false, mock)
  },
  listAppsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApps', 'SMS', Promise.reject(result), true, mock)
  },
  notifyAppValidationOutput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('notifyAppValidationOutput', 'SMS', Promise.resolve(result), true, mock)
  },
  notifyAppValidationOutputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('notifyAppValidationOutput', 'SMS', Promise.resolve(result), false, mock)
  },
  notifyAppValidationOutputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('notifyAppValidationOutput', 'SMS', Promise.reject(result), true, mock)
  },
  putAppLaunchConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAppLaunchConfiguration', 'SMS', Promise.resolve(result), true, mock)
  },
  putAppLaunchConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAppLaunchConfiguration', 'SMS', Promise.resolve(result), false, mock)
  },
  putAppLaunchConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAppLaunchConfiguration', 'SMS', Promise.reject(result), true, mock)
  },
  putAppReplicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAppReplicationConfiguration', 'SMS', Promise.resolve(result), true, mock)
  },
  putAppReplicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAppReplicationConfiguration', 'SMS', Promise.resolve(result), false, mock)
  },
  putAppReplicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAppReplicationConfiguration', 'SMS', Promise.reject(result), true, mock)
  },
  putAppValidationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAppValidationConfiguration', 'SMS', Promise.resolve(result), true, mock)
  },
  putAppValidationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAppValidationConfiguration', 'SMS', Promise.resolve(result), false, mock)
  },
  putAppValidationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAppValidationConfiguration', 'SMS', Promise.reject(result), true, mock)
  },
  startAppReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAppReplication', 'SMS', Promise.resolve(result), true, mock)
  },
  startAppReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAppReplication', 'SMS', Promise.resolve(result), false, mock)
  },
  startAppReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAppReplication', 'SMS', Promise.reject(result), true, mock)
  },
  startOnDemandAppReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startOnDemandAppReplication', 'SMS', Promise.resolve(result), true, mock)
  },
  startOnDemandAppReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startOnDemandAppReplication', 'SMS', Promise.resolve(result), false, mock)
  },
  startOnDemandAppReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startOnDemandAppReplication', 'SMS', Promise.reject(result), true, mock)
  },
  startOnDemandReplicationRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startOnDemandReplicationRun', 'SMS', Promise.resolve(result), true, mock)
  },
  startOnDemandReplicationRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startOnDemandReplicationRun', 'SMS', Promise.resolve(result), false, mock)
  },
  startOnDemandReplicationRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startOnDemandReplicationRun', 'SMS', Promise.reject(result), true, mock)
  },
  stopAppReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopAppReplication', 'SMS', Promise.resolve(result), true, mock)
  },
  stopAppReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopAppReplication', 'SMS', Promise.resolve(result), false, mock)
  },
  stopAppReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopAppReplication', 'SMS', Promise.reject(result), true, mock)
  },
  terminateApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateApp', 'SMS', Promise.resolve(result), true, mock)
  },
  terminateAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateApp', 'SMS', Promise.resolve(result), false, mock)
  },
  terminateAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateApp', 'SMS', Promise.reject(result), true, mock)
  },
  updateApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApp', 'SMS', Promise.resolve(result), true, mock)
  },
  updateAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApp', 'SMS', Promise.resolve(result), false, mock)
  },
  updateAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApp', 'SMS', Promise.reject(result), true, mock)
  },
  updateReplicationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReplicationJob', 'SMS', Promise.resolve(result), true, mock)
  },
  updateReplicationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReplicationJob', 'SMS', Promise.resolve(result), false, mock)
  },
  updateReplicationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReplicationJob', 'SMS', Promise.reject(result), true, mock)
  },
}
