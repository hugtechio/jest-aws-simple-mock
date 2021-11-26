
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockRoute53RecoveryControlConfig = {
  createCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'createCluster', 'Route53RecoveryControlConfig', Promise.resolve(result), true, mock)
  },
  createClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'createCluster', 'Route53RecoveryControlConfig', Promise.resolve(result), false, mock)
  },
  createClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'createCluster', 'Route53RecoveryControlConfig', Promise.reject(result), true, mock)
  },
  createControlPanel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'createControlPanel', 'Route53RecoveryControlConfig', Promise.resolve(result), true, mock)
  },
  createControlPanelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'createControlPanel', 'Route53RecoveryControlConfig', Promise.resolve(result), false, mock)
  },
  createControlPanelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'createControlPanel', 'Route53RecoveryControlConfig', Promise.reject(result), true, mock)
  },
  createRoutingControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'createRoutingControl', 'Route53RecoveryControlConfig', Promise.resolve(result), true, mock)
  },
  createRoutingControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'createRoutingControl', 'Route53RecoveryControlConfig', Promise.resolve(result), false, mock)
  },
  createRoutingControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'createRoutingControl', 'Route53RecoveryControlConfig', Promise.reject(result), true, mock)
  },
  createSafetyRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'createSafetyRule', 'Route53RecoveryControlConfig', Promise.resolve(result), true, mock)
  },
  createSafetyRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'createSafetyRule', 'Route53RecoveryControlConfig', Promise.resolve(result), false, mock)
  },
  createSafetyRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'createSafetyRule', 'Route53RecoveryControlConfig', Promise.reject(result), true, mock)
  },
  deleteCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'deleteCluster', 'Route53RecoveryControlConfig', Promise.resolve(result), true, mock)
  },
  deleteClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'deleteCluster', 'Route53RecoveryControlConfig', Promise.resolve(result), false, mock)
  },
  deleteClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'deleteCluster', 'Route53RecoveryControlConfig', Promise.reject(result), true, mock)
  },
  deleteControlPanel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'deleteControlPanel', 'Route53RecoveryControlConfig', Promise.resolve(result), true, mock)
  },
  deleteControlPanelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'deleteControlPanel', 'Route53RecoveryControlConfig', Promise.resolve(result), false, mock)
  },
  deleteControlPanelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'deleteControlPanel', 'Route53RecoveryControlConfig', Promise.reject(result), true, mock)
  },
  deleteRoutingControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'deleteRoutingControl', 'Route53RecoveryControlConfig', Promise.resolve(result), true, mock)
  },
  deleteRoutingControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'deleteRoutingControl', 'Route53RecoveryControlConfig', Promise.resolve(result), false, mock)
  },
  deleteRoutingControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'deleteRoutingControl', 'Route53RecoveryControlConfig', Promise.reject(result), true, mock)
  },
  deleteSafetyRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'deleteSafetyRule', 'Route53RecoveryControlConfig', Promise.resolve(result), true, mock)
  },
  deleteSafetyRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'deleteSafetyRule', 'Route53RecoveryControlConfig', Promise.resolve(result), false, mock)
  },
  deleteSafetyRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'deleteSafetyRule', 'Route53RecoveryControlConfig', Promise.reject(result), true, mock)
  },
  describeCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'describeCluster', 'Route53RecoveryControlConfig', Promise.resolve(result), true, mock)
  },
  describeClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'describeCluster', 'Route53RecoveryControlConfig', Promise.resolve(result), false, mock)
  },
  describeClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'describeCluster', 'Route53RecoveryControlConfig', Promise.reject(result), true, mock)
  },
  describeControlPanel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'describeControlPanel', 'Route53RecoveryControlConfig', Promise.resolve(result), true, mock)
  },
  describeControlPanelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'describeControlPanel', 'Route53RecoveryControlConfig', Promise.resolve(result), false, mock)
  },
  describeControlPanelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'describeControlPanel', 'Route53RecoveryControlConfig', Promise.reject(result), true, mock)
  },
  describeRoutingControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'describeRoutingControl', 'Route53RecoveryControlConfig', Promise.resolve(result), true, mock)
  },
  describeRoutingControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'describeRoutingControl', 'Route53RecoveryControlConfig', Promise.resolve(result), false, mock)
  },
  describeRoutingControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'describeRoutingControl', 'Route53RecoveryControlConfig', Promise.reject(result), true, mock)
  },
  describeSafetyRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'describeSafetyRule', 'Route53RecoveryControlConfig', Promise.resolve(result), true, mock)
  },
  describeSafetyRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'describeSafetyRule', 'Route53RecoveryControlConfig', Promise.resolve(result), false, mock)
  },
  describeSafetyRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'describeSafetyRule', 'Route53RecoveryControlConfig', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'destroy', 'Route53RecoveryControlConfig', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'destroy', 'Route53RecoveryControlConfig', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'destroy', 'Route53RecoveryControlConfig', Promise.reject(result), true, mock)
  },
  listAssociatedRoute53HealthChecks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'listAssociatedRoute53HealthChecks', 'Route53RecoveryControlConfig', Promise.resolve(result), true, mock)
  },
  listAssociatedRoute53HealthChecksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'listAssociatedRoute53HealthChecks', 'Route53RecoveryControlConfig', Promise.resolve(result), false, mock)
  },
  listAssociatedRoute53HealthChecksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'listAssociatedRoute53HealthChecks', 'Route53RecoveryControlConfig', Promise.reject(result), true, mock)
  },
  listClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'listClusters', 'Route53RecoveryControlConfig', Promise.resolve(result), true, mock)
  },
  listClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'listClusters', 'Route53RecoveryControlConfig', Promise.resolve(result), false, mock)
  },
  listClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'listClusters', 'Route53RecoveryControlConfig', Promise.reject(result), true, mock)
  },
  listControlPanels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'listControlPanels', 'Route53RecoveryControlConfig', Promise.resolve(result), true, mock)
  },
  listControlPanelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'listControlPanels', 'Route53RecoveryControlConfig', Promise.resolve(result), false, mock)
  },
  listControlPanelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'listControlPanels', 'Route53RecoveryControlConfig', Promise.reject(result), true, mock)
  },
  listRoutingControls: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'listRoutingControls', 'Route53RecoveryControlConfig', Promise.resolve(result), true, mock)
  },
  listRoutingControlsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'listRoutingControls', 'Route53RecoveryControlConfig', Promise.resolve(result), false, mock)
  },
  listRoutingControlsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'listRoutingControls', 'Route53RecoveryControlConfig', Promise.reject(result), true, mock)
  },
  listSafetyRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'listSafetyRules', 'Route53RecoveryControlConfig', Promise.resolve(result), true, mock)
  },
  listSafetyRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'listSafetyRules', 'Route53RecoveryControlConfig', Promise.resolve(result), false, mock)
  },
  listSafetyRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'listSafetyRules', 'Route53RecoveryControlConfig', Promise.reject(result), true, mock)
  },
  updateControlPanel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'updateControlPanel', 'Route53RecoveryControlConfig', Promise.resolve(result), true, mock)
  },
  updateControlPanelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'updateControlPanel', 'Route53RecoveryControlConfig', Promise.resolve(result), false, mock)
  },
  updateControlPanelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'updateControlPanel', 'Route53RecoveryControlConfig', Promise.reject(result), true, mock)
  },
  updateRoutingControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'updateRoutingControl', 'Route53RecoveryControlConfig', Promise.resolve(result), true, mock)
  },
  updateRoutingControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'updateRoutingControl', 'Route53RecoveryControlConfig', Promise.resolve(result), false, mock)
  },
  updateRoutingControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'updateRoutingControl', 'Route53RecoveryControlConfig', Promise.reject(result), true, mock)
  },
  updateSafetyRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'updateSafetyRule', 'Route53RecoveryControlConfig', Promise.resolve(result), true, mock)
  },
  updateSafetyRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'updateSafetyRule', 'Route53RecoveryControlConfig', Promise.resolve(result), false, mock)
  },
  updateSafetyRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'updateSafetyRule', 'Route53RecoveryControlConfig', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'send', 'Route53RecoveryControlConfigClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'send', 'Route53RecoveryControlConfigClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-control-config', 'send', 'Route53RecoveryControlConfigClient', Promise.reject(result), true, mock)
  }
}