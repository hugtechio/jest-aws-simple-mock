
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockQuickSight = {
  cancelIngestion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'cancelIngestion', 'QuickSight', Promise.resolve(result), true, mock)
  },
  cancelIngestionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'cancelIngestion', 'QuickSight', Promise.resolve(result), false, mock)
  },
  cancelIngestionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'cancelIngestion', 'QuickSight', Promise.reject(result), true, mock)
  },
  createAccountCustomization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createAccountCustomization', 'QuickSight', Promise.resolve(result), true, mock)
  },
  createAccountCustomizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createAccountCustomization', 'QuickSight', Promise.resolve(result), false, mock)
  },
  createAccountCustomizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createAccountCustomization', 'QuickSight', Promise.reject(result), true, mock)
  },
  createAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createAnalysis', 'QuickSight', Promise.resolve(result), true, mock)
  },
  createAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createAnalysis', 'QuickSight', Promise.resolve(result), false, mock)
  },
  createAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createAnalysis', 'QuickSight', Promise.reject(result), true, mock)
  },
  createDashboard: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createDashboard', 'QuickSight', Promise.resolve(result), true, mock)
  },
  createDashboardAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createDashboard', 'QuickSight', Promise.resolve(result), false, mock)
  },
  createDashboardThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createDashboard', 'QuickSight', Promise.reject(result), true, mock)
  },
  createDataSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createDataSet', 'QuickSight', Promise.resolve(result), true, mock)
  },
  createDataSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createDataSet', 'QuickSight', Promise.resolve(result), false, mock)
  },
  createDataSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createDataSet', 'QuickSight', Promise.reject(result), true, mock)
  },
  createDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createDataSource', 'QuickSight', Promise.resolve(result), true, mock)
  },
  createDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createDataSource', 'QuickSight', Promise.resolve(result), false, mock)
  },
  createDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createDataSource', 'QuickSight', Promise.reject(result), true, mock)
  },
  createFolder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createFolder', 'QuickSight', Promise.resolve(result), true, mock)
  },
  createFolderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createFolder', 'QuickSight', Promise.resolve(result), false, mock)
  },
  createFolderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createFolder', 'QuickSight', Promise.reject(result), true, mock)
  },
  createFolderMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createFolderMembership', 'QuickSight', Promise.resolve(result), true, mock)
  },
  createFolderMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createFolderMembership', 'QuickSight', Promise.resolve(result), false, mock)
  },
  createFolderMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createFolderMembership', 'QuickSight', Promise.reject(result), true, mock)
  },
  createGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createGroup', 'QuickSight', Promise.resolve(result), true, mock)
  },
  createGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createGroup', 'QuickSight', Promise.resolve(result), false, mock)
  },
  createGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createGroup', 'QuickSight', Promise.reject(result), true, mock)
  },
  createGroupMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createGroupMembership', 'QuickSight', Promise.resolve(result), true, mock)
  },
  createGroupMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createGroupMembership', 'QuickSight', Promise.resolve(result), false, mock)
  },
  createGroupMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createGroupMembership', 'QuickSight', Promise.reject(result), true, mock)
  },
  createIAMPolicyAssignment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createIAMPolicyAssignment', 'QuickSight', Promise.resolve(result), true, mock)
  },
  createIAMPolicyAssignmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createIAMPolicyAssignment', 'QuickSight', Promise.resolve(result), false, mock)
  },
  createIAMPolicyAssignmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createIAMPolicyAssignment', 'QuickSight', Promise.reject(result), true, mock)
  },
  createIngestion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createIngestion', 'QuickSight', Promise.resolve(result), true, mock)
  },
  createIngestionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createIngestion', 'QuickSight', Promise.resolve(result), false, mock)
  },
  createIngestionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createIngestion', 'QuickSight', Promise.reject(result), true, mock)
  },
  createNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createNamespace', 'QuickSight', Promise.resolve(result), true, mock)
  },
  createNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createNamespace', 'QuickSight', Promise.resolve(result), false, mock)
  },
  createNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createNamespace', 'QuickSight', Promise.reject(result), true, mock)
  },
  createTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createTemplate', 'QuickSight', Promise.resolve(result), true, mock)
  },
  createTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createTemplate', 'QuickSight', Promise.resolve(result), false, mock)
  },
  createTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createTemplate', 'QuickSight', Promise.reject(result), true, mock)
  },
  createTemplateAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createTemplateAlias', 'QuickSight', Promise.resolve(result), true, mock)
  },
  createTemplateAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createTemplateAlias', 'QuickSight', Promise.resolve(result), false, mock)
  },
  createTemplateAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createTemplateAlias', 'QuickSight', Promise.reject(result), true, mock)
  },
  createTheme: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createTheme', 'QuickSight', Promise.resolve(result), true, mock)
  },
  createThemeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createTheme', 'QuickSight', Promise.resolve(result), false, mock)
  },
  createThemeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createTheme', 'QuickSight', Promise.reject(result), true, mock)
  },
  createThemeAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createThemeAlias', 'QuickSight', Promise.resolve(result), true, mock)
  },
  createThemeAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createThemeAlias', 'QuickSight', Promise.resolve(result), false, mock)
  },
  createThemeAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'createThemeAlias', 'QuickSight', Promise.reject(result), true, mock)
  },
  deleteAccountCustomization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteAccountCustomization', 'QuickSight', Promise.resolve(result), true, mock)
  },
  deleteAccountCustomizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteAccountCustomization', 'QuickSight', Promise.resolve(result), false, mock)
  },
  deleteAccountCustomizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteAccountCustomization', 'QuickSight', Promise.reject(result), true, mock)
  },
  deleteAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteAnalysis', 'QuickSight', Promise.resolve(result), true, mock)
  },
  deleteAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteAnalysis', 'QuickSight', Promise.resolve(result), false, mock)
  },
  deleteAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteAnalysis', 'QuickSight', Promise.reject(result), true, mock)
  },
  deleteDashboard: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteDashboard', 'QuickSight', Promise.resolve(result), true, mock)
  },
  deleteDashboardAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteDashboard', 'QuickSight', Promise.resolve(result), false, mock)
  },
  deleteDashboardThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteDashboard', 'QuickSight', Promise.reject(result), true, mock)
  },
  deleteDataSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteDataSet', 'QuickSight', Promise.resolve(result), true, mock)
  },
  deleteDataSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteDataSet', 'QuickSight', Promise.resolve(result), false, mock)
  },
  deleteDataSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteDataSet', 'QuickSight', Promise.reject(result), true, mock)
  },
  deleteDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteDataSource', 'QuickSight', Promise.resolve(result), true, mock)
  },
  deleteDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteDataSource', 'QuickSight', Promise.resolve(result), false, mock)
  },
  deleteDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteDataSource', 'QuickSight', Promise.reject(result), true, mock)
  },
  deleteFolder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteFolder', 'QuickSight', Promise.resolve(result), true, mock)
  },
  deleteFolderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteFolder', 'QuickSight', Promise.resolve(result), false, mock)
  },
  deleteFolderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteFolder', 'QuickSight', Promise.reject(result), true, mock)
  },
  deleteFolderMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteFolderMembership', 'QuickSight', Promise.resolve(result), true, mock)
  },
  deleteFolderMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteFolderMembership', 'QuickSight', Promise.resolve(result), false, mock)
  },
  deleteFolderMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteFolderMembership', 'QuickSight', Promise.reject(result), true, mock)
  },
  deleteGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteGroup', 'QuickSight', Promise.resolve(result), true, mock)
  },
  deleteGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteGroup', 'QuickSight', Promise.resolve(result), false, mock)
  },
  deleteGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteGroup', 'QuickSight', Promise.reject(result), true, mock)
  },
  deleteGroupMembership: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteGroupMembership', 'QuickSight', Promise.resolve(result), true, mock)
  },
  deleteGroupMembershipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteGroupMembership', 'QuickSight', Promise.resolve(result), false, mock)
  },
  deleteGroupMembershipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteGroupMembership', 'QuickSight', Promise.reject(result), true, mock)
  },
  deleteIAMPolicyAssignment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteIAMPolicyAssignment', 'QuickSight', Promise.resolve(result), true, mock)
  },
  deleteIAMPolicyAssignmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteIAMPolicyAssignment', 'QuickSight', Promise.resolve(result), false, mock)
  },
  deleteIAMPolicyAssignmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteIAMPolicyAssignment', 'QuickSight', Promise.reject(result), true, mock)
  },
  deleteNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteNamespace', 'QuickSight', Promise.resolve(result), true, mock)
  },
  deleteNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteNamespace', 'QuickSight', Promise.resolve(result), false, mock)
  },
  deleteNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteNamespace', 'QuickSight', Promise.reject(result), true, mock)
  },
  deleteTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteTemplate', 'QuickSight', Promise.resolve(result), true, mock)
  },
  deleteTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteTemplate', 'QuickSight', Promise.resolve(result), false, mock)
  },
  deleteTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteTemplate', 'QuickSight', Promise.reject(result), true, mock)
  },
  deleteTemplateAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteTemplateAlias', 'QuickSight', Promise.resolve(result), true, mock)
  },
  deleteTemplateAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteTemplateAlias', 'QuickSight', Promise.resolve(result), false, mock)
  },
  deleteTemplateAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteTemplateAlias', 'QuickSight', Promise.reject(result), true, mock)
  },
  deleteTheme: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteTheme', 'QuickSight', Promise.resolve(result), true, mock)
  },
  deleteThemeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteTheme', 'QuickSight', Promise.resolve(result), false, mock)
  },
  deleteThemeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteTheme', 'QuickSight', Promise.reject(result), true, mock)
  },
  deleteThemeAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteThemeAlias', 'QuickSight', Promise.resolve(result), true, mock)
  },
  deleteThemeAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteThemeAlias', 'QuickSight', Promise.resolve(result), false, mock)
  },
  deleteThemeAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteThemeAlias', 'QuickSight', Promise.reject(result), true, mock)
  },
  deleteUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteUser', 'QuickSight', Promise.resolve(result), true, mock)
  },
  deleteUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteUser', 'QuickSight', Promise.resolve(result), false, mock)
  },
  deleteUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteUser', 'QuickSight', Promise.reject(result), true, mock)
  },
  deleteUserByPrincipalId: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteUserByPrincipalId', 'QuickSight', Promise.resolve(result), true, mock)
  },
  deleteUserByPrincipalIdAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteUserByPrincipalId', 'QuickSight', Promise.resolve(result), false, mock)
  },
  deleteUserByPrincipalIdThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'deleteUserByPrincipalId', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeAccountCustomization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeAccountCustomization', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeAccountCustomizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeAccountCustomization', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeAccountCustomizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeAccountCustomization', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeAccountSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeAccountSettings', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeAccountSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeAccountSettings', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeAccountSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeAccountSettings', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeAnalysis', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeAnalysis', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeAnalysis', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeAnalysisPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeAnalysisPermissions', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeAnalysisPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeAnalysisPermissions', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeAnalysisPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeAnalysisPermissions', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeDashboard: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeDashboard', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeDashboardAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeDashboard', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeDashboardThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeDashboard', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeDashboardPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeDashboardPermissions', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeDashboardPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeDashboardPermissions', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeDashboardPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeDashboardPermissions', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeDataSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeDataSet', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeDataSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeDataSet', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeDataSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeDataSet', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeDataSetPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeDataSetPermissions', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeDataSetPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeDataSetPermissions', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeDataSetPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeDataSetPermissions', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeDataSource', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeDataSource', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeDataSource', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeDataSourcePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeDataSourcePermissions', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeDataSourcePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeDataSourcePermissions', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeDataSourcePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeDataSourcePermissions', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeFolder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeFolder', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeFolderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeFolder', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeFolderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeFolder', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeFolderPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeFolderPermissions', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeFolderPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeFolderPermissions', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeFolderPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeFolderPermissions', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeFolderResolvedPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeFolderResolvedPermissions', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeFolderResolvedPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeFolderResolvedPermissions', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeFolderResolvedPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeFolderResolvedPermissions', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeGroup', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeGroup', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeGroup', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeIAMPolicyAssignment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeIAMPolicyAssignment', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeIAMPolicyAssignmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeIAMPolicyAssignment', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeIAMPolicyAssignmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeIAMPolicyAssignment', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeIngestion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeIngestion', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeIngestionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeIngestion', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeIngestionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeIngestion', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeIpRestriction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeIpRestriction', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeIpRestrictionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeIpRestriction', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeIpRestrictionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeIpRestriction', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeNamespace: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeNamespace', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeNamespaceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeNamespace', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeNamespaceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeNamespace', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeTemplate', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeTemplate', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeTemplate', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeTemplateAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeTemplateAlias', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeTemplateAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeTemplateAlias', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeTemplateAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeTemplateAlias', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeTemplatePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeTemplatePermissions', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeTemplatePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeTemplatePermissions', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeTemplatePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeTemplatePermissions', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeTheme: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeTheme', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeThemeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeTheme', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeThemeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeTheme', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeThemeAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeThemeAlias', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeThemeAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeThemeAlias', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeThemeAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeThemeAlias', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeThemePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeThemePermissions', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeThemePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeThemePermissions', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeThemePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeThemePermissions', 'QuickSight', Promise.reject(result), true, mock)
  },
  describeUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeUser', 'QuickSight', Promise.resolve(result), true, mock)
  },
  describeUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeUser', 'QuickSight', Promise.resolve(result), false, mock)
  },
  describeUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'describeUser', 'QuickSight', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'destroy', 'QuickSight', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'destroy', 'QuickSight', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'destroy', 'QuickSight', Promise.reject(result), true, mock)
  },
  generateEmbedUrlForAnonymousUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'generateEmbedUrlForAnonymousUser', 'QuickSight', Promise.resolve(result), true, mock)
  },
  generateEmbedUrlForAnonymousUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'generateEmbedUrlForAnonymousUser', 'QuickSight', Promise.resolve(result), false, mock)
  },
  generateEmbedUrlForAnonymousUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'generateEmbedUrlForAnonymousUser', 'QuickSight', Promise.reject(result), true, mock)
  },
  generateEmbedUrlForRegisteredUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'generateEmbedUrlForRegisteredUser', 'QuickSight', Promise.resolve(result), true, mock)
  },
  generateEmbedUrlForRegisteredUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'generateEmbedUrlForRegisteredUser', 'QuickSight', Promise.resolve(result), false, mock)
  },
  generateEmbedUrlForRegisteredUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'generateEmbedUrlForRegisteredUser', 'QuickSight', Promise.reject(result), true, mock)
  },
  getDashboardEmbedUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'getDashboardEmbedUrl', 'QuickSight', Promise.resolve(result), true, mock)
  },
  getDashboardEmbedUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'getDashboardEmbedUrl', 'QuickSight', Promise.resolve(result), false, mock)
  },
  getDashboardEmbedUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'getDashboardEmbedUrl', 'QuickSight', Promise.reject(result), true, mock)
  },
  getSessionEmbedUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'getSessionEmbedUrl', 'QuickSight', Promise.resolve(result), true, mock)
  },
  getSessionEmbedUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'getSessionEmbedUrl', 'QuickSight', Promise.resolve(result), false, mock)
  },
  getSessionEmbedUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'getSessionEmbedUrl', 'QuickSight', Promise.reject(result), true, mock)
  },
  listAnalyses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listAnalyses', 'QuickSight', Promise.resolve(result), true, mock)
  },
  listAnalysesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listAnalyses', 'QuickSight', Promise.resolve(result), false, mock)
  },
  listAnalysesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listAnalyses', 'QuickSight', Promise.reject(result), true, mock)
  },
  listDashboardVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listDashboardVersions', 'QuickSight', Promise.resolve(result), true, mock)
  },
  listDashboardVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listDashboardVersions', 'QuickSight', Promise.resolve(result), false, mock)
  },
  listDashboardVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listDashboardVersions', 'QuickSight', Promise.reject(result), true, mock)
  },
  listDashboards: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listDashboards', 'QuickSight', Promise.resolve(result), true, mock)
  },
  listDashboardsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listDashboards', 'QuickSight', Promise.resolve(result), false, mock)
  },
  listDashboardsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listDashboards', 'QuickSight', Promise.reject(result), true, mock)
  },
  listDataSets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listDataSets', 'QuickSight', Promise.resolve(result), true, mock)
  },
  listDataSetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listDataSets', 'QuickSight', Promise.resolve(result), false, mock)
  },
  listDataSetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listDataSets', 'QuickSight', Promise.reject(result), true, mock)
  },
  listDataSources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listDataSources', 'QuickSight', Promise.resolve(result), true, mock)
  },
  listDataSourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listDataSources', 'QuickSight', Promise.resolve(result), false, mock)
  },
  listDataSourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listDataSources', 'QuickSight', Promise.reject(result), true, mock)
  },
  listFolderMembers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listFolderMembers', 'QuickSight', Promise.resolve(result), true, mock)
  },
  listFolderMembersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listFolderMembers', 'QuickSight', Promise.resolve(result), false, mock)
  },
  listFolderMembersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listFolderMembers', 'QuickSight', Promise.reject(result), true, mock)
  },
  listFolders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listFolders', 'QuickSight', Promise.resolve(result), true, mock)
  },
  listFoldersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listFolders', 'QuickSight', Promise.resolve(result), false, mock)
  },
  listFoldersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listFolders', 'QuickSight', Promise.reject(result), true, mock)
  },
  listGroupMemberships: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listGroupMemberships', 'QuickSight', Promise.resolve(result), true, mock)
  },
  listGroupMembershipsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listGroupMemberships', 'QuickSight', Promise.resolve(result), false, mock)
  },
  listGroupMembershipsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listGroupMemberships', 'QuickSight', Promise.reject(result), true, mock)
  },
  listGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listGroups', 'QuickSight', Promise.resolve(result), true, mock)
  },
  listGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listGroups', 'QuickSight', Promise.resolve(result), false, mock)
  },
  listGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listGroups', 'QuickSight', Promise.reject(result), true, mock)
  },
  listIAMPolicyAssignments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listIAMPolicyAssignments', 'QuickSight', Promise.resolve(result), true, mock)
  },
  listIAMPolicyAssignmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listIAMPolicyAssignments', 'QuickSight', Promise.resolve(result), false, mock)
  },
  listIAMPolicyAssignmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listIAMPolicyAssignments', 'QuickSight', Promise.reject(result), true, mock)
  },
  listIAMPolicyAssignmentsForUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listIAMPolicyAssignmentsForUser', 'QuickSight', Promise.resolve(result), true, mock)
  },
  listIAMPolicyAssignmentsForUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listIAMPolicyAssignmentsForUser', 'QuickSight', Promise.resolve(result), false, mock)
  },
  listIAMPolicyAssignmentsForUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listIAMPolicyAssignmentsForUser', 'QuickSight', Promise.reject(result), true, mock)
  },
  listIngestions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listIngestions', 'QuickSight', Promise.resolve(result), true, mock)
  },
  listIngestionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listIngestions', 'QuickSight', Promise.resolve(result), false, mock)
  },
  listIngestionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listIngestions', 'QuickSight', Promise.reject(result), true, mock)
  },
  listNamespaces: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listNamespaces', 'QuickSight', Promise.resolve(result), true, mock)
  },
  listNamespacesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listNamespaces', 'QuickSight', Promise.resolve(result), false, mock)
  },
  listNamespacesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listNamespaces', 'QuickSight', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listTagsForResource', 'QuickSight', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listTagsForResource', 'QuickSight', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listTagsForResource', 'QuickSight', Promise.reject(result), true, mock)
  },
  listTemplateAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listTemplateAliases', 'QuickSight', Promise.resolve(result), true, mock)
  },
  listTemplateAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listTemplateAliases', 'QuickSight', Promise.resolve(result), false, mock)
  },
  listTemplateAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listTemplateAliases', 'QuickSight', Promise.reject(result), true, mock)
  },
  listTemplateVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listTemplateVersions', 'QuickSight', Promise.resolve(result), true, mock)
  },
  listTemplateVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listTemplateVersions', 'QuickSight', Promise.resolve(result), false, mock)
  },
  listTemplateVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listTemplateVersions', 'QuickSight', Promise.reject(result), true, mock)
  },
  listTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listTemplates', 'QuickSight', Promise.resolve(result), true, mock)
  },
  listTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listTemplates', 'QuickSight', Promise.resolve(result), false, mock)
  },
  listTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listTemplates', 'QuickSight', Promise.reject(result), true, mock)
  },
  listThemeAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listThemeAliases', 'QuickSight', Promise.resolve(result), true, mock)
  },
  listThemeAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listThemeAliases', 'QuickSight', Promise.resolve(result), false, mock)
  },
  listThemeAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listThemeAliases', 'QuickSight', Promise.reject(result), true, mock)
  },
  listThemeVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listThemeVersions', 'QuickSight', Promise.resolve(result), true, mock)
  },
  listThemeVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listThemeVersions', 'QuickSight', Promise.resolve(result), false, mock)
  },
  listThemeVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listThemeVersions', 'QuickSight', Promise.reject(result), true, mock)
  },
  listThemes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listThemes', 'QuickSight', Promise.resolve(result), true, mock)
  },
  listThemesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listThemes', 'QuickSight', Promise.resolve(result), false, mock)
  },
  listThemesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listThemes', 'QuickSight', Promise.reject(result), true, mock)
  },
  listUserGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listUserGroups', 'QuickSight', Promise.resolve(result), true, mock)
  },
  listUserGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listUserGroups', 'QuickSight', Promise.resolve(result), false, mock)
  },
  listUserGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listUserGroups', 'QuickSight', Promise.reject(result), true, mock)
  },
  listUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listUsers', 'QuickSight', Promise.resolve(result), true, mock)
  },
  listUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listUsers', 'QuickSight', Promise.resolve(result), false, mock)
  },
  listUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'listUsers', 'QuickSight', Promise.reject(result), true, mock)
  },
  registerUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'registerUser', 'QuickSight', Promise.resolve(result), true, mock)
  },
  registerUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'registerUser', 'QuickSight', Promise.resolve(result), false, mock)
  },
  registerUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'registerUser', 'QuickSight', Promise.reject(result), true, mock)
  },
  restoreAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'restoreAnalysis', 'QuickSight', Promise.resolve(result), true, mock)
  },
  restoreAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'restoreAnalysis', 'QuickSight', Promise.resolve(result), false, mock)
  },
  restoreAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'restoreAnalysis', 'QuickSight', Promise.reject(result), true, mock)
  },
  searchAnalyses: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'searchAnalyses', 'QuickSight', Promise.resolve(result), true, mock)
  },
  searchAnalysesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'searchAnalyses', 'QuickSight', Promise.resolve(result), false, mock)
  },
  searchAnalysesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'searchAnalyses', 'QuickSight', Promise.reject(result), true, mock)
  },
  searchDashboards: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'searchDashboards', 'QuickSight', Promise.resolve(result), true, mock)
  },
  searchDashboardsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'searchDashboards', 'QuickSight', Promise.resolve(result), false, mock)
  },
  searchDashboardsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'searchDashboards', 'QuickSight', Promise.reject(result), true, mock)
  },
  searchFolders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'searchFolders', 'QuickSight', Promise.resolve(result), true, mock)
  },
  searchFoldersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'searchFolders', 'QuickSight', Promise.resolve(result), false, mock)
  },
  searchFoldersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'searchFolders', 'QuickSight', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'tagResource', 'QuickSight', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'tagResource', 'QuickSight', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'tagResource', 'QuickSight', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'untagResource', 'QuickSight', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'untagResource', 'QuickSight', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'untagResource', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateAccountCustomization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateAccountCustomization', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateAccountCustomizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateAccountCustomization', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateAccountCustomizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateAccountCustomization', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateAccountSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateAccountSettings', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateAccountSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateAccountSettings', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateAccountSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateAccountSettings', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateAnalysis: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateAnalysis', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateAnalysisAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateAnalysis', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateAnalysisThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateAnalysis', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateAnalysisPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateAnalysisPermissions', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateAnalysisPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateAnalysisPermissions', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateAnalysisPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateAnalysisPermissions', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateDashboard: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateDashboard', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateDashboardAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateDashboard', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateDashboardThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateDashboard', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateDashboardPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateDashboardPermissions', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateDashboardPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateDashboardPermissions', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateDashboardPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateDashboardPermissions', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateDashboardPublishedVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateDashboardPublishedVersion', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateDashboardPublishedVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateDashboardPublishedVersion', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateDashboardPublishedVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateDashboardPublishedVersion', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateDataSet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateDataSet', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateDataSetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateDataSet', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateDataSetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateDataSet', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateDataSetPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateDataSetPermissions', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateDataSetPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateDataSetPermissions', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateDataSetPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateDataSetPermissions', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateDataSource', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateDataSource', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateDataSource', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateDataSourcePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateDataSourcePermissions', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateDataSourcePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateDataSourcePermissions', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateDataSourcePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateDataSourcePermissions', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateFolder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateFolder', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateFolderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateFolder', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateFolderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateFolder', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateFolderPermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateFolderPermissions', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateFolderPermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateFolderPermissions', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateFolderPermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateFolderPermissions', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateGroup', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateGroup', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateGroup', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateIAMPolicyAssignment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateIAMPolicyAssignment', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateIAMPolicyAssignmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateIAMPolicyAssignment', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateIAMPolicyAssignmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateIAMPolicyAssignment', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateIpRestriction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateIpRestriction', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateIpRestrictionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateIpRestriction', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateIpRestrictionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateIpRestriction', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateTemplate', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateTemplate', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateTemplate', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateTemplateAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateTemplateAlias', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateTemplateAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateTemplateAlias', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateTemplateAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateTemplateAlias', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateTemplatePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateTemplatePermissions', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateTemplatePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateTemplatePermissions', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateTemplatePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateTemplatePermissions', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateTheme: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateTheme', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateThemeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateTheme', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateThemeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateTheme', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateThemeAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateThemeAlias', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateThemeAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateThemeAlias', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateThemeAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateThemeAlias', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateThemePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateThemePermissions', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateThemePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateThemePermissions', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateThemePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateThemePermissions', 'QuickSight', Promise.reject(result), true, mock)
  },
  updateUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateUser', 'QuickSight', Promise.resolve(result), true, mock)
  },
  updateUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateUser', 'QuickSight', Promise.resolve(result), false, mock)
  },
  updateUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'updateUser', 'QuickSight', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'send', 'QuickSightClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'send', 'QuickSightClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-quicksight', 'send', 'QuickSightClient', Promise.reject(result), true, mock)
  }
}