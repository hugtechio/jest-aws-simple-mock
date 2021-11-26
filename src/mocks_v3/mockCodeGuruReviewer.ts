
/**
* @description mocks_v3:mockCodeGuruReviewer module is mocks for AWS-SDK V3
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

  export const mockCodeGuruReviewer = {
  associateRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'associateRepository', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  associateRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'associateRepository', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  associateRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'associateRepository', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  createCodeReview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'createCodeReview', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  createCodeReviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'createCodeReview', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  createCodeReviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'createCodeReview', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  describeCodeReview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'describeCodeReview', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  describeCodeReviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'describeCodeReview', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  describeCodeReviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'describeCodeReview', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  describeRecommendationFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'describeRecommendationFeedback', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  describeRecommendationFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'describeRecommendationFeedback', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  describeRecommendationFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'describeRecommendationFeedback', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  describeRepositoryAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'describeRepositoryAssociation', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  describeRepositoryAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'describeRepositoryAssociation', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  describeRepositoryAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'describeRepositoryAssociation', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'destroy', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'destroy', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'destroy', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  disassociateRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'disassociateRepository', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  disassociateRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'disassociateRepository', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  disassociateRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'disassociateRepository', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  listCodeReviews: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'listCodeReviews', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  listCodeReviewsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'listCodeReviews', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  listCodeReviewsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'listCodeReviews', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  listRecommendationFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'listRecommendationFeedback', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  listRecommendationFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'listRecommendationFeedback', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  listRecommendationFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'listRecommendationFeedback', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  listRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'listRecommendations', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  listRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'listRecommendations', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  listRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'listRecommendations', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  listRepositoryAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'listRepositoryAssociations', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  listRepositoryAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'listRepositoryAssociations', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  listRepositoryAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'listRepositoryAssociations', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'listTagsForResource', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'listTagsForResource', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'listTagsForResource', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  putRecommendationFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'putRecommendationFeedback', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  putRecommendationFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'putRecommendationFeedback', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  putRecommendationFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'putRecommendationFeedback', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'tagResource', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'tagResource', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'tagResource', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'untagResource', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'untagResource', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'untagResource', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'send', 'CodeGuruReviewerClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'send', 'CodeGuruReviewerClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-codeguru-reviewer', 'send', 'CodeGuruReviewerClient', Promise.reject(result), true, mock)
  }
}