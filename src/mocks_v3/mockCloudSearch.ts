
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockCloudSearch = {
  buildSuggesters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'buildSuggesters', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  buildSuggestersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'buildSuggesters', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  buildSuggestersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'buildSuggesters', 'CloudSearch', Promise.reject(result), true, mock)
  },
  createDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'createDomain', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  createDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'createDomain', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  createDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'createDomain', 'CloudSearch', Promise.reject(result), true, mock)
  },
  defineAnalysisScheme: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'defineAnalysisScheme', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  defineAnalysisSchemeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'defineAnalysisScheme', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  defineAnalysisSchemeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'defineAnalysisScheme', 'CloudSearch', Promise.reject(result), true, mock)
  },
  defineExpression: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'defineExpression', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  defineExpressionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'defineExpression', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  defineExpressionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'defineExpression', 'CloudSearch', Promise.reject(result), true, mock)
  },
  defineIndexField: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'defineIndexField', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  defineIndexFieldAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'defineIndexField', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  defineIndexFieldThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'defineIndexField', 'CloudSearch', Promise.reject(result), true, mock)
  },
  defineSuggester: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'defineSuggester', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  defineSuggesterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'defineSuggester', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  defineSuggesterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'defineSuggester', 'CloudSearch', Promise.reject(result), true, mock)
  },
  deleteAnalysisScheme: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'deleteAnalysisScheme', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  deleteAnalysisSchemeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'deleteAnalysisScheme', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  deleteAnalysisSchemeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'deleteAnalysisScheme', 'CloudSearch', Promise.reject(result), true, mock)
  },
  deleteDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'deleteDomain', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  deleteDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'deleteDomain', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  deleteDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'deleteDomain', 'CloudSearch', Promise.reject(result), true, mock)
  },
  deleteExpression: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'deleteExpression', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  deleteExpressionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'deleteExpression', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  deleteExpressionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'deleteExpression', 'CloudSearch', Promise.reject(result), true, mock)
  },
  deleteIndexField: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'deleteIndexField', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  deleteIndexFieldAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'deleteIndexField', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  deleteIndexFieldThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'deleteIndexField', 'CloudSearch', Promise.reject(result), true, mock)
  },
  deleteSuggester: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'deleteSuggester', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  deleteSuggesterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'deleteSuggester', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  deleteSuggesterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'deleteSuggester', 'CloudSearch', Promise.reject(result), true, mock)
  },
  describeAnalysisSchemes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeAnalysisSchemes', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  describeAnalysisSchemesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeAnalysisSchemes', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  describeAnalysisSchemesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeAnalysisSchemes', 'CloudSearch', Promise.reject(result), true, mock)
  },
  describeAvailabilityOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeAvailabilityOptions', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  describeAvailabilityOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeAvailabilityOptions', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  describeAvailabilityOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeAvailabilityOptions', 'CloudSearch', Promise.reject(result), true, mock)
  },
  describeDomainEndpointOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeDomainEndpointOptions', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  describeDomainEndpointOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeDomainEndpointOptions', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  describeDomainEndpointOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeDomainEndpointOptions', 'CloudSearch', Promise.reject(result), true, mock)
  },
  describeDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeDomains', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  describeDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeDomains', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  describeDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeDomains', 'CloudSearch', Promise.reject(result), true, mock)
  },
  describeExpressions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeExpressions', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  describeExpressionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeExpressions', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  describeExpressionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeExpressions', 'CloudSearch', Promise.reject(result), true, mock)
  },
  describeIndexFields: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeIndexFields', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  describeIndexFieldsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeIndexFields', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  describeIndexFieldsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeIndexFields', 'CloudSearch', Promise.reject(result), true, mock)
  },
  describeScalingParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeScalingParameters', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  describeScalingParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeScalingParameters', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  describeScalingParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeScalingParameters', 'CloudSearch', Promise.reject(result), true, mock)
  },
  describeServiceAccessPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeServiceAccessPolicies', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  describeServiceAccessPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeServiceAccessPolicies', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  describeServiceAccessPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeServiceAccessPolicies', 'CloudSearch', Promise.reject(result), true, mock)
  },
  describeSuggesters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeSuggesters', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  describeSuggestersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeSuggesters', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  describeSuggestersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'describeSuggesters', 'CloudSearch', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'destroy', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'destroy', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'destroy', 'CloudSearch', Promise.reject(result), true, mock)
  },
  indexDocuments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'indexDocuments', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  indexDocumentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'indexDocuments', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  indexDocumentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'indexDocuments', 'CloudSearch', Promise.reject(result), true, mock)
  },
  listDomainNames: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'listDomainNames', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  listDomainNamesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'listDomainNames', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  listDomainNamesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'listDomainNames', 'CloudSearch', Promise.reject(result), true, mock)
  },
  updateAvailabilityOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'updateAvailabilityOptions', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  updateAvailabilityOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'updateAvailabilityOptions', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  updateAvailabilityOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'updateAvailabilityOptions', 'CloudSearch', Promise.reject(result), true, mock)
  },
  updateDomainEndpointOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'updateDomainEndpointOptions', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  updateDomainEndpointOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'updateDomainEndpointOptions', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  updateDomainEndpointOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'updateDomainEndpointOptions', 'CloudSearch', Promise.reject(result), true, mock)
  },
  updateScalingParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'updateScalingParameters', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  updateScalingParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'updateScalingParameters', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  updateScalingParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'updateScalingParameters', 'CloudSearch', Promise.reject(result), true, mock)
  },
  updateServiceAccessPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'updateServiceAccessPolicies', 'CloudSearch', Promise.resolve(result), true, mock)
  },
  updateServiceAccessPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'updateServiceAccessPolicies', 'CloudSearch', Promise.resolve(result), false, mock)
  },
  updateServiceAccessPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'updateServiceAccessPolicies', 'CloudSearch', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'send', 'CloudSearchClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'send', 'CloudSearchClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cloudsearch', 'send', 'CloudSearchClient', Promise.reject(result), true, mock)
  }
}