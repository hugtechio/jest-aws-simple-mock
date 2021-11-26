
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockWorkDocs = {
  abortDocumentVersionUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'abortDocumentVersionUpload', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  abortDocumentVersionUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'abortDocumentVersionUpload', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  abortDocumentVersionUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'abortDocumentVersionUpload', 'WorkDocs', Promise.reject(result), true, mock)
  },
  activateUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'activateUser', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  activateUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'activateUser', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  activateUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'activateUser', 'WorkDocs', Promise.reject(result), true, mock)
  },
  addResourcePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'addResourcePermissions', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  addResourcePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'addResourcePermissions', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  addResourcePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'addResourcePermissions', 'WorkDocs', Promise.reject(result), true, mock)
  },
  createComment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'createComment', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  createCommentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'createComment', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  createCommentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'createComment', 'WorkDocs', Promise.reject(result), true, mock)
  },
  createCustomMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'createCustomMetadata', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  createCustomMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'createCustomMetadata', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  createCustomMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'createCustomMetadata', 'WorkDocs', Promise.reject(result), true, mock)
  },
  createFolder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'createFolder', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  createFolderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'createFolder', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  createFolderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'createFolder', 'WorkDocs', Promise.reject(result), true, mock)
  },
  createLabels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'createLabels', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  createLabelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'createLabels', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  createLabelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'createLabels', 'WorkDocs', Promise.reject(result), true, mock)
  },
  createNotificationSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'createNotificationSubscription', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  createNotificationSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'createNotificationSubscription', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  createNotificationSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'createNotificationSubscription', 'WorkDocs', Promise.reject(result), true, mock)
  },
  createUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'createUser', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  createUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'createUser', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  createUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'createUser', 'WorkDocs', Promise.reject(result), true, mock)
  },
  deactivateUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deactivateUser', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  deactivateUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deactivateUser', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  deactivateUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deactivateUser', 'WorkDocs', Promise.reject(result), true, mock)
  },
  deleteComment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteComment', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  deleteCommentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteComment', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  deleteCommentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteComment', 'WorkDocs', Promise.reject(result), true, mock)
  },
  deleteCustomMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteCustomMetadata', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  deleteCustomMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteCustomMetadata', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  deleteCustomMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteCustomMetadata', 'WorkDocs', Promise.reject(result), true, mock)
  },
  deleteDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteDocument', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  deleteDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteDocument', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  deleteDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteDocument', 'WorkDocs', Promise.reject(result), true, mock)
  },
  deleteFolder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteFolder', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  deleteFolderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteFolder', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  deleteFolderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteFolder', 'WorkDocs', Promise.reject(result), true, mock)
  },
  deleteFolderContents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteFolderContents', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  deleteFolderContentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteFolderContents', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  deleteFolderContentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteFolderContents', 'WorkDocs', Promise.reject(result), true, mock)
  },
  deleteLabels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteLabels', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  deleteLabelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteLabels', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  deleteLabelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteLabels', 'WorkDocs', Promise.reject(result), true, mock)
  },
  deleteNotificationSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteNotificationSubscription', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  deleteNotificationSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteNotificationSubscription', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  deleteNotificationSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteNotificationSubscription', 'WorkDocs', Promise.reject(result), true, mock)
  },
  deleteUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteUser', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  deleteUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteUser', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  deleteUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'deleteUser', 'WorkDocs', Promise.reject(result), true, mock)
  },
  describeActivities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeActivities', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  describeActivitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeActivities', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  describeActivitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeActivities', 'WorkDocs', Promise.reject(result), true, mock)
  },
  describeComments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeComments', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  describeCommentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeComments', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  describeCommentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeComments', 'WorkDocs', Promise.reject(result), true, mock)
  },
  describeDocumentVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeDocumentVersions', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  describeDocumentVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeDocumentVersions', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  describeDocumentVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeDocumentVersions', 'WorkDocs', Promise.reject(result), true, mock)
  },
  describeFolderContents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeFolderContents', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  describeFolderContentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeFolderContents', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  describeFolderContentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeFolderContents', 'WorkDocs', Promise.reject(result), true, mock)
  },
  describeGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeGroups', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  describeGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeGroups', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  describeGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeGroups', 'WorkDocs', Promise.reject(result), true, mock)
  },
  describeNotificationSubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeNotificationSubscriptions', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  describeNotificationSubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeNotificationSubscriptions', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  describeNotificationSubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeNotificationSubscriptions', 'WorkDocs', Promise.reject(result), true, mock)
  },
  describeResourcePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeResourcePermissions', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  describeResourcePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeResourcePermissions', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  describeResourcePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeResourcePermissions', 'WorkDocs', Promise.reject(result), true, mock)
  },
  describeRootFolders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeRootFolders', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  describeRootFoldersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeRootFolders', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  describeRootFoldersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeRootFolders', 'WorkDocs', Promise.reject(result), true, mock)
  },
  describeUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeUsers', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  describeUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeUsers', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  describeUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'describeUsers', 'WorkDocs', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'destroy', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'destroy', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'destroy', 'WorkDocs', Promise.reject(result), true, mock)
  },
  getCurrentUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'getCurrentUser', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  getCurrentUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'getCurrentUser', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  getCurrentUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'getCurrentUser', 'WorkDocs', Promise.reject(result), true, mock)
  },
  getDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'getDocument', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  getDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'getDocument', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  getDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'getDocument', 'WorkDocs', Promise.reject(result), true, mock)
  },
  getDocumentPath: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'getDocumentPath', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  getDocumentPathAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'getDocumentPath', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  getDocumentPathThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'getDocumentPath', 'WorkDocs', Promise.reject(result), true, mock)
  },
  getDocumentVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'getDocumentVersion', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  getDocumentVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'getDocumentVersion', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  getDocumentVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'getDocumentVersion', 'WorkDocs', Promise.reject(result), true, mock)
  },
  getFolder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'getFolder', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  getFolderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'getFolder', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  getFolderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'getFolder', 'WorkDocs', Promise.reject(result), true, mock)
  },
  getFolderPath: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'getFolderPath', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  getFolderPathAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'getFolderPath', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  getFolderPathThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'getFolderPath', 'WorkDocs', Promise.reject(result), true, mock)
  },
  getResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'getResources', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  getResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'getResources', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  getResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'getResources', 'WorkDocs', Promise.reject(result), true, mock)
  },
  initiateDocumentVersionUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'initiateDocumentVersionUpload', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  initiateDocumentVersionUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'initiateDocumentVersionUpload', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  initiateDocumentVersionUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'initiateDocumentVersionUpload', 'WorkDocs', Promise.reject(result), true, mock)
  },
  removeAllResourcePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'removeAllResourcePermissions', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  removeAllResourcePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'removeAllResourcePermissions', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  removeAllResourcePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'removeAllResourcePermissions', 'WorkDocs', Promise.reject(result), true, mock)
  },
  removeResourcePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'removeResourcePermission', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  removeResourcePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'removeResourcePermission', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  removeResourcePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'removeResourcePermission', 'WorkDocs', Promise.reject(result), true, mock)
  },
  updateDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'updateDocument', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  updateDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'updateDocument', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  updateDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'updateDocument', 'WorkDocs', Promise.reject(result), true, mock)
  },
  updateDocumentVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'updateDocumentVersion', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  updateDocumentVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'updateDocumentVersion', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  updateDocumentVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'updateDocumentVersion', 'WorkDocs', Promise.reject(result), true, mock)
  },
  updateFolder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'updateFolder', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  updateFolderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'updateFolder', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  updateFolderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'updateFolder', 'WorkDocs', Promise.reject(result), true, mock)
  },
  updateUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'updateUser', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  updateUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'updateUser', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  updateUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'updateUser', 'WorkDocs', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'send', 'WorkDocsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'send', 'WorkDocsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-workdocs', 'send', 'WorkDocsClient', Promise.reject(result), true, mock)
  }
}