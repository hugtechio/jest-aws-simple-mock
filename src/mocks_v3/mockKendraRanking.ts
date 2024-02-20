
/**
* @description mocks_v3:mockKendraRanking module is mocks for AWS-SDK V3
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
export const mockKendraRanking = {
  createRescoreExecutionPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'createRescoreExecutionPlan', 'KendraRanking', Promise.resolve(result), true, mock)
  },
  createRescoreExecutionPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'createRescoreExecutionPlan', 'KendraRanking', Promise.resolve(result), false, mock)
  },
  createRescoreExecutionPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'createRescoreExecutionPlan', 'KendraRanking', Promise.reject(result), true, mock)
  },
  deleteRescoreExecutionPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'deleteRescoreExecutionPlan', 'KendraRanking', Promise.resolve(result), true, mock)
  },
  deleteRescoreExecutionPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'deleteRescoreExecutionPlan', 'KendraRanking', Promise.resolve(result), false, mock)
  },
  deleteRescoreExecutionPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'deleteRescoreExecutionPlan', 'KendraRanking', Promise.reject(result), true, mock)
  },
  describeRescoreExecutionPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'describeRescoreExecutionPlan', 'KendraRanking', Promise.resolve(result), true, mock)
  },
  describeRescoreExecutionPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'describeRescoreExecutionPlan', 'KendraRanking', Promise.resolve(result), false, mock)
  },
  describeRescoreExecutionPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'describeRescoreExecutionPlan', 'KendraRanking', Promise.reject(result), true, mock)
  },
  listRescoreExecutionPlans: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'listRescoreExecutionPlans', 'KendraRanking', Promise.resolve(result), true, mock)
  },
  listRescoreExecutionPlansAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'listRescoreExecutionPlans', 'KendraRanking', Promise.resolve(result), false, mock)
  },
  listRescoreExecutionPlansThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'listRescoreExecutionPlans', 'KendraRanking', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'listTagsForResource', 'KendraRanking', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'listTagsForResource', 'KendraRanking', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'listTagsForResource', 'KendraRanking', Promise.reject(result), true, mock)
  },
  rescore: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'rescore', 'KendraRanking', Promise.resolve(result), true, mock)
  },
  rescoreAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'rescore', 'KendraRanking', Promise.resolve(result), false, mock)
  },
  rescoreThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'rescore', 'KendraRanking', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'tagResource', 'KendraRanking', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'tagResource', 'KendraRanking', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'tagResource', 'KendraRanking', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'untagResource', 'KendraRanking', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'untagResource', 'KendraRanking', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'untagResource', 'KendraRanking', Promise.reject(result), true, mock)
  },
  updateRescoreExecutionPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'updateRescoreExecutionPlan', 'KendraRanking', Promise.resolve(result), true, mock)
  },
  updateRescoreExecutionPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'updateRescoreExecutionPlan', 'KendraRanking', Promise.resolve(result), false, mock)
  },
  updateRescoreExecutionPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'updateRescoreExecutionPlan', 'KendraRanking', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'send', 'KendraRankingClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'send', 'KendraRankingClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kendra-ranking', 'send', 'KendraRankingClient', Promise.reject(result), true, mock)
  }
}
