
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
  export const mockKinesisAnalyticsV2 = {
  addApplicationCloudWatchLoggingOption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationCloudWatchLoggingOption', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  addApplicationCloudWatchLoggingOptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationCloudWatchLoggingOption', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  addApplicationCloudWatchLoggingOptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationCloudWatchLoggingOption', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  addApplicationInput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationInput', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  addApplicationInputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationInput', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  addApplicationInputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationInput', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  addApplicationInputProcessingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationInputProcessingConfiguration', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  addApplicationInputProcessingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationInputProcessingConfiguration', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  addApplicationInputProcessingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationInputProcessingConfiguration', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  addApplicationOutput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationOutput', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  addApplicationOutputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationOutput', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  addApplicationOutputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationOutput', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  addApplicationReferenceDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationReferenceDataSource', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  addApplicationReferenceDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationReferenceDataSource', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  addApplicationReferenceDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationReferenceDataSource', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  addApplicationVpcConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationVpcConfiguration', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  addApplicationVpcConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationVpcConfiguration', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  addApplicationVpcConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationVpcConfiguration', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  createApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplication', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  createApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplication', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  createApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplication', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  createApplicationPresignedUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplicationPresignedUrl', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  createApplicationPresignedUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplicationPresignedUrl', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  createApplicationPresignedUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplicationPresignedUrl', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  createApplicationSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplicationSnapshot', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  createApplicationSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplicationSnapshot', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  createApplicationSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplicationSnapshot', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  deleteApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplication', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  deleteApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplication', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  deleteApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplication', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  deleteApplicationCloudWatchLoggingOption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationCloudWatchLoggingOption', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  deleteApplicationCloudWatchLoggingOptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationCloudWatchLoggingOption', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  deleteApplicationCloudWatchLoggingOptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationCloudWatchLoggingOption', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  deleteApplicationInputProcessingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationInputProcessingConfiguration', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  deleteApplicationInputProcessingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationInputProcessingConfiguration', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  deleteApplicationInputProcessingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationInputProcessingConfiguration', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  deleteApplicationOutput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationOutput', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  deleteApplicationOutputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationOutput', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  deleteApplicationOutputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationOutput', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  deleteApplicationReferenceDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationReferenceDataSource', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  deleteApplicationReferenceDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationReferenceDataSource', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  deleteApplicationReferenceDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationReferenceDataSource', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  deleteApplicationSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationSnapshot', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  deleteApplicationSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationSnapshot', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  deleteApplicationSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationSnapshot', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  deleteApplicationVpcConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationVpcConfiguration', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  deleteApplicationVpcConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationVpcConfiguration', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  deleteApplicationVpcConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationVpcConfiguration', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  describeApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplication', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  describeApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplication', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  describeApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplication', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  describeApplicationSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplicationSnapshot', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  describeApplicationSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplicationSnapshot', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  describeApplicationSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplicationSnapshot', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  describeApplicationVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplicationVersion', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  describeApplicationVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplicationVersion', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  describeApplicationVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplicationVersion', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  discoverInputSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('discoverInputSchema', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  discoverInputSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('discoverInputSchema', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  discoverInputSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('discoverInputSchema', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  listApplicationSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationSnapshots', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  listApplicationSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationSnapshots', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  listApplicationSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationSnapshots', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  listApplicationVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationVersions', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  listApplicationVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationVersions', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  listApplicationVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplicationVersions', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  listApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplications', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  listApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplications', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  listApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplications', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  rollbackApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rollbackApplication', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  rollbackApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rollbackApplication', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  rollbackApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rollbackApplication', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  startApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startApplication', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  startApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startApplication', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  startApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startApplication', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  stopApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopApplication', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  stopApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopApplication', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  stopApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopApplication', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  updateApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplication', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  updateApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplication', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  updateApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplication', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  updateApplicationMaintenanceConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplicationMaintenanceConfiguration', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  updateApplicationMaintenanceConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplicationMaintenanceConfiguration', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  updateApplicationMaintenanceConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplicationMaintenanceConfiguration', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
}
