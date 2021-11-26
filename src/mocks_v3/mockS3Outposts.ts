
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockS3Outposts = {
  createEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3outposts', 'createEndpoint', 'S3Outposts', Promise.resolve(result), true, mock)
  },
  createEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3outposts', 'createEndpoint', 'S3Outposts', Promise.resolve(result), false, mock)
  },
  createEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3outposts', 'createEndpoint', 'S3Outposts', Promise.reject(result), true, mock)
  },
  deleteEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3outposts', 'deleteEndpoint', 'S3Outposts', Promise.resolve(result), true, mock)
  },
  deleteEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3outposts', 'deleteEndpoint', 'S3Outposts', Promise.resolve(result), false, mock)
  },
  deleteEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3outposts', 'deleteEndpoint', 'S3Outposts', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3outposts', 'destroy', 'S3Outposts', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3outposts', 'destroy', 'S3Outposts', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3outposts', 'destroy', 'S3Outposts', Promise.reject(result), true, mock)
  },
  listEndpoints: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3outposts', 'listEndpoints', 'S3Outposts', Promise.resolve(result), true, mock)
  },
  listEndpointsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3outposts', 'listEndpoints', 'S3Outposts', Promise.resolve(result), false, mock)
  },
  listEndpointsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3outposts', 'listEndpoints', 'S3Outposts', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3outposts', 'send', 'S3OutpostsClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3outposts', 'send', 'S3OutpostsClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-s3outposts', 'send', 'S3OutpostsClient', Promise.reject(result), true, mock)
  }
}