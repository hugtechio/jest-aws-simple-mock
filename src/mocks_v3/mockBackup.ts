
/**
* @description mocks_v3:mockBackup module is mocks for AWS-SDK V3
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

  export const mockBackup = {
  createBackupPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'createBackupPlan', 'Backup', Promise.resolve(result), true, mock)
  },
  createBackupPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'createBackupPlan', 'Backup', Promise.resolve(result), false, mock)
  },
  createBackupPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'createBackupPlan', 'Backup', Promise.reject(result), true, mock)
  },
  createBackupSelection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'createBackupSelection', 'Backup', Promise.resolve(result), true, mock)
  },
  createBackupSelectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'createBackupSelection', 'Backup', Promise.resolve(result), false, mock)
  },
  createBackupSelectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'createBackupSelection', 'Backup', Promise.reject(result), true, mock)
  },
  createBackupVault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'createBackupVault', 'Backup', Promise.resolve(result), true, mock)
  },
  createBackupVaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'createBackupVault', 'Backup', Promise.resolve(result), false, mock)
  },
  createBackupVaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'createBackupVault', 'Backup', Promise.reject(result), true, mock)
  },
  createFramework: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'createFramework', 'Backup', Promise.resolve(result), true, mock)
  },
  createFrameworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'createFramework', 'Backup', Promise.resolve(result), false, mock)
  },
  createFrameworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'createFramework', 'Backup', Promise.reject(result), true, mock)
  },
  createReportPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'createReportPlan', 'Backup', Promise.resolve(result), true, mock)
  },
  createReportPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'createReportPlan', 'Backup', Promise.resolve(result), false, mock)
  },
  createReportPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'createReportPlan', 'Backup', Promise.reject(result), true, mock)
  },
  deleteBackupPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteBackupPlan', 'Backup', Promise.resolve(result), true, mock)
  },
  deleteBackupPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteBackupPlan', 'Backup', Promise.resolve(result), false, mock)
  },
  deleteBackupPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteBackupPlan', 'Backup', Promise.reject(result), true, mock)
  },
  deleteBackupSelection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteBackupSelection', 'Backup', Promise.resolve(result), true, mock)
  },
  deleteBackupSelectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteBackupSelection', 'Backup', Promise.resolve(result), false, mock)
  },
  deleteBackupSelectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteBackupSelection', 'Backup', Promise.reject(result), true, mock)
  },
  deleteBackupVault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteBackupVault', 'Backup', Promise.resolve(result), true, mock)
  },
  deleteBackupVaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteBackupVault', 'Backup', Promise.resolve(result), false, mock)
  },
  deleteBackupVaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteBackupVault', 'Backup', Promise.reject(result), true, mock)
  },
  deleteBackupVaultAccessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteBackupVaultAccessPolicy', 'Backup', Promise.resolve(result), true, mock)
  },
  deleteBackupVaultAccessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteBackupVaultAccessPolicy', 'Backup', Promise.resolve(result), false, mock)
  },
  deleteBackupVaultAccessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteBackupVaultAccessPolicy', 'Backup', Promise.reject(result), true, mock)
  },
  deleteBackupVaultLockConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteBackupVaultLockConfiguration', 'Backup', Promise.resolve(result), true, mock)
  },
  deleteBackupVaultLockConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteBackupVaultLockConfiguration', 'Backup', Promise.resolve(result), false, mock)
  },
  deleteBackupVaultLockConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteBackupVaultLockConfiguration', 'Backup', Promise.reject(result), true, mock)
  },
  deleteBackupVaultNotifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteBackupVaultNotifications', 'Backup', Promise.resolve(result), true, mock)
  },
  deleteBackupVaultNotificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteBackupVaultNotifications', 'Backup', Promise.resolve(result), false, mock)
  },
  deleteBackupVaultNotificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteBackupVaultNotifications', 'Backup', Promise.reject(result), true, mock)
  },
  deleteFramework: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteFramework', 'Backup', Promise.resolve(result), true, mock)
  },
  deleteFrameworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteFramework', 'Backup', Promise.resolve(result), false, mock)
  },
  deleteFrameworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteFramework', 'Backup', Promise.reject(result), true, mock)
  },
  deleteRecoveryPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteRecoveryPoint', 'Backup', Promise.resolve(result), true, mock)
  },
  deleteRecoveryPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteRecoveryPoint', 'Backup', Promise.resolve(result), false, mock)
  },
  deleteRecoveryPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteRecoveryPoint', 'Backup', Promise.reject(result), true, mock)
  },
  deleteReportPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteReportPlan', 'Backup', Promise.resolve(result), true, mock)
  },
  deleteReportPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteReportPlan', 'Backup', Promise.resolve(result), false, mock)
  },
  deleteReportPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'deleteReportPlan', 'Backup', Promise.reject(result), true, mock)
  },
  describeBackupJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeBackupJob', 'Backup', Promise.resolve(result), true, mock)
  },
  describeBackupJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeBackupJob', 'Backup', Promise.resolve(result), false, mock)
  },
  describeBackupJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeBackupJob', 'Backup', Promise.reject(result), true, mock)
  },
  describeBackupVault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeBackupVault', 'Backup', Promise.resolve(result), true, mock)
  },
  describeBackupVaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeBackupVault', 'Backup', Promise.resolve(result), false, mock)
  },
  describeBackupVaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeBackupVault', 'Backup', Promise.reject(result), true, mock)
  },
  describeCopyJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeCopyJob', 'Backup', Promise.resolve(result), true, mock)
  },
  describeCopyJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeCopyJob', 'Backup', Promise.resolve(result), false, mock)
  },
  describeCopyJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeCopyJob', 'Backup', Promise.reject(result), true, mock)
  },
  describeFramework: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeFramework', 'Backup', Promise.resolve(result), true, mock)
  },
  describeFrameworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeFramework', 'Backup', Promise.resolve(result), false, mock)
  },
  describeFrameworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeFramework', 'Backup', Promise.reject(result), true, mock)
  },
  describeGlobalSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeGlobalSettings', 'Backup', Promise.resolve(result), true, mock)
  },
  describeGlobalSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeGlobalSettings', 'Backup', Promise.resolve(result), false, mock)
  },
  describeGlobalSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeGlobalSettings', 'Backup', Promise.reject(result), true, mock)
  },
  describeProtectedResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeProtectedResource', 'Backup', Promise.resolve(result), true, mock)
  },
  describeProtectedResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeProtectedResource', 'Backup', Promise.resolve(result), false, mock)
  },
  describeProtectedResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeProtectedResource', 'Backup', Promise.reject(result), true, mock)
  },
  describeRecoveryPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeRecoveryPoint', 'Backup', Promise.resolve(result), true, mock)
  },
  describeRecoveryPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeRecoveryPoint', 'Backup', Promise.resolve(result), false, mock)
  },
  describeRecoveryPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeRecoveryPoint', 'Backup', Promise.reject(result), true, mock)
  },
  describeRegionSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeRegionSettings', 'Backup', Promise.resolve(result), true, mock)
  },
  describeRegionSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeRegionSettings', 'Backup', Promise.resolve(result), false, mock)
  },
  describeRegionSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeRegionSettings', 'Backup', Promise.reject(result), true, mock)
  },
  describeReportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeReportJob', 'Backup', Promise.resolve(result), true, mock)
  },
  describeReportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeReportJob', 'Backup', Promise.resolve(result), false, mock)
  },
  describeReportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeReportJob', 'Backup', Promise.reject(result), true, mock)
  },
  describeReportPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeReportPlan', 'Backup', Promise.resolve(result), true, mock)
  },
  describeReportPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeReportPlan', 'Backup', Promise.resolve(result), false, mock)
  },
  describeReportPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeReportPlan', 'Backup', Promise.reject(result), true, mock)
  },
  describeRestoreJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeRestoreJob', 'Backup', Promise.resolve(result), true, mock)
  },
  describeRestoreJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeRestoreJob', 'Backup', Promise.resolve(result), false, mock)
  },
  describeRestoreJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'describeRestoreJob', 'Backup', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'destroy', 'Backup', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'destroy', 'Backup', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'destroy', 'Backup', Promise.reject(result), true, mock)
  },
  disassociateRecoveryPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'disassociateRecoveryPoint', 'Backup', Promise.resolve(result), true, mock)
  },
  disassociateRecoveryPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'disassociateRecoveryPoint', 'Backup', Promise.resolve(result), false, mock)
  },
  disassociateRecoveryPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'disassociateRecoveryPoint', 'Backup', Promise.reject(result), true, mock)
  },
  exportBackupPlanTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'exportBackupPlanTemplate', 'Backup', Promise.resolve(result), true, mock)
  },
  exportBackupPlanTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'exportBackupPlanTemplate', 'Backup', Promise.resolve(result), false, mock)
  },
  exportBackupPlanTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'exportBackupPlanTemplate', 'Backup', Promise.reject(result), true, mock)
  },
  getBackupPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getBackupPlan', 'Backup', Promise.resolve(result), true, mock)
  },
  getBackupPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getBackupPlan', 'Backup', Promise.resolve(result), false, mock)
  },
  getBackupPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getBackupPlan', 'Backup', Promise.reject(result), true, mock)
  },
  getBackupPlanFromJSON: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getBackupPlanFromJSON', 'Backup', Promise.resolve(result), true, mock)
  },
  getBackupPlanFromJSONAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getBackupPlanFromJSON', 'Backup', Promise.resolve(result), false, mock)
  },
  getBackupPlanFromJSONThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getBackupPlanFromJSON', 'Backup', Promise.reject(result), true, mock)
  },
  getBackupPlanFromTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getBackupPlanFromTemplate', 'Backup', Promise.resolve(result), true, mock)
  },
  getBackupPlanFromTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getBackupPlanFromTemplate', 'Backup', Promise.resolve(result), false, mock)
  },
  getBackupPlanFromTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getBackupPlanFromTemplate', 'Backup', Promise.reject(result), true, mock)
  },
  getBackupSelection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getBackupSelection', 'Backup', Promise.resolve(result), true, mock)
  },
  getBackupSelectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getBackupSelection', 'Backup', Promise.resolve(result), false, mock)
  },
  getBackupSelectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getBackupSelection', 'Backup', Promise.reject(result), true, mock)
  },
  getBackupVaultAccessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getBackupVaultAccessPolicy', 'Backup', Promise.resolve(result), true, mock)
  },
  getBackupVaultAccessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getBackupVaultAccessPolicy', 'Backup', Promise.resolve(result), false, mock)
  },
  getBackupVaultAccessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getBackupVaultAccessPolicy', 'Backup', Promise.reject(result), true, mock)
  },
  getBackupVaultNotifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getBackupVaultNotifications', 'Backup', Promise.resolve(result), true, mock)
  },
  getBackupVaultNotificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getBackupVaultNotifications', 'Backup', Promise.resolve(result), false, mock)
  },
  getBackupVaultNotificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getBackupVaultNotifications', 'Backup', Promise.reject(result), true, mock)
  },
  getRecoveryPointRestoreMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getRecoveryPointRestoreMetadata', 'Backup', Promise.resolve(result), true, mock)
  },
  getRecoveryPointRestoreMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getRecoveryPointRestoreMetadata', 'Backup', Promise.resolve(result), false, mock)
  },
  getRecoveryPointRestoreMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getRecoveryPointRestoreMetadata', 'Backup', Promise.reject(result), true, mock)
  },
  getSupportedResourceTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getSupportedResourceTypes', 'Backup', Promise.resolve(result), true, mock)
  },
  getSupportedResourceTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getSupportedResourceTypes', 'Backup', Promise.resolve(result), false, mock)
  },
  getSupportedResourceTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'getSupportedResourceTypes', 'Backup', Promise.reject(result), true, mock)
  },
  listBackupJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listBackupJobs', 'Backup', Promise.resolve(result), true, mock)
  },
  listBackupJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listBackupJobs', 'Backup', Promise.resolve(result), false, mock)
  },
  listBackupJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listBackupJobs', 'Backup', Promise.reject(result), true, mock)
  },
  listBackupPlanTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listBackupPlanTemplates', 'Backup', Promise.resolve(result), true, mock)
  },
  listBackupPlanTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listBackupPlanTemplates', 'Backup', Promise.resolve(result), false, mock)
  },
  listBackupPlanTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listBackupPlanTemplates', 'Backup', Promise.reject(result), true, mock)
  },
  listBackupPlanVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listBackupPlanVersions', 'Backup', Promise.resolve(result), true, mock)
  },
  listBackupPlanVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listBackupPlanVersions', 'Backup', Promise.resolve(result), false, mock)
  },
  listBackupPlanVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listBackupPlanVersions', 'Backup', Promise.reject(result), true, mock)
  },
  listBackupPlans: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listBackupPlans', 'Backup', Promise.resolve(result), true, mock)
  },
  listBackupPlansAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listBackupPlans', 'Backup', Promise.resolve(result), false, mock)
  },
  listBackupPlansThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listBackupPlans', 'Backup', Promise.reject(result), true, mock)
  },
  listBackupSelections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listBackupSelections', 'Backup', Promise.resolve(result), true, mock)
  },
  listBackupSelectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listBackupSelections', 'Backup', Promise.resolve(result), false, mock)
  },
  listBackupSelectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listBackupSelections', 'Backup', Promise.reject(result), true, mock)
  },
  listBackupVaults: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listBackupVaults', 'Backup', Promise.resolve(result), true, mock)
  },
  listBackupVaultsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listBackupVaults', 'Backup', Promise.resolve(result), false, mock)
  },
  listBackupVaultsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listBackupVaults', 'Backup', Promise.reject(result), true, mock)
  },
  listCopyJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listCopyJobs', 'Backup', Promise.resolve(result), true, mock)
  },
  listCopyJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listCopyJobs', 'Backup', Promise.resolve(result), false, mock)
  },
  listCopyJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listCopyJobs', 'Backup', Promise.reject(result), true, mock)
  },
  listFrameworks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listFrameworks', 'Backup', Promise.resolve(result), true, mock)
  },
  listFrameworksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listFrameworks', 'Backup', Promise.resolve(result), false, mock)
  },
  listFrameworksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listFrameworks', 'Backup', Promise.reject(result), true, mock)
  },
  listProtectedResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listProtectedResources', 'Backup', Promise.resolve(result), true, mock)
  },
  listProtectedResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listProtectedResources', 'Backup', Promise.resolve(result), false, mock)
  },
  listProtectedResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listProtectedResources', 'Backup', Promise.reject(result), true, mock)
  },
  listRecoveryPointsByBackupVault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listRecoveryPointsByBackupVault', 'Backup', Promise.resolve(result), true, mock)
  },
  listRecoveryPointsByBackupVaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listRecoveryPointsByBackupVault', 'Backup', Promise.resolve(result), false, mock)
  },
  listRecoveryPointsByBackupVaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listRecoveryPointsByBackupVault', 'Backup', Promise.reject(result), true, mock)
  },
  listRecoveryPointsByResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listRecoveryPointsByResource', 'Backup', Promise.resolve(result), true, mock)
  },
  listRecoveryPointsByResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listRecoveryPointsByResource', 'Backup', Promise.resolve(result), false, mock)
  },
  listRecoveryPointsByResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listRecoveryPointsByResource', 'Backup', Promise.reject(result), true, mock)
  },
  listReportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listReportJobs', 'Backup', Promise.resolve(result), true, mock)
  },
  listReportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listReportJobs', 'Backup', Promise.resolve(result), false, mock)
  },
  listReportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listReportJobs', 'Backup', Promise.reject(result), true, mock)
  },
  listReportPlans: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listReportPlans', 'Backup', Promise.resolve(result), true, mock)
  },
  listReportPlansAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listReportPlans', 'Backup', Promise.resolve(result), false, mock)
  },
  listReportPlansThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listReportPlans', 'Backup', Promise.reject(result), true, mock)
  },
  listRestoreJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listRestoreJobs', 'Backup', Promise.resolve(result), true, mock)
  },
  listRestoreJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listRestoreJobs', 'Backup', Promise.resolve(result), false, mock)
  },
  listRestoreJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listRestoreJobs', 'Backup', Promise.reject(result), true, mock)
  },
  listTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listTags', 'Backup', Promise.resolve(result), true, mock)
  },
  listTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listTags', 'Backup', Promise.resolve(result), false, mock)
  },
  listTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'listTags', 'Backup', Promise.reject(result), true, mock)
  },
  putBackupVaultAccessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'putBackupVaultAccessPolicy', 'Backup', Promise.resolve(result), true, mock)
  },
  putBackupVaultAccessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'putBackupVaultAccessPolicy', 'Backup', Promise.resolve(result), false, mock)
  },
  putBackupVaultAccessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'putBackupVaultAccessPolicy', 'Backup', Promise.reject(result), true, mock)
  },
  putBackupVaultLockConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'putBackupVaultLockConfiguration', 'Backup', Promise.resolve(result), true, mock)
  },
  putBackupVaultLockConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'putBackupVaultLockConfiguration', 'Backup', Promise.resolve(result), false, mock)
  },
  putBackupVaultLockConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'putBackupVaultLockConfiguration', 'Backup', Promise.reject(result), true, mock)
  },
  putBackupVaultNotifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'putBackupVaultNotifications', 'Backup', Promise.resolve(result), true, mock)
  },
  putBackupVaultNotificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'putBackupVaultNotifications', 'Backup', Promise.resolve(result), false, mock)
  },
  putBackupVaultNotificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'putBackupVaultNotifications', 'Backup', Promise.reject(result), true, mock)
  },
  startBackupJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'startBackupJob', 'Backup', Promise.resolve(result), true, mock)
  },
  startBackupJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'startBackupJob', 'Backup', Promise.resolve(result), false, mock)
  },
  startBackupJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'startBackupJob', 'Backup', Promise.reject(result), true, mock)
  },
  startCopyJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'startCopyJob', 'Backup', Promise.resolve(result), true, mock)
  },
  startCopyJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'startCopyJob', 'Backup', Promise.resolve(result), false, mock)
  },
  startCopyJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'startCopyJob', 'Backup', Promise.reject(result), true, mock)
  },
  startReportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'startReportJob', 'Backup', Promise.resolve(result), true, mock)
  },
  startReportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'startReportJob', 'Backup', Promise.resolve(result), false, mock)
  },
  startReportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'startReportJob', 'Backup', Promise.reject(result), true, mock)
  },
  startRestoreJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'startRestoreJob', 'Backup', Promise.resolve(result), true, mock)
  },
  startRestoreJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'startRestoreJob', 'Backup', Promise.resolve(result), false, mock)
  },
  startRestoreJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'startRestoreJob', 'Backup', Promise.reject(result), true, mock)
  },
  stopBackupJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'stopBackupJob', 'Backup', Promise.resolve(result), true, mock)
  },
  stopBackupJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'stopBackupJob', 'Backup', Promise.resolve(result), false, mock)
  },
  stopBackupJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'stopBackupJob', 'Backup', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'tagResource', 'Backup', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'tagResource', 'Backup', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'tagResource', 'Backup', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'untagResource', 'Backup', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'untagResource', 'Backup', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'untagResource', 'Backup', Promise.reject(result), true, mock)
  },
  updateBackupPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'updateBackupPlan', 'Backup', Promise.resolve(result), true, mock)
  },
  updateBackupPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'updateBackupPlan', 'Backup', Promise.resolve(result), false, mock)
  },
  updateBackupPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'updateBackupPlan', 'Backup', Promise.reject(result), true, mock)
  },
  updateFramework: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'updateFramework', 'Backup', Promise.resolve(result), true, mock)
  },
  updateFrameworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'updateFramework', 'Backup', Promise.resolve(result), false, mock)
  },
  updateFrameworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'updateFramework', 'Backup', Promise.reject(result), true, mock)
  },
  updateGlobalSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'updateGlobalSettings', 'Backup', Promise.resolve(result), true, mock)
  },
  updateGlobalSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'updateGlobalSettings', 'Backup', Promise.resolve(result), false, mock)
  },
  updateGlobalSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'updateGlobalSettings', 'Backup', Promise.reject(result), true, mock)
  },
  updateRecoveryPointLifecycle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'updateRecoveryPointLifecycle', 'Backup', Promise.resolve(result), true, mock)
  },
  updateRecoveryPointLifecycleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'updateRecoveryPointLifecycle', 'Backup', Promise.resolve(result), false, mock)
  },
  updateRecoveryPointLifecycleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'updateRecoveryPointLifecycle', 'Backup', Promise.reject(result), true, mock)
  },
  updateRegionSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'updateRegionSettings', 'Backup', Promise.resolve(result), true, mock)
  },
  updateRegionSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'updateRegionSettings', 'Backup', Promise.resolve(result), false, mock)
  },
  updateRegionSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'updateRegionSettings', 'Backup', Promise.reject(result), true, mock)
  },
  updateReportPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'updateReportPlan', 'Backup', Promise.resolve(result), true, mock)
  },
  updateReportPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'updateReportPlan', 'Backup', Promise.resolve(result), false, mock)
  },
  updateReportPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'updateReportPlan', 'Backup', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'send', 'BackupClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'send', 'BackupClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-backup', 'send', 'BackupClient', Promise.reject(result), true, mock)
  }
}