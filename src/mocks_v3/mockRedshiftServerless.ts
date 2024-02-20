
/**
* @description mocks_v3:mockRedshiftServerless module is mocks for AWS-SDK V3
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
export const mockRedshiftServerless = {
  convertRecoveryPointToSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'convertRecoveryPointToSnapshot', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  convertRecoveryPointToSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'convertRecoveryPointToSnapshot', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  convertRecoveryPointToSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'convertRecoveryPointToSnapshot', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  createCustomDomainAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createCustomDomainAssociation', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  createCustomDomainAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createCustomDomainAssociation', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  createCustomDomainAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createCustomDomainAssociation', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  createEndpointAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createEndpointAccess', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  createEndpointAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createEndpointAccess', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  createEndpointAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createEndpointAccess', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  createNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createNamespace', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  createNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createNamespace', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  createNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createNamespace', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  createScheduledAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createScheduledAction', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  createScheduledActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createScheduledAction', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  createScheduledActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createScheduledAction', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  createSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createSnapshot', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  createSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createSnapshot', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  createSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createSnapshot', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  createSnapshotCopyConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createSnapshotCopyConfiguration', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  createSnapshotCopyConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createSnapshotCopyConfiguration', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  createSnapshotCopyConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createSnapshotCopyConfiguration', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  createUsageLimit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createUsageLimit', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  createUsageLimitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createUsageLimit', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  createUsageLimitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createUsageLimit', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  createWorkgroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createWorkgroup', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  createWorkgroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createWorkgroup', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  createWorkgroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'createWorkgroup', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  deleteCustomDomainAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteCustomDomainAssociation', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  deleteCustomDomainAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteCustomDomainAssociation', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  deleteCustomDomainAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteCustomDomainAssociation', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  deleteEndpointAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteEndpointAccess', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  deleteEndpointAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteEndpointAccess', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  deleteEndpointAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteEndpointAccess', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  deleteNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteNamespace', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  deleteNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteNamespace', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  deleteNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteNamespace', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteResourcePolicy', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteResourcePolicy', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteResourcePolicy', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  deleteScheduledAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteScheduledAction', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  deleteScheduledActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteScheduledAction', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  deleteScheduledActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteScheduledAction', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  deleteSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteSnapshot', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  deleteSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteSnapshot', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  deleteSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteSnapshot', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  deleteSnapshotCopyConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteSnapshotCopyConfiguration', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  deleteSnapshotCopyConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteSnapshotCopyConfiguration', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  deleteSnapshotCopyConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteSnapshotCopyConfiguration', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  deleteUsageLimit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteUsageLimit', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  deleteUsageLimitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteUsageLimit', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  deleteUsageLimitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteUsageLimit', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  deleteWorkgroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteWorkgroup', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  deleteWorkgroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteWorkgroup', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  deleteWorkgroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'deleteWorkgroup', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  getCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getCredentials', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  getCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getCredentials', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  getCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getCredentials', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  getCustomDomainAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getCustomDomainAssociation', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  getCustomDomainAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getCustomDomainAssociation', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  getCustomDomainAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getCustomDomainAssociation', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  getEndpointAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getEndpointAccess', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  getEndpointAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getEndpointAccess', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  getEndpointAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getEndpointAccess', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  getNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getNamespace', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  getNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getNamespace', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  getNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getNamespace', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  getRecoveryPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getRecoveryPoint', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  getRecoveryPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getRecoveryPoint', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  getRecoveryPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getRecoveryPoint', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  getResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getResourcePolicy', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  getResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getResourcePolicy', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  getResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getResourcePolicy', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  getScheduledAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getScheduledAction', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  getScheduledActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getScheduledAction', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  getScheduledActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getScheduledAction', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  getSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getSnapshot', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  getSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getSnapshot', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  getSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getSnapshot', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  getTableRestoreStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getTableRestoreStatus', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  getTableRestoreStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getTableRestoreStatus', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  getTableRestoreStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getTableRestoreStatus', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  getUsageLimit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getUsageLimit', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  getUsageLimitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getUsageLimit', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  getUsageLimitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getUsageLimit', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  getWorkgroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getWorkgroup', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  getWorkgroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getWorkgroup', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  getWorkgroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'getWorkgroup', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  listCustomDomainAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listCustomDomainAssociations', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  listCustomDomainAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listCustomDomainAssociations', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  listCustomDomainAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listCustomDomainAssociations', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  listEndpointAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listEndpointAccess', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  listEndpointAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listEndpointAccess', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  listEndpointAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listEndpointAccess', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  listNamespaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listNamespaces', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  listNamespacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listNamespaces', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  listNamespacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listNamespaces', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  listRecoveryPoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listRecoveryPoints', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  listRecoveryPointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listRecoveryPoints', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  listRecoveryPointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listRecoveryPoints', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  listScheduledActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listScheduledActions', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  listScheduledActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listScheduledActions', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  listScheduledActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listScheduledActions', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  listSnapshotCopyConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listSnapshotCopyConfigurations', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  listSnapshotCopyConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listSnapshotCopyConfigurations', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  listSnapshotCopyConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listSnapshotCopyConfigurations', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  listSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listSnapshots', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  listSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listSnapshots', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  listSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listSnapshots', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  listTableRestoreStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listTableRestoreStatus', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  listTableRestoreStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listTableRestoreStatus', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  listTableRestoreStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listTableRestoreStatus', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listTagsForResource', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listTagsForResource', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listTagsForResource', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  listUsageLimits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listUsageLimits', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  listUsageLimitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listUsageLimits', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  listUsageLimitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listUsageLimits', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  listWorkgroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listWorkgroups', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  listWorkgroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listWorkgroups', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  listWorkgroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'listWorkgroups', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'putResourcePolicy', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'putResourcePolicy', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'putResourcePolicy', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  restoreFromRecoveryPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'restoreFromRecoveryPoint', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  restoreFromRecoveryPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'restoreFromRecoveryPoint', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  restoreFromRecoveryPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'restoreFromRecoveryPoint', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  restoreFromSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'restoreFromSnapshot', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  restoreFromSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'restoreFromSnapshot', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  restoreFromSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'restoreFromSnapshot', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  restoreTableFromRecoveryPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'restoreTableFromRecoveryPoint', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  restoreTableFromRecoveryPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'restoreTableFromRecoveryPoint', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  restoreTableFromRecoveryPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'restoreTableFromRecoveryPoint', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  restoreTableFromSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'restoreTableFromSnapshot', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  restoreTableFromSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'restoreTableFromSnapshot', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  restoreTableFromSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'restoreTableFromSnapshot', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'tagResource', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'tagResource', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'tagResource', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'untagResource', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'untagResource', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'untagResource', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  updateCustomDomainAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateCustomDomainAssociation', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  updateCustomDomainAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateCustomDomainAssociation', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  updateCustomDomainAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateCustomDomainAssociation', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  updateEndpointAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateEndpointAccess', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  updateEndpointAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateEndpointAccess', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  updateEndpointAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateEndpointAccess', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  updateNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateNamespace', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  updateNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateNamespace', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  updateNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateNamespace', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  updateScheduledAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateScheduledAction', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  updateScheduledActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateScheduledAction', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  updateScheduledActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateScheduledAction', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  updateSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateSnapshot', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  updateSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateSnapshot', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  updateSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateSnapshot', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  updateSnapshotCopyConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateSnapshotCopyConfiguration', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  updateSnapshotCopyConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateSnapshotCopyConfiguration', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  updateSnapshotCopyConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateSnapshotCopyConfiguration', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  updateUsageLimit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateUsageLimit', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  updateUsageLimitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateUsageLimit', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  updateUsageLimitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateUsageLimit', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  updateWorkgroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateWorkgroup', 'RedshiftServerless', Promise.resolve(result), true, mock)
  },
  updateWorkgroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateWorkgroup', 'RedshiftServerless', Promise.resolve(result), false, mock)
  },
  updateWorkgroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'updateWorkgroup', 'RedshiftServerless', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'send', 'RedshiftServerlessClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'send', 'RedshiftServerlessClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-redshift-serverless', 'send', 'RedshiftServerlessClient', Promise.reject(result), true, mock)
  }
}
