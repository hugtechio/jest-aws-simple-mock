
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
  export const mockKinesisAnalytics = {
  addApplicationCloudWatchLoggingOption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationCloudWatchLoggingOption', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  addApplicationCloudWatchLoggingOptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationCloudWatchLoggingOption', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  addApplicationCloudWatchLoggingOptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationCloudWatchLoggingOption', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  addApplicationInput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationInput', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  addApplicationInputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationInput', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  addApplicationInputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationInput', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  addApplicationInputProcessingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationInputProcessingConfiguration', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  addApplicationInputProcessingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationInputProcessingConfiguration', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  addApplicationInputProcessingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationInputProcessingConfiguration', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  addApplicationOutput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationOutput', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  addApplicationOutputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationOutput', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  addApplicationOutputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationOutput', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  addApplicationReferenceDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationReferenceDataSource', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  addApplicationReferenceDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationReferenceDataSource', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  addApplicationReferenceDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addApplicationReferenceDataSource', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  createApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplication', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  createApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplication', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  createApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createApplication', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  deleteApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplication', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  deleteApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplication', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  deleteApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplication', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  deleteApplicationCloudWatchLoggingOption: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationCloudWatchLoggingOption', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  deleteApplicationCloudWatchLoggingOptionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationCloudWatchLoggingOption', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  deleteApplicationCloudWatchLoggingOptionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationCloudWatchLoggingOption', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  deleteApplicationInputProcessingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationInputProcessingConfiguration', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  deleteApplicationInputProcessingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationInputProcessingConfiguration', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  deleteApplicationInputProcessingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationInputProcessingConfiguration', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  deleteApplicationOutput: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationOutput', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  deleteApplicationOutputAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationOutput', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  deleteApplicationOutputThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationOutput', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  deleteApplicationReferenceDataSource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationReferenceDataSource', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  deleteApplicationReferenceDataSourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationReferenceDataSource', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  deleteApplicationReferenceDataSourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteApplicationReferenceDataSource', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  describeApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplication', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  describeApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplication', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  describeApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeApplication', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  discoverInputSchema: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('discoverInputSchema', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  discoverInputSchemaAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('discoverInputSchema', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  discoverInputSchemaThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('discoverInputSchema', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  listApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplications', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  listApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplications', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  listApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listApplications', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  startApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startApplication', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  startApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startApplication', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  startApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('startApplication', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  stopApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopApplication', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  stopApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopApplication', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  stopApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('stopApplication', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
  updateApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplication', 'KinesisAnalytics', Promise.resolve(result), true, mock)
  },
  updateApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplication', 'KinesisAnalytics', Promise.resolve(result), false, mock)
  },
  updateApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateApplication', 'KinesisAnalytics', Promise.reject(result), true, mock)
  },
}
