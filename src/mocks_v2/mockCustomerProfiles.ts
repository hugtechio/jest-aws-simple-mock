
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
  export const mockCustomerProfiles = {
  addProfileKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addProfileKey', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  addProfileKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addProfileKey', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  addProfileKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('addProfileKey', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  createDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomain', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  createDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomain', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  createDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createDomain', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  createProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProfile', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  createProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProfile', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  createProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('createProfile', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  deleteDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomain', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  deleteDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomain', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  deleteDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteDomain', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  deleteIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIntegration', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  deleteIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIntegration', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  deleteIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteIntegration', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  deleteProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProfile', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  deleteProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProfile', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  deleteProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProfile', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  deleteProfileKey: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProfileKey', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  deleteProfileKeyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProfileKey', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  deleteProfileKeyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProfileKey', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  deleteProfileObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProfileObject', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  deleteProfileObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProfileObject', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  deleteProfileObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProfileObject', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  deleteProfileObjectType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProfileObjectType', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  deleteProfileObjectTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProfileObjectType', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  deleteProfileObjectTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('deleteProfileObjectType', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('destroy', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  getDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomain', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  getDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomain', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  getDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getDomain', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  getIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIntegration', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  getIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIntegration', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  getIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getIntegration', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  getMatches: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMatches', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  getMatchesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMatches', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  getMatchesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getMatches', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  getProfileObjectType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProfileObjectType', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  getProfileObjectTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProfileObjectType', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  getProfileObjectTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProfileObjectType', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  getProfileObjectTypeTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProfileObjectTypeTemplate', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  getProfileObjectTypeTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProfileObjectTypeTemplate', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  getProfileObjectTypeTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('getProfileObjectTypeTemplate', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  listAccountIntegrations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountIntegrations', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  listAccountIntegrationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountIntegrations', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  listAccountIntegrationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listAccountIntegrations', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  listDomains: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomains', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  listDomainsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomains', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  listDomainsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listDomains', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  listIntegrations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIntegrations', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  listIntegrationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIntegrations', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  listIntegrationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listIntegrations', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  listProfileObjectTypeTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProfileObjectTypeTemplates', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  listProfileObjectTypeTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProfileObjectTypeTemplates', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  listProfileObjectTypeTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProfileObjectTypeTemplates', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  listProfileObjectTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProfileObjectTypes', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  listProfileObjectTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProfileObjectTypes', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  listProfileObjectTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProfileObjectTypes', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  listProfileObjects: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProfileObjects', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  listProfileObjectsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProfileObjects', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  listProfileObjectsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listProfileObjects', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('listTagsForResource', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  mergeProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergeProfiles', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  mergeProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergeProfiles', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  mergeProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('mergeProfiles', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  putIntegration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putIntegration', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  putIntegrationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putIntegration', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  putIntegrationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putIntegration', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  putProfileObject: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putProfileObject', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  putProfileObjectAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putProfileObject', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  putProfileObjectThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putProfileObject', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  putProfileObjectType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putProfileObjectType', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  putProfileObjectTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putProfileObjectType', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  putProfileObjectTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('putProfileObjectType', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  searchProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchProfiles', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  searchProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchProfiles', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  searchProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('searchProfiles', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('tagResource', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('untagResource', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  updateDomain: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomain', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  updateDomainAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomain', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  updateDomainThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateDomain', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
  updateProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProfile', 'CustomerProfiles', Promise.resolve(result), true, mock)
  },
  updateProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProfile', 'CustomerProfiles', Promise.resolve(result), false, mock)
  },
  updateProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('updateProfile', 'CustomerProfiles', Promise.reject(result), true, mock)
  },
}
