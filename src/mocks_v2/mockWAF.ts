
/**
* @description mocks_v2:mockWAF.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockWAF = {
  createByteMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createByteMatchSet', 'WAF', result, true, true, mock)
  },
  createByteMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createByteMatchSet', 'WAF', result, false, true, mock)
  },
  createByteMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createByteMatchSet', 'WAF', result, true, false, mock)
  },
  createGeoMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGeoMatchSet', 'WAF', result, true, true, mock)
  },
  createGeoMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGeoMatchSet', 'WAF', result, false, true, mock)
  },
  createGeoMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createGeoMatchSet', 'WAF', result, true, false, mock)
  },
  createIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIPSet', 'WAF', result, true, true, mock)
  },
  createIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIPSet', 'WAF', result, false, true, mock)
  },
  createIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIPSet', 'WAF', result, true, false, mock)
  },
  createRateBasedRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRateBasedRule', 'WAF', result, true, true, mock)
  },
  createRateBasedRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRateBasedRule', 'WAF', result, false, true, mock)
  },
  createRateBasedRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRateBasedRule', 'WAF', result, true, false, mock)
  },
  createRegexMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRegexMatchSet', 'WAF', result, true, true, mock)
  },
  createRegexMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRegexMatchSet', 'WAF', result, false, true, mock)
  },
  createRegexMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRegexMatchSet', 'WAF', result, true, false, mock)
  },
  createRegexPatternSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRegexPatternSet', 'WAF', result, true, true, mock)
  },
  createRegexPatternSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRegexPatternSet', 'WAF', result, false, true, mock)
  },
  createRegexPatternSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRegexPatternSet', 'WAF', result, true, false, mock)
  },
  createRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRule', 'WAF', result, true, true, mock)
  },
  createRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRule', 'WAF', result, false, true, mock)
  },
  createRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRule', 'WAF', result, true, false, mock)
  },
  createRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRuleGroup', 'WAF', result, true, true, mock)
  },
  createRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRuleGroup', 'WAF', result, false, true, mock)
  },
  createRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRuleGroup', 'WAF', result, true, false, mock)
  },
  createSizeConstraintSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSizeConstraintSet', 'WAF', result, true, true, mock)
  },
  createSizeConstraintSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSizeConstraintSet', 'WAF', result, false, true, mock)
  },
  createSizeConstraintSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSizeConstraintSet', 'WAF', result, true, false, mock)
  },
  createSqlInjectionMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSqlInjectionMatchSet', 'WAF', result, true, true, mock)
  },
  createSqlInjectionMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSqlInjectionMatchSet', 'WAF', result, false, true, mock)
  },
  createSqlInjectionMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createSqlInjectionMatchSet', 'WAF', result, true, false, mock)
  },
  createWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebACL', 'WAF', result, true, true, mock)
  },
  createWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebACL', 'WAF', result, false, true, mock)
  },
  createWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebACL', 'WAF', result, true, false, mock)
  },
  createWebACLMigrationStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebACLMigrationStack', 'WAF', result, true, true, mock)
  },
  createWebACLMigrationStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebACLMigrationStack', 'WAF', result, false, true, mock)
  },
  createWebACLMigrationStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebACLMigrationStack', 'WAF', result, true, false, mock)
  },
  createXssMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createXssMatchSet', 'WAF', result, true, true, mock)
  },
  createXssMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createXssMatchSet', 'WAF', result, false, true, mock)
  },
  createXssMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createXssMatchSet', 'WAF', result, true, false, mock)
  },
  deleteByteMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteByteMatchSet', 'WAF', result, true, true, mock)
  },
  deleteByteMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteByteMatchSet', 'WAF', result, false, true, mock)
  },
  deleteByteMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteByteMatchSet', 'WAF', result, true, false, mock)
  },
  deleteGeoMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGeoMatchSet', 'WAF', result, true, true, mock)
  },
  deleteGeoMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGeoMatchSet', 'WAF', result, false, true, mock)
  },
  deleteGeoMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteGeoMatchSet', 'WAF', result, true, false, mock)
  },
  deleteIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIPSet', 'WAF', result, true, true, mock)
  },
  deleteIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIPSet', 'WAF', result, false, true, mock)
  },
  deleteIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIPSet', 'WAF', result, true, false, mock)
  },
  deleteLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLoggingConfiguration', 'WAF', result, true, true, mock)
  },
  deleteLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLoggingConfiguration', 'WAF', result, false, true, mock)
  },
  deleteLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLoggingConfiguration', 'WAF', result, true, false, mock)
  },
  deletePermissionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePermissionPolicy', 'WAF', result, true, true, mock)
  },
  deletePermissionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePermissionPolicy', 'WAF', result, false, true, mock)
  },
  deletePermissionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePermissionPolicy', 'WAF', result, true, false, mock)
  },
  deleteRateBasedRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRateBasedRule', 'WAF', result, true, true, mock)
  },
  deleteRateBasedRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRateBasedRule', 'WAF', result, false, true, mock)
  },
  deleteRateBasedRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRateBasedRule', 'WAF', result, true, false, mock)
  },
  deleteRegexMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRegexMatchSet', 'WAF', result, true, true, mock)
  },
  deleteRegexMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRegexMatchSet', 'WAF', result, false, true, mock)
  },
  deleteRegexMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRegexMatchSet', 'WAF', result, true, false, mock)
  },
  deleteRegexPatternSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRegexPatternSet', 'WAF', result, true, true, mock)
  },
  deleteRegexPatternSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRegexPatternSet', 'WAF', result, false, true, mock)
  },
  deleteRegexPatternSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRegexPatternSet', 'WAF', result, true, false, mock)
  },
  deleteRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRule', 'WAF', result, true, true, mock)
  },
  deleteRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRule', 'WAF', result, false, true, mock)
  },
  deleteRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRule', 'WAF', result, true, false, mock)
  },
  deleteRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRuleGroup', 'WAF', result, true, true, mock)
  },
  deleteRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRuleGroup', 'WAF', result, false, true, mock)
  },
  deleteRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRuleGroup', 'WAF', result, true, false, mock)
  },
  deleteSizeConstraintSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSizeConstraintSet', 'WAF', result, true, true, mock)
  },
  deleteSizeConstraintSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSizeConstraintSet', 'WAF', result, false, true, mock)
  },
  deleteSizeConstraintSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSizeConstraintSet', 'WAF', result, true, false, mock)
  },
  deleteSqlInjectionMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSqlInjectionMatchSet', 'WAF', result, true, true, mock)
  },
  deleteSqlInjectionMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSqlInjectionMatchSet', 'WAF', result, false, true, mock)
  },
  deleteSqlInjectionMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSqlInjectionMatchSet', 'WAF', result, true, false, mock)
  },
  deleteWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWebACL', 'WAF', result, true, true, mock)
  },
  deleteWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWebACL', 'WAF', result, false, true, mock)
  },
  deleteWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWebACL', 'WAF', result, true, false, mock)
  },
  deleteXssMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteXssMatchSet', 'WAF', result, true, true, mock)
  },
  deleteXssMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteXssMatchSet', 'WAF', result, false, true, mock)
  },
  deleteXssMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteXssMatchSet', 'WAF', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WAF', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WAF', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WAF', result, true, false, mock)
  },
  getByteMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getByteMatchSet', 'WAF', result, true, true, mock)
  },
  getByteMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getByteMatchSet', 'WAF', result, false, true, mock)
  },
  getByteMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getByteMatchSet', 'WAF', result, true, false, mock)
  },
  getChangeToken: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getChangeToken', 'WAF', result, true, true, mock)
  },
  getChangeTokenAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getChangeToken', 'WAF', result, false, true, mock)
  },
  getChangeTokenThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getChangeToken', 'WAF', result, true, false, mock)
  },
  getChangeTokenStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getChangeTokenStatus', 'WAF', result, true, true, mock)
  },
  getChangeTokenStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getChangeTokenStatus', 'WAF', result, false, true, mock)
  },
  getChangeTokenStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getChangeTokenStatus', 'WAF', result, true, false, mock)
  },
  getGeoMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGeoMatchSet', 'WAF', result, true, true, mock)
  },
  getGeoMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGeoMatchSet', 'WAF', result, false, true, mock)
  },
  getGeoMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGeoMatchSet', 'WAF', result, true, false, mock)
  },
  getIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIPSet', 'WAF', result, true, true, mock)
  },
  getIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIPSet', 'WAF', result, false, true, mock)
  },
  getIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIPSet', 'WAF', result, true, false, mock)
  },
  getLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLoggingConfiguration', 'WAF', result, true, true, mock)
  },
  getLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLoggingConfiguration', 'WAF', result, false, true, mock)
  },
  getLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLoggingConfiguration', 'WAF', result, true, false, mock)
  },
  getPermissionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPermissionPolicy', 'WAF', result, true, true, mock)
  },
  getPermissionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPermissionPolicy', 'WAF', result, false, true, mock)
  },
  getPermissionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPermissionPolicy', 'WAF', result, true, false, mock)
  },
  getRateBasedRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRateBasedRule', 'WAF', result, true, true, mock)
  },
  getRateBasedRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRateBasedRule', 'WAF', result, false, true, mock)
  },
  getRateBasedRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRateBasedRule', 'WAF', result, true, false, mock)
  },
  getRateBasedRuleManagedKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRateBasedRuleManagedKeys', 'WAF', result, true, true, mock)
  },
  getRateBasedRuleManagedKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRateBasedRuleManagedKeys', 'WAF', result, false, true, mock)
  },
  getRateBasedRuleManagedKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRateBasedRuleManagedKeys', 'WAF', result, true, false, mock)
  },
  getRegexMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegexMatchSet', 'WAF', result, true, true, mock)
  },
  getRegexMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegexMatchSet', 'WAF', result, false, true, mock)
  },
  getRegexMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegexMatchSet', 'WAF', result, true, false, mock)
  },
  getRegexPatternSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegexPatternSet', 'WAF', result, true, true, mock)
  },
  getRegexPatternSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegexPatternSet', 'WAF', result, false, true, mock)
  },
  getRegexPatternSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegexPatternSet', 'WAF', result, true, false, mock)
  },
  getRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRule', 'WAF', result, true, true, mock)
  },
  getRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRule', 'WAF', result, false, true, mock)
  },
  getRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRule', 'WAF', result, true, false, mock)
  },
  getRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRuleGroup', 'WAF', result, true, true, mock)
  },
  getRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRuleGroup', 'WAF', result, false, true, mock)
  },
  getRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRuleGroup', 'WAF', result, true, false, mock)
  },
  getSampledRequests: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSampledRequests', 'WAF', result, true, true, mock)
  },
  getSampledRequestsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSampledRequests', 'WAF', result, false, true, mock)
  },
  getSampledRequestsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSampledRequests', 'WAF', result, true, false, mock)
  },
  getSizeConstraintSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSizeConstraintSet', 'WAF', result, true, true, mock)
  },
  getSizeConstraintSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSizeConstraintSet', 'WAF', result, false, true, mock)
  },
  getSizeConstraintSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSizeConstraintSet', 'WAF', result, true, false, mock)
  },
  getSqlInjectionMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSqlInjectionMatchSet', 'WAF', result, true, true, mock)
  },
  getSqlInjectionMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSqlInjectionMatchSet', 'WAF', result, false, true, mock)
  },
  getSqlInjectionMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSqlInjectionMatchSet', 'WAF', result, true, false, mock)
  },
  getWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWebACL', 'WAF', result, true, true, mock)
  },
  getWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWebACL', 'WAF', result, false, true, mock)
  },
  getWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWebACL', 'WAF', result, true, false, mock)
  },
  getXssMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getXssMatchSet', 'WAF', result, true, true, mock)
  },
  getXssMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getXssMatchSet', 'WAF', result, false, true, mock)
  },
  getXssMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getXssMatchSet', 'WAF', result, true, false, mock)
  },
  listActivatedRulesInRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActivatedRulesInRuleGroup', 'WAF', result, true, true, mock)
  },
  listActivatedRulesInRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActivatedRulesInRuleGroup', 'WAF', result, false, true, mock)
  },
  listActivatedRulesInRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActivatedRulesInRuleGroup', 'WAF', result, true, false, mock)
  },
  listByteMatchSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listByteMatchSets', 'WAF', result, true, true, mock)
  },
  listByteMatchSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listByteMatchSets', 'WAF', result, false, true, mock)
  },
  listByteMatchSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listByteMatchSets', 'WAF', result, true, false, mock)
  },
  listGeoMatchSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGeoMatchSets', 'WAF', result, true, true, mock)
  },
  listGeoMatchSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGeoMatchSets', 'WAF', result, false, true, mock)
  },
  listGeoMatchSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listGeoMatchSets', 'WAF', result, true, false, mock)
  },
  listIPSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIPSets', 'WAF', result, true, true, mock)
  },
  listIPSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIPSets', 'WAF', result, false, true, mock)
  },
  listIPSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIPSets', 'WAF', result, true, false, mock)
  },
  listLoggingConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLoggingConfigurations', 'WAF', result, true, true, mock)
  },
  listLoggingConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLoggingConfigurations', 'WAF', result, false, true, mock)
  },
  listLoggingConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLoggingConfigurations', 'WAF', result, true, false, mock)
  },
  listRateBasedRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRateBasedRules', 'WAF', result, true, true, mock)
  },
  listRateBasedRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRateBasedRules', 'WAF', result, false, true, mock)
  },
  listRateBasedRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRateBasedRules', 'WAF', result, true, false, mock)
  },
  listRegexMatchSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRegexMatchSets', 'WAF', result, true, true, mock)
  },
  listRegexMatchSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRegexMatchSets', 'WAF', result, false, true, mock)
  },
  listRegexMatchSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRegexMatchSets', 'WAF', result, true, false, mock)
  },
  listRegexPatternSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRegexPatternSets', 'WAF', result, true, true, mock)
  },
  listRegexPatternSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRegexPatternSets', 'WAF', result, false, true, mock)
  },
  listRegexPatternSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRegexPatternSets', 'WAF', result, true, false, mock)
  },
  listRuleGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRuleGroups', 'WAF', result, true, true, mock)
  },
  listRuleGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRuleGroups', 'WAF', result, false, true, mock)
  },
  listRuleGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRuleGroups', 'WAF', result, true, false, mock)
  },
  listRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRules', 'WAF', result, true, true, mock)
  },
  listRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRules', 'WAF', result, false, true, mock)
  },
  listRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRules', 'WAF', result, true, false, mock)
  },
  listSizeConstraintSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSizeConstraintSets', 'WAF', result, true, true, mock)
  },
  listSizeConstraintSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSizeConstraintSets', 'WAF', result, false, true, mock)
  },
  listSizeConstraintSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSizeConstraintSets', 'WAF', result, true, false, mock)
  },
  listSqlInjectionMatchSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSqlInjectionMatchSets', 'WAF', result, true, true, mock)
  },
  listSqlInjectionMatchSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSqlInjectionMatchSets', 'WAF', result, false, true, mock)
  },
  listSqlInjectionMatchSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSqlInjectionMatchSets', 'WAF', result, true, false, mock)
  },
  listSubscribedRuleGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSubscribedRuleGroups', 'WAF', result, true, true, mock)
  },
  listSubscribedRuleGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSubscribedRuleGroups', 'WAF', result, false, true, mock)
  },
  listSubscribedRuleGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSubscribedRuleGroups', 'WAF', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'WAF', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'WAF', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'WAF', result, true, false, mock)
  },
  listWebACLs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWebACLs', 'WAF', result, true, true, mock)
  },
  listWebACLsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWebACLs', 'WAF', result, false, true, mock)
  },
  listWebACLsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWebACLs', 'WAF', result, true, false, mock)
  },
  listXssMatchSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listXssMatchSets', 'WAF', result, true, true, mock)
  },
  listXssMatchSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listXssMatchSets', 'WAF', result, false, true, mock)
  },
  listXssMatchSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listXssMatchSets', 'WAF', result, true, false, mock)
  },
  putLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLoggingConfiguration', 'WAF', result, true, true, mock)
  },
  putLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLoggingConfiguration', 'WAF', result, false, true, mock)
  },
  putLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLoggingConfiguration', 'WAF', result, true, false, mock)
  },
  putPermissionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPermissionPolicy', 'WAF', result, true, true, mock)
  },
  putPermissionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPermissionPolicy', 'WAF', result, false, true, mock)
  },
  putPermissionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPermissionPolicy', 'WAF', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'WAF', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'WAF', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'WAF', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'WAF', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'WAF', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'WAF', result, true, false, mock)
  },
  updateByteMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateByteMatchSet', 'WAF', result, true, true, mock)
  },
  updateByteMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateByteMatchSet', 'WAF', result, false, true, mock)
  },
  updateByteMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateByteMatchSet', 'WAF', result, true, false, mock)
  },
  updateGeoMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGeoMatchSet', 'WAF', result, true, true, mock)
  },
  updateGeoMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGeoMatchSet', 'WAF', result, false, true, mock)
  },
  updateGeoMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGeoMatchSet', 'WAF', result, true, false, mock)
  },
  updateIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIPSet', 'WAF', result, true, true, mock)
  },
  updateIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIPSet', 'WAF', result, false, true, mock)
  },
  updateIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIPSet', 'WAF', result, true, false, mock)
  },
  updateRateBasedRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRateBasedRule', 'WAF', result, true, true, mock)
  },
  updateRateBasedRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRateBasedRule', 'WAF', result, false, true, mock)
  },
  updateRateBasedRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRateBasedRule', 'WAF', result, true, false, mock)
  },
  updateRegexMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRegexMatchSet', 'WAF', result, true, true, mock)
  },
  updateRegexMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRegexMatchSet', 'WAF', result, false, true, mock)
  },
  updateRegexMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRegexMatchSet', 'WAF', result, true, false, mock)
  },
  updateRegexPatternSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRegexPatternSet', 'WAF', result, true, true, mock)
  },
  updateRegexPatternSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRegexPatternSet', 'WAF', result, false, true, mock)
  },
  updateRegexPatternSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRegexPatternSet', 'WAF', result, true, false, mock)
  },
  updateRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRule', 'WAF', result, true, true, mock)
  },
  updateRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRule', 'WAF', result, false, true, mock)
  },
  updateRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRule', 'WAF', result, true, false, mock)
  },
  updateRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRuleGroup', 'WAF', result, true, true, mock)
  },
  updateRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRuleGroup', 'WAF', result, false, true, mock)
  },
  updateRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRuleGroup', 'WAF', result, true, false, mock)
  },
  updateSizeConstraintSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSizeConstraintSet', 'WAF', result, true, true, mock)
  },
  updateSizeConstraintSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSizeConstraintSet', 'WAF', result, false, true, mock)
  },
  updateSizeConstraintSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSizeConstraintSet', 'WAF', result, true, false, mock)
  },
  updateSqlInjectionMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSqlInjectionMatchSet', 'WAF', result, true, true, mock)
  },
  updateSqlInjectionMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSqlInjectionMatchSet', 'WAF', result, false, true, mock)
  },
  updateSqlInjectionMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateSqlInjectionMatchSet', 'WAF', result, true, false, mock)
  },
  updateWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWebACL', 'WAF', result, true, true, mock)
  },
  updateWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWebACL', 'WAF', result, false, true, mock)
  },
  updateWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWebACL', 'WAF', result, true, false, mock)
  },
  updateXssMatchSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateXssMatchSet', 'WAF', result, true, true, mock)
  },
  updateXssMatchSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateXssMatchSet', 'WAF', result, false, true, mock)
  },
  updateXssMatchSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateXssMatchSet', 'WAF', result, true, false, mock)
  },
}
