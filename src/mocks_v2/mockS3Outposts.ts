
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
  export const mockS3Outposts = {
  createEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEndpoint', 'S3Outposts', Promise.resolve(result), true, mock)
  },
  createEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEndpoint', 'S3Outposts', Promise.resolve(result), false, mock)
  },
  createEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEndpoint', 'S3Outposts', Promise.reject(result), true, mock)
  },
  deleteEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEndpoint', 'S3Outposts', Promise.resolve(result), true, mock)
  },
  deleteEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEndpoint', 'S3Outposts', Promise.resolve(result), false, mock)
  },
  deleteEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEndpoint', 'S3Outposts', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'S3Outposts', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'S3Outposts', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'S3Outposts', Promise.reject(result), true, mock)
  },
  listEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEndpoints', 'S3Outposts', Promise.resolve(result), true, mock)
  },
  listEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEndpoints', 'S3Outposts', Promise.resolve(result), false, mock)
  },
  listEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEndpoints', 'S3Outposts', Promise.reject(result), true, mock)
  },
}
