
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
  export const mockSSM = {
  addTagsToResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToResource', 'SSM', Promise.resolve(result), true, mock)
  },
  addTagsToResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToResource', 'SSM', Promise.resolve(result), false, mock)
  },
  addTagsToResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addTagsToResource', 'SSM', Promise.reject(result), true, mock)
  },
  associateOpsItemRelatedItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateOpsItemRelatedItem', 'SSM', Promise.resolve(result), true, mock)
  },
  associateOpsItemRelatedItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateOpsItemRelatedItem', 'SSM', Promise.resolve(result), false, mock)
  },
  associateOpsItemRelatedItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateOpsItemRelatedItem', 'SSM', Promise.reject(result), true, mock)
  },
  cancelCommand: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelCommand', 'SSM', Promise.resolve(result), true, mock)
  },
  cancelCommandAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelCommand', 'SSM', Promise.resolve(result), false, mock)
  },
  cancelCommandThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelCommand', 'SSM', Promise.reject(result), true, mock)
  },
  cancelMaintenanceWindowExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelMaintenanceWindowExecution', 'SSM', Promise.resolve(result), true, mock)
  },
  cancelMaintenanceWindowExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelMaintenanceWindowExecution', 'SSM', Promise.resolve(result), false, mock)
  },
  cancelMaintenanceWindowExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('cancelMaintenanceWindowExecution', 'SSM', Promise.reject(result), true, mock)
  },
  createActivation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createActivation', 'SSM', Promise.resolve(result), true, mock)
  },
  createActivationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createActivation', 'SSM', Promise.resolve(result), false, mock)
  },
  createActivationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createActivation', 'SSM', Promise.reject(result), true, mock)
  },
  createAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAssociation', 'SSM', Promise.resolve(result), true, mock)
  },
  createAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAssociation', 'SSM', Promise.resolve(result), false, mock)
  },
  createAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAssociation', 'SSM', Promise.reject(result), true, mock)
  },
  createAssociationBatch: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAssociationBatch', 'SSM', Promise.resolve(result), true, mock)
  },
  createAssociationBatchAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAssociationBatch', 'SSM', Promise.resolve(result), false, mock)
  },
  createAssociationBatchThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createAssociationBatch', 'SSM', Promise.reject(result), true, mock)
  },
  createDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDocument', 'SSM', Promise.resolve(result), true, mock)
  },
  createDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDocument', 'SSM', Promise.resolve(result), false, mock)
  },
  createDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDocument', 'SSM', Promise.reject(result), true, mock)
  },
  createMaintenanceWindow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMaintenanceWindow', 'SSM', Promise.resolve(result), true, mock)
  },
  createMaintenanceWindowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMaintenanceWindow', 'SSM', Promise.resolve(result), false, mock)
  },
  createMaintenanceWindowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createMaintenanceWindow', 'SSM', Promise.reject(result), true, mock)
  },
  createOpsItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOpsItem', 'SSM', Promise.resolve(result), true, mock)
  },
  createOpsItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOpsItem', 'SSM', Promise.resolve(result), false, mock)
  },
  createOpsItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOpsItem', 'SSM', Promise.reject(result), true, mock)
  },
  createOpsMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOpsMetadata', 'SSM', Promise.resolve(result), true, mock)
  },
  createOpsMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOpsMetadata', 'SSM', Promise.resolve(result), false, mock)
  },
  createOpsMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOpsMetadata', 'SSM', Promise.reject(result), true, mock)
  },
  createPatchBaseline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPatchBaseline', 'SSM', Promise.resolve(result), true, mock)
  },
  createPatchBaselineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPatchBaseline', 'SSM', Promise.resolve(result), false, mock)
  },
  createPatchBaselineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createPatchBaseline', 'SSM', Promise.reject(result), true, mock)
  },
  createResourceDataSync: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResourceDataSync', 'SSM', Promise.resolve(result), true, mock)
  },
  createResourceDataSyncAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResourceDataSync', 'SSM', Promise.resolve(result), false, mock)
  },
  createResourceDataSyncThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createResourceDataSync', 'SSM', Promise.reject(result), true, mock)
  },
  deleteActivation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteActivation', 'SSM', Promise.resolve(result), true, mock)
  },
  deleteActivationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteActivation', 'SSM', Promise.resolve(result), false, mock)
  },
  deleteActivationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteActivation', 'SSM', Promise.reject(result), true, mock)
  },
  deleteAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAssociation', 'SSM', Promise.resolve(result), true, mock)
  },
  deleteAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAssociation', 'SSM', Promise.resolve(result), false, mock)
  },
  deleteAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteAssociation', 'SSM', Promise.reject(result), true, mock)
  },
  deleteDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDocument', 'SSM', Promise.resolve(result), true, mock)
  },
  deleteDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDocument', 'SSM', Promise.resolve(result), false, mock)
  },
  deleteDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDocument', 'SSM', Promise.reject(result), true, mock)
  },
  deleteInventory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInventory', 'SSM', Promise.resolve(result), true, mock)
  },
  deleteInventoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInventory', 'SSM', Promise.resolve(result), false, mock)
  },
  deleteInventoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteInventory', 'SSM', Promise.reject(result), true, mock)
  },
  deleteMaintenanceWindow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMaintenanceWindow', 'SSM', Promise.resolve(result), true, mock)
  },
  deleteMaintenanceWindowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMaintenanceWindow', 'SSM', Promise.resolve(result), false, mock)
  },
  deleteMaintenanceWindowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteMaintenanceWindow', 'SSM', Promise.reject(result), true, mock)
  },
  deleteOpsMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOpsMetadata', 'SSM', Promise.resolve(result), true, mock)
  },
  deleteOpsMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOpsMetadata', 'SSM', Promise.resolve(result), false, mock)
  },
  deleteOpsMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOpsMetadata', 'SSM', Promise.reject(result), true, mock)
  },
  deleteParameter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteParameter', 'SSM', Promise.resolve(result), true, mock)
  },
  deleteParameterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteParameter', 'SSM', Promise.resolve(result), false, mock)
  },
  deleteParameterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteParameter', 'SSM', Promise.reject(result), true, mock)
  },
  deleteParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteParameters', 'SSM', Promise.resolve(result), true, mock)
  },
  deleteParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteParameters', 'SSM', Promise.resolve(result), false, mock)
  },
  deleteParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteParameters', 'SSM', Promise.reject(result), true, mock)
  },
  deletePatchBaseline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePatchBaseline', 'SSM', Promise.resolve(result), true, mock)
  },
  deletePatchBaselineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePatchBaseline', 'SSM', Promise.resolve(result), false, mock)
  },
  deletePatchBaselineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deletePatchBaseline', 'SSM', Promise.reject(result), true, mock)
  },
  deleteResourceDataSync: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourceDataSync', 'SSM', Promise.resolve(result), true, mock)
  },
  deleteResourceDataSyncAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourceDataSync', 'SSM', Promise.resolve(result), false, mock)
  },
  deleteResourceDataSyncThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteResourceDataSync', 'SSM', Promise.reject(result), true, mock)
  },
  deregisterManagedInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterManagedInstance', 'SSM', Promise.resolve(result), true, mock)
  },
  deregisterManagedInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterManagedInstance', 'SSM', Promise.resolve(result), false, mock)
  },
  deregisterManagedInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterManagedInstance', 'SSM', Promise.reject(result), true, mock)
  },
  deregisterPatchBaselineForPatchGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterPatchBaselineForPatchGroup', 'SSM', Promise.resolve(result), true, mock)
  },
  deregisterPatchBaselineForPatchGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterPatchBaselineForPatchGroup', 'SSM', Promise.resolve(result), false, mock)
  },
  deregisterPatchBaselineForPatchGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterPatchBaselineForPatchGroup', 'SSM', Promise.reject(result), true, mock)
  },
  deregisterTargetFromMaintenanceWindow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterTargetFromMaintenanceWindow', 'SSM', Promise.resolve(result), true, mock)
  },
  deregisterTargetFromMaintenanceWindowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterTargetFromMaintenanceWindow', 'SSM', Promise.resolve(result), false, mock)
  },
  deregisterTargetFromMaintenanceWindowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterTargetFromMaintenanceWindow', 'SSM', Promise.reject(result), true, mock)
  },
  deregisterTaskFromMaintenanceWindow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterTaskFromMaintenanceWindow', 'SSM', Promise.resolve(result), true, mock)
  },
  deregisterTaskFromMaintenanceWindowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterTaskFromMaintenanceWindow', 'SSM', Promise.resolve(result), false, mock)
  },
  deregisterTaskFromMaintenanceWindowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deregisterTaskFromMaintenanceWindow', 'SSM', Promise.reject(result), true, mock)
  },
  describeActivations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeActivations', 'SSM', Promise.resolve(result), true, mock)
  },
  describeActivationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeActivations', 'SSM', Promise.resolve(result), false, mock)
  },
  describeActivationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeActivations', 'SSM', Promise.reject(result), true, mock)
  },
  describeAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAssociation', 'SSM', Promise.resolve(result), true, mock)
  },
  describeAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAssociation', 'SSM', Promise.resolve(result), false, mock)
  },
  describeAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAssociation', 'SSM', Promise.reject(result), true, mock)
  },
  describeAssociationExecutionTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAssociationExecutionTargets', 'SSM', Promise.resolve(result), true, mock)
  },
  describeAssociationExecutionTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAssociationExecutionTargets', 'SSM', Promise.resolve(result), false, mock)
  },
  describeAssociationExecutionTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAssociationExecutionTargets', 'SSM', Promise.reject(result), true, mock)
  },
  describeAssociationExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAssociationExecutions', 'SSM', Promise.resolve(result), true, mock)
  },
  describeAssociationExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAssociationExecutions', 'SSM', Promise.resolve(result), false, mock)
  },
  describeAssociationExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAssociationExecutions', 'SSM', Promise.reject(result), true, mock)
  },
  describeAutomationExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAutomationExecutions', 'SSM', Promise.resolve(result), true, mock)
  },
  describeAutomationExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAutomationExecutions', 'SSM', Promise.resolve(result), false, mock)
  },
  describeAutomationExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAutomationExecutions', 'SSM', Promise.reject(result), true, mock)
  },
  describeAutomationStepExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAutomationStepExecutions', 'SSM', Promise.resolve(result), true, mock)
  },
  describeAutomationStepExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAutomationStepExecutions', 'SSM', Promise.resolve(result), false, mock)
  },
  describeAutomationStepExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAutomationStepExecutions', 'SSM', Promise.reject(result), true, mock)
  },
  describeAvailablePatches: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAvailablePatches', 'SSM', Promise.resolve(result), true, mock)
  },
  describeAvailablePatchesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAvailablePatches', 'SSM', Promise.resolve(result), false, mock)
  },
  describeAvailablePatchesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeAvailablePatches', 'SSM', Promise.reject(result), true, mock)
  },
  describeDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDocument', 'SSM', Promise.resolve(result), true, mock)
  },
  describeDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDocument', 'SSM', Promise.resolve(result), false, mock)
  },
  describeDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDocument', 'SSM', Promise.reject(result), true, mock)
  },
  describeDocumentPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDocumentPermission', 'SSM', Promise.resolve(result), true, mock)
  },
  describeDocumentPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDocumentPermission', 'SSM', Promise.resolve(result), false, mock)
  },
  describeDocumentPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDocumentPermission', 'SSM', Promise.reject(result), true, mock)
  },
  describeEffectiveInstanceAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEffectiveInstanceAssociations', 'SSM', Promise.resolve(result), true, mock)
  },
  describeEffectiveInstanceAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEffectiveInstanceAssociations', 'SSM', Promise.resolve(result), false, mock)
  },
  describeEffectiveInstanceAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEffectiveInstanceAssociations', 'SSM', Promise.reject(result), true, mock)
  },
  describeEffectivePatchesForPatchBaseline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEffectivePatchesForPatchBaseline', 'SSM', Promise.resolve(result), true, mock)
  },
  describeEffectivePatchesForPatchBaselineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEffectivePatchesForPatchBaseline', 'SSM', Promise.resolve(result), false, mock)
  },
  describeEffectivePatchesForPatchBaselineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeEffectivePatchesForPatchBaseline', 'SSM', Promise.reject(result), true, mock)
  },
  describeInstanceAssociationsStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstanceAssociationsStatus', 'SSM', Promise.resolve(result), true, mock)
  },
  describeInstanceAssociationsStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstanceAssociationsStatus', 'SSM', Promise.resolve(result), false, mock)
  },
  describeInstanceAssociationsStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstanceAssociationsStatus', 'SSM', Promise.reject(result), true, mock)
  },
  describeInstanceInformation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstanceInformation', 'SSM', Promise.resolve(result), true, mock)
  },
  describeInstanceInformationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstanceInformation', 'SSM', Promise.resolve(result), false, mock)
  },
  describeInstanceInformationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstanceInformation', 'SSM', Promise.reject(result), true, mock)
  },
  describeInstancePatchStates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstancePatchStates', 'SSM', Promise.resolve(result), true, mock)
  },
  describeInstancePatchStatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstancePatchStates', 'SSM', Promise.resolve(result), false, mock)
  },
  describeInstancePatchStatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstancePatchStates', 'SSM', Promise.reject(result), true, mock)
  },
  describeInstancePatchStatesForPatchGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstancePatchStatesForPatchGroup', 'SSM', Promise.resolve(result), true, mock)
  },
  describeInstancePatchStatesForPatchGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstancePatchStatesForPatchGroup', 'SSM', Promise.resolve(result), false, mock)
  },
  describeInstancePatchStatesForPatchGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstancePatchStatesForPatchGroup', 'SSM', Promise.reject(result), true, mock)
  },
  describeInstancePatches: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstancePatches', 'SSM', Promise.resolve(result), true, mock)
  },
  describeInstancePatchesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstancePatches', 'SSM', Promise.resolve(result), false, mock)
  },
  describeInstancePatchesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInstancePatches', 'SSM', Promise.reject(result), true, mock)
  },
  describeInventoryDeletions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInventoryDeletions', 'SSM', Promise.resolve(result), true, mock)
  },
  describeInventoryDeletionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInventoryDeletions', 'SSM', Promise.resolve(result), false, mock)
  },
  describeInventoryDeletionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeInventoryDeletions', 'SSM', Promise.reject(result), true, mock)
  },
  describeMaintenanceWindowExecutionTaskInvocations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindowExecutionTaskInvocations', 'SSM', Promise.resolve(result), true, mock)
  },
  describeMaintenanceWindowExecutionTaskInvocationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindowExecutionTaskInvocations', 'SSM', Promise.resolve(result), false, mock)
  },
  describeMaintenanceWindowExecutionTaskInvocationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindowExecutionTaskInvocations', 'SSM', Promise.reject(result), true, mock)
  },
  describeMaintenanceWindowExecutionTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindowExecutionTasks', 'SSM', Promise.resolve(result), true, mock)
  },
  describeMaintenanceWindowExecutionTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindowExecutionTasks', 'SSM', Promise.resolve(result), false, mock)
  },
  describeMaintenanceWindowExecutionTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindowExecutionTasks', 'SSM', Promise.reject(result), true, mock)
  },
  describeMaintenanceWindowExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindowExecutions', 'SSM', Promise.resolve(result), true, mock)
  },
  describeMaintenanceWindowExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindowExecutions', 'SSM', Promise.resolve(result), false, mock)
  },
  describeMaintenanceWindowExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindowExecutions', 'SSM', Promise.reject(result), true, mock)
  },
  describeMaintenanceWindowSchedule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindowSchedule', 'SSM', Promise.resolve(result), true, mock)
  },
  describeMaintenanceWindowScheduleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindowSchedule', 'SSM', Promise.resolve(result), false, mock)
  },
  describeMaintenanceWindowScheduleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindowSchedule', 'SSM', Promise.reject(result), true, mock)
  },
  describeMaintenanceWindowTargets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindowTargets', 'SSM', Promise.resolve(result), true, mock)
  },
  describeMaintenanceWindowTargetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindowTargets', 'SSM', Promise.resolve(result), false, mock)
  },
  describeMaintenanceWindowTargetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindowTargets', 'SSM', Promise.reject(result), true, mock)
  },
  describeMaintenanceWindowTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindowTasks', 'SSM', Promise.resolve(result), true, mock)
  },
  describeMaintenanceWindowTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindowTasks', 'SSM', Promise.resolve(result), false, mock)
  },
  describeMaintenanceWindowTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindowTasks', 'SSM', Promise.reject(result), true, mock)
  },
  describeMaintenanceWindows: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindows', 'SSM', Promise.resolve(result), true, mock)
  },
  describeMaintenanceWindowsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindows', 'SSM', Promise.resolve(result), false, mock)
  },
  describeMaintenanceWindowsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindows', 'SSM', Promise.reject(result), true, mock)
  },
  describeMaintenanceWindowsForTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindowsForTarget', 'SSM', Promise.resolve(result), true, mock)
  },
  describeMaintenanceWindowsForTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindowsForTarget', 'SSM', Promise.resolve(result), false, mock)
  },
  describeMaintenanceWindowsForTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeMaintenanceWindowsForTarget', 'SSM', Promise.reject(result), true, mock)
  },
  describeOpsItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOpsItems', 'SSM', Promise.resolve(result), true, mock)
  },
  describeOpsItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOpsItems', 'SSM', Promise.resolve(result), false, mock)
  },
  describeOpsItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOpsItems', 'SSM', Promise.reject(result), true, mock)
  },
  describeParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeParameters', 'SSM', Promise.resolve(result), true, mock)
  },
  describeParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeParameters', 'SSM', Promise.resolve(result), false, mock)
  },
  describeParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeParameters', 'SSM', Promise.reject(result), true, mock)
  },
  describePatchBaselines: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePatchBaselines', 'SSM', Promise.resolve(result), true, mock)
  },
  describePatchBaselinesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePatchBaselines', 'SSM', Promise.resolve(result), false, mock)
  },
  describePatchBaselinesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePatchBaselines', 'SSM', Promise.reject(result), true, mock)
  },
  describePatchGroupState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePatchGroupState', 'SSM', Promise.resolve(result), true, mock)
  },
  describePatchGroupStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePatchGroupState', 'SSM', Promise.resolve(result), false, mock)
  },
  describePatchGroupStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePatchGroupState', 'SSM', Promise.reject(result), true, mock)
  },
  describePatchGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePatchGroups', 'SSM', Promise.resolve(result), true, mock)
  },
  describePatchGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePatchGroups', 'SSM', Promise.resolve(result), false, mock)
  },
  describePatchGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePatchGroups', 'SSM', Promise.reject(result), true, mock)
  },
  describePatchProperties: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePatchProperties', 'SSM', Promise.resolve(result), true, mock)
  },
  describePatchPropertiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePatchProperties', 'SSM', Promise.resolve(result), false, mock)
  },
  describePatchPropertiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describePatchProperties', 'SSM', Promise.reject(result), true, mock)
  },
  describeSessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSessions', 'SSM', Promise.resolve(result), true, mock)
  },
  describeSessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSessions', 'SSM', Promise.resolve(result), false, mock)
  },
  describeSessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSessions', 'SSM', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSM', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSM', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'SSM', Promise.reject(result), true, mock)
  },
  disassociateOpsItemRelatedItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateOpsItemRelatedItem', 'SSM', Promise.resolve(result), true, mock)
  },
  disassociateOpsItemRelatedItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateOpsItemRelatedItem', 'SSM', Promise.resolve(result), false, mock)
  },
  disassociateOpsItemRelatedItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateOpsItemRelatedItem', 'SSM', Promise.reject(result), true, mock)
  },
  getAutomationExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAutomationExecution', 'SSM', Promise.resolve(result), true, mock)
  },
  getAutomationExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAutomationExecution', 'SSM', Promise.resolve(result), false, mock)
  },
  getAutomationExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getAutomationExecution', 'SSM', Promise.reject(result), true, mock)
  },
  getCalendarState: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCalendarState', 'SSM', Promise.resolve(result), true, mock)
  },
  getCalendarStateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCalendarState', 'SSM', Promise.resolve(result), false, mock)
  },
  getCalendarStateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCalendarState', 'SSM', Promise.reject(result), true, mock)
  },
  getCommandInvocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCommandInvocation', 'SSM', Promise.resolve(result), true, mock)
  },
  getCommandInvocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCommandInvocation', 'SSM', Promise.resolve(result), false, mock)
  },
  getCommandInvocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCommandInvocation', 'SSM', Promise.reject(result), true, mock)
  },
  getConnectionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnectionStatus', 'SSM', Promise.resolve(result), true, mock)
  },
  getConnectionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnectionStatus', 'SSM', Promise.resolve(result), false, mock)
  },
  getConnectionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnectionStatus', 'SSM', Promise.reject(result), true, mock)
  },
  getDefaultPatchBaseline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDefaultPatchBaseline', 'SSM', Promise.resolve(result), true, mock)
  },
  getDefaultPatchBaselineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDefaultPatchBaseline', 'SSM', Promise.resolve(result), false, mock)
  },
  getDefaultPatchBaselineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDefaultPatchBaseline', 'SSM', Promise.reject(result), true, mock)
  },
  getDeployablePatchSnapshotForInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeployablePatchSnapshotForInstance', 'SSM', Promise.resolve(result), true, mock)
  },
  getDeployablePatchSnapshotForInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeployablePatchSnapshotForInstance', 'SSM', Promise.resolve(result), false, mock)
  },
  getDeployablePatchSnapshotForInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDeployablePatchSnapshotForInstance', 'SSM', Promise.reject(result), true, mock)
  },
  getDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocument', 'SSM', Promise.resolve(result), true, mock)
  },
  getDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocument', 'SSM', Promise.resolve(result), false, mock)
  },
  getDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocument', 'SSM', Promise.reject(result), true, mock)
  },
  getInventory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInventory', 'SSM', Promise.resolve(result), true, mock)
  },
  getInventoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInventory', 'SSM', Promise.resolve(result), false, mock)
  },
  getInventoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInventory', 'SSM', Promise.reject(result), true, mock)
  },
  getInventorySchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInventorySchema', 'SSM', Promise.resolve(result), true, mock)
  },
  getInventorySchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInventorySchema', 'SSM', Promise.resolve(result), false, mock)
  },
  getInventorySchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getInventorySchema', 'SSM', Promise.reject(result), true, mock)
  },
  getMaintenanceWindow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMaintenanceWindow', 'SSM', Promise.resolve(result), true, mock)
  },
  getMaintenanceWindowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMaintenanceWindow', 'SSM', Promise.resolve(result), false, mock)
  },
  getMaintenanceWindowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMaintenanceWindow', 'SSM', Promise.reject(result), true, mock)
  },
  getMaintenanceWindowExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMaintenanceWindowExecution', 'SSM', Promise.resolve(result), true, mock)
  },
  getMaintenanceWindowExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMaintenanceWindowExecution', 'SSM', Promise.resolve(result), false, mock)
  },
  getMaintenanceWindowExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMaintenanceWindowExecution', 'SSM', Promise.reject(result), true, mock)
  },
  getMaintenanceWindowExecutionTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMaintenanceWindowExecutionTask', 'SSM', Promise.resolve(result), true, mock)
  },
  getMaintenanceWindowExecutionTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMaintenanceWindowExecutionTask', 'SSM', Promise.resolve(result), false, mock)
  },
  getMaintenanceWindowExecutionTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMaintenanceWindowExecutionTask', 'SSM', Promise.reject(result), true, mock)
  },
  getMaintenanceWindowExecutionTaskInvocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMaintenanceWindowExecutionTaskInvocation', 'SSM', Promise.resolve(result), true, mock)
  },
  getMaintenanceWindowExecutionTaskInvocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMaintenanceWindowExecutionTaskInvocation', 'SSM', Promise.resolve(result), false, mock)
  },
  getMaintenanceWindowExecutionTaskInvocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMaintenanceWindowExecutionTaskInvocation', 'SSM', Promise.reject(result), true, mock)
  },
  getMaintenanceWindowTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMaintenanceWindowTask', 'SSM', Promise.resolve(result), true, mock)
  },
  getMaintenanceWindowTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMaintenanceWindowTask', 'SSM', Promise.resolve(result), false, mock)
  },
  getMaintenanceWindowTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMaintenanceWindowTask', 'SSM', Promise.reject(result), true, mock)
  },
  getOpsItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOpsItem', 'SSM', Promise.resolve(result), true, mock)
  },
  getOpsItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOpsItem', 'SSM', Promise.resolve(result), false, mock)
  },
  getOpsItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOpsItem', 'SSM', Promise.reject(result), true, mock)
  },
  getOpsMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOpsMetadata', 'SSM', Promise.resolve(result), true, mock)
  },
  getOpsMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOpsMetadata', 'SSM', Promise.resolve(result), false, mock)
  },
  getOpsMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOpsMetadata', 'SSM', Promise.reject(result), true, mock)
  },
  getOpsSummary: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOpsSummary', 'SSM', Promise.resolve(result), true, mock)
  },
  getOpsSummaryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOpsSummary', 'SSM', Promise.resolve(result), false, mock)
  },
  getOpsSummaryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOpsSummary', 'SSM', Promise.reject(result), true, mock)
  },
  getParameter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getParameter', 'SSM', Promise.resolve(result), true, mock)
  },
  getParameterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getParameter', 'SSM', Promise.resolve(result), false, mock)
  },
  getParameterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getParameter', 'SSM', Promise.reject(result), true, mock)
  },
  getParameterHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getParameterHistory', 'SSM', Promise.resolve(result), true, mock)
  },
  getParameterHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getParameterHistory', 'SSM', Promise.resolve(result), false, mock)
  },
  getParameterHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getParameterHistory', 'SSM', Promise.reject(result), true, mock)
  },
  getParameters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getParameters', 'SSM', Promise.resolve(result), true, mock)
  },
  getParametersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getParameters', 'SSM', Promise.resolve(result), false, mock)
  },
  getParametersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getParameters', 'SSM', Promise.reject(result), true, mock)
  },
  getParametersByPath: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getParametersByPath', 'SSM', Promise.resolve(result), true, mock)
  },
  getParametersByPathAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getParametersByPath', 'SSM', Promise.resolve(result), false, mock)
  },
  getParametersByPathThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getParametersByPath', 'SSM', Promise.reject(result), true, mock)
  },
  getPatchBaseline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPatchBaseline', 'SSM', Promise.resolve(result), true, mock)
  },
  getPatchBaselineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPatchBaseline', 'SSM', Promise.resolve(result), false, mock)
  },
  getPatchBaselineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPatchBaseline', 'SSM', Promise.reject(result), true, mock)
  },
  getPatchBaselineForPatchGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPatchBaselineForPatchGroup', 'SSM', Promise.resolve(result), true, mock)
  },
  getPatchBaselineForPatchGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPatchBaselineForPatchGroup', 'SSM', Promise.resolve(result), false, mock)
  },
  getPatchBaselineForPatchGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getPatchBaselineForPatchGroup', 'SSM', Promise.reject(result), true, mock)
  },
  getServiceSetting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServiceSetting', 'SSM', Promise.resolve(result), true, mock)
  },
  getServiceSettingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServiceSetting', 'SSM', Promise.resolve(result), false, mock)
  },
  getServiceSettingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getServiceSetting', 'SSM', Promise.reject(result), true, mock)
  },
  labelParameterVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('labelParameterVersion', 'SSM', Promise.resolve(result), true, mock)
  },
  labelParameterVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('labelParameterVersion', 'SSM', Promise.resolve(result), false, mock)
  },
  labelParameterVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('labelParameterVersion', 'SSM', Promise.reject(result), true, mock)
  },
  listAssociationVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssociationVersions', 'SSM', Promise.resolve(result), true, mock)
  },
  listAssociationVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssociationVersions', 'SSM', Promise.resolve(result), false, mock)
  },
  listAssociationVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssociationVersions', 'SSM', Promise.reject(result), true, mock)
  },
  listAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssociations', 'SSM', Promise.resolve(result), true, mock)
  },
  listAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssociations', 'SSM', Promise.resolve(result), false, mock)
  },
  listAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssociations', 'SSM', Promise.reject(result), true, mock)
  },
  listCommandInvocations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCommandInvocations', 'SSM', Promise.resolve(result), true, mock)
  },
  listCommandInvocationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCommandInvocations', 'SSM', Promise.resolve(result), false, mock)
  },
  listCommandInvocationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCommandInvocations', 'SSM', Promise.reject(result), true, mock)
  },
  listCommands: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCommands', 'SSM', Promise.resolve(result), true, mock)
  },
  listCommandsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCommands', 'SSM', Promise.resolve(result), false, mock)
  },
  listCommandsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCommands', 'SSM', Promise.reject(result), true, mock)
  },
  listComplianceItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComplianceItems', 'SSM', Promise.resolve(result), true, mock)
  },
  listComplianceItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComplianceItems', 'SSM', Promise.resolve(result), false, mock)
  },
  listComplianceItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComplianceItems', 'SSM', Promise.reject(result), true, mock)
  },
  listComplianceSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComplianceSummaries', 'SSM', Promise.resolve(result), true, mock)
  },
  listComplianceSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComplianceSummaries', 'SSM', Promise.resolve(result), false, mock)
  },
  listComplianceSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listComplianceSummaries', 'SSM', Promise.reject(result), true, mock)
  },
  listDocumentMetadataHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDocumentMetadataHistory', 'SSM', Promise.resolve(result), true, mock)
  },
  listDocumentMetadataHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDocumentMetadataHistory', 'SSM', Promise.resolve(result), false, mock)
  },
  listDocumentMetadataHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDocumentMetadataHistory', 'SSM', Promise.reject(result), true, mock)
  },
  listDocumentVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDocumentVersions', 'SSM', Promise.resolve(result), true, mock)
  },
  listDocumentVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDocumentVersions', 'SSM', Promise.resolve(result), false, mock)
  },
  listDocumentVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDocumentVersions', 'SSM', Promise.reject(result), true, mock)
  },
  listDocuments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDocuments', 'SSM', Promise.resolve(result), true, mock)
  },
  listDocumentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDocuments', 'SSM', Promise.resolve(result), false, mock)
  },
  listDocumentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDocuments', 'SSM', Promise.reject(result), true, mock)
  },
  listInventoryEntries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInventoryEntries', 'SSM', Promise.resolve(result), true, mock)
  },
  listInventoryEntriesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInventoryEntries', 'SSM', Promise.resolve(result), false, mock)
  },
  listInventoryEntriesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listInventoryEntries', 'SSM', Promise.reject(result), true, mock)
  },
  listOpsItemEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOpsItemEvents', 'SSM', Promise.resolve(result), true, mock)
  },
  listOpsItemEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOpsItemEvents', 'SSM', Promise.resolve(result), false, mock)
  },
  listOpsItemEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOpsItemEvents', 'SSM', Promise.reject(result), true, mock)
  },
  listOpsItemRelatedItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOpsItemRelatedItems', 'SSM', Promise.resolve(result), true, mock)
  },
  listOpsItemRelatedItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOpsItemRelatedItems', 'SSM', Promise.resolve(result), false, mock)
  },
  listOpsItemRelatedItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOpsItemRelatedItems', 'SSM', Promise.reject(result), true, mock)
  },
  listOpsMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOpsMetadata', 'SSM', Promise.resolve(result), true, mock)
  },
  listOpsMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOpsMetadata', 'SSM', Promise.resolve(result), false, mock)
  },
  listOpsMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOpsMetadata', 'SSM', Promise.reject(result), true, mock)
  },
  listResourceComplianceSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceComplianceSummaries', 'SSM', Promise.resolve(result), true, mock)
  },
  listResourceComplianceSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceComplianceSummaries', 'SSM', Promise.resolve(result), false, mock)
  },
  listResourceComplianceSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceComplianceSummaries', 'SSM', Promise.reject(result), true, mock)
  },
  listResourceDataSync: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceDataSync', 'SSM', Promise.resolve(result), true, mock)
  },
  listResourceDataSyncAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceDataSync', 'SSM', Promise.resolve(result), false, mock)
  },
  listResourceDataSyncThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listResourceDataSync', 'SSM', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SSM', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SSM', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'SSM', Promise.reject(result), true, mock)
  },
  modifyDocumentPermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDocumentPermission', 'SSM', Promise.resolve(result), true, mock)
  },
  modifyDocumentPermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDocumentPermission', 'SSM', Promise.resolve(result), false, mock)
  },
  modifyDocumentPermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('modifyDocumentPermission', 'SSM', Promise.reject(result), true, mock)
  },
  putComplianceItems: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putComplianceItems', 'SSM', Promise.resolve(result), true, mock)
  },
  putComplianceItemsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putComplianceItems', 'SSM', Promise.resolve(result), false, mock)
  },
  putComplianceItemsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putComplianceItems', 'SSM', Promise.reject(result), true, mock)
  },
  putInventory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putInventory', 'SSM', Promise.resolve(result), true, mock)
  },
  putInventoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putInventory', 'SSM', Promise.resolve(result), false, mock)
  },
  putInventoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putInventory', 'SSM', Promise.reject(result), true, mock)
  },
  putParameter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putParameter', 'SSM', Promise.resolve(result), true, mock)
  },
  putParameterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putParameter', 'SSM', Promise.resolve(result), false, mock)
  },
  putParameterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putParameter', 'SSM', Promise.reject(result), true, mock)
  },
  registerDefaultPatchBaseline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerDefaultPatchBaseline', 'SSM', Promise.resolve(result), true, mock)
  },
  registerDefaultPatchBaselineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerDefaultPatchBaseline', 'SSM', Promise.resolve(result), false, mock)
  },
  registerDefaultPatchBaselineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerDefaultPatchBaseline', 'SSM', Promise.reject(result), true, mock)
  },
  registerPatchBaselineForPatchGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerPatchBaselineForPatchGroup', 'SSM', Promise.resolve(result), true, mock)
  },
  registerPatchBaselineForPatchGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerPatchBaselineForPatchGroup', 'SSM', Promise.resolve(result), false, mock)
  },
  registerPatchBaselineForPatchGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerPatchBaselineForPatchGroup', 'SSM', Promise.reject(result), true, mock)
  },
  registerTargetWithMaintenanceWindow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerTargetWithMaintenanceWindow', 'SSM', Promise.resolve(result), true, mock)
  },
  registerTargetWithMaintenanceWindowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerTargetWithMaintenanceWindow', 'SSM', Promise.resolve(result), false, mock)
  },
  registerTargetWithMaintenanceWindowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerTargetWithMaintenanceWindow', 'SSM', Promise.reject(result), true, mock)
  },
  registerTaskWithMaintenanceWindow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerTaskWithMaintenanceWindow', 'SSM', Promise.resolve(result), true, mock)
  },
  registerTaskWithMaintenanceWindowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerTaskWithMaintenanceWindow', 'SSM', Promise.resolve(result), false, mock)
  },
  registerTaskWithMaintenanceWindowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('registerTaskWithMaintenanceWindow', 'SSM', Promise.reject(result), true, mock)
  },
  removeTagsFromResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromResource', 'SSM', Promise.resolve(result), true, mock)
  },
  removeTagsFromResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromResource', 'SSM', Promise.resolve(result), false, mock)
  },
  removeTagsFromResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeTagsFromResource', 'SSM', Promise.reject(result), true, mock)
  },
  resetServiceSetting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetServiceSetting', 'SSM', Promise.resolve(result), true, mock)
  },
  resetServiceSettingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetServiceSetting', 'SSM', Promise.resolve(result), false, mock)
  },
  resetServiceSettingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resetServiceSetting', 'SSM', Promise.reject(result), true, mock)
  },
  resumeSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resumeSession', 'SSM', Promise.resolve(result), true, mock)
  },
  resumeSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resumeSession', 'SSM', Promise.resolve(result), false, mock)
  },
  resumeSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('resumeSession', 'SSM', Promise.reject(result), true, mock)
  },
  sendAutomationSignal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendAutomationSignal', 'SSM', Promise.resolve(result), true, mock)
  },
  sendAutomationSignalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendAutomationSignal', 'SSM', Promise.resolve(result), false, mock)
  },
  sendAutomationSignalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendAutomationSignal', 'SSM', Promise.reject(result), true, mock)
  },
  sendCommand: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendCommand', 'SSM', Promise.resolve(result), true, mock)
  },
  sendCommandAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendCommand', 'SSM', Promise.resolve(result), false, mock)
  },
  sendCommandThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('sendCommand', 'SSM', Promise.reject(result), true, mock)
  },
  startAssociationsOnce: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAssociationsOnce', 'SSM', Promise.resolve(result), true, mock)
  },
  startAssociationsOnceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAssociationsOnce', 'SSM', Promise.resolve(result), false, mock)
  },
  startAssociationsOnceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAssociationsOnce', 'SSM', Promise.reject(result), true, mock)
  },
  startAutomationExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAutomationExecution', 'SSM', Promise.resolve(result), true, mock)
  },
  startAutomationExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAutomationExecution', 'SSM', Promise.resolve(result), false, mock)
  },
  startAutomationExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startAutomationExecution', 'SSM', Promise.reject(result), true, mock)
  },
  startChangeRequestExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startChangeRequestExecution', 'SSM', Promise.resolve(result), true, mock)
  },
  startChangeRequestExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startChangeRequestExecution', 'SSM', Promise.resolve(result), false, mock)
  },
  startChangeRequestExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startChangeRequestExecution', 'SSM', Promise.reject(result), true, mock)
  },
  startSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSession', 'SSM', Promise.resolve(result), true, mock)
  },
  startSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSession', 'SSM', Promise.resolve(result), false, mock)
  },
  startSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startSession', 'SSM', Promise.reject(result), true, mock)
  },
  stopAutomationExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopAutomationExecution', 'SSM', Promise.resolve(result), true, mock)
  },
  stopAutomationExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopAutomationExecution', 'SSM', Promise.resolve(result), false, mock)
  },
  stopAutomationExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopAutomationExecution', 'SSM', Promise.reject(result), true, mock)
  },
  terminateSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateSession', 'SSM', Promise.resolve(result), true, mock)
  },
  terminateSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateSession', 'SSM', Promise.resolve(result), false, mock)
  },
  terminateSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('terminateSession', 'SSM', Promise.reject(result), true, mock)
  },
  unlabelParameterVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unlabelParameterVersion', 'SSM', Promise.resolve(result), true, mock)
  },
  unlabelParameterVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unlabelParameterVersion', 'SSM', Promise.resolve(result), false, mock)
  },
  unlabelParameterVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('unlabelParameterVersion', 'SSM', Promise.reject(result), true, mock)
  },
  updateAssociation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAssociation', 'SSM', Promise.resolve(result), true, mock)
  },
  updateAssociationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAssociation', 'SSM', Promise.resolve(result), false, mock)
  },
  updateAssociationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAssociation', 'SSM', Promise.reject(result), true, mock)
  },
  updateAssociationStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAssociationStatus', 'SSM', Promise.resolve(result), true, mock)
  },
  updateAssociationStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAssociationStatus', 'SSM', Promise.resolve(result), false, mock)
  },
  updateAssociationStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateAssociationStatus', 'SSM', Promise.reject(result), true, mock)
  },
  updateDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDocument', 'SSM', Promise.resolve(result), true, mock)
  },
  updateDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDocument', 'SSM', Promise.resolve(result), false, mock)
  },
  updateDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDocument', 'SSM', Promise.reject(result), true, mock)
  },
  updateDocumentDefaultVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDocumentDefaultVersion', 'SSM', Promise.resolve(result), true, mock)
  },
  updateDocumentDefaultVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDocumentDefaultVersion', 'SSM', Promise.resolve(result), false, mock)
  },
  updateDocumentDefaultVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDocumentDefaultVersion', 'SSM', Promise.reject(result), true, mock)
  },
  updateDocumentMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDocumentMetadata', 'SSM', Promise.resolve(result), true, mock)
  },
  updateDocumentMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDocumentMetadata', 'SSM', Promise.resolve(result), false, mock)
  },
  updateDocumentMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDocumentMetadata', 'SSM', Promise.reject(result), true, mock)
  },
  updateMaintenanceWindow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMaintenanceWindow', 'SSM', Promise.resolve(result), true, mock)
  },
  updateMaintenanceWindowAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMaintenanceWindow', 'SSM', Promise.resolve(result), false, mock)
  },
  updateMaintenanceWindowThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMaintenanceWindow', 'SSM', Promise.reject(result), true, mock)
  },
  updateMaintenanceWindowTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMaintenanceWindowTarget', 'SSM', Promise.resolve(result), true, mock)
  },
  updateMaintenanceWindowTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMaintenanceWindowTarget', 'SSM', Promise.resolve(result), false, mock)
  },
  updateMaintenanceWindowTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMaintenanceWindowTarget', 'SSM', Promise.reject(result), true, mock)
  },
  updateMaintenanceWindowTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMaintenanceWindowTask', 'SSM', Promise.resolve(result), true, mock)
  },
  updateMaintenanceWindowTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMaintenanceWindowTask', 'SSM', Promise.resolve(result), false, mock)
  },
  updateMaintenanceWindowTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateMaintenanceWindowTask', 'SSM', Promise.reject(result), true, mock)
  },
  updateManagedInstanceRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateManagedInstanceRole', 'SSM', Promise.resolve(result), true, mock)
  },
  updateManagedInstanceRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateManagedInstanceRole', 'SSM', Promise.resolve(result), false, mock)
  },
  updateManagedInstanceRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateManagedInstanceRole', 'SSM', Promise.reject(result), true, mock)
  },
  updateOpsItem: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOpsItem', 'SSM', Promise.resolve(result), true, mock)
  },
  updateOpsItemAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOpsItem', 'SSM', Promise.resolve(result), false, mock)
  },
  updateOpsItemThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOpsItem', 'SSM', Promise.reject(result), true, mock)
  },
  updateOpsMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOpsMetadata', 'SSM', Promise.resolve(result), true, mock)
  },
  updateOpsMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOpsMetadata', 'SSM', Promise.resolve(result), false, mock)
  },
  updateOpsMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOpsMetadata', 'SSM', Promise.reject(result), true, mock)
  },
  updatePatchBaseline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePatchBaseline', 'SSM', Promise.resolve(result), true, mock)
  },
  updatePatchBaselineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePatchBaseline', 'SSM', Promise.resolve(result), false, mock)
  },
  updatePatchBaselineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updatePatchBaseline', 'SSM', Promise.reject(result), true, mock)
  },
  updateResourceDataSync: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResourceDataSync', 'SSM', Promise.resolve(result), true, mock)
  },
  updateResourceDataSyncAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResourceDataSync', 'SSM', Promise.resolve(result), false, mock)
  },
  updateResourceDataSyncThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateResourceDataSync', 'SSM', Promise.reject(result), true, mock)
  },
  updateServiceSetting: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServiceSetting', 'SSM', Promise.resolve(result), true, mock)
  },
  updateServiceSettingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServiceSetting', 'SSM', Promise.resolve(result), false, mock)
  },
  updateServiceSettingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateServiceSetting', 'SSM', Promise.reject(result), true, mock)
  },
}
