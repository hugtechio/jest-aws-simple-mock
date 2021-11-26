
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
  export const mockMediaPackage = {
  configureLogs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('configureLogs', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  configureLogsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('configureLogs', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  configureLogsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('configureLogs', 'MediaPackage', Promise.reject(result), true, mock)
  },
  createChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannel', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  createChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannel', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  createChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createChannel', 'MediaPackage', Promise.reject(result), true, mock)
  },
  createHarvestJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHarvestJob', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  createHarvestJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHarvestJob', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  createHarvestJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHarvestJob', 'MediaPackage', Promise.reject(result), true, mock)
  },
  createOriginEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOriginEndpoint', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  createOriginEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOriginEndpoint', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  createOriginEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOriginEndpoint', 'MediaPackage', Promise.reject(result), true, mock)
  },
  deleteChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannel', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  deleteChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannel', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  deleteChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteChannel', 'MediaPackage', Promise.reject(result), true, mock)
  },
  deleteOriginEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOriginEndpoint', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  deleteOriginEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOriginEndpoint', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  deleteOriginEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOriginEndpoint', 'MediaPackage', Promise.reject(result), true, mock)
  },
  describeChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannel', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  describeChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannel', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  describeChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeChannel', 'MediaPackage', Promise.reject(result), true, mock)
  },
  describeHarvestJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHarvestJob', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  describeHarvestJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHarvestJob', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  describeHarvestJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeHarvestJob', 'MediaPackage', Promise.reject(result), true, mock)
  },
  describeOriginEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOriginEndpoint', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  describeOriginEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOriginEndpoint', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  describeOriginEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('describeOriginEndpoint', 'MediaPackage', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'MediaPackage', Promise.reject(result), true, mock)
  },
  listChannels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannels', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  listChannelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannels', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  listChannelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listChannels', 'MediaPackage', Promise.reject(result), true, mock)
  },
  listHarvestJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHarvestJobs', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  listHarvestJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHarvestJobs', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  listHarvestJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHarvestJobs', 'MediaPackage', Promise.reject(result), true, mock)
  },
  listOriginEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOriginEndpoints', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  listOriginEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOriginEndpoints', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  listOriginEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOriginEndpoints', 'MediaPackage', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'MediaPackage', Promise.reject(result), true, mock)
  },
  rotateChannelCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rotateChannelCredentials', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  rotateChannelCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rotateChannelCredentials', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  rotateChannelCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rotateChannelCredentials', 'MediaPackage', Promise.reject(result), true, mock)
  },
  rotateIngestEndpointCredentials: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rotateIngestEndpointCredentials', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  rotateIngestEndpointCredentialsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rotateIngestEndpointCredentials', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  rotateIngestEndpointCredentialsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('rotateIngestEndpointCredentials', 'MediaPackage', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'MediaPackage', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'MediaPackage', Promise.reject(result), true, mock)
  },
  updateChannel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannel', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  updateChannelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannel', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  updateChannelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateChannel', 'MediaPackage', Promise.reject(result), true, mock)
  },
  updateOriginEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOriginEndpoint', 'MediaPackage', Promise.resolve(result), true, mock)
  },
  updateOriginEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOriginEndpoint', 'MediaPackage', Promise.resolve(result), false, mock)
  },
  updateOriginEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateOriginEndpoint', 'MediaPackage', Promise.reject(result), true, mock)
  },
}
