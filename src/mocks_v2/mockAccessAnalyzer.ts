
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
  export const mockAccessAnalyzer = {
  applyArchiveRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('applyArchiveRule', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  applyArchiveRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('applyArchiveRule', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  applyArchiveRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('applyArchiveRule', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  cancelPolicyGeneration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelPolicyGeneration', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  cancelPolicyGenerationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelPolicyGeneration', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  cancelPolicyGenerationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelPolicyGeneration', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  createAccessPreview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAccessPreview', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  createAccessPreviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAccessPreview', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  createAccessPreviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAccessPreview', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  createAnalyzer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAnalyzer', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  createAnalyzerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAnalyzer', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  createAnalyzerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAnalyzer', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  createArchiveRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createArchiveRule', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  createArchiveRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createArchiveRule', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  createArchiveRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createArchiveRule', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  deleteAnalyzer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAnalyzer', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  deleteAnalyzerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAnalyzer', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  deleteAnalyzerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAnalyzer', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  deleteArchiveRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteArchiveRule', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  deleteArchiveRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteArchiveRule', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  deleteArchiveRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteArchiveRule', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  getAccessPreview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccessPreview', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  getAccessPreviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccessPreview', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  getAccessPreviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAccessPreview', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  getAnalyzedResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAnalyzedResource', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  getAnalyzedResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAnalyzedResource', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  getAnalyzedResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAnalyzedResource', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  getAnalyzer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAnalyzer', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  getAnalyzerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAnalyzer', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  getAnalyzerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAnalyzer', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  getArchiveRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getArchiveRule', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  getArchiveRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getArchiveRule', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  getArchiveRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getArchiveRule', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  getFinding: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFinding', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  getFindingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFinding', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  getFindingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFinding', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  getGeneratedPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGeneratedPolicy', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  getGeneratedPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGeneratedPolicy', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  getGeneratedPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getGeneratedPolicy', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  listAccessPreviewFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccessPreviewFindings', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  listAccessPreviewFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccessPreviewFindings', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  listAccessPreviewFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccessPreviewFindings', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  listAccessPreviews: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccessPreviews', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  listAccessPreviewsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccessPreviews', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  listAccessPreviewsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccessPreviews', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  listAnalyzedResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAnalyzedResources', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  listAnalyzedResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAnalyzedResources', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  listAnalyzedResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAnalyzedResources', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  listAnalyzers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAnalyzers', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  listAnalyzersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAnalyzers', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  listAnalyzersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAnalyzers', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  listArchiveRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listArchiveRules', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  listArchiveRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listArchiveRules', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  listArchiveRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listArchiveRules', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  listFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFindings', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  listFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFindings', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  listFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFindings', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  listPolicyGenerations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPolicyGenerations', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  listPolicyGenerationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPolicyGenerations', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  listPolicyGenerationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listPolicyGenerations', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  startPolicyGeneration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startPolicyGeneration', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  startPolicyGenerationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startPolicyGeneration', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  startPolicyGenerationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startPolicyGeneration', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  startResourceScan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startResourceScan', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  startResourceScanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startResourceScan', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  startResourceScanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startResourceScan', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  updateArchiveRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateArchiveRule', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  updateArchiveRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateArchiveRule', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  updateArchiveRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateArchiveRule', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  updateFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFindings', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  updateFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFindings', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  updateFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFindings', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
  validatePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('validatePolicy', 'AccessAnalyzer', Promise.resolve(result), true, mock)
  },
  validatePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('validatePolicy', 'AccessAnalyzer', Promise.resolve(result), false, mock)
  },
  validatePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('validatePolicy', 'AccessAnalyzer', Promise.reject(result), true, mock)
  },
}
