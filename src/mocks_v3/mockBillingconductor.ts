
/**
* @description mocks_v3:mockBillingconductor module is mocks for AWS-SDK V3
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
export const mockBillingconductor = {
  associateAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'associateAccounts', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  associateAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'associateAccounts', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  associateAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'associateAccounts', 'Billingconductor', Promise.reject(result), true, mock)
  },
  associatePricingRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'associatePricingRules', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  associatePricingRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'associatePricingRules', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  associatePricingRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'associatePricingRules', 'Billingconductor', Promise.reject(result), true, mock)
  },
  batchAssociateResourcesToCustomLineItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'batchAssociateResourcesToCustomLineItem', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  batchAssociateResourcesToCustomLineItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'batchAssociateResourcesToCustomLineItem', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  batchAssociateResourcesToCustomLineItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'batchAssociateResourcesToCustomLineItem', 'Billingconductor', Promise.reject(result), true, mock)
  },
  batchDisassociateResourcesFromCustomLineItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'batchDisassociateResourcesFromCustomLineItem', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  batchDisassociateResourcesFromCustomLineItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'batchDisassociateResourcesFromCustomLineItem', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  batchDisassociateResourcesFromCustomLineItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'batchDisassociateResourcesFromCustomLineItem', 'Billingconductor', Promise.reject(result), true, mock)
  },
  createBillingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'createBillingGroup', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  createBillingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'createBillingGroup', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  createBillingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'createBillingGroup', 'Billingconductor', Promise.reject(result), true, mock)
  },
  createCustomLineItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'createCustomLineItem', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  createCustomLineItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'createCustomLineItem', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  createCustomLineItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'createCustomLineItem', 'Billingconductor', Promise.reject(result), true, mock)
  },
  createPricingPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'createPricingPlan', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  createPricingPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'createPricingPlan', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  createPricingPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'createPricingPlan', 'Billingconductor', Promise.reject(result), true, mock)
  },
  createPricingRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'createPricingRule', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  createPricingRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'createPricingRule', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  createPricingRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'createPricingRule', 'Billingconductor', Promise.reject(result), true, mock)
  },
  deleteBillingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'deleteBillingGroup', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  deleteBillingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'deleteBillingGroup', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  deleteBillingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'deleteBillingGroup', 'Billingconductor', Promise.reject(result), true, mock)
  },
  deleteCustomLineItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'deleteCustomLineItem', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  deleteCustomLineItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'deleteCustomLineItem', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  deleteCustomLineItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'deleteCustomLineItem', 'Billingconductor', Promise.reject(result), true, mock)
  },
  deletePricingPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'deletePricingPlan', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  deletePricingPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'deletePricingPlan', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  deletePricingPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'deletePricingPlan', 'Billingconductor', Promise.reject(result), true, mock)
  },
  deletePricingRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'deletePricingRule', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  deletePricingRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'deletePricingRule', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  deletePricingRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'deletePricingRule', 'Billingconductor', Promise.reject(result), true, mock)
  },
  disassociateAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'disassociateAccounts', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  disassociateAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'disassociateAccounts', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  disassociateAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'disassociateAccounts', 'Billingconductor', Promise.reject(result), true, mock)
  },
  disassociatePricingRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'disassociatePricingRules', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  disassociatePricingRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'disassociatePricingRules', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  disassociatePricingRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'disassociatePricingRules', 'Billingconductor', Promise.reject(result), true, mock)
  },
  getBillingGroupCostReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'getBillingGroupCostReport', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  getBillingGroupCostReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'getBillingGroupCostReport', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  getBillingGroupCostReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'getBillingGroupCostReport', 'Billingconductor', Promise.reject(result), true, mock)
  },
  listAccountAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listAccountAssociations', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  listAccountAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listAccountAssociations', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  listAccountAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listAccountAssociations', 'Billingconductor', Promise.reject(result), true, mock)
  },
  listBillingGroupCostReports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listBillingGroupCostReports', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  listBillingGroupCostReportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listBillingGroupCostReports', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  listBillingGroupCostReportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listBillingGroupCostReports', 'Billingconductor', Promise.reject(result), true, mock)
  },
  listBillingGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listBillingGroups', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  listBillingGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listBillingGroups', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  listBillingGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listBillingGroups', 'Billingconductor', Promise.reject(result), true, mock)
  },
  listCustomLineItemVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listCustomLineItemVersions', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  listCustomLineItemVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listCustomLineItemVersions', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  listCustomLineItemVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listCustomLineItemVersions', 'Billingconductor', Promise.reject(result), true, mock)
  },
  listCustomLineItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listCustomLineItems', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  listCustomLineItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listCustomLineItems', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  listCustomLineItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listCustomLineItems', 'Billingconductor', Promise.reject(result), true, mock)
  },
  listPricingPlansAssociatedWithPricingRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listPricingPlansAssociatedWithPricingRule', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  listPricingPlansAssociatedWithPricingRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listPricingPlansAssociatedWithPricingRule', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  listPricingPlansAssociatedWithPricingRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listPricingPlansAssociatedWithPricingRule', 'Billingconductor', Promise.reject(result), true, mock)
  },
  listPricingPlans: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listPricingPlans', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  listPricingPlansAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listPricingPlans', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  listPricingPlansThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listPricingPlans', 'Billingconductor', Promise.reject(result), true, mock)
  },
  listPricingRulesAssociatedToPricingPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listPricingRulesAssociatedToPricingPlan', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  listPricingRulesAssociatedToPricingPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listPricingRulesAssociatedToPricingPlan', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  listPricingRulesAssociatedToPricingPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listPricingRulesAssociatedToPricingPlan', 'Billingconductor', Promise.reject(result), true, mock)
  },
  listPricingRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listPricingRules', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  listPricingRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listPricingRules', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  listPricingRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listPricingRules', 'Billingconductor', Promise.reject(result), true, mock)
  },
  listResourcesAssociatedToCustomLineItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listResourcesAssociatedToCustomLineItem', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  listResourcesAssociatedToCustomLineItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listResourcesAssociatedToCustomLineItem', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  listResourcesAssociatedToCustomLineItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listResourcesAssociatedToCustomLineItem', 'Billingconductor', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listTagsForResource', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listTagsForResource', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'listTagsForResource', 'Billingconductor', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'tagResource', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'tagResource', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'tagResource', 'Billingconductor', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'untagResource', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'untagResource', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'untagResource', 'Billingconductor', Promise.reject(result), true, mock)
  },
  updateBillingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'updateBillingGroup', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  updateBillingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'updateBillingGroup', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  updateBillingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'updateBillingGroup', 'Billingconductor', Promise.reject(result), true, mock)
  },
  updateCustomLineItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'updateCustomLineItem', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  updateCustomLineItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'updateCustomLineItem', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  updateCustomLineItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'updateCustomLineItem', 'Billingconductor', Promise.reject(result), true, mock)
  },
  updatePricingPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'updatePricingPlan', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  updatePricingPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'updatePricingPlan', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  updatePricingPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'updatePricingPlan', 'Billingconductor', Promise.reject(result), true, mock)
  },
  updatePricingRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'updatePricingRule', 'Billingconductor', Promise.resolve(result), true, mock)
  },
  updatePricingRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'updatePricingRule', 'Billingconductor', Promise.resolve(result), false, mock)
  },
  updatePricingRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'updatePricingRule', 'Billingconductor', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'send', 'BillingconductorClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'send', 'BillingconductorClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-billingconductor', 'send', 'BillingconductorClient', Promise.reject(result), true, mock)
  }
}
