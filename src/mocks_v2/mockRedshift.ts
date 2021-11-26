
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
  export const mockRedshift = {
  acceptReservedNodeExchange: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptReservedNodeExchange', 'Redshift', Promise.resolve(result), true, mock)
  },
  acceptReservedNodeExchangeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptReservedNodeExchange', 'Redshift', Promise.resolve(result), false, mock)
  },
  acceptReservedNodeExchangeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptReservedNodeExchange', 'Redshift', Promise.reject(result), true, mock)
  },
  addPartner: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addPartner', 'Redshift', Promise.resolve(result), true, mock)
  },
  addPartnerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addPartner', 'Redshift', Promise.resolve(result), false, mock)
  },
  addPartnerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addPartner', 'Redshift', Promise.reject(result), true, mock)
  },
  associateDataShareConsumer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDataShareConsumer', 'Redshift', Promise.resolve(result), true, mock)
  },
  associateDataShareConsumerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDataShareConsumer', 'Redshift', Promise.resolve(result), false, mock)
  },
  associateDataShareConsumerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDataShareConsumer', 'Redshift', Promise.reject(result), true, mock)
  },
  authorizeClusterSecurityGroupIngress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('authorizeClusterSecurityGroupIngress', 'Redshift', Promise.resolve(result), true, mock)
  },
  authorizeClusterSecurityGroupIngressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('authorizeClusterSecurityGroupIngress', 'Redshift', Promise.resolve(result), false, mock)
  },
  authorizeClusterSecurityGroupIngressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('authorizeClusterSecurityGroupIngress', 'Redshift', Promise.reject(result), true, mock)
  },
  authorizeDataShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('authorizeDataShare', 'Redshift', Promise.resolve(result), true, mock)
  },
  authorizeDataShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('authorizeDataShare', 'Redshift', Promise.resolve(result), false, mock)
  },
  authorizeDataShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('authorizeDataShare', 'Redshift', Promise.reject(result), true, mock)
  },
  authorizeEndpointAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('authorizeEndpointAccess', 'Redshift', Promise.resolve(result), true, mock)
  },
  authorizeEndpointAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('authorizeEndpointAccess', 'Redshift', Promise.resolve(result), false, mock)
  },
  authorizeEndpointAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('authorizeEndpointAccess', 'Redshift', Promise.reject(result), true, mock)
  },
  authorizeSnapshotAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('authorizeSnapshotAccess', 'Redshift', Promise.resolve(result), true, mock)
  },
  authorizeSnapshotAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('authorizeSnapshotAccess', 'Redshift', Promise.resolve(result), false, mock)
  },
  authorizeSnapshotAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('authorizeSnapshotAccess', 'Redshift', Promise.reject(result), true, mock)
  },
  batchDeleteClusterSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteClusterSnapshots', 'Redshift', Promise.resolve(result), true, mock)
  },
  batchDeleteClusterSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteClusterSnapshots', 'Redshift', Promise.resolve(result), false, mock)
  },
  batchDeleteClusterSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteClusterSnapshots', 'Redshift', Promise.reject(result), true, mock)
  },
  batchModifyClusterSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchModifyClusterSnapshots', 'Redshift', Promise.resolve(result), true, mock)
  },
  batchModifyClusterSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchModifyClusterSnapshots', 'Redshift', Promise.resolve(result), false, mock)
  },
  batchModifyClusterSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchModifyClusterSnapshots', 'Redshift', Promise.reject(result), true, mock)
  },
  cancelResize: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelResize', 'Redshift', Promise.resolve(result), true, mock)
  },
  cancelResizeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelResize', 'Redshift', Promise.resolve(result), false, mock)
  },
  cancelResizeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelResize', 'Redshift', Promise.reject(result), true, mock)
  },
  copyClusterSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyClusterSnapshot', 'Redshift', Promise.resolve(result), true, mock)
  },
  copyClusterSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyClusterSnapshot', 'Redshift', Promise.resolve(result), false, mock)
  },
  copyClusterSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyClusterSnapshot', 'Redshift', Promise.reject(result), true, mock)
  },
  createAuthenticationProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAuthenticationProfile', 'Redshift', Promise.resolve(result), true, mock)
  },
  createAuthenticationProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAuthenticationProfile', 'Redshift', Promise.resolve(result), false, mock)
  },
  createAuthenticationProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAuthenticationProfile', 'Redshift', Promise.reject(result), true, mock)
  },
  createCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'Redshift', Promise.resolve(result), true, mock)
  },
  createClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'Redshift', Promise.resolve(result), false, mock)
  },
  createClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCluster', 'Redshift', Promise.reject(result), true, mock)
  },
  createClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createClusterParameterGroup', 'Redshift', Promise.resolve(result), true, mock)
  },
  createClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createClusterParameterGroup', 'Redshift', Promise.resolve(result), false, mock)
  },
  createClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createClusterParameterGroup', 'Redshift', Promise.reject(result), true, mock)
  },
  createClusterSecurityGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createClusterSecurityGroup', 'Redshift', Promise.resolve(result), true, mock)
  },
  createClusterSecurityGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createClusterSecurityGroup', 'Redshift', Promise.resolve(result), false, mock)
  },
  createClusterSecurityGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createClusterSecurityGroup', 'Redshift', Promise.reject(result), true, mock)
  },
  createClusterSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createClusterSnapshot', 'Redshift', Promise.resolve(result), true, mock)
  },
  createClusterSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createClusterSnapshot', 'Redshift', Promise.resolve(result), false, mock)
  },
  createClusterSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createClusterSnapshot', 'Redshift', Promise.reject(result), true, mock)
  },
  createClusterSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createClusterSubnetGroup', 'Redshift', Promise.resolve(result), true, mock)
  },
  createClusterSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createClusterSubnetGroup', 'Redshift', Promise.resolve(result), false, mock)
  },
  createClusterSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createClusterSubnetGroup', 'Redshift', Promise.reject(result), true, mock)
  },
  createEndpointAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEndpointAccess', 'Redshift', Promise.resolve(result), true, mock)
  },
  createEndpointAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEndpointAccess', 'Redshift', Promise.resolve(result), false, mock)
  },
  createEndpointAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEndpointAccess', 'Redshift', Promise.reject(result), true, mock)
  },
  createEventSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEventSubscription', 'Redshift', Promise.resolve(result), true, mock)
  },
  createEventSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEventSubscription', 'Redshift', Promise.resolve(result), false, mock)
  },
  createEventSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEventSubscription', 'Redshift', Promise.reject(result), true, mock)
  },
  createHsmClientCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHsmClientCertificate', 'Redshift', Promise.resolve(result), true, mock)
  },
  createHsmClientCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHsmClientCertificate', 'Redshift', Promise.resolve(result), false, mock)
  },
  createHsmClientCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHsmClientCertificate', 'Redshift', Promise.reject(result), true, mock)
  },
  createHsmConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHsmConfiguration', 'Redshift', Promise.resolve(result), true, mock)
  },
  createHsmConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHsmConfiguration', 'Redshift', Promise.resolve(result), false, mock)
  },
  createHsmConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHsmConfiguration', 'Redshift', Promise.reject(result), true, mock)
  },
  createScheduledAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createScheduledAction', 'Redshift', Promise.resolve(result), true, mock)
  },
  createScheduledActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createScheduledAction', 'Redshift', Promise.resolve(result), false, mock)
  },
  createScheduledActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createScheduledAction', 'Redshift', Promise.reject(result), true, mock)
  },
  createSnapshotCopyGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSnapshotCopyGrant', 'Redshift', Promise.resolve(result), true, mock)
  },
  createSnapshotCopyGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSnapshotCopyGrant', 'Redshift', Promise.resolve(result), false, mock)
  },
  createSnapshotCopyGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSnapshotCopyGrant', 'Redshift', Promise.reject(result), true, mock)
  },
  createSnapshotSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSnapshotSchedule', 'Redshift', Promise.resolve(result), true, mock)
  },
  createSnapshotScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSnapshotSchedule', 'Redshift', Promise.resolve(result), false, mock)
  },
  createSnapshotScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSnapshotSchedule', 'Redshift', Promise.reject(result), true, mock)
  },
  createTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTags', 'Redshift', Promise.resolve(result), true, mock)
  },
  createTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTags', 'Redshift', Promise.resolve(result), false, mock)
  },
  createTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createTags', 'Redshift', Promise.reject(result), true, mock)
  },
  createUsageLimit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUsageLimit', 'Redshift', Promise.resolve(result), true, mock)
  },
  createUsageLimitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUsageLimit', 'Redshift', Promise.resolve(result), false, mock)
  },
  createUsageLimitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUsageLimit', 'Redshift', Promise.reject(result), true, mock)
  },
  deauthorizeDataShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deauthorizeDataShare', 'Redshift', Promise.resolve(result), true, mock)
  },
  deauthorizeDataShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deauthorizeDataShare', 'Redshift', Promise.resolve(result), false, mock)
  },
  deauthorizeDataShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deauthorizeDataShare', 'Redshift', Promise.reject(result), true, mock)
  },
  deleteAuthenticationProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAuthenticationProfile', 'Redshift', Promise.resolve(result), true, mock)
  },
  deleteAuthenticationProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAuthenticationProfile', 'Redshift', Promise.resolve(result), false, mock)
  },
  deleteAuthenticationProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAuthenticationProfile', 'Redshift', Promise.reject(result), true, mock)
  },
  deleteCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCluster', 'Redshift', Promise.resolve(result), true, mock)
  },
  deleteClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCluster', 'Redshift', Promise.resolve(result), false, mock)
  },
  deleteClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCluster', 'Redshift', Promise.reject(result), true, mock)
  },
  deleteClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteClusterParameterGroup', 'Redshift', Promise.resolve(result), true, mock)
  },
  deleteClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteClusterParameterGroup', 'Redshift', Promise.resolve(result), false, mock)
  },
  deleteClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteClusterParameterGroup', 'Redshift', Promise.reject(result), true, mock)
  },
  deleteClusterSecurityGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteClusterSecurityGroup', 'Redshift', Promise.resolve(result), true, mock)
  },
  deleteClusterSecurityGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteClusterSecurityGroup', 'Redshift', Promise.resolve(result), false, mock)
  },
  deleteClusterSecurityGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteClusterSecurityGroup', 'Redshift', Promise.reject(result), true, mock)
  },
  deleteClusterSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteClusterSnapshot', 'Redshift', Promise.resolve(result), true, mock)
  },
  deleteClusterSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteClusterSnapshot', 'Redshift', Promise.resolve(result), false, mock)
  },
  deleteClusterSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteClusterSnapshot', 'Redshift', Promise.reject(result), true, mock)
  },
  deleteClusterSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteClusterSubnetGroup', 'Redshift', Promise.resolve(result), true, mock)
  },
  deleteClusterSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteClusterSubnetGroup', 'Redshift', Promise.resolve(result), false, mock)
  },
  deleteClusterSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteClusterSubnetGroup', 'Redshift', Promise.reject(result), true, mock)
  },
  deleteEndpointAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEndpointAccess', 'Redshift', Promise.resolve(result), true, mock)
  },
  deleteEndpointAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEndpointAccess', 'Redshift', Promise.resolve(result), false, mock)
  },
  deleteEndpointAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEndpointAccess', 'Redshift', Promise.reject(result), true, mock)
  },
  deleteEventSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEventSubscription', 'Redshift', Promise.resolve(result), true, mock)
  },
  deleteEventSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEventSubscription', 'Redshift', Promise.resolve(result), false, mock)
  },
  deleteEventSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEventSubscription', 'Redshift', Promise.reject(result), true, mock)
  },
  deleteHsmClientCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHsmClientCertificate', 'Redshift', Promise.resolve(result), true, mock)
  },
  deleteHsmClientCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHsmClientCertificate', 'Redshift', Promise.resolve(result), false, mock)
  },
  deleteHsmClientCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHsmClientCertificate', 'Redshift', Promise.reject(result), true, mock)
  },
  deleteHsmConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHsmConfiguration', 'Redshift', Promise.resolve(result), true, mock)
  },
  deleteHsmConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHsmConfiguration', 'Redshift', Promise.resolve(result), false, mock)
  },
  deleteHsmConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHsmConfiguration', 'Redshift', Promise.reject(result), true, mock)
  },
  deletePartner: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePartner', 'Redshift', Promise.resolve(result), true, mock)
  },
  deletePartnerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePartner', 'Redshift', Promise.resolve(result), false, mock)
  },
  deletePartnerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePartner', 'Redshift', Promise.reject(result), true, mock)
  },
  deleteScheduledAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteScheduledAction', 'Redshift', Promise.resolve(result), true, mock)
  },
  deleteScheduledActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteScheduledAction', 'Redshift', Promise.resolve(result), false, mock)
  },
  deleteScheduledActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteScheduledAction', 'Redshift', Promise.reject(result), true, mock)
  },
  deleteSnapshotCopyGrant: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSnapshotCopyGrant', 'Redshift', Promise.resolve(result), true, mock)
  },
  deleteSnapshotCopyGrantAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSnapshotCopyGrant', 'Redshift', Promise.resolve(result), false, mock)
  },
  deleteSnapshotCopyGrantThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSnapshotCopyGrant', 'Redshift', Promise.reject(result), true, mock)
  },
  deleteSnapshotSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSnapshotSchedule', 'Redshift', Promise.resolve(result), true, mock)
  },
  deleteSnapshotScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSnapshotSchedule', 'Redshift', Promise.resolve(result), false, mock)
  },
  deleteSnapshotScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSnapshotSchedule', 'Redshift', Promise.reject(result), true, mock)
  },
  deleteTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTags', 'Redshift', Promise.resolve(result), true, mock)
  },
  deleteTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTags', 'Redshift', Promise.resolve(result), false, mock)
  },
  deleteTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTags', 'Redshift', Promise.reject(result), true, mock)
  },
  deleteUsageLimit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUsageLimit', 'Redshift', Promise.resolve(result), true, mock)
  },
  deleteUsageLimitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUsageLimit', 'Redshift', Promise.resolve(result), false, mock)
  },
  deleteUsageLimitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUsageLimit', 'Redshift', Promise.reject(result), true, mock)
  },
  describeAccountAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountAttributes', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeAccountAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountAttributes', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeAccountAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountAttributes', 'Redshift', Promise.reject(result), true, mock)
  },
  describeAuthenticationProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAuthenticationProfiles', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeAuthenticationProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAuthenticationProfiles', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeAuthenticationProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAuthenticationProfiles', 'Redshift', Promise.reject(result), true, mock)
  },
  describeClusterDbRevisions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterDbRevisions', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeClusterDbRevisionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterDbRevisions', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeClusterDbRevisionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterDbRevisions', 'Redshift', Promise.reject(result), true, mock)
  },
  describeClusterParameterGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterParameterGroups', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeClusterParameterGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterParameterGroups', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeClusterParameterGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterParameterGroups', 'Redshift', Promise.reject(result), true, mock)
  },
  describeClusterParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterParameters', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeClusterParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterParameters', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeClusterParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterParameters', 'Redshift', Promise.reject(result), true, mock)
  },
  describeClusterSecurityGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterSecurityGroups', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeClusterSecurityGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterSecurityGroups', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeClusterSecurityGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterSecurityGroups', 'Redshift', Promise.reject(result), true, mock)
  },
  describeClusterSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterSnapshots', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeClusterSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterSnapshots', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeClusterSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterSnapshots', 'Redshift', Promise.reject(result), true, mock)
  },
  describeClusterSubnetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterSubnetGroups', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeClusterSubnetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterSubnetGroups', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeClusterSubnetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterSubnetGroups', 'Redshift', Promise.reject(result), true, mock)
  },
  describeClusterTracks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterTracks', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeClusterTracksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterTracks', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeClusterTracksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterTracks', 'Redshift', Promise.reject(result), true, mock)
  },
  describeClusterVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterVersions', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeClusterVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterVersions', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeClusterVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusterVersions', 'Redshift', Promise.reject(result), true, mock)
  },
  describeClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusters', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusters', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClusters', 'Redshift', Promise.reject(result), true, mock)
  },
  describeDataShares: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataShares', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeDataSharesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataShares', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeDataSharesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataShares', 'Redshift', Promise.reject(result), true, mock)
  },
  describeDataSharesForConsumer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataSharesForConsumer', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeDataSharesForConsumerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataSharesForConsumer', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeDataSharesForConsumerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataSharesForConsumer', 'Redshift', Promise.reject(result), true, mock)
  },
  describeDataSharesForProducer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataSharesForProducer', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeDataSharesForProducerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataSharesForProducer', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeDataSharesForProducerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDataSharesForProducer', 'Redshift', Promise.reject(result), true, mock)
  },
  describeDefaultClusterParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDefaultClusterParameters', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeDefaultClusterParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDefaultClusterParameters', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeDefaultClusterParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDefaultClusterParameters', 'Redshift', Promise.reject(result), true, mock)
  },
  describeEndpointAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpointAccess', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeEndpointAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpointAccess', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeEndpointAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpointAccess', 'Redshift', Promise.reject(result), true, mock)
  },
  describeEndpointAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpointAuthorization', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeEndpointAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpointAuthorization', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeEndpointAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEndpointAuthorization', 'Redshift', Promise.reject(result), true, mock)
  },
  describeEventCategories: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventCategories', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeEventCategoriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventCategories', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeEventCategoriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventCategories', 'Redshift', Promise.reject(result), true, mock)
  },
  describeEventSubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventSubscriptions', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeEventSubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventSubscriptions', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeEventSubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEventSubscriptions', 'Redshift', Promise.reject(result), true, mock)
  },
  describeEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEvents', 'Redshift', Promise.reject(result), true, mock)
  },
  describeHsmClientCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHsmClientCertificates', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeHsmClientCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHsmClientCertificates', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeHsmClientCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHsmClientCertificates', 'Redshift', Promise.reject(result), true, mock)
  },
  describeHsmConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHsmConfigurations', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeHsmConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHsmConfigurations', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeHsmConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHsmConfigurations', 'Redshift', Promise.reject(result), true, mock)
  },
  describeLoggingStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLoggingStatus', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeLoggingStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLoggingStatus', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeLoggingStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLoggingStatus', 'Redshift', Promise.reject(result), true, mock)
  },
  describeNodeConfigurationOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNodeConfigurationOptions', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeNodeConfigurationOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNodeConfigurationOptions', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeNodeConfigurationOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNodeConfigurationOptions', 'Redshift', Promise.reject(result), true, mock)
  },
  describeOrderableClusterOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrderableClusterOptions', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeOrderableClusterOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrderableClusterOptions', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeOrderableClusterOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrderableClusterOptions', 'Redshift', Promise.reject(result), true, mock)
  },
  describePartners: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePartners', 'Redshift', Promise.resolve(result), true, mock)
  },
  describePartnersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePartners', 'Redshift', Promise.resolve(result), false, mock)
  },
  describePartnersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePartners', 'Redshift', Promise.reject(result), true, mock)
  },
  describeReservedNodeOfferings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReservedNodeOfferings', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeReservedNodeOfferingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReservedNodeOfferings', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeReservedNodeOfferingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReservedNodeOfferings', 'Redshift', Promise.reject(result), true, mock)
  },
  describeReservedNodes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReservedNodes', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeReservedNodesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReservedNodes', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeReservedNodesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReservedNodes', 'Redshift', Promise.reject(result), true, mock)
  },
  describeResize: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeResize', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeResizeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeResize', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeResizeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeResize', 'Redshift', Promise.reject(result), true, mock)
  },
  describeScheduledActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScheduledActions', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeScheduledActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScheduledActions', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeScheduledActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScheduledActions', 'Redshift', Promise.reject(result), true, mock)
  },
  describeSnapshotCopyGrants: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSnapshotCopyGrants', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeSnapshotCopyGrantsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSnapshotCopyGrants', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeSnapshotCopyGrantsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSnapshotCopyGrants', 'Redshift', Promise.reject(result), true, mock)
  },
  describeSnapshotSchedules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSnapshotSchedules', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeSnapshotSchedulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSnapshotSchedules', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeSnapshotSchedulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSnapshotSchedules', 'Redshift', Promise.reject(result), true, mock)
  },
  describeStorage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStorage', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeStorageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStorage', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeStorageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStorage', 'Redshift', Promise.reject(result), true, mock)
  },
  describeTableRestoreStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTableRestoreStatus', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeTableRestoreStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTableRestoreStatus', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeTableRestoreStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTableRestoreStatus', 'Redshift', Promise.reject(result), true, mock)
  },
  describeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTags', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTags', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTags', 'Redshift', Promise.reject(result), true, mock)
  },
  describeUsageLimits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUsageLimits', 'Redshift', Promise.resolve(result), true, mock)
  },
  describeUsageLimitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUsageLimits', 'Redshift', Promise.resolve(result), false, mock)
  },
  describeUsageLimitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUsageLimits', 'Redshift', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Redshift', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Redshift', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Redshift', Promise.reject(result), true, mock)
  },
  disableLogging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableLogging', 'Redshift', Promise.resolve(result), true, mock)
  },
  disableLoggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableLogging', 'Redshift', Promise.resolve(result), false, mock)
  },
  disableLoggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableLogging', 'Redshift', Promise.reject(result), true, mock)
  },
  disableSnapshotCopy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableSnapshotCopy', 'Redshift', Promise.resolve(result), true, mock)
  },
  disableSnapshotCopyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableSnapshotCopy', 'Redshift', Promise.resolve(result), false, mock)
  },
  disableSnapshotCopyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableSnapshotCopy', 'Redshift', Promise.reject(result), true, mock)
  },
  disassociateDataShareConsumer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDataShareConsumer', 'Redshift', Promise.resolve(result), true, mock)
  },
  disassociateDataShareConsumerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDataShareConsumer', 'Redshift', Promise.resolve(result), false, mock)
  },
  disassociateDataShareConsumerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDataShareConsumer', 'Redshift', Promise.reject(result), true, mock)
  },
  enableLogging: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableLogging', 'Redshift', Promise.resolve(result), true, mock)
  },
  enableLoggingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableLogging', 'Redshift', Promise.resolve(result), false, mock)
  },
  enableLoggingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableLogging', 'Redshift', Promise.reject(result), true, mock)
  },
  enableSnapshotCopy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableSnapshotCopy', 'Redshift', Promise.resolve(result), true, mock)
  },
  enableSnapshotCopyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableSnapshotCopy', 'Redshift', Promise.resolve(result), false, mock)
  },
  enableSnapshotCopyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableSnapshotCopy', 'Redshift', Promise.reject(result), true, mock)
  },
  getClusterCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClusterCredentials', 'Redshift', Promise.resolve(result), true, mock)
  },
  getClusterCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClusterCredentials', 'Redshift', Promise.resolve(result), false, mock)
  },
  getClusterCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClusterCredentials', 'Redshift', Promise.reject(result), true, mock)
  },
  getReservedNodeExchangeOfferings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReservedNodeExchangeOfferings', 'Redshift', Promise.resolve(result), true, mock)
  },
  getReservedNodeExchangeOfferingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReservedNodeExchangeOfferings', 'Redshift', Promise.resolve(result), false, mock)
  },
  getReservedNodeExchangeOfferingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReservedNodeExchangeOfferings', 'Redshift', Promise.reject(result), true, mock)
  },
  modifyAquaConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyAquaConfiguration', 'Redshift', Promise.resolve(result), true, mock)
  },
  modifyAquaConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyAquaConfiguration', 'Redshift', Promise.resolve(result), false, mock)
  },
  modifyAquaConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyAquaConfiguration', 'Redshift', Promise.reject(result), true, mock)
  },
  modifyAuthenticationProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyAuthenticationProfile', 'Redshift', Promise.resolve(result), true, mock)
  },
  modifyAuthenticationProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyAuthenticationProfile', 'Redshift', Promise.resolve(result), false, mock)
  },
  modifyAuthenticationProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyAuthenticationProfile', 'Redshift', Promise.reject(result), true, mock)
  },
  modifyCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyCluster', 'Redshift', Promise.resolve(result), true, mock)
  },
  modifyClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyCluster', 'Redshift', Promise.resolve(result), false, mock)
  },
  modifyClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyCluster', 'Redshift', Promise.reject(result), true, mock)
  },
  modifyClusterDbRevision: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClusterDbRevision', 'Redshift', Promise.resolve(result), true, mock)
  },
  modifyClusterDbRevisionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClusterDbRevision', 'Redshift', Promise.resolve(result), false, mock)
  },
  modifyClusterDbRevisionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClusterDbRevision', 'Redshift', Promise.reject(result), true, mock)
  },
  modifyClusterIamRoles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClusterIamRoles', 'Redshift', Promise.resolve(result), true, mock)
  },
  modifyClusterIamRolesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClusterIamRoles', 'Redshift', Promise.resolve(result), false, mock)
  },
  modifyClusterIamRolesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClusterIamRoles', 'Redshift', Promise.reject(result), true, mock)
  },
  modifyClusterMaintenance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClusterMaintenance', 'Redshift', Promise.resolve(result), true, mock)
  },
  modifyClusterMaintenanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClusterMaintenance', 'Redshift', Promise.resolve(result), false, mock)
  },
  modifyClusterMaintenanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClusterMaintenance', 'Redshift', Promise.reject(result), true, mock)
  },
  modifyClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClusterParameterGroup', 'Redshift', Promise.resolve(result), true, mock)
  },
  modifyClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClusterParameterGroup', 'Redshift', Promise.resolve(result), false, mock)
  },
  modifyClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClusterParameterGroup', 'Redshift', Promise.reject(result), true, mock)
  },
  modifyClusterSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClusterSnapshot', 'Redshift', Promise.resolve(result), true, mock)
  },
  modifyClusterSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClusterSnapshot', 'Redshift', Promise.resolve(result), false, mock)
  },
  modifyClusterSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClusterSnapshot', 'Redshift', Promise.reject(result), true, mock)
  },
  modifyClusterSnapshotSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClusterSnapshotSchedule', 'Redshift', Promise.resolve(result), true, mock)
  },
  modifyClusterSnapshotScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClusterSnapshotSchedule', 'Redshift', Promise.resolve(result), false, mock)
  },
  modifyClusterSnapshotScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClusterSnapshotSchedule', 'Redshift', Promise.reject(result), true, mock)
  },
  modifyClusterSubnetGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClusterSubnetGroup', 'Redshift', Promise.resolve(result), true, mock)
  },
  modifyClusterSubnetGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClusterSubnetGroup', 'Redshift', Promise.resolve(result), false, mock)
  },
  modifyClusterSubnetGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyClusterSubnetGroup', 'Redshift', Promise.reject(result), true, mock)
  },
  modifyEndpointAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyEndpointAccess', 'Redshift', Promise.resolve(result), true, mock)
  },
  modifyEndpointAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyEndpointAccess', 'Redshift', Promise.resolve(result), false, mock)
  },
  modifyEndpointAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyEndpointAccess', 'Redshift', Promise.reject(result), true, mock)
  },
  modifyEventSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyEventSubscription', 'Redshift', Promise.resolve(result), true, mock)
  },
  modifyEventSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyEventSubscription', 'Redshift', Promise.resolve(result), false, mock)
  },
  modifyEventSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyEventSubscription', 'Redshift', Promise.reject(result), true, mock)
  },
  modifyScheduledAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyScheduledAction', 'Redshift', Promise.resolve(result), true, mock)
  },
  modifyScheduledActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyScheduledAction', 'Redshift', Promise.resolve(result), false, mock)
  },
  modifyScheduledActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyScheduledAction', 'Redshift', Promise.reject(result), true, mock)
  },
  modifySnapshotCopyRetentionPeriod: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifySnapshotCopyRetentionPeriod', 'Redshift', Promise.resolve(result), true, mock)
  },
  modifySnapshotCopyRetentionPeriodAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifySnapshotCopyRetentionPeriod', 'Redshift', Promise.resolve(result), false, mock)
  },
  modifySnapshotCopyRetentionPeriodThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifySnapshotCopyRetentionPeriod', 'Redshift', Promise.reject(result), true, mock)
  },
  modifySnapshotSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifySnapshotSchedule', 'Redshift', Promise.resolve(result), true, mock)
  },
  modifySnapshotScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifySnapshotSchedule', 'Redshift', Promise.resolve(result), false, mock)
  },
  modifySnapshotScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifySnapshotSchedule', 'Redshift', Promise.reject(result), true, mock)
  },
  modifyUsageLimit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyUsageLimit', 'Redshift', Promise.resolve(result), true, mock)
  },
  modifyUsageLimitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyUsageLimit', 'Redshift', Promise.resolve(result), false, mock)
  },
  modifyUsageLimitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyUsageLimit', 'Redshift', Promise.reject(result), true, mock)
  },
  pauseCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pauseCluster', 'Redshift', Promise.resolve(result), true, mock)
  },
  pauseClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pauseCluster', 'Redshift', Promise.resolve(result), false, mock)
  },
  pauseClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pauseCluster', 'Redshift', Promise.reject(result), true, mock)
  },
  purchaseReservedNodeOffering: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purchaseReservedNodeOffering', 'Redshift', Promise.resolve(result), true, mock)
  },
  purchaseReservedNodeOfferingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purchaseReservedNodeOffering', 'Redshift', Promise.resolve(result), false, mock)
  },
  purchaseReservedNodeOfferingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('purchaseReservedNodeOffering', 'Redshift', Promise.reject(result), true, mock)
  },
  rebootCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootCluster', 'Redshift', Promise.resolve(result), true, mock)
  },
  rebootClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootCluster', 'Redshift', Promise.resolve(result), false, mock)
  },
  rebootClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rebootCluster', 'Redshift', Promise.reject(result), true, mock)
  },
  rejectDataShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectDataShare', 'Redshift', Promise.resolve(result), true, mock)
  },
  rejectDataShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectDataShare', 'Redshift', Promise.resolve(result), false, mock)
  },
  rejectDataShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rejectDataShare', 'Redshift', Promise.reject(result), true, mock)
  },
  resetClusterParameterGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetClusterParameterGroup', 'Redshift', Promise.resolve(result), true, mock)
  },
  resetClusterParameterGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetClusterParameterGroup', 'Redshift', Promise.resolve(result), false, mock)
  },
  resetClusterParameterGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetClusterParameterGroup', 'Redshift', Promise.reject(result), true, mock)
  },
  resizeCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resizeCluster', 'Redshift', Promise.resolve(result), true, mock)
  },
  resizeClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resizeCluster', 'Redshift', Promise.resolve(result), false, mock)
  },
  resizeClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resizeCluster', 'Redshift', Promise.reject(result), true, mock)
  },
  restoreFromClusterSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreFromClusterSnapshot', 'Redshift', Promise.resolve(result), true, mock)
  },
  restoreFromClusterSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreFromClusterSnapshot', 'Redshift', Promise.resolve(result), false, mock)
  },
  restoreFromClusterSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreFromClusterSnapshot', 'Redshift', Promise.reject(result), true, mock)
  },
  restoreTableFromClusterSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreTableFromClusterSnapshot', 'Redshift', Promise.resolve(result), true, mock)
  },
  restoreTableFromClusterSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreTableFromClusterSnapshot', 'Redshift', Promise.resolve(result), false, mock)
  },
  restoreTableFromClusterSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('restoreTableFromClusterSnapshot', 'Redshift', Promise.reject(result), true, mock)
  },
  resumeCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resumeCluster', 'Redshift', Promise.resolve(result), true, mock)
  },
  resumeClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resumeCluster', 'Redshift', Promise.resolve(result), false, mock)
  },
  resumeClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resumeCluster', 'Redshift', Promise.reject(result), true, mock)
  },
  revokeClusterSecurityGroupIngress: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeClusterSecurityGroupIngress', 'Redshift', Promise.resolve(result), true, mock)
  },
  revokeClusterSecurityGroupIngressAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeClusterSecurityGroupIngress', 'Redshift', Promise.resolve(result), false, mock)
  },
  revokeClusterSecurityGroupIngressThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeClusterSecurityGroupIngress', 'Redshift', Promise.reject(result), true, mock)
  },
  revokeEndpointAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeEndpointAccess', 'Redshift', Promise.resolve(result), true, mock)
  },
  revokeEndpointAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeEndpointAccess', 'Redshift', Promise.resolve(result), false, mock)
  },
  revokeEndpointAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeEndpointAccess', 'Redshift', Promise.reject(result), true, mock)
  },
  revokeSnapshotAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeSnapshotAccess', 'Redshift', Promise.resolve(result), true, mock)
  },
  revokeSnapshotAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeSnapshotAccess', 'Redshift', Promise.resolve(result), false, mock)
  },
  revokeSnapshotAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('revokeSnapshotAccess', 'Redshift', Promise.reject(result), true, mock)
  },
  rotateEncryptionKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rotateEncryptionKey', 'Redshift', Promise.resolve(result), true, mock)
  },
  rotateEncryptionKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rotateEncryptionKey', 'Redshift', Promise.resolve(result), false, mock)
  },
  rotateEncryptionKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rotateEncryptionKey', 'Redshift', Promise.reject(result), true, mock)
  },
  updatePartnerStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePartnerStatus', 'Redshift', Promise.resolve(result), true, mock)
  },
  updatePartnerStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePartnerStatus', 'Redshift', Promise.resolve(result), false, mock)
  },
  updatePartnerStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePartnerStatus', 'Redshift', Promise.reject(result), true, mock)
  },
}
