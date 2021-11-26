
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
  export const mockAppIntegrations = {
  createDataIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataIntegration', 'AppIntegrations', Promise.resolve(result), true, mock)
  },
  createDataIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataIntegration', 'AppIntegrations', Promise.resolve(result), false, mock)
  },
  createDataIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDataIntegration', 'AppIntegrations', Promise.reject(result), true, mock)
  },
  createEventIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEventIntegration', 'AppIntegrations', Promise.resolve(result), true, mock)
  },
  createEventIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEventIntegration', 'AppIntegrations', Promise.resolve(result), false, mock)
  },
  createEventIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createEventIntegration', 'AppIntegrations', Promise.reject(result), true, mock)
  },
  deleteDataIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataIntegration', 'AppIntegrations', Promise.resolve(result), true, mock)
  },
  deleteDataIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataIntegration', 'AppIntegrations', Promise.resolve(result), false, mock)
  },
  deleteDataIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDataIntegration', 'AppIntegrations', Promise.reject(result), true, mock)
  },
  deleteEventIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEventIntegration', 'AppIntegrations', Promise.resolve(result), true, mock)
  },
  deleteEventIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEventIntegration', 'AppIntegrations', Promise.resolve(result), false, mock)
  },
  deleteEventIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteEventIntegration', 'AppIntegrations', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AppIntegrations', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AppIntegrations', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'AppIntegrations', Promise.reject(result), true, mock)
  },
  getDataIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataIntegration', 'AppIntegrations', Promise.resolve(result), true, mock)
  },
  getDataIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataIntegration', 'AppIntegrations', Promise.resolve(result), false, mock)
  },
  getDataIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDataIntegration', 'AppIntegrations', Promise.reject(result), true, mock)
  },
  getEventIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEventIntegration', 'AppIntegrations', Promise.resolve(result), true, mock)
  },
  getEventIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEventIntegration', 'AppIntegrations', Promise.resolve(result), false, mock)
  },
  getEventIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getEventIntegration', 'AppIntegrations', Promise.reject(result), true, mock)
  },
  listDataIntegrationAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataIntegrationAssociations', 'AppIntegrations', Promise.resolve(result), true, mock)
  },
  listDataIntegrationAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataIntegrationAssociations', 'AppIntegrations', Promise.resolve(result), false, mock)
  },
  listDataIntegrationAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataIntegrationAssociations', 'AppIntegrations', Promise.reject(result), true, mock)
  },
  listDataIntegrations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataIntegrations', 'AppIntegrations', Promise.resolve(result), true, mock)
  },
  listDataIntegrationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataIntegrations', 'AppIntegrations', Promise.resolve(result), false, mock)
  },
  listDataIntegrationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDataIntegrations', 'AppIntegrations', Promise.reject(result), true, mock)
  },
  listEventIntegrationAssociations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEventIntegrationAssociations', 'AppIntegrations', Promise.resolve(result), true, mock)
  },
  listEventIntegrationAssociationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEventIntegrationAssociations', 'AppIntegrations', Promise.resolve(result), false, mock)
  },
  listEventIntegrationAssociationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEventIntegrationAssociations', 'AppIntegrations', Promise.reject(result), true, mock)
  },
  listEventIntegrations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEventIntegrations', 'AppIntegrations', Promise.resolve(result), true, mock)
  },
  listEventIntegrationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEventIntegrations', 'AppIntegrations', Promise.resolve(result), false, mock)
  },
  listEventIntegrationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listEventIntegrations', 'AppIntegrations', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'AppIntegrations', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'AppIntegrations', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'AppIntegrations', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'AppIntegrations', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'AppIntegrations', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'AppIntegrations', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'AppIntegrations', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'AppIntegrations', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'AppIntegrations', Promise.reject(result), true, mock)
  },
  updateDataIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDataIntegration', 'AppIntegrations', Promise.resolve(result), true, mock)
  },
  updateDataIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDataIntegration', 'AppIntegrations', Promise.resolve(result), false, mock)
  },
  updateDataIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDataIntegration', 'AppIntegrations', Promise.reject(result), true, mock)
  },
  updateEventIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEventIntegration', 'AppIntegrations', Promise.resolve(result), true, mock)
  },
  updateEventIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEventIntegration', 'AppIntegrations', Promise.resolve(result), false, mock)
  },
  updateEventIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateEventIntegration', 'AppIntegrations', Promise.reject(result), true, mock)
  },
}
