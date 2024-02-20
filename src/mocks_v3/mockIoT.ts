
/**
* @description mocks_v3:mockIoT module is mocks for AWS-SDK V3
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
export const mockIoT = {
  acceptCertificateTransfer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'acceptCertificateTransfer', 'IoT', Promise.resolve(result), true, mock)
  },
  acceptCertificateTransferAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'acceptCertificateTransfer', 'IoT', Promise.resolve(result), false, mock)
  },
  acceptCertificateTransferThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'acceptCertificateTransfer', 'IoT', Promise.reject(result), true, mock)
  },
  addThingToBillingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'addThingToBillingGroup', 'IoT', Promise.resolve(result), true, mock)
  },
  addThingToBillingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'addThingToBillingGroup', 'IoT', Promise.resolve(result), false, mock)
  },
  addThingToBillingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'addThingToBillingGroup', 'IoT', Promise.reject(result), true, mock)
  },
  addThingToThingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'addThingToThingGroup', 'IoT', Promise.resolve(result), true, mock)
  },
  addThingToThingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'addThingToThingGroup', 'IoT', Promise.resolve(result), false, mock)
  },
  addThingToThingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'addThingToThingGroup', 'IoT', Promise.reject(result), true, mock)
  },
  associateTargetsWithJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'associateTargetsWithJob', 'IoT', Promise.resolve(result), true, mock)
  },
  associateTargetsWithJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'associateTargetsWithJob', 'IoT', Promise.resolve(result), false, mock)
  },
  associateTargetsWithJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'associateTargetsWithJob', 'IoT', Promise.reject(result), true, mock)
  },
  attachPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'attachPolicy', 'IoT', Promise.resolve(result), true, mock)
  },
  attachPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'attachPolicy', 'IoT', Promise.resolve(result), false, mock)
  },
  attachPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'attachPolicy', 'IoT', Promise.reject(result), true, mock)
  },
  attachPrincipalPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'attachPrincipalPolicy', 'IoT', Promise.resolve(result), true, mock)
  },
  attachPrincipalPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'attachPrincipalPolicy', 'IoT', Promise.resolve(result), false, mock)
  },
  attachPrincipalPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'attachPrincipalPolicy', 'IoT', Promise.reject(result), true, mock)
  },
  attachSecurityProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'attachSecurityProfile', 'IoT', Promise.resolve(result), true, mock)
  },
  attachSecurityProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'attachSecurityProfile', 'IoT', Promise.resolve(result), false, mock)
  },
  attachSecurityProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'attachSecurityProfile', 'IoT', Promise.reject(result), true, mock)
  },
  attachThingPrincipal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'attachThingPrincipal', 'IoT', Promise.resolve(result), true, mock)
  },
  attachThingPrincipalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'attachThingPrincipal', 'IoT', Promise.resolve(result), false, mock)
  },
  attachThingPrincipalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'attachThingPrincipal', 'IoT', Promise.reject(result), true, mock)
  },
  cancelAuditMitigationActionsTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'cancelAuditMitigationActionsTask', 'IoT', Promise.resolve(result), true, mock)
  },
  cancelAuditMitigationActionsTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'cancelAuditMitigationActionsTask', 'IoT', Promise.resolve(result), false, mock)
  },
  cancelAuditMitigationActionsTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'cancelAuditMitigationActionsTask', 'IoT', Promise.reject(result), true, mock)
  },
  cancelAuditTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'cancelAuditTask', 'IoT', Promise.resolve(result), true, mock)
  },
  cancelAuditTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'cancelAuditTask', 'IoT', Promise.resolve(result), false, mock)
  },
  cancelAuditTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'cancelAuditTask', 'IoT', Promise.reject(result), true, mock)
  },
  cancelCertificateTransfer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'cancelCertificateTransfer', 'IoT', Promise.resolve(result), true, mock)
  },
  cancelCertificateTransferAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'cancelCertificateTransfer', 'IoT', Promise.resolve(result), false, mock)
  },
  cancelCertificateTransferThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'cancelCertificateTransfer', 'IoT', Promise.reject(result), true, mock)
  },
  cancelDetectMitigationActionsTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'cancelDetectMitigationActionsTask', 'IoT', Promise.resolve(result), true, mock)
  },
  cancelDetectMitigationActionsTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'cancelDetectMitigationActionsTask', 'IoT', Promise.resolve(result), false, mock)
  },
  cancelDetectMitigationActionsTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'cancelDetectMitigationActionsTask', 'IoT', Promise.reject(result), true, mock)
  },
  cancelJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'cancelJob', 'IoT', Promise.resolve(result), true, mock)
  },
  cancelJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'cancelJob', 'IoT', Promise.resolve(result), false, mock)
  },
  cancelJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'cancelJob', 'IoT', Promise.reject(result), true, mock)
  },
  cancelJobExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'cancelJobExecution', 'IoT', Promise.resolve(result), true, mock)
  },
  cancelJobExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'cancelJobExecution', 'IoT', Promise.resolve(result), false, mock)
  },
  cancelJobExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'cancelJobExecution', 'IoT', Promise.reject(result), true, mock)
  },
  clearDefaultAuthorizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'clearDefaultAuthorizer', 'IoT', Promise.resolve(result), true, mock)
  },
  clearDefaultAuthorizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'clearDefaultAuthorizer', 'IoT', Promise.resolve(result), false, mock)
  },
  clearDefaultAuthorizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'clearDefaultAuthorizer', 'IoT', Promise.reject(result), true, mock)
  },
  confirmTopicRuleDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'confirmTopicRuleDestination', 'IoT', Promise.resolve(result), true, mock)
  },
  confirmTopicRuleDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'confirmTopicRuleDestination', 'IoT', Promise.resolve(result), false, mock)
  },
  confirmTopicRuleDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'confirmTopicRuleDestination', 'IoT', Promise.reject(result), true, mock)
  },
  createAuditSuppression: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createAuditSuppression', 'IoT', Promise.resolve(result), true, mock)
  },
  createAuditSuppressionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createAuditSuppression', 'IoT', Promise.resolve(result), false, mock)
  },
  createAuditSuppressionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createAuditSuppression', 'IoT', Promise.reject(result), true, mock)
  },
  createAuthorizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createAuthorizer', 'IoT', Promise.resolve(result), true, mock)
  },
  createAuthorizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createAuthorizer', 'IoT', Promise.resolve(result), false, mock)
  },
  createAuthorizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createAuthorizer', 'IoT', Promise.reject(result), true, mock)
  },
  createBillingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createBillingGroup', 'IoT', Promise.resolve(result), true, mock)
  },
  createBillingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createBillingGroup', 'IoT', Promise.resolve(result), false, mock)
  },
  createBillingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createBillingGroup', 'IoT', Promise.reject(result), true, mock)
  },
  createCertificateFromCsr: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createCertificateFromCsr', 'IoT', Promise.resolve(result), true, mock)
  },
  createCertificateFromCsrAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createCertificateFromCsr', 'IoT', Promise.resolve(result), false, mock)
  },
  createCertificateFromCsrThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createCertificateFromCsr', 'IoT', Promise.reject(result), true, mock)
  },
  createCertificateProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createCertificateProvider', 'IoT', Promise.resolve(result), true, mock)
  },
  createCertificateProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createCertificateProvider', 'IoT', Promise.resolve(result), false, mock)
  },
  createCertificateProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createCertificateProvider', 'IoT', Promise.reject(result), true, mock)
  },
  createCustomMetric: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createCustomMetric', 'IoT', Promise.resolve(result), true, mock)
  },
  createCustomMetricAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createCustomMetric', 'IoT', Promise.resolve(result), false, mock)
  },
  createCustomMetricThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createCustomMetric', 'IoT', Promise.reject(result), true, mock)
  },
  createDimension: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createDimension', 'IoT', Promise.resolve(result), true, mock)
  },
  createDimensionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createDimension', 'IoT', Promise.resolve(result), false, mock)
  },
  createDimensionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createDimension', 'IoT', Promise.reject(result), true, mock)
  },
  createDomainConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createDomainConfiguration', 'IoT', Promise.resolve(result), true, mock)
  },
  createDomainConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createDomainConfiguration', 'IoT', Promise.resolve(result), false, mock)
  },
  createDomainConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createDomainConfiguration', 'IoT', Promise.reject(result), true, mock)
  },
  createDynamicThingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createDynamicThingGroup', 'IoT', Promise.resolve(result), true, mock)
  },
  createDynamicThingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createDynamicThingGroup', 'IoT', Promise.resolve(result), false, mock)
  },
  createDynamicThingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createDynamicThingGroup', 'IoT', Promise.reject(result), true, mock)
  },
  createFleetMetric: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createFleetMetric', 'IoT', Promise.resolve(result), true, mock)
  },
  createFleetMetricAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createFleetMetric', 'IoT', Promise.resolve(result), false, mock)
  },
  createFleetMetricThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createFleetMetric', 'IoT', Promise.reject(result), true, mock)
  },
  createJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createJob', 'IoT', Promise.resolve(result), true, mock)
  },
  createJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createJob', 'IoT', Promise.resolve(result), false, mock)
  },
  createJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createJob', 'IoT', Promise.reject(result), true, mock)
  },
  createJobTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createJobTemplate', 'IoT', Promise.resolve(result), true, mock)
  },
  createJobTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createJobTemplate', 'IoT', Promise.resolve(result), false, mock)
  },
  createJobTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createJobTemplate', 'IoT', Promise.reject(result), true, mock)
  },
  createKeysAndCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createKeysAndCertificate', 'IoT', Promise.resolve(result), true, mock)
  },
  createKeysAndCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createKeysAndCertificate', 'IoT', Promise.resolve(result), false, mock)
  },
  createKeysAndCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createKeysAndCertificate', 'IoT', Promise.reject(result), true, mock)
  },
  createMitigationAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createMitigationAction', 'IoT', Promise.resolve(result), true, mock)
  },
  createMitigationActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createMitigationAction', 'IoT', Promise.resolve(result), false, mock)
  },
  createMitigationActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createMitigationAction', 'IoT', Promise.reject(result), true, mock)
  },
  createOTAUpdate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createOTAUpdate', 'IoT', Promise.resolve(result), true, mock)
  },
  createOTAUpdateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createOTAUpdate', 'IoT', Promise.resolve(result), false, mock)
  },
  createOTAUpdateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createOTAUpdate', 'IoT', Promise.reject(result), true, mock)
  },
  createPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createPackage', 'IoT', Promise.resolve(result), true, mock)
  },
  createPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createPackage', 'IoT', Promise.resolve(result), false, mock)
  },
  createPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createPackage', 'IoT', Promise.reject(result), true, mock)
  },
  createPackageVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createPackageVersion', 'IoT', Promise.resolve(result), true, mock)
  },
  createPackageVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createPackageVersion', 'IoT', Promise.resolve(result), false, mock)
  },
  createPackageVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createPackageVersion', 'IoT', Promise.reject(result), true, mock)
  },
  createPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createPolicy', 'IoT', Promise.resolve(result), true, mock)
  },
  createPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createPolicy', 'IoT', Promise.resolve(result), false, mock)
  },
  createPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createPolicy', 'IoT', Promise.reject(result), true, mock)
  },
  createPolicyVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createPolicyVersion', 'IoT', Promise.resolve(result), true, mock)
  },
  createPolicyVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createPolicyVersion', 'IoT', Promise.resolve(result), false, mock)
  },
  createPolicyVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createPolicyVersion', 'IoT', Promise.reject(result), true, mock)
  },
  createProvisioningClaim: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createProvisioningClaim', 'IoT', Promise.resolve(result), true, mock)
  },
  createProvisioningClaimAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createProvisioningClaim', 'IoT', Promise.resolve(result), false, mock)
  },
  createProvisioningClaimThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createProvisioningClaim', 'IoT', Promise.reject(result), true, mock)
  },
  createProvisioningTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createProvisioningTemplate', 'IoT', Promise.resolve(result), true, mock)
  },
  createProvisioningTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createProvisioningTemplate', 'IoT', Promise.resolve(result), false, mock)
  },
  createProvisioningTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createProvisioningTemplate', 'IoT', Promise.reject(result), true, mock)
  },
  createProvisioningTemplateVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createProvisioningTemplateVersion', 'IoT', Promise.resolve(result), true, mock)
  },
  createProvisioningTemplateVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createProvisioningTemplateVersion', 'IoT', Promise.resolve(result), false, mock)
  },
  createProvisioningTemplateVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createProvisioningTemplateVersion', 'IoT', Promise.reject(result), true, mock)
  },
  createRoleAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createRoleAlias', 'IoT', Promise.resolve(result), true, mock)
  },
  createRoleAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createRoleAlias', 'IoT', Promise.resolve(result), false, mock)
  },
  createRoleAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createRoleAlias', 'IoT', Promise.reject(result), true, mock)
  },
  createScheduledAudit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createScheduledAudit', 'IoT', Promise.resolve(result), true, mock)
  },
  createScheduledAuditAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createScheduledAudit', 'IoT', Promise.resolve(result), false, mock)
  },
  createScheduledAuditThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createScheduledAudit', 'IoT', Promise.reject(result), true, mock)
  },
  createSecurityProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createSecurityProfile', 'IoT', Promise.resolve(result), true, mock)
  },
  createSecurityProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createSecurityProfile', 'IoT', Promise.resolve(result), false, mock)
  },
  createSecurityProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createSecurityProfile', 'IoT', Promise.reject(result), true, mock)
  },
  createStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createStream', 'IoT', Promise.resolve(result), true, mock)
  },
  createStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createStream', 'IoT', Promise.resolve(result), false, mock)
  },
  createStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createStream', 'IoT', Promise.reject(result), true, mock)
  },
  createThing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createThing', 'IoT', Promise.resolve(result), true, mock)
  },
  createThingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createThing', 'IoT', Promise.resolve(result), false, mock)
  },
  createThingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createThing', 'IoT', Promise.reject(result), true, mock)
  },
  createThingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createThingGroup', 'IoT', Promise.resolve(result), true, mock)
  },
  createThingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createThingGroup', 'IoT', Promise.resolve(result), false, mock)
  },
  createThingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createThingGroup', 'IoT', Promise.reject(result), true, mock)
  },
  createThingType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createThingType', 'IoT', Promise.resolve(result), true, mock)
  },
  createThingTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createThingType', 'IoT', Promise.resolve(result), false, mock)
  },
  createThingTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createThingType', 'IoT', Promise.reject(result), true, mock)
  },
  createTopicRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createTopicRule', 'IoT', Promise.resolve(result), true, mock)
  },
  createTopicRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createTopicRule', 'IoT', Promise.resolve(result), false, mock)
  },
  createTopicRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createTopicRule', 'IoT', Promise.reject(result), true, mock)
  },
  createTopicRuleDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createTopicRuleDestination', 'IoT', Promise.resolve(result), true, mock)
  },
  createTopicRuleDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createTopicRuleDestination', 'IoT', Promise.resolve(result), false, mock)
  },
  createTopicRuleDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'createTopicRuleDestination', 'IoT', Promise.reject(result), true, mock)
  },
  deleteAccountAuditConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteAccountAuditConfiguration', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteAccountAuditConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteAccountAuditConfiguration', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteAccountAuditConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteAccountAuditConfiguration', 'IoT', Promise.reject(result), true, mock)
  },
  deleteAuditSuppression: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteAuditSuppression', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteAuditSuppressionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteAuditSuppression', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteAuditSuppressionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteAuditSuppression', 'IoT', Promise.reject(result), true, mock)
  },
  deleteAuthorizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteAuthorizer', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteAuthorizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteAuthorizer', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteAuthorizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteAuthorizer', 'IoT', Promise.reject(result), true, mock)
  },
  deleteBillingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteBillingGroup', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteBillingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteBillingGroup', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteBillingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteBillingGroup', 'IoT', Promise.reject(result), true, mock)
  },
  deleteCACertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteCACertificate', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteCACertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteCACertificate', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteCACertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteCACertificate', 'IoT', Promise.reject(result), true, mock)
  },
  deleteCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteCertificate', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteCertificate', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteCertificate', 'IoT', Promise.reject(result), true, mock)
  },
  deleteCertificateProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteCertificateProvider', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteCertificateProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteCertificateProvider', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteCertificateProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteCertificateProvider', 'IoT', Promise.reject(result), true, mock)
  },
  deleteCustomMetric: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteCustomMetric', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteCustomMetricAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteCustomMetric', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteCustomMetricThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteCustomMetric', 'IoT', Promise.reject(result), true, mock)
  },
  deleteDimension: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteDimension', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteDimensionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteDimension', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteDimensionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteDimension', 'IoT', Promise.reject(result), true, mock)
  },
  deleteDomainConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteDomainConfiguration', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteDomainConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteDomainConfiguration', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteDomainConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteDomainConfiguration', 'IoT', Promise.reject(result), true, mock)
  },
  deleteDynamicThingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteDynamicThingGroup', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteDynamicThingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteDynamicThingGroup', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteDynamicThingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteDynamicThingGroup', 'IoT', Promise.reject(result), true, mock)
  },
  deleteFleetMetric: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteFleetMetric', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteFleetMetricAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteFleetMetric', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteFleetMetricThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteFleetMetric', 'IoT', Promise.reject(result), true, mock)
  },
  deleteJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteJob', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteJob', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteJob', 'IoT', Promise.reject(result), true, mock)
  },
  deleteJobExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteJobExecution', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteJobExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteJobExecution', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteJobExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteJobExecution', 'IoT', Promise.reject(result), true, mock)
  },
  deleteJobTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteJobTemplate', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteJobTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteJobTemplate', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteJobTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteJobTemplate', 'IoT', Promise.reject(result), true, mock)
  },
  deleteMitigationAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteMitigationAction', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteMitigationActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteMitigationAction', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteMitigationActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteMitigationAction', 'IoT', Promise.reject(result), true, mock)
  },
  deleteOTAUpdate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteOTAUpdate', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteOTAUpdateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteOTAUpdate', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteOTAUpdateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteOTAUpdate', 'IoT', Promise.reject(result), true, mock)
  },
  deletePackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deletePackage', 'IoT', Promise.resolve(result), true, mock)
  },
  deletePackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deletePackage', 'IoT', Promise.resolve(result), false, mock)
  },
  deletePackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deletePackage', 'IoT', Promise.reject(result), true, mock)
  },
  deletePackageVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deletePackageVersion', 'IoT', Promise.resolve(result), true, mock)
  },
  deletePackageVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deletePackageVersion', 'IoT', Promise.resolve(result), false, mock)
  },
  deletePackageVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deletePackageVersion', 'IoT', Promise.reject(result), true, mock)
  },
  deletePolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deletePolicy', 'IoT', Promise.resolve(result), true, mock)
  },
  deletePolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deletePolicy', 'IoT', Promise.resolve(result), false, mock)
  },
  deletePolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deletePolicy', 'IoT', Promise.reject(result), true, mock)
  },
  deletePolicyVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deletePolicyVersion', 'IoT', Promise.resolve(result), true, mock)
  },
  deletePolicyVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deletePolicyVersion', 'IoT', Promise.resolve(result), false, mock)
  },
  deletePolicyVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deletePolicyVersion', 'IoT', Promise.reject(result), true, mock)
  },
  deleteProvisioningTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteProvisioningTemplate', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteProvisioningTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteProvisioningTemplate', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteProvisioningTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteProvisioningTemplate', 'IoT', Promise.reject(result), true, mock)
  },
  deleteProvisioningTemplateVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteProvisioningTemplateVersion', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteProvisioningTemplateVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteProvisioningTemplateVersion', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteProvisioningTemplateVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteProvisioningTemplateVersion', 'IoT', Promise.reject(result), true, mock)
  },
  deleteRegistrationCode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteRegistrationCode', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteRegistrationCodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteRegistrationCode', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteRegistrationCodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteRegistrationCode', 'IoT', Promise.reject(result), true, mock)
  },
  deleteRoleAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteRoleAlias', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteRoleAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteRoleAlias', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteRoleAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteRoleAlias', 'IoT', Promise.reject(result), true, mock)
  },
  deleteScheduledAudit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteScheduledAudit', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteScheduledAuditAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteScheduledAudit', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteScheduledAuditThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteScheduledAudit', 'IoT', Promise.reject(result), true, mock)
  },
  deleteSecurityProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteSecurityProfile', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteSecurityProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteSecurityProfile', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteSecurityProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteSecurityProfile', 'IoT', Promise.reject(result), true, mock)
  },
  deleteStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteStream', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteStream', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteStream', 'IoT', Promise.reject(result), true, mock)
  },
  deleteThing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteThing', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteThingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteThing', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteThingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteThing', 'IoT', Promise.reject(result), true, mock)
  },
  deleteThingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteThingGroup', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteThingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteThingGroup', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteThingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteThingGroup', 'IoT', Promise.reject(result), true, mock)
  },
  deleteThingType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteThingType', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteThingTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteThingType', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteThingTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteThingType', 'IoT', Promise.reject(result), true, mock)
  },
  deleteTopicRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteTopicRule', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteTopicRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteTopicRule', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteTopicRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteTopicRule', 'IoT', Promise.reject(result), true, mock)
  },
  deleteTopicRuleDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteTopicRuleDestination', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteTopicRuleDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteTopicRuleDestination', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteTopicRuleDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteTopicRuleDestination', 'IoT', Promise.reject(result), true, mock)
  },
  deleteV2LoggingLevel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteV2LoggingLevel', 'IoT', Promise.resolve(result), true, mock)
  },
  deleteV2LoggingLevelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteV2LoggingLevel', 'IoT', Promise.resolve(result), false, mock)
  },
  deleteV2LoggingLevelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deleteV2LoggingLevel', 'IoT', Promise.reject(result), true, mock)
  },
  deprecateThingType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deprecateThingType', 'IoT', Promise.resolve(result), true, mock)
  },
  deprecateThingTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deprecateThingType', 'IoT', Promise.resolve(result), false, mock)
  },
  deprecateThingTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'deprecateThingType', 'IoT', Promise.reject(result), true, mock)
  },
  describeAccountAuditConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeAccountAuditConfiguration', 'IoT', Promise.resolve(result), true, mock)
  },
  describeAccountAuditConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeAccountAuditConfiguration', 'IoT', Promise.resolve(result), false, mock)
  },
  describeAccountAuditConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeAccountAuditConfiguration', 'IoT', Promise.reject(result), true, mock)
  },
  describeAuditFinding: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeAuditFinding', 'IoT', Promise.resolve(result), true, mock)
  },
  describeAuditFindingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeAuditFinding', 'IoT', Promise.resolve(result), false, mock)
  },
  describeAuditFindingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeAuditFinding', 'IoT', Promise.reject(result), true, mock)
  },
  describeAuditMitigationActionsTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeAuditMitigationActionsTask', 'IoT', Promise.resolve(result), true, mock)
  },
  describeAuditMitigationActionsTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeAuditMitigationActionsTask', 'IoT', Promise.resolve(result), false, mock)
  },
  describeAuditMitigationActionsTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeAuditMitigationActionsTask', 'IoT', Promise.reject(result), true, mock)
  },
  describeAuditSuppression: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeAuditSuppression', 'IoT', Promise.resolve(result), true, mock)
  },
  describeAuditSuppressionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeAuditSuppression', 'IoT', Promise.resolve(result), false, mock)
  },
  describeAuditSuppressionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeAuditSuppression', 'IoT', Promise.reject(result), true, mock)
  },
  describeAuditTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeAuditTask', 'IoT', Promise.resolve(result), true, mock)
  },
  describeAuditTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeAuditTask', 'IoT', Promise.resolve(result), false, mock)
  },
  describeAuditTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeAuditTask', 'IoT', Promise.reject(result), true, mock)
  },
  describeAuthorizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeAuthorizer', 'IoT', Promise.resolve(result), true, mock)
  },
  describeAuthorizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeAuthorizer', 'IoT', Promise.resolve(result), false, mock)
  },
  describeAuthorizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeAuthorizer', 'IoT', Promise.reject(result), true, mock)
  },
  describeBillingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeBillingGroup', 'IoT', Promise.resolve(result), true, mock)
  },
  describeBillingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeBillingGroup', 'IoT', Promise.resolve(result), false, mock)
  },
  describeBillingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeBillingGroup', 'IoT', Promise.reject(result), true, mock)
  },
  describeCACertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeCACertificate', 'IoT', Promise.resolve(result), true, mock)
  },
  describeCACertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeCACertificate', 'IoT', Promise.resolve(result), false, mock)
  },
  describeCACertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeCACertificate', 'IoT', Promise.reject(result), true, mock)
  },
  describeCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeCertificate', 'IoT', Promise.resolve(result), true, mock)
  },
  describeCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeCertificate', 'IoT', Promise.resolve(result), false, mock)
  },
  describeCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeCertificate', 'IoT', Promise.reject(result), true, mock)
  },
  describeCertificateProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeCertificateProvider', 'IoT', Promise.resolve(result), true, mock)
  },
  describeCertificateProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeCertificateProvider', 'IoT', Promise.resolve(result), false, mock)
  },
  describeCertificateProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeCertificateProvider', 'IoT', Promise.reject(result), true, mock)
  },
  describeCustomMetric: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeCustomMetric', 'IoT', Promise.resolve(result), true, mock)
  },
  describeCustomMetricAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeCustomMetric', 'IoT', Promise.resolve(result), false, mock)
  },
  describeCustomMetricThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeCustomMetric', 'IoT', Promise.reject(result), true, mock)
  },
  describeDefaultAuthorizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeDefaultAuthorizer', 'IoT', Promise.resolve(result), true, mock)
  },
  describeDefaultAuthorizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeDefaultAuthorizer', 'IoT', Promise.resolve(result), false, mock)
  },
  describeDefaultAuthorizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeDefaultAuthorizer', 'IoT', Promise.reject(result), true, mock)
  },
  describeDetectMitigationActionsTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeDetectMitigationActionsTask', 'IoT', Promise.resolve(result), true, mock)
  },
  describeDetectMitigationActionsTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeDetectMitigationActionsTask', 'IoT', Promise.resolve(result), false, mock)
  },
  describeDetectMitigationActionsTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeDetectMitigationActionsTask', 'IoT', Promise.reject(result), true, mock)
  },
  describeDimension: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeDimension', 'IoT', Promise.resolve(result), true, mock)
  },
  describeDimensionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeDimension', 'IoT', Promise.resolve(result), false, mock)
  },
  describeDimensionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeDimension', 'IoT', Promise.reject(result), true, mock)
  },
  describeDomainConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeDomainConfiguration', 'IoT', Promise.resolve(result), true, mock)
  },
  describeDomainConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeDomainConfiguration', 'IoT', Promise.resolve(result), false, mock)
  },
  describeDomainConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeDomainConfiguration', 'IoT', Promise.reject(result), true, mock)
  },
  describeEndpoint: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeEndpoint', 'IoT', Promise.resolve(result), true, mock)
  },
  describeEndpointAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeEndpoint', 'IoT', Promise.resolve(result), false, mock)
  },
  describeEndpointThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeEndpoint', 'IoT', Promise.reject(result), true, mock)
  },
  describeEventConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeEventConfigurations', 'IoT', Promise.resolve(result), true, mock)
  },
  describeEventConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeEventConfigurations', 'IoT', Promise.resolve(result), false, mock)
  },
  describeEventConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeEventConfigurations', 'IoT', Promise.reject(result), true, mock)
  },
  describeFleetMetric: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeFleetMetric', 'IoT', Promise.resolve(result), true, mock)
  },
  describeFleetMetricAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeFleetMetric', 'IoT', Promise.resolve(result), false, mock)
  },
  describeFleetMetricThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeFleetMetric', 'IoT', Promise.reject(result), true, mock)
  },
  describeIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeIndex', 'IoT', Promise.resolve(result), true, mock)
  },
  describeIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeIndex', 'IoT', Promise.resolve(result), false, mock)
  },
  describeIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeIndex', 'IoT', Promise.reject(result), true, mock)
  },
  describeJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeJob', 'IoT', Promise.resolve(result), true, mock)
  },
  describeJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeJob', 'IoT', Promise.resolve(result), false, mock)
  },
  describeJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeJob', 'IoT', Promise.reject(result), true, mock)
  },
  describeJobExecution: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeJobExecution', 'IoT', Promise.resolve(result), true, mock)
  },
  describeJobExecutionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeJobExecution', 'IoT', Promise.resolve(result), false, mock)
  },
  describeJobExecutionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeJobExecution', 'IoT', Promise.reject(result), true, mock)
  },
  describeJobTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeJobTemplate', 'IoT', Promise.resolve(result), true, mock)
  },
  describeJobTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeJobTemplate', 'IoT', Promise.resolve(result), false, mock)
  },
  describeJobTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeJobTemplate', 'IoT', Promise.reject(result), true, mock)
  },
  describeManagedJobTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeManagedJobTemplate', 'IoT', Promise.resolve(result), true, mock)
  },
  describeManagedJobTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeManagedJobTemplate', 'IoT', Promise.resolve(result), false, mock)
  },
  describeManagedJobTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeManagedJobTemplate', 'IoT', Promise.reject(result), true, mock)
  },
  describeMitigationAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeMitigationAction', 'IoT', Promise.resolve(result), true, mock)
  },
  describeMitigationActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeMitigationAction', 'IoT', Promise.resolve(result), false, mock)
  },
  describeMitigationActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeMitigationAction', 'IoT', Promise.reject(result), true, mock)
  },
  describeProvisioningTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeProvisioningTemplate', 'IoT', Promise.resolve(result), true, mock)
  },
  describeProvisioningTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeProvisioningTemplate', 'IoT', Promise.resolve(result), false, mock)
  },
  describeProvisioningTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeProvisioningTemplate', 'IoT', Promise.reject(result), true, mock)
  },
  describeProvisioningTemplateVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeProvisioningTemplateVersion', 'IoT', Promise.resolve(result), true, mock)
  },
  describeProvisioningTemplateVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeProvisioningTemplateVersion', 'IoT', Promise.resolve(result), false, mock)
  },
  describeProvisioningTemplateVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeProvisioningTemplateVersion', 'IoT', Promise.reject(result), true, mock)
  },
  describeRoleAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeRoleAlias', 'IoT', Promise.resolve(result), true, mock)
  },
  describeRoleAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeRoleAlias', 'IoT', Promise.resolve(result), false, mock)
  },
  describeRoleAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeRoleAlias', 'IoT', Promise.reject(result), true, mock)
  },
  describeScheduledAudit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeScheduledAudit', 'IoT', Promise.resolve(result), true, mock)
  },
  describeScheduledAuditAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeScheduledAudit', 'IoT', Promise.resolve(result), false, mock)
  },
  describeScheduledAuditThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeScheduledAudit', 'IoT', Promise.reject(result), true, mock)
  },
  describeSecurityProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeSecurityProfile', 'IoT', Promise.resolve(result), true, mock)
  },
  describeSecurityProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeSecurityProfile', 'IoT', Promise.resolve(result), false, mock)
  },
  describeSecurityProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeSecurityProfile', 'IoT', Promise.reject(result), true, mock)
  },
  describeStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeStream', 'IoT', Promise.resolve(result), true, mock)
  },
  describeStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeStream', 'IoT', Promise.resolve(result), false, mock)
  },
  describeStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeStream', 'IoT', Promise.reject(result), true, mock)
  },
  describeThing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeThing', 'IoT', Promise.resolve(result), true, mock)
  },
  describeThingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeThing', 'IoT', Promise.resolve(result), false, mock)
  },
  describeThingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeThing', 'IoT', Promise.reject(result), true, mock)
  },
  describeThingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeThingGroup', 'IoT', Promise.resolve(result), true, mock)
  },
  describeThingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeThingGroup', 'IoT', Promise.resolve(result), false, mock)
  },
  describeThingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeThingGroup', 'IoT', Promise.reject(result), true, mock)
  },
  describeThingRegistrationTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeThingRegistrationTask', 'IoT', Promise.resolve(result), true, mock)
  },
  describeThingRegistrationTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeThingRegistrationTask', 'IoT', Promise.resolve(result), false, mock)
  },
  describeThingRegistrationTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeThingRegistrationTask', 'IoT', Promise.reject(result), true, mock)
  },
  describeThingType: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeThingType', 'IoT', Promise.resolve(result), true, mock)
  },
  describeThingTypeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeThingType', 'IoT', Promise.resolve(result), false, mock)
  },
  describeThingTypeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'describeThingType', 'IoT', Promise.reject(result), true, mock)
  },
  detachPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'detachPolicy', 'IoT', Promise.resolve(result), true, mock)
  },
  detachPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'detachPolicy', 'IoT', Promise.resolve(result), false, mock)
  },
  detachPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'detachPolicy', 'IoT', Promise.reject(result), true, mock)
  },
  detachPrincipalPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'detachPrincipalPolicy', 'IoT', Promise.resolve(result), true, mock)
  },
  detachPrincipalPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'detachPrincipalPolicy', 'IoT', Promise.resolve(result), false, mock)
  },
  detachPrincipalPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'detachPrincipalPolicy', 'IoT', Promise.reject(result), true, mock)
  },
  detachSecurityProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'detachSecurityProfile', 'IoT', Promise.resolve(result), true, mock)
  },
  detachSecurityProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'detachSecurityProfile', 'IoT', Promise.resolve(result), false, mock)
  },
  detachSecurityProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'detachSecurityProfile', 'IoT', Promise.reject(result), true, mock)
  },
  detachThingPrincipal: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'detachThingPrincipal', 'IoT', Promise.resolve(result), true, mock)
  },
  detachThingPrincipalAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'detachThingPrincipal', 'IoT', Promise.resolve(result), false, mock)
  },
  detachThingPrincipalThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'detachThingPrincipal', 'IoT', Promise.reject(result), true, mock)
  },
  disableTopicRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'disableTopicRule', 'IoT', Promise.resolve(result), true, mock)
  },
  disableTopicRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'disableTopicRule', 'IoT', Promise.resolve(result), false, mock)
  },
  disableTopicRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'disableTopicRule', 'IoT', Promise.reject(result), true, mock)
  },
  enableTopicRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'enableTopicRule', 'IoT', Promise.resolve(result), true, mock)
  },
  enableTopicRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'enableTopicRule', 'IoT', Promise.resolve(result), false, mock)
  },
  enableTopicRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'enableTopicRule', 'IoT', Promise.reject(result), true, mock)
  },
  getBehaviorModelTrainingSummaries: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getBehaviorModelTrainingSummaries', 'IoT', Promise.resolve(result), true, mock)
  },
  getBehaviorModelTrainingSummariesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getBehaviorModelTrainingSummaries', 'IoT', Promise.resolve(result), false, mock)
  },
  getBehaviorModelTrainingSummariesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getBehaviorModelTrainingSummaries', 'IoT', Promise.reject(result), true, mock)
  },
  getBucketsAggregation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getBucketsAggregation', 'IoT', Promise.resolve(result), true, mock)
  },
  getBucketsAggregationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getBucketsAggregation', 'IoT', Promise.resolve(result), false, mock)
  },
  getBucketsAggregationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getBucketsAggregation', 'IoT', Promise.reject(result), true, mock)
  },
  getCardinality: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getCardinality', 'IoT', Promise.resolve(result), true, mock)
  },
  getCardinalityAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getCardinality', 'IoT', Promise.resolve(result), false, mock)
  },
  getCardinalityThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getCardinality', 'IoT', Promise.reject(result), true, mock)
  },
  getEffectivePolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getEffectivePolicies', 'IoT', Promise.resolve(result), true, mock)
  },
  getEffectivePoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getEffectivePolicies', 'IoT', Promise.resolve(result), false, mock)
  },
  getEffectivePoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getEffectivePolicies', 'IoT', Promise.reject(result), true, mock)
  },
  getIndexingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getIndexingConfiguration', 'IoT', Promise.resolve(result), true, mock)
  },
  getIndexingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getIndexingConfiguration', 'IoT', Promise.resolve(result), false, mock)
  },
  getIndexingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getIndexingConfiguration', 'IoT', Promise.reject(result), true, mock)
  },
  getJobDocument: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getJobDocument', 'IoT', Promise.resolve(result), true, mock)
  },
  getJobDocumentAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getJobDocument', 'IoT', Promise.resolve(result), false, mock)
  },
  getJobDocumentThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getJobDocument', 'IoT', Promise.reject(result), true, mock)
  },
  getLoggingOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getLoggingOptions', 'IoT', Promise.resolve(result), true, mock)
  },
  getLoggingOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getLoggingOptions', 'IoT', Promise.resolve(result), false, mock)
  },
  getLoggingOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getLoggingOptions', 'IoT', Promise.reject(result), true, mock)
  },
  getOTAUpdate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getOTAUpdate', 'IoT', Promise.resolve(result), true, mock)
  },
  getOTAUpdateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getOTAUpdate', 'IoT', Promise.resolve(result), false, mock)
  },
  getOTAUpdateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getOTAUpdate', 'IoT', Promise.reject(result), true, mock)
  },
  getPackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getPackage', 'IoT', Promise.resolve(result), true, mock)
  },
  getPackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getPackage', 'IoT', Promise.resolve(result), false, mock)
  },
  getPackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getPackage', 'IoT', Promise.reject(result), true, mock)
  },
  getPackageConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getPackageConfiguration', 'IoT', Promise.resolve(result), true, mock)
  },
  getPackageConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getPackageConfiguration', 'IoT', Promise.resolve(result), false, mock)
  },
  getPackageConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getPackageConfiguration', 'IoT', Promise.reject(result), true, mock)
  },
  getPackageVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getPackageVersion', 'IoT', Promise.resolve(result), true, mock)
  },
  getPackageVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getPackageVersion', 'IoT', Promise.resolve(result), false, mock)
  },
  getPackageVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getPackageVersion', 'IoT', Promise.reject(result), true, mock)
  },
  getPercentiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getPercentiles', 'IoT', Promise.resolve(result), true, mock)
  },
  getPercentilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getPercentiles', 'IoT', Promise.resolve(result), false, mock)
  },
  getPercentilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getPercentiles', 'IoT', Promise.reject(result), true, mock)
  },
  getPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getPolicy', 'IoT', Promise.resolve(result), true, mock)
  },
  getPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getPolicy', 'IoT', Promise.resolve(result), false, mock)
  },
  getPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getPolicy', 'IoT', Promise.reject(result), true, mock)
  },
  getPolicyVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getPolicyVersion', 'IoT', Promise.resolve(result), true, mock)
  },
  getPolicyVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getPolicyVersion', 'IoT', Promise.resolve(result), false, mock)
  },
  getPolicyVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getPolicyVersion', 'IoT', Promise.reject(result), true, mock)
  },
  getRegistrationCode: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getRegistrationCode', 'IoT', Promise.resolve(result), true, mock)
  },
  getRegistrationCodeAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getRegistrationCode', 'IoT', Promise.resolve(result), false, mock)
  },
  getRegistrationCodeThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getRegistrationCode', 'IoT', Promise.reject(result), true, mock)
  },
  getStatistics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getStatistics', 'IoT', Promise.resolve(result), true, mock)
  },
  getStatisticsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getStatistics', 'IoT', Promise.resolve(result), false, mock)
  },
  getStatisticsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getStatistics', 'IoT', Promise.reject(result), true, mock)
  },
  getTopicRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getTopicRule', 'IoT', Promise.resolve(result), true, mock)
  },
  getTopicRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getTopicRule', 'IoT', Promise.resolve(result), false, mock)
  },
  getTopicRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getTopicRule', 'IoT', Promise.reject(result), true, mock)
  },
  getTopicRuleDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getTopicRuleDestination', 'IoT', Promise.resolve(result), true, mock)
  },
  getTopicRuleDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getTopicRuleDestination', 'IoT', Promise.resolve(result), false, mock)
  },
  getTopicRuleDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getTopicRuleDestination', 'IoT', Promise.reject(result), true, mock)
  },
  getV2LoggingOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getV2LoggingOptions', 'IoT', Promise.resolve(result), true, mock)
  },
  getV2LoggingOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getV2LoggingOptions', 'IoT', Promise.resolve(result), false, mock)
  },
  getV2LoggingOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'getV2LoggingOptions', 'IoT', Promise.reject(result), true, mock)
  },
  listActiveViolations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listActiveViolations', 'IoT', Promise.resolve(result), true, mock)
  },
  listActiveViolationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listActiveViolations', 'IoT', Promise.resolve(result), false, mock)
  },
  listActiveViolationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listActiveViolations', 'IoT', Promise.reject(result), true, mock)
  },
  listAttachedPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listAttachedPolicies', 'IoT', Promise.resolve(result), true, mock)
  },
  listAttachedPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listAttachedPolicies', 'IoT', Promise.resolve(result), false, mock)
  },
  listAttachedPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listAttachedPolicies', 'IoT', Promise.reject(result), true, mock)
  },
  listAuditFindings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listAuditFindings', 'IoT', Promise.resolve(result), true, mock)
  },
  listAuditFindingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listAuditFindings', 'IoT', Promise.resolve(result), false, mock)
  },
  listAuditFindingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listAuditFindings', 'IoT', Promise.reject(result), true, mock)
  },
  listAuditMitigationActionsExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listAuditMitigationActionsExecutions', 'IoT', Promise.resolve(result), true, mock)
  },
  listAuditMitigationActionsExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listAuditMitigationActionsExecutions', 'IoT', Promise.resolve(result), false, mock)
  },
  listAuditMitigationActionsExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listAuditMitigationActionsExecutions', 'IoT', Promise.reject(result), true, mock)
  },
  listAuditMitigationActionsTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listAuditMitigationActionsTasks', 'IoT', Promise.resolve(result), true, mock)
  },
  listAuditMitigationActionsTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listAuditMitigationActionsTasks', 'IoT', Promise.resolve(result), false, mock)
  },
  listAuditMitigationActionsTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listAuditMitigationActionsTasks', 'IoT', Promise.reject(result), true, mock)
  },
  listAuditSuppressions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listAuditSuppressions', 'IoT', Promise.resolve(result), true, mock)
  },
  listAuditSuppressionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listAuditSuppressions', 'IoT', Promise.resolve(result), false, mock)
  },
  listAuditSuppressionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listAuditSuppressions', 'IoT', Promise.reject(result), true, mock)
  },
  listAuditTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listAuditTasks', 'IoT', Promise.resolve(result), true, mock)
  },
  listAuditTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listAuditTasks', 'IoT', Promise.resolve(result), false, mock)
  },
  listAuditTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listAuditTasks', 'IoT', Promise.reject(result), true, mock)
  },
  listAuthorizers: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listAuthorizers', 'IoT', Promise.resolve(result), true, mock)
  },
  listAuthorizersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listAuthorizers', 'IoT', Promise.resolve(result), false, mock)
  },
  listAuthorizersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listAuthorizers', 'IoT', Promise.reject(result), true, mock)
  },
  listBillingGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listBillingGroups', 'IoT', Promise.resolve(result), true, mock)
  },
  listBillingGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listBillingGroups', 'IoT', Promise.resolve(result), false, mock)
  },
  listBillingGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listBillingGroups', 'IoT', Promise.reject(result), true, mock)
  },
  listCACertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listCACertificates', 'IoT', Promise.resolve(result), true, mock)
  },
  listCACertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listCACertificates', 'IoT', Promise.resolve(result), false, mock)
  },
  listCACertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listCACertificates', 'IoT', Promise.reject(result), true, mock)
  },
  listCertificateProviders: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listCertificateProviders', 'IoT', Promise.resolve(result), true, mock)
  },
  listCertificateProvidersAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listCertificateProviders', 'IoT', Promise.resolve(result), false, mock)
  },
  listCertificateProvidersThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listCertificateProviders', 'IoT', Promise.reject(result), true, mock)
  },
  listCertificatesByCA: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listCertificatesByCA', 'IoT', Promise.resolve(result), true, mock)
  },
  listCertificatesByCAAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listCertificatesByCA', 'IoT', Promise.resolve(result), false, mock)
  },
  listCertificatesByCAThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listCertificatesByCA', 'IoT', Promise.reject(result), true, mock)
  },
  listCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listCertificates', 'IoT', Promise.resolve(result), true, mock)
  },
  listCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listCertificates', 'IoT', Promise.resolve(result), false, mock)
  },
  listCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listCertificates', 'IoT', Promise.reject(result), true, mock)
  },
  listCustomMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listCustomMetrics', 'IoT', Promise.resolve(result), true, mock)
  },
  listCustomMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listCustomMetrics', 'IoT', Promise.resolve(result), false, mock)
  },
  listCustomMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listCustomMetrics', 'IoT', Promise.reject(result), true, mock)
  },
  listDetectMitigationActionsExecutions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listDetectMitigationActionsExecutions', 'IoT', Promise.resolve(result), true, mock)
  },
  listDetectMitigationActionsExecutionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listDetectMitigationActionsExecutions', 'IoT', Promise.resolve(result), false, mock)
  },
  listDetectMitigationActionsExecutionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listDetectMitigationActionsExecutions', 'IoT', Promise.reject(result), true, mock)
  },
  listDetectMitigationActionsTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listDetectMitigationActionsTasks', 'IoT', Promise.resolve(result), true, mock)
  },
  listDetectMitigationActionsTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listDetectMitigationActionsTasks', 'IoT', Promise.resolve(result), false, mock)
  },
  listDetectMitigationActionsTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listDetectMitigationActionsTasks', 'IoT', Promise.reject(result), true, mock)
  },
  listDimensions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listDimensions', 'IoT', Promise.resolve(result), true, mock)
  },
  listDimensionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listDimensions', 'IoT', Promise.resolve(result), false, mock)
  },
  listDimensionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listDimensions', 'IoT', Promise.reject(result), true, mock)
  },
  listDomainConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listDomainConfigurations', 'IoT', Promise.resolve(result), true, mock)
  },
  listDomainConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listDomainConfigurations', 'IoT', Promise.resolve(result), false, mock)
  },
  listDomainConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listDomainConfigurations', 'IoT', Promise.reject(result), true, mock)
  },
  listFleetMetrics: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listFleetMetrics', 'IoT', Promise.resolve(result), true, mock)
  },
  listFleetMetricsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listFleetMetrics', 'IoT', Promise.resolve(result), false, mock)
  },
  listFleetMetricsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listFleetMetrics', 'IoT', Promise.reject(result), true, mock)
  },
  listIndices: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listIndices', 'IoT', Promise.resolve(result), true, mock)
  },
  listIndicesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listIndices', 'IoT', Promise.resolve(result), false, mock)
  },
  listIndicesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listIndices', 'IoT', Promise.reject(result), true, mock)
  },
  listJobExecutionsForJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listJobExecutionsForJob', 'IoT', Promise.resolve(result), true, mock)
  },
  listJobExecutionsForJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listJobExecutionsForJob', 'IoT', Promise.resolve(result), false, mock)
  },
  listJobExecutionsForJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listJobExecutionsForJob', 'IoT', Promise.reject(result), true, mock)
  },
  listJobExecutionsForThing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listJobExecutionsForThing', 'IoT', Promise.resolve(result), true, mock)
  },
  listJobExecutionsForThingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listJobExecutionsForThing', 'IoT', Promise.resolve(result), false, mock)
  },
  listJobExecutionsForThingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listJobExecutionsForThing', 'IoT', Promise.reject(result), true, mock)
  },
  listJobTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listJobTemplates', 'IoT', Promise.resolve(result), true, mock)
  },
  listJobTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listJobTemplates', 'IoT', Promise.resolve(result), false, mock)
  },
  listJobTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listJobTemplates', 'IoT', Promise.reject(result), true, mock)
  },
  listJobs: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listJobs', 'IoT', Promise.resolve(result), true, mock)
  },
  listJobsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listJobs', 'IoT', Promise.resolve(result), false, mock)
  },
  listJobsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listJobs', 'IoT', Promise.reject(result), true, mock)
  },
  listManagedJobTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listManagedJobTemplates', 'IoT', Promise.resolve(result), true, mock)
  },
  listManagedJobTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listManagedJobTemplates', 'IoT', Promise.resolve(result), false, mock)
  },
  listManagedJobTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listManagedJobTemplates', 'IoT', Promise.reject(result), true, mock)
  },
  listMetricValues: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listMetricValues', 'IoT', Promise.resolve(result), true, mock)
  },
  listMetricValuesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listMetricValues', 'IoT', Promise.resolve(result), false, mock)
  },
  listMetricValuesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listMetricValues', 'IoT', Promise.reject(result), true, mock)
  },
  listMitigationActions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listMitigationActions', 'IoT', Promise.resolve(result), true, mock)
  },
  listMitigationActionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listMitigationActions', 'IoT', Promise.resolve(result), false, mock)
  },
  listMitigationActionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listMitigationActions', 'IoT', Promise.reject(result), true, mock)
  },
  listOTAUpdates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listOTAUpdates', 'IoT', Promise.resolve(result), true, mock)
  },
  listOTAUpdatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listOTAUpdates', 'IoT', Promise.resolve(result), false, mock)
  },
  listOTAUpdatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listOTAUpdates', 'IoT', Promise.reject(result), true, mock)
  },
  listOutgoingCertificates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listOutgoingCertificates', 'IoT', Promise.resolve(result), true, mock)
  },
  listOutgoingCertificatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listOutgoingCertificates', 'IoT', Promise.resolve(result), false, mock)
  },
  listOutgoingCertificatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listOutgoingCertificates', 'IoT', Promise.reject(result), true, mock)
  },
  listPackageVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listPackageVersions', 'IoT', Promise.resolve(result), true, mock)
  },
  listPackageVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listPackageVersions', 'IoT', Promise.resolve(result), false, mock)
  },
  listPackageVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listPackageVersions', 'IoT', Promise.reject(result), true, mock)
  },
  listPackages: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listPackages', 'IoT', Promise.resolve(result), true, mock)
  },
  listPackagesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listPackages', 'IoT', Promise.resolve(result), false, mock)
  },
  listPackagesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listPackages', 'IoT', Promise.reject(result), true, mock)
  },
  listPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listPolicies', 'IoT', Promise.resolve(result), true, mock)
  },
  listPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listPolicies', 'IoT', Promise.resolve(result), false, mock)
  },
  listPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listPolicies', 'IoT', Promise.reject(result), true, mock)
  },
  listPolicyPrincipals: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listPolicyPrincipals', 'IoT', Promise.resolve(result), true, mock)
  },
  listPolicyPrincipalsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listPolicyPrincipals', 'IoT', Promise.resolve(result), false, mock)
  },
  listPolicyPrincipalsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listPolicyPrincipals', 'IoT', Promise.reject(result), true, mock)
  },
  listPolicyVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listPolicyVersions', 'IoT', Promise.resolve(result), true, mock)
  },
  listPolicyVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listPolicyVersions', 'IoT', Promise.resolve(result), false, mock)
  },
  listPolicyVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listPolicyVersions', 'IoT', Promise.reject(result), true, mock)
  },
  listPrincipalPolicies: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listPrincipalPolicies', 'IoT', Promise.resolve(result), true, mock)
  },
  listPrincipalPoliciesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listPrincipalPolicies', 'IoT', Promise.resolve(result), false, mock)
  },
  listPrincipalPoliciesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listPrincipalPolicies', 'IoT', Promise.reject(result), true, mock)
  },
  listPrincipalThings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listPrincipalThings', 'IoT', Promise.resolve(result), true, mock)
  },
  listPrincipalThingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listPrincipalThings', 'IoT', Promise.resolve(result), false, mock)
  },
  listPrincipalThingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listPrincipalThings', 'IoT', Promise.reject(result), true, mock)
  },
  listProvisioningTemplateVersions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listProvisioningTemplateVersions', 'IoT', Promise.resolve(result), true, mock)
  },
  listProvisioningTemplateVersionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listProvisioningTemplateVersions', 'IoT', Promise.resolve(result), false, mock)
  },
  listProvisioningTemplateVersionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listProvisioningTemplateVersions', 'IoT', Promise.reject(result), true, mock)
  },
  listProvisioningTemplates: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listProvisioningTemplates', 'IoT', Promise.resolve(result), true, mock)
  },
  listProvisioningTemplatesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listProvisioningTemplates', 'IoT', Promise.resolve(result), false, mock)
  },
  listProvisioningTemplatesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listProvisioningTemplates', 'IoT', Promise.reject(result), true, mock)
  },
  listRelatedResourcesForAuditFinding: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listRelatedResourcesForAuditFinding', 'IoT', Promise.resolve(result), true, mock)
  },
  listRelatedResourcesForAuditFindingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listRelatedResourcesForAuditFinding', 'IoT', Promise.resolve(result), false, mock)
  },
  listRelatedResourcesForAuditFindingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listRelatedResourcesForAuditFinding', 'IoT', Promise.reject(result), true, mock)
  },
  listRoleAliases: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listRoleAliases', 'IoT', Promise.resolve(result), true, mock)
  },
  listRoleAliasesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listRoleAliases', 'IoT', Promise.resolve(result), false, mock)
  },
  listRoleAliasesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listRoleAliases', 'IoT', Promise.reject(result), true, mock)
  },
  listScheduledAudits: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listScheduledAudits', 'IoT', Promise.resolve(result), true, mock)
  },
  listScheduledAuditsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listScheduledAudits', 'IoT', Promise.resolve(result), false, mock)
  },
  listScheduledAuditsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listScheduledAudits', 'IoT', Promise.reject(result), true, mock)
  },
  listSecurityProfiles: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listSecurityProfiles', 'IoT', Promise.resolve(result), true, mock)
  },
  listSecurityProfilesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listSecurityProfiles', 'IoT', Promise.resolve(result), false, mock)
  },
  listSecurityProfilesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listSecurityProfiles', 'IoT', Promise.reject(result), true, mock)
  },
  listSecurityProfilesForTarget: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listSecurityProfilesForTarget', 'IoT', Promise.resolve(result), true, mock)
  },
  listSecurityProfilesForTargetAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listSecurityProfilesForTarget', 'IoT', Promise.resolve(result), false, mock)
  },
  listSecurityProfilesForTargetThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listSecurityProfilesForTarget', 'IoT', Promise.reject(result), true, mock)
  },
  listStreams: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listStreams', 'IoT', Promise.resolve(result), true, mock)
  },
  listStreamsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listStreams', 'IoT', Promise.resolve(result), false, mock)
  },
  listStreamsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listStreams', 'IoT', Promise.reject(result), true, mock)
  },
  listTagsForResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listTagsForResource', 'IoT', Promise.resolve(result), true, mock)
  },
  listTagsForResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listTagsForResource', 'IoT', Promise.resolve(result), false, mock)
  },
  listTagsForResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listTagsForResource', 'IoT', Promise.reject(result), true, mock)
  },
  listTargetsForPolicy: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listTargetsForPolicy', 'IoT', Promise.resolve(result), true, mock)
  },
  listTargetsForPolicyAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listTargetsForPolicy', 'IoT', Promise.resolve(result), false, mock)
  },
  listTargetsForPolicyThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listTargetsForPolicy', 'IoT', Promise.reject(result), true, mock)
  },
  listTargetsForSecurityProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listTargetsForSecurityProfile', 'IoT', Promise.resolve(result), true, mock)
  },
  listTargetsForSecurityProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listTargetsForSecurityProfile', 'IoT', Promise.resolve(result), false, mock)
  },
  listTargetsForSecurityProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listTargetsForSecurityProfile', 'IoT', Promise.reject(result), true, mock)
  },
  listThingGroups: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingGroups', 'IoT', Promise.resolve(result), true, mock)
  },
  listThingGroupsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingGroups', 'IoT', Promise.resolve(result), false, mock)
  },
  listThingGroupsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingGroups', 'IoT', Promise.reject(result), true, mock)
  },
  listThingGroupsForThing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingGroupsForThing', 'IoT', Promise.resolve(result), true, mock)
  },
  listThingGroupsForThingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingGroupsForThing', 'IoT', Promise.resolve(result), false, mock)
  },
  listThingGroupsForThingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingGroupsForThing', 'IoT', Promise.reject(result), true, mock)
  },
  listThingPrincipals: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingPrincipals', 'IoT', Promise.resolve(result), true, mock)
  },
  listThingPrincipalsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingPrincipals', 'IoT', Promise.resolve(result), false, mock)
  },
  listThingPrincipalsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingPrincipals', 'IoT', Promise.reject(result), true, mock)
  },
  listThingRegistrationTaskReports: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingRegistrationTaskReports', 'IoT', Promise.resolve(result), true, mock)
  },
  listThingRegistrationTaskReportsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingRegistrationTaskReports', 'IoT', Promise.resolve(result), false, mock)
  },
  listThingRegistrationTaskReportsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingRegistrationTaskReports', 'IoT', Promise.reject(result), true, mock)
  },
  listThingRegistrationTasks: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingRegistrationTasks', 'IoT', Promise.resolve(result), true, mock)
  },
  listThingRegistrationTasksAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingRegistrationTasks', 'IoT', Promise.resolve(result), false, mock)
  },
  listThingRegistrationTasksThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingRegistrationTasks', 'IoT', Promise.reject(result), true, mock)
  },
  listThingTypes: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingTypes', 'IoT', Promise.resolve(result), true, mock)
  },
  listThingTypesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingTypes', 'IoT', Promise.resolve(result), false, mock)
  },
  listThingTypesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingTypes', 'IoT', Promise.reject(result), true, mock)
  },
  listThings: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThings', 'IoT', Promise.resolve(result), true, mock)
  },
  listThingsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThings', 'IoT', Promise.resolve(result), false, mock)
  },
  listThingsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThings', 'IoT', Promise.reject(result), true, mock)
  },
  listThingsInBillingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingsInBillingGroup', 'IoT', Promise.resolve(result), true, mock)
  },
  listThingsInBillingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingsInBillingGroup', 'IoT', Promise.resolve(result), false, mock)
  },
  listThingsInBillingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingsInBillingGroup', 'IoT', Promise.reject(result), true, mock)
  },
  listThingsInThingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingsInThingGroup', 'IoT', Promise.resolve(result), true, mock)
  },
  listThingsInThingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingsInThingGroup', 'IoT', Promise.resolve(result), false, mock)
  },
  listThingsInThingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listThingsInThingGroup', 'IoT', Promise.reject(result), true, mock)
  },
  listTopicRuleDestinations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listTopicRuleDestinations', 'IoT', Promise.resolve(result), true, mock)
  },
  listTopicRuleDestinationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listTopicRuleDestinations', 'IoT', Promise.resolve(result), false, mock)
  },
  listTopicRuleDestinationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listTopicRuleDestinations', 'IoT', Promise.reject(result), true, mock)
  },
  listTopicRules: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listTopicRules', 'IoT', Promise.resolve(result), true, mock)
  },
  listTopicRulesAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listTopicRules', 'IoT', Promise.resolve(result), false, mock)
  },
  listTopicRulesThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listTopicRules', 'IoT', Promise.reject(result), true, mock)
  },
  listV2LoggingLevels: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listV2LoggingLevels', 'IoT', Promise.resolve(result), true, mock)
  },
  listV2LoggingLevelsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listV2LoggingLevels', 'IoT', Promise.resolve(result), false, mock)
  },
  listV2LoggingLevelsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listV2LoggingLevels', 'IoT', Promise.reject(result), true, mock)
  },
  listViolationEvents: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listViolationEvents', 'IoT', Promise.resolve(result), true, mock)
  },
  listViolationEventsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listViolationEvents', 'IoT', Promise.resolve(result), false, mock)
  },
  listViolationEventsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'listViolationEvents', 'IoT', Promise.reject(result), true, mock)
  },
  putVerificationStateOnViolation: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'putVerificationStateOnViolation', 'IoT', Promise.resolve(result), true, mock)
  },
  putVerificationStateOnViolationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'putVerificationStateOnViolation', 'IoT', Promise.resolve(result), false, mock)
  },
  putVerificationStateOnViolationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'putVerificationStateOnViolation', 'IoT', Promise.reject(result), true, mock)
  },
  registerCACertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'registerCACertificate', 'IoT', Promise.resolve(result), true, mock)
  },
  registerCACertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'registerCACertificate', 'IoT', Promise.resolve(result), false, mock)
  },
  registerCACertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'registerCACertificate', 'IoT', Promise.reject(result), true, mock)
  },
  registerCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'registerCertificate', 'IoT', Promise.resolve(result), true, mock)
  },
  registerCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'registerCertificate', 'IoT', Promise.resolve(result), false, mock)
  },
  registerCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'registerCertificate', 'IoT', Promise.reject(result), true, mock)
  },
  registerCertificateWithoutCA: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'registerCertificateWithoutCA', 'IoT', Promise.resolve(result), true, mock)
  },
  registerCertificateWithoutCAAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'registerCertificateWithoutCA', 'IoT', Promise.resolve(result), false, mock)
  },
  registerCertificateWithoutCAThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'registerCertificateWithoutCA', 'IoT', Promise.reject(result), true, mock)
  },
  registerThing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'registerThing', 'IoT', Promise.resolve(result), true, mock)
  },
  registerThingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'registerThing', 'IoT', Promise.resolve(result), false, mock)
  },
  registerThingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'registerThing', 'IoT', Promise.reject(result), true, mock)
  },
  rejectCertificateTransfer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'rejectCertificateTransfer', 'IoT', Promise.resolve(result), true, mock)
  },
  rejectCertificateTransferAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'rejectCertificateTransfer', 'IoT', Promise.resolve(result), false, mock)
  },
  rejectCertificateTransferThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'rejectCertificateTransfer', 'IoT', Promise.reject(result), true, mock)
  },
  removeThingFromBillingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'removeThingFromBillingGroup', 'IoT', Promise.resolve(result), true, mock)
  },
  removeThingFromBillingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'removeThingFromBillingGroup', 'IoT', Promise.resolve(result), false, mock)
  },
  removeThingFromBillingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'removeThingFromBillingGroup', 'IoT', Promise.reject(result), true, mock)
  },
  removeThingFromThingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'removeThingFromThingGroup', 'IoT', Promise.resolve(result), true, mock)
  },
  removeThingFromThingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'removeThingFromThingGroup', 'IoT', Promise.resolve(result), false, mock)
  },
  removeThingFromThingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'removeThingFromThingGroup', 'IoT', Promise.reject(result), true, mock)
  },
  replaceTopicRule: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'replaceTopicRule', 'IoT', Promise.resolve(result), true, mock)
  },
  replaceTopicRuleAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'replaceTopicRule', 'IoT', Promise.resolve(result), false, mock)
  },
  replaceTopicRuleThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'replaceTopicRule', 'IoT', Promise.reject(result), true, mock)
  },
  searchIndex: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'searchIndex', 'IoT', Promise.resolve(result), true, mock)
  },
  searchIndexAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'searchIndex', 'IoT', Promise.resolve(result), false, mock)
  },
  searchIndexThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'searchIndex', 'IoT', Promise.reject(result), true, mock)
  },
  setDefaultAuthorizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'setDefaultAuthorizer', 'IoT', Promise.resolve(result), true, mock)
  },
  setDefaultAuthorizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'setDefaultAuthorizer', 'IoT', Promise.resolve(result), false, mock)
  },
  setDefaultAuthorizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'setDefaultAuthorizer', 'IoT', Promise.reject(result), true, mock)
  },
  setDefaultPolicyVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'setDefaultPolicyVersion', 'IoT', Promise.resolve(result), true, mock)
  },
  setDefaultPolicyVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'setDefaultPolicyVersion', 'IoT', Promise.resolve(result), false, mock)
  },
  setDefaultPolicyVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'setDefaultPolicyVersion', 'IoT', Promise.reject(result), true, mock)
  },
  setLoggingOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'setLoggingOptions', 'IoT', Promise.resolve(result), true, mock)
  },
  setLoggingOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'setLoggingOptions', 'IoT', Promise.resolve(result), false, mock)
  },
  setLoggingOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'setLoggingOptions', 'IoT', Promise.reject(result), true, mock)
  },
  setV2LoggingLevel: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'setV2LoggingLevel', 'IoT', Promise.resolve(result), true, mock)
  },
  setV2LoggingLevelAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'setV2LoggingLevel', 'IoT', Promise.resolve(result), false, mock)
  },
  setV2LoggingLevelThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'setV2LoggingLevel', 'IoT', Promise.reject(result), true, mock)
  },
  setV2LoggingOptions: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'setV2LoggingOptions', 'IoT', Promise.resolve(result), true, mock)
  },
  setV2LoggingOptionsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'setV2LoggingOptions', 'IoT', Promise.resolve(result), false, mock)
  },
  setV2LoggingOptionsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'setV2LoggingOptions', 'IoT', Promise.reject(result), true, mock)
  },
  startAuditMitigationActionsTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'startAuditMitigationActionsTask', 'IoT', Promise.resolve(result), true, mock)
  },
  startAuditMitigationActionsTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'startAuditMitigationActionsTask', 'IoT', Promise.resolve(result), false, mock)
  },
  startAuditMitigationActionsTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'startAuditMitigationActionsTask', 'IoT', Promise.reject(result), true, mock)
  },
  startDetectMitigationActionsTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'startDetectMitigationActionsTask', 'IoT', Promise.resolve(result), true, mock)
  },
  startDetectMitigationActionsTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'startDetectMitigationActionsTask', 'IoT', Promise.resolve(result), false, mock)
  },
  startDetectMitigationActionsTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'startDetectMitigationActionsTask', 'IoT', Promise.reject(result), true, mock)
  },
  startOnDemandAuditTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'startOnDemandAuditTask', 'IoT', Promise.resolve(result), true, mock)
  },
  startOnDemandAuditTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'startOnDemandAuditTask', 'IoT', Promise.resolve(result), false, mock)
  },
  startOnDemandAuditTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'startOnDemandAuditTask', 'IoT', Promise.reject(result), true, mock)
  },
  startThingRegistrationTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'startThingRegistrationTask', 'IoT', Promise.resolve(result), true, mock)
  },
  startThingRegistrationTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'startThingRegistrationTask', 'IoT', Promise.resolve(result), false, mock)
  },
  startThingRegistrationTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'startThingRegistrationTask', 'IoT', Promise.reject(result), true, mock)
  },
  stopThingRegistrationTask: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'stopThingRegistrationTask', 'IoT', Promise.resolve(result), true, mock)
  },
  stopThingRegistrationTaskAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'stopThingRegistrationTask', 'IoT', Promise.resolve(result), false, mock)
  },
  stopThingRegistrationTaskThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'stopThingRegistrationTask', 'IoT', Promise.reject(result), true, mock)
  },
  tagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'tagResource', 'IoT', Promise.resolve(result), true, mock)
  },
  tagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'tagResource', 'IoT', Promise.resolve(result), false, mock)
  },
  tagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'tagResource', 'IoT', Promise.reject(result), true, mock)
  },
  testAuthorization: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'testAuthorization', 'IoT', Promise.resolve(result), true, mock)
  },
  testAuthorizationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'testAuthorization', 'IoT', Promise.resolve(result), false, mock)
  },
  testAuthorizationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'testAuthorization', 'IoT', Promise.reject(result), true, mock)
  },
  testInvokeAuthorizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'testInvokeAuthorizer', 'IoT', Promise.resolve(result), true, mock)
  },
  testInvokeAuthorizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'testInvokeAuthorizer', 'IoT', Promise.resolve(result), false, mock)
  },
  testInvokeAuthorizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'testInvokeAuthorizer', 'IoT', Promise.reject(result), true, mock)
  },
  transferCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'transferCertificate', 'IoT', Promise.resolve(result), true, mock)
  },
  transferCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'transferCertificate', 'IoT', Promise.resolve(result), false, mock)
  },
  transferCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'transferCertificate', 'IoT', Promise.reject(result), true, mock)
  },
  untagResource: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'untagResource', 'IoT', Promise.resolve(result), true, mock)
  },
  untagResourceAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'untagResource', 'IoT', Promise.resolve(result), false, mock)
  },
  untagResourceThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'untagResource', 'IoT', Promise.reject(result), true, mock)
  },
  updateAccountAuditConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateAccountAuditConfiguration', 'IoT', Promise.resolve(result), true, mock)
  },
  updateAccountAuditConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateAccountAuditConfiguration', 'IoT', Promise.resolve(result), false, mock)
  },
  updateAccountAuditConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateAccountAuditConfiguration', 'IoT', Promise.reject(result), true, mock)
  },
  updateAuditSuppression: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateAuditSuppression', 'IoT', Promise.resolve(result), true, mock)
  },
  updateAuditSuppressionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateAuditSuppression', 'IoT', Promise.resolve(result), false, mock)
  },
  updateAuditSuppressionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateAuditSuppression', 'IoT', Promise.reject(result), true, mock)
  },
  updateAuthorizer: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateAuthorizer', 'IoT', Promise.resolve(result), true, mock)
  },
  updateAuthorizerAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateAuthorizer', 'IoT', Promise.resolve(result), false, mock)
  },
  updateAuthorizerThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateAuthorizer', 'IoT', Promise.reject(result), true, mock)
  },
  updateBillingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateBillingGroup', 'IoT', Promise.resolve(result), true, mock)
  },
  updateBillingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateBillingGroup', 'IoT', Promise.resolve(result), false, mock)
  },
  updateBillingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateBillingGroup', 'IoT', Promise.reject(result), true, mock)
  },
  updateCACertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateCACertificate', 'IoT', Promise.resolve(result), true, mock)
  },
  updateCACertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateCACertificate', 'IoT', Promise.resolve(result), false, mock)
  },
  updateCACertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateCACertificate', 'IoT', Promise.reject(result), true, mock)
  },
  updateCertificate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateCertificate', 'IoT', Promise.resolve(result), true, mock)
  },
  updateCertificateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateCertificate', 'IoT', Promise.resolve(result), false, mock)
  },
  updateCertificateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateCertificate', 'IoT', Promise.reject(result), true, mock)
  },
  updateCertificateProvider: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateCertificateProvider', 'IoT', Promise.resolve(result), true, mock)
  },
  updateCertificateProviderAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateCertificateProvider', 'IoT', Promise.resolve(result), false, mock)
  },
  updateCertificateProviderThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateCertificateProvider', 'IoT', Promise.reject(result), true, mock)
  },
  updateCustomMetric: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateCustomMetric', 'IoT', Promise.resolve(result), true, mock)
  },
  updateCustomMetricAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateCustomMetric', 'IoT', Promise.resolve(result), false, mock)
  },
  updateCustomMetricThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateCustomMetric', 'IoT', Promise.reject(result), true, mock)
  },
  updateDimension: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateDimension', 'IoT', Promise.resolve(result), true, mock)
  },
  updateDimensionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateDimension', 'IoT', Promise.resolve(result), false, mock)
  },
  updateDimensionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateDimension', 'IoT', Promise.reject(result), true, mock)
  },
  updateDomainConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateDomainConfiguration', 'IoT', Promise.resolve(result), true, mock)
  },
  updateDomainConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateDomainConfiguration', 'IoT', Promise.resolve(result), false, mock)
  },
  updateDomainConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateDomainConfiguration', 'IoT', Promise.reject(result), true, mock)
  },
  updateDynamicThingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateDynamicThingGroup', 'IoT', Promise.resolve(result), true, mock)
  },
  updateDynamicThingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateDynamicThingGroup', 'IoT', Promise.resolve(result), false, mock)
  },
  updateDynamicThingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateDynamicThingGroup', 'IoT', Promise.reject(result), true, mock)
  },
  updateEventConfigurations: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateEventConfigurations', 'IoT', Promise.resolve(result), true, mock)
  },
  updateEventConfigurationsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateEventConfigurations', 'IoT', Promise.resolve(result), false, mock)
  },
  updateEventConfigurationsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateEventConfigurations', 'IoT', Promise.reject(result), true, mock)
  },
  updateFleetMetric: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateFleetMetric', 'IoT', Promise.resolve(result), true, mock)
  },
  updateFleetMetricAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateFleetMetric', 'IoT', Promise.resolve(result), false, mock)
  },
  updateFleetMetricThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateFleetMetric', 'IoT', Promise.reject(result), true, mock)
  },
  updateIndexingConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateIndexingConfiguration', 'IoT', Promise.resolve(result), true, mock)
  },
  updateIndexingConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateIndexingConfiguration', 'IoT', Promise.resolve(result), false, mock)
  },
  updateIndexingConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateIndexingConfiguration', 'IoT', Promise.reject(result), true, mock)
  },
  updateJob: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateJob', 'IoT', Promise.resolve(result), true, mock)
  },
  updateJobAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateJob', 'IoT', Promise.resolve(result), false, mock)
  },
  updateJobThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateJob', 'IoT', Promise.reject(result), true, mock)
  },
  updateMitigationAction: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateMitigationAction', 'IoT', Promise.resolve(result), true, mock)
  },
  updateMitigationActionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateMitigationAction', 'IoT', Promise.resolve(result), false, mock)
  },
  updateMitigationActionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateMitigationAction', 'IoT', Promise.reject(result), true, mock)
  },
  updatePackage: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updatePackage', 'IoT', Promise.resolve(result), true, mock)
  },
  updatePackageAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updatePackage', 'IoT', Promise.resolve(result), false, mock)
  },
  updatePackageThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updatePackage', 'IoT', Promise.reject(result), true, mock)
  },
  updatePackageConfiguration: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updatePackageConfiguration', 'IoT', Promise.resolve(result), true, mock)
  },
  updatePackageConfigurationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updatePackageConfiguration', 'IoT', Promise.resolve(result), false, mock)
  },
  updatePackageConfigurationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updatePackageConfiguration', 'IoT', Promise.reject(result), true, mock)
  },
  updatePackageVersion: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updatePackageVersion', 'IoT', Promise.resolve(result), true, mock)
  },
  updatePackageVersionAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updatePackageVersion', 'IoT', Promise.resolve(result), false, mock)
  },
  updatePackageVersionThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updatePackageVersion', 'IoT', Promise.reject(result), true, mock)
  },
  updateProvisioningTemplate: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateProvisioningTemplate', 'IoT', Promise.resolve(result), true, mock)
  },
  updateProvisioningTemplateAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateProvisioningTemplate', 'IoT', Promise.resolve(result), false, mock)
  },
  updateProvisioningTemplateThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateProvisioningTemplate', 'IoT', Promise.reject(result), true, mock)
  },
  updateRoleAlias: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateRoleAlias', 'IoT', Promise.resolve(result), true, mock)
  },
  updateRoleAliasAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateRoleAlias', 'IoT', Promise.resolve(result), false, mock)
  },
  updateRoleAliasThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateRoleAlias', 'IoT', Promise.reject(result), true, mock)
  },
  updateScheduledAudit: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateScheduledAudit', 'IoT', Promise.resolve(result), true, mock)
  },
  updateScheduledAuditAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateScheduledAudit', 'IoT', Promise.resolve(result), false, mock)
  },
  updateScheduledAuditThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateScheduledAudit', 'IoT', Promise.reject(result), true, mock)
  },
  updateSecurityProfile: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateSecurityProfile', 'IoT', Promise.resolve(result), true, mock)
  },
  updateSecurityProfileAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateSecurityProfile', 'IoT', Promise.resolve(result), false, mock)
  },
  updateSecurityProfileThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateSecurityProfile', 'IoT', Promise.reject(result), true, mock)
  },
  updateStream: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateStream', 'IoT', Promise.resolve(result), true, mock)
  },
  updateStreamAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateStream', 'IoT', Promise.resolve(result), false, mock)
  },
  updateStreamThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateStream', 'IoT', Promise.reject(result), true, mock)
  },
  updateThing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateThing', 'IoT', Promise.resolve(result), true, mock)
  },
  updateThingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateThing', 'IoT', Promise.resolve(result), false, mock)
  },
  updateThingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateThing', 'IoT', Promise.reject(result), true, mock)
  },
  updateThingGroup: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateThingGroup', 'IoT', Promise.resolve(result), true, mock)
  },
  updateThingGroupAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateThingGroup', 'IoT', Promise.resolve(result), false, mock)
  },
  updateThingGroupThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateThingGroup', 'IoT', Promise.reject(result), true, mock)
  },
  updateThingGroupsForThing: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateThingGroupsForThing', 'IoT', Promise.resolve(result), true, mock)
  },
  updateThingGroupsForThingAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateThingGroupsForThing', 'IoT', Promise.resolve(result), false, mock)
  },
  updateThingGroupsForThingThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateThingGroupsForThing', 'IoT', Promise.reject(result), true, mock)
  },
  updateTopicRuleDestination: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateTopicRuleDestination', 'IoT', Promise.resolve(result), true, mock)
  },
  updateTopicRuleDestinationAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateTopicRuleDestination', 'IoT', Promise.resolve(result), false, mock)
  },
  updateTopicRuleDestinationThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'updateTopicRuleDestination', 'IoT', Promise.reject(result), true, mock)
  },
  validateSecurityProfileBehaviors: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'validateSecurityProfileBehaviors', 'IoT', Promise.resolve(result), true, mock)
  },
  validateSecurityProfileBehaviorsAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'validateSecurityProfileBehaviors', 'IoT', Promise.resolve(result), false, mock)
  },
  validateSecurityProfileBehaviorsThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'validateSecurityProfileBehaviors', 'IoT', Promise.reject(result), true, mock)
  },
  send: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'send', 'IoTClient', Promise.resolve(result), true, mock)
  },
  sendAll: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'send', 'IoTClient', Promise.resolve(result), false, mock)
  },
  sendThrow: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {
    return attachMock('@aws-sdk/client-iot', 'send', 'IoTClient', Promise.reject(result), true, mock)
  }
}
