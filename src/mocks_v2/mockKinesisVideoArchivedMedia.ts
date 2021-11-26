
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
  export const mockKinesisVideoArchivedMedia = {
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KinesisVideoArchivedMedia', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KinesisVideoArchivedMedia', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'KinesisVideoArchivedMedia', Promise.reject(result), true, mock)
  },
  getClip: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClip', 'KinesisVideoArchivedMedia', Promise.resolve(result), true, mock)
  },
  getClipAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClip', 'KinesisVideoArchivedMedia', Promise.resolve(result), false, mock)
  },
  getClipThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getClip', 'KinesisVideoArchivedMedia', Promise.reject(result), true, mock)
  },
  getDASHStreamingSessionURL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDASHStreamingSessionURL', 'KinesisVideoArchivedMedia', Promise.resolve(result), true, mock)
  },
  getDASHStreamingSessionURLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDASHStreamingSessionURL', 'KinesisVideoArchivedMedia', Promise.resolve(result), false, mock)
  },
  getDASHStreamingSessionURLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDASHStreamingSessionURL', 'KinesisVideoArchivedMedia', Promise.reject(result), true, mock)
  },
  getHLSStreamingSessionURL: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getHLSStreamingSessionURL', 'KinesisVideoArchivedMedia', Promise.resolve(result), true, mock)
  },
  getHLSStreamingSessionURLAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getHLSStreamingSessionURL', 'KinesisVideoArchivedMedia', Promise.resolve(result), false, mock)
  },
  getHLSStreamingSessionURLThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getHLSStreamingSessionURL', 'KinesisVideoArchivedMedia', Promise.reject(result), true, mock)
  },
  getMediaForFragmentList: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMediaForFragmentList', 'KinesisVideoArchivedMedia', Promise.resolve(result), true, mock)
  },
  getMediaForFragmentListAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMediaForFragmentList', 'KinesisVideoArchivedMedia', Promise.resolve(result), false, mock)
  },
  getMediaForFragmentListThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMediaForFragmentList', 'KinesisVideoArchivedMedia', Promise.reject(result), true, mock)
  },
  listFragments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFragments', 'KinesisVideoArchivedMedia', Promise.resolve(result), true, mock)
  },
  listFragmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFragments', 'KinesisVideoArchivedMedia', Promise.resolve(result), false, mock)
  },
  listFragmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listFragments', 'KinesisVideoArchivedMedia', Promise.reject(result), true, mock)
  },
}
