
/**
* @description mocks_v3:mockMacie2 module is mocks for AWS-SDK V3
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
export const mockMacie2 = {
  acceptInvitation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'acceptInvitation', 'Macie2', Promise.resolve(result), true, mock)
  },
  acceptInvitationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'acceptInvitation', 'Macie2', Promise.resolve(result), false, mock)
  },
  acceptInvitationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'acceptInvitation', 'Macie2', Promise.reject(result), true, mock)
  },
  batchGetCustomDataIdentifiers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'batchGetCustomDataIdentifiers', 'Macie2', Promise.resolve(result), true, mock)
  },
  batchGetCustomDataIdentifiersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'batchGetCustomDataIdentifiers', 'Macie2', Promise.resolve(result), false, mock)
  },
  batchGetCustomDataIdentifiersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'batchGetCustomDataIdentifiers', 'Macie2', Promise.reject(result), true, mock)
  },
  createAllowList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'createAllowList', 'Macie2', Promise.resolve(result), true, mock)
  },
  createAllowListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'createAllowList', 'Macie2', Promise.resolve(result), false, mock)
  },
  createAllowListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'createAllowList', 'Macie2', Promise.reject(result), true, mock)
  },
  createClassificationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'createClassificationJob', 'Macie2', Promise.resolve(result), true, mock)
  },
  createClassificationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'createClassificationJob', 'Macie2', Promise.resolve(result), false, mock)
  },
  createClassificationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'createClassificationJob', 'Macie2', Promise.reject(result), true, mock)
  },
  createCustomDataIdentifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'createCustomDataIdentifier', 'Macie2', Promise.resolve(result), true, mock)
  },
  createCustomDataIdentifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'createCustomDataIdentifier', 'Macie2', Promise.resolve(result), false, mock)
  },
  createCustomDataIdentifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'createCustomDataIdentifier', 'Macie2', Promise.reject(result), true, mock)
  },
  createFindingsFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'createFindingsFilter', 'Macie2', Promise.resolve(result), true, mock)
  },
  createFindingsFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'createFindingsFilter', 'Macie2', Promise.resolve(result), false, mock)
  },
  createFindingsFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'createFindingsFilter', 'Macie2', Promise.reject(result), true, mock)
  },
  createInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'createInvitations', 'Macie2', Promise.resolve(result), true, mock)
  },
  createInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'createInvitations', 'Macie2', Promise.resolve(result), false, mock)
  },
  createInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'createInvitations', 'Macie2', Promise.reject(result), true, mock)
  },
  createMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'createMember', 'Macie2', Promise.resolve(result), true, mock)
  },
  createMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'createMember', 'Macie2', Promise.resolve(result), false, mock)
  },
  createMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'createMember', 'Macie2', Promise.reject(result), true, mock)
  },
  createSampleFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'createSampleFindings', 'Macie2', Promise.resolve(result), true, mock)
  },
  createSampleFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'createSampleFindings', 'Macie2', Promise.resolve(result), false, mock)
  },
  createSampleFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'createSampleFindings', 'Macie2', Promise.reject(result), true, mock)
  },
  declineInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'declineInvitations', 'Macie2', Promise.resolve(result), true, mock)
  },
  declineInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'declineInvitations', 'Macie2', Promise.resolve(result), false, mock)
  },
  declineInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'declineInvitations', 'Macie2', Promise.reject(result), true, mock)
  },
  deleteAllowList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'deleteAllowList', 'Macie2', Promise.resolve(result), true, mock)
  },
  deleteAllowListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'deleteAllowList', 'Macie2', Promise.resolve(result), false, mock)
  },
  deleteAllowListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'deleteAllowList', 'Macie2', Promise.reject(result), true, mock)
  },
  deleteCustomDataIdentifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'deleteCustomDataIdentifier', 'Macie2', Promise.resolve(result), true, mock)
  },
  deleteCustomDataIdentifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'deleteCustomDataIdentifier', 'Macie2', Promise.resolve(result), false, mock)
  },
  deleteCustomDataIdentifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'deleteCustomDataIdentifier', 'Macie2', Promise.reject(result), true, mock)
  },
  deleteFindingsFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'deleteFindingsFilter', 'Macie2', Promise.resolve(result), true, mock)
  },
  deleteFindingsFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'deleteFindingsFilter', 'Macie2', Promise.resolve(result), false, mock)
  },
  deleteFindingsFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'deleteFindingsFilter', 'Macie2', Promise.reject(result), true, mock)
  },
  deleteInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'deleteInvitations', 'Macie2', Promise.resolve(result), true, mock)
  },
  deleteInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'deleteInvitations', 'Macie2', Promise.resolve(result), false, mock)
  },
  deleteInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'deleteInvitations', 'Macie2', Promise.reject(result), true, mock)
  },
  deleteMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'deleteMember', 'Macie2', Promise.resolve(result), true, mock)
  },
  deleteMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'deleteMember', 'Macie2', Promise.resolve(result), false, mock)
  },
  deleteMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'deleteMember', 'Macie2', Promise.reject(result), true, mock)
  },
  describeBuckets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'describeBuckets', 'Macie2', Promise.resolve(result), true, mock)
  },
  describeBucketsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'describeBuckets', 'Macie2', Promise.resolve(result), false, mock)
  },
  describeBucketsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'describeBuckets', 'Macie2', Promise.reject(result), true, mock)
  },
  describeClassificationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'describeClassificationJob', 'Macie2', Promise.resolve(result), true, mock)
  },
  describeClassificationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'describeClassificationJob', 'Macie2', Promise.resolve(result), false, mock)
  },
  describeClassificationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'describeClassificationJob', 'Macie2', Promise.reject(result), true, mock)
  },
  describeOrganizationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'describeOrganizationConfiguration', 'Macie2', Promise.resolve(result), true, mock)
  },
  describeOrganizationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'describeOrganizationConfiguration', 'Macie2', Promise.resolve(result), false, mock)
  },
  describeOrganizationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'describeOrganizationConfiguration', 'Macie2', Promise.reject(result), true, mock)
  },
  disableMacie: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'disableMacie', 'Macie2', Promise.resolve(result), true, mock)
  },
  disableMacieAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'disableMacie', 'Macie2', Promise.resolve(result), false, mock)
  },
  disableMacieThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'disableMacie', 'Macie2', Promise.reject(result), true, mock)
  },
  disableOrganizationAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'disableOrganizationAdminAccount', 'Macie2', Promise.resolve(result), true, mock)
  },
  disableOrganizationAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'disableOrganizationAdminAccount', 'Macie2', Promise.resolve(result), false, mock)
  },
  disableOrganizationAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'disableOrganizationAdminAccount', 'Macie2', Promise.reject(result), true, mock)
  },
  disassociateFromAdministratorAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'disassociateFromAdministratorAccount', 'Macie2', Promise.resolve(result), true, mock)
  },
  disassociateFromAdministratorAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'disassociateFromAdministratorAccount', 'Macie2', Promise.resolve(result), false, mock)
  },
  disassociateFromAdministratorAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'disassociateFromAdministratorAccount', 'Macie2', Promise.reject(result), true, mock)
  },
  disassociateFromMasterAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'disassociateFromMasterAccount', 'Macie2', Promise.resolve(result), true, mock)
  },
  disassociateFromMasterAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'disassociateFromMasterAccount', 'Macie2', Promise.resolve(result), false, mock)
  },
  disassociateFromMasterAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'disassociateFromMasterAccount', 'Macie2', Promise.reject(result), true, mock)
  },
  disassociateMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'disassociateMember', 'Macie2', Promise.resolve(result), true, mock)
  },
  disassociateMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'disassociateMember', 'Macie2', Promise.resolve(result), false, mock)
  },
  disassociateMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'disassociateMember', 'Macie2', Promise.reject(result), true, mock)
  },
  enableMacie: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'enableMacie', 'Macie2', Promise.resolve(result), true, mock)
  },
  enableMacieAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'enableMacie', 'Macie2', Promise.resolve(result), false, mock)
  },
  enableMacieThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'enableMacie', 'Macie2', Promise.reject(result), true, mock)
  },
  enableOrganizationAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'enableOrganizationAdminAccount', 'Macie2', Promise.resolve(result), true, mock)
  },
  enableOrganizationAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'enableOrganizationAdminAccount', 'Macie2', Promise.resolve(result), false, mock)
  },
  enableOrganizationAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'enableOrganizationAdminAccount', 'Macie2', Promise.reject(result), true, mock)
  },
  getAdministratorAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getAdministratorAccount', 'Macie2', Promise.resolve(result), true, mock)
  },
  getAdministratorAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getAdministratorAccount', 'Macie2', Promise.resolve(result), false, mock)
  },
  getAdministratorAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getAdministratorAccount', 'Macie2', Promise.reject(result), true, mock)
  },
  getAllowList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getAllowList', 'Macie2', Promise.resolve(result), true, mock)
  },
  getAllowListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getAllowList', 'Macie2', Promise.resolve(result), false, mock)
  },
  getAllowListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getAllowList', 'Macie2', Promise.reject(result), true, mock)
  },
  getAutomatedDiscoveryConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getAutomatedDiscoveryConfiguration', 'Macie2', Promise.resolve(result), true, mock)
  },
  getAutomatedDiscoveryConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getAutomatedDiscoveryConfiguration', 'Macie2', Promise.resolve(result), false, mock)
  },
  getAutomatedDiscoveryConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getAutomatedDiscoveryConfiguration', 'Macie2', Promise.reject(result), true, mock)
  },
  getBucketStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getBucketStatistics', 'Macie2', Promise.resolve(result), true, mock)
  },
  getBucketStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getBucketStatistics', 'Macie2', Promise.resolve(result), false, mock)
  },
  getBucketStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getBucketStatistics', 'Macie2', Promise.reject(result), true, mock)
  },
  getClassificationExportConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getClassificationExportConfiguration', 'Macie2', Promise.resolve(result), true, mock)
  },
  getClassificationExportConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getClassificationExportConfiguration', 'Macie2', Promise.resolve(result), false, mock)
  },
  getClassificationExportConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getClassificationExportConfiguration', 'Macie2', Promise.reject(result), true, mock)
  },
  getClassificationScope: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getClassificationScope', 'Macie2', Promise.resolve(result), true, mock)
  },
  getClassificationScopeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getClassificationScope', 'Macie2', Promise.resolve(result), false, mock)
  },
  getClassificationScopeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getClassificationScope', 'Macie2', Promise.reject(result), true, mock)
  },
  getCustomDataIdentifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getCustomDataIdentifier', 'Macie2', Promise.resolve(result), true, mock)
  },
  getCustomDataIdentifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getCustomDataIdentifier', 'Macie2', Promise.resolve(result), false, mock)
  },
  getCustomDataIdentifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getCustomDataIdentifier', 'Macie2', Promise.reject(result), true, mock)
  },
  getFindingStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getFindingStatistics', 'Macie2', Promise.resolve(result), true, mock)
  },
  getFindingStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getFindingStatistics', 'Macie2', Promise.resolve(result), false, mock)
  },
  getFindingStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getFindingStatistics', 'Macie2', Promise.reject(result), true, mock)
  },
  getFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getFindings', 'Macie2', Promise.resolve(result), true, mock)
  },
  getFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getFindings', 'Macie2', Promise.resolve(result), false, mock)
  },
  getFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getFindings', 'Macie2', Promise.reject(result), true, mock)
  },
  getFindingsFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getFindingsFilter', 'Macie2', Promise.resolve(result), true, mock)
  },
  getFindingsFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getFindingsFilter', 'Macie2', Promise.resolve(result), false, mock)
  },
  getFindingsFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getFindingsFilter', 'Macie2', Promise.reject(result), true, mock)
  },
  getFindingsPublicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getFindingsPublicationConfiguration', 'Macie2', Promise.resolve(result), true, mock)
  },
  getFindingsPublicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getFindingsPublicationConfiguration', 'Macie2', Promise.resolve(result), false, mock)
  },
  getFindingsPublicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getFindingsPublicationConfiguration', 'Macie2', Promise.reject(result), true, mock)
  },
  getInvitationsCount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getInvitationsCount', 'Macie2', Promise.resolve(result), true, mock)
  },
  getInvitationsCountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getInvitationsCount', 'Macie2', Promise.resolve(result), false, mock)
  },
  getInvitationsCountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getInvitationsCount', 'Macie2', Promise.reject(result), true, mock)
  },
  getMacieSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getMacieSession', 'Macie2', Promise.resolve(result), true, mock)
  },
  getMacieSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getMacieSession', 'Macie2', Promise.resolve(result), false, mock)
  },
  getMacieSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getMacieSession', 'Macie2', Promise.reject(result), true, mock)
  },
  getMasterAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getMasterAccount', 'Macie2', Promise.resolve(result), true, mock)
  },
  getMasterAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getMasterAccount', 'Macie2', Promise.resolve(result), false, mock)
  },
  getMasterAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getMasterAccount', 'Macie2', Promise.reject(result), true, mock)
  },
  getMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getMember', 'Macie2', Promise.resolve(result), true, mock)
  },
  getMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getMember', 'Macie2', Promise.resolve(result), false, mock)
  },
  getMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getMember', 'Macie2', Promise.reject(result), true, mock)
  },
  getResourceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getResourceProfile', 'Macie2', Promise.resolve(result), true, mock)
  },
  getResourceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getResourceProfile', 'Macie2', Promise.resolve(result), false, mock)
  },
  getResourceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getResourceProfile', 'Macie2', Promise.reject(result), true, mock)
  },
  getRevealConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getRevealConfiguration', 'Macie2', Promise.resolve(result), true, mock)
  },
  getRevealConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getRevealConfiguration', 'Macie2', Promise.resolve(result), false, mock)
  },
  getRevealConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getRevealConfiguration', 'Macie2', Promise.reject(result), true, mock)
  },
  getSensitiveDataOccurrencesAvailability: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getSensitiveDataOccurrencesAvailability', 'Macie2', Promise.resolve(result), true, mock)
  },
  getSensitiveDataOccurrencesAvailabilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getSensitiveDataOccurrencesAvailability', 'Macie2', Promise.resolve(result), false, mock)
  },
  getSensitiveDataOccurrencesAvailabilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getSensitiveDataOccurrencesAvailability', 'Macie2', Promise.reject(result), true, mock)
  },
  getSensitiveDataOccurrences: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getSensitiveDataOccurrences', 'Macie2', Promise.resolve(result), true, mock)
  },
  getSensitiveDataOccurrencesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getSensitiveDataOccurrences', 'Macie2', Promise.resolve(result), false, mock)
  },
  getSensitiveDataOccurrencesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getSensitiveDataOccurrences', 'Macie2', Promise.reject(result), true, mock)
  },
  getSensitivityInspectionTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getSensitivityInspectionTemplate', 'Macie2', Promise.resolve(result), true, mock)
  },
  getSensitivityInspectionTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getSensitivityInspectionTemplate', 'Macie2', Promise.resolve(result), false, mock)
  },
  getSensitivityInspectionTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getSensitivityInspectionTemplate', 'Macie2', Promise.reject(result), true, mock)
  },
  getUsageStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getUsageStatistics', 'Macie2', Promise.resolve(result), true, mock)
  },
  getUsageStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getUsageStatistics', 'Macie2', Promise.resolve(result), false, mock)
  },
  getUsageStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getUsageStatistics', 'Macie2', Promise.reject(result), true, mock)
  },
  getUsageTotals: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getUsageTotals', 'Macie2', Promise.resolve(result), true, mock)
  },
  getUsageTotalsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getUsageTotals', 'Macie2', Promise.resolve(result), false, mock)
  },
  getUsageTotalsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'getUsageTotals', 'Macie2', Promise.reject(result), true, mock)
  },
  listAllowLists: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listAllowLists', 'Macie2', Promise.resolve(result), true, mock)
  },
  listAllowListsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listAllowLists', 'Macie2', Promise.resolve(result), false, mock)
  },
  listAllowListsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listAllowLists', 'Macie2', Promise.reject(result), true, mock)
  },
  listClassificationJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listClassificationJobs', 'Macie2', Promise.resolve(result), true, mock)
  },
  listClassificationJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listClassificationJobs', 'Macie2', Promise.resolve(result), false, mock)
  },
  listClassificationJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listClassificationJobs', 'Macie2', Promise.reject(result), true, mock)
  },
  listClassificationScopes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listClassificationScopes', 'Macie2', Promise.resolve(result), true, mock)
  },
  listClassificationScopesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listClassificationScopes', 'Macie2', Promise.resolve(result), false, mock)
  },
  listClassificationScopesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listClassificationScopes', 'Macie2', Promise.reject(result), true, mock)
  },
  listCustomDataIdentifiers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listCustomDataIdentifiers', 'Macie2', Promise.resolve(result), true, mock)
  },
  listCustomDataIdentifiersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listCustomDataIdentifiers', 'Macie2', Promise.resolve(result), false, mock)
  },
  listCustomDataIdentifiersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listCustomDataIdentifiers', 'Macie2', Promise.reject(result), true, mock)
  },
  listFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listFindings', 'Macie2', Promise.resolve(result), true, mock)
  },
  listFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listFindings', 'Macie2', Promise.resolve(result), false, mock)
  },
  listFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listFindings', 'Macie2', Promise.reject(result), true, mock)
  },
  listFindingsFilters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listFindingsFilters', 'Macie2', Promise.resolve(result), true, mock)
  },
  listFindingsFiltersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listFindingsFilters', 'Macie2', Promise.resolve(result), false, mock)
  },
  listFindingsFiltersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listFindingsFilters', 'Macie2', Promise.reject(result), true, mock)
  },
  listInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listInvitations', 'Macie2', Promise.resolve(result), true, mock)
  },
  listInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listInvitations', 'Macie2', Promise.resolve(result), false, mock)
  },
  listInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listInvitations', 'Macie2', Promise.reject(result), true, mock)
  },
  listManagedDataIdentifiers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listManagedDataIdentifiers', 'Macie2', Promise.resolve(result), true, mock)
  },
  listManagedDataIdentifiersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listManagedDataIdentifiers', 'Macie2', Promise.resolve(result), false, mock)
  },
  listManagedDataIdentifiersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listManagedDataIdentifiers', 'Macie2', Promise.reject(result), true, mock)
  },
  listMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listMembers', 'Macie2', Promise.resolve(result), true, mock)
  },
  listMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listMembers', 'Macie2', Promise.resolve(result), false, mock)
  },
  listMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listMembers', 'Macie2', Promise.reject(result), true, mock)
  },
  listOrganizationAdminAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listOrganizationAdminAccounts', 'Macie2', Promise.resolve(result), true, mock)
  },
  listOrganizationAdminAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listOrganizationAdminAccounts', 'Macie2', Promise.resolve(result), false, mock)
  },
  listOrganizationAdminAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listOrganizationAdminAccounts', 'Macie2', Promise.reject(result), true, mock)
  },
  listResourceProfileArtifacts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listResourceProfileArtifacts', 'Macie2', Promise.resolve(result), true, mock)
  },
  listResourceProfileArtifactsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listResourceProfileArtifacts', 'Macie2', Promise.resolve(result), false, mock)
  },
  listResourceProfileArtifactsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listResourceProfileArtifacts', 'Macie2', Promise.reject(result), true, mock)
  },
  listResourceProfileDetections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listResourceProfileDetections', 'Macie2', Promise.resolve(result), true, mock)
  },
  listResourceProfileDetectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listResourceProfileDetections', 'Macie2', Promise.resolve(result), false, mock)
  },
  listResourceProfileDetectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listResourceProfileDetections', 'Macie2', Promise.reject(result), true, mock)
  },
  listSensitivityInspectionTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listSensitivityInspectionTemplates', 'Macie2', Promise.resolve(result), true, mock)
  },
  listSensitivityInspectionTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listSensitivityInspectionTemplates', 'Macie2', Promise.resolve(result), false, mock)
  },
  listSensitivityInspectionTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listSensitivityInspectionTemplates', 'Macie2', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listTagsForResource', 'Macie2', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listTagsForResource', 'Macie2', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'listTagsForResource', 'Macie2', Promise.reject(result), true, mock)
  },
  putClassificationExportConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'putClassificationExportConfiguration', 'Macie2', Promise.resolve(result), true, mock)
  },
  putClassificationExportConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'putClassificationExportConfiguration', 'Macie2', Promise.resolve(result), false, mock)
  },
  putClassificationExportConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'putClassificationExportConfiguration', 'Macie2', Promise.reject(result), true, mock)
  },
  putFindingsPublicationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'putFindingsPublicationConfiguration', 'Macie2', Promise.resolve(result), true, mock)
  },
  putFindingsPublicationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'putFindingsPublicationConfiguration', 'Macie2', Promise.resolve(result), false, mock)
  },
  putFindingsPublicationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'putFindingsPublicationConfiguration', 'Macie2', Promise.reject(result), true, mock)
  },
  searchResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'searchResources', 'Macie2', Promise.resolve(result), true, mock)
  },
  searchResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'searchResources', 'Macie2', Promise.resolve(result), false, mock)
  },
  searchResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'searchResources', 'Macie2', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'tagResource', 'Macie2', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'tagResource', 'Macie2', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'tagResource', 'Macie2', Promise.reject(result), true, mock)
  },
  testCustomDataIdentifier: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'testCustomDataIdentifier', 'Macie2', Promise.resolve(result), true, mock)
  },
  testCustomDataIdentifierAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'testCustomDataIdentifier', 'Macie2', Promise.resolve(result), false, mock)
  },
  testCustomDataIdentifierThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'testCustomDataIdentifier', 'Macie2', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'untagResource', 'Macie2', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'untagResource', 'Macie2', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'untagResource', 'Macie2', Promise.reject(result), true, mock)
  },
  updateAllowList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateAllowList', 'Macie2', Promise.resolve(result), true, mock)
  },
  updateAllowListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateAllowList', 'Macie2', Promise.resolve(result), false, mock)
  },
  updateAllowListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateAllowList', 'Macie2', Promise.reject(result), true, mock)
  },
  updateAutomatedDiscoveryConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateAutomatedDiscoveryConfiguration', 'Macie2', Promise.resolve(result), true, mock)
  },
  updateAutomatedDiscoveryConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateAutomatedDiscoveryConfiguration', 'Macie2', Promise.resolve(result), false, mock)
  },
  updateAutomatedDiscoveryConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateAutomatedDiscoveryConfiguration', 'Macie2', Promise.reject(result), true, mock)
  },
  updateClassificationJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateClassificationJob', 'Macie2', Promise.resolve(result), true, mock)
  },
  updateClassificationJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateClassificationJob', 'Macie2', Promise.resolve(result), false, mock)
  },
  updateClassificationJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateClassificationJob', 'Macie2', Promise.reject(result), true, mock)
  },
  updateClassificationScope: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateClassificationScope', 'Macie2', Promise.resolve(result), true, mock)
  },
  updateClassificationScopeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateClassificationScope', 'Macie2', Promise.resolve(result), false, mock)
  },
  updateClassificationScopeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateClassificationScope', 'Macie2', Promise.reject(result), true, mock)
  },
  updateFindingsFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateFindingsFilter', 'Macie2', Promise.resolve(result), true, mock)
  },
  updateFindingsFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateFindingsFilter', 'Macie2', Promise.resolve(result), false, mock)
  },
  updateFindingsFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateFindingsFilter', 'Macie2', Promise.reject(result), true, mock)
  },
  updateMacieSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateMacieSession', 'Macie2', Promise.resolve(result), true, mock)
  },
  updateMacieSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateMacieSession', 'Macie2', Promise.resolve(result), false, mock)
  },
  updateMacieSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateMacieSession', 'Macie2', Promise.reject(result), true, mock)
  },
  updateMemberSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateMemberSession', 'Macie2', Promise.resolve(result), true, mock)
  },
  updateMemberSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateMemberSession', 'Macie2', Promise.resolve(result), false, mock)
  },
  updateMemberSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateMemberSession', 'Macie2', Promise.reject(result), true, mock)
  },
  updateOrganizationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateOrganizationConfiguration', 'Macie2', Promise.resolve(result), true, mock)
  },
  updateOrganizationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateOrganizationConfiguration', 'Macie2', Promise.resolve(result), false, mock)
  },
  updateOrganizationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateOrganizationConfiguration', 'Macie2', Promise.reject(result), true, mock)
  },
  updateResourceProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateResourceProfile', 'Macie2', Promise.resolve(result), true, mock)
  },
  updateResourceProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateResourceProfile', 'Macie2', Promise.resolve(result), false, mock)
  },
  updateResourceProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateResourceProfile', 'Macie2', Promise.reject(result), true, mock)
  },
  updateResourceProfileDetections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateResourceProfileDetections', 'Macie2', Promise.resolve(result), true, mock)
  },
  updateResourceProfileDetectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateResourceProfileDetections', 'Macie2', Promise.resolve(result), false, mock)
  },
  updateResourceProfileDetectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateResourceProfileDetections', 'Macie2', Promise.reject(result), true, mock)
  },
  updateRevealConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateRevealConfiguration', 'Macie2', Promise.resolve(result), true, mock)
  },
  updateRevealConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateRevealConfiguration', 'Macie2', Promise.resolve(result), false, mock)
  },
  updateRevealConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateRevealConfiguration', 'Macie2', Promise.reject(result), true, mock)
  },
  updateSensitivityInspectionTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateSensitivityInspectionTemplate', 'Macie2', Promise.resolve(result), true, mock)
  },
  updateSensitivityInspectionTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateSensitivityInspectionTemplate', 'Macie2', Promise.resolve(result), false, mock)
  },
  updateSensitivityInspectionTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'updateSensitivityInspectionTemplate', 'Macie2', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'send', 'Macie2Client', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'send', 'Macie2Client', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-macie2', 'send', 'Macie2Client', Promise.reject(result), true, mock)
  }
}
