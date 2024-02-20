
/**
* @description mocks_v3:mockInspector2 module is mocks for AWS-SDK V3
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
export const mockInspector2 = {
  associateMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'associateMember', 'Inspector2', Promise.resolve(result), true, mock)
  },
  associateMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'associateMember', 'Inspector2', Promise.resolve(result), false, mock)
  },
  associateMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'associateMember', 'Inspector2', Promise.reject(result), true, mock)
  },
  batchGetAccountStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'batchGetAccountStatus', 'Inspector2', Promise.resolve(result), true, mock)
  },
  batchGetAccountStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'batchGetAccountStatus', 'Inspector2', Promise.resolve(result), false, mock)
  },
  batchGetAccountStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'batchGetAccountStatus', 'Inspector2', Promise.reject(result), true, mock)
  },
  batchGetCodeSnippet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'batchGetCodeSnippet', 'Inspector2', Promise.resolve(result), true, mock)
  },
  batchGetCodeSnippetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'batchGetCodeSnippet', 'Inspector2', Promise.resolve(result), false, mock)
  },
  batchGetCodeSnippetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'batchGetCodeSnippet', 'Inspector2', Promise.reject(result), true, mock)
  },
  batchGetFindingDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'batchGetFindingDetails', 'Inspector2', Promise.resolve(result), true, mock)
  },
  batchGetFindingDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'batchGetFindingDetails', 'Inspector2', Promise.resolve(result), false, mock)
  },
  batchGetFindingDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'batchGetFindingDetails', 'Inspector2', Promise.reject(result), true, mock)
  },
  batchGetFreeTrialInfo: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'batchGetFreeTrialInfo', 'Inspector2', Promise.resolve(result), true, mock)
  },
  batchGetFreeTrialInfoAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'batchGetFreeTrialInfo', 'Inspector2', Promise.resolve(result), false, mock)
  },
  batchGetFreeTrialInfoThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'batchGetFreeTrialInfo', 'Inspector2', Promise.reject(result), true, mock)
  },
  batchGetMemberEc2DeepInspectionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'batchGetMemberEc2DeepInspectionStatus', 'Inspector2', Promise.resolve(result), true, mock)
  },
  batchGetMemberEc2DeepInspectionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'batchGetMemberEc2DeepInspectionStatus', 'Inspector2', Promise.resolve(result), false, mock)
  },
  batchGetMemberEc2DeepInspectionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'batchGetMemberEc2DeepInspectionStatus', 'Inspector2', Promise.reject(result), true, mock)
  },
  batchUpdateMemberEc2DeepInspectionStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'batchUpdateMemberEc2DeepInspectionStatus', 'Inspector2', Promise.resolve(result), true, mock)
  },
  batchUpdateMemberEc2DeepInspectionStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'batchUpdateMemberEc2DeepInspectionStatus', 'Inspector2', Promise.resolve(result), false, mock)
  },
  batchUpdateMemberEc2DeepInspectionStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'batchUpdateMemberEc2DeepInspectionStatus', 'Inspector2', Promise.reject(result), true, mock)
  },
  cancelFindingsReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'cancelFindingsReport', 'Inspector2', Promise.resolve(result), true, mock)
  },
  cancelFindingsReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'cancelFindingsReport', 'Inspector2', Promise.resolve(result), false, mock)
  },
  cancelFindingsReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'cancelFindingsReport', 'Inspector2', Promise.reject(result), true, mock)
  },
  cancelSbomExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'cancelSbomExport', 'Inspector2', Promise.resolve(result), true, mock)
  },
  cancelSbomExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'cancelSbomExport', 'Inspector2', Promise.resolve(result), false, mock)
  },
  cancelSbomExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'cancelSbomExport', 'Inspector2', Promise.reject(result), true, mock)
  },
  createCisScanConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'createCisScanConfiguration', 'Inspector2', Promise.resolve(result), true, mock)
  },
  createCisScanConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'createCisScanConfiguration', 'Inspector2', Promise.resolve(result), false, mock)
  },
  createCisScanConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'createCisScanConfiguration', 'Inspector2', Promise.reject(result), true, mock)
  },
  createFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'createFilter', 'Inspector2', Promise.resolve(result), true, mock)
  },
  createFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'createFilter', 'Inspector2', Promise.resolve(result), false, mock)
  },
  createFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'createFilter', 'Inspector2', Promise.reject(result), true, mock)
  },
  createFindingsReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'createFindingsReport', 'Inspector2', Promise.resolve(result), true, mock)
  },
  createFindingsReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'createFindingsReport', 'Inspector2', Promise.resolve(result), false, mock)
  },
  createFindingsReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'createFindingsReport', 'Inspector2', Promise.reject(result), true, mock)
  },
  createSbomExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'createSbomExport', 'Inspector2', Promise.resolve(result), true, mock)
  },
  createSbomExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'createSbomExport', 'Inspector2', Promise.resolve(result), false, mock)
  },
  createSbomExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'createSbomExport', 'Inspector2', Promise.reject(result), true, mock)
  },
  deleteCisScanConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'deleteCisScanConfiguration', 'Inspector2', Promise.resolve(result), true, mock)
  },
  deleteCisScanConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'deleteCisScanConfiguration', 'Inspector2', Promise.resolve(result), false, mock)
  },
  deleteCisScanConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'deleteCisScanConfiguration', 'Inspector2', Promise.reject(result), true, mock)
  },
  deleteFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'deleteFilter', 'Inspector2', Promise.resolve(result), true, mock)
  },
  deleteFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'deleteFilter', 'Inspector2', Promise.resolve(result), false, mock)
  },
  deleteFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'deleteFilter', 'Inspector2', Promise.reject(result), true, mock)
  },
  describeOrganizationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'describeOrganizationConfiguration', 'Inspector2', Promise.resolve(result), true, mock)
  },
  describeOrganizationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'describeOrganizationConfiguration', 'Inspector2', Promise.resolve(result), false, mock)
  },
  describeOrganizationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'describeOrganizationConfiguration', 'Inspector2', Promise.reject(result), true, mock)
  },
  disable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'disable', 'Inspector2', Promise.resolve(result), true, mock)
  },
  disableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'disable', 'Inspector2', Promise.resolve(result), false, mock)
  },
  disableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'disable', 'Inspector2', Promise.reject(result), true, mock)
  },
  disableDelegatedAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'disableDelegatedAdminAccount', 'Inspector2', Promise.resolve(result), true, mock)
  },
  disableDelegatedAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'disableDelegatedAdminAccount', 'Inspector2', Promise.resolve(result), false, mock)
  },
  disableDelegatedAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'disableDelegatedAdminAccount', 'Inspector2', Promise.reject(result), true, mock)
  },
  disassociateMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'disassociateMember', 'Inspector2', Promise.resolve(result), true, mock)
  },
  disassociateMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'disassociateMember', 'Inspector2', Promise.resolve(result), false, mock)
  },
  disassociateMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'disassociateMember', 'Inspector2', Promise.reject(result), true, mock)
  },
  enable: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'enable', 'Inspector2', Promise.resolve(result), true, mock)
  },
  enableAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'enable', 'Inspector2', Promise.resolve(result), false, mock)
  },
  enableThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'enable', 'Inspector2', Promise.reject(result), true, mock)
  },
  enableDelegatedAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'enableDelegatedAdminAccount', 'Inspector2', Promise.resolve(result), true, mock)
  },
  enableDelegatedAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'enableDelegatedAdminAccount', 'Inspector2', Promise.resolve(result), false, mock)
  },
  enableDelegatedAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'enableDelegatedAdminAccount', 'Inspector2', Promise.reject(result), true, mock)
  },
  getCisScanReport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getCisScanReport', 'Inspector2', Promise.resolve(result), true, mock)
  },
  getCisScanReportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getCisScanReport', 'Inspector2', Promise.resolve(result), false, mock)
  },
  getCisScanReportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getCisScanReport', 'Inspector2', Promise.reject(result), true, mock)
  },
  getCisScanResultDetails: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getCisScanResultDetails', 'Inspector2', Promise.resolve(result), true, mock)
  },
  getCisScanResultDetailsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getCisScanResultDetails', 'Inspector2', Promise.resolve(result), false, mock)
  },
  getCisScanResultDetailsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getCisScanResultDetails', 'Inspector2', Promise.reject(result), true, mock)
  },
  getConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getConfiguration', 'Inspector2', Promise.resolve(result), true, mock)
  },
  getConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getConfiguration', 'Inspector2', Promise.resolve(result), false, mock)
  },
  getConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getConfiguration', 'Inspector2', Promise.reject(result), true, mock)
  },
  getDelegatedAdminAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getDelegatedAdminAccount', 'Inspector2', Promise.resolve(result), true, mock)
  },
  getDelegatedAdminAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getDelegatedAdminAccount', 'Inspector2', Promise.resolve(result), false, mock)
  },
  getDelegatedAdminAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getDelegatedAdminAccount', 'Inspector2', Promise.reject(result), true, mock)
  },
  getEc2DeepInspectionConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getEc2DeepInspectionConfiguration', 'Inspector2', Promise.resolve(result), true, mock)
  },
  getEc2DeepInspectionConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getEc2DeepInspectionConfiguration', 'Inspector2', Promise.resolve(result), false, mock)
  },
  getEc2DeepInspectionConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getEc2DeepInspectionConfiguration', 'Inspector2', Promise.reject(result), true, mock)
  },
  getEncryptionKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getEncryptionKey', 'Inspector2', Promise.resolve(result), true, mock)
  },
  getEncryptionKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getEncryptionKey', 'Inspector2', Promise.resolve(result), false, mock)
  },
  getEncryptionKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getEncryptionKey', 'Inspector2', Promise.reject(result), true, mock)
  },
  getFindingsReportStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getFindingsReportStatus', 'Inspector2', Promise.resolve(result), true, mock)
  },
  getFindingsReportStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getFindingsReportStatus', 'Inspector2', Promise.resolve(result), false, mock)
  },
  getFindingsReportStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getFindingsReportStatus', 'Inspector2', Promise.reject(result), true, mock)
  },
  getMember: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getMember', 'Inspector2', Promise.resolve(result), true, mock)
  },
  getMemberAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getMember', 'Inspector2', Promise.resolve(result), false, mock)
  },
  getMemberThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getMember', 'Inspector2', Promise.reject(result), true, mock)
  },
  getSbomExport: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getSbomExport', 'Inspector2', Promise.resolve(result), true, mock)
  },
  getSbomExportAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getSbomExport', 'Inspector2', Promise.resolve(result), false, mock)
  },
  getSbomExportThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'getSbomExport', 'Inspector2', Promise.reject(result), true, mock)
  },
  listAccountPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listAccountPermissions', 'Inspector2', Promise.resolve(result), true, mock)
  },
  listAccountPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listAccountPermissions', 'Inspector2', Promise.resolve(result), false, mock)
  },
  listAccountPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listAccountPermissions', 'Inspector2', Promise.reject(result), true, mock)
  },
  listCisScanConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listCisScanConfigurations', 'Inspector2', Promise.resolve(result), true, mock)
  },
  listCisScanConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listCisScanConfigurations', 'Inspector2', Promise.resolve(result), false, mock)
  },
  listCisScanConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listCisScanConfigurations', 'Inspector2', Promise.reject(result), true, mock)
  },
  listCisScanResultsAggregatedByChecks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listCisScanResultsAggregatedByChecks', 'Inspector2', Promise.resolve(result), true, mock)
  },
  listCisScanResultsAggregatedByChecksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listCisScanResultsAggregatedByChecks', 'Inspector2', Promise.resolve(result), false, mock)
  },
  listCisScanResultsAggregatedByChecksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listCisScanResultsAggregatedByChecks', 'Inspector2', Promise.reject(result), true, mock)
  },
  listCisScanResultsAggregatedByTargetResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listCisScanResultsAggregatedByTargetResource', 'Inspector2', Promise.resolve(result), true, mock)
  },
  listCisScanResultsAggregatedByTargetResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listCisScanResultsAggregatedByTargetResource', 'Inspector2', Promise.resolve(result), false, mock)
  },
  listCisScanResultsAggregatedByTargetResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listCisScanResultsAggregatedByTargetResource', 'Inspector2', Promise.reject(result), true, mock)
  },
  listCisScans: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listCisScans', 'Inspector2', Promise.resolve(result), true, mock)
  },
  listCisScansAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listCisScans', 'Inspector2', Promise.resolve(result), false, mock)
  },
  listCisScansThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listCisScans', 'Inspector2', Promise.reject(result), true, mock)
  },
  listCoverage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listCoverage', 'Inspector2', Promise.resolve(result), true, mock)
  },
  listCoverageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listCoverage', 'Inspector2', Promise.resolve(result), false, mock)
  },
  listCoverageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listCoverage', 'Inspector2', Promise.reject(result), true, mock)
  },
  listCoverageStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listCoverageStatistics', 'Inspector2', Promise.resolve(result), true, mock)
  },
  listCoverageStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listCoverageStatistics', 'Inspector2', Promise.resolve(result), false, mock)
  },
  listCoverageStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listCoverageStatistics', 'Inspector2', Promise.reject(result), true, mock)
  },
  listDelegatedAdminAccounts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listDelegatedAdminAccounts', 'Inspector2', Promise.resolve(result), true, mock)
  },
  listDelegatedAdminAccountsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listDelegatedAdminAccounts', 'Inspector2', Promise.resolve(result), false, mock)
  },
  listDelegatedAdminAccountsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listDelegatedAdminAccounts', 'Inspector2', Promise.reject(result), true, mock)
  },
  listFilters: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listFilters', 'Inspector2', Promise.resolve(result), true, mock)
  },
  listFiltersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listFilters', 'Inspector2', Promise.resolve(result), false, mock)
  },
  listFiltersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listFilters', 'Inspector2', Promise.reject(result), true, mock)
  },
  listFindingAggregations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listFindingAggregations', 'Inspector2', Promise.resolve(result), true, mock)
  },
  listFindingAggregationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listFindingAggregations', 'Inspector2', Promise.resolve(result), false, mock)
  },
  listFindingAggregationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listFindingAggregations', 'Inspector2', Promise.reject(result), true, mock)
  },
  listFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listFindings', 'Inspector2', Promise.resolve(result), true, mock)
  },
  listFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listFindings', 'Inspector2', Promise.resolve(result), false, mock)
  },
  listFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listFindings', 'Inspector2', Promise.reject(result), true, mock)
  },
  listMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listMembers', 'Inspector2', Promise.resolve(result), true, mock)
  },
  listMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listMembers', 'Inspector2', Promise.resolve(result), false, mock)
  },
  listMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listMembers', 'Inspector2', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listTagsForResource', 'Inspector2', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listTagsForResource', 'Inspector2', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listTagsForResource', 'Inspector2', Promise.reject(result), true, mock)
  },
  listUsageTotals: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listUsageTotals', 'Inspector2', Promise.resolve(result), true, mock)
  },
  listUsageTotalsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listUsageTotals', 'Inspector2', Promise.resolve(result), false, mock)
  },
  listUsageTotalsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'listUsageTotals', 'Inspector2', Promise.reject(result), true, mock)
  },
  resetEncryptionKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'resetEncryptionKey', 'Inspector2', Promise.resolve(result), true, mock)
  },
  resetEncryptionKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'resetEncryptionKey', 'Inspector2', Promise.resolve(result), false, mock)
  },
  resetEncryptionKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'resetEncryptionKey', 'Inspector2', Promise.reject(result), true, mock)
  },
  searchVulnerabilities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'searchVulnerabilities', 'Inspector2', Promise.resolve(result), true, mock)
  },
  searchVulnerabilitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'searchVulnerabilities', 'Inspector2', Promise.resolve(result), false, mock)
  },
  searchVulnerabilitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'searchVulnerabilities', 'Inspector2', Promise.reject(result), true, mock)
  },
  sendCisSessionHealth: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'sendCisSessionHealth', 'Inspector2', Promise.resolve(result), true, mock)
  },
  sendCisSessionHealthAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'sendCisSessionHealth', 'Inspector2', Promise.resolve(result), false, mock)
  },
  sendCisSessionHealthThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'sendCisSessionHealth', 'Inspector2', Promise.reject(result), true, mock)
  },
  sendCisSessionTelemetry: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'sendCisSessionTelemetry', 'Inspector2', Promise.resolve(result), true, mock)
  },
  sendCisSessionTelemetryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'sendCisSessionTelemetry', 'Inspector2', Promise.resolve(result), false, mock)
  },
  sendCisSessionTelemetryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'sendCisSessionTelemetry', 'Inspector2', Promise.reject(result), true, mock)
  },
  startCisSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'startCisSession', 'Inspector2', Promise.resolve(result), true, mock)
  },
  startCisSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'startCisSession', 'Inspector2', Promise.resolve(result), false, mock)
  },
  startCisSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'startCisSession', 'Inspector2', Promise.reject(result), true, mock)
  },
  stopCisSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'stopCisSession', 'Inspector2', Promise.resolve(result), true, mock)
  },
  stopCisSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'stopCisSession', 'Inspector2', Promise.resolve(result), false, mock)
  },
  stopCisSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'stopCisSession', 'Inspector2', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'tagResource', 'Inspector2', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'tagResource', 'Inspector2', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'tagResource', 'Inspector2', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'untagResource', 'Inspector2', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'untagResource', 'Inspector2', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'untagResource', 'Inspector2', Promise.reject(result), true, mock)
  },
  updateCisScanConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'updateCisScanConfiguration', 'Inspector2', Promise.resolve(result), true, mock)
  },
  updateCisScanConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'updateCisScanConfiguration', 'Inspector2', Promise.resolve(result), false, mock)
  },
  updateCisScanConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'updateCisScanConfiguration', 'Inspector2', Promise.reject(result), true, mock)
  },
  updateConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'updateConfiguration', 'Inspector2', Promise.resolve(result), true, mock)
  },
  updateConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'updateConfiguration', 'Inspector2', Promise.resolve(result), false, mock)
  },
  updateConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'updateConfiguration', 'Inspector2', Promise.reject(result), true, mock)
  },
  updateEc2DeepInspectionConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'updateEc2DeepInspectionConfiguration', 'Inspector2', Promise.resolve(result), true, mock)
  },
  updateEc2DeepInspectionConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'updateEc2DeepInspectionConfiguration', 'Inspector2', Promise.resolve(result), false, mock)
  },
  updateEc2DeepInspectionConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'updateEc2DeepInspectionConfiguration', 'Inspector2', Promise.reject(result), true, mock)
  },
  updateEncryptionKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'updateEncryptionKey', 'Inspector2', Promise.resolve(result), true, mock)
  },
  updateEncryptionKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'updateEncryptionKey', 'Inspector2', Promise.resolve(result), false, mock)
  },
  updateEncryptionKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'updateEncryptionKey', 'Inspector2', Promise.reject(result), true, mock)
  },
  updateFilter: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'updateFilter', 'Inspector2', Promise.resolve(result), true, mock)
  },
  updateFilterAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'updateFilter', 'Inspector2', Promise.resolve(result), false, mock)
  },
  updateFilterThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'updateFilter', 'Inspector2', Promise.reject(result), true, mock)
  },
  updateOrgEc2DeepInspectionConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'updateOrgEc2DeepInspectionConfiguration', 'Inspector2', Promise.resolve(result), true, mock)
  },
  updateOrgEc2DeepInspectionConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'updateOrgEc2DeepInspectionConfiguration', 'Inspector2', Promise.resolve(result), false, mock)
  },
  updateOrgEc2DeepInspectionConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'updateOrgEc2DeepInspectionConfiguration', 'Inspector2', Promise.reject(result), true, mock)
  },
  updateOrganizationConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'updateOrganizationConfiguration', 'Inspector2', Promise.resolve(result), true, mock)
  },
  updateOrganizationConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'updateOrganizationConfiguration', 'Inspector2', Promise.resolve(result), false, mock)
  },
  updateOrganizationConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'updateOrganizationConfiguration', 'Inspector2', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'send', 'Inspector2Client', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'send', 'Inspector2Client', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-inspector2', 'send', 'Inspector2Client', Promise.reject(result), true, mock)
  }
}
