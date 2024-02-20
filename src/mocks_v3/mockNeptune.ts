
/**
* @description mocks_v3:mockNeptune module is mocks for AWS-SDK V3
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
export const mockNeptune = {
  addRoleToDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'addRoleToDBCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  addRoleToDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'addRoleToDBCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  addRoleToDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'addRoleToDBCluster', 'Neptune', Promise.reject(result), true, mock)
  },
  addSourceIdentifierToSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'addSourceIdentifierToSubscription', 'Neptune', Promise.resolve(result), true, mock)
  },
  addSourceIdentifierToSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'addSourceIdentifierToSubscription', 'Neptune', Promise.resolve(result), false, mock)
  },
  addSourceIdentifierToSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'addSourceIdentifierToSubscription', 'Neptune', Promise.reject(result), true, mock)
  },
  addTagsToResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'addTagsToResource', 'Neptune', Promise.resolve(result), true, mock)
  },
  addTagsToResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'addTagsToResource', 'Neptune', Promise.resolve(result), false, mock)
  },
  addTagsToResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'addTagsToResource', 'Neptune', Promise.reject(result), true, mock)
  },
  applyPendingMaintenanceAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'applyPendingMaintenanceAction', 'Neptune', Promise.resolve(result), true, mock)
  },
  applyPendingMaintenanceActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'applyPendingMaintenanceAction', 'Neptune', Promise.resolve(result), false, mock)
  },
  applyPendingMaintenanceActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'applyPendingMaintenanceAction', 'Neptune', Promise.reject(result), true, mock)
  },
  copyDBClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'copyDBClusterParameterGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  copyDBClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'copyDBClusterParameterGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  copyDBClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'copyDBClusterParameterGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  copyDBClusterSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'copyDBClusterSnapshot', 'Neptune', Promise.resolve(result), true, mock)
  },
  copyDBClusterSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'copyDBClusterSnapshot', 'Neptune', Promise.resolve(result), false, mock)
  },
  copyDBClusterSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'copyDBClusterSnapshot', 'Neptune', Promise.reject(result), true, mock)
  },
  copyDBParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'copyDBParameterGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  copyDBParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'copyDBParameterGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  copyDBParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'copyDBParameterGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  createDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createDBCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  createDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createDBCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  createDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createDBCluster', 'Neptune', Promise.reject(result), true, mock)
  },
  createDBClusterEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createDBClusterEndpoint', 'Neptune', Promise.resolve(result), true, mock)
  },
  createDBClusterEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createDBClusterEndpoint', 'Neptune', Promise.resolve(result), false, mock)
  },
  createDBClusterEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createDBClusterEndpoint', 'Neptune', Promise.reject(result), true, mock)
  },
  createDBClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createDBClusterParameterGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  createDBClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createDBClusterParameterGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  createDBClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createDBClusterParameterGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  createDBClusterSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createDBClusterSnapshot', 'Neptune', Promise.resolve(result), true, mock)
  },
  createDBClusterSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createDBClusterSnapshot', 'Neptune', Promise.resolve(result), false, mock)
  },
  createDBClusterSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createDBClusterSnapshot', 'Neptune', Promise.reject(result), true, mock)
  },
  createDBInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createDBInstance', 'Neptune', Promise.resolve(result), true, mock)
  },
  createDBInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createDBInstance', 'Neptune', Promise.resolve(result), false, mock)
  },
  createDBInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createDBInstance', 'Neptune', Promise.reject(result), true, mock)
  },
  createDBParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createDBParameterGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  createDBParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createDBParameterGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  createDBParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createDBParameterGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  createDBSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createDBSubnetGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  createDBSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createDBSubnetGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  createDBSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createDBSubnetGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  createEventSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createEventSubscription', 'Neptune', Promise.resolve(result), true, mock)
  },
  createEventSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createEventSubscription', 'Neptune', Promise.resolve(result), false, mock)
  },
  createEventSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createEventSubscription', 'Neptune', Promise.reject(result), true, mock)
  },
  createGlobalCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createGlobalCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  createGlobalClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createGlobalCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  createGlobalClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'createGlobalCluster', 'Neptune', Promise.reject(result), true, mock)
  },
  deleteDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteDBCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  deleteDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteDBCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  deleteDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteDBCluster', 'Neptune', Promise.reject(result), true, mock)
  },
  deleteDBClusterEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteDBClusterEndpoint', 'Neptune', Promise.resolve(result), true, mock)
  },
  deleteDBClusterEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteDBClusterEndpoint', 'Neptune', Promise.resolve(result), false, mock)
  },
  deleteDBClusterEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteDBClusterEndpoint', 'Neptune', Promise.reject(result), true, mock)
  },
  deleteDBClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteDBClusterParameterGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  deleteDBClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteDBClusterParameterGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  deleteDBClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteDBClusterParameterGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  deleteDBClusterSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteDBClusterSnapshot', 'Neptune', Promise.resolve(result), true, mock)
  },
  deleteDBClusterSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteDBClusterSnapshot', 'Neptune', Promise.resolve(result), false, mock)
  },
  deleteDBClusterSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteDBClusterSnapshot', 'Neptune', Promise.reject(result), true, mock)
  },
  deleteDBInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteDBInstance', 'Neptune', Promise.resolve(result), true, mock)
  },
  deleteDBInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteDBInstance', 'Neptune', Promise.resolve(result), false, mock)
  },
  deleteDBInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteDBInstance', 'Neptune', Promise.reject(result), true, mock)
  },
  deleteDBParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteDBParameterGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  deleteDBParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteDBParameterGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  deleteDBParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteDBParameterGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  deleteDBSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteDBSubnetGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  deleteDBSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteDBSubnetGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  deleteDBSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteDBSubnetGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  deleteEventSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteEventSubscription', 'Neptune', Promise.resolve(result), true, mock)
  },
  deleteEventSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteEventSubscription', 'Neptune', Promise.resolve(result), false, mock)
  },
  deleteEventSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteEventSubscription', 'Neptune', Promise.reject(result), true, mock)
  },
  deleteGlobalCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteGlobalCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  deleteGlobalClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteGlobalCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  deleteGlobalClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'deleteGlobalCluster', 'Neptune', Promise.reject(result), true, mock)
  },
  describeDBClusterEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBClusterEndpoints', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeDBClusterEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBClusterEndpoints', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeDBClusterEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBClusterEndpoints', 'Neptune', Promise.reject(result), true, mock)
  },
  describeDBClusterParameterGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBClusterParameterGroups', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeDBClusterParameterGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBClusterParameterGroups', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeDBClusterParameterGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBClusterParameterGroups', 'Neptune', Promise.reject(result), true, mock)
  },
  describeDBClusterParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBClusterParameters', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeDBClusterParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBClusterParameters', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeDBClusterParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBClusterParameters', 'Neptune', Promise.reject(result), true, mock)
  },
  describeDBClusterSnapshotAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBClusterSnapshotAttributes', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeDBClusterSnapshotAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBClusterSnapshotAttributes', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeDBClusterSnapshotAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBClusterSnapshotAttributes', 'Neptune', Promise.reject(result), true, mock)
  },
  describeDBClusterSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBClusterSnapshots', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeDBClusterSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBClusterSnapshots', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeDBClusterSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBClusterSnapshots', 'Neptune', Promise.reject(result), true, mock)
  },
  describeDBClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBClusters', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeDBClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBClusters', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeDBClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBClusters', 'Neptune', Promise.reject(result), true, mock)
  },
  describeDBEngineVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBEngineVersions', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeDBEngineVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBEngineVersions', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeDBEngineVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBEngineVersions', 'Neptune', Promise.reject(result), true, mock)
  },
  describeDBInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBInstances', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeDBInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBInstances', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeDBInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBInstances', 'Neptune', Promise.reject(result), true, mock)
  },
  describeDBParameterGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBParameterGroups', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeDBParameterGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBParameterGroups', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeDBParameterGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBParameterGroups', 'Neptune', Promise.reject(result), true, mock)
  },
  describeDBParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBParameters', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeDBParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBParameters', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeDBParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBParameters', 'Neptune', Promise.reject(result), true, mock)
  },
  describeDBSubnetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBSubnetGroups', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeDBSubnetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBSubnetGroups', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeDBSubnetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeDBSubnetGroups', 'Neptune', Promise.reject(result), true, mock)
  },
  describeEngineDefaultClusterParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeEngineDefaultClusterParameters', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeEngineDefaultClusterParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeEngineDefaultClusterParameters', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeEngineDefaultClusterParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeEngineDefaultClusterParameters', 'Neptune', Promise.reject(result), true, mock)
  },
  describeEngineDefaultParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeEngineDefaultParameters', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeEngineDefaultParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeEngineDefaultParameters', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeEngineDefaultParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeEngineDefaultParameters', 'Neptune', Promise.reject(result), true, mock)
  },
  describeEventCategories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeEventCategories', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeEventCategoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeEventCategories', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeEventCategoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeEventCategories', 'Neptune', Promise.reject(result), true, mock)
  },
  describeEventSubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeEventSubscriptions', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeEventSubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeEventSubscriptions', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeEventSubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeEventSubscriptions', 'Neptune', Promise.reject(result), true, mock)
  },
  describeEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeEvents', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeEvents', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeEvents', 'Neptune', Promise.reject(result), true, mock)
  },
  describeGlobalClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeGlobalClusters', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeGlobalClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeGlobalClusters', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeGlobalClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeGlobalClusters', 'Neptune', Promise.reject(result), true, mock)
  },
  describeOrderableDBInstanceOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeOrderableDBInstanceOptions', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeOrderableDBInstanceOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeOrderableDBInstanceOptions', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeOrderableDBInstanceOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeOrderableDBInstanceOptions', 'Neptune', Promise.reject(result), true, mock)
  },
  describePendingMaintenanceActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describePendingMaintenanceActions', 'Neptune', Promise.resolve(result), true, mock)
  },
  describePendingMaintenanceActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describePendingMaintenanceActions', 'Neptune', Promise.resolve(result), false, mock)
  },
  describePendingMaintenanceActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describePendingMaintenanceActions', 'Neptune', Promise.reject(result), true, mock)
  },
  describeValidDBInstanceModifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeValidDBInstanceModifications', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeValidDBInstanceModificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeValidDBInstanceModifications', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeValidDBInstanceModificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'describeValidDBInstanceModifications', 'Neptune', Promise.reject(result), true, mock)
  },
  failoverDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'failoverDBCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  failoverDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'failoverDBCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  failoverDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'failoverDBCluster', 'Neptune', Promise.reject(result), true, mock)
  },
  failoverGlobalCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'failoverGlobalCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  failoverGlobalClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'failoverGlobalCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  failoverGlobalClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'failoverGlobalCluster', 'Neptune', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'listTagsForResource', 'Neptune', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'listTagsForResource', 'Neptune', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'listTagsForResource', 'Neptune', Promise.reject(result), true, mock)
  },
  modifyDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyDBCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  modifyDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyDBCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  modifyDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyDBCluster', 'Neptune', Promise.reject(result), true, mock)
  },
  modifyDBClusterEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyDBClusterEndpoint', 'Neptune', Promise.resolve(result), true, mock)
  },
  modifyDBClusterEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyDBClusterEndpoint', 'Neptune', Promise.resolve(result), false, mock)
  },
  modifyDBClusterEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyDBClusterEndpoint', 'Neptune', Promise.reject(result), true, mock)
  },
  modifyDBClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyDBClusterParameterGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  modifyDBClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyDBClusterParameterGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  modifyDBClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyDBClusterParameterGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  modifyDBClusterSnapshotAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyDBClusterSnapshotAttribute', 'Neptune', Promise.resolve(result), true, mock)
  },
  modifyDBClusterSnapshotAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyDBClusterSnapshotAttribute', 'Neptune', Promise.resolve(result), false, mock)
  },
  modifyDBClusterSnapshotAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyDBClusterSnapshotAttribute', 'Neptune', Promise.reject(result), true, mock)
  },
  modifyDBInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyDBInstance', 'Neptune', Promise.resolve(result), true, mock)
  },
  modifyDBInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyDBInstance', 'Neptune', Promise.resolve(result), false, mock)
  },
  modifyDBInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyDBInstance', 'Neptune', Promise.reject(result), true, mock)
  },
  modifyDBParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyDBParameterGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  modifyDBParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyDBParameterGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  modifyDBParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyDBParameterGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  modifyDBSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyDBSubnetGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  modifyDBSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyDBSubnetGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  modifyDBSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyDBSubnetGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  modifyEventSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyEventSubscription', 'Neptune', Promise.resolve(result), true, mock)
  },
  modifyEventSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyEventSubscription', 'Neptune', Promise.resolve(result), false, mock)
  },
  modifyEventSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyEventSubscription', 'Neptune', Promise.reject(result), true, mock)
  },
  modifyGlobalCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyGlobalCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  modifyGlobalClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyGlobalCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  modifyGlobalClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'modifyGlobalCluster', 'Neptune', Promise.reject(result), true, mock)
  },
  promoteReadReplicaDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'promoteReadReplicaDBCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  promoteReadReplicaDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'promoteReadReplicaDBCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  promoteReadReplicaDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'promoteReadReplicaDBCluster', 'Neptune', Promise.reject(result), true, mock)
  },
  rebootDBInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'rebootDBInstance', 'Neptune', Promise.resolve(result), true, mock)
  },
  rebootDBInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'rebootDBInstance', 'Neptune', Promise.resolve(result), false, mock)
  },
  rebootDBInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'rebootDBInstance', 'Neptune', Promise.reject(result), true, mock)
  },
  removeFromGlobalCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'removeFromGlobalCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  removeFromGlobalClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'removeFromGlobalCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  removeFromGlobalClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'removeFromGlobalCluster', 'Neptune', Promise.reject(result), true, mock)
  },
  removeRoleFromDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'removeRoleFromDBCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  removeRoleFromDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'removeRoleFromDBCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  removeRoleFromDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'removeRoleFromDBCluster', 'Neptune', Promise.reject(result), true, mock)
  },
  removeSourceIdentifierFromSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'removeSourceIdentifierFromSubscription', 'Neptune', Promise.resolve(result), true, mock)
  },
  removeSourceIdentifierFromSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'removeSourceIdentifierFromSubscription', 'Neptune', Promise.resolve(result), false, mock)
  },
  removeSourceIdentifierFromSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'removeSourceIdentifierFromSubscription', 'Neptune', Promise.reject(result), true, mock)
  },
  removeTagsFromResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'removeTagsFromResource', 'Neptune', Promise.resolve(result), true, mock)
  },
  removeTagsFromResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'removeTagsFromResource', 'Neptune', Promise.resolve(result), false, mock)
  },
  removeTagsFromResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'removeTagsFromResource', 'Neptune', Promise.reject(result), true, mock)
  },
  resetDBClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'resetDBClusterParameterGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  resetDBClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'resetDBClusterParameterGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  resetDBClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'resetDBClusterParameterGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  resetDBParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'resetDBParameterGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  resetDBParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'resetDBParameterGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  resetDBParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'resetDBParameterGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  restoreDBClusterFromSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'restoreDBClusterFromSnapshot', 'Neptune', Promise.resolve(result), true, mock)
  },
  restoreDBClusterFromSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'restoreDBClusterFromSnapshot', 'Neptune', Promise.resolve(result), false, mock)
  },
  restoreDBClusterFromSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'restoreDBClusterFromSnapshot', 'Neptune', Promise.reject(result), true, mock)
  },
  restoreDBClusterToPointInTime: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'restoreDBClusterToPointInTime', 'Neptune', Promise.resolve(result), true, mock)
  },
  restoreDBClusterToPointInTimeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'restoreDBClusterToPointInTime', 'Neptune', Promise.resolve(result), false, mock)
  },
  restoreDBClusterToPointInTimeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'restoreDBClusterToPointInTime', 'Neptune', Promise.reject(result), true, mock)
  },
  startDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'startDBCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  startDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'startDBCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  startDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'startDBCluster', 'Neptune', Promise.reject(result), true, mock)
  },
  stopDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'stopDBCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  stopDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'stopDBCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  stopDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'stopDBCluster', 'Neptune', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'send', 'NeptuneClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'send', 'NeptuneClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-neptune', 'send', 'NeptuneClient', Promise.reject(result), true, mock)
  }
}
