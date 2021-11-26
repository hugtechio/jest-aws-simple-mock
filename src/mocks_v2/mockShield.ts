
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
  export const mockShield = {
  associateDRTLogBucket: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDRTLogBucket', 'Shield', Promise.resolve(result), true, mock)
  },
  associateDRTLogBucketAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDRTLogBucket', 'Shield', Promise.resolve(result), false, mock)
  },
  associateDRTLogBucketThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDRTLogBucket', 'Shield', Promise.reject(result), true, mock)
  },
  associateDRTRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDRTRole', 'Shield', Promise.resolve(result), true, mock)
  },
  associateDRTRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDRTRole', 'Shield', Promise.resolve(result), false, mock)
  },
  associateDRTRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateDRTRole', 'Shield', Promise.reject(result), true, mock)
  },
  associateHealthCheck: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateHealthCheck', 'Shield', Promise.resolve(result), true, mock)
  },
  associateHealthCheckAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateHealthCheck', 'Shield', Promise.resolve(result), false, mock)
  },
  associateHealthCheckThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateHealthCheck', 'Shield', Promise.reject(result), true, mock)
  },
  associateProactiveEngagementDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateProactiveEngagementDetails', 'Shield', Promise.resolve(result), true, mock)
  },
  associateProactiveEngagementDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateProactiveEngagementDetails', 'Shield', Promise.resolve(result), false, mock)
  },
  associateProactiveEngagementDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateProactiveEngagementDetails', 'Shield', Promise.reject(result), true, mock)
  },
  createProtection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProtection', 'Shield', Promise.resolve(result), true, mock)
  },
  createProtectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProtection', 'Shield', Promise.resolve(result), false, mock)
  },
  createProtectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProtection', 'Shield', Promise.reject(result), true, mock)
  },
  createProtectionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProtectionGroup', 'Shield', Promise.resolve(result), true, mock)
  },
  createProtectionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProtectionGroup', 'Shield', Promise.resolve(result), false, mock)
  },
  createProtectionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProtectionGroup', 'Shield', Promise.reject(result), true, mock)
  },
  createSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSubscription', 'Shield', Promise.resolve(result), true, mock)
  },
  createSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSubscription', 'Shield', Promise.resolve(result), false, mock)
  },
  createSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSubscription', 'Shield', Promise.reject(result), true, mock)
  },
  deleteProtection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProtection', 'Shield', Promise.resolve(result), true, mock)
  },
  deleteProtectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProtection', 'Shield', Promise.resolve(result), false, mock)
  },
  deleteProtectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProtection', 'Shield', Promise.reject(result), true, mock)
  },
  deleteProtectionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProtectionGroup', 'Shield', Promise.resolve(result), true, mock)
  },
  deleteProtectionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProtectionGroup', 'Shield', Promise.resolve(result), false, mock)
  },
  deleteProtectionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProtectionGroup', 'Shield', Promise.reject(result), true, mock)
  },
  deleteSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSubscription', 'Shield', Promise.resolve(result), true, mock)
  },
  deleteSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSubscription', 'Shield', Promise.resolve(result), false, mock)
  },
  deleteSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSubscription', 'Shield', Promise.reject(result), true, mock)
  },
  describeAttack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAttack', 'Shield', Promise.resolve(result), true, mock)
  },
  describeAttackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAttack', 'Shield', Promise.resolve(result), false, mock)
  },
  describeAttackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAttack', 'Shield', Promise.reject(result), true, mock)
  },
  describeAttackStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAttackStatistics', 'Shield', Promise.resolve(result), true, mock)
  },
  describeAttackStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAttackStatistics', 'Shield', Promise.resolve(result), false, mock)
  },
  describeAttackStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAttackStatistics', 'Shield', Promise.reject(result), true, mock)
  },
  describeDRTAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDRTAccess', 'Shield', Promise.resolve(result), true, mock)
  },
  describeDRTAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDRTAccess', 'Shield', Promise.resolve(result), false, mock)
  },
  describeDRTAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDRTAccess', 'Shield', Promise.reject(result), true, mock)
  },
  describeEmergencyContactSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEmergencyContactSettings', 'Shield', Promise.resolve(result), true, mock)
  },
  describeEmergencyContactSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEmergencyContactSettings', 'Shield', Promise.resolve(result), false, mock)
  },
  describeEmergencyContactSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEmergencyContactSettings', 'Shield', Promise.reject(result), true, mock)
  },
  describeProtection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProtection', 'Shield', Promise.resolve(result), true, mock)
  },
  describeProtectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProtection', 'Shield', Promise.resolve(result), false, mock)
  },
  describeProtectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProtection', 'Shield', Promise.reject(result), true, mock)
  },
  describeProtectionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProtectionGroup', 'Shield', Promise.resolve(result), true, mock)
  },
  describeProtectionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProtectionGroup', 'Shield', Promise.resolve(result), false, mock)
  },
  describeProtectionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProtectionGroup', 'Shield', Promise.reject(result), true, mock)
  },
  describeSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSubscription', 'Shield', Promise.resolve(result), true, mock)
  },
  describeSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSubscription', 'Shield', Promise.resolve(result), false, mock)
  },
  describeSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSubscription', 'Shield', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Shield', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Shield', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Shield', Promise.reject(result), true, mock)
  },
  disableProactiveEngagement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableProactiveEngagement', 'Shield', Promise.resolve(result), true, mock)
  },
  disableProactiveEngagementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableProactiveEngagement', 'Shield', Promise.resolve(result), false, mock)
  },
  disableProactiveEngagementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableProactiveEngagement', 'Shield', Promise.reject(result), true, mock)
  },
  disassociateDRTLogBucket: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDRTLogBucket', 'Shield', Promise.resolve(result), true, mock)
  },
  disassociateDRTLogBucketAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDRTLogBucket', 'Shield', Promise.resolve(result), false, mock)
  },
  disassociateDRTLogBucketThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDRTLogBucket', 'Shield', Promise.reject(result), true, mock)
  },
  disassociateDRTRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDRTRole', 'Shield', Promise.resolve(result), true, mock)
  },
  disassociateDRTRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDRTRole', 'Shield', Promise.resolve(result), false, mock)
  },
  disassociateDRTRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateDRTRole', 'Shield', Promise.reject(result), true, mock)
  },
  disassociateHealthCheck: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateHealthCheck', 'Shield', Promise.resolve(result), true, mock)
  },
  disassociateHealthCheckAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateHealthCheck', 'Shield', Promise.resolve(result), false, mock)
  },
  disassociateHealthCheckThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateHealthCheck', 'Shield', Promise.reject(result), true, mock)
  },
  enableProactiveEngagement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableProactiveEngagement', 'Shield', Promise.resolve(result), true, mock)
  },
  enableProactiveEngagementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableProactiveEngagement', 'Shield', Promise.resolve(result), false, mock)
  },
  enableProactiveEngagementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableProactiveEngagement', 'Shield', Promise.reject(result), true, mock)
  },
  getSubscriptionState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSubscriptionState', 'Shield', Promise.resolve(result), true, mock)
  },
  getSubscriptionStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSubscriptionState', 'Shield', Promise.resolve(result), false, mock)
  },
  getSubscriptionStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSubscriptionState', 'Shield', Promise.reject(result), true, mock)
  },
  listAttacks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAttacks', 'Shield', Promise.resolve(result), true, mock)
  },
  listAttacksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAttacks', 'Shield', Promise.resolve(result), false, mock)
  },
  listAttacksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAttacks', 'Shield', Promise.reject(result), true, mock)
  },
  listProtectionGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProtectionGroups', 'Shield', Promise.resolve(result), true, mock)
  },
  listProtectionGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProtectionGroups', 'Shield', Promise.resolve(result), false, mock)
  },
  listProtectionGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProtectionGroups', 'Shield', Promise.reject(result), true, mock)
  },
  listProtections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProtections', 'Shield', Promise.resolve(result), true, mock)
  },
  listProtectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProtections', 'Shield', Promise.resolve(result), false, mock)
  },
  listProtectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProtections', 'Shield', Promise.reject(result), true, mock)
  },
  listResourcesInProtectionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourcesInProtectionGroup', 'Shield', Promise.resolve(result), true, mock)
  },
  listResourcesInProtectionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourcesInProtectionGroup', 'Shield', Promise.resolve(result), false, mock)
  },
  listResourcesInProtectionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourcesInProtectionGroup', 'Shield', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Shield', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Shield', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Shield', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Shield', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Shield', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Shield', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Shield', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Shield', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Shield', Promise.reject(result), true, mock)
  },
  updateEmergencyContactSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEmergencyContactSettings', 'Shield', Promise.resolve(result), true, mock)
  },
  updateEmergencyContactSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEmergencyContactSettings', 'Shield', Promise.resolve(result), false, mock)
  },
  updateEmergencyContactSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEmergencyContactSettings', 'Shield', Promise.reject(result), true, mock)
  },
  updateProtectionGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProtectionGroup', 'Shield', Promise.resolve(result), true, mock)
  },
  updateProtectionGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProtectionGroup', 'Shield', Promise.resolve(result), false, mock)
  },
  updateProtectionGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProtectionGroup', 'Shield', Promise.reject(result), true, mock)
  },
  updateSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSubscription', 'Shield', Promise.resolve(result), true, mock)
  },
  updateSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSubscription', 'Shield', Promise.resolve(result), false, mock)
  },
  updateSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSubscription', 'Shield', Promise.reject(result), true, mock)
  },
}
