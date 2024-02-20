
/**
* @description mocks_v3:mockAppStream module is mocks for AWS-SDK V3
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
export const mockAppStream = {
  associateAppBlockBuilderAppBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'associateAppBlockBuilderAppBlock', 'AppStream', Promise.resolve(result), true, mock)
  },
  associateAppBlockBuilderAppBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'associateAppBlockBuilderAppBlock', 'AppStream', Promise.resolve(result), false, mock)
  },
  associateAppBlockBuilderAppBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'associateAppBlockBuilderAppBlock', 'AppStream', Promise.reject(result), true, mock)
  },
  associateApplicationFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'associateApplicationFleet', 'AppStream', Promise.resolve(result), true, mock)
  },
  associateApplicationFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'associateApplicationFleet', 'AppStream', Promise.resolve(result), false, mock)
  },
  associateApplicationFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'associateApplicationFleet', 'AppStream', Promise.reject(result), true, mock)
  },
  associateApplicationToEntitlement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'associateApplicationToEntitlement', 'AppStream', Promise.resolve(result), true, mock)
  },
  associateApplicationToEntitlementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'associateApplicationToEntitlement', 'AppStream', Promise.resolve(result), false, mock)
  },
  associateApplicationToEntitlementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'associateApplicationToEntitlement', 'AppStream', Promise.reject(result), true, mock)
  },
  associateFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'associateFleet', 'AppStream', Promise.resolve(result), true, mock)
  },
  associateFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'associateFleet', 'AppStream', Promise.resolve(result), false, mock)
  },
  associateFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'associateFleet', 'AppStream', Promise.reject(result), true, mock)
  },
  batchAssociateUserStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'batchAssociateUserStack', 'AppStream', Promise.resolve(result), true, mock)
  },
  batchAssociateUserStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'batchAssociateUserStack', 'AppStream', Promise.resolve(result), false, mock)
  },
  batchAssociateUserStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'batchAssociateUserStack', 'AppStream', Promise.reject(result), true, mock)
  },
  batchDisassociateUserStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'batchDisassociateUserStack', 'AppStream', Promise.resolve(result), true, mock)
  },
  batchDisassociateUserStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'batchDisassociateUserStack', 'AppStream', Promise.resolve(result), false, mock)
  },
  batchDisassociateUserStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'batchDisassociateUserStack', 'AppStream', Promise.reject(result), true, mock)
  },
  copyImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'copyImage', 'AppStream', Promise.resolve(result), true, mock)
  },
  copyImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'copyImage', 'AppStream', Promise.resolve(result), false, mock)
  },
  copyImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'copyImage', 'AppStream', Promise.reject(result), true, mock)
  },
  createAppBlockBuilder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createAppBlockBuilder', 'AppStream', Promise.resolve(result), true, mock)
  },
  createAppBlockBuilderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createAppBlockBuilder', 'AppStream', Promise.resolve(result), false, mock)
  },
  createAppBlockBuilderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createAppBlockBuilder', 'AppStream', Promise.reject(result), true, mock)
  },
  createAppBlockBuilderStreamingURL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createAppBlockBuilderStreamingURL', 'AppStream', Promise.resolve(result), true, mock)
  },
  createAppBlockBuilderStreamingURLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createAppBlockBuilderStreamingURL', 'AppStream', Promise.resolve(result), false, mock)
  },
  createAppBlockBuilderStreamingURLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createAppBlockBuilderStreamingURL', 'AppStream', Promise.reject(result), true, mock)
  },
  createAppBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createAppBlock', 'AppStream', Promise.resolve(result), true, mock)
  },
  createAppBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createAppBlock', 'AppStream', Promise.resolve(result), false, mock)
  },
  createAppBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createAppBlock', 'AppStream', Promise.reject(result), true, mock)
  },
  createApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createApplication', 'AppStream', Promise.resolve(result), true, mock)
  },
  createApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createApplication', 'AppStream', Promise.resolve(result), false, mock)
  },
  createApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createApplication', 'AppStream', Promise.reject(result), true, mock)
  },
  createDirectoryConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createDirectoryConfig', 'AppStream', Promise.resolve(result), true, mock)
  },
  createDirectoryConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createDirectoryConfig', 'AppStream', Promise.resolve(result), false, mock)
  },
  createDirectoryConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createDirectoryConfig', 'AppStream', Promise.reject(result), true, mock)
  },
  createEntitlement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createEntitlement', 'AppStream', Promise.resolve(result), true, mock)
  },
  createEntitlementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createEntitlement', 'AppStream', Promise.resolve(result), false, mock)
  },
  createEntitlementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createEntitlement', 'AppStream', Promise.reject(result), true, mock)
  },
  createFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createFleet', 'AppStream', Promise.resolve(result), true, mock)
  },
  createFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createFleet', 'AppStream', Promise.resolve(result), false, mock)
  },
  createFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createFleet', 'AppStream', Promise.reject(result), true, mock)
  },
  createImageBuilder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createImageBuilder', 'AppStream', Promise.resolve(result), true, mock)
  },
  createImageBuilderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createImageBuilder', 'AppStream', Promise.resolve(result), false, mock)
  },
  createImageBuilderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createImageBuilder', 'AppStream', Promise.reject(result), true, mock)
  },
  createImageBuilderStreamingURL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createImageBuilderStreamingURL', 'AppStream', Promise.resolve(result), true, mock)
  },
  createImageBuilderStreamingURLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createImageBuilderStreamingURL', 'AppStream', Promise.resolve(result), false, mock)
  },
  createImageBuilderStreamingURLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createImageBuilderStreamingURL', 'AppStream', Promise.reject(result), true, mock)
  },
  createStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createStack', 'AppStream', Promise.resolve(result), true, mock)
  },
  createStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createStack', 'AppStream', Promise.resolve(result), false, mock)
  },
  createStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createStack', 'AppStream', Promise.reject(result), true, mock)
  },
  createStreamingURL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createStreamingURL', 'AppStream', Promise.resolve(result), true, mock)
  },
  createStreamingURLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createStreamingURL', 'AppStream', Promise.resolve(result), false, mock)
  },
  createStreamingURLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createStreamingURL', 'AppStream', Promise.reject(result), true, mock)
  },
  createUpdatedImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createUpdatedImage', 'AppStream', Promise.resolve(result), true, mock)
  },
  createUpdatedImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createUpdatedImage', 'AppStream', Promise.resolve(result), false, mock)
  },
  createUpdatedImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createUpdatedImage', 'AppStream', Promise.reject(result), true, mock)
  },
  createUsageReportSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createUsageReportSubscription', 'AppStream', Promise.resolve(result), true, mock)
  },
  createUsageReportSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createUsageReportSubscription', 'AppStream', Promise.resolve(result), false, mock)
  },
  createUsageReportSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createUsageReportSubscription', 'AppStream', Promise.reject(result), true, mock)
  },
  createUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createUser', 'AppStream', Promise.resolve(result), true, mock)
  },
  createUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createUser', 'AppStream', Promise.resolve(result), false, mock)
  },
  createUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'createUser', 'AppStream', Promise.reject(result), true, mock)
  },
  deleteAppBlockBuilder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteAppBlockBuilder', 'AppStream', Promise.resolve(result), true, mock)
  },
  deleteAppBlockBuilderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteAppBlockBuilder', 'AppStream', Promise.resolve(result), false, mock)
  },
  deleteAppBlockBuilderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteAppBlockBuilder', 'AppStream', Promise.reject(result), true, mock)
  },
  deleteAppBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteAppBlock', 'AppStream', Promise.resolve(result), true, mock)
  },
  deleteAppBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteAppBlock', 'AppStream', Promise.resolve(result), false, mock)
  },
  deleteAppBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteAppBlock', 'AppStream', Promise.reject(result), true, mock)
  },
  deleteApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteApplication', 'AppStream', Promise.resolve(result), true, mock)
  },
  deleteApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteApplication', 'AppStream', Promise.resolve(result), false, mock)
  },
  deleteApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteApplication', 'AppStream', Promise.reject(result), true, mock)
  },
  deleteDirectoryConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteDirectoryConfig', 'AppStream', Promise.resolve(result), true, mock)
  },
  deleteDirectoryConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteDirectoryConfig', 'AppStream', Promise.resolve(result), false, mock)
  },
  deleteDirectoryConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteDirectoryConfig', 'AppStream', Promise.reject(result), true, mock)
  },
  deleteEntitlement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteEntitlement', 'AppStream', Promise.resolve(result), true, mock)
  },
  deleteEntitlementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteEntitlement', 'AppStream', Promise.resolve(result), false, mock)
  },
  deleteEntitlementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteEntitlement', 'AppStream', Promise.reject(result), true, mock)
  },
  deleteFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteFleet', 'AppStream', Promise.resolve(result), true, mock)
  },
  deleteFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteFleet', 'AppStream', Promise.resolve(result), false, mock)
  },
  deleteFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteFleet', 'AppStream', Promise.reject(result), true, mock)
  },
  deleteImageBuilder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteImageBuilder', 'AppStream', Promise.resolve(result), true, mock)
  },
  deleteImageBuilderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteImageBuilder', 'AppStream', Promise.resolve(result), false, mock)
  },
  deleteImageBuilderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteImageBuilder', 'AppStream', Promise.reject(result), true, mock)
  },
  deleteImage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteImage', 'AppStream', Promise.resolve(result), true, mock)
  },
  deleteImageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteImage', 'AppStream', Promise.resolve(result), false, mock)
  },
  deleteImageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteImage', 'AppStream', Promise.reject(result), true, mock)
  },
  deleteImagePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteImagePermissions', 'AppStream', Promise.resolve(result), true, mock)
  },
  deleteImagePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteImagePermissions', 'AppStream', Promise.resolve(result), false, mock)
  },
  deleteImagePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteImagePermissions', 'AppStream', Promise.reject(result), true, mock)
  },
  deleteStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteStack', 'AppStream', Promise.resolve(result), true, mock)
  },
  deleteStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteStack', 'AppStream', Promise.resolve(result), false, mock)
  },
  deleteStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteStack', 'AppStream', Promise.reject(result), true, mock)
  },
  deleteUsageReportSubscription: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteUsageReportSubscription', 'AppStream', Promise.resolve(result), true, mock)
  },
  deleteUsageReportSubscriptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteUsageReportSubscription', 'AppStream', Promise.resolve(result), false, mock)
  },
  deleteUsageReportSubscriptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteUsageReportSubscription', 'AppStream', Promise.reject(result), true, mock)
  },
  deleteUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteUser', 'AppStream', Promise.resolve(result), true, mock)
  },
  deleteUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteUser', 'AppStream', Promise.resolve(result), false, mock)
  },
  deleteUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'deleteUser', 'AppStream', Promise.reject(result), true, mock)
  },
  describeAppBlockBuilderAppBlockAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeAppBlockBuilderAppBlockAssociations', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeAppBlockBuilderAppBlockAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeAppBlockBuilderAppBlockAssociations', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeAppBlockBuilderAppBlockAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeAppBlockBuilderAppBlockAssociations', 'AppStream', Promise.reject(result), true, mock)
  },
  describeAppBlockBuilders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeAppBlockBuilders', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeAppBlockBuildersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeAppBlockBuilders', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeAppBlockBuildersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeAppBlockBuilders', 'AppStream', Promise.reject(result), true, mock)
  },
  describeAppBlocks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeAppBlocks', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeAppBlocksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeAppBlocks', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeAppBlocksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeAppBlocks', 'AppStream', Promise.reject(result), true, mock)
  },
  describeApplicationFleetAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeApplicationFleetAssociations', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeApplicationFleetAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeApplicationFleetAssociations', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeApplicationFleetAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeApplicationFleetAssociations', 'AppStream', Promise.reject(result), true, mock)
  },
  describeApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeApplications', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeApplications', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeApplications', 'AppStream', Promise.reject(result), true, mock)
  },
  describeDirectoryConfigs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeDirectoryConfigs', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeDirectoryConfigsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeDirectoryConfigs', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeDirectoryConfigsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeDirectoryConfigs', 'AppStream', Promise.reject(result), true, mock)
  },
  describeEntitlements: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeEntitlements', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeEntitlementsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeEntitlements', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeEntitlementsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeEntitlements', 'AppStream', Promise.reject(result), true, mock)
  },
  describeFleets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeFleets', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeFleetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeFleets', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeFleetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeFleets', 'AppStream', Promise.reject(result), true, mock)
  },
  describeImageBuilders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeImageBuilders', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeImageBuildersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeImageBuilders', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeImageBuildersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeImageBuilders', 'AppStream', Promise.reject(result), true, mock)
  },
  describeImagePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeImagePermissions', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeImagePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeImagePermissions', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeImagePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeImagePermissions', 'AppStream', Promise.reject(result), true, mock)
  },
  describeImages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeImages', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeImagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeImages', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeImagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeImages', 'AppStream', Promise.reject(result), true, mock)
  },
  describeSessions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeSessions', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeSessionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeSessions', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeSessionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeSessions', 'AppStream', Promise.reject(result), true, mock)
  },
  describeStacks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeStacks', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeStacksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeStacks', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeStacksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeStacks', 'AppStream', Promise.reject(result), true, mock)
  },
  describeUsageReportSubscriptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeUsageReportSubscriptions', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeUsageReportSubscriptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeUsageReportSubscriptions', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeUsageReportSubscriptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeUsageReportSubscriptions', 'AppStream', Promise.reject(result), true, mock)
  },
  describeUserStackAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeUserStackAssociations', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeUserStackAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeUserStackAssociations', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeUserStackAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeUserStackAssociations', 'AppStream', Promise.reject(result), true, mock)
  },
  describeUsers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeUsers', 'AppStream', Promise.resolve(result), true, mock)
  },
  describeUsersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeUsers', 'AppStream', Promise.resolve(result), false, mock)
  },
  describeUsersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'describeUsers', 'AppStream', Promise.reject(result), true, mock)
  },
  disableUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'disableUser', 'AppStream', Promise.resolve(result), true, mock)
  },
  disableUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'disableUser', 'AppStream', Promise.resolve(result), false, mock)
  },
  disableUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'disableUser', 'AppStream', Promise.reject(result), true, mock)
  },
  disassociateAppBlockBuilderAppBlock: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'disassociateAppBlockBuilderAppBlock', 'AppStream', Promise.resolve(result), true, mock)
  },
  disassociateAppBlockBuilderAppBlockAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'disassociateAppBlockBuilderAppBlock', 'AppStream', Promise.resolve(result), false, mock)
  },
  disassociateAppBlockBuilderAppBlockThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'disassociateAppBlockBuilderAppBlock', 'AppStream', Promise.reject(result), true, mock)
  },
  disassociateApplicationFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'disassociateApplicationFleet', 'AppStream', Promise.resolve(result), true, mock)
  },
  disassociateApplicationFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'disassociateApplicationFleet', 'AppStream', Promise.resolve(result), false, mock)
  },
  disassociateApplicationFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'disassociateApplicationFleet', 'AppStream', Promise.reject(result), true, mock)
  },
  disassociateApplicationFromEntitlement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'disassociateApplicationFromEntitlement', 'AppStream', Promise.resolve(result), true, mock)
  },
  disassociateApplicationFromEntitlementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'disassociateApplicationFromEntitlement', 'AppStream', Promise.resolve(result), false, mock)
  },
  disassociateApplicationFromEntitlementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'disassociateApplicationFromEntitlement', 'AppStream', Promise.reject(result), true, mock)
  },
  disassociateFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'disassociateFleet', 'AppStream', Promise.resolve(result), true, mock)
  },
  disassociateFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'disassociateFleet', 'AppStream', Promise.resolve(result), false, mock)
  },
  disassociateFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'disassociateFleet', 'AppStream', Promise.reject(result), true, mock)
  },
  enableUser: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'enableUser', 'AppStream', Promise.resolve(result), true, mock)
  },
  enableUserAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'enableUser', 'AppStream', Promise.resolve(result), false, mock)
  },
  enableUserThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'enableUser', 'AppStream', Promise.reject(result), true, mock)
  },
  expireSession: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'expireSession', 'AppStream', Promise.resolve(result), true, mock)
  },
  expireSessionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'expireSession', 'AppStream', Promise.resolve(result), false, mock)
  },
  expireSessionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'expireSession', 'AppStream', Promise.reject(result), true, mock)
  },
  listAssociatedFleets: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'listAssociatedFleets', 'AppStream', Promise.resolve(result), true, mock)
  },
  listAssociatedFleetsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'listAssociatedFleets', 'AppStream', Promise.resolve(result), false, mock)
  },
  listAssociatedFleetsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'listAssociatedFleets', 'AppStream', Promise.reject(result), true, mock)
  },
  listAssociatedStacks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'listAssociatedStacks', 'AppStream', Promise.resolve(result), true, mock)
  },
  listAssociatedStacksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'listAssociatedStacks', 'AppStream', Promise.resolve(result), false, mock)
  },
  listAssociatedStacksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'listAssociatedStacks', 'AppStream', Promise.reject(result), true, mock)
  },
  listEntitledApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'listEntitledApplications', 'AppStream', Promise.resolve(result), true, mock)
  },
  listEntitledApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'listEntitledApplications', 'AppStream', Promise.resolve(result), false, mock)
  },
  listEntitledApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'listEntitledApplications', 'AppStream', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'listTagsForResource', 'AppStream', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'listTagsForResource', 'AppStream', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'listTagsForResource', 'AppStream', Promise.reject(result), true, mock)
  },
  startAppBlockBuilder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'startAppBlockBuilder', 'AppStream', Promise.resolve(result), true, mock)
  },
  startAppBlockBuilderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'startAppBlockBuilder', 'AppStream', Promise.resolve(result), false, mock)
  },
  startAppBlockBuilderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'startAppBlockBuilder', 'AppStream', Promise.reject(result), true, mock)
  },
  startFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'startFleet', 'AppStream', Promise.resolve(result), true, mock)
  },
  startFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'startFleet', 'AppStream', Promise.resolve(result), false, mock)
  },
  startFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'startFleet', 'AppStream', Promise.reject(result), true, mock)
  },
  startImageBuilder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'startImageBuilder', 'AppStream', Promise.resolve(result), true, mock)
  },
  startImageBuilderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'startImageBuilder', 'AppStream', Promise.resolve(result), false, mock)
  },
  startImageBuilderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'startImageBuilder', 'AppStream', Promise.reject(result), true, mock)
  },
  stopAppBlockBuilder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'stopAppBlockBuilder', 'AppStream', Promise.resolve(result), true, mock)
  },
  stopAppBlockBuilderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'stopAppBlockBuilder', 'AppStream', Promise.resolve(result), false, mock)
  },
  stopAppBlockBuilderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'stopAppBlockBuilder', 'AppStream', Promise.reject(result), true, mock)
  },
  stopFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'stopFleet', 'AppStream', Promise.resolve(result), true, mock)
  },
  stopFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'stopFleet', 'AppStream', Promise.resolve(result), false, mock)
  },
  stopFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'stopFleet', 'AppStream', Promise.reject(result), true, mock)
  },
  stopImageBuilder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'stopImageBuilder', 'AppStream', Promise.resolve(result), true, mock)
  },
  stopImageBuilderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'stopImageBuilder', 'AppStream', Promise.resolve(result), false, mock)
  },
  stopImageBuilderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'stopImageBuilder', 'AppStream', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'tagResource', 'AppStream', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'tagResource', 'AppStream', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'tagResource', 'AppStream', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'untagResource', 'AppStream', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'untagResource', 'AppStream', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'untagResource', 'AppStream', Promise.reject(result), true, mock)
  },
  updateAppBlockBuilder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'updateAppBlockBuilder', 'AppStream', Promise.resolve(result), true, mock)
  },
  updateAppBlockBuilderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'updateAppBlockBuilder', 'AppStream', Promise.resolve(result), false, mock)
  },
  updateAppBlockBuilderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'updateAppBlockBuilder', 'AppStream', Promise.reject(result), true, mock)
  },
  updateApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'updateApplication', 'AppStream', Promise.resolve(result), true, mock)
  },
  updateApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'updateApplication', 'AppStream', Promise.resolve(result), false, mock)
  },
  updateApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'updateApplication', 'AppStream', Promise.reject(result), true, mock)
  },
  updateDirectoryConfig: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'updateDirectoryConfig', 'AppStream', Promise.resolve(result), true, mock)
  },
  updateDirectoryConfigAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'updateDirectoryConfig', 'AppStream', Promise.resolve(result), false, mock)
  },
  updateDirectoryConfigThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'updateDirectoryConfig', 'AppStream', Promise.reject(result), true, mock)
  },
  updateEntitlement: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'updateEntitlement', 'AppStream', Promise.resolve(result), true, mock)
  },
  updateEntitlementAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'updateEntitlement', 'AppStream', Promise.resolve(result), false, mock)
  },
  updateEntitlementThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'updateEntitlement', 'AppStream', Promise.reject(result), true, mock)
  },
  updateFleet: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'updateFleet', 'AppStream', Promise.resolve(result), true, mock)
  },
  updateFleetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'updateFleet', 'AppStream', Promise.resolve(result), false, mock)
  },
  updateFleetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'updateFleet', 'AppStream', Promise.reject(result), true, mock)
  },
  updateImagePermissions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'updateImagePermissions', 'AppStream', Promise.resolve(result), true, mock)
  },
  updateImagePermissionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'updateImagePermissions', 'AppStream', Promise.resolve(result), false, mock)
  },
  updateImagePermissionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'updateImagePermissions', 'AppStream', Promise.reject(result), true, mock)
  },
  updateStack: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'updateStack', 'AppStream', Promise.resolve(result), true, mock)
  },
  updateStackAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'updateStack', 'AppStream', Promise.resolve(result), false, mock)
  },
  updateStackThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'updateStack', 'AppStream', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'send', 'AppStreamClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'send', 'AppStreamClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-appstream', 'send', 'AppStreamClient', Promise.reject(result), true, mock)
  }
}
