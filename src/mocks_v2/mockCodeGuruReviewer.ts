
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
  export const mockCodeGuruReviewer = {
  associateRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateRepository', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  associateRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateRepository', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  associateRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateRepository', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  createCodeReview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCodeReview', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  createCodeReviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCodeReview', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  createCodeReviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCodeReview', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  describeCodeReview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCodeReview', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  describeCodeReviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCodeReview', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  describeCodeReviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCodeReview', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  describeRecommendationFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRecommendationFeedback', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  describeRecommendationFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRecommendationFeedback', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  describeRecommendationFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRecommendationFeedback', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  describeRepositoryAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRepositoryAssociation', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  describeRepositoryAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRepositoryAssociation', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  describeRepositoryAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRepositoryAssociation', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  disassociateRepository: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateRepository', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  disassociateRepositoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateRepository', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  disassociateRepositoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateRepository', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  listCodeReviews: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCodeReviews', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  listCodeReviewsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCodeReviews', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  listCodeReviewsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCodeReviews', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  listRecommendationFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecommendationFeedback', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  listRecommendationFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecommendationFeedback', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  listRecommendationFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecommendationFeedback', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  listRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecommendations', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  listRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecommendations', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  listRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecommendations', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  listRepositoryAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRepositoryAssociations', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  listRepositoryAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRepositoryAssociations', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  listRepositoryAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRepositoryAssociations', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  putRecommendationFeedback: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecommendationFeedback', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  putRecommendationFeedbackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecommendationFeedback', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  putRecommendationFeedbackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putRecommendationFeedback', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodeGuruReviewer', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodeGuruReviewer', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodeGuruReviewer', Promise.reject(result), true, mock)
  },
}
