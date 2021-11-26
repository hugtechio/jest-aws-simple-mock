
/**
* @description mocks_v3:mockCodePipeline module is mocks for AWS-SDK V3
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

  export const mockCodePipeline = {
  acknowledgeJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'acknowledgeJob', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  acknowledgeJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'acknowledgeJob', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  acknowledgeJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'acknowledgeJob', 'CodePipeline', Promise.reject(result), true, mock)
  },
  acknowledgeThirdPartyJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'acknowledgeThirdPartyJob', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  acknowledgeThirdPartyJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'acknowledgeThirdPartyJob', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  acknowledgeThirdPartyJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'acknowledgeThirdPartyJob', 'CodePipeline', Promise.reject(result), true, mock)
  },
  createCustomActionType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'createCustomActionType', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  createCustomActionTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'createCustomActionType', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  createCustomActionTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'createCustomActionType', 'CodePipeline', Promise.reject(result), true, mock)
  },
  createPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'createPipeline', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  createPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'createPipeline', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  createPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'createPipeline', 'CodePipeline', Promise.reject(result), true, mock)
  },
  deleteCustomActionType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'deleteCustomActionType', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  deleteCustomActionTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'deleteCustomActionType', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  deleteCustomActionTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'deleteCustomActionType', 'CodePipeline', Promise.reject(result), true, mock)
  },
  deletePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'deletePipeline', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  deletePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'deletePipeline', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  deletePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'deletePipeline', 'CodePipeline', Promise.reject(result), true, mock)
  },
  deleteWebhook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'deleteWebhook', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  deleteWebhookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'deleteWebhook', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  deleteWebhookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'deleteWebhook', 'CodePipeline', Promise.reject(result), true, mock)
  },
  deregisterWebhookWithThirdParty: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'deregisterWebhookWithThirdParty', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  deregisterWebhookWithThirdPartyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'deregisterWebhookWithThirdParty', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  deregisterWebhookWithThirdPartyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'deregisterWebhookWithThirdParty', 'CodePipeline', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'destroy', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'destroy', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'destroy', 'CodePipeline', Promise.reject(result), true, mock)
  },
  disableStageTransition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'disableStageTransition', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  disableStageTransitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'disableStageTransition', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  disableStageTransitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'disableStageTransition', 'CodePipeline', Promise.reject(result), true, mock)
  },
  enableStageTransition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'enableStageTransition', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  enableStageTransitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'enableStageTransition', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  enableStageTransitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'enableStageTransition', 'CodePipeline', Promise.reject(result), true, mock)
  },
  getActionType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'getActionType', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  getActionTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'getActionType', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  getActionTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'getActionType', 'CodePipeline', Promise.reject(result), true, mock)
  },
  getJobDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'getJobDetails', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  getJobDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'getJobDetails', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  getJobDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'getJobDetails', 'CodePipeline', Promise.reject(result), true, mock)
  },
  getPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'getPipeline', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  getPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'getPipeline', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  getPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'getPipeline', 'CodePipeline', Promise.reject(result), true, mock)
  },
  getPipelineExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'getPipelineExecution', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  getPipelineExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'getPipelineExecution', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  getPipelineExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'getPipelineExecution', 'CodePipeline', Promise.reject(result), true, mock)
  },
  getPipelineState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'getPipelineState', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  getPipelineStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'getPipelineState', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  getPipelineStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'getPipelineState', 'CodePipeline', Promise.reject(result), true, mock)
  },
  getThirdPartyJobDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'getThirdPartyJobDetails', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  getThirdPartyJobDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'getThirdPartyJobDetails', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  getThirdPartyJobDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'getThirdPartyJobDetails', 'CodePipeline', Promise.reject(result), true, mock)
  },
  listActionExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'listActionExecutions', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  listActionExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'listActionExecutions', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  listActionExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'listActionExecutions', 'CodePipeline', Promise.reject(result), true, mock)
  },
  listActionTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'listActionTypes', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  listActionTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'listActionTypes', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  listActionTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'listActionTypes', 'CodePipeline', Promise.reject(result), true, mock)
  },
  listPipelineExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'listPipelineExecutions', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  listPipelineExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'listPipelineExecutions', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  listPipelineExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'listPipelineExecutions', 'CodePipeline', Promise.reject(result), true, mock)
  },
  listPipelines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'listPipelines', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  listPipelinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'listPipelines', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  listPipelinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'listPipelines', 'CodePipeline', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'listTagsForResource', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'listTagsForResource', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'listTagsForResource', 'CodePipeline', Promise.reject(result), true, mock)
  },
  listWebhooks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'listWebhooks', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  listWebhooksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'listWebhooks', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  listWebhooksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'listWebhooks', 'CodePipeline', Promise.reject(result), true, mock)
  },
  pollForJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'pollForJobs', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  pollForJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'pollForJobs', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  pollForJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'pollForJobs', 'CodePipeline', Promise.reject(result), true, mock)
  },
  pollForThirdPartyJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'pollForThirdPartyJobs', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  pollForThirdPartyJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'pollForThirdPartyJobs', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  pollForThirdPartyJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'pollForThirdPartyJobs', 'CodePipeline', Promise.reject(result), true, mock)
  },
  putActionRevision: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'putActionRevision', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  putActionRevisionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'putActionRevision', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  putActionRevisionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'putActionRevision', 'CodePipeline', Promise.reject(result), true, mock)
  },
  putApprovalResult: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'putApprovalResult', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  putApprovalResultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'putApprovalResult', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  putApprovalResultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'putApprovalResult', 'CodePipeline', Promise.reject(result), true, mock)
  },
  putJobFailureResult: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'putJobFailureResult', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  putJobFailureResultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'putJobFailureResult', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  putJobFailureResultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'putJobFailureResult', 'CodePipeline', Promise.reject(result), true, mock)
  },
  putJobSuccessResult: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'putJobSuccessResult', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  putJobSuccessResultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'putJobSuccessResult', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  putJobSuccessResultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'putJobSuccessResult', 'CodePipeline', Promise.reject(result), true, mock)
  },
  putThirdPartyJobFailureResult: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'putThirdPartyJobFailureResult', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  putThirdPartyJobFailureResultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'putThirdPartyJobFailureResult', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  putThirdPartyJobFailureResultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'putThirdPartyJobFailureResult', 'CodePipeline', Promise.reject(result), true, mock)
  },
  putThirdPartyJobSuccessResult: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'putThirdPartyJobSuccessResult', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  putThirdPartyJobSuccessResultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'putThirdPartyJobSuccessResult', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  putThirdPartyJobSuccessResultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'putThirdPartyJobSuccessResult', 'CodePipeline', Promise.reject(result), true, mock)
  },
  putWebhook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'putWebhook', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  putWebhookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'putWebhook', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  putWebhookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'putWebhook', 'CodePipeline', Promise.reject(result), true, mock)
  },
  registerWebhookWithThirdParty: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'registerWebhookWithThirdParty', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  registerWebhookWithThirdPartyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'registerWebhookWithThirdParty', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  registerWebhookWithThirdPartyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'registerWebhookWithThirdParty', 'CodePipeline', Promise.reject(result), true, mock)
  },
  retryStageExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'retryStageExecution', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  retryStageExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'retryStageExecution', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  retryStageExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'retryStageExecution', 'CodePipeline', Promise.reject(result), true, mock)
  },
  startPipelineExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'startPipelineExecution', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  startPipelineExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'startPipelineExecution', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  startPipelineExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'startPipelineExecution', 'CodePipeline', Promise.reject(result), true, mock)
  },
  stopPipelineExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'stopPipelineExecution', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  stopPipelineExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'stopPipelineExecution', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  stopPipelineExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'stopPipelineExecution', 'CodePipeline', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'tagResource', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'tagResource', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'tagResource', 'CodePipeline', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'untagResource', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'untagResource', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'untagResource', 'CodePipeline', Promise.reject(result), true, mock)
  },
  updateActionType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'updateActionType', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  updateActionTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'updateActionType', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  updateActionTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'updateActionType', 'CodePipeline', Promise.reject(result), true, mock)
  },
  updatePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'updatePipeline', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  updatePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'updatePipeline', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  updatePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'updatePipeline', 'CodePipeline', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'send', 'CodePipelineClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'send', 'CodePipelineClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codepipeline', 'send', 'CodePipelineClient', Promise.reject(result), true, mock)
  }
}