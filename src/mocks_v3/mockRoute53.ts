
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockRoute53 = {
  activateKeySigningKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'activateKeySigningKey', 'Route53', Promise.resolve(result), true, mock)
  },
  activateKeySigningKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'activateKeySigningKey', 'Route53', Promise.resolve(result), false, mock)
  },
  activateKeySigningKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'activateKeySigningKey', 'Route53', Promise.reject(result), true, mock)
  },
  associateVPCWithHostedZone: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'associateVPCWithHostedZone', 'Route53', Promise.resolve(result), true, mock)
  },
  associateVPCWithHostedZoneAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'associateVPCWithHostedZone', 'Route53', Promise.resolve(result), false, mock)
  },
  associateVPCWithHostedZoneThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'associateVPCWithHostedZone', 'Route53', Promise.reject(result), true, mock)
  },
  changeResourceRecordSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'changeResourceRecordSets', 'Route53', Promise.resolve(result), true, mock)
  },
  changeResourceRecordSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'changeResourceRecordSets', 'Route53', Promise.resolve(result), false, mock)
  },
  changeResourceRecordSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'changeResourceRecordSets', 'Route53', Promise.reject(result), true, mock)
  },
  changeTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'changeTagsForResource', 'Route53', Promise.resolve(result), true, mock)
  },
  changeTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'changeTagsForResource', 'Route53', Promise.resolve(result), false, mock)
  },
  changeTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'changeTagsForResource', 'Route53', Promise.reject(result), true, mock)
  },
  createHealthCheck: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createHealthCheck', 'Route53', Promise.resolve(result), true, mock)
  },
  createHealthCheckAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createHealthCheck', 'Route53', Promise.resolve(result), false, mock)
  },
  createHealthCheckThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createHealthCheck', 'Route53', Promise.reject(result), true, mock)
  },
  createHostedZone: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createHostedZone', 'Route53', Promise.resolve(result), true, mock)
  },
  createHostedZoneAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createHostedZone', 'Route53', Promise.resolve(result), false, mock)
  },
  createHostedZoneThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createHostedZone', 'Route53', Promise.reject(result), true, mock)
  },
  createKeySigningKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createKeySigningKey', 'Route53', Promise.resolve(result), true, mock)
  },
  createKeySigningKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createKeySigningKey', 'Route53', Promise.resolve(result), false, mock)
  },
  createKeySigningKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createKeySigningKey', 'Route53', Promise.reject(result), true, mock)
  },
  createQueryLoggingConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createQueryLoggingConfig', 'Route53', Promise.resolve(result), true, mock)
  },
  createQueryLoggingConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createQueryLoggingConfig', 'Route53', Promise.resolve(result), false, mock)
  },
  createQueryLoggingConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createQueryLoggingConfig', 'Route53', Promise.reject(result), true, mock)
  },
  createReusableDelegationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createReusableDelegationSet', 'Route53', Promise.resolve(result), true, mock)
  },
  createReusableDelegationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createReusableDelegationSet', 'Route53', Promise.resolve(result), false, mock)
  },
  createReusableDelegationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createReusableDelegationSet', 'Route53', Promise.reject(result), true, mock)
  },
  createTrafficPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createTrafficPolicy', 'Route53', Promise.resolve(result), true, mock)
  },
  createTrafficPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createTrafficPolicy', 'Route53', Promise.resolve(result), false, mock)
  },
  createTrafficPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createTrafficPolicy', 'Route53', Promise.reject(result), true, mock)
  },
  createTrafficPolicyInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createTrafficPolicyInstance', 'Route53', Promise.resolve(result), true, mock)
  },
  createTrafficPolicyInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createTrafficPolicyInstance', 'Route53', Promise.resolve(result), false, mock)
  },
  createTrafficPolicyInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createTrafficPolicyInstance', 'Route53', Promise.reject(result), true, mock)
  },
  createTrafficPolicyVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createTrafficPolicyVersion', 'Route53', Promise.resolve(result), true, mock)
  },
  createTrafficPolicyVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createTrafficPolicyVersion', 'Route53', Promise.resolve(result), false, mock)
  },
  createTrafficPolicyVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createTrafficPolicyVersion', 'Route53', Promise.reject(result), true, mock)
  },
  createVPCAssociationAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createVPCAssociationAuthorization', 'Route53', Promise.resolve(result), true, mock)
  },
  createVPCAssociationAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createVPCAssociationAuthorization', 'Route53', Promise.resolve(result), false, mock)
  },
  createVPCAssociationAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'createVPCAssociationAuthorization', 'Route53', Promise.reject(result), true, mock)
  },
  deactivateKeySigningKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deactivateKeySigningKey', 'Route53', Promise.resolve(result), true, mock)
  },
  deactivateKeySigningKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deactivateKeySigningKey', 'Route53', Promise.resolve(result), false, mock)
  },
  deactivateKeySigningKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deactivateKeySigningKey', 'Route53', Promise.reject(result), true, mock)
  },
  deleteHealthCheck: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteHealthCheck', 'Route53', Promise.resolve(result), true, mock)
  },
  deleteHealthCheckAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteHealthCheck', 'Route53', Promise.resolve(result), false, mock)
  },
  deleteHealthCheckThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteHealthCheck', 'Route53', Promise.reject(result), true, mock)
  },
  deleteHostedZone: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteHostedZone', 'Route53', Promise.resolve(result), true, mock)
  },
  deleteHostedZoneAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteHostedZone', 'Route53', Promise.resolve(result), false, mock)
  },
  deleteHostedZoneThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteHostedZone', 'Route53', Promise.reject(result), true, mock)
  },
  deleteKeySigningKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteKeySigningKey', 'Route53', Promise.resolve(result), true, mock)
  },
  deleteKeySigningKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteKeySigningKey', 'Route53', Promise.resolve(result), false, mock)
  },
  deleteKeySigningKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteKeySigningKey', 'Route53', Promise.reject(result), true, mock)
  },
  deleteQueryLoggingConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteQueryLoggingConfig', 'Route53', Promise.resolve(result), true, mock)
  },
  deleteQueryLoggingConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteQueryLoggingConfig', 'Route53', Promise.resolve(result), false, mock)
  },
  deleteQueryLoggingConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteQueryLoggingConfig', 'Route53', Promise.reject(result), true, mock)
  },
  deleteReusableDelegationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteReusableDelegationSet', 'Route53', Promise.resolve(result), true, mock)
  },
  deleteReusableDelegationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteReusableDelegationSet', 'Route53', Promise.resolve(result), false, mock)
  },
  deleteReusableDelegationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteReusableDelegationSet', 'Route53', Promise.reject(result), true, mock)
  },
  deleteTrafficPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteTrafficPolicy', 'Route53', Promise.resolve(result), true, mock)
  },
  deleteTrafficPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteTrafficPolicy', 'Route53', Promise.resolve(result), false, mock)
  },
  deleteTrafficPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteTrafficPolicy', 'Route53', Promise.reject(result), true, mock)
  },
  deleteTrafficPolicyInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteTrafficPolicyInstance', 'Route53', Promise.resolve(result), true, mock)
  },
  deleteTrafficPolicyInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteTrafficPolicyInstance', 'Route53', Promise.resolve(result), false, mock)
  },
  deleteTrafficPolicyInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteTrafficPolicyInstance', 'Route53', Promise.reject(result), true, mock)
  },
  deleteVPCAssociationAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteVPCAssociationAuthorization', 'Route53', Promise.resolve(result), true, mock)
  },
  deleteVPCAssociationAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteVPCAssociationAuthorization', 'Route53', Promise.resolve(result), false, mock)
  },
  deleteVPCAssociationAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'deleteVPCAssociationAuthorization', 'Route53', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'destroy', 'Route53', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'destroy', 'Route53', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'destroy', 'Route53', Promise.reject(result), true, mock)
  },
  disableHostedZoneDNSSEC: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'disableHostedZoneDNSSEC', 'Route53', Promise.resolve(result), true, mock)
  },
  disableHostedZoneDNSSECAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'disableHostedZoneDNSSEC', 'Route53', Promise.resolve(result), false, mock)
  },
  disableHostedZoneDNSSECThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'disableHostedZoneDNSSEC', 'Route53', Promise.reject(result), true, mock)
  },
  disassociateVPCFromHostedZone: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'disassociateVPCFromHostedZone', 'Route53', Promise.resolve(result), true, mock)
  },
  disassociateVPCFromHostedZoneAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'disassociateVPCFromHostedZone', 'Route53', Promise.resolve(result), false, mock)
  },
  disassociateVPCFromHostedZoneThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'disassociateVPCFromHostedZone', 'Route53', Promise.reject(result), true, mock)
  },
  enableHostedZoneDNSSEC: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'enableHostedZoneDNSSEC', 'Route53', Promise.resolve(result), true, mock)
  },
  enableHostedZoneDNSSECAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'enableHostedZoneDNSSEC', 'Route53', Promise.resolve(result), false, mock)
  },
  enableHostedZoneDNSSECThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'enableHostedZoneDNSSEC', 'Route53', Promise.reject(result), true, mock)
  },
  getAccountLimit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getAccountLimit', 'Route53', Promise.resolve(result), true, mock)
  },
  getAccountLimitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getAccountLimit', 'Route53', Promise.resolve(result), false, mock)
  },
  getAccountLimitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getAccountLimit', 'Route53', Promise.reject(result), true, mock)
  },
  getChange: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getChange', 'Route53', Promise.resolve(result), true, mock)
  },
  getChangeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getChange', 'Route53', Promise.resolve(result), false, mock)
  },
  getChangeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getChange', 'Route53', Promise.reject(result), true, mock)
  },
  getCheckerIpRanges: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getCheckerIpRanges', 'Route53', Promise.resolve(result), true, mock)
  },
  getCheckerIpRangesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getCheckerIpRanges', 'Route53', Promise.resolve(result), false, mock)
  },
  getCheckerIpRangesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getCheckerIpRanges', 'Route53', Promise.reject(result), true, mock)
  },
  getDNSSEC: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getDNSSEC', 'Route53', Promise.resolve(result), true, mock)
  },
  getDNSSECAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getDNSSEC', 'Route53', Promise.resolve(result), false, mock)
  },
  getDNSSECThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getDNSSEC', 'Route53', Promise.reject(result), true, mock)
  },
  getGeoLocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getGeoLocation', 'Route53', Promise.resolve(result), true, mock)
  },
  getGeoLocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getGeoLocation', 'Route53', Promise.resolve(result), false, mock)
  },
  getGeoLocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getGeoLocation', 'Route53', Promise.reject(result), true, mock)
  },
  getHealthCheck: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getHealthCheck', 'Route53', Promise.resolve(result), true, mock)
  },
  getHealthCheckAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getHealthCheck', 'Route53', Promise.resolve(result), false, mock)
  },
  getHealthCheckThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getHealthCheck', 'Route53', Promise.reject(result), true, mock)
  },
  getHealthCheckCount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getHealthCheckCount', 'Route53', Promise.resolve(result), true, mock)
  },
  getHealthCheckCountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getHealthCheckCount', 'Route53', Promise.resolve(result), false, mock)
  },
  getHealthCheckCountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getHealthCheckCount', 'Route53', Promise.reject(result), true, mock)
  },
  getHealthCheckLastFailureReason: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getHealthCheckLastFailureReason', 'Route53', Promise.resolve(result), true, mock)
  },
  getHealthCheckLastFailureReasonAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getHealthCheckLastFailureReason', 'Route53', Promise.resolve(result), false, mock)
  },
  getHealthCheckLastFailureReasonThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getHealthCheckLastFailureReason', 'Route53', Promise.reject(result), true, mock)
  },
  getHealthCheckStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getHealthCheckStatus', 'Route53', Promise.resolve(result), true, mock)
  },
  getHealthCheckStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getHealthCheckStatus', 'Route53', Promise.resolve(result), false, mock)
  },
  getHealthCheckStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getHealthCheckStatus', 'Route53', Promise.reject(result), true, mock)
  },
  getHostedZone: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getHostedZone', 'Route53', Promise.resolve(result), true, mock)
  },
  getHostedZoneAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getHostedZone', 'Route53', Promise.resolve(result), false, mock)
  },
  getHostedZoneThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getHostedZone', 'Route53', Promise.reject(result), true, mock)
  },
  getHostedZoneCount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getHostedZoneCount', 'Route53', Promise.resolve(result), true, mock)
  },
  getHostedZoneCountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getHostedZoneCount', 'Route53', Promise.resolve(result), false, mock)
  },
  getHostedZoneCountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getHostedZoneCount', 'Route53', Promise.reject(result), true, mock)
  },
  getHostedZoneLimit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getHostedZoneLimit', 'Route53', Promise.resolve(result), true, mock)
  },
  getHostedZoneLimitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getHostedZoneLimit', 'Route53', Promise.resolve(result), false, mock)
  },
  getHostedZoneLimitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getHostedZoneLimit', 'Route53', Promise.reject(result), true, mock)
  },
  getQueryLoggingConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getQueryLoggingConfig', 'Route53', Promise.resolve(result), true, mock)
  },
  getQueryLoggingConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getQueryLoggingConfig', 'Route53', Promise.resolve(result), false, mock)
  },
  getQueryLoggingConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getQueryLoggingConfig', 'Route53', Promise.reject(result), true, mock)
  },
  getReusableDelegationSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getReusableDelegationSet', 'Route53', Promise.resolve(result), true, mock)
  },
  getReusableDelegationSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getReusableDelegationSet', 'Route53', Promise.resolve(result), false, mock)
  },
  getReusableDelegationSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getReusableDelegationSet', 'Route53', Promise.reject(result), true, mock)
  },
  getReusableDelegationSetLimit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getReusableDelegationSetLimit', 'Route53', Promise.resolve(result), true, mock)
  },
  getReusableDelegationSetLimitAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getReusableDelegationSetLimit', 'Route53', Promise.resolve(result), false, mock)
  },
  getReusableDelegationSetLimitThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getReusableDelegationSetLimit', 'Route53', Promise.reject(result), true, mock)
  },
  getTrafficPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getTrafficPolicy', 'Route53', Promise.resolve(result), true, mock)
  },
  getTrafficPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getTrafficPolicy', 'Route53', Promise.resolve(result), false, mock)
  },
  getTrafficPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getTrafficPolicy', 'Route53', Promise.reject(result), true, mock)
  },
  getTrafficPolicyInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getTrafficPolicyInstance', 'Route53', Promise.resolve(result), true, mock)
  },
  getTrafficPolicyInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getTrafficPolicyInstance', 'Route53', Promise.resolve(result), false, mock)
  },
  getTrafficPolicyInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getTrafficPolicyInstance', 'Route53', Promise.reject(result), true, mock)
  },
  getTrafficPolicyInstanceCount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getTrafficPolicyInstanceCount', 'Route53', Promise.resolve(result), true, mock)
  },
  getTrafficPolicyInstanceCountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getTrafficPolicyInstanceCount', 'Route53', Promise.resolve(result), false, mock)
  },
  getTrafficPolicyInstanceCountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'getTrafficPolicyInstanceCount', 'Route53', Promise.reject(result), true, mock)
  },
  listGeoLocations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listGeoLocations', 'Route53', Promise.resolve(result), true, mock)
  },
  listGeoLocationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listGeoLocations', 'Route53', Promise.resolve(result), false, mock)
  },
  listGeoLocationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listGeoLocations', 'Route53', Promise.reject(result), true, mock)
  },
  listHealthChecks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listHealthChecks', 'Route53', Promise.resolve(result), true, mock)
  },
  listHealthChecksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listHealthChecks', 'Route53', Promise.resolve(result), false, mock)
  },
  listHealthChecksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listHealthChecks', 'Route53', Promise.reject(result), true, mock)
  },
  listHostedZones: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listHostedZones', 'Route53', Promise.resolve(result), true, mock)
  },
  listHostedZonesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listHostedZones', 'Route53', Promise.resolve(result), false, mock)
  },
  listHostedZonesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listHostedZones', 'Route53', Promise.reject(result), true, mock)
  },
  listHostedZonesByName: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listHostedZonesByName', 'Route53', Promise.resolve(result), true, mock)
  },
  listHostedZonesByNameAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listHostedZonesByName', 'Route53', Promise.resolve(result), false, mock)
  },
  listHostedZonesByNameThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listHostedZonesByName', 'Route53', Promise.reject(result), true, mock)
  },
  listHostedZonesByVPC: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listHostedZonesByVPC', 'Route53', Promise.resolve(result), true, mock)
  },
  listHostedZonesByVPCAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listHostedZonesByVPC', 'Route53', Promise.resolve(result), false, mock)
  },
  listHostedZonesByVPCThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listHostedZonesByVPC', 'Route53', Promise.reject(result), true, mock)
  },
  listQueryLoggingConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listQueryLoggingConfigs', 'Route53', Promise.resolve(result), true, mock)
  },
  listQueryLoggingConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listQueryLoggingConfigs', 'Route53', Promise.resolve(result), false, mock)
  },
  listQueryLoggingConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listQueryLoggingConfigs', 'Route53', Promise.reject(result), true, mock)
  },
  listResourceRecordSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listResourceRecordSets', 'Route53', Promise.resolve(result), true, mock)
  },
  listResourceRecordSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listResourceRecordSets', 'Route53', Promise.resolve(result), false, mock)
  },
  listResourceRecordSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listResourceRecordSets', 'Route53', Promise.reject(result), true, mock)
  },
  listReusableDelegationSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listReusableDelegationSets', 'Route53', Promise.resolve(result), true, mock)
  },
  listReusableDelegationSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listReusableDelegationSets', 'Route53', Promise.resolve(result), false, mock)
  },
  listReusableDelegationSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listReusableDelegationSets', 'Route53', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listTagsForResource', 'Route53', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listTagsForResource', 'Route53', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listTagsForResource', 'Route53', Promise.reject(result), true, mock)
  },
  listTagsForResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listTagsForResources', 'Route53', Promise.resolve(result), true, mock)
  },
  listTagsForResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listTagsForResources', 'Route53', Promise.resolve(result), false, mock)
  },
  listTagsForResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listTagsForResources', 'Route53', Promise.reject(result), true, mock)
  },
  listTrafficPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listTrafficPolicies', 'Route53', Promise.resolve(result), true, mock)
  },
  listTrafficPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listTrafficPolicies', 'Route53', Promise.resolve(result), false, mock)
  },
  listTrafficPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listTrafficPolicies', 'Route53', Promise.reject(result), true, mock)
  },
  listTrafficPolicyInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listTrafficPolicyInstances', 'Route53', Promise.resolve(result), true, mock)
  },
  listTrafficPolicyInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listTrafficPolicyInstances', 'Route53', Promise.resolve(result), false, mock)
  },
  listTrafficPolicyInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listTrafficPolicyInstances', 'Route53', Promise.reject(result), true, mock)
  },
  listTrafficPolicyInstancesByHostedZone: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listTrafficPolicyInstancesByHostedZone', 'Route53', Promise.resolve(result), true, mock)
  },
  listTrafficPolicyInstancesByHostedZoneAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listTrafficPolicyInstancesByHostedZone', 'Route53', Promise.resolve(result), false, mock)
  },
  listTrafficPolicyInstancesByHostedZoneThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listTrafficPolicyInstancesByHostedZone', 'Route53', Promise.reject(result), true, mock)
  },
  listTrafficPolicyInstancesByPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listTrafficPolicyInstancesByPolicy', 'Route53', Promise.resolve(result), true, mock)
  },
  listTrafficPolicyInstancesByPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listTrafficPolicyInstancesByPolicy', 'Route53', Promise.resolve(result), false, mock)
  },
  listTrafficPolicyInstancesByPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listTrafficPolicyInstancesByPolicy', 'Route53', Promise.reject(result), true, mock)
  },
  listTrafficPolicyVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listTrafficPolicyVersions', 'Route53', Promise.resolve(result), true, mock)
  },
  listTrafficPolicyVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listTrafficPolicyVersions', 'Route53', Promise.resolve(result), false, mock)
  },
  listTrafficPolicyVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listTrafficPolicyVersions', 'Route53', Promise.reject(result), true, mock)
  },
  listVPCAssociationAuthorizations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listVPCAssociationAuthorizations', 'Route53', Promise.resolve(result), true, mock)
  },
  listVPCAssociationAuthorizationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listVPCAssociationAuthorizations', 'Route53', Promise.resolve(result), false, mock)
  },
  listVPCAssociationAuthorizationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'listVPCAssociationAuthorizations', 'Route53', Promise.reject(result), true, mock)
  },
  testDNSAnswer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'testDNSAnswer', 'Route53', Promise.resolve(result), true, mock)
  },
  testDNSAnswerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'testDNSAnswer', 'Route53', Promise.resolve(result), false, mock)
  },
  testDNSAnswerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'testDNSAnswer', 'Route53', Promise.reject(result), true, mock)
  },
  updateHealthCheck: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'updateHealthCheck', 'Route53', Promise.resolve(result), true, mock)
  },
  updateHealthCheckAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'updateHealthCheck', 'Route53', Promise.resolve(result), false, mock)
  },
  updateHealthCheckThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'updateHealthCheck', 'Route53', Promise.reject(result), true, mock)
  },
  updateHostedZoneComment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'updateHostedZoneComment', 'Route53', Promise.resolve(result), true, mock)
  },
  updateHostedZoneCommentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'updateHostedZoneComment', 'Route53', Promise.resolve(result), false, mock)
  },
  updateHostedZoneCommentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'updateHostedZoneComment', 'Route53', Promise.reject(result), true, mock)
  },
  updateTrafficPolicyComment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'updateTrafficPolicyComment', 'Route53', Promise.resolve(result), true, mock)
  },
  updateTrafficPolicyCommentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'updateTrafficPolicyComment', 'Route53', Promise.resolve(result), false, mock)
  },
  updateTrafficPolicyCommentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'updateTrafficPolicyComment', 'Route53', Promise.reject(result), true, mock)
  },
  updateTrafficPolicyInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'updateTrafficPolicyInstance', 'Route53', Promise.resolve(result), true, mock)
  },
  updateTrafficPolicyInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'updateTrafficPolicyInstance', 'Route53', Promise.resolve(result), false, mock)
  },
  updateTrafficPolicyInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'updateTrafficPolicyInstance', 'Route53', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'send', 'Route53Client', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'send', 'Route53Client', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53', 'send', 'Route53Client', Promise.reject(result), true, mock)
  }
}