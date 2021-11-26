
/**
* @description mocks_v2:mockAutoScaling.ts module is mocks for AWS-SDK V2
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

import {attachMock} from './common'
export const mockAutoScaling = {
  attachInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachInstances', 'AutoScaling', result, true, true, mock)
  },
  attachInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachInstances', 'AutoScaling', result, false, true, mock)
  },
  attachInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachInstances', 'AutoScaling', result, true, false, mock)
  },
  attachLoadBalancerTargetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachLoadBalancerTargetGroups', 'AutoScaling', result, true, true, mock)
  },
  attachLoadBalancerTargetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachLoadBalancerTargetGroups', 'AutoScaling', result, false, true, mock)
  },
  attachLoadBalancerTargetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachLoadBalancerTargetGroups', 'AutoScaling', result, true, false, mock)
  },
  attachLoadBalancers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachLoadBalancers', 'AutoScaling', result, true, true, mock)
  },
  attachLoadBalancersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachLoadBalancers', 'AutoScaling', result, false, true, mock)
  },
  attachLoadBalancersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('attachLoadBalancers', 'AutoScaling', result, true, false, mock)
  },
  batchDeleteScheduledAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteScheduledAction', 'AutoScaling', result, true, true, mock)
  },
  batchDeleteScheduledActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteScheduledAction', 'AutoScaling', result, false, true, mock)
  },
  batchDeleteScheduledActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDeleteScheduledAction', 'AutoScaling', result, true, false, mock)
  },
  batchPutScheduledUpdateGroupAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchPutScheduledUpdateGroupAction', 'AutoScaling', result, true, true, mock)
  },
  batchPutScheduledUpdateGroupActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchPutScheduledUpdateGroupAction', 'AutoScaling', result, false, true, mock)
  },
  batchPutScheduledUpdateGroupActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchPutScheduledUpdateGroupAction', 'AutoScaling', result, true, false, mock)
  },
  cancelInstanceRefresh: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelInstanceRefresh', 'AutoScaling', result, true, true, mock)
  },
  cancelInstanceRefreshAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelInstanceRefresh', 'AutoScaling', result, false, true, mock)
  },
  cancelInstanceRefreshThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelInstanceRefresh', 'AutoScaling', result, true, false, mock)
  },
  completeLifecycleAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeLifecycleAction', 'AutoScaling', result, true, true, mock)
  },
  completeLifecycleActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeLifecycleAction', 'AutoScaling', result, false, true, mock)
  },
  completeLifecycleActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('completeLifecycleAction', 'AutoScaling', result, true, false, mock)
  },
  createAutoScalingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAutoScalingGroup', 'AutoScaling', result, true, true, mock)
  },
  createAutoScalingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAutoScalingGroup', 'AutoScaling', result, false, true, mock)
  },
  createAutoScalingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAutoScalingGroup', 'AutoScaling', result, true, false, mock)
  },
  createLaunchConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLaunchConfiguration', 'AutoScaling', result, true, true, mock)
  },
  createLaunchConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLaunchConfiguration', 'AutoScaling', result, false, true, mock)
  },
  createLaunchConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLaunchConfiguration', 'AutoScaling', result, true, false, mock)
  },
  createOrUpdateTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOrUpdateTags', 'AutoScaling', result, true, true, mock)
  },
  createOrUpdateTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOrUpdateTags', 'AutoScaling', result, false, true, mock)
  },
  createOrUpdateTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOrUpdateTags', 'AutoScaling', result, true, false, mock)
  },
  deleteAutoScalingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAutoScalingGroup', 'AutoScaling', result, true, true, mock)
  },
  deleteAutoScalingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAutoScalingGroup', 'AutoScaling', result, false, true, mock)
  },
  deleteAutoScalingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAutoScalingGroup', 'AutoScaling', result, true, false, mock)
  },
  deleteLaunchConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLaunchConfiguration', 'AutoScaling', result, true, true, mock)
  },
  deleteLaunchConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLaunchConfiguration', 'AutoScaling', result, false, true, mock)
  },
  deleteLaunchConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLaunchConfiguration', 'AutoScaling', result, true, false, mock)
  },
  deleteLifecycleHook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLifecycleHook', 'AutoScaling', result, true, true, mock)
  },
  deleteLifecycleHookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLifecycleHook', 'AutoScaling', result, false, true, mock)
  },
  deleteLifecycleHookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLifecycleHook', 'AutoScaling', result, true, false, mock)
  },
  deleteNotificationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNotificationConfiguration', 'AutoScaling', result, true, true, mock)
  },
  deleteNotificationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNotificationConfiguration', 'AutoScaling', result, false, true, mock)
  },
  deleteNotificationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNotificationConfiguration', 'AutoScaling', result, true, false, mock)
  },
  deletePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePolicy', 'AutoScaling', result, true, true, mock)
  },
  deletePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePolicy', 'AutoScaling', result, false, true, mock)
  },
  deletePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePolicy', 'AutoScaling', result, true, false, mock)
  },
  deleteScheduledAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteScheduledAction', 'AutoScaling', result, true, true, mock)
  },
  deleteScheduledActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteScheduledAction', 'AutoScaling', result, false, true, mock)
  },
  deleteScheduledActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteScheduledAction', 'AutoScaling', result, true, false, mock)
  },
  deleteTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTags', 'AutoScaling', result, true, true, mock)
  },
  deleteTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTags', 'AutoScaling', result, false, true, mock)
  },
  deleteTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteTags', 'AutoScaling', result, true, false, mock)
  },
  deleteWarmPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWarmPool', 'AutoScaling', result, true, true, mock)
  },
  deleteWarmPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWarmPool', 'AutoScaling', result, false, true, mock)
  },
  deleteWarmPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWarmPool', 'AutoScaling', result, true, false, mock)
  },
  describeAccountLimits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountLimits', 'AutoScaling', result, true, true, mock)
  },
  describeAccountLimitsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountLimits', 'AutoScaling', result, false, true, mock)
  },
  describeAccountLimitsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAccountLimits', 'AutoScaling', result, true, false, mock)
  },
  describeAdjustmentTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAdjustmentTypes', 'AutoScaling', result, true, true, mock)
  },
  describeAdjustmentTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAdjustmentTypes', 'AutoScaling', result, false, true, mock)
  },
  describeAdjustmentTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAdjustmentTypes', 'AutoScaling', result, true, false, mock)
  },
  describeAutoScalingGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAutoScalingGroups', 'AutoScaling', result, true, true, mock)
  },
  describeAutoScalingGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAutoScalingGroups', 'AutoScaling', result, false, true, mock)
  },
  describeAutoScalingGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAutoScalingGroups', 'AutoScaling', result, true, false, mock)
  },
  describeAutoScalingInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAutoScalingInstances', 'AutoScaling', result, true, true, mock)
  },
  describeAutoScalingInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAutoScalingInstances', 'AutoScaling', result, false, true, mock)
  },
  describeAutoScalingInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAutoScalingInstances', 'AutoScaling', result, true, false, mock)
  },
  describeAutoScalingNotificationTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAutoScalingNotificationTypes', 'AutoScaling', result, true, true, mock)
  },
  describeAutoScalingNotificationTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAutoScalingNotificationTypes', 'AutoScaling', result, false, true, mock)
  },
  describeAutoScalingNotificationTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAutoScalingNotificationTypes', 'AutoScaling', result, true, false, mock)
  },
  describeInstanceRefreshes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstanceRefreshes', 'AutoScaling', result, true, true, mock)
  },
  describeInstanceRefreshesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstanceRefreshes', 'AutoScaling', result, false, true, mock)
  },
  describeInstanceRefreshesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstanceRefreshes', 'AutoScaling', result, true, false, mock)
  },
  describeLaunchConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLaunchConfigurations', 'AutoScaling', result, true, true, mock)
  },
  describeLaunchConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLaunchConfigurations', 'AutoScaling', result, false, true, mock)
  },
  describeLaunchConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLaunchConfigurations', 'AutoScaling', result, true, false, mock)
  },
  describeLifecycleHookTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLifecycleHookTypes', 'AutoScaling', result, true, true, mock)
  },
  describeLifecycleHookTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLifecycleHookTypes', 'AutoScaling', result, false, true, mock)
  },
  describeLifecycleHookTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLifecycleHookTypes', 'AutoScaling', result, true, false, mock)
  },
  describeLifecycleHooks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLifecycleHooks', 'AutoScaling', result, true, true, mock)
  },
  describeLifecycleHooksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLifecycleHooks', 'AutoScaling', result, false, true, mock)
  },
  describeLifecycleHooksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLifecycleHooks', 'AutoScaling', result, true, false, mock)
  },
  describeLoadBalancerTargetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLoadBalancerTargetGroups', 'AutoScaling', result, true, true, mock)
  },
  describeLoadBalancerTargetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLoadBalancerTargetGroups', 'AutoScaling', result, false, true, mock)
  },
  describeLoadBalancerTargetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLoadBalancerTargetGroups', 'AutoScaling', result, true, false, mock)
  },
  describeLoadBalancers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLoadBalancers', 'AutoScaling', result, true, true, mock)
  },
  describeLoadBalancersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLoadBalancers', 'AutoScaling', result, false, true, mock)
  },
  describeLoadBalancersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeLoadBalancers', 'AutoScaling', result, true, false, mock)
  },
  describeMetricCollectionTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMetricCollectionTypes', 'AutoScaling', result, true, true, mock)
  },
  describeMetricCollectionTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMetricCollectionTypes', 'AutoScaling', result, false, true, mock)
  },
  describeMetricCollectionTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMetricCollectionTypes', 'AutoScaling', result, true, false, mock)
  },
  describeNotificationConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNotificationConfigurations', 'AutoScaling', result, true, true, mock)
  },
  describeNotificationConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNotificationConfigurations', 'AutoScaling', result, false, true, mock)
  },
  describeNotificationConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNotificationConfigurations', 'AutoScaling', result, true, false, mock)
  },
  describePolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePolicies', 'AutoScaling', result, true, true, mock)
  },
  describePoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePolicies', 'AutoScaling', result, false, true, mock)
  },
  describePoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePolicies', 'AutoScaling', result, true, false, mock)
  },
  describeScalingActivities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalingActivities', 'AutoScaling', result, true, true, mock)
  },
  describeScalingActivitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalingActivities', 'AutoScaling', result, false, true, mock)
  },
  describeScalingActivitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalingActivities', 'AutoScaling', result, true, false, mock)
  },
  describeScalingProcessTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalingProcessTypes', 'AutoScaling', result, true, true, mock)
  },
  describeScalingProcessTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalingProcessTypes', 'AutoScaling', result, false, true, mock)
  },
  describeScalingProcessTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalingProcessTypes', 'AutoScaling', result, true, false, mock)
  },
  describeScheduledActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScheduledActions', 'AutoScaling', result, true, true, mock)
  },
  describeScheduledActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScheduledActions', 'AutoScaling', result, false, true, mock)
  },
  describeScheduledActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScheduledActions', 'AutoScaling', result, true, false, mock)
  },
  describeTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTags', 'AutoScaling', result, true, true, mock)
  },
  describeTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTags', 'AutoScaling', result, false, true, mock)
  },
  describeTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTags', 'AutoScaling', result, true, false, mock)
  },
  describeTerminationPolicyTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTerminationPolicyTypes', 'AutoScaling', result, true, true, mock)
  },
  describeTerminationPolicyTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTerminationPolicyTypes', 'AutoScaling', result, false, true, mock)
  },
  describeTerminationPolicyTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeTerminationPolicyTypes', 'AutoScaling', result, true, false, mock)
  },
  describeWarmPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWarmPool', 'AutoScaling', result, true, true, mock)
  },
  describeWarmPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWarmPool', 'AutoScaling', result, false, true, mock)
  },
  describeWarmPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeWarmPool', 'AutoScaling', result, true, false, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AutoScaling', result, true, true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AutoScaling', result, false, true, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AutoScaling', result, true, false, mock)
  },
  detachInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachInstances', 'AutoScaling', result, true, true, mock)
  },
  detachInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachInstances', 'AutoScaling', result, false, true, mock)
  },
  detachInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachInstances', 'AutoScaling', result, true, false, mock)
  },
  detachLoadBalancerTargetGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachLoadBalancerTargetGroups', 'AutoScaling', result, true, true, mock)
  },
  detachLoadBalancerTargetGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachLoadBalancerTargetGroups', 'AutoScaling', result, false, true, mock)
  },
  detachLoadBalancerTargetGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachLoadBalancerTargetGroups', 'AutoScaling', result, true, false, mock)
  },
  detachLoadBalancers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachLoadBalancers', 'AutoScaling', result, true, true, mock)
  },
  detachLoadBalancersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachLoadBalancers', 'AutoScaling', result, false, true, mock)
  },
  detachLoadBalancersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('detachLoadBalancers', 'AutoScaling', result, true, false, mock)
  },
  disableMetricsCollection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableMetricsCollection', 'AutoScaling', result, true, true, mock)
  },
  disableMetricsCollectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableMetricsCollection', 'AutoScaling', result, false, true, mock)
  },
  disableMetricsCollectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableMetricsCollection', 'AutoScaling', result, true, false, mock)
  },
  enableMetricsCollection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableMetricsCollection', 'AutoScaling', result, true, true, mock)
  },
  enableMetricsCollectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableMetricsCollection', 'AutoScaling', result, false, true, mock)
  },
  enableMetricsCollectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableMetricsCollection', 'AutoScaling', result, true, false, mock)
  },
  enterStandby: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enterStandby', 'AutoScaling', result, true, true, mock)
  },
  enterStandbyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enterStandby', 'AutoScaling', result, false, true, mock)
  },
  enterStandbyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enterStandby', 'AutoScaling', result, true, false, mock)
  },
  executePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executePolicy', 'AutoScaling', result, true, true, mock)
  },
  executePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executePolicy', 'AutoScaling', result, false, true, mock)
  },
  executePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('executePolicy', 'AutoScaling', result, true, false, mock)
  },
  exitStandby: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exitStandby', 'AutoScaling', result, true, true, mock)
  },
  exitStandbyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exitStandby', 'AutoScaling', result, false, true, mock)
  },
  exitStandbyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exitStandby', 'AutoScaling', result, true, false, mock)
  },
  getPredictiveScalingForecast: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPredictiveScalingForecast', 'AutoScaling', result, true, true, mock)
  },
  getPredictiveScalingForecastAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPredictiveScalingForecast', 'AutoScaling', result, false, true, mock)
  },
  getPredictiveScalingForecastThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPredictiveScalingForecast', 'AutoScaling', result, true, false, mock)
  },
  putLifecycleHook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLifecycleHook', 'AutoScaling', result, true, true, mock)
  },
  putLifecycleHookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLifecycleHook', 'AutoScaling', result, false, true, mock)
  },
  putLifecycleHookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putLifecycleHook', 'AutoScaling', result, true, false, mock)
  },
  putNotificationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putNotificationConfiguration', 'AutoScaling', result, true, true, mock)
  },
  putNotificationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putNotificationConfiguration', 'AutoScaling', result, false, true, mock)
  },
  putNotificationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putNotificationConfiguration', 'AutoScaling', result, true, false, mock)
  },
  putScalingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putScalingPolicy', 'AutoScaling', result, true, true, mock)
  },
  putScalingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putScalingPolicy', 'AutoScaling', result, false, true, mock)
  },
  putScalingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putScalingPolicy', 'AutoScaling', result, true, false, mock)
  },
  putScheduledUpdateGroupAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putScheduledUpdateGroupAction', 'AutoScaling', result, true, true, mock)
  },
  putScheduledUpdateGroupActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putScheduledUpdateGroupAction', 'AutoScaling', result, false, true, mock)
  },
  putScheduledUpdateGroupActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putScheduledUpdateGroupAction', 'AutoScaling', result, true, false, mock)
  },
  putWarmPool: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putWarmPool', 'AutoScaling', result, true, true, mock)
  },
  putWarmPoolAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putWarmPool', 'AutoScaling', result, false, true, mock)
  },
  putWarmPoolThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putWarmPool', 'AutoScaling', result, true, false, mock)
  },
  recordLifecycleActionHeartbeat: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recordLifecycleActionHeartbeat', 'AutoScaling', result, true, true, mock)
  },
  recordLifecycleActionHeartbeatAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recordLifecycleActionHeartbeat', 'AutoScaling', result, false, true, mock)
  },
  recordLifecycleActionHeartbeatThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('recordLifecycleActionHeartbeat', 'AutoScaling', result, true, false, mock)
  },
  resumeProcesses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resumeProcesses', 'AutoScaling', result, true, true, mock)
  },
  resumeProcessesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resumeProcesses', 'AutoScaling', result, false, true, mock)
  },
  resumeProcessesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resumeProcesses', 'AutoScaling', result, true, false, mock)
  },
  setDesiredCapacity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setDesiredCapacity', 'AutoScaling', result, true, true, mock)
  },
  setDesiredCapacityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setDesiredCapacity', 'AutoScaling', result, false, true, mock)
  },
  setDesiredCapacityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setDesiredCapacity', 'AutoScaling', result, true, false, mock)
  },
  setInstanceHealth: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setInstanceHealth', 'AutoScaling', result, true, true, mock)
  },
  setInstanceHealthAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setInstanceHealth', 'AutoScaling', result, false, true, mock)
  },
  setInstanceHealthThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setInstanceHealth', 'AutoScaling', result, true, false, mock)
  },
  setInstanceProtection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setInstanceProtection', 'AutoScaling', result, true, true, mock)
  },
  setInstanceProtectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setInstanceProtection', 'AutoScaling', result, false, true, mock)
  },
  setInstanceProtectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('setInstanceProtection', 'AutoScaling', result, true, false, mock)
  },
  startInstanceRefresh: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startInstanceRefresh', 'AutoScaling', result, true, true, mock)
  },
  startInstanceRefreshAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startInstanceRefresh', 'AutoScaling', result, false, true, mock)
  },
  startInstanceRefreshThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startInstanceRefresh', 'AutoScaling', result, true, false, mock)
  },
  suspendProcesses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('suspendProcesses', 'AutoScaling', result, true, true, mock)
  },
  suspendProcessesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('suspendProcesses', 'AutoScaling', result, false, true, mock)
  },
  suspendProcessesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('suspendProcesses', 'AutoScaling', result, true, false, mock)
  },
  terminateInstanceInAutoScalingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateInstanceInAutoScalingGroup', 'AutoScaling', result, true, true, mock)
  },
  terminateInstanceInAutoScalingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateInstanceInAutoScalingGroup', 'AutoScaling', result, false, true, mock)
  },
  terminateInstanceInAutoScalingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateInstanceInAutoScalingGroup', 'AutoScaling', result, true, false, mock)
  },
  updateAutoScalingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAutoScalingGroup', 'AutoScaling', result, true, true, mock)
  },
  updateAutoScalingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAutoScalingGroup', 'AutoScaling', result, false, true, mock)
  },
  updateAutoScalingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAutoScalingGroup', 'AutoScaling', result, true, false, mock)
  },
}
