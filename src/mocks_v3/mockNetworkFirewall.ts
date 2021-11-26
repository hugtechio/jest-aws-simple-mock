
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockNetworkFirewall = {
  associateFirewallPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'associateFirewallPolicy', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  associateFirewallPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'associateFirewallPolicy', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  associateFirewallPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'associateFirewallPolicy', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  associateSubnets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'associateSubnets', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  associateSubnetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'associateSubnets', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  associateSubnetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'associateSubnets', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  createFirewall: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'createFirewall', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  createFirewallAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'createFirewall', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  createFirewallThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'createFirewall', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  createFirewallPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'createFirewallPolicy', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  createFirewallPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'createFirewallPolicy', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  createFirewallPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'createFirewallPolicy', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  createRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'createRuleGroup', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  createRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'createRuleGroup', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  createRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'createRuleGroup', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  deleteFirewall: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'deleteFirewall', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  deleteFirewallAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'deleteFirewall', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  deleteFirewallThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'deleteFirewall', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  deleteFirewallPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'deleteFirewallPolicy', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  deleteFirewallPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'deleteFirewallPolicy', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  deleteFirewallPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'deleteFirewallPolicy', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  deleteResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'deleteResourcePolicy', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  deleteResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'deleteResourcePolicy', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  deleteResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'deleteResourcePolicy', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  deleteRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'deleteRuleGroup', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  deleteRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'deleteRuleGroup', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  deleteRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'deleteRuleGroup', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  describeFirewall: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'describeFirewall', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  describeFirewallAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'describeFirewall', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  describeFirewallThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'describeFirewall', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  describeFirewallPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'describeFirewallPolicy', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  describeFirewallPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'describeFirewallPolicy', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  describeFirewallPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'describeFirewallPolicy', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  describeLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'describeLoggingConfiguration', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  describeLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'describeLoggingConfiguration', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  describeLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'describeLoggingConfiguration', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  describeResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'describeResourcePolicy', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  describeResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'describeResourcePolicy', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  describeResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'describeResourcePolicy', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  describeRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'describeRuleGroup', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  describeRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'describeRuleGroup', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  describeRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'describeRuleGroup', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'destroy', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'destroy', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'destroy', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  disassociateSubnets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'disassociateSubnets', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  disassociateSubnetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'disassociateSubnets', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  disassociateSubnetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'disassociateSubnets', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  listFirewallPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'listFirewallPolicies', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  listFirewallPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'listFirewallPolicies', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  listFirewallPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'listFirewallPolicies', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  listFirewalls: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'listFirewalls', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  listFirewallsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'listFirewalls', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  listFirewallsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'listFirewalls', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  listRuleGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'listRuleGroups', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  listRuleGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'listRuleGroups', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  listRuleGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'listRuleGroups', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'listTagsForResource', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'listTagsForResource', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'listTagsForResource', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  putResourcePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'putResourcePolicy', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  putResourcePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'putResourcePolicy', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  putResourcePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'putResourcePolicy', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'tagResource', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'tagResource', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'tagResource', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'untagResource', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'untagResource', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'untagResource', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  updateFirewallDeleteProtection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'updateFirewallDeleteProtection', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  updateFirewallDeleteProtectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'updateFirewallDeleteProtection', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  updateFirewallDeleteProtectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'updateFirewallDeleteProtection', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  updateFirewallDescription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'updateFirewallDescription', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  updateFirewallDescriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'updateFirewallDescription', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  updateFirewallDescriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'updateFirewallDescription', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  updateFirewallPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'updateFirewallPolicy', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  updateFirewallPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'updateFirewallPolicy', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  updateFirewallPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'updateFirewallPolicy', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  updateFirewallPolicyChangeProtection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'updateFirewallPolicyChangeProtection', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  updateFirewallPolicyChangeProtectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'updateFirewallPolicyChangeProtection', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  updateFirewallPolicyChangeProtectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'updateFirewallPolicyChangeProtection', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  updateLoggingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'updateLoggingConfiguration', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  updateLoggingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'updateLoggingConfiguration', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  updateLoggingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'updateLoggingConfiguration', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  updateRuleGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'updateRuleGroup', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  updateRuleGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'updateRuleGroup', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  updateRuleGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'updateRuleGroup', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  updateSubnetChangeProtection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'updateSubnetChangeProtection', 'NetworkFirewall', Promise.resolve(result), true, mock)
  },
  updateSubnetChangeProtectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'updateSubnetChangeProtection', 'NetworkFirewall', Promise.resolve(result), false, mock)
  },
  updateSubnetChangeProtectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'updateSubnetChangeProtection', 'NetworkFirewall', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'send', 'NetworkFirewallClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'send', 'NetworkFirewallClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-network-firewall', 'send', 'NetworkFirewallClient', Promise.reject(result), true, mock)
  }
}