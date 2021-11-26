
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
  export const mockApplicationAutoScaling = {
  deleteScalingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteScalingPolicy', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  deleteScalingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteScalingPolicy', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  deleteScalingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteScalingPolicy', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  deleteScheduledAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteScheduledAction', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  deleteScheduledActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteScheduledAction', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  deleteScheduledActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteScheduledAction', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  deregisterScalableTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterScalableTarget', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  deregisterScalableTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterScalableTarget', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  deregisterScalableTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterScalableTarget', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  describeScalableTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalableTargets', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  describeScalableTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalableTargets', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  describeScalableTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalableTargets', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  describeScalingActivities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalingActivities', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  describeScalingActivitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalingActivities', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  describeScalingActivitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalingActivities', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  describeScalingPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalingPolicies', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  describeScalingPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalingPolicies', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  describeScalingPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalingPolicies', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  describeScheduledActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScheduledActions', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  describeScheduledActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScheduledActions', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  describeScheduledActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScheduledActions', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  putScalingPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putScalingPolicy', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  putScalingPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putScalingPolicy', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  putScalingPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putScalingPolicy', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  putScheduledAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putScheduledAction', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  putScheduledActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putScheduledAction', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  putScheduledActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putScheduledAction', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
  registerScalableTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerScalableTarget', 'ApplicationAutoScaling', Promise.resolve(result), true, mock)
  },
  registerScalableTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerScalableTarget', 'ApplicationAutoScaling', Promise.resolve(result), false, mock)
  },
  registerScalableTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerScalableTarget', 'ApplicationAutoScaling', Promise.reject(result), true, mock)
  },
}
