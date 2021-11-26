
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
  export const mockCodePipeline = {
  acknowledgeJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acknowledgeJob', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  acknowledgeJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acknowledgeJob', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  acknowledgeJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acknowledgeJob', 'CodePipeline', Promise.reject(result), true, mock)
  },
  acknowledgeThirdPartyJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acknowledgeThirdPartyJob', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  acknowledgeThirdPartyJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acknowledgeThirdPartyJob', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  acknowledgeThirdPartyJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('acknowledgeThirdPartyJob', 'CodePipeline', Promise.reject(result), true, mock)
  },
  createCustomActionType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomActionType', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  createCustomActionTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomActionType', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  createCustomActionTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomActionType', 'CodePipeline', Promise.reject(result), true, mock)
  },
  createPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPipeline', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  createPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPipeline', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  createPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPipeline', 'CodePipeline', Promise.reject(result), true, mock)
  },
  deleteCustomActionType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCustomActionType', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  deleteCustomActionTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCustomActionType', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  deleteCustomActionTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCustomActionType', 'CodePipeline', Promise.reject(result), true, mock)
  },
  deletePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePipeline', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  deletePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePipeline', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  deletePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePipeline', 'CodePipeline', Promise.reject(result), true, mock)
  },
  deleteWebhook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWebhook', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  deleteWebhookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWebhook', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  deleteWebhookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteWebhook', 'CodePipeline', Promise.reject(result), true, mock)
  },
  deregisterWebhookWithThirdParty: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterWebhookWithThirdParty', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  deregisterWebhookWithThirdPartyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterWebhookWithThirdParty', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  deregisterWebhookWithThirdPartyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterWebhookWithThirdParty', 'CodePipeline', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodePipeline', Promise.reject(result), true, mock)
  },
  disableStageTransition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableStageTransition', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  disableStageTransitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableStageTransition', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  disableStageTransitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableStageTransition', 'CodePipeline', Promise.reject(result), true, mock)
  },
  enableStageTransition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableStageTransition', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  enableStageTransitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableStageTransition', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  enableStageTransitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableStageTransition', 'CodePipeline', Promise.reject(result), true, mock)
  },
  getActionType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getActionType', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  getActionTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getActionType', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  getActionTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getActionType', 'CodePipeline', Promise.reject(result), true, mock)
  },
  getJobDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobDetails', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  getJobDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobDetails', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  getJobDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getJobDetails', 'CodePipeline', Promise.reject(result), true, mock)
  },
  getPipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPipeline', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  getPipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPipeline', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  getPipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPipeline', 'CodePipeline', Promise.reject(result), true, mock)
  },
  getPipelineExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPipelineExecution', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  getPipelineExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPipelineExecution', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  getPipelineExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPipelineExecution', 'CodePipeline', Promise.reject(result), true, mock)
  },
  getPipelineState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPipelineState', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  getPipelineStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPipelineState', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  getPipelineStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPipelineState', 'CodePipeline', Promise.reject(result), true, mock)
  },
  getThirdPartyJobDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getThirdPartyJobDetails', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  getThirdPartyJobDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getThirdPartyJobDetails', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  getThirdPartyJobDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getThirdPartyJobDetails', 'CodePipeline', Promise.reject(result), true, mock)
  },
  listActionExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActionExecutions', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  listActionExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActionExecutions', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  listActionExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActionExecutions', 'CodePipeline', Promise.reject(result), true, mock)
  },
  listActionTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActionTypes', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  listActionTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActionTypes', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  listActionTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listActionTypes', 'CodePipeline', Promise.reject(result), true, mock)
  },
  listPipelineExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPipelineExecutions', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  listPipelineExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPipelineExecutions', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  listPipelineExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPipelineExecutions', 'CodePipeline', Promise.reject(result), true, mock)
  },
  listPipelines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPipelines', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  listPipelinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPipelines', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  listPipelinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPipelines', 'CodePipeline', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodePipeline', Promise.reject(result), true, mock)
  },
  listWebhooks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWebhooks', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  listWebhooksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWebhooks', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  listWebhooksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listWebhooks', 'CodePipeline', Promise.reject(result), true, mock)
  },
  pollForJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pollForJobs', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  pollForJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pollForJobs', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  pollForJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pollForJobs', 'CodePipeline', Promise.reject(result), true, mock)
  },
  pollForThirdPartyJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pollForThirdPartyJobs', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  pollForThirdPartyJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pollForThirdPartyJobs', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  pollForThirdPartyJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('pollForThirdPartyJobs', 'CodePipeline', Promise.reject(result), true, mock)
  },
  putActionRevision: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putActionRevision', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  putActionRevisionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putActionRevision', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  putActionRevisionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putActionRevision', 'CodePipeline', Promise.reject(result), true, mock)
  },
  putApprovalResult: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putApprovalResult', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  putApprovalResultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putApprovalResult', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  putApprovalResultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putApprovalResult', 'CodePipeline', Promise.reject(result), true, mock)
  },
  putJobFailureResult: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putJobFailureResult', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  putJobFailureResultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putJobFailureResult', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  putJobFailureResultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putJobFailureResult', 'CodePipeline', Promise.reject(result), true, mock)
  },
  putJobSuccessResult: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putJobSuccessResult', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  putJobSuccessResultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putJobSuccessResult', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  putJobSuccessResultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putJobSuccessResult', 'CodePipeline', Promise.reject(result), true, mock)
  },
  putThirdPartyJobFailureResult: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putThirdPartyJobFailureResult', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  putThirdPartyJobFailureResultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putThirdPartyJobFailureResult', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  putThirdPartyJobFailureResultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putThirdPartyJobFailureResult', 'CodePipeline', Promise.reject(result), true, mock)
  },
  putThirdPartyJobSuccessResult: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putThirdPartyJobSuccessResult', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  putThirdPartyJobSuccessResultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putThirdPartyJobSuccessResult', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  putThirdPartyJobSuccessResultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putThirdPartyJobSuccessResult', 'CodePipeline', Promise.reject(result), true, mock)
  },
  putWebhook: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putWebhook', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  putWebhookAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putWebhook', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  putWebhookThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putWebhook', 'CodePipeline', Promise.reject(result), true, mock)
  },
  registerWebhookWithThirdParty: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerWebhookWithThirdParty', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  registerWebhookWithThirdPartyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerWebhookWithThirdParty', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  registerWebhookWithThirdPartyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerWebhookWithThirdParty', 'CodePipeline', Promise.reject(result), true, mock)
  },
  retryStageExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retryStageExecution', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  retryStageExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retryStageExecution', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  retryStageExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('retryStageExecution', 'CodePipeline', Promise.reject(result), true, mock)
  },
  startPipelineExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startPipelineExecution', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  startPipelineExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startPipelineExecution', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  startPipelineExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startPipelineExecution', 'CodePipeline', Promise.reject(result), true, mock)
  },
  stopPipelineExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopPipelineExecution', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  stopPipelineExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopPipelineExecution', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  stopPipelineExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopPipelineExecution', 'CodePipeline', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodePipeline', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodePipeline', Promise.reject(result), true, mock)
  },
  updateActionType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateActionType', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  updateActionTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateActionType', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  updateActionTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateActionType', 'CodePipeline', Promise.reject(result), true, mock)
  },
  updatePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipeline', 'CodePipeline', Promise.resolve(result), true, mock)
  },
  updatePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipeline', 'CodePipeline', Promise.resolve(result), false, mock)
  },
  updatePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePipeline', 'CodePipeline', Promise.reject(result), true, mock)
  },
}
