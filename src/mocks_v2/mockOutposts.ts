
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
  export const mockOutposts = {
  createOrder: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOrder', 'Outposts', Promise.resolve(result), true, mock)
  },
  createOrderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOrder', 'Outposts', Promise.resolve(result), false, mock)
  },
  createOrderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOrder', 'Outposts', Promise.reject(result), true, mock)
  },
  createOutpost: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOutpost', 'Outposts', Promise.resolve(result), true, mock)
  },
  createOutpostAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOutpost', 'Outposts', Promise.resolve(result), false, mock)
  },
  createOutpostThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createOutpost', 'Outposts', Promise.reject(result), true, mock)
  },
  deleteOutpost: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOutpost', 'Outposts', Promise.resolve(result), true, mock)
  },
  deleteOutpostAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOutpost', 'Outposts', Promise.resolve(result), false, mock)
  },
  deleteOutpostThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteOutpost', 'Outposts', Promise.reject(result), true, mock)
  },
  deleteSite: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSite', 'Outposts', Promise.resolve(result), true, mock)
  },
  deleteSiteAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSite', 'Outposts', Promise.resolve(result), false, mock)
  },
  deleteSiteThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteSite', 'Outposts', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Outposts', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Outposts', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'Outposts', Promise.reject(result), true, mock)
  },
  getOutpost: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOutpost', 'Outposts', Promise.resolve(result), true, mock)
  },
  getOutpostAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOutpost', 'Outposts', Promise.resolve(result), false, mock)
  },
  getOutpostThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOutpost', 'Outposts', Promise.reject(result), true, mock)
  },
  getOutpostInstanceTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOutpostInstanceTypes', 'Outposts', Promise.resolve(result), true, mock)
  },
  getOutpostInstanceTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOutpostInstanceTypes', 'Outposts', Promise.resolve(result), false, mock)
  },
  getOutpostInstanceTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getOutpostInstanceTypes', 'Outposts', Promise.reject(result), true, mock)
  },
  listOutposts: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOutposts', 'Outposts', Promise.resolve(result), true, mock)
  },
  listOutpostsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOutposts', 'Outposts', Promise.resolve(result), false, mock)
  },
  listOutpostsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listOutposts', 'Outposts', Promise.reject(result), true, mock)
  },
  listSites: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSites', 'Outposts', Promise.resolve(result), true, mock)
  },
  listSitesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSites', 'Outposts', Promise.resolve(result), false, mock)
  },
  listSitesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listSites', 'Outposts', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Outposts', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Outposts', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'Outposts', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Outposts', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Outposts', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'Outposts', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Outposts', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Outposts', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'Outposts', Promise.reject(result), true, mock)
  },
}
