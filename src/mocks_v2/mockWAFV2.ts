
/**
* @description mocks_v2:mockWAFV2.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockWAFV2 = {
  associateWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWebACL', 'WAFV2', result, true, true, mock)
  },
  associateWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWebACL', 'WAFV2', result, false, true, mock)
  },
  associateWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWebACL', 'WAFV2', result, true, false, mock)
  },
  checkCapacity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkCapacity', 'WAFV2', result, true, true, mock)
  },
  checkCapacityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkCapacity', 'WAFV2', result, false, true, mock)
  },
  checkCapacityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkCapacity', 'WAFV2', result, true, false, mock)
  },
  createIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIPSet', 'WAFV2', result, true, true, mock)
  },
  createIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIPSet', 'WAFV2', result, false, true, mock)
  },
  createIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIPSet', 'WAFV2', result, true, false, mock)
  },
  createRegexPatternSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRegexPatternSet', 'WAFV2', result, true, true, mock)
  },
  createRegexPatternSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRegexPatternSet', 'WAFV2', result, false, true, mock)
  },
  createRegexPatternSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRegexPatternSet', 'WAFV2', result, true, false, mock)
  },
  createRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRuleGroup', 'WAFV2', result, true, true, mock)
  },
  createRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRuleGroup', 'WAFV2', result, false, true, mock)
  },
  createRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRuleGroup', 'WAFV2', result, true, false, mock)
  },
  createWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebACL', 'WAFV2', result, true, true, mock)
  },
  createWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebACL', 'WAFV2', result, false, true, mock)
  },
  createWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebACL', 'WAFV2', result, true, false, mock)
  },
  deleteFirewallManagerRuleGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFirewallManagerRuleGroups', 'WAFV2', result, true, true, mock)
  },
  deleteFirewallManagerRuleGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFirewallManagerRuleGroups', 'WAFV2', result, false, true, mock)
  },
  deleteFirewallManagerRuleGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFirewallManagerRuleGroups', 'WAFV2', result, true, false, mock)
  },
  deleteIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIPSet', 'WAFV2', result, true, true, mock)
  },
  deleteIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIPSet', 'WAFV2', result, false, true, mock)
  },
  deleteIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIPSet', 'WAFV2', result, true, false, mock)
  },
  deleteLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLoggingConfiguration', 'WAFV2', result, true, true, mock)
  },
  deleteLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLoggingConfiguration', 'WAFV2', result, false, true, mock)
  },
  deleteLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLoggingConfiguration', 'WAFV2', result, true, false, mock)
  },
  deletePermissionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePermissionPolicy', 'WAFV2', result, true, true, mock)
  },
  deletePermissionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePermissionPolicy', 'WAFV2', result, false, true, mock)
  },
  deletePermissionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePermissionPolicy', 'WAFV2', result, true, false, mock)
  },
  deleteRegexPatternSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRegexPatternSet', 'WAFV2', result, true, true, mock)
  },
  deleteRegexPatternSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRegexPatternSet', 'WAFV2', result, false, true, mock)
  },
  deleteRegexPatternSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRegexPatternSet', 'WAFV2', result, true, false, mock)
  },
  deleteRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRuleGroup', 'WAFV2', result, true, true, mock)
  },
  deleteRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRuleGroup', 'WAFV2', result, false, true, mock)
  },
  deleteRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRuleGroup', 'WAFV2', result, true, false, mock)
  },
  deleteWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWebACL', 'WAFV2', result, true, true, mock)
  },
  deleteWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWebACL', 'WAFV2', result, false, true, mock)
  },
  deleteWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWebACL', 'WAFV2', result, true, false, mock)
  },
  describeManagedRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeManagedRuleGroup', 'WAFV2', result, true, true, mock)
  },
  describeManagedRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeManagedRuleGroup', 'WAFV2', result, false, true, mock)
  },
  describeManagedRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeManagedRuleGroup', 'WAFV2', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WAFV2', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WAFV2', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WAFV2', result, true, false, mock)
  },
  disassociateWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWebACL', 'WAFV2', result, true, true, mock)
  },
  disassociateWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWebACL', 'WAFV2', result, false, true, mock)
  },
  disassociateWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWebACL', 'WAFV2', result, true, false, mock)
  },
  getIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIPSet', 'WAFV2', result, true, true, mock)
  },
  getIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIPSet', 'WAFV2', result, false, true, mock)
  },
  getIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIPSet', 'WAFV2', result, true, false, mock)
  },
  getLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLoggingConfiguration', 'WAFV2', result, true, true, mock)
  },
  getLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLoggingConfiguration', 'WAFV2', result, false, true, mock)
  },
  getLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLoggingConfiguration', 'WAFV2', result, true, false, mock)
  },
  getManagedRuleSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getManagedRuleSet', 'WAFV2', result, true, true, mock)
  },
  getManagedRuleSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getManagedRuleSet', 'WAFV2', result, false, true, mock)
  },
  getManagedRuleSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getManagedRuleSet', 'WAFV2', result, true, false, mock)
  },
  getPermissionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPermissionPolicy', 'WAFV2', result, true, true, mock)
  },
  getPermissionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPermissionPolicy', 'WAFV2', result, false, true, mock)
  },
  getPermissionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPermissionPolicy', 'WAFV2', result, true, false, mock)
  },
  getRateBasedStatementManagedKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRateBasedStatementManagedKeys', 'WAFV2', result, true, true, mock)
  },
  getRateBasedStatementManagedKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRateBasedStatementManagedKeys', 'WAFV2', result, false, true, mock)
  },
  getRateBasedStatementManagedKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRateBasedStatementManagedKeys', 'WAFV2', result, true, false, mock)
  },
  getRegexPatternSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegexPatternSet', 'WAFV2', result, true, true, mock)
  },
  getRegexPatternSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegexPatternSet', 'WAFV2', result, false, true, mock)
  },
  getRegexPatternSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegexPatternSet', 'WAFV2', result, true, false, mock)
  },
  getRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRuleGroup', 'WAFV2', result, true, true, mock)
  },
  getRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRuleGroup', 'WAFV2', result, false, true, mock)
  },
  getRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRuleGroup', 'WAFV2', result, true, false, mock)
  },
  getSampledRequests: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSampledRequests', 'WAFV2', result, true, true, mock)
  },
  getSampledRequestsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSampledRequests', 'WAFV2', result, false, true, mock)
  },
  getSampledRequestsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSampledRequests', 'WAFV2', result, true, false, mock)
  },
  getWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWebACL', 'WAFV2', result, true, true, mock)
  },
  getWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWebACL', 'WAFV2', result, false, true, mock)
  },
  getWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWebACL', 'WAFV2', result, true, false, mock)
  },
  getWebACLForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWebACLForResource', 'WAFV2', result, true, true, mock)
  },
  getWebACLForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWebACLForResource', 'WAFV2', result, false, true, mock)
  },
  getWebACLForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWebACLForResource', 'WAFV2', result, true, false, mock)
  },
  listAvailableManagedRuleGroupVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAvailableManagedRuleGroupVersions', 'WAFV2', result, true, true, mock)
  },
  listAvailableManagedRuleGroupVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAvailableManagedRuleGroupVersions', 'WAFV2', result, false, true, mock)
  },
  listAvailableManagedRuleGroupVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAvailableManagedRuleGroupVersions', 'WAFV2', result, true, false, mock)
  },
  listAvailableManagedRuleGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAvailableManagedRuleGroups', 'WAFV2', result, true, true, mock)
  },
  listAvailableManagedRuleGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAvailableManagedRuleGroups', 'WAFV2', result, false, true, mock)
  },
  listAvailableManagedRuleGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAvailableManagedRuleGroups', 'WAFV2', result, true, false, mock)
  },
  listIPSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIPSets', 'WAFV2', result, true, true, mock)
  },
  listIPSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIPSets', 'WAFV2', result, false, true, mock)
  },
  listIPSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIPSets', 'WAFV2', result, true, false, mock)
  },
  listLoggingConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLoggingConfigurations', 'WAFV2', result, true, true, mock)
  },
  listLoggingConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLoggingConfigurations', 'WAFV2', result, false, true, mock)
  },
  listLoggingConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLoggingConfigurations', 'WAFV2', result, true, false, mock)
  },
  listManagedRuleSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listManagedRuleSets', 'WAFV2', result, true, true, mock)
  },
  listManagedRuleSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listManagedRuleSets', 'WAFV2', result, false, true, mock)
  },
  listManagedRuleSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listManagedRuleSets', 'WAFV2', result, true, false, mock)
  },
  listRegexPatternSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRegexPatternSets', 'WAFV2', result, true, true, mock)
  },
  listRegexPatternSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRegexPatternSets', 'WAFV2', result, false, true, mock)
  },
  listRegexPatternSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRegexPatternSets', 'WAFV2', result, true, false, mock)
  },
  listResourcesForWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourcesForWebACL', 'WAFV2', result, true, true, mock)
  },
  listResourcesForWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourcesForWebACL', 'WAFV2', result, false, true, mock)
  },
  listResourcesForWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourcesForWebACL', 'WAFV2', result, true, false, mock)
  },
  listRuleGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRuleGroups', 'WAFV2', result, true, true, mock)
  },
  listRuleGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRuleGroups', 'WAFV2', result, false, true, mock)
  },
  listRuleGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRuleGroups', 'WAFV2', result, true, false, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'WAFV2', result, true, true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'WAFV2', result, false, true, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'WAFV2', result, true, false, mock)
  },
  listWebACLs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWebACLs', 'WAFV2', result, true, true, mock)
  },
  listWebACLsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWebACLs', 'WAFV2', result, false, true, mock)
  },
  listWebACLsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWebACLs', 'WAFV2', result, true, false, mock)
  },
  putLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLoggingConfiguration', 'WAFV2', result, true, true, mock)
  },
  putLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLoggingConfiguration', 'WAFV2', result, false, true, mock)
  },
  putLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLoggingConfiguration', 'WAFV2', result, true, false, mock)
  },
  putManagedRuleSetVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putManagedRuleSetVersions', 'WAFV2', result, true, true, mock)
  },
  putManagedRuleSetVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putManagedRuleSetVersions', 'WAFV2', result, false, true, mock)
  },
  putManagedRuleSetVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putManagedRuleSetVersions', 'WAFV2', result, true, false, mock)
  },
  putPermissionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPermissionPolicy', 'WAFV2', result, true, true, mock)
  },
  putPermissionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPermissionPolicy', 'WAFV2', result, false, true, mock)
  },
  putPermissionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPermissionPolicy', 'WAFV2', result, true, false, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'WAFV2', result, true, true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'WAFV2', result, false, true, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'WAFV2', result, true, false, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'WAFV2', result, true, true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'WAFV2', result, false, true, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'WAFV2', result, true, false, mock)
  },
  updateIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIPSet', 'WAFV2', result, true, true, mock)
  },
  updateIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIPSet', 'WAFV2', result, false, true, mock)
  },
  updateIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIPSet', 'WAFV2', result, true, false, mock)
  },
  updateManagedRuleSetVersionExpiryDate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateManagedRuleSetVersionExpiryDate', 'WAFV2', result, true, true, mock)
  },
  updateManagedRuleSetVersionExpiryDateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateManagedRuleSetVersionExpiryDate', 'WAFV2', result, false, true, mock)
  },
  updateManagedRuleSetVersionExpiryDateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateManagedRuleSetVersionExpiryDate', 'WAFV2', result, true, false, mock)
  },
  updateRegexPatternSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRegexPatternSet', 'WAFV2', result, true, true, mock)
  },
  updateRegexPatternSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRegexPatternSet', 'WAFV2', result, false, true, mock)
  },
  updateRegexPatternSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRegexPatternSet', 'WAFV2', result, true, false, mock)
  },
  updateRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRuleGroup', 'WAFV2', result, true, true, mock)
  },
  updateRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRuleGroup', 'WAFV2', result, false, true, mock)
  },
  updateRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRuleGroup', 'WAFV2', result, true, false, mock)
  },
  updateWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWebACL', 'WAFV2', result, true, true, mock)
  },
  updateWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWebACL', 'WAFV2', result, false, true, mock)
  },
  updateWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWebACL', 'WAFV2', result, true, false, mock)
  },
}
