
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockWAF = {
  createByteMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createByteMatchSet', 'WAF', Promise.resolve(result), true, mock)
  },
  createByteMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createByteMatchSet', 'WAF', Promise.resolve(result), false, mock)
  },
  createByteMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createByteMatchSet', 'WAF', Promise.reject(result), true, mock)
  },
  createGeoMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createGeoMatchSet', 'WAF', Promise.resolve(result), true, mock)
  },
  createGeoMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createGeoMatchSet', 'WAF', Promise.resolve(result), false, mock)
  },
  createGeoMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createGeoMatchSet', 'WAF', Promise.reject(result), true, mock)
  },
  createIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createIPSet', 'WAF', Promise.resolve(result), true, mock)
  },
  createIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createIPSet', 'WAF', Promise.resolve(result), false, mock)
  },
  createIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createIPSet', 'WAF', Promise.reject(result), true, mock)
  },
  createRateBasedRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createRateBasedRule', 'WAF', Promise.resolve(result), true, mock)
  },
  createRateBasedRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createRateBasedRule', 'WAF', Promise.resolve(result), false, mock)
  },
  createRateBasedRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createRateBasedRule', 'WAF', Promise.reject(result), true, mock)
  },
  createRegexMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createRegexMatchSet', 'WAF', Promise.resolve(result), true, mock)
  },
  createRegexMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createRegexMatchSet', 'WAF', Promise.resolve(result), false, mock)
  },
  createRegexMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createRegexMatchSet', 'WAF', Promise.reject(result), true, mock)
  },
  createRegexPatternSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createRegexPatternSet', 'WAF', Promise.resolve(result), true, mock)
  },
  createRegexPatternSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createRegexPatternSet', 'WAF', Promise.resolve(result), false, mock)
  },
  createRegexPatternSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createRegexPatternSet', 'WAF', Promise.reject(result), true, mock)
  },
  createRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createRule', 'WAF', Promise.resolve(result), true, mock)
  },
  createRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createRule', 'WAF', Promise.resolve(result), false, mock)
  },
  createRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createRule', 'WAF', Promise.reject(result), true, mock)
  },
  createRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createRuleGroup', 'WAF', Promise.resolve(result), true, mock)
  },
  createRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createRuleGroup', 'WAF', Promise.resolve(result), false, mock)
  },
  createRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createRuleGroup', 'WAF', Promise.reject(result), true, mock)
  },
  createSizeConstraintSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createSizeConstraintSet', 'WAF', Promise.resolve(result), true, mock)
  },
  createSizeConstraintSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createSizeConstraintSet', 'WAF', Promise.resolve(result), false, mock)
  },
  createSizeConstraintSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createSizeConstraintSet', 'WAF', Promise.reject(result), true, mock)
  },
  createSqlInjectionMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createSqlInjectionMatchSet', 'WAF', Promise.resolve(result), true, mock)
  },
  createSqlInjectionMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createSqlInjectionMatchSet', 'WAF', Promise.resolve(result), false, mock)
  },
  createSqlInjectionMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createSqlInjectionMatchSet', 'WAF', Promise.reject(result), true, mock)
  },
  createWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createWebACL', 'WAF', Promise.resolve(result), true, mock)
  },
  createWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createWebACL', 'WAF', Promise.resolve(result), false, mock)
  },
  createWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createWebACL', 'WAF', Promise.reject(result), true, mock)
  },
  createWebACLMigrationStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createWebACLMigrationStack', 'WAF', Promise.resolve(result), true, mock)
  },
  createWebACLMigrationStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createWebACLMigrationStack', 'WAF', Promise.resolve(result), false, mock)
  },
  createWebACLMigrationStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createWebACLMigrationStack', 'WAF', Promise.reject(result), true, mock)
  },
  createXssMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createXssMatchSet', 'WAF', Promise.resolve(result), true, mock)
  },
  createXssMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createXssMatchSet', 'WAF', Promise.resolve(result), false, mock)
  },
  createXssMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'createXssMatchSet', 'WAF', Promise.reject(result), true, mock)
  },
  deleteByteMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteByteMatchSet', 'WAF', Promise.resolve(result), true, mock)
  },
  deleteByteMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteByteMatchSet', 'WAF', Promise.resolve(result), false, mock)
  },
  deleteByteMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteByteMatchSet', 'WAF', Promise.reject(result), true, mock)
  },
  deleteGeoMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteGeoMatchSet', 'WAF', Promise.resolve(result), true, mock)
  },
  deleteGeoMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteGeoMatchSet', 'WAF', Promise.resolve(result), false, mock)
  },
  deleteGeoMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteGeoMatchSet', 'WAF', Promise.reject(result), true, mock)
  },
  deleteIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteIPSet', 'WAF', Promise.resolve(result), true, mock)
  },
  deleteIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteIPSet', 'WAF', Promise.resolve(result), false, mock)
  },
  deleteIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteIPSet', 'WAF', Promise.reject(result), true, mock)
  },
  deleteLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteLoggingConfiguration', 'WAF', Promise.resolve(result), true, mock)
  },
  deleteLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteLoggingConfiguration', 'WAF', Promise.resolve(result), false, mock)
  },
  deleteLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteLoggingConfiguration', 'WAF', Promise.reject(result), true, mock)
  },
  deletePermissionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deletePermissionPolicy', 'WAF', Promise.resolve(result), true, mock)
  },
  deletePermissionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deletePermissionPolicy', 'WAF', Promise.resolve(result), false, mock)
  },
  deletePermissionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deletePermissionPolicy', 'WAF', Promise.reject(result), true, mock)
  },
  deleteRateBasedRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteRateBasedRule', 'WAF', Promise.resolve(result), true, mock)
  },
  deleteRateBasedRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteRateBasedRule', 'WAF', Promise.resolve(result), false, mock)
  },
  deleteRateBasedRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteRateBasedRule', 'WAF', Promise.reject(result), true, mock)
  },
  deleteRegexMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteRegexMatchSet', 'WAF', Promise.resolve(result), true, mock)
  },
  deleteRegexMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteRegexMatchSet', 'WAF', Promise.resolve(result), false, mock)
  },
  deleteRegexMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteRegexMatchSet', 'WAF', Promise.reject(result), true, mock)
  },
  deleteRegexPatternSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteRegexPatternSet', 'WAF', Promise.resolve(result), true, mock)
  },
  deleteRegexPatternSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteRegexPatternSet', 'WAF', Promise.resolve(result), false, mock)
  },
  deleteRegexPatternSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteRegexPatternSet', 'WAF', Promise.reject(result), true, mock)
  },
  deleteRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteRule', 'WAF', Promise.resolve(result), true, mock)
  },
  deleteRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteRule', 'WAF', Promise.resolve(result), false, mock)
  },
  deleteRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteRule', 'WAF', Promise.reject(result), true, mock)
  },
  deleteRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteRuleGroup', 'WAF', Promise.resolve(result), true, mock)
  },
  deleteRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteRuleGroup', 'WAF', Promise.resolve(result), false, mock)
  },
  deleteRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteRuleGroup', 'WAF', Promise.reject(result), true, mock)
  },
  deleteSizeConstraintSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteSizeConstraintSet', 'WAF', Promise.resolve(result), true, mock)
  },
  deleteSizeConstraintSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteSizeConstraintSet', 'WAF', Promise.resolve(result), false, mock)
  },
  deleteSizeConstraintSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteSizeConstraintSet', 'WAF', Promise.reject(result), true, mock)
  },
  deleteSqlInjectionMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteSqlInjectionMatchSet', 'WAF', Promise.resolve(result), true, mock)
  },
  deleteSqlInjectionMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteSqlInjectionMatchSet', 'WAF', Promise.resolve(result), false, mock)
  },
  deleteSqlInjectionMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteSqlInjectionMatchSet', 'WAF', Promise.reject(result), true, mock)
  },
  deleteWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteWebACL', 'WAF', Promise.resolve(result), true, mock)
  },
  deleteWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteWebACL', 'WAF', Promise.resolve(result), false, mock)
  },
  deleteWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteWebACL', 'WAF', Promise.reject(result), true, mock)
  },
  deleteXssMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteXssMatchSet', 'WAF', Promise.resolve(result), true, mock)
  },
  deleteXssMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteXssMatchSet', 'WAF', Promise.resolve(result), false, mock)
  },
  deleteXssMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'deleteXssMatchSet', 'WAF', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'destroy', 'WAF', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'destroy', 'WAF', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'destroy', 'WAF', Promise.reject(result), true, mock)
  },
  getByteMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getByteMatchSet', 'WAF', Promise.resolve(result), true, mock)
  },
  getByteMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getByteMatchSet', 'WAF', Promise.resolve(result), false, mock)
  },
  getByteMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getByteMatchSet', 'WAF', Promise.reject(result), true, mock)
  },
  getChangeToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getChangeToken', 'WAF', Promise.resolve(result), true, mock)
  },
  getChangeTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getChangeToken', 'WAF', Promise.resolve(result), false, mock)
  },
  getChangeTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getChangeToken', 'WAF', Promise.reject(result), true, mock)
  },
  getChangeTokenStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getChangeTokenStatus', 'WAF', Promise.resolve(result), true, mock)
  },
  getChangeTokenStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getChangeTokenStatus', 'WAF', Promise.resolve(result), false, mock)
  },
  getChangeTokenStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getChangeTokenStatus', 'WAF', Promise.reject(result), true, mock)
  },
  getGeoMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getGeoMatchSet', 'WAF', Promise.resolve(result), true, mock)
  },
  getGeoMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getGeoMatchSet', 'WAF', Promise.resolve(result), false, mock)
  },
  getGeoMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getGeoMatchSet', 'WAF', Promise.reject(result), true, mock)
  },
  getIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getIPSet', 'WAF', Promise.resolve(result), true, mock)
  },
  getIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getIPSet', 'WAF', Promise.resolve(result), false, mock)
  },
  getIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getIPSet', 'WAF', Promise.reject(result), true, mock)
  },
  getLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getLoggingConfiguration', 'WAF', Promise.resolve(result), true, mock)
  },
  getLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getLoggingConfiguration', 'WAF', Promise.resolve(result), false, mock)
  },
  getLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getLoggingConfiguration', 'WAF', Promise.reject(result), true, mock)
  },
  getPermissionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getPermissionPolicy', 'WAF', Promise.resolve(result), true, mock)
  },
  getPermissionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getPermissionPolicy', 'WAF', Promise.resolve(result), false, mock)
  },
  getPermissionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getPermissionPolicy', 'WAF', Promise.reject(result), true, mock)
  },
  getRateBasedRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getRateBasedRule', 'WAF', Promise.resolve(result), true, mock)
  },
  getRateBasedRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getRateBasedRule', 'WAF', Promise.resolve(result), false, mock)
  },
  getRateBasedRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getRateBasedRule', 'WAF', Promise.reject(result), true, mock)
  },
  getRateBasedRuleManagedKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getRateBasedRuleManagedKeys', 'WAF', Promise.resolve(result), true, mock)
  },
  getRateBasedRuleManagedKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getRateBasedRuleManagedKeys', 'WAF', Promise.resolve(result), false, mock)
  },
  getRateBasedRuleManagedKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getRateBasedRuleManagedKeys', 'WAF', Promise.reject(result), true, mock)
  },
  getRegexMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getRegexMatchSet', 'WAF', Promise.resolve(result), true, mock)
  },
  getRegexMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getRegexMatchSet', 'WAF', Promise.resolve(result), false, mock)
  },
  getRegexMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getRegexMatchSet', 'WAF', Promise.reject(result), true, mock)
  },
  getRegexPatternSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getRegexPatternSet', 'WAF', Promise.resolve(result), true, mock)
  },
  getRegexPatternSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getRegexPatternSet', 'WAF', Promise.resolve(result), false, mock)
  },
  getRegexPatternSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getRegexPatternSet', 'WAF', Promise.reject(result), true, mock)
  },
  getRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getRule', 'WAF', Promise.resolve(result), true, mock)
  },
  getRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getRule', 'WAF', Promise.resolve(result), false, mock)
  },
  getRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getRule', 'WAF', Promise.reject(result), true, mock)
  },
  getRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getRuleGroup', 'WAF', Promise.resolve(result), true, mock)
  },
  getRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getRuleGroup', 'WAF', Promise.resolve(result), false, mock)
  },
  getRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getRuleGroup', 'WAF', Promise.reject(result), true, mock)
  },
  getSampledRequests: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getSampledRequests', 'WAF', Promise.resolve(result), true, mock)
  },
  getSampledRequestsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getSampledRequests', 'WAF', Promise.resolve(result), false, mock)
  },
  getSampledRequestsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getSampledRequests', 'WAF', Promise.reject(result), true, mock)
  },
  getSizeConstraintSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getSizeConstraintSet', 'WAF', Promise.resolve(result), true, mock)
  },
  getSizeConstraintSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getSizeConstraintSet', 'WAF', Promise.resolve(result), false, mock)
  },
  getSizeConstraintSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getSizeConstraintSet', 'WAF', Promise.reject(result), true, mock)
  },
  getSqlInjectionMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getSqlInjectionMatchSet', 'WAF', Promise.resolve(result), true, mock)
  },
  getSqlInjectionMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getSqlInjectionMatchSet', 'WAF', Promise.resolve(result), false, mock)
  },
  getSqlInjectionMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getSqlInjectionMatchSet', 'WAF', Promise.reject(result), true, mock)
  },
  getWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getWebACL', 'WAF', Promise.resolve(result), true, mock)
  },
  getWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getWebACL', 'WAF', Promise.resolve(result), false, mock)
  },
  getWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getWebACL', 'WAF', Promise.reject(result), true, mock)
  },
  getXssMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getXssMatchSet', 'WAF', Promise.resolve(result), true, mock)
  },
  getXssMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getXssMatchSet', 'WAF', Promise.resolve(result), false, mock)
  },
  getXssMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'getXssMatchSet', 'WAF', Promise.reject(result), true, mock)
  },
  listActivatedRulesInRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listActivatedRulesInRuleGroup', 'WAF', Promise.resolve(result), true, mock)
  },
  listActivatedRulesInRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listActivatedRulesInRuleGroup', 'WAF', Promise.resolve(result), false, mock)
  },
  listActivatedRulesInRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listActivatedRulesInRuleGroup', 'WAF', Promise.reject(result), true, mock)
  },
  listByteMatchSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listByteMatchSets', 'WAF', Promise.resolve(result), true, mock)
  },
  listByteMatchSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listByteMatchSets', 'WAF', Promise.resolve(result), false, mock)
  },
  listByteMatchSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listByteMatchSets', 'WAF', Promise.reject(result), true, mock)
  },
  listGeoMatchSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listGeoMatchSets', 'WAF', Promise.resolve(result), true, mock)
  },
  listGeoMatchSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listGeoMatchSets', 'WAF', Promise.resolve(result), false, mock)
  },
  listGeoMatchSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listGeoMatchSets', 'WAF', Promise.reject(result), true, mock)
  },
  listIPSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listIPSets', 'WAF', Promise.resolve(result), true, mock)
  },
  listIPSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listIPSets', 'WAF', Promise.resolve(result), false, mock)
  },
  listIPSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listIPSets', 'WAF', Promise.reject(result), true, mock)
  },
  listLoggingConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listLoggingConfigurations', 'WAF', Promise.resolve(result), true, mock)
  },
  listLoggingConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listLoggingConfigurations', 'WAF', Promise.resolve(result), false, mock)
  },
  listLoggingConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listLoggingConfigurations', 'WAF', Promise.reject(result), true, mock)
  },
  listRateBasedRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listRateBasedRules', 'WAF', Promise.resolve(result), true, mock)
  },
  listRateBasedRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listRateBasedRules', 'WAF', Promise.resolve(result), false, mock)
  },
  listRateBasedRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listRateBasedRules', 'WAF', Promise.reject(result), true, mock)
  },
  listRegexMatchSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listRegexMatchSets', 'WAF', Promise.resolve(result), true, mock)
  },
  listRegexMatchSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listRegexMatchSets', 'WAF', Promise.resolve(result), false, mock)
  },
  listRegexMatchSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listRegexMatchSets', 'WAF', Promise.reject(result), true, mock)
  },
  listRegexPatternSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listRegexPatternSets', 'WAF', Promise.resolve(result), true, mock)
  },
  listRegexPatternSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listRegexPatternSets', 'WAF', Promise.resolve(result), false, mock)
  },
  listRegexPatternSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listRegexPatternSets', 'WAF', Promise.reject(result), true, mock)
  },
  listRuleGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listRuleGroups', 'WAF', Promise.resolve(result), true, mock)
  },
  listRuleGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listRuleGroups', 'WAF', Promise.resolve(result), false, mock)
  },
  listRuleGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listRuleGroups', 'WAF', Promise.reject(result), true, mock)
  },
  listRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listRules', 'WAF', Promise.resolve(result), true, mock)
  },
  listRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listRules', 'WAF', Promise.resolve(result), false, mock)
  },
  listRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listRules', 'WAF', Promise.reject(result), true, mock)
  },
  listSizeConstraintSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listSizeConstraintSets', 'WAF', Promise.resolve(result), true, mock)
  },
  listSizeConstraintSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listSizeConstraintSets', 'WAF', Promise.resolve(result), false, mock)
  },
  listSizeConstraintSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listSizeConstraintSets', 'WAF', Promise.reject(result), true, mock)
  },
  listSqlInjectionMatchSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listSqlInjectionMatchSets', 'WAF', Promise.resolve(result), true, mock)
  },
  listSqlInjectionMatchSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listSqlInjectionMatchSets', 'WAF', Promise.resolve(result), false, mock)
  },
  listSqlInjectionMatchSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listSqlInjectionMatchSets', 'WAF', Promise.reject(result), true, mock)
  },
  listSubscribedRuleGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listSubscribedRuleGroups', 'WAF', Promise.resolve(result), true, mock)
  },
  listSubscribedRuleGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listSubscribedRuleGroups', 'WAF', Promise.resolve(result), false, mock)
  },
  listSubscribedRuleGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listSubscribedRuleGroups', 'WAF', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listTagsForResource', 'WAF', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listTagsForResource', 'WAF', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listTagsForResource', 'WAF', Promise.reject(result), true, mock)
  },
  listWebACLs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listWebACLs', 'WAF', Promise.resolve(result), true, mock)
  },
  listWebACLsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listWebACLs', 'WAF', Promise.resolve(result), false, mock)
  },
  listWebACLsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listWebACLs', 'WAF', Promise.reject(result), true, mock)
  },
  listXssMatchSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listXssMatchSets', 'WAF', Promise.resolve(result), true, mock)
  },
  listXssMatchSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listXssMatchSets', 'WAF', Promise.resolve(result), false, mock)
  },
  listXssMatchSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'listXssMatchSets', 'WAF', Promise.reject(result), true, mock)
  },
  putLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'putLoggingConfiguration', 'WAF', Promise.resolve(result), true, mock)
  },
  putLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'putLoggingConfiguration', 'WAF', Promise.resolve(result), false, mock)
  },
  putLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'putLoggingConfiguration', 'WAF', Promise.reject(result), true, mock)
  },
  putPermissionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'putPermissionPolicy', 'WAF', Promise.resolve(result), true, mock)
  },
  putPermissionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'putPermissionPolicy', 'WAF', Promise.resolve(result), false, mock)
  },
  putPermissionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'putPermissionPolicy', 'WAF', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'tagResource', 'WAF', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'tagResource', 'WAF', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'tagResource', 'WAF', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'untagResource', 'WAF', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'untagResource', 'WAF', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'untagResource', 'WAF', Promise.reject(result), true, mock)
  },
  updateByteMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateByteMatchSet', 'WAF', Promise.resolve(result), true, mock)
  },
  updateByteMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateByteMatchSet', 'WAF', Promise.resolve(result), false, mock)
  },
  updateByteMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateByteMatchSet', 'WAF', Promise.reject(result), true, mock)
  },
  updateGeoMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateGeoMatchSet', 'WAF', Promise.resolve(result), true, mock)
  },
  updateGeoMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateGeoMatchSet', 'WAF', Promise.resolve(result), false, mock)
  },
  updateGeoMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateGeoMatchSet', 'WAF', Promise.reject(result), true, mock)
  },
  updateIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateIPSet', 'WAF', Promise.resolve(result), true, mock)
  },
  updateIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateIPSet', 'WAF', Promise.resolve(result), false, mock)
  },
  updateIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateIPSet', 'WAF', Promise.reject(result), true, mock)
  },
  updateRateBasedRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateRateBasedRule', 'WAF', Promise.resolve(result), true, mock)
  },
  updateRateBasedRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateRateBasedRule', 'WAF', Promise.resolve(result), false, mock)
  },
  updateRateBasedRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateRateBasedRule', 'WAF', Promise.reject(result), true, mock)
  },
  updateRegexMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateRegexMatchSet', 'WAF', Promise.resolve(result), true, mock)
  },
  updateRegexMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateRegexMatchSet', 'WAF', Promise.resolve(result), false, mock)
  },
  updateRegexMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateRegexMatchSet', 'WAF', Promise.reject(result), true, mock)
  },
  updateRegexPatternSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateRegexPatternSet', 'WAF', Promise.resolve(result), true, mock)
  },
  updateRegexPatternSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateRegexPatternSet', 'WAF', Promise.resolve(result), false, mock)
  },
  updateRegexPatternSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateRegexPatternSet', 'WAF', Promise.reject(result), true, mock)
  },
  updateRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateRule', 'WAF', Promise.resolve(result), true, mock)
  },
  updateRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateRule', 'WAF', Promise.resolve(result), false, mock)
  },
  updateRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateRule', 'WAF', Promise.reject(result), true, mock)
  },
  updateRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateRuleGroup', 'WAF', Promise.resolve(result), true, mock)
  },
  updateRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateRuleGroup', 'WAF', Promise.resolve(result), false, mock)
  },
  updateRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateRuleGroup', 'WAF', Promise.reject(result), true, mock)
  },
  updateSizeConstraintSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateSizeConstraintSet', 'WAF', Promise.resolve(result), true, mock)
  },
  updateSizeConstraintSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateSizeConstraintSet', 'WAF', Promise.resolve(result), false, mock)
  },
  updateSizeConstraintSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateSizeConstraintSet', 'WAF', Promise.reject(result), true, mock)
  },
  updateSqlInjectionMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateSqlInjectionMatchSet', 'WAF', Promise.resolve(result), true, mock)
  },
  updateSqlInjectionMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateSqlInjectionMatchSet', 'WAF', Promise.resolve(result), false, mock)
  },
  updateSqlInjectionMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateSqlInjectionMatchSet', 'WAF', Promise.reject(result), true, mock)
  },
  updateWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateWebACL', 'WAF', Promise.resolve(result), true, mock)
  },
  updateWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateWebACL', 'WAF', Promise.resolve(result), false, mock)
  },
  updateWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateWebACL', 'WAF', Promise.reject(result), true, mock)
  },
  updateXssMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateXssMatchSet', 'WAF', Promise.resolve(result), true, mock)
  },
  updateXssMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateXssMatchSet', 'WAF', Promise.resolve(result), false, mock)
  },
  updateXssMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'updateXssMatchSet', 'WAF', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'send', 'WAFClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'send', 'WAFClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-waf', 'send', 'WAFClient', Promise.reject(result), true, mock)
  }
}