
/**
* @description mocks_v3:mockRoute53Domains module is mocks for AWS-SDK V3
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
export const mockRoute53Domains = {
  acceptDomainTransferFromAnotherAwsAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'acceptDomainTransferFromAnotherAwsAccount', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  acceptDomainTransferFromAnotherAwsAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'acceptDomainTransferFromAnotherAwsAccount', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  acceptDomainTransferFromAnotherAwsAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'acceptDomainTransferFromAnotherAwsAccount', 'Route53Domains', Promise.reject(result), true, mock)
  },
  associateDelegationSignerToDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'associateDelegationSignerToDomain', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  associateDelegationSignerToDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'associateDelegationSignerToDomain', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  associateDelegationSignerToDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'associateDelegationSignerToDomain', 'Route53Domains', Promise.reject(result), true, mock)
  },
  cancelDomainTransferToAnotherAwsAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'cancelDomainTransferToAnotherAwsAccount', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  cancelDomainTransferToAnotherAwsAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'cancelDomainTransferToAnotherAwsAccount', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  cancelDomainTransferToAnotherAwsAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'cancelDomainTransferToAnotherAwsAccount', 'Route53Domains', Promise.reject(result), true, mock)
  },
  checkDomainAvailability: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'checkDomainAvailability', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  checkDomainAvailabilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'checkDomainAvailability', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  checkDomainAvailabilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'checkDomainAvailability', 'Route53Domains', Promise.reject(result), true, mock)
  },
  checkDomainTransferability: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'checkDomainTransferability', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  checkDomainTransferabilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'checkDomainTransferability', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  checkDomainTransferabilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'checkDomainTransferability', 'Route53Domains', Promise.reject(result), true, mock)
  },
  deleteDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'deleteDomain', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  deleteDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'deleteDomain', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  deleteDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'deleteDomain', 'Route53Domains', Promise.reject(result), true, mock)
  },
  deleteTagsForDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'deleteTagsForDomain', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  deleteTagsForDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'deleteTagsForDomain', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  deleteTagsForDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'deleteTagsForDomain', 'Route53Domains', Promise.reject(result), true, mock)
  },
  disableDomainAutoRenew: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'disableDomainAutoRenew', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  disableDomainAutoRenewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'disableDomainAutoRenew', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  disableDomainAutoRenewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'disableDomainAutoRenew', 'Route53Domains', Promise.reject(result), true, mock)
  },
  disableDomainTransferLock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'disableDomainTransferLock', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  disableDomainTransferLockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'disableDomainTransferLock', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  disableDomainTransferLockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'disableDomainTransferLock', 'Route53Domains', Promise.reject(result), true, mock)
  },
  disassociateDelegationSignerFromDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'disassociateDelegationSignerFromDomain', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  disassociateDelegationSignerFromDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'disassociateDelegationSignerFromDomain', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  disassociateDelegationSignerFromDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'disassociateDelegationSignerFromDomain', 'Route53Domains', Promise.reject(result), true, mock)
  },
  enableDomainAutoRenew: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'enableDomainAutoRenew', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  enableDomainAutoRenewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'enableDomainAutoRenew', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  enableDomainAutoRenewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'enableDomainAutoRenew', 'Route53Domains', Promise.reject(result), true, mock)
  },
  enableDomainTransferLock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'enableDomainTransferLock', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  enableDomainTransferLockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'enableDomainTransferLock', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  enableDomainTransferLockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'enableDomainTransferLock', 'Route53Domains', Promise.reject(result), true, mock)
  },
  getContactReachabilityStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'getContactReachabilityStatus', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  getContactReachabilityStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'getContactReachabilityStatus', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  getContactReachabilityStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'getContactReachabilityStatus', 'Route53Domains', Promise.reject(result), true, mock)
  },
  getDomainDetail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'getDomainDetail', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  getDomainDetailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'getDomainDetail', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  getDomainDetailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'getDomainDetail', 'Route53Domains', Promise.reject(result), true, mock)
  },
  getDomainSuggestions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'getDomainSuggestions', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  getDomainSuggestionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'getDomainSuggestions', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  getDomainSuggestionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'getDomainSuggestions', 'Route53Domains', Promise.reject(result), true, mock)
  },
  getOperationDetail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'getOperationDetail', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  getOperationDetailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'getOperationDetail', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  getOperationDetailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'getOperationDetail', 'Route53Domains', Promise.reject(result), true, mock)
  },
  listDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'listDomains', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  listDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'listDomains', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  listDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'listDomains', 'Route53Domains', Promise.reject(result), true, mock)
  },
  listOperations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'listOperations', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  listOperationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'listOperations', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  listOperationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'listOperations', 'Route53Domains', Promise.reject(result), true, mock)
  },
  listPrices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'listPrices', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  listPricesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'listPrices', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  listPricesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'listPrices', 'Route53Domains', Promise.reject(result), true, mock)
  },
  listTagsForDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'listTagsForDomain', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  listTagsForDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'listTagsForDomain', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  listTagsForDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'listTagsForDomain', 'Route53Domains', Promise.reject(result), true, mock)
  },
  pushDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'pushDomain', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  pushDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'pushDomain', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  pushDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'pushDomain', 'Route53Domains', Promise.reject(result), true, mock)
  },
  registerDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'registerDomain', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  registerDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'registerDomain', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  registerDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'registerDomain', 'Route53Domains', Promise.reject(result), true, mock)
  },
  rejectDomainTransferFromAnotherAwsAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'rejectDomainTransferFromAnotherAwsAccount', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  rejectDomainTransferFromAnotherAwsAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'rejectDomainTransferFromAnotherAwsAccount', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  rejectDomainTransferFromAnotherAwsAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'rejectDomainTransferFromAnotherAwsAccount', 'Route53Domains', Promise.reject(result), true, mock)
  },
  renewDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'renewDomain', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  renewDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'renewDomain', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  renewDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'renewDomain', 'Route53Domains', Promise.reject(result), true, mock)
  },
  resendContactReachabilityEmail: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'resendContactReachabilityEmail', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  resendContactReachabilityEmailAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'resendContactReachabilityEmail', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  resendContactReachabilityEmailThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'resendContactReachabilityEmail', 'Route53Domains', Promise.reject(result), true, mock)
  },
  resendOperationAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'resendOperationAuthorization', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  resendOperationAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'resendOperationAuthorization', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  resendOperationAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'resendOperationAuthorization', 'Route53Domains', Promise.reject(result), true, mock)
  },
  retrieveDomainAuthCode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'retrieveDomainAuthCode', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  retrieveDomainAuthCodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'retrieveDomainAuthCode', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  retrieveDomainAuthCodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'retrieveDomainAuthCode', 'Route53Domains', Promise.reject(result), true, mock)
  },
  transferDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'transferDomain', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  transferDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'transferDomain', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  transferDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'transferDomain', 'Route53Domains', Promise.reject(result), true, mock)
  },
  transferDomainToAnotherAwsAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'transferDomainToAnotherAwsAccount', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  transferDomainToAnotherAwsAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'transferDomainToAnotherAwsAccount', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  transferDomainToAnotherAwsAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'transferDomainToAnotherAwsAccount', 'Route53Domains', Promise.reject(result), true, mock)
  },
  updateDomainContact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'updateDomainContact', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  updateDomainContactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'updateDomainContact', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  updateDomainContactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'updateDomainContact', 'Route53Domains', Promise.reject(result), true, mock)
  },
  updateDomainContactPrivacy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'updateDomainContactPrivacy', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  updateDomainContactPrivacyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'updateDomainContactPrivacy', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  updateDomainContactPrivacyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'updateDomainContactPrivacy', 'Route53Domains', Promise.reject(result), true, mock)
  },
  updateDomainNameservers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'updateDomainNameservers', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  updateDomainNameserversAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'updateDomainNameservers', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  updateDomainNameserversThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'updateDomainNameservers', 'Route53Domains', Promise.reject(result), true, mock)
  },
  updateTagsForDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'updateTagsForDomain', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  updateTagsForDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'updateTagsForDomain', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  updateTagsForDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'updateTagsForDomain', 'Route53Domains', Promise.reject(result), true, mock)
  },
  viewBilling: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'viewBilling', 'Route53Domains', Promise.resolve(result), true, mock)
  },
  viewBillingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'viewBilling', 'Route53Domains', Promise.resolve(result), false, mock)
  },
  viewBillingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'viewBilling', 'Route53Domains', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'send', 'Route53DomainsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'send', 'Route53DomainsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route-53-domains', 'send', 'Route53DomainsClient', Promise.reject(result), true, mock)
  }
}
