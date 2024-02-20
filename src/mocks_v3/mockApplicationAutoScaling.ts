
/**
* @description mocks_v3:mockApplicationAutoScaling module is mocks for AWS-SDK V3
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
export const mockApplicationAutoScaling = {
  deleteScalingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'deleteScalingPolicy', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  deleteScalingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'deleteScalingPolicy', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  deleteScalingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'deleteScalingPolicy', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  deleteScheduledAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'deleteScheduledAction', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  deleteScheduledActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'deleteScheduledAction', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  deleteScheduledActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'deleteScheduledAction', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  deregisterScalableTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'deregisterScalableTarget', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  deregisterScalableTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'deregisterScalableTarget', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  deregisterScalableTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'deregisterScalableTarget', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  describeScalableTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'describeScalableTargets', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  describeScalableTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'describeScalableTargets', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  describeScalableTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'describeScalableTargets', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  describeScalingActivities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'describeScalingActivities', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  describeScalingActivitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'describeScalingActivities', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  describeScalingActivitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'describeScalingActivities', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  describeScalingPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'describeScalingPolicies', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  describeScalingPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'describeScalingPolicies', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  describeScalingPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'describeScalingPolicies', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  describeScheduledActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'describeScheduledActions', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  describeScheduledActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'describeScheduledActions', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  describeScheduledActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'describeScheduledActions', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'listTagsForResource', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'listTagsForResource', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'listTagsForResource', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  putScalingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'putScalingPolicy', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  putScalingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'putScalingPolicy', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  putScalingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'putScalingPolicy', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  putScheduledAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'putScheduledAction', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  putScheduledActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'putScheduledAction', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  putScheduledActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'putScheduledAction', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  registerScalableTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'registerScalableTarget', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  registerScalableTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'registerScalableTarget', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  registerScalableTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'registerScalableTarget', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'tagResource', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'tagResource', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'tagResource', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'untagResource', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'untagResource', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'untagResource', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'send', 'ApplicationAutoScalingClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'send', 'ApplicationAutoScalingClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-application-auto-scaling', 'send', 'ApplicationAutoScalingClient', Promise.reject(result), true, mock)
  }
}
