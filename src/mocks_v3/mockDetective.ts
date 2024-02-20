
/**
* @description mocks_v3:mockDetective module is mocks for AWS-SDK V3
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
export const mockDetective = {
  acceptInvitation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'acceptInvitation', 'Detective', Promise.resolve(result), true, mock)
  },
  acceptInvitationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'acceptInvitation', 'Detective', Promise.resolve(result), false, mock)
  },
  acceptInvitationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'acceptInvitation', 'Detective', Promise.reject(result), true, mock)
  },
  batchGetGraphMemberDatasources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'batchGetGraphMemberDatasources', 'Detective', Promise.resolve(result), true, mock)
  },
  batchGetGraphMemberDatasourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'batchGetGraphMemberDatasources', 'Detective', Promise.resolve(result), false, mock)
  },
  batchGetGraphMemberDatasourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'batchGetGraphMemberDatasources', 'Detective', Promise.reject(result), true, mock)
  },
  batchGetMembershipDatasources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'batchGetMembershipDatasources', 'Detective', Promise.resolve(result), true, mock)
  },
  batchGetMembershipDatasourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'batchGetMembershipDatasources', 'Detective', Promise.resolve(result), false, mock)
  },
  batchGetMembershipDatasourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'batchGetMembershipDatasources', 'Detective', Promise.reject(result), true, mock)
  },
  createGraph: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'createGraph', 'Detective', Promise.resolve(result), true, mock)
  },
  createGraphAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'createGraph', 'Detective', Promise.resolve(result), false, mock)
  },
  createGraphThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'createGraph', 'Detective', Promise.reject(result), true, mock)
  },
  createMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'createMembers', 'Detective', Promise.resolve(result), true, mock)
  },
  createMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'createMembers', 'Detective', Promise.resolve(result), false, mock)
  },
  createMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'createMembers', 'Detective', Promise.reject(result), true, mock)
  },
  deleteGraph: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'deleteGraph', 'Detective', Promise.resolve(result), true, mock)
  },
  deleteGraphAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'deleteGraph', 'Detective', Promise.resolve(result), false, mock)
  },
  deleteGraphThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'deleteGraph', 'Detective', Promise.reject(result), true, mock)
  },
  deleteMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'deleteMembers', 'Detective', Promise.resolve(result), true, mock)
  },
  deleteMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'deleteMembers', 'Detective', Promise.resolve(result), false, mock)
  },
  deleteMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'deleteMembers', 'Detective', Promise.reject(result), true, mock)
  },
  describeOrganizationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'describeOrganizationConfiguration', 'Detective', Promise.resolve(result), true, mock)
  },
  describeOrganizationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'describeOrganizationConfiguration', 'Detective', Promise.resolve(result), false, mock)
  },
  describeOrganizationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'describeOrganizationConfiguration', 'Detective', Promise.reject(result), true, mock)
  },
  disableOrganizationAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'disableOrganizationAdminAccount', 'Detective', Promise.resolve(result), true, mock)
  },
  disableOrganizationAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'disableOrganizationAdminAccount', 'Detective', Promise.resolve(result), false, mock)
  },
  disableOrganizationAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'disableOrganizationAdminAccount', 'Detective', Promise.reject(result), true, mock)
  },
  disassociateMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'disassociateMembership', 'Detective', Promise.resolve(result), true, mock)
  },
  disassociateMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'disassociateMembership', 'Detective', Promise.resolve(result), false, mock)
  },
  disassociateMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'disassociateMembership', 'Detective', Promise.reject(result), true, mock)
  },
  enableOrganizationAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'enableOrganizationAdminAccount', 'Detective', Promise.resolve(result), true, mock)
  },
  enableOrganizationAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'enableOrganizationAdminAccount', 'Detective', Promise.resolve(result), false, mock)
  },
  enableOrganizationAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'enableOrganizationAdminAccount', 'Detective', Promise.reject(result), true, mock)
  },
  getInvestigation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'getInvestigation', 'Detective', Promise.resolve(result), true, mock)
  },
  getInvestigationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'getInvestigation', 'Detective', Promise.resolve(result), false, mock)
  },
  getInvestigationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'getInvestigation', 'Detective', Promise.reject(result), true, mock)
  },
  getMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'getMembers', 'Detective', Promise.resolve(result), true, mock)
  },
  getMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'getMembers', 'Detective', Promise.resolve(result), false, mock)
  },
  getMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'getMembers', 'Detective', Promise.reject(result), true, mock)
  },
  listDatasourcePackages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listDatasourcePackages', 'Detective', Promise.resolve(result), true, mock)
  },
  listDatasourcePackagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listDatasourcePackages', 'Detective', Promise.resolve(result), false, mock)
  },
  listDatasourcePackagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listDatasourcePackages', 'Detective', Promise.reject(result), true, mock)
  },
  listGraphs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listGraphs', 'Detective', Promise.resolve(result), true, mock)
  },
  listGraphsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listGraphs', 'Detective', Promise.resolve(result), false, mock)
  },
  listGraphsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listGraphs', 'Detective', Promise.reject(result), true, mock)
  },
  listIndicators: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listIndicators', 'Detective', Promise.resolve(result), true, mock)
  },
  listIndicatorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listIndicators', 'Detective', Promise.resolve(result), false, mock)
  },
  listIndicatorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listIndicators', 'Detective', Promise.reject(result), true, mock)
  },
  listInvestigations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listInvestigations', 'Detective', Promise.resolve(result), true, mock)
  },
  listInvestigationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listInvestigations', 'Detective', Promise.resolve(result), false, mock)
  },
  listInvestigationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listInvestigations', 'Detective', Promise.reject(result), true, mock)
  },
  listInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listInvitations', 'Detective', Promise.resolve(result), true, mock)
  },
  listInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listInvitations', 'Detective', Promise.resolve(result), false, mock)
  },
  listInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listInvitations', 'Detective', Promise.reject(result), true, mock)
  },
  listMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listMembers', 'Detective', Promise.resolve(result), true, mock)
  },
  listMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listMembers', 'Detective', Promise.resolve(result), false, mock)
  },
  listMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listMembers', 'Detective', Promise.reject(result), true, mock)
  },
  listOrganizationAdminAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listOrganizationAdminAccounts', 'Detective', Promise.resolve(result), true, mock)
  },
  listOrganizationAdminAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listOrganizationAdminAccounts', 'Detective', Promise.resolve(result), false, mock)
  },
  listOrganizationAdminAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listOrganizationAdminAccounts', 'Detective', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listTagsForResource', 'Detective', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listTagsForResource', 'Detective', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'listTagsForResource', 'Detective', Promise.reject(result), true, mock)
  },
  rejectInvitation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'rejectInvitation', 'Detective', Promise.resolve(result), true, mock)
  },
  rejectInvitationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'rejectInvitation', 'Detective', Promise.resolve(result), false, mock)
  },
  rejectInvitationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'rejectInvitation', 'Detective', Promise.reject(result), true, mock)
  },
  startInvestigation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'startInvestigation', 'Detective', Promise.resolve(result), true, mock)
  },
  startInvestigationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'startInvestigation', 'Detective', Promise.resolve(result), false, mock)
  },
  startInvestigationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'startInvestigation', 'Detective', Promise.reject(result), true, mock)
  },
  startMonitoringMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'startMonitoringMember', 'Detective', Promise.resolve(result), true, mock)
  },
  startMonitoringMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'startMonitoringMember', 'Detective', Promise.resolve(result), false, mock)
  },
  startMonitoringMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'startMonitoringMember', 'Detective', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'tagResource', 'Detective', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'tagResource', 'Detective', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'tagResource', 'Detective', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'untagResource', 'Detective', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'untagResource', 'Detective', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'untagResource', 'Detective', Promise.reject(result), true, mock)
  },
  updateDatasourcePackages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'updateDatasourcePackages', 'Detective', Promise.resolve(result), true, mock)
  },
  updateDatasourcePackagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'updateDatasourcePackages', 'Detective', Promise.resolve(result), false, mock)
  },
  updateDatasourcePackagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'updateDatasourcePackages', 'Detective', Promise.reject(result), true, mock)
  },
  updateInvestigationState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'updateInvestigationState', 'Detective', Promise.resolve(result), true, mock)
  },
  updateInvestigationStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'updateInvestigationState', 'Detective', Promise.resolve(result), false, mock)
  },
  updateInvestigationStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'updateInvestigationState', 'Detective', Promise.reject(result), true, mock)
  },
  updateOrganizationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'updateOrganizationConfiguration', 'Detective', Promise.resolve(result), true, mock)
  },
  updateOrganizationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'updateOrganizationConfiguration', 'Detective', Promise.resolve(result), false, mock)
  },
  updateOrganizationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'updateOrganizationConfiguration', 'Detective', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'send', 'DetectiveClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'send', 'DetectiveClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-detective', 'send', 'DetectiveClient', Promise.reject(result), true, mock)
  }
}
