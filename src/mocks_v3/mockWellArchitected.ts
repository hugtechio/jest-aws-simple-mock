
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
  associateProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'associateProfiles', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  associateProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'associateProfiles', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  associateProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'associateProfiles', 'WellArchitected', Promise.reject(result), true, mock)
  },
  createLensShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createLensShare', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  createLensShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createLensShare', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  createLensShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createLensShare', 'WellArchitected', Promise.reject(result), true, mock)
  },
  createLensVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createLensVersion', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  createLensVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createLensVersion', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  createLensVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createLensVersion', 'WellArchitected', Promise.reject(result), true, mock)
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
  createProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createProfile', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  createProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createProfile', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  createProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createProfile', 'WellArchitected', Promise.reject(result), true, mock)
  },
  createProfileShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createProfileShare', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  createProfileShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createProfileShare', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  createProfileShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createProfileShare', 'WellArchitected', Promise.reject(result), true, mock)
  },
  createReviewTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createReviewTemplate', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  createReviewTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createReviewTemplate', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  createReviewTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createReviewTemplate', 'WellArchitected', Promise.reject(result), true, mock)
  },
  createTemplateShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createTemplateShare', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  createTemplateShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createTemplateShare', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  createTemplateShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'createTemplateShare', 'WellArchitected', Promise.reject(result), true, mock)
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
  deleteLens: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteLens', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  deleteLensAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteLens', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  deleteLensThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteLens', 'WellArchitected', Promise.reject(result), true, mock)
  },
  deleteLensShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteLensShare', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  deleteLensShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteLensShare', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  deleteLensShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteLensShare', 'WellArchitected', Promise.reject(result), true, mock)
  },
  deleteProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteProfile', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  deleteProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteProfile', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  deleteProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteProfile', 'WellArchitected', Promise.reject(result), true, mock)
  },
  deleteProfileShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteProfileShare', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  deleteProfileShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteProfileShare', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  deleteProfileShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteProfileShare', 'WellArchitected', Promise.reject(result), true, mock)
  },
  deleteReviewTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteReviewTemplate', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  deleteReviewTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteReviewTemplate', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  deleteReviewTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteReviewTemplate', 'WellArchitected', Promise.reject(result), true, mock)
  },
  deleteTemplateShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteTemplateShare', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  deleteTemplateShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteTemplateShare', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  deleteTemplateShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'deleteTemplateShare', 'WellArchitected', Promise.reject(result), true, mock)
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
  disassociateLenses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'disassociateLenses', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  disassociateLensesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'disassociateLenses', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  disassociateLensesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'disassociateLenses', 'WellArchitected', Promise.reject(result), true, mock)
  },
  disassociateProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'disassociateProfiles', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  disassociateProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'disassociateProfiles', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  disassociateProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'disassociateProfiles', 'WellArchitected', Promise.reject(result), true, mock)
  },
  exportLens: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'exportLens', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  exportLensAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'exportLens', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  exportLensThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'exportLens', 'WellArchitected', Promise.reject(result), true, mock)
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
  getConsolidatedReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getConsolidatedReport', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  getConsolidatedReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getConsolidatedReport', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  getConsolidatedReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getConsolidatedReport', 'WellArchitected', Promise.reject(result), true, mock)
  },
  getLens: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getLens', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  getLensAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getLens', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  getLensThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getLens', 'WellArchitected', Promise.reject(result), true, mock)
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
  getProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getProfile', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  getProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getProfile', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  getProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getProfile', 'WellArchitected', Promise.reject(result), true, mock)
  },
  getProfileTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getProfileTemplate', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  getProfileTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getProfileTemplate', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  getProfileTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getProfileTemplate', 'WellArchitected', Promise.reject(result), true, mock)
  },
  getReviewTemplateAnswer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getReviewTemplateAnswer', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  getReviewTemplateAnswerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getReviewTemplateAnswer', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  getReviewTemplateAnswerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getReviewTemplateAnswer', 'WellArchitected', Promise.reject(result), true, mock)
  },
  getReviewTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getReviewTemplate', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  getReviewTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getReviewTemplate', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  getReviewTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getReviewTemplate', 'WellArchitected', Promise.reject(result), true, mock)
  },
  getReviewTemplateLensReview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getReviewTemplateLensReview', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  getReviewTemplateLensReviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getReviewTemplateLensReview', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  getReviewTemplateLensReviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'getReviewTemplateLensReview', 'WellArchitected', Promise.reject(result), true, mock)
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
  importLens: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'importLens', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  importLensAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'importLens', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  importLensThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'importLens', 'WellArchitected', Promise.reject(result), true, mock)
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
  listCheckDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listCheckDetails', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  listCheckDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listCheckDetails', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  listCheckDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listCheckDetails', 'WellArchitected', Promise.reject(result), true, mock)
  },
  listCheckSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listCheckSummaries', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  listCheckSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listCheckSummaries', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  listCheckSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listCheckSummaries', 'WellArchitected', Promise.reject(result), true, mock)
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
  listLensShares: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listLensShares', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  listLensSharesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listLensShares', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  listLensSharesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listLensShares', 'WellArchitected', Promise.reject(result), true, mock)
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
  listProfileNotifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listProfileNotifications', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  listProfileNotificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listProfileNotifications', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  listProfileNotificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listProfileNotifications', 'WellArchitected', Promise.reject(result), true, mock)
  },
  listProfileShares: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listProfileShares', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  listProfileSharesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listProfileShares', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  listProfileSharesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listProfileShares', 'WellArchitected', Promise.reject(result), true, mock)
  },
  listProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listProfiles', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  listProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listProfiles', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  listProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listProfiles', 'WellArchitected', Promise.reject(result), true, mock)
  },
  listReviewTemplateAnswers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listReviewTemplateAnswers', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  listReviewTemplateAnswersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listReviewTemplateAnswers', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  listReviewTemplateAnswersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listReviewTemplateAnswers', 'WellArchitected', Promise.reject(result), true, mock)
  },
  listReviewTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listReviewTemplates', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  listReviewTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listReviewTemplates', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  listReviewTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listReviewTemplates', 'WellArchitected', Promise.reject(result), true, mock)
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
  listTemplateShares: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listTemplateShares', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  listTemplateSharesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listTemplateShares', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  listTemplateSharesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'listTemplateShares', 'WellArchitected', Promise.reject(result), true, mock)
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
  updateGlobalSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateGlobalSettings', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  updateGlobalSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateGlobalSettings', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  updateGlobalSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateGlobalSettings', 'WellArchitected', Promise.reject(result), true, mock)
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
  updateProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateProfile', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  updateProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateProfile', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  updateProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateProfile', 'WellArchitected', Promise.reject(result), true, mock)
  },
  updateReviewTemplateAnswer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateReviewTemplateAnswer', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  updateReviewTemplateAnswerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateReviewTemplateAnswer', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  updateReviewTemplateAnswerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateReviewTemplateAnswer', 'WellArchitected', Promise.reject(result), true, mock)
  },
  updateReviewTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateReviewTemplate', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  updateReviewTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateReviewTemplate', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  updateReviewTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateReviewTemplate', 'WellArchitected', Promise.reject(result), true, mock)
  },
  updateReviewTemplateLensReview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateReviewTemplateLensReview', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  updateReviewTemplateLensReviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateReviewTemplateLensReview', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  updateReviewTemplateLensReviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'updateReviewTemplateLensReview', 'WellArchitected', Promise.reject(result), true, mock)
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
  upgradeProfileVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'upgradeProfileVersion', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  upgradeProfileVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'upgradeProfileVersion', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  upgradeProfileVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'upgradeProfileVersion', 'WellArchitected', Promise.reject(result), true, mock)
  },
  upgradeReviewTemplateLensReview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'upgradeReviewTemplateLensReview', 'WellArchitected', Promise.resolve(result), true, mock)
  },
  upgradeReviewTemplateLensReviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'upgradeReviewTemplateLensReview', 'WellArchitected', Promise.resolve(result), false, mock)
  },
  upgradeReviewTemplateLensReviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-wellarchitected', 'upgradeReviewTemplateLensReview', 'WellArchitected', Promise.reject(result), true, mock)
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
