
/**
* @description mocks_v3:mockRDS module is mocks for AWS-SDK V3
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

  export const mockRDS = {
  addRoleToDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'addRoleToDBCluster', 'RDS', Promise.resolve(result), true, mock)
  },
  addRoleToDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'addRoleToDBCluster', 'RDS', Promise.resolve(result), false, mock)
  },
  addRoleToDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'addRoleToDBCluster', 'RDS', Promise.reject(result), true, mock)
  },
  addRoleToDBInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'addRoleToDBInstance', 'RDS', Promise.resolve(result), true, mock)
  },
  addRoleToDBInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'addRoleToDBInstance', 'RDS', Promise.resolve(result), false, mock)
  },
  addRoleToDBInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'addRoleToDBInstance', 'RDS', Promise.reject(result), true, mock)
  },
  addSourceIdentifierToSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'addSourceIdentifierToSubscription', 'RDS', Promise.resolve(result), true, mock)
  },
  addSourceIdentifierToSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'addSourceIdentifierToSubscription', 'RDS', Promise.resolve(result), false, mock)
  },
  addSourceIdentifierToSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'addSourceIdentifierToSubscription', 'RDS', Promise.reject(result), true, mock)
  },
  addTagsToResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'addTagsToResource', 'RDS', Promise.resolve(result), true, mock)
  },
  addTagsToResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'addTagsToResource', 'RDS', Promise.resolve(result), false, mock)
  },
  addTagsToResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'addTagsToResource', 'RDS', Promise.reject(result), true, mock)
  },
  applyPendingMaintenanceAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'applyPendingMaintenanceAction', 'RDS', Promise.resolve(result), true, mock)
  },
  applyPendingMaintenanceActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'applyPendingMaintenanceAction', 'RDS', Promise.resolve(result), false, mock)
  },
  applyPendingMaintenanceActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'applyPendingMaintenanceAction', 'RDS', Promise.reject(result), true, mock)
  },
  authorizeDBSecurityGroupIngress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'authorizeDBSecurityGroupIngress', 'RDS', Promise.resolve(result), true, mock)
  },
  authorizeDBSecurityGroupIngressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'authorizeDBSecurityGroupIngress', 'RDS', Promise.resolve(result), false, mock)
  },
  authorizeDBSecurityGroupIngressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'authorizeDBSecurityGroupIngress', 'RDS', Promise.reject(result), true, mock)
  },
  backtrackDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'backtrackDBCluster', 'RDS', Promise.resolve(result), true, mock)
  },
  backtrackDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'backtrackDBCluster', 'RDS', Promise.resolve(result), false, mock)
  },
  backtrackDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'backtrackDBCluster', 'RDS', Promise.reject(result), true, mock)
  },
  cancelExportTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'cancelExportTask', 'RDS', Promise.resolve(result), true, mock)
  },
  cancelExportTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'cancelExportTask', 'RDS', Promise.resolve(result), false, mock)
  },
  cancelExportTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'cancelExportTask', 'RDS', Promise.reject(result), true, mock)
  },
  copyDBClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'copyDBClusterParameterGroup', 'RDS', Promise.resolve(result), true, mock)
  },
  copyDBClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'copyDBClusterParameterGroup', 'RDS', Promise.resolve(result), false, mock)
  },
  copyDBClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'copyDBClusterParameterGroup', 'RDS', Promise.reject(result), true, mock)
  },
  copyDBClusterSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'copyDBClusterSnapshot', 'RDS', Promise.resolve(result), true, mock)
  },
  copyDBClusterSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'copyDBClusterSnapshot', 'RDS', Promise.resolve(result), false, mock)
  },
  copyDBClusterSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'copyDBClusterSnapshot', 'RDS', Promise.reject(result), true, mock)
  },
  copyDBParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'copyDBParameterGroup', 'RDS', Promise.resolve(result), true, mock)
  },
  copyDBParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'copyDBParameterGroup', 'RDS', Promise.resolve(result), false, mock)
  },
  copyDBParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'copyDBParameterGroup', 'RDS', Promise.reject(result), true, mock)
  },
  copyDBSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'copyDBSnapshot', 'RDS', Promise.resolve(result), true, mock)
  },
  copyDBSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'copyDBSnapshot', 'RDS', Promise.resolve(result), false, mock)
  },
  copyDBSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'copyDBSnapshot', 'RDS', Promise.reject(result), true, mock)
  },
  copyOptionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'copyOptionGroup', 'RDS', Promise.resolve(result), true, mock)
  },
  copyOptionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'copyOptionGroup', 'RDS', Promise.resolve(result), false, mock)
  },
  copyOptionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'copyOptionGroup', 'RDS', Promise.reject(result), true, mock)
  },
  createCustomAvailabilityZone: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createCustomAvailabilityZone', 'RDS', Promise.resolve(result), true, mock)
  },
  createCustomAvailabilityZoneAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createCustomAvailabilityZone', 'RDS', Promise.resolve(result), false, mock)
  },
  createCustomAvailabilityZoneThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createCustomAvailabilityZone', 'RDS', Promise.reject(result), true, mock)
  },
  createCustomDBEngineVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createCustomDBEngineVersion', 'RDS', Promise.resolve(result), true, mock)
  },
  createCustomDBEngineVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createCustomDBEngineVersion', 'RDS', Promise.resolve(result), false, mock)
  },
  createCustomDBEngineVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createCustomDBEngineVersion', 'RDS', Promise.reject(result), true, mock)
  },
  createDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBCluster', 'RDS', Promise.resolve(result), true, mock)
  },
  createDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBCluster', 'RDS', Promise.resolve(result), false, mock)
  },
  createDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBCluster', 'RDS', Promise.reject(result), true, mock)
  },
  createDBClusterEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBClusterEndpoint', 'RDS', Promise.resolve(result), true, mock)
  },
  createDBClusterEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBClusterEndpoint', 'RDS', Promise.resolve(result), false, mock)
  },
  createDBClusterEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBClusterEndpoint', 'RDS', Promise.reject(result), true, mock)
  },
  createDBClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBClusterParameterGroup', 'RDS', Promise.resolve(result), true, mock)
  },
  createDBClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBClusterParameterGroup', 'RDS', Promise.resolve(result), false, mock)
  },
  createDBClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBClusterParameterGroup', 'RDS', Promise.reject(result), true, mock)
  },
  createDBClusterSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBClusterSnapshot', 'RDS', Promise.resolve(result), true, mock)
  },
  createDBClusterSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBClusterSnapshot', 'RDS', Promise.resolve(result), false, mock)
  },
  createDBClusterSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBClusterSnapshot', 'RDS', Promise.reject(result), true, mock)
  },
  createDBInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBInstance', 'RDS', Promise.resolve(result), true, mock)
  },
  createDBInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBInstance', 'RDS', Promise.resolve(result), false, mock)
  },
  createDBInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBInstance', 'RDS', Promise.reject(result), true, mock)
  },
  createDBInstanceReadReplica: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBInstanceReadReplica', 'RDS', Promise.resolve(result), true, mock)
  },
  createDBInstanceReadReplicaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBInstanceReadReplica', 'RDS', Promise.resolve(result), false, mock)
  },
  createDBInstanceReadReplicaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBInstanceReadReplica', 'RDS', Promise.reject(result), true, mock)
  },
  createDBParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBParameterGroup', 'RDS', Promise.resolve(result), true, mock)
  },
  createDBParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBParameterGroup', 'RDS', Promise.resolve(result), false, mock)
  },
  createDBParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBParameterGroup', 'RDS', Promise.reject(result), true, mock)
  },
  createDBProxy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBProxy', 'RDS', Promise.resolve(result), true, mock)
  },
  createDBProxyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBProxy', 'RDS', Promise.resolve(result), false, mock)
  },
  createDBProxyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBProxy', 'RDS', Promise.reject(result), true, mock)
  },
  createDBProxyEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBProxyEndpoint', 'RDS', Promise.resolve(result), true, mock)
  },
  createDBProxyEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBProxyEndpoint', 'RDS', Promise.resolve(result), false, mock)
  },
  createDBProxyEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBProxyEndpoint', 'RDS', Promise.reject(result), true, mock)
  },
  createDBSecurityGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBSecurityGroup', 'RDS', Promise.resolve(result), true, mock)
  },
  createDBSecurityGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBSecurityGroup', 'RDS', Promise.resolve(result), false, mock)
  },
  createDBSecurityGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBSecurityGroup', 'RDS', Promise.reject(result), true, mock)
  },
  createDBSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBSnapshot', 'RDS', Promise.resolve(result), true, mock)
  },
  createDBSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBSnapshot', 'RDS', Promise.resolve(result), false, mock)
  },
  createDBSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBSnapshot', 'RDS', Promise.reject(result), true, mock)
  },
  createDBSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBSubnetGroup', 'RDS', Promise.resolve(result), true, mock)
  },
  createDBSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBSubnetGroup', 'RDS', Promise.resolve(result), false, mock)
  },
  createDBSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createDBSubnetGroup', 'RDS', Promise.reject(result), true, mock)
  },
  createEventSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createEventSubscription', 'RDS', Promise.resolve(result), true, mock)
  },
  createEventSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createEventSubscription', 'RDS', Promise.resolve(result), false, mock)
  },
  createEventSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createEventSubscription', 'RDS', Promise.reject(result), true, mock)
  },
  createGlobalCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createGlobalCluster', 'RDS', Promise.resolve(result), true, mock)
  },
  createGlobalClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createGlobalCluster', 'RDS', Promise.resolve(result), false, mock)
  },
  createGlobalClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createGlobalCluster', 'RDS', Promise.reject(result), true, mock)
  },
  createOptionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createOptionGroup', 'RDS', Promise.resolve(result), true, mock)
  },
  createOptionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createOptionGroup', 'RDS', Promise.resolve(result), false, mock)
  },
  createOptionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'createOptionGroup', 'RDS', Promise.reject(result), true, mock)
  },
  deleteCustomAvailabilityZone: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteCustomAvailabilityZone', 'RDS', Promise.resolve(result), true, mock)
  },
  deleteCustomAvailabilityZoneAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteCustomAvailabilityZone', 'RDS', Promise.resolve(result), false, mock)
  },
  deleteCustomAvailabilityZoneThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteCustomAvailabilityZone', 'RDS', Promise.reject(result), true, mock)
  },
  deleteCustomDBEngineVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteCustomDBEngineVersion', 'RDS', Promise.resolve(result), true, mock)
  },
  deleteCustomDBEngineVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteCustomDBEngineVersion', 'RDS', Promise.resolve(result), false, mock)
  },
  deleteCustomDBEngineVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteCustomDBEngineVersion', 'RDS', Promise.reject(result), true, mock)
  },
  deleteDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBCluster', 'RDS', Promise.resolve(result), true, mock)
  },
  deleteDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBCluster', 'RDS', Promise.resolve(result), false, mock)
  },
  deleteDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBCluster', 'RDS', Promise.reject(result), true, mock)
  },
  deleteDBClusterEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBClusterEndpoint', 'RDS', Promise.resolve(result), true, mock)
  },
  deleteDBClusterEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBClusterEndpoint', 'RDS', Promise.resolve(result), false, mock)
  },
  deleteDBClusterEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBClusterEndpoint', 'RDS', Promise.reject(result), true, mock)
  },
  deleteDBClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBClusterParameterGroup', 'RDS', Promise.resolve(result), true, mock)
  },
  deleteDBClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBClusterParameterGroup', 'RDS', Promise.resolve(result), false, mock)
  },
  deleteDBClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBClusterParameterGroup', 'RDS', Promise.reject(result), true, mock)
  },
  deleteDBClusterSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBClusterSnapshot', 'RDS', Promise.resolve(result), true, mock)
  },
  deleteDBClusterSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBClusterSnapshot', 'RDS', Promise.resolve(result), false, mock)
  },
  deleteDBClusterSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBClusterSnapshot', 'RDS', Promise.reject(result), true, mock)
  },
  deleteDBInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBInstance', 'RDS', Promise.resolve(result), true, mock)
  },
  deleteDBInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBInstance', 'RDS', Promise.resolve(result), false, mock)
  },
  deleteDBInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBInstance', 'RDS', Promise.reject(result), true, mock)
  },
  deleteDBInstanceAutomatedBackup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBInstanceAutomatedBackup', 'RDS', Promise.resolve(result), true, mock)
  },
  deleteDBInstanceAutomatedBackupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBInstanceAutomatedBackup', 'RDS', Promise.resolve(result), false, mock)
  },
  deleteDBInstanceAutomatedBackupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBInstanceAutomatedBackup', 'RDS', Promise.reject(result), true, mock)
  },
  deleteDBParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBParameterGroup', 'RDS', Promise.resolve(result), true, mock)
  },
  deleteDBParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBParameterGroup', 'RDS', Promise.resolve(result), false, mock)
  },
  deleteDBParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBParameterGroup', 'RDS', Promise.reject(result), true, mock)
  },
  deleteDBProxy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBProxy', 'RDS', Promise.resolve(result), true, mock)
  },
  deleteDBProxyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBProxy', 'RDS', Promise.resolve(result), false, mock)
  },
  deleteDBProxyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBProxy', 'RDS', Promise.reject(result), true, mock)
  },
  deleteDBProxyEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBProxyEndpoint', 'RDS', Promise.resolve(result), true, mock)
  },
  deleteDBProxyEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBProxyEndpoint', 'RDS', Promise.resolve(result), false, mock)
  },
  deleteDBProxyEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBProxyEndpoint', 'RDS', Promise.reject(result), true, mock)
  },
  deleteDBSecurityGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBSecurityGroup', 'RDS', Promise.resolve(result), true, mock)
  },
  deleteDBSecurityGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBSecurityGroup', 'RDS', Promise.resolve(result), false, mock)
  },
  deleteDBSecurityGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBSecurityGroup', 'RDS', Promise.reject(result), true, mock)
  },
  deleteDBSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBSnapshot', 'RDS', Promise.resolve(result), true, mock)
  },
  deleteDBSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBSnapshot', 'RDS', Promise.resolve(result), false, mock)
  },
  deleteDBSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBSnapshot', 'RDS', Promise.reject(result), true, mock)
  },
  deleteDBSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBSubnetGroup', 'RDS', Promise.resolve(result), true, mock)
  },
  deleteDBSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBSubnetGroup', 'RDS', Promise.resolve(result), false, mock)
  },
  deleteDBSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteDBSubnetGroup', 'RDS', Promise.reject(result), true, mock)
  },
  deleteEventSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteEventSubscription', 'RDS', Promise.resolve(result), true, mock)
  },
  deleteEventSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteEventSubscription', 'RDS', Promise.resolve(result), false, mock)
  },
  deleteEventSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteEventSubscription', 'RDS', Promise.reject(result), true, mock)
  },
  deleteGlobalCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteGlobalCluster', 'RDS', Promise.resolve(result), true, mock)
  },
  deleteGlobalClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteGlobalCluster', 'RDS', Promise.resolve(result), false, mock)
  },
  deleteGlobalClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteGlobalCluster', 'RDS', Promise.reject(result), true, mock)
  },
  deleteInstallationMedia: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteInstallationMedia', 'RDS', Promise.resolve(result), true, mock)
  },
  deleteInstallationMediaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteInstallationMedia', 'RDS', Promise.resolve(result), false, mock)
  },
  deleteInstallationMediaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteInstallationMedia', 'RDS', Promise.reject(result), true, mock)
  },
  deleteOptionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteOptionGroup', 'RDS', Promise.resolve(result), true, mock)
  },
  deleteOptionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteOptionGroup', 'RDS', Promise.resolve(result), false, mock)
  },
  deleteOptionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deleteOptionGroup', 'RDS', Promise.reject(result), true, mock)
  },
  deregisterDBProxyTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deregisterDBProxyTargets', 'RDS', Promise.resolve(result), true, mock)
  },
  deregisterDBProxyTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deregisterDBProxyTargets', 'RDS', Promise.resolve(result), false, mock)
  },
  deregisterDBProxyTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'deregisterDBProxyTargets', 'RDS', Promise.reject(result), true, mock)
  },
  describeAccountAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeAccountAttributes', 'RDS', Promise.resolve(result), true, mock)
  },
  describeAccountAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeAccountAttributes', 'RDS', Promise.resolve(result), false, mock)
  },
  describeAccountAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeAccountAttributes', 'RDS', Promise.reject(result), true, mock)
  },
  describeCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeCertificates', 'RDS', Promise.resolve(result), true, mock)
  },
  describeCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeCertificates', 'RDS', Promise.resolve(result), false, mock)
  },
  describeCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeCertificates', 'RDS', Promise.reject(result), true, mock)
  },
  describeCustomAvailabilityZones: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeCustomAvailabilityZones', 'RDS', Promise.resolve(result), true, mock)
  },
  describeCustomAvailabilityZonesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeCustomAvailabilityZones', 'RDS', Promise.resolve(result), false, mock)
  },
  describeCustomAvailabilityZonesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeCustomAvailabilityZones', 'RDS', Promise.reject(result), true, mock)
  },
  describeDBClusterBacktracks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBClusterBacktracks', 'RDS', Promise.resolve(result), true, mock)
  },
  describeDBClusterBacktracksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBClusterBacktracks', 'RDS', Promise.resolve(result), false, mock)
  },
  describeDBClusterBacktracksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBClusterBacktracks', 'RDS', Promise.reject(result), true, mock)
  },
  describeDBClusterEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBClusterEndpoints', 'RDS', Promise.resolve(result), true, mock)
  },
  describeDBClusterEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBClusterEndpoints', 'RDS', Promise.resolve(result), false, mock)
  },
  describeDBClusterEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBClusterEndpoints', 'RDS', Promise.reject(result), true, mock)
  },
  describeDBClusterParameterGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBClusterParameterGroups', 'RDS', Promise.resolve(result), true, mock)
  },
  describeDBClusterParameterGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBClusterParameterGroups', 'RDS', Promise.resolve(result), false, mock)
  },
  describeDBClusterParameterGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBClusterParameterGroups', 'RDS', Promise.reject(result), true, mock)
  },
  describeDBClusterParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBClusterParameters', 'RDS', Promise.resolve(result), true, mock)
  },
  describeDBClusterParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBClusterParameters', 'RDS', Promise.resolve(result), false, mock)
  },
  describeDBClusterParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBClusterParameters', 'RDS', Promise.reject(result), true, mock)
  },
  describeDBClusterSnapshotAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBClusterSnapshotAttributes', 'RDS', Promise.resolve(result), true, mock)
  },
  describeDBClusterSnapshotAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBClusterSnapshotAttributes', 'RDS', Promise.resolve(result), false, mock)
  },
  describeDBClusterSnapshotAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBClusterSnapshotAttributes', 'RDS', Promise.reject(result), true, mock)
  },
  describeDBClusterSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBClusterSnapshots', 'RDS', Promise.resolve(result), true, mock)
  },
  describeDBClusterSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBClusterSnapshots', 'RDS', Promise.resolve(result), false, mock)
  },
  describeDBClusterSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBClusterSnapshots', 'RDS', Promise.reject(result), true, mock)
  },
  describeDBClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBClusters', 'RDS', Promise.resolve(result), true, mock)
  },
  describeDBClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBClusters', 'RDS', Promise.resolve(result), false, mock)
  },
  describeDBClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBClusters', 'RDS', Promise.reject(result), true, mock)
  },
  describeDBEngineVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBEngineVersions', 'RDS', Promise.resolve(result), true, mock)
  },
  describeDBEngineVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBEngineVersions', 'RDS', Promise.resolve(result), false, mock)
  },
  describeDBEngineVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBEngineVersions', 'RDS', Promise.reject(result), true, mock)
  },
  describeDBInstanceAutomatedBackups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBInstanceAutomatedBackups', 'RDS', Promise.resolve(result), true, mock)
  },
  describeDBInstanceAutomatedBackupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBInstanceAutomatedBackups', 'RDS', Promise.resolve(result), false, mock)
  },
  describeDBInstanceAutomatedBackupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBInstanceAutomatedBackups', 'RDS', Promise.reject(result), true, mock)
  },
  describeDBInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBInstances', 'RDS', Promise.resolve(result), true, mock)
  },
  describeDBInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBInstances', 'RDS', Promise.resolve(result), false, mock)
  },
  describeDBInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBInstances', 'RDS', Promise.reject(result), true, mock)
  },
  describeDBLogFiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBLogFiles', 'RDS', Promise.resolve(result), true, mock)
  },
  describeDBLogFilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBLogFiles', 'RDS', Promise.resolve(result), false, mock)
  },
  describeDBLogFilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBLogFiles', 'RDS', Promise.reject(result), true, mock)
  },
  describeDBParameterGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBParameterGroups', 'RDS', Promise.resolve(result), true, mock)
  },
  describeDBParameterGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBParameterGroups', 'RDS', Promise.resolve(result), false, mock)
  },
  describeDBParameterGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBParameterGroups', 'RDS', Promise.reject(result), true, mock)
  },
  describeDBParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBParameters', 'RDS', Promise.resolve(result), true, mock)
  },
  describeDBParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBParameters', 'RDS', Promise.resolve(result), false, mock)
  },
  describeDBParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBParameters', 'RDS', Promise.reject(result), true, mock)
  },
  describeDBProxies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBProxies', 'RDS', Promise.resolve(result), true, mock)
  },
  describeDBProxiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBProxies', 'RDS', Promise.resolve(result), false, mock)
  },
  describeDBProxiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBProxies', 'RDS', Promise.reject(result), true, mock)
  },
  describeDBProxyEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBProxyEndpoints', 'RDS', Promise.resolve(result), true, mock)
  },
  describeDBProxyEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBProxyEndpoints', 'RDS', Promise.resolve(result), false, mock)
  },
  describeDBProxyEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBProxyEndpoints', 'RDS', Promise.reject(result), true, mock)
  },
  describeDBProxyTargetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBProxyTargetGroups', 'RDS', Promise.resolve(result), true, mock)
  },
  describeDBProxyTargetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBProxyTargetGroups', 'RDS', Promise.resolve(result), false, mock)
  },
  describeDBProxyTargetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBProxyTargetGroups', 'RDS', Promise.reject(result), true, mock)
  },
  describeDBProxyTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBProxyTargets', 'RDS', Promise.resolve(result), true, mock)
  },
  describeDBProxyTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBProxyTargets', 'RDS', Promise.resolve(result), false, mock)
  },
  describeDBProxyTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBProxyTargets', 'RDS', Promise.reject(result), true, mock)
  },
  describeDBSecurityGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBSecurityGroups', 'RDS', Promise.resolve(result), true, mock)
  },
  describeDBSecurityGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBSecurityGroups', 'RDS', Promise.resolve(result), false, mock)
  },
  describeDBSecurityGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBSecurityGroups', 'RDS', Promise.reject(result), true, mock)
  },
  describeDBSnapshotAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBSnapshotAttributes', 'RDS', Promise.resolve(result), true, mock)
  },
  describeDBSnapshotAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBSnapshotAttributes', 'RDS', Promise.resolve(result), false, mock)
  },
  describeDBSnapshotAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBSnapshotAttributes', 'RDS', Promise.reject(result), true, mock)
  },
  describeDBSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBSnapshots', 'RDS', Promise.resolve(result), true, mock)
  },
  describeDBSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBSnapshots', 'RDS', Promise.resolve(result), false, mock)
  },
  describeDBSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBSnapshots', 'RDS', Promise.reject(result), true, mock)
  },
  describeDBSubnetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBSubnetGroups', 'RDS', Promise.resolve(result), true, mock)
  },
  describeDBSubnetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBSubnetGroups', 'RDS', Promise.resolve(result), false, mock)
  },
  describeDBSubnetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeDBSubnetGroups', 'RDS', Promise.reject(result), true, mock)
  },
  describeEngineDefaultClusterParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeEngineDefaultClusterParameters', 'RDS', Promise.resolve(result), true, mock)
  },
  describeEngineDefaultClusterParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeEngineDefaultClusterParameters', 'RDS', Promise.resolve(result), false, mock)
  },
  describeEngineDefaultClusterParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeEngineDefaultClusterParameters', 'RDS', Promise.reject(result), true, mock)
  },
  describeEngineDefaultParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeEngineDefaultParameters', 'RDS', Promise.resolve(result), true, mock)
  },
  describeEngineDefaultParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeEngineDefaultParameters', 'RDS', Promise.resolve(result), false, mock)
  },
  describeEngineDefaultParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeEngineDefaultParameters', 'RDS', Promise.reject(result), true, mock)
  },
  describeEventCategories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeEventCategories', 'RDS', Promise.resolve(result), true, mock)
  },
  describeEventCategoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeEventCategories', 'RDS', Promise.resolve(result), false, mock)
  },
  describeEventCategoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeEventCategories', 'RDS', Promise.reject(result), true, mock)
  },
  describeEventSubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeEventSubscriptions', 'RDS', Promise.resolve(result), true, mock)
  },
  describeEventSubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeEventSubscriptions', 'RDS', Promise.resolve(result), false, mock)
  },
  describeEventSubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeEventSubscriptions', 'RDS', Promise.reject(result), true, mock)
  },
  describeEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeEvents', 'RDS', Promise.resolve(result), true, mock)
  },
  describeEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeEvents', 'RDS', Promise.resolve(result), false, mock)
  },
  describeEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeEvents', 'RDS', Promise.reject(result), true, mock)
  },
  describeExportTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeExportTasks', 'RDS', Promise.resolve(result), true, mock)
  },
  describeExportTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeExportTasks', 'RDS', Promise.resolve(result), false, mock)
  },
  describeExportTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeExportTasks', 'RDS', Promise.reject(result), true, mock)
  },
  describeGlobalClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeGlobalClusters', 'RDS', Promise.resolve(result), true, mock)
  },
  describeGlobalClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeGlobalClusters', 'RDS', Promise.resolve(result), false, mock)
  },
  describeGlobalClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeGlobalClusters', 'RDS', Promise.reject(result), true, mock)
  },
  describeInstallationMedia: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeInstallationMedia', 'RDS', Promise.resolve(result), true, mock)
  },
  describeInstallationMediaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeInstallationMedia', 'RDS', Promise.resolve(result), false, mock)
  },
  describeInstallationMediaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeInstallationMedia', 'RDS', Promise.reject(result), true, mock)
  },
  describeOptionGroupOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeOptionGroupOptions', 'RDS', Promise.resolve(result), true, mock)
  },
  describeOptionGroupOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeOptionGroupOptions', 'RDS', Promise.resolve(result), false, mock)
  },
  describeOptionGroupOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeOptionGroupOptions', 'RDS', Promise.reject(result), true, mock)
  },
  describeOptionGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeOptionGroups', 'RDS', Promise.resolve(result), true, mock)
  },
  describeOptionGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeOptionGroups', 'RDS', Promise.resolve(result), false, mock)
  },
  describeOptionGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeOptionGroups', 'RDS', Promise.reject(result), true, mock)
  },
  describeOrderableDBInstanceOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeOrderableDBInstanceOptions', 'RDS', Promise.resolve(result), true, mock)
  },
  describeOrderableDBInstanceOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeOrderableDBInstanceOptions', 'RDS', Promise.resolve(result), false, mock)
  },
  describeOrderableDBInstanceOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeOrderableDBInstanceOptions', 'RDS', Promise.reject(result), true, mock)
  },
  describePendingMaintenanceActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describePendingMaintenanceActions', 'RDS', Promise.resolve(result), true, mock)
  },
  describePendingMaintenanceActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describePendingMaintenanceActions', 'RDS', Promise.resolve(result), false, mock)
  },
  describePendingMaintenanceActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describePendingMaintenanceActions', 'RDS', Promise.reject(result), true, mock)
  },
  describeReservedDBInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeReservedDBInstances', 'RDS', Promise.resolve(result), true, mock)
  },
  describeReservedDBInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeReservedDBInstances', 'RDS', Promise.resolve(result), false, mock)
  },
  describeReservedDBInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeReservedDBInstances', 'RDS', Promise.reject(result), true, mock)
  },
  describeReservedDBInstancesOfferings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeReservedDBInstancesOfferings', 'RDS', Promise.resolve(result), true, mock)
  },
  describeReservedDBInstancesOfferingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeReservedDBInstancesOfferings', 'RDS', Promise.resolve(result), false, mock)
  },
  describeReservedDBInstancesOfferingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeReservedDBInstancesOfferings', 'RDS', Promise.reject(result), true, mock)
  },
  describeSourceRegions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeSourceRegions', 'RDS', Promise.resolve(result), true, mock)
  },
  describeSourceRegionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeSourceRegions', 'RDS', Promise.resolve(result), false, mock)
  },
  describeSourceRegionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeSourceRegions', 'RDS', Promise.reject(result), true, mock)
  },
  describeValidDBInstanceModifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeValidDBInstanceModifications', 'RDS', Promise.resolve(result), true, mock)
  },
  describeValidDBInstanceModificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeValidDBInstanceModifications', 'RDS', Promise.resolve(result), false, mock)
  },
  describeValidDBInstanceModificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'describeValidDBInstanceModifications', 'RDS', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'destroy', 'RDS', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'destroy', 'RDS', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'destroy', 'RDS', Promise.reject(result), true, mock)
  },
  downloadDBLogFilePortion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'downloadDBLogFilePortion', 'RDS', Promise.resolve(result), true, mock)
  },
  downloadDBLogFilePortionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'downloadDBLogFilePortion', 'RDS', Promise.resolve(result), false, mock)
  },
  downloadDBLogFilePortionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'downloadDBLogFilePortion', 'RDS', Promise.reject(result), true, mock)
  },
  failoverDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'failoverDBCluster', 'RDS', Promise.resolve(result), true, mock)
  },
  failoverDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'failoverDBCluster', 'RDS', Promise.resolve(result), false, mock)
  },
  failoverDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'failoverDBCluster', 'RDS', Promise.reject(result), true, mock)
  },
  failoverGlobalCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'failoverGlobalCluster', 'RDS', Promise.resolve(result), true, mock)
  },
  failoverGlobalClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'failoverGlobalCluster', 'RDS', Promise.resolve(result), false, mock)
  },
  failoverGlobalClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'failoverGlobalCluster', 'RDS', Promise.reject(result), true, mock)
  },
  importInstallationMedia: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'importInstallationMedia', 'RDS', Promise.resolve(result), true, mock)
  },
  importInstallationMediaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'importInstallationMedia', 'RDS', Promise.resolve(result), false, mock)
  },
  importInstallationMediaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'importInstallationMedia', 'RDS', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'listTagsForResource', 'RDS', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'listTagsForResource', 'RDS', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'listTagsForResource', 'RDS', Promise.reject(result), true, mock)
  },
  modifyCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyCertificates', 'RDS', Promise.resolve(result), true, mock)
  },
  modifyCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyCertificates', 'RDS', Promise.resolve(result), false, mock)
  },
  modifyCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyCertificates', 'RDS', Promise.reject(result), true, mock)
  },
  modifyCurrentDBClusterCapacity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyCurrentDBClusterCapacity', 'RDS', Promise.resolve(result), true, mock)
  },
  modifyCurrentDBClusterCapacityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyCurrentDBClusterCapacity', 'RDS', Promise.resolve(result), false, mock)
  },
  modifyCurrentDBClusterCapacityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyCurrentDBClusterCapacity', 'RDS', Promise.reject(result), true, mock)
  },
  modifyCustomDBEngineVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyCustomDBEngineVersion', 'RDS', Promise.resolve(result), true, mock)
  },
  modifyCustomDBEngineVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyCustomDBEngineVersion', 'RDS', Promise.resolve(result), false, mock)
  },
  modifyCustomDBEngineVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyCustomDBEngineVersion', 'RDS', Promise.reject(result), true, mock)
  },
  modifyDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBCluster', 'RDS', Promise.resolve(result), true, mock)
  },
  modifyDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBCluster', 'RDS', Promise.resolve(result), false, mock)
  },
  modifyDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBCluster', 'RDS', Promise.reject(result), true, mock)
  },
  modifyDBClusterEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBClusterEndpoint', 'RDS', Promise.resolve(result), true, mock)
  },
  modifyDBClusterEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBClusterEndpoint', 'RDS', Promise.resolve(result), false, mock)
  },
  modifyDBClusterEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBClusterEndpoint', 'RDS', Promise.reject(result), true, mock)
  },
  modifyDBClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBClusterParameterGroup', 'RDS', Promise.resolve(result), true, mock)
  },
  modifyDBClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBClusterParameterGroup', 'RDS', Promise.resolve(result), false, mock)
  },
  modifyDBClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBClusterParameterGroup', 'RDS', Promise.reject(result), true, mock)
  },
  modifyDBClusterSnapshotAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBClusterSnapshotAttribute', 'RDS', Promise.resolve(result), true, mock)
  },
  modifyDBClusterSnapshotAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBClusterSnapshotAttribute', 'RDS', Promise.resolve(result), false, mock)
  },
  modifyDBClusterSnapshotAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBClusterSnapshotAttribute', 'RDS', Promise.reject(result), true, mock)
  },
  modifyDBInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBInstance', 'RDS', Promise.resolve(result), true, mock)
  },
  modifyDBInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBInstance', 'RDS', Promise.resolve(result), false, mock)
  },
  modifyDBInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBInstance', 'RDS', Promise.reject(result), true, mock)
  },
  modifyDBParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBParameterGroup', 'RDS', Promise.resolve(result), true, mock)
  },
  modifyDBParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBParameterGroup', 'RDS', Promise.resolve(result), false, mock)
  },
  modifyDBParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBParameterGroup', 'RDS', Promise.reject(result), true, mock)
  },
  modifyDBProxy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBProxy', 'RDS', Promise.resolve(result), true, mock)
  },
  modifyDBProxyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBProxy', 'RDS', Promise.resolve(result), false, mock)
  },
  modifyDBProxyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBProxy', 'RDS', Promise.reject(result), true, mock)
  },
  modifyDBProxyEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBProxyEndpoint', 'RDS', Promise.resolve(result), true, mock)
  },
  modifyDBProxyEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBProxyEndpoint', 'RDS', Promise.resolve(result), false, mock)
  },
  modifyDBProxyEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBProxyEndpoint', 'RDS', Promise.reject(result), true, mock)
  },
  modifyDBProxyTargetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBProxyTargetGroup', 'RDS', Promise.resolve(result), true, mock)
  },
  modifyDBProxyTargetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBProxyTargetGroup', 'RDS', Promise.resolve(result), false, mock)
  },
  modifyDBProxyTargetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBProxyTargetGroup', 'RDS', Promise.reject(result), true, mock)
  },
  modifyDBSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBSnapshot', 'RDS', Promise.resolve(result), true, mock)
  },
  modifyDBSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBSnapshot', 'RDS', Promise.resolve(result), false, mock)
  },
  modifyDBSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBSnapshot', 'RDS', Promise.reject(result), true, mock)
  },
  modifyDBSnapshotAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBSnapshotAttribute', 'RDS', Promise.resolve(result), true, mock)
  },
  modifyDBSnapshotAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBSnapshotAttribute', 'RDS', Promise.resolve(result), false, mock)
  },
  modifyDBSnapshotAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBSnapshotAttribute', 'RDS', Promise.reject(result), true, mock)
  },
  modifyDBSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBSubnetGroup', 'RDS', Promise.resolve(result), true, mock)
  },
  modifyDBSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBSubnetGroup', 'RDS', Promise.resolve(result), false, mock)
  },
  modifyDBSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyDBSubnetGroup', 'RDS', Promise.reject(result), true, mock)
  },
  modifyEventSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyEventSubscription', 'RDS', Promise.resolve(result), true, mock)
  },
  modifyEventSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyEventSubscription', 'RDS', Promise.resolve(result), false, mock)
  },
  modifyEventSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyEventSubscription', 'RDS', Promise.reject(result), true, mock)
  },
  modifyGlobalCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyGlobalCluster', 'RDS', Promise.resolve(result), true, mock)
  },
  modifyGlobalClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyGlobalCluster', 'RDS', Promise.resolve(result), false, mock)
  },
  modifyGlobalClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyGlobalCluster', 'RDS', Promise.reject(result), true, mock)
  },
  modifyOptionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyOptionGroup', 'RDS', Promise.resolve(result), true, mock)
  },
  modifyOptionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyOptionGroup', 'RDS', Promise.resolve(result), false, mock)
  },
  modifyOptionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'modifyOptionGroup', 'RDS', Promise.reject(result), true, mock)
  },
  promoteReadReplica: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'promoteReadReplica', 'RDS', Promise.resolve(result), true, mock)
  },
  promoteReadReplicaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'promoteReadReplica', 'RDS', Promise.resolve(result), false, mock)
  },
  promoteReadReplicaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'promoteReadReplica', 'RDS', Promise.reject(result), true, mock)
  },
  promoteReadReplicaDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'promoteReadReplicaDBCluster', 'RDS', Promise.resolve(result), true, mock)
  },
  promoteReadReplicaDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'promoteReadReplicaDBCluster', 'RDS', Promise.resolve(result), false, mock)
  },
  promoteReadReplicaDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'promoteReadReplicaDBCluster', 'RDS', Promise.reject(result), true, mock)
  },
  purchaseReservedDBInstancesOffering: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'purchaseReservedDBInstancesOffering', 'RDS', Promise.resolve(result), true, mock)
  },
  purchaseReservedDBInstancesOfferingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'purchaseReservedDBInstancesOffering', 'RDS', Promise.resolve(result), false, mock)
  },
  purchaseReservedDBInstancesOfferingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'purchaseReservedDBInstancesOffering', 'RDS', Promise.reject(result), true, mock)
  },
  rebootDBInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'rebootDBInstance', 'RDS', Promise.resolve(result), true, mock)
  },
  rebootDBInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'rebootDBInstance', 'RDS', Promise.resolve(result), false, mock)
  },
  rebootDBInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'rebootDBInstance', 'RDS', Promise.reject(result), true, mock)
  },
  registerDBProxyTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'registerDBProxyTargets', 'RDS', Promise.resolve(result), true, mock)
  },
  registerDBProxyTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'registerDBProxyTargets', 'RDS', Promise.resolve(result), false, mock)
  },
  registerDBProxyTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'registerDBProxyTargets', 'RDS', Promise.reject(result), true, mock)
  },
  removeFromGlobalCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'removeFromGlobalCluster', 'RDS', Promise.resolve(result), true, mock)
  },
  removeFromGlobalClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'removeFromGlobalCluster', 'RDS', Promise.resolve(result), false, mock)
  },
  removeFromGlobalClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'removeFromGlobalCluster', 'RDS', Promise.reject(result), true, mock)
  },
  removeRoleFromDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'removeRoleFromDBCluster', 'RDS', Promise.resolve(result), true, mock)
  },
  removeRoleFromDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'removeRoleFromDBCluster', 'RDS', Promise.resolve(result), false, mock)
  },
  removeRoleFromDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'removeRoleFromDBCluster', 'RDS', Promise.reject(result), true, mock)
  },
  removeRoleFromDBInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'removeRoleFromDBInstance', 'RDS', Promise.resolve(result), true, mock)
  },
  removeRoleFromDBInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'removeRoleFromDBInstance', 'RDS', Promise.resolve(result), false, mock)
  },
  removeRoleFromDBInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'removeRoleFromDBInstance', 'RDS', Promise.reject(result), true, mock)
  },
  removeSourceIdentifierFromSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'removeSourceIdentifierFromSubscription', 'RDS', Promise.resolve(result), true, mock)
  },
  removeSourceIdentifierFromSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'removeSourceIdentifierFromSubscription', 'RDS', Promise.resolve(result), false, mock)
  },
  removeSourceIdentifierFromSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'removeSourceIdentifierFromSubscription', 'RDS', Promise.reject(result), true, mock)
  },
  removeTagsFromResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'removeTagsFromResource', 'RDS', Promise.resolve(result), true, mock)
  },
  removeTagsFromResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'removeTagsFromResource', 'RDS', Promise.resolve(result), false, mock)
  },
  removeTagsFromResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'removeTagsFromResource', 'RDS', Promise.reject(result), true, mock)
  },
  resetDBClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'resetDBClusterParameterGroup', 'RDS', Promise.resolve(result), true, mock)
  },
  resetDBClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'resetDBClusterParameterGroup', 'RDS', Promise.resolve(result), false, mock)
  },
  resetDBClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'resetDBClusterParameterGroup', 'RDS', Promise.reject(result), true, mock)
  },
  resetDBParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'resetDBParameterGroup', 'RDS', Promise.resolve(result), true, mock)
  },
  resetDBParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'resetDBParameterGroup', 'RDS', Promise.resolve(result), false, mock)
  },
  resetDBParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'resetDBParameterGroup', 'RDS', Promise.reject(result), true, mock)
  },
  restoreDBClusterFromS3: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'restoreDBClusterFromS3', 'RDS', Promise.resolve(result), true, mock)
  },
  restoreDBClusterFromS3All: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'restoreDBClusterFromS3', 'RDS', Promise.resolve(result), false, mock)
  },
  restoreDBClusterFromS3Throw: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'restoreDBClusterFromS3', 'RDS', Promise.reject(result), true, mock)
  },
  restoreDBClusterFromSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'restoreDBClusterFromSnapshot', 'RDS', Promise.resolve(result), true, mock)
  },
  restoreDBClusterFromSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'restoreDBClusterFromSnapshot', 'RDS', Promise.resolve(result), false, mock)
  },
  restoreDBClusterFromSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'restoreDBClusterFromSnapshot', 'RDS', Promise.reject(result), true, mock)
  },
  restoreDBClusterToPointInTime: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'restoreDBClusterToPointInTime', 'RDS', Promise.resolve(result), true, mock)
  },
  restoreDBClusterToPointInTimeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'restoreDBClusterToPointInTime', 'RDS', Promise.resolve(result), false, mock)
  },
  restoreDBClusterToPointInTimeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'restoreDBClusterToPointInTime', 'RDS', Promise.reject(result), true, mock)
  },
  restoreDBInstanceFromDBSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'restoreDBInstanceFromDBSnapshot', 'RDS', Promise.resolve(result), true, mock)
  },
  restoreDBInstanceFromDBSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'restoreDBInstanceFromDBSnapshot', 'RDS', Promise.resolve(result), false, mock)
  },
  restoreDBInstanceFromDBSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'restoreDBInstanceFromDBSnapshot', 'RDS', Promise.reject(result), true, mock)
  },
  restoreDBInstanceFromS3: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'restoreDBInstanceFromS3', 'RDS', Promise.resolve(result), true, mock)
  },
  restoreDBInstanceFromS3All: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'restoreDBInstanceFromS3', 'RDS', Promise.resolve(result), false, mock)
  },
  restoreDBInstanceFromS3Throw: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'restoreDBInstanceFromS3', 'RDS', Promise.reject(result), true, mock)
  },
  restoreDBInstanceToPointInTime: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'restoreDBInstanceToPointInTime', 'RDS', Promise.resolve(result), true, mock)
  },
  restoreDBInstanceToPointInTimeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'restoreDBInstanceToPointInTime', 'RDS', Promise.resolve(result), false, mock)
  },
  restoreDBInstanceToPointInTimeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'restoreDBInstanceToPointInTime', 'RDS', Promise.reject(result), true, mock)
  },
  revokeDBSecurityGroupIngress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'revokeDBSecurityGroupIngress', 'RDS', Promise.resolve(result), true, mock)
  },
  revokeDBSecurityGroupIngressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'revokeDBSecurityGroupIngress', 'RDS', Promise.resolve(result), false, mock)
  },
  revokeDBSecurityGroupIngressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'revokeDBSecurityGroupIngress', 'RDS', Promise.reject(result), true, mock)
  },
  startActivityStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'startActivityStream', 'RDS', Promise.resolve(result), true, mock)
  },
  startActivityStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'startActivityStream', 'RDS', Promise.resolve(result), false, mock)
  },
  startActivityStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'startActivityStream', 'RDS', Promise.reject(result), true, mock)
  },
  startDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'startDBCluster', 'RDS', Promise.resolve(result), true, mock)
  },
  startDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'startDBCluster', 'RDS', Promise.resolve(result), false, mock)
  },
  startDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'startDBCluster', 'RDS', Promise.reject(result), true, mock)
  },
  startDBInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'startDBInstance', 'RDS', Promise.resolve(result), true, mock)
  },
  startDBInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'startDBInstance', 'RDS', Promise.resolve(result), false, mock)
  },
  startDBInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'startDBInstance', 'RDS', Promise.reject(result), true, mock)
  },
  startDBInstanceAutomatedBackupsReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'startDBInstanceAutomatedBackupsReplication', 'RDS', Promise.resolve(result), true, mock)
  },
  startDBInstanceAutomatedBackupsReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'startDBInstanceAutomatedBackupsReplication', 'RDS', Promise.resolve(result), false, mock)
  },
  startDBInstanceAutomatedBackupsReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'startDBInstanceAutomatedBackupsReplication', 'RDS', Promise.reject(result), true, mock)
  },
  startExportTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'startExportTask', 'RDS', Promise.resolve(result), true, mock)
  },
  startExportTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'startExportTask', 'RDS', Promise.resolve(result), false, mock)
  },
  startExportTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'startExportTask', 'RDS', Promise.reject(result), true, mock)
  },
  stopActivityStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'stopActivityStream', 'RDS', Promise.resolve(result), true, mock)
  },
  stopActivityStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'stopActivityStream', 'RDS', Promise.resolve(result), false, mock)
  },
  stopActivityStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'stopActivityStream', 'RDS', Promise.reject(result), true, mock)
  },
  stopDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'stopDBCluster', 'RDS', Promise.resolve(result), true, mock)
  },
  stopDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'stopDBCluster', 'RDS', Promise.resolve(result), false, mock)
  },
  stopDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'stopDBCluster', 'RDS', Promise.reject(result), true, mock)
  },
  stopDBInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'stopDBInstance', 'RDS', Promise.resolve(result), true, mock)
  },
  stopDBInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'stopDBInstance', 'RDS', Promise.resolve(result), false, mock)
  },
  stopDBInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'stopDBInstance', 'RDS', Promise.reject(result), true, mock)
  },
  stopDBInstanceAutomatedBackupsReplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'stopDBInstanceAutomatedBackupsReplication', 'RDS', Promise.resolve(result), true, mock)
  },
  stopDBInstanceAutomatedBackupsReplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'stopDBInstanceAutomatedBackupsReplication', 'RDS', Promise.resolve(result), false, mock)
  },
  stopDBInstanceAutomatedBackupsReplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'stopDBInstanceAutomatedBackupsReplication', 'RDS', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'send', 'RDSClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'send', 'RDSClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-rds', 'send', 'RDSClient', Promise.reject(result), true, mock)
  }
}