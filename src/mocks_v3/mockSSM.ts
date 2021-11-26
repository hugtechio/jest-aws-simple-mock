
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockSSM = {
  addTagsToResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'addTagsToResource', 'SSM', Promise.resolve(result), true, mock)
  },
  addTagsToResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'addTagsToResource', 'SSM', Promise.resolve(result), false, mock)
  },
  addTagsToResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'addTagsToResource', 'SSM', Promise.reject(result), true, mock)
  },
  associateOpsItemRelatedItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'associateOpsItemRelatedItem', 'SSM', Promise.resolve(result), true, mock)
  },
  associateOpsItemRelatedItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'associateOpsItemRelatedItem', 'SSM', Promise.resolve(result), false, mock)
  },
  associateOpsItemRelatedItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'associateOpsItemRelatedItem', 'SSM', Promise.reject(result), true, mock)
  },
  cancelCommand: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'cancelCommand', 'SSM', Promise.resolve(result), true, mock)
  },
  cancelCommandAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'cancelCommand', 'SSM', Promise.resolve(result), false, mock)
  },
  cancelCommandThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'cancelCommand', 'SSM', Promise.reject(result), true, mock)
  },
  cancelMaintenanceWindowExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'cancelMaintenanceWindowExecution', 'SSM', Promise.resolve(result), true, mock)
  },
  cancelMaintenanceWindowExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'cancelMaintenanceWindowExecution', 'SSM', Promise.resolve(result), false, mock)
  },
  cancelMaintenanceWindowExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'cancelMaintenanceWindowExecution', 'SSM', Promise.reject(result), true, mock)
  },
  createActivation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createActivation', 'SSM', Promise.resolve(result), true, mock)
  },
  createActivationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createActivation', 'SSM', Promise.resolve(result), false, mock)
  },
  createActivationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createActivation', 'SSM', Promise.reject(result), true, mock)
  },
  createAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createAssociation', 'SSM', Promise.resolve(result), true, mock)
  },
  createAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createAssociation', 'SSM', Promise.resolve(result), false, mock)
  },
  createAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createAssociation', 'SSM', Promise.reject(result), true, mock)
  },
  createAssociationBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createAssociationBatch', 'SSM', Promise.resolve(result), true, mock)
  },
  createAssociationBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createAssociationBatch', 'SSM', Promise.resolve(result), false, mock)
  },
  createAssociationBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createAssociationBatch', 'SSM', Promise.reject(result), true, mock)
  },
  createDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createDocument', 'SSM', Promise.resolve(result), true, mock)
  },
  createDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createDocument', 'SSM', Promise.resolve(result), false, mock)
  },
  createDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createDocument', 'SSM', Promise.reject(result), true, mock)
  },
  createMaintenanceWindow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createMaintenanceWindow', 'SSM', Promise.resolve(result), true, mock)
  },
  createMaintenanceWindowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createMaintenanceWindow', 'SSM', Promise.resolve(result), false, mock)
  },
  createMaintenanceWindowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createMaintenanceWindow', 'SSM', Promise.reject(result), true, mock)
  },
  createOpsItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createOpsItem', 'SSM', Promise.resolve(result), true, mock)
  },
  createOpsItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createOpsItem', 'SSM', Promise.resolve(result), false, mock)
  },
  createOpsItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createOpsItem', 'SSM', Promise.reject(result), true, mock)
  },
  createOpsMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createOpsMetadata', 'SSM', Promise.resolve(result), true, mock)
  },
  createOpsMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createOpsMetadata', 'SSM', Promise.resolve(result), false, mock)
  },
  createOpsMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createOpsMetadata', 'SSM', Promise.reject(result), true, mock)
  },
  createPatchBaseline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createPatchBaseline', 'SSM', Promise.resolve(result), true, mock)
  },
  createPatchBaselineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createPatchBaseline', 'SSM', Promise.resolve(result), false, mock)
  },
  createPatchBaselineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createPatchBaseline', 'SSM', Promise.reject(result), true, mock)
  },
  createResourceDataSync: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createResourceDataSync', 'SSM', Promise.resolve(result), true, mock)
  },
  createResourceDataSyncAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createResourceDataSync', 'SSM', Promise.resolve(result), false, mock)
  },
  createResourceDataSyncThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'createResourceDataSync', 'SSM', Promise.reject(result), true, mock)
  },
  deleteActivation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteActivation', 'SSM', Promise.resolve(result), true, mock)
  },
  deleteActivationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteActivation', 'SSM', Promise.resolve(result), false, mock)
  },
  deleteActivationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteActivation', 'SSM', Promise.reject(result), true, mock)
  },
  deleteAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteAssociation', 'SSM', Promise.resolve(result), true, mock)
  },
  deleteAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteAssociation', 'SSM', Promise.resolve(result), false, mock)
  },
  deleteAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteAssociation', 'SSM', Promise.reject(result), true, mock)
  },
  deleteDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteDocument', 'SSM', Promise.resolve(result), true, mock)
  },
  deleteDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteDocument', 'SSM', Promise.resolve(result), false, mock)
  },
  deleteDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteDocument', 'SSM', Promise.reject(result), true, mock)
  },
  deleteInventory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteInventory', 'SSM', Promise.resolve(result), true, mock)
  },
  deleteInventoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteInventory', 'SSM', Promise.resolve(result), false, mock)
  },
  deleteInventoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteInventory', 'SSM', Promise.reject(result), true, mock)
  },
  deleteMaintenanceWindow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteMaintenanceWindow', 'SSM', Promise.resolve(result), true, mock)
  },
  deleteMaintenanceWindowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteMaintenanceWindow', 'SSM', Promise.resolve(result), false, mock)
  },
  deleteMaintenanceWindowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteMaintenanceWindow', 'SSM', Promise.reject(result), true, mock)
  },
  deleteOpsMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteOpsMetadata', 'SSM', Promise.resolve(result), true, mock)
  },
  deleteOpsMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteOpsMetadata', 'SSM', Promise.resolve(result), false, mock)
  },
  deleteOpsMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteOpsMetadata', 'SSM', Promise.reject(result), true, mock)
  },
  deleteParameter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteParameter', 'SSM', Promise.resolve(result), true, mock)
  },
  deleteParameterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteParameter', 'SSM', Promise.resolve(result), false, mock)
  },
  deleteParameterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteParameter', 'SSM', Promise.reject(result), true, mock)
  },
  deleteParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteParameters', 'SSM', Promise.resolve(result), true, mock)
  },
  deleteParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteParameters', 'SSM', Promise.resolve(result), false, mock)
  },
  deleteParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteParameters', 'SSM', Promise.reject(result), true, mock)
  },
  deletePatchBaseline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deletePatchBaseline', 'SSM', Promise.resolve(result), true, mock)
  },
  deletePatchBaselineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deletePatchBaseline', 'SSM', Promise.resolve(result), false, mock)
  },
  deletePatchBaselineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deletePatchBaseline', 'SSM', Promise.reject(result), true, mock)
  },
  deleteResourceDataSync: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteResourceDataSync', 'SSM', Promise.resolve(result), true, mock)
  },
  deleteResourceDataSyncAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteResourceDataSync', 'SSM', Promise.resolve(result), false, mock)
  },
  deleteResourceDataSyncThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deleteResourceDataSync', 'SSM', Promise.reject(result), true, mock)
  },
  deregisterManagedInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deregisterManagedInstance', 'SSM', Promise.resolve(result), true, mock)
  },
  deregisterManagedInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deregisterManagedInstance', 'SSM', Promise.resolve(result), false, mock)
  },
  deregisterManagedInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deregisterManagedInstance', 'SSM', Promise.reject(result), true, mock)
  },
  deregisterPatchBaselineForPatchGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deregisterPatchBaselineForPatchGroup', 'SSM', Promise.resolve(result), true, mock)
  },
  deregisterPatchBaselineForPatchGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deregisterPatchBaselineForPatchGroup', 'SSM', Promise.resolve(result), false, mock)
  },
  deregisterPatchBaselineForPatchGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deregisterPatchBaselineForPatchGroup', 'SSM', Promise.reject(result), true, mock)
  },
  deregisterTargetFromMaintenanceWindow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deregisterTargetFromMaintenanceWindow', 'SSM', Promise.resolve(result), true, mock)
  },
  deregisterTargetFromMaintenanceWindowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deregisterTargetFromMaintenanceWindow', 'SSM', Promise.resolve(result), false, mock)
  },
  deregisterTargetFromMaintenanceWindowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deregisterTargetFromMaintenanceWindow', 'SSM', Promise.reject(result), true, mock)
  },
  deregisterTaskFromMaintenanceWindow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deregisterTaskFromMaintenanceWindow', 'SSM', Promise.resolve(result), true, mock)
  },
  deregisterTaskFromMaintenanceWindowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deregisterTaskFromMaintenanceWindow', 'SSM', Promise.resolve(result), false, mock)
  },
  deregisterTaskFromMaintenanceWindowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'deregisterTaskFromMaintenanceWindow', 'SSM', Promise.reject(result), true, mock)
  },
  describeActivations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeActivations', 'SSM', Promise.resolve(result), true, mock)
  },
  describeActivationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeActivations', 'SSM', Promise.resolve(result), false, mock)
  },
  describeActivationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeActivations', 'SSM', Promise.reject(result), true, mock)
  },
  describeAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeAssociation', 'SSM', Promise.resolve(result), true, mock)
  },
  describeAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeAssociation', 'SSM', Promise.resolve(result), false, mock)
  },
  describeAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeAssociation', 'SSM', Promise.reject(result), true, mock)
  },
  describeAssociationExecutionTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeAssociationExecutionTargets', 'SSM', Promise.resolve(result), true, mock)
  },
  describeAssociationExecutionTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeAssociationExecutionTargets', 'SSM', Promise.resolve(result), false, mock)
  },
  describeAssociationExecutionTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeAssociationExecutionTargets', 'SSM', Promise.reject(result), true, mock)
  },
  describeAssociationExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeAssociationExecutions', 'SSM', Promise.resolve(result), true, mock)
  },
  describeAssociationExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeAssociationExecutions', 'SSM', Promise.resolve(result), false, mock)
  },
  describeAssociationExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeAssociationExecutions', 'SSM', Promise.reject(result), true, mock)
  },
  describeAutomationExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeAutomationExecutions', 'SSM', Promise.resolve(result), true, mock)
  },
  describeAutomationExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeAutomationExecutions', 'SSM', Promise.resolve(result), false, mock)
  },
  describeAutomationExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeAutomationExecutions', 'SSM', Promise.reject(result), true, mock)
  },
  describeAutomationStepExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeAutomationStepExecutions', 'SSM', Promise.resolve(result), true, mock)
  },
  describeAutomationStepExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeAutomationStepExecutions', 'SSM', Promise.resolve(result), false, mock)
  },
  describeAutomationStepExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeAutomationStepExecutions', 'SSM', Promise.reject(result), true, mock)
  },
  describeAvailablePatches: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeAvailablePatches', 'SSM', Promise.resolve(result), true, mock)
  },
  describeAvailablePatchesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeAvailablePatches', 'SSM', Promise.resolve(result), false, mock)
  },
  describeAvailablePatchesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeAvailablePatches', 'SSM', Promise.reject(result), true, mock)
  },
  describeDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeDocument', 'SSM', Promise.resolve(result), true, mock)
  },
  describeDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeDocument', 'SSM', Promise.resolve(result), false, mock)
  },
  describeDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeDocument', 'SSM', Promise.reject(result), true, mock)
  },
  describeDocumentPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeDocumentPermission', 'SSM', Promise.resolve(result), true, mock)
  },
  describeDocumentPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeDocumentPermission', 'SSM', Promise.resolve(result), false, mock)
  },
  describeDocumentPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeDocumentPermission', 'SSM', Promise.reject(result), true, mock)
  },
  describeEffectiveInstanceAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeEffectiveInstanceAssociations', 'SSM', Promise.resolve(result), true, mock)
  },
  describeEffectiveInstanceAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeEffectiveInstanceAssociations', 'SSM', Promise.resolve(result), false, mock)
  },
  describeEffectiveInstanceAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeEffectiveInstanceAssociations', 'SSM', Promise.reject(result), true, mock)
  },
  describeEffectivePatchesForPatchBaseline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeEffectivePatchesForPatchBaseline', 'SSM', Promise.resolve(result), true, mock)
  },
  describeEffectivePatchesForPatchBaselineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeEffectivePatchesForPatchBaseline', 'SSM', Promise.resolve(result), false, mock)
  },
  describeEffectivePatchesForPatchBaselineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeEffectivePatchesForPatchBaseline', 'SSM', Promise.reject(result), true, mock)
  },
  describeInstanceAssociationsStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeInstanceAssociationsStatus', 'SSM', Promise.resolve(result), true, mock)
  },
  describeInstanceAssociationsStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeInstanceAssociationsStatus', 'SSM', Promise.resolve(result), false, mock)
  },
  describeInstanceAssociationsStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeInstanceAssociationsStatus', 'SSM', Promise.reject(result), true, mock)
  },
  describeInstanceInformation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeInstanceInformation', 'SSM', Promise.resolve(result), true, mock)
  },
  describeInstanceInformationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeInstanceInformation', 'SSM', Promise.resolve(result), false, mock)
  },
  describeInstanceInformationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeInstanceInformation', 'SSM', Promise.reject(result), true, mock)
  },
  describeInstancePatchStates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeInstancePatchStates', 'SSM', Promise.resolve(result), true, mock)
  },
  describeInstancePatchStatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeInstancePatchStates', 'SSM', Promise.resolve(result), false, mock)
  },
  describeInstancePatchStatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeInstancePatchStates', 'SSM', Promise.reject(result), true, mock)
  },
  describeInstancePatchStatesForPatchGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeInstancePatchStatesForPatchGroup', 'SSM', Promise.resolve(result), true, mock)
  },
  describeInstancePatchStatesForPatchGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeInstancePatchStatesForPatchGroup', 'SSM', Promise.resolve(result), false, mock)
  },
  describeInstancePatchStatesForPatchGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeInstancePatchStatesForPatchGroup', 'SSM', Promise.reject(result), true, mock)
  },
  describeInstancePatches: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeInstancePatches', 'SSM', Promise.resolve(result), true, mock)
  },
  describeInstancePatchesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeInstancePatches', 'SSM', Promise.resolve(result), false, mock)
  },
  describeInstancePatchesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeInstancePatches', 'SSM', Promise.reject(result), true, mock)
  },
  describeInventoryDeletions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeInventoryDeletions', 'SSM', Promise.resolve(result), true, mock)
  },
  describeInventoryDeletionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeInventoryDeletions', 'SSM', Promise.resolve(result), false, mock)
  },
  describeInventoryDeletionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeInventoryDeletions', 'SSM', Promise.reject(result), true, mock)
  },
  describeMaintenanceWindowExecutionTaskInvocations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindowExecutionTaskInvocations', 'SSM', Promise.resolve(result), true, mock)
  },
  describeMaintenanceWindowExecutionTaskInvocationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindowExecutionTaskInvocations', 'SSM', Promise.resolve(result), false, mock)
  },
  describeMaintenanceWindowExecutionTaskInvocationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindowExecutionTaskInvocations', 'SSM', Promise.reject(result), true, mock)
  },
  describeMaintenanceWindowExecutionTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindowExecutionTasks', 'SSM', Promise.resolve(result), true, mock)
  },
  describeMaintenanceWindowExecutionTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindowExecutionTasks', 'SSM', Promise.resolve(result), false, mock)
  },
  describeMaintenanceWindowExecutionTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindowExecutionTasks', 'SSM', Promise.reject(result), true, mock)
  },
  describeMaintenanceWindowExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindowExecutions', 'SSM', Promise.resolve(result), true, mock)
  },
  describeMaintenanceWindowExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindowExecutions', 'SSM', Promise.resolve(result), false, mock)
  },
  describeMaintenanceWindowExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindowExecutions', 'SSM', Promise.reject(result), true, mock)
  },
  describeMaintenanceWindowSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindowSchedule', 'SSM', Promise.resolve(result), true, mock)
  },
  describeMaintenanceWindowScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindowSchedule', 'SSM', Promise.resolve(result), false, mock)
  },
  describeMaintenanceWindowScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindowSchedule', 'SSM', Promise.reject(result), true, mock)
  },
  describeMaintenanceWindowTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindowTargets', 'SSM', Promise.resolve(result), true, mock)
  },
  describeMaintenanceWindowTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindowTargets', 'SSM', Promise.resolve(result), false, mock)
  },
  describeMaintenanceWindowTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindowTargets', 'SSM', Promise.reject(result), true, mock)
  },
  describeMaintenanceWindowTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindowTasks', 'SSM', Promise.resolve(result), true, mock)
  },
  describeMaintenanceWindowTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindowTasks', 'SSM', Promise.resolve(result), false, mock)
  },
  describeMaintenanceWindowTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindowTasks', 'SSM', Promise.reject(result), true, mock)
  },
  describeMaintenanceWindows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindows', 'SSM', Promise.resolve(result), true, mock)
  },
  describeMaintenanceWindowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindows', 'SSM', Promise.resolve(result), false, mock)
  },
  describeMaintenanceWindowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindows', 'SSM', Promise.reject(result), true, mock)
  },
  describeMaintenanceWindowsForTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindowsForTarget', 'SSM', Promise.resolve(result), true, mock)
  },
  describeMaintenanceWindowsForTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindowsForTarget', 'SSM', Promise.resolve(result), false, mock)
  },
  describeMaintenanceWindowsForTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeMaintenanceWindowsForTarget', 'SSM', Promise.reject(result), true, mock)
  },
  describeOpsItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeOpsItems', 'SSM', Promise.resolve(result), true, mock)
  },
  describeOpsItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeOpsItems', 'SSM', Promise.resolve(result), false, mock)
  },
  describeOpsItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeOpsItems', 'SSM', Promise.reject(result), true, mock)
  },
  describeParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeParameters', 'SSM', Promise.resolve(result), true, mock)
  },
  describeParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeParameters', 'SSM', Promise.resolve(result), false, mock)
  },
  describeParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeParameters', 'SSM', Promise.reject(result), true, mock)
  },
  describePatchBaselines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describePatchBaselines', 'SSM', Promise.resolve(result), true, mock)
  },
  describePatchBaselinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describePatchBaselines', 'SSM', Promise.resolve(result), false, mock)
  },
  describePatchBaselinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describePatchBaselines', 'SSM', Promise.reject(result), true, mock)
  },
  describePatchGroupState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describePatchGroupState', 'SSM', Promise.resolve(result), true, mock)
  },
  describePatchGroupStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describePatchGroupState', 'SSM', Promise.resolve(result), false, mock)
  },
  describePatchGroupStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describePatchGroupState', 'SSM', Promise.reject(result), true, mock)
  },
  describePatchGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describePatchGroups', 'SSM', Promise.resolve(result), true, mock)
  },
  describePatchGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describePatchGroups', 'SSM', Promise.resolve(result), false, mock)
  },
  describePatchGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describePatchGroups', 'SSM', Promise.reject(result), true, mock)
  },
  describePatchProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describePatchProperties', 'SSM', Promise.resolve(result), true, mock)
  },
  describePatchPropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describePatchProperties', 'SSM', Promise.resolve(result), false, mock)
  },
  describePatchPropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describePatchProperties', 'SSM', Promise.reject(result), true, mock)
  },
  describeSessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeSessions', 'SSM', Promise.resolve(result), true, mock)
  },
  describeSessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeSessions', 'SSM', Promise.resolve(result), false, mock)
  },
  describeSessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'describeSessions', 'SSM', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'destroy', 'SSM', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'destroy', 'SSM', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'destroy', 'SSM', Promise.reject(result), true, mock)
  },
  disassociateOpsItemRelatedItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'disassociateOpsItemRelatedItem', 'SSM', Promise.resolve(result), true, mock)
  },
  disassociateOpsItemRelatedItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'disassociateOpsItemRelatedItem', 'SSM', Promise.resolve(result), false, mock)
  },
  disassociateOpsItemRelatedItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'disassociateOpsItemRelatedItem', 'SSM', Promise.reject(result), true, mock)
  },
  getAutomationExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getAutomationExecution', 'SSM', Promise.resolve(result), true, mock)
  },
  getAutomationExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getAutomationExecution', 'SSM', Promise.resolve(result), false, mock)
  },
  getAutomationExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getAutomationExecution', 'SSM', Promise.reject(result), true, mock)
  },
  getCalendarState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getCalendarState', 'SSM', Promise.resolve(result), true, mock)
  },
  getCalendarStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getCalendarState', 'SSM', Promise.resolve(result), false, mock)
  },
  getCalendarStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getCalendarState', 'SSM', Promise.reject(result), true, mock)
  },
  getCommandInvocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getCommandInvocation', 'SSM', Promise.resolve(result), true, mock)
  },
  getCommandInvocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getCommandInvocation', 'SSM', Promise.resolve(result), false, mock)
  },
  getCommandInvocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getCommandInvocation', 'SSM', Promise.reject(result), true, mock)
  },
  getConnectionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getConnectionStatus', 'SSM', Promise.resolve(result), true, mock)
  },
  getConnectionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getConnectionStatus', 'SSM', Promise.resolve(result), false, mock)
  },
  getConnectionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getConnectionStatus', 'SSM', Promise.reject(result), true, mock)
  },
  getDefaultPatchBaseline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getDefaultPatchBaseline', 'SSM', Promise.resolve(result), true, mock)
  },
  getDefaultPatchBaselineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getDefaultPatchBaseline', 'SSM', Promise.resolve(result), false, mock)
  },
  getDefaultPatchBaselineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getDefaultPatchBaseline', 'SSM', Promise.reject(result), true, mock)
  },
  getDeployablePatchSnapshotForInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getDeployablePatchSnapshotForInstance', 'SSM', Promise.resolve(result), true, mock)
  },
  getDeployablePatchSnapshotForInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getDeployablePatchSnapshotForInstance', 'SSM', Promise.resolve(result), false, mock)
  },
  getDeployablePatchSnapshotForInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getDeployablePatchSnapshotForInstance', 'SSM', Promise.reject(result), true, mock)
  },
  getDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getDocument', 'SSM', Promise.resolve(result), true, mock)
  },
  getDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getDocument', 'SSM', Promise.resolve(result), false, mock)
  },
  getDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getDocument', 'SSM', Promise.reject(result), true, mock)
  },
  getInventory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getInventory', 'SSM', Promise.resolve(result), true, mock)
  },
  getInventoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getInventory', 'SSM', Promise.resolve(result), false, mock)
  },
  getInventoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getInventory', 'SSM', Promise.reject(result), true, mock)
  },
  getInventorySchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getInventorySchema', 'SSM', Promise.resolve(result), true, mock)
  },
  getInventorySchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getInventorySchema', 'SSM', Promise.resolve(result), false, mock)
  },
  getInventorySchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getInventorySchema', 'SSM', Promise.reject(result), true, mock)
  },
  getMaintenanceWindow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getMaintenanceWindow', 'SSM', Promise.resolve(result), true, mock)
  },
  getMaintenanceWindowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getMaintenanceWindow', 'SSM', Promise.resolve(result), false, mock)
  },
  getMaintenanceWindowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getMaintenanceWindow', 'SSM', Promise.reject(result), true, mock)
  },
  getMaintenanceWindowExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getMaintenanceWindowExecution', 'SSM', Promise.resolve(result), true, mock)
  },
  getMaintenanceWindowExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getMaintenanceWindowExecution', 'SSM', Promise.resolve(result), false, mock)
  },
  getMaintenanceWindowExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getMaintenanceWindowExecution', 'SSM', Promise.reject(result), true, mock)
  },
  getMaintenanceWindowExecutionTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getMaintenanceWindowExecutionTask', 'SSM', Promise.resolve(result), true, mock)
  },
  getMaintenanceWindowExecutionTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getMaintenanceWindowExecutionTask', 'SSM', Promise.resolve(result), false, mock)
  },
  getMaintenanceWindowExecutionTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getMaintenanceWindowExecutionTask', 'SSM', Promise.reject(result), true, mock)
  },
  getMaintenanceWindowExecutionTaskInvocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getMaintenanceWindowExecutionTaskInvocation', 'SSM', Promise.resolve(result), true, mock)
  },
  getMaintenanceWindowExecutionTaskInvocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getMaintenanceWindowExecutionTaskInvocation', 'SSM', Promise.resolve(result), false, mock)
  },
  getMaintenanceWindowExecutionTaskInvocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getMaintenanceWindowExecutionTaskInvocation', 'SSM', Promise.reject(result), true, mock)
  },
  getMaintenanceWindowTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getMaintenanceWindowTask', 'SSM', Promise.resolve(result), true, mock)
  },
  getMaintenanceWindowTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getMaintenanceWindowTask', 'SSM', Promise.resolve(result), false, mock)
  },
  getMaintenanceWindowTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getMaintenanceWindowTask', 'SSM', Promise.reject(result), true, mock)
  },
  getOpsItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getOpsItem', 'SSM', Promise.resolve(result), true, mock)
  },
  getOpsItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getOpsItem', 'SSM', Promise.resolve(result), false, mock)
  },
  getOpsItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getOpsItem', 'SSM', Promise.reject(result), true, mock)
  },
  getOpsMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getOpsMetadata', 'SSM', Promise.resolve(result), true, mock)
  },
  getOpsMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getOpsMetadata', 'SSM', Promise.resolve(result), false, mock)
  },
  getOpsMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getOpsMetadata', 'SSM', Promise.reject(result), true, mock)
  },
  getOpsSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getOpsSummary', 'SSM', Promise.resolve(result), true, mock)
  },
  getOpsSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getOpsSummary', 'SSM', Promise.resolve(result), false, mock)
  },
  getOpsSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getOpsSummary', 'SSM', Promise.reject(result), true, mock)
  },
  getParameter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getParameter', 'SSM', Promise.resolve(result), true, mock)
  },
  getParameterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getParameter', 'SSM', Promise.resolve(result), false, mock)
  },
  getParameterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getParameter', 'SSM', Promise.reject(result), true, mock)
  },
  getParameterHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getParameterHistory', 'SSM', Promise.resolve(result), true, mock)
  },
  getParameterHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getParameterHistory', 'SSM', Promise.resolve(result), false, mock)
  },
  getParameterHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getParameterHistory', 'SSM', Promise.reject(result), true, mock)
  },
  getParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getParameters', 'SSM', Promise.resolve(result), true, mock)
  },
  getParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getParameters', 'SSM', Promise.resolve(result), false, mock)
  },
  getParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getParameters', 'SSM', Promise.reject(result), true, mock)
  },
  getParametersByPath: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getParametersByPath', 'SSM', Promise.resolve(result), true, mock)
  },
  getParametersByPathAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getParametersByPath', 'SSM', Promise.resolve(result), false, mock)
  },
  getParametersByPathThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getParametersByPath', 'SSM', Promise.reject(result), true, mock)
  },
  getPatchBaseline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getPatchBaseline', 'SSM', Promise.resolve(result), true, mock)
  },
  getPatchBaselineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getPatchBaseline', 'SSM', Promise.resolve(result), false, mock)
  },
  getPatchBaselineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getPatchBaseline', 'SSM', Promise.reject(result), true, mock)
  },
  getPatchBaselineForPatchGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getPatchBaselineForPatchGroup', 'SSM', Promise.resolve(result), true, mock)
  },
  getPatchBaselineForPatchGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getPatchBaselineForPatchGroup', 'SSM', Promise.resolve(result), false, mock)
  },
  getPatchBaselineForPatchGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getPatchBaselineForPatchGroup', 'SSM', Promise.reject(result), true, mock)
  },
  getServiceSetting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getServiceSetting', 'SSM', Promise.resolve(result), true, mock)
  },
  getServiceSettingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getServiceSetting', 'SSM', Promise.resolve(result), false, mock)
  },
  getServiceSettingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'getServiceSetting', 'SSM', Promise.reject(result), true, mock)
  },
  labelParameterVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'labelParameterVersion', 'SSM', Promise.resolve(result), true, mock)
  },
  labelParameterVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'labelParameterVersion', 'SSM', Promise.resolve(result), false, mock)
  },
  labelParameterVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'labelParameterVersion', 'SSM', Promise.reject(result), true, mock)
  },
  listAssociationVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listAssociationVersions', 'SSM', Promise.resolve(result), true, mock)
  },
  listAssociationVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listAssociationVersions', 'SSM', Promise.resolve(result), false, mock)
  },
  listAssociationVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listAssociationVersions', 'SSM', Promise.reject(result), true, mock)
  },
  listAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listAssociations', 'SSM', Promise.resolve(result), true, mock)
  },
  listAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listAssociations', 'SSM', Promise.resolve(result), false, mock)
  },
  listAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listAssociations', 'SSM', Promise.reject(result), true, mock)
  },
  listCommandInvocations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listCommandInvocations', 'SSM', Promise.resolve(result), true, mock)
  },
  listCommandInvocationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listCommandInvocations', 'SSM', Promise.resolve(result), false, mock)
  },
  listCommandInvocationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listCommandInvocations', 'SSM', Promise.reject(result), true, mock)
  },
  listCommands: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listCommands', 'SSM', Promise.resolve(result), true, mock)
  },
  listCommandsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listCommands', 'SSM', Promise.resolve(result), false, mock)
  },
  listCommandsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listCommands', 'SSM', Promise.reject(result), true, mock)
  },
  listComplianceItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listComplianceItems', 'SSM', Promise.resolve(result), true, mock)
  },
  listComplianceItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listComplianceItems', 'SSM', Promise.resolve(result), false, mock)
  },
  listComplianceItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listComplianceItems', 'SSM', Promise.reject(result), true, mock)
  },
  listComplianceSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listComplianceSummaries', 'SSM', Promise.resolve(result), true, mock)
  },
  listComplianceSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listComplianceSummaries', 'SSM', Promise.resolve(result), false, mock)
  },
  listComplianceSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listComplianceSummaries', 'SSM', Promise.reject(result), true, mock)
  },
  listDocumentMetadataHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listDocumentMetadataHistory', 'SSM', Promise.resolve(result), true, mock)
  },
  listDocumentMetadataHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listDocumentMetadataHistory', 'SSM', Promise.resolve(result), false, mock)
  },
  listDocumentMetadataHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listDocumentMetadataHistory', 'SSM', Promise.reject(result), true, mock)
  },
  listDocumentVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listDocumentVersions', 'SSM', Promise.resolve(result), true, mock)
  },
  listDocumentVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listDocumentVersions', 'SSM', Promise.resolve(result), false, mock)
  },
  listDocumentVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listDocumentVersions', 'SSM', Promise.reject(result), true, mock)
  },
  listDocuments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listDocuments', 'SSM', Promise.resolve(result), true, mock)
  },
  listDocumentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listDocuments', 'SSM', Promise.resolve(result), false, mock)
  },
  listDocumentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listDocuments', 'SSM', Promise.reject(result), true, mock)
  },
  listInventoryEntries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listInventoryEntries', 'SSM', Promise.resolve(result), true, mock)
  },
  listInventoryEntriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listInventoryEntries', 'SSM', Promise.resolve(result), false, mock)
  },
  listInventoryEntriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listInventoryEntries', 'SSM', Promise.reject(result), true, mock)
  },
  listOpsItemEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listOpsItemEvents', 'SSM', Promise.resolve(result), true, mock)
  },
  listOpsItemEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listOpsItemEvents', 'SSM', Promise.resolve(result), false, mock)
  },
  listOpsItemEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listOpsItemEvents', 'SSM', Promise.reject(result), true, mock)
  },
  listOpsItemRelatedItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listOpsItemRelatedItems', 'SSM', Promise.resolve(result), true, mock)
  },
  listOpsItemRelatedItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listOpsItemRelatedItems', 'SSM', Promise.resolve(result), false, mock)
  },
  listOpsItemRelatedItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listOpsItemRelatedItems', 'SSM', Promise.reject(result), true, mock)
  },
  listOpsMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listOpsMetadata', 'SSM', Promise.resolve(result), true, mock)
  },
  listOpsMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listOpsMetadata', 'SSM', Promise.resolve(result), false, mock)
  },
  listOpsMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listOpsMetadata', 'SSM', Promise.reject(result), true, mock)
  },
  listResourceComplianceSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listResourceComplianceSummaries', 'SSM', Promise.resolve(result), true, mock)
  },
  listResourceComplianceSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listResourceComplianceSummaries', 'SSM', Promise.resolve(result), false, mock)
  },
  listResourceComplianceSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listResourceComplianceSummaries', 'SSM', Promise.reject(result), true, mock)
  },
  listResourceDataSync: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listResourceDataSync', 'SSM', Promise.resolve(result), true, mock)
  },
  listResourceDataSyncAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listResourceDataSync', 'SSM', Promise.resolve(result), false, mock)
  },
  listResourceDataSyncThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listResourceDataSync', 'SSM', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listTagsForResource', 'SSM', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listTagsForResource', 'SSM', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'listTagsForResource', 'SSM', Promise.reject(result), true, mock)
  },
  modifyDocumentPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'modifyDocumentPermission', 'SSM', Promise.resolve(result), true, mock)
  },
  modifyDocumentPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'modifyDocumentPermission', 'SSM', Promise.resolve(result), false, mock)
  },
  modifyDocumentPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'modifyDocumentPermission', 'SSM', Promise.reject(result), true, mock)
  },
  putComplianceItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'putComplianceItems', 'SSM', Promise.resolve(result), true, mock)
  },
  putComplianceItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'putComplianceItems', 'SSM', Promise.resolve(result), false, mock)
  },
  putComplianceItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'putComplianceItems', 'SSM', Promise.reject(result), true, mock)
  },
  putInventory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'putInventory', 'SSM', Promise.resolve(result), true, mock)
  },
  putInventoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'putInventory', 'SSM', Promise.resolve(result), false, mock)
  },
  putInventoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'putInventory', 'SSM', Promise.reject(result), true, mock)
  },
  putParameter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'putParameter', 'SSM', Promise.resolve(result), true, mock)
  },
  putParameterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'putParameter', 'SSM', Promise.resolve(result), false, mock)
  },
  putParameterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'putParameter', 'SSM', Promise.reject(result), true, mock)
  },
  registerDefaultPatchBaseline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'registerDefaultPatchBaseline', 'SSM', Promise.resolve(result), true, mock)
  },
  registerDefaultPatchBaselineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'registerDefaultPatchBaseline', 'SSM', Promise.resolve(result), false, mock)
  },
  registerDefaultPatchBaselineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'registerDefaultPatchBaseline', 'SSM', Promise.reject(result), true, mock)
  },
  registerPatchBaselineForPatchGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'registerPatchBaselineForPatchGroup', 'SSM', Promise.resolve(result), true, mock)
  },
  registerPatchBaselineForPatchGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'registerPatchBaselineForPatchGroup', 'SSM', Promise.resolve(result), false, mock)
  },
  registerPatchBaselineForPatchGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'registerPatchBaselineForPatchGroup', 'SSM', Promise.reject(result), true, mock)
  },
  registerTargetWithMaintenanceWindow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'registerTargetWithMaintenanceWindow', 'SSM', Promise.resolve(result), true, mock)
  },
  registerTargetWithMaintenanceWindowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'registerTargetWithMaintenanceWindow', 'SSM', Promise.resolve(result), false, mock)
  },
  registerTargetWithMaintenanceWindowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'registerTargetWithMaintenanceWindow', 'SSM', Promise.reject(result), true, mock)
  },
  registerTaskWithMaintenanceWindow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'registerTaskWithMaintenanceWindow', 'SSM', Promise.resolve(result), true, mock)
  },
  registerTaskWithMaintenanceWindowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'registerTaskWithMaintenanceWindow', 'SSM', Promise.resolve(result), false, mock)
  },
  registerTaskWithMaintenanceWindowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'registerTaskWithMaintenanceWindow', 'SSM', Promise.reject(result), true, mock)
  },
  removeTagsFromResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'removeTagsFromResource', 'SSM', Promise.resolve(result), true, mock)
  },
  removeTagsFromResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'removeTagsFromResource', 'SSM', Promise.resolve(result), false, mock)
  },
  removeTagsFromResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'removeTagsFromResource', 'SSM', Promise.reject(result), true, mock)
  },
  resetServiceSetting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'resetServiceSetting', 'SSM', Promise.resolve(result), true, mock)
  },
  resetServiceSettingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'resetServiceSetting', 'SSM', Promise.resolve(result), false, mock)
  },
  resetServiceSettingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'resetServiceSetting', 'SSM', Promise.reject(result), true, mock)
  },
  resumeSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'resumeSession', 'SSM', Promise.resolve(result), true, mock)
  },
  resumeSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'resumeSession', 'SSM', Promise.resolve(result), false, mock)
  },
  resumeSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'resumeSession', 'SSM', Promise.reject(result), true, mock)
  },
  sendAutomationSignal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'sendAutomationSignal', 'SSM', Promise.resolve(result), true, mock)
  },
  sendAutomationSignalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'sendAutomationSignal', 'SSM', Promise.resolve(result), false, mock)
  },
  sendAutomationSignalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'sendAutomationSignal', 'SSM', Promise.reject(result), true, mock)
  },
  sendCommand: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'sendCommand', 'SSM', Promise.resolve(result), true, mock)
  },
  sendCommandAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'sendCommand', 'SSM', Promise.resolve(result), false, mock)
  },
  sendCommandThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'sendCommand', 'SSM', Promise.reject(result), true, mock)
  },
  startAssociationsOnce: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'startAssociationsOnce', 'SSM', Promise.resolve(result), true, mock)
  },
  startAssociationsOnceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'startAssociationsOnce', 'SSM', Promise.resolve(result), false, mock)
  },
  startAssociationsOnceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'startAssociationsOnce', 'SSM', Promise.reject(result), true, mock)
  },
  startAutomationExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'startAutomationExecution', 'SSM', Promise.resolve(result), true, mock)
  },
  startAutomationExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'startAutomationExecution', 'SSM', Promise.resolve(result), false, mock)
  },
  startAutomationExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'startAutomationExecution', 'SSM', Promise.reject(result), true, mock)
  },
  startChangeRequestExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'startChangeRequestExecution', 'SSM', Promise.resolve(result), true, mock)
  },
  startChangeRequestExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'startChangeRequestExecution', 'SSM', Promise.resolve(result), false, mock)
  },
  startChangeRequestExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'startChangeRequestExecution', 'SSM', Promise.reject(result), true, mock)
  },
  startSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'startSession', 'SSM', Promise.resolve(result), true, mock)
  },
  startSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'startSession', 'SSM', Promise.resolve(result), false, mock)
  },
  startSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'startSession', 'SSM', Promise.reject(result), true, mock)
  },
  stopAutomationExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'stopAutomationExecution', 'SSM', Promise.resolve(result), true, mock)
  },
  stopAutomationExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'stopAutomationExecution', 'SSM', Promise.resolve(result), false, mock)
  },
  stopAutomationExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'stopAutomationExecution', 'SSM', Promise.reject(result), true, mock)
  },
  terminateSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'terminateSession', 'SSM', Promise.resolve(result), true, mock)
  },
  terminateSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'terminateSession', 'SSM', Promise.resolve(result), false, mock)
  },
  terminateSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'terminateSession', 'SSM', Promise.reject(result), true, mock)
  },
  unlabelParameterVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'unlabelParameterVersion', 'SSM', Promise.resolve(result), true, mock)
  },
  unlabelParameterVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'unlabelParameterVersion', 'SSM', Promise.resolve(result), false, mock)
  },
  unlabelParameterVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'unlabelParameterVersion', 'SSM', Promise.reject(result), true, mock)
  },
  updateAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateAssociation', 'SSM', Promise.resolve(result), true, mock)
  },
  updateAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateAssociation', 'SSM', Promise.resolve(result), false, mock)
  },
  updateAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateAssociation', 'SSM', Promise.reject(result), true, mock)
  },
  updateAssociationStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateAssociationStatus', 'SSM', Promise.resolve(result), true, mock)
  },
  updateAssociationStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateAssociationStatus', 'SSM', Promise.resolve(result), false, mock)
  },
  updateAssociationStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateAssociationStatus', 'SSM', Promise.reject(result), true, mock)
  },
  updateDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateDocument', 'SSM', Promise.resolve(result), true, mock)
  },
  updateDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateDocument', 'SSM', Promise.resolve(result), false, mock)
  },
  updateDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateDocument', 'SSM', Promise.reject(result), true, mock)
  },
  updateDocumentDefaultVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateDocumentDefaultVersion', 'SSM', Promise.resolve(result), true, mock)
  },
  updateDocumentDefaultVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateDocumentDefaultVersion', 'SSM', Promise.resolve(result), false, mock)
  },
  updateDocumentDefaultVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateDocumentDefaultVersion', 'SSM', Promise.reject(result), true, mock)
  },
  updateDocumentMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateDocumentMetadata', 'SSM', Promise.resolve(result), true, mock)
  },
  updateDocumentMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateDocumentMetadata', 'SSM', Promise.resolve(result), false, mock)
  },
  updateDocumentMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateDocumentMetadata', 'SSM', Promise.reject(result), true, mock)
  },
  updateMaintenanceWindow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateMaintenanceWindow', 'SSM', Promise.resolve(result), true, mock)
  },
  updateMaintenanceWindowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateMaintenanceWindow', 'SSM', Promise.resolve(result), false, mock)
  },
  updateMaintenanceWindowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateMaintenanceWindow', 'SSM', Promise.reject(result), true, mock)
  },
  updateMaintenanceWindowTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateMaintenanceWindowTarget', 'SSM', Promise.resolve(result), true, mock)
  },
  updateMaintenanceWindowTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateMaintenanceWindowTarget', 'SSM', Promise.resolve(result), false, mock)
  },
  updateMaintenanceWindowTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateMaintenanceWindowTarget', 'SSM', Promise.reject(result), true, mock)
  },
  updateMaintenanceWindowTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateMaintenanceWindowTask', 'SSM', Promise.resolve(result), true, mock)
  },
  updateMaintenanceWindowTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateMaintenanceWindowTask', 'SSM', Promise.resolve(result), false, mock)
  },
  updateMaintenanceWindowTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateMaintenanceWindowTask', 'SSM', Promise.reject(result), true, mock)
  },
  updateManagedInstanceRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateManagedInstanceRole', 'SSM', Promise.resolve(result), true, mock)
  },
  updateManagedInstanceRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateManagedInstanceRole', 'SSM', Promise.resolve(result), false, mock)
  },
  updateManagedInstanceRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateManagedInstanceRole', 'SSM', Promise.reject(result), true, mock)
  },
  updateOpsItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateOpsItem', 'SSM', Promise.resolve(result), true, mock)
  },
  updateOpsItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateOpsItem', 'SSM', Promise.resolve(result), false, mock)
  },
  updateOpsItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateOpsItem', 'SSM', Promise.reject(result), true, mock)
  },
  updateOpsMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateOpsMetadata', 'SSM', Promise.resolve(result), true, mock)
  },
  updateOpsMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateOpsMetadata', 'SSM', Promise.resolve(result), false, mock)
  },
  updateOpsMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateOpsMetadata', 'SSM', Promise.reject(result), true, mock)
  },
  updatePatchBaseline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updatePatchBaseline', 'SSM', Promise.resolve(result), true, mock)
  },
  updatePatchBaselineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updatePatchBaseline', 'SSM', Promise.resolve(result), false, mock)
  },
  updatePatchBaselineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updatePatchBaseline', 'SSM', Promise.reject(result), true, mock)
  },
  updateResourceDataSync: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateResourceDataSync', 'SSM', Promise.resolve(result), true, mock)
  },
  updateResourceDataSyncAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateResourceDataSync', 'SSM', Promise.resolve(result), false, mock)
  },
  updateResourceDataSyncThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateResourceDataSync', 'SSM', Promise.reject(result), true, mock)
  },
  updateServiceSetting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateServiceSetting', 'SSM', Promise.resolve(result), true, mock)
  },
  updateServiceSettingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateServiceSetting', 'SSM', Promise.resolve(result), false, mock)
  },
  updateServiceSettingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'updateServiceSetting', 'SSM', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'send', 'SSMClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'send', 'SSMClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-ssm', 'send', 'SSMClient', Promise.reject(result), true, mock)
  }
}