
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
  export const mockIoTJobsDataPlane = {
  describeJobExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobExecution', 'IoTJobsDataPlane', Promise.resolve(result), true, mock)
  },
  describeJobExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobExecution', 'IoTJobsDataPlane', Promise.resolve(result), false, mock)
  },
  describeJobExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeJobExecution', 'IoTJobsDataPlane', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTJobsDataPlane', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTJobsDataPlane', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'IoTJobsDataPlane', Promise.reject(result), true, mock)
  },
  getPendingJobExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPendingJobExecutions', 'IoTJobsDataPlane', Promise.resolve(result), true, mock)
  },
  getPendingJobExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPendingJobExecutions', 'IoTJobsDataPlane', Promise.resolve(result), false, mock)
  },
  getPendingJobExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPendingJobExecutions', 'IoTJobsDataPlane', Promise.reject(result), true, mock)
  },
  startNextPendingJobExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startNextPendingJobExecution', 'IoTJobsDataPlane', Promise.resolve(result), true, mock)
  },
  startNextPendingJobExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startNextPendingJobExecution', 'IoTJobsDataPlane', Promise.resolve(result), false, mock)
  },
  startNextPendingJobExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startNextPendingJobExecution', 'IoTJobsDataPlane', Promise.reject(result), true, mock)
  },
  updateJobExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJobExecution', 'IoTJobsDataPlane', Promise.resolve(result), true, mock)
  },
  updateJobExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJobExecution', 'IoTJobsDataPlane', Promise.resolve(result), false, mock)
  },
  updateJobExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateJobExecution', 'IoTJobsDataPlane', Promise.reject(result), true, mock)
  },
}
