
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockOpsWorks = {
  assignInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'assignInstance', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  assignInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'assignInstance', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  assignInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'assignInstance', 'OpsWorks', Promise.reject(result), true, mock)
  },
  assignVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'assignVolume', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  assignVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'assignVolume', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  assignVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'assignVolume', 'OpsWorks', Promise.reject(result), true, mock)
  },
  associateElasticIp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'associateElasticIp', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  associateElasticIpAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'associateElasticIp', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  associateElasticIpThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'associateElasticIp', 'OpsWorks', Promise.reject(result), true, mock)
  },
  attachElasticLoadBalancer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'attachElasticLoadBalancer', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  attachElasticLoadBalancerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'attachElasticLoadBalancer', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  attachElasticLoadBalancerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'attachElasticLoadBalancer', 'OpsWorks', Promise.reject(result), true, mock)
  },
  cloneStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'cloneStack', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  cloneStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'cloneStack', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  cloneStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'cloneStack', 'OpsWorks', Promise.reject(result), true, mock)
  },
  createApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'createApp', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  createAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'createApp', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  createAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'createApp', 'OpsWorks', Promise.reject(result), true, mock)
  },
  createDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'createDeployment', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  createDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'createDeployment', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  createDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'createDeployment', 'OpsWorks', Promise.reject(result), true, mock)
  },
  createInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'createInstance', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  createInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'createInstance', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  createInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'createInstance', 'OpsWorks', Promise.reject(result), true, mock)
  },
  createLayer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'createLayer', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  createLayerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'createLayer', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  createLayerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'createLayer', 'OpsWorks', Promise.reject(result), true, mock)
  },
  createStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'createStack', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  createStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'createStack', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  createStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'createStack', 'OpsWorks', Promise.reject(result), true, mock)
  },
  createUserProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'createUserProfile', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  createUserProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'createUserProfile', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  createUserProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'createUserProfile', 'OpsWorks', Promise.reject(result), true, mock)
  },
  deleteApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deleteApp', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  deleteAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deleteApp', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  deleteAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deleteApp', 'OpsWorks', Promise.reject(result), true, mock)
  },
  deleteInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deleteInstance', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  deleteInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deleteInstance', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  deleteInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deleteInstance', 'OpsWorks', Promise.reject(result), true, mock)
  },
  deleteLayer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deleteLayer', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  deleteLayerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deleteLayer', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  deleteLayerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deleteLayer', 'OpsWorks', Promise.reject(result), true, mock)
  },
  deleteStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deleteStack', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  deleteStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deleteStack', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  deleteStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deleteStack', 'OpsWorks', Promise.reject(result), true, mock)
  },
  deleteUserProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deleteUserProfile', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  deleteUserProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deleteUserProfile', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  deleteUserProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deleteUserProfile', 'OpsWorks', Promise.reject(result), true, mock)
  },
  deregisterEcsCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deregisterEcsCluster', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  deregisterEcsClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deregisterEcsCluster', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  deregisterEcsClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deregisterEcsCluster', 'OpsWorks', Promise.reject(result), true, mock)
  },
  deregisterElasticIp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deregisterElasticIp', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  deregisterElasticIpAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deregisterElasticIp', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  deregisterElasticIpThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deregisterElasticIp', 'OpsWorks', Promise.reject(result), true, mock)
  },
  deregisterInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deregisterInstance', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  deregisterInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deregisterInstance', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  deregisterInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deregisterInstance', 'OpsWorks', Promise.reject(result), true, mock)
  },
  deregisterRdsDbInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deregisterRdsDbInstance', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  deregisterRdsDbInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deregisterRdsDbInstance', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  deregisterRdsDbInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deregisterRdsDbInstance', 'OpsWorks', Promise.reject(result), true, mock)
  },
  deregisterVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deregisterVolume', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  deregisterVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deregisterVolume', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  deregisterVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'deregisterVolume', 'OpsWorks', Promise.reject(result), true, mock)
  },
  describeAgentVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeAgentVersions', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  describeAgentVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeAgentVersions', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  describeAgentVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeAgentVersions', 'OpsWorks', Promise.reject(result), true, mock)
  },
  describeApps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeApps', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  describeAppsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeApps', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  describeAppsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeApps', 'OpsWorks', Promise.reject(result), true, mock)
  },
  describeCommands: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeCommands', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  describeCommandsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeCommands', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  describeCommandsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeCommands', 'OpsWorks', Promise.reject(result), true, mock)
  },
  describeDeployments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeDeployments', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  describeDeploymentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeDeployments', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  describeDeploymentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeDeployments', 'OpsWorks', Promise.reject(result), true, mock)
  },
  describeEcsClusters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeEcsClusters', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  describeEcsClustersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeEcsClusters', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  describeEcsClustersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeEcsClusters', 'OpsWorks', Promise.reject(result), true, mock)
  },
  describeElasticIps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeElasticIps', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  describeElasticIpsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeElasticIps', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  describeElasticIpsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeElasticIps', 'OpsWorks', Promise.reject(result), true, mock)
  },
  describeElasticLoadBalancers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeElasticLoadBalancers', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  describeElasticLoadBalancersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeElasticLoadBalancers', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  describeElasticLoadBalancersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeElasticLoadBalancers', 'OpsWorks', Promise.reject(result), true, mock)
  },
  describeInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeInstances', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  describeInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeInstances', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  describeInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeInstances', 'OpsWorks', Promise.reject(result), true, mock)
  },
  describeLayers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeLayers', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  describeLayersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeLayers', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  describeLayersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeLayers', 'OpsWorks', Promise.reject(result), true, mock)
  },
  describeLoadBasedAutoScaling: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeLoadBasedAutoScaling', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  describeLoadBasedAutoScalingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeLoadBasedAutoScaling', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  describeLoadBasedAutoScalingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeLoadBasedAutoScaling', 'OpsWorks', Promise.reject(result), true, mock)
  },
  describeMyUserProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeMyUserProfile', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  describeMyUserProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeMyUserProfile', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  describeMyUserProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeMyUserProfile', 'OpsWorks', Promise.reject(result), true, mock)
  },
  describeOperatingSystems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeOperatingSystems', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  describeOperatingSystemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeOperatingSystems', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  describeOperatingSystemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeOperatingSystems', 'OpsWorks', Promise.reject(result), true, mock)
  },
  describePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describePermissions', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  describePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describePermissions', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  describePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describePermissions', 'OpsWorks', Promise.reject(result), true, mock)
  },
  describeRaidArrays: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeRaidArrays', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  describeRaidArraysAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeRaidArrays', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  describeRaidArraysThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeRaidArrays', 'OpsWorks', Promise.reject(result), true, mock)
  },
  describeRdsDbInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeRdsDbInstances', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  describeRdsDbInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeRdsDbInstances', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  describeRdsDbInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeRdsDbInstances', 'OpsWorks', Promise.reject(result), true, mock)
  },
  describeServiceErrors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeServiceErrors', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  describeServiceErrorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeServiceErrors', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  describeServiceErrorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeServiceErrors', 'OpsWorks', Promise.reject(result), true, mock)
  },
  describeStackProvisioningParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeStackProvisioningParameters', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  describeStackProvisioningParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeStackProvisioningParameters', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  describeStackProvisioningParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeStackProvisioningParameters', 'OpsWorks', Promise.reject(result), true, mock)
  },
  describeStackSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeStackSummary', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  describeStackSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeStackSummary', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  describeStackSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeStackSummary', 'OpsWorks', Promise.reject(result), true, mock)
  },
  describeStacks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeStacks', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  describeStacksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeStacks', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  describeStacksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeStacks', 'OpsWorks', Promise.reject(result), true, mock)
  },
  describeTimeBasedAutoScaling: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeTimeBasedAutoScaling', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  describeTimeBasedAutoScalingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeTimeBasedAutoScaling', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  describeTimeBasedAutoScalingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeTimeBasedAutoScaling', 'OpsWorks', Promise.reject(result), true, mock)
  },
  describeUserProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeUserProfiles', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  describeUserProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeUserProfiles', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  describeUserProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeUserProfiles', 'OpsWorks', Promise.reject(result), true, mock)
  },
  describeVolumes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeVolumes', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  describeVolumesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeVolumes', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  describeVolumesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'describeVolumes', 'OpsWorks', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'destroy', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'destroy', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'destroy', 'OpsWorks', Promise.reject(result), true, mock)
  },
  detachElasticLoadBalancer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'detachElasticLoadBalancer', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  detachElasticLoadBalancerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'detachElasticLoadBalancer', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  detachElasticLoadBalancerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'detachElasticLoadBalancer', 'OpsWorks', Promise.reject(result), true, mock)
  },
  disassociateElasticIp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'disassociateElasticIp', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  disassociateElasticIpAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'disassociateElasticIp', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  disassociateElasticIpThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'disassociateElasticIp', 'OpsWorks', Promise.reject(result), true, mock)
  },
  getHostnameSuggestion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'getHostnameSuggestion', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  getHostnameSuggestionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'getHostnameSuggestion', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  getHostnameSuggestionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'getHostnameSuggestion', 'OpsWorks', Promise.reject(result), true, mock)
  },
  grantAccess: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'grantAccess', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  grantAccessAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'grantAccess', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  grantAccessThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'grantAccess', 'OpsWorks', Promise.reject(result), true, mock)
  },
  listTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'listTags', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  listTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'listTags', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  listTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'listTags', 'OpsWorks', Promise.reject(result), true, mock)
  },
  rebootInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'rebootInstance', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  rebootInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'rebootInstance', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  rebootInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'rebootInstance', 'OpsWorks', Promise.reject(result), true, mock)
  },
  registerEcsCluster: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'registerEcsCluster', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  registerEcsClusterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'registerEcsCluster', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  registerEcsClusterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'registerEcsCluster', 'OpsWorks', Promise.reject(result), true, mock)
  },
  registerElasticIp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'registerElasticIp', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  registerElasticIpAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'registerElasticIp', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  registerElasticIpThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'registerElasticIp', 'OpsWorks', Promise.reject(result), true, mock)
  },
  registerInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'registerInstance', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  registerInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'registerInstance', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  registerInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'registerInstance', 'OpsWorks', Promise.reject(result), true, mock)
  },
  registerRdsDbInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'registerRdsDbInstance', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  registerRdsDbInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'registerRdsDbInstance', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  registerRdsDbInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'registerRdsDbInstance', 'OpsWorks', Promise.reject(result), true, mock)
  },
  registerVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'registerVolume', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  registerVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'registerVolume', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  registerVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'registerVolume', 'OpsWorks', Promise.reject(result), true, mock)
  },
  setLoadBasedAutoScaling: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'setLoadBasedAutoScaling', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  setLoadBasedAutoScalingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'setLoadBasedAutoScaling', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  setLoadBasedAutoScalingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'setLoadBasedAutoScaling', 'OpsWorks', Promise.reject(result), true, mock)
  },
  setPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'setPermission', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  setPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'setPermission', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  setPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'setPermission', 'OpsWorks', Promise.reject(result), true, mock)
  },
  setTimeBasedAutoScaling: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'setTimeBasedAutoScaling', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  setTimeBasedAutoScalingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'setTimeBasedAutoScaling', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  setTimeBasedAutoScalingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'setTimeBasedAutoScaling', 'OpsWorks', Promise.reject(result), true, mock)
  },
  startInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'startInstance', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  startInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'startInstance', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  startInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'startInstance', 'OpsWorks', Promise.reject(result), true, mock)
  },
  startStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'startStack', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  startStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'startStack', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  startStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'startStack', 'OpsWorks', Promise.reject(result), true, mock)
  },
  stopInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'stopInstance', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  stopInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'stopInstance', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  stopInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'stopInstance', 'OpsWorks', Promise.reject(result), true, mock)
  },
  stopStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'stopStack', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  stopStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'stopStack', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  stopStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'stopStack', 'OpsWorks', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'tagResource', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'tagResource', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'tagResource', 'OpsWorks', Promise.reject(result), true, mock)
  },
  unassignInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'unassignInstance', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  unassignInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'unassignInstance', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  unassignInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'unassignInstance', 'OpsWorks', Promise.reject(result), true, mock)
  },
  unassignVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'unassignVolume', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  unassignVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'unassignVolume', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  unassignVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'unassignVolume', 'OpsWorks', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'untagResource', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'untagResource', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'untagResource', 'OpsWorks', Promise.reject(result), true, mock)
  },
  updateApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateApp', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  updateAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateApp', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  updateAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateApp', 'OpsWorks', Promise.reject(result), true, mock)
  },
  updateElasticIp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateElasticIp', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  updateElasticIpAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateElasticIp', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  updateElasticIpThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateElasticIp', 'OpsWorks', Promise.reject(result), true, mock)
  },
  updateInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateInstance', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  updateInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateInstance', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  updateInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateInstance', 'OpsWorks', Promise.reject(result), true, mock)
  },
  updateLayer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateLayer', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  updateLayerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateLayer', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  updateLayerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateLayer', 'OpsWorks', Promise.reject(result), true, mock)
  },
  updateMyUserProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateMyUserProfile', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  updateMyUserProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateMyUserProfile', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  updateMyUserProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateMyUserProfile', 'OpsWorks', Promise.reject(result), true, mock)
  },
  updateRdsDbInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateRdsDbInstance', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  updateRdsDbInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateRdsDbInstance', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  updateRdsDbInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateRdsDbInstance', 'OpsWorks', Promise.reject(result), true, mock)
  },
  updateStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateStack', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  updateStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateStack', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  updateStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateStack', 'OpsWorks', Promise.reject(result), true, mock)
  },
  updateUserProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateUserProfile', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  updateUserProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateUserProfile', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  updateUserProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateUserProfile', 'OpsWorks', Promise.reject(result), true, mock)
  },
  updateVolume: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateVolume', 'OpsWorks', Promise.resolve(result), true, mock)
  },
  updateVolumeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateVolume', 'OpsWorks', Promise.resolve(result), false, mock)
  },
  updateVolumeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'updateVolume', 'OpsWorks', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'send', 'OpsWorksClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'send', 'OpsWorksClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-opsworks', 'send', 'OpsWorksClient', Promise.reject(result), true, mock)
  }
}