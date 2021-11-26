
/**
* @description mocks_v3:mockElastiCache module is mocks for AWS-SDK V3
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

  export const mockElastiCache = {
  addTagsToResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'addTagsToResource', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  addTagsToResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'addTagsToResource', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  addTagsToResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'addTagsToResource', 'ElastiCache', Promise.reject(result), true, mock)
  },
  authorizeCacheSecurityGroupIngress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'authorizeCacheSecurityGroupIngress', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  authorizeCacheSecurityGroupIngressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'authorizeCacheSecurityGroupIngress', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  authorizeCacheSecurityGroupIngressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'authorizeCacheSecurityGroupIngress', 'ElastiCache', Promise.reject(result), true, mock)
  },
  batchApplyUpdateAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'batchApplyUpdateAction', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  batchApplyUpdateActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'batchApplyUpdateAction', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  batchApplyUpdateActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'batchApplyUpdateAction', 'ElastiCache', Promise.reject(result), true, mock)
  },
  batchStopUpdateAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'batchStopUpdateAction', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  batchStopUpdateActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'batchStopUpdateAction', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  batchStopUpdateActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'batchStopUpdateAction', 'ElastiCache', Promise.reject(result), true, mock)
  },
  completeMigration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'completeMigration', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  completeMigrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'completeMigration', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  completeMigrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'completeMigration', 'ElastiCache', Promise.reject(result), true, mock)
  },
  copySnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'copySnapshot', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  copySnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'copySnapshot', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  copySnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'copySnapshot', 'ElastiCache', Promise.reject(result), true, mock)
  },
  createCacheCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createCacheCluster', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  createCacheClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createCacheCluster', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  createCacheClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createCacheCluster', 'ElastiCache', Promise.reject(result), true, mock)
  },
  createCacheParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createCacheParameterGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  createCacheParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createCacheParameterGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  createCacheParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createCacheParameterGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  createCacheSecurityGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createCacheSecurityGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  createCacheSecurityGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createCacheSecurityGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  createCacheSecurityGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createCacheSecurityGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  createCacheSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createCacheSubnetGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  createCacheSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createCacheSubnetGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  createCacheSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createCacheSubnetGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  createGlobalReplicationGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createGlobalReplicationGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  createGlobalReplicationGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createGlobalReplicationGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  createGlobalReplicationGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createGlobalReplicationGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  createReplicationGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createReplicationGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  createReplicationGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createReplicationGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  createReplicationGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createReplicationGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  createSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createSnapshot', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  createSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createSnapshot', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  createSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createSnapshot', 'ElastiCache', Promise.reject(result), true, mock)
  },
  createUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createUser', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  createUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createUser', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  createUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createUser', 'ElastiCache', Promise.reject(result), true, mock)
  },
  createUserGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createUserGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  createUserGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createUserGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  createUserGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'createUserGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  decreaseNodeGroupsInGlobalReplicationGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'decreaseNodeGroupsInGlobalReplicationGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  decreaseNodeGroupsInGlobalReplicationGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'decreaseNodeGroupsInGlobalReplicationGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  decreaseNodeGroupsInGlobalReplicationGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'decreaseNodeGroupsInGlobalReplicationGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  decreaseReplicaCount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'decreaseReplicaCount', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  decreaseReplicaCountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'decreaseReplicaCount', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  decreaseReplicaCountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'decreaseReplicaCount', 'ElastiCache', Promise.reject(result), true, mock)
  },
  deleteCacheCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteCacheCluster', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  deleteCacheClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteCacheCluster', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  deleteCacheClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteCacheCluster', 'ElastiCache', Promise.reject(result), true, mock)
  },
  deleteCacheParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteCacheParameterGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  deleteCacheParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteCacheParameterGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  deleteCacheParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteCacheParameterGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  deleteCacheSecurityGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteCacheSecurityGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  deleteCacheSecurityGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteCacheSecurityGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  deleteCacheSecurityGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteCacheSecurityGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  deleteCacheSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteCacheSubnetGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  deleteCacheSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteCacheSubnetGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  deleteCacheSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteCacheSubnetGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  deleteGlobalReplicationGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteGlobalReplicationGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  deleteGlobalReplicationGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteGlobalReplicationGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  deleteGlobalReplicationGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteGlobalReplicationGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  deleteReplicationGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteReplicationGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  deleteReplicationGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteReplicationGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  deleteReplicationGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteReplicationGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  deleteSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteSnapshot', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  deleteSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteSnapshot', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  deleteSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteSnapshot', 'ElastiCache', Promise.reject(result), true, mock)
  },
  deleteUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteUser', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  deleteUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteUser', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  deleteUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteUser', 'ElastiCache', Promise.reject(result), true, mock)
  },
  deleteUserGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteUserGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  deleteUserGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteUserGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  deleteUserGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'deleteUserGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  describeCacheClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeCacheClusters', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  describeCacheClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeCacheClusters', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  describeCacheClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeCacheClusters', 'ElastiCache', Promise.reject(result), true, mock)
  },
  describeCacheEngineVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeCacheEngineVersions', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  describeCacheEngineVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeCacheEngineVersions', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  describeCacheEngineVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeCacheEngineVersions', 'ElastiCache', Promise.reject(result), true, mock)
  },
  describeCacheParameterGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeCacheParameterGroups', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  describeCacheParameterGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeCacheParameterGroups', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  describeCacheParameterGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeCacheParameterGroups', 'ElastiCache', Promise.reject(result), true, mock)
  },
  describeCacheParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeCacheParameters', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  describeCacheParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeCacheParameters', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  describeCacheParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeCacheParameters', 'ElastiCache', Promise.reject(result), true, mock)
  },
  describeCacheSecurityGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeCacheSecurityGroups', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  describeCacheSecurityGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeCacheSecurityGroups', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  describeCacheSecurityGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeCacheSecurityGroups', 'ElastiCache', Promise.reject(result), true, mock)
  },
  describeCacheSubnetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeCacheSubnetGroups', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  describeCacheSubnetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeCacheSubnetGroups', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  describeCacheSubnetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeCacheSubnetGroups', 'ElastiCache', Promise.reject(result), true, mock)
  },
  describeEngineDefaultParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeEngineDefaultParameters', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  describeEngineDefaultParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeEngineDefaultParameters', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  describeEngineDefaultParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeEngineDefaultParameters', 'ElastiCache', Promise.reject(result), true, mock)
  },
  describeEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeEvents', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  describeEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeEvents', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  describeEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeEvents', 'ElastiCache', Promise.reject(result), true, mock)
  },
  describeGlobalReplicationGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeGlobalReplicationGroups', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  describeGlobalReplicationGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeGlobalReplicationGroups', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  describeGlobalReplicationGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeGlobalReplicationGroups', 'ElastiCache', Promise.reject(result), true, mock)
  },
  describeReplicationGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeReplicationGroups', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  describeReplicationGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeReplicationGroups', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  describeReplicationGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeReplicationGroups', 'ElastiCache', Promise.reject(result), true, mock)
  },
  describeReservedCacheNodes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeReservedCacheNodes', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  describeReservedCacheNodesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeReservedCacheNodes', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  describeReservedCacheNodesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeReservedCacheNodes', 'ElastiCache', Promise.reject(result), true, mock)
  },
  describeReservedCacheNodesOfferings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeReservedCacheNodesOfferings', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  describeReservedCacheNodesOfferingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeReservedCacheNodesOfferings', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  describeReservedCacheNodesOfferingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeReservedCacheNodesOfferings', 'ElastiCache', Promise.reject(result), true, mock)
  },
  describeServiceUpdates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeServiceUpdates', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  describeServiceUpdatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeServiceUpdates', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  describeServiceUpdatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeServiceUpdates', 'ElastiCache', Promise.reject(result), true, mock)
  },
  describeSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeSnapshots', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  describeSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeSnapshots', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  describeSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeSnapshots', 'ElastiCache', Promise.reject(result), true, mock)
  },
  describeUpdateActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeUpdateActions', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  describeUpdateActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeUpdateActions', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  describeUpdateActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeUpdateActions', 'ElastiCache', Promise.reject(result), true, mock)
  },
  describeUserGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeUserGroups', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  describeUserGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeUserGroups', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  describeUserGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeUserGroups', 'ElastiCache', Promise.reject(result), true, mock)
  },
  describeUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeUsers', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  describeUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeUsers', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  describeUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'describeUsers', 'ElastiCache', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'destroy', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'destroy', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'destroy', 'ElastiCache', Promise.reject(result), true, mock)
  },
  disassociateGlobalReplicationGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'disassociateGlobalReplicationGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  disassociateGlobalReplicationGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'disassociateGlobalReplicationGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  disassociateGlobalReplicationGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'disassociateGlobalReplicationGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  failoverGlobalReplicationGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'failoverGlobalReplicationGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  failoverGlobalReplicationGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'failoverGlobalReplicationGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  failoverGlobalReplicationGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'failoverGlobalReplicationGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  increaseNodeGroupsInGlobalReplicationGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'increaseNodeGroupsInGlobalReplicationGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  increaseNodeGroupsInGlobalReplicationGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'increaseNodeGroupsInGlobalReplicationGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  increaseNodeGroupsInGlobalReplicationGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'increaseNodeGroupsInGlobalReplicationGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  increaseReplicaCount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'increaseReplicaCount', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  increaseReplicaCountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'increaseReplicaCount', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  increaseReplicaCountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'increaseReplicaCount', 'ElastiCache', Promise.reject(result), true, mock)
  },
  listAllowedNodeTypeModifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'listAllowedNodeTypeModifications', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  listAllowedNodeTypeModificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'listAllowedNodeTypeModifications', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  listAllowedNodeTypeModificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'listAllowedNodeTypeModifications', 'ElastiCache', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'listTagsForResource', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'listTagsForResource', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'listTagsForResource', 'ElastiCache', Promise.reject(result), true, mock)
  },
  modifyCacheCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyCacheCluster', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  modifyCacheClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyCacheCluster', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  modifyCacheClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyCacheCluster', 'ElastiCache', Promise.reject(result), true, mock)
  },
  modifyCacheParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyCacheParameterGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  modifyCacheParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyCacheParameterGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  modifyCacheParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyCacheParameterGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  modifyCacheSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyCacheSubnetGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  modifyCacheSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyCacheSubnetGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  modifyCacheSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyCacheSubnetGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  modifyGlobalReplicationGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyGlobalReplicationGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  modifyGlobalReplicationGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyGlobalReplicationGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  modifyGlobalReplicationGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyGlobalReplicationGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  modifyReplicationGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyReplicationGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  modifyReplicationGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyReplicationGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  modifyReplicationGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyReplicationGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  modifyReplicationGroupShardConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyReplicationGroupShardConfiguration', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  modifyReplicationGroupShardConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyReplicationGroupShardConfiguration', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  modifyReplicationGroupShardConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyReplicationGroupShardConfiguration', 'ElastiCache', Promise.reject(result), true, mock)
  },
  modifyUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyUser', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  modifyUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyUser', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  modifyUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyUser', 'ElastiCache', Promise.reject(result), true, mock)
  },
  modifyUserGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyUserGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  modifyUserGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyUserGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  modifyUserGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'modifyUserGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  purchaseReservedCacheNodesOffering: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'purchaseReservedCacheNodesOffering', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  purchaseReservedCacheNodesOfferingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'purchaseReservedCacheNodesOffering', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  purchaseReservedCacheNodesOfferingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'purchaseReservedCacheNodesOffering', 'ElastiCache', Promise.reject(result), true, mock)
  },
  rebalanceSlotsInGlobalReplicationGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'rebalanceSlotsInGlobalReplicationGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  rebalanceSlotsInGlobalReplicationGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'rebalanceSlotsInGlobalReplicationGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  rebalanceSlotsInGlobalReplicationGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'rebalanceSlotsInGlobalReplicationGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  rebootCacheCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'rebootCacheCluster', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  rebootCacheClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'rebootCacheCluster', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  rebootCacheClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'rebootCacheCluster', 'ElastiCache', Promise.reject(result), true, mock)
  },
  removeTagsFromResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'removeTagsFromResource', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  removeTagsFromResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'removeTagsFromResource', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  removeTagsFromResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'removeTagsFromResource', 'ElastiCache', Promise.reject(result), true, mock)
  },
  resetCacheParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'resetCacheParameterGroup', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  resetCacheParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'resetCacheParameterGroup', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  resetCacheParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'resetCacheParameterGroup', 'ElastiCache', Promise.reject(result), true, mock)
  },
  revokeCacheSecurityGroupIngress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'revokeCacheSecurityGroupIngress', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  revokeCacheSecurityGroupIngressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'revokeCacheSecurityGroupIngress', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  revokeCacheSecurityGroupIngressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'revokeCacheSecurityGroupIngress', 'ElastiCache', Promise.reject(result), true, mock)
  },
  startMigration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'startMigration', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  startMigrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'startMigration', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  startMigrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'startMigration', 'ElastiCache', Promise.reject(result), true, mock)
  },
  testFailover: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'testFailover', 'ElastiCache', Promise.resolve(result), true, mock)
  },
  testFailoverAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'testFailover', 'ElastiCache', Promise.resolve(result), false, mock)
  },
  testFailoverThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'testFailover', 'ElastiCache', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'send', 'ElastiCacheClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'send', 'ElastiCacheClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elasticache', 'send', 'ElastiCacheClient', Promise.reject(result), true, mock)
  }
}