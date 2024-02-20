
/**
* @description mocks_v3:mockInspector module is mocks for AWS-SDK V3
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
export const mockInspector = {
  addAttributesToFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'addAttributesToFindings', 'Inspector', Promise.resolve(result), true, mock)
  },
  addAttributesToFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'addAttributesToFindings', 'Inspector', Promise.resolve(result), false, mock)
  },
  addAttributesToFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'addAttributesToFindings', 'Inspector', Promise.reject(result), true, mock)
  },
  createAssessmentTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'createAssessmentTarget', 'Inspector', Promise.resolve(result), true, mock)
  },
  createAssessmentTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'createAssessmentTarget', 'Inspector', Promise.resolve(result), false, mock)
  },
  createAssessmentTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'createAssessmentTarget', 'Inspector', Promise.reject(result), true, mock)
  },
  createAssessmentTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'createAssessmentTemplate', 'Inspector', Promise.resolve(result), true, mock)
  },
  createAssessmentTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'createAssessmentTemplate', 'Inspector', Promise.resolve(result), false, mock)
  },
  createAssessmentTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'createAssessmentTemplate', 'Inspector', Promise.reject(result), true, mock)
  },
  createExclusionsPreview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'createExclusionsPreview', 'Inspector', Promise.resolve(result), true, mock)
  },
  createExclusionsPreviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'createExclusionsPreview', 'Inspector', Promise.resolve(result), false, mock)
  },
  createExclusionsPreviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'createExclusionsPreview', 'Inspector', Promise.reject(result), true, mock)
  },
  createResourceGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'createResourceGroup', 'Inspector', Promise.resolve(result), true, mock)
  },
  createResourceGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'createResourceGroup', 'Inspector', Promise.resolve(result), false, mock)
  },
  createResourceGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'createResourceGroup', 'Inspector', Promise.reject(result), true, mock)
  },
  deleteAssessmentRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'deleteAssessmentRun', 'Inspector', Promise.resolve(result), true, mock)
  },
  deleteAssessmentRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'deleteAssessmentRun', 'Inspector', Promise.resolve(result), false, mock)
  },
  deleteAssessmentRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'deleteAssessmentRun', 'Inspector', Promise.reject(result), true, mock)
  },
  deleteAssessmentTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'deleteAssessmentTarget', 'Inspector', Promise.resolve(result), true, mock)
  },
  deleteAssessmentTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'deleteAssessmentTarget', 'Inspector', Promise.resolve(result), false, mock)
  },
  deleteAssessmentTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'deleteAssessmentTarget', 'Inspector', Promise.reject(result), true, mock)
  },
  deleteAssessmentTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'deleteAssessmentTemplate', 'Inspector', Promise.resolve(result), true, mock)
  },
  deleteAssessmentTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'deleteAssessmentTemplate', 'Inspector', Promise.resolve(result), false, mock)
  },
  deleteAssessmentTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'deleteAssessmentTemplate', 'Inspector', Promise.reject(result), true, mock)
  },
  describeAssessmentRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeAssessmentRuns', 'Inspector', Promise.resolve(result), true, mock)
  },
  describeAssessmentRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeAssessmentRuns', 'Inspector', Promise.resolve(result), false, mock)
  },
  describeAssessmentRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeAssessmentRuns', 'Inspector', Promise.reject(result), true, mock)
  },
  describeAssessmentTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeAssessmentTargets', 'Inspector', Promise.resolve(result), true, mock)
  },
  describeAssessmentTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeAssessmentTargets', 'Inspector', Promise.resolve(result), false, mock)
  },
  describeAssessmentTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeAssessmentTargets', 'Inspector', Promise.reject(result), true, mock)
  },
  describeAssessmentTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeAssessmentTemplates', 'Inspector', Promise.resolve(result), true, mock)
  },
  describeAssessmentTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeAssessmentTemplates', 'Inspector', Promise.resolve(result), false, mock)
  },
  describeAssessmentTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeAssessmentTemplates', 'Inspector', Promise.reject(result), true, mock)
  },
  describeCrossAccountAccessRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeCrossAccountAccessRole', 'Inspector', Promise.resolve(result), true, mock)
  },
  describeCrossAccountAccessRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeCrossAccountAccessRole', 'Inspector', Promise.resolve(result), false, mock)
  },
  describeCrossAccountAccessRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeCrossAccountAccessRole', 'Inspector', Promise.reject(result), true, mock)
  },
  describeExclusions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeExclusions', 'Inspector', Promise.resolve(result), true, mock)
  },
  describeExclusionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeExclusions', 'Inspector', Promise.resolve(result), false, mock)
  },
  describeExclusionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeExclusions', 'Inspector', Promise.reject(result), true, mock)
  },
  describeFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeFindings', 'Inspector', Promise.resolve(result), true, mock)
  },
  describeFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeFindings', 'Inspector', Promise.resolve(result), false, mock)
  },
  describeFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeFindings', 'Inspector', Promise.reject(result), true, mock)
  },
  describeResourceGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeResourceGroups', 'Inspector', Promise.resolve(result), true, mock)
  },
  describeResourceGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeResourceGroups', 'Inspector', Promise.resolve(result), false, mock)
  },
  describeResourceGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeResourceGroups', 'Inspector', Promise.reject(result), true, mock)
  },
  describeRulesPackages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeRulesPackages', 'Inspector', Promise.resolve(result), true, mock)
  },
  describeRulesPackagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeRulesPackages', 'Inspector', Promise.resolve(result), false, mock)
  },
  describeRulesPackagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'describeRulesPackages', 'Inspector', Promise.reject(result), true, mock)
  },
  getAssessmentReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'getAssessmentReport', 'Inspector', Promise.resolve(result), true, mock)
  },
  getAssessmentReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'getAssessmentReport', 'Inspector', Promise.resolve(result), false, mock)
  },
  getAssessmentReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'getAssessmentReport', 'Inspector', Promise.reject(result), true, mock)
  },
  getExclusionsPreview: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'getExclusionsPreview', 'Inspector', Promise.resolve(result), true, mock)
  },
  getExclusionsPreviewAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'getExclusionsPreview', 'Inspector', Promise.resolve(result), false, mock)
  },
  getExclusionsPreviewThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'getExclusionsPreview', 'Inspector', Promise.reject(result), true, mock)
  },
  getTelemetryMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'getTelemetryMetadata', 'Inspector', Promise.resolve(result), true, mock)
  },
  getTelemetryMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'getTelemetryMetadata', 'Inspector', Promise.resolve(result), false, mock)
  },
  getTelemetryMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'getTelemetryMetadata', 'Inspector', Promise.reject(result), true, mock)
  },
  listAssessmentRunAgents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listAssessmentRunAgents', 'Inspector', Promise.resolve(result), true, mock)
  },
  listAssessmentRunAgentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listAssessmentRunAgents', 'Inspector', Promise.resolve(result), false, mock)
  },
  listAssessmentRunAgentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listAssessmentRunAgents', 'Inspector', Promise.reject(result), true, mock)
  },
  listAssessmentRuns: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listAssessmentRuns', 'Inspector', Promise.resolve(result), true, mock)
  },
  listAssessmentRunsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listAssessmentRuns', 'Inspector', Promise.resolve(result), false, mock)
  },
  listAssessmentRunsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listAssessmentRuns', 'Inspector', Promise.reject(result), true, mock)
  },
  listAssessmentTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listAssessmentTargets', 'Inspector', Promise.resolve(result), true, mock)
  },
  listAssessmentTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listAssessmentTargets', 'Inspector', Promise.resolve(result), false, mock)
  },
  listAssessmentTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listAssessmentTargets', 'Inspector', Promise.reject(result), true, mock)
  },
  listAssessmentTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listAssessmentTemplates', 'Inspector', Promise.resolve(result), true, mock)
  },
  listAssessmentTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listAssessmentTemplates', 'Inspector', Promise.resolve(result), false, mock)
  },
  listAssessmentTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listAssessmentTemplates', 'Inspector', Promise.reject(result), true, mock)
  },
  listEventSubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listEventSubscriptions', 'Inspector', Promise.resolve(result), true, mock)
  },
  listEventSubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listEventSubscriptions', 'Inspector', Promise.resolve(result), false, mock)
  },
  listEventSubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listEventSubscriptions', 'Inspector', Promise.reject(result), true, mock)
  },
  listExclusions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listExclusions', 'Inspector', Promise.resolve(result), true, mock)
  },
  listExclusionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listExclusions', 'Inspector', Promise.resolve(result), false, mock)
  },
  listExclusionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listExclusions', 'Inspector', Promise.reject(result), true, mock)
  },
  listFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listFindings', 'Inspector', Promise.resolve(result), true, mock)
  },
  listFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listFindings', 'Inspector', Promise.resolve(result), false, mock)
  },
  listFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listFindings', 'Inspector', Promise.reject(result), true, mock)
  },
  listRulesPackages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listRulesPackages', 'Inspector', Promise.resolve(result), true, mock)
  },
  listRulesPackagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listRulesPackages', 'Inspector', Promise.resolve(result), false, mock)
  },
  listRulesPackagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listRulesPackages', 'Inspector', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listTagsForResource', 'Inspector', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listTagsForResource', 'Inspector', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'listTagsForResource', 'Inspector', Promise.reject(result), true, mock)
  },
  previewAgents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'previewAgents', 'Inspector', Promise.resolve(result), true, mock)
  },
  previewAgentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'previewAgents', 'Inspector', Promise.resolve(result), false, mock)
  },
  previewAgentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'previewAgents', 'Inspector', Promise.reject(result), true, mock)
  },
  registerCrossAccountAccessRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'registerCrossAccountAccessRole', 'Inspector', Promise.resolve(result), true, mock)
  },
  registerCrossAccountAccessRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'registerCrossAccountAccessRole', 'Inspector', Promise.resolve(result), false, mock)
  },
  registerCrossAccountAccessRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'registerCrossAccountAccessRole', 'Inspector', Promise.reject(result), true, mock)
  },
  removeAttributesFromFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'removeAttributesFromFindings', 'Inspector', Promise.resolve(result), true, mock)
  },
  removeAttributesFromFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'removeAttributesFromFindings', 'Inspector', Promise.resolve(result), false, mock)
  },
  removeAttributesFromFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'removeAttributesFromFindings', 'Inspector', Promise.reject(result), true, mock)
  },
  setTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'setTagsForResource', 'Inspector', Promise.resolve(result), true, mock)
  },
  setTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'setTagsForResource', 'Inspector', Promise.resolve(result), false, mock)
  },
  setTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'setTagsForResource', 'Inspector', Promise.reject(result), true, mock)
  },
  startAssessmentRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'startAssessmentRun', 'Inspector', Promise.resolve(result), true, mock)
  },
  startAssessmentRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'startAssessmentRun', 'Inspector', Promise.resolve(result), false, mock)
  },
  startAssessmentRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'startAssessmentRun', 'Inspector', Promise.reject(result), true, mock)
  },
  stopAssessmentRun: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'stopAssessmentRun', 'Inspector', Promise.resolve(result), true, mock)
  },
  stopAssessmentRunAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'stopAssessmentRun', 'Inspector', Promise.resolve(result), false, mock)
  },
  stopAssessmentRunThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'stopAssessmentRun', 'Inspector', Promise.reject(result), true, mock)
  },
  subscribeToEvent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'subscribeToEvent', 'Inspector', Promise.resolve(result), true, mock)
  },
  subscribeToEventAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'subscribeToEvent', 'Inspector', Promise.resolve(result), false, mock)
  },
  subscribeToEventThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'subscribeToEvent', 'Inspector', Promise.reject(result), true, mock)
  },
  unsubscribeFromEvent: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'unsubscribeFromEvent', 'Inspector', Promise.resolve(result), true, mock)
  },
  unsubscribeFromEventAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'unsubscribeFromEvent', 'Inspector', Promise.resolve(result), false, mock)
  },
  unsubscribeFromEventThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'unsubscribeFromEvent', 'Inspector', Promise.reject(result), true, mock)
  },
  updateAssessmentTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'updateAssessmentTarget', 'Inspector', Promise.resolve(result), true, mock)
  },
  updateAssessmentTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'updateAssessmentTarget', 'Inspector', Promise.resolve(result), false, mock)
  },
  updateAssessmentTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'updateAssessmentTarget', 'Inspector', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'send', 'InspectorClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'send', 'InspectorClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector', 'send', 'InspectorClient', Promise.reject(result), true, mock)
  }
}
