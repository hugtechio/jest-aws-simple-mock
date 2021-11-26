
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
  export const mockBackup = {
  createBackupPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBackupPlan', 'Backup', Promise.resolve(result), true, mock)
  },
  createBackupPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBackupPlan', 'Backup', Promise.resolve(result), false, mock)
  },
  createBackupPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBackupPlan', 'Backup', Promise.reject(result), true, mock)
  },
  createBackupSelection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBackupSelection', 'Backup', Promise.resolve(result), true, mock)
  },
  createBackupSelectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBackupSelection', 'Backup', Promise.resolve(result), false, mock)
  },
  createBackupSelectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBackupSelection', 'Backup', Promise.reject(result), true, mock)
  },
  createBackupVault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBackupVault', 'Backup', Promise.resolve(result), true, mock)
  },
  createBackupVaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBackupVault', 'Backup', Promise.resolve(result), false, mock)
  },
  createBackupVaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createBackupVault', 'Backup', Promise.reject(result), true, mock)
  },
  createFramework: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFramework', 'Backup', Promise.resolve(result), true, mock)
  },
  createFrameworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFramework', 'Backup', Promise.resolve(result), false, mock)
  },
  createFrameworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFramework', 'Backup', Promise.reject(result), true, mock)
  },
  createReportPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReportPlan', 'Backup', Promise.resolve(result), true, mock)
  },
  createReportPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReportPlan', 'Backup', Promise.resolve(result), false, mock)
  },
  createReportPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createReportPlan', 'Backup', Promise.reject(result), true, mock)
  },
  deleteBackupPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackupPlan', 'Backup', Promise.resolve(result), true, mock)
  },
  deleteBackupPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackupPlan', 'Backup', Promise.resolve(result), false, mock)
  },
  deleteBackupPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackupPlan', 'Backup', Promise.reject(result), true, mock)
  },
  deleteBackupSelection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackupSelection', 'Backup', Promise.resolve(result), true, mock)
  },
  deleteBackupSelectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackupSelection', 'Backup', Promise.resolve(result), false, mock)
  },
  deleteBackupSelectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackupSelection', 'Backup', Promise.reject(result), true, mock)
  },
  deleteBackupVault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackupVault', 'Backup', Promise.resolve(result), true, mock)
  },
  deleteBackupVaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackupVault', 'Backup', Promise.resolve(result), false, mock)
  },
  deleteBackupVaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackupVault', 'Backup', Promise.reject(result), true, mock)
  },
  deleteBackupVaultAccessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackupVaultAccessPolicy', 'Backup', Promise.resolve(result), true, mock)
  },
  deleteBackupVaultAccessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackupVaultAccessPolicy', 'Backup', Promise.resolve(result), false, mock)
  },
  deleteBackupVaultAccessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackupVaultAccessPolicy', 'Backup', Promise.reject(result), true, mock)
  },
  deleteBackupVaultLockConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackupVaultLockConfiguration', 'Backup', Promise.resolve(result), true, mock)
  },
  deleteBackupVaultLockConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackupVaultLockConfiguration', 'Backup', Promise.resolve(result), false, mock)
  },
  deleteBackupVaultLockConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackupVaultLockConfiguration', 'Backup', Promise.reject(result), true, mock)
  },
  deleteBackupVaultNotifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackupVaultNotifications', 'Backup', Promise.resolve(result), true, mock)
  },
  deleteBackupVaultNotificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackupVaultNotifications', 'Backup', Promise.resolve(result), false, mock)
  },
  deleteBackupVaultNotificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteBackupVaultNotifications', 'Backup', Promise.reject(result), true, mock)
  },
  deleteFramework: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFramework', 'Backup', Promise.resolve(result), true, mock)
  },
  deleteFrameworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFramework', 'Backup', Promise.resolve(result), false, mock)
  },
  deleteFrameworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFramework', 'Backup', Promise.reject(result), true, mock)
  },
  deleteRecoveryPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRecoveryPoint', 'Backup', Promise.resolve(result), true, mock)
  },
  deleteRecoveryPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRecoveryPoint', 'Backup', Promise.resolve(result), false, mock)
  },
  deleteRecoveryPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteRecoveryPoint', 'Backup', Promise.reject(result), true, mock)
  },
  deleteReportPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReportPlan', 'Backup', Promise.resolve(result), true, mock)
  },
  deleteReportPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReportPlan', 'Backup', Promise.resolve(result), false, mock)
  },
  deleteReportPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteReportPlan', 'Backup', Promise.reject(result), true, mock)
  },
  describeBackupJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBackupJob', 'Backup', Promise.resolve(result), true, mock)
  },
  describeBackupJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBackupJob', 'Backup', Promise.resolve(result), false, mock)
  },
  describeBackupJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBackupJob', 'Backup', Promise.reject(result), true, mock)
  },
  describeBackupVault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBackupVault', 'Backup', Promise.resolve(result), true, mock)
  },
  describeBackupVaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBackupVault', 'Backup', Promise.resolve(result), false, mock)
  },
  describeBackupVaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeBackupVault', 'Backup', Promise.reject(result), true, mock)
  },
  describeCopyJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCopyJob', 'Backup', Promise.resolve(result), true, mock)
  },
  describeCopyJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCopyJob', 'Backup', Promise.resolve(result), false, mock)
  },
  describeCopyJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeCopyJob', 'Backup', Promise.reject(result), true, mock)
  },
  describeFramework: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFramework', 'Backup', Promise.resolve(result), true, mock)
  },
  describeFrameworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFramework', 'Backup', Promise.resolve(result), false, mock)
  },
  describeFrameworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFramework', 'Backup', Promise.reject(result), true, mock)
  },
  describeGlobalSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGlobalSettings', 'Backup', Promise.resolve(result), true, mock)
  },
  describeGlobalSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGlobalSettings', 'Backup', Promise.resolve(result), false, mock)
  },
  describeGlobalSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGlobalSettings', 'Backup', Promise.reject(result), true, mock)
  },
  describeProtectedResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProtectedResource', 'Backup', Promise.resolve(result), true, mock)
  },
  describeProtectedResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProtectedResource', 'Backup', Promise.resolve(result), false, mock)
  },
  describeProtectedResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeProtectedResource', 'Backup', Promise.reject(result), true, mock)
  },
  describeRecoveryPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRecoveryPoint', 'Backup', Promise.resolve(result), true, mock)
  },
  describeRecoveryPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRecoveryPoint', 'Backup', Promise.resolve(result), false, mock)
  },
  describeRecoveryPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRecoveryPoint', 'Backup', Promise.reject(result), true, mock)
  },
  describeRegionSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRegionSettings', 'Backup', Promise.resolve(result), true, mock)
  },
  describeRegionSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRegionSettings', 'Backup', Promise.resolve(result), false, mock)
  },
  describeRegionSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRegionSettings', 'Backup', Promise.reject(result), true, mock)
  },
  describeReportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReportJob', 'Backup', Promise.resolve(result), true, mock)
  },
  describeReportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReportJob', 'Backup', Promise.resolve(result), false, mock)
  },
  describeReportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReportJob', 'Backup', Promise.reject(result), true, mock)
  },
  describeReportPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReportPlan', 'Backup', Promise.resolve(result), true, mock)
  },
  describeReportPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReportPlan', 'Backup', Promise.resolve(result), false, mock)
  },
  describeReportPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeReportPlan', 'Backup', Promise.reject(result), true, mock)
  },
  describeRestoreJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRestoreJob', 'Backup', Promise.resolve(result), true, mock)
  },
  describeRestoreJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRestoreJob', 'Backup', Promise.resolve(result), false, mock)
  },
  describeRestoreJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRestoreJob', 'Backup', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Backup', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Backup', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Backup', Promise.reject(result), true, mock)
  },
  disassociateRecoveryPoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateRecoveryPoint', 'Backup', Promise.resolve(result), true, mock)
  },
  disassociateRecoveryPointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateRecoveryPoint', 'Backup', Promise.resolve(result), false, mock)
  },
  disassociateRecoveryPointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateRecoveryPoint', 'Backup', Promise.reject(result), true, mock)
  },
  exportBackupPlanTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportBackupPlanTemplate', 'Backup', Promise.resolve(result), true, mock)
  },
  exportBackupPlanTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportBackupPlanTemplate', 'Backup', Promise.resolve(result), false, mock)
  },
  exportBackupPlanTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('exportBackupPlanTemplate', 'Backup', Promise.reject(result), true, mock)
  },
  getBackupPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBackupPlan', 'Backup', Promise.resolve(result), true, mock)
  },
  getBackupPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBackupPlan', 'Backup', Promise.resolve(result), false, mock)
  },
  getBackupPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBackupPlan', 'Backup', Promise.reject(result), true, mock)
  },
  getBackupPlanFromJSON: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBackupPlanFromJSON', 'Backup', Promise.resolve(result), true, mock)
  },
  getBackupPlanFromJSONAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBackupPlanFromJSON', 'Backup', Promise.resolve(result), false, mock)
  },
  getBackupPlanFromJSONThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBackupPlanFromJSON', 'Backup', Promise.reject(result), true, mock)
  },
  getBackupPlanFromTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBackupPlanFromTemplate', 'Backup', Promise.resolve(result), true, mock)
  },
  getBackupPlanFromTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBackupPlanFromTemplate', 'Backup', Promise.resolve(result), false, mock)
  },
  getBackupPlanFromTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBackupPlanFromTemplate', 'Backup', Promise.reject(result), true, mock)
  },
  getBackupSelection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBackupSelection', 'Backup', Promise.resolve(result), true, mock)
  },
  getBackupSelectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBackupSelection', 'Backup', Promise.resolve(result), false, mock)
  },
  getBackupSelectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBackupSelection', 'Backup', Promise.reject(result), true, mock)
  },
  getBackupVaultAccessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBackupVaultAccessPolicy', 'Backup', Promise.resolve(result), true, mock)
  },
  getBackupVaultAccessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBackupVaultAccessPolicy', 'Backup', Promise.resolve(result), false, mock)
  },
  getBackupVaultAccessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBackupVaultAccessPolicy', 'Backup', Promise.reject(result), true, mock)
  },
  getBackupVaultNotifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBackupVaultNotifications', 'Backup', Promise.resolve(result), true, mock)
  },
  getBackupVaultNotificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBackupVaultNotifications', 'Backup', Promise.resolve(result), false, mock)
  },
  getBackupVaultNotificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getBackupVaultNotifications', 'Backup', Promise.reject(result), true, mock)
  },
  getRecoveryPointRestoreMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecoveryPointRestoreMetadata', 'Backup', Promise.resolve(result), true, mock)
  },
  getRecoveryPointRestoreMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecoveryPointRestoreMetadata', 'Backup', Promise.resolve(result), false, mock)
  },
  getRecoveryPointRestoreMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getRecoveryPointRestoreMetadata', 'Backup', Promise.reject(result), true, mock)
  },
  getSupportedResourceTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSupportedResourceTypes', 'Backup', Promise.resolve(result), true, mock)
  },
  getSupportedResourceTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSupportedResourceTypes', 'Backup', Promise.resolve(result), false, mock)
  },
  getSupportedResourceTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getSupportedResourceTypes', 'Backup', Promise.reject(result), true, mock)
  },
  listBackupJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackupJobs', 'Backup', Promise.resolve(result), true, mock)
  },
  listBackupJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackupJobs', 'Backup', Promise.resolve(result), false, mock)
  },
  listBackupJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackupJobs', 'Backup', Promise.reject(result), true, mock)
  },
  listBackupPlanTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackupPlanTemplates', 'Backup', Promise.resolve(result), true, mock)
  },
  listBackupPlanTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackupPlanTemplates', 'Backup', Promise.resolve(result), false, mock)
  },
  listBackupPlanTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackupPlanTemplates', 'Backup', Promise.reject(result), true, mock)
  },
  listBackupPlanVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackupPlanVersions', 'Backup', Promise.resolve(result), true, mock)
  },
  listBackupPlanVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackupPlanVersions', 'Backup', Promise.resolve(result), false, mock)
  },
  listBackupPlanVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackupPlanVersions', 'Backup', Promise.reject(result), true, mock)
  },
  listBackupPlans: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackupPlans', 'Backup', Promise.resolve(result), true, mock)
  },
  listBackupPlansAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackupPlans', 'Backup', Promise.resolve(result), false, mock)
  },
  listBackupPlansThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackupPlans', 'Backup', Promise.reject(result), true, mock)
  },
  listBackupSelections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackupSelections', 'Backup', Promise.resolve(result), true, mock)
  },
  listBackupSelectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackupSelections', 'Backup', Promise.resolve(result), false, mock)
  },
  listBackupSelectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackupSelections', 'Backup', Promise.reject(result), true, mock)
  },
  listBackupVaults: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackupVaults', 'Backup', Promise.resolve(result), true, mock)
  },
  listBackupVaultsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackupVaults', 'Backup', Promise.resolve(result), false, mock)
  },
  listBackupVaultsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listBackupVaults', 'Backup', Promise.reject(result), true, mock)
  },
  listCopyJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCopyJobs', 'Backup', Promise.resolve(result), true, mock)
  },
  listCopyJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCopyJobs', 'Backup', Promise.resolve(result), false, mock)
  },
  listCopyJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listCopyJobs', 'Backup', Promise.reject(result), true, mock)
  },
  listFrameworks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFrameworks', 'Backup', Promise.resolve(result), true, mock)
  },
  listFrameworksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFrameworks', 'Backup', Promise.resolve(result), false, mock)
  },
  listFrameworksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFrameworks', 'Backup', Promise.reject(result), true, mock)
  },
  listProtectedResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProtectedResources', 'Backup', Promise.resolve(result), true, mock)
  },
  listProtectedResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProtectedResources', 'Backup', Promise.resolve(result), false, mock)
  },
  listProtectedResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProtectedResources', 'Backup', Promise.reject(result), true, mock)
  },
  listRecoveryPointsByBackupVault: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecoveryPointsByBackupVault', 'Backup', Promise.resolve(result), true, mock)
  },
  listRecoveryPointsByBackupVaultAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecoveryPointsByBackupVault', 'Backup', Promise.resolve(result), false, mock)
  },
  listRecoveryPointsByBackupVaultThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecoveryPointsByBackupVault', 'Backup', Promise.reject(result), true, mock)
  },
  listRecoveryPointsByResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecoveryPointsByResource', 'Backup', Promise.resolve(result), true, mock)
  },
  listRecoveryPointsByResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecoveryPointsByResource', 'Backup', Promise.resolve(result), false, mock)
  },
  listRecoveryPointsByResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRecoveryPointsByResource', 'Backup', Promise.reject(result), true, mock)
  },
  listReportJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReportJobs', 'Backup', Promise.resolve(result), true, mock)
  },
  listReportJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReportJobs', 'Backup', Promise.resolve(result), false, mock)
  },
  listReportJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReportJobs', 'Backup', Promise.reject(result), true, mock)
  },
  listReportPlans: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReportPlans', 'Backup', Promise.resolve(result), true, mock)
  },
  listReportPlansAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReportPlans', 'Backup', Promise.resolve(result), false, mock)
  },
  listReportPlansThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listReportPlans', 'Backup', Promise.reject(result), true, mock)
  },
  listRestoreJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRestoreJobs', 'Backup', Promise.resolve(result), true, mock)
  },
  listRestoreJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRestoreJobs', 'Backup', Promise.resolve(result), false, mock)
  },
  listRestoreJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listRestoreJobs', 'Backup', Promise.reject(result), true, mock)
  },
  listTags: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'Backup', Promise.resolve(result), true, mock)
  },
  listTagsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'Backup', Promise.resolve(result), false, mock)
  },
  listTagsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTags', 'Backup', Promise.reject(result), true, mock)
  },
  putBackupVaultAccessPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBackupVaultAccessPolicy', 'Backup', Promise.resolve(result), true, mock)
  },
  putBackupVaultAccessPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBackupVaultAccessPolicy', 'Backup', Promise.resolve(result), false, mock)
  },
  putBackupVaultAccessPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBackupVaultAccessPolicy', 'Backup', Promise.reject(result), true, mock)
  },
  putBackupVaultLockConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBackupVaultLockConfiguration', 'Backup', Promise.resolve(result), true, mock)
  },
  putBackupVaultLockConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBackupVaultLockConfiguration', 'Backup', Promise.resolve(result), false, mock)
  },
  putBackupVaultLockConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBackupVaultLockConfiguration', 'Backup', Promise.reject(result), true, mock)
  },
  putBackupVaultNotifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBackupVaultNotifications', 'Backup', Promise.resolve(result), true, mock)
  },
  putBackupVaultNotificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBackupVaultNotifications', 'Backup', Promise.resolve(result), false, mock)
  },
  putBackupVaultNotificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putBackupVaultNotifications', 'Backup', Promise.reject(result), true, mock)
  },
  startBackupJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBackupJob', 'Backup', Promise.resolve(result), true, mock)
  },
  startBackupJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBackupJob', 'Backup', Promise.resolve(result), false, mock)
  },
  startBackupJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startBackupJob', 'Backup', Promise.reject(result), true, mock)
  },
  startCopyJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCopyJob', 'Backup', Promise.resolve(result), true, mock)
  },
  startCopyJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCopyJob', 'Backup', Promise.resolve(result), false, mock)
  },
  startCopyJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startCopyJob', 'Backup', Promise.reject(result), true, mock)
  },
  startReportJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startReportJob', 'Backup', Promise.resolve(result), true, mock)
  },
  startReportJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startReportJob', 'Backup', Promise.resolve(result), false, mock)
  },
  startReportJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startReportJob', 'Backup', Promise.reject(result), true, mock)
  },
  startRestoreJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startRestoreJob', 'Backup', Promise.resolve(result), true, mock)
  },
  startRestoreJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startRestoreJob', 'Backup', Promise.resolve(result), false, mock)
  },
  startRestoreJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startRestoreJob', 'Backup', Promise.reject(result), true, mock)
  },
  stopBackupJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopBackupJob', 'Backup', Promise.resolve(result), true, mock)
  },
  stopBackupJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopBackupJob', 'Backup', Promise.resolve(result), false, mock)
  },
  stopBackupJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopBackupJob', 'Backup', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Backup', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Backup', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Backup', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Backup', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Backup', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Backup', Promise.reject(result), true, mock)
  },
  updateBackupPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBackupPlan', 'Backup', Promise.resolve(result), true, mock)
  },
  updateBackupPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBackupPlan', 'Backup', Promise.resolve(result), false, mock)
  },
  updateBackupPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateBackupPlan', 'Backup', Promise.reject(result), true, mock)
  },
  updateFramework: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFramework', 'Backup', Promise.resolve(result), true, mock)
  },
  updateFrameworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFramework', 'Backup', Promise.resolve(result), false, mock)
  },
  updateFrameworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFramework', 'Backup', Promise.reject(result), true, mock)
  },
  updateGlobalSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGlobalSettings', 'Backup', Promise.resolve(result), true, mock)
  },
  updateGlobalSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGlobalSettings', 'Backup', Promise.resolve(result), false, mock)
  },
  updateGlobalSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateGlobalSettings', 'Backup', Promise.reject(result), true, mock)
  },
  updateRecoveryPointLifecycle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRecoveryPointLifecycle', 'Backup', Promise.resolve(result), true, mock)
  },
  updateRecoveryPointLifecycleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRecoveryPointLifecycle', 'Backup', Promise.resolve(result), false, mock)
  },
  updateRecoveryPointLifecycleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRecoveryPointLifecycle', 'Backup', Promise.reject(result), true, mock)
  },
  updateRegionSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRegionSettings', 'Backup', Promise.resolve(result), true, mock)
  },
  updateRegionSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRegionSettings', 'Backup', Promise.resolve(result), false, mock)
  },
  updateRegionSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateRegionSettings', 'Backup', Promise.reject(result), true, mock)
  },
  updateReportPlan: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReportPlan', 'Backup', Promise.resolve(result), true, mock)
  },
  updateReportPlanAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReportPlan', 'Backup', Promise.resolve(result), false, mock)
  },
  updateReportPlanThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateReportPlan', 'Backup', Promise.reject(result), true, mock)
  },
}
