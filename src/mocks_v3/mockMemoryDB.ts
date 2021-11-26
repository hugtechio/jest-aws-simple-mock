
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockMemoryDB = {
  batchUpdateCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'batchUpdateCluster', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  batchUpdateClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'batchUpdateCluster', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  batchUpdateClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'batchUpdateCluster', 'MemoryDB', Promise.reject(result), true, mock)
  },
  copySnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'copySnapshot', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  copySnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'copySnapshot', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  copySnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'copySnapshot', 'MemoryDB', Promise.reject(result), true, mock)
  },
  createACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'createACL', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  createACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'createACL', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  createACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'createACL', 'MemoryDB', Promise.reject(result), true, mock)
  },
  createCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'createCluster', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  createClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'createCluster', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  createClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'createCluster', 'MemoryDB', Promise.reject(result), true, mock)
  },
  createParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'createParameterGroup', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  createParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'createParameterGroup', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  createParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'createParameterGroup', 'MemoryDB', Promise.reject(result), true, mock)
  },
  createSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'createSnapshot', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  createSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'createSnapshot', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  createSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'createSnapshot', 'MemoryDB', Promise.reject(result), true, mock)
  },
  createSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'createSubnetGroup', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  createSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'createSubnetGroup', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  createSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'createSubnetGroup', 'MemoryDB', Promise.reject(result), true, mock)
  },
  createUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'createUser', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  createUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'createUser', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  createUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'createUser', 'MemoryDB', Promise.reject(result), true, mock)
  },
  deleteACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'deleteACL', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  deleteACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'deleteACL', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  deleteACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'deleteACL', 'MemoryDB', Promise.reject(result), true, mock)
  },
  deleteCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'deleteCluster', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  deleteClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'deleteCluster', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  deleteClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'deleteCluster', 'MemoryDB', Promise.reject(result), true, mock)
  },
  deleteParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'deleteParameterGroup', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  deleteParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'deleteParameterGroup', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  deleteParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'deleteParameterGroup', 'MemoryDB', Promise.reject(result), true, mock)
  },
  deleteSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'deleteSnapshot', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  deleteSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'deleteSnapshot', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  deleteSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'deleteSnapshot', 'MemoryDB', Promise.reject(result), true, mock)
  },
  deleteSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'deleteSubnetGroup', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  deleteSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'deleteSubnetGroup', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  deleteSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'deleteSubnetGroup', 'MemoryDB', Promise.reject(result), true, mock)
  },
  deleteUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'deleteUser', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  deleteUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'deleteUser', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  deleteUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'deleteUser', 'MemoryDB', Promise.reject(result), true, mock)
  },
  describeACLs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeACLs', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  describeACLsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeACLs', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  describeACLsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeACLs', 'MemoryDB', Promise.reject(result), true, mock)
  },
  describeClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeClusters', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  describeClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeClusters', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  describeClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeClusters', 'MemoryDB', Promise.reject(result), true, mock)
  },
  describeEngineVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeEngineVersions', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  describeEngineVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeEngineVersions', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  describeEngineVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeEngineVersions', 'MemoryDB', Promise.reject(result), true, mock)
  },
  describeEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeEvents', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  describeEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeEvents', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  describeEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeEvents', 'MemoryDB', Promise.reject(result), true, mock)
  },
  describeParameterGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeParameterGroups', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  describeParameterGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeParameterGroups', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  describeParameterGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeParameterGroups', 'MemoryDB', Promise.reject(result), true, mock)
  },
  describeParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeParameters', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  describeParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeParameters', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  describeParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeParameters', 'MemoryDB', Promise.reject(result), true, mock)
  },
  describeServiceUpdates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeServiceUpdates', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  describeServiceUpdatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeServiceUpdates', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  describeServiceUpdatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeServiceUpdates', 'MemoryDB', Promise.reject(result), true, mock)
  },
  describeSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeSnapshots', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  describeSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeSnapshots', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  describeSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeSnapshots', 'MemoryDB', Promise.reject(result), true, mock)
  },
  describeSubnetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeSubnetGroups', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  describeSubnetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeSubnetGroups', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  describeSubnetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeSubnetGroups', 'MemoryDB', Promise.reject(result), true, mock)
  },
  describeUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeUsers', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  describeUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeUsers', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  describeUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'describeUsers', 'MemoryDB', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'destroy', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'destroy', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'destroy', 'MemoryDB', Promise.reject(result), true, mock)
  },
  failoverShard: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'failoverShard', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  failoverShardAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'failoverShard', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  failoverShardThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'failoverShard', 'MemoryDB', Promise.reject(result), true, mock)
  },
  listAllowedNodeTypeUpdates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'listAllowedNodeTypeUpdates', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  listAllowedNodeTypeUpdatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'listAllowedNodeTypeUpdates', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  listAllowedNodeTypeUpdatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'listAllowedNodeTypeUpdates', 'MemoryDB', Promise.reject(result), true, mock)
  },
  listTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'listTags', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  listTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'listTags', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  listTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'listTags', 'MemoryDB', Promise.reject(result), true, mock)
  },
  resetParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'resetParameterGroup', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  resetParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'resetParameterGroup', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  resetParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'resetParameterGroup', 'MemoryDB', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'tagResource', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'tagResource', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'tagResource', 'MemoryDB', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'untagResource', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'untagResource', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'untagResource', 'MemoryDB', Promise.reject(result), true, mock)
  },
  updateACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'updateACL', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  updateACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'updateACL', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  updateACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'updateACL', 'MemoryDB', Promise.reject(result), true, mock)
  },
  updateCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'updateCluster', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  updateClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'updateCluster', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  updateClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'updateCluster', 'MemoryDB', Promise.reject(result), true, mock)
  },
  updateParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'updateParameterGroup', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  updateParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'updateParameterGroup', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  updateParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'updateParameterGroup', 'MemoryDB', Promise.reject(result), true, mock)
  },
  updateSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'updateSubnetGroup', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  updateSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'updateSubnetGroup', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  updateSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'updateSubnetGroup', 'MemoryDB', Promise.reject(result), true, mock)
  },
  updateUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'updateUser', 'MemoryDB', Promise.resolve(result), true, mock)
  },
  updateUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'updateUser', 'MemoryDB', Promise.resolve(result), false, mock)
  },
  updateUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'updateUser', 'MemoryDB', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'send', 'MemoryDBClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'send', 'MemoryDBClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-memorydb', 'send', 'MemoryDBClient', Promise.reject(result), true, mock)
  }
}