
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
  export const mockFMS = {
  associateAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateAdminAccount', 'FMS', Promise.resolve(result), true, mock)
  },
  associateAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateAdminAccount', 'FMS', Promise.resolve(result), false, mock)
  },
  associateAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateAdminAccount', 'FMS', Promise.reject(result), true, mock)
  },
  deleteAppsList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAppsList', 'FMS', Promise.resolve(result), true, mock)
  },
  deleteAppsListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAppsList', 'FMS', Promise.resolve(result), false, mock)
  },
  deleteAppsListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAppsList', 'FMS', Promise.reject(result), true, mock)
  },
  deleteNotificationChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNotificationChannel', 'FMS', Promise.resolve(result), true, mock)
  },
  deleteNotificationChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNotificationChannel', 'FMS', Promise.resolve(result), false, mock)
  },
  deleteNotificationChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNotificationChannel', 'FMS', Promise.reject(result), true, mock)
  },
  deletePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePolicy', 'FMS', Promise.resolve(result), true, mock)
  },
  deletePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePolicy', 'FMS', Promise.resolve(result), false, mock)
  },
  deletePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePolicy', 'FMS', Promise.reject(result), true, mock)
  },
  deleteProtocolsList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProtocolsList', 'FMS', Promise.resolve(result), true, mock)
  },
  deleteProtocolsListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProtocolsList', 'FMS', Promise.resolve(result), false, mock)
  },
  deleteProtocolsListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProtocolsList', 'FMS', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'FMS', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'FMS', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'FMS', Promise.reject(result), true, mock)
  },
  disassociateAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateAdminAccount', 'FMS', Promise.resolve(result), true, mock)
  },
  disassociateAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateAdminAccount', 'FMS', Promise.resolve(result), false, mock)
  },
  disassociateAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateAdminAccount', 'FMS', Promise.reject(result), true, mock)
  },
  getAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAdminAccount', 'FMS', Promise.resolve(result), true, mock)
  },
  getAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAdminAccount', 'FMS', Promise.resolve(result), false, mock)
  },
  getAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAdminAccount', 'FMS', Promise.reject(result), true, mock)
  },
  getAppsList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAppsList', 'FMS', Promise.resolve(result), true, mock)
  },
  getAppsListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAppsList', 'FMS', Promise.resolve(result), false, mock)
  },
  getAppsListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAppsList', 'FMS', Promise.reject(result), true, mock)
  },
  getComplianceDetail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComplianceDetail', 'FMS', Promise.resolve(result), true, mock)
  },
  getComplianceDetailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComplianceDetail', 'FMS', Promise.resolve(result), false, mock)
  },
  getComplianceDetailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getComplianceDetail', 'FMS', Promise.reject(result), true, mock)
  },
  getNotificationChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNotificationChannel', 'FMS', Promise.resolve(result), true, mock)
  },
  getNotificationChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNotificationChannel', 'FMS', Promise.resolve(result), false, mock)
  },
  getNotificationChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getNotificationChannel', 'FMS', Promise.reject(result), true, mock)
  },
  getPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPolicy', 'FMS', Promise.resolve(result), true, mock)
  },
  getPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPolicy', 'FMS', Promise.resolve(result), false, mock)
  },
  getPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPolicy', 'FMS', Promise.reject(result), true, mock)
  },
  getProtectionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProtectionStatus', 'FMS', Promise.resolve(result), true, mock)
  },
  getProtectionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProtectionStatus', 'FMS', Promise.resolve(result), false, mock)
  },
  getProtectionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProtectionStatus', 'FMS', Promise.reject(result), true, mock)
  },
  getProtocolsList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProtocolsList', 'FMS', Promise.resolve(result), true, mock)
  },
  getProtocolsListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProtocolsList', 'FMS', Promise.resolve(result), false, mock)
  },
  getProtocolsListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProtocolsList', 'FMS', Promise.reject(result), true, mock)
  },
  getViolationDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getViolationDetails', 'FMS', Promise.resolve(result), true, mock)
  },
  getViolationDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getViolationDetails', 'FMS', Promise.resolve(result), false, mock)
  },
  getViolationDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getViolationDetails', 'FMS', Promise.reject(result), true, mock)
  },
  listAppsLists: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAppsLists', 'FMS', Promise.resolve(result), true, mock)
  },
  listAppsListsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAppsLists', 'FMS', Promise.resolve(result), false, mock)
  },
  listAppsListsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAppsLists', 'FMS', Promise.reject(result), true, mock)
  },
  listComplianceStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComplianceStatus', 'FMS', Promise.resolve(result), true, mock)
  },
  listComplianceStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComplianceStatus', 'FMS', Promise.resolve(result), false, mock)
  },
  listComplianceStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComplianceStatus', 'FMS', Promise.reject(result), true, mock)
  },
  listMemberAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMemberAccounts', 'FMS', Promise.resolve(result), true, mock)
  },
  listMemberAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMemberAccounts', 'FMS', Promise.resolve(result), false, mock)
  },
  listMemberAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listMemberAccounts', 'FMS', Promise.reject(result), true, mock)
  },
  listPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPolicies', 'FMS', Promise.resolve(result), true, mock)
  },
  listPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPolicies', 'FMS', Promise.resolve(result), false, mock)
  },
  listPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPolicies', 'FMS', Promise.reject(result), true, mock)
  },
  listProtocolsLists: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProtocolsLists', 'FMS', Promise.resolve(result), true, mock)
  },
  listProtocolsListsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProtocolsLists', 'FMS', Promise.resolve(result), false, mock)
  },
  listProtocolsListsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProtocolsLists', 'FMS', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'FMS', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'FMS', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'FMS', Promise.reject(result), true, mock)
  },
  putAppsList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAppsList', 'FMS', Promise.resolve(result), true, mock)
  },
  putAppsListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAppsList', 'FMS', Promise.resolve(result), false, mock)
  },
  putAppsListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putAppsList', 'FMS', Promise.reject(result), true, mock)
  },
  putNotificationChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putNotificationChannel', 'FMS', Promise.resolve(result), true, mock)
  },
  putNotificationChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putNotificationChannel', 'FMS', Promise.resolve(result), false, mock)
  },
  putNotificationChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putNotificationChannel', 'FMS', Promise.reject(result), true, mock)
  },
  putPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPolicy', 'FMS', Promise.resolve(result), true, mock)
  },
  putPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPolicy', 'FMS', Promise.resolve(result), false, mock)
  },
  putPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPolicy', 'FMS', Promise.reject(result), true, mock)
  },
  putProtocolsList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putProtocolsList', 'FMS', Promise.resolve(result), true, mock)
  },
  putProtocolsListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putProtocolsList', 'FMS', Promise.resolve(result), false, mock)
  },
  putProtocolsListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putProtocolsList', 'FMS', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'FMS', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'FMS', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'FMS', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'FMS', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'FMS', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'FMS', Promise.reject(result), true, mock)
  },
}
