
/**
* @description mocks_v3:mockKinesisAnalyticsV2 module is mocks for AWS-SDK V3
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

  export const mockKinesisAnalyticsV2 = {
  addApplicationCloudWatchLoggingOption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'addApplicationCloudWatchLoggingOption', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  addApplicationCloudWatchLoggingOptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'addApplicationCloudWatchLoggingOption', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  addApplicationCloudWatchLoggingOptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'addApplicationCloudWatchLoggingOption', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  addApplicationInput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'addApplicationInput', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  addApplicationInputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'addApplicationInput', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  addApplicationInputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'addApplicationInput', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  addApplicationInputProcessingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'addApplicationInputProcessingConfiguration', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  addApplicationInputProcessingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'addApplicationInputProcessingConfiguration', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  addApplicationInputProcessingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'addApplicationInputProcessingConfiguration', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  addApplicationOutput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'addApplicationOutput', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  addApplicationOutputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'addApplicationOutput', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  addApplicationOutputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'addApplicationOutput', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  addApplicationReferenceDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'addApplicationReferenceDataSource', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  addApplicationReferenceDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'addApplicationReferenceDataSource', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  addApplicationReferenceDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'addApplicationReferenceDataSource', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  addApplicationVpcConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'addApplicationVpcConfiguration', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  addApplicationVpcConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'addApplicationVpcConfiguration', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  addApplicationVpcConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'addApplicationVpcConfiguration', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  createApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'createApplication', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  createApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'createApplication', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  createApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'createApplication', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  createApplicationPresignedUrl: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'createApplicationPresignedUrl', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  createApplicationPresignedUrlAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'createApplicationPresignedUrl', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  createApplicationPresignedUrlThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'createApplicationPresignedUrl', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  createApplicationSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'createApplicationSnapshot', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  createApplicationSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'createApplicationSnapshot', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  createApplicationSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'createApplicationSnapshot', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  deleteApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'deleteApplication', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  deleteApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'deleteApplication', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  deleteApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'deleteApplication', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  deleteApplicationCloudWatchLoggingOption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'deleteApplicationCloudWatchLoggingOption', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  deleteApplicationCloudWatchLoggingOptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'deleteApplicationCloudWatchLoggingOption', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  deleteApplicationCloudWatchLoggingOptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'deleteApplicationCloudWatchLoggingOption', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  deleteApplicationInputProcessingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'deleteApplicationInputProcessingConfiguration', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  deleteApplicationInputProcessingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'deleteApplicationInputProcessingConfiguration', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  deleteApplicationInputProcessingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'deleteApplicationInputProcessingConfiguration', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  deleteApplicationOutput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'deleteApplicationOutput', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  deleteApplicationOutputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'deleteApplicationOutput', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  deleteApplicationOutputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'deleteApplicationOutput', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  deleteApplicationReferenceDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'deleteApplicationReferenceDataSource', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  deleteApplicationReferenceDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'deleteApplicationReferenceDataSource', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  deleteApplicationReferenceDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'deleteApplicationReferenceDataSource', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  deleteApplicationSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'deleteApplicationSnapshot', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  deleteApplicationSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'deleteApplicationSnapshot', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  deleteApplicationSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'deleteApplicationSnapshot', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  deleteApplicationVpcConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'deleteApplicationVpcConfiguration', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  deleteApplicationVpcConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'deleteApplicationVpcConfiguration', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  deleteApplicationVpcConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'deleteApplicationVpcConfiguration', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  describeApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'describeApplication', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  describeApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'describeApplication', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  describeApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'describeApplication', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  describeApplicationSnapshot: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'describeApplicationSnapshot', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  describeApplicationSnapshotAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'describeApplicationSnapshot', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  describeApplicationSnapshotThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'describeApplicationSnapshot', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  describeApplicationVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'describeApplicationVersion', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  describeApplicationVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'describeApplicationVersion', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  describeApplicationVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'describeApplicationVersion', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'destroy', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'destroy', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'destroy', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  discoverInputSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'discoverInputSchema', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  discoverInputSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'discoverInputSchema', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  discoverInputSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'discoverInputSchema', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  listApplicationSnapshots: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'listApplicationSnapshots', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  listApplicationSnapshotsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'listApplicationSnapshots', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  listApplicationSnapshotsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'listApplicationSnapshots', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  listApplicationVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'listApplicationVersions', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  listApplicationVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'listApplicationVersions', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  listApplicationVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'listApplicationVersions', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  listApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'listApplications', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  listApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'listApplications', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  listApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'listApplications', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'listTagsForResource', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'listTagsForResource', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'listTagsForResource', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  rollbackApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'rollbackApplication', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  rollbackApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'rollbackApplication', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  rollbackApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'rollbackApplication', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  startApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'startApplication', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  startApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'startApplication', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  startApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'startApplication', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  stopApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'stopApplication', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  stopApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'stopApplication', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  stopApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'stopApplication', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'tagResource', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'tagResource', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'tagResource', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'untagResource', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'untagResource', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'untagResource', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  updateApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'updateApplication', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  updateApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'updateApplication', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  updateApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'updateApplication', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  updateApplicationMaintenanceConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'updateApplicationMaintenanceConfiguration', 'KinesisAnalyticsV2', Promise.resolve(result), true, mock)
  },
  updateApplicationMaintenanceConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'updateApplicationMaintenanceConfiguration', 'KinesisAnalyticsV2', Promise.resolve(result), false, mock)
  },
  updateApplicationMaintenanceConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'updateApplicationMaintenanceConfiguration', 'KinesisAnalyticsV2', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'send', 'KinesisAnalyticsV2Client', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'send', 'KinesisAnalyticsV2Client', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics-v2', 'send', 'KinesisAnalyticsV2Client', Promise.reject(result), true, mock)
  }
}