
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockServiceCatalogAppRegistry = {
  associateAttributeGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'associateAttributeGroup', 'ServiceCatalogAppRegistry', Promise.resolve(result), true, mock)
  },
  associateAttributeGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'associateAttributeGroup', 'ServiceCatalogAppRegistry', Promise.resolve(result), false, mock)
  },
  associateAttributeGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'associateAttributeGroup', 'ServiceCatalogAppRegistry', Promise.reject(result), true, mock)
  },
  associateResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'associateResource', 'ServiceCatalogAppRegistry', Promise.resolve(result), true, mock)
  },
  associateResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'associateResource', 'ServiceCatalogAppRegistry', Promise.resolve(result), false, mock)
  },
  associateResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'associateResource', 'ServiceCatalogAppRegistry', Promise.reject(result), true, mock)
  },
  createApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'createApplication', 'ServiceCatalogAppRegistry', Promise.resolve(result), true, mock)
  },
  createApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'createApplication', 'ServiceCatalogAppRegistry', Promise.resolve(result), false, mock)
  },
  createApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'createApplication', 'ServiceCatalogAppRegistry', Promise.reject(result), true, mock)
  },
  createAttributeGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'createAttributeGroup', 'ServiceCatalogAppRegistry', Promise.resolve(result), true, mock)
  },
  createAttributeGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'createAttributeGroup', 'ServiceCatalogAppRegistry', Promise.resolve(result), false, mock)
  },
  createAttributeGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'createAttributeGroup', 'ServiceCatalogAppRegistry', Promise.reject(result), true, mock)
  },
  deleteApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'deleteApplication', 'ServiceCatalogAppRegistry', Promise.resolve(result), true, mock)
  },
  deleteApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'deleteApplication', 'ServiceCatalogAppRegistry', Promise.resolve(result), false, mock)
  },
  deleteApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'deleteApplication', 'ServiceCatalogAppRegistry', Promise.reject(result), true, mock)
  },
  deleteAttributeGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'deleteAttributeGroup', 'ServiceCatalogAppRegistry', Promise.resolve(result), true, mock)
  },
  deleteAttributeGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'deleteAttributeGroup', 'ServiceCatalogAppRegistry', Promise.resolve(result), false, mock)
  },
  deleteAttributeGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'deleteAttributeGroup', 'ServiceCatalogAppRegistry', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'destroy', 'ServiceCatalogAppRegistry', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'destroy', 'ServiceCatalogAppRegistry', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'destroy', 'ServiceCatalogAppRegistry', Promise.reject(result), true, mock)
  },
  disassociateAttributeGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'disassociateAttributeGroup', 'ServiceCatalogAppRegistry', Promise.resolve(result), true, mock)
  },
  disassociateAttributeGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'disassociateAttributeGroup', 'ServiceCatalogAppRegistry', Promise.resolve(result), false, mock)
  },
  disassociateAttributeGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'disassociateAttributeGroup', 'ServiceCatalogAppRegistry', Promise.reject(result), true, mock)
  },
  disassociateResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'disassociateResource', 'ServiceCatalogAppRegistry', Promise.resolve(result), true, mock)
  },
  disassociateResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'disassociateResource', 'ServiceCatalogAppRegistry', Promise.resolve(result), false, mock)
  },
  disassociateResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'disassociateResource', 'ServiceCatalogAppRegistry', Promise.reject(result), true, mock)
  },
  getApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'getApplication', 'ServiceCatalogAppRegistry', Promise.resolve(result), true, mock)
  },
  getApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'getApplication', 'ServiceCatalogAppRegistry', Promise.resolve(result), false, mock)
  },
  getApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'getApplication', 'ServiceCatalogAppRegistry', Promise.reject(result), true, mock)
  },
  getAssociatedResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'getAssociatedResource', 'ServiceCatalogAppRegistry', Promise.resolve(result), true, mock)
  },
  getAssociatedResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'getAssociatedResource', 'ServiceCatalogAppRegistry', Promise.resolve(result), false, mock)
  },
  getAssociatedResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'getAssociatedResource', 'ServiceCatalogAppRegistry', Promise.reject(result), true, mock)
  },
  getAttributeGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'getAttributeGroup', 'ServiceCatalogAppRegistry', Promise.resolve(result), true, mock)
  },
  getAttributeGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'getAttributeGroup', 'ServiceCatalogAppRegistry', Promise.resolve(result), false, mock)
  },
  getAttributeGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'getAttributeGroup', 'ServiceCatalogAppRegistry', Promise.reject(result), true, mock)
  },
  listApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'listApplications', 'ServiceCatalogAppRegistry', Promise.resolve(result), true, mock)
  },
  listApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'listApplications', 'ServiceCatalogAppRegistry', Promise.resolve(result), false, mock)
  },
  listApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'listApplications', 'ServiceCatalogAppRegistry', Promise.reject(result), true, mock)
  },
  listAssociatedAttributeGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'listAssociatedAttributeGroups', 'ServiceCatalogAppRegistry', Promise.resolve(result), true, mock)
  },
  listAssociatedAttributeGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'listAssociatedAttributeGroups', 'ServiceCatalogAppRegistry', Promise.resolve(result), false, mock)
  },
  listAssociatedAttributeGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'listAssociatedAttributeGroups', 'ServiceCatalogAppRegistry', Promise.reject(result), true, mock)
  },
  listAssociatedResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'listAssociatedResources', 'ServiceCatalogAppRegistry', Promise.resolve(result), true, mock)
  },
  listAssociatedResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'listAssociatedResources', 'ServiceCatalogAppRegistry', Promise.resolve(result), false, mock)
  },
  listAssociatedResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'listAssociatedResources', 'ServiceCatalogAppRegistry', Promise.reject(result), true, mock)
  },
  listAttributeGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'listAttributeGroups', 'ServiceCatalogAppRegistry', Promise.resolve(result), true, mock)
  },
  listAttributeGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'listAttributeGroups', 'ServiceCatalogAppRegistry', Promise.resolve(result), false, mock)
  },
  listAttributeGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'listAttributeGroups', 'ServiceCatalogAppRegistry', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'listTagsForResource', 'ServiceCatalogAppRegistry', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'listTagsForResource', 'ServiceCatalogAppRegistry', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'listTagsForResource', 'ServiceCatalogAppRegistry', Promise.reject(result), true, mock)
  },
  syncResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'syncResource', 'ServiceCatalogAppRegistry', Promise.resolve(result), true, mock)
  },
  syncResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'syncResource', 'ServiceCatalogAppRegistry', Promise.resolve(result), false, mock)
  },
  syncResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'syncResource', 'ServiceCatalogAppRegistry', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'tagResource', 'ServiceCatalogAppRegistry', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'tagResource', 'ServiceCatalogAppRegistry', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'tagResource', 'ServiceCatalogAppRegistry', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'untagResource', 'ServiceCatalogAppRegistry', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'untagResource', 'ServiceCatalogAppRegistry', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'untagResource', 'ServiceCatalogAppRegistry', Promise.reject(result), true, mock)
  },
  updateApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'updateApplication', 'ServiceCatalogAppRegistry', Promise.resolve(result), true, mock)
  },
  updateApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'updateApplication', 'ServiceCatalogAppRegistry', Promise.resolve(result), false, mock)
  },
  updateApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'updateApplication', 'ServiceCatalogAppRegistry', Promise.reject(result), true, mock)
  },
  updateAttributeGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'updateAttributeGroup', 'ServiceCatalogAppRegistry', Promise.resolve(result), true, mock)
  },
  updateAttributeGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'updateAttributeGroup', 'ServiceCatalogAppRegistry', Promise.resolve(result), false, mock)
  },
  updateAttributeGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'updateAttributeGroup', 'ServiceCatalogAppRegistry', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'send', 'ServiceCatalogAppRegistryClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'send', 'ServiceCatalogAppRegistryClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-service-catalog-appregistry', 'send', 'ServiceCatalogAppRegistryClient', Promise.reject(result), true, mock)
  }
}