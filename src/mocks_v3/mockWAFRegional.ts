
/**
* @description mocks_v3:mockWAFRegional module is mocks for AWS-SDK V3
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
export const mockWAFRegional = {
  associateWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'associateWebACL', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  associateWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'associateWebACL', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  associateWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'associateWebACL', 'WAFRegional', Promise.reject(result), true, mock)
  },
  createByteMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createByteMatchSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  createByteMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createByteMatchSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  createByteMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createByteMatchSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  createGeoMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createGeoMatchSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  createGeoMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createGeoMatchSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  createGeoMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createGeoMatchSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  createIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createIPSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  createIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createIPSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  createIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createIPSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  createRateBasedRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createRateBasedRule', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  createRateBasedRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createRateBasedRule', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  createRateBasedRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createRateBasedRule', 'WAFRegional', Promise.reject(result), true, mock)
  },
  createRegexMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createRegexMatchSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  createRegexMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createRegexMatchSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  createRegexMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createRegexMatchSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  createRegexPatternSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createRegexPatternSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  createRegexPatternSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createRegexPatternSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  createRegexPatternSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createRegexPatternSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  createRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createRule', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  createRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createRule', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  createRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createRule', 'WAFRegional', Promise.reject(result), true, mock)
  },
  createRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createRuleGroup', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  createRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createRuleGroup', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  createRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createRuleGroup', 'WAFRegional', Promise.reject(result), true, mock)
  },
  createSizeConstraintSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createSizeConstraintSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  createSizeConstraintSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createSizeConstraintSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  createSizeConstraintSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createSizeConstraintSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  createSqlInjectionMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createSqlInjectionMatchSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  createSqlInjectionMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createSqlInjectionMatchSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  createSqlInjectionMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createSqlInjectionMatchSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  createWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createWebACL', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  createWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createWebACL', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  createWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createWebACL', 'WAFRegional', Promise.reject(result), true, mock)
  },
  createWebACLMigrationStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createWebACLMigrationStack', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  createWebACLMigrationStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createWebACLMigrationStack', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  createWebACLMigrationStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createWebACLMigrationStack', 'WAFRegional', Promise.reject(result), true, mock)
  },
  createXssMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createXssMatchSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  createXssMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createXssMatchSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  createXssMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'createXssMatchSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  deleteByteMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteByteMatchSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  deleteByteMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteByteMatchSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  deleteByteMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteByteMatchSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  deleteGeoMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteGeoMatchSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  deleteGeoMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteGeoMatchSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  deleteGeoMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteGeoMatchSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  deleteIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteIPSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  deleteIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteIPSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  deleteIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteIPSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  deleteLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteLoggingConfiguration', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  deleteLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteLoggingConfiguration', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  deleteLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteLoggingConfiguration', 'WAFRegional', Promise.reject(result), true, mock)
  },
  deletePermissionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deletePermissionPolicy', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  deletePermissionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deletePermissionPolicy', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  deletePermissionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deletePermissionPolicy', 'WAFRegional', Promise.reject(result), true, mock)
  },
  deleteRateBasedRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteRateBasedRule', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  deleteRateBasedRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteRateBasedRule', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  deleteRateBasedRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteRateBasedRule', 'WAFRegional', Promise.reject(result), true, mock)
  },
  deleteRegexMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteRegexMatchSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  deleteRegexMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteRegexMatchSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  deleteRegexMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteRegexMatchSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  deleteRegexPatternSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteRegexPatternSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  deleteRegexPatternSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteRegexPatternSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  deleteRegexPatternSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteRegexPatternSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  deleteRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteRule', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  deleteRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteRule', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  deleteRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteRule', 'WAFRegional', Promise.reject(result), true, mock)
  },
  deleteRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteRuleGroup', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  deleteRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteRuleGroup', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  deleteRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteRuleGroup', 'WAFRegional', Promise.reject(result), true, mock)
  },
  deleteSizeConstraintSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteSizeConstraintSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  deleteSizeConstraintSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteSizeConstraintSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  deleteSizeConstraintSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteSizeConstraintSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  deleteSqlInjectionMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteSqlInjectionMatchSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  deleteSqlInjectionMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteSqlInjectionMatchSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  deleteSqlInjectionMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteSqlInjectionMatchSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  deleteWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteWebACL', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  deleteWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteWebACL', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  deleteWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteWebACL', 'WAFRegional', Promise.reject(result), true, mock)
  },
  deleteXssMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteXssMatchSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  deleteXssMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteXssMatchSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  deleteXssMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'deleteXssMatchSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  disassociateWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'disassociateWebACL', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  disassociateWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'disassociateWebACL', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  disassociateWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'disassociateWebACL', 'WAFRegional', Promise.reject(result), true, mock)
  },
  getByteMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getByteMatchSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  getByteMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getByteMatchSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  getByteMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getByteMatchSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  getChangeToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getChangeToken', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  getChangeTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getChangeToken', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  getChangeTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getChangeToken', 'WAFRegional', Promise.reject(result), true, mock)
  },
  getChangeTokenStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getChangeTokenStatus', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  getChangeTokenStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getChangeTokenStatus', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  getChangeTokenStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getChangeTokenStatus', 'WAFRegional', Promise.reject(result), true, mock)
  },
  getGeoMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getGeoMatchSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  getGeoMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getGeoMatchSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  getGeoMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getGeoMatchSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  getIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getIPSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  getIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getIPSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  getIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getIPSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  getLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getLoggingConfiguration', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  getLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getLoggingConfiguration', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  getLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getLoggingConfiguration', 'WAFRegional', Promise.reject(result), true, mock)
  },
  getPermissionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getPermissionPolicy', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  getPermissionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getPermissionPolicy', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  getPermissionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getPermissionPolicy', 'WAFRegional', Promise.reject(result), true, mock)
  },
  getRateBasedRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getRateBasedRule', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  getRateBasedRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getRateBasedRule', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  getRateBasedRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getRateBasedRule', 'WAFRegional', Promise.reject(result), true, mock)
  },
  getRateBasedRuleManagedKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getRateBasedRuleManagedKeys', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  getRateBasedRuleManagedKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getRateBasedRuleManagedKeys', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  getRateBasedRuleManagedKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getRateBasedRuleManagedKeys', 'WAFRegional', Promise.reject(result), true, mock)
  },
  getRegexMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getRegexMatchSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  getRegexMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getRegexMatchSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  getRegexMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getRegexMatchSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  getRegexPatternSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getRegexPatternSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  getRegexPatternSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getRegexPatternSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  getRegexPatternSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getRegexPatternSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  getRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getRule', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  getRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getRule', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  getRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getRule', 'WAFRegional', Promise.reject(result), true, mock)
  },
  getRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getRuleGroup', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  getRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getRuleGroup', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  getRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getRuleGroup', 'WAFRegional', Promise.reject(result), true, mock)
  },
  getSampledRequests: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getSampledRequests', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  getSampledRequestsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getSampledRequests', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  getSampledRequestsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getSampledRequests', 'WAFRegional', Promise.reject(result), true, mock)
  },
  getSizeConstraintSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getSizeConstraintSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  getSizeConstraintSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getSizeConstraintSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  getSizeConstraintSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getSizeConstraintSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  getSqlInjectionMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getSqlInjectionMatchSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  getSqlInjectionMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getSqlInjectionMatchSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  getSqlInjectionMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getSqlInjectionMatchSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  getWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getWebACL', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  getWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getWebACL', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  getWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getWebACL', 'WAFRegional', Promise.reject(result), true, mock)
  },
  getWebACLForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getWebACLForResource', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  getWebACLForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getWebACLForResource', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  getWebACLForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getWebACLForResource', 'WAFRegional', Promise.reject(result), true, mock)
  },
  getXssMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getXssMatchSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  getXssMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getXssMatchSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  getXssMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'getXssMatchSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  listActivatedRulesInRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listActivatedRulesInRuleGroup', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  listActivatedRulesInRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listActivatedRulesInRuleGroup', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  listActivatedRulesInRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listActivatedRulesInRuleGroup', 'WAFRegional', Promise.reject(result), true, mock)
  },
  listByteMatchSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listByteMatchSets', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  listByteMatchSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listByteMatchSets', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  listByteMatchSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listByteMatchSets', 'WAFRegional', Promise.reject(result), true, mock)
  },
  listGeoMatchSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listGeoMatchSets', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  listGeoMatchSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listGeoMatchSets', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  listGeoMatchSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listGeoMatchSets', 'WAFRegional', Promise.reject(result), true, mock)
  },
  listIPSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listIPSets', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  listIPSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listIPSets', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  listIPSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listIPSets', 'WAFRegional', Promise.reject(result), true, mock)
  },
  listLoggingConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listLoggingConfigurations', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  listLoggingConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listLoggingConfigurations', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  listLoggingConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listLoggingConfigurations', 'WAFRegional', Promise.reject(result), true, mock)
  },
  listRateBasedRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listRateBasedRules', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  listRateBasedRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listRateBasedRules', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  listRateBasedRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listRateBasedRules', 'WAFRegional', Promise.reject(result), true, mock)
  },
  listRegexMatchSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listRegexMatchSets', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  listRegexMatchSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listRegexMatchSets', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  listRegexMatchSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listRegexMatchSets', 'WAFRegional', Promise.reject(result), true, mock)
  },
  listRegexPatternSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listRegexPatternSets', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  listRegexPatternSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listRegexPatternSets', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  listRegexPatternSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listRegexPatternSets', 'WAFRegional', Promise.reject(result), true, mock)
  },
  listResourcesForWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listResourcesForWebACL', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  listResourcesForWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listResourcesForWebACL', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  listResourcesForWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listResourcesForWebACL', 'WAFRegional', Promise.reject(result), true, mock)
  },
  listRuleGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listRuleGroups', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  listRuleGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listRuleGroups', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  listRuleGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listRuleGroups', 'WAFRegional', Promise.reject(result), true, mock)
  },
  listRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listRules', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  listRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listRules', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  listRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listRules', 'WAFRegional', Promise.reject(result), true, mock)
  },
  listSizeConstraintSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listSizeConstraintSets', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  listSizeConstraintSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listSizeConstraintSets', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  listSizeConstraintSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listSizeConstraintSets', 'WAFRegional', Promise.reject(result), true, mock)
  },
  listSqlInjectionMatchSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listSqlInjectionMatchSets', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  listSqlInjectionMatchSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listSqlInjectionMatchSets', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  listSqlInjectionMatchSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listSqlInjectionMatchSets', 'WAFRegional', Promise.reject(result), true, mock)
  },
  listSubscribedRuleGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listSubscribedRuleGroups', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  listSubscribedRuleGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listSubscribedRuleGroups', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  listSubscribedRuleGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listSubscribedRuleGroups', 'WAFRegional', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listTagsForResource', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listTagsForResource', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listTagsForResource', 'WAFRegional', Promise.reject(result), true, mock)
  },
  listWebACLs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listWebACLs', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  listWebACLsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listWebACLs', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  listWebACLsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listWebACLs', 'WAFRegional', Promise.reject(result), true, mock)
  },
  listXssMatchSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listXssMatchSets', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  listXssMatchSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listXssMatchSets', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  listXssMatchSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'listXssMatchSets', 'WAFRegional', Promise.reject(result), true, mock)
  },
  putLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'putLoggingConfiguration', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  putLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'putLoggingConfiguration', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  putLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'putLoggingConfiguration', 'WAFRegional', Promise.reject(result), true, mock)
  },
  putPermissionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'putPermissionPolicy', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  putPermissionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'putPermissionPolicy', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  putPermissionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'putPermissionPolicy', 'WAFRegional', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'tagResource', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'tagResource', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'tagResource', 'WAFRegional', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'untagResource', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'untagResource', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'untagResource', 'WAFRegional', Promise.reject(result), true, mock)
  },
  updateByteMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateByteMatchSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  updateByteMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateByteMatchSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  updateByteMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateByteMatchSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  updateGeoMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateGeoMatchSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  updateGeoMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateGeoMatchSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  updateGeoMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateGeoMatchSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  updateIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateIPSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  updateIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateIPSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  updateIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateIPSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  updateRateBasedRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateRateBasedRule', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  updateRateBasedRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateRateBasedRule', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  updateRateBasedRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateRateBasedRule', 'WAFRegional', Promise.reject(result), true, mock)
  },
  updateRegexMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateRegexMatchSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  updateRegexMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateRegexMatchSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  updateRegexMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateRegexMatchSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  updateRegexPatternSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateRegexPatternSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  updateRegexPatternSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateRegexPatternSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  updateRegexPatternSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateRegexPatternSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  updateRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateRule', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  updateRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateRule', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  updateRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateRule', 'WAFRegional', Promise.reject(result), true, mock)
  },
  updateRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateRuleGroup', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  updateRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateRuleGroup', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  updateRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateRuleGroup', 'WAFRegional', Promise.reject(result), true, mock)
  },
  updateSizeConstraintSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateSizeConstraintSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  updateSizeConstraintSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateSizeConstraintSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  updateSizeConstraintSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateSizeConstraintSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  updateSqlInjectionMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateSqlInjectionMatchSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  updateSqlInjectionMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateSqlInjectionMatchSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  updateSqlInjectionMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateSqlInjectionMatchSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  updateWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateWebACL', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  updateWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateWebACL', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  updateWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateWebACL', 'WAFRegional', Promise.reject(result), true, mock)
  },
  updateXssMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateXssMatchSet', 'WAFRegional', Promise.resolve(result), true, mock)
  },
  updateXssMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateXssMatchSet', 'WAFRegional', Promise.resolve(result), false, mock)
  },
  updateXssMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'updateXssMatchSet', 'WAFRegional', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'send', 'WAFRegionalClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'send', 'WAFRegionalClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf-regional', 'send', 'WAFRegionalClient', Promise.reject(result), true, mock)
  }
}
