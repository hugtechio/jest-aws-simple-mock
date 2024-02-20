
/**
* @description mocks_v3:mockGreengrass module is mocks for AWS-SDK V3
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
export const mockGreengrass = {
  associateRoleToGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'associateRoleToGroup', 'Greengrass', Promise.resolve(result), true, mock)
  },
  associateRoleToGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'associateRoleToGroup', 'Greengrass', Promise.resolve(result), false, mock)
  },
  associateRoleToGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'associateRoleToGroup', 'Greengrass', Promise.reject(result), true, mock)
  },
  associateServiceRoleToAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'associateServiceRoleToAccount', 'Greengrass', Promise.resolve(result), true, mock)
  },
  associateServiceRoleToAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'associateServiceRoleToAccount', 'Greengrass', Promise.resolve(result), false, mock)
  },
  associateServiceRoleToAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'associateServiceRoleToAccount', 'Greengrass', Promise.reject(result), true, mock)
  },
  createConnectorDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createConnectorDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  createConnectorDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createConnectorDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  createConnectorDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createConnectorDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  createConnectorDefinitionVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createConnectorDefinitionVersion', 'Greengrass', Promise.resolve(result), true, mock)
  },
  createConnectorDefinitionVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createConnectorDefinitionVersion', 'Greengrass', Promise.resolve(result), false, mock)
  },
  createConnectorDefinitionVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createConnectorDefinitionVersion', 'Greengrass', Promise.reject(result), true, mock)
  },
  createCoreDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createCoreDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  createCoreDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createCoreDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  createCoreDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createCoreDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  createCoreDefinitionVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createCoreDefinitionVersion', 'Greengrass', Promise.resolve(result), true, mock)
  },
  createCoreDefinitionVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createCoreDefinitionVersion', 'Greengrass', Promise.resolve(result), false, mock)
  },
  createCoreDefinitionVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createCoreDefinitionVersion', 'Greengrass', Promise.reject(result), true, mock)
  },
  createDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createDeployment', 'Greengrass', Promise.resolve(result), true, mock)
  },
  createDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createDeployment', 'Greengrass', Promise.resolve(result), false, mock)
  },
  createDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createDeployment', 'Greengrass', Promise.reject(result), true, mock)
  },
  createDeviceDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createDeviceDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  createDeviceDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createDeviceDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  createDeviceDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createDeviceDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  createDeviceDefinitionVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createDeviceDefinitionVersion', 'Greengrass', Promise.resolve(result), true, mock)
  },
  createDeviceDefinitionVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createDeviceDefinitionVersion', 'Greengrass', Promise.resolve(result), false, mock)
  },
  createDeviceDefinitionVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createDeviceDefinitionVersion', 'Greengrass', Promise.reject(result), true, mock)
  },
  createFunctionDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createFunctionDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  createFunctionDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createFunctionDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  createFunctionDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createFunctionDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  createFunctionDefinitionVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createFunctionDefinitionVersion', 'Greengrass', Promise.resolve(result), true, mock)
  },
  createFunctionDefinitionVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createFunctionDefinitionVersion', 'Greengrass', Promise.resolve(result), false, mock)
  },
  createFunctionDefinitionVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createFunctionDefinitionVersion', 'Greengrass', Promise.reject(result), true, mock)
  },
  createGroupCertificateAuthority: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createGroupCertificateAuthority', 'Greengrass', Promise.resolve(result), true, mock)
  },
  createGroupCertificateAuthorityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createGroupCertificateAuthority', 'Greengrass', Promise.resolve(result), false, mock)
  },
  createGroupCertificateAuthorityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createGroupCertificateAuthority', 'Greengrass', Promise.reject(result), true, mock)
  },
  createGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createGroup', 'Greengrass', Promise.resolve(result), true, mock)
  },
  createGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createGroup', 'Greengrass', Promise.resolve(result), false, mock)
  },
  createGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createGroup', 'Greengrass', Promise.reject(result), true, mock)
  },
  createGroupVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createGroupVersion', 'Greengrass', Promise.resolve(result), true, mock)
  },
  createGroupVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createGroupVersion', 'Greengrass', Promise.resolve(result), false, mock)
  },
  createGroupVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createGroupVersion', 'Greengrass', Promise.reject(result), true, mock)
  },
  createLoggerDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createLoggerDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  createLoggerDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createLoggerDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  createLoggerDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createLoggerDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  createLoggerDefinitionVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createLoggerDefinitionVersion', 'Greengrass', Promise.resolve(result), true, mock)
  },
  createLoggerDefinitionVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createLoggerDefinitionVersion', 'Greengrass', Promise.resolve(result), false, mock)
  },
  createLoggerDefinitionVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createLoggerDefinitionVersion', 'Greengrass', Promise.reject(result), true, mock)
  },
  createResourceDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createResourceDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  createResourceDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createResourceDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  createResourceDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createResourceDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  createResourceDefinitionVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createResourceDefinitionVersion', 'Greengrass', Promise.resolve(result), true, mock)
  },
  createResourceDefinitionVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createResourceDefinitionVersion', 'Greengrass', Promise.resolve(result), false, mock)
  },
  createResourceDefinitionVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createResourceDefinitionVersion', 'Greengrass', Promise.reject(result), true, mock)
  },
  createSoftwareUpdateJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createSoftwareUpdateJob', 'Greengrass', Promise.resolve(result), true, mock)
  },
  createSoftwareUpdateJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createSoftwareUpdateJob', 'Greengrass', Promise.resolve(result), false, mock)
  },
  createSoftwareUpdateJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createSoftwareUpdateJob', 'Greengrass', Promise.reject(result), true, mock)
  },
  createSubscriptionDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createSubscriptionDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  createSubscriptionDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createSubscriptionDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  createSubscriptionDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createSubscriptionDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  createSubscriptionDefinitionVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createSubscriptionDefinitionVersion', 'Greengrass', Promise.resolve(result), true, mock)
  },
  createSubscriptionDefinitionVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createSubscriptionDefinitionVersion', 'Greengrass', Promise.resolve(result), false, mock)
  },
  createSubscriptionDefinitionVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'createSubscriptionDefinitionVersion', 'Greengrass', Promise.reject(result), true, mock)
  },
  deleteConnectorDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteConnectorDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  deleteConnectorDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteConnectorDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  deleteConnectorDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteConnectorDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  deleteCoreDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteCoreDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  deleteCoreDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteCoreDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  deleteCoreDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteCoreDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  deleteDeviceDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteDeviceDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  deleteDeviceDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteDeviceDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  deleteDeviceDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteDeviceDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  deleteFunctionDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteFunctionDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  deleteFunctionDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteFunctionDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  deleteFunctionDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteFunctionDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  deleteGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteGroup', 'Greengrass', Promise.resolve(result), true, mock)
  },
  deleteGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteGroup', 'Greengrass', Promise.resolve(result), false, mock)
  },
  deleteGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteGroup', 'Greengrass', Promise.reject(result), true, mock)
  },
  deleteLoggerDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteLoggerDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  deleteLoggerDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteLoggerDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  deleteLoggerDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteLoggerDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  deleteResourceDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteResourceDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  deleteResourceDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteResourceDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  deleteResourceDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteResourceDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  deleteSubscriptionDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteSubscriptionDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  deleteSubscriptionDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteSubscriptionDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  deleteSubscriptionDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'deleteSubscriptionDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  disassociateRoleFromGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'disassociateRoleFromGroup', 'Greengrass', Promise.resolve(result), true, mock)
  },
  disassociateRoleFromGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'disassociateRoleFromGroup', 'Greengrass', Promise.resolve(result), false, mock)
  },
  disassociateRoleFromGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'disassociateRoleFromGroup', 'Greengrass', Promise.reject(result), true, mock)
  },
  disassociateServiceRoleFromAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'disassociateServiceRoleFromAccount', 'Greengrass', Promise.resolve(result), true, mock)
  },
  disassociateServiceRoleFromAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'disassociateServiceRoleFromAccount', 'Greengrass', Promise.resolve(result), false, mock)
  },
  disassociateServiceRoleFromAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'disassociateServiceRoleFromAccount', 'Greengrass', Promise.reject(result), true, mock)
  },
  getAssociatedRole: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getAssociatedRole', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getAssociatedRoleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getAssociatedRole', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getAssociatedRoleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getAssociatedRole', 'Greengrass', Promise.reject(result), true, mock)
  },
  getBulkDeploymentStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getBulkDeploymentStatus', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getBulkDeploymentStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getBulkDeploymentStatus', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getBulkDeploymentStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getBulkDeploymentStatus', 'Greengrass', Promise.reject(result), true, mock)
  },
  getConnectivityInfo: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getConnectivityInfo', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getConnectivityInfoAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getConnectivityInfo', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getConnectivityInfoThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getConnectivityInfo', 'Greengrass', Promise.reject(result), true, mock)
  },
  getConnectorDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getConnectorDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getConnectorDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getConnectorDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getConnectorDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getConnectorDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  getConnectorDefinitionVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getConnectorDefinitionVersion', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getConnectorDefinitionVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getConnectorDefinitionVersion', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getConnectorDefinitionVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getConnectorDefinitionVersion', 'Greengrass', Promise.reject(result), true, mock)
  },
  getCoreDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getCoreDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getCoreDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getCoreDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getCoreDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getCoreDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  getCoreDefinitionVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getCoreDefinitionVersion', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getCoreDefinitionVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getCoreDefinitionVersion', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getCoreDefinitionVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getCoreDefinitionVersion', 'Greengrass', Promise.reject(result), true, mock)
  },
  getDeploymentStatus: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getDeploymentStatus', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getDeploymentStatusAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getDeploymentStatus', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getDeploymentStatusThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getDeploymentStatus', 'Greengrass', Promise.reject(result), true, mock)
  },
  getDeviceDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getDeviceDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getDeviceDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getDeviceDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getDeviceDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getDeviceDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  getDeviceDefinitionVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getDeviceDefinitionVersion', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getDeviceDefinitionVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getDeviceDefinitionVersion', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getDeviceDefinitionVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getDeviceDefinitionVersion', 'Greengrass', Promise.reject(result), true, mock)
  },
  getFunctionDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getFunctionDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getFunctionDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getFunctionDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getFunctionDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getFunctionDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  getFunctionDefinitionVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getFunctionDefinitionVersion', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getFunctionDefinitionVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getFunctionDefinitionVersion', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getFunctionDefinitionVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getFunctionDefinitionVersion', 'Greengrass', Promise.reject(result), true, mock)
  },
  getGroupCertificateAuthority: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getGroupCertificateAuthority', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getGroupCertificateAuthorityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getGroupCertificateAuthority', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getGroupCertificateAuthorityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getGroupCertificateAuthority', 'Greengrass', Promise.reject(result), true, mock)
  },
  getGroupCertificateConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getGroupCertificateConfiguration', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getGroupCertificateConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getGroupCertificateConfiguration', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getGroupCertificateConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getGroupCertificateConfiguration', 'Greengrass', Promise.reject(result), true, mock)
  },
  getGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getGroup', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getGroup', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getGroup', 'Greengrass', Promise.reject(result), true, mock)
  },
  getGroupVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getGroupVersion', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getGroupVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getGroupVersion', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getGroupVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getGroupVersion', 'Greengrass', Promise.reject(result), true, mock)
  },
  getLoggerDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getLoggerDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getLoggerDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getLoggerDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getLoggerDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getLoggerDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  getLoggerDefinitionVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getLoggerDefinitionVersion', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getLoggerDefinitionVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getLoggerDefinitionVersion', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getLoggerDefinitionVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getLoggerDefinitionVersion', 'Greengrass', Promise.reject(result), true, mock)
  },
  getResourceDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getResourceDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getResourceDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getResourceDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getResourceDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getResourceDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  getResourceDefinitionVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getResourceDefinitionVersion', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getResourceDefinitionVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getResourceDefinitionVersion', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getResourceDefinitionVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getResourceDefinitionVersion', 'Greengrass', Promise.reject(result), true, mock)
  },
  getServiceRoleForAccount: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getServiceRoleForAccount', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getServiceRoleForAccountAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getServiceRoleForAccount', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getServiceRoleForAccountThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getServiceRoleForAccount', 'Greengrass', Promise.reject(result), true, mock)
  },
  getSubscriptionDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getSubscriptionDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getSubscriptionDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getSubscriptionDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getSubscriptionDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getSubscriptionDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  getSubscriptionDefinitionVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getSubscriptionDefinitionVersion', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getSubscriptionDefinitionVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getSubscriptionDefinitionVersion', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getSubscriptionDefinitionVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getSubscriptionDefinitionVersion', 'Greengrass', Promise.reject(result), true, mock)
  },
  getThingRuntimeConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getThingRuntimeConfiguration', 'Greengrass', Promise.resolve(result), true, mock)
  },
  getThingRuntimeConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getThingRuntimeConfiguration', 'Greengrass', Promise.resolve(result), false, mock)
  },
  getThingRuntimeConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'getThingRuntimeConfiguration', 'Greengrass', Promise.reject(result), true, mock)
  },
  listBulkDeploymentDetailedReports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listBulkDeploymentDetailedReports', 'Greengrass', Promise.resolve(result), true, mock)
  },
  listBulkDeploymentDetailedReportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listBulkDeploymentDetailedReports', 'Greengrass', Promise.resolve(result), false, mock)
  },
  listBulkDeploymentDetailedReportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listBulkDeploymentDetailedReports', 'Greengrass', Promise.reject(result), true, mock)
  },
  listBulkDeployments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listBulkDeployments', 'Greengrass', Promise.resolve(result), true, mock)
  },
  listBulkDeploymentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listBulkDeployments', 'Greengrass', Promise.resolve(result), false, mock)
  },
  listBulkDeploymentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listBulkDeployments', 'Greengrass', Promise.reject(result), true, mock)
  },
  listConnectorDefinitionVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listConnectorDefinitionVersions', 'Greengrass', Promise.resolve(result), true, mock)
  },
  listConnectorDefinitionVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listConnectorDefinitionVersions', 'Greengrass', Promise.resolve(result), false, mock)
  },
  listConnectorDefinitionVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listConnectorDefinitionVersions', 'Greengrass', Promise.reject(result), true, mock)
  },
  listConnectorDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listConnectorDefinitions', 'Greengrass', Promise.resolve(result), true, mock)
  },
  listConnectorDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listConnectorDefinitions', 'Greengrass', Promise.resolve(result), false, mock)
  },
  listConnectorDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listConnectorDefinitions', 'Greengrass', Promise.reject(result), true, mock)
  },
  listCoreDefinitionVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listCoreDefinitionVersions', 'Greengrass', Promise.resolve(result), true, mock)
  },
  listCoreDefinitionVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listCoreDefinitionVersions', 'Greengrass', Promise.resolve(result), false, mock)
  },
  listCoreDefinitionVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listCoreDefinitionVersions', 'Greengrass', Promise.reject(result), true, mock)
  },
  listCoreDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listCoreDefinitions', 'Greengrass', Promise.resolve(result), true, mock)
  },
  listCoreDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listCoreDefinitions', 'Greengrass', Promise.resolve(result), false, mock)
  },
  listCoreDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listCoreDefinitions', 'Greengrass', Promise.reject(result), true, mock)
  },
  listDeployments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listDeployments', 'Greengrass', Promise.resolve(result), true, mock)
  },
  listDeploymentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listDeployments', 'Greengrass', Promise.resolve(result), false, mock)
  },
  listDeploymentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listDeployments', 'Greengrass', Promise.reject(result), true, mock)
  },
  listDeviceDefinitionVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listDeviceDefinitionVersions', 'Greengrass', Promise.resolve(result), true, mock)
  },
  listDeviceDefinitionVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listDeviceDefinitionVersions', 'Greengrass', Promise.resolve(result), false, mock)
  },
  listDeviceDefinitionVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listDeviceDefinitionVersions', 'Greengrass', Promise.reject(result), true, mock)
  },
  listDeviceDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listDeviceDefinitions', 'Greengrass', Promise.resolve(result), true, mock)
  },
  listDeviceDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listDeviceDefinitions', 'Greengrass', Promise.resolve(result), false, mock)
  },
  listDeviceDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listDeviceDefinitions', 'Greengrass', Promise.reject(result), true, mock)
  },
  listFunctionDefinitionVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listFunctionDefinitionVersions', 'Greengrass', Promise.resolve(result), true, mock)
  },
  listFunctionDefinitionVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listFunctionDefinitionVersions', 'Greengrass', Promise.resolve(result), false, mock)
  },
  listFunctionDefinitionVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listFunctionDefinitionVersions', 'Greengrass', Promise.reject(result), true, mock)
  },
  listFunctionDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listFunctionDefinitions', 'Greengrass', Promise.resolve(result), true, mock)
  },
  listFunctionDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listFunctionDefinitions', 'Greengrass', Promise.resolve(result), false, mock)
  },
  listFunctionDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listFunctionDefinitions', 'Greengrass', Promise.reject(result), true, mock)
  },
  listGroupCertificateAuthorities: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listGroupCertificateAuthorities', 'Greengrass', Promise.resolve(result), true, mock)
  },
  listGroupCertificateAuthoritiesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listGroupCertificateAuthorities', 'Greengrass', Promise.resolve(result), false, mock)
  },
  listGroupCertificateAuthoritiesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listGroupCertificateAuthorities', 'Greengrass', Promise.reject(result), true, mock)
  },
  listGroupVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listGroupVersions', 'Greengrass', Promise.resolve(result), true, mock)
  },
  listGroupVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listGroupVersions', 'Greengrass', Promise.resolve(result), false, mock)
  },
  listGroupVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listGroupVersions', 'Greengrass', Promise.reject(result), true, mock)
  },
  listGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listGroups', 'Greengrass', Promise.resolve(result), true, mock)
  },
  listGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listGroups', 'Greengrass', Promise.resolve(result), false, mock)
  },
  listGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listGroups', 'Greengrass', Promise.reject(result), true, mock)
  },
  listLoggerDefinitionVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listLoggerDefinitionVersions', 'Greengrass', Promise.resolve(result), true, mock)
  },
  listLoggerDefinitionVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listLoggerDefinitionVersions', 'Greengrass', Promise.resolve(result), false, mock)
  },
  listLoggerDefinitionVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listLoggerDefinitionVersions', 'Greengrass', Promise.reject(result), true, mock)
  },
  listLoggerDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listLoggerDefinitions', 'Greengrass', Promise.resolve(result), true, mock)
  },
  listLoggerDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listLoggerDefinitions', 'Greengrass', Promise.resolve(result), false, mock)
  },
  listLoggerDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listLoggerDefinitions', 'Greengrass', Promise.reject(result), true, mock)
  },
  listResourceDefinitionVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listResourceDefinitionVersions', 'Greengrass', Promise.resolve(result), true, mock)
  },
  listResourceDefinitionVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listResourceDefinitionVersions', 'Greengrass', Promise.resolve(result), false, mock)
  },
  listResourceDefinitionVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listResourceDefinitionVersions', 'Greengrass', Promise.reject(result), true, mock)
  },
  listResourceDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listResourceDefinitions', 'Greengrass', Promise.resolve(result), true, mock)
  },
  listResourceDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listResourceDefinitions', 'Greengrass', Promise.resolve(result), false, mock)
  },
  listResourceDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listResourceDefinitions', 'Greengrass', Promise.reject(result), true, mock)
  },
  listSubscriptionDefinitionVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listSubscriptionDefinitionVersions', 'Greengrass', Promise.resolve(result), true, mock)
  },
  listSubscriptionDefinitionVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listSubscriptionDefinitionVersions', 'Greengrass', Promise.resolve(result), false, mock)
  },
  listSubscriptionDefinitionVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listSubscriptionDefinitionVersions', 'Greengrass', Promise.reject(result), true, mock)
  },
  listSubscriptionDefinitions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listSubscriptionDefinitions', 'Greengrass', Promise.resolve(result), true, mock)
  },
  listSubscriptionDefinitionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listSubscriptionDefinitions', 'Greengrass', Promise.resolve(result), false, mock)
  },
  listSubscriptionDefinitionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listSubscriptionDefinitions', 'Greengrass', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listTagsForResource', 'Greengrass', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listTagsForResource', 'Greengrass', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'listTagsForResource', 'Greengrass', Promise.reject(result), true, mock)
  },
  resetDeployments: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'resetDeployments', 'Greengrass', Promise.resolve(result), true, mock)
  },
  resetDeploymentsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'resetDeployments', 'Greengrass', Promise.resolve(result), false, mock)
  },
  resetDeploymentsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'resetDeployments', 'Greengrass', Promise.reject(result), true, mock)
  },
  startBulkDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'startBulkDeployment', 'Greengrass', Promise.resolve(result), true, mock)
  },
  startBulkDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'startBulkDeployment', 'Greengrass', Promise.resolve(result), false, mock)
  },
  startBulkDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'startBulkDeployment', 'Greengrass', Promise.reject(result), true, mock)
  },
  stopBulkDeployment: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'stopBulkDeployment', 'Greengrass', Promise.resolve(result), true, mock)
  },
  stopBulkDeploymentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'stopBulkDeployment', 'Greengrass', Promise.resolve(result), false, mock)
  },
  stopBulkDeploymentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'stopBulkDeployment', 'Greengrass', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'tagResource', 'Greengrass', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'tagResource', 'Greengrass', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'tagResource', 'Greengrass', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'untagResource', 'Greengrass', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'untagResource', 'Greengrass', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'untagResource', 'Greengrass', Promise.reject(result), true, mock)
  },
  updateConnectivityInfo: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateConnectivityInfo', 'Greengrass', Promise.resolve(result), true, mock)
  },
  updateConnectivityInfoAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateConnectivityInfo', 'Greengrass', Promise.resolve(result), false, mock)
  },
  updateConnectivityInfoThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateConnectivityInfo', 'Greengrass', Promise.reject(result), true, mock)
  },
  updateConnectorDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateConnectorDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  updateConnectorDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateConnectorDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  updateConnectorDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateConnectorDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  updateCoreDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateCoreDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  updateCoreDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateCoreDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  updateCoreDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateCoreDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  updateDeviceDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateDeviceDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  updateDeviceDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateDeviceDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  updateDeviceDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateDeviceDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  updateFunctionDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateFunctionDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  updateFunctionDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateFunctionDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  updateFunctionDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateFunctionDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  updateGroupCertificateConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateGroupCertificateConfiguration', 'Greengrass', Promise.resolve(result), true, mock)
  },
  updateGroupCertificateConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateGroupCertificateConfiguration', 'Greengrass', Promise.resolve(result), false, mock)
  },
  updateGroupCertificateConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateGroupCertificateConfiguration', 'Greengrass', Promise.reject(result), true, mock)
  },
  updateGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateGroup', 'Greengrass', Promise.resolve(result), true, mock)
  },
  updateGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateGroup', 'Greengrass', Promise.resolve(result), false, mock)
  },
  updateGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateGroup', 'Greengrass', Promise.reject(result), true, mock)
  },
  updateLoggerDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateLoggerDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  updateLoggerDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateLoggerDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  updateLoggerDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateLoggerDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  updateResourceDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateResourceDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  updateResourceDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateResourceDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  updateResourceDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateResourceDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  updateSubscriptionDefinition: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateSubscriptionDefinition', 'Greengrass', Promise.resolve(result), true, mock)
  },
  updateSubscriptionDefinitionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateSubscriptionDefinition', 'Greengrass', Promise.resolve(result), false, mock)
  },
  updateSubscriptionDefinitionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateSubscriptionDefinition', 'Greengrass', Promise.reject(result), true, mock)
  },
  updateThingRuntimeConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateThingRuntimeConfiguration', 'Greengrass', Promise.resolve(result), true, mock)
  },
  updateThingRuntimeConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateThingRuntimeConfiguration', 'Greengrass', Promise.resolve(result), false, mock)
  },
  updateThingRuntimeConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'updateThingRuntimeConfiguration', 'Greengrass', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'send', 'GreengrassClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'send', 'GreengrassClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-greengrass', 'send', 'GreengrassClient', Promise.reject(result), true, mock)
  }
}
