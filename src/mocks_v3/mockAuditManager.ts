
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockAuditManager = {
  associateAssessmentReportEvidenceFolder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'associateAssessmentReportEvidenceFolder', 'AuditManager', Promise.resolve(result), true, mock)
  },
  associateAssessmentReportEvidenceFolderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'associateAssessmentReportEvidenceFolder', 'AuditManager', Promise.resolve(result), false, mock)
  },
  associateAssessmentReportEvidenceFolderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'associateAssessmentReportEvidenceFolder', 'AuditManager', Promise.reject(result), true, mock)
  },
  batchAssociateAssessmentReportEvidence: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'batchAssociateAssessmentReportEvidence', 'AuditManager', Promise.resolve(result), true, mock)
  },
  batchAssociateAssessmentReportEvidenceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'batchAssociateAssessmentReportEvidence', 'AuditManager', Promise.resolve(result), false, mock)
  },
  batchAssociateAssessmentReportEvidenceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'batchAssociateAssessmentReportEvidence', 'AuditManager', Promise.reject(result), true, mock)
  },
  batchCreateDelegationByAssessment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'batchCreateDelegationByAssessment', 'AuditManager', Promise.resolve(result), true, mock)
  },
  batchCreateDelegationByAssessmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'batchCreateDelegationByAssessment', 'AuditManager', Promise.resolve(result), false, mock)
  },
  batchCreateDelegationByAssessmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'batchCreateDelegationByAssessment', 'AuditManager', Promise.reject(result), true, mock)
  },
  batchDeleteDelegationByAssessment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'batchDeleteDelegationByAssessment', 'AuditManager', Promise.resolve(result), true, mock)
  },
  batchDeleteDelegationByAssessmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'batchDeleteDelegationByAssessment', 'AuditManager', Promise.resolve(result), false, mock)
  },
  batchDeleteDelegationByAssessmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'batchDeleteDelegationByAssessment', 'AuditManager', Promise.reject(result), true, mock)
  },
  batchDisassociateAssessmentReportEvidence: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'batchDisassociateAssessmentReportEvidence', 'AuditManager', Promise.resolve(result), true, mock)
  },
  batchDisassociateAssessmentReportEvidenceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'batchDisassociateAssessmentReportEvidence', 'AuditManager', Promise.resolve(result), false, mock)
  },
  batchDisassociateAssessmentReportEvidenceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'batchDisassociateAssessmentReportEvidence', 'AuditManager', Promise.reject(result), true, mock)
  },
  batchImportEvidenceToAssessmentControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'batchImportEvidenceToAssessmentControl', 'AuditManager', Promise.resolve(result), true, mock)
  },
  batchImportEvidenceToAssessmentControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'batchImportEvidenceToAssessmentControl', 'AuditManager', Promise.resolve(result), false, mock)
  },
  batchImportEvidenceToAssessmentControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'batchImportEvidenceToAssessmentControl', 'AuditManager', Promise.reject(result), true, mock)
  },
  createAssessment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'createAssessment', 'AuditManager', Promise.resolve(result), true, mock)
  },
  createAssessmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'createAssessment', 'AuditManager', Promise.resolve(result), false, mock)
  },
  createAssessmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'createAssessment', 'AuditManager', Promise.reject(result), true, mock)
  },
  createAssessmentFramework: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'createAssessmentFramework', 'AuditManager', Promise.resolve(result), true, mock)
  },
  createAssessmentFrameworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'createAssessmentFramework', 'AuditManager', Promise.resolve(result), false, mock)
  },
  createAssessmentFrameworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'createAssessmentFramework', 'AuditManager', Promise.reject(result), true, mock)
  },
  createAssessmentReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'createAssessmentReport', 'AuditManager', Promise.resolve(result), true, mock)
  },
  createAssessmentReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'createAssessmentReport', 'AuditManager', Promise.resolve(result), false, mock)
  },
  createAssessmentReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'createAssessmentReport', 'AuditManager', Promise.reject(result), true, mock)
  },
  createControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'createControl', 'AuditManager', Promise.resolve(result), true, mock)
  },
  createControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'createControl', 'AuditManager', Promise.resolve(result), false, mock)
  },
  createControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'createControl', 'AuditManager', Promise.reject(result), true, mock)
  },
  deleteAssessment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'deleteAssessment', 'AuditManager', Promise.resolve(result), true, mock)
  },
  deleteAssessmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'deleteAssessment', 'AuditManager', Promise.resolve(result), false, mock)
  },
  deleteAssessmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'deleteAssessment', 'AuditManager', Promise.reject(result), true, mock)
  },
  deleteAssessmentFramework: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'deleteAssessmentFramework', 'AuditManager', Promise.resolve(result), true, mock)
  },
  deleteAssessmentFrameworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'deleteAssessmentFramework', 'AuditManager', Promise.resolve(result), false, mock)
  },
  deleteAssessmentFrameworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'deleteAssessmentFramework', 'AuditManager', Promise.reject(result), true, mock)
  },
  deleteAssessmentFrameworkShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'deleteAssessmentFrameworkShare', 'AuditManager', Promise.resolve(result), true, mock)
  },
  deleteAssessmentFrameworkShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'deleteAssessmentFrameworkShare', 'AuditManager', Promise.resolve(result), false, mock)
  },
  deleteAssessmentFrameworkShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'deleteAssessmentFrameworkShare', 'AuditManager', Promise.reject(result), true, mock)
  },
  deleteAssessmentReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'deleteAssessmentReport', 'AuditManager', Promise.resolve(result), true, mock)
  },
  deleteAssessmentReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'deleteAssessmentReport', 'AuditManager', Promise.resolve(result), false, mock)
  },
  deleteAssessmentReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'deleteAssessmentReport', 'AuditManager', Promise.reject(result), true, mock)
  },
  deleteControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'deleteControl', 'AuditManager', Promise.resolve(result), true, mock)
  },
  deleteControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'deleteControl', 'AuditManager', Promise.resolve(result), false, mock)
  },
  deleteControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'deleteControl', 'AuditManager', Promise.reject(result), true, mock)
  },
  deregisterAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'deregisterAccount', 'AuditManager', Promise.resolve(result), true, mock)
  },
  deregisterAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'deregisterAccount', 'AuditManager', Promise.resolve(result), false, mock)
  },
  deregisterAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'deregisterAccount', 'AuditManager', Promise.reject(result), true, mock)
  },
  deregisterOrganizationAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'deregisterOrganizationAdminAccount', 'AuditManager', Promise.resolve(result), true, mock)
  },
  deregisterOrganizationAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'deregisterOrganizationAdminAccount', 'AuditManager', Promise.resolve(result), false, mock)
  },
  deregisterOrganizationAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'deregisterOrganizationAdminAccount', 'AuditManager', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'destroy', 'AuditManager', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'destroy', 'AuditManager', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'destroy', 'AuditManager', Promise.reject(result), true, mock)
  },
  disassociateAssessmentReportEvidenceFolder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'disassociateAssessmentReportEvidenceFolder', 'AuditManager', Promise.resolve(result), true, mock)
  },
  disassociateAssessmentReportEvidenceFolderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'disassociateAssessmentReportEvidenceFolder', 'AuditManager', Promise.resolve(result), false, mock)
  },
  disassociateAssessmentReportEvidenceFolderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'disassociateAssessmentReportEvidenceFolder', 'AuditManager', Promise.reject(result), true, mock)
  },
  getAccountStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getAccountStatus', 'AuditManager', Promise.resolve(result), true, mock)
  },
  getAccountStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getAccountStatus', 'AuditManager', Promise.resolve(result), false, mock)
  },
  getAccountStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getAccountStatus', 'AuditManager', Promise.reject(result), true, mock)
  },
  getAssessment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getAssessment', 'AuditManager', Promise.resolve(result), true, mock)
  },
  getAssessmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getAssessment', 'AuditManager', Promise.resolve(result), false, mock)
  },
  getAssessmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getAssessment', 'AuditManager', Promise.reject(result), true, mock)
  },
  getAssessmentFramework: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getAssessmentFramework', 'AuditManager', Promise.resolve(result), true, mock)
  },
  getAssessmentFrameworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getAssessmentFramework', 'AuditManager', Promise.resolve(result), false, mock)
  },
  getAssessmentFrameworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getAssessmentFramework', 'AuditManager', Promise.reject(result), true, mock)
  },
  getAssessmentReportUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getAssessmentReportUrl', 'AuditManager', Promise.resolve(result), true, mock)
  },
  getAssessmentReportUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getAssessmentReportUrl', 'AuditManager', Promise.resolve(result), false, mock)
  },
  getAssessmentReportUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getAssessmentReportUrl', 'AuditManager', Promise.reject(result), true, mock)
  },
  getChangeLogs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getChangeLogs', 'AuditManager', Promise.resolve(result), true, mock)
  },
  getChangeLogsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getChangeLogs', 'AuditManager', Promise.resolve(result), false, mock)
  },
  getChangeLogsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getChangeLogs', 'AuditManager', Promise.reject(result), true, mock)
  },
  getControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getControl', 'AuditManager', Promise.resolve(result), true, mock)
  },
  getControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getControl', 'AuditManager', Promise.resolve(result), false, mock)
  },
  getControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getControl', 'AuditManager', Promise.reject(result), true, mock)
  },
  getDelegations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getDelegations', 'AuditManager', Promise.resolve(result), true, mock)
  },
  getDelegationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getDelegations', 'AuditManager', Promise.resolve(result), false, mock)
  },
  getDelegationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getDelegations', 'AuditManager', Promise.reject(result), true, mock)
  },
  getEvidence: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getEvidence', 'AuditManager', Promise.resolve(result), true, mock)
  },
  getEvidenceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getEvidence', 'AuditManager', Promise.resolve(result), false, mock)
  },
  getEvidenceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getEvidence', 'AuditManager', Promise.reject(result), true, mock)
  },
  getEvidenceByEvidenceFolder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getEvidenceByEvidenceFolder', 'AuditManager', Promise.resolve(result), true, mock)
  },
  getEvidenceByEvidenceFolderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getEvidenceByEvidenceFolder', 'AuditManager', Promise.resolve(result), false, mock)
  },
  getEvidenceByEvidenceFolderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getEvidenceByEvidenceFolder', 'AuditManager', Promise.reject(result), true, mock)
  },
  getEvidenceFolder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getEvidenceFolder', 'AuditManager', Promise.resolve(result), true, mock)
  },
  getEvidenceFolderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getEvidenceFolder', 'AuditManager', Promise.resolve(result), false, mock)
  },
  getEvidenceFolderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getEvidenceFolder', 'AuditManager', Promise.reject(result), true, mock)
  },
  getEvidenceFoldersByAssessment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getEvidenceFoldersByAssessment', 'AuditManager', Promise.resolve(result), true, mock)
  },
  getEvidenceFoldersByAssessmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getEvidenceFoldersByAssessment', 'AuditManager', Promise.resolve(result), false, mock)
  },
  getEvidenceFoldersByAssessmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getEvidenceFoldersByAssessment', 'AuditManager', Promise.reject(result), true, mock)
  },
  getEvidenceFoldersByAssessmentControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getEvidenceFoldersByAssessmentControl', 'AuditManager', Promise.resolve(result), true, mock)
  },
  getEvidenceFoldersByAssessmentControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getEvidenceFoldersByAssessmentControl', 'AuditManager', Promise.resolve(result), false, mock)
  },
  getEvidenceFoldersByAssessmentControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getEvidenceFoldersByAssessmentControl', 'AuditManager', Promise.reject(result), true, mock)
  },
  getOrganizationAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getOrganizationAdminAccount', 'AuditManager', Promise.resolve(result), true, mock)
  },
  getOrganizationAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getOrganizationAdminAccount', 'AuditManager', Promise.resolve(result), false, mock)
  },
  getOrganizationAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getOrganizationAdminAccount', 'AuditManager', Promise.reject(result), true, mock)
  },
  getServicesInScope: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getServicesInScope', 'AuditManager', Promise.resolve(result), true, mock)
  },
  getServicesInScopeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getServicesInScope', 'AuditManager', Promise.resolve(result), false, mock)
  },
  getServicesInScopeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getServicesInScope', 'AuditManager', Promise.reject(result), true, mock)
  },
  getSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getSettings', 'AuditManager', Promise.resolve(result), true, mock)
  },
  getSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getSettings', 'AuditManager', Promise.resolve(result), false, mock)
  },
  getSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'getSettings', 'AuditManager', Promise.reject(result), true, mock)
  },
  listAssessmentFrameworkShareRequests: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listAssessmentFrameworkShareRequests', 'AuditManager', Promise.resolve(result), true, mock)
  },
  listAssessmentFrameworkShareRequestsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listAssessmentFrameworkShareRequests', 'AuditManager', Promise.resolve(result), false, mock)
  },
  listAssessmentFrameworkShareRequestsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listAssessmentFrameworkShareRequests', 'AuditManager', Promise.reject(result), true, mock)
  },
  listAssessmentFrameworks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listAssessmentFrameworks', 'AuditManager', Promise.resolve(result), true, mock)
  },
  listAssessmentFrameworksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listAssessmentFrameworks', 'AuditManager', Promise.resolve(result), false, mock)
  },
  listAssessmentFrameworksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listAssessmentFrameworks', 'AuditManager', Promise.reject(result), true, mock)
  },
  listAssessmentReports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listAssessmentReports', 'AuditManager', Promise.resolve(result), true, mock)
  },
  listAssessmentReportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listAssessmentReports', 'AuditManager', Promise.resolve(result), false, mock)
  },
  listAssessmentReportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listAssessmentReports', 'AuditManager', Promise.reject(result), true, mock)
  },
  listAssessments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listAssessments', 'AuditManager', Promise.resolve(result), true, mock)
  },
  listAssessmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listAssessments', 'AuditManager', Promise.resolve(result), false, mock)
  },
  listAssessmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listAssessments', 'AuditManager', Promise.reject(result), true, mock)
  },
  listControls: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listControls', 'AuditManager', Promise.resolve(result), true, mock)
  },
  listControlsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listControls', 'AuditManager', Promise.resolve(result), false, mock)
  },
  listControlsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listControls', 'AuditManager', Promise.reject(result), true, mock)
  },
  listKeywordsForDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listKeywordsForDataSource', 'AuditManager', Promise.resolve(result), true, mock)
  },
  listKeywordsForDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listKeywordsForDataSource', 'AuditManager', Promise.resolve(result), false, mock)
  },
  listKeywordsForDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listKeywordsForDataSource', 'AuditManager', Promise.reject(result), true, mock)
  },
  listNotifications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listNotifications', 'AuditManager', Promise.resolve(result), true, mock)
  },
  listNotificationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listNotifications', 'AuditManager', Promise.resolve(result), false, mock)
  },
  listNotificationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listNotifications', 'AuditManager', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listTagsForResource', 'AuditManager', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listTagsForResource', 'AuditManager', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'listTagsForResource', 'AuditManager', Promise.reject(result), true, mock)
  },
  registerAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'registerAccount', 'AuditManager', Promise.resolve(result), true, mock)
  },
  registerAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'registerAccount', 'AuditManager', Promise.resolve(result), false, mock)
  },
  registerAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'registerAccount', 'AuditManager', Promise.reject(result), true, mock)
  },
  registerOrganizationAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'registerOrganizationAdminAccount', 'AuditManager', Promise.resolve(result), true, mock)
  },
  registerOrganizationAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'registerOrganizationAdminAccount', 'AuditManager', Promise.resolve(result), false, mock)
  },
  registerOrganizationAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'registerOrganizationAdminAccount', 'AuditManager', Promise.reject(result), true, mock)
  },
  startAssessmentFrameworkShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'startAssessmentFrameworkShare', 'AuditManager', Promise.resolve(result), true, mock)
  },
  startAssessmentFrameworkShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'startAssessmentFrameworkShare', 'AuditManager', Promise.resolve(result), false, mock)
  },
  startAssessmentFrameworkShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'startAssessmentFrameworkShare', 'AuditManager', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'tagResource', 'AuditManager', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'tagResource', 'AuditManager', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'tagResource', 'AuditManager', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'untagResource', 'AuditManager', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'untagResource', 'AuditManager', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'untagResource', 'AuditManager', Promise.reject(result), true, mock)
  },
  updateAssessment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateAssessment', 'AuditManager', Promise.resolve(result), true, mock)
  },
  updateAssessmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateAssessment', 'AuditManager', Promise.resolve(result), false, mock)
  },
  updateAssessmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateAssessment', 'AuditManager', Promise.reject(result), true, mock)
  },
  updateAssessmentControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateAssessmentControl', 'AuditManager', Promise.resolve(result), true, mock)
  },
  updateAssessmentControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateAssessmentControl', 'AuditManager', Promise.resolve(result), false, mock)
  },
  updateAssessmentControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateAssessmentControl', 'AuditManager', Promise.reject(result), true, mock)
  },
  updateAssessmentControlSetStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateAssessmentControlSetStatus', 'AuditManager', Promise.resolve(result), true, mock)
  },
  updateAssessmentControlSetStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateAssessmentControlSetStatus', 'AuditManager', Promise.resolve(result), false, mock)
  },
  updateAssessmentControlSetStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateAssessmentControlSetStatus', 'AuditManager', Promise.reject(result), true, mock)
  },
  updateAssessmentFramework: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateAssessmentFramework', 'AuditManager', Promise.resolve(result), true, mock)
  },
  updateAssessmentFrameworkAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateAssessmentFramework', 'AuditManager', Promise.resolve(result), false, mock)
  },
  updateAssessmentFrameworkThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateAssessmentFramework', 'AuditManager', Promise.reject(result), true, mock)
  },
  updateAssessmentFrameworkShare: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateAssessmentFrameworkShare', 'AuditManager', Promise.resolve(result), true, mock)
  },
  updateAssessmentFrameworkShareAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateAssessmentFrameworkShare', 'AuditManager', Promise.resolve(result), false, mock)
  },
  updateAssessmentFrameworkShareThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateAssessmentFrameworkShare', 'AuditManager', Promise.reject(result), true, mock)
  },
  updateAssessmentStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateAssessmentStatus', 'AuditManager', Promise.resolve(result), true, mock)
  },
  updateAssessmentStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateAssessmentStatus', 'AuditManager', Promise.resolve(result), false, mock)
  },
  updateAssessmentStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateAssessmentStatus', 'AuditManager', Promise.reject(result), true, mock)
  },
  updateControl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateControl', 'AuditManager', Promise.resolve(result), true, mock)
  },
  updateControlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateControl', 'AuditManager', Promise.resolve(result), false, mock)
  },
  updateControlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateControl', 'AuditManager', Promise.reject(result), true, mock)
  },
  updateSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateSettings', 'AuditManager', Promise.resolve(result), true, mock)
  },
  updateSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateSettings', 'AuditManager', Promise.resolve(result), false, mock)
  },
  updateSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'updateSettings', 'AuditManager', Promise.reject(result), true, mock)
  },
  validateAssessmentReportIntegrity: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'validateAssessmentReportIntegrity', 'AuditManager', Promise.resolve(result), true, mock)
  },
  validateAssessmentReportIntegrityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'validateAssessmentReportIntegrity', 'AuditManager', Promise.resolve(result), false, mock)
  },
  validateAssessmentReportIntegrityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'validateAssessmentReportIntegrity', 'AuditManager', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'send', 'AuditManagerClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'send', 'AuditManagerClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-auditmanager', 'send', 'AuditManagerClient', Promise.reject(result), true, mock)
  }
}