
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
  export const mockAppStream = {
  associateFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateFleet', 'AppStream', Promise.resolve(result), true, mock)
  },
  associateFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateFleet', 'AppStream', Promise.resolve(result), false, mock)
  },
  associateFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('associateFleet', 'AppStream', Promise.reject(result), true, mock)
  },
  batchAssociateUserStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchAssociateUserStack', 'AppStream', Promise.resolve(result), true, mock)
  },
  batchAssociateUserStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchAssociateUserStack', 'AppStream', Promise.resolve(result), false, mock)
  },
  batchAssociateUserStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchAssociateUserStack', 'AppStream', Promise.reject(result), true, mock)
  },
  batchDisassociateUserStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDisassociateUserStack', 'AppStream', Promise.resolve(result), true, mock)
  },
  batchDisassociateUserStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDisassociateUserStack', 'AppStream', Promise.resolve(result), false, mock)
  },
  batchDisassociateUserStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('batchDisassociateUserStack', 'AppStream', Promise.reject(result), true, mock)
  },
  copyImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyImage', 'AppStream', Promise.resolve(result), true, mock)
  },
  copyImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyImage', 'AppStream', Promise.resolve(result), false, mock)
  },
  copyImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('copyImage', 'AppStream', Promise.reject(result), true, mock)
  },
  createDirectoryConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDirectoryConfig', 'AppStream', Promise.resolve(result), true, mock)
  },
  createDirectoryConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDirectoryConfig', 'AppStream', Promise.resolve(result), false, mock)
  },
  createDirectoryConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDirectoryConfig', 'AppStream', Promise.reject(result), true, mock)
  },
  createFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFleet', 'AppStream', Promise.resolve(result), true, mock)
  },
  createFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFleet', 'AppStream', Promise.resolve(result), false, mock)
  },
  createFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createFleet', 'AppStream', Promise.reject(result), true, mock)
  },
  createImageBuilder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createImageBuilder', 'AppStream', Promise.resolve(result), true, mock)
  },
  createImageBuilderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createImageBuilder', 'AppStream', Promise.resolve(result), false, mock)
  },
  createImageBuilderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createImageBuilder', 'AppStream', Promise.reject(result), true, mock)
  },
  createImageBuilderStreamingURL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createImageBuilderStreamingURL', 'AppStream', Promise.resolve(result), true, mock)
  },
  createImageBuilderStreamingURLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createImageBuilderStreamingURL', 'AppStream', Promise.resolve(result), false, mock)
  },
  createImageBuilderStreamingURLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createImageBuilderStreamingURL', 'AppStream', Promise.reject(result), true, mock)
  },
  createStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStack', 'AppStream', Promise.resolve(result), true, mock)
  },
  createStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStack', 'AppStream', Promise.resolve(result), false, mock)
  },
  createStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStack', 'AppStream', Promise.reject(result), true, mock)
  },
  createStreamingURL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamingURL', 'AppStream', Promise.resolve(result), true, mock)
  },
  createStreamingURLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamingURL', 'AppStream', Promise.resolve(result), false, mock)
  },
  createStreamingURLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createStreamingURL', 'AppStream', Promise.reject(result), true, mock)
  },
  createUpdatedImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUpdatedImage', 'AppStream', Promise.resolve(result), true, mock)
  },
  createUpdatedImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUpdatedImage', 'AppStream', Promise.resolve(result), false, mock)
  },
  createUpdatedImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUpdatedImage', 'AppStream', Promise.reject(result), true, mock)
  },
  createUsageReportSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUsageReportSubscription', 'AppStream', Promise.resolve(result), true, mock)
  },
  createUsageReportSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUsageReportSubscription', 'AppStream', Promise.resolve(result), false, mock)
  },
  createUsageReportSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUsageReportSubscription', 'AppStream', Promise.reject(result), true, mock)
  },
  createUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUser', 'AppStream', Promise.resolve(result), true, mock)
  },
  createUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUser', 'AppStream', Promise.resolve(result), false, mock)
  },
  createUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createUser', 'AppStream', Promise.reject(result), true, mock)
  },
  deleteDirectoryConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDirectoryConfig', 'AppStream', Promise.resolve(result), true, mock)
  },
  deleteDirectoryConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDirectoryConfig', 'AppStream', Promise.resolve(result), false, mock)
  },
  deleteDirectoryConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDirectoryConfig', 'AppStream', Promise.reject(result), true, mock)
  },
  deleteFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFleet', 'AppStream', Promise.resolve(result), true, mock)
  },
  deleteFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFleet', 'AppStream', Promise.resolve(result), false, mock)
  },
  deleteFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteFleet', 'AppStream', Promise.reject(result), true, mock)
  },
  deleteImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImage', 'AppStream', Promise.resolve(result), true, mock)
  },
  deleteImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImage', 'AppStream', Promise.resolve(result), false, mock)
  },
  deleteImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImage', 'AppStream', Promise.reject(result), true, mock)
  },
  deleteImageBuilder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImageBuilder', 'AppStream', Promise.resolve(result), true, mock)
  },
  deleteImageBuilderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImageBuilder', 'AppStream', Promise.resolve(result), false, mock)
  },
  deleteImageBuilderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImageBuilder', 'AppStream', Promise.reject(result), true, mock)
  },
  deleteImagePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImagePermissions', 'AppStream', Promise.resolve(result), true, mock)
  },
  deleteImagePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImagePermissions', 'AppStream', Promise.resolve(result), false, mock)
  },
  deleteImagePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteImagePermissions', 'AppStream', Promise.reject(result), true, mock)
  },
  deleteStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStack', 'AppStream', Promise.resolve(result), true, mock)
  },
  deleteStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStack', 'AppStream', Promise.resolve(result), false, mock)
  },
  deleteStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteStack', 'AppStream', Promise.reject(result), true, mock)
  },
  deleteUsageReportSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUsageReportSubscription', 'AppStream', Promise.resolve(result), true, mock)
  },
  deleteUsageReportSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUsageReportSubscription', 'AppStream', Promise.resolve(result), false, mock)
  },
  deleteUsageReportSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUsageReportSubscription', 'AppStream', Promise.reject(result), true, mock)
  },
  deleteUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUser', 'AppStream', Promise.resolve(result), true, mock)
  },
  deleteUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUser', 'AppStream', Promise.resolve(result), false, mock)
  },
  deleteUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteUser', 'AppStream', Promise.reject(result), true, mock)
  },
  describeDirectoryConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDirectoryConfigs', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeDirectoryConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDirectoryConfigs', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeDirectoryConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeDirectoryConfigs', 'AppStream', Promise.reject(result), true, mock)
  },
  describeFleets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleets', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeFleetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleets', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeFleetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeFleets', 'AppStream', Promise.reject(result), true, mock)
  },
  describeImageBuilders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImageBuilders', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeImageBuildersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImageBuilders', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeImageBuildersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImageBuilders', 'AppStream', Promise.reject(result), true, mock)
  },
  describeImagePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImagePermissions', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeImagePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImagePermissions', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeImagePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImagePermissions', 'AppStream', Promise.reject(result), true, mock)
  },
  describeImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImages', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImages', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeImages', 'AppStream', Promise.reject(result), true, mock)
  },
  describeSessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSessions', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeSessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSessions', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeSessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeSessions', 'AppStream', Promise.reject(result), true, mock)
  },
  describeStacks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStacks', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeStacksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStacks', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeStacksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeStacks', 'AppStream', Promise.reject(result), true, mock)
  },
  describeUsageReportSubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUsageReportSubscriptions', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeUsageReportSubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUsageReportSubscriptions', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeUsageReportSubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUsageReportSubscriptions', 'AppStream', Promise.reject(result), true, mock)
  },
  describeUserStackAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserStackAssociations', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeUserStackAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserStackAssociations', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeUserStackAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUserStackAssociations', 'AppStream', Promise.reject(result), true, mock)
  },
  describeUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUsers', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUsers', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeUsers', 'AppStream', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AppStream', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AppStream', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AppStream', Promise.reject(result), true, mock)
  },
  disableUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableUser', 'AppStream', Promise.resolve(result), true, mock)
  },
  disableUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableUser', 'AppStream', Promise.resolve(result), false, mock)
  },
  disableUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disableUser', 'AppStream', Promise.reject(result), true, mock)
  },
  disassociateFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFleet', 'AppStream', Promise.resolve(result), true, mock)
  },
  disassociateFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFleet', 'AppStream', Promise.resolve(result), false, mock)
  },
  disassociateFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('disassociateFleet', 'AppStream', Promise.reject(result), true, mock)
  },
  enableUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableUser', 'AppStream', Promise.resolve(result), true, mock)
  },
  enableUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableUser', 'AppStream', Promise.resolve(result), false, mock)
  },
  enableUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('enableUser', 'AppStream', Promise.reject(result), true, mock)
  },
  expireSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('expireSession', 'AppStream', Promise.resolve(result), true, mock)
  },
  expireSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('expireSession', 'AppStream', Promise.resolve(result), false, mock)
  },
  expireSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('expireSession', 'AppStream', Promise.reject(result), true, mock)
  },
  listAssociatedFleets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssociatedFleets', 'AppStream', Promise.resolve(result), true, mock)
  },
  listAssociatedFleetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssociatedFleets', 'AppStream', Promise.resolve(result), false, mock)
  },
  listAssociatedFleetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssociatedFleets', 'AppStream', Promise.reject(result), true, mock)
  },
  listAssociatedStacks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssociatedStacks', 'AppStream', Promise.resolve(result), true, mock)
  },
  listAssociatedStacksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssociatedStacks', 'AppStream', Promise.resolve(result), false, mock)
  },
  listAssociatedStacksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAssociatedStacks', 'AppStream', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'AppStream', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'AppStream', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'AppStream', Promise.reject(result), true, mock)
  },
  startFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFleet', 'AppStream', Promise.resolve(result), true, mock)
  },
  startFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFleet', 'AppStream', Promise.resolve(result), false, mock)
  },
  startFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startFleet', 'AppStream', Promise.reject(result), true, mock)
  },
  startImageBuilder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImageBuilder', 'AppStream', Promise.resolve(result), true, mock)
  },
  startImageBuilderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImageBuilder', 'AppStream', Promise.resolve(result), false, mock)
  },
  startImageBuilderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startImageBuilder', 'AppStream', Promise.reject(result), true, mock)
  },
  stopFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopFleet', 'AppStream', Promise.resolve(result), true, mock)
  },
  stopFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopFleet', 'AppStream', Promise.resolve(result), false, mock)
  },
  stopFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopFleet', 'AppStream', Promise.reject(result), true, mock)
  },
  stopImageBuilder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopImageBuilder', 'AppStream', Promise.resolve(result), true, mock)
  },
  stopImageBuilderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopImageBuilder', 'AppStream', Promise.resolve(result), false, mock)
  },
  stopImageBuilderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopImageBuilder', 'AppStream', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'AppStream', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'AppStream', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'AppStream', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'AppStream', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'AppStream', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'AppStream', Promise.reject(result), true, mock)
  },
  updateDirectoryConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDirectoryConfig', 'AppStream', Promise.resolve(result), true, mock)
  },
  updateDirectoryConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDirectoryConfig', 'AppStream', Promise.resolve(result), false, mock)
  },
  updateDirectoryConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDirectoryConfig', 'AppStream', Promise.reject(result), true, mock)
  },
  updateFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFleet', 'AppStream', Promise.resolve(result), true, mock)
  },
  updateFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFleet', 'AppStream', Promise.resolve(result), false, mock)
  },
  updateFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateFleet', 'AppStream', Promise.reject(result), true, mock)
  },
  updateImagePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateImagePermissions', 'AppStream', Promise.resolve(result), true, mock)
  },
  updateImagePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateImagePermissions', 'AppStream', Promise.resolve(result), false, mock)
  },
  updateImagePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateImagePermissions', 'AppStream', Promise.reject(result), true, mock)
  },
  updateStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStack', 'AppStream', Promise.resolve(result), true, mock)
  },
  updateStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStack', 'AppStream', Promise.resolve(result), false, mock)
  },
  updateStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateStack', 'AppStream', Promise.reject(result), true, mock)
  },
}
