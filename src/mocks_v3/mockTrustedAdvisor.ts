
/**
* @description mocks_v3:mockTrustedAdvisor module is mocks for AWS-SDK V3
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
export const mockTrustedAdvisor = {
  getOrganizationRecommendation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'getOrganizationRecommendation', 'TrustedAdvisor', Promise.resolve(result), true, mock)
  },
  getOrganizationRecommendationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'getOrganizationRecommendation', 'TrustedAdvisor', Promise.resolve(result), false, mock)
  },
  getOrganizationRecommendationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'getOrganizationRecommendation', 'TrustedAdvisor', Promise.reject(result), true, mock)
  },
  getRecommendation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'getRecommendation', 'TrustedAdvisor', Promise.resolve(result), true, mock)
  },
  getRecommendationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'getRecommendation', 'TrustedAdvisor', Promise.resolve(result), false, mock)
  },
  getRecommendationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'getRecommendation', 'TrustedAdvisor', Promise.reject(result), true, mock)
  },
  listChecks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'listChecks', 'TrustedAdvisor', Promise.resolve(result), true, mock)
  },
  listChecksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'listChecks', 'TrustedAdvisor', Promise.resolve(result), false, mock)
  },
  listChecksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'listChecks', 'TrustedAdvisor', Promise.reject(result), true, mock)
  },
  listOrganizationRecommendationAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'listOrganizationRecommendationAccounts', 'TrustedAdvisor', Promise.resolve(result), true, mock)
  },
  listOrganizationRecommendationAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'listOrganizationRecommendationAccounts', 'TrustedAdvisor', Promise.resolve(result), false, mock)
  },
  listOrganizationRecommendationAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'listOrganizationRecommendationAccounts', 'TrustedAdvisor', Promise.reject(result), true, mock)
  },
  listOrganizationRecommendationResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'listOrganizationRecommendationResources', 'TrustedAdvisor', Promise.resolve(result), true, mock)
  },
  listOrganizationRecommendationResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'listOrganizationRecommendationResources', 'TrustedAdvisor', Promise.resolve(result), false, mock)
  },
  listOrganizationRecommendationResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'listOrganizationRecommendationResources', 'TrustedAdvisor', Promise.reject(result), true, mock)
  },
  listOrganizationRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'listOrganizationRecommendations', 'TrustedAdvisor', Promise.resolve(result), true, mock)
  },
  listOrganizationRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'listOrganizationRecommendations', 'TrustedAdvisor', Promise.resolve(result), false, mock)
  },
  listOrganizationRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'listOrganizationRecommendations', 'TrustedAdvisor', Promise.reject(result), true, mock)
  },
  listRecommendationResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'listRecommendationResources', 'TrustedAdvisor', Promise.resolve(result), true, mock)
  },
  listRecommendationResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'listRecommendationResources', 'TrustedAdvisor', Promise.resolve(result), false, mock)
  },
  listRecommendationResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'listRecommendationResources', 'TrustedAdvisor', Promise.reject(result), true, mock)
  },
  listRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'listRecommendations', 'TrustedAdvisor', Promise.resolve(result), true, mock)
  },
  listRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'listRecommendations', 'TrustedAdvisor', Promise.resolve(result), false, mock)
  },
  listRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'listRecommendations', 'TrustedAdvisor', Promise.reject(result), true, mock)
  },
  updateOrganizationRecommendationLifecycle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'updateOrganizationRecommendationLifecycle', 'TrustedAdvisor', Promise.resolve(result), true, mock)
  },
  updateOrganizationRecommendationLifecycleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'updateOrganizationRecommendationLifecycle', 'TrustedAdvisor', Promise.resolve(result), false, mock)
  },
  updateOrganizationRecommendationLifecycleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'updateOrganizationRecommendationLifecycle', 'TrustedAdvisor', Promise.reject(result), true, mock)
  },
  updateRecommendationLifecycle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'updateRecommendationLifecycle', 'TrustedAdvisor', Promise.resolve(result), true, mock)
  },
  updateRecommendationLifecycleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'updateRecommendationLifecycle', 'TrustedAdvisor', Promise.resolve(result), false, mock)
  },
  updateRecommendationLifecycleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'updateRecommendationLifecycle', 'TrustedAdvisor', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'send', 'TrustedAdvisorClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'send', 'TrustedAdvisorClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-trustedadvisor', 'send', 'TrustedAdvisorClient', Promise.reject(result), true, mock)
  }
}
