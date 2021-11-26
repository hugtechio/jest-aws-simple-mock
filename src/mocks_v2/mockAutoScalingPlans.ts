
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
  export const mockAutoScalingPlans = {
  createScalingPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createScalingPlan', 'AutoScalingPlans', Promise.resolve(result), true, mock)
  },
  createScalingPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createScalingPlan', 'AutoScalingPlans', Promise.resolve(result), false, mock)
  },
  createScalingPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createScalingPlan', 'AutoScalingPlans', Promise.reject(result), true, mock)
  },
  deleteScalingPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteScalingPlan', 'AutoScalingPlans', Promise.resolve(result), true, mock)
  },
  deleteScalingPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteScalingPlan', 'AutoScalingPlans', Promise.resolve(result), false, mock)
  },
  deleteScalingPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteScalingPlan', 'AutoScalingPlans', Promise.reject(result), true, mock)
  },
  describeScalingPlanResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalingPlanResources', 'AutoScalingPlans', Promise.resolve(result), true, mock)
  },
  describeScalingPlanResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalingPlanResources', 'AutoScalingPlans', Promise.resolve(result), false, mock)
  },
  describeScalingPlanResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalingPlanResources', 'AutoScalingPlans', Promise.reject(result), true, mock)
  },
  describeScalingPlans: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalingPlans', 'AutoScalingPlans', Promise.resolve(result), true, mock)
  },
  describeScalingPlansAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalingPlans', 'AutoScalingPlans', Promise.resolve(result), false, mock)
  },
  describeScalingPlansThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeScalingPlans', 'AutoScalingPlans', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AutoScalingPlans', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AutoScalingPlans', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AutoScalingPlans', Promise.reject(result), true, mock)
  },
  getScalingPlanResourceForecastData: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getScalingPlanResourceForecastData', 'AutoScalingPlans', Promise.resolve(result), true, mock)
  },
  getScalingPlanResourceForecastDataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getScalingPlanResourceForecastData', 'AutoScalingPlans', Promise.resolve(result), false, mock)
  },
  getScalingPlanResourceForecastDataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getScalingPlanResourceForecastData', 'AutoScalingPlans', Promise.reject(result), true, mock)
  },
  updateScalingPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateScalingPlan', 'AutoScalingPlans', Promise.resolve(result), true, mock)
  },
  updateScalingPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateScalingPlan', 'AutoScalingPlans', Promise.resolve(result), false, mock)
  },
  updateScalingPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateScalingPlan', 'AutoScalingPlans', Promise.reject(result), true, mock)
  },
}
