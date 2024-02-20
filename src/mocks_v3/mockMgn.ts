
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
  archiveApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'archiveApplication', 'Mgn', Promise.resolve(result), true, mock)
  },
  archiveApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'archiveApplication', 'Mgn', Promise.resolve(result), false, mock)
  },
  archiveApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'archiveApplication', 'Mgn', Promise.reject(result), true, mock)
  },
  archiveWave: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'archiveWave', 'Mgn', Promise.resolve(result), true, mock)
  },
  archiveWaveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'archiveWave', 'Mgn', Promise.resolve(result), false, mock)
  },
  archiveWaveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'archiveWave', 'Mgn', Promise.reject(result), true, mock)
  },
  associateApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'associateApplications', 'Mgn', Promise.resolve(result), true, mock)
  },
  associateApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'associateApplications', 'Mgn', Promise.resolve(result), false, mock)
  },
  associateApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'associateApplications', 'Mgn', Promise.reject(result), true, mock)
  },
  associateSourceServers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'associateSourceServers', 'Mgn', Promise.resolve(result), true, mock)
  },
  associateSourceServersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'associateSourceServers', 'Mgn', Promise.resolve(result), false, mock)
  },
  associateSourceServersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'associateSourceServers', 'Mgn', Promise.reject(result), true, mock)
  },
  changeServerLifeCycleState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'changeServerLifeCycleState', 'Mgn', Promise.resolve(result), true, mock)
  },
  changeServerLifeCycleStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'changeServerLifeCycleState', 'Mgn', Promise.resolve(result), false, mock)
  },
  changeServerLifeCycleStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'changeServerLifeCycleState', 'Mgn', Promise.reject(result), true, mock)
  },
  createApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'createApplication', 'Mgn', Promise.resolve(result), true, mock)
  },
  createApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'createApplication', 'Mgn', Promise.resolve(result), false, mock)
  },
  createApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'createApplication', 'Mgn', Promise.reject(result), true, mock)
  },
  createConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'createConnector', 'Mgn', Promise.resolve(result), true, mock)
  },
  createConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'createConnector', 'Mgn', Promise.resolve(result), false, mock)
  },
  createConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'createConnector', 'Mgn', Promise.reject(result), true, mock)
  },
  createLaunchConfigurationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'createLaunchConfigurationTemplate', 'Mgn', Promise.resolve(result), true, mock)
  },
  createLaunchConfigurationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'createLaunchConfigurationTemplate', 'Mgn', Promise.resolve(result), false, mock)
  },
  createLaunchConfigurationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'createLaunchConfigurationTemplate', 'Mgn', Promise.reject(result), true, mock)
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
  createWave: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'createWave', 'Mgn', Promise.resolve(result), true, mock)
  },
  createWaveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'createWave', 'Mgn', Promise.resolve(result), false, mock)
  },
  createWaveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'createWave', 'Mgn', Promise.reject(result), true, mock)
  },
  deleteApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteApplication', 'Mgn', Promise.resolve(result), true, mock)
  },
  deleteApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteApplication', 'Mgn', Promise.resolve(result), false, mock)
  },
  deleteApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteApplication', 'Mgn', Promise.reject(result), true, mock)
  },
  deleteConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteConnector', 'Mgn', Promise.resolve(result), true, mock)
  },
  deleteConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteConnector', 'Mgn', Promise.resolve(result), false, mock)
  },
  deleteConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteConnector', 'Mgn', Promise.reject(result), true, mock)
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
  deleteLaunchConfigurationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteLaunchConfigurationTemplate', 'Mgn', Promise.resolve(result), true, mock)
  },
  deleteLaunchConfigurationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteLaunchConfigurationTemplate', 'Mgn', Promise.resolve(result), false, mock)
  },
  deleteLaunchConfigurationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteLaunchConfigurationTemplate', 'Mgn', Promise.reject(result), true, mock)
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
  deleteVcenterClient: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteVcenterClient', 'Mgn', Promise.resolve(result), true, mock)
  },
  deleteVcenterClientAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteVcenterClient', 'Mgn', Promise.resolve(result), false, mock)
  },
  deleteVcenterClientThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteVcenterClient', 'Mgn', Promise.reject(result), true, mock)
  },
  deleteWave: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteWave', 'Mgn', Promise.resolve(result), true, mock)
  },
  deleteWaveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteWave', 'Mgn', Promise.resolve(result), false, mock)
  },
  deleteWaveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'deleteWave', 'Mgn', Promise.reject(result), true, mock)
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
  describeLaunchConfigurationTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'describeLaunchConfigurationTemplates', 'Mgn', Promise.resolve(result), true, mock)
  },
  describeLaunchConfigurationTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'describeLaunchConfigurationTemplates', 'Mgn', Promise.resolve(result), false, mock)
  },
  describeLaunchConfigurationTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'describeLaunchConfigurationTemplates', 'Mgn', Promise.reject(result), true, mock)
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
  describeVcenterClients: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'describeVcenterClients', 'Mgn', Promise.resolve(result), true, mock)
  },
  describeVcenterClientsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'describeVcenterClients', 'Mgn', Promise.resolve(result), false, mock)
  },
  describeVcenterClientsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'describeVcenterClients', 'Mgn', Promise.reject(result), true, mock)
  },
  disassociateApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'disassociateApplications', 'Mgn', Promise.resolve(result), true, mock)
  },
  disassociateApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'disassociateApplications', 'Mgn', Promise.resolve(result), false, mock)
  },
  disassociateApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'disassociateApplications', 'Mgn', Promise.reject(result), true, mock)
  },
  disassociateSourceServers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'disassociateSourceServers', 'Mgn', Promise.resolve(result), true, mock)
  },
  disassociateSourceServersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'disassociateSourceServers', 'Mgn', Promise.resolve(result), false, mock)
  },
  disassociateSourceServersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'disassociateSourceServers', 'Mgn', Promise.reject(result), true, mock)
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
  listApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listApplications', 'Mgn', Promise.resolve(result), true, mock)
  },
  listApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listApplications', 'Mgn', Promise.resolve(result), false, mock)
  },
  listApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listApplications', 'Mgn', Promise.reject(result), true, mock)
  },
  listConnectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listConnectors', 'Mgn', Promise.resolve(result), true, mock)
  },
  listConnectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listConnectors', 'Mgn', Promise.resolve(result), false, mock)
  },
  listConnectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listConnectors', 'Mgn', Promise.reject(result), true, mock)
  },
  listExportErrors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listExportErrors', 'Mgn', Promise.resolve(result), true, mock)
  },
  listExportErrorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listExportErrors', 'Mgn', Promise.resolve(result), false, mock)
  },
  listExportErrorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listExportErrors', 'Mgn', Promise.reject(result), true, mock)
  },
  listExports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listExports', 'Mgn', Promise.resolve(result), true, mock)
  },
  listExportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listExports', 'Mgn', Promise.resolve(result), false, mock)
  },
  listExportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listExports', 'Mgn', Promise.reject(result), true, mock)
  },
  listImportErrors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listImportErrors', 'Mgn', Promise.resolve(result), true, mock)
  },
  listImportErrorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listImportErrors', 'Mgn', Promise.resolve(result), false, mock)
  },
  listImportErrorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listImportErrors', 'Mgn', Promise.reject(result), true, mock)
  },
  listImports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listImports', 'Mgn', Promise.resolve(result), true, mock)
  },
  listImportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listImports', 'Mgn', Promise.resolve(result), false, mock)
  },
  listImportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listImports', 'Mgn', Promise.reject(result), true, mock)
  },
  listManagedAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listManagedAccounts', 'Mgn', Promise.resolve(result), true, mock)
  },
  listManagedAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listManagedAccounts', 'Mgn', Promise.resolve(result), false, mock)
  },
  listManagedAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listManagedAccounts', 'Mgn', Promise.reject(result), true, mock)
  },
  listSourceServerActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listSourceServerActions', 'Mgn', Promise.resolve(result), true, mock)
  },
  listSourceServerActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listSourceServerActions', 'Mgn', Promise.resolve(result), false, mock)
  },
  listSourceServerActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listSourceServerActions', 'Mgn', Promise.reject(result), true, mock)
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
  listTemplateActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listTemplateActions', 'Mgn', Promise.resolve(result), true, mock)
  },
  listTemplateActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listTemplateActions', 'Mgn', Promise.resolve(result), false, mock)
  },
  listTemplateActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listTemplateActions', 'Mgn', Promise.reject(result), true, mock)
  },
  listWaves: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listWaves', 'Mgn', Promise.resolve(result), true, mock)
  },
  listWavesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listWaves', 'Mgn', Promise.resolve(result), false, mock)
  },
  listWavesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'listWaves', 'Mgn', Promise.reject(result), true, mock)
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
  pauseReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'pauseReplication', 'Mgn', Promise.resolve(result), true, mock)
  },
  pauseReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'pauseReplication', 'Mgn', Promise.resolve(result), false, mock)
  },
  pauseReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'pauseReplication', 'Mgn', Promise.reject(result), true, mock)
  },
  putSourceServerAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'putSourceServerAction', 'Mgn', Promise.resolve(result), true, mock)
  },
  putSourceServerActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'putSourceServerAction', 'Mgn', Promise.resolve(result), false, mock)
  },
  putSourceServerActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'putSourceServerAction', 'Mgn', Promise.reject(result), true, mock)
  },
  putTemplateAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'putTemplateAction', 'Mgn', Promise.resolve(result), true, mock)
  },
  putTemplateActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'putTemplateAction', 'Mgn', Promise.resolve(result), false, mock)
  },
  putTemplateActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'putTemplateAction', 'Mgn', Promise.reject(result), true, mock)
  },
  removeSourceServerAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'removeSourceServerAction', 'Mgn', Promise.resolve(result), true, mock)
  },
  removeSourceServerActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'removeSourceServerAction', 'Mgn', Promise.resolve(result), false, mock)
  },
  removeSourceServerActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'removeSourceServerAction', 'Mgn', Promise.reject(result), true, mock)
  },
  removeTemplateAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'removeTemplateAction', 'Mgn', Promise.resolve(result), true, mock)
  },
  removeTemplateActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'removeTemplateAction', 'Mgn', Promise.resolve(result), false, mock)
  },
  removeTemplateActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'removeTemplateAction', 'Mgn', Promise.reject(result), true, mock)
  },
  resumeReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'resumeReplication', 'Mgn', Promise.resolve(result), true, mock)
  },
  resumeReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'resumeReplication', 'Mgn', Promise.resolve(result), false, mock)
  },
  resumeReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'resumeReplication', 'Mgn', Promise.reject(result), true, mock)
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
  startExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'startExport', 'Mgn', Promise.resolve(result), true, mock)
  },
  startExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'startExport', 'Mgn', Promise.resolve(result), false, mock)
  },
  startExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'startExport', 'Mgn', Promise.reject(result), true, mock)
  },
  startImport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'startImport', 'Mgn', Promise.resolve(result), true, mock)
  },
  startImportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'startImport', 'Mgn', Promise.resolve(result), false, mock)
  },
  startImportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'startImport', 'Mgn', Promise.reject(result), true, mock)
  },
  startReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'startReplication', 'Mgn', Promise.resolve(result), true, mock)
  },
  startReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'startReplication', 'Mgn', Promise.resolve(result), false, mock)
  },
  startReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'startReplication', 'Mgn', Promise.reject(result), true, mock)
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
  stopReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'stopReplication', 'Mgn', Promise.resolve(result), true, mock)
  },
  stopReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'stopReplication', 'Mgn', Promise.resolve(result), false, mock)
  },
  stopReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'stopReplication', 'Mgn', Promise.reject(result), true, mock)
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
  unarchiveApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'unarchiveApplication', 'Mgn', Promise.resolve(result), true, mock)
  },
  unarchiveApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'unarchiveApplication', 'Mgn', Promise.resolve(result), false, mock)
  },
  unarchiveApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'unarchiveApplication', 'Mgn', Promise.reject(result), true, mock)
  },
  unarchiveWave: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'unarchiveWave', 'Mgn', Promise.resolve(result), true, mock)
  },
  unarchiveWaveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'unarchiveWave', 'Mgn', Promise.resolve(result), false, mock)
  },
  unarchiveWaveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'unarchiveWave', 'Mgn', Promise.reject(result), true, mock)
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
  updateApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateApplication', 'Mgn', Promise.resolve(result), true, mock)
  },
  updateApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateApplication', 'Mgn', Promise.resolve(result), false, mock)
  },
  updateApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateApplication', 'Mgn', Promise.reject(result), true, mock)
  },
  updateConnector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateConnector', 'Mgn', Promise.resolve(result), true, mock)
  },
  updateConnectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateConnector', 'Mgn', Promise.resolve(result), false, mock)
  },
  updateConnectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateConnector', 'Mgn', Promise.reject(result), true, mock)
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
  updateLaunchConfigurationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateLaunchConfigurationTemplate', 'Mgn', Promise.resolve(result), true, mock)
  },
  updateLaunchConfigurationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateLaunchConfigurationTemplate', 'Mgn', Promise.resolve(result), false, mock)
  },
  updateLaunchConfigurationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateLaunchConfigurationTemplate', 'Mgn', Promise.reject(result), true, mock)
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
  updateSourceServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateSourceServer', 'Mgn', Promise.resolve(result), true, mock)
  },
  updateSourceServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateSourceServer', 'Mgn', Promise.resolve(result), false, mock)
  },
  updateSourceServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateSourceServer', 'Mgn', Promise.reject(result), true, mock)
  },
  updateSourceServerReplicationType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateSourceServerReplicationType', 'Mgn', Promise.resolve(result), true, mock)
  },
  updateSourceServerReplicationTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateSourceServerReplicationType', 'Mgn', Promise.resolve(result), false, mock)
  },
  updateSourceServerReplicationTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateSourceServerReplicationType', 'Mgn', Promise.reject(result), true, mock)
  },
  updateWave: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateWave', 'Mgn', Promise.resolve(result), true, mock)
  },
  updateWaveAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateWave', 'Mgn', Promise.resolve(result), false, mock)
  },
  updateWaveThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-mgn', 'updateWave', 'Mgn', Promise.reject(result), true, mock)
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
