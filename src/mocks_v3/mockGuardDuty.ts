
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockGuardDuty = {
  acceptInvitation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'acceptInvitation', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  acceptInvitationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'acceptInvitation', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  acceptInvitationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'acceptInvitation', 'GuardDuty', Promise.reject(result), true, mock)
  },
  archiveFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'archiveFindings', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  archiveFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'archiveFindings', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  archiveFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'archiveFindings', 'GuardDuty', Promise.reject(result), true, mock)
  },
  createDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'createDetector', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  createDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'createDetector', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  createDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'createDetector', 'GuardDuty', Promise.reject(result), true, mock)
  },
  createFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'createFilter', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  createFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'createFilter', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  createFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'createFilter', 'GuardDuty', Promise.reject(result), true, mock)
  },
  createIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'createIPSet', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  createIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'createIPSet', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  createIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'createIPSet', 'GuardDuty', Promise.reject(result), true, mock)
  },
  createMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'createMembers', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  createMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'createMembers', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  createMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'createMembers', 'GuardDuty', Promise.reject(result), true, mock)
  },
  createPublishingDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'createPublishingDestination', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  createPublishingDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'createPublishingDestination', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  createPublishingDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'createPublishingDestination', 'GuardDuty', Promise.reject(result), true, mock)
  },
  createSampleFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'createSampleFindings', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  createSampleFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'createSampleFindings', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  createSampleFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'createSampleFindings', 'GuardDuty', Promise.reject(result), true, mock)
  },
  createThreatIntelSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'createThreatIntelSet', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  createThreatIntelSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'createThreatIntelSet', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  createThreatIntelSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'createThreatIntelSet', 'GuardDuty', Promise.reject(result), true, mock)
  },
  declineInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'declineInvitations', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  declineInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'declineInvitations', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  declineInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'declineInvitations', 'GuardDuty', Promise.reject(result), true, mock)
  },
  deleteDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'deleteDetector', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  deleteDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'deleteDetector', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  deleteDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'deleteDetector', 'GuardDuty', Promise.reject(result), true, mock)
  },
  deleteFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'deleteFilter', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  deleteFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'deleteFilter', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  deleteFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'deleteFilter', 'GuardDuty', Promise.reject(result), true, mock)
  },
  deleteIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'deleteIPSet', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  deleteIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'deleteIPSet', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  deleteIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'deleteIPSet', 'GuardDuty', Promise.reject(result), true, mock)
  },
  deleteInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'deleteInvitations', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  deleteInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'deleteInvitations', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  deleteInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'deleteInvitations', 'GuardDuty', Promise.reject(result), true, mock)
  },
  deleteMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'deleteMembers', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  deleteMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'deleteMembers', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  deleteMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'deleteMembers', 'GuardDuty', Promise.reject(result), true, mock)
  },
  deletePublishingDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'deletePublishingDestination', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  deletePublishingDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'deletePublishingDestination', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  deletePublishingDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'deletePublishingDestination', 'GuardDuty', Promise.reject(result), true, mock)
  },
  deleteThreatIntelSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'deleteThreatIntelSet', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  deleteThreatIntelSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'deleteThreatIntelSet', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  deleteThreatIntelSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'deleteThreatIntelSet', 'GuardDuty', Promise.reject(result), true, mock)
  },
  describeOrganizationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'describeOrganizationConfiguration', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  describeOrganizationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'describeOrganizationConfiguration', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  describeOrganizationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'describeOrganizationConfiguration', 'GuardDuty', Promise.reject(result), true, mock)
  },
  describePublishingDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'describePublishingDestination', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  describePublishingDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'describePublishingDestination', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  describePublishingDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'describePublishingDestination', 'GuardDuty', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'destroy', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'destroy', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'destroy', 'GuardDuty', Promise.reject(result), true, mock)
  },
  disableOrganizationAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'disableOrganizationAdminAccount', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  disableOrganizationAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'disableOrganizationAdminAccount', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  disableOrganizationAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'disableOrganizationAdminAccount', 'GuardDuty', Promise.reject(result), true, mock)
  },
  disassociateFromMasterAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'disassociateFromMasterAccount', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  disassociateFromMasterAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'disassociateFromMasterAccount', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  disassociateFromMasterAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'disassociateFromMasterAccount', 'GuardDuty', Promise.reject(result), true, mock)
  },
  disassociateMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'disassociateMembers', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  disassociateMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'disassociateMembers', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  disassociateMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'disassociateMembers', 'GuardDuty', Promise.reject(result), true, mock)
  },
  enableOrganizationAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'enableOrganizationAdminAccount', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  enableOrganizationAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'enableOrganizationAdminAccount', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  enableOrganizationAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'enableOrganizationAdminAccount', 'GuardDuty', Promise.reject(result), true, mock)
  },
  getDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getDetector', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  getDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getDetector', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  getDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getDetector', 'GuardDuty', Promise.reject(result), true, mock)
  },
  getFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getFilter', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  getFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getFilter', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  getFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getFilter', 'GuardDuty', Promise.reject(result), true, mock)
  },
  getFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getFindings', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  getFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getFindings', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  getFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getFindings', 'GuardDuty', Promise.reject(result), true, mock)
  },
  getFindingsStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getFindingsStatistics', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  getFindingsStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getFindingsStatistics', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  getFindingsStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getFindingsStatistics', 'GuardDuty', Promise.reject(result), true, mock)
  },
  getIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getIPSet', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  getIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getIPSet', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  getIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getIPSet', 'GuardDuty', Promise.reject(result), true, mock)
  },
  getInvitationsCount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getInvitationsCount', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  getInvitationsCountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getInvitationsCount', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  getInvitationsCountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getInvitationsCount', 'GuardDuty', Promise.reject(result), true, mock)
  },
  getMasterAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getMasterAccount', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  getMasterAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getMasterAccount', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  getMasterAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getMasterAccount', 'GuardDuty', Promise.reject(result), true, mock)
  },
  getMemberDetectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getMemberDetectors', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  getMemberDetectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getMemberDetectors', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  getMemberDetectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getMemberDetectors', 'GuardDuty', Promise.reject(result), true, mock)
  },
  getMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getMembers', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  getMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getMembers', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  getMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getMembers', 'GuardDuty', Promise.reject(result), true, mock)
  },
  getThreatIntelSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getThreatIntelSet', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  getThreatIntelSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getThreatIntelSet', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  getThreatIntelSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getThreatIntelSet', 'GuardDuty', Promise.reject(result), true, mock)
  },
  getUsageStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getUsageStatistics', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  getUsageStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getUsageStatistics', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  getUsageStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'getUsageStatistics', 'GuardDuty', Promise.reject(result), true, mock)
  },
  inviteMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'inviteMembers', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  inviteMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'inviteMembers', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  inviteMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'inviteMembers', 'GuardDuty', Promise.reject(result), true, mock)
  },
  listDetectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listDetectors', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  listDetectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listDetectors', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  listDetectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listDetectors', 'GuardDuty', Promise.reject(result), true, mock)
  },
  listFilters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listFilters', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  listFiltersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listFilters', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  listFiltersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listFilters', 'GuardDuty', Promise.reject(result), true, mock)
  },
  listFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listFindings', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  listFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listFindings', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  listFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listFindings', 'GuardDuty', Promise.reject(result), true, mock)
  },
  listIPSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listIPSets', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  listIPSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listIPSets', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  listIPSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listIPSets', 'GuardDuty', Promise.reject(result), true, mock)
  },
  listInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listInvitations', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  listInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listInvitations', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  listInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listInvitations', 'GuardDuty', Promise.reject(result), true, mock)
  },
  listMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listMembers', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  listMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listMembers', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  listMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listMembers', 'GuardDuty', Promise.reject(result), true, mock)
  },
  listOrganizationAdminAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listOrganizationAdminAccounts', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  listOrganizationAdminAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listOrganizationAdminAccounts', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  listOrganizationAdminAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listOrganizationAdminAccounts', 'GuardDuty', Promise.reject(result), true, mock)
  },
  listPublishingDestinations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listPublishingDestinations', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  listPublishingDestinationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listPublishingDestinations', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  listPublishingDestinationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listPublishingDestinations', 'GuardDuty', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listTagsForResource', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listTagsForResource', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listTagsForResource', 'GuardDuty', Promise.reject(result), true, mock)
  },
  listThreatIntelSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listThreatIntelSets', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  listThreatIntelSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listThreatIntelSets', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  listThreatIntelSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'listThreatIntelSets', 'GuardDuty', Promise.reject(result), true, mock)
  },
  startMonitoringMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'startMonitoringMembers', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  startMonitoringMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'startMonitoringMembers', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  startMonitoringMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'startMonitoringMembers', 'GuardDuty', Promise.reject(result), true, mock)
  },
  stopMonitoringMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'stopMonitoringMembers', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  stopMonitoringMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'stopMonitoringMembers', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  stopMonitoringMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'stopMonitoringMembers', 'GuardDuty', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'tagResource', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'tagResource', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'tagResource', 'GuardDuty', Promise.reject(result), true, mock)
  },
  unarchiveFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'unarchiveFindings', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  unarchiveFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'unarchiveFindings', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  unarchiveFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'unarchiveFindings', 'GuardDuty', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'untagResource', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'untagResource', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'untagResource', 'GuardDuty', Promise.reject(result), true, mock)
  },
  updateDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updateDetector', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  updateDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updateDetector', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  updateDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updateDetector', 'GuardDuty', Promise.reject(result), true, mock)
  },
  updateFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updateFilter', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  updateFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updateFilter', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  updateFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updateFilter', 'GuardDuty', Promise.reject(result), true, mock)
  },
  updateFindingsFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updateFindingsFeedback', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  updateFindingsFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updateFindingsFeedback', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  updateFindingsFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updateFindingsFeedback', 'GuardDuty', Promise.reject(result), true, mock)
  },
  updateIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updateIPSet', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  updateIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updateIPSet', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  updateIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updateIPSet', 'GuardDuty', Promise.reject(result), true, mock)
  },
  updateMemberDetectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updateMemberDetectors', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  updateMemberDetectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updateMemberDetectors', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  updateMemberDetectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updateMemberDetectors', 'GuardDuty', Promise.reject(result), true, mock)
  },
  updateOrganizationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updateOrganizationConfiguration', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  updateOrganizationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updateOrganizationConfiguration', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  updateOrganizationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updateOrganizationConfiguration', 'GuardDuty', Promise.reject(result), true, mock)
  },
  updatePublishingDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updatePublishingDestination', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  updatePublishingDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updatePublishingDestination', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  updatePublishingDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updatePublishingDestination', 'GuardDuty', Promise.reject(result), true, mock)
  },
  updateThreatIntelSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updateThreatIntelSet', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  updateThreatIntelSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updateThreatIntelSet', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  updateThreatIntelSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'updateThreatIntelSet', 'GuardDuty', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'send', 'GuardDutyClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'send', 'GuardDutyClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-guardduty', 'send', 'GuardDutyClient', Promise.reject(result), true, mock)
  }
}