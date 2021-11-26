
/**
* @description mocks_v3:mockRoute53RecoveryReadiness module is mocks for AWS-SDK V3
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

  export const mockRoute53RecoveryReadiness = {
  createCell: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'createCell', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  createCellAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'createCell', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  createCellThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'createCell', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  createCrossAccountAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'createCrossAccountAuthorization', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  createCrossAccountAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'createCrossAccountAuthorization', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  createCrossAccountAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'createCrossAccountAuthorization', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  createReadinessCheck: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'createReadinessCheck', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  createReadinessCheckAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'createReadinessCheck', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  createReadinessCheckThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'createReadinessCheck', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  createRecoveryGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'createRecoveryGroup', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  createRecoveryGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'createRecoveryGroup', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  createRecoveryGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'createRecoveryGroup', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  createResourceSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'createResourceSet', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  createResourceSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'createResourceSet', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  createResourceSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'createResourceSet', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  deleteCell: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'deleteCell', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  deleteCellAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'deleteCell', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  deleteCellThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'deleteCell', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  deleteCrossAccountAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'deleteCrossAccountAuthorization', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  deleteCrossAccountAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'deleteCrossAccountAuthorization', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  deleteCrossAccountAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'deleteCrossAccountAuthorization', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  deleteReadinessCheck: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'deleteReadinessCheck', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  deleteReadinessCheckAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'deleteReadinessCheck', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  deleteReadinessCheckThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'deleteReadinessCheck', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  deleteRecoveryGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'deleteRecoveryGroup', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  deleteRecoveryGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'deleteRecoveryGroup', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  deleteRecoveryGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'deleteRecoveryGroup', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  deleteResourceSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'deleteResourceSet', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  deleteResourceSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'deleteResourceSet', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  deleteResourceSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'deleteResourceSet', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'destroy', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'destroy', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'destroy', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  getArchitectureRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getArchitectureRecommendations', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  getArchitectureRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getArchitectureRecommendations', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  getArchitectureRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getArchitectureRecommendations', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  getCell: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getCell', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  getCellAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getCell', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  getCellThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getCell', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  getCellReadinessSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getCellReadinessSummary', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  getCellReadinessSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getCellReadinessSummary', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  getCellReadinessSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getCellReadinessSummary', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  getReadinessCheck: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getReadinessCheck', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  getReadinessCheckAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getReadinessCheck', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  getReadinessCheckThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getReadinessCheck', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  getReadinessCheckResourceStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getReadinessCheckResourceStatus', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  getReadinessCheckResourceStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getReadinessCheckResourceStatus', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  getReadinessCheckResourceStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getReadinessCheckResourceStatus', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  getReadinessCheckStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getReadinessCheckStatus', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  getReadinessCheckStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getReadinessCheckStatus', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  getReadinessCheckStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getReadinessCheckStatus', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  getRecoveryGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getRecoveryGroup', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  getRecoveryGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getRecoveryGroup', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  getRecoveryGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getRecoveryGroup', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  getRecoveryGroupReadinessSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getRecoveryGroupReadinessSummary', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  getRecoveryGroupReadinessSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getRecoveryGroupReadinessSummary', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  getRecoveryGroupReadinessSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getRecoveryGroupReadinessSummary', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  getResourceSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getResourceSet', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  getResourceSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getResourceSet', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  getResourceSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'getResourceSet', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  listCells: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'listCells', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  listCellsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'listCells', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  listCellsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'listCells', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  listCrossAccountAuthorizations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'listCrossAccountAuthorizations', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  listCrossAccountAuthorizationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'listCrossAccountAuthorizations', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  listCrossAccountAuthorizationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'listCrossAccountAuthorizations', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  listReadinessChecks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'listReadinessChecks', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  listReadinessChecksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'listReadinessChecks', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  listReadinessChecksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'listReadinessChecks', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  listRecoveryGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'listRecoveryGroups', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  listRecoveryGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'listRecoveryGroups', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  listRecoveryGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'listRecoveryGroups', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  listResourceSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'listResourceSets', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  listResourceSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'listResourceSets', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  listResourceSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'listResourceSets', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  listRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'listRules', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  listRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'listRules', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  listRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'listRules', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  listTagsForResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'listTagsForResources', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  listTagsForResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'listTagsForResources', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  listTagsForResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'listTagsForResources', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'tagResource', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'tagResource', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'tagResource', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'untagResource', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'untagResource', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'untagResource', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  updateCell: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'updateCell', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  updateCellAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'updateCell', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  updateCellThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'updateCell', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  updateReadinessCheck: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'updateReadinessCheck', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  updateReadinessCheckAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'updateReadinessCheck', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  updateReadinessCheckThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'updateReadinessCheck', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  updateRecoveryGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'updateRecoveryGroup', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  updateRecoveryGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'updateRecoveryGroup', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  updateRecoveryGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'updateRecoveryGroup', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  updateResourceSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'updateResourceSet', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  updateResourceSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'updateResourceSet', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  updateResourceSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'updateResourceSet', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'send', 'Route53RecoveryReadinessClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'send', 'Route53RecoveryReadinessClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-route53-recovery-readiness', 'send', 'Route53RecoveryReadinessClient', Promise.reject(result), true, mock)
  }
}