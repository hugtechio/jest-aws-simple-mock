
/**
* @description mocks_v3:mockAutoScalingPlans module is mocks for AWS-SDK V3
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

  export const mockAutoScalingPlans = {
  createScalingPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'createScalingPlan', 'AutoScalingPlans', Promise.resolve(result), true, mock)
  },
  createScalingPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'createScalingPlan', 'AutoScalingPlans', Promise.resolve(result), false, mock)
  },
  createScalingPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'createScalingPlan', 'AutoScalingPlans', Promise.reject(result), true, mock)
  },
  deleteScalingPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'deleteScalingPlan', 'AutoScalingPlans', Promise.resolve(result), true, mock)
  },
  deleteScalingPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'deleteScalingPlan', 'AutoScalingPlans', Promise.resolve(result), false, mock)
  },
  deleteScalingPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'deleteScalingPlan', 'AutoScalingPlans', Promise.reject(result), true, mock)
  },
  describeScalingPlanResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'describeScalingPlanResources', 'AutoScalingPlans', Promise.resolve(result), true, mock)
  },
  describeScalingPlanResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'describeScalingPlanResources', 'AutoScalingPlans', Promise.resolve(result), false, mock)
  },
  describeScalingPlanResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'describeScalingPlanResources', 'AutoScalingPlans', Promise.reject(result), true, mock)
  },
  describeScalingPlans: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'describeScalingPlans', 'AutoScalingPlans', Promise.resolve(result), true, mock)
  },
  describeScalingPlansAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'describeScalingPlans', 'AutoScalingPlans', Promise.resolve(result), false, mock)
  },
  describeScalingPlansThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'describeScalingPlans', 'AutoScalingPlans', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'destroy', 'AutoScalingPlans', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'destroy', 'AutoScalingPlans', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'destroy', 'AutoScalingPlans', Promise.reject(result), true, mock)
  },
  getScalingPlanResourceForecastData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'getScalingPlanResourceForecastData', 'AutoScalingPlans', Promise.resolve(result), true, mock)
  },
  getScalingPlanResourceForecastDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'getScalingPlanResourceForecastData', 'AutoScalingPlans', Promise.resolve(result), false, mock)
  },
  getScalingPlanResourceForecastDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'getScalingPlanResourceForecastData', 'AutoScalingPlans', Promise.reject(result), true, mock)
  },
  updateScalingPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'updateScalingPlan', 'AutoScalingPlans', Promise.resolve(result), true, mock)
  },
  updateScalingPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'updateScalingPlan', 'AutoScalingPlans', Promise.resolve(result), false, mock)
  },
  updateScalingPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'updateScalingPlan', 'AutoScalingPlans', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'send', 'AutoScalingPlansClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'send', 'AutoScalingPlansClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auto-scaling-plans', 'send', 'AutoScalingPlansClient', Promise.reject(result), true, mock)
  }
}