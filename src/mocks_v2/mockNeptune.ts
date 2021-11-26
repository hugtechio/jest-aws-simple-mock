
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
  export const mockNeptune = {
  addRoleToDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addRoleToDBCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  addRoleToDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addRoleToDBCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  addRoleToDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addRoleToDBCluster', 'Neptune', Promise.reject(result), true, mock)
  },
  addSourceIdentifierToSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addSourceIdentifierToSubscription', 'Neptune', Promise.resolve(result), true, mock)
  },
  addSourceIdentifierToSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addSourceIdentifierToSubscription', 'Neptune', Promise.resolve(result), false, mock)
  },
  addSourceIdentifierToSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addSourceIdentifierToSubscription', 'Neptune', Promise.reject(result), true, mock)
  },
  addTagsToResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToResource', 'Neptune', Promise.resolve(result), true, mock)
  },
  addTagsToResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToResource', 'Neptune', Promise.resolve(result), false, mock)
  },
  addTagsToResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToResource', 'Neptune', Promise.reject(result), true, mock)
  },
  applyPendingMaintenanceAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('applyPendingMaintenanceAction', 'Neptune', Promise.resolve(result), true, mock)
  },
  applyPendingMaintenanceActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('applyPendingMaintenanceAction', 'Neptune', Promise.resolve(result), false, mock)
  },
  applyPendingMaintenanceActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('applyPendingMaintenanceAction', 'Neptune', Promise.reject(result), true, mock)
  },
  copyDBClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyDBClusterParameterGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  copyDBClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyDBClusterParameterGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  copyDBClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyDBClusterParameterGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  copyDBClusterSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyDBClusterSnapshot', 'Neptune', Promise.resolve(result), true, mock)
  },
  copyDBClusterSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyDBClusterSnapshot', 'Neptune', Promise.resolve(result), false, mock)
  },
  copyDBClusterSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyDBClusterSnapshot', 'Neptune', Promise.reject(result), true, mock)
  },
  copyDBParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyDBParameterGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  copyDBParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyDBParameterGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  copyDBParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyDBParameterGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  createDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  createDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  createDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBCluster', 'Neptune', Promise.reject(result), true, mock)
  },
  createDBClusterEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBClusterEndpoint', 'Neptune', Promise.resolve(result), true, mock)
  },
  createDBClusterEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBClusterEndpoint', 'Neptune', Promise.resolve(result), false, mock)
  },
  createDBClusterEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBClusterEndpoint', 'Neptune', Promise.reject(result), true, mock)
  },
  createDBClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBClusterParameterGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  createDBClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBClusterParameterGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  createDBClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBClusterParameterGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  createDBClusterSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBClusterSnapshot', 'Neptune', Promise.resolve(result), true, mock)
  },
  createDBClusterSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBClusterSnapshot', 'Neptune', Promise.resolve(result), false, mock)
  },
  createDBClusterSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBClusterSnapshot', 'Neptune', Promise.reject(result), true, mock)
  },
  createDBInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBInstance', 'Neptune', Promise.resolve(result), true, mock)
  },
  createDBInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBInstance', 'Neptune', Promise.resolve(result), false, mock)
  },
  createDBInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBInstance', 'Neptune', Promise.reject(result), true, mock)
  },
  createDBParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBParameterGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  createDBParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBParameterGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  createDBParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBParameterGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  createDBSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBSubnetGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  createDBSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBSubnetGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  createDBSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBSubnetGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  createEventSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEventSubscription', 'Neptune', Promise.resolve(result), true, mock)
  },
  createEventSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEventSubscription', 'Neptune', Promise.resolve(result), false, mock)
  },
  createEventSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEventSubscription', 'Neptune', Promise.reject(result), true, mock)
  },
  deleteDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  deleteDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  deleteDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBCluster', 'Neptune', Promise.reject(result), true, mock)
  },
  deleteDBClusterEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBClusterEndpoint', 'Neptune', Promise.resolve(result), true, mock)
  },
  deleteDBClusterEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBClusterEndpoint', 'Neptune', Promise.resolve(result), false, mock)
  },
  deleteDBClusterEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBClusterEndpoint', 'Neptune', Promise.reject(result), true, mock)
  },
  deleteDBClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBClusterParameterGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  deleteDBClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBClusterParameterGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  deleteDBClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBClusterParameterGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  deleteDBClusterSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBClusterSnapshot', 'Neptune', Promise.resolve(result), true, mock)
  },
  deleteDBClusterSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBClusterSnapshot', 'Neptune', Promise.resolve(result), false, mock)
  },
  deleteDBClusterSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBClusterSnapshot', 'Neptune', Promise.reject(result), true, mock)
  },
  deleteDBInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBInstance', 'Neptune', Promise.resolve(result), true, mock)
  },
  deleteDBInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBInstance', 'Neptune', Promise.resolve(result), false, mock)
  },
  deleteDBInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBInstance', 'Neptune', Promise.reject(result), true, mock)
  },
  deleteDBParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBParameterGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  deleteDBParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBParameterGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  deleteDBParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBParameterGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  deleteDBSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBSubnetGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  deleteDBSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBSubnetGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  deleteDBSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBSubnetGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  deleteEventSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEventSubscription', 'Neptune', Promise.resolve(result), true, mock)
  },
  deleteEventSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEventSubscription', 'Neptune', Promise.resolve(result), false, mock)
  },
  deleteEventSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEventSubscription', 'Neptune', Promise.reject(result), true, mock)
  },
  describeDBClusterEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterEndpoints', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeDBClusterEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterEndpoints', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeDBClusterEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterEndpoints', 'Neptune', Promise.reject(result), true, mock)
  },
  describeDBClusterParameterGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterParameterGroups', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeDBClusterParameterGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterParameterGroups', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeDBClusterParameterGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterParameterGroups', 'Neptune', Promise.reject(result), true, mock)
  },
  describeDBClusterParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterParameters', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeDBClusterParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterParameters', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeDBClusterParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterParameters', 'Neptune', Promise.reject(result), true, mock)
  },
  describeDBClusterSnapshotAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterSnapshotAttributes', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeDBClusterSnapshotAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterSnapshotAttributes', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeDBClusterSnapshotAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterSnapshotAttributes', 'Neptune', Promise.reject(result), true, mock)
  },
  describeDBClusterSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterSnapshots', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeDBClusterSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterSnapshots', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeDBClusterSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterSnapshots', 'Neptune', Promise.reject(result), true, mock)
  },
  describeDBClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusters', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeDBClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusters', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeDBClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusters', 'Neptune', Promise.reject(result), true, mock)
  },
  describeDBEngineVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBEngineVersions', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeDBEngineVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBEngineVersions', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeDBEngineVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBEngineVersions', 'Neptune', Promise.reject(result), true, mock)
  },
  describeDBInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBInstances', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeDBInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBInstances', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeDBInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBInstances', 'Neptune', Promise.reject(result), true, mock)
  },
  describeDBParameterGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBParameterGroups', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeDBParameterGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBParameterGroups', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeDBParameterGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBParameterGroups', 'Neptune', Promise.reject(result), true, mock)
  },
  describeDBParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBParameters', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeDBParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBParameters', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeDBParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBParameters', 'Neptune', Promise.reject(result), true, mock)
  },
  describeDBSubnetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBSubnetGroups', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeDBSubnetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBSubnetGroups', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeDBSubnetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBSubnetGroups', 'Neptune', Promise.reject(result), true, mock)
  },
  describeEngineDefaultClusterParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEngineDefaultClusterParameters', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeEngineDefaultClusterParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEngineDefaultClusterParameters', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeEngineDefaultClusterParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEngineDefaultClusterParameters', 'Neptune', Promise.reject(result), true, mock)
  },
  describeEngineDefaultParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEngineDefaultParameters', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeEngineDefaultParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEngineDefaultParameters', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeEngineDefaultParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEngineDefaultParameters', 'Neptune', Promise.reject(result), true, mock)
  },
  describeEventCategories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventCategories', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeEventCategoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventCategories', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeEventCategoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventCategories', 'Neptune', Promise.reject(result), true, mock)
  },
  describeEventSubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventSubscriptions', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeEventSubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventSubscriptions', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeEventSubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventSubscriptions', 'Neptune', Promise.reject(result), true, mock)
  },
  describeEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'Neptune', Promise.reject(result), true, mock)
  },
  describeOrderableDBInstanceOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrderableDBInstanceOptions', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeOrderableDBInstanceOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrderableDBInstanceOptions', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeOrderableDBInstanceOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrderableDBInstanceOptions', 'Neptune', Promise.reject(result), true, mock)
  },
  describePendingMaintenanceActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePendingMaintenanceActions', 'Neptune', Promise.resolve(result), true, mock)
  },
  describePendingMaintenanceActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePendingMaintenanceActions', 'Neptune', Promise.resolve(result), false, mock)
  },
  describePendingMaintenanceActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePendingMaintenanceActions', 'Neptune', Promise.reject(result), true, mock)
  },
  describeValidDBInstanceModifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeValidDBInstanceModifications', 'Neptune', Promise.resolve(result), true, mock)
  },
  describeValidDBInstanceModificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeValidDBInstanceModifications', 'Neptune', Promise.resolve(result), false, mock)
  },
  describeValidDBInstanceModificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeValidDBInstanceModifications', 'Neptune', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Neptune', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Neptune', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Neptune', Promise.reject(result), true, mock)
  },
  failoverDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('failoverDBCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  failoverDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('failoverDBCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  failoverDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('failoverDBCluster', 'Neptune', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Neptune', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Neptune', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Neptune', Promise.reject(result), true, mock)
  },
  modifyDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  modifyDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  modifyDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBCluster', 'Neptune', Promise.reject(result), true, mock)
  },
  modifyDBClusterEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBClusterEndpoint', 'Neptune', Promise.resolve(result), true, mock)
  },
  modifyDBClusterEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBClusterEndpoint', 'Neptune', Promise.resolve(result), false, mock)
  },
  modifyDBClusterEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBClusterEndpoint', 'Neptune', Promise.reject(result), true, mock)
  },
  modifyDBClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBClusterParameterGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  modifyDBClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBClusterParameterGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  modifyDBClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBClusterParameterGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  modifyDBClusterSnapshotAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBClusterSnapshotAttribute', 'Neptune', Promise.resolve(result), true, mock)
  },
  modifyDBClusterSnapshotAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBClusterSnapshotAttribute', 'Neptune', Promise.resolve(result), false, mock)
  },
  modifyDBClusterSnapshotAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBClusterSnapshotAttribute', 'Neptune', Promise.reject(result), true, mock)
  },
  modifyDBInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBInstance', 'Neptune', Promise.resolve(result), true, mock)
  },
  modifyDBInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBInstance', 'Neptune', Promise.resolve(result), false, mock)
  },
  modifyDBInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBInstance', 'Neptune', Promise.reject(result), true, mock)
  },
  modifyDBParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBParameterGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  modifyDBParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBParameterGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  modifyDBParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBParameterGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  modifyDBSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBSubnetGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  modifyDBSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBSubnetGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  modifyDBSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBSubnetGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  modifyEventSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyEventSubscription', 'Neptune', Promise.resolve(result), true, mock)
  },
  modifyEventSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyEventSubscription', 'Neptune', Promise.resolve(result), false, mock)
  },
  modifyEventSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyEventSubscription', 'Neptune', Promise.reject(result), true, mock)
  },
  promoteReadReplicaDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('promoteReadReplicaDBCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  promoteReadReplicaDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('promoteReadReplicaDBCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  promoteReadReplicaDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('promoteReadReplicaDBCluster', 'Neptune', Promise.reject(result), true, mock)
  },
  rebootDBInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootDBInstance', 'Neptune', Promise.resolve(result), true, mock)
  },
  rebootDBInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootDBInstance', 'Neptune', Promise.resolve(result), false, mock)
  },
  rebootDBInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootDBInstance', 'Neptune', Promise.reject(result), true, mock)
  },
  removeRoleFromDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeRoleFromDBCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  removeRoleFromDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeRoleFromDBCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  removeRoleFromDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeRoleFromDBCluster', 'Neptune', Promise.reject(result), true, mock)
  },
  removeSourceIdentifierFromSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeSourceIdentifierFromSubscription', 'Neptune', Promise.resolve(result), true, mock)
  },
  removeSourceIdentifierFromSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeSourceIdentifierFromSubscription', 'Neptune', Promise.resolve(result), false, mock)
  },
  removeSourceIdentifierFromSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeSourceIdentifierFromSubscription', 'Neptune', Promise.reject(result), true, mock)
  },
  removeTagsFromResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromResource', 'Neptune', Promise.resolve(result), true, mock)
  },
  removeTagsFromResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromResource', 'Neptune', Promise.resolve(result), false, mock)
  },
  removeTagsFromResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromResource', 'Neptune', Promise.reject(result), true, mock)
  },
  resetDBClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetDBClusterParameterGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  resetDBClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetDBClusterParameterGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  resetDBClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetDBClusterParameterGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  resetDBParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetDBParameterGroup', 'Neptune', Promise.resolve(result), true, mock)
  },
  resetDBParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetDBParameterGroup', 'Neptune', Promise.resolve(result), false, mock)
  },
  resetDBParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetDBParameterGroup', 'Neptune', Promise.reject(result), true, mock)
  },
  restoreDBClusterFromSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreDBClusterFromSnapshot', 'Neptune', Promise.resolve(result), true, mock)
  },
  restoreDBClusterFromSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreDBClusterFromSnapshot', 'Neptune', Promise.resolve(result), false, mock)
  },
  restoreDBClusterFromSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreDBClusterFromSnapshot', 'Neptune', Promise.reject(result), true, mock)
  },
  restoreDBClusterToPointInTime: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreDBClusterToPointInTime', 'Neptune', Promise.resolve(result), true, mock)
  },
  restoreDBClusterToPointInTimeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreDBClusterToPointInTime', 'Neptune', Promise.resolve(result), false, mock)
  },
  restoreDBClusterToPointInTimeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreDBClusterToPointInTime', 'Neptune', Promise.reject(result), true, mock)
  },
  startDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDBCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  startDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDBCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  startDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDBCluster', 'Neptune', Promise.reject(result), true, mock)
  },
  stopDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDBCluster', 'Neptune', Promise.resolve(result), true, mock)
  },
  stopDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDBCluster', 'Neptune', Promise.resolve(result), false, mock)
  },
  stopDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDBCluster', 'Neptune', Promise.reject(result), true, mock)
  },
}
