
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
  export const mockDocDB = {
  addSourceIdentifierToSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addSourceIdentifierToSubscription', 'DocDB', Promise.resolve(result), true, mock)
  },
  addSourceIdentifierToSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addSourceIdentifierToSubscription', 'DocDB', Promise.resolve(result), false, mock)
  },
  addSourceIdentifierToSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addSourceIdentifierToSubscription', 'DocDB', Promise.reject(result), true, mock)
  },
  addTagsToResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToResource', 'DocDB', Promise.resolve(result), true, mock)
  },
  addTagsToResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToResource', 'DocDB', Promise.resolve(result), false, mock)
  },
  addTagsToResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToResource', 'DocDB', Promise.reject(result), true, mock)
  },
  applyPendingMaintenanceAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('applyPendingMaintenanceAction', 'DocDB', Promise.resolve(result), true, mock)
  },
  applyPendingMaintenanceActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('applyPendingMaintenanceAction', 'DocDB', Promise.resolve(result), false, mock)
  },
  applyPendingMaintenanceActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('applyPendingMaintenanceAction', 'DocDB', Promise.reject(result), true, mock)
  },
  copyDBClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyDBClusterParameterGroup', 'DocDB', Promise.resolve(result), true, mock)
  },
  copyDBClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyDBClusterParameterGroup', 'DocDB', Promise.resolve(result), false, mock)
  },
  copyDBClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyDBClusterParameterGroup', 'DocDB', Promise.reject(result), true, mock)
  },
  copyDBClusterSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyDBClusterSnapshot', 'DocDB', Promise.resolve(result), true, mock)
  },
  copyDBClusterSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyDBClusterSnapshot', 'DocDB', Promise.resolve(result), false, mock)
  },
  copyDBClusterSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyDBClusterSnapshot', 'DocDB', Promise.reject(result), true, mock)
  },
  createDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBCluster', 'DocDB', Promise.resolve(result), true, mock)
  },
  createDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBCluster', 'DocDB', Promise.resolve(result), false, mock)
  },
  createDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBCluster', 'DocDB', Promise.reject(result), true, mock)
  },
  createDBClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBClusterParameterGroup', 'DocDB', Promise.resolve(result), true, mock)
  },
  createDBClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBClusterParameterGroup', 'DocDB', Promise.resolve(result), false, mock)
  },
  createDBClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBClusterParameterGroup', 'DocDB', Promise.reject(result), true, mock)
  },
  createDBClusterSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBClusterSnapshot', 'DocDB', Promise.resolve(result), true, mock)
  },
  createDBClusterSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBClusterSnapshot', 'DocDB', Promise.resolve(result), false, mock)
  },
  createDBClusterSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBClusterSnapshot', 'DocDB', Promise.reject(result), true, mock)
  },
  createDBInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBInstance', 'DocDB', Promise.resolve(result), true, mock)
  },
  createDBInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBInstance', 'DocDB', Promise.resolve(result), false, mock)
  },
  createDBInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBInstance', 'DocDB', Promise.reject(result), true, mock)
  },
  createDBSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBSubnetGroup', 'DocDB', Promise.resolve(result), true, mock)
  },
  createDBSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBSubnetGroup', 'DocDB', Promise.resolve(result), false, mock)
  },
  createDBSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDBSubnetGroup', 'DocDB', Promise.reject(result), true, mock)
  },
  createEventSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEventSubscription', 'DocDB', Promise.resolve(result), true, mock)
  },
  createEventSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEventSubscription', 'DocDB', Promise.resolve(result), false, mock)
  },
  createEventSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEventSubscription', 'DocDB', Promise.reject(result), true, mock)
  },
  createGlobalCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGlobalCluster', 'DocDB', Promise.resolve(result), true, mock)
  },
  createGlobalClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGlobalCluster', 'DocDB', Promise.resolve(result), false, mock)
  },
  createGlobalClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGlobalCluster', 'DocDB', Promise.reject(result), true, mock)
  },
  deleteDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBCluster', 'DocDB', Promise.resolve(result), true, mock)
  },
  deleteDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBCluster', 'DocDB', Promise.resolve(result), false, mock)
  },
  deleteDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBCluster', 'DocDB', Promise.reject(result), true, mock)
  },
  deleteDBClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBClusterParameterGroup', 'DocDB', Promise.resolve(result), true, mock)
  },
  deleteDBClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBClusterParameterGroup', 'DocDB', Promise.resolve(result), false, mock)
  },
  deleteDBClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBClusterParameterGroup', 'DocDB', Promise.reject(result), true, mock)
  },
  deleteDBClusterSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBClusterSnapshot', 'DocDB', Promise.resolve(result), true, mock)
  },
  deleteDBClusterSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBClusterSnapshot', 'DocDB', Promise.resolve(result), false, mock)
  },
  deleteDBClusterSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBClusterSnapshot', 'DocDB', Promise.reject(result), true, mock)
  },
  deleteDBInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBInstance', 'DocDB', Promise.resolve(result), true, mock)
  },
  deleteDBInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBInstance', 'DocDB', Promise.resolve(result), false, mock)
  },
  deleteDBInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBInstance', 'DocDB', Promise.reject(result), true, mock)
  },
  deleteDBSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBSubnetGroup', 'DocDB', Promise.resolve(result), true, mock)
  },
  deleteDBSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBSubnetGroup', 'DocDB', Promise.resolve(result), false, mock)
  },
  deleteDBSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDBSubnetGroup', 'DocDB', Promise.reject(result), true, mock)
  },
  deleteEventSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEventSubscription', 'DocDB', Promise.resolve(result), true, mock)
  },
  deleteEventSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEventSubscription', 'DocDB', Promise.resolve(result), false, mock)
  },
  deleteEventSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEventSubscription', 'DocDB', Promise.reject(result), true, mock)
  },
  deleteGlobalCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGlobalCluster', 'DocDB', Promise.resolve(result), true, mock)
  },
  deleteGlobalClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGlobalCluster', 'DocDB', Promise.resolve(result), false, mock)
  },
  deleteGlobalClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGlobalCluster', 'DocDB', Promise.reject(result), true, mock)
  },
  describeCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCertificates', 'DocDB', Promise.resolve(result), true, mock)
  },
  describeCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCertificates', 'DocDB', Promise.resolve(result), false, mock)
  },
  describeCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCertificates', 'DocDB', Promise.reject(result), true, mock)
  },
  describeDBClusterParameterGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterParameterGroups', 'DocDB', Promise.resolve(result), true, mock)
  },
  describeDBClusterParameterGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterParameterGroups', 'DocDB', Promise.resolve(result), false, mock)
  },
  describeDBClusterParameterGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterParameterGroups', 'DocDB', Promise.reject(result), true, mock)
  },
  describeDBClusterParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterParameters', 'DocDB', Promise.resolve(result), true, mock)
  },
  describeDBClusterParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterParameters', 'DocDB', Promise.resolve(result), false, mock)
  },
  describeDBClusterParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterParameters', 'DocDB', Promise.reject(result), true, mock)
  },
  describeDBClusterSnapshotAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterSnapshotAttributes', 'DocDB', Promise.resolve(result), true, mock)
  },
  describeDBClusterSnapshotAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterSnapshotAttributes', 'DocDB', Promise.resolve(result), false, mock)
  },
  describeDBClusterSnapshotAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterSnapshotAttributes', 'DocDB', Promise.reject(result), true, mock)
  },
  describeDBClusterSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterSnapshots', 'DocDB', Promise.resolve(result), true, mock)
  },
  describeDBClusterSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterSnapshots', 'DocDB', Promise.resolve(result), false, mock)
  },
  describeDBClusterSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusterSnapshots', 'DocDB', Promise.reject(result), true, mock)
  },
  describeDBClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusters', 'DocDB', Promise.resolve(result), true, mock)
  },
  describeDBClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusters', 'DocDB', Promise.resolve(result), false, mock)
  },
  describeDBClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBClusters', 'DocDB', Promise.reject(result), true, mock)
  },
  describeDBEngineVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBEngineVersions', 'DocDB', Promise.resolve(result), true, mock)
  },
  describeDBEngineVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBEngineVersions', 'DocDB', Promise.resolve(result), false, mock)
  },
  describeDBEngineVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBEngineVersions', 'DocDB', Promise.reject(result), true, mock)
  },
  describeDBInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBInstances', 'DocDB', Promise.resolve(result), true, mock)
  },
  describeDBInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBInstances', 'DocDB', Promise.resolve(result), false, mock)
  },
  describeDBInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBInstances', 'DocDB', Promise.reject(result), true, mock)
  },
  describeDBSubnetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBSubnetGroups', 'DocDB', Promise.resolve(result), true, mock)
  },
  describeDBSubnetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBSubnetGroups', 'DocDB', Promise.resolve(result), false, mock)
  },
  describeDBSubnetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDBSubnetGroups', 'DocDB', Promise.reject(result), true, mock)
  },
  describeEngineDefaultClusterParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEngineDefaultClusterParameters', 'DocDB', Promise.resolve(result), true, mock)
  },
  describeEngineDefaultClusterParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEngineDefaultClusterParameters', 'DocDB', Promise.resolve(result), false, mock)
  },
  describeEngineDefaultClusterParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEngineDefaultClusterParameters', 'DocDB', Promise.reject(result), true, mock)
  },
  describeEventCategories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventCategories', 'DocDB', Promise.resolve(result), true, mock)
  },
  describeEventCategoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventCategories', 'DocDB', Promise.resolve(result), false, mock)
  },
  describeEventCategoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventCategories', 'DocDB', Promise.reject(result), true, mock)
  },
  describeEventSubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventSubscriptions', 'DocDB', Promise.resolve(result), true, mock)
  },
  describeEventSubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventSubscriptions', 'DocDB', Promise.resolve(result), false, mock)
  },
  describeEventSubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventSubscriptions', 'DocDB', Promise.reject(result), true, mock)
  },
  describeEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'DocDB', Promise.resolve(result), true, mock)
  },
  describeEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'DocDB', Promise.resolve(result), false, mock)
  },
  describeEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'DocDB', Promise.reject(result), true, mock)
  },
  describeGlobalClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGlobalClusters', 'DocDB', Promise.resolve(result), true, mock)
  },
  describeGlobalClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGlobalClusters', 'DocDB', Promise.resolve(result), false, mock)
  },
  describeGlobalClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGlobalClusters', 'DocDB', Promise.reject(result), true, mock)
  },
  describeOrderableDBInstanceOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrderableDBInstanceOptions', 'DocDB', Promise.resolve(result), true, mock)
  },
  describeOrderableDBInstanceOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrderableDBInstanceOptions', 'DocDB', Promise.resolve(result), false, mock)
  },
  describeOrderableDBInstanceOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrderableDBInstanceOptions', 'DocDB', Promise.reject(result), true, mock)
  },
  describePendingMaintenanceActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePendingMaintenanceActions', 'DocDB', Promise.resolve(result), true, mock)
  },
  describePendingMaintenanceActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePendingMaintenanceActions', 'DocDB', Promise.resolve(result), false, mock)
  },
  describePendingMaintenanceActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePendingMaintenanceActions', 'DocDB', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DocDB', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DocDB', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'DocDB', Promise.reject(result), true, mock)
  },
  failoverDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('failoverDBCluster', 'DocDB', Promise.resolve(result), true, mock)
  },
  failoverDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('failoverDBCluster', 'DocDB', Promise.resolve(result), false, mock)
  },
  failoverDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('failoverDBCluster', 'DocDB', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DocDB', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DocDB', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'DocDB', Promise.reject(result), true, mock)
  },
  modifyDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBCluster', 'DocDB', Promise.resolve(result), true, mock)
  },
  modifyDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBCluster', 'DocDB', Promise.resolve(result), false, mock)
  },
  modifyDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBCluster', 'DocDB', Promise.reject(result), true, mock)
  },
  modifyDBClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBClusterParameterGroup', 'DocDB', Promise.resolve(result), true, mock)
  },
  modifyDBClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBClusterParameterGroup', 'DocDB', Promise.resolve(result), false, mock)
  },
  modifyDBClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBClusterParameterGroup', 'DocDB', Promise.reject(result), true, mock)
  },
  modifyDBClusterSnapshotAttribute: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBClusterSnapshotAttribute', 'DocDB', Promise.resolve(result), true, mock)
  },
  modifyDBClusterSnapshotAttributeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBClusterSnapshotAttribute', 'DocDB', Promise.resolve(result), false, mock)
  },
  modifyDBClusterSnapshotAttributeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBClusterSnapshotAttribute', 'DocDB', Promise.reject(result), true, mock)
  },
  modifyDBInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBInstance', 'DocDB', Promise.resolve(result), true, mock)
  },
  modifyDBInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBInstance', 'DocDB', Promise.resolve(result), false, mock)
  },
  modifyDBInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBInstance', 'DocDB', Promise.reject(result), true, mock)
  },
  modifyDBSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBSubnetGroup', 'DocDB', Promise.resolve(result), true, mock)
  },
  modifyDBSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBSubnetGroup', 'DocDB', Promise.resolve(result), false, mock)
  },
  modifyDBSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDBSubnetGroup', 'DocDB', Promise.reject(result), true, mock)
  },
  modifyEventSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyEventSubscription', 'DocDB', Promise.resolve(result), true, mock)
  },
  modifyEventSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyEventSubscription', 'DocDB', Promise.resolve(result), false, mock)
  },
  modifyEventSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyEventSubscription', 'DocDB', Promise.reject(result), true, mock)
  },
  modifyGlobalCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyGlobalCluster', 'DocDB', Promise.resolve(result), true, mock)
  },
  modifyGlobalClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyGlobalCluster', 'DocDB', Promise.resolve(result), false, mock)
  },
  modifyGlobalClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyGlobalCluster', 'DocDB', Promise.reject(result), true, mock)
  },
  rebootDBInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootDBInstance', 'DocDB', Promise.resolve(result), true, mock)
  },
  rebootDBInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootDBInstance', 'DocDB', Promise.resolve(result), false, mock)
  },
  rebootDBInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootDBInstance', 'DocDB', Promise.reject(result), true, mock)
  },
  removeFromGlobalCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeFromGlobalCluster', 'DocDB', Promise.resolve(result), true, mock)
  },
  removeFromGlobalClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeFromGlobalCluster', 'DocDB', Promise.resolve(result), false, mock)
  },
  removeFromGlobalClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeFromGlobalCluster', 'DocDB', Promise.reject(result), true, mock)
  },
  removeSourceIdentifierFromSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeSourceIdentifierFromSubscription', 'DocDB', Promise.resolve(result), true, mock)
  },
  removeSourceIdentifierFromSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeSourceIdentifierFromSubscription', 'DocDB', Promise.resolve(result), false, mock)
  },
  removeSourceIdentifierFromSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeSourceIdentifierFromSubscription', 'DocDB', Promise.reject(result), true, mock)
  },
  removeTagsFromResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromResource', 'DocDB', Promise.resolve(result), true, mock)
  },
  removeTagsFromResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromResource', 'DocDB', Promise.resolve(result), false, mock)
  },
  removeTagsFromResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromResource', 'DocDB', Promise.reject(result), true, mock)
  },
  resetDBClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetDBClusterParameterGroup', 'DocDB', Promise.resolve(result), true, mock)
  },
  resetDBClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetDBClusterParameterGroup', 'DocDB', Promise.resolve(result), false, mock)
  },
  resetDBClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetDBClusterParameterGroup', 'DocDB', Promise.reject(result), true, mock)
  },
  restoreDBClusterFromSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreDBClusterFromSnapshot', 'DocDB', Promise.resolve(result), true, mock)
  },
  restoreDBClusterFromSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreDBClusterFromSnapshot', 'DocDB', Promise.resolve(result), false, mock)
  },
  restoreDBClusterFromSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreDBClusterFromSnapshot', 'DocDB', Promise.reject(result), true, mock)
  },
  restoreDBClusterToPointInTime: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreDBClusterToPointInTime', 'DocDB', Promise.resolve(result), true, mock)
  },
  restoreDBClusterToPointInTimeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreDBClusterToPointInTime', 'DocDB', Promise.resolve(result), false, mock)
  },
  restoreDBClusterToPointInTimeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreDBClusterToPointInTime', 'DocDB', Promise.reject(result), true, mock)
  },
  startDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDBCluster', 'DocDB', Promise.resolve(result), true, mock)
  },
  startDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDBCluster', 'DocDB', Promise.resolve(result), false, mock)
  },
  startDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startDBCluster', 'DocDB', Promise.reject(result), true, mock)
  },
  stopDBCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDBCluster', 'DocDB', Promise.resolve(result), true, mock)
  },
  stopDBClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDBCluster', 'DocDB', Promise.resolve(result), false, mock)
  },
  stopDBClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopDBCluster', 'DocDB', Promise.reject(result), true, mock)
  },
}
