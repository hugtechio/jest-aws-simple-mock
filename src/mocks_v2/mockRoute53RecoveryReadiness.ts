
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
  export const mockRoute53RecoveryReadiness = {
  createCell: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCell', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  createCellAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCell', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  createCellThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCell', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  createCrossAccountAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCrossAccountAuthorization', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  createCrossAccountAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCrossAccountAuthorization', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  createCrossAccountAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCrossAccountAuthorization', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  createReadinessCheck: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReadinessCheck', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  createReadinessCheckAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReadinessCheck', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  createReadinessCheckThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReadinessCheck', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  createRecoveryGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRecoveryGroup', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  createRecoveryGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRecoveryGroup', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  createRecoveryGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createRecoveryGroup', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  createResourceSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResourceSet', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  createResourceSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResourceSet', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  createResourceSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResourceSet', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  deleteCell: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCell', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  deleteCellAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCell', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  deleteCellThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCell', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  deleteCrossAccountAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCrossAccountAuthorization', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  deleteCrossAccountAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCrossAccountAuthorization', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  deleteCrossAccountAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCrossAccountAuthorization', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  deleteReadinessCheck: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReadinessCheck', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  deleteReadinessCheckAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReadinessCheck', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  deleteReadinessCheckThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReadinessCheck', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  deleteRecoveryGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRecoveryGroup', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  deleteRecoveryGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRecoveryGroup', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  deleteRecoveryGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRecoveryGroup', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  deleteResourceSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourceSet', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  deleteResourceSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourceSet', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  deleteResourceSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourceSet', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  getArchitectureRecommendations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getArchitectureRecommendations', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  getArchitectureRecommendationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getArchitectureRecommendations', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  getArchitectureRecommendationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getArchitectureRecommendations', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  getCell: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCell', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  getCellAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCell', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  getCellThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCell', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  getCellReadinessSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCellReadinessSummary', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  getCellReadinessSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCellReadinessSummary', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  getCellReadinessSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCellReadinessSummary', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  getReadinessCheck: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReadinessCheck', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  getReadinessCheckAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReadinessCheck', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  getReadinessCheckThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReadinessCheck', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  getReadinessCheckResourceStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReadinessCheckResourceStatus', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  getReadinessCheckResourceStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReadinessCheckResourceStatus', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  getReadinessCheckResourceStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReadinessCheckResourceStatus', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  getReadinessCheckStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReadinessCheckStatus', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  getReadinessCheckStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReadinessCheckStatus', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  getReadinessCheckStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getReadinessCheckStatus', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  getRecoveryGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecoveryGroup', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  getRecoveryGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecoveryGroup', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  getRecoveryGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecoveryGroup', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  getRecoveryGroupReadinessSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecoveryGroupReadinessSummary', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  getRecoveryGroupReadinessSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecoveryGroupReadinessSummary', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  getRecoveryGroupReadinessSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecoveryGroupReadinessSummary', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  getResourceSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceSet', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  getResourceSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceSet', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  getResourceSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResourceSet', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  listCells: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCells', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  listCellsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCells', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  listCellsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCells', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  listCrossAccountAuthorizations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCrossAccountAuthorizations', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  listCrossAccountAuthorizationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCrossAccountAuthorizations', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  listCrossAccountAuthorizationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCrossAccountAuthorizations', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  listReadinessChecks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReadinessChecks', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  listReadinessChecksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReadinessChecks', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  listReadinessChecksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReadinessChecks', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  listRecoveryGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecoveryGroups', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  listRecoveryGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecoveryGroups', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  listRecoveryGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecoveryGroups', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  listResourceSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceSets', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  listResourceSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceSets', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  listResourceSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceSets', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  listRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRules', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  listRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRules', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  listRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRules', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  listTagsForResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResources', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  listTagsForResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResources', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  listTagsForResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResources', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  updateCell: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCell', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  updateCellAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCell', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  updateCellThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateCell', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  updateReadinessCheck: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReadinessCheck', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  updateReadinessCheckAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReadinessCheck', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  updateReadinessCheckThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReadinessCheck', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  updateRecoveryGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRecoveryGroup', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  updateRecoveryGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRecoveryGroup', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  updateRecoveryGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRecoveryGroup', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
  updateResourceSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResourceSet', 'Route53RecoveryReadiness', Promise.resolve(result), true, mock)
  },
  updateResourceSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResourceSet', 'Route53RecoveryReadiness', Promise.resolve(result), false, mock)
  },
  updateResourceSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResourceSet', 'Route53RecoveryReadiness', Promise.reject(result), true, mock)
  },
}
