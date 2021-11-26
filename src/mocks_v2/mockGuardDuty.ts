
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
  export const mockGuardDuty = {
  acceptInvitation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptInvitation', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  acceptInvitationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptInvitation', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  acceptInvitationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptInvitation', 'GuardDuty', Promise.reject(result), true, mock)
  },
  archiveFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('archiveFindings', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  archiveFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('archiveFindings', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  archiveFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('archiveFindings', 'GuardDuty', Promise.reject(result), true, mock)
  },
  createDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDetector', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  createDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDetector', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  createDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDetector', 'GuardDuty', Promise.reject(result), true, mock)
  },
  createFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFilter', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  createFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFilter', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  createFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFilter', 'GuardDuty', Promise.reject(result), true, mock)
  },
  createIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIPSet', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  createIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIPSet', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  createIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIPSet', 'GuardDuty', Promise.reject(result), true, mock)
  },
  createMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMembers', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  createMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMembers', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  createMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMembers', 'GuardDuty', Promise.reject(result), true, mock)
  },
  createPublishingDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPublishingDestination', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  createPublishingDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPublishingDestination', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  createPublishingDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPublishingDestination', 'GuardDuty', Promise.reject(result), true, mock)
  },
  createSampleFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSampleFindings', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  createSampleFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSampleFindings', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  createSampleFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSampleFindings', 'GuardDuty', Promise.reject(result), true, mock)
  },
  createThreatIntelSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createThreatIntelSet', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  createThreatIntelSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createThreatIntelSet', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  createThreatIntelSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createThreatIntelSet', 'GuardDuty', Promise.reject(result), true, mock)
  },
  declineInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('declineInvitations', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  declineInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('declineInvitations', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  declineInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('declineInvitations', 'GuardDuty', Promise.reject(result), true, mock)
  },
  deleteDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDetector', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  deleteDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDetector', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  deleteDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDetector', 'GuardDuty', Promise.reject(result), true, mock)
  },
  deleteFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFilter', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  deleteFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFilter', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  deleteFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFilter', 'GuardDuty', Promise.reject(result), true, mock)
  },
  deleteIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIPSet', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  deleteIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIPSet', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  deleteIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIPSet', 'GuardDuty', Promise.reject(result), true, mock)
  },
  deleteInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInvitations', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  deleteInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInvitations', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  deleteInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInvitations', 'GuardDuty', Promise.reject(result), true, mock)
  },
  deleteMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMembers', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  deleteMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMembers', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  deleteMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMembers', 'GuardDuty', Promise.reject(result), true, mock)
  },
  deletePublishingDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePublishingDestination', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  deletePublishingDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePublishingDestination', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  deletePublishingDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePublishingDestination', 'GuardDuty', Promise.reject(result), true, mock)
  },
  deleteThreatIntelSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteThreatIntelSet', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  deleteThreatIntelSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteThreatIntelSet', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  deleteThreatIntelSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteThreatIntelSet', 'GuardDuty', Promise.reject(result), true, mock)
  },
  describeOrganizationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationConfiguration', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  describeOrganizationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationConfiguration', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  describeOrganizationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationConfiguration', 'GuardDuty', Promise.reject(result), true, mock)
  },
  describePublishingDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePublishingDestination', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  describePublishingDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePublishingDestination', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  describePublishingDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePublishingDestination', 'GuardDuty', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'GuardDuty', Promise.reject(result), true, mock)
  },
  disableOrganizationAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableOrganizationAdminAccount', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  disableOrganizationAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableOrganizationAdminAccount', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  disableOrganizationAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableOrganizationAdminAccount', 'GuardDuty', Promise.reject(result), true, mock)
  },
  disassociateFromMasterAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFromMasterAccount', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  disassociateFromMasterAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFromMasterAccount', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  disassociateFromMasterAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFromMasterAccount', 'GuardDuty', Promise.reject(result), true, mock)
  },
  disassociateMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMembers', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  disassociateMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMembers', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  disassociateMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMembers', 'GuardDuty', Promise.reject(result), true, mock)
  },
  enableOrganizationAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableOrganizationAdminAccount', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  enableOrganizationAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableOrganizationAdminAccount', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  enableOrganizationAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableOrganizationAdminAccount', 'GuardDuty', Promise.reject(result), true, mock)
  },
  getDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDetector', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  getDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDetector', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  getDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDetector', 'GuardDuty', Promise.reject(result), true, mock)
  },
  getFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFilter', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  getFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFilter', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  getFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFilter', 'GuardDuty', Promise.reject(result), true, mock)
  },
  getFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindings', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  getFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindings', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  getFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindings', 'GuardDuty', Promise.reject(result), true, mock)
  },
  getFindingsStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindingsStatistics', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  getFindingsStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindingsStatistics', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  getFindingsStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindingsStatistics', 'GuardDuty', Promise.reject(result), true, mock)
  },
  getIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIPSet', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  getIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIPSet', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  getIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIPSet', 'GuardDuty', Promise.reject(result), true, mock)
  },
  getInvitationsCount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInvitationsCount', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  getInvitationsCountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInvitationsCount', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  getInvitationsCountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInvitationsCount', 'GuardDuty', Promise.reject(result), true, mock)
  },
  getMasterAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMasterAccount', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  getMasterAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMasterAccount', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  getMasterAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMasterAccount', 'GuardDuty', Promise.reject(result), true, mock)
  },
  getMemberDetectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMemberDetectors', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  getMemberDetectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMemberDetectors', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  getMemberDetectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMemberDetectors', 'GuardDuty', Promise.reject(result), true, mock)
  },
  getMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMembers', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  getMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMembers', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  getMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMembers', 'GuardDuty', Promise.reject(result), true, mock)
  },
  getThreatIntelSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getThreatIntelSet', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  getThreatIntelSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getThreatIntelSet', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  getThreatIntelSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getThreatIntelSet', 'GuardDuty', Promise.reject(result), true, mock)
  },
  getUsageStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsageStatistics', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  getUsageStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsageStatistics', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  getUsageStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsageStatistics', 'GuardDuty', Promise.reject(result), true, mock)
  },
  inviteMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('inviteMembers', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  inviteMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('inviteMembers', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  inviteMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('inviteMembers', 'GuardDuty', Promise.reject(result), true, mock)
  },
  listDetectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDetectors', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  listDetectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDetectors', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  listDetectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDetectors', 'GuardDuty', Promise.reject(result), true, mock)
  },
  listFilters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFilters', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  listFiltersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFilters', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  listFiltersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFilters', 'GuardDuty', Promise.reject(result), true, mock)
  },
  listFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFindings', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  listFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFindings', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  listFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFindings', 'GuardDuty', Promise.reject(result), true, mock)
  },
  listIPSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIPSets', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  listIPSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIPSets', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  listIPSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIPSets', 'GuardDuty', Promise.reject(result), true, mock)
  },
  listInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInvitations', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  listInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInvitations', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  listInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInvitations', 'GuardDuty', Promise.reject(result), true, mock)
  },
  listMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMembers', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  listMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMembers', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  listMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMembers', 'GuardDuty', Promise.reject(result), true, mock)
  },
  listOrganizationAdminAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOrganizationAdminAccounts', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  listOrganizationAdminAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOrganizationAdminAccounts', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  listOrganizationAdminAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOrganizationAdminAccounts', 'GuardDuty', Promise.reject(result), true, mock)
  },
  listPublishingDestinations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPublishingDestinations', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  listPublishingDestinationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPublishingDestinations', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  listPublishingDestinationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPublishingDestinations', 'GuardDuty', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'GuardDuty', Promise.reject(result), true, mock)
  },
  listThreatIntelSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listThreatIntelSets', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  listThreatIntelSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listThreatIntelSets', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  listThreatIntelSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listThreatIntelSets', 'GuardDuty', Promise.reject(result), true, mock)
  },
  startMonitoringMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMonitoringMembers', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  startMonitoringMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMonitoringMembers', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  startMonitoringMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startMonitoringMembers', 'GuardDuty', Promise.reject(result), true, mock)
  },
  stopMonitoringMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopMonitoringMembers', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  stopMonitoringMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopMonitoringMembers', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  stopMonitoringMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopMonitoringMembers', 'GuardDuty', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'GuardDuty', Promise.reject(result), true, mock)
  },
  unarchiveFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unarchiveFindings', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  unarchiveFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unarchiveFindings', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  unarchiveFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unarchiveFindings', 'GuardDuty', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'GuardDuty', Promise.reject(result), true, mock)
  },
  updateDetector: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDetector', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  updateDetectorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDetector', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  updateDetectorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDetector', 'GuardDuty', Promise.reject(result), true, mock)
  },
  updateFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFilter', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  updateFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFilter', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  updateFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFilter', 'GuardDuty', Promise.reject(result), true, mock)
  },
  updateFindingsFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFindingsFeedback', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  updateFindingsFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFindingsFeedback', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  updateFindingsFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFindingsFeedback', 'GuardDuty', Promise.reject(result), true, mock)
  },
  updateIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIPSet', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  updateIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIPSet', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  updateIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIPSet', 'GuardDuty', Promise.reject(result), true, mock)
  },
  updateMemberDetectors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMemberDetectors', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  updateMemberDetectorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMemberDetectors', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  updateMemberDetectorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMemberDetectors', 'GuardDuty', Promise.reject(result), true, mock)
  },
  updateOrganizationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOrganizationConfiguration', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  updateOrganizationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOrganizationConfiguration', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  updateOrganizationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOrganizationConfiguration', 'GuardDuty', Promise.reject(result), true, mock)
  },
  updatePublishingDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePublishingDestination', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  updatePublishingDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePublishingDestination', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  updatePublishingDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePublishingDestination', 'GuardDuty', Promise.reject(result), true, mock)
  },
  updateThreatIntelSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateThreatIntelSet', 'GuardDuty', Promise.resolve(result), true, mock)
  },
  updateThreatIntelSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateThreatIntelSet', 'GuardDuty', Promise.resolve(result), false, mock)
  },
  updateThreatIntelSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateThreatIntelSet', 'GuardDuty', Promise.reject(result), true, mock)
  },
}
