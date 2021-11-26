
/**
* @description mocks_v3:mockResiliencehub module is mocks for AWS-SDK V3
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

  export const mockResiliencehub = {
  addDraftAppVersionResourceMappings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'addDraftAppVersionResourceMappings', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  addDraftAppVersionResourceMappingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'addDraftAppVersionResourceMappings', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  addDraftAppVersionResourceMappingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'addDraftAppVersionResourceMappings', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  createApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'createApp', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  createAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'createApp', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  createAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'createApp', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  createRecommendationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'createRecommendationTemplate', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  createRecommendationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'createRecommendationTemplate', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  createRecommendationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'createRecommendationTemplate', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  createResiliencyPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'createResiliencyPolicy', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  createResiliencyPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'createResiliencyPolicy', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  createResiliencyPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'createResiliencyPolicy', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  deleteApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'deleteApp', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  deleteAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'deleteApp', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  deleteAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'deleteApp', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  deleteAppAssessment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'deleteAppAssessment', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  deleteAppAssessmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'deleteAppAssessment', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  deleteAppAssessmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'deleteAppAssessment', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  deleteRecommendationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'deleteRecommendationTemplate', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  deleteRecommendationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'deleteRecommendationTemplate', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  deleteRecommendationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'deleteRecommendationTemplate', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  deleteResiliencyPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'deleteResiliencyPolicy', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  deleteResiliencyPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'deleteResiliencyPolicy', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  deleteResiliencyPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'deleteResiliencyPolicy', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  describeApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'describeApp', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  describeAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'describeApp', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  describeAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'describeApp', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  describeAppAssessment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'describeAppAssessment', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  describeAppAssessmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'describeAppAssessment', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  describeAppAssessmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'describeAppAssessment', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  describeAppVersionResourcesResolutionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'describeAppVersionResourcesResolutionStatus', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  describeAppVersionResourcesResolutionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'describeAppVersionResourcesResolutionStatus', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  describeAppVersionResourcesResolutionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'describeAppVersionResourcesResolutionStatus', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  describeAppVersionTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'describeAppVersionTemplate', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  describeAppVersionTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'describeAppVersionTemplate', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  describeAppVersionTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'describeAppVersionTemplate', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  describeDraftAppVersionResourcesImportStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'describeDraftAppVersionResourcesImportStatus', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  describeDraftAppVersionResourcesImportStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'describeDraftAppVersionResourcesImportStatus', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  describeDraftAppVersionResourcesImportStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'describeDraftAppVersionResourcesImportStatus', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  describeResiliencyPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'describeResiliencyPolicy', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  describeResiliencyPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'describeResiliencyPolicy', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  describeResiliencyPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'describeResiliencyPolicy', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'destroy', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'destroy', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'destroy', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  importResourcesToDraftAppVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'importResourcesToDraftAppVersion', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  importResourcesToDraftAppVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'importResourcesToDraftAppVersion', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  importResourcesToDraftAppVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'importResourcesToDraftAppVersion', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  listAlarmRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listAlarmRecommendations', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  listAlarmRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listAlarmRecommendations', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  listAlarmRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listAlarmRecommendations', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  listAppAssessments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listAppAssessments', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  listAppAssessmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listAppAssessments', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  listAppAssessmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listAppAssessments', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  listAppComponentCompliances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listAppComponentCompliances', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  listAppComponentCompliancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listAppComponentCompliances', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  listAppComponentCompliancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listAppComponentCompliances', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  listAppComponentRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listAppComponentRecommendations', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  listAppComponentRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listAppComponentRecommendations', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  listAppComponentRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listAppComponentRecommendations', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  listAppVersionResourceMappings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listAppVersionResourceMappings', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  listAppVersionResourceMappingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listAppVersionResourceMappings', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  listAppVersionResourceMappingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listAppVersionResourceMappings', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  listAppVersionResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listAppVersionResources', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  listAppVersionResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listAppVersionResources', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  listAppVersionResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listAppVersionResources', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  listAppVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listAppVersions', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  listAppVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listAppVersions', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  listAppVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listAppVersions', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  listApps: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listApps', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  listAppsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listApps', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  listAppsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listApps', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  listRecommendationTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listRecommendationTemplates', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  listRecommendationTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listRecommendationTemplates', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  listRecommendationTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listRecommendationTemplates', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  listResiliencyPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listResiliencyPolicies', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  listResiliencyPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listResiliencyPolicies', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  listResiliencyPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listResiliencyPolicies', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  listSopRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listSopRecommendations', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  listSopRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listSopRecommendations', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  listSopRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listSopRecommendations', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  listSuggestedResiliencyPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listSuggestedResiliencyPolicies', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  listSuggestedResiliencyPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listSuggestedResiliencyPolicies', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  listSuggestedResiliencyPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listSuggestedResiliencyPolicies', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listTagsForResource', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listTagsForResource', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listTagsForResource', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  listTestRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listTestRecommendations', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  listTestRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listTestRecommendations', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  listTestRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listTestRecommendations', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  listUnsupportedAppVersionResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listUnsupportedAppVersionResources', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  listUnsupportedAppVersionResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listUnsupportedAppVersionResources', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  listUnsupportedAppVersionResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'listUnsupportedAppVersionResources', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  publishAppVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'publishAppVersion', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  publishAppVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'publishAppVersion', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  publishAppVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'publishAppVersion', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  putDraftAppVersionTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'putDraftAppVersionTemplate', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  putDraftAppVersionTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'putDraftAppVersionTemplate', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  putDraftAppVersionTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'putDraftAppVersionTemplate', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  removeDraftAppVersionResourceMappings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'removeDraftAppVersionResourceMappings', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  removeDraftAppVersionResourceMappingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'removeDraftAppVersionResourceMappings', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  removeDraftAppVersionResourceMappingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'removeDraftAppVersionResourceMappings', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  resolveAppVersionResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'resolveAppVersionResources', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  resolveAppVersionResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'resolveAppVersionResources', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  resolveAppVersionResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'resolveAppVersionResources', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  startAppAssessment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'startAppAssessment', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  startAppAssessmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'startAppAssessment', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  startAppAssessmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'startAppAssessment', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'tagResource', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'tagResource', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'tagResource', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'untagResource', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'untagResource', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'untagResource', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  updateApp: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'updateApp', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  updateAppAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'updateApp', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  updateAppThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'updateApp', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  updateResiliencyPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'updateResiliencyPolicy', 'Resiliencehub', Promise.resolve(result), true, mock)
  },
  updateResiliencyPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'updateResiliencyPolicy', 'Resiliencehub', Promise.resolve(result), false, mock)
  },
  updateResiliencyPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'updateResiliencyPolicy', 'Resiliencehub', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'send', 'ResiliencehubClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'send', 'ResiliencehubClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-resiliencehub', 'send', 'ResiliencehubClient', Promise.reject(result), true, mock)
  }
}