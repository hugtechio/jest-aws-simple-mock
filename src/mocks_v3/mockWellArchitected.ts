
/**
* @description mocks_v3:mockWellArchitected module is mocks for AWS-SDK V3
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

  export const mockWellArchitected = {
  associateLenses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'associateLenses', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  associateLensesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'associateLenses', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  associateLensesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'associateLenses', 'WellArchitected', Promise.reject(result), true, mock)
  },
  createMilestone: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createMilestone', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  createMilestoneAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createMilestone', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  createMilestoneThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createMilestone', 'WellArchitected', Promise.reject(result), true, mock)
  },
  createWorkload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createWorkload', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  createWorkloadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createWorkload', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  createWorkloadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createWorkload', 'WellArchitected', Promise.reject(result), true, mock)
  },
  createWorkloadShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createWorkloadShare', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  createWorkloadShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createWorkloadShare', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  createWorkloadShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createWorkloadShare', 'WellArchitected', Promise.reject(result), true, mock)
  },
  deleteWorkload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteWorkload', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  deleteWorkloadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteWorkload', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  deleteWorkloadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteWorkload', 'WellArchitected', Promise.reject(result), true, mock)
  },
  deleteWorkloadShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteWorkloadShare', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  deleteWorkloadShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteWorkloadShare', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  deleteWorkloadShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteWorkloadShare', 'WellArchitected', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'destroy', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'destroy', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'destroy', 'WellArchitected', Promise.reject(result), true, mock)
  },
  disassociateLenses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'disassociateLenses', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  disassociateLensesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'disassociateLenses', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  disassociateLensesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'disassociateLenses', 'WellArchitected', Promise.reject(result), true, mock)
  },
  getAnswer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getAnswer', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  getAnswerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getAnswer', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  getAnswerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getAnswer', 'WellArchitected', Promise.reject(result), true, mock)
  },
  getLensReview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getLensReview', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  getLensReviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getLensReview', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  getLensReviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getLensReview', 'WellArchitected', Promise.reject(result), true, mock)
  },
  getLensReviewReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getLensReviewReport', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  getLensReviewReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getLensReviewReport', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  getLensReviewReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getLensReviewReport', 'WellArchitected', Promise.reject(result), true, mock)
  },
  getLensVersionDifference: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getLensVersionDifference', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  getLensVersionDifferenceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getLensVersionDifference', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  getLensVersionDifferenceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getLensVersionDifference', 'WellArchitected', Promise.reject(result), true, mock)
  },
  getMilestone: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getMilestone', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  getMilestoneAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getMilestone', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  getMilestoneThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getMilestone', 'WellArchitected', Promise.reject(result), true, mock)
  },
  getWorkload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getWorkload', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  getWorkloadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getWorkload', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  getWorkloadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getWorkload', 'WellArchitected', Promise.reject(result), true, mock)
  },
  listAnswers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listAnswers', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  listAnswersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listAnswers', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  listAnswersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listAnswers', 'WellArchitected', Promise.reject(result), true, mock)
  },
  listLensReviewImprovements: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listLensReviewImprovements', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  listLensReviewImprovementsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listLensReviewImprovements', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  listLensReviewImprovementsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listLensReviewImprovements', 'WellArchitected', Promise.reject(result), true, mock)
  },
  listLensReviews: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listLensReviews', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  listLensReviewsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listLensReviews', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  listLensReviewsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listLensReviews', 'WellArchitected', Promise.reject(result), true, mock)
  },
  listLenses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listLenses', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  listLensesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listLenses', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  listLensesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listLenses', 'WellArchitected', Promise.reject(result), true, mock)
  },
  listMilestones: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listMilestones', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  listMilestonesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listMilestones', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  listMilestonesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listMilestones', 'WellArchitected', Promise.reject(result), true, mock)
  },
  listNotifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listNotifications', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  listNotificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listNotifications', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  listNotificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listNotifications', 'WellArchitected', Promise.reject(result), true, mock)
  },
  listShareInvitations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listShareInvitations', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  listShareInvitationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listShareInvitations', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  listShareInvitationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listShareInvitations', 'WellArchitected', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listTagsForResource', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listTagsForResource', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listTagsForResource', 'WellArchitected', Promise.reject(result), true, mock)
  },
  listWorkloadShares: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listWorkloadShares', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  listWorkloadSharesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listWorkloadShares', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  listWorkloadSharesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listWorkloadShares', 'WellArchitected', Promise.reject(result), true, mock)
  },
  listWorkloads: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listWorkloads', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  listWorkloadsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listWorkloads', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  listWorkloadsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listWorkloads', 'WellArchitected', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'tagResource', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'tagResource', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'tagResource', 'WellArchitected', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'untagResource', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'untagResource', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'untagResource', 'WellArchitected', Promise.reject(result), true, mock)
  },
  updateAnswer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateAnswer', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  updateAnswerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateAnswer', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  updateAnswerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateAnswer', 'WellArchitected', Promise.reject(result), true, mock)
  },
  updateLensReview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateLensReview', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  updateLensReviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateLensReview', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  updateLensReviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateLensReview', 'WellArchitected', Promise.reject(result), true, mock)
  },
  updateShareInvitation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateShareInvitation', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  updateShareInvitationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateShareInvitation', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  updateShareInvitationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateShareInvitation', 'WellArchitected', Promise.reject(result), true, mock)
  },
  updateWorkload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateWorkload', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  updateWorkloadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateWorkload', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  updateWorkloadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateWorkload', 'WellArchitected', Promise.reject(result), true, mock)
  },
  updateWorkloadShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateWorkloadShare', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  updateWorkloadShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateWorkloadShare', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  updateWorkloadShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateWorkloadShare', 'WellArchitected', Promise.reject(result), true, mock)
  },
  upgradeLensReview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'upgradeLensReview', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  upgradeLensReviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'upgradeLensReview', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  upgradeLensReviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'upgradeLensReview', 'WellArchitected', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'send', 'WellArchitectedClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'send', 'WellArchitectedClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'send', 'WellArchitectedClient', Promise.reject(result), true, mock)
  }
}