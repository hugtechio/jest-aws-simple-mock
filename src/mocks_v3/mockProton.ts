
/**
* @description mocks_v3:mockProton module is mocks for AWS-SDK V3
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/


function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  export const mockProton = {
  acceptEnvironmentAccountConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'acceptEnvironmentAccountConnection', 'Proton', Promise.resolve(result), true, mock)
  },
  acceptEnvironmentAccountConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'acceptEnvironmentAccountConnection', 'Proton', Promise.resolve(result), false, mock)
  },
  acceptEnvironmentAccountConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'acceptEnvironmentAccountConnection', 'Proton', Promise.reject(result), true, mock)
  },
  cancelEnvironmentDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'cancelEnvironmentDeployment', 'Proton', Promise.resolve(result), true, mock)
  },
  cancelEnvironmentDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'cancelEnvironmentDeployment', 'Proton', Promise.resolve(result), false, mock)
  },
  cancelEnvironmentDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'cancelEnvironmentDeployment', 'Proton', Promise.reject(result), true, mock)
  },
  cancelServiceInstanceDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'cancelServiceInstanceDeployment', 'Proton', Promise.resolve(result), true, mock)
  },
  cancelServiceInstanceDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'cancelServiceInstanceDeployment', 'Proton', Promise.resolve(result), false, mock)
  },
  cancelServiceInstanceDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'cancelServiceInstanceDeployment', 'Proton', Promise.reject(result), true, mock)
  },
  cancelServicePipelineDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'cancelServicePipelineDeployment', 'Proton', Promise.resolve(result), true, mock)
  },
  cancelServicePipelineDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'cancelServicePipelineDeployment', 'Proton', Promise.resolve(result), false, mock)
  },
  cancelServicePipelineDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'cancelServicePipelineDeployment', 'Proton', Promise.reject(result), true, mock)
  },
  createEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'createEnvironment', 'Proton', Promise.resolve(result), true, mock)
  },
  createEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'createEnvironment', 'Proton', Promise.resolve(result), false, mock)
  },
  createEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'createEnvironment', 'Proton', Promise.reject(result), true, mock)
  },
  createEnvironmentAccountConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'createEnvironmentAccountConnection', 'Proton', Promise.resolve(result), true, mock)
  },
  createEnvironmentAccountConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'createEnvironmentAccountConnection', 'Proton', Promise.resolve(result), false, mock)
  },
  createEnvironmentAccountConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'createEnvironmentAccountConnection', 'Proton', Promise.reject(result), true, mock)
  },
  createEnvironmentTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'createEnvironmentTemplate', 'Proton', Promise.resolve(result), true, mock)
  },
  createEnvironmentTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'createEnvironmentTemplate', 'Proton', Promise.resolve(result), false, mock)
  },
  createEnvironmentTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'createEnvironmentTemplate', 'Proton', Promise.reject(result), true, mock)
  },
  createEnvironmentTemplateVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'createEnvironmentTemplateVersion', 'Proton', Promise.resolve(result), true, mock)
  },
  createEnvironmentTemplateVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'createEnvironmentTemplateVersion', 'Proton', Promise.resolve(result), false, mock)
  },
  createEnvironmentTemplateVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'createEnvironmentTemplateVersion', 'Proton', Promise.reject(result), true, mock)
  },
  createService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'createService', 'Proton', Promise.resolve(result), true, mock)
  },
  createServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'createService', 'Proton', Promise.resolve(result), false, mock)
  },
  createServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'createService', 'Proton', Promise.reject(result), true, mock)
  },
  createServiceTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'createServiceTemplate', 'Proton', Promise.resolve(result), true, mock)
  },
  createServiceTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'createServiceTemplate', 'Proton', Promise.resolve(result), false, mock)
  },
  createServiceTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'createServiceTemplate', 'Proton', Promise.reject(result), true, mock)
  },
  createServiceTemplateVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'createServiceTemplateVersion', 'Proton', Promise.resolve(result), true, mock)
  },
  createServiceTemplateVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'createServiceTemplateVersion', 'Proton', Promise.resolve(result), false, mock)
  },
  createServiceTemplateVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'createServiceTemplateVersion', 'Proton', Promise.reject(result), true, mock)
  },
  deleteEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'deleteEnvironment', 'Proton', Promise.resolve(result), true, mock)
  },
  deleteEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'deleteEnvironment', 'Proton', Promise.resolve(result), false, mock)
  },
  deleteEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'deleteEnvironment', 'Proton', Promise.reject(result), true, mock)
  },
  deleteEnvironmentAccountConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'deleteEnvironmentAccountConnection', 'Proton', Promise.resolve(result), true, mock)
  },
  deleteEnvironmentAccountConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'deleteEnvironmentAccountConnection', 'Proton', Promise.resolve(result), false, mock)
  },
  deleteEnvironmentAccountConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'deleteEnvironmentAccountConnection', 'Proton', Promise.reject(result), true, mock)
  },
  deleteEnvironmentTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'deleteEnvironmentTemplate', 'Proton', Promise.resolve(result), true, mock)
  },
  deleteEnvironmentTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'deleteEnvironmentTemplate', 'Proton', Promise.resolve(result), false, mock)
  },
  deleteEnvironmentTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'deleteEnvironmentTemplate', 'Proton', Promise.reject(result), true, mock)
  },
  deleteEnvironmentTemplateVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'deleteEnvironmentTemplateVersion', 'Proton', Promise.resolve(result), true, mock)
  },
  deleteEnvironmentTemplateVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'deleteEnvironmentTemplateVersion', 'Proton', Promise.resolve(result), false, mock)
  },
  deleteEnvironmentTemplateVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'deleteEnvironmentTemplateVersion', 'Proton', Promise.reject(result), true, mock)
  },
  deleteService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'deleteService', 'Proton', Promise.resolve(result), true, mock)
  },
  deleteServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'deleteService', 'Proton', Promise.resolve(result), false, mock)
  },
  deleteServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'deleteService', 'Proton', Promise.reject(result), true, mock)
  },
  deleteServiceTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'deleteServiceTemplate', 'Proton', Promise.resolve(result), true, mock)
  },
  deleteServiceTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'deleteServiceTemplate', 'Proton', Promise.resolve(result), false, mock)
  },
  deleteServiceTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'deleteServiceTemplate', 'Proton', Promise.reject(result), true, mock)
  },
  deleteServiceTemplateVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'deleteServiceTemplateVersion', 'Proton', Promise.resolve(result), true, mock)
  },
  deleteServiceTemplateVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'deleteServiceTemplateVersion', 'Proton', Promise.resolve(result), false, mock)
  },
  deleteServiceTemplateVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'deleteServiceTemplateVersion', 'Proton', Promise.reject(result), true, mock)
  },
  destroy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'destroy', 'Proton', Promise.resolve(result), true, mock)
  },
  destroyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'destroy', 'Proton', Promise.resolve(result), false, mock)
  },
  destroyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'destroy', 'Proton', Promise.reject(result), true, mock)
  },
  getAccountSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getAccountSettings', 'Proton', Promise.resolve(result), true, mock)
  },
  getAccountSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getAccountSettings', 'Proton', Promise.resolve(result), false, mock)
  },
  getAccountSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getAccountSettings', 'Proton', Promise.reject(result), true, mock)
  },
  getEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getEnvironment', 'Proton', Promise.resolve(result), true, mock)
  },
  getEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getEnvironment', 'Proton', Promise.resolve(result), false, mock)
  },
  getEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getEnvironment', 'Proton', Promise.reject(result), true, mock)
  },
  getEnvironmentAccountConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getEnvironmentAccountConnection', 'Proton', Promise.resolve(result), true, mock)
  },
  getEnvironmentAccountConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getEnvironmentAccountConnection', 'Proton', Promise.resolve(result), false, mock)
  },
  getEnvironmentAccountConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getEnvironmentAccountConnection', 'Proton', Promise.reject(result), true, mock)
  },
  getEnvironmentTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getEnvironmentTemplate', 'Proton', Promise.resolve(result), true, mock)
  },
  getEnvironmentTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getEnvironmentTemplate', 'Proton', Promise.resolve(result), false, mock)
  },
  getEnvironmentTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getEnvironmentTemplate', 'Proton', Promise.reject(result), true, mock)
  },
  getEnvironmentTemplateVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getEnvironmentTemplateVersion', 'Proton', Promise.resolve(result), true, mock)
  },
  getEnvironmentTemplateVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getEnvironmentTemplateVersion', 'Proton', Promise.resolve(result), false, mock)
  },
  getEnvironmentTemplateVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getEnvironmentTemplateVersion', 'Proton', Promise.reject(result), true, mock)
  },
  getService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getService', 'Proton', Promise.resolve(result), true, mock)
  },
  getServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getService', 'Proton', Promise.resolve(result), false, mock)
  },
  getServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getService', 'Proton', Promise.reject(result), true, mock)
  },
  getServiceInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getServiceInstance', 'Proton', Promise.resolve(result), true, mock)
  },
  getServiceInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getServiceInstance', 'Proton', Promise.resolve(result), false, mock)
  },
  getServiceInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getServiceInstance', 'Proton', Promise.reject(result), true, mock)
  },
  getServiceTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getServiceTemplate', 'Proton', Promise.resolve(result), true, mock)
  },
  getServiceTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getServiceTemplate', 'Proton', Promise.resolve(result), false, mock)
  },
  getServiceTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getServiceTemplate', 'Proton', Promise.reject(result), true, mock)
  },
  getServiceTemplateVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getServiceTemplateVersion', 'Proton', Promise.resolve(result), true, mock)
  },
  getServiceTemplateVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getServiceTemplateVersion', 'Proton', Promise.resolve(result), false, mock)
  },
  getServiceTemplateVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'getServiceTemplateVersion', 'Proton', Promise.reject(result), true, mock)
  },
  listEnvironmentAccountConnections: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listEnvironmentAccountConnections', 'Proton', Promise.resolve(result), true, mock)
  },
  listEnvironmentAccountConnectionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listEnvironmentAccountConnections', 'Proton', Promise.resolve(result), false, mock)
  },
  listEnvironmentAccountConnectionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listEnvironmentAccountConnections', 'Proton', Promise.reject(result), true, mock)
  },
  listEnvironmentTemplateVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listEnvironmentTemplateVersions', 'Proton', Promise.resolve(result), true, mock)
  },
  listEnvironmentTemplateVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listEnvironmentTemplateVersions', 'Proton', Promise.resolve(result), false, mock)
  },
  listEnvironmentTemplateVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listEnvironmentTemplateVersions', 'Proton', Promise.reject(result), true, mock)
  },
  listEnvironmentTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listEnvironmentTemplates', 'Proton', Promise.resolve(result), true, mock)
  },
  listEnvironmentTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listEnvironmentTemplates', 'Proton', Promise.resolve(result), false, mock)
  },
  listEnvironmentTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listEnvironmentTemplates', 'Proton', Promise.reject(result), true, mock)
  },
  listEnvironments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listEnvironments', 'Proton', Promise.resolve(result), true, mock)
  },
  listEnvironmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listEnvironments', 'Proton', Promise.resolve(result), false, mock)
  },
  listEnvironmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listEnvironments', 'Proton', Promise.reject(result), true, mock)
  },
  listServiceInstances: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listServiceInstances', 'Proton', Promise.resolve(result), true, mock)
  },
  listServiceInstancesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listServiceInstances', 'Proton', Promise.resolve(result), false, mock)
  },
  listServiceInstancesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listServiceInstances', 'Proton', Promise.reject(result), true, mock)
  },
  listServiceTemplateVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listServiceTemplateVersions', 'Proton', Promise.resolve(result), true, mock)
  },
  listServiceTemplateVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listServiceTemplateVersions', 'Proton', Promise.resolve(result), false, mock)
  },
  listServiceTemplateVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listServiceTemplateVersions', 'Proton', Promise.reject(result), true, mock)
  },
  listServiceTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listServiceTemplates', 'Proton', Promise.resolve(result), true, mock)
  },
  listServiceTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listServiceTemplates', 'Proton', Promise.resolve(result), false, mock)
  },
  listServiceTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listServiceTemplates', 'Proton', Promise.reject(result), true, mock)
  },
  listServices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listServices', 'Proton', Promise.resolve(result), true, mock)
  },
  listServicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listServices', 'Proton', Promise.resolve(result), false, mock)
  },
  listServicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listServices', 'Proton', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listTagsForResource', 'Proton', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listTagsForResource', 'Proton', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'listTagsForResource', 'Proton', Promise.reject(result), true, mock)
  },
  rejectEnvironmentAccountConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'rejectEnvironmentAccountConnection', 'Proton', Promise.resolve(result), true, mock)
  },
  rejectEnvironmentAccountConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'rejectEnvironmentAccountConnection', 'Proton', Promise.resolve(result), false, mock)
  },
  rejectEnvironmentAccountConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'rejectEnvironmentAccountConnection', 'Proton', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'tagResource', 'Proton', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'tagResource', 'Proton', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'tagResource', 'Proton', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'untagResource', 'Proton', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'untagResource', 'Proton', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'untagResource', 'Proton', Promise.reject(result), true, mock)
  },
  updateAccountSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateAccountSettings', 'Proton', Promise.resolve(result), true, mock)
  },
  updateAccountSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateAccountSettings', 'Proton', Promise.resolve(result), false, mock)
  },
  updateAccountSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateAccountSettings', 'Proton', Promise.reject(result), true, mock)
  },
  updateEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateEnvironment', 'Proton', Promise.resolve(result), true, mock)
  },
  updateEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateEnvironment', 'Proton', Promise.resolve(result), false, mock)
  },
  updateEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateEnvironment', 'Proton', Promise.reject(result), true, mock)
  },
  updateEnvironmentAccountConnection: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateEnvironmentAccountConnection', 'Proton', Promise.resolve(result), true, mock)
  },
  updateEnvironmentAccountConnectionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateEnvironmentAccountConnection', 'Proton', Promise.resolve(result), false, mock)
  },
  updateEnvironmentAccountConnectionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateEnvironmentAccountConnection', 'Proton', Promise.reject(result), true, mock)
  },
  updateEnvironmentTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateEnvironmentTemplate', 'Proton', Promise.resolve(result), true, mock)
  },
  updateEnvironmentTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateEnvironmentTemplate', 'Proton', Promise.resolve(result), false, mock)
  },
  updateEnvironmentTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateEnvironmentTemplate', 'Proton', Promise.reject(result), true, mock)
  },
  updateEnvironmentTemplateVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateEnvironmentTemplateVersion', 'Proton', Promise.resolve(result), true, mock)
  },
  updateEnvironmentTemplateVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateEnvironmentTemplateVersion', 'Proton', Promise.resolve(result), false, mock)
  },
  updateEnvironmentTemplateVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateEnvironmentTemplateVersion', 'Proton', Promise.reject(result), true, mock)
  },
  updateService: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateService', 'Proton', Promise.resolve(result), true, mock)
  },
  updateServiceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateService', 'Proton', Promise.resolve(result), false, mock)
  },
  updateServiceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateService', 'Proton', Promise.reject(result), true, mock)
  },
  updateServiceInstance: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateServiceInstance', 'Proton', Promise.resolve(result), true, mock)
  },
  updateServiceInstanceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateServiceInstance', 'Proton', Promise.resolve(result), false, mock)
  },
  updateServiceInstanceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateServiceInstance', 'Proton', Promise.reject(result), true, mock)
  },
  updateServicePipeline: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateServicePipeline', 'Proton', Promise.resolve(result), true, mock)
  },
  updateServicePipelineAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateServicePipeline', 'Proton', Promise.resolve(result), false, mock)
  },
  updateServicePipelineThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateServicePipeline', 'Proton', Promise.reject(result), true, mock)
  },
  updateServiceTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateServiceTemplate', 'Proton', Promise.resolve(result), true, mock)
  },
  updateServiceTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateServiceTemplate', 'Proton', Promise.resolve(result), false, mock)
  },
  updateServiceTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateServiceTemplate', 'Proton', Promise.reject(result), true, mock)
  },
  updateServiceTemplateVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateServiceTemplateVersion', 'Proton', Promise.resolve(result), true, mock)
  },
  updateServiceTemplateVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateServiceTemplateVersion', 'Proton', Promise.resolve(result), false, mock)
  },
  updateServiceTemplateVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'updateServiceTemplateVersion', 'Proton', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'send', 'ProtonClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'send', 'ProtonClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-proton', 'send', 'ProtonClient', Promise.reject(result), true, mock)
  }
}