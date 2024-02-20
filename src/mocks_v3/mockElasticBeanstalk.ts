
/**
* @description mocks_v3:mockElasticBeanstalk module is mocks for AWS-SDK V3
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
export const mockElasticBeanstalk = {
  abortEnvironmentUpdate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'abortEnvironmentUpdate', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  abortEnvironmentUpdateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'abortEnvironmentUpdate', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  abortEnvironmentUpdateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'abortEnvironmentUpdate', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  applyEnvironmentManagedAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'applyEnvironmentManagedAction', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  applyEnvironmentManagedActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'applyEnvironmentManagedAction', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  applyEnvironmentManagedActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'applyEnvironmentManagedAction', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  associateEnvironmentOperationsRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'associateEnvironmentOperationsRole', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  associateEnvironmentOperationsRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'associateEnvironmentOperationsRole', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  associateEnvironmentOperationsRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'associateEnvironmentOperationsRole', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  checkDNSAvailability: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'checkDNSAvailability', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  checkDNSAvailabilityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'checkDNSAvailability', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  checkDNSAvailabilityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'checkDNSAvailability', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  composeEnvironments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'composeEnvironments', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  composeEnvironmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'composeEnvironments', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  composeEnvironmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'composeEnvironments', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  createApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'createApplication', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  createApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'createApplication', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  createApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'createApplication', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  createApplicationVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'createApplicationVersion', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  createApplicationVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'createApplicationVersion', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  createApplicationVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'createApplicationVersion', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  createConfigurationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'createConfigurationTemplate', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  createConfigurationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'createConfigurationTemplate', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  createConfigurationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'createConfigurationTemplate', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  createEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'createEnvironment', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  createEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'createEnvironment', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  createEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'createEnvironment', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  createPlatformVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'createPlatformVersion', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  createPlatformVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'createPlatformVersion', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  createPlatformVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'createPlatformVersion', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  createStorageLocation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'createStorageLocation', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  createStorageLocationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'createStorageLocation', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  createStorageLocationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'createStorageLocation', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  deleteApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'deleteApplication', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  deleteApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'deleteApplication', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  deleteApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'deleteApplication', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  deleteApplicationVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'deleteApplicationVersion', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  deleteApplicationVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'deleteApplicationVersion', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  deleteApplicationVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'deleteApplicationVersion', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  deleteConfigurationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'deleteConfigurationTemplate', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  deleteConfigurationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'deleteConfigurationTemplate', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  deleteConfigurationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'deleteConfigurationTemplate', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  deleteEnvironmentConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'deleteEnvironmentConfiguration', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  deleteEnvironmentConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'deleteEnvironmentConfiguration', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  deleteEnvironmentConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'deleteEnvironmentConfiguration', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  deletePlatformVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'deletePlatformVersion', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  deletePlatformVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'deletePlatformVersion', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  deletePlatformVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'deletePlatformVersion', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  describeAccountAttributes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeAccountAttributes', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  describeAccountAttributesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeAccountAttributes', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  describeAccountAttributesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeAccountAttributes', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  describeApplicationVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeApplicationVersions', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  describeApplicationVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeApplicationVersions', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  describeApplicationVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeApplicationVersions', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  describeApplications: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeApplications', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  describeApplicationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeApplications', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  describeApplicationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeApplications', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  describeConfigurationOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeConfigurationOptions', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  describeConfigurationOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeConfigurationOptions', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  describeConfigurationOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeConfigurationOptions', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  describeConfigurationSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeConfigurationSettings', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  describeConfigurationSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeConfigurationSettings', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  describeConfigurationSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeConfigurationSettings', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  describeEnvironmentHealth: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeEnvironmentHealth', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  describeEnvironmentHealthAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeEnvironmentHealth', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  describeEnvironmentHealthThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeEnvironmentHealth', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  describeEnvironmentManagedActionHistory: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeEnvironmentManagedActionHistory', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  describeEnvironmentManagedActionHistoryAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeEnvironmentManagedActionHistory', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  describeEnvironmentManagedActionHistoryThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeEnvironmentManagedActionHistory', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  describeEnvironmentManagedActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeEnvironmentManagedActions', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  describeEnvironmentManagedActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeEnvironmentManagedActions', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  describeEnvironmentManagedActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeEnvironmentManagedActions', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  describeEnvironmentResources: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeEnvironmentResources', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  describeEnvironmentResourcesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeEnvironmentResources', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  describeEnvironmentResourcesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeEnvironmentResources', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  describeEnvironments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeEnvironments', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  describeEnvironmentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeEnvironments', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  describeEnvironmentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeEnvironments', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  describeEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeEvents', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  describeEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeEvents', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  describeEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeEvents', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  describeInstancesHealth: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeInstancesHealth', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  describeInstancesHealthAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeInstancesHealth', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  describeInstancesHealthThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describeInstancesHealth', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  describePlatformVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describePlatformVersion', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  describePlatformVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describePlatformVersion', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  describePlatformVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'describePlatformVersion', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  disassociateEnvironmentOperationsRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'disassociateEnvironmentOperationsRole', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  disassociateEnvironmentOperationsRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'disassociateEnvironmentOperationsRole', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  disassociateEnvironmentOperationsRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'disassociateEnvironmentOperationsRole', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  listAvailableSolutionStacks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'listAvailableSolutionStacks', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  listAvailableSolutionStacksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'listAvailableSolutionStacks', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  listAvailableSolutionStacksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'listAvailableSolutionStacks', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  listPlatformBranches: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'listPlatformBranches', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  listPlatformBranchesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'listPlatformBranches', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  listPlatformBranchesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'listPlatformBranches', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  listPlatformVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'listPlatformVersions', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  listPlatformVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'listPlatformVersions', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  listPlatformVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'listPlatformVersions', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'listTagsForResource', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'listTagsForResource', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'listTagsForResource', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  rebuildEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'rebuildEnvironment', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  rebuildEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'rebuildEnvironment', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  rebuildEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'rebuildEnvironment', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  requestEnvironmentInfo: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'requestEnvironmentInfo', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  requestEnvironmentInfoAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'requestEnvironmentInfo', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  requestEnvironmentInfoThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'requestEnvironmentInfo', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  restartAppServer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'restartAppServer', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  restartAppServerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'restartAppServer', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  restartAppServerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'restartAppServer', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  retrieveEnvironmentInfo: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'retrieveEnvironmentInfo', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  retrieveEnvironmentInfoAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'retrieveEnvironmentInfo', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  retrieveEnvironmentInfoThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'retrieveEnvironmentInfo', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  swapEnvironmentCNAMEs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'swapEnvironmentCNAMEs', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  swapEnvironmentCNAMEsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'swapEnvironmentCNAMEs', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  swapEnvironmentCNAMEsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'swapEnvironmentCNAMEs', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  terminateEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'terminateEnvironment', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  terminateEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'terminateEnvironment', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  terminateEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'terminateEnvironment', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  updateApplication: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'updateApplication', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  updateApplicationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'updateApplication', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  updateApplicationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'updateApplication', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  updateApplicationResourceLifecycle: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'updateApplicationResourceLifecycle', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  updateApplicationResourceLifecycleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'updateApplicationResourceLifecycle', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  updateApplicationResourceLifecycleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'updateApplicationResourceLifecycle', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  updateApplicationVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'updateApplicationVersion', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  updateApplicationVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'updateApplicationVersion', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  updateApplicationVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'updateApplicationVersion', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  updateConfigurationTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'updateConfigurationTemplate', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  updateConfigurationTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'updateConfigurationTemplate', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  updateConfigurationTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'updateConfigurationTemplate', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  updateEnvironment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'updateEnvironment', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  updateEnvironmentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'updateEnvironment', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  updateEnvironmentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'updateEnvironment', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  updateTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'updateTagsForResource', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  updateTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'updateTagsForResource', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  updateTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'updateTagsForResource', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  validateConfigurationSettings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'validateConfigurationSettings', 'ElasticBeanstalk', Promise.resolve(result), true, mock)
  },
  validateConfigurationSettingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'validateConfigurationSettings', 'ElasticBeanstalk', Promise.resolve(result), false, mock)
  },
  validateConfigurationSettingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'validateConfigurationSettings', 'ElasticBeanstalk', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'send', 'ElasticBeanstalkClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'send', 'ElasticBeanstalkClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-elastic-beanstalk', 'send', 'ElasticBeanstalkClient', Promise.reject(result), true, mock)
  }
}
