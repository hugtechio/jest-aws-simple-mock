
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockAutoScaling = {
  attachInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'attachInstances', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  attachInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'attachInstances', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  attachInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'attachInstances', 'AutoScaling', Promise.reject(result), true, mock)
  },
  attachLoadBalancerTargetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'attachLoadBalancerTargetGroups', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  attachLoadBalancerTargetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'attachLoadBalancerTargetGroups', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  attachLoadBalancerTargetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'attachLoadBalancerTargetGroups', 'AutoScaling', Promise.reject(result), true, mock)
  },
  attachLoadBalancers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'attachLoadBalancers', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  attachLoadBalancersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'attachLoadBalancers', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  attachLoadBalancersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'attachLoadBalancers', 'AutoScaling', Promise.reject(result), true, mock)
  },
  batchDeleteScheduledAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'batchDeleteScheduledAction', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  batchDeleteScheduledActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'batchDeleteScheduledAction', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  batchDeleteScheduledActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'batchDeleteScheduledAction', 'AutoScaling', Promise.reject(result), true, mock)
  },
  batchPutScheduledUpdateGroupAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'batchPutScheduledUpdateGroupAction', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  batchPutScheduledUpdateGroupActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'batchPutScheduledUpdateGroupAction', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  batchPutScheduledUpdateGroupActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'batchPutScheduledUpdateGroupAction', 'AutoScaling', Promise.reject(result), true, mock)
  },
  cancelInstanceRefresh: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'cancelInstanceRefresh', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  cancelInstanceRefreshAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'cancelInstanceRefresh', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  cancelInstanceRefreshThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'cancelInstanceRefresh', 'AutoScaling', Promise.reject(result), true, mock)
  },
  completeLifecycleAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'completeLifecycleAction', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  completeLifecycleActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'completeLifecycleAction', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  completeLifecycleActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'completeLifecycleAction', 'AutoScaling', Promise.reject(result), true, mock)
  },
  createAutoScalingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'createAutoScalingGroup', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  createAutoScalingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'createAutoScalingGroup', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  createAutoScalingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'createAutoScalingGroup', 'AutoScaling', Promise.reject(result), true, mock)
  },
  createLaunchConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'createLaunchConfiguration', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  createLaunchConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'createLaunchConfiguration', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  createLaunchConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'createLaunchConfiguration', 'AutoScaling', Promise.reject(result), true, mock)
  },
  createOrUpdateTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'createOrUpdateTags', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  createOrUpdateTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'createOrUpdateTags', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  createOrUpdateTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'createOrUpdateTags', 'AutoScaling', Promise.reject(result), true, mock)
  },
  deleteAutoScalingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deleteAutoScalingGroup', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  deleteAutoScalingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deleteAutoScalingGroup', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  deleteAutoScalingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deleteAutoScalingGroup', 'AutoScaling', Promise.reject(result), true, mock)
  },
  deleteLaunchConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deleteLaunchConfiguration', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  deleteLaunchConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deleteLaunchConfiguration', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  deleteLaunchConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deleteLaunchConfiguration', 'AutoScaling', Promise.reject(result), true, mock)
  },
  deleteLifecycleHook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deleteLifecycleHook', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  deleteLifecycleHookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deleteLifecycleHook', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  deleteLifecycleHookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deleteLifecycleHook', 'AutoScaling', Promise.reject(result), true, mock)
  },
  deleteNotificationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deleteNotificationConfiguration', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  deleteNotificationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deleteNotificationConfiguration', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  deleteNotificationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deleteNotificationConfiguration', 'AutoScaling', Promise.reject(result), true, mock)
  },
  deletePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deletePolicy', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  deletePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deletePolicy', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  deletePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deletePolicy', 'AutoScaling', Promise.reject(result), true, mock)
  },
  deleteScheduledAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deleteScheduledAction', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  deleteScheduledActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deleteScheduledAction', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  deleteScheduledActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deleteScheduledAction', 'AutoScaling', Promise.reject(result), true, mock)
  },
  deleteTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deleteTags', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  deleteTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deleteTags', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  deleteTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deleteTags', 'AutoScaling', Promise.reject(result), true, mock)
  },
  deleteWarmPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deleteWarmPool', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  deleteWarmPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deleteWarmPool', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  deleteWarmPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'deleteWarmPool', 'AutoScaling', Promise.reject(result), true, mock)
  },
  describeAccountLimits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeAccountLimits', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  describeAccountLimitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeAccountLimits', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  describeAccountLimitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeAccountLimits', 'AutoScaling', Promise.reject(result), true, mock)
  },
  describeAdjustmentTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeAdjustmentTypes', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  describeAdjustmentTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeAdjustmentTypes', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  describeAdjustmentTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeAdjustmentTypes', 'AutoScaling', Promise.reject(result), true, mock)
  },
  describeAutoScalingGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeAutoScalingGroups', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  describeAutoScalingGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeAutoScalingGroups', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  describeAutoScalingGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeAutoScalingGroups', 'AutoScaling', Promise.reject(result), true, mock)
  },
  describeAutoScalingInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeAutoScalingInstances', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  describeAutoScalingInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeAutoScalingInstances', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  describeAutoScalingInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeAutoScalingInstances', 'AutoScaling', Promise.reject(result), true, mock)
  },
  describeAutoScalingNotificationTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeAutoScalingNotificationTypes', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  describeAutoScalingNotificationTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeAutoScalingNotificationTypes', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  describeAutoScalingNotificationTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeAutoScalingNotificationTypes', 'AutoScaling', Promise.reject(result), true, mock)
  },
  describeInstanceRefreshes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeInstanceRefreshes', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  describeInstanceRefreshesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeInstanceRefreshes', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  describeInstanceRefreshesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeInstanceRefreshes', 'AutoScaling', Promise.reject(result), true, mock)
  },
  describeLaunchConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeLaunchConfigurations', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  describeLaunchConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeLaunchConfigurations', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  describeLaunchConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeLaunchConfigurations', 'AutoScaling', Promise.reject(result), true, mock)
  },
  describeLifecycleHookTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeLifecycleHookTypes', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  describeLifecycleHookTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeLifecycleHookTypes', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  describeLifecycleHookTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeLifecycleHookTypes', 'AutoScaling', Promise.reject(result), true, mock)
  },
  describeLifecycleHooks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeLifecycleHooks', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  describeLifecycleHooksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeLifecycleHooks', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  describeLifecycleHooksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeLifecycleHooks', 'AutoScaling', Promise.reject(result), true, mock)
  },
  describeLoadBalancerTargetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeLoadBalancerTargetGroups', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  describeLoadBalancerTargetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeLoadBalancerTargetGroups', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  describeLoadBalancerTargetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeLoadBalancerTargetGroups', 'AutoScaling', Promise.reject(result), true, mock)
  },
  describeLoadBalancers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeLoadBalancers', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  describeLoadBalancersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeLoadBalancers', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  describeLoadBalancersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeLoadBalancers', 'AutoScaling', Promise.reject(result), true, mock)
  },
  describeMetricCollectionTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeMetricCollectionTypes', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  describeMetricCollectionTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeMetricCollectionTypes', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  describeMetricCollectionTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeMetricCollectionTypes', 'AutoScaling', Promise.reject(result), true, mock)
  },
  describeNotificationConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeNotificationConfigurations', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  describeNotificationConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeNotificationConfigurations', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  describeNotificationConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeNotificationConfigurations', 'AutoScaling', Promise.reject(result), true, mock)
  },
  describePolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describePolicies', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  describePoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describePolicies', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  describePoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describePolicies', 'AutoScaling', Promise.reject(result), true, mock)
  },
  describeScalingActivities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeScalingActivities', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  describeScalingActivitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeScalingActivities', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  describeScalingActivitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeScalingActivities', 'AutoScaling', Promise.reject(result), true, mock)
  },
  describeScalingProcessTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeScalingProcessTypes', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  describeScalingProcessTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeScalingProcessTypes', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  describeScalingProcessTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeScalingProcessTypes', 'AutoScaling', Promise.reject(result), true, mock)
  },
  describeScheduledActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeScheduledActions', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  describeScheduledActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeScheduledActions', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  describeScheduledActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeScheduledActions', 'AutoScaling', Promise.reject(result), true, mock)
  },
  describeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeTags', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  describeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeTags', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  describeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeTags', 'AutoScaling', Promise.reject(result), true, mock)
  },
  describeTerminationPolicyTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeTerminationPolicyTypes', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  describeTerminationPolicyTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeTerminationPolicyTypes', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  describeTerminationPolicyTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeTerminationPolicyTypes', 'AutoScaling', Promise.reject(result), true, mock)
  },
  describeWarmPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeWarmPool', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  describeWarmPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeWarmPool', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  describeWarmPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'describeWarmPool', 'AutoScaling', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'destroy', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'destroy', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'destroy', 'AutoScaling', Promise.reject(result), true, mock)
  },
  detachInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'detachInstances', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  detachInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'detachInstances', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  detachInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'detachInstances', 'AutoScaling', Promise.reject(result), true, mock)
  },
  detachLoadBalancerTargetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'detachLoadBalancerTargetGroups', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  detachLoadBalancerTargetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'detachLoadBalancerTargetGroups', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  detachLoadBalancerTargetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'detachLoadBalancerTargetGroups', 'AutoScaling', Promise.reject(result), true, mock)
  },
  detachLoadBalancers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'detachLoadBalancers', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  detachLoadBalancersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'detachLoadBalancers', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  detachLoadBalancersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'detachLoadBalancers', 'AutoScaling', Promise.reject(result), true, mock)
  },
  disableMetricsCollection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'disableMetricsCollection', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  disableMetricsCollectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'disableMetricsCollection', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  disableMetricsCollectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'disableMetricsCollection', 'AutoScaling', Promise.reject(result), true, mock)
  },
  enableMetricsCollection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'enableMetricsCollection', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  enableMetricsCollectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'enableMetricsCollection', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  enableMetricsCollectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'enableMetricsCollection', 'AutoScaling', Promise.reject(result), true, mock)
  },
  enterStandby: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'enterStandby', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  enterStandbyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'enterStandby', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  enterStandbyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'enterStandby', 'AutoScaling', Promise.reject(result), true, mock)
  },
  executePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'executePolicy', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  executePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'executePolicy', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  executePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'executePolicy', 'AutoScaling', Promise.reject(result), true, mock)
  },
  exitStandby: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'exitStandby', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  exitStandbyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'exitStandby', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  exitStandbyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'exitStandby', 'AutoScaling', Promise.reject(result), true, mock)
  },
  getPredictiveScalingForecast: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'getPredictiveScalingForecast', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  getPredictiveScalingForecastAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'getPredictiveScalingForecast', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  getPredictiveScalingForecastThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'getPredictiveScalingForecast', 'AutoScaling', Promise.reject(result), true, mock)
  },
  putLifecycleHook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'putLifecycleHook', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  putLifecycleHookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'putLifecycleHook', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  putLifecycleHookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'putLifecycleHook', 'AutoScaling', Promise.reject(result), true, mock)
  },
  putNotificationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'putNotificationConfiguration', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  putNotificationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'putNotificationConfiguration', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  putNotificationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'putNotificationConfiguration', 'AutoScaling', Promise.reject(result), true, mock)
  },
  putScalingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'putScalingPolicy', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  putScalingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'putScalingPolicy', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  putScalingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'putScalingPolicy', 'AutoScaling', Promise.reject(result), true, mock)
  },
  putScheduledUpdateGroupAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'putScheduledUpdateGroupAction', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  putScheduledUpdateGroupActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'putScheduledUpdateGroupAction', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  putScheduledUpdateGroupActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'putScheduledUpdateGroupAction', 'AutoScaling', Promise.reject(result), true, mock)
  },
  putWarmPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'putWarmPool', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  putWarmPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'putWarmPool', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  putWarmPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'putWarmPool', 'AutoScaling', Promise.reject(result), true, mock)
  },
  recordLifecycleActionHeartbeat: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'recordLifecycleActionHeartbeat', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  recordLifecycleActionHeartbeatAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'recordLifecycleActionHeartbeat', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  recordLifecycleActionHeartbeatThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'recordLifecycleActionHeartbeat', 'AutoScaling', Promise.reject(result), true, mock)
  },
  resumeProcesses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'resumeProcesses', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  resumeProcessesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'resumeProcesses', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  resumeProcessesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'resumeProcesses', 'AutoScaling', Promise.reject(result), true, mock)
  },
  setDesiredCapacity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'setDesiredCapacity', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  setDesiredCapacityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'setDesiredCapacity', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  setDesiredCapacityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'setDesiredCapacity', 'AutoScaling', Promise.reject(result), true, mock)
  },
  setInstanceHealth: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'setInstanceHealth', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  setInstanceHealthAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'setInstanceHealth', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  setInstanceHealthThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'setInstanceHealth', 'AutoScaling', Promise.reject(result), true, mock)
  },
  setInstanceProtection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'setInstanceProtection', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  setInstanceProtectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'setInstanceProtection', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  setInstanceProtectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'setInstanceProtection', 'AutoScaling', Promise.reject(result), true, mock)
  },
  startInstanceRefresh: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'startInstanceRefresh', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  startInstanceRefreshAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'startInstanceRefresh', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  startInstanceRefreshThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'startInstanceRefresh', 'AutoScaling', Promise.reject(result), true, mock)
  },
  suspendProcesses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'suspendProcesses', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  suspendProcessesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'suspendProcesses', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  suspendProcessesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'suspendProcesses', 'AutoScaling', Promise.reject(result), true, mock)
  },
  terminateInstanceInAutoScalingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'terminateInstanceInAutoScalingGroup', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  terminateInstanceInAutoScalingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'terminateInstanceInAutoScalingGroup', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  terminateInstanceInAutoScalingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'terminateInstanceInAutoScalingGroup', 'AutoScaling', Promise.reject(result), true, mock)
  },
  updateAutoScalingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'updateAutoScalingGroup', 'AutoScaling', Promise.resolve(result), true, mock)
  },
  updateAutoScalingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'updateAutoScalingGroup', 'AutoScaling', Promise.resolve(result), false, mock)
  },
  updateAutoScalingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'updateAutoScalingGroup', 'AutoScaling', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'send', 'AutoScalingClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'send', 'AutoScalingClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling', 'send', 'AutoScalingClient', Promise.reject(result), true, mock)
  }
}