
/**
* @description mocks_v3:mockKinesisAnalytics module is mocks for AWS-SDK V3
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

  export const mockKinesisAnalytics = {
  addApplicationCloudWatchLoggingOption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'addApplicationCloudWatchLoggingOption', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  addApplicationCloudWatchLoggingOptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'addApplicationCloudWatchLoggingOption', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  addApplicationCloudWatchLoggingOptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'addApplicationCloudWatchLoggingOption', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  addApplicationInput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'addApplicationInput', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  addApplicationInputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'addApplicationInput', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  addApplicationInputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'addApplicationInput', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  addApplicationInputProcessingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'addApplicationInputProcessingConfiguration', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  addApplicationInputProcessingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'addApplicationInputProcessingConfiguration', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  addApplicationInputProcessingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'addApplicationInputProcessingConfiguration', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  addApplicationOutput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'addApplicationOutput', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  addApplicationOutputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'addApplicationOutput', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  addApplicationOutputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'addApplicationOutput', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  addApplicationReferenceDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'addApplicationReferenceDataSource', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  addApplicationReferenceDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'addApplicationReferenceDataSource', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  addApplicationReferenceDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'addApplicationReferenceDataSource', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  createApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'createApplication', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  createApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'createApplication', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  createApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'createApplication', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  deleteApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'deleteApplication', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  deleteApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'deleteApplication', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  deleteApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'deleteApplication', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  deleteApplicationCloudWatchLoggingOption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'deleteApplicationCloudWatchLoggingOption', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  deleteApplicationCloudWatchLoggingOptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'deleteApplicationCloudWatchLoggingOption', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  deleteApplicationCloudWatchLoggingOptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'deleteApplicationCloudWatchLoggingOption', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  deleteApplicationInputProcessingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'deleteApplicationInputProcessingConfiguration', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  deleteApplicationInputProcessingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'deleteApplicationInputProcessingConfiguration', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  deleteApplicationInputProcessingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'deleteApplicationInputProcessingConfiguration', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  deleteApplicationOutput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'deleteApplicationOutput', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  deleteApplicationOutputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'deleteApplicationOutput', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  deleteApplicationOutputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'deleteApplicationOutput', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  deleteApplicationReferenceDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'deleteApplicationReferenceDataSource', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  deleteApplicationReferenceDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'deleteApplicationReferenceDataSource', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  deleteApplicationReferenceDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'deleteApplicationReferenceDataSource', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  describeApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'describeApplication', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  describeApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'describeApplication', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  describeApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'describeApplication', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'destroy', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'destroy', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'destroy', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  discoverInputSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'discoverInputSchema', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  discoverInputSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'discoverInputSchema', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  discoverInputSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'discoverInputSchema', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  listApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'listApplications', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  listApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'listApplications', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  listApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'listApplications', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'listTagsForResource', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'listTagsForResource', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'listTagsForResource', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  startApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'startApplication', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  startApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'startApplication', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  startApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'startApplication', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  stopApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'stopApplication', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  stopApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'stopApplication', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  stopApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'stopApplication', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'tagResource', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'tagResource', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'tagResource', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'untagResource', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'untagResource', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'untagResource', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  updateApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'updateApplication', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  updateApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'updateApplication', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  updateApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'updateApplication', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'send', 'KinesisAnalyticsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'send', 'KinesisAnalyticsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-kinesis-analytics', 'send', 'KinesisAnalyticsClient', Promise.reject(result), true, mock)
  }
}