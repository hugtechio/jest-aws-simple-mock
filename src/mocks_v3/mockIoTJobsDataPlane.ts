
/**
* @description mocks_v3:mockIoTJobsDataPlane module is mocks for AWS-SDK V3
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
export const mockIoTJobsDataPlane = {
  describeJobExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-jobs-data-plane', 'describeJobExecution', 'IoTJobsDataPlane', Promise.resolve(result), true, mock)
  },
  describeJobExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-jobs-data-plane', 'describeJobExecution', 'IoTJobsDataPlane', Promise.resolve(result), false, mock)
  },
  describeJobExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-jobs-data-plane', 'describeJobExecution', 'IoTJobsDataPlane', Promise.reject(result), true, mock)
  },
  getPendingJobExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-jobs-data-plane', 'getPendingJobExecutions', 'IoTJobsDataPlane', Promise.resolve(result), true, mock)
  },
  getPendingJobExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-jobs-data-plane', 'getPendingJobExecutions', 'IoTJobsDataPlane', Promise.resolve(result), false, mock)
  },
  getPendingJobExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-jobs-data-plane', 'getPendingJobExecutions', 'IoTJobsDataPlane', Promise.reject(result), true, mock)
  },
  startNextPendingJobExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-jobs-data-plane', 'startNextPendingJobExecution', 'IoTJobsDataPlane', Promise.resolve(result), true, mock)
  },
  startNextPendingJobExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-jobs-data-plane', 'startNextPendingJobExecution', 'IoTJobsDataPlane', Promise.resolve(result), false, mock)
  },
  startNextPendingJobExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-jobs-data-plane', 'startNextPendingJobExecution', 'IoTJobsDataPlane', Promise.reject(result), true, mock)
  },
  updateJobExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-jobs-data-plane', 'updateJobExecution', 'IoTJobsDataPlane', Promise.resolve(result), true, mock)
  },
  updateJobExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-jobs-data-plane', 'updateJobExecution', 'IoTJobsDataPlane', Promise.resolve(result), false, mock)
  },
  updateJobExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-jobs-data-plane', 'updateJobExecution', 'IoTJobsDataPlane', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-jobs-data-plane', 'send', 'IoTJobsDataPlaneClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-jobs-data-plane', 'send', 'IoTJobsDataPlaneClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot-jobs-data-plane', 'send', 'IoTJobsDataPlaneClient', Promise.reject(result), true, mock)
  }
}
