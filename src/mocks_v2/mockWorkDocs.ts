
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
  export const mockWorkDocs = {
  abortDocumentVersionUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('abortDocumentVersionUpload', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  abortDocumentVersionUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('abortDocumentVersionUpload', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  abortDocumentVersionUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('abortDocumentVersionUpload', 'WorkDocs', Promise.reject(result), true, mock)
  },
  activateUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('activateUser', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  activateUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('activateUser', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  activateUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('activateUser', 'WorkDocs', Promise.reject(result), true, mock)
  },
  addResourcePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addResourcePermissions', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  addResourcePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addResourcePermissions', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  addResourcePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addResourcePermissions', 'WorkDocs', Promise.reject(result), true, mock)
  },
  createComment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createComment', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  createCommentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createComment', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  createCommentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createComment', 'WorkDocs', Promise.reject(result), true, mock)
  },
  createCustomMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomMetadata', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  createCustomMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomMetadata', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  createCustomMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createCustomMetadata', 'WorkDocs', Promise.reject(result), true, mock)
  },
  createFolder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFolder', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  createFolderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFolder', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  createFolderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFolder', 'WorkDocs', Promise.reject(result), true, mock)
  },
  createLabels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLabels', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  createLabelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLabels', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  createLabelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createLabels', 'WorkDocs', Promise.reject(result), true, mock)
  },
  createNotificationSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNotificationSubscription', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  createNotificationSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNotificationSubscription', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  createNotificationSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createNotificationSubscription', 'WorkDocs', Promise.reject(result), true, mock)
  },
  createUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUser', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  createUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUser', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  createUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUser', 'WorkDocs', Promise.reject(result), true, mock)
  },
  deactivateUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deactivateUser', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  deactivateUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deactivateUser', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  deactivateUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deactivateUser', 'WorkDocs', Promise.reject(result), true, mock)
  },
  deleteComment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteComment', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  deleteCommentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteComment', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  deleteCommentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteComment', 'WorkDocs', Promise.reject(result), true, mock)
  },
  deleteCustomMetadata: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCustomMetadata', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  deleteCustomMetadataAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCustomMetadata', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  deleteCustomMetadataThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteCustomMetadata', 'WorkDocs', Promise.reject(result), true, mock)
  },
  deleteDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDocument', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  deleteDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDocument', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  deleteDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDocument', 'WorkDocs', Promise.reject(result), true, mock)
  },
  deleteFolder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFolder', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  deleteFolderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFolder', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  deleteFolderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFolder', 'WorkDocs', Promise.reject(result), true, mock)
  },
  deleteFolderContents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFolderContents', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  deleteFolderContentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFolderContents', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  deleteFolderContentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFolderContents', 'WorkDocs', Promise.reject(result), true, mock)
  },
  deleteLabels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLabels', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  deleteLabelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLabels', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  deleteLabelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteLabels', 'WorkDocs', Promise.reject(result), true, mock)
  },
  deleteNotificationSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNotificationSubscription', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  deleteNotificationSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNotificationSubscription', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  deleteNotificationSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteNotificationSubscription', 'WorkDocs', Promise.reject(result), true, mock)
  },
  deleteUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUser', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  deleteUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUser', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  deleteUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUser', 'WorkDocs', Promise.reject(result), true, mock)
  },
  describeActivities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeActivities', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  describeActivitiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeActivities', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  describeActivitiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeActivities', 'WorkDocs', Promise.reject(result), true, mock)
  },
  describeComments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComments', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  describeCommentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComments', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  describeCommentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeComments', 'WorkDocs', Promise.reject(result), true, mock)
  },
  describeDocumentVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDocumentVersions', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  describeDocumentVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDocumentVersions', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  describeDocumentVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDocumentVersions', 'WorkDocs', Promise.reject(result), true, mock)
  },
  describeFolderContents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFolderContents', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  describeFolderContentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFolderContents', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  describeFolderContentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFolderContents', 'WorkDocs', Promise.reject(result), true, mock)
  },
  describeGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGroups', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  describeGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGroups', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  describeGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeGroups', 'WorkDocs', Promise.reject(result), true, mock)
  },
  describeNotificationSubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNotificationSubscriptions', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  describeNotificationSubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNotificationSubscriptions', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  describeNotificationSubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeNotificationSubscriptions', 'WorkDocs', Promise.reject(result), true, mock)
  },
  describeResourcePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeResourcePermissions', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  describeResourcePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeResourcePermissions', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  describeResourcePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeResourcePermissions', 'WorkDocs', Promise.reject(result), true, mock)
  },
  describeRootFolders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRootFolders', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  describeRootFoldersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRootFolders', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  describeRootFoldersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeRootFolders', 'WorkDocs', Promise.reject(result), true, mock)
  },
  describeUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUsers', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  describeUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUsers', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  describeUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUsers', 'WorkDocs', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'WorkDocs', Promise.reject(result), true, mock)
  },
  getCurrentUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCurrentUser', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  getCurrentUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCurrentUser', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  getCurrentUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getCurrentUser', 'WorkDocs', Promise.reject(result), true, mock)
  },
  getDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocument', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  getDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocument', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  getDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocument', 'WorkDocs', Promise.reject(result), true, mock)
  },
  getDocumentPath: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentPath', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  getDocumentPathAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentPath', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  getDocumentPathThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentPath', 'WorkDocs', Promise.reject(result), true, mock)
  },
  getDocumentVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentVersion', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  getDocumentVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentVersion', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  getDocumentVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDocumentVersion', 'WorkDocs', Promise.reject(result), true, mock)
  },
  getFolder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFolder', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  getFolderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFolder', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  getFolderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFolder', 'WorkDocs', Promise.reject(result), true, mock)
  },
  getFolderPath: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFolderPath', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  getFolderPathAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFolderPath', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  getFolderPathThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getFolderPath', 'WorkDocs', Promise.reject(result), true, mock)
  },
  getResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResources', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  getResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResources', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  getResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getResources', 'WorkDocs', Promise.reject(result), true, mock)
  },
  initiateDocumentVersionUpload: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initiateDocumentVersionUpload', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  initiateDocumentVersionUploadAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initiateDocumentVersionUpload', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  initiateDocumentVersionUploadThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('initiateDocumentVersionUpload', 'WorkDocs', Promise.reject(result), true, mock)
  },
  removeAllResourcePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeAllResourcePermissions', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  removeAllResourcePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeAllResourcePermissions', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  removeAllResourcePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeAllResourcePermissions', 'WorkDocs', Promise.reject(result), true, mock)
  },
  removeResourcePermission: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeResourcePermission', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  removeResourcePermissionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeResourcePermission', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  removeResourcePermissionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('removeResourcePermission', 'WorkDocs', Promise.reject(result), true, mock)
  },
  updateDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDocument', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  updateDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDocument', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  updateDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDocument', 'WorkDocs', Promise.reject(result), true, mock)
  },
  updateDocumentVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDocumentVersion', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  updateDocumentVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDocumentVersion', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  updateDocumentVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDocumentVersion', 'WorkDocs', Promise.reject(result), true, mock)
  },
  updateFolder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFolder', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  updateFolderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFolder', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  updateFolderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFolder', 'WorkDocs', Promise.reject(result), true, mock)
  },
  updateUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUser', 'WorkDocs', Promise.resolve(result), true, mock)
  },
  updateUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUser', 'WorkDocs', Promise.resolve(result), false, mock)
  },
  updateUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateUser', 'WorkDocs', Promise.reject(result), true, mock)
  },
}
