
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
  export const mockCodeStarConnections = {
  createConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnection', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  createConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnection', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  createConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createConnection', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  createHost: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHost', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  createHostAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHost', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  createHostThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createHost', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  deleteConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnection', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  deleteConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnection', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  deleteConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteConnection', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  deleteHost: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHost', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  deleteHostAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHost', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  deleteHostThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteHost', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  getConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnection', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  getConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnection', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  getConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getConnection', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  getHost: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getHost', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  getHostAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getHost', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  getHostThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getHost', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  listConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConnections', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  listConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConnections', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  listConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listConnections', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  listHosts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHosts', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  listHostsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHosts', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  listHostsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listHosts', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
  updateHost: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateHost', 'CodeStarConnections', Promise.resolve(result), true, mock)
  },
  updateHostAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateHost', 'CodeStarConnections', Promise.resolve(result), false, mock)
  },
  updateHostThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateHost', 'CodeStarConnections', Promise.reject(result), true, mock)
  },
}
