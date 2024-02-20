
/**
* @description mocks_v3:mockLaunchWizard module is mocks for AWS-SDK V3
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
export const mockLaunchWizard = {
  createDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'createDeployment', 'LaunchWizard', Promise.resolve(result), true, mock)
  },
  createDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'createDeployment', 'LaunchWizard', Promise.resolve(result), false, mock)
  },
  createDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'createDeployment', 'LaunchWizard', Promise.reject(result), true, mock)
  },
  deleteDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'deleteDeployment', 'LaunchWizard', Promise.resolve(result), true, mock)
  },
  deleteDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'deleteDeployment', 'LaunchWizard', Promise.resolve(result), false, mock)
  },
  deleteDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'deleteDeployment', 'LaunchWizard', Promise.reject(result), true, mock)
  },
  getDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'getDeployment', 'LaunchWizard', Promise.resolve(result), true, mock)
  },
  getDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'getDeployment', 'LaunchWizard', Promise.resolve(result), false, mock)
  },
  getDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'getDeployment', 'LaunchWizard', Promise.reject(result), true, mock)
  },
  getWorkload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'getWorkload', 'LaunchWizard', Promise.resolve(result), true, mock)
  },
  getWorkloadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'getWorkload', 'LaunchWizard', Promise.resolve(result), false, mock)
  },
  getWorkloadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'getWorkload', 'LaunchWizard', Promise.reject(result), true, mock)
  },
  listDeploymentEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'listDeploymentEvents', 'LaunchWizard', Promise.resolve(result), true, mock)
  },
  listDeploymentEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'listDeploymentEvents', 'LaunchWizard', Promise.resolve(result), false, mock)
  },
  listDeploymentEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'listDeploymentEvents', 'LaunchWizard', Promise.reject(result), true, mock)
  },
  listDeployments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'listDeployments', 'LaunchWizard', Promise.resolve(result), true, mock)
  },
  listDeploymentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'listDeployments', 'LaunchWizard', Promise.resolve(result), false, mock)
  },
  listDeploymentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'listDeployments', 'LaunchWizard', Promise.reject(result), true, mock)
  },
  listWorkloadDeploymentPatterns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'listWorkloadDeploymentPatterns', 'LaunchWizard', Promise.resolve(result), true, mock)
  },
  listWorkloadDeploymentPatternsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'listWorkloadDeploymentPatterns', 'LaunchWizard', Promise.resolve(result), false, mock)
  },
  listWorkloadDeploymentPatternsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'listWorkloadDeploymentPatterns', 'LaunchWizard', Promise.reject(result), true, mock)
  },
  listWorkloads: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'listWorkloads', 'LaunchWizard', Promise.resolve(result), true, mock)
  },
  listWorkloadsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'listWorkloads', 'LaunchWizard', Promise.resolve(result), false, mock)
  },
  listWorkloadsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'listWorkloads', 'LaunchWizard', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'send', 'LaunchWizardClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'send', 'LaunchWizardClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-launch-wizard', 'send', 'LaunchWizardClient', Promise.reject(result), true, mock)
  }
}
