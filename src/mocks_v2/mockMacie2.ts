
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
  export const mockMacie2 = {
  acceptInvitation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptInvitation', 'Macie2', Promise.resolve(result), true, mock)
  },
  acceptInvitationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptInvitation', 'Macie2', Promise.resolve(result), false, mock)
  },
  acceptInvitationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptInvitation', 'Macie2', Promise.reject(result), true, mock)
  },
  batchGetCustomDataIdentifiers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetCustomDataIdentifiers', 'Macie2', Promise.resolve(result), true, mock)
  },
  batchGetCustomDataIdentifiersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetCustomDataIdentifiers', 'Macie2', Promise.resolve(result), false, mock)
  },
  batchGetCustomDataIdentifiersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchGetCustomDataIdentifiers', 'Macie2', Promise.reject(result), true, mock)
  },
  createClassificationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createClassificationJob', 'Macie2', Promise.resolve(result), true, mock)
  },
  createClassificationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createClassificationJob', 'Macie2', Promise.resolve(result), false, mock)
  },
  createClassificationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createClassificationJob', 'Macie2', Promise.reject(result), true, mock)
  },
  createCustomDataIdentifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomDataIdentifier', 'Macie2', Promise.resolve(result), true, mock)
  },
  createCustomDataIdentifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomDataIdentifier', 'Macie2', Promise.resolve(result), false, mock)
  },
  createCustomDataIdentifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomDataIdentifier', 'Macie2', Promise.reject(result), true, mock)
  },
  createFindingsFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFindingsFilter', 'Macie2', Promise.resolve(result), true, mock)
  },
  createFindingsFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFindingsFilter', 'Macie2', Promise.resolve(result), false, mock)
  },
  createFindingsFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFindingsFilter', 'Macie2', Promise.reject(result), true, mock)
  },
  createInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInvitations', 'Macie2', Promise.resolve(result), true, mock)
  },
  createInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInvitations', 'Macie2', Promise.resolve(result), false, mock)
  },
  createInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInvitations', 'Macie2', Promise.reject(result), true, mock)
  },
  createMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMember', 'Macie2', Promise.resolve(result), true, mock)
  },
  createMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMember', 'Macie2', Promise.resolve(result), false, mock)
  },
  createMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMember', 'Macie2', Promise.reject(result), true, mock)
  },
  createSampleFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSampleFindings', 'Macie2', Promise.resolve(result), true, mock)
  },
  createSampleFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSampleFindings', 'Macie2', Promise.resolve(result), false, mock)
  },
  createSampleFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSampleFindings', 'Macie2', Promise.reject(result), true, mock)
  },
  declineInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('declineInvitations', 'Macie2', Promise.resolve(result), true, mock)
  },
  declineInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('declineInvitations', 'Macie2', Promise.resolve(result), false, mock)
  },
  declineInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('declineInvitations', 'Macie2', Promise.reject(result), true, mock)
  },
  deleteCustomDataIdentifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCustomDataIdentifier', 'Macie2', Promise.resolve(result), true, mock)
  },
  deleteCustomDataIdentifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCustomDataIdentifier', 'Macie2', Promise.resolve(result), false, mock)
  },
  deleteCustomDataIdentifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCustomDataIdentifier', 'Macie2', Promise.reject(result), true, mock)
  },
  deleteFindingsFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFindingsFilter', 'Macie2', Promise.resolve(result), true, mock)
  },
  deleteFindingsFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFindingsFilter', 'Macie2', Promise.resolve(result), false, mock)
  },
  deleteFindingsFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFindingsFilter', 'Macie2', Promise.reject(result), true, mock)
  },
  deleteInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInvitations', 'Macie2', Promise.resolve(result), true, mock)
  },
  deleteInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInvitations', 'Macie2', Promise.resolve(result), false, mock)
  },
  deleteInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInvitations', 'Macie2', Promise.reject(result), true, mock)
  },
  deleteMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMember', 'Macie2', Promise.resolve(result), true, mock)
  },
  deleteMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMember', 'Macie2', Promise.resolve(result), false, mock)
  },
  deleteMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMember', 'Macie2', Promise.reject(result), true, mock)
  },
  describeBuckets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBuckets', 'Macie2', Promise.resolve(result), true, mock)
  },
  describeBucketsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBuckets', 'Macie2', Promise.resolve(result), false, mock)
  },
  describeBucketsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBuckets', 'Macie2', Promise.reject(result), true, mock)
  },
  describeClassificationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClassificationJob', 'Macie2', Promise.resolve(result), true, mock)
  },
  describeClassificationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClassificationJob', 'Macie2', Promise.resolve(result), false, mock)
  },
  describeClassificationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeClassificationJob', 'Macie2', Promise.reject(result), true, mock)
  },
  describeOrganizationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationConfiguration', 'Macie2', Promise.resolve(result), true, mock)
  },
  describeOrganizationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationConfiguration', 'Macie2', Promise.resolve(result), false, mock)
  },
  describeOrganizationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationConfiguration', 'Macie2', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Macie2', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Macie2', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Macie2', Promise.reject(result), true, mock)
  },
  disableMacie: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableMacie', 'Macie2', Promise.resolve(result), true, mock)
  },
  disableMacieAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableMacie', 'Macie2', Promise.resolve(result), false, mock)
  },
  disableMacieThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableMacie', 'Macie2', Promise.reject(result), true, mock)
  },
  disableOrganizationAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableOrganizationAdminAccount', 'Macie2', Promise.resolve(result), true, mock)
  },
  disableOrganizationAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableOrganizationAdminAccount', 'Macie2', Promise.resolve(result), false, mock)
  },
  disableOrganizationAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableOrganizationAdminAccount', 'Macie2', Promise.reject(result), true, mock)
  },
  disassociateFromAdministratorAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFromAdministratorAccount', 'Macie2', Promise.resolve(result), true, mock)
  },
  disassociateFromAdministratorAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFromAdministratorAccount', 'Macie2', Promise.resolve(result), false, mock)
  },
  disassociateFromAdministratorAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFromAdministratorAccount', 'Macie2', Promise.reject(result), true, mock)
  },
  disassociateFromMasterAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFromMasterAccount', 'Macie2', Promise.resolve(result), true, mock)
  },
  disassociateFromMasterAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFromMasterAccount', 'Macie2', Promise.resolve(result), false, mock)
  },
  disassociateFromMasterAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFromMasterAccount', 'Macie2', Promise.reject(result), true, mock)
  },
  disassociateMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMember', 'Macie2', Promise.resolve(result), true, mock)
  },
  disassociateMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMember', 'Macie2', Promise.resolve(result), false, mock)
  },
  disassociateMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMember', 'Macie2', Promise.reject(result), true, mock)
  },
  enableMacie: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableMacie', 'Macie2', Promise.resolve(result), true, mock)
  },
  enableMacieAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableMacie', 'Macie2', Promise.resolve(result), false, mock)
  },
  enableMacieThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableMacie', 'Macie2', Promise.reject(result), true, mock)
  },
  enableOrganizationAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableOrganizationAdminAccount', 'Macie2', Promise.resolve(result), true, mock)
  },
  enableOrganizationAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableOrganizationAdminAccount', 'Macie2', Promise.resolve(result), false, mock)
  },
  enableOrganizationAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableOrganizationAdminAccount', 'Macie2', Promise.reject(result), true, mock)
  },
  getAdministratorAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAdministratorAccount', 'Macie2', Promise.resolve(result), true, mock)
  },
  getAdministratorAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAdministratorAccount', 'Macie2', Promise.resolve(result), false, mock)
  },
  getAdministratorAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAdministratorAccount', 'Macie2', Promise.reject(result), true, mock)
  },
  getBucketStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketStatistics', 'Macie2', Promise.resolve(result), true, mock)
  },
  getBucketStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketStatistics', 'Macie2', Promise.resolve(result), false, mock)
  },
  getBucketStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBucketStatistics', 'Macie2', Promise.reject(result), true, mock)
  },
  getClassificationExportConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClassificationExportConfiguration', 'Macie2', Promise.resolve(result), true, mock)
  },
  getClassificationExportConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClassificationExportConfiguration', 'Macie2', Promise.resolve(result), false, mock)
  },
  getClassificationExportConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClassificationExportConfiguration', 'Macie2', Promise.reject(result), true, mock)
  },
  getCustomDataIdentifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCustomDataIdentifier', 'Macie2', Promise.resolve(result), true, mock)
  },
  getCustomDataIdentifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCustomDataIdentifier', 'Macie2', Promise.resolve(result), false, mock)
  },
  getCustomDataIdentifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCustomDataIdentifier', 'Macie2', Promise.reject(result), true, mock)
  },
  getFindingStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindingStatistics', 'Macie2', Promise.resolve(result), true, mock)
  },
  getFindingStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindingStatistics', 'Macie2', Promise.resolve(result), false, mock)
  },
  getFindingStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindingStatistics', 'Macie2', Promise.reject(result), true, mock)
  },
  getFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindings', 'Macie2', Promise.resolve(result), true, mock)
  },
  getFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindings', 'Macie2', Promise.resolve(result), false, mock)
  },
  getFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindings', 'Macie2', Promise.reject(result), true, mock)
  },
  getFindingsFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindingsFilter', 'Macie2', Promise.resolve(result), true, mock)
  },
  getFindingsFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindingsFilter', 'Macie2', Promise.resolve(result), false, mock)
  },
  getFindingsFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindingsFilter', 'Macie2', Promise.reject(result), true, mock)
  },
  getFindingsPublicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindingsPublicationConfiguration', 'Macie2', Promise.resolve(result), true, mock)
  },
  getFindingsPublicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindingsPublicationConfiguration', 'Macie2', Promise.resolve(result), false, mock)
  },
  getFindingsPublicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindingsPublicationConfiguration', 'Macie2', Promise.reject(result), true, mock)
  },
  getInvitationsCount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInvitationsCount', 'Macie2', Promise.resolve(result), true, mock)
  },
  getInvitationsCountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInvitationsCount', 'Macie2', Promise.resolve(result), false, mock)
  },
  getInvitationsCountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInvitationsCount', 'Macie2', Promise.reject(result), true, mock)
  },
  getMacieSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMacieSession', 'Macie2', Promise.resolve(result), true, mock)
  },
  getMacieSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMacieSession', 'Macie2', Promise.resolve(result), false, mock)
  },
  getMacieSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMacieSession', 'Macie2', Promise.reject(result), true, mock)
  },
  getMasterAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMasterAccount', 'Macie2', Promise.resolve(result), true, mock)
  },
  getMasterAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMasterAccount', 'Macie2', Promise.resolve(result), false, mock)
  },
  getMasterAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMasterAccount', 'Macie2', Promise.reject(result), true, mock)
  },
  getMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMember', 'Macie2', Promise.resolve(result), true, mock)
  },
  getMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMember', 'Macie2', Promise.resolve(result), false, mock)
  },
  getMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMember', 'Macie2', Promise.reject(result), true, mock)
  },
  getUsageStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsageStatistics', 'Macie2', Promise.resolve(result), true, mock)
  },
  getUsageStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsageStatistics', 'Macie2', Promise.resolve(result), false, mock)
  },
  getUsageStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsageStatistics', 'Macie2', Promise.reject(result), true, mock)
  },
  getUsageTotals: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsageTotals', 'Macie2', Promise.resolve(result), true, mock)
  },
  getUsageTotalsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsageTotals', 'Macie2', Promise.resolve(result), false, mock)
  },
  getUsageTotalsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getUsageTotals', 'Macie2', Promise.reject(result), true, mock)
  },
  listClassificationJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClassificationJobs', 'Macie2', Promise.resolve(result), true, mock)
  },
  listClassificationJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClassificationJobs', 'Macie2', Promise.resolve(result), false, mock)
  },
  listClassificationJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listClassificationJobs', 'Macie2', Promise.reject(result), true, mock)
  },
  listCustomDataIdentifiers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCustomDataIdentifiers', 'Macie2', Promise.resolve(result), true, mock)
  },
  listCustomDataIdentifiersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCustomDataIdentifiers', 'Macie2', Promise.resolve(result), false, mock)
  },
  listCustomDataIdentifiersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCustomDataIdentifiers', 'Macie2', Promise.reject(result), true, mock)
  },
  listFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFindings', 'Macie2', Promise.resolve(result), true, mock)
  },
  listFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFindings', 'Macie2', Promise.resolve(result), false, mock)
  },
  listFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFindings', 'Macie2', Promise.reject(result), true, mock)
  },
  listFindingsFilters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFindingsFilters', 'Macie2', Promise.resolve(result), true, mock)
  },
  listFindingsFiltersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFindingsFilters', 'Macie2', Promise.resolve(result), false, mock)
  },
  listFindingsFiltersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFindingsFilters', 'Macie2', Promise.reject(result), true, mock)
  },
  listInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInvitations', 'Macie2', Promise.resolve(result), true, mock)
  },
  listInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInvitations', 'Macie2', Promise.resolve(result), false, mock)
  },
  listInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInvitations', 'Macie2', Promise.reject(result), true, mock)
  },
  listManagedDataIdentifiers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listManagedDataIdentifiers', 'Macie2', Promise.resolve(result), true, mock)
  },
  listManagedDataIdentifiersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listManagedDataIdentifiers', 'Macie2', Promise.resolve(result), false, mock)
  },
  listManagedDataIdentifiersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listManagedDataIdentifiers', 'Macie2', Promise.reject(result), true, mock)
  },
  listMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMembers', 'Macie2', Promise.resolve(result), true, mock)
  },
  listMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMembers', 'Macie2', Promise.resolve(result), false, mock)
  },
  listMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMembers', 'Macie2', Promise.reject(result), true, mock)
  },
  listOrganizationAdminAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOrganizationAdminAccounts', 'Macie2', Promise.resolve(result), true, mock)
  },
  listOrganizationAdminAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOrganizationAdminAccounts', 'Macie2', Promise.resolve(result), false, mock)
  },
  listOrganizationAdminAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOrganizationAdminAccounts', 'Macie2', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Macie2', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Macie2', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Macie2', Promise.reject(result), true, mock)
  },
  putClassificationExportConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putClassificationExportConfiguration', 'Macie2', Promise.resolve(result), true, mock)
  },
  putClassificationExportConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putClassificationExportConfiguration', 'Macie2', Promise.resolve(result), false, mock)
  },
  putClassificationExportConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putClassificationExportConfiguration', 'Macie2', Promise.reject(result), true, mock)
  },
  putFindingsPublicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFindingsPublicationConfiguration', 'Macie2', Promise.resolve(result), true, mock)
  },
  putFindingsPublicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFindingsPublicationConfiguration', 'Macie2', Promise.resolve(result), false, mock)
  },
  putFindingsPublicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putFindingsPublicationConfiguration', 'Macie2', Promise.reject(result), true, mock)
  },
  searchResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchResources', 'Macie2', Promise.resolve(result), true, mock)
  },
  searchResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchResources', 'Macie2', Promise.resolve(result), false, mock)
  },
  searchResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchResources', 'Macie2', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Macie2', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Macie2', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Macie2', Promise.reject(result), true, mock)
  },
  testCustomDataIdentifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testCustomDataIdentifier', 'Macie2', Promise.resolve(result), true, mock)
  },
  testCustomDataIdentifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testCustomDataIdentifier', 'Macie2', Promise.resolve(result), false, mock)
  },
  testCustomDataIdentifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('testCustomDataIdentifier', 'Macie2', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Macie2', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Macie2', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Macie2', Promise.reject(result), true, mock)
  },
  updateClassificationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClassificationJob', 'Macie2', Promise.resolve(result), true, mock)
  },
  updateClassificationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClassificationJob', 'Macie2', Promise.resolve(result), false, mock)
  },
  updateClassificationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateClassificationJob', 'Macie2', Promise.reject(result), true, mock)
  },
  updateFindingsFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFindingsFilter', 'Macie2', Promise.resolve(result), true, mock)
  },
  updateFindingsFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFindingsFilter', 'Macie2', Promise.resolve(result), false, mock)
  },
  updateFindingsFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFindingsFilter', 'Macie2', Promise.reject(result), true, mock)
  },
  updateMacieSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMacieSession', 'Macie2', Promise.resolve(result), true, mock)
  },
  updateMacieSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMacieSession', 'Macie2', Promise.resolve(result), false, mock)
  },
  updateMacieSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMacieSession', 'Macie2', Promise.reject(result), true, mock)
  },
  updateMemberSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMemberSession', 'Macie2', Promise.resolve(result), true, mock)
  },
  updateMemberSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMemberSession', 'Macie2', Promise.resolve(result), false, mock)
  },
  updateMemberSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMemberSession', 'Macie2', Promise.reject(result), true, mock)
  },
  updateOrganizationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOrganizationConfiguration', 'Macie2', Promise.resolve(result), true, mock)
  },
  updateOrganizationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOrganizationConfiguration', 'Macie2', Promise.resolve(result), false, mock)
  },
  updateOrganizationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOrganizationConfiguration', 'Macie2', Promise.reject(result), true, mock)
  },
}