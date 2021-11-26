
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
  export const mockSecurityHub = {
  acceptAdministratorInvitation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptAdministratorInvitation', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  acceptAdministratorInvitationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptAdministratorInvitation', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  acceptAdministratorInvitationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptAdministratorInvitation', 'SecurityHub', Promise.reject(result), true, mock)
  },
  acceptInvitation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptInvitation', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  acceptInvitationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptInvitation', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  acceptInvitationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acceptInvitation', 'SecurityHub', Promise.reject(result), true, mock)
  },
  batchDisableStandards: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDisableStandards', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  batchDisableStandardsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDisableStandards', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  batchDisableStandardsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDisableStandards', 'SecurityHub', Promise.reject(result), true, mock)
  },
  batchEnableStandards: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchEnableStandards', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  batchEnableStandardsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchEnableStandards', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  batchEnableStandardsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchEnableStandards', 'SecurityHub', Promise.reject(result), true, mock)
  },
  batchImportFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchImportFindings', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  batchImportFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchImportFindings', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  batchImportFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchImportFindings', 'SecurityHub', Promise.reject(result), true, mock)
  },
  batchUpdateFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpdateFindings', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  batchUpdateFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpdateFindings', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  batchUpdateFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchUpdateFindings', 'SecurityHub', Promise.reject(result), true, mock)
  },
  createActionTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createActionTarget', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  createActionTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createActionTarget', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  createActionTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createActionTarget', 'SecurityHub', Promise.reject(result), true, mock)
  },
  createFindingAggregator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFindingAggregator', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  createFindingAggregatorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFindingAggregator', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  createFindingAggregatorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFindingAggregator', 'SecurityHub', Promise.reject(result), true, mock)
  },
  createInsight: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInsight', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  createInsightAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInsight', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  createInsightThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createInsight', 'SecurityHub', Promise.reject(result), true, mock)
  },
  createMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMembers', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  createMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMembers', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  createMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMembers', 'SecurityHub', Promise.reject(result), true, mock)
  },
  declineInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('declineInvitations', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  declineInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('declineInvitations', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  declineInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('declineInvitations', 'SecurityHub', Promise.reject(result), true, mock)
  },
  deleteActionTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteActionTarget', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  deleteActionTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteActionTarget', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  deleteActionTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteActionTarget', 'SecurityHub', Promise.reject(result), true, mock)
  },
  deleteFindingAggregator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFindingAggregator', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  deleteFindingAggregatorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFindingAggregator', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  deleteFindingAggregatorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFindingAggregator', 'SecurityHub', Promise.reject(result), true, mock)
  },
  deleteInsight: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInsight', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  deleteInsightAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInsight', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  deleteInsightThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInsight', 'SecurityHub', Promise.reject(result), true, mock)
  },
  deleteInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInvitations', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  deleteInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInvitations', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  deleteInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInvitations', 'SecurityHub', Promise.reject(result), true, mock)
  },
  deleteMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMembers', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  deleteMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMembers', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  deleteMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMembers', 'SecurityHub', Promise.reject(result), true, mock)
  },
  describeActionTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeActionTargets', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  describeActionTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeActionTargets', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  describeActionTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeActionTargets', 'SecurityHub', Promise.reject(result), true, mock)
  },
  describeHub: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHub', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  describeHubAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHub', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  describeHubThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHub', 'SecurityHub', Promise.reject(result), true, mock)
  },
  describeOrganizationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationConfiguration', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  describeOrganizationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationConfiguration', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  describeOrganizationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOrganizationConfiguration', 'SecurityHub', Promise.reject(result), true, mock)
  },
  describeProducts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProducts', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  describeProductsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProducts', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  describeProductsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProducts', 'SecurityHub', Promise.reject(result), true, mock)
  },
  describeStandards: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStandards', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  describeStandardsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStandards', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  describeStandardsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStandards', 'SecurityHub', Promise.reject(result), true, mock)
  },
  describeStandardsControls: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStandardsControls', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  describeStandardsControlsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStandardsControls', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  describeStandardsControlsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStandardsControls', 'SecurityHub', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SecurityHub', Promise.reject(result), true, mock)
  },
  disableImportFindingsForProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableImportFindingsForProduct', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  disableImportFindingsForProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableImportFindingsForProduct', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  disableImportFindingsForProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableImportFindingsForProduct', 'SecurityHub', Promise.reject(result), true, mock)
  },
  disableOrganizationAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableOrganizationAdminAccount', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  disableOrganizationAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableOrganizationAdminAccount', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  disableOrganizationAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableOrganizationAdminAccount', 'SecurityHub', Promise.reject(result), true, mock)
  },
  disableSecurityHub: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableSecurityHub', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  disableSecurityHubAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableSecurityHub', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  disableSecurityHubThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableSecurityHub', 'SecurityHub', Promise.reject(result), true, mock)
  },
  disassociateFromAdministratorAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFromAdministratorAccount', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  disassociateFromAdministratorAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFromAdministratorAccount', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  disassociateFromAdministratorAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFromAdministratorAccount', 'SecurityHub', Promise.reject(result), true, mock)
  },
  disassociateFromMasterAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFromMasterAccount', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  disassociateFromMasterAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFromMasterAccount', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  disassociateFromMasterAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFromMasterAccount', 'SecurityHub', Promise.reject(result), true, mock)
  },
  disassociateMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMembers', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  disassociateMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMembers', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  disassociateMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateMembers', 'SecurityHub', Promise.reject(result), true, mock)
  },
  enableImportFindingsForProduct: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableImportFindingsForProduct', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  enableImportFindingsForProductAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableImportFindingsForProduct', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  enableImportFindingsForProductThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableImportFindingsForProduct', 'SecurityHub', Promise.reject(result), true, mock)
  },
  enableOrganizationAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableOrganizationAdminAccount', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  enableOrganizationAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableOrganizationAdminAccount', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  enableOrganizationAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableOrganizationAdminAccount', 'SecurityHub', Promise.reject(result), true, mock)
  },
  enableSecurityHub: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableSecurityHub', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  enableSecurityHubAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableSecurityHub', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  enableSecurityHubThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableSecurityHub', 'SecurityHub', Promise.reject(result), true, mock)
  },
  getAdministratorAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAdministratorAccount', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  getAdministratorAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAdministratorAccount', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  getAdministratorAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAdministratorAccount', 'SecurityHub', Promise.reject(result), true, mock)
  },
  getEnabledStandards: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEnabledStandards', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  getEnabledStandardsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEnabledStandards', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  getEnabledStandardsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEnabledStandards', 'SecurityHub', Promise.reject(result), true, mock)
  },
  getFindingAggregator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindingAggregator', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  getFindingAggregatorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindingAggregator', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  getFindingAggregatorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindingAggregator', 'SecurityHub', Promise.reject(result), true, mock)
  },
  getFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindings', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  getFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindings', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  getFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFindings', 'SecurityHub', Promise.reject(result), true, mock)
  },
  getInsightResults: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsightResults', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  getInsightResultsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsightResults', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  getInsightResultsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsightResults', 'SecurityHub', Promise.reject(result), true, mock)
  },
  getInsights: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsights', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  getInsightsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsights', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  getInsightsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInsights', 'SecurityHub', Promise.reject(result), true, mock)
  },
  getInvitationsCount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInvitationsCount', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  getInvitationsCountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInvitationsCount', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  getInvitationsCountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInvitationsCount', 'SecurityHub', Promise.reject(result), true, mock)
  },
  getMasterAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMasterAccount', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  getMasterAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMasterAccount', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  getMasterAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMasterAccount', 'SecurityHub', Promise.reject(result), true, mock)
  },
  getMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMembers', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  getMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMembers', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  getMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMembers', 'SecurityHub', Promise.reject(result), true, mock)
  },
  inviteMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('inviteMembers', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  inviteMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('inviteMembers', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  inviteMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('inviteMembers', 'SecurityHub', Promise.reject(result), true, mock)
  },
  listEnabledProductsForImport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEnabledProductsForImport', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  listEnabledProductsForImportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEnabledProductsForImport', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  listEnabledProductsForImportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEnabledProductsForImport', 'SecurityHub', Promise.reject(result), true, mock)
  },
  listFindingAggregators: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFindingAggregators', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  listFindingAggregatorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFindingAggregators', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  listFindingAggregatorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFindingAggregators', 'SecurityHub', Promise.reject(result), true, mock)
  },
  listInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInvitations', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  listInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInvitations', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  listInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInvitations', 'SecurityHub', Promise.reject(result), true, mock)
  },
  listMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMembers', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  listMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMembers', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  listMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMembers', 'SecurityHub', Promise.reject(result), true, mock)
  },
  listOrganizationAdminAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOrganizationAdminAccounts', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  listOrganizationAdminAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOrganizationAdminAccounts', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  listOrganizationAdminAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOrganizationAdminAccounts', 'SecurityHub', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SecurityHub', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'SecurityHub', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'SecurityHub', Promise.reject(result), true, mock)
  },
  updateActionTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateActionTarget', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  updateActionTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateActionTarget', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  updateActionTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateActionTarget', 'SecurityHub', Promise.reject(result), true, mock)
  },
  updateFindingAggregator: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFindingAggregator', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  updateFindingAggregatorAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFindingAggregator', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  updateFindingAggregatorThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFindingAggregator', 'SecurityHub', Promise.reject(result), true, mock)
  },
  updateFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFindings', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  updateFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFindings', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  updateFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFindings', 'SecurityHub', Promise.reject(result), true, mock)
  },
  updateInsight: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInsight', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  updateInsightAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInsight', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  updateInsightThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateInsight', 'SecurityHub', Promise.reject(result), true, mock)
  },
  updateOrganizationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOrganizationConfiguration', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  updateOrganizationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOrganizationConfiguration', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  updateOrganizationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOrganizationConfiguration', 'SecurityHub', Promise.reject(result), true, mock)
  },
  updateSecurityHubConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSecurityHubConfiguration', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  updateSecurityHubConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSecurityHubConfiguration', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  updateSecurityHubConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSecurityHubConfiguration', 'SecurityHub', Promise.reject(result), true, mock)
  },
  updateStandardsControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStandardsControl', 'SecurityHub', Promise.resolve(result), true, mock)
  },
  updateStandardsControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStandardsControl', 'SecurityHub', Promise.resolve(result), false, mock)
  },
  updateStandardsControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStandardsControl', 'SecurityHub', Promise.reject(result), true, mock)
  },
}
