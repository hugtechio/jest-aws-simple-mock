
/**
* @description mocks_v3:mockFMS module is mocks for AWS-SDK V3
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

  export const mockFMS = {
  associateAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'associateAdminAccount', 'FMS', Promise.resolve(result), true, mock)
  },
  associateAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'associateAdminAccount', 'FMS', Promise.resolve(result), false, mock)
  },
  associateAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'associateAdminAccount', 'FMS', Promise.reject(result), true, mock)
  },
  deleteAppsList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'deleteAppsList', 'FMS', Promise.resolve(result), true, mock)
  },
  deleteAppsListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'deleteAppsList', 'FMS', Promise.resolve(result), false, mock)
  },
  deleteAppsListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'deleteAppsList', 'FMS', Promise.reject(result), true, mock)
  },
  deleteNotificationChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'deleteNotificationChannel', 'FMS', Promise.resolve(result), true, mock)
  },
  deleteNotificationChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'deleteNotificationChannel', 'FMS', Promise.resolve(result), false, mock)
  },
  deleteNotificationChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'deleteNotificationChannel', 'FMS', Promise.reject(result), true, mock)
  },
  deletePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'deletePolicy', 'FMS', Promise.resolve(result), true, mock)
  },
  deletePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'deletePolicy', 'FMS', Promise.resolve(result), false, mock)
  },
  deletePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'deletePolicy', 'FMS', Promise.reject(result), true, mock)
  },
  deleteProtocolsList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'deleteProtocolsList', 'FMS', Promise.resolve(result), true, mock)
  },
  deleteProtocolsListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'deleteProtocolsList', 'FMS', Promise.resolve(result), false, mock)
  },
  deleteProtocolsListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'deleteProtocolsList', 'FMS', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'destroy', 'FMS', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'destroy', 'FMS', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'destroy', 'FMS', Promise.reject(result), true, mock)
  },
  disassociateAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'disassociateAdminAccount', 'FMS', Promise.resolve(result), true, mock)
  },
  disassociateAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'disassociateAdminAccount', 'FMS', Promise.resolve(result), false, mock)
  },
  disassociateAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'disassociateAdminAccount', 'FMS', Promise.reject(result), true, mock)
  },
  getAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getAdminAccount', 'FMS', Promise.resolve(result), true, mock)
  },
  getAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getAdminAccount', 'FMS', Promise.resolve(result), false, mock)
  },
  getAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getAdminAccount', 'FMS', Promise.reject(result), true, mock)
  },
  getAppsList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getAppsList', 'FMS', Promise.resolve(result), true, mock)
  },
  getAppsListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getAppsList', 'FMS', Promise.resolve(result), false, mock)
  },
  getAppsListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getAppsList', 'FMS', Promise.reject(result), true, mock)
  },
  getComplianceDetail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getComplianceDetail', 'FMS', Promise.resolve(result), true, mock)
  },
  getComplianceDetailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getComplianceDetail', 'FMS', Promise.resolve(result), false, mock)
  },
  getComplianceDetailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getComplianceDetail', 'FMS', Promise.reject(result), true, mock)
  },
  getNotificationChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getNotificationChannel', 'FMS', Promise.resolve(result), true, mock)
  },
  getNotificationChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getNotificationChannel', 'FMS', Promise.resolve(result), false, mock)
  },
  getNotificationChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getNotificationChannel', 'FMS', Promise.reject(result), true, mock)
  },
  getPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getPolicy', 'FMS', Promise.resolve(result), true, mock)
  },
  getPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getPolicy', 'FMS', Promise.resolve(result), false, mock)
  },
  getPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getPolicy', 'FMS', Promise.reject(result), true, mock)
  },
  getProtectionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getProtectionStatus', 'FMS', Promise.resolve(result), true, mock)
  },
  getProtectionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getProtectionStatus', 'FMS', Promise.resolve(result), false, mock)
  },
  getProtectionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getProtectionStatus', 'FMS', Promise.reject(result), true, mock)
  },
  getProtocolsList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getProtocolsList', 'FMS', Promise.resolve(result), true, mock)
  },
  getProtocolsListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getProtocolsList', 'FMS', Promise.resolve(result), false, mock)
  },
  getProtocolsListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getProtocolsList', 'FMS', Promise.reject(result), true, mock)
  },
  getViolationDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getViolationDetails', 'FMS', Promise.resolve(result), true, mock)
  },
  getViolationDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getViolationDetails', 'FMS', Promise.resolve(result), false, mock)
  },
  getViolationDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'getViolationDetails', 'FMS', Promise.reject(result), true, mock)
  },
  listAppsLists: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'listAppsLists', 'FMS', Promise.resolve(result), true, mock)
  },
  listAppsListsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'listAppsLists', 'FMS', Promise.resolve(result), false, mock)
  },
  listAppsListsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'listAppsLists', 'FMS', Promise.reject(result), true, mock)
  },
  listComplianceStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'listComplianceStatus', 'FMS', Promise.resolve(result), true, mock)
  },
  listComplianceStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'listComplianceStatus', 'FMS', Promise.resolve(result), false, mock)
  },
  listComplianceStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'listComplianceStatus', 'FMS', Promise.reject(result), true, mock)
  },
  listMemberAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'listMemberAccounts', 'FMS', Promise.resolve(result), true, mock)
  },
  listMemberAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'listMemberAccounts', 'FMS', Promise.resolve(result), false, mock)
  },
  listMemberAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'listMemberAccounts', 'FMS', Promise.reject(result), true, mock)
  },
  listPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'listPolicies', 'FMS', Promise.resolve(result), true, mock)
  },
  listPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'listPolicies', 'FMS', Promise.resolve(result), false, mock)
  },
  listPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'listPolicies', 'FMS', Promise.reject(result), true, mock)
  },
  listProtocolsLists: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'listProtocolsLists', 'FMS', Promise.resolve(result), true, mock)
  },
  listProtocolsListsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'listProtocolsLists', 'FMS', Promise.resolve(result), false, mock)
  },
  listProtocolsListsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'listProtocolsLists', 'FMS', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'listTagsForResource', 'FMS', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'listTagsForResource', 'FMS', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'listTagsForResource', 'FMS', Promise.reject(result), true, mock)
  },
  putAppsList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'putAppsList', 'FMS', Promise.resolve(result), true, mock)
  },
  putAppsListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'putAppsList', 'FMS', Promise.resolve(result), false, mock)
  },
  putAppsListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'putAppsList', 'FMS', Promise.reject(result), true, mock)
  },
  putNotificationChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'putNotificationChannel', 'FMS', Promise.resolve(result), true, mock)
  },
  putNotificationChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'putNotificationChannel', 'FMS', Promise.resolve(result), false, mock)
  },
  putNotificationChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'putNotificationChannel', 'FMS', Promise.reject(result), true, mock)
  },
  putPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'putPolicy', 'FMS', Promise.resolve(result), true, mock)
  },
  putPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'putPolicy', 'FMS', Promise.resolve(result), false, mock)
  },
  putPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'putPolicy', 'FMS', Promise.reject(result), true, mock)
  },
  putProtocolsList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'putProtocolsList', 'FMS', Promise.resolve(result), true, mock)
  },
  putProtocolsListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'putProtocolsList', 'FMS', Promise.resolve(result), false, mock)
  },
  putProtocolsListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'putProtocolsList', 'FMS', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'tagResource', 'FMS', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'tagResource', 'FMS', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'tagResource', 'FMS', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'untagResource', 'FMS', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'untagResource', 'FMS', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'untagResource', 'FMS', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'send', 'FMSClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'send', 'FMSClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-fms', 'send', 'FMSClient', Promise.reject(result), true, mock)
  }
}