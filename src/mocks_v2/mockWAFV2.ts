
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
  export const mockWAFV2 = {
  associateWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWebACL', 'WAFV2', Promise.resolve(result), true, mock)
  },
  associateWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWebACL', 'WAFV2', Promise.resolve(result), false, mock)
  },
  associateWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateWebACL', 'WAFV2', Promise.reject(result), true, mock)
  },
  checkCapacity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkCapacity', 'WAFV2', Promise.resolve(result), true, mock)
  },
  checkCapacityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkCapacity', 'WAFV2', Promise.resolve(result), false, mock)
  },
  checkCapacityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('checkCapacity', 'WAFV2', Promise.reject(result), true, mock)
  },
  createIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIPSet', 'WAFV2', Promise.resolve(result), true, mock)
  },
  createIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIPSet', 'WAFV2', Promise.resolve(result), false, mock)
  },
  createIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createIPSet', 'WAFV2', Promise.reject(result), true, mock)
  },
  createRegexPatternSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRegexPatternSet', 'WAFV2', Promise.resolve(result), true, mock)
  },
  createRegexPatternSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRegexPatternSet', 'WAFV2', Promise.resolve(result), false, mock)
  },
  createRegexPatternSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRegexPatternSet', 'WAFV2', Promise.reject(result), true, mock)
  },
  createRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRuleGroup', 'WAFV2', Promise.resolve(result), true, mock)
  },
  createRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRuleGroup', 'WAFV2', Promise.resolve(result), false, mock)
  },
  createRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRuleGroup', 'WAFV2', Promise.reject(result), true, mock)
  },
  createWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebACL', 'WAFV2', Promise.resolve(result), true, mock)
  },
  createWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebACL', 'WAFV2', Promise.resolve(result), false, mock)
  },
  createWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createWebACL', 'WAFV2', Promise.reject(result), true, mock)
  },
  deleteFirewallManagerRuleGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFirewallManagerRuleGroups', 'WAFV2', Promise.resolve(result), true, mock)
  },
  deleteFirewallManagerRuleGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFirewallManagerRuleGroups', 'WAFV2', Promise.resolve(result), false, mock)
  },
  deleteFirewallManagerRuleGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFirewallManagerRuleGroups', 'WAFV2', Promise.reject(result), true, mock)
  },
  deleteIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIPSet', 'WAFV2', Promise.resolve(result), true, mock)
  },
  deleteIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIPSet', 'WAFV2', Promise.resolve(result), false, mock)
  },
  deleteIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIPSet', 'WAFV2', Promise.reject(result), true, mock)
  },
  deleteLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLoggingConfiguration', 'WAFV2', Promise.resolve(result), true, mock)
  },
  deleteLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLoggingConfiguration', 'WAFV2', Promise.resolve(result), false, mock)
  },
  deleteLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLoggingConfiguration', 'WAFV2', Promise.reject(result), true, mock)
  },
  deletePermissionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePermissionPolicy', 'WAFV2', Promise.resolve(result), true, mock)
  },
  deletePermissionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePermissionPolicy', 'WAFV2', Promise.resolve(result), false, mock)
  },
  deletePermissionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePermissionPolicy', 'WAFV2', Promise.reject(result), true, mock)
  },
  deleteRegexPatternSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRegexPatternSet', 'WAFV2', Promise.resolve(result), true, mock)
  },
  deleteRegexPatternSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRegexPatternSet', 'WAFV2', Promise.resolve(result), false, mock)
  },
  deleteRegexPatternSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRegexPatternSet', 'WAFV2', Promise.reject(result), true, mock)
  },
  deleteRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRuleGroup', 'WAFV2', Promise.resolve(result), true, mock)
  },
  deleteRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRuleGroup', 'WAFV2', Promise.resolve(result), false, mock)
  },
  deleteRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRuleGroup', 'WAFV2', Promise.reject(result), true, mock)
  },
  deleteWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWebACL', 'WAFV2', Promise.resolve(result), true, mock)
  },
  deleteWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWebACL', 'WAFV2', Promise.resolve(result), false, mock)
  },
  deleteWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWebACL', 'WAFV2', Promise.reject(result), true, mock)
  },
  describeManagedRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeManagedRuleGroup', 'WAFV2', Promise.resolve(result), true, mock)
  },
  describeManagedRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeManagedRuleGroup', 'WAFV2', Promise.resolve(result), false, mock)
  },
  describeManagedRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeManagedRuleGroup', 'WAFV2', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WAFV2', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WAFV2', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WAFV2', Promise.reject(result), true, mock)
  },
  disassociateWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWebACL', 'WAFV2', Promise.resolve(result), true, mock)
  },
  disassociateWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWebACL', 'WAFV2', Promise.resolve(result), false, mock)
  },
  disassociateWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateWebACL', 'WAFV2', Promise.reject(result), true, mock)
  },
  getIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIPSet', 'WAFV2', Promise.resolve(result), true, mock)
  },
  getIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIPSet', 'WAFV2', Promise.resolve(result), false, mock)
  },
  getIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIPSet', 'WAFV2', Promise.reject(result), true, mock)
  },
  getLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLoggingConfiguration', 'WAFV2', Promise.resolve(result), true, mock)
  },
  getLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLoggingConfiguration', 'WAFV2', Promise.resolve(result), false, mock)
  },
  getLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getLoggingConfiguration', 'WAFV2', Promise.reject(result), true, mock)
  },
  getManagedRuleSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getManagedRuleSet', 'WAFV2', Promise.resolve(result), true, mock)
  },
  getManagedRuleSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getManagedRuleSet', 'WAFV2', Promise.resolve(result), false, mock)
  },
  getManagedRuleSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getManagedRuleSet', 'WAFV2', Promise.reject(result), true, mock)
  },
  getPermissionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPermissionPolicy', 'WAFV2', Promise.resolve(result), true, mock)
  },
  getPermissionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPermissionPolicy', 'WAFV2', Promise.resolve(result), false, mock)
  },
  getPermissionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPermissionPolicy', 'WAFV2', Promise.reject(result), true, mock)
  },
  getRateBasedStatementManagedKeys: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRateBasedStatementManagedKeys', 'WAFV2', Promise.resolve(result), true, mock)
  },
  getRateBasedStatementManagedKeysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRateBasedStatementManagedKeys', 'WAFV2', Promise.resolve(result), false, mock)
  },
  getRateBasedStatementManagedKeysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRateBasedStatementManagedKeys', 'WAFV2', Promise.reject(result), true, mock)
  },
  getRegexPatternSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegexPatternSet', 'WAFV2', Promise.resolve(result), true, mock)
  },
  getRegexPatternSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegexPatternSet', 'WAFV2', Promise.resolve(result), false, mock)
  },
  getRegexPatternSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRegexPatternSet', 'WAFV2', Promise.reject(result), true, mock)
  },
  getRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRuleGroup', 'WAFV2', Promise.resolve(result), true, mock)
  },
  getRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRuleGroup', 'WAFV2', Promise.resolve(result), false, mock)
  },
  getRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRuleGroup', 'WAFV2', Promise.reject(result), true, mock)
  },
  getSampledRequests: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSampledRequests', 'WAFV2', Promise.resolve(result), true, mock)
  },
  getSampledRequestsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSampledRequests', 'WAFV2', Promise.resolve(result), false, mock)
  },
  getSampledRequestsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSampledRequests', 'WAFV2', Promise.reject(result), true, mock)
  },
  getWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWebACL', 'WAFV2', Promise.resolve(result), true, mock)
  },
  getWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWebACL', 'WAFV2', Promise.resolve(result), false, mock)
  },
  getWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWebACL', 'WAFV2', Promise.reject(result), true, mock)
  },
  getWebACLForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWebACLForResource', 'WAFV2', Promise.resolve(result), true, mock)
  },
  getWebACLForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWebACLForResource', 'WAFV2', Promise.resolve(result), false, mock)
  },
  getWebACLForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getWebACLForResource', 'WAFV2', Promise.reject(result), true, mock)
  },
  listAvailableManagedRuleGroupVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAvailableManagedRuleGroupVersions', 'WAFV2', Promise.resolve(result), true, mock)
  },
  listAvailableManagedRuleGroupVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAvailableManagedRuleGroupVersions', 'WAFV2', Promise.resolve(result), false, mock)
  },
  listAvailableManagedRuleGroupVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAvailableManagedRuleGroupVersions', 'WAFV2', Promise.reject(result), true, mock)
  },
  listAvailableManagedRuleGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAvailableManagedRuleGroups', 'WAFV2', Promise.resolve(result), true, mock)
  },
  listAvailableManagedRuleGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAvailableManagedRuleGroups', 'WAFV2', Promise.resolve(result), false, mock)
  },
  listAvailableManagedRuleGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAvailableManagedRuleGroups', 'WAFV2', Promise.reject(result), true, mock)
  },
  listIPSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIPSets', 'WAFV2', Promise.resolve(result), true, mock)
  },
  listIPSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIPSets', 'WAFV2', Promise.resolve(result), false, mock)
  },
  listIPSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIPSets', 'WAFV2', Promise.reject(result), true, mock)
  },
  listLoggingConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLoggingConfigurations', 'WAFV2', Promise.resolve(result), true, mock)
  },
  listLoggingConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLoggingConfigurations', 'WAFV2', Promise.resolve(result), false, mock)
  },
  listLoggingConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listLoggingConfigurations', 'WAFV2', Promise.reject(result), true, mock)
  },
  listManagedRuleSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listManagedRuleSets', 'WAFV2', Promise.resolve(result), true, mock)
  },
  listManagedRuleSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listManagedRuleSets', 'WAFV2', Promise.resolve(result), false, mock)
  },
  listManagedRuleSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listManagedRuleSets', 'WAFV2', Promise.reject(result), true, mock)
  },
  listRegexPatternSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRegexPatternSets', 'WAFV2', Promise.resolve(result), true, mock)
  },
  listRegexPatternSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRegexPatternSets', 'WAFV2', Promise.resolve(result), false, mock)
  },
  listRegexPatternSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRegexPatternSets', 'WAFV2', Promise.reject(result), true, mock)
  },
  listResourcesForWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourcesForWebACL', 'WAFV2', Promise.resolve(result), true, mock)
  },
  listResourcesForWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourcesForWebACL', 'WAFV2', Promise.resolve(result), false, mock)
  },
  listResourcesForWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourcesForWebACL', 'WAFV2', Promise.reject(result), true, mock)
  },
  listRuleGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRuleGroups', 'WAFV2', Promise.resolve(result), true, mock)
  },
  listRuleGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRuleGroups', 'WAFV2', Promise.resolve(result), false, mock)
  },
  listRuleGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRuleGroups', 'WAFV2', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'WAFV2', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'WAFV2', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'WAFV2', Promise.reject(result), true, mock)
  },
  listWebACLs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWebACLs', 'WAFV2', Promise.resolve(result), true, mock)
  },
  listWebACLsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWebACLs', 'WAFV2', Promise.resolve(result), false, mock)
  },
  listWebACLsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWebACLs', 'WAFV2', Promise.reject(result), true, mock)
  },
  putLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLoggingConfiguration', 'WAFV2', Promise.resolve(result), true, mock)
  },
  putLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLoggingConfiguration', 'WAFV2', Promise.resolve(result), false, mock)
  },
  putLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLoggingConfiguration', 'WAFV2', Promise.reject(result), true, mock)
  },
  putManagedRuleSetVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putManagedRuleSetVersions', 'WAFV2', Promise.resolve(result), true, mock)
  },
  putManagedRuleSetVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putManagedRuleSetVersions', 'WAFV2', Promise.resolve(result), false, mock)
  },
  putManagedRuleSetVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putManagedRuleSetVersions', 'WAFV2', Promise.reject(result), true, mock)
  },
  putPermissionPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPermissionPolicy', 'WAFV2', Promise.resolve(result), true, mock)
  },
  putPermissionPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPermissionPolicy', 'WAFV2', Promise.resolve(result), false, mock)
  },
  putPermissionPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putPermissionPolicy', 'WAFV2', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'WAFV2', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'WAFV2', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'WAFV2', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'WAFV2', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'WAFV2', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'WAFV2', Promise.reject(result), true, mock)
  },
  updateIPSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIPSet', 'WAFV2', Promise.resolve(result), true, mock)
  },
  updateIPSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIPSet', 'WAFV2', Promise.resolve(result), false, mock)
  },
  updateIPSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateIPSet', 'WAFV2', Promise.reject(result), true, mock)
  },
  updateManagedRuleSetVersionExpiryDate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateManagedRuleSetVersionExpiryDate', 'WAFV2', Promise.resolve(result), true, mock)
  },
  updateManagedRuleSetVersionExpiryDateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateManagedRuleSetVersionExpiryDate', 'WAFV2', Promise.resolve(result), false, mock)
  },
  updateManagedRuleSetVersionExpiryDateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateManagedRuleSetVersionExpiryDate', 'WAFV2', Promise.reject(result), true, mock)
  },
  updateRegexPatternSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRegexPatternSet', 'WAFV2', Promise.resolve(result), true, mock)
  },
  updateRegexPatternSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRegexPatternSet', 'WAFV2', Promise.resolve(result), false, mock)
  },
  updateRegexPatternSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRegexPatternSet', 'WAFV2', Promise.reject(result), true, mock)
  },
  updateRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRuleGroup', 'WAFV2', Promise.resolve(result), true, mock)
  },
  updateRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRuleGroup', 'WAFV2', Promise.resolve(result), false, mock)
  },
  updateRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRuleGroup', 'WAFV2', Promise.reject(result), true, mock)
  },
  updateWebACL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWebACL', 'WAFV2', Promise.resolve(result), true, mock)
  },
  updateWebACLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWebACL', 'WAFV2', Promise.resolve(result), false, mock)
  },
  updateWebACLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateWebACL', 'WAFV2', Promise.reject(result), true, mock)
  },
}
