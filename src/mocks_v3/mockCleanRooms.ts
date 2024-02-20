
/**
* @description mocks_v3:mockCleanRooms module is mocks for AWS-SDK V3
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
export const mockCleanRooms = {
  batchGetCollaborationAnalysisTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'batchGetCollaborationAnalysisTemplate', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  batchGetCollaborationAnalysisTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'batchGetCollaborationAnalysisTemplate', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  batchGetCollaborationAnalysisTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'batchGetCollaborationAnalysisTemplate', 'CleanRooms', Promise.reject(result), true, mock)
  },
  batchGetSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'batchGetSchema', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  batchGetSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'batchGetSchema', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  batchGetSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'batchGetSchema', 'CleanRooms', Promise.reject(result), true, mock)
  },
  createAnalysisTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createAnalysisTemplate', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  createAnalysisTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createAnalysisTemplate', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  createAnalysisTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createAnalysisTemplate', 'CleanRooms', Promise.reject(result), true, mock)
  },
  createCollaboration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createCollaboration', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  createCollaborationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createCollaboration', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  createCollaborationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createCollaboration', 'CleanRooms', Promise.reject(result), true, mock)
  },
  createConfiguredAudienceModelAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createConfiguredAudienceModelAssociation', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  createConfiguredAudienceModelAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createConfiguredAudienceModelAssociation', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  createConfiguredAudienceModelAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createConfiguredAudienceModelAssociation', 'CleanRooms', Promise.reject(result), true, mock)
  },
  createConfiguredTableAnalysisRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createConfiguredTableAnalysisRule', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  createConfiguredTableAnalysisRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createConfiguredTableAnalysisRule', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  createConfiguredTableAnalysisRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createConfiguredTableAnalysisRule', 'CleanRooms', Promise.reject(result), true, mock)
  },
  createConfiguredTableAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createConfiguredTableAssociation', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  createConfiguredTableAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createConfiguredTableAssociation', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  createConfiguredTableAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createConfiguredTableAssociation', 'CleanRooms', Promise.reject(result), true, mock)
  },
  createConfiguredTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createConfiguredTable', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  createConfiguredTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createConfiguredTable', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  createConfiguredTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createConfiguredTable', 'CleanRooms', Promise.reject(result), true, mock)
  },
  createMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createMembership', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  createMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createMembership', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  createMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createMembership', 'CleanRooms', Promise.reject(result), true, mock)
  },
  createPrivacyBudgetTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createPrivacyBudgetTemplate', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  createPrivacyBudgetTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createPrivacyBudgetTemplate', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  createPrivacyBudgetTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'createPrivacyBudgetTemplate', 'CleanRooms', Promise.reject(result), true, mock)
  },
  deleteAnalysisTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteAnalysisTemplate', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  deleteAnalysisTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteAnalysisTemplate', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  deleteAnalysisTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteAnalysisTemplate', 'CleanRooms', Promise.reject(result), true, mock)
  },
  deleteCollaboration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteCollaboration', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  deleteCollaborationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteCollaboration', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  deleteCollaborationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteCollaboration', 'CleanRooms', Promise.reject(result), true, mock)
  },
  deleteConfiguredAudienceModelAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteConfiguredAudienceModelAssociation', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  deleteConfiguredAudienceModelAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteConfiguredAudienceModelAssociation', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  deleteConfiguredAudienceModelAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteConfiguredAudienceModelAssociation', 'CleanRooms', Promise.reject(result), true, mock)
  },
  deleteConfiguredTableAnalysisRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteConfiguredTableAnalysisRule', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  deleteConfiguredTableAnalysisRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteConfiguredTableAnalysisRule', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  deleteConfiguredTableAnalysisRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteConfiguredTableAnalysisRule', 'CleanRooms', Promise.reject(result), true, mock)
  },
  deleteConfiguredTableAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteConfiguredTableAssociation', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  deleteConfiguredTableAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteConfiguredTableAssociation', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  deleteConfiguredTableAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteConfiguredTableAssociation', 'CleanRooms', Promise.reject(result), true, mock)
  },
  deleteConfiguredTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteConfiguredTable', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  deleteConfiguredTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteConfiguredTable', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  deleteConfiguredTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteConfiguredTable', 'CleanRooms', Promise.reject(result), true, mock)
  },
  deleteMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteMember', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  deleteMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteMember', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  deleteMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteMember', 'CleanRooms', Promise.reject(result), true, mock)
  },
  deleteMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteMembership', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  deleteMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteMembership', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  deleteMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deleteMembership', 'CleanRooms', Promise.reject(result), true, mock)
  },
  deletePrivacyBudgetTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deletePrivacyBudgetTemplate', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  deletePrivacyBudgetTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deletePrivacyBudgetTemplate', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  deletePrivacyBudgetTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'deletePrivacyBudgetTemplate', 'CleanRooms', Promise.reject(result), true, mock)
  },
  getAnalysisTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getAnalysisTemplate', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  getAnalysisTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getAnalysisTemplate', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  getAnalysisTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getAnalysisTemplate', 'CleanRooms', Promise.reject(result), true, mock)
  },
  getCollaborationAnalysisTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getCollaborationAnalysisTemplate', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  getCollaborationAnalysisTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getCollaborationAnalysisTemplate', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  getCollaborationAnalysisTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getCollaborationAnalysisTemplate', 'CleanRooms', Promise.reject(result), true, mock)
  },
  getCollaboration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getCollaboration', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  getCollaborationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getCollaboration', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  getCollaborationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getCollaboration', 'CleanRooms', Promise.reject(result), true, mock)
  },
  getCollaborationConfiguredAudienceModelAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getCollaborationConfiguredAudienceModelAssociation', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  getCollaborationConfiguredAudienceModelAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getCollaborationConfiguredAudienceModelAssociation', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  getCollaborationConfiguredAudienceModelAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getCollaborationConfiguredAudienceModelAssociation', 'CleanRooms', Promise.reject(result), true, mock)
  },
  getCollaborationPrivacyBudgetTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getCollaborationPrivacyBudgetTemplate', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  getCollaborationPrivacyBudgetTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getCollaborationPrivacyBudgetTemplate', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  getCollaborationPrivacyBudgetTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getCollaborationPrivacyBudgetTemplate', 'CleanRooms', Promise.reject(result), true, mock)
  },
  getConfiguredAudienceModelAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getConfiguredAudienceModelAssociation', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  getConfiguredAudienceModelAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getConfiguredAudienceModelAssociation', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  getConfiguredAudienceModelAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getConfiguredAudienceModelAssociation', 'CleanRooms', Promise.reject(result), true, mock)
  },
  getConfiguredTableAnalysisRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getConfiguredTableAnalysisRule', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  getConfiguredTableAnalysisRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getConfiguredTableAnalysisRule', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  getConfiguredTableAnalysisRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getConfiguredTableAnalysisRule', 'CleanRooms', Promise.reject(result), true, mock)
  },
  getConfiguredTableAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getConfiguredTableAssociation', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  getConfiguredTableAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getConfiguredTableAssociation', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  getConfiguredTableAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getConfiguredTableAssociation', 'CleanRooms', Promise.reject(result), true, mock)
  },
  getConfiguredTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getConfiguredTable', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  getConfiguredTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getConfiguredTable', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  getConfiguredTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getConfiguredTable', 'CleanRooms', Promise.reject(result), true, mock)
  },
  getMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getMembership', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  getMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getMembership', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  getMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getMembership', 'CleanRooms', Promise.reject(result), true, mock)
  },
  getPrivacyBudgetTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getPrivacyBudgetTemplate', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  getPrivacyBudgetTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getPrivacyBudgetTemplate', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  getPrivacyBudgetTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getPrivacyBudgetTemplate', 'CleanRooms', Promise.reject(result), true, mock)
  },
  getProtectedQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getProtectedQuery', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  getProtectedQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getProtectedQuery', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  getProtectedQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getProtectedQuery', 'CleanRooms', Promise.reject(result), true, mock)
  },
  getSchemaAnalysisRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getSchemaAnalysisRule', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  getSchemaAnalysisRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getSchemaAnalysisRule', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  getSchemaAnalysisRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getSchemaAnalysisRule', 'CleanRooms', Promise.reject(result), true, mock)
  },
  getSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getSchema', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  getSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getSchema', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  getSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'getSchema', 'CleanRooms', Promise.reject(result), true, mock)
  },
  listAnalysisTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listAnalysisTemplates', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  listAnalysisTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listAnalysisTemplates', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  listAnalysisTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listAnalysisTemplates', 'CleanRooms', Promise.reject(result), true, mock)
  },
  listCollaborationAnalysisTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listCollaborationAnalysisTemplates', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  listCollaborationAnalysisTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listCollaborationAnalysisTemplates', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  listCollaborationAnalysisTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listCollaborationAnalysisTemplates', 'CleanRooms', Promise.reject(result), true, mock)
  },
  listCollaborationConfiguredAudienceModelAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listCollaborationConfiguredAudienceModelAssociations', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  listCollaborationConfiguredAudienceModelAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listCollaborationConfiguredAudienceModelAssociations', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  listCollaborationConfiguredAudienceModelAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listCollaborationConfiguredAudienceModelAssociations', 'CleanRooms', Promise.reject(result), true, mock)
  },
  listCollaborationPrivacyBudgetTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listCollaborationPrivacyBudgetTemplates', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  listCollaborationPrivacyBudgetTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listCollaborationPrivacyBudgetTemplates', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  listCollaborationPrivacyBudgetTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listCollaborationPrivacyBudgetTemplates', 'CleanRooms', Promise.reject(result), true, mock)
  },
  listCollaborationPrivacyBudgets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listCollaborationPrivacyBudgets', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  listCollaborationPrivacyBudgetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listCollaborationPrivacyBudgets', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  listCollaborationPrivacyBudgetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listCollaborationPrivacyBudgets', 'CleanRooms', Promise.reject(result), true, mock)
  },
  listCollaborations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listCollaborations', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  listCollaborationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listCollaborations', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  listCollaborationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listCollaborations', 'CleanRooms', Promise.reject(result), true, mock)
  },
  listConfiguredAudienceModelAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listConfiguredAudienceModelAssociations', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  listConfiguredAudienceModelAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listConfiguredAudienceModelAssociations', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  listConfiguredAudienceModelAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listConfiguredAudienceModelAssociations', 'CleanRooms', Promise.reject(result), true, mock)
  },
  listConfiguredTableAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listConfiguredTableAssociations', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  listConfiguredTableAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listConfiguredTableAssociations', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  listConfiguredTableAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listConfiguredTableAssociations', 'CleanRooms', Promise.reject(result), true, mock)
  },
  listConfiguredTables: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listConfiguredTables', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  listConfiguredTablesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listConfiguredTables', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  listConfiguredTablesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listConfiguredTables', 'CleanRooms', Promise.reject(result), true, mock)
  },
  listMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listMembers', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  listMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listMembers', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  listMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listMembers', 'CleanRooms', Promise.reject(result), true, mock)
  },
  listMemberships: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listMemberships', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  listMembershipsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listMemberships', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  listMembershipsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listMemberships', 'CleanRooms', Promise.reject(result), true, mock)
  },
  listPrivacyBudgetTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listPrivacyBudgetTemplates', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  listPrivacyBudgetTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listPrivacyBudgetTemplates', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  listPrivacyBudgetTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listPrivacyBudgetTemplates', 'CleanRooms', Promise.reject(result), true, mock)
  },
  listPrivacyBudgets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listPrivacyBudgets', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  listPrivacyBudgetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listPrivacyBudgets', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  listPrivacyBudgetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listPrivacyBudgets', 'CleanRooms', Promise.reject(result), true, mock)
  },
  listProtectedQueries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listProtectedQueries', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  listProtectedQueriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listProtectedQueries', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  listProtectedQueriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listProtectedQueries', 'CleanRooms', Promise.reject(result), true, mock)
  },
  listSchemas: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listSchemas', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  listSchemasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listSchemas', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  listSchemasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listSchemas', 'CleanRooms', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listTagsForResource', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listTagsForResource', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'listTagsForResource', 'CleanRooms', Promise.reject(result), true, mock)
  },
  previewPrivacyImpact: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'previewPrivacyImpact', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  previewPrivacyImpactAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'previewPrivacyImpact', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  previewPrivacyImpactThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'previewPrivacyImpact', 'CleanRooms', Promise.reject(result), true, mock)
  },
  startProtectedQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'startProtectedQuery', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  startProtectedQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'startProtectedQuery', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  startProtectedQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'startProtectedQuery', 'CleanRooms', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'tagResource', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'tagResource', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'tagResource', 'CleanRooms', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'untagResource', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'untagResource', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'untagResource', 'CleanRooms', Promise.reject(result), true, mock)
  },
  updateAnalysisTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateAnalysisTemplate', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  updateAnalysisTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateAnalysisTemplate', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  updateAnalysisTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateAnalysisTemplate', 'CleanRooms', Promise.reject(result), true, mock)
  },
  updateCollaboration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateCollaboration', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  updateCollaborationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateCollaboration', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  updateCollaborationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateCollaboration', 'CleanRooms', Promise.reject(result), true, mock)
  },
  updateConfiguredAudienceModelAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateConfiguredAudienceModelAssociation', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  updateConfiguredAudienceModelAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateConfiguredAudienceModelAssociation', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  updateConfiguredAudienceModelAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateConfiguredAudienceModelAssociation', 'CleanRooms', Promise.reject(result), true, mock)
  },
  updateConfiguredTableAnalysisRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateConfiguredTableAnalysisRule', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  updateConfiguredTableAnalysisRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateConfiguredTableAnalysisRule', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  updateConfiguredTableAnalysisRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateConfiguredTableAnalysisRule', 'CleanRooms', Promise.reject(result), true, mock)
  },
  updateConfiguredTableAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateConfiguredTableAssociation', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  updateConfiguredTableAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateConfiguredTableAssociation', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  updateConfiguredTableAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateConfiguredTableAssociation', 'CleanRooms', Promise.reject(result), true, mock)
  },
  updateConfiguredTable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateConfiguredTable', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  updateConfiguredTableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateConfiguredTable', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  updateConfiguredTableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateConfiguredTable', 'CleanRooms', Promise.reject(result), true, mock)
  },
  updateMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateMembership', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  updateMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateMembership', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  updateMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateMembership', 'CleanRooms', Promise.reject(result), true, mock)
  },
  updatePrivacyBudgetTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updatePrivacyBudgetTemplate', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  updatePrivacyBudgetTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updatePrivacyBudgetTemplate', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  updatePrivacyBudgetTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updatePrivacyBudgetTemplate', 'CleanRooms', Promise.reject(result), true, mock)
  },
  updateProtectedQuery: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateProtectedQuery', 'CleanRooms', Promise.resolve(result), true, mock)
  },
  updateProtectedQueryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateProtectedQuery', 'CleanRooms', Promise.resolve(result), false, mock)
  },
  updateProtectedQueryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'updateProtectedQuery', 'CleanRooms', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'send', 'CleanRoomsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'send', 'CleanRoomsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-cleanrooms', 'send', 'CleanRoomsClient', Promise.reject(result), true, mock)
  }
}
